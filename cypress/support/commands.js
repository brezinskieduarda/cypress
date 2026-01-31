// --------------------
// AUTH
// --------------------
Cypress.Commands.add('visitLogin', () => {
    cy.visit('/')
})

Cypress.Commands.add('submitLogin', (username, password) => {
    cy.visitLogin()
    cy.get('[data-test="username"]').clear().type(username)
    cy.get('[data-test="password"]').clear().type(password, { log: false })
    cy.get('[data-test="login-button"]').click()
})

Cypress.Commands.add('login', (username, password) => {
    cy.submitLogin(username, password)
    cy.url().should('include', '/inventory.html')
})

Cypress.Commands.add('logout', () => {
    cy.get('#react-burger-menu-btn').should('be.visible').click()
    cy.get('#logout_sidebar_link').should('be.visible').click()
    cy.shouldBeOnLoginPage()
})

Cypress.Commands.add('shouldBeOnLoginPage', () => {
    cy.url().should('eq', `${Cypress.config('baseUrl')}/`)
    cy.get('[data-test="login-button"]').should('be.visible')
    cy.get('[data-test="username"]').should('be.visible')
    cy.get('[data-test="password"]').should('be.visible')
})

// --------------------
// CART / INVENTORY
// --------------------
Cypress.Commands.add('addItemToCart', (itemSlug) => {
    cy.get(`[data-test="add-to-cart-${itemSlug}"]`).click()
})

Cypress.Commands.add('goToCart', () => {
    cy.get('[data-test="shopping-cart-link"]').click()
    cy.url().should('include', '/cart.html')
})

Cypress.Commands.add('removeItemFromCart', (itemSlug) => {
    cy.get(`[data-test="remove-${itemSlug}"]`).click()
})

Cypress.Commands.add('shouldHaveCartItems', (quantity) => {
    cy.get('.cart_item').should('have.length', quantity)
})

// --------------------
// CHECKOUT
// --------------------
Cypress.Commands.add('startCheckout', () => {
    cy.get('[data-test="checkout"]').click()
    cy.url().should('include', '/checkout-step-one.html')
})

Cypress.Commands.add('fillCheckoutInfo', ({ firstName, lastName, postalCode }) => {
    cy.get('[data-test="firstName"]').clear().type(firstName)
    cy.get('[data-test="lastName"]').clear().type(lastName)
    cy.get('[data-test="postalCode"]').clear().type(postalCode)
})

Cypress.Commands.add('continueCheckout', () => {
    cy.get('[data-test="continue"]').click()
    cy.url().should('include', '/checkout-step-two.html')
})

Cypress.Commands.add('finishCheckout', () => {
    cy.get('[data-test="finish"]').click()
    cy.url().should('include', '/checkout-complete.html')
})

Cypress.Commands.add('shouldSeeCheckoutSuccess', () => {
    cy.get('[data-test="complete-header"]').should('contain', 'Thank you for your order')
})
