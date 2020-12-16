/*
 * @Author: your name
 * @Date: 2020-11-04 20:11:17
 * @LastEditTime: 2020-11-17 20:04:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \10_字符串\myApi.js
 */
/* 获取随机数 */
function randomNum(m, n) {
    return parseInt(Math.random() * (n - m + 1) + m);
}
/* 获取随机颜色 */
function randColor() {
    var
        r = randomNum(0, 255),
        b = randomNum(0, 255),
        g = randomNum(0, 255);
    return systemChange(r, g, b)

}
function systemChange(r, g, b) {
    r = r.toString(16).length < 2 ? '0' + r.toString(16) : r.toString(16);
    g = g.toString(16).length < 2 ? '0' + g.toString(16) : g.toString(16);
    b = b.toString(16).length < 2 ? '0' + b.toString(16) : b.toString(16);
    return '#' + r + g + b;

}

/* 阻止浏览器默认行为 */
function preventDefault(e) {
    return e.preventDefault ? e.preventDefault : e.returnValue = false
}
/* 事件监听兼容 */
//监听对象   监听类型  回调函数
function addEventListen(ele, eleType, fn) {
    return ele.addEventListener ? ele.addEventListener(eleType, fn) : ele.attachEvent('on' + eleType, fn)
}

/* 阻止事件冒泡 */
function stopPropagation(e) {
    return e.stopPropagation ? e.stopPropagation : e.cancelBubble = true;
}
/* 获取非行间样式 */
/* 
    元素.currentStyle[attr]  支持ie 
    元素.getComputedStyle(ele, null)[attr]   存在兼容
*/

//判断浏览器支持哪个方法
/*    if (ele.currentStyle) {
       return ele.currentStyle[attr];
   } else {
       return ele.getComputedStyle(ele, null)[attr];
   } */
function getStyle(ele, attr) {
    return ele.currentStyle ? ele.currentStyle[attr] : getComputedStyle(ele, null)[attr]
}



//清空className
function clearName(btn) {
    for (var k = 0; k < btn.length; k++) {
        btn[k].className = '';
    }
}


/* 回到顶部 */
function goTop() {
    //如果多次点击btn按钮 定时器就会触发多次  所以每次使用前先清除定时器
    clearInterval(timer);
    var speed = 200;
    //开启定时器
    var timer = setInterval(function () {
        //获取滚动条的高度
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        //设置滚动条的高度
        document.documentElement.scrollTop = document.body.scrollTop = (scrollTop - speed);
        speed += 150
        if (document.documentElement.scrollTop <= 0) {
            clearInterval(timer);
        }
    }, 30)
}

/*
运动动画效果
        ele 运动对象
        //att 运动属性
        //ITarget 目标
*/


function getCookie(key) {
    //获取当前域名下所有的cookie
    var cookies = document.cookie
    //分割字符串，转为数组
    var ar1 = cookies.split('; ')
    //遍历数组中所有元素
    for (var attr in ar1) {
        //再次把数组中元素进行分割
        var ar2 = ar1[attr].split('=')
        //判断分割出来的第一个元素是否等于传入的参数
        if (ar2[0] == key) {
            return ar2[1]
        }
    }
}
//添加cookie
function setCookie(key, value, time) {
    if (key) {
        //获取当前时间
        var d1 = new Date()
        var t1 = d1.getTime() - (8 * 3600 * 1000) + time * 1000
        //在重新把当前时间戳转为时间格式,并设置给cookie
        document.cookie = `${key}=${value};expires=${new Date(t1)}`
    }
}
//删除cookie
function delCookie(key, time) {
    setCookie(key, '', time)
}
