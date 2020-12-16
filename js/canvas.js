function draw(show_num) {
  var canvas_width = $('#canvas').width();
  var canvas_height = $('#canvas').height();
  var canvas = document.getElementById("canvas");

  // console.log(canvas_width)
  var context = canvas.getContext("2d");
  canvas.width = canvas_width;
  canvas.height = canvas_height;
  var sCode =
    "a,b,c,d,e,f,g,h,i,j,k,m,n,p,q,r,s,t,u,v,w,x,y,z,A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0";
  var aCode = sCode.split(",");
  var aLength = aCode.length; //获取到数组的长度
  for (var i = 0; i < 4; i++) { //这里的for循环可以控制验证码位数（如果想显示6位数，4改成6即可）
    var j = Math.floor(Math.random() * aLength);
    var deg = Math.random() - 0.5; //产生一个随机弧度
    var txt = aCode[j]; //得到随机的一个内容
    show_num[i] = txt.toLowerCase();
    var x = 10 + i * 20; //文字在canvas上的x坐标
    var y = 20 + Math.random() * 8; //文字在canvas上的y坐标
    context.font = "bold 23px 微软雅黑";
    context.translate(x, y);
    context.rotate(deg);
    context.fillStyle = randColor();
    context.fillText(txt, 0, 0);
    context.rotate(-deg);
    context.translate(-x, -y);

  }
  for (var i = 0; i <= 5; i++) { //验证码上显示线条 
    context.moveTo(Math.random() * canvas_width, Math.random() * canvas_height);
    context.lineTo(Math.random() *
      canvas_width, Math.random() * canvas_height);
    context.stroke();
  }
  for (var i = 0; i <= 30; i++) { //验证码上显示小点
    context.strokeStyle = randColor();
    context.beginPath();
    var x = Math.random() * canvas_width;
    var y = Math.random() *
      canvas_height;
    context.moveTo(x, y);
    context.lineTo(x + 1, y + 1);
    context.stroke();
  }
}

var userYzm = document.querySelector(".userYzm");
var yamSpan = document.querySelector(".yamSpan");
function canvasClick() {
  var show_num = [];
  draw(show_num);
  canvas.onclick = function () {
    draw(show_num);
  }
  userYzm.addEventListener('blur', () => {
    var inputVal = userYzm.value;
    var val = inputVal.toLowerCase(); 
    console.log(val);
    var num = show_num.join("");
    if (val == '') {
      yamSpan.innerHTML="请输入验证码"
    } else if (val!=num) {
      yamSpan.innerHTML = "验证码错误！请重新输入"
      userYzm.value = "";
    }
  })

  
}
canvasClick()