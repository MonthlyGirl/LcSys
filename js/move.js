/*
 * @Author: your name
 * @Date: 2020-11-17 22:03:50
 * @LastEditTime: 2020-11-18 09:01:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \JavaScript\move.js
 */
function move(ele, json, fn) {
    //1、关闭定时器
    clearInterval(ele.timer);
    //设置一个开关
    var flag = false;
    //2、开启定时器  添加属于运动自己的定时器-->ele.timer 
    ele.timer = setInterval(() => {
        //2-1、获取运动对象css属性值
        //2-1-1 遍历对象
        for (let attr in json) {
            //2-1-2、获取属性初始值
            let iCur = getStyle(ele, attr);
            //判断是否为透明
            iCur = attr == 'opacity' ? iCur * 100 : parseInt(iCur);

            //3、处理速度
            let speed = (json[attr] - iCur) / 8;
            speed = speed > 0 ? Math.ceil(speed) : Math.floor(speed);
            //4、判断终止条件  
            if (iCur != json[attr]) {
                flag = false
            }
            if (attr == 'opacity') {
                ele.style.opacity = (iCur + speed) / 100;
                //兼容
                ele.style.filter = 'alpha(opacity' + (iCur + speed) + ')';
            } else {
                ele.style[attr] = iCur + speed + "px"
            }
        }
        if (flag) {
            clearInterval(ele.timer);
            if (fn) fn();
        }
    }, 30)
}
// 获取非行间样式
function getStyle(ele, attr) {
    return ele.currentStyle ? ele.currentStyle[attr] : getComputedStyle(ele, null)[attr]
}
