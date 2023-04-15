import Vue from 'vue'
import Router from 'vue-router'
import Policy from './pages/Policy.vue'
import IndexPc from './pages/Index.vue'
import Menu from './pages/Menu.vue'
import History from './pages/history.vue'
import Form from './pages/InputForm.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'MainPage',
      component: IndexPc
    },
    {
      path: '/menu',
      name: 'MenuPage',
      component: Menu
    },
    {
      path: '/history',
      name: 'HistoryPage',
      component: History
    },
    {
      path: '/form',
      name: 'InputForm',
      component: Form
    },
    {
      path: '/policy',
      name: 'PolicyPage',
      component: Policy
    },
    {
      path: '/Terms_of_service',
      name: 'Terms_of_service',
      component: () => import('./pages/Term_of_service.vue')
    },
    {
      path: '/contact',
      name: 'ContactPage',
      component: () => import('./pages/Contact.vue')
    }
  ]
})