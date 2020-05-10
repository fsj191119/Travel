import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible' //淘宝移动端rem适配
import './assets/style/iconfont.css' //字体图标
import './plugins/elementui.js'  //element-ui组件配置文件
import './plugins/vantui.js'  //vant
import './quasar'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';
Vue.use(Antd);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
