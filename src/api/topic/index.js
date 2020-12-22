import request from '../../request.js'

//专题数据
function listaction(data) {
    return request({
        url: "/topic/listaction",
        data
    })
}


export {
    listaction
}