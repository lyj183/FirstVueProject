import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import TestView from '@/components/test001/TestView'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/TestView',
      name: 'TestView',
      component: TestView
    }
  ]
})
