import * as brain from 'brain.js'
import * as DataLake from '@vuejs-monorepo/shared/data'
import * as path from 'path'
import * as fs from 'fs'

const TRAINED_FILE_PATH = path.join(__dirname, '/data/trained-net.json')

class Train {
  constructor (private _net) {
    this._net = new brain.NeuralNetwork()
    this._loadPreviousTrainedNet()
  }

  _loadPreviousTrainedNet () {
    const HAS_PREVIOUS_FILE = fs.existsSync(TRAINED_FILE_PATH)
    if (HAS_PREVIOUS_FILE) {
      const fileContent = fs.readFileSync(TRAINED_FILE_PATH).toString()
      const previousTrainedNet = JSON.parse(fileContent)
      this._net.fromJSON(previousTrainedNet)
      return
    }

    this._warmUp()
    const json = this._net.toJSON()
    fs.writeFileSync(TRAINED_FILE_PATH, json)
  }

  execute (input) {
    const encodedInput = this._encode(input)
    let results = this._net.run(encodedInput)
    console.log('==============')
    console.log('results :>> ', JSON.stringify(results))
    console.log('==============')
    const HAS_MORE_BIROLIROS_RESULT = results.bolsonaro > results.lula

    const result = HAS_MORE_BIROLIROS_RESULT
      ? {
          winner: 'Bolsonaro',
          certainty: Math.floor(results.bolsonaro * 100)
        }
      : {
          winner: 'Lula',
          certainty: Math.floor(results.lula * 100)
        }

    return result
  }

  _warmUp () {
    const { bolsonaro, lula } = this._getAllQuotes()
    this._trainData([...bolsonaro, ...lula])
  }

  _getAllQuotes () {
    const bolsonaro = DataLake.Bolsonaro.data.map(({ quote }) =>
      this._createInputAndOutputForQuote(quote, 'bolsonaro')
    )

    const lula = DataLake.Lula.data.map(({ quote }) =>
      this._createInputAndOutputForQuote(quote, 'lula')
    )

    return { bolsonaro, lula }
  }

  /**
   So if we want out neural network to accept tweets (i.e. strings) as an input, we’ll need to run them through an similar function (called encode() below) that will turn every character in a string into a value between 0 and 1 and store it in an array. Fortunately, Javascript has a native method for converting any character into ASCII code called charCodeAt(). So we’ll use that and divide the outcome by the max value for Extended ASCII characters: 255 (we’re using extended ASCII just in case we encounter any fringe cases like é or ½) which will ensure that we get a value <1.
   */
  _encode (input) {
    return input.split('').map(str => str.charCodeAt(0) / 256)
  }

  _createInputAndOutputForQuote (quote, author) {
    return { input: this._encode(quote), output: { [author]: 1 } }
  }

  _trainData (data) {
    this._net.train(data)
    this._net = this._net.toFunction()
  }
}

export { Train }
