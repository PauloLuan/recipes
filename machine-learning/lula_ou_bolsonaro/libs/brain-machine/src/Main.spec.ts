import { Main } from './Main'
const main = new Main()

describe('Teste 123', () => {
  it('basico', async () => {
    expect(main.execute()).toBe('teste')
  })
})
