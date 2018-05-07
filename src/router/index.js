import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ParentView from '@/components/test001/ParentView'
import ParentSlotView from '@/components/test002/ParentSlotView'
import CountView from '@/components/test003/CountView'
import EChartsView from '@/components/test004/EChartsView'
import AsyncValidatorView from '@/components/test005/AsyncValidatorView'
import ElementFormView from '@/components/test005/ElementFormView'
import DialogContentView from '@/components/test006/DialogContentView'

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
    },
    {
      path: '/TestView004',
      name: 'TestView004',
      component: EChartsView
    },
    {
      path: '/TestView005-1',
      name: 'TestView005-1',
      component: AsyncValidatorView
    },
    {
      path: '/TestView005-2',
      name: 'TestView005-2',
      component: ElementFormView
    },
    {
      path: '/TestView006',
      name: 'TestView006',
      component: DialogContentView
    }
    
  ]
})
