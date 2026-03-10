import homeActions from "../../pages/actions/HomePageActions"

describe("Homepage UI", () => {

  it("validate homepage", () => {

    homeActions.visitSite()

    homeActions.validateCarousel()

    cy.contains("Samsung galaxy s6").should("be.visible")

    cy.contains("Nokia lumia 1520").should("be.visible")

    cy.contains("Nexus 6").should("be.visible")

  })

})