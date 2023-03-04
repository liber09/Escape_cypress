describe('Check if challengespage is reachable', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/challenges.html')
  })
})