import flows from "../../pages/flows/userFlows"
import orderActions from "../../pages/actions/OrderActions"

describe("Place Order", () => {

  let categories
  let orderData

  before(() => {

    cy.fixture("categories").then(data => categories = data)

    cy.fixture("orderData").then(data => orderData = data)

  })

  it("order all products", () => {

    cy.visit("/")

    categories.forEach(item => {

      flows.addProductFlow(item.category,item.product)

      orderActions.fillOrderForm(orderData)

      orderActions.purchase()

    })

  })

})