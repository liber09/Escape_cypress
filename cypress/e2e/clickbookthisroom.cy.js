describe('Click book this room button', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/challenges.html')

    cy.get('#filterButton').click()
  })
})