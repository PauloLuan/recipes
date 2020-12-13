const { name } = require('./package.json')

module.exports = {
  displayName: name,
  name,
  preset: 'ts-jest',
  transform: {
    '^.+\\.(js|ts|tsx)?$': 'ts-jest',
  },
  testRegex: '(/__tests__/.*|(\\.|/)(test|spec))\\.(js?|ts?)$',
  moduleFileExtensions: ['ts', 'js'],
}
