function download(e,n,o,t){var d=document.querySelector(t),l=document.querySelector(t+" .dldMe"),a=document.querySelector(t+" .dldPg"),r=(document.querySelector(t+" .dldDl"),document.querySelector(t+" .dldRt")),s=n;neonLight(n*1000);l.innerHTML="Starting Download in <span>"+s+"</span> seconds...",d.classList.add("dldAlt");var c=setInterval(function(){--s,l.innerHTML="Starting Download in <span>"+s+"</span> seconds...",a.style.strokeDashoffset=Math.floor(s/n*100),s<=0&&(clearInterval(c),l.innerHTML="Please wait...","true"==o?window.open(e,"_blank"):window.location.href=e,r.onclick=function(){"true"==o?window.open(e,"_blank"):window.location.href=e},setTimeout(()=>{d.classList.remove("dldAlt"),d.classList.add("dldRty")},4e3))},1e3)}
