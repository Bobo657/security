//gk scripts
jQuery.noConflict(),jQuery.cookie=function(e,t,n){if(arguments.length>1&&"[object Object]"!==String(t)){if(n=jQuery.extend({},n),null==t&&(n.expires=-1),"number"==typeof n.expires){var a=n.expires,o=n.expires=new Date;o.setDate(o.getDate()+a)}return t=String(t),document.cookie=[encodeURIComponent(e),"=",n.raw?t:encodeURIComponent(t),n.expires?"; expires="+n.expires.toUTCString():"",n.path?"; path="+n.path:"",n.domain?"; domain="+n.domain:"",n.secure?"; secure":""].join("")}var i,r=(n=t||{}).raw?function(e){return e}:decodeURIComponent;return(i=new RegExp("(?:^|; )"+encodeURIComponent(e)+"=([^;]*)").exec(document.cookie))?r(i[1]):null},jQuery(window).load(function(){if(setTimeout(function(){jQuery("body").addClass("loaded")},500),jQuery("#gkStyleArea")&&jQuery("#gkStyleArea").find("a").each(function(e,t){jQuery(t).click(function(t){t.preventDefault(),t.stopPropagation(),changeStyle(e+1)})}),jQuery("#gkTools")&&jQuery("#gkMainbody")){var e=100;jQuery("#gkMainbody").css("font-size",e+"%"),jQuery("#gkToolsInc").click(function(t){t.stopPropagation(),t.preventDefault(),e<150&&(jQuery("#gkMainbody").animate({"font-size":e+10+"%"},200),e+=10)}),jQuery("#gkToolsReset").click(function(t){t.stopPropagation(),t.preventDefault(),jQuery("#gkMainbody").animate({"font-size":"100%"},200),e=100}),jQuery("#gkToolsDec").click(function(t){t.stopPropagation(),t.preventDefault(),e>70&&(jQuery("#gkMainbody").animate({"font-size":e-10+"%"},200),e-=10)})}if(0!=jQuery("#system-message-container").length&&jQuery("#system-message-container").each(function(e,t){(function(){jQuery(t).fadeOut("slow")}).delay(3500)}),jQuery("#fontIncrease")&&jQuery(".itemIntroText")&&(jQuery("#fontIncrease").click(function(){jQuery(".itemIntroText").attr("class","itemIntroText largerFontSize")}),jQuery("#fontDecrease").click(function(){jQuery(".itemIntroText").attr("class","itemIntroText smallerFontSize")})),jQuery("#gkPopupLogin").length>0){var t=jQuery("#gkPopupOverlay");t.css({display:"none",opacity:0}),t.fadeOut(),jQuery("#gkPopupLogin").css({display:"block",opacity:0,height:0});var n=null,a=null,o=null;jQuery("#gkPopupLogin")&&((a=jQuery("#gkPopupLogin")).css("display","block"),o=a.find(".gkPopupWrap").outerHeight(),jQuery("#gkLogin").click(function(e){e.preventDefault(),e.stopPropagation(),t.css({opacity:.6}),t.fadeIn("slow"),a.animate({opacity:1,height:o},200,"swing"),n="login",function(){jQuery("#modlgn-username")&&jQuery("#modlgn-username").focus()}.delay(600)})),t.click(function(){"login"==n&&(t.fadeOut("slow"),a.css({opacity:0,height:0}))})}jQuery("body").find(".animate").each(function(e,t){elementsToAnimate.push(["animation",t,jQuery(t).offset().top])}),jQuery("body").find(".animate_queue").each(function(e,t){elementsToAnimate.push(["queue_anim",t,jQuery(t).offset().top])})}),jQuery(document).ready(function(){if(0!=jQuery("body").find(".gk-intro").length){var e=jQuery(".gk-intro .gkIsWrapper-gk_creativity");jQuery(window).scroll(function(){var t=jQuery("body").find(".gkIsWrapperFixed"),n=t.height(),a=jQuery(window).scrollTop();a>=100?jQuery("#gkTop").css("top","0px"):a<100&&jQuery("#gkTop").css("top","-100px"),!Browser.ie8&&a<n&&jQuery(window).height()>1040&&jQuery(t).find(".figcaption").css("top",Math.floor(1*a/8)+"px"),e.length>0&&(a>n?"none"!=e.css("display")&&e.css("display","none"):"block"!=e.css("display")&&e.css("display","block"))})}if(jQuery('a[href^="#"]').click(function(e){e.preventDefault();var t=this.hash,n=jQuery(t);n.length?jQuery("html, body").stop().animate({scrollTop:n.offset().top},1e3,"swing",function(){window.location.hash=t}):window.location.hash=t}),jQuery(document).find(".gkTeam")){var t=jQuery(document).find(".gkTeam figure");jQuery(t).each(function(e,t){if(null!=(t=jQuery(t)).attr("data-fb")||null!=t.attr("data-twitter")||null!=t.attr("data-gplus")){var n=new jQuery('<div class= "gkTeamOverlay"></div>'),a="",o=0;null!=t.attr("data-fb")&&(a+='<a href="'+t.attr("data-fb")+'" data-type="fb">Facebook</a>',o++),null!=t.attr("data-twitter")&&(a+='<a href="'+t.attr("data-twitter")+'" data-type="twitter">Twitter</a>',o++),null!=t.attr("data-gplus")&&(a+='<a href="'+t.attr("data-gplus")+'" data-type="gplus">Google+</a>',o++),jQuery(n).html(a),jQuery(n).addClass("gkIcons"+o),t.find("img").after(n),t.mouseenter(function(){t.addClass("hover");var n=t.find(".gkTeamOverlay a").length;for(e=0;e<n;e++)gkAddClass(t.find(".gkTeamOverlay").find("a")[e],"active",e)}),t.mouseleave(function(){t.removeClass("hover"),t.find(".gkTeamOverlay a").removeClass("active")})}})}});var elementsToAnimate=[];function gkAddClass(e,t,n){var a=jQuery(e).attr("data-delay");a||(a=!1!==n?150*n:0),setTimeout(function(){e.addClass(t)},a)}function changeStyle(e){var t=$GK_TMPL_URL+"/css/style"+e+".css",n=$GK_TMPL_URL+"/css/typography/typography.style"+e+".css";jQuery("head").append('<link rel="stylesheet" href="'+t+'" type="text/css" />'),jQuery("head").append('<link rel="stylesheet" href="'+n+'" type="text/css" />'),jQuery.cookie("gk_creativity_j30_style",e,{expires:365,path:"/"})}jQuery(window).scroll(function(){if(elementsToAnimate.length>0){var e=jQuery(window).scrollTop(),t=jQuery(window).height();if(elementsToAnimate.length){for(var n=0;n<elementsToAnimate.length;n++)if(elementsToAnimate[n][2]<e+t/1.75){var a=elementsToAnimate[n][1];"animation"==elementsToAnimate[n][0]?(gkAddClass(a,"loaded",!1),elementsToAnimate[n]=null):"queue_anim"==elementsToAnimate[n][0]&&(a.getElements(".animate_queue_element").each(function(e,t){gkAddClass(e,"loaded",t)}),elementsToAnimate[n]=null)}elementsToAnimate=elementsToAnimate.clean()}}});

