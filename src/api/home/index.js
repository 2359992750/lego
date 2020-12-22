import request from '@/request.js'


// 请求首页数据
function home(data) {
    return request({
        url: "/index/index",
        data
    })
}

//请求分类页面导航
function category(data) {
    return request({
        url: "/category/categoryNav",
        data
    })
}

//通过分类的id来查询分类列表数据
function currentaction(data) {
    return request({
        url: "/goods/goodsList",
        data
    })
}


export {
    home,
    category,
    currentaction
}