import Vue from 'vue'
import Router from 'vue-router'
import Module from '@/components/module'
import Community from '@/components/Community'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'module',
      component: Module
    },
    {
      path: '/community',
      component: Community
    }
  ]
})
