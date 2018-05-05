// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './store'
import router from './router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import '../node_modules/amfe-flexible/index.js'
import '../static/css/common.css'
import '../src/assets/scss/global.scss'

Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(VueLazyload, {
  // error: logoSrc,//这个是请求失败后显示的图片
  // loading: logoSrc, //这个是加载的loading过渡效果
  try: 2,// 这个是加载图片数量
  attempt: 1, //尝试次数
})
fastclick.attach(document.body)

Vue.prototype.rem2px = function (rem) {
  let fts = document.documentElement.style.fontSize
  let px = parseFloat(rem) * parseFloat(fts)
  return parseInt(px)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})