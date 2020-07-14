import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import fastClick from 'fastclick'//300毫秒延迟
import './components/icons'//初始化icon组件
import './plugins/loding'//按需引入
import './plugins/flexible'//获取到font基准

import axios from './plugins/fetch'

Vue.prototype.axios = axios

fastClick.attach(document.body);//实例化

Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
