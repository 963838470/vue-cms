'use strict';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import Axios from 'axios';
import './static/vendor/mui/dist/css/mui.css'
import Moment from 'moment'

import App from './app.vue';
import Home from './components/home/home.vue';
import Member from './components/member/member.vue';
import Search from './components/search/search.vue';
import Shopcart from './components/shopcart/shopcart.vue';
import NewsList from './components/news/list.vue';
import NavBar from './components/common/navBar.vue';
require('./static/css/global.css')

Vue.use(VueRouter);
Vue.use(Mint);
Vue.prototype.$ajax = Axios;

Axios.defaults.baseURL = 'http://182.254.146.100:8899/api';

let router = new VueRouter({
    routes: [
        { path: '/', redirect: { name: 'home' } },
        { name: 'home', path: '/home', component: Home },
        { name: 'member', path: '/member', component: Member },
        { name: 'search', path: '/search', component: Search },
        { name: 'shopcart', path: '/shopcart', component: Shopcart },
        { name: 'news.list', path: '/news/list', component: NewsList },


    ],
    linkActiveClass: "mui-active"
})

Vue.filter("filterDate", function (value) {
    return Moment(value).format('YYYY-MM-DD'); k
})

Vue.component("nav-bar", NavBar)

new Vue({
    el: "#app",
    router,
    render: o => o(App)
})