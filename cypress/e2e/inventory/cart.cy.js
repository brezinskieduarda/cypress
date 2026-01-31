describe('Carrinho - SauceDemo', () => {
    let users

    before(() => {
        cy.fixture('users').then((u) => (users = u))
    })

    beforeEach(() => {
        cy.login(users.standard.username, users.standard.password)
    })

    it('Deve adicionar produto ao carrinho', () => {
        cy.addItemToCart('sauce-labs-backpack')
        cy.goToCart()

        cy.shouldHaveCartItems(1)
        cy.get('[data-test="checkout"]').should('be.visible')
    })

    it('Deve remover produto do carrinho', () => {
        cy.addItemToCart('sauce-labs-backpack')
        cy.goToCart()

        cy.removeItemFromCart('sauce-labs-backpack')
        cy.shouldHaveCartItems(0)
    })
})
