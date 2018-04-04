// pages/articles/articles.js
var data = require("../../data/data.js");
Page({
  data: {
    articles: []
  },
  onShow:function(){
    //注意，不能写到onLoad中
    //因为每次打开此界面，文章已读状态都可能发生改变
    this.readArticles();
  },
  clearRead:function(){
    //清除文章已读状态
    wx.removeStorageSync("read");
    this.readArticles();
  },
  readArticles:function(){
    //读取已读列表
    let readList = wx.getStorageSync("read") || {};
    //读取文章列表
    let articles = data.getArticles();
    //为文章列表设置已读状态
    for (let i in articles) {
      let id = articles[i].id;
      if (readList[id]) {
        articles[i].read = true;
      }
      else{
        articles[i].read = false;
      }
    }
    this.setData({
      articles
    });
  }
})