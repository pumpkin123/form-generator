/*
 * @Description:
 * @Version: 2.0
 * @Author: qnkong01
 * @Date: 2022-01-06 16:09:13
 * @LastEditors: qnkong01
 * @LastEditTime: 2022-01-10 17:54:52
 */
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import '@/styles/index.scss'
import '@/icons'
import axios from 'axios'
import Tinymce from '@/components/tinymce/index.vue'
import { Button, Icon } from 'vant';
import 'vant/lib/index.css';

Vue.component('tinymce', Tinymce)

Vue.config.productionTip = false
Vue.prototype.$axios = axios
Vue.use(Button);
Vue.use(Icon);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
