(()=>{"use strict";var e={d:(t,n)=>{for(var i in n)e.o(n,i)&&!e.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:n[i]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t)};function t(e,t=null,n=null,i=null){let s=document.createElement(e);if(t&&s.classList.add(...t),n&&(s.textContent=n),i)for(let e in i)s.setAttribute(e,i[e]);return s}e.d({},{O:()=>S,n:()=>k});const n=document.createElement("nav");["Intro","About","Menu"].forEach((e=>{let i=t("div",["tab"],e,{id:e.toLowerCase()});n.appendChild(i)}));const i=n,s=t("div",["loader","lds-default"]);s.innerHTML="<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div>";const a=t("div",["loader-background"]),d=document.createElement("button");d.textContent="Enter";const l=document.createElement("button");l.classList.add("skip"),l.textContent="Skip Intro";const o=document.createElement("h1");o.classList.add("punjabi"),o.innerHTML="ਲਾਡੀ <span>ਦੇ</span> ਲੱਡੂ";const r=document.createElement("div");r.classList.add("english");const c=document.createElement("h1");c.textContent="Laddi's Laddoos";const u=document.createElement("p");function p(){d.addEventListener("click",(()=>{S.classList.add("transformed"),S.addEventListener("transitionend",v),d.style.opacity="0",d.style.pointerEvents="none",l.style.opacity="1",l.style.pointerEvents="initial"})),l.addEventListener("click",(()=>{r.classList.add("quick"),y(),l.style.opacity="0"}))}function v(){S.classList.remove("transformed"),S.classList.add("second-image","transformed"),l.style.opacity="0",l.style.pointerEvents="none",S.removeEventListener("transitionend",v),setTimeout(h,2e3)}u.textContent="...Quality Sweets and Chai",r.appendChild(c),r.appendChild(u);const m=t("video",null,null,{src:"./img/chai.mp4#t=2",muted:"true"});function h(){m.setAttribute("autoplay","true"),k.appendChild(m),m.classList.add("visible"),o.classList.add("visible"),setTimeout(y,8e3)}function y(){m.classList.remove("visible"),o.classList.add("transitioned"),r.classList.add("transitioned"),S.classList.remove("second-image","transformed"),S.classList.add("final"),i.classList.add("visible")}function L(){r.style.visibility="hidden"}const f=t("div",["menu"]),b=t("h2",null,"Menu"),E=t("span",null,"ਮੀਨੂ"),C=t("div",["menuText"]);function g(){f.classList.remove("onLoad","show")}b.appendChild(E),f.append(b,C),[{name:"gujiya",titleEnglish:"Gujiya",titlePunjabi:"ਗੁਜੀਆ",description:"Pastry with sweet nut filling"},{name:"barfi",titleEnglish:"Besan Barfi",titlePunjabi:"ਬੇਸਨ ਬਰਫੀ",description:"Classic sweet and nutty taste"},{name:"jalebi",titleEnglish:"Jalebi",titlePunjabi:"ਜਲੇਬੀ",description:"Deep fried North Indian treat"},{name:"mysore-pak",titleEnglish:"Mysore Pak",titlePunjabi:"ਮੈਸੂਰ ਪਾਕ",description:"A rich barfi from Karnataka"},{name:"malai-peda",titleEnglish:"Malai Peda",titlePunjabi:"ਮਲਾਈ ਪੇਡਾ",description:"Sweet cream laddoo"},{name:"ladoo",titleEnglish:"Laddoo",titlePunjabi:"ਲੱਡੂ",description:"Original Punjabi taste"}].forEach((e=>{!function(e,n,i,s){let a=t("div",[e]),d=t("h3",null,n),l=t("span",null,i),o=t("p",null,s);d.appendChild(l),a.append(d,o),C.appendChild(a)}(e.name,e.titleEnglish,e.titlePunjabi,e.description)}));const w=t("div",["about","menu"]),j=t("div",["aboutText","menuText"]);function P(){w.classList.remove("onLoad"),w.classList.remove("show")}w.appendChild(j),[{name:"about-us",titleEnglish:"About Us",titlePunjabi:"ਸਾਡੇ ਬਾਰੇ",description:["Chef Laddi brings the flavours of Hoshiapur to the heart of downtown Vancouver. With a discerning palette perfected over three Indian states and two Canadian provinces, only the freshest and highest quality sweets make the grade. Come taste for yourself!"]},{name:"contact",titleEnglish:"Contact",titlePunjabi:"ਸੰਪਰਕ",description:["712 Granville Street, Vancouver BC","eat@laddisladdoos.ca","(604) 555-0150"]},{name:"hours",titleEnglish:"Hours of Operation",titlePunjabi:"ਕਾਰਵਾਈ ਦੇ ਘੰਟੇ",description:["Monday & Tuesday: Closed","Wednesday-Sunday: 4pm-10pm"]}].forEach((e=>{!function(e,n,i,s){let a=t("div",[e]),d=t("h3",null,n),l=t("span",null,i);d.appendChild(l),a.appendChild(d),s.forEach((e=>{let n=t("p",null,e);a.appendChild(n)})),j.appendChild(a)}(e.name,e.titleEnglish,e.titlePunjabi,e.description)}));const[k,S]=function(){const e=document.querySelector("#content"),t=document.createElement("div");return t.classList.add("background"),e.appendChild(t),e.appendChild(a),e.appendChild(s),e.appendChild(i),e.appendChild(d),e.appendChild(l),e.appendChild(o),e.appendChild(r),window.addEventListener("load",(()=>{setTimeout((()=>{s.style.display="none",a.style.display="none"}),2e3)})),p(),document.querySelector("#intro").classList.add("current"),e.appendChild(f),e.appendChild(w),[e,t]}(),q=document.querySelectorAll(".tab"),x=document.querySelector("#about"),T=document.querySelector("#menu"),M=document.querySelector("#intro");function A(){for(let e of q)e.classList.remove("current")}M.addEventListener("click",(()=>{A(),M.classList.add("current"),g(),P(),l.style.pointerEvents="none",d.style.opacity="1",d.style.pointerEvents="initial",r.style.visibility="visible",o.classList.remove("visible","transitioned"),r.classList.remove("transitioned","quick"),S.classList.remove("transformed","second-image","final"),i.classList.remove("visible")})),x.addEventListener("click",(()=>{A(),x.classList.add("current"),d.style.pointerEvents="none",L(),g(),w.classList.add("onLoad"),w.classList.add("show")})),T.addEventListener("click",(()=>{A(),T.classList.add("current"),d.style.pointerEvents="none",L(),P(),f.classList.add("onLoad","show")})),function(){if(matchMedia("(hover: none)").matches){let e=document.querySelector("html"),t=window.getComputedStyle(e,null).getPropertyValue("font-size").slice(0,-2);t>20?e.style.fontSize="16px":t<=16&&(e.style.fontSize="18px")}}()})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVlVLE1BQU1FLGNBQWdCLE9BQ2xDUSxJQUNBTSxJRGlDQVcsRUFBTWxELFVBQVVDLElBQUksVUFDcEJpRCxFQUFNbEQsVUFBVUMsSUFBSSxXQzdCeEJpRSxFQUFROUMsaUJBQWlCLFNBQVMsS0FDOUJnRCxJQUNBRixFQUFRbEUsVUFBVUMsSUFBSSxXQUN0QlksRUFBWVUsTUFBTUUsY0FBZ0IsT0FDbENRLElBQ0FtQixJRjBDQWpCLEVBQUtuQyxVQUFVQyxJQUFJLFNBQVMsV0lsRmpCLFdBR1gsR0FGY3FFLFdBQVcsaUJBQWlCQyxRQUUvQixDQUNQLElBQUlDLEVBQVUxRSxTQUFTNkQsY0FBYyxRQUNqQ2MsRUFBZWIsT0FBT2MsaUJBQWlCRixFQUMzQyxNQUFNRyxpQkFBaUIsYUFBYUMsTUFBTSxHQUFHLEdBRXpDSCxFQUFlLEdBQ2ZELEVBQVFqRCxNQUFNc0QsU0FBVyxPQUNsQkosR0FBZ0IsS0FDdkJELEVBQVFqRCxNQUFNc0QsU0FBVyxTRnVDckNDLEkiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2Uvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL25hdmJhci5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvbG9hZGluZy1hbmltYXRpb24uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2J1dHRvbnMuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2ludHJvVGV4dC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW50cm8uanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL21lbnUuanMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2Fib3V0LmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50LXBhZ2UvLi9zcmMvaW5pdGlhbFBhZ2VMb2FkLmpzIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS8uL3NyYy9mb250LWFkanVzdC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIEN1cmlvdXMgaWYgdGhpcyBtYWtlcyBET00gY3JlYXRpb24gbW9yZSByZXNvdXJjZSBpbnRlbnNpdmU/XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVOZXdFbGVtZW50ICggXG4gICAgICAgICAgICB0eXBlLCBjbGFzc2VzID0gbnVsbCwgdGV4dCA9IG51bGwsIGF0dHJpYnV0ZXMgPSBudWxsKSB7XG5cbiAgICBsZXQgY3JlYXRlZEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KHR5cGUpO1xuXG4gICAgaWYgKGNsYXNzZXMpIHtcbiAgICAgICAgY3JlYXRlZEVsZW1lbnQuY2xhc3NMaXN0LmFkZCguLi5jbGFzc2VzKTtcbiAgICB9XG5cbiAgICBpZiAodGV4dCkge1xuICAgICAgICBjcmVhdGVkRWxlbWVudC50ZXh0Q29udGVudCA9IHRleHQ7XG4gICAgfVxuXG4gICAgaWYgKGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgZm9yIChsZXQga2V5IGluIGF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgIGNyZWF0ZWRFbGVtZW50LnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSlcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBjcmVhdGVkRWxlbWVudDtcbn0iLCJpbXBvcnQgY3JlYXRlTmV3RWxlbWVudCBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBuYXZJdGVtcyA9IFsnSW50cm8nLCAnQWJvdXQnLCAnTWVudSddO1xuY29uc3QgbmF2QmFyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbmF2Jyk7XG5cbm5hdkl0ZW1zLmZvckVhY2goIChpdGVtKSA9PiB7XG4gICAgbGV0IG5ld05hdkl0ZW0gPSBjcmVhdGVOZXdFbGVtZW50KCdkaXYnLCBbJ3RhYiddLCBpdGVtLCBcbiAgICAgICAgICAgIHsnaWQnOiBpdGVtLnRvTG93ZXJDYXNlKCl9KTtcbiAgICBuYXZCYXIuYXBwZW5kQ2hpbGQobmV3TmF2SXRlbSk7XG59KVxuXG5leHBvcnQgZGVmYXVsdCBuYXZCYXI7IiwiaW1wb3J0IGNyZWF0ZU5ld0VsZW1lbnQgZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgbG9hZGVyID0gY3JlYXRlTmV3RWxlbWVudCgnZGl2JywgWydsb2FkZXInLCAnbGRzLWRlZmF1bHQnXSk7XG5sb2FkZXIuaW5uZXJIVE1MID0gXCI8ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj48ZGl2PjwvZGl2PjxkaXY+PC9kaXY+PGRpdj48L2Rpdj5cIjtcblxuY29uc3QgbG9hZGVyQmFja2dyb3VuZCA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2RpdicsIFsnbG9hZGVyLWJhY2tncm91bmQnXSk7XG5cbmV4cG9ydCB7bG9hZGVyLCBsb2FkZXJCYWNrZ3JvdW5kIGFzIGxvYWRlckJhY2tkcm9wfSIsImNvbnN0IHN0YXJ0QnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5zdGFydEJ1dHRvbi50ZXh0Q29udGVudCA9IFwiRW50ZXJcIjtcblxuY29uc3Qgc2tpcEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuc2tpcEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdza2lwJyk7XG5za2lwQnV0dG9uLnRleHRDb250ZW50ID0gXCJTa2lwIEludHJvXCI7XG5cbmV4cG9ydCB7c3RhcnRCdXR0b24sIHNraXBCdXR0b259OyIsImNvbnN0IHB1bmphYmkgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdoMScpO1xucHVuamFiaS5jbGFzc0xpc3QuYWRkKCdwdW5qYWJpJyk7XG5wdW5qYWJpLmlubmVySFRNTCA9ICfgqLLgqL7gqKHgqYAgPHNwYW4+4Kim4KmHPC9zcGFuPiDgqLLgqbHgqKHgqYInO1xuXG5jb25zdCBlbmdsaXNoID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5lbmdsaXNoLmNsYXNzTGlzdC5hZGQoJ2VuZ2xpc2gnKTtcblxuY29uc3QgZW5nbGlzaFRpdGxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaDEnKTtcbmVuZ2xpc2hUaXRsZS50ZXh0Q29udGVudCA9IFwiTGFkZGkncyBMYWRkb29zXCI7XG5cbmNvbnN0IGVuZ2xpc2hTdWJ0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbmVuZ2xpc2hTdWJ0aXRsZS50ZXh0Q29udGVudCA9IFwiLi4uUXVhbGl0eSBTd2VldHMgYW5kIENoYWlcIjtcblxuZW5nbGlzaC5hcHBlbmRDaGlsZChlbmdsaXNoVGl0bGUpO1xuZW5nbGlzaC5hcHBlbmRDaGlsZChlbmdsaXNoU3VidGl0bGUpO1xuXG5leHBvcnQge3B1bmphYmksIGVuZ2xpc2h9IiwiXG5pbXBvcnQgeyBzdGFydEJ1dHRvbiwgc2tpcEJ1dHRvbiB9IGZyb20gJy4vYnV0dG9ucyc7XG5pbXBvcnQgeyBjb250YWluZXIsIGJhY2tncm91bmQgfSBmcm9tICcuL2luZGV4LmpzJztcbmltcG9ydCB7IHB1bmphYmksIGVuZ2xpc2ggfSBmcm9tICcuL2ludHJvVGV4dC5qcyc7XG5pbXBvcnQgbmF2QmFyIGZyb20gJy4vbmF2YmFyJztcbmltcG9ydCBjcmVhdGVOZXdFbGVtZW50IGZyb20gXCIuL3V0aWxzXCI7XG5cbmZ1bmN0aW9uIHBsYXlJbnRybygpIHtcbiAgICAvLyBBZGQgRXZlbnQgTGlzdGVuZXJzIHRvIGJ1dHRvbnNcbiAgICBzdGFydEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCd0cmFuc2Zvcm1lZCcpO1xuXG4gICAgICAgIGJhY2tncm91bmQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIGNoYW5nZUltYWdlKTtcblxuICAgICAgICBzdGFydEJ1dHRvbi5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICBzdGFydEJ1dHRvbi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgICAgICBza2lwQnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMSc7XG4gICAgICAgIHNraXBCdXR0b24uc3R5bGUucG9pbnRlckV2ZW50cyA9ICdpbml0aWFsJztcbiAgICB9KVxuXG4gICAgc2tpcEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgZW5nbGlzaC5jbGFzc0xpc3QuYWRkKCdxdWljaycpO1xuICAgICAgICBtYWtlRmluYWxTdGF0ZSgpO1xuICAgICAgICBza2lwQnV0dG9uLnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgfSlcbn1cblxuZnVuY3Rpb24gbWFrZUluaXRpYWxTdGF0ZSgpIHtcbiAgICBza2lwQnV0dG9uLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgc3RhcnRCdXR0b24uc3R5bGUub3BhY2l0eSA9ICcxJztcbiAgICBzdGFydEJ1dHRvbi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2luaXRpYWwnO1xuXG4gICAgZW5nbGlzaC5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xuICAgIHB1bmphYmkuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScsICd0cmFuc2l0aW9uZWQnKTtcbiAgICBlbmdsaXNoLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zaXRpb25lZCcsICdxdWljaycpO1xuXG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QucmVtb3ZlKCd0cmFuc2Zvcm1lZCcsICdzZWNvbmQtaW1hZ2UnLCAnZmluYWwnKTtcbiAgICBuYXZCYXIuY2xhc3NMaXN0LnJlbW92ZSgndmlzaWJsZScpO1xufVxuXG5mdW5jdGlvbiBjaGFuZ2VJbWFnZSgpIHtcbiAgICBiYWNrZ3JvdW5kLmNsYXNzTGlzdC5yZW1vdmUoJ3RyYW5zZm9ybWVkJyk7XG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdzZWNvbmQtaW1hZ2UnLCAndHJhbnNmb3JtZWQnKTtcblxuICAgIHNraXBCdXR0b24uc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICBza2lwQnV0dG9uLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG5cbiAgICBiYWNrZ3JvdW5kLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBjaGFuZ2VJbWFnZSk7XG4gICAgXG4gICAgc2V0VGltZW91dChzdGFydFZpZGVvLCAyMDAwKTtcbn1cblxuLy8gUGxheSB2aWRlb1xuY29uc3QgdmlkZW8gPSBjcmVhdGVOZXdFbGVtZW50KCd2aWRlbycsIG51bGwsIG51bGwsIHsgJ3NyYyc6IFwiLi9pbWcvY2hhaS5tcDQjdD0yXCIsICdtdXRlZCc6ICd0cnVlJyB9KTtcblxuZnVuY3Rpb24gc3RhcnRWaWRlbygpIHtcbiAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYSB3YXJuaW5nIGFuZCBibG9jayBhdXRvcGxheSB1bmxlc3Mgc2V0IGluc2lkZSB0aGUgZXZlbnQgbGlzdGVuZXJcbiAgICB2aWRlby5zZXRBdHRyaWJ1dGUoJ2F1dG9wbGF5JywgJ3RydWUnKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQodmlkZW8pO1xuICAgIHZpZGVvLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICBwdW5qYWJpLmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcblxuICAgIHNldFRpbWVvdXQobWFrZUZpbmFsU3RhdGUsIDgwMDApO1xufVxuXG5mdW5jdGlvbiBtYWtlRmluYWxTdGF0ZSgpIHtcbiAgICB2aWRlby5jbGFzc0xpc3QucmVtb3ZlKCd2aXNpYmxlJyk7XG4gICAgcHVuamFiaS5jbGFzc0xpc3QuYWRkKCd0cmFuc2l0aW9uZWQnKTtcbiAgICBlbmdsaXNoLmNsYXNzTGlzdC5hZGQoJ3RyYW5zaXRpb25lZCcpO1xuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LnJlbW92ZSgnc2Vjb25kLWltYWdlJywgJ3RyYW5zZm9ybWVkJyk7XG4gICAgYmFja2dyb3VuZC5jbGFzc0xpc3QuYWRkKCdmaW5hbCcpO1xuICAgIG5hdkJhci5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyTWFpbigpIHtcbiAgICBlbmdsaXNoLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcbn1cblxuZXhwb3J0IHsgcGxheUludHJvLCBtYWtlSW5pdGlhbFN0YXRlLCBtYWtlRmluYWxTdGF0ZSwgY2xlYXJNYWluIH0iLCJpbXBvcnQgY3JlYXRlTmV3RWxlbWVudCBmcm9tIFwiLi91dGlsc1wiO1xuXG5jb25zdCBtZW51SXRlbXMgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiBcImd1aml5YVwiLFxuICAgICAgICB0aXRsZUVuZ2xpc2g6IFwiR3VqaXlhXCIsXG4gICAgICAgIHRpdGxlUHVuamFiaTogXCLgqJfgqYHgqJzgqYDgqIZcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiUGFzdHJ5IHdpdGggc3dlZXQgbnV0IGZpbGxpbmdcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJiYXJmaVwiLFxuICAgICAgICB0aXRsZUVuZ2xpc2g6IFwiQmVzYW4gQmFyZmlcIixcbiAgICAgICAgdGl0bGVQdW5qYWJpOiBcIuCorOCph+CouOCoqCDgqKzgqLDgqKvgqYBcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFwiQ2xhc3NpYyBzd2VldCBhbmQgbnV0dHkgdGFzdGVcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJqYWxlYmlcIixcbiAgICAgICAgdGl0bGVFbmdsaXNoOiBcIkphbGViaVwiLFxuICAgICAgICB0aXRsZVB1bmphYmk6IFwi4Kic4Kiy4KmH4Kis4KmAXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIkRlZXAgZnJpZWQgTm9ydGggSW5kaWFuIHRyZWF0XCIsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwibXlzb3JlLXBha1wiLFxuICAgICAgICB0aXRsZUVuZ2xpc2g6IFwiTXlzb3JlIFBha1wiLFxuICAgICAgICB0aXRsZVB1bmphYmk6IFwi4Kiu4KmI4Ki44KmC4KiwIOCoquCovuColVwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJBIHJpY2ggYmFyZmkgZnJvbSBLYXJuYXRha2FcIixcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJtYWxhaS1wZWRhXCIsXG4gICAgICAgIHRpdGxlRW5nbGlzaDogXCJNYWxhaSBQZWRhXCIsXG4gICAgICAgIHRpdGxlUHVuamFiaTogXCLgqK7gqLLgqL7gqIgg4Kiq4KmH4Kih4Ki+XCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBcIlN3ZWV0IGNyZWFtIGxhZGRvb1wiLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiBcImxhZG9vXCIsXG4gICAgICAgIHRpdGxlRW5nbGlzaDogXCJMYWRkb29cIixcbiAgICAgICAgdGl0bGVQdW5qYWJpOiBcIuCosuCpseCooeCpglwiLFxuICAgICAgICBkZXNjcmlwdGlvbjogXCJPcmlnaW5hbCBQdW5qYWJpIHRhc3RlXCIsXG4gICAgfSxcblxuXVxuXG5jb25zdCBtZW51ID0gY3JlYXRlTmV3RWxlbWVudCgnZGl2JywgWydtZW51J10pO1xuXG5jb25zdCBtZW51SGVhZGluZyA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2gyJywgbnVsbCwgXCJNZW51XCIpO1xuY29uc3QgbWVudUhlYWRpbmdQdW5qYWJpID0gY3JlYXRlTmV3RWxlbWVudCgnc3BhbicsIG51bGwsIFwi4Kiu4KmA4Kio4KmCXCIpO1xuXG5jb25zdCBtZW51VGV4dCA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2RpdicsIFsnbWVudVRleHQnXSk7XG5cbm1lbnVIZWFkaW5nLmFwcGVuZENoaWxkKG1lbnVIZWFkaW5nUHVuamFiaSk7XG5tZW51LmFwcGVuZChtZW51SGVhZGluZywgbWVudVRleHQpO1xuXG5cbi8vIENyZWF0ZSBkaXYgZm9yIGVhY2ggbWVudSBpdGVtXG5tZW51SXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICByZW5kZXJJdGVtRGl2KGl0ZW0ubmFtZSwgaXRlbS50aXRsZUVuZ2xpc2gsXG4gICAgICAgIGl0ZW0udGl0bGVQdW5qYWJpLCBpdGVtLmRlc2NyaXB0aW9uKTtcbn0pXG5cblxuZnVuY3Rpb24gcmVuZGVySXRlbURpdihuYW1lLCB0aXRsZUVuZ2xpc2gsIFxuICAgICAgICAgICAgdGl0bGVQdW5qYWJpLCBkZXNjcmlwdGlvbikge1xuICAgIFxuICAgIC8vIENyZWF0ZSBlbGVtZW50c1xuICAgIGxldCBpdGVtRGl2ID0gY3JlYXRlTmV3RWxlbWVudCgnZGl2JywgW25hbWVdKTtcblxuICAgIGxldCBpdGVtVGl0bGUgPSBjcmVhdGVOZXdFbGVtZW50KCdoMycsIG51bGwsIHRpdGxlRW5nbGlzaCk7XG4gICAgbGV0IHB1bmphYmlUaXRsZSA9IGNyZWF0ZU5ld0VsZW1lbnQoJ3NwYW4nLCBudWxsLCB0aXRsZVB1bmphYmkpO1xuXG4gICAgbGV0IGl0ZW1EZXNjcmlwdGlvbiA9IGNyZWF0ZU5ld0VsZW1lbnQoJ3AnLCBudWxsLCBkZXNjcmlwdGlvbik7XG5cbiAgICAvLyBBcHBlbmRcbiAgICBpdGVtVGl0bGUuYXBwZW5kQ2hpbGQocHVuamFiaVRpdGxlKTtcbiAgICBpdGVtRGl2LmFwcGVuZChpdGVtVGl0bGUsIGl0ZW1EZXNjcmlwdGlvbik7XG5cbiAgICBtZW51VGV4dC5hcHBlbmRDaGlsZChpdGVtRGl2KTtcbn1cblxuLy8gLy8gVHJpZ2dlciBhbmltYXRpb24gb25jZSBsb2FkZWRcbi8vIG1lbnUuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbi8vICAgICBtZW51LmNsYXNzTGlzdC5hZGQoJ29uTG9hZCcsJ3Nob3cnKVxuLy8gfSk7XG5cbmZ1bmN0aW9uIHNob3dNZW51KCkge1xuICAgIG1lbnUuY2xhc3NMaXN0LmFkZCgnb25Mb2FkJywnc2hvdycpO1xuXG59XG5mdW5jdGlvbiBjbGVhck1lbnUoKSB7XG4gICAgbWVudS5jbGFzc0xpc3QucmVtb3ZlKCdvbkxvYWQnLCAnc2hvdycpO1xufVxuXG4vLyBEbyB5b3UgdGhpbmsgdGhlcmUgaXMgYW55IGFkdmFudGFnZSB0byBtYWtpbmcgdGhlIGRpdiBhbmQgYXBwZW5kaW5nIGl0IGluIHRoZSBzYW1lIG1vZHVsZT9cbi8vIEJlc2lkZXMgbWVldGluZyBzcGVjLCBkb2VzIGl0IGhhdmUgYW4gYWR2YW50YWdlIGZvciBtZW1vcnk/XG5leHBvcnQge21lbnUsIHNob3dNZW51LCBjbGVhck1lbnV9IiwiaW1wb3J0IGNyZWF0ZU5ld0VsZW1lbnQgZnJvbSBcIi4vdXRpbHNcIjtcblxuY29uc3QgYWJvdXRJbmZvID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogXCJhYm91dC11c1wiLFxuICAgICAgICB0aXRsZUVuZ2xpc2g6IFwiQWJvdXQgVXNcIixcbiAgICAgICAgdGl0bGVQdW5qYWJpOiBcIuCouOCovuCooeCphyDgqKzgqL7gqLDgqYdcIixcbiAgICAgICAgZGVzY3JpcHRpb246IFtcIkNoZWYgTGFkZGkgYnJpbmdzIHRoZSBmbGF2b3VycyBvZiBIb3NoaWFwdXIgdG8gdGhlIGhlYXJ0IG9mIGRvd250b3duIFZhbmNvdXZlci4gV2l0aCBhIGRpc2Nlcm5pbmcgcGFsZXR0ZSBwZXJmZWN0ZWQgb3ZlciB0aHJlZSBJbmRpYW4gc3RhdGVzIGFuZCB0d28gQ2FuYWRpYW4gcHJvdmluY2VzLCBvbmx5IHRoZSBmcmVzaGVzdCBhbmQgaGlnaGVzdCBxdWFsaXR5IHN3ZWV0cyBtYWtlIHRoZSBncmFkZS4gQ29tZSB0YXN0ZSBmb3IgeW91cnNlbGYhXCJdXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6IFwiY29udGFjdFwiLFxuICAgICAgICB0aXRsZUVuZ2xpc2g6IFwiQ29udGFjdFwiLFxuICAgICAgICB0aXRsZVB1bmphYmk6IFwi4Ki44Kmw4Kiq4Kiw4KiVXCIsXG4gICAgICAgIGRlc2NyaXB0aW9uOiBbXG4gICAgICAgICAgICBcIjcxMiBHcmFudmlsbGUgU3RyZWV0LCBWYW5jb3V2ZXIgQkNcIixcbiAgICAgICAgICAgIFwiZWF0QGxhZGRpc2xhZGRvb3MuY2FcIixcbiAgICAgICAgICAgIFwiKDYwNCkgNTU1LTAxNTBcIlxuICAgICAgICBdXG5cbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogXCJob3Vyc1wiLFxuICAgICAgICB0aXRsZUVuZ2xpc2g6IFwiSG91cnMgb2YgT3BlcmF0aW9uXCIsXG4gICAgICAgIHRpdGxlUHVuamFiaTogXCLgqJXgqL7gqLDgqLXgqL7gqIgg4Kim4KmHIOComOCpsOCon+Cph1wiLFxuICAgICAgICBkZXNjcmlwdGlvbjogW1xuICAgICAgICAgICAgXCJNb25kYXkgJiBUdWVzZGF5OiBDbG9zZWRcIixcbiAgICAgICAgICAgIFwiV2VkbmVzZGF5LVN1bmRheTogNHBtLTEwcG1cIlxuICAgICAgICBdXG4gICAgfSxcbl1cblxuLy8gbWVudSBjbGFzc2VzIGluY2x1ZGVkIHRvIGluaGVyZW50IHN0eWxpbmdcbmNvbnN0IGFib3V0ID0gY3JlYXRlTmV3RWxlbWVudCgnZGl2JywgWydhYm91dCcsICdtZW51J10pO1xuY29uc3QgYWJvdXRUZXh0ID0gY3JlYXRlTmV3RWxlbWVudCgnZGl2JywgWydhYm91dFRleHQnLCAnbWVudVRleHQnXSk7XG5cbmFib3V0LmFwcGVuZENoaWxkKGFib3V0VGV4dCk7XG5cbi8vIFJlbmRlciBpbmZvcm1hdGlvblxuYWJvdXRJbmZvLmZvckVhY2goc2VjdGlvbiA9PiB7XG5cbiAgICByZW5kZXJJbmZvU2VjdGlvbihzZWN0aW9uLm5hbWUsIHNlY3Rpb24udGl0bGVFbmdsaXNoLFxuICAgICAgICBzZWN0aW9uLnRpdGxlUHVuamFiaSwgc2VjdGlvbi5kZXNjcmlwdGlvbik7XG5cbn0pXG5cblxuZnVuY3Rpb24gcmVuZGVySW5mb1NlY3Rpb24obmFtZSwgdGl0bGVFbmdsaXNoLCBcbiAgICAgICAgICAgIHRpdGxlUHVuamFiaSwgZGVzY3JpcHRpb24pIHtcbiAgICBcbiAgICBsZXQgc2VjdGlvbkRpdiA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2RpdicsIFtuYW1lXSk7XG4gICAgbGV0IHNlY3Rpb25UaXRsZSA9IGNyZWF0ZU5ld0VsZW1lbnQoJ2gzJywgbnVsbCwgdGl0bGVFbmdsaXNoKTtcbiAgICBsZXQgcHVuamFiaVRpdGxlID0gY3JlYXRlTmV3RWxlbWVudCgnc3BhbicsIG51bGwsIHRpdGxlUHVuamFiaSk7XG4gICAgXG4gICAgc2VjdGlvblRpdGxlLmFwcGVuZENoaWxkKHB1bmphYmlUaXRsZSk7XG4gICAgc2VjdGlvbkRpdi5hcHBlbmRDaGlsZChzZWN0aW9uVGl0bGUpO1xuXG4gICAgZGVzY3JpcHRpb24uZm9yRWFjaChsaW5lID0+IHtcbiAgICAgICAgbGV0IHNlY3Rpb25EZXNjcmlwdGlvbiA9IGNyZWF0ZU5ld0VsZW1lbnQoJ3AnLCBudWxsLCBsaW5lKTtcbiAgICAgICAgc2VjdGlvbkRpdi5hcHBlbmRDaGlsZChzZWN0aW9uRGVzY3JpcHRpb24pO1xuICAgIH0pXG5cbiAgICBhYm91dFRleHQuYXBwZW5kQ2hpbGQoc2VjdGlvbkRpdik7XG59XG5cbmZ1bmN0aW9uIHNob3dBYm91dCgpIHtcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdvbkxvYWQnKTtcbiAgICBhYm91dC5jbGFzc0xpc3QuYWRkKCdzaG93Jyk7XG59XG5cbmZ1bmN0aW9uIGNsZWFyQWJvdXQoKSB7XG4gICAgYWJvdXQuY2xhc3NMaXN0LnJlbW92ZSgnb25Mb2FkJyk7XG4gICAgYWJvdXQuY2xhc3NMaXN0LnJlbW92ZSgnc2hvdycpO1xufVxuXG5leHBvcnQge2Fib3V0LCBzaG93QWJvdXQsIGNsZWFyQWJvdXR9IiwiaW1wb3J0IGluaXRpYWxQYWdlTG9hZCBmcm9tICcuL2luaXRpYWxQYWdlTG9hZCc7XG5pbXBvcnQgeyBzdGFydEJ1dHRvbiB9IGZyb20gJy4vYnV0dG9ucyc7XG5pbXBvcnQgeyBtYWtlSW5pdGlhbFN0YXRlLCBjbGVhck1haW59IGZyb20gXCIuL2ludHJvXCI7XG5pbXBvcnQgeyBzaG93QWJvdXQsIGNsZWFyQWJvdXQgfSBmcm9tICcuL2Fib3V0JztcbmltcG9ydCB7IHNob3dNZW51LCBjbGVhck1lbnUgfSBmcm9tICcuL21lbnUnO1xuaW1wb3J0IGFkanVzdEZvbnRTaXplcyBmcm9tICcuL2ZvbnQtYWRqdXN0JztcblxuLy8gRXhwb3J0aW5nIGZvciB1c2UgaW4gdGhlIGludHJvIHNlcXVlbmNlIG9uY2UgcGFnZSBsb2FkIGZ1bmN0aW9uIGlzIHJ1blxuZXhwb3J0IGNvbnN0IFtjb250YWluZXIsIGJhY2tncm91bmRdID0gaW5pdGlhbFBhZ2VMb2FkKCk7XG5cbi8vIElkZW50aWZ5IHRhYnMgLSBjb3VsZCBwb3NzaWJseSBjaGFuZ2UgdGhpcyB0byBhbiBleHBvcnQgZnJvbSBuYXZCYXJcbmNvbnN0IHRhYnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcudGFiJyk7XG5cbmNvbnN0IGFib3V0VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Fib3V0Jyk7XG5jb25zdCBtZW51VGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21lbnUnKTtcbmNvbnN0IGludHJvVGFiID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2ludHJvJyk7XG5cbi8vIEludHJvIHRhYlxuaW50cm9UYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJBY3RpdmVUYWIoKTtcbiAgICBpbnRyb1RhYi5jbGFzc0xpc3QuYWRkKCdjdXJyZW50Jyk7XG4gICAgY2xlYXJNZW51KCk7XG4gICAgY2xlYXJBYm91dCgpO1xuICAgIG1ha2VJbml0aWFsU3RhdGUoKTtcbn0pO1xuXG4vLyBBYm91dCB0YWJcbmFib3V0VGFiLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgIGNsZWFyQWN0aXZlVGFiKCk7XG4gICAgYWJvdXRUYWIuY2xhc3NMaXN0LmFkZCgnY3VycmVudCcpO1xuICAgIHN0YXJ0QnV0dG9uLnN0eWxlLnBvaW50ZXJFdmVudHMgPSAnbm9uZSc7XG4gICAgY2xlYXJNYWluKCk7XG4gICAgY2xlYXJNZW51KCk7XG4gICAgc2hvd0Fib3V0KCk7XG59KTtcblxuLy8gTWVudSBUYWJcbm1lbnVUYWIuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgY2xlYXJBY3RpdmVUYWIoKTtcbiAgICBtZW51VGFiLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcbiAgICBzdGFydEJ1dHRvbi5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ25vbmUnO1xuICAgIGNsZWFyTWFpbigpO1xuICAgIGNsZWFyQWJvdXQoKTtcbiAgICBzaG93TWVudSgpO1xufSk7XG5cbmZ1bmN0aW9uIGNsZWFyQWN0aXZlVGFiKCkge1xuICAgIGZvciAobGV0IHRhYiBvZiB0YWJzKSB7XG4gICAgICAgIHRhYi5jbGFzc0xpc3QucmVtb3ZlKCdjdXJyZW50Jyk7XG4gICAgfVxufVxuXG5hZGp1c3RGb250U2l6ZXMoKTsiLCJpbXBvcnQgbmF2QmFyIGZyb20gJy4vbmF2YmFyJztcbmltcG9ydCB7IGxvYWRlciwgbG9hZGVyQmFja2Ryb3AgfSBmcm9tICcuL2xvYWRpbmctYW5pbWF0aW9uJztcbmltcG9ydCB7IHN0YXJ0QnV0dG9uLCBza2lwQnV0dG9uIH0gZnJvbSAnLi9idXR0b25zJztcbmltcG9ydCB7IHB1bmphYmksIGVuZ2xpc2ggfSBmcm9tICcuL2ludHJvVGV4dC5qcyc7XG5pbXBvcnQgeyBwbGF5SW50cm8gfSBmcm9tIFwiLi9pbnRyby5qc1wiXG5pbXBvcnQgeyBtZW51IH0gZnJvbSAnLi9tZW51JztcbmltcG9ydCB7IGFib3V0IH0gZnJvbSAnLi9hYm91dCc7XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaW5pdGlhbFBhZ2VMb2FkKCkge1xuICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgICAvLyBDcmVhdGUgYW5kIHJlbmRlciBiYWNrZ3JvdW5kXG4gICAgY29uc3QgYmFja2dyb3VuZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGJhY2tncm91bmQuY2xhc3NMaXN0LmFkZCgnYmFja2dyb3VuZCcpO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChiYWNrZ3JvdW5kKTtcblxuICAgIC8vIFJlbmRlciBsb2FkZXJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobG9hZGVyQmFja2Ryb3ApO1xuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChsb2FkZXIpO1xuXG4gICAgLy8gUmVuZGVyIE5hdiBCYXJcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQobmF2QmFyKTtcblxuICAgIC8vIFJlbmRlciBidXR0b25zXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHN0YXJ0QnV0dG9uKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoc2tpcEJ1dHRvbik7XG5cbiAgICAvLyBSZW5kZXIgaW50cm8gdGV4dFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwdW5qYWJpKTtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoZW5nbGlzaCk7XG5cbiAgICAvLyBTaG93IHRoZSBsb2FkaW5nIGFuaW1hdGlvbiB1bnRpbCBwYWdlIGlzIGxvYWRlZCwgcGx1cyBidWZmZXJcbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcbiAgICAgICAgc2V0VGltZW91dCggKCkgPT4ge1xuICAgICAgICAgICAgbG9hZGVyLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG4gICAgICAgICAgICBsb2FkZXJCYWNrZHJvcC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgICAgICB9LCAyMDAwKTtcbiAgICBcbiAgICB9KVxuXG4gICAgLy8gUGxheSBpbnRybyB2aWEgc2V0dGluZyB1cCBldmVudCBMaXN0ZW5lcnNcbiAgICBwbGF5SW50cm8oKTtcblxuICAgIC8vIEludHJvIHRhYiBzaG91bGQgYmUgaGlnaGxpZ2h0ZWRcbiAgICBjb25zdCBpbnRyb1RhYiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbnRybycpO1xuICAgIGludHJvVGFiLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQnKTtcblxuICAgIC8vIFJlbmRlciBtZW51XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnUpO1xuICAgIFxuICAgIC8vIFJlbmRlciBhYm91dFxuICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChhYm91dCk7XG5cbiAgICByZXR1cm4gW2NvbnRhaW5lciwgYmFja2dyb3VuZF07XG59XG4iLCIvLyBBIHNtYWxsIGZvbnQgc2l6ZSBhZGp1c3QgZm9yIHBob25lcyAoc29ycnkpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkanVzdEZvbnRTaXplcygpIHtcbiAgICBjb25zdCB0b3VjaCA9IG1hdGNoTWVkaWEoJyhob3Zlcjogbm9uZSknKS5tYXRjaGVzO1xuXG4gICAgaWYgKHRvdWNoKSB7XG4gICAgICAgIGxldCBhbGxIVE1MID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaHRtbCcpO1xuICAgICAgICBsZXQgY29tcHV0ZWRGb250ID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoYWxsSFRNTCwgXG4gICAgICAgIG51bGwpLmdldFByb3BlcnR5VmFsdWUoJ2ZvbnQtc2l6ZScpLnNsaWNlKDAsLTIpO1xuXG4gICAgICAgIGlmIChjb21wdXRlZEZvbnQgPiAyMCkge1xuICAgICAgICAgICAgYWxsSFRNTC5zdHlsZS5mb250U2l6ZSA9ICcxNnB4JztcbiAgICAgICAgfSBlbHNlIGlmIChjb21wdXRlZEZvbnQgPD0gMTYgKSB7XG4gICAgICAgICAgICBhbGxIVE1MLnN0eWxlLmZvbnRTaXplID0gJzE4cHgnO1xuICAgICAgICB9XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIl9fd2VicGFja19yZXF1aXJlX18iLCJleHBvcnRzIiwiZGVmaW5pdGlvbiIsImtleSIsIm8iLCJPYmplY3QiLCJkZWZpbmVQcm9wZXJ0eSIsImVudW1lcmFibGUiLCJnZXQiLCJvYmoiLCJwcm9wIiwicHJvdG90eXBlIiwiaGFzT3duUHJvcGVydHkiLCJjYWxsIiwiY3JlYXRlTmV3RWxlbWVudCIsInR5cGUiLCJjbGFzc2VzIiwidGV4dCIsImF0dHJpYnV0ZXMiLCJjcmVhdGVkRWxlbWVudCIsImRvY3VtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTGlzdCIsImFkZCIsInRleHRDb250ZW50Iiwic2V0QXR0cmlidXRlIiwibmF2QmFyIiwiZm9yRWFjaCIsIml0ZW0iLCJuZXdOYXZJdGVtIiwidG9Mb3dlckNhc2UiLCJhcHBlbmRDaGlsZCIsImxvYWRlciIsImlubmVySFRNTCIsImxvYWRlckJhY2tncm91bmQiLCJzdGFydEJ1dHRvbiIsInNraXBCdXR0b24iLCJwdW5qYWJpIiwiZW5nbGlzaCIsImVuZ2xpc2hUaXRsZSIsImVuZ2xpc2hTdWJ0aXRsZSIsInBsYXlJbnRybyIsImFkZEV2ZW50TGlzdGVuZXIiLCJiYWNrZ3JvdW5kIiwiY2hhbmdlSW1hZ2UiLCJzdHlsZSIsIm9wYWNpdHkiLCJwb2ludGVyRXZlbnRzIiwibWFrZUZpbmFsU3RhdGUiLCJyZW1vdmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic2V0VGltZW91dCIsInN0YXJ0VmlkZW8iLCJ2aWRlbyIsImNvbnRhaW5lciIsImNsZWFyTWFpbiIsInZpc2liaWxpdHkiLCJtZW51IiwibWVudUhlYWRpbmciLCJtZW51SGVhZGluZ1B1bmphYmkiLCJtZW51VGV4dCIsImNsZWFyTWVudSIsImFwcGVuZCIsIm5hbWUiLCJ0aXRsZUVuZ2xpc2giLCJ0aXRsZVB1bmphYmkiLCJkZXNjcmlwdGlvbiIsIml0ZW1EaXYiLCJpdGVtVGl0bGUiLCJwdW5qYWJpVGl0bGUiLCJpdGVtRGVzY3JpcHRpb24iLCJyZW5kZXJJdGVtRGl2IiwiYWJvdXQiLCJhYm91dFRleHQiLCJjbGVhckFib3V0Iiwic2VjdGlvbiIsInNlY3Rpb25EaXYiLCJzZWN0aW9uVGl0bGUiLCJsaW5lIiwic2VjdGlvbkRlc2NyaXB0aW9uIiwicmVuZGVySW5mb1NlY3Rpb24iLCJxdWVyeVNlbGVjdG9yIiwid2luZG93IiwiZGlzcGxheSIsImluaXRpYWxQYWdlTG9hZCIsInRhYnMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiYWJvdXRUYWIiLCJtZW51VGFiIiwiaW50cm9UYWIiLCJjbGVhckFjdGl2ZVRhYiIsInRhYiIsIm1hdGNoTWVkaWEiLCJtYXRjaGVzIiwiYWxsSFRNTCIsImNvbXB1dGVkRm9udCIsImdldENvbXB1dGVkU3R5bGUiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic2xpY2UiLCJmb250U2l6ZSIsImFkanVzdEZvbnRTaXplcyJdLCJzb3VyY2VSb290IjoiIn0=