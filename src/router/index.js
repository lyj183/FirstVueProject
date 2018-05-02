import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ParentView from '@/components/test001/ParentView'
import ParentSlotView from '@/components/test002/ParentSlotView'
import CountView from '@/components/test003/CountView'

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
    },
    {
      path: '/TestView002',
      name: 'TestView002',
      component: ParentSlotView
    },
    {
      path: '/TestView003',
      name: 'TestView003',
      component: CountView
    }
  ]
})
