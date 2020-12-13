import * as brain from 'brain.js'
import { Bolsonaro, Lula } from '@vuejs-monorepo/shared/data'

class Train {
  constructor (private _net) {
    _net = new brain.NeuralNetwork()
  }

  getAllQuotes () {
    return {
      biroliro: Bolsonaro,
      luladrao: Lula
    }
  }

  trainData (data) {
    return 'teste'
  }
}

export { Train }
