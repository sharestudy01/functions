var autoRelatedIndex,showAutoRelated;!function(a,n){var e,u={homePage:"https://www.sharestudy.in",numPosts:7,titleLength:"auto",containerId:"aRel",newTabLink:!1,callBack:function(){}};for(e in autoRelatedConfig)u[e]=("undefined"==autoRelatedConfig[e]?u:autoRelatedConfig)[e];function l(e){var t=a.createElement("script");t.async="async",t.rel="preload",t.src=e,n.appendChild(t)}function c(e){var t,a,n=e.length;if(0===n)return!1;for(;--n;)t=Math.floor(Math.random()*(n+1)),a=e[n],e[n]=e[t],e[t]=a;return e}var o="object"==typeof labelArray&&0<labelArray.length?"/-/"+c(labelArray)[0]:"";autoRelatedIndex=function(e){var t=e.feed.openSearch$totalResults.$t-u.numPosts,e=(e=1,t=0<t?t:1,Math.floor(Math.random()*(t-e+1))+e);l(u.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+o+"?alt=json-in-script&orderby=updated&start-index="+e+"&max-results="+u.numPosts+"&callback=showAutoRelated")},showAutoRelated=function(e){var t,a,n=document.getElementById(u.containerId),l=c(e.feed.entry),o="<ul>",r=u.newTabLink?' target="_blank"':"";if(n){for(var s=0;s<u.numPosts&&s!=l.length;s++){a=l[s].title.$t,a="auto"!==u.titleLength&&u.titleLength<a.length?a.substring(0,u.titleLength)+"&hellip;":a;for(var i=0,d=l[s].link.length;i<d;i++)t="alternate"==l[s].link[i].rel?l[s].link[i].href:"#";o+='<li><a href="'+t+'" '+r+"><span>"+a+"</span></a></li>"}n.innerHTML=o+="</ul>",u.callBack()}},l(u.homePage.replace(/\/$/,"")+"/feeds/posts/summary"+o+"?alt=json-in-script&orderby=updated&max-results=0&callback=autoRelatedIndex")}((window,document),document.getElementsByTagName("head")[0]);
