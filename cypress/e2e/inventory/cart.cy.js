import LoginPage from '../../pages/login.page'
import InventoryPage from '../../pages/inventory.page'
import CartPage from '../../pages/cart.page'

describe('Carrinho - SauceDemo', () => {

    const loginPage = new LoginPage()
    const inventoryPage = new InventoryPage()
    const cartPage = new CartPage()

    beforeEach(() => {
        cy.fixture('users').then((users) => {
            loginPage.visit()
            loginPage.login(
                users.standard.username,
                users.standard.password
            )
        })
    })

    it('Deve adicionar produto ao carrinho', () => {
        inventoryPage.addBackpackToCart()
        inventoryPage.goToCart()

        cartPage.getCartItem().should('have.length', 1)
        cartPage.checkoutButton().should('be.visible')
    })

    it('Deve remover produto do carrinho', () => {
        inventoryPage.addBackpackToCart()
        inventoryPage.goToCart()

        cartPage.removeBackpack()
        cartPage.getCartItem().should('have.length', 0)
    })
})
