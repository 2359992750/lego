import Vue from 'vue'
import VueRouter from 'vue-router'


Vue.use(VueRouter)

const routes = [{
        path: '/',
        redirect: '/login'
    },
    {
        path: '/login',
        name: 'Login',
        component: () =>
            import ('../views/Login/index.vue')
    }, {
        path: '/home',
        name: 'Home',
        component: () =>
            import ('../views/home/Home.vue')
    },
    {
        path: '/home/search',
        name: 'Search',
        component: () =>
            import ('../views/home/Serach.vue')
    },
    {
        path: '/home/searchshop',
        name: 'Searchshop',
        component: () =>
            import ('../views/home/Searchshop.vue')
    },
    {
        path: '/topic',
        name: 'Topic',
        component: () =>
            import ('../views/topic/Topic.vue')
    },
    {
        path: '/home/Categorylist',
        name: 'Categorylist',
        component: () =>
            import ('../views/home/category/Categorylist.vue')
    },
    {
        path: '/home/newsgoods',
        name: 'Newsgoods',
        component: () =>
            import ('../views/home/category/Newsgoods.vue')
    },
    {
        path: '/category',
        name: 'Category',
        component: () =>
            import ('../views/category/index.vue')
    },
    {
        path: '/category/categorylist',
        name: 'Categorylist',
        component: () =>
            import ('../views/category/childrenPage/index.vue')
    },
    {
        path: '/category/goshop',
        name: 'Goshop',
        component: () =>
            import ('../views/category/childrenPage/goshop.vue')
    },
    {
        path: '/addcart',
        name: 'Addcart',
        component: () =>
            import ('../views/addCart/index.vue')
    },
    {
        path: '/own',
        name: 'Own',
        component: () =>
            import ('../views/own/index.vue')
    }, ,
    {
        path: '/goodslist',
        name: 'goodslist',
        component: () =>
            import ('../views/home/category/goodslist.vue')
    },
    //订单确认界面
    {
        path: '/addcart/order',
        name: 'Order',
        component: () =>
            import ('../views/addCart/payMoney/index.vue')
    },
    //收藏界面
    {
        path: '/own/favorite',
        name: 'Favorite',
        component: () =>
            import ('../views/own/favorite/index.vue')
    },
    //意见反馈界面
    {
        path: '/own/submitAction',
        name: 'SubmitAction',
        component: () =>
            import ('../views/own/submitAction/index.vue')
    },
    //地址管理界面
    {
        path: '/own/adress',
        name: 'Adress',
        component: () =>
            import ('../views/own/adress/index.vue')
    },
    //新增地址页面
    {
        path: '/own/addAdress',
        name: 'Addadress',
        component: () =>
            import ('../views/own/adress/addAdress/index.vue')
    },
    //分类详情页面
    {
        path: '/catedelc',
        name: 'Catedelc',
        component: () =>
            import ('../views/home/Catedelc.vue')
    },
]

const router = new VueRouter({
    mode: 'hash',
    routes
})



export default router