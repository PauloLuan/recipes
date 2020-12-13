import * as brain from 'brain.js'
import * as DataLake from '@vuejs-monorepo/shared/data'

class Train {
  private _trainedNet

  constructor (private _net) {
    _net = new brain.NeuralNetwork()
  }

  execute () {
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
    return input.split('').map(str => (str.charCodeAt(0) / 256))
  }

  _createInputAndOutputForQuote (quote, author) {
    return { input: this._encode(quote), output: { [author]: 1 } }
  }

  _trainData (data) {
    this._net.train(data)
    this._trainedNet = this._net.toFunction()
  }
}

export { Train }
