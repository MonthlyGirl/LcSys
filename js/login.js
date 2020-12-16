function setCookie(key, value, time) {
  if (key) {
    //获取当前时间
    var d1 = new Date()
    var t1 = d1.getTime() - (8 * 3600 * 1000) + time * 1000
    //在重新把当前时间戳转为时间格式,并设置给cookie
    document.cookie = `${key}=${value};expires=${new Date(t1)}`
  }
}

function Login() {
  this.userPhone = document.querySelector(".userPhone");
  this.userYzm = document.querySelector(".userYzm");
  this.autoBtn = document.querySelector(".autoBtn");
  this.loginBtn = document.querySelector(".loginBtn");
  this.yzId = document.querySelector(".yzId");
  this.data = document.querySelector(".dataId");
 
  this.init();
}
Login.prototype = {
  init: function () {
    this.eventBind()
  },
  isValue: function () {
    if (this.userPhone.value == '' || this.userYzm.value == "") {
      alert("输入不能为空");
    }
    
  },
  event: function () { 
    if (this.userPhone.value == '' || isNaN(this.userPhone.value) ||this.userPhone.value.length!=11) {
      alert("手机号有误")
      this.yzId.disabled = true;
    } else if (this.yzId.innerHTML == "获取验证码") {
      let cookieVal = this.userPhone.value
      this.data = cookieVal
      alert(this.randNum)
      this.setTime()
    }
  
  },
  setTime: function () {
    let countDown = 60;
    let timerGo = () => {
      if (countDown == 0) {
        clearTimer()
        this.yzId.innerHTML = "获取验证码"
        this.yzId.disabled = false;
       
      } else if (this.userPhone.value != '' && countDown != 0) {
        this.yzId.disabled = true;
        this.yzId.innerHTML = countDown + "s后重新获取验证码";
        countDown--
      }
    }
    let timer = setInterval(() => {
      timerGo()
    }, 1000)
    let clearTimer = ()=>clearInterval(timer)
   },
  randNum: randomNum(9999, 1000),
  ajax: function () {
    let that = this;
    if (this.yzId.innerHTML = "获取验证码") {
      // this.setTime()
      promiseAjax({
        method: 'post',
        url: "http://localhost:8080/liangcSys/php/login.php",
        data: {
          userPhone: that.userPhone.value,
        }
      })
        .then((data) => {
          debugger
          that.run(data)
        })
        .catch((data) => {
          console.error(data)
        })
    }
  },
  run: function (data) {
    this.isValue()
    let that=this
    data = JSON.parse(data);
    switch (data.state) {
      case 0: alert("手机账号不存在");
        break;
      case 1: {
        if (Number(that.userYzm.value) == that.randNum) {
         location.href = 'http://localhost:8080/liangcSys/index.html'
         that.setCookie('login', that.data, 30000)
        } else if (!(Number(that.userYzm.value) )== that.randNum && that.userYzm.value != "")
        {
          alert("验证码错误")
          return 
      }
      }
    }
    
  },
  setCookie: function (key, value, time) {
    if (key) {
      //获取当前时间
      var d1 = new Date()
      var t1 = d1.getTime() - (8 * 3600 * 1000) + time * 1000
      //在重新把当前时间戳转为时间格式,并设置给cookie
      document.cookie = `${key}=${value};expires=${new Date(t1)}`
    }
  },
  eventAutoBtn: function () {
    let that = this;
    if (this.autoBtn.checked) {
      that.setCookie()
    }
  },
  eventBind: function () {
    this.loginBtn.addEventListener("click", this.ajax.bind(this))
    this.yzId.addEventListener("click", this.event.bind(this));
    this.autoBtn.addEventListener("click", this.eventAutoBtn.bind(this))
  }
}
new Login()