
window.onscroll = function() {scrolling()};

function scrolling(){
  var element = document.getElementById("navMain")

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    element.classList.add("nav-scrolled")

  } else {
    element.classList.remove("nav-scrolled")
  }
}

function send(){
  alert("資料已送出")
}

function error(){
  alert("此功能尚未開放，造成您的困擾非常抱歉。")
}

function leaveContact(){
  window.location.href = "#contact"
}
