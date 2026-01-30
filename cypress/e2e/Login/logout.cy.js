import LoginPage from '../../pages/login.page'
import InventoryPage from '../../pages/inventory.page'

describe('Logout - SauceDemo', () => {
    const loginPage = new LoginPage()
    const inventoryPage = new InventoryPage()

    beforeEach(() => {
        cy.fixture('users').then((users) => {
            loginPage.visit()
            loginPage.login(
                users.standard.username,
                users.standard.password
            )
        })
    })

    it('Deve realizar logout com sucesso', () => {
        inventoryPage.logout()
        cy.url().should('include', 'saucedemo.com')
        cy.get('[data-test="login-button"]').should('be.visible')
        cy.get('[data-test="username"]').should('be.visible')
        cy.get('[data-test="password"]').should('be.visible')
    })
})
