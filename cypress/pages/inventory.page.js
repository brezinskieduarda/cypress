class InventoryPage {
    openMenu() {
        cy.get('#react-burger-menu-btn').click()
    }
    logout() {
        this.openMenu()
        cy.get('#logout_sidebar_link').click()
    }

    addBackpackToCart() {
        cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    }

    goToCart() {
        cy.get('.shopping_cart_link').click()
    }
}
export default InventoryPage