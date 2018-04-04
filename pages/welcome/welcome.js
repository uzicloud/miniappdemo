// pages/welcome/welcome.js
Page({
  data: {
    image:'/images/logo.jpg',
    title:'Hello Mini App'
  },
  getUserInfo:function(res){
    this.setData({
      image: res.detail.userInfo.avatarUrl,
      title: res.detail.userInfo.nickName
    });
  },
  gotoArticles:function(){
    wx.navigateTo({
      url: '/pages/articles/articles',
    })
  }
})