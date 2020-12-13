import { Train } from './Train'
const train = new Train()

describe('TRAINING:', () => {
  it('should return all quotes from the shared lib data', async () => {
    const allQuotes = train.getAllQuotes()
    expect(allQuotes.biroliro.data).toHaveLength(101)
    expect(allQuotes.luladrao.data).toHaveLength(38)
  })
})
