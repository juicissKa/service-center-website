
  var flag = false;
  
  $('.menu-btn').click(function(){
    $(this).toggleClass('open');
    $('.menu-nav').toggleClass('menu-nav_active');
    $('.header').toggleClass('header_active');
    if (!flag)  {
      flag = true;
      setTimeout(function () {
        $('.menu-nav').css("background", "#14161C");
      }, 500);
    } else {
      flag = false;
      $('.menu-nav').css("background", "none");
    }
  })