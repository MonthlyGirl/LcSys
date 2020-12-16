function Ready() { 
  this.shopList = document.querySelector('#shopList');
  this.init();
}
Ready.prototype = {
  init: function () {
    this.ajax()
  },
  ajax: function () {
    let that = this;
    promiseAjax({
      method:'post',
      url:'http://localhost:8080/liangcSys/data/indexGood.json',
      data:{}
    })
      .then((data) => {
        that.run(data)
      })
      .catch((data) => {
      console.error(data)
    })
  },
  run: function (data) {
    data = JSON.parse(data);
    let str = '';
    for (let i = 0; i < data.length; i++){
      str += `
       <dl class="item sty_3" >
      <dd>
        <a href="#">
          <img src="${data[i].goodsImg}">
          <a href="#}"></a>
        </a>
      </dd>
       <div class="bar">
         <a class="who" href="#" target="_blank">
           <img src="${data[i].brandImg}" />${data[i].title}
          </a>
         <a class="goodsFavCount" href="#">${data[i].goodsfavcount}</a>
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
    this.shopList.innerHTML=str
  }
}
new Ready()
