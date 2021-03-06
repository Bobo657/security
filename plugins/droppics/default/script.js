/** 
 * Droppics
 * 
 * We developed this code with our hearts and passion.
 * We hope you found it useful, easy to understand and to customize.
 * Otherwise, please feel free to contact us at contact@joomunited.com *
 * @package Droppics
 * @copyright Copyright (C) 2013 JoomUnited (http://www.joomunited.com). All rights reserved.
 * @copyright Copyright (C) 2013 Damien Barrère (http://www.crac-design.com). All rights reserved.
 * @license GNU General Public License version 2 or later; http://www.gnu.org/licenses/gpl-2.0.html
 */

jQuery(document).ready(function($) {
    $(".droppicsgallerydefault").imagesLoaded( function(){
        $('.droppicsgallerydefault img').each(function(index,value) {
            var ah = jQuery(value).height();
            var ph = jQuery(value).parents('.wimg').height();
            var mh = Math.ceil((ph-ah) / 2);
            $(value).css('margin-top', mh);     
        });
    } );
});