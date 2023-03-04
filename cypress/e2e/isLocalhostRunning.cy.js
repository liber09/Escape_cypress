describe('Check if localhost is answering', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/')
  })
})