import {
  COUNT_CART,
  ADD_CART
} from './mutations_types'

export default {
  toCart(context, payload) {
    // 判断是否存在该商品
    // 普通方法
    // let oldProduc = null
    // for (let res of state.cartList) {
    //   if (res.iid === payload.iid)
    //     oldProduc = res
    // }

    // 使用数组方法之一——.find()
    let oldProduc = context.state.cartList.find(res => res.iid === payload.iid)
    // 还有很多其他数组方法可以使用

    // 添加商品
    if (oldProduc) {
      // 由于指向同一个内存地址，所以在这里将oldProduc.count加一，payload.count也会加一
      context.commit(COUNT_CART, oldProduc)
    } else {
      payload.checked = false
      payload.count = 1
      context.commit(ADD_CART, payload)
    }
  }
}
