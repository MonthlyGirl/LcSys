## 目录

   |-- .gitignore  #git中忽略的文件
    |-- index.html  #根文件
    |-- package.json  #项目描述文件
    |-- README.md  #项目介绍文件
    |-- build  #webpack开发和打包的配置文件
    |-- config  #vue-cli的配置文件
    |-- src #资源文件夹
    |   |-- App.vue  #页面入口文件
    |   |-- main.js  #程序入口文件
    |   |-- api  #请求接口文件
    |   |   |-- ajax.js  #基于axios封装ajax文件
    |   |   |-- index.js  #调用接口文件
    |   |-- common  #公共资源文件
    |   |   |-- css
    |   |   |   |-- style.css  #字体图标样式文件
    |   |   |   |-- fonts  #字体图标文件
    |   |   |-- util  #公共工具方法文件
    |   |       |-- util.js
    |   |-- components  #组件文件
    |   |   |-- CinemaDetail  #影院详情组件
    |   |   |-- DatePicker  #日期选择器组件
    |   |   |-- Login  #登录组件
    |   |   |-- MovieDetail  #电影详情组件
    |   |   |   |-- MovieDetail.vue
    |   |   |   |-- children
    |   |   |   |   |-- CommentPanel.vue  #影评组件
    |   |   |-- MovieItem  #单个电影组件
    |   |   |-- Pay  #支付组件
    |   |   |-- SelectCinema  #选择影院组件
    |   |   |-- SelectSeat  #选择座位组件
    |   |   |-- SubmitOrder  #提交订单组件
    |   |   |-- TabBar  #底部导航组件
    |   |-- pages  #页面文件
    |   |   |-- Cinema  #影院页
    |   |   |   |-- Cinema.vue
    |   |   |   |-- children
    |   |   |       |-- SearchCinema.vue  #搜索影院页
    |   |   |-- Home  #主页
    |   |   |   |-- Home.vue
    |   |   |   |-- children
    |   |   |   |   |-- SearchAll.vue  #全局搜索页
    |   |   |-- Movie  #电影页
    |   |   |   |-- Movie.vue
    |   |   |   |-- children
    |   |   |   |   |-- SearchMovie.vue  #搜索电影页
    |   |   |-- My  #个人页
    |   |       |-- My.vue
    |   |       |-- children
    |   |       |   |-- ModifyUserName.vue  #修改用户名页
    |   |       |   |-- ModifyUserSign.vue  #修改性别页
    |   |       |   |-- MyInfo.vue  #个人信息页
    |   |       |   |-- MyMovie.vue  #收藏电影页
    |   |       |   |-- MyOrder.vue  #订单页
    |   |-- router  #路由
    |   |   |-- index.js  #路由配置
    |   |-- store  #vuex状态管理
    |-- static  #静态文件
        |-- css
            |-- adapter.css  #屏幕自适应样式
            |-- reset.css  #兼容性样式