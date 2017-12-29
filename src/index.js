'use strict';
import Vue from 'vue';
import Moment from 'moment'
import App from './app.vue';

// ui
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css';
import './static/vendor/mui/dist/css/mui.css'
require('./static/css/global.css')
Vue.use(Mint);

// 图片预览插件
import VuePreview from 'vue-preview'
Vue.use(VuePreview)

// ajax插件
import Axios from 'axios';
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

// 自定义组件
const NavBar = resolve => require(['./components/common/navBar.vue'], resolve)
Vue.component("nav-bar", NavBar)
const Comment = resolve => require(['./components/common/comment.vue'], resolve)
Vue.component("comment", Comment)

// 路由配置
import VueRouter from 'vue-router';
Vue.use(VueRouter);
let router = new VueRouter({
    routes: [
        { path: '/', redirect: { name: 'home' } },
        { name: 'home', path: '/home', component: resolve => require(["./components/home/home.vue"], resolve) },
        { name: 'member', path: '/member', component: resolve => require(["./components/member/member.vue"], resolve) },
        { name: 'search', path: '/search', component: resolve => require(['./components/search/search.vue'], resolve) },
        { name: 'shopcart', path: '/shopcart', component: resolve => require(['./components/shopcart/shopcart.vue'], resolve) },
        { name: 'news.list', path: '/news/list', component: resolve => require(['./components/news/list.vue'], resolve) },
        { name: 'news.detail', path: '/news/detail/:id', component: resolve => require(['./components/news/detail.vue'], resolve) },
        { name: 'photo.share', path: '/photo/share', component: resolve => require(['./components/photo/share.vue'], resolve) },
        { name: 'photo.detail', path: '/photo/detail/:id', component: resolve => require(['./components/photo/detail.vue'], resolve) },
        { name: 'goods.list', path: '/photo/goods/list', component: resolve => require(['./components/goods/list.vue'], resolve) },
        { name: 'goods.detail', path: '/photo/goods/detail', component: resolve => require(['./components/goods/detail.vue'], resolve) },
        { name: 'goods.comment', path: '/photo/goods/comment', component: resolve => require(['./components/goods/comment.vue'], resolve) },

    ],
    linkActiveClass: "mui-active",
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition
        } else {
            return { x: 0, y: 0 }
        }
    }
})

// 过滤器
Vue.filter("filterDate", function (value) {
    return Moment(value).format('YYYY-MM-DD');
})

// 启动入口
new Vue({
    el: "#app",
    router,
    render: o => o(App)
})
