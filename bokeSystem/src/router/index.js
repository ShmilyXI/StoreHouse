import Vue from 'vue'
import Router from 'vue-router'

import FistPage from '../../src/pages/FistPage.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/firstpage',
      name: 'FistPage',
      component: FistPage
    },
    {
      path:'/',
      redirect:'/firstpage'
    }
  ]
})