//gkmenu
jQuery(document).ready(function(){if(jQuery("#gkExtraMenu")){jQuery("#gkExtraMenu ul li span").each(function(t){t.attr("onmouseover","")}),jQuery("#gkExtraMenu ul li a").each(function(t){(t=jQuery(t)).attr("onmouseover",""),t.parent().hasClass("haschild")&&null!=jQuery(document.body).attr("data-tablet")&&t.click(function(e){null==t.attr("dblclick")?(e.preventDefault(),e.stopPropagation(),t.attr("dblclick",(new Date).getTime())):("visible"==t.parent().find("div.childcontent").eq(0).css("overflow")&&(window.location=t.attr("href")),(new Date).getTime()-attr("dblclick",0)<500?window.location=t.attr("href"):(e.preventDefault(),e.stopPropagation(),t.attr("dblclick",(new Date).getTime())))})});var t=jQuery("#gkExtraMenu");$GKMenu&&($GKMenu.height||$GKMenu.width)&&(t.find("li.haschild").each(function(t,e){if((e=jQuery(e)).children(".childcontent").length>0){var n=e.children(".childcontent").first(),i=n.height(),a=n.width(),r=$GKMenu.duration,o=$GKMenu.height,c=$GKMenu.width,l={height:o?0:i,width:c?0:a,opacity:0},s={height:i,width:a,opacity:1};n.css(l),n.css({left:"auto",overflow:"hidden"}),e.mouseenter(function(){var t=e.children(".childcontent").first();t.css("display","block"),null!=t.attr("data-base-margin")&&t.css({"margin-left":t.attr("data-base-margin")+"px"});var n=t.offset(),o=jQuery(window).outerWidth(),c=jQuery(window).scrollLeft();if(n.left+a>o+c){var l=o+c-(n.left+a)-5,u=parseInt(t.css("margin-left")),d=u+l;u>0&&(d=10-a),t.css("margin-left",d+"px"),null==t.attr("data-base-margin")&&t.attr("data-base-margin",u)}t.animate(s,r,function(){0==t.outerHeight()?t.css("overflow","hidden"):t.outerHeight(!0)-i<30&&t.outerHeight(!0)-i>=0&&t.css("overflow","visible")})}),e.mouseleave(function(){n.css({overflow:"hidden"}),n.animate(l,r,function(){0==n.outerHeight()?n.css("overflow","hidden"):n.outerHeight(!0)-i<30&&n.outerHeight(!0)-i>=0&&n.css("overflow","visible"),n.css("display","none")})})}}),t.find("li.haschild").each(function(t,e){e=jQuery(e),content=jQuery(e.children(".childcontent").first()),content.css({display:"none"})}))}});

//responsivedivs
jQuery(document).ready(function(){var e=jQuery(window).height();if(e>=760){var t=e-82;jQuery(".isfrontpage #gkHeader").height(t),jQuery(".isfrontpage #pregkPageContent").height(t),jQuery(".isfrontpage #gkBottom1").height(t),jQuery(".isfrontpage #gkBottom2").height(t),jQuery(".isfrontpage #gkBottom3").height(t)}else console.log("responsivediv.js neaktyvuotas")});

//animateImages


//runanimation


//customcatalog
function togglecatalog(e){return jQuery(e).hasClass("menuopened")?(jQuery(e).removeClass("menuopened"),jQuery(e).parent().children("ul").slideToggle("slow")):(jQuery(e).removeClass("activeinside"),jQuery(e).addClass("menuopened"),jQuery(e).parent().children("ul").slideToggle("slow")),!1}jQuery(document).ready(function(){$level0=jQuery(".k2tools ul.level0"),jQuery($level0).children().each(function(){jQuery(this).find(".activeCategory").length>0&&jQuery(this).children(".toggleme").addClass("menuopened")}),jQuery("#gkSidebar .k2tools .level1 .activeCategory").parent(".level1").show()});

//lavamenu
/*0==ie8&&*/jQuery(document).ready(function(){jQuery("#gkExtraMenu li").click(function(){jQuery("#gkExtraMenu .active-link").addClass("unactive-link").removeClass("active-link"),this.removeClass("unactive-link").addClass("active-link")});var e=window.location.href;if(-1!=e.indexOf("#")){jQuery("#gkExtraMenu .active-link").addClass("unactive-link").removeClass("active-link");for(var t=0,i=(a=jQuery("#gkExtraMenu li")).length;t<i;t++){var r=jQuery(a[t]).find("a").attr("href");-1!=e.indexOf(r)&&-1!=r.indexOf("#")&&jQuery(a[t]).removeClass("unactive-link").addClass("active-link")}}if(jQuery("body").hasClass("nofrontpage")){var a;for(t=0,i=(a=jQuery("#gkExtraMenu li")).length;t<i;t++)jQuery(a[t]).hasClass("active")&&jQuery(a[t]).removeClass("unactive-link").addClass("active-link")}function l(){if(jQuery("li.active-link").length){var e=jQuery("li.active-link").offset().left-jQuery("#gkExtraMenu").offset().left-1,t=jQuery("li.active-link").offset().top-jQuery("#gkExtraMenu").offset().top,i=jQuery("li.active-link").width()+"px";jQuery(".floatr").css({left:e+"px",top:t+"px",width:i})}else{e=jQuery(".box-category").width();jQuery(".floatr").css({left:e+"px",top:"0px",width:"0px"})}}l();jQuery("#gkExtraMenu li").hover(function(){var e=jQuery(this).offset().left-jQuery("#gkExtraMenu").offset().left-1,t=jQuery(this).offset().top-jQuery("#gkExtraMenu").offset().top,i=jQuery(this).width()+"px";jQuery(".floatr").css({width:i,top:t+"px",left:e+"px"}),jQuery("#gkExtraMenu li a").css("color","#CDCDCD"),jQuery(this).children("a").css("color","#FFFFFF")},function(){jQuery("#gkExtraMenu li a").css("color","#CDCDCD"),jQuery("#gkExtraMenu .active-link a").css("color","#FFFFFF"),l()})});

//menufixed
/*0==ie8&&*/jQuery(document).ready(function(){jQuery("#gkTop").addClass("pradzia");jQuery("body").hasClass("isfrontpage")?jQuery(window).bind("scroll",function(){jQuery(window).scrollTop()>0?(jQuery("#gkTop").removeClass("isIntro"),jQuery("#gkTop").addClass("fixed")):(jQuery("#gkTop").removeClass("fixed"),jQuery("#gkTop").addClass("isIntro"))}):jQuery("#gkTop").addClass("nofrontpagemenu")});