var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},r=e.parcelRequired7c6;null==r&&((r=function(e){if(e in n)return n[e].exports;if(e in t){var r=t[e];delete t[e];var o={id:e,exports:{}};return n[e]=o,r.call(o.exports,o,o.exports),o.exports}var u=new Error("Cannot find module '"+e+"'");throw u.code="MODULE_NOT_FOUND",u}).register=function(e,n){t[e]=n},e.parcelRequired7c6=r);var o=r("iQIUW");const u=document.querySelector(".form"),i=document.querySelector("input[name=delay]"),l=document.querySelector("input[name=step]"),a=document.querySelector("input[name=amount]");function c(e){o.Notify.success(e)}function d(e){o.Notify.failure(e)}u.addEventListener("submit",(function(e){e.preventDefault();const n=Number(l.value);let t=0,r=Number(i.value),o=Number(i.value);const u=setInterval((()=>{t+=1,a.value<t?clearInterval(u):(function(e,n,t){const r=Math.random()>.3;return new Promise(((o,u)=>{setTimeout((()=>{r?o(`✅ Fulfilled promise ${e} in ${n}ms`):u(`❌ Rejected promise ${e} in ${n}ms`)}),t)}))}(t,r,o).then(c).catch(d),r+=n)}),n)}));
//# sourceMappingURL=03-promises.c370c4c1.js.map