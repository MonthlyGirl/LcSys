//获取列表页数据
class DetailsGlass {
  constructor() {
    this.showBox = document.querySelector(".showBox");
    this.path = location.search
    this.id = this.path.length==0 ? false:this.path.split('?')[1].split('=')[1];
    this.init()
  }
  init() {
    // console.log(this.path);  ?id=1
    // console.log(this.id);  1
    if (!this.id) {
      return
    }
    this.ajax(this.id)
  }
  ajax(id) {
    let that = this
    // console.log(id);
    promiseAjax({
      method: 'get',
      url: 'http://localhost:8080/liangcSys/data/details.json',
      data: {
        id:id
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
    const newData = JSON.parse(data).filter(item => Number(item.id) === Number(this.id))[0]
    let  str = `
    <div>
      <div class="productImg">
      <input type="hidden" class="data" data-id="${newData.id}"></input>
        <img class="smallImg" src="${newData.imgIcon1}" alt="">
        <div class="bigImg">
          <img src="${newData.imgIcon1}" alt="">
        </div>
        <span class="filter"></span>
      </div>

      <div class="productList">
        <span id="pre"> &lt; </span> 
          <div class="imgListShow">
            <div class="listBox">
              <article>
              <img src="${newData.imgIcon1}">
              </article>
              <article>
              <img src="${newData.imgIcon2}">
              </article>
              <article>
              <img src="${newData.imgIcon3}">
              </article>
               <article>
              <img src="${newData.imgIcon4}">
              </article>
               <article>
              <img src="${newData.imgIcon5}">
              </article>
            </div>
          </div>
        <span id="next"> &gt; </span>
    </div>
    </div>
      `
    this.showBox.innerHTML = str
  }
}
new DetailsGlass()



class DetailsGoodInfo {
  constructor() {
    this.goodInfo = document.querySelector(".goodInfo");
    this.path = location.search
    this.id = this.path.length == 0 ? false : this.path.split('?')[1].split('=')[1];
    this.init()
  }
  init() {
    // console.log(this.path);  ?id=1
    // console.log(this.id);  1
    if (!this.id) {
      return
    }
    this.ajax(this.id)
  }
  ajax(id) {
    let that = this
    // console.log(id);
    promiseAjax({
      method: 'get',
      url: 'http://localhost:8080/liangcSys/data/details.json',
      data: {
        id: id
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
 
    const newData = JSON.parse(data).filter(item => Number(item.id) === Number(this.id))[0]
    let str = `
     <div class="goodsFavCount" id="goodsDteFavBtn">&nbsp;&nbsp;${newData.goodslike} </div>
        <div class="gdName" style="margin-top:10px;font-size:24px;height:auto;line-height:36px;vertical-align:middle;">
          <a href="#" target="_blank" style="font-size: 40px;">${newData.bandName} </a>
        </div>
        <div class="gdName title" style="font-size:21px;min-height: 52px;width:340px;margin-top: 16px;"> ${newData.title}
        </div>
        <div class="infoItem"
          style="font-size:18px;line-height:18px;color:rgb(153,153,153); padding-top: 5px;padding-bottom: 32px;margin-top: 10px;">
          价格:&nbsp;
          &nbsp; <span style="color:rgb(16,131,255);font-size: 21px" id="goodsPrice">${newData.price}</span> 
        <div class="shipNote" style="font-size: 12px;width:300px;padding-left: 44px;margin-top:20px">
          <div
            style="background:url(https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/24/24691.png)no-repeat left center;font-size:18px;margin-left: 0px;background-size: 14px 14px;padding-left: 17px;color:rgb(153,153,153);margin-bottom:5px ;">
            定制商品75天发货
          </div>
          <span
            style="background:url(https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/24/24690.png) no-repeat left center;background-size: 14px 14px;padding-left: 17px;color:rgb(153,153,153);font-size: 18px;">
            全国配送 </span>
          &nbsp;
          <span style="background: url(https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/24/24689.png) no-repeat left
           center;background-size: 12px 14px;padding-left: 17px;color:rgb(153,153,153);font-size: 18px;">
            正品授权
          </span>
        </div>
        <p class="clr"></p>

        <div class="infoItem sizeCon" id="goodType_7"
          style="font-size: 18px;color:rgb(153,153,153);min-height: 50px;height: auto;margin-top:20px">数量:
          &nbsp;&nbsp;
          <div class="itemCon">
            <a href="#" class="item goodsAttr7" id="goodAttr_7_0" type_id="7" type_name="数量" attr_id="0" attr_name="一个"
              title="数量/一只">${newData.imgIconN1}</a>
          </div>
        </div>

        <div class="infoItem amountCon"
          style="font-size: 18px;color:rgb(153,153,153);border-bottom-color: white;margin-top: 20px;">数量:
          &nbsp;&nbsp;
          <div class="mopt">
            <a href="#" class="sub"><img src="https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/24/24748.png" width="15px"
                height="15px"></a>
            <input type="text" class="inpt" value="1" id="goodsAmount" name="goodsAmount" readonly />
            <a href="#" class="add"><img src="https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/24/24750.png" width="15px"
                height="15px"></a>
          </div>
          <div class="infoItem buyAll" style="padding-bottom:0px;">
            <a href="http://localhost:8080/liangcSys/webCart.html" class="buy2" id="buyNow">立即购买</a>
            <p style="display:none" id="goodsBuyOver">已售罄，即将到货</p>
          </div>
        </div>

        <div class="infoItem" style="height:36px;">
          <a href="#" class="btn138_34 addcar2" id="addCartBtn"><span style="margin-left:18px">加入购物车</span></a>
          <a href="#" class="btn138_34 shareTo2" title='分享'>
            <span style="margin-left:15px">分享</span>
          </a>
        </div>
      `
    this.goodInfo.innerHTML = str
  }
}
new DetailsGoodInfo()






class DetailsItemInfo {
  constructor() {
    this.itemInfoCon = document.querySelector(".itemInfoCon");
    this.path = location.search
    this.id = this.path.length == 0 ? false : this.path.split('?')[1].split('=')[1];
    this.init()
  }
  init() {
    // console.log(this.path);  ?id=1
    // console.log(this.id);  1
    if (!this.id) {
      return
    }
    this.ajax(this.id)
  }
  ajax(id) {
    let that = this
    // console.log(id);
    promiseAjax({
      method: 'get',
      url: 'http://localhost:8080/liangcSys/data/details.json',
      data: {
        id: id
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
    const newData = JSON.parse(data).filter(item => Number(item.id) === Number(this.id))[0]
    let str = `
    <div style="width:1502px;margin-top:-825px">
    <div style="height:0px"></div>
    <div style="">
      <div class="goodsDetail" style="line-height:0"><img
          src="${newData.bigImg1}" class="mainImg" /></div>
      <div class="goodsDetail" style="line-height:0"><img
          src="${newData.bigImg2}" class="mainImg" /></div>
      <div>
      </div>
      <div class="goodsDetail" style="line-height:0"><img
          src="${newData.bigImg3}" class="mainImg" />
      </div>
       <div class="goodsDetail" style="line-height:0"><img
          src="${newData.bigImg4}" class="mainImg" />
      </div>
    
  </div>
  <div
    style="margin-top:30px;font-size: 17px;color: rgb(38,38,38);background: url(https://imgs-qn.iliangcang.com/ware/sowhatimg/ware/orig/2/24/24830.png) no-repeat left center;background-size: 20px 21px">
    <div style="margin-left:25px">品牌简介</div>
  </div>
  <div class="navItemCon">
    <div class="div_name"
      style="margin-top:20px;color:rgb(51,51,51);line-height:2;word-break:break-all;width:718px;height:auto;overflow : hidden;text-overflow: ellipsis;display: -webkit-box;-webkit-line-clamp: auto;-webkit-box-orient: vertical;">
      ${newData.text}</div>
  </div>
      `
    this.itemInfoCon.innerHTML = str
  }
}
new DetailsItemInfo()

