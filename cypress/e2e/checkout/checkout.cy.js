import LoginPage from '../../pages/login.page'
import InventoryPage from '../../pages/inventory.page'
import CartPage from '../../pages/cart.page'
import CheckoutPage from '../../pages/checkout.page'

describe('Checkout - SauceDemo', () => {

    const loginPage = new LoginPage()
    const inventoryPage = new InventoryPage()
    const cartPage = new CartPage()
    const checkoutPage = new CheckoutPage()

    beforeEach(() => {
        cy.fixture('users').then((users) => {
            loginPage.visit()
            loginPage.login(
                users.standard.username,
                users.standard.password
            )
        })

        inventoryPage.addBackpackToCart()
        inventoryPage.goToCart()
        cartPage.checkoutButton().click()
    })

    it('Deve finalizar compra com sucesso', () => {
        cy.fixture('checkout').then((data) => {
            checkoutPage.fillFirstName(data.validUser.firstName)
            checkoutPage.fillLastName(data.validUser.lastName)
            checkoutPage.fillPostalCode(data.validUser.postalCode)
        })

        checkoutPage.continue()
        checkoutPage.finish()

        checkoutPage.successMessage()
            .should('contain', 'Thank you for your order')
    })
})
