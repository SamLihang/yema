import Vue from 'vue'
import Vuex from 'vuex'
import popup from './modules/popup'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
  
}

const actions = {

}

const mutations = {
   
}

export default new Vuex.Store({
    state,
    actions,
    mutations,
    modules: {
        popup
    },
    strict: debug,
})