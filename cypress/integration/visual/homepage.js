const WAITING_TIME = 5000
let scrollToBottom = require('scroll-to-bottomjs')

describe(`Homepage`, () => {
  it('Should take a snapshot of the homepage', () => {
    cy.visit('/')
    cy.wait(WAITING_TIME)
    // Scroll the entire page to load lazy images
    cy.window().then(cyWindow =>
      scrollToBottom({ remoteWindow: cyWindow, frequency: 80, timing: 10 })
    )
    cy.wait(WAITING_TIME)
    cy.get("img[alt='Developer']").should('be.visible')
    cy.get('.meilisearch-logo-footer').should('be.visible')
    cy.percySnapshot('home-hero-responsive')
  })
})
