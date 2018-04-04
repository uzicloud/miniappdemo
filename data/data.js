var articles= [
  {
    id: 1,
    read: false,
    title: "第1章：初始小程序",
    content: "第1章节内容..."
  },
  {
    id: 2,
    read: false,
    title: "第2章：动手编写一个小程序（上）",
    content: "第2章节内容..."
  },
  {
    id: 3,
    read: false,
    title: "第3章：动手编写一个小程序（下）",
    content: "第3章节内容..."
  }
]

module.exports = {
  getArticles:function(){
    //读取文章列表数据
    return articles;
  },
  getArticleById:function (id) {
    //根据文章ID，读取文章
    for(let i in articles){
      if(articles[i].id == id)
        return articles[i];
    }
    return {};
  }
}