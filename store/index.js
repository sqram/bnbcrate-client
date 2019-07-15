import user from './modules/user'
import cart from './modules/cart'
import products from './modules/products'
import dialogs from './modules/dialogs'
import checkout from './modules/checkout'
import errors from './modules/errors'

const store = {
  strict: true,
  modules: {
    user,
    cart,
    products,
    dialogs,
    checkout,
    errors
  },  
}

export default store