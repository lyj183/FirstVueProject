import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ParentView from '@/components/test001/ParentView'



Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/TestView001',
      name: 'TestView001',
      component: ParentView
    }
  ]
})
