/*
  promiseAjax({
  method:"请求方式"，,
  url:"请求地址",
  data:{
  数据
  }
  })
  //数据请求成功调用resolve()
  .then(()=>{
  //打印数据
  console.log(data)
  }
  //请求失败捕获错误
  .catch(()=>{
   console.log(data)
  })
  )
*/ 


function promiseAjax(options) {
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest() || new ActiveXObject("Microsoft,XHTML");
    //对数据进行包装
    let packData = "";
    for (let key in options.data) {
      packData += "&" + key + "=" + options.data[key];
    }
    //判断请求方法
    if (options.method == "get") {
      xhr.open("get", options.url + "?" + packData.slice(1) + "&now=" + new Date().getTime());
      xhr.send()
    } else {
      xhr.open("post", options.url);
      xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
      xhr.send(packData.slice(1));
    }
    xhr.onreadystatechange = function () {
      if (xhr.status == 200 && xhr.readyState == 4) {
        let d = xhr.responseText;
        //请求成功调用resolve方法
        resolve(d);
      }

      setTimeout(() => {
        if (xhr.readyState != 4 || xhr.status != 200) {
          let dataObj = {
            status: xhr.status,
            readyState: xhr.readyState
          }
          reject(dataObj)
        }
      }, 4000)

    }
  })
}






$.fn.extend({
  changeAll(type) {
    for (let i = 0; i < this.length; i++) {
      this[i].checked = type
    }
    return this
  },
  checkboxStatus() {
    let flag = true
    for (let i = 0; i < this.length; i++) {
      if (this[i].checked === false) {
        flag = false
      }
    }
    return flag
  }
})