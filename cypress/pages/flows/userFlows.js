import loginActions from "../actions/LoginActions"
import homeActions from "../actions/HomePageActions"
import productActions from "../actions/ProductActions"
import cartActions from "../actions/CartActions"

class UserFlows {

  login(username,password){

    loginActions.login(username,password)

  }

  addProductFlow(category,product){

    homeActions.selectCategory(category)

    homeActions.selectProduct(product)

    productActions.validateProductName(product)

    productActions.capturePrice()

    productActions.addToCart()

    cartActions.openCart()

    cartActions.validateProduct(product)

  }

}

export default new UserFlows()