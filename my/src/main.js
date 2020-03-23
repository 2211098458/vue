import Vue from 'vue'
import App from './App'
import  router from './router'
import Axios from "axios"
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import loading from './components/loading'
//图片懒加载
import VueLazyload from 'vue-lazyload'
//加载图片
import loadingImg from '../public/images/loading.jpg'

import pageFooter from './components/pageFooter'
//加载懒加载插件
Vue.use(VueLazyload,{
  loading:loadingImg
})
//加载ElementUI插件
Vue.use(ElementUI)

//注册全局组件
Vue.component('loading',loading)
Vue.component('pageFooter',pageFooter)

Vue.prototype.$axios = Axios
Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
