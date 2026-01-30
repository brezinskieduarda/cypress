class CartPage {

    getCartItem() {
        return cy.get('.cart_item')
    }

    removeBackpack() {
        cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    }

    checkoutButton() {
        return cy.get('[data-test="checkout"]')
    }
    goToCheckout() {
        cy.get('[data-test="checkout"]').click()
    }
}

export default CartPage
