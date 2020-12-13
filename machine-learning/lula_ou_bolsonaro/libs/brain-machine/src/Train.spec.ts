import { Train } from './Train'
const train = new Train()

describe('TRAINING:', () => {
  it('should return lula as winner', async () => {
    const LULA_QUOTE = 'vamos dar comida aos pobres'
    const result = train.execute(LULA_QUOTE)
    console.log(result)
  })
})
