describe('Checkout - SauceDemo', () => {
    let users
    let checkout

    before(() => {
        cy.fixture('users').then((u) => (users = u))
        cy.fixture('checkout').then((c) => (checkout = c))
    })

    it('Deve finalizar compra com sucesso', () => {
        cy.login(users.standard.username, users.standard.password)
        cy.addItemToCart('sauce-labs-backpack')
        cy.goToCart()
        cy.startCheckout()
        cy.fillCheckoutInfo(checkout.validUser)
        cy.continueCheckout()
        cy.finishCheckout()
        cy.shouldSeeCheckoutSuccess()
    })
})
describe('Checkout - validações', () => {
    let users

    before(() => {
        cy.fixture('users').then((u) => (users = u))
    })

    beforeEach(() => {
        cy.login(users.standard.username, users.standard.password)
        cy.addItemToCart('sauce-labs-backpack')
        cy.goToCart()
        cy.startCheckout()
    })

    it('Deve bloquear checkout sem postal code', () => {
        cy.get('[data-test="firstName"]').type('Eduarda')
        cy.get('[data-test="lastName"]').type('Brezinski')
        cy.get('[data-test="continue"]').click()

        cy.get('[data-test="error"]').should('be.visible')
    })
})
