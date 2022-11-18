import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import '/config/index';

import '@/plugin/vant'
import "./filters";

import plugins from './plugin'
Vue.use(plugins)

import settings from "./settings";
Vue.prototype.$settings = settings;


Vue.config.productionTip = false //false 阻止vue在启动时生成生产提示

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
