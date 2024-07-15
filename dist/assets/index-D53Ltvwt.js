var q=n=>{throw TypeError(n)};var P=(n,e,t)=>e.has(n)||q("Cannot "+t);var i=(n,e,t)=>(P(n,e,"read from private field"),t?t.call(n):e.get(n)),l=(n,e,t)=>e.has(n)?q("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(n):e.set(n,t),u=(n,e,t,r)=>(P(n,e,"write to private field"),r?r.call(n,t):e.set(n,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(s){if(s.ep)return;s.ep=!0;const o=t(s);fetch(s.href,o)}})();function L(n,e){const t=new URLSearchParams(n),r={};for(const[s,o]of t.entries())e?e.includes(s)&&(r[s]=o):r[s]=o;return r}const $=["auuid","ca","cc","ct","device_spoor_id","gender","guid","loggedIn","mvt","pt","res"];var h,y,R,S,f;class T{constructor(e){l(this,h);l(this,y);l(this,R);l(this,S);l(this,f,{});if(!e)throw new Error("Element not found");u(this,h,e),u(this,R,i(this,h).querySelector("[data-component='page-level-data']")),u(this,S,i(this,h).querySelector("[data-component='slot-level-data']")),u(this,y,i(this,h).querySelector("[data-component='raw-requests']"))}processSraParams(e){const t=e.get("iu_parts"),r=e.get("us_privacy"),s=L(e.get("cust_params"),$),o=e.get("prev_scp").split("|").map(a=>L(a)),c=e.get("prev_iu_szs").split(",").map(a=>a.split("|")),d={};for(let a=0;a<o.length;a++){const v=o[a],g=c[a];d[v.pos]={prev_scp:v,cust_params:s,prev_iu_szs:g,iu_parts:t,us_privacy:r}}return d}processMraParams(e){const t={};for(const[r,s]of e.entries())switch(r){case"cust_params":t[r]=L(s,$);break;case"prev_scp":t[r]=L(s);break;case"prev_iu_szs":t[r]=s.split("|");break;default:t[r]=s;break}return t}parseParams(e){var a;let t="",r="";const[s]=Object.values(e),{iu_parts:o,us_privacy:c,cust_params:d}=s;t+=`
      <ul>
        <li>iu_parts: ${o}</li>
        <li>us_privacy: ${c}</li>
        <li>cust_params:
          <ul>
            ${Object.entries(d??{}).map(([v,g])=>`<li>${v}: ${g}</li>`).join("")}
          </ul>
        </li>
      </ul>
    `,r+="<table>";for(const[v,g]of Object.entries(e))r+=`
        <tr>
          <td><strong>${v}</strong></td>
          <td>prev_iu_szs: ${(a=g.prev_iu_szs)==null?void 0:a.join(", ")}</td>
        </tr>
      `;return r+="</table>",{pageLevelHtml:t,slotLevelHtml:r}}onRequestFinished({url:e}){var t;if(e.includes("/gampad/ads")){const r=new URL(e);if((t=r.searchParams.get("prev_scp"))==null?void 0:t.includes("|"))u(this,f,this.processSraParams(r.searchParams));else{const d=this.processMraParams(r.searchParams),{pos:a}=d.prev_scp??{pos:"unknown"};i(this,f)[a]=d}const{pageLevelHtml:o,slotLevelHtml:c}=this.parseParams(i(this,f));i(this,R).innerHTML=o,i(this,S).innerHTML=c,i(this,y).innerText=JSON.stringify(i(this,f),null,2)}}}h=new WeakMap,y=new WeakMap,R=new WeakMap,S=new WeakMap,f=new WeakMap;function O(n){return Object.entries(n??{}).map(([e,t])=>`<li>${e}: ${t}</li>`).join("")}const b="https://spoor-api.ft.com/ingest",w=`${b}?type=ads:slot-requested`,j=`${b}?type=ads:slot-rendered`;function x({context:n,user:e}){const{advert:t,creative:r,...s}=n;return`
    <ul>
      <li>Adtech: ${t.adtech??"OAds"}</li>
      <li>Consents: <ul>${O(t.consents)}</ul></li>
      <li>User: <ul>${O(e)}</ul></li>
      <li>Context: <ul>${O(s)}</ul></li>
    </ul>
  `}function D(n={}){const e=[];for(const[t,r]of Object.entries(n))e.push(`
      <tr>
        <td>${t}</td>
        <td>${O(r.context.creative)}</td>
      </tr>
    `);return`
    <table>
      ${e.join("")}
    </table>
  `}var m,p,_;class k{constructor(e){l(this,m);l(this,p);l(this,_,{});if(!e)throw new Error("Element not found");u(this,m,e),u(this,p,{sharedData:i(this,m).querySelector("[data-component='shared-data']"),eventsParsed:i(this,m).querySelector("[data-component='events-parsed']"),eventsRaw:i(this,m).querySelector("[data-component='events-raw']")})}onRequestFinished({url:e,postData:t}){var r;if(e.startsWith(w)||e.startsWith(j)){const s=JSON.parse(t.text),{pos:o}=s.context.creative;((r=i(this,p).sharedData)==null?void 0:r.innerText)===""&&(i(this,p).sharedData.innerHTML=x(s)),i(this,_)[o]=s,i(this,p).eventsParsed.innerHTML=D(i(this,_)),i(this,p).eventsRaw.innerText=JSON.stringify(i(this,_),null,2)}}}m=new WeakMap,p=new WeakMap,_=new WeakMap;const H=new T(document.getElementById("ad-reqs")),N=new k(document.getElementById("spoor-reqs"));var E;(E=chrome.devtools)==null||E.network.onRequestFinished.addListener(function({request:n}){H.onRequestFinished(n),N.onRequestFinished(n)});
