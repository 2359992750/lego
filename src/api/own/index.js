import request from '../../request.js'

//意见反馈
function submitAction(data) {
    return request({
        method: 'POST',
        url: '/feedback/submitAction',
        data
    })
}

//删除收货地址
function deleteAction(data) {
    return request({
        url: '/address/deleteAction',
        data
    })
}

//获取收货地址详情
function detailAction(data) {
    return request({
        url: '/address/detailAction',
        data
    })
}

//保存和跟添加收货地址
function saveAction(data) {
    return request({
        method: 'POST',
        url: '/address/saveAction',
        data
    })
}

//获取收货地址列表
function getListAction(data) {
    return request({
        url: '/address/getListAction',
        data
    })
}

//获取收藏列表
function listAction(data) {
    return request({
        url: '/collect/listAction',
        data
    })
}

export {
    submitAction,
    deleteAction,
    detailAction,
    saveAction,
    getListAction,
    listAction
}