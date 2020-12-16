function Register() { 
  this.userPhone = document.querySelector(".userPhone");
  // this.userYzm = document.querySelector(".userYzm");
  this.userCPwd = document.querySelector(".userCPwd");
  this.userCheckPwd = document.querySelector(".userCheckPwd");
  this.resignerBtn = document.querySelector(".resignerBtn");
  this.pwdSpan = document.querySelector(".pwdSpan");
  this.agreeBtn = document.querySelector(".agreeBtn");
 // this.canvas = document.querySelector("#canvas");
  this.init()
}
Register.prototype = {
  init: function () {
    this.eventBind()
  },
  event: function () {
    let that =this
    let special = "$%.&*";
    let pwdVal = this.userCPwd.value
    if (pwdVal.length < 6 || pwdVal.length > 20) {
      return that.pwdSpan.innerHTML = "密码长度应在6-20之间" 
    }
    if (pwdVal >= '0' && pwdVal <= '9') {
      return  that.pwdSpan.innerHTML = "密码强度弱"
    }

    for (var i = 0; i < special.length; i++) {
      if (pwdVal.indexOf(special[i]) != -1) {
      
        return  that.pwdSpan.innerHTML = "密码强度强";
      }
    }
    return that.pwdSpan.innerHTML = "密码强度适中";
  },
  agreeEvent: function () {
    let that=this
    if (this.agreeBtn.checked) {
      that.resignerBtn.disabled = false
    } else {
      that.resignerBtn.disabled = true
    }
  },
  inputBlur: function () {
    let checkPwdVal = this.userCheckPwd.value;
    let pwdVal = this.userCPwd.value;
    if (checkPwdVal != pwdVal) {
      this.userCheckPwd.className += " active"
      this.userCheckPwd.value=""
     this.userCheckPwd.placeholder="两次密码输入不一致"
     
    }
  },
  ajax: function () {
    let that = this
    promiseAjax({
      method: 'post',
      url: 'http://localhost:8080/liangcSys/php/register.php',
      data: {
        userPhone: that.userPhone.value,
        userCheckPwd: that.userCheckPwd.value
      }
    })
      .then((data) => {
     
        that.run(data)
      })
      .catch((data) => {
        console.error(data)
    })
  },
  run: function (data) {
    data = JSON.parse(data)
    // let inpVal = this.userYzm.value.toUpperCase()
    switch (data.state) {
      case 0: alert("注册失败")
        break;
     
      case 2: alert("手机号码已被注册");
        break;
      case 1: {
        alert("注册成功")
        location.href = "http://localhost:8080/liangcSys/login.html"

      }
    }
  },
  eventBind: function () {
    this.resignerBtn.addEventListener('click', (e) => {
     e.preventDefault()
     this.ajax()
    })
    this.userCPwd.addEventListener('input', this.event.bind(this))
    this.agreeBtn.addEventListener('click', this.agreeEvent.bind(this))
    this.userCheckPwd.addEventListener('change',this.inputBlur.bind(this))
  },

}
new Register()

