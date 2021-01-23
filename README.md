## 目录


```txt
   |-- css   #样式文件
   |  |-- index.css   #首页样式
   |  |-- shop.css    #商店样式
   |  |-- details.css  #详情页样式
   |  |-- webCart.css  #购物车样式
   |  |-- header.css   #头部样式
   |  |-- footer.css   #尾部样式
   |-- js    #页面功能文件
   |  |--register.js   #注册页面文件
   |  |-- canvas.js   #注册页面的画布验证码
   |  |-- login.js   #登录页面js文件
   |  |-- cookie.js    #封装的cookie方法
   |  |-- index.js    #首页轮播图,回到顶部等功能js文件
   |  |-- move.js   #轮播图运动函数的封装文件
   |  |--readyData.js   #首页数据渲染文件
   |  |-- shop.js      #商店页面功能文件
   |  |-- details.js     #详情页放大镜等功能js文件
   |  |--detailReady.js     #详情页数据渲染等js文件
   |  |--webCart.js    #购物车功能文件
   |  |--myApi.js  #封装的一些api方法
   |  |--promiseAjax.js  #promise版的ajax文件
   |-- PHP   #后端接口文件
   |  |-- public.php  #连接数据库的公共接口
   |  |-- login.php  #登录接口
   |  |-- register.php  #注册接口
   |  |-- details.php  #详情页接口
   |  |-- webCart.php   #渲染购物车接口
   |  |-- webCartDel.php   #购物删除商品
   |  |-- webCartUp.php    #购物车更新商品数量
   |-- data  #页面请求的数据文件
   |  |--indexGood.json    #首页商品数据
   |  |-- goodList.json    #商店列表页商品数据
   |  |--details.json  #详情页商品数据
   |--header.HTML  #头部结构文件 公共文件
   |--footer.HTML   #尾部结构文件 公共文件
   |--details.HTML  #详情页
   |-- index.HTML  #首页
   |--login.HTML    #登录页
   |--register.HTML  #注册页面
   |--shop.HTML  #商店页面
   |--webCart.HTML #购物车页面
   
```


## 启动项目
**需要开启Apache和mysql服务**
 - 数据库名:lcsys  导入数据库

## 说明

```txt
一个简易的电商网站,仿照良仓网站样式,主要利用JavaScript+jquery+ajax实现,
后端接口使用PHP,大部分数据都是利用ajax请求json数据完成,主要目的检验自己JavaScript的掌握情况
```
