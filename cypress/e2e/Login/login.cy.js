describe('Login - SauceDemo', () => {
    let users

    before(() => {
        cy.fixture('users').then((u) => (users = u))
    })

    it('Deve logar com usuário válido', () => {
        cy.login(users.standard.username, users.standard.password)
        cy.url().should('include', '/inventory.html')
    })

    it('Deve exibir erro para usuário bloqueado', () => {
        cy.submitLogin(users.locked.username, users.locked.password)
        cy.get('[data-test="error"]')
            .should('be.visible')
            .and('contain', 'Sorry')
    })

    it('Deve exibir erro ao logar com senha incorreta', () => {
        cy.submitLogin(users.standard.username, 'senha_errada')
        cy.get('[data-test="error"]').should('be.visible')
    })
})

describe('Segurança - rotas protegidas', () => {
    it('Não deve permitir acessar inventory sem login (redirect ou 404)', () => {
        cy.visit('/inventory.html', { failOnStatusCode: false })

        // Se redirecionar pro login, valida a tela de login
        cy.url().then((url) => {
            const base = Cypress.config('baseUrl')

            if (url === `${base}/`) {
                cy.shouldBeOnLoginPage()
            } else {
                // Se retornar 404 (ou outra página de bloqueio), valida que não há conteúdo protegido
                cy.get('.inventory_list').should('not.exist')
            }
        })
    })
})
