import { Train } from './Train'
const train = new Train()

describe('TRAINING:', () => {
  it('should return lula as winner', async () => {
    const LULA_RESULT = train.execute('sou belo e de boa aparência')
    console.log({LULA_RESULT})

    const BIROLIRO_RESULT = train.execute('tem que armar o cidadão de bem ta ok?')
    console.log({BIROLIRO_RESULT})
  })
})
