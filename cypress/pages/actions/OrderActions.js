import locators from "../locators/OrderLocators"

class OrderActions {

  fillOrderForm(data) {

    cy.get(locators.name).type(data.name)

    cy.get(locators.country).type(data.country)

    cy.get(locators.city).type(data.city)

    cy.get(locators.card).type(data.card)

    cy.get(locators.month).type(data.month)

    cy.get(locators.year).type(data.year)

  }

  purchase() {

    cy.get(locators.purchase).click()

  }

}

export default new OrderActions()