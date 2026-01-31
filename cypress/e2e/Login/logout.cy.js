describe('Logout - SauceDemo', () => {
    let users

    before(() => {
        cy.fixture('users').then((u) => (users = u))
    })

    beforeEach(() => {
        cy.login(users.standard.username, users.standard.password)
    })

    it('Deve realizar logout com sucesso', () => {
        cy.logout()

        cy.get('[data-test="login-button"]').should('be.visible')
        cy.get('[data-test="username"]').should('be.visible')
        cy.get('[data-test="password"]').should('be.visible')
    })
})
