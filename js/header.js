function headerTop() {
  let cartLi = document.querySelector(".cartLi")
  let newsLi = document.querySelector(".newsLi")
  let cart = document.querySelector(".cart")
  let msg = document.querySelector(".msg")
  cartLi.addEventListener('mouseover', function () {
    cart.style.display = "block";
    cartLi.style.backgroundColor = "#292F34";
  })
  cartLi.addEventListener('mouseout', function () {
    cart.style.display = "none";
    cartLi.style.backgroundColor = " #26292F";
  })

  newsLi.addEventListener('mouseover', function () {
    msg.style.display = "block";
    newsLi.style.backgroundColor = "#292F34";
  })
  newsLi.addEventListener('mouseout', function () {
    msg.style.display = "none";
    newsLi.style.backgroundColor = "#26292F";
  })
}
headerTop()

function search() { 
$('#search').on('click', function (e) {
  e.stopPropagation()
  if ($('.search-input').css('display') == 'none') {
    $('.search-input').stop(true).show(500)
  } else {
    $('.search-input').stop(true).hide(500)
  }
})
}
search() 
//二级菜单导航
function navHover() {
    //鼠标滑过
 $(".fl > li").mouseenter(function () { 
   $(this).children('a').addClass('active')
  });
  //鼠标移除
  $(".fl > li").mouseleave(function () {
    $(this).children('a').removeClass('active')
  });
}
navHover() 

//三级菜单
function navChild() {
  //商店
  $('.store').mouseenter(function () {
    $('#store').css('display', 'block')
  })
  $('.store').mouseleave(function () {
    $('#store').css('display', 'none')
  })
  $('#store').mouseenter(function () { 
    $('#store').css('display', 'block')
  })
  $('#store').mouseleave(function () {
    $('#store').css('display', 'none')
    $(this).children(".nav3").css('display', 'none')
  })
  
  $('.storeBox > li').mouseenter(function() {
    $(this).children('.nav3').css('display', 'block')
  })
  $('.storeBox > li').mouseleave(function () {
    $(this).children('.nav3').css('display', 'none')
  })

  //鼠标移入杂志导航栏
  $(".magazi").mouseenter(function () {
    $("#magazines").css('display', 'block')
  })
   //鼠标移出杂志导航栏
  $(".magazi").mouseleave(function () {
    $("#magazines").css('display', 'none') 
  })

   //鼠标移入杂志三级导航
  $("#magazines").mouseenter(function () {
    $("#magazines").css('display', 'block')
  })

   //鼠标移出杂志三级导航
  $("#magazines").mouseleave(function () {
    $("#magazines").css('display', 'none')
  })
 


  //分享
  //鼠标移入分享导航栏
  $(".share").mouseenter(function () {
    $("#share").css('display', 'block')
  })
  //鼠标移出分享导航栏
  $(".share").mouseleave(function () {
    $("#share").css('display', 'none')
  })

  //鼠标移入分享三级导航
  $("#share").mouseenter(function () {
    $("#share").css('display', 'block')
  })

  //鼠标移出分享三级导航
  $("#share").mouseleave(function () {
    $("#share").css('display', 'none')
  })
}
navChild()



  let loginLi = document.querySelector(".loginLi div")
  let loginN = document.querySelector(".loginN")
  let login = getCookie('login');
  if (login) {
    loginLi.style.display = "none";
    loginN.style.display = "block";
    loginN.innerHTML = "欢迎 用户 " + decodeURI(login);
  }

