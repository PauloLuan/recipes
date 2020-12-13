import { Train } from './Train'
const train = new Train()

describe('TRAINING:', () => {
  it('should return all quotes from the shared lib data', async () => {
    const allQuotes = train.getAllQuotes()
    expect(allQuotes.bolsonaro).toHaveLength(101)
    expect(allQuotes.lula).toHaveLength(38)
  })
})
