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


    // ADD ALL PRODUCTS
    categories.forEach(item => {
      cy.visit("/")


      flows.addProductFlow(item.category, item.product)

    })

    // GO TO CART
    //cy.get('#cartur').click()
    cy.url().should("include", "cart.html")
    // OPEN ORDER MODAL
    cy.contains("Place Order").click()

    // FILL ORDER FORM
    orderActions.fillOrderForm(orderData)

    // PURCHASE
    orderActions.purchase()

  })

})