import header from "../locators/HeaderLocators"
import login from "../locators/LoginLocators"

class LoginActions {

  login(username, password) {

    cy.get(header.login).click()

    cy.get(login.username).type(username)

    cy.get(login.password).type(password)

    cy.get(login.loginBtn).click()

  }

  logout() {

    cy.get(header.logout).click()

  }

}

export default new LoginActions()