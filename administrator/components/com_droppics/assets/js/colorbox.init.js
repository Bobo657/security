var resizeTimer;
jQuery(document).ready(function($) {
    $('.droppicslightbox').each(function(){
        $(this).find('.wimg a').colorbox({title:function(){
                return $(this).data('title');
        },maxWidth:'90%',maxHeight:'90%'});
    });
    $('.droppicssingleimage').colorbox({title:function(){
                return $(this).data('title');
        },maxWidth:'90%',maxHeight:'90%'});
    
//    $(window).bind('orientationchange', function() {
//        if($('#cboxOverlay:visible').length){
//            reloadColorbox();
//        }
//    });
//    
//    $(window).resize(function() {
//        if($('#cboxOverlay:visible').length){
//            reloadColorbox();
//        }
//    });
//    
});