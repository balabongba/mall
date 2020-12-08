export default {
  cartLength(state) {
    return state.cartList.length
  },
  cartList(state) {
    return state.cartList
  },
  paymentLength(state) {
    return state.payment.length
  },
  paymentList(state) {
    return state.paymentList
  },
  dispatchLength(state) {
    return state.dispatch.length
  },
  dispatchList(state) {
    return state.dispatchList
  },
  receiveLength(state) {
    return state.receive.length
  },
  receiveList(state) {
    return state.receiveList
  },
  commentsLength(state) {
    return state.comments.length
  },
  commentsList(state) {
    return state.commentsList
  },
  points(state) {
    return state.points
  },
  newsLength(state) {
    return state.news.length
  },
  newsList(state) {
    return state.newsList
  },
  historyLength(state) {
    return state.history.length
  },
  historyList(state) {
    return state.historyList
  }
}
