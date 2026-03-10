import locators from "../locators/HomePageLocators"

class HomePageActions {

  visitSite() {

    cy.visit("/")

  }

  selectCategory(category) {

    cy.contains(locators.category, category).click()

  }

  selectProduct(product) {

    cy.contains(locators.productTitle, product).click()

  }

  validateCarousel() {

    cy.get(locators.carousel).should("be.visible")

    cy.get(locators.carouselNext).click()

  }

}

export default new HomePageActions()