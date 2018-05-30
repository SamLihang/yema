// initial state

const state = {
    energy: localStorage.energy ? localStorage.energy : 0,
    nickName: localStorage.nickName,
    headImgUrl: localStorage.headImgUrl,
    weishiAccount: localStorage.weishiAccount,
    douyinAccount: localStorage.douyinAccount,
    finishTaskCount: localStorage.finishTaskCount ? localStorage.finishTaskCount : 0,
    publishTaskCount: localStorage.publishTaskCount ? localStorage.publishTaskCount : 0,
}

// mutations
const mutations = {
    setNickName (state, payload) {
        payload && (localStorage.nickName = state.energy = payload)
    },
    setHeadImg (state, payload) {
        payload && (localStorage.headImgUrl = state.headImgUrl = payload)
    },
    setWeiAccount (state, payload) {
        payload && (localStorage.weishiAccount = state.weishiAccount = payload)
    },
    setDouAccount (state, payload) {
        payload && (localStorage.douyinAccount = state.douyinAccount = payload)
    },
    setFinishTaskCount (state, payload) {
        localStorage.finishTaskCount = state.finishTaskCount = payload ? payload : 0
    },
    setPublishTaskCount (state, payload) {
        localStorage.publishTaskCount = state.publishTaskCount = payload ? payload : 0
    },
    setEnergy (state, payload) {
        localStorage.energy = state.energy = payload ? payload : 0
    }

}

// getters
const getters = {
    // checkoutStatus: state => state.checkoutStatus,

    // cartProducts: (state, getters, rootState) => {
    //     return state.added.map(({ id, quantity }) => {
    //         const product = rootState.products.all.find(product => product.id === id)
    //         return {
    //             title: product.title,
    //             price: product.price,
    //             quantity 
    //         }
    //     })
    // },

    // cartTotalPrice: (state, getters) => {
    //     return getters.cartProducts.reduce((total, product) => {
    //         return total + product.price * product.quantity
    //     }, 0)
    // }
}

// actions
const actions = {
    // checkout({ commit, state }, products) {
    //     const savedCartItems = [...state.added]
    //     commit('setCheckoutStatus', null)
    //     // empty cart
    //     commit('setCartItems', { items: [] })
    //     shop.buyProducts(
    //         products,
    //         () => commit('setCheckoutStatus', 'successful'),
    //         () => {
    //             commit('setCheckoutStatus', 'failed')
    //             // rollback to the cart saved before sending the request
    //             commit('setCartItems', { items: savedCartItems })
    //         }
    //     )
    // },

    // addProductToCart({ state, commit }, product) {
    //     commit('setCheckoutStatus', null)
    //     if (product.inventory > 0) {
    //         const cartItem = state.added.find(item => item.id === product.id)
    //         if (!cartItem) {
    //             commit('pushProductToCart', { id: product.id })
    //         } else {
    //             commit('incrementItemQuantity', cartItem)
    //         }
    //         // remove 1 item from stock
    //         commit('decrementProductInventory', { id: product.id })
    //     }
    // }
}

export default {
    state,
    getters,
    actions,
    mutations
}
