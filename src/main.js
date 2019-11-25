/*
 * @Author: 潘金红
 * @Date: 2019-11-06 19:44:45
 * @LastEditors: 潘金红
 * @LastEditTime: 2019-11-14 16:47:57
 * @Description: 
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import "../static/iconfont.css";
import Axios from "axios";
//视频处理
// require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css');
import VideoPlayer from 'vue-video-player';
// require('videojs-contrib-hls/dist/videojs-contrib-hls');
import "videojs-contrib-hls";

//element-ui
import ElementUI from 'element-ui'; 
import 'element-ui/lib/theme-chalk/index.css';

//vueX
import store from './store'

//mint-ui
import MintUI from 'mint-ui' ;
import 'mint-ui/lib/style.css';

Vue.use(MintUI)

Vue.use(ElementUI);

Vue.use(VideoPlayer);

Axios.defaults.baseURL="/api/"

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  components: { App },
  template: '<App/>'
})
