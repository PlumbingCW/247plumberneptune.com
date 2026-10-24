(function(){var d=document,r=d.documentElement;
var dr=d.querySelector(".mob-drawer"),ov=d.querySelector(".mob-overlay"),hb=d.querySelector(".hamburger"),cl=d.querySelector(".mob-close");
function openM(){dr.classList.add("open");ov.classList.add("open");r.style.overflow="hidden";hb.setAttribute("aria-expanded","true");cl.focus();}
function closeM(){dr.classList.remove("open");ov.classList.remove("open");r.style.overflow="";hb.setAttribute("aria-expanded","false");}
if(hb&&dr){hb.addEventListener("click",openM);cl.addEventListener("click",closeM);ov.addEventListener("click",closeM);
d.addEventListener("keydown",function(e){if(e.key==="Escape"){closeM();}});
window.addEventListener("resize",function(){if(window.innerWidth>768){closeM();}});}
var qs=d.querySelectorAll(".faq-q");
for(var i=0;i<qs.length;i++){qs[i].addEventListener("click",function(){var b=this,a=d.getElementById(b.getAttribute("aria-controls")),o=b.getAttribute("aria-expanded")==="true";
b.setAttribute("aria-expanded",o?"false":"true");a.style.maxHeight=o?"0px":a.scrollHeight+"px";});}
window.addEventListener("resize",function(){var os=d.querySelectorAll('.faq-q[aria-expanded="true"]');for(var j=0;j<os.length;j++){var a=d.getElementById(os[j].getAttribute("aria-controls"));a.style.maxHeight=a.scrollHeight+"px";}});
})();