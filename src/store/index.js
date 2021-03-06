import Vue from 'vue'
import Vuex from 'vuex'
import popup from './modules/popup'
import user from './modules/user'
Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

const state = {
    openid: localStorage.openid,
    platforms: [{name:'抖音', userName:'douyin', select:true, num: 1},{name:'微视', userName:'weishi', select: false, num: 2}]
}

const actions = {

}

const getters = {
    getPlatform: (state) => {
        for(let i of state.platforms) {
            if(i.select){
                return i.name
            }
        }
        return state.platforms[0].name
    },
    getPlatUserName: (state) => {
        for(let i of state.platforms) {
            if(i.select){
                return i.userName
            }
        }
        return state.platforms[0].userName
    },
    getPlatNum: (state) => {
        for(let i of state.platforms) {
            if(i.select) {
                return i.num
            }
        }
    }
}

const mutations = {
    setOpenId (state, payload) {
        payload && (state.openid = payload)
    },
    setPlatform (state, payload) {
        for(let i of state.platforms) {
            i.select = false
        }
        state.platforms[payload].select = true
    }
}

export default new Vuex.Store({
    state,
    actions,
    getters,
    mutations,
    modules: {
        popup,
        user
    },
    strict: debug,
})