import Vue from 'vue'
import App from './App.vue'
import router from './router'
import ElementUI from 'element-ui'
import vSelect from 'vue-select'
import 'element-ui/lib/theme-chalk/index.css'
import 'vue-select/dist/vue-select.css';
import './style/reset.css'
import './style/share.css'
import store from './store'


Vue.use(ElementUI)
Vue.component('v-select', vSelect)
Vue.config.productionTip = false

// 讓跳頁後可以置頂
router.afterEach(() => {
  window.scrollTo(0, 0);

});

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


