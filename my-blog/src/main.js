// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';

Vue.config.productionTip = false;

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'  //单独引入样式文件
Vue.use(ElementUI);

import VueParticles from 'vue-particles'
Vue.use(VueParticles);

import * as echarts from 'echarts' ;
Vue.prototype.$echarts = echarts ;

import instance from "./axios";//导入

import * as commonUtils from './commonJs/untils';
import * as commonKey from './commonJs/commonKey';

Vue.prototype.$commonUtils = commonUtils;
Vue.prototype.$commonKey = commonKey;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});

Vue.config.silent = true ;//去掉 vue warn
