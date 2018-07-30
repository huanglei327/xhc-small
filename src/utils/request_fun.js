/**
 * url 请求地址
 * success 成功的回调
 * fail 失败的回调
 */

//var basePath = 'http://localhost:60033/api/'
//var basePath = 'https://duoduoday.top:8443/'
var basePath = 'https://duoduoday.top/api/'

function get(url, data) {
    return new Promise((resolve, reject) => {
        wx.request({
            url: basePath + url,
            data: data,
            method: 'Get',
            success: function (res) {
                console.log(res)
                if (res.data.errorCode === "0" || res.data.errorCode === 0) {
                    resolve(res.data.data)
                } else {
                    reject(res.data)
                }
            },
            error: function (e) {
                reject('网络出错');
            }
        })
    });
}

function post(url, data) {
    return new Promise((resolve, reject) => {
        var postData = data;
        wx.request({
            url: basePath + url,
            data: postData,
            method: 'POST',
            success: function (res) {
                if (res.data.errorCode === 0) {
                    resolve(res.data.data)
                } else {
                    reject(res.data.info)
                }
            },
            error: function (e) {
                reject('网络出错');
            }
        })
    })
}

function postS(url, data , sessionId) {
    console.log(sessionId)
    return new Promise((resolve, reject) => {
        var postData = data;
        wx.request({
            url: basePath + url,
            data: postData,
            method: 'POST',
            header: { 'SessionId': sessionId+'' },
            success: function (res) {
                if (res.data.errorCode === 0) {
                    resolve(res.data.data)
                } else {
                    reject(res.data.info)
                }
            },
            error: function (e) {
                reject('网络出错');
            }
        })
    })
}

module.exports = {
    get: get,
    post: post,
    postS: postS,
}