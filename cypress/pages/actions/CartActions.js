import header from "../locators/HeaderLocators"
import cart from "../locators/CartLocators"

class CartActions {

  openCart() {

    cy.get(header.cart).click()

  }

  validateProduct(product) {

    cy.contains(cart.cartTable, product)
      .should("be.visible")

  }

}

export default new CartActions()