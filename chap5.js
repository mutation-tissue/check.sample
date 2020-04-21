  $('.list-menu').on('click',function(){
      $(this).css('color', '#ff0000');
  });
alert('fhfhf');
   $('#slideL').on('click',function(){
     if($('#slideL').hasClass('off')){
       $('#slideL').removeClass('off fa-angle-double-right');
       $('#slideL').addClass('fa-angle-double-left');
       $('.slide-close').animate({
         'left': '0px'
       },300);
     } else {
       $('#slideL').addClass('off fa-angle-double-right');
       $('#slideL').removeClass('fa-angle-double-left');
       $('.slide-close').animate({
         'left': '-100px'
       },300);
     }
   });
