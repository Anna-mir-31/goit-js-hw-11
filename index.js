import{a as m,S as p,i}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const y="https://pixabay.com/api/",g="28903135-2e38ca847315cff4cdbf6a245";async function h(o){return(await m.get(y,{params:{key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const l=document.querySelector(".gallery"),u=document.querySelector(".loader");let b=new p(".gallery a");function L(o){const t=o.map(({webformatURL:s,largeImageURL:a,tags:e,likes:r,views:n,comments:d,downloads:f})=>`
      <li class="gallery-item">
        <a href="${a}">
          <img src="${s}" alt="${e}" />
        </a>
        <div class="info">
          <p><b>Likes:</b> ${r}</p>
          <p><b>Views:</b> ${n}</p>
          <p><b>Comments:</b> ${d}</p>
          <p><b>Downloads:</b> ${f}</p>
        </div>
      </li>`).join("");l.insertAdjacentHTML("beforeend",t),b.refresh()}function w(){l.innerHTML=""}function S(){u.classList.remove("is-hidden")}function c(){u.classList.add("is-hidden")}const v=document.querySelector(".form");v.addEventListener("submit",async o=>{o.preventDefault();const t=o.currentTarget.elements["search-text"].value.trim();if(!t){i.warning({title:"Warning",message:"Please enter a search term"});return}w(),S();try{const s=await h(t);if(c(),s.hits.length===0){i.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"});return}L(s.hits)}catch{c(),i.error({title:"Error",message:"Something went wrong. Try again later."})}});
//# sourceMappingURL=index.js.map
