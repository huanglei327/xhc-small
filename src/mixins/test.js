import wepy from 'wepy'
import query_url from '../utils/query_url'
export default class testMixin extends wepy.mixin {
  data = {
    mixin: 'This is mixin data.'
  }
  methods = {
    tap() {
      this.mixin = 'mixin data was changed'
      console.log('mixin method tap')
    }
  }

  onShow(e) {
    this.checkLogin(query_url.getCurrentPageUrl())
    console.log('mixin olshow')
  }

  onLoad() {
    console.log('mixin onLoad')
  }

  checkLogin(url_name) {
    let url_arr = [
      'pages/classify',
      'pages/user']
    var is_true = false
    url_arr.forEach(element => {
      if (element === url_name) {
        is_true = true
      }
    })
    if (is_true) {
      var value = wepy.getStorageSync('user_info')
      if (!value) {
        wepy.navigateTo({
          'url': './login',
          success: function (res) {
            console.log('跳转到news页面成功')// success
          },
          fail: function (res) {
            console.log(res)  // fail
          },
          complete: function () {
            console.log('跳转到news页面完成') // complete
          }
        })
      }
    }
  }
}
