import { Train } from './Train'
const train = new Train()

describe('TRAINING:', () => {
  it('should return lula as winner', async () => {
    const LULA_QUOTE = 'sou belo e de boa aparência'
    const result = train.execute(LULA_QUOTE)
    console.log(result)
  })
})
