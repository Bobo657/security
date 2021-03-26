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

(function($){
    $(document).ready(function(){
        $('.droppicsgallerypolaroid.droppicsrotate .wimg').each(function(i,e){
            a = Math.floor((Math.random()*15)+3);
            s=Math.floor((Math.random()*2));
            if(s==0){
                a=-a;
            }
            $(e).data('rotation',a);
            $(e).rotate({
            angle : a,
            bind: { 
                        mouseover : function() { 
                            $(e).rotate({animateTo:0})
                        },
                        mouseout : function() { 
                            $(e).rotate({animateTo:$(e).data('rotation')})
                        }
                    } 
            });        
        });
    });
})(jQuery);