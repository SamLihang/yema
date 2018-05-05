import Vue from 'vue'
import Router from 'vue-router'
import Module from '@/components/module'
import Community from '@/components/Community'
import Mine from '@/components/Mine'

Vue.use(Router)

export default new Router({
  routes: [
    {path: '/', name: 'module', component: Module,meta: {hasHeader: true, hasFooter: true}},
    {path: '/community', name: 'community', component: Community, meta: {hasHeader: true, hasFooter: true}},
    {path: '/Mine', name: 'mine', component: Mine, meta: {hasHeader: false, hasFooter: true}}
  ]
})
