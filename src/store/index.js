import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        //存储选择的地址数据
        cityAdress: '',
        //保存分类id和下标
        catId: '',
        index: '',
        //判断执行条件
        goshow: false,
        //购物车数据
        goodsList: '',
        //控制加载图标
        Loading: false,
        //记录路由的路径
        previousRouter: ''

    },
    mutations: {
        commitInfo(state, value) {
            state.cityAdress = value
        },
        commintCatID(state, id) {
            state.catId = id
        },
        commitIndex(state, index) {
            state.index = index
        },
        commitShow(state, val) {
            state.goshow = val
        },
        commitgoodsList(state, val) {
            state.goodsList = val
        },
        showLoading(state, val) {
            state.Loading = val
        },
        commitRouter(state, val) {
            state.previousRouter = val
        }
    },
    actions: {},
    modules: {}
})