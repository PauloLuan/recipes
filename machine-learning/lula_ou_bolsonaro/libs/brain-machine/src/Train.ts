import * as brain from 'brain.js'
import * as DataLake from '@vuejs-monorepo/shared/data'

class Train {
  private _trainedNet

  constructor (private _net) {
    _net = new brain.NeuralNetwork()
  }

  getAllQuotes () {
    const bolsonaro = DataLake.Bolsonaro.data.map(({ quote }) =>
      this._createInputAndOutputForQuote(quote, 'bolsonaro')
    )

    const lula = DataLake.Lula.data.map(({ quote }) =>
      this._createInputAndOutputForQuote(quote, 'lula')
    )

    return { bolsonaro, lula }
  }

  _createInputAndOutputForQuote (quote, author) {
    return { input: quote, output: { [author]: 1 } }
  }

  _trainData (data) {
    this._net.train(data)
    this._trainedNet = this._net.toFunction()
  }
}

export { Train }
