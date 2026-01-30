import LoginPage from '../../pages/login.page'

describe('Login - SauceDemo', () => {
    const loginPage = new LoginPage()

    beforeEach(() => {
        loginPage.visit()
    })

    it('Deve logar com usuário válido', () => {
        cy.fixture('users').then((users) => {
            loginPage.login(
                users.standard.username,
                users.standard.password
            )
        })

        cy.url().should('include', '/inventory.html')
    })

    it('Deve exibir erro para usuário bloqueado', () => {
        cy.fixture('users').then((users) => {
            loginPage.login(
                users.locked.username,
                users.locked.password
            )
        })

        cy.get('[data-test="error"]')
            .should('contain', 'Sorry')
    })
})
