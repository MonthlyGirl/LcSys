//导入header头部
$('#headBox').load('./header.html');
$.getScript('./js/header.js')
//导入footer
$('#footerBox').load('./footer.html');


class webCart {
  constructor() {
    this.tbody = document.querySelector("tbody");
    this.cartMei = document.querySelector("#cartmei");
    this.shoppingCarList = document.querySelector("#shoppingcarList");

    this.init()
  }
  init() {
    this.ajax()
  }
  ajax() {
    let that = this
    promiseAjax({
      method: 'post',
      url: 'http://localhost:8080/liangcSys/php/webCart.php',
      data: {}
    })
      .then((data) => {
        that.run(data)
      })
      .catch((data) => {
        console.error(data);
      })

  }
  run(data) {
    data = JSON.parse(data)
    let str = "";
    if (data.state != 0) {
      for (let i = 0; i < data.length; i++) {

        str += `   
    <tr class="itemInfo">
          <td>
           <input type="hidden" class="data" data-id="${data[i].id}">
           </input>
            <input type="hidden" class="dataId" value="">
          <input type="checkbox" class="chkbox itemBtn" name="itemCheck"value="${data[i].id}">
          <a href="" class="gimgCon">
              <img src="${data[i].imgIcon}" />
            </a>
          </td>
          <td class="txtl" style="width: 400px;">
            <p class="t"><a href="">${data[i].title}</a></p>
            <p class="b">${data[i].imgIconN}</p>
          </td>
          <td style="width:250px">
            <span class="opt sub">
              <img src=" https://www.iliangcang.com/images/default/minus.png" alt="">
            </span>
            <input type="text" value="${data[i].number}" class="num2" /> 
            <span class="opt add">
              <img src="https://www.iliangcang.com/images/default/add.png" alt="">
            </span>
          </td>
          <td>${data[i].price}</td>
          <td>${data[i].total}</td>
          <td><button class="blue del" >删除</button></td>
        </tr>
    `
      }

      this.tbody.innerHTML = str
    } else if (data.state === 0) {
      this.shoppingCarList.style.display = "none"
      this.cartMei.style.display = "block";

    }
  }
  eventBind() {
    this.carTab.addEventListener('click', this.eventProxy.bind(this))
  }

}
new webCart()



window.onload = function () {
  //删除商品
  class DelWeb {
    constructor() {
      this.carTab = document.querySelector(".carTab");
      this.data = document.querySelector(".data");
      this.id = this.data.dataset.id //获取id;
      console.log(this.data);
      this.init();
    }
    init() {
      this.eventBind()
      console.log(this.data);
    }
    eventProxy(e) {
      e = e || window.event;
      let target = e.target || e.srcElement;
      if (target.tagName == 'BUTTON' && target.className == "blue del") {
        let id = target.parentNode.parentNode.children[0].children[0].getAttribute("data-id");
        this.ajax(id);
       
      }
    }
    ajax(id) {
      let that = this
      promiseAjax({
        method: 'post',
        url: "http://localhost:8080/liangcSys/php/webCartDel.php"+"?now=" + new Date().getTime(),
        data: {
          id: id
        }
      })
        .then((data) => {
          that.run(data)
          console.log(that.id);
        })
        .catch((data) => {
          console.error(data);
        })
    }

    run(data) {
      data = JSON.parse(data);
      switch (data.state) {
        case 0: alert("删除失败");
          break;
        case 1: alert("删除成功");
          new webCart()
      }
    }
    eventBind() {
      this.carTab.addEventListener('click', this.eventProxy.bind(this))
    }
  }
  new DelWeb()

  //修改商品数量
  class UpWeb {
    constructor() {
      this.carTab = document.querySelector(".carTab");
      this.data = document.querySelector(".data");
      this.id = this.data.dataset.id //获取id;
      this.inputVal = document.querySelector(".num2");
      this.init();
    }
    init() {
      this.eventBind()
    }
    eventProxy(e) {
      e = e || window.event;
      let target = e.target || e.srcElement;

      if (target.tagName == 'SPAN' && target.className == "opt sub") {
        let id = target.parentNode.parentNode.children[0].children[0].getAttribute("data-id");
        let iValue = target.parentNode.parentNode.children[2].children[1].value;
        iValue <= 1 ? 1 : iValue--
        target.parentNode.parentNode.children[2].children[1].value = iValue;
        this.ajax(id, iValue)
        let price = target.parentNode.parentNode.children[3].innerHTML
        let sum = Number(iValue) * Number(price)
        target.parentNode.parentNode.children[4].innerHTML=sum
        // var getSum = new SumPrice()
        // getSum.getSumPrice()

      } else if (target.tagName == 'SPAN' && target.className == "opt add") {
        let id = target.parentNode.parentNode.children[0].children[0].getAttribute("data-id");
        let iValue = target.parentNode.parentNode.children[2].children[1].value;
        iValue++;
        target.parentNode.parentNode.children[2].children[1].value = iValue;
        this.ajax(id, iValue)
        let price = target.parentNode.parentNode.children[3].innerHTML
        let sum = Number(iValue) * Number(price);
        target.parentNode.parentNode.children[4].innerHTML = sum
        // var getSum = new SumPrice()
        // getSum.getSumPrice()
      }
    }
    ajax(id, num) {
      let that = this
      promiseAjax({
        method: 'post',
        url: "http://localhost:8080/liangcSys/php/webCartUp.php",
        data: {
          id: id,
          num: num
        }
      })
        .then((data) => {
          that.run(data)
        })
        .catch((data) => {
          console.error(data);
        })
    }
    run(data) {
      data = JSON.parse(data)
      switch (data.state) {
        case 1: new webCart();
      }
    }
    eventBind() {
      this.carTab.addEventListener('click', this.eventProxy.bind(this))
    }
  }
  new UpWeb()

  class SumPrice {
    constructor() {
      this.allCheckBtn = document.getElementById("checkbox_all_cart");
      this.items = document.getElementsByName("itemCheck");
      this.carTab = document.querySelector(".carTab");
      this.priceNo = document.querySelector(".priceNo");
      this.checkoutBtn = document.querySelector(".checkoutBtn");
      this.getId = document.querySelector(".dataId");
      this.str = "";
      this.shoppingCarList = document.querySelector("#shoppingcarList")
      this.cartMei = document.querySelector("#cartmei")
      this.init()
    }
    init() {
      this.eventBind()
    }
    eventProxy(e) {
      // let that=this
      e = e || window.event;
      let target = e.target || e.srcElement;
      if (target.tagName == 'INPUT' && target.className == "chkbox itemBtn") {
        this.isAllCheck() && this.changeItemStatus(true);
        this.getSumPrice();
        let id = target.parentNode.parentNode.children[0].children[0].getAttribute("data-id");
        this.getId.value = id
        // console.log(this.getId.value);
      }
    }
    allCheck() {
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].checked = this.allCheckBtn.checked
      }
      this.getSumPrice()
    }
    changeItemStatus(status) {
      this.allCheckBtn.checked = status;
      for (let i = 0; i < this.items.length; i++) {
        this.items[i].checked = status;
      }
    }
    isAllCheck() {
      for (var i = 0; i < this.items.length; i++) {
        if (this.items[i].checked === false) {
          this.allCheckBtn.checked = false
          return false
          break;
        } else if (this.items[i].checked ===true){
          this.str += 'id=' + this.items[i].value + "&";
        }
       
       
      }
      // this.str = this.str.substring(0, this.str.length - 1);
      // console.log(this.str);
      return true;
    }
    getSumPrice() {
      let sum = 0;
      for (let i = 0; i < this.items.length; i++){
        if (this.items[i].checked) {
          let item = this.items[i].parentNode.parentNode
         // let itemP = item.children[3].innerHTML;
         // let itemN = item.children[2].children[1].value;
           let itemSum = item.children[4].innerHTML
          sum += Number(itemSum);
        }
      }
      this.priceNo.innerHTML = "¥" + sum;
    }
   
    ajax(id) {
      promiseAjax({
        method: 'post',
        url: "http://localhost:8080/liangcSys/php/webCartDel.php" + "?now=" + new Date().getTime(),
        data: {
          id: id
        }
      })
        .then((data) => {
          console.log(data);
          debugger
          data = JSON.parse(data)
          debugger
          switch (data.state) {
            case 1: new webCart()
          }
        })
        .catch((data) =>{
        console.error(data);
      })
    }
    play() {
      // let getId=id
      let that =this
      let val = this.priceNo.innerHTML
      if (val ==" ¥0.00") {
        this.checkoutBtn.disabled = true
      } else if (val != "¥0.00") {
        this.checkoutBtn.disabled = false
        var t = confirm("确认支付?")
        if (t == true) {
          alert("您已成功支付" + this.priceNo.innerHTML + "元")
          that.ajax(this.getId.value)
          if (this.allCheckBtn.checked) {
            this.shoppingCarList.style.display = "none";
            this.cartMei.style.display = "block";
            this.priceNo.innerHTML ="¥0.00元"
          }
        }
      
      }
      
    }
    eventBind() {
      this.allCheckBtn.addEventListener('click', this.allCheck.bind(this))
      this.carTab.addEventListener('click', this.eventProxy.bind(this));
      this.checkoutBtn.addEventListener('click',this.play.bind(this))
    }
  }

  new SumPrice()
}