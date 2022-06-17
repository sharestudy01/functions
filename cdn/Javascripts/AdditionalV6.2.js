var massgEmpty="Favorite Article List Not Available",articleLabel="All Articles",link_articleLabel="/search";(function(a){"use strict";var b=function(){var b={},c={bookmarkIcon:"bookmarkIcon",bookmarkBadge:"show-bookmark",articleQuantity:"article-quantity",affixBookmarkIcon:!0,showBookmarkModal:!0,clickOnAddToBookmark:function(){},clickOnbookmarkIcon:function(){}};return b.getOptions=function(b){var d=a.extend({},c);return"object"==typeof b&&a.extend(d,b),d},b}(),c=function(){var b={};localStorage.content=localStorage.content?localStorage.content:"";var c=function(b){var c=-1,d=f();return a.each(d,function(a,d){if(d.id==b)return void(c=a)}),c},d=function(a){localStorage.content=JSON.stringify(a)},e=function(a,b,c,e,g,h){var i=f();i.push({id:a,title:b,link:c,summary:e,quantity:g,borkimage:h}),d(i)},f=function(){try{var a=JSON.parse(localStorage.content);return a}catch(a){return[]}},g=function(a,b){var e=c(a);if(0>e)return!1;var g=f();return g[e].quantity="undefined"==typeof b?g[e].quantity:b,d(g),!0};return b.getAllcontent=f,b.updatePoduct=g,b.setarticle=function(a,b,c,d,f,h){return"undefined"==typeof a?(console.error("id required"),!1):"undefined"==typeof b?(console.error("title required"),!1):"undefined"==typeof c?(console.error("link required"),!1):"undefined"==typeof h?(console.error("borkimage required"),!1):void(d="undefined"==typeof d?"":d,!g(a)&&e(a,b,c,d,f,h))},b.cleararticle=function(){d([])},b.removearticle=function(b){var c=f();c=a.grep(c,function(a){return a.id!=b}),d(c)},b.getTotalQuantity=function(){var b=0,c=f();return a.each(c,function(a,c){b+=c.quantity}),b},b}(),d=function(d){var e=b.getOptions(d),f=a("."+e.bookmarkIcon),g=a("."+e.bookmarkBadge),h=e.articleQuantity,i="cart-table",j="bookmarkIcon-affix";g.text(c.getTotalQuantity()),a("#"+"cart-modal").length||a("bookmark").append("<span class=\"table-responsive\" id=\""+i+"\"></span>");var k=function(){var b=a("#"+i);b.empty();var d=c.getAllcontent();a.each(d,function(){b.append("<tr class=\"item\" title=\""+this.summary+"\" data-id=\""+this.id+"\"><td class=\"pThmb\"><a class=\"thmb\"><div class=\"bkmImg\" style=\"background-image:url("+this.borkimage+");\"></div></a></td><td class=\"itmTtl\"><a href=\""+this.link+"\" class=\"btn-remove\">"+this.title+"</a></td><td class=\"del\" title=\"Remove favorit\"><a class=\"btn-remove\"><svg class=\"line\" xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 24 24\"><g transform=\"translate(3.500000, 2.000000)\"><path d=\"M15.3891429,7.55409524 C15.3891429,15.5731429 16.5434286,19.1979048 8.77961905,19.1979048 C1.01485714,19.1979048 2.19295238,15.5731429 2.19295238,7.55409524\"></path><line x1=\"16.8651429\" y1=\"4.47980952\" x2=\"0.714666667\" y2=\"4.47980952\"></line><path d=\"M12.2148571,4.47980952 C12.2148571,4.47980952 12.7434286,0.714095238 8.78914286,0.714095238 C4.83580952,0.714095238 5.36438095,4.47980952 5.36438095,4.47980952\"></path></g></svg></a></td></tr>")}),b.append(d.length?"":"<div class=\"n\" role=\"alert\" id=\""+"cart-empty-message"+"\"><center><svg class=\"line\" viewBox=\"0 0 24 24\"><g transform=\"translate(3.650100, 2.749900)\"><path d=\"M16.51,5.55 L10.84,0.15 C10.11,0.05 9.29,0 8.39,0 C2.1,0 -1.95399252e-14,2.32 -1.95399252e-14,9.25 C-1.95399252e-14,16.19 2.1,18.5 8.39,18.5 C14.69,18.5 16.79,16.19 16.79,9.25 C16.79,7.83 16.7,6.6 16.51,5.55 Z\"></path><path d=\"M10.2839,0.0827 L10.2839,2.7437 C10.2839,4.6017 11.7899,6.1067 13.6479,6.1067 L16.5989,6.1067\"></path><line class=\"svgC\" x1=\"10.6623\" y1=\"10.2306\" x2=\"5.7623\" y2=\"10.2306\"></line><line class=\"svgC\" x1=\"8.2131\" y1=\"12.6808\" x2=\"8.2131\" y2=\"7.7808\"></line></g></svg><br/><font style=\"vertical-align: inherit;\">"+massgEmpty+"</font></center><a class=\"button\" href=\""+link_articleLabel+"\"><font style=\"vertical-align: inherit;\">"+articleLabel+"</font></a></font></div>")},l=function(){k()};if(e.affixBookmarkIcon){var m=1*f.offset().top+1*f.css("height").match(/\d+/);a(window).scroll(function(){a(window).scrollTop()>=m?f.addClass(j):f.removeClass(j)})}f.click(function(){e.showBookmarkModal?l():e.clickOnbookmarkIcon(f,c.getAllcontent())}),a(document).on("keypress","."+h,function(a){38==a.keyCode||40==a.keyCode||a.preventDefault()}),a(document).on({click:function(){var b=a(this).closest("tr"),d=b.data("id");b.hide(500,function(){c.removearticle(d),document.querySelector("#toastNotif").innerHTML="<span><i class='del'></i>Removed from Bookmarks</span>",k(),g.text(c.getTotalQuantity())})}},".btn-remove")};a(document).on({click:function(){return a("#offBkm").prop("checked",!0),!1}},".open-close"),a(function(){var b=function(){};a(".sharestudy-bookmark-btn").sharestudyBookmark({bookmarkIcon:"open-close",affixBookmarkIcon:!0,clickOnAddToBookmark:function(c){b(c)},afterAddOnBookmark:function(b){console.log("afterAddOnBookmark",b)},clickOnAddToBookmark:function(c){b(c)}})});var e=function(d,e){var f=a(d),g=b.getOptions(e),h=a("."+g.bookmarkBadge);f.click(function(){g.clickOnAddToBookmark(f);var a=f.data("id"),b=f.data("title"),d=f.data("link"),e=f.data("summary"),i=f.data("quantity"),j=f.data("borkimage");c.setarticle(a,b,d,e,i,j),document.querySelector("#toastNotif").innerHTML="<span><i class='check'></i>Added to Bookmarks</span>",h.text(c.getTotalQuantity())})};a.fn.sharestudyBookmark=function(b){return d(b),a.each(this,function(){new e(this,b)})}})(jQuery);

$(document).ready(function(){switchColorTheme()}),$(window).on("load",function(){checkTheme()});function checkTheme(){const a=localStorage.getItem("theme-color");null===a?$(":root").addClass("theme-0"):$(":root").addClass(a)}function switchColorTheme(){$(".cusP span").click(function(){const a=$(this).attr("id");$(".cusP span").removeClass("active"),$(this).addClass("active"),$(this).checked=!0,removeThemeClasses(),$(":root").addClass(a),localStorage.setItem("theme-color",a),localStorage.setItem("webMode","light"),$("body").removeClass("drK"),$(".drkB").show(),$(".lgtB").hide()})}function removeThemeClasses(){$(":root").removeClass(function(a,b){return(b.match(/\btheme-\S+/g)||[]).join(" ")})}

"theme-0"===localStorage.getItem("theme-color")?($("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#eceff1"),$("#theme-0").addClass("active")):"theme-1"===localStorage.getItem("theme-color")?($("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#F44336"),$("#theme-1").addClass("active")):"theme-2"===localStorage.getItem("theme-color")?($("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#00BFA5"),$("#theme-2").addClass("active")):"theme-3"===localStorage.getItem("theme-color")?($("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#2196F3"),$("#theme-3").addClass("active")):"theme-4"===localStorage.getItem("theme-color")?($("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#FBC02D"),$("#theme-4").addClass("active")):"theme-5"===localStorage.getItem("theme-color")?($("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#E91E63"),$("#theme-5").addClass("active")):"theme-6"===localStorage.getItem("theme-color")?($("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#FF5722"),$("#theme-6").addClass("active")):"theme-7"===localStorage.getItem("theme-color")?($("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#607D8B"),$("#theme-7").addClass("active")):"theme-8"===localStorage.getItem("theme-color")?($("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#5D4037"),$("#theme-8").addClass("active")):"theme-9"===localStorage.getItem("theme-color")?($("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#744D97"),$("#theme-9").addClass("active")):"theme-10"===localStorage.getItem("theme-color")&&($("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#3949AB"),$("#theme-10").addClass("active"));

function changeMeta0(){$("html").is(".theme-0"),$("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#eceff1")}function changeMeta1(){$("html").is(".theme-1"),$("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#F44336")}function changeMeta2(){$("html").is(".theme-2"),$("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#00BFA5")}function changeMeta3(){$("html").is(".theme-3"),$("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#2196F3")}function changeMeta4(){$("html").is(".theme-4"),$("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#FBC02D")}function changeMeta5(){$("html").is(".theme-5"),$("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#E91E63")}function changeMeta6(){$("html").is(".theme-6"),$("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#FF5722")}function changeMeta7(){$("html").is(".theme-7"),$("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#607D8B")}function changeMeta8(){$("html").is(".theme-8"),$("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#5D4037")}function changeMeta9(){$("html").is(".theme-9"),$("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#744D97")}function changeMeta10(){$("html").is(".theme-10"),$("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#3949AB")}

var darkMode=localStorage.getItem("webMode")?localStorage.getItem("webMode"):"light";localStorage.setItem("webMode",darkMode),"dark"===localStorage.getItem("webMode")&&($("body").addClass("drK"),$("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#1e1e1e"),$(".drkB").hide(),$(".lgtB").show()),$(".drkB").on("click",function(){$(".drkB").hide(),$(".lgtB").show(),$("body").addClass("drK"),$("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#1e1e1e"),localStorage.setItem("webMode","dark")}),$(".lgtB").on("click",function(){$(".lgtB").hide(),$(".drkB").show(),$("body").removeClass("drK"),$("meta[name='theme-color'],meta[name='msapplication-navbutton-color'],meta[name='apple-mobile-web-app-status-bar-style']").attr("content","#eceff1"),localStorage.setItem("webMode","light")});

$(function(){var a=document.querySelector(".toTopB .c"),b=a.getTotalLength(),c=function(){var c=$(window).scrollTop(),d=$(document).height()-$(window).height();a.style.strokeDashoffset=b-c*b/d};c(),$(window).scroll(c)});