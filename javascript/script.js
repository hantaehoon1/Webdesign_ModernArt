jQuery(document).ready(function(){
    $('.navi').mouseover(function(){
      $(this).find('.submenu').stop().slideDown(500)
        $('#menuwrap').stop().animate({'height':'250px'});
    }).mouseout(function(){
      $(this).find('.submenu').stop().slideUp(500)
        $('#menuwrap').stop().animate({'height':'100px'});
    });

    // setInterval(function () {
    //   $(".slidelist").delay(1000);
    //   $(".slidelist").animate({ marginTop: -300 });
    //   $(".slidelist").delay(2000);
    //   $(".slidelist").animate({ marginTop: -600 });
    //   $(".slidelist").delay(2000);
    //   $(".slidelist").animate({ marginTop: 0 });
    //   $(".slidelist").delay(2000);
    // });

    $('.imgslide a:gt(0)').hide();
    setInterval(function(){
      $('.imgslide a:first-child').fadeOut()
      .next('a')
      .fadeIn()
      .end()
      .appendTo('.imgslide');
    }, 3000);
    
    $(function(){
      $('.tabmenu>li>a').click(function(){
        $(this).parent().addClass('active')
                        .siblings()
                        .removeClass('active');
          return false;
      });
    });

    
      $('.notice li:first').click(function(){
        $('#modal').addClass('active');
      });
    
      $('.btn').click(function(){
        $('#modal').removeClass('active');
      });

});

