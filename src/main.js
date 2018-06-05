// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Vuex from 'vuex'
import App from './App'
import store from './store'
import routers from './router'
import Router from 'vue-router'
import fastclick from 'fastclick'
import VueLazyload from 'vue-lazyload'
import '../node_modules/amfe-flexible/index.js'
import '../static/css/common.css'
import '../src/assets/scss/global.scss'
import VueClipboard from 'vue-clipboard2' //copy
import '../src/assets/js/zepto.min.js'
import '../src/utils/dialog.js'
import '../src/assets/scss/dialog.css'


Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(Router)
Vue.use(VueClipboard)
Vue.use(VueLazyload, {
  // error: logoSrc,//这个是请求失败后显示的图片
  // loading: logoSrc, //这个是加载的loading过渡效果
  try: 2,// 这个是加载图片数量
  attempt: 1, //尝试次数
})
fastclick.attach(document.body)

const router = new Router(routers)
router.beforeEach((to, from, next) => {
  document.title = to.meta.name || ''
  window.scrollTo(0, 0)
  next()
})

Vue.prototype.rem2px = function (rem) {
  let fts = document.documentElement.style.fontSize
  let px = parseFloat(rem) * parseFloat(fts)
  return parseInt(px)
}

Vue.directive('autoFocus', {
  inserted (el) {
    el.focus()
  }
})

Vue.directive('cell', {
  inserted (el) {
    el.addEventListener('touchstart', () => {
      el.style.background = 'rgba(0, 0, 0, .1)'
    },false);
    el.addEventListener('touchmove', () => {
      el.style.background = '#fff'
    })
  }
})

Vue.prototype.$alert = (title,content) => {
  $.dialog({
    titleText : title,
    contentHtml : content
  });
}

Vue.prototype.$confirm = (content, okFn, cancelFn) => {
  $(document).dialog({
    type : 'confirm',
    content: content,
    buttonClassConfirm: '确认',
    buttonClassCancel: '取消',
    onClickConfirmBtn: () => {
      return okFn();
    },
    onClickCancelBtn : () => {
      return cancelFn();
    },
  });
}

Vue.prototype.$notice = (content) => {
  $(document).dialog({
    type : 'notice',
    infoText: content,
    autoClose: 1500
  });
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})