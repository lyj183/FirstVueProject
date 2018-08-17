import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import ParentView from '@/components/test001/ParentView'
import ParentSlotView from '@/components/test002/ParentSlotView'
import CountView from '@/components/test003/CountView'
import EChartsView from '@/components/test004/EChartsView'
import MintUiView from '@/components/test004/MintUiView'
import AsyncValidatorView from '@/components/test005/AsyncValidatorView'
import ElementFormView from '@/components/test005/ElementFormView'
import DialogContentView from '@/components/test006/DialogContentView'
import TreeView from '@/components/test006/TreeView'
import CascaderView from '@/components/test006/CascaderView'
import VueApiExerciseView from '@/components/test007/VueApiExerciseView'
import CssExerciseView from '@/components/test008/CssExerciseView'

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
      path: '/TestView004-1',
      name: 'TestView004-1',
      component: EChartsView
    },
    {
      path: '/TestView004-2',
      name: 'TestView004-2',
      component: MintUiView
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
      path: '/TestView006-1',
      name: 'TestView006-1',
      component: DialogContentView
    },
    {
      path: '/TestView006-2',
      name: 'TestView006-2',
      component: TreeView
    },
    {
      path: '/TestView006-3',
      name: 'TestView006-3',
      component: CascaderView
    },
    {
      path: '/TestView007',
      name: 'TestView007',
      component: VueApiExerciseView
    },
    {
      path: '/TestView008',
      name: 'TestView008',
      component: CssExerciseView
    }
  ]
})
