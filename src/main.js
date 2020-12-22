import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'lib-flexible'
import 'vant/lib/index.css';
import './vant/index.js'
import BaiduMap from 'vue-baidu-map';
Vue.use(BaiduMap, {
        /* Visit http://lbsyun.baidu.com/apiconsole/key for details about app key. */
        ak: 'GEDY0FjQAdPuEIVsnDCbIuRoX1xAntUF'
    })
    //百度地图返回数据需要
    // import vueJsonp from 'vue-jsonp'
    // Vue.use(vueJsonp)

// import VueAwesomeSwiper from 'vue-awesome-swiper'

// // import style (>= Swiper 6.x)
// import 'swiper/swiper-bundle.css'
// Vue.use(VueAwesomeSwiper, /* { default options with global component } */ )




Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')