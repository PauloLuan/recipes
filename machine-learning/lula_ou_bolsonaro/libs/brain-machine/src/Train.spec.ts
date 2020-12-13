import { Train } from './Train'
const train = new Train()

describe('TRAINING:', () => {
  it('should return all quotes from the shared lib data', async () => {
    expect(train.getAllQuotes()).toBe('teste')
  })
})
