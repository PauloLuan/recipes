const { capitalize, camelCase } = require('lodash')

module.exports = (plop) => {
  plop.setHelper('capitalize', (text) => {
    return capitalize(camelCase(text))
  })

  plop.setGenerator('package', {
    description: 'Create a package',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter package name:'
      },
      {
        type: 'input',
        name: 'description',
        message: 'The description of this package:'
      }
    ],
    actions: [
      {
        type: 'addMany',
        templateFiles: 'package/**',
        destination: `../packages/{{dashCase componentName}}`,
        base: 'package/',
        abortOnFail: true
      }
    ]
  })

  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'componentName',
        message: 'Enter component name:'
      },
      {
        type: 'input',
        name: 'description',
        message: 'The description of this component:'
      }
    ],
    actions: [
      {
        type: 'addMany',
        templateFiles: 'component/**',
        destination: `../packages/shared-ui/src/components/{{dashCase componentName}}`,
        base: 'component/',
        abortOnFail: true
      }
    ]
  })
}
