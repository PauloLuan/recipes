import { mount } from '@cypress/react'
import { Acessibility } from '../src'

const testId = 'pauloluan-acessibility-id'

it('when a <Acessibility /> is rendered, should be visible', () => {
  mount(<Acessibility />)
  const foundComponent = cy.get(`[data-testid=${testId}]`)
  foundComponent.should('be.visible')
})
