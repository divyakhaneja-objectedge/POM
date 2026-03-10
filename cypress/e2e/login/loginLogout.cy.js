import flows from "../../pages/flows/userFlows"

describe("Login Logout", () => {

  let data

  before(() => {

    cy.fixture("loginData").then(d => data = d)

  })

  it("login and logout", () => {

    cy.visit("/")

    flows.login(data.validUser.username,data.validUser.password)

  })

})