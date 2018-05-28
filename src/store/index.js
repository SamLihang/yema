import Vue from 'vue'
import Vuex from 'vuex'
import popup from './modules/popup'
import user from './modules/user'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
    openid: '',
}

const actions = {

}

const mutations = {
    setOpenId (state, payload) {
        payload && (state.openid = payload)
    }
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    modules: {
        popup,
        user
    },
    strict: debug,
})