import {
  COUNT_CART,
  ADD_CART
} from './mutations_types'

export default {
  [COUNT_CART](state, payload) {
      payload.count++
    },
  [ADD_CART](state, payload) {
    state.cartList.push(payload)
  }
}
