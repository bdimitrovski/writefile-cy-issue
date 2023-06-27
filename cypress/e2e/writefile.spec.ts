import Example from 'support/classes/example'

const e = new Example()

describe('issue with cy.writeFile()', () => {
  it('fails', () => {
    cy.visit('https://example.cypress.io')

    e.generateGroupOrdersDataFile(7, '572073651275254')
  })
})