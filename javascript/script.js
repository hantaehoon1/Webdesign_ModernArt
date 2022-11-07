jQuery(document).ready(function(){
    $('.navi>li').mouseover(function(){
        $(this).find('.submenu').stop().slideDown(500);
    }).mouseout(function(){
        $(this).find('.submenu').stop().slideUp(500);
    });

    setInterval(function () {
      $(".slidelist").delay(1000);
      $(".slidelist").animate({ marginTop: -300 });
      $(".slidelist").delay(2000);
      $(".slidelist").animate({ marginTop: -600 });
      $(".slidelist").delay(2000);
      $(".slidelist").animate({ marginTop: 0 });
      $(".slidelist").delay(2000);
    });
    
    $(function(){
      $('.tabmenu>li>a').click(function(){
        $(this).parent().addClass('active')
                        .siblings()
                        .removeClass('active');
          return false;
      });
    });

    $(function(){
      $('.notice li:first').click(function(){
        $('#modal').addClass('active');
      });
    });
    
    $(function(){
      $('.btn').click(function(){
        $('#modal').removeClass('active')
      });
    });

});
