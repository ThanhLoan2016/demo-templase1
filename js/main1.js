$(document).ready(function(){
$('.fa-bars').click(function() {
  $('.site').toggleClass('open-repon');
  $('#icon-menu').toggleClass(' fa-times fa-bars');
});

$(window).resize(function(){
  var length= $(document).width();
  if(length>=768)
  {
   $('.site').removeClass('open-repon');
   $('#icon-menu').removeClass('fa-times').addClass('fa-bars');
   return false;
  }

});

// scroll 
$(window).scroll(function() {
  var site_width=$(window).scrollTop();
  if (site_width>100) {
     $('#btn-top').fadeIn();
     return false;
  }
   else
   {
      $('#btn-top').fadeOut();
      return false;  
   }

 
 });
    $('#btn-top img').click(function() {
     $('body,html').animate({
          scrollTop: 0
     },1000);
     return false;
   });
    // end scroll


$('.true0').click(function(){
  $('.sub-menu').slideToggle();
  $('.true0').toggleClass('fa-angle-right  fa-chevron-down');
});

$('.true1').click(function(){
  
 jQuery('.true1').toggleClass('fa-angle-right fa-chevron-down');
 $('.sub-menu1').slideToggle();
 

});

$('.true2').click(function(){
  $('.sub-menu2').slideToggle();
  $('.true2').toggleClass('fa-angle-right  fa-chevron-down');
});

$('.true3').click(function(){
  $('.sub-menu3').slideToggle();
  $('.true3').toggleClass('fa-angle-right fa-chevron-down');
});

$('.true4').click(function(){
  $('.sub-menu4').slideToggle();
  $('.true4').toggleClass('fa-angle-right fa-chevron-down');
});

$('.true5').click(function(){
  $('.sub-menu5').slideToggle();
  $('.true5').toggleClass('fa-angle-right fa-chevron-down');
});

$('.true6').click(function(){
  $('.sub-menu6').slideToggle();
  $('.true6').toggleClass('fa-angle-right fa-chevron-down');
});

});


