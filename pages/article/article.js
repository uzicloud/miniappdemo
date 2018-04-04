// pages/article/article.js
let data = require("../../data/data.js");
Page({
  data: {
    article:{}
  },
  onLoad: function (options) {
    //根据文章ID读取文章数据
    let article = data.getArticleById(options.id);
    this.setData({
      article
    });
    //修改标题为文章title
    wx.setNavigationBarTitle({
      title: article.title
    });
    //设置已读状态
    let read = wx.getStorageSync("read") || {};
    read[article.id] = true
    wx.setStorageSync("read", read);
  }
})