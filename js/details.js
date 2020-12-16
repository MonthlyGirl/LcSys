//导入header头部
$('#headBox').load('./header.html');
$.getScript('./js/header.js')
//导入footer
$('#footerBox').load('./footer.html');

window.onload = () => {
  debugger
  let magnGlass = document.querySelector('#magnGlass')
  let oShowBox = document.querySelector('.showBox')
  let oProductImg = document.querySelector(".productImg")
  let oSmallImg = document.querySelector('.smallImg');
  let oBigImg = document.querySelector('.bigImg');
  let oFilter = document.querySelector('.filter');
  let oPre = document.querySelector('#pre');
  let oNext = document.querySelector("#next");
  let oListBox = document.querySelector('.listBox');
  let oArticle = oListBox.getElementsByTagName('article');
  let distance = oArticle[0].offsetWidth;
  let count = 0
  // console.log(distance);
  debugger
  oProductImg.onmousemove = function (e) {
    e = e || window.event;
    let l = e.clientX - magnGlass.offsetLeft - oFilter.offsetWidth / 2;
    let t = e.clientY - magnGlass.offsetTop - oFilter.offsetHeight / 2;
    //边界处理
    l = l < 0 ? 0 : (l > 225 ? 225 : l);
    t = t < 0 ? 0 : (t > 225 ? 225 : t);
    oFilter.style.left = l + "px"
    oFilter.style.top = t + "px"
    //大图移动
    oBigImg.firstElementChild.style.left = -l / 0.43 + "px"
    oBigImg.firstElementChild.style.top = -t / 0.43 + "px"

  }
  // 图片的移动
  //设置olistbox的宽度
  oListBox.style.width = oArticle[0].offsetWidth * oArticle.length + 10 + "px";
  function toImg() {
    move(oListBox, { 'left': -distance * count })
  }
  function next() {
    if (count >= oArticle.length - 4) {
      count = oArticle.length - 4
    } else {
      count++
    }
    toImg()
  }

  function pre() {
    if (count <= 0) {
      count = 0
    } else {
      count--
    }
    toImg()
  }


  oNext.addEventListener('click', function () {
    // console.log(11);
    next()
  })
  oPre.addEventListener('click', function () {
    // console.log(11);
    pre()
  })

  //鼠标滑过图片
  for (let i = 0; i < oArticle.length; i++) {
    oArticle[i].onmouseover = function () {
      oSmallImg.src = this.firstElementChild.src
      oBigImg.firstElementChild.src = this.firstElementChild.src
    }
  }

  oProductImg.onmouseover = function () {
    oFilter.style.display = "block";
    oBigImg.style.display = 'block';
  }
  
  oProductImg.onmouseout = function () {
    oFilter.style.display = "none";
    oBigImg.style.display = 'none';
  }

  
  //加入购物车
  class Cart {
    constructor() {
      debugger
      this.sub = document.querySelector(".sub")
      this.addCartBtn = document.querySelector("#addCartBtn");
      this.imgIcon = document.querySelector(".smallImg").src;
      this.titleInfo = document.querySelector(".title");
      this.inputVal = document.querySelector(".inpt");
      this.add = document.querySelector(".add");
      this.goodsAttr = document.querySelector(".goodsAttr7") //选择商品种类
      this.goodsPrice = document.querySelector("#goodsPrice")
     
      this.data = document.querySelector(".data");
      this.id = this.data.dataset.id //获取id;
      // this.number = 1;
      //数据处理
      this.price1 = this.goodsPrice.innerHTML;
      this.price = this.price1.slice(1, -1)
      this.titleVal = this.titleInfo.innerHTML
      //去除空格
      this.title = this.titleVal.replace(/\s*/g,"");
      this.init()
    }
    init() {
      this.eventBind()
      console.log(111);
    }
    goodsAdd() {
      debugger
      var num = Number(this.inputVal.value)
      num++
      this.inputVal.value = num
    }
    goodsSub() {
      var num = Number(this.inputVal.value)
      num <= 1 ? 1 : num--
      this.inputVal.value = num;
   
    }
    ajax() {
      let that = this;
      promiseAjax({
        method: 'post',
        url: "http://localhost:8080/liangcSys/php/detail.php",
        data: {
          id: that.id,
          title: that.title,
          img: that.imgIcon,
          goodAttr: that.goodsAttr.innerHTML,
          number: that.inputVal.value,
          price: that.price
        }
      })
        .then((data) => {
          that.run(data)
        })
        .catch((data) => {
        console.error(data)
      })
    }
    run(data) {
      data = JSON.parse(data)
      console.log(data);
      switch (data.state) {
        case 1: alert("已成功加入购物车");
          break;
        case 2: alert("加入购物车成功");
          break;
        case 0:alert("加入购物车失败")
      }
    }
    eventBind() {
      this.add.addEventListener("click", (e) => {
        e.preventDefault();
        this.goodsAdd()
      })
      this.sub.addEventListener("click", (e) => {
        e.preventDefault();
        this.goodsSub()
      })
      this.addCartBtn.addEventListener('click', (e) => {
        e.preventDefault();
        this.ajax()
      })
    }
    
  }

  new Cart()





}






