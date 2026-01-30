class CheckoutPage {

    fillFirstName(firstName) {
        cy.get('[data-test="firstName"]').type(firstName)
    }

    fillLastName(lastName) {
        cy.get('[data-test="lastName"]').type(lastName)
    }

    fillPostalCode(postalCode) {
        cy.get('[data-test="postalCode"]').type(postalCode)
    }

    continue() {
        cy.get('[data-test="continue"]').click()
    }

    finish() {
        cy.get('[data-test="finish"]').click()
    }

    successMessage() {
        return cy.get('.complete-header')
    }
}

export default CheckoutPage
