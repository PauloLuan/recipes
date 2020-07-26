export class Mindingo {
  _name: string
  _age: number
  _favoriteDrink: string

  constructor (name: string, age: number, favoriteDrink: string) {
    this._name = name
    this._age = age
    this._favoriteDrink = favoriteDrink
  }

  greet () {
    return 'Hello, ' + this._name
  }

  getFavoriteDrink () {
    return `Favorite Drink: ${this._favoriteDrink}`
  }
}
