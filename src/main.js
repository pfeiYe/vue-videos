// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import fastClick from 'fastclick'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import store from './store/index'
import Vant from 'vant'
import 'vant/lib/index.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'styles/reset.css'
import 'styles/border.css'
import 'styles/iconfont.css'
import 'swiper/dist/css/swiper.css'
import ElementUI, { Message } from 'element-ui'
import echarts from 'echarts' // 引用Echarts
import 'vue-video-player/src/custom-theme.css'
import 'video.js/dist/video-js.css'

Vue.use(ElementUI)
Vue.config.productionTip = false // 引用Echarts
Vue.prototype.$echarts = echarts // 引用Echarts
// 为了实现Class的私有属性
const showMessage = Symbol('showMessage')
/**
 *  重写ElementUI的Message
 *  single默认值true，因为项目需求，默认只弹出一个，可以根据实际需要设置
 */
var bus = new Vue()

Vue.prototype.$bus = bus

import VideoPlayer from 'vue-video-player'

require('video.js/dist/video-js.css');
require('vue-video-player/src/custom-theme.css');
require('@/assets/css/video.css');

import 'videojs-contrib-hls';

Vue.use(VideoPlayer)




class DonMessage {
  success (options, single = true) {
    this[showMessage]('success', options, single)
  }
  warning (options, single = true) {
    this[showMessage]('warning', options, single)
  }
  info (options, single = true) {
    this[showMessage]('info', options, single)
  }
  error (options, single = true) {
    this[showMessage]('error', options, single)
  }

  [showMessage] (type, options, single) {
    if (single) {
      // 判断是否已存在Message
      if (document.getElementsByClassName('el-message').length === 0) {
        Message[type](options)
      }
    } else {
      Message[type](options)
    }
  }
}
// 命名根据需要，DonMessage只是在文章中使用
Vue.prototype.$message = new DonMessage()
Vue.config.productionTip = false
fastClick.attach(document.body)
Vue.use(VueAwesomeSwiper)
Vue.use(Vant)
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
