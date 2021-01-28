$(document).ready(function()
{
  $('i.icon').click(function(){
      $('.nav-list').slideToggle(1000)
  });  
    $(window).scroll(function(){
       var sc=$(this).scrollTop();
        if(sc>50)
            {
                $('header').addClass('sticky');
            }
        else
            {
                 $('header').removeClass('sticky');
            }
        if(sc>1980)
            {
                $('.timer').countTo();
                $(window).off('scroll');  
            }
    });
    
    $('.buttons button').click(function(){
        
        $(this).addClass('active_btn').siblings().removeClass('active_btn');
        
        var CSSFilter = $(this).attr('id');
        
        if( CSSFilter === 'all' ) {
            $('.images > div ').fadeIn(500);
        } else {
            $('.images > div ').fadeOut();
            $('.images').contents().filter('.' + CSSFilter).fadeIn(500);
        }
        
    });
    $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})
});

