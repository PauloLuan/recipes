import { Mindingo } from '@src/example/Mindingo'

describe('it should be ok', () => {
  it('should create a mindingo class', async () => {
    const mindingo1 = new Mindingo('José Nascimento', 52, 'Corotinho Blueberry')
    expect(mindingo1.getFavoriteDrink()).toEqual(
      'Favorite Drink: Corotinho Blueberry'
    )
  })
})
