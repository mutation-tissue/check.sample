  jQuery('.list-menu').on('click',function(){
      jQuery(this).css('color', '#ff0000');
  });
   jQuery('#slideL').on('click',function(){
     if(jQuery('#slideL').hasClass('off')){
       jQuery('#slideL').removeClass('off fa-angle-double-right');
       jQuery('#slideL').addClass('fa-angle-double-left');
       jQuery('.slide-close').animate({
         'left': '0px'
       },300);
     } else {
       jQuery('#slideL').addClass('off fa-angle-double-right');
       jQuery('#slideL').removeClass('fa-angle-double-left');
       jQuery('.slide-close').animate({
         'left': '-150px'
       },300);
     }
   });
