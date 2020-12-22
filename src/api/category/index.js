import request from '../../request.js'


//分类导航数据获取
function indexaction(data) {
    return request({
        url: '/category/indexaction',
        data
    })
}

//通过分类的id来查询分类列表数据
function currentaction(data) {
    return request({
        url: '/category/currentaction',
        data
    })
}

//分类子页面获取导航数据
function categoryNav(data) {
    return request({
        url: '/category/categoryNav',
        data
    })
}

//分类子页面的商品列表 
function goodsList(data) {
    return request({
        url: '/goods/goodsList',
        data
    })
}

//商品详情
function detailaction(data) {
    return request({
        url: '/goods/detailaction',
        data
    })
}

//添加收藏
function addcollect(data) {
    return request({
        method: 'POST',
        url: '/collect/addcollect',
        data
    })
}

//添加购物车
function addCart(data) {
    return request({
        method: 'POST',
        url: '/cart/addCart',
        data
    })
}

//购物车列表
function cartList(data) {
    return request({
        url: '/cart/cartList',
        data
    })
}

//删除商品
function deleteAction(data) {
    return request({
        url: '/cart/deleteAction',
        data
    })
}

//提交订单
function submitAction(data) {
    return request({
        method: 'POST',
        url: '/order/submitAction',
        data
    })
}

//订单确认界面数据获取
function detailAction(data) {
    return request({
        url: '/order/detailAction',
        data
    })
}

//首页品牌制造商直供的详情数据
function detailactions(data) {
    return request({
        url: '/brand/detailaction',
        data
    })
}

export {
    indexaction,
    currentaction,
    categoryNav,
    goodsList,
    detailaction,
    addcollect,
    addCart,
    cartList,
    deleteAction,
    submitAction,
    detailAction,
    detailactions
}