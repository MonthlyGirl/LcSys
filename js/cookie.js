//根据传入的参数获取该键对应的值
function getCookie(key){
    //获取当前域名下所有的cookie
    var cookies=document.cookie
    //分割字符串，转为数组
    var ar1=cookies.split('; ')
    //遍历数组中所有元素
    for(var attr in ar1){
        //再次把数组中元素进行分割
       var ar2=ar1[attr].split('=')
       //判断分割出来的第一个元素是否等于传入的参数
       if(ar2[0]==key){
           return ar2[1]
       }
    }
}
//添加cookie
function setCookie(key,value,time){
    if(key){
        //获取当前时间
        var d1=new Date()
        var t1=d1.getTime()-(8*3600*1000)+time*1000
        //在重新把当前时间戳转为时间格式,并设置给cookie
        document.cookie=`${key}=${value};expires=${new Date(t1)}`
    }
}
//删除cookie
function delCookie(key,time){
    setCookie(key,'',time)
}