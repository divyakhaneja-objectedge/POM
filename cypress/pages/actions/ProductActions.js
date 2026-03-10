import locators from "../locators/ProductLocators"

class ProductActions {

  validateProductName(product) {

    cy.get(locators.productName)
      .should("contain", product)

  }

  capturePrice() {

    cy.get(locators.productPrice)
      .invoke("text")
      .as("pdpPrice")

  }

  addToCart() {

    cy.get(locators.addToCart).click()

  }

}

export default new ProductActions()