describe('Check ifwe have a challengeImage on the site', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:5500/')

    cy.get('img.challenge-image')
  })
})