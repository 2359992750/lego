import request from '@/request.js'


// 清空历史
function clearHistory(data) {
    return request({
        method: 'POST',
        url: "/search/clearhistoryAction",
        data
    })
}

//搜索的关键词添加到数据库
function addSearchKey(data) {
    return request({
        method: 'POST',
        url: "/search/addhistoryaction",
        data
    })
}

//搜索提示接口
function helpSearch(data) {
    return request({
        url: "/search/helperaction",
        data
    })
}

//关键词和搜索历史接口
function searchHistoryApi(data) {
    return request({
        url: "/search/indexaction",
        data
    })
}

export {
    clearHistory,
    addSearchKey,
    helpSearch,
    searchHistoryApi
}