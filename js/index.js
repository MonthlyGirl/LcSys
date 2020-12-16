//导入header头部
$('#headBox').load('./header.html');
$.getScript('./js/header.js')
//导入footer
$('#footerBox').load('./footer.html');


window.onload = function () {
    let loginLi = document.querySelector(".loginLi div")
    let loginN = document.querySelector(".loginN")
    let login = getCookie('login');
    if (!login) {
        location.href = './login.html';
    } else {
        loginLi.style.display = "none";
        loginN.style.display = "block";
        loginN.innerHTML ="欢迎 用户 "+decodeURI(login);
    }
}

class Banner {
    constructor() {
        this.imgList = document.querySelector(".imgBox");  //ul
        this.imgArr = this.imgList.getElementsByTagName("img");
        this.allA = document.querySelectorAll('#btnA a');
        this.banner = document.querySelector("#banner");
        this.timer = null
        this.count = 0;
        // let firstImg = imgArr[0].cloneNode();
        this.imgWidth = this.imgArr[0].offsetWidth + 10;
        this.init()
    }
    init() {
        let firstImg = this.imgArr[0].cloneNode();
        this.imgList.appendChild(firstImg);
        this.imgList.appendChild(firstImg)
        firstImg.style.width = 1502 + "px";
        firstImg.style.height = 713 + "px";
        this.imgList.style.width = this.imgWidth * this.imgArr.length + "px";
        this.imgList.style.height = this.imgArr[0].offsetHeight + "px";
        this.aTag()
        this.autoMove()
        // console.log(this.autoMove);
        this.eventBind()
    }
    imgMove() {
        move(this.imgList, { 'left': this.imgWidth * -this.count })
    }


    autoMove() {
        this.timer = setInterval(() => {
            this.moveNext();
        }, 10000)
    }
    moveNext() {
        if (this.count >= this.imgArr.length - 1) {
            //imgList left设置为0
            this.count = 0
            this.imgList.style.left = -this.imgWidth * this.count + "px"
        } else {
            this.count++;
        }
        this.imgMove();
        clearName(this.allA);
        this.allA[this.count >= this.imgArr.length - 1 ? 0 : this.count].className = 'show';
    }
    clearAuto() {
        clearInterval(this.timer)
    }
    aTag() {
        let that = this
        for (let i = 0; i < this.allA.length; i++) {
            that.allA[i].onclick = function () {
                clearName(that.allA)
                that.allA[i].className = 'show'
                that.count = i
                that.imgMove()
            }
        }
    }
    eventBind() {
        this.banner.addEventListener('mouseover', () => {
            // console.log("清除自动轮播");
            this.clearAuto()
        })
        this.banner.addEventListener('mouseout', () => {
            // console.log("开始自动轮播");
            this.autoMove()
        })
    }
}
new Banner()


