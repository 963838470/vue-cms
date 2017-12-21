'use strict';
import Vue from 'vue';
import VueRouter from 'vue-router';
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import Axios from 'axios';
import './static/vendor/mui/dist/css/mui.css'
import Moment from 'moment'
import VuePreview from 'vue-preview'

import App from './app.vue';
import Home from './components/home/home.vue';
import Member from './components/member/member.vue';
import Search from './components/search/search.vue';
import Shopcart from './components/shopcart/shopcart.vue';
import NewsList from './components/news/list.vue';
import NewsDetail from './components/news/detail.vue';
import NavBar from './components/common/navBar.vue';
import Comment from './components/common/comment.vue';
import PhotoShare from './components/photo/share.vue';
import PhotoDetail from './components/photo/detail.vue';
import GoodsList from './components/goods/list.vue';
import GoodsDetail from './components/goods/detail.vue';
import GoodsComment from './components/goods/comment.vue';
require('./static/css/global.css')

Vue.use(VueRouter);
Vue.use(Mint);
Vue.use(VuePreview)
Vue.prototype.$ajax = Axios;

Axios.defaults.baseURL = 'http://182.254.146.100:8899/api';
Axios.interceptors.request.use(function (config) {
    Mint.Indicator.open({
        text: '加载中...',
        spinnerType: 'fading-circle'
    });
    config.headers['X-Requested-With'] = 'XMLHttpRequest'
    return config;
})
Axios.interceptors.response.use(function (config) {
    Mint.Indicator.close();
    return config;
})

let router = new VueRouter({
    routes: [
        { path: '/', redirect: { name: 'home' } },
        { name: 'home', path: '/home', component: Home },
        { name: 'member', path: '/member', component: Member },
        { name: 'search', path: '/search', component: Search },
        { name: 'shopcart', path: '/shopcart', component: Shopcart },
        { name: 'news.list', path: '/news/list', component: NewsList },
        { name: 'news.detail', path: '/news/detail/:id', component: NewsDetail },
        { name: 'photo.share', path: '/photo/share', component: PhotoShare },
        { name: 'photo.detail', path: '/photo/detail/:id', component: PhotoDetail },
        { name: 'goods.list', path: '/photo/goods/list', component: GoodsList },
        { name: 'goods.detail', path: '/photo/goods/detail', component: GoodsDetail },
        { name: 'goods.comment', path: '/photo/goods/comment', component: GoodsComment },
        
    ],
    linkActiveClass: "mui-active"
})

Vue.filter("filterDate", function (value) {
    return Moment(value).format('YYYY-MM-DD');
})

Vue.component("nav-bar", NavBar)
Vue.component("comment", Comment)


new Vue({
    el: "#app",
    router,
    render: o => o(App)
})
