//导入header头部
$('#headBox').load('./header.html');
$.getScript('./js/header.js')
//导入footer
$('#footerBox').load('./footer.html');


let shopList = document.querySelector("#shopList");
let btnCon = document.querySelector('.btnCon');
let first = document.querySelector('.first');
let last = document.querySelector('.last');
let count = 1;

promiseAjax({
  method: 'post',
  url:'http://localhost:8080/liangcSys/data/goodsList.json',
  data: {}
})
  .then((data) => {
    data = JSON.parse(data);

    //页数
    let pageNum = Math.ceil(data.length / 24)
    //根据页数创建按钮
    for (let i = 0; i < pageNum; i++) {
      let createTag = document.createElement("a");
      createTag.innerHTML = i + 1;
      btnCon.insertBefore(createTag, last)
    }
    btnCon.children[1].className = 'active1'
    //根据页数进行数据渲染
    function reader(n) {
      shopList.innerHTML = ""
      for (let i = (n - 1) * 24; i < Math.min(data.length, n * 24); i++) {
        shopList.innerHTML += `
      <dl class="item sty_3" data-id=${data[i].id}>
      <dd>
        <a href="#">
          <img src="${data[i].goodsImg}" alt="">
        </a>
      </dd>
       <div class="bar">
         <a class="who" href="#" target="_blank">
           <img src="${data[i].brandImg}" />${data[i].title}
          </a>
         <a class="goodsFavCount" href="#" >${data[i].goodsfavcount} </a>
       </div>
      <dt>
        <a href="http://localhost:8080/liangcSys/details.html?id=${data[i].id}" class="goodsInfo">
          <p class="money">${data[i].price}</p>
          <p class="tle">${data[i].tle}</p>
          <p class="desc">${data[i].desc}</p>
        </a>
      </dt>
    </dl>
      `
      }
    }
    reader(1)
    var aBtn = document.querySelectorAll('.btnCon a');
    for (let i = 1; i < aBtn.length - 1; i++) {
      aBtn[i].onclick = function () {
        reader(this.innerHTML)
        count = this.innerHTML
        clearName();
        this.className = 'active1';
      }
    }
    first.onclick = function (e) {
      e.preventDefault()
      if (count <= 1) {
        count=1
      } else {
        count--
      }
      reader(count)
      clearName()
      aBtn[count].className = 'active1'
    }
    last.onclick = function (e) {
      e.preventDefault()
      if (count >= pageNum) {
        count = pageNum;
      } else {
        count++
      }
      reader(count)
      clearName();
      aBtn[count].className = 'active1'
    }

    //清空className
    function clearName() {
      for (var k = 0; k < aBtn.length; k++) { aBtn[k].className = ''; }
    }
    })






