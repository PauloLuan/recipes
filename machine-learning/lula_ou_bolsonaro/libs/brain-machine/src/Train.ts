import * as brain from 'brain.js'

class Train {
  constructor (private _net) {
    _net = new brain.NeuralNetwork()
  }

  getAllQuotes () {
    return 'teste'
  }

  trainData (data) {
    return 'teste'
  }
}

export { Train }
