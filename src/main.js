// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../static/css/common.css' // 引入公用css
import store from './store/store' // 引入store

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.use(ElementUI);

new Vue({
  el: '#app',
  store, // 把 store 对象提供给 “store” 选项，这可以把 store 的实例注入所有的子组件,且子组件能通过 this.$store 访问到
  router,
  components: { App },
  template: '<App/>'
});

