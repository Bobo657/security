/** 
 * Dropfiles
 * 
 * We developed this code with our hearts and passion.
 * We hope you found it useful, easy to understand and to customize.
 * Otherwise, please feel free to contact us at contact@joomunited.com *
 * @package Dropfiles
 * @copyright Copyright (C) 2013 JoomUnited (http://www.joomunited.com). All rights reserved.
 * @copyright Copyright (C) 2013 Damien Barrère (http://www.crac-design.com). All rights reserved.
 * @license GNU General Public License version 2 or later; http://www.gnu.org/licenses/gpl-2.0.html
 */

jQuery(document).ready(function($) {
    var sourcefiles   = $("#dropfiles-template-files").html();
    var sourcecategories   = $("#dropfiles-template-categories").html();
    
    Handlebars.registerHelper('bytesToSize', function(bytes) {
        return bytesToSize(bytes);
    });
    
    $('.dropfiles-content-multi .catlink').click(function(e){
        e.preventDefault();
        load($(this).parents('.dropfiles-content-multi').data('category'),$(this).data('idcat'));
    });
    
    function load(sourcecat,category){
        $(".dropfiles-content-multi[data-category="+sourcecat+"]").empty();
        
        //Get categories
        $.ajax({
            url: "index.php?option=com_dropfiles&view=frontcategories&format=json&id="+category,
            dataType : "json"
        }).done(function(categories) {
            var template = Handlebars.compile(sourcecategories);
            var html = template(categories);
            $(".dropfiles-content-multi[data-category="+sourcecat+"]").prepend(html);
            $(".dropfiles-content-multi[data-category="+sourcecat+"] .catlink").click(function(e){
                e.preventDefault();
                load($(this).parents('.dropfiles-content-multi').data('category'),$(this).data('idcat'));
            });
        });
        
        //Get files
        $.ajax({
            url: "index.php?option=com_dropfiles&view=frontfiles&format=json&id="+category,
            dataType : "json"
        }).done(function(content) {
            var template = Handlebars.compile(sourcefiles);
            var html = template(content);
            $(".dropfiles-content-multi[data-category="+sourcecat+"]").append(html);
        });

    }    
});