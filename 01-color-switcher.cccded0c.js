!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),r=document.querySelector("body");t.addEventListener("click",(function(){n=setInterval((function(){r.style.backgroundColor="#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}),1e3),t.setAttribute("disabled",""),e.removeAttribute("disabled")})),e.addEventListener("click",(function(){clearInterval(n),t.removeAttribute("disabled"),e.setAttribute("disabled","")}));var n=null}();
//# sourceMappingURL=01-color-switcher.cccded0c.js.map
