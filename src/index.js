'use strict';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import Axios from 'axios';
import './static/vendor/mui/dist/css/mui.css'

import App from './app.vue';
import Home from './components/home.vue';

Vue.use(VueRouter);
Vue.use(Mint);
Vue.prototype.$ajax = Axios;

let router = new VueRouter({
    routes: [
        { path: '/', redirect: { name: 'home' } },
        { name: 'home', path: '/home', component: Home },


    ]
})

new Vue({
    el: "#app",
    router,
    render: o => o(App)
})