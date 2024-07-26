var eo=Object.defineProperty;var Ge=e=>{throw TypeError(e)};var so=(e,t,s)=>t in e?eo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s;var nt=(e,t,s)=>so(e,typeof t!="symbol"?t+"":t,s),Je=(e,t,s)=>t.has(e)||Ge("Cannot "+s);var N=(e,t,s)=>(Je(e,t,"read from private field"),s?s.call(e):t.get(e)),xt=(e,t,s)=>t.has(e)?Ge("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),At=(e,t,s,o)=>(Je(e,t,"write to private field"),o?o.call(e,s):t.set(e,s),s);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))o(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(i){if(i.ep)return;i.ep=!0;const r=s(i);fetch(i.href,r)}})();/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const oe=globalThis,De=oe.ShadowRoot&&(oe.ShadyCSS===void 0||oe.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,Be=Symbol(),Ze=new WeakMap;let ks=class{constructor(t,s,o){if(this._$cssResult$=!0,o!==Be)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=t,this.t=s}get styleSheet(){let t=this.o;const s=this.t;if(De&&t===void 0){const o=s!==void 0&&s.length===1;o&&(t=Ze.get(s)),t===void 0&&((this.o=t=new CSSStyleSheet).replaceSync(this.cssText),o&&Ze.set(s,t))}return t}toString(){return this.cssText}};const oo=e=>new ks(typeof e=="string"?e:e+"",void 0,Be),U=(e,...t)=>{const s=e.length===1?e[0]:t.reduce((o,i,r)=>o+(n=>{if(n._$cssResult$===!0)return n.cssText;if(typeof n=="number")return n;throw Error("Value passed to 'css' function must be a 'css' function result: "+n+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[r+1],e[0]);return new ks(s,e,Be)},io=(e,t)=>{if(De)e.adoptedStyleSheets=t.map(s=>s instanceof CSSStyleSheet?s:s.styleSheet);else for(const s of t){const o=document.createElement("style"),i=oe.litNonce;i!==void 0&&o.setAttribute("nonce",i),o.textContent=s.cssText,e.appendChild(o)}},Qe=De?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let s="";for(const o of t.cssRules)s+=o.cssText;return oo(s)})(e):e;/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const{is:ro,defineProperty:no,getOwnPropertyDescriptor:ao,getOwnPropertyNames:lo,getOwnPropertySymbols:co,getPrototypeOf:ho}=Object,lt=globalThis,ts=lt.trustedTypes,po=ts?ts.emptyScript:"",we=lt.reactiveElementPolyfillSupport,Ut=(e,t)=>e,ne={toAttribute(e,t){switch(t){case Boolean:e=e?po:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let s=e;switch(t){case Boolean:s=e!==null;break;case Number:s=e===null?null:Number(e);break;case Object:case Array:try{s=JSON.parse(e)}catch{s=null}}return s}},Ne=(e,t)=>!ro(e,t),es={attribute:!0,type:String,converter:ne,reflect:!1,hasChanged:Ne};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),lt.litPropertyMetadata??(lt.litPropertyMetadata=new WeakMap);class Ct extends HTMLElement{static addInitializer(t){this._$Ei(),(this.l??(this.l=[])).push(t)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(t,s=es){if(s.state&&(s.attribute=!1),this._$Ei(),this.elementProperties.set(t,s),!s.noAccessor){const o=Symbol(),i=this.getPropertyDescriptor(t,o,s);i!==void 0&&no(this.prototype,t,i)}}static getPropertyDescriptor(t,s,o){const{get:i,set:r}=ao(this.prototype,t)??{get(){return this[s]},set(n){this[s]=n}};return{get(){return i==null?void 0:i.call(this)},set(n){const l=i==null?void 0:i.call(this);r.call(this,n),this.requestUpdate(t,l,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)??es}static _$Ei(){if(this.hasOwnProperty(Ut("elementProperties")))return;const t=ho(this);t.finalize(),t.l!==void 0&&(this.l=[...t.l]),this.elementProperties=new Map(t.elementProperties)}static finalize(){if(this.hasOwnProperty(Ut("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Ut("properties"))){const s=this.properties,o=[...lo(s),...co(s)];for(const i of o)this.createProperty(i,s[i])}const t=this[Symbol.metadata];if(t!==null){const s=litPropertyMetadata.get(t);if(s!==void 0)for(const[o,i]of s)this.elementProperties.set(o,i)}this._$Eh=new Map;for(const[s,o]of this.elementProperties){const i=this._$Eu(s,o);i!==void 0&&this._$Eh.set(i,s)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(t){const s=[];if(Array.isArray(t)){const o=new Set(t.flat(1/0).reverse());for(const i of o)s.unshift(Qe(i))}else t!==void 0&&s.push(Qe(t));return s}static _$Eu(t,s){const o=s.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var t;this._$ES=new Promise(s=>this.enableUpdating=s),this._$AL=new Map,this._$E_(),this.requestUpdate(),(t=this.constructor.l)==null||t.forEach(s=>s(this))}addController(t){var s;(this._$EO??(this._$EO=new Set)).add(t),this.renderRoot!==void 0&&this.isConnected&&((s=t.hostConnected)==null||s.call(t))}removeController(t){var s;(s=this._$EO)==null||s.delete(t)}_$E_(){const t=new Map,s=this.constructor.elementProperties;for(const o of s.keys())this.hasOwnProperty(o)&&(t.set(o,this[o]),delete this[o]);t.size>0&&(this._$Ep=t)}createRenderRoot(){const t=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return io(t,this.constructor.elementStyles),t}connectedCallback(){var t;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$EO)==null||t.forEach(s=>{var o;return(o=s.hostConnected)==null?void 0:o.call(s)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$EO)==null||t.forEach(s=>{var o;return(o=s.hostDisconnected)==null?void 0:o.call(s)})}attributeChangedCallback(t,s,o){this._$AK(t,o)}_$EC(t,s){var r;const o=this.constructor.elementProperties.get(t),i=this.constructor._$Eu(t,o);if(i!==void 0&&o.reflect===!0){const n=(((r=o.converter)==null?void 0:r.toAttribute)!==void 0?o.converter:ne).toAttribute(s,o.type);this._$Em=t,n==null?this.removeAttribute(i):this.setAttribute(i,n),this._$Em=null}}_$AK(t,s){var r;const o=this.constructor,i=o._$Eh.get(t);if(i!==void 0&&this._$Em!==i){const n=o.getPropertyOptions(i),l=typeof n.converter=="function"?{fromAttribute:n.converter}:((r=n.converter)==null?void 0:r.fromAttribute)!==void 0?n.converter:ne;this._$Em=i,this[i]=l.fromAttribute(s,n.type),this._$Em=null}}requestUpdate(t,s,o){if(t!==void 0){if(o??(o=this.constructor.getPropertyOptions(t)),!(o.hasChanged??Ne)(this[t],s))return;this.P(t,s,o)}this.isUpdatePending===!1&&(this._$ES=this._$ET())}P(t,s,o){this._$AL.has(t)||this._$AL.set(t,s),o.reflect===!0&&this._$Em!==t&&(this._$Ej??(this._$Ej=new Set)).add(t)}async _$ET(){this.isUpdatePending=!0;try{await this._$ES}catch(s){Promise.reject(s)}const t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var o;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[r,n]of this._$Ep)this[r]=n;this._$Ep=void 0}const i=this.constructor.elementProperties;if(i.size>0)for(const[r,n]of i)n.wrapped!==!0||this._$AL.has(r)||this[r]===void 0||this.P(r,this[r],n)}let t=!1;const s=this._$AL;try{t=this.shouldUpdate(s),t?(this.willUpdate(s),(o=this._$EO)==null||o.forEach(i=>{var r;return(r=i.hostUpdate)==null?void 0:r.call(i)}),this.update(s)):this._$EU()}catch(i){throw t=!1,this._$EU(),i}t&&this._$AE(s)}willUpdate(t){}_$AE(t){var s;(s=this._$EO)==null||s.forEach(o=>{var i;return(i=o.hostUpdated)==null?void 0:i.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$EU(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(t){return!0}update(t){this._$Ej&&(this._$Ej=this._$Ej.forEach(s=>this._$EC(s,this[s]))),this._$EU()}updated(t){}firstUpdated(t){}}Ct.elementStyles=[],Ct.shadowRootOptions={mode:"open"},Ct[Ut("elementProperties")]=new Map,Ct[Ut("finalized")]=new Map,we==null||we({ReactiveElement:Ct}),(lt.reactiveElementVersions??(lt.reactiveElementVersions=[])).push("2.0.4");/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const It=globalThis,ae=It.trustedTypes,ss=ae?ae.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ps="$lit$",at=`lit$${Math.random().toFixed(9).slice(2)}$`,Ls="?"+at,uo=`<${Ls}>`,vt=document,jt=()=>vt.createComment(""),Wt=e=>e===null||typeof e!="object"&&typeof e!="function",Ts=Array.isArray,fo=e=>Ts(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",_e=`[ 	
\f\r]`,Nt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,os=/-->/g,is=/>/g,ut=RegExp(`>|${_e}(?:([^\\s"'>=/]+)(${_e}*=${_e}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),rs=/'/g,ns=/"/g,Os=/^(?:script|style|textarea|title)$/i,go=e=>(t,...s)=>({_$litType$:e,strings:t,values:s}),T=go(1),yt=Symbol.for("lit-noChange"),C=Symbol.for("lit-nothing"),as=new WeakMap,gt=vt.createTreeWalker(vt,129);function Rs(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return ss!==void 0?ss.createHTML(t):t}const bo=(e,t)=>{const s=e.length-1,o=[];let i,r=t===2?"<svg>":"",n=Nt;for(let l=0;l<s;l++){const a=e[l];let c,d,p=-1,b=0;for(;b<a.length&&(n.lastIndex=b,d=n.exec(a),d!==null);)b=n.lastIndex,n===Nt?d[1]==="!--"?n=os:d[1]!==void 0?n=is:d[2]!==void 0?(Os.test(d[2])&&(i=RegExp("</"+d[2],"g")),n=ut):d[3]!==void 0&&(n=ut):n===ut?d[0]===">"?(n=i??Nt,p=-1):d[1]===void 0?p=-2:(p=n.lastIndex-d[2].length,c=d[1],n=d[3]===void 0?ut:d[3]==='"'?ns:rs):n===ns||n===rs?n=ut:n===os||n===is?n=Nt:(n=ut,i=void 0);const u=n===ut&&e[l+1].startsWith("/>")?" ":"";r+=n===Nt?a+uo:p>=0?(o.push(c),a.slice(0,p)+Ps+a.slice(p)+at+u):a+at+(p===-2?l:u)}return[Rs(e,r+(e[s]||"<?>")+(t===2?"</svg>":"")),o]};class Vt{constructor({strings:t,_$litType$:s},o){let i;this.parts=[];let r=0,n=0;const l=t.length-1,a=this.parts,[c,d]=bo(t,s);if(this.el=Vt.createElement(c,o),gt.currentNode=this.el.content,s===2){const p=this.el.content.firstChild;p.replaceWith(...p.childNodes)}for(;(i=gt.nextNode())!==null&&a.length<l;){if(i.nodeType===1){if(i.hasAttributes())for(const p of i.getAttributeNames())if(p.endsWith(Ps)){const b=d[n++],u=i.getAttribute(p).split(at),g=/([.?@])?(.*)/.exec(b);a.push({type:1,index:r,name:g[2],strings:u,ctor:g[1]==="."?vo:g[1]==="?"?yo:g[1]==="@"?wo:me}),i.removeAttribute(p)}else p.startsWith(at)&&(a.push({type:6,index:r}),i.removeAttribute(p));if(Os.test(i.tagName)){const p=i.textContent.split(at),b=p.length-1;if(b>0){i.textContent=ae?ae.emptyScript:"";for(let u=0;u<b;u++)i.append(p[u],jt()),gt.nextNode(),a.push({type:2,index:++r});i.append(p[b],jt())}}}else if(i.nodeType===8)if(i.data===Ls)a.push({type:2,index:r});else{let p=-1;for(;(p=i.data.indexOf(at,p+1))!==-1;)a.push({type:7,index:r}),p+=at.length-1}r++}}static createElement(t,s){const o=vt.createElement("template");return o.innerHTML=t,o}}function Pt(e,t,s=e,o){var n,l;if(t===yt)return t;let i=o!==void 0?(n=s._$Co)==null?void 0:n[o]:s._$Cl;const r=Wt(t)?void 0:t._$litDirective$;return(i==null?void 0:i.constructor)!==r&&((l=i==null?void 0:i._$AO)==null||l.call(i,!1),r===void 0?i=void 0:(i=new r(e),i._$AT(e,s,o)),o!==void 0?(s._$Co??(s._$Co=[]))[o]=i:s._$Cl=i),i!==void 0&&(t=Pt(e,i._$AS(e,t.values),i,o)),t}class mo{constructor(t,s){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=s}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:s},parts:o}=this._$AD,i=((t==null?void 0:t.creationScope)??vt).importNode(s,!0);gt.currentNode=i;let r=gt.nextNode(),n=0,l=0,a=o[0];for(;a!==void 0;){if(n===a.index){let c;a.type===2?c=new Xt(r,r.nextSibling,this,t):a.type===1?c=new a.ctor(r,a.name,a.strings,this,t):a.type===6&&(c=new _o(r,this,t)),this._$AV.push(c),a=o[++l]}n!==(a==null?void 0:a.index)&&(r=gt.nextNode(),n++)}return gt.currentNode=vt,i}p(t){let s=0;for(const o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,s),s+=o.strings.length-2):o._$AI(t[s])),s++}}class Xt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,s,o,i){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=t,this._$AB=s,this._$AM=o,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const s=this._$AM;return s!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=s.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,s=this){t=Pt(this,t,s),Wt(t)?t===C||t==null||t===""?(this._$AH!==C&&this._$AR(),this._$AH=C):t!==this._$AH&&t!==yt&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):fo(t)?this.k(t):this._(t)}S(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.S(t))}_(t){this._$AH!==C&&Wt(this._$AH)?this._$AA.nextSibling.data=t:this.T(vt.createTextNode(t)),this._$AH=t}$(t){var r;const{values:s,_$litType$:o}=t,i=typeof o=="number"?this._$AC(t):(o.el===void 0&&(o.el=Vt.createElement(Rs(o.h,o.h[0]),this.options)),o);if(((r=this._$AH)==null?void 0:r._$AD)===i)this._$AH.p(s);else{const n=new mo(i,this),l=n.u(this.options);n.p(s),this.T(l),this._$AH=n}}_$AC(t){let s=as.get(t.strings);return s===void 0&&as.set(t.strings,s=new Vt(t)),s}k(t){Ts(this._$AH)||(this._$AH=[],this._$AR());const s=this._$AH;let o,i=0;for(const r of t)i===s.length?s.push(o=new Xt(this.S(jt()),this.S(jt()),this,this.options)):o=s[i],o._$AI(r),i++;i<s.length&&(this._$AR(o&&o._$AB.nextSibling,i),s.length=i)}_$AR(t=this._$AA.nextSibling,s){var o;for((o=this._$AP)==null?void 0:o.call(this,!1,!0,s);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var s;this._$AM===void 0&&(this._$Cv=t,(s=this._$AP)==null||s.call(this,t))}}class me{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,s,o,i,r){this.type=1,this._$AH=C,this._$AN=void 0,this.element=t,this.name=s,this._$AM=i,this.options=r,o.length>2||o[0]!==""||o[1]!==""?(this._$AH=Array(o.length-1).fill(new String),this.strings=o):this._$AH=C}_$AI(t,s=this,o,i){const r=this.strings;let n=!1;if(r===void 0)t=Pt(this,t,s,0),n=!Wt(t)||t!==this._$AH&&t!==yt,n&&(this._$AH=t);else{const l=t;let a,c;for(t=r[0],a=0;a<r.length-1;a++)c=Pt(this,l[o+a],s,a),c===yt&&(c=this._$AH[a]),n||(n=!Wt(c)||c!==this._$AH[a]),c===C?t=C:t!==C&&(t+=(c??"")+r[a+1]),this._$AH[a]=c}n&&!i&&this.j(t)}j(t){t===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}class vo extends me{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===C?void 0:t}}class yo extends me{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==C)}}class wo extends me{constructor(t,s,o,i,r){super(t,s,o,i,r),this.type=5}_$AI(t,s=this){if((t=Pt(this,t,s,0)??C)===yt)return;const o=this._$AH,i=t===C&&o!==C||t.capture!==o.capture||t.once!==o.once||t.passive!==o.passive,r=t!==C&&(o===C||i);i&&this.element.removeEventListener(this.name,this,o),r&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var s;typeof this._$AH=="function"?this._$AH.call(((s=this.options)==null?void 0:s.host)??this.element,t):this._$AH.handleEvent(t)}}class _o{constructor(t,s,o){this.element=t,this.type=6,this._$AN=void 0,this._$AM=s,this.options=o}get _$AU(){return this._$AM._$AU}_$AI(t){Pt(this,t)}}const $e=It.litHtmlPolyfillSupport;$e==null||$e(Vt,Xt),(It.litHtmlVersions??(It.litHtmlVersions=[])).push("3.1.4");const $o=(e,t,s)=>{const o=(s==null?void 0:s.renderBefore)??t;let i=o._$litPart$;if(i===void 0){const r=(s==null?void 0:s.renderBefore)??null;o._$litPart$=i=new Xt(t.insertBefore(jt(),r),r,void 0,s??{})}return i._$AI(e),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */let Ft=class extends Ct{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var s;const t=super.createRenderRoot();return(s=this.renderOptions).renderBefore??(s.renderBefore=t.firstChild),t}update(t){const s=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=$o(s,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return yt}};var Cs;Ft._$litElement$=!0,Ft.finalized=!0,(Cs=globalThis.litElementHydrateSupport)==null||Cs.call(globalThis,{LitElement:Ft});const xe=globalThis.litElementPolyfillSupport;xe==null||xe({LitElement:Ft});(globalThis.litElementVersions??(globalThis.litElementVersions=[])).push("4.0.6");var xo=U`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Ao=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=s=>{const o=s.target;(this.slotNames.includes("[default]")&&!o.name||o.name&&this.slotNames.includes(o.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!=="")return!0;if(e.nodeType===e.ELEMENT_NODE){const t=e;if(t.tagName.toLowerCase()==="sl-visually-hidden")return!1;if(!t.hasAttribute("slot"))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e==="[default]"?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener("slotchange",this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener("slotchange",this.handleSlotChange)}},Z=U`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,zs=Object.defineProperty,Co=Object.defineProperties,Eo=Object.getOwnPropertyDescriptor,So=Object.getOwnPropertyDescriptors,ls=Object.getOwnPropertySymbols,ko=Object.prototype.hasOwnProperty,Po=Object.prototype.propertyIsEnumerable,cs=(e,t,s)=>t in e?zs(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,Ot=(e,t)=>{for(var s in t||(t={}))ko.call(t,s)&&cs(e,s,t[s]);if(ls)for(var s of ls(t))Po.call(t,s)&&cs(e,s,t[s]);return e},He=(e,t)=>Co(e,So(t)),h=(e,t,s,o)=>{for(var i=o>1?void 0:o?Eo(t,s):t,r=e.length-1,n;r>=0;r--)(n=e[r])&&(i=(o?n(t,s,i):n(i))||i);return o&&i&&zs(t,s,i),i};/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Lo={attribute:!0,type:String,converter:ne,reflect:!1,hasChanged:Ne},To=(e=Lo,t,s)=>{const{kind:o,metadata:i}=s;let r=globalThis.litPropertyMetadata.get(i);if(r===void 0&&globalThis.litPropertyMetadata.set(i,r=new Map),r.set(s.name,e),o==="accessor"){const{name:n}=s;return{set(l){const a=t.get.call(this);t.set.call(this,l),this.requestUpdate(n,a,e)},init(l){return l!==void 0&&this.P(n,void 0,e),l}}}if(o==="setter"){const{name:n}=s;return function(l){const a=this[n];t.call(this,l),this.requestUpdate(n,a,e)}}throw Error("Unsupported decorator location: "+o)};function f(e){return(t,s)=>typeof s=="object"?To(e,t,s):((o,i,r)=>{const n=i.hasOwnProperty(r);return i.constructor.createProperty(r,n?{...o,wrapped:!0}:o),n?Object.getOwnPropertyDescriptor(i,r):void 0})(e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function Gt(e){return f({...e,state:!0,attribute:!1})}/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Oo=(e,t,s)=>(s.configurable=!0,s.enumerable=!0,Reflect.decorate&&typeof t!="object"&&Object.defineProperty(e,t,s),s);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */function E(e,t){return(s,o,i)=>{const r=n=>{var l;return((l=n.renderRoot)==null?void 0:l.querySelector(e))??null};return Oo(s,o,{get(){return r(this)}})}}var O=class extends Ft{constructor(){super(),Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){const s=new CustomEvent(e,Ot({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(s),s}static define(e,t=this,s={}){const o=customElements.get(e);if(!o){customElements.define(e,class extends t{},s);return}let i=" (unknown version)",r=i;"version"in t&&t.version&&(i=" v"+t.version),"version"in o&&o.version&&(r=" v"+o.version),!(i&&r&&i===r)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${r} has already been registered.`)}};O.version="2.15.1";O.dependencies={};h([f()],O.prototype,"dir",2);h([f()],O.prototype,"lang",2);/**
 * @license
 * Copyright 2017 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ro={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},zo=e=>(...t)=>({_$litDirective$:e,values:t});class Mo{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,s,o){this._$Ct=t,this._$AM=s,this._$Ci=o}_$AS(t,s){return this.update(t,s)}update(t,s){return this.render(...s)}}/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const X=zo(class extends Mo{constructor(e){var t;if(super(e),e.type!==Ro.ATTRIBUTE||e.name!=="class"||((t=e.strings)==null?void 0:t.length)>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return" "+Object.keys(e).filter(t=>e[t]).join(" ")+" "}update(e,[t]){var o,i;if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(" ").split(/\s/).filter(r=>r!=="")));for(const r in t)t[r]&&!((o=this.nt)!=null&&o.has(r))&&this.st.add(r);return this.render(t)}const s=e.element.classList;for(const r of this.st)r in t||(s.remove(r),this.st.delete(r));for(const r in t){const n=!!t[r];n===this.st.has(r)||(i=this.nt)!=null&&i.has(r)||(n?(s.add(r),this.st.add(r)):(s.remove(r),this.st.delete(r)))}return yt}});var Ms=class extends O{constructor(){super(...arguments),this.hasSlotController=new Ao(this,"footer","header","image")}render(){return T`
      <div
        part="base"
        class=${X({card:!0,"card--has-footer":this.hasSlotController.test("footer"),"card--has-image":this.hasSlotController.test("image"),"card--has-header":this.hasSlotController.test("header")})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Ms.styles=[Z,xo];Ms.define("sl-card");var Do=U`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Bo=U`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`;const K=Math.min,z=Math.max,le=Math.round,te=Math.floor,ct=e=>({x:e,y:e}),No={left:"right",right:"left",bottom:"top",top:"bottom"},Ho={start:"end",end:"start"};function ke(e,t,s){return z(e,K(t,s))}function Rt(e,t){return typeof e=="function"?e(t):e}function ht(e){return e.split("-")[0]}function zt(e){return e.split("-")[1]}function Ds(e){return e==="x"?"y":"x"}function Ue(e){return e==="y"?"height":"width"}function wt(e){return["top","bottom"].includes(ht(e))?"y":"x"}function Ie(e){return Ds(wt(e))}function Uo(e,t,s){s===void 0&&(s=!1);const o=zt(e),i=Ie(e),r=Ue(i);let n=i==="x"?o===(s?"end":"start")?"right":"left":o==="start"?"bottom":"top";return t.reference[r]>t.floating[r]&&(n=ce(n)),[n,ce(n)]}function Io(e){const t=ce(e);return[Pe(e),t,Pe(t)]}function Pe(e){return e.replace(/start|end/g,t=>Ho[t])}function Fo(e,t,s){const o=["left","right"],i=["right","left"],r=["top","bottom"],n=["bottom","top"];switch(e){case"top":case"bottom":return s?t?i:o:t?o:i;case"left":case"right":return t?r:n;default:return[]}}function jo(e,t,s,o){const i=zt(e);let r=Fo(ht(e),s==="start",o);return i&&(r=r.map(n=>n+"-"+i),t&&(r=r.concat(r.map(Pe)))),r}function ce(e){return e.replace(/left|right|bottom|top/g,t=>No[t])}function Wo(e){return{top:0,right:0,bottom:0,left:0,...e}}function Bs(e){return typeof e!="number"?Wo(e):{top:e,right:e,bottom:e,left:e}}function he(e){const{x:t,y:s,width:o,height:i}=e;return{width:o,height:i,top:s,left:t,right:t+o,bottom:s+i,x:t,y:s}}function hs(e,t,s){let{reference:o,floating:i}=e;const r=wt(t),n=Ie(t),l=Ue(n),a=ht(t),c=r==="y",d=o.x+o.width/2-i.width/2,p=o.y+o.height/2-i.height/2,b=o[l]/2-i[l]/2;let u;switch(a){case"top":u={x:d,y:o.y-i.height};break;case"bottom":u={x:d,y:o.y+o.height};break;case"right":u={x:o.x+o.width,y:p};break;case"left":u={x:o.x-i.width,y:p};break;default:u={x:o.x,y:o.y}}switch(zt(t)){case"start":u[n]-=b*(s&&c?-1:1);break;case"end":u[n]+=b*(s&&c?-1:1);break}return u}const Vo=async(e,t,s)=>{const{placement:o="bottom",strategy:i="absolute",middleware:r=[],platform:n}=s,l=r.filter(Boolean),a=await(n.isRTL==null?void 0:n.isRTL(t));let c=await n.getElementRects({reference:e,floating:t,strategy:i}),{x:d,y:p}=hs(c,o,a),b=o,u={},g=0;for(let m=0;m<l.length;m++){const{name:y,fn:v}=l[m],{x:w,y:_,data:A,reset:x}=await v({x:d,y:p,initialPlacement:o,placement:b,strategy:i,middlewareData:u,rects:c,platform:n,elements:{reference:e,floating:t}});d=w??d,p=_??p,u={...u,[y]:{...u[y],...A}},x&&g<=50&&(g++,typeof x=="object"&&(x.placement&&(b=x.placement),x.rects&&(c=x.rects===!0?await n.getElementRects({reference:e,floating:t,strategy:i}):x.rects),{x:d,y:p}=hs(c,b,a)),m=-1)}return{x:d,y:p,placement:b,strategy:i,middlewareData:u}};async function Fe(e,t){var s;t===void 0&&(t={});const{x:o,y:i,platform:r,rects:n,elements:l,strategy:a}=e,{boundary:c="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:b=!1,padding:u=0}=Rt(t,e),g=Bs(u),y=l[b?p==="floating"?"reference":"floating":p],v=he(await r.getClippingRect({element:(s=await(r.isElement==null?void 0:r.isElement(y)))==null||s?y:y.contextElement||await(r.getDocumentElement==null?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:d,strategy:a})),w=p==="floating"?{x:o,y:i,width:n.floating.width,height:n.floating.height}:n.reference,_=await(r.getOffsetParent==null?void 0:r.getOffsetParent(l.floating)),A=await(r.isElement==null?void 0:r.isElement(_))?await(r.getScale==null?void 0:r.getScale(_))||{x:1,y:1}:{x:1,y:1},x=he(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:w,offsetParent:_,strategy:a}):w);return{top:(v.top-x.top+g.top)/A.y,bottom:(x.bottom-v.bottom+g.bottom)/A.y,left:(v.left-x.left+g.left)/A.x,right:(x.right-v.right+g.right)/A.x}}const qo=e=>({name:"arrow",options:e,async fn(t){const{x:s,y:o,placement:i,rects:r,platform:n,elements:l,middlewareData:a}=t,{element:c,padding:d=0}=Rt(e,t)||{};if(c==null)return{};const p=Bs(d),b={x:s,y:o},u=Ie(i),g=Ue(u),m=await n.getDimensions(c),y=u==="y",v=y?"top":"left",w=y?"bottom":"right",_=y?"clientHeight":"clientWidth",A=r.reference[g]+r.reference[u]-b[u]-r.floating[g],x=b[u]-r.reference[u],L=await(n.getOffsetParent==null?void 0:n.getOffsetParent(c));let W=L?L[_]:0;(!W||!await(n.isElement==null?void 0:n.isElement(L)))&&(W=l.floating[_]||r.floating[g]);const st=A/2-x/2,V=W/2-m[g]/2-1,B=K(p[v],V),ot=K(p[w],V),pt=B,Bt=W-m[g]-ot,P=W/2-m[g]/2+st,$t=ke(pt,P,Bt),tt=!a.arrow&&zt(i)!=null&&P!==$t&&r.reference[g]/2-(P<pt?B:ot)-m[g]/2<0,q=tt?P<pt?P-pt:P-Bt:0;return{[u]:b[u]+q,data:{[u]:$t,centerOffset:P-$t-q,...tt&&{alignmentOffset:q}},reset:tt}}}),Yo=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var s,o;const{placement:i,middlewareData:r,rects:n,initialPlacement:l,platform:a,elements:c}=t,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:b,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:m=!0,...y}=Rt(e,t);if((s=r.arrow)!=null&&s.alignmentOffset)return{};const v=ht(i),w=wt(l),_=ht(l)===l,A=await(a.isRTL==null?void 0:a.isRTL(c.floating)),x=b||(_||!m?[ce(l)]:Io(l)),L=g!=="none";!b&&L&&x.push(...jo(l,m,g,A));const W=[l,...x],st=await Fe(t,y),V=[];let B=((o=r.flip)==null?void 0:o.overflows)||[];if(d&&V.push(st[v]),p){const P=Uo(i,n,A);V.push(st[P[0]],st[P[1]])}if(B=[...B,{placement:i,overflows:V}],!V.every(P=>P<=0)){var ot,pt;const P=(((ot=r.flip)==null?void 0:ot.index)||0)+1,$t=W[P];if($t)return{data:{index:P,overflows:B},reset:{placement:$t}};let tt=(pt=B.filter(q=>q.overflows[0]<=0).sort((q,it)=>q.overflows[1]-it.overflows[1])[0])==null?void 0:pt.placement;if(!tt)switch(u){case"bestFit":{var Bt;const q=(Bt=B.filter(it=>{if(L){const rt=wt(it.placement);return rt===w||rt==="y"}return!0}).map(it=>[it.placement,it.overflows.filter(rt=>rt>0).reduce((rt,to)=>rt+to,0)]).sort((it,rt)=>it[1]-rt[1])[0])==null?void 0:Bt[0];q&&(tt=q);break}case"initialPlacement":tt=l;break}if(i!==tt)return{reset:{placement:tt}}}return{}}}};async function Ko(e,t){const{placement:s,platform:o,elements:i}=e,r=await(o.isRTL==null?void 0:o.isRTL(i.floating)),n=ht(s),l=zt(s),a=wt(s)==="y",c=["left","top"].includes(n)?-1:1,d=r&&a?-1:1,p=Rt(t,e);let{mainAxis:b,crossAxis:u,alignmentAxis:g}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return l&&typeof g=="number"&&(u=l==="end"?g*-1:g),a?{x:u*d,y:b*c}:{x:b*c,y:u*d}}const Xo=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var s,o;const{x:i,y:r,placement:n,middlewareData:l}=t,a=await Ko(t,e);return n===((s=l.offset)==null?void 0:s.placement)&&(o=l.arrow)!=null&&o.alignmentOffset?{}:{x:i+a.x,y:r+a.y,data:{...a,placement:n}}}}},Go=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:s,y:o,placement:i}=t,{mainAxis:r=!0,crossAxis:n=!1,limiter:l={fn:y=>{let{x:v,y:w}=y;return{x:v,y:w}}},...a}=Rt(e,t),c={x:s,y:o},d=await Fe(t,a),p=wt(ht(i)),b=Ds(p);let u=c[b],g=c[p];if(r){const y=b==="y"?"top":"left",v=b==="y"?"bottom":"right",w=u+d[y],_=u-d[v];u=ke(w,u,_)}if(n){const y=p==="y"?"top":"left",v=p==="y"?"bottom":"right",w=g+d[y],_=g-d[v];g=ke(w,g,_)}const m=l.fn({...t,[b]:u,[p]:g});return{...m,data:{x:m.x-s,y:m.y-o}}}}},Jo=function(e){return e===void 0&&(e={}),{name:"size",options:e,async fn(t){const{placement:s,rects:o,platform:i,elements:r}=t,{apply:n=()=>{},...l}=Rt(e,t),a=await Fe(t,l),c=ht(s),d=zt(s),p=wt(s)==="y",{width:b,height:u}=o.floating;let g,m;c==="top"||c==="bottom"?(g=c,m=d===(await(i.isRTL==null?void 0:i.isRTL(r.floating))?"start":"end")?"left":"right"):(m=c,g=d==="end"?"top":"bottom");const y=u-a.top-a.bottom,v=b-a.left-a.right,w=K(u-a[g],y),_=K(b-a[m],v),A=!t.middlewareData.shift;let x=w,L=_;if(p?L=d||A?K(_,v):v:x=d||A?K(w,y):y,A&&!d){const st=z(a.left,0),V=z(a.right,0),B=z(a.top,0),ot=z(a.bottom,0);p?L=b-2*(st!==0||V!==0?st+V:z(a.left,a.right)):x=u-2*(B!==0||ot!==0?B+ot:z(a.top,a.bottom))}await n({...t,availableWidth:L,availableHeight:x});const W=await i.getDimensions(r.floating);return b!==W.width||u!==W.height?{reset:{rects:!0}}:{}}}};function Mt(e){return Ns(e)?(e.nodeName||"").toLowerCase():"#document"}function M(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function et(e){var t;return(t=(Ns(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function Ns(e){return e instanceof Node||e instanceof M(e).Node}function G(e){return e instanceof Element||e instanceof M(e).Element}function J(e){return e instanceof HTMLElement||e instanceof M(e).HTMLElement}function ds(e){return typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof M(e).ShadowRoot}function Jt(e){const{overflow:t,overflowX:s,overflowY:o,display:i}=H(e);return/auto|scroll|overlay|hidden|clip/.test(t+o+s)&&!["inline","contents"].includes(i)}function Zo(e){return["table","td","th"].includes(Mt(e))}function ve(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function je(e){const t=We(),s=H(e);return s.transform!=="none"||s.perspective!=="none"||(s.containerType?s.containerType!=="normal":!1)||!t&&(s.backdropFilter?s.backdropFilter!=="none":!1)||!t&&(s.filter?s.filter!=="none":!1)||["transform","perspective","filter"].some(o=>(s.willChange||"").includes(o))||["paint","layout","strict","content"].some(o=>(s.contain||"").includes(o))}function Qo(e){let t=dt(e);for(;J(t)&&!Lt(t);){if(ve(t))return null;if(je(t))return t;t=dt(t)}return null}function We(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Lt(e){return["html","body","#document"].includes(Mt(e))}function H(e){return M(e).getComputedStyle(e)}function ye(e){return G(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function dt(e){if(Mt(e)==="html")return e;const t=e.assignedSlot||e.parentNode||ds(e)&&e.host||et(e);return ds(t)?t.host:t}function Hs(e){const t=dt(e);return Lt(t)?e.ownerDocument?e.ownerDocument.body:e.body:J(t)&&Jt(t)?t:Hs(t)}function qt(e,t,s){var o;t===void 0&&(t=[]),s===void 0&&(s=!0);const i=Hs(e),r=i===((o=e.ownerDocument)==null?void 0:o.body),n=M(i);return r?t.concat(n,n.visualViewport||[],Jt(i)?i:[],n.frameElement&&s?qt(n.frameElement):[]):t.concat(i,qt(i,[],s))}function Us(e){const t=H(e);let s=parseFloat(t.width)||0,o=parseFloat(t.height)||0;const i=J(e),r=i?e.offsetWidth:s,n=i?e.offsetHeight:o,l=le(s)!==r||le(o)!==n;return l&&(s=r,o=n),{width:s,height:o,$:l}}function Ve(e){return G(e)?e:e.contextElement}function St(e){const t=Ve(e);if(!J(t))return ct(1);const s=t.getBoundingClientRect(),{width:o,height:i,$:r}=Us(t);let n=(r?le(s.width):s.width)/o,l=(r?le(s.height):s.height)/i;return(!n||!Number.isFinite(n))&&(n=1),(!l||!Number.isFinite(l))&&(l=1),{x:n,y:l}}const ti=ct(0);function Is(e){const t=M(e);return!We()||!t.visualViewport?ti:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function ei(e,t,s){return t===void 0&&(t=!1),!s||t&&s!==M(e)?!1:t}function _t(e,t,s,o){t===void 0&&(t=!1),s===void 0&&(s=!1);const i=e.getBoundingClientRect(),r=Ve(e);let n=ct(1);t&&(o?G(o)&&(n=St(o)):n=St(e));const l=ei(r,s,o)?Is(r):ct(0);let a=(i.left+l.x)/n.x,c=(i.top+l.y)/n.y,d=i.width/n.x,p=i.height/n.y;if(r){const b=M(r),u=o&&G(o)?M(o):o;let g=b,m=g.frameElement;for(;m&&o&&u!==g;){const y=St(m),v=m.getBoundingClientRect(),w=H(m),_=v.left+(m.clientLeft+parseFloat(w.paddingLeft))*y.x,A=v.top+(m.clientTop+parseFloat(w.paddingTop))*y.y;a*=y.x,c*=y.y,d*=y.x,p*=y.y,a+=_,c+=A,g=M(m),m=g.frameElement}}return he({width:d,height:p,x:a,y:c})}function si(e){let{elements:t,rect:s,offsetParent:o,strategy:i}=e;const r=i==="fixed",n=et(o),l=t?ve(t.floating):!1;if(o===n||l&&r)return s;let a={scrollLeft:0,scrollTop:0},c=ct(1);const d=ct(0),p=J(o);if((p||!p&&!r)&&((Mt(o)!=="body"||Jt(n))&&(a=ye(o)),J(o))){const b=_t(o);c=St(o),d.x=b.x+o.clientLeft,d.y=b.y+o.clientTop}return{width:s.width*c.x,height:s.height*c.y,x:s.x*c.x-a.scrollLeft*c.x+d.x,y:s.y*c.y-a.scrollTop*c.y+d.y}}function oi(e){return Array.from(e.getClientRects())}function Fs(e){return _t(et(e)).left+ye(e).scrollLeft}function ii(e){const t=et(e),s=ye(e),o=e.ownerDocument.body,i=z(t.scrollWidth,t.clientWidth,o.scrollWidth,o.clientWidth),r=z(t.scrollHeight,t.clientHeight,o.scrollHeight,o.clientHeight);let n=-s.scrollLeft+Fs(e);const l=-s.scrollTop;return H(o).direction==="rtl"&&(n+=z(t.clientWidth,o.clientWidth)-i),{width:i,height:r,x:n,y:l}}function ri(e,t){const s=M(e),o=et(e),i=s.visualViewport;let r=o.clientWidth,n=o.clientHeight,l=0,a=0;if(i){r=i.width,n=i.height;const c=We();(!c||c&&t==="fixed")&&(l=i.offsetLeft,a=i.offsetTop)}return{width:r,height:n,x:l,y:a}}function ni(e,t){const s=_t(e,!0,t==="fixed"),o=s.top+e.clientTop,i=s.left+e.clientLeft,r=J(e)?St(e):ct(1),n=e.clientWidth*r.x,l=e.clientHeight*r.y,a=i*r.x,c=o*r.y;return{width:n,height:l,x:a,y:c}}function ps(e,t,s){let o;if(t==="viewport")o=ri(e,s);else if(t==="document")o=ii(et(e));else if(G(t))o=ni(t,s);else{const i=Is(e);o={...t,x:t.x-i.x,y:t.y-i.y}}return he(o)}function js(e,t){const s=dt(e);return s===t||!G(s)||Lt(s)?!1:H(s).position==="fixed"||js(s,t)}function ai(e,t){const s=t.get(e);if(s)return s;let o=qt(e,[],!1).filter(l=>G(l)&&Mt(l)!=="body"),i=null;const r=H(e).position==="fixed";let n=r?dt(e):e;for(;G(n)&&!Lt(n);){const l=H(n),a=je(n);!a&&l.position==="fixed"&&(i=null),(r?!a&&!i:!a&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||Jt(n)&&!a&&js(e,n))?o=o.filter(d=>d!==n):i=l,n=dt(n)}return t.set(e,o),o}function li(e){let{element:t,boundary:s,rootBoundary:o,strategy:i}=e;const n=[...s==="clippingAncestors"?ve(t)?[]:ai(t,this._c):[].concat(s),o],l=n[0],a=n.reduce((c,d)=>{const p=ps(t,d,i);return c.top=z(p.top,c.top),c.right=K(p.right,c.right),c.bottom=K(p.bottom,c.bottom),c.left=z(p.left,c.left),c},ps(t,l,i));return{width:a.right-a.left,height:a.bottom-a.top,x:a.left,y:a.top}}function ci(e){const{width:t,height:s}=Us(e);return{width:t,height:s}}function hi(e,t,s){const o=J(t),i=et(t),r=s==="fixed",n=_t(e,!0,r,t);let l={scrollLeft:0,scrollTop:0};const a=ct(0);if(o||!o&&!r)if((Mt(t)!=="body"||Jt(i))&&(l=ye(t)),o){const p=_t(t,!0,r,t);a.x=p.x+t.clientLeft,a.y=p.y+t.clientTop}else i&&(a.x=Fs(i));const c=n.left+l.scrollLeft-a.x,d=n.top+l.scrollTop-a.y;return{x:c,y:d,width:n.width,height:n.height}}function Ae(e){return H(e).position==="static"}function us(e,t){return!J(e)||H(e).position==="fixed"?null:t?t(e):e.offsetParent}function Ws(e,t){const s=M(e);if(ve(e))return s;if(!J(e)){let i=dt(e);for(;i&&!Lt(i);){if(G(i)&&!Ae(i))return i;i=dt(i)}return s}let o=us(e,t);for(;o&&Zo(o)&&Ae(o);)o=us(o,t);return o&&Lt(o)&&Ae(o)&&!je(o)?s:o||Qo(e)||s}const di=async function(e){const t=this.getOffsetParent||Ws,s=this.getDimensions,o=await s(e.floating);return{reference:hi(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:o.width,height:o.height}}};function pi(e){return H(e).direction==="rtl"}const ie={convertOffsetParentRelativeRectToViewportRelativeRect:si,getDocumentElement:et,getClippingRect:li,getOffsetParent:Ws,getElementRects:di,getClientRects:oi,getDimensions:ci,getScale:St,isElement:G,isRTL:pi};function ui(e,t){let s=null,o;const i=et(e);function r(){var l;clearTimeout(o),(l=s)==null||l.disconnect(),s=null}function n(l,a){l===void 0&&(l=!1),a===void 0&&(a=1),r();const{left:c,top:d,width:p,height:b}=e.getBoundingClientRect();if(l||t(),!p||!b)return;const u=te(d),g=te(i.clientWidth-(c+p)),m=te(i.clientHeight-(d+b)),y=te(c),w={rootMargin:-u+"px "+-g+"px "+-m+"px "+-y+"px",threshold:z(0,K(1,a))||1};let _=!0;function A(x){const L=x[0].intersectionRatio;if(L!==a){if(!_)return n();L?n(!1,L):o=setTimeout(()=>{n(!1,1e-7)},1e3)}_=!1}try{s=new IntersectionObserver(A,{...w,root:i.ownerDocument})}catch{s=new IntersectionObserver(A,w)}s.observe(e)}return n(!0),r}function fi(e,t,s,o){o===void 0&&(o={});const{ancestorScroll:i=!0,ancestorResize:r=!0,elementResize:n=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:a=!1}=o,c=Ve(e),d=i||r?[...c?qt(c):[],...qt(t)]:[];d.forEach(v=>{i&&v.addEventListener("scroll",s,{passive:!0}),r&&v.addEventListener("resize",s)});const p=c&&l?ui(c,s):null;let b=-1,u=null;n&&(u=new ResizeObserver(v=>{let[w]=v;w&&w.target===c&&u&&(u.unobserve(t),cancelAnimationFrame(b),b=requestAnimationFrame(()=>{var _;(_=u)==null||_.observe(t)})),s()}),c&&!a&&u.observe(c),u.observe(t));let g,m=a?_t(e):null;a&&y();function y(){const v=_t(e);m&&(v.x!==m.x||v.y!==m.y||v.width!==m.width||v.height!==m.height)&&s(),m=v,g=requestAnimationFrame(y)}return s(),()=>{var v;d.forEach(w=>{i&&w.removeEventListener("scroll",s),r&&w.removeEventListener("resize",s)}),p==null||p(),(v=u)==null||v.disconnect(),u=null,a&&cancelAnimationFrame(g)}}const gi=Xo,bi=Go,mi=Yo,fs=Jo,vi=qo,yi=(e,t,s)=>{const o=new Map,i={platform:ie,...s},r={...i.platform,_c:o};return Vo(e,t,{...i,platform:r})};function wi(e){return _i(e)}function Ce(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function _i(e){for(let t=e;t;t=Ce(t))if(t instanceof Element&&getComputedStyle(t).display==="none")return null;for(let t=Ce(e);t;t=Ce(t)){if(!(t instanceof Element))continue;const s=getComputedStyle(t);if(s.display!=="contents"&&(s.position!=="static"||s.filter!=="none"||t.tagName==="BODY"))return t}return null}function $i(e){return e!==null&&typeof e=="object"&&"getBoundingClientRect"in e&&("contextElement"in e?e instanceof Element:!0)}var $=class extends O{constructor(){super(...arguments),this.active=!1,this.placement="top",this.strategy="absolute",this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement="anchor",this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements="",this.flipFallbackStrategy="best-fit",this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){const e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),s=this.placement.includes("top")||this.placement.includes("bottom");let o=0,i=0,r=0,n=0,l=0,a=0,c=0,d=0;s?e.top<t.top?(o=e.left,i=e.bottom,r=e.right,n=e.bottom,l=t.left,a=t.top,c=t.right,d=t.top):(o=t.left,i=t.bottom,r=t.right,n=t.bottom,l=e.left,a=e.top,c=e.right,d=e.top):e.left<t.left?(o=e.right,i=e.top,r=t.left,n=t.top,l=e.right,a=e.bottom,c=t.left,d=t.bottom):(o=t.right,i=t.top,r=e.left,n=e.top,l=t.right,a=t.bottom,c=e.left,d=e.bottom),this.style.setProperty("--hover-bridge-top-left-x",`${o}px`),this.style.setProperty("--hover-bridge-top-left-y",`${i}px`),this.style.setProperty("--hover-bridge-top-right-x",`${r}px`),this.style.setProperty("--hover-bridge-top-right-y",`${n}px`),this.style.setProperty("--hover-bridge-bottom-left-x",`${l}px`),this.style.setProperty("--hover-bridge-bottom-left-y",`${a}px`),this.style.setProperty("--hover-bridge-bottom-right-x",`${c}px`),this.style.setProperty("--hover-bridge-bottom-right-y",`${d}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has("active")&&(this.active?this.start():this.stop()),e.has("anchor")&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){if(await this.stop(),this.anchor&&typeof this.anchor=="string"){const e=this.getRootNode();this.anchorEl=e.getElementById(this.anchor)}else this.anchor instanceof Element||$i(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector('[slot="anchor"]');this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.start()}start(){this.anchorEl&&(this.cleanup=fi(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute("data-current-placement"),this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height"),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;const e=[gi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(fs({apply:({rects:s})=>{const o=this.sync==="width"||this.sync==="both",i=this.sync==="height"||this.sync==="both";this.popup.style.width=o?`${s.reference.width}px`:"",this.popup.style.height=i?`${s.reference.height}px`:""}})):(this.popup.style.width="",this.popup.style.height=""),this.flip&&e.push(mi({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy==="best-fit"?"bestFit":"initialPlacement",padding:this.flipPadding})),this.shift&&e.push(bi({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(fs({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:s,availableHeight:o})=>{this.autoSize==="vertical"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-height",`${o}px`):this.style.removeProperty("--auto-size-available-height"),this.autoSize==="horizontal"||this.autoSize==="both"?this.style.setProperty("--auto-size-available-width",`${s}px`):this.style.removeProperty("--auto-size-available-width")}})):(this.style.removeProperty("--auto-size-available-width"),this.style.removeProperty("--auto-size-available-height")),this.arrow&&e.push(vi({element:this.arrowEl,padding:this.arrowPadding}));const t=this.strategy==="absolute"?s=>ie.getOffsetParent(s,wi):ie.getOffsetParent;yi(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:He(Ot({},ie),{getOffsetParent:t})}).then(({x:s,y:o,middlewareData:i,placement:r})=>{const n=getComputedStyle(this).direction==="rtl",l={top:"bottom",right:"left",bottom:"top",left:"right"}[r.split("-")[0]];if(this.setAttribute("data-current-placement",r),Object.assign(this.popup.style,{left:`${s}px`,top:`${o}px`}),this.arrow){const a=i.arrow.x,c=i.arrow.y;let d="",p="",b="",u="";if(this.arrowPlacement==="start"){const g=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";d=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"",p=n?g:"",u=n?"":g}else if(this.arrowPlacement==="end"){const g=typeof a=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:"";p=n?"":g,u=n?g:"",b=typeof c=="number"?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:""}else this.arrowPlacement==="center"?(u=typeof a=="number"?"calc(50% - var(--arrow-size-diagonal))":"",d=typeof c=="number"?"calc(50% - var(--arrow-size-diagonal))":""):(u=typeof a=="number"?`${a}px`:"",d=typeof c=="number"?`${c}px`:"");Object.assign(this.arrowEl.style,{top:d,right:p,bottom:b,left:u,[l]:"calc(var(--arrow-size-diagonal) * -1)"})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit("sl-reposition")}render(){return T`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${X({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${X({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy==="fixed","popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?T`<div part="arrow" class="popup__arrow" role="presentation"></div>`:""}
      </div>
    `}};$.styles=[Z,Bo];h([E(".popup")],$.prototype,"popup",2);h([E(".popup__arrow")],$.prototype,"arrowEl",2);h([f()],$.prototype,"anchor",2);h([f({type:Boolean,reflect:!0})],$.prototype,"active",2);h([f({reflect:!0})],$.prototype,"placement",2);h([f({reflect:!0})],$.prototype,"strategy",2);h([f({type:Number})],$.prototype,"distance",2);h([f({type:Number})],$.prototype,"skidding",2);h([f({type:Boolean})],$.prototype,"arrow",2);h([f({attribute:"arrow-placement"})],$.prototype,"arrowPlacement",2);h([f({attribute:"arrow-padding",type:Number})],$.prototype,"arrowPadding",2);h([f({type:Boolean})],$.prototype,"flip",2);h([f({attribute:"flip-fallback-placements",converter:{fromAttribute:e=>e.split(" ").map(t=>t.trim()).filter(t=>t!==""),toAttribute:e=>e.join(" ")}})],$.prototype,"flipFallbackPlacements",2);h([f({attribute:"flip-fallback-strategy"})],$.prototype,"flipFallbackStrategy",2);h([f({type:Object})],$.prototype,"flipBoundary",2);h([f({attribute:"flip-padding",type:Number})],$.prototype,"flipPadding",2);h([f({type:Boolean})],$.prototype,"shift",2);h([f({type:Object})],$.prototype,"shiftBoundary",2);h([f({attribute:"shift-padding",type:Number})],$.prototype,"shiftPadding",2);h([f({attribute:"auto-size"})],$.prototype,"autoSize",2);h([f()],$.prototype,"sync",2);h([f({type:Object})],$.prototype,"autoSizeBoundary",2);h([f({attribute:"auto-size-padding",type:Number})],$.prototype,"autoSizePadding",2);h([f({attribute:"hover-bridge",type:Boolean})],$.prototype,"hoverBridge",2);var Vs=new Map,xi=new WeakMap;function Ai(e){return e??{keyframes:[],options:{duration:0}}}function gs(e,t){return t.toLowerCase()==="rtl"?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function Dt(e,t){Vs.set(e,Ai(t))}function Tt(e,t,s){const o=xi.get(e);if(o!=null&&o[t])return gs(o[t],s.dir);const i=Vs.get(t);return i?gs(i,s.dir):{keyframes:[],options:{duration:0}}}function de(e,t){return new Promise(s=>{function o(i){i.target===e&&(e.removeEventListener(t,o),s())}e.addEventListener(t,o)})}function pe(e,t,s){return new Promise(o=>{if((s==null?void 0:s.duration)===1/0)throw new Error("Promise-based animations must be finite.");const i=e.animate(t,He(Ot({},s),{duration:Ci()?0:s.duration}));i.addEventListener("cancel",o,{once:!0}),i.addEventListener("finish",o,{once:!0})})}function bs(e){return e=e.toString().toLowerCase(),e.indexOf("ms")>-1?parseFloat(e):e.indexOf("s")>-1?parseFloat(e)*1e3:parseFloat(e)}function Ci(){return window.matchMedia("(prefers-reduced-motion: reduce)").matches}function ue(e){return Promise.all(e.getAnimations().map(t=>new Promise(s=>{t.cancel(),requestAnimationFrame(s)})))}function ms(e,t){return e.map(s=>He(Ot({},s),{height:s.height==="auto"?`${t}px`:s.height}))}const Le=new Set,Et=new Map;let ft,qe="ltr",Ye="en";const qs=typeof MutationObserver<"u"&&typeof document<"u"&&typeof document.documentElement<"u";if(qs){const e=new MutationObserver(Ks);qe=document.documentElement.dir||"ltr",Ye=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:["dir","lang"]})}function Ys(...e){e.map(t=>{const s=t.$code.toLowerCase();Et.has(s)?Et.set(s,Object.assign(Object.assign({},Et.get(s)),t)):Et.set(s,t),ft||(ft=t)}),Ks()}function Ks(){qs&&(qe=document.documentElement.dir||"ltr",Ye=document.documentElement.lang||navigator.language),[...Le.keys()].map(e=>{typeof e.requestUpdate=="function"&&e.requestUpdate()})}let Ei=class{constructor(t){this.host=t,this.host.addController(this)}hostConnected(){Le.add(this.host)}hostDisconnected(){Le.delete(this.host)}dir(){return`${this.host.dir||qe}`.toLowerCase()}lang(){return`${this.host.lang||Ye}`.toLowerCase()}getTranslationData(t){var s,o;const i=new Intl.Locale(t.replace(/_/g,"-")),r=i==null?void 0:i.language.toLowerCase(),n=(o=(s=i==null?void 0:i.region)===null||s===void 0?void 0:s.toLowerCase())!==null&&o!==void 0?o:"",l=Et.get(`${r}-${n}`),a=Et.get(r);return{locale:i,language:r,region:n,primary:l,secondary:a}}exists(t,s){var o;const{primary:i,secondary:r}=this.getTranslationData((o=s.lang)!==null&&o!==void 0?o:this.lang());return s=Object.assign({includeFallback:!1},s),!!(i&&i[t]||r&&r[t]||s.includeFallback&&ft&&ft[t])}term(t,...s){const{primary:o,secondary:i}=this.getTranslationData(this.lang());let r;if(o&&o[t])r=o[t];else if(i&&i[t])r=i[t];else if(ft&&ft[t])r=ft[t];else return console.error(`No translation found for: ${String(t)}`),String(t);return typeof r=="function"?r(...s):r}date(t,s){return t=new Date(t),new Intl.DateTimeFormat(this.lang(),s).format(t)}number(t,s){return t=Number(t),isNaN(t)?"":new Intl.NumberFormat(this.lang(),s).format(t)}relativeTime(t,s,o){return new Intl.RelativeTimeFormat(this.lang(),o).format(t,s)}};var Xs={$code:"en",$name:"English",$dir:"ltr",carousel:"Carousel",clearEntry:"Clear entry",close:"Close",copied:"Copied",copy:"Copy",currentValue:"Current value",error:"Error",goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:"Hide password",loading:"Loading",nextSlide:"Next slide",numOptionsSelected:e=>e===0?"No options selected":e===1?"1 option selected":`${e} options selected`,previousSlide:"Previous slide",progress:"Progress",remove:"Remove",resize:"Resize",scrollToEnd:"Scroll to end",scrollToStart:"Scroll to start",selectAColorFromTheScreen:"Select a color from the screen",showPassword:"Show password",slideNum:e=>`Slide ${e}`,toggleColorFormat:"Toggle color format"};Ys(Xs);var Si=Xs,Zt=class extends Ei{};Ys(Si);function I(e,t){const s=Ot({waitUntilFirstUpdate:!1},t);return(o,i)=>{const{update:r}=o,n=Array.isArray(e)?e:[e];o.update=function(l){n.forEach(a=>{const c=a;if(l.has(c)){const d=l.get(c),p=this[c];d!==p&&(!s.waitUntilFirstUpdate||this.hasUpdated)&&this[i](d,p)}}),r.call(this,l)}}}var k=class extends O{constructor(){super(),this.localize=new Zt(this),this.content="",this.placement="top",this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger="hover focus",this.hoist=!1,this.handleBlur=()=>{this.hasTrigger("focus")&&this.hide()},this.handleClick=()=>{this.hasTrigger("click")&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger("focus")&&this.show()},this.handleDocumentKeyDown=e=>{e.key==="Escape"&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger("hover")){const e=bs(getComputedStyle(this).getPropertyValue("--show-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger("hover")){const e=bs(getComputedStyle(this).getPropertyValue("--hide-delay"));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener("blur",this.handleBlur,!0),this.addEventListener("focus",this.handleFocus,!0),this.addEventListener("click",this.handleClick),this.addEventListener("mouseover",this.handleMouseOver),this.addEventListener("mouseout",this.handleMouseOut)}disconnectedCallback(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(" ").includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit("sl-show"),"CloseWatcher"in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener("keydown",this.handleDocumentKeyDown),await ue(this.body),this.body.hidden=!1,this.popup.active=!0;const{keyframes:s,options:o}=Tt(this,"tooltip.show",{dir:this.localize.dir()});await pe(this.popup.popup,s,o),this.popup.reposition(),this.emit("sl-after-show")}else{this.emit("sl-hide"),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener("keydown",this.handleDocumentKeyDown),await ue(this.body);const{keyframes:s,options:o}=Tt(this,"tooltip.hide",{dir:this.localize.dir()});await pe(this.popup.popup,s,o),this.popup.active=!1,this.body.hidden=!0,this.emit("sl-after-hide")}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,de(this,"sl-after-show")}async hide(){if(this.open)return this.open=!1,de(this,"sl-after-hide")}render(){return T`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${X({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?"fixed":"absolute"}
        flip
        shift
        arrow
        hover-bridge
      >
        ${""}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${""}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?"polite":"off"}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};k.styles=[Z,Do];k.dependencies={"sl-popup":$};h([E("slot:not([name])")],k.prototype,"defaultSlot",2);h([E(".tooltip__body")],k.prototype,"body",2);h([E("sl-popup")],k.prototype,"popup",2);h([f()],k.prototype,"content",2);h([f()],k.prototype,"placement",2);h([f({type:Boolean,reflect:!0})],k.prototype,"disabled",2);h([f({type:Number})],k.prototype,"distance",2);h([f({type:Boolean,reflect:!0})],k.prototype,"open",2);h([f({type:Number})],k.prototype,"skidding",2);h([f()],k.prototype,"trigger",2);h([f({type:Boolean})],k.prototype,"hoist",2);h([I("open",{waitUntilFirstUpdate:!0})],k.prototype,"handleOpenChange",1);h([I(["content","distance","hoist","placement","skidding"])],k.prototype,"handleOptionsChange",1);h([I("disabled")],k.prototype,"handleDisabledChange",1);Dt("tooltip.show",{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:"ease"}});Dt("tooltip.hide",{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:"ease"}});var ki=U`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,Pi=U`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`,Te="";function vs(e){Te=e}function Li(e=""){if(!Te){const t=[...document.getElementsByTagName("script")],s=t.find(o=>o.hasAttribute("data-shoelace"));if(s)vs(s.getAttribute("data-shoelace"));else{const o=t.find(r=>/shoelace(\.min)?\.js($|\?)/.test(r.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(r.src));let i="";o&&(i=o.getAttribute("src")),vs(i.split("/").slice(0,-1).join("/"))}}return Te.replace(/\/$/,"")+(e?`/${e.replace(/^\//,"")}`:"")}var Ti={name:"default",resolver:e=>Li(`assets/icons/${e}.svg`)},Oi=Ti,ys={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Ri={name:"system",resolver:e=>e in ys?`data:image/svg+xml,${encodeURIComponent(ys[e])}`:""},zi=Ri,Mi=[Oi,zi],Oe=[];function Di(e){Oe.push(e)}function Bi(e){Oe=Oe.filter(t=>t!==e)}function ws(e){return Mi.find(t=>t.name===e)}/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ni=(e,t)=>(e==null?void 0:e._$litType$)!==void 0;var Ht=Symbol(),ee=Symbol(),Ee,Se=new Map,F=class extends O{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label="",this.library="default"}async resolveIcon(e,t){var s;let o;if(t!=null&&t.spriteSheet){this.svg=T`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,await this.updateComplete;const i=this.shadowRoot.querySelector("[part='svg']");return typeof t.mutator=="function"&&t.mutator(i),this.svg}try{if(o=await fetch(e,{mode:"cors"}),!o.ok)return o.status===410?Ht:ee}catch{return ee}try{const i=document.createElement("div");i.innerHTML=await o.text();const r=i.firstElementChild;if(((s=r==null?void 0:r.tagName)==null?void 0:s.toLowerCase())!=="svg")return Ht;Ee||(Ee=new DOMParser);const l=Ee.parseFromString(r.outerHTML,"text/html").body.querySelector("svg");return l?(l.part.add("svg"),document.adoptNode(l)):Ht}catch{return Ht}}connectedCallback(){super.connectedCallback(),Di(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Bi(this)}getIconSource(){const e=ws(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label=="string"&&this.label.length>0?(this.setAttribute("role","img"),this.setAttribute("aria-label",this.label),this.removeAttribute("aria-hidden")):(this.removeAttribute("role"),this.removeAttribute("aria-label"),this.setAttribute("aria-hidden","true"))}async setIcon(){var e;const{url:t,fromLibrary:s}=this.getIconSource(),o=s?ws(this.library):void 0;if(!t){this.svg=null;return}let i=Se.get(t);if(i||(i=this.resolveIcon(t,o),Se.set(t,i)),!this.initialRender)return;const r=await i;if(r===ee&&Se.delete(t),t===this.getIconSource().url){if(Ni(r)){this.svg=r;return}switch(r){case ee:case Ht:this.svg=null,this.emit("sl-error");break;default:this.svg=r.cloneNode(!0),(e=o==null?void 0:o.mutator)==null||e.call(o,this.svg),this.emit("sl-load")}}}render(){return this.svg}};F.styles=[Z,Pi];h([Gt()],F.prototype,"svg",2);h([f({reflect:!0})],F.prototype,"name",2);h([f()],F.prototype,"src",2);h([f()],F.prototype,"label",2);h([f({reflect:!0})],F.prototype,"library",2);h([I("label")],F.prototype,"handleLabelChange",1);h([I(["name","src","library"])],F.prototype,"setIcon",1);var S=class extends O{constructor(){super(...arguments),this.localize=new Zt(this),this.isCopying=!1,this.status="rest",this.value="",this.from="",this.disabled=!1,this.copyLabel="",this.successLabel="",this.errorLabel="",this.feedbackDuration=1e3,this.tooltipPlacement="top",this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){const t=this.getRootNode(),s=this.from.includes("."),o=this.from.includes("[")&&this.from.includes("]");let i=this.from,r="";s?[i,r]=this.from.trim().split("."):o&&([i,r]=this.from.trim().replace(/\]$/,"").split("["));const n="getElementById"in t?t.getElementById(i):null;n?o?e=n.getAttribute(r)||"":s?e=n[r]||"":e=n.textContent||"":(this.showStatus("error"),this.emit("sl-error"))}if(!e)this.showStatus("error"),this.emit("sl-error");else try{await navigator.clipboard.writeText(e),this.showStatus("success"),this.emit("sl-copy",{detail:{value:e}})}catch{this.showStatus("error"),this.emit("sl-error")}}async showStatus(e){const t=this.copyLabel||this.localize.term("copy"),s=this.successLabel||this.localize.term("copied"),o=this.errorLabel||this.localize.term("error"),i=e==="success"?this.successIcon:this.errorIcon,r=Tt(this,"copy.in",{dir:"ltr"}),n=Tt(this,"copy.out",{dir:"ltr"});this.tooltip.content=e==="success"?s:o,await this.copyIcon.animate(n.keyframes,n.options).finished,this.copyIcon.hidden=!0,this.status=e,i.hidden=!1,await i.animate(r.keyframes,r.options).finished,setTimeout(async()=>{await i.animate(n.keyframes,n.options).finished,i.hidden=!0,this.status="rest",this.copyIcon.hidden=!1,await this.copyIcon.animate(r.keyframes,r.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){const e=this.copyLabel||this.localize.term("copy");return T`
      <sl-tooltip
        class=${X({"copy-button":!0,"copy-button--success":this.status==="success","copy-button--error":this.status==="error"})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};S.styles=[Z,ki];S.dependencies={"sl-icon":F,"sl-tooltip":k};h([E('slot[name="copy-icon"]')],S.prototype,"copyIcon",2);h([E('slot[name="success-icon"]')],S.prototype,"successIcon",2);h([E('slot[name="error-icon"]')],S.prototype,"errorIcon",2);h([E("sl-tooltip")],S.prototype,"tooltip",2);h([Gt()],S.prototype,"isCopying",2);h([Gt()],S.prototype,"status",2);h([f()],S.prototype,"value",2);h([f()],S.prototype,"from",2);h([f({type:Boolean,reflect:!0})],S.prototype,"disabled",2);h([f({attribute:"copy-label"})],S.prototype,"copyLabel",2);h([f({attribute:"success-label"})],S.prototype,"successLabel",2);h([f({attribute:"error-label"})],S.prototype,"errorLabel",2);h([f({attribute:"feedback-duration",type:Number})],S.prototype,"feedbackDuration",2);h([f({attribute:"tooltip-placement"})],S.prototype,"tooltipPlacement",2);h([f({type:Boolean})],S.prototype,"hoist",2);Dt("copy.in",{keyframes:[{scale:".25",opacity:".25"},{scale:"1",opacity:"1"}],options:{duration:100}});Dt("copy.out",{keyframes:[{scale:"1",opacity:"1"},{scale:".25",opacity:"0"}],options:{duration:100}});S.define("sl-copy-button");var Hi=U`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,j=class extends O{constructor(){super(...arguments),this.localize=new Zt(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?"auto":"0",this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(const t of e)t.type==="attributes"&&t.attributeName==="open"&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){super.disconnectedCallback(),this.detailsObserver.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key==="ArrowUp"||e.key==="ArrowLeft")&&(e.preventDefault(),this.hide()),(e.key==="ArrowDown"||e.key==="ArrowRight")&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit("sl-show",{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await ue(this.body);const{keyframes:t,options:s}=Tt(this,"details.show",{dir:this.localize.dir()});await pe(this.body,ms(t,this.body.scrollHeight),s),this.body.style.height="auto",this.emit("sl-after-show")}else{if(this.emit("sl-hide",{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await ue(this.body);const{keyframes:t,options:s}=Tt(this,"details.hide",{dir:this.localize.dir()});await pe(this.body,ms(t,this.body.scrollHeight),s),this.body.style.height="auto",this.details.open=!1,this.emit("sl-after-hide")}}async show(){if(!(this.open||this.disabled))return this.open=!0,de(this,"sl-after-show")}async hide(){if(!(!this.open||this.disabled))return this.open=!1,de(this,"sl-after-hide")}render(){const e=this.localize.dir()==="rtl";return T`
      <details
        part="base"
        class=${X({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?"true":"false"}
          aria-controls="content"
          aria-disabled=${this.disabled?"true":"false"}
          tabindex=${this.disabled?"-1":"0"}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?"chevron-left":"chevron-right"}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};j.styles=[Z,Hi];j.dependencies={"sl-icon":F};h([E(".details")],j.prototype,"details",2);h([E(".details__header")],j.prototype,"header",2);h([E(".details__body")],j.prototype,"body",2);h([E(".details__expand-icon-slot")],j.prototype,"expandIconSlot",2);h([f({type:Boolean,reflect:!0})],j.prototype,"open",2);h([f()],j.prototype,"summary",2);h([f({type:Boolean,reflect:!0})],j.prototype,"disabled",2);h([I("open",{waitUntilFirstUpdate:!0})],j.prototype,"handleOpenChange",1);Dt("details.show",{keyframes:[{height:"0",opacity:"0"},{height:"auto",opacity:"1"}],options:{duration:250,easing:"linear"}});Dt("details.hide",{keyframes:[{height:"auto",opacity:"1"},{height:"0",opacity:"0"}],options:{duration:250,easing:"linear"}});j.define("sl-details");var Ui=U`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus {
    outline: none;
  }

  .tab:focus-visible:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Ii=U`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`;/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Gs=Symbol.for(""),Fi=e=>{if((e==null?void 0:e.r)===Gs)return e==null?void 0:e._$litStatic$},_s=(e,...t)=>({_$litStatic$:t.reduce((s,o,i)=>s+(r=>{if(r._$litStatic$!==void 0)return r._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${r}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(o)+e[i+1],e[0]),r:Gs}),$s=new Map,ji=e=>(t,...s)=>{const o=s.length;let i,r;const n=[],l=[];let a,c=0,d=!1;for(;c<o;){for(a=t[c];c<o&&(r=s[c],(i=Fi(r))!==void 0);)a+=i+t[++c],d=!0;c!==o&&l.push(r),n.push(a),c++}if(c===o&&n.push(t[o]),d){const p=n.join("$$lit$$");(t=$s.get(p))===void 0&&(n.raw=n,$s.set(p,t=n)),s=l}return e(t,...s)},Wi=ji(T);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Y=e=>e??C;var R=class extends O{constructor(){super(...arguments),this.hasFocus=!1,this.label="",this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit("sl-blur")}handleFocus(){this.hasFocus=!0,this.emit("sl-focus")}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){const e=!!this.href,t=e?_s`a`:_s`button`;return Wi`
      <${t}
        part="base"
        class=${X({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${Y(e?void 0:this.disabled)}
        type=${Y(e?void 0:"button")}
        href=${Y(e?this.href:void 0)}
        target=${Y(e?this.target:void 0)}
        download=${Y(e?this.download:void 0)}
        rel=${Y(e&&this.target?"noreferrer noopener":void 0)}
        role=${Y(e?void 0:"button")}
        aria-disabled=${this.disabled?"true":"false"}
        aria-label="${this.label}"
        tabindex=${this.disabled?"-1":"0"}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${Y(this.name)}
          library=${Y(this.library)}
          src=${Y(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};R.styles=[Z,Ii];R.dependencies={"sl-icon":F};h([E(".icon-button")],R.prototype,"button",2);h([Gt()],R.prototype,"hasFocus",2);h([f()],R.prototype,"name",2);h([f()],R.prototype,"library",2);h([f()],R.prototype,"src",2);h([f()],R.prototype,"href",2);h([f()],R.prototype,"target",2);h([f()],R.prototype,"download",2);h([f()],R.prototype,"label",2);h([f({type:Boolean,reflect:!0})],R.prototype,"disabled",2);var Vi=0,Q=class extends O{constructor(){super(...arguments),this.localize=new Zt(this),this.attrId=++Vi,this.componentId=`sl-tab-${this.attrId}`,this.panel="",this.active=!1,this.closable=!1,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","tab")}handleCloseClick(e){e.stopPropagation(),this.emit("sl-close")}handleActiveChange(){this.setAttribute("aria-selected",this.active?"true":"false")}handleDisabledChange(){this.setAttribute("aria-disabled",this.disabled?"true":"false")}focus(e){this.tab.focus(e)}blur(){this.tab.blur()}render(){return this.id=this.id.length>0?this.id:this.componentId,T`
      <div
        part="base"
        class=${X({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
        tabindex=${this.disabled?"-1":"0"}
      >
        <slot></slot>
        ${this.closable?T`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term("close")}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:""}
      </div>
    `}};Q.styles=[Z,Ui];Q.dependencies={"sl-icon-button":R};h([E(".tab")],Q.prototype,"tab",2);h([f({reflect:!0})],Q.prototype,"panel",2);h([f({type:Boolean,reflect:!0})],Q.prototype,"active",2);h([f({type:Boolean})],Q.prototype,"closable",2);h([f({type:Boolean,reflect:!0})],Q.prototype,"disabled",2);h([I("active")],Q.prototype,"handleActiveChange",1);h([I("disabled")],Q.prototype,"handleDisabledChange",1);Q.define("sl-tab");var qi=U`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`;function Yi(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}function xs(e,t,s="vertical",o="smooth"){const i=Yi(e,t),r=i.top+t.scrollTop,n=i.left+t.scrollLeft,l=t.scrollLeft,a=t.scrollLeft+t.offsetWidth,c=t.scrollTop,d=t.scrollTop+t.offsetHeight;(s==="horizontal"||s==="both")&&(n<l?t.scrollTo({left:n,behavior:o}):n+e.clientWidth>a&&t.scrollTo({left:n-t.offsetWidth+e.clientWidth,behavior:o})),(s==="vertical"||s==="both")&&(r<c?t.scrollTo({top:r,behavior:o}):r+e.clientHeight>d&&t.scrollTo({top:r-t.offsetHeight+e.clientHeight,behavior:o}))}var D=class extends O{constructor(){super(...arguments),this.localize=new Zt(this),this.tabs=[],this.panels=[],this.hasScrollControls=!1,this.placement="top",this.activation="auto",this.noScrollControls=!1}connectedCallback(){const e=Promise.all([customElements.whenDefined("sl-tab"),customElements.whenDefined("sl-tab-panel")]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(t=>{t.some(s=>!["aria-labelledby","aria-controls"].includes(s.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(s=>s.attributeName==="disabled")&&this.syncTabsAndPanels()}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((s,o)=>{var i;s[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab((i=this.getActiveTab())!=null?i:this.tabs[0],{emitEvents:!1}),o.unobserve(s[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){super.disconnectedCallback(),this.mutationObserver.disconnect(),this.resizeObserver.unobserve(this.nav)}getAllTabs(e={includeDisabled:!0}){return[...this.shadowRoot.querySelector('slot[name="nav"]').assignedElements()].filter(s=>e.includeDisabled?s.tagName.toLowerCase()==="sl-tab":s.tagName.toLowerCase()==="sl-tab"&&!s.disabled)}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()==="sl-tab-panel")}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){const s=e.target.closest("sl-tab");(s==null?void 0:s.closest("sl-tab-group"))===this&&s!==null&&this.setActiveTab(s,{scrollBehavior:"smooth"})}handleKeyDown(e){const s=e.target.closest("sl-tab");if((s==null?void 0:s.closest("sl-tab-group"))===this&&(["Enter"," "].includes(e.key)&&s!==null&&(this.setActiveTab(s,{scrollBehavior:"smooth"}),e.preventDefault()),["ArrowLeft","ArrowRight","ArrowUp","ArrowDown","Home","End"].includes(e.key))){const i=this.tabs.find(n=>n.matches(":focus")),r=this.localize.dir()==="rtl";if((i==null?void 0:i.tagName.toLowerCase())==="sl-tab"){let n=this.tabs.indexOf(i);e.key==="Home"?n=0:e.key==="End"?n=this.tabs.length-1:["top","bottom"].includes(this.placement)&&e.key===(r?"ArrowRight":"ArrowLeft")||["start","end"].includes(this.placement)&&e.key==="ArrowUp"?n--:(["top","bottom"].includes(this.placement)&&e.key===(r?"ArrowLeft":"ArrowRight")||["start","end"].includes(this.placement)&&e.key==="ArrowDown")&&n++,n<0&&(n=this.tabs.length-1),n>this.tabs.length-1&&(n=0),this.tabs[n].focus({preventScroll:!0}),this.activation==="auto"&&this.setActiveTab(this.tabs[n],{scrollBehavior:"smooth"}),["top","bottom"].includes(this.placement)&&xs(this.tabs[n],this.nav,"horizontal"),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:"smooth"})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()==="rtl"?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:"smooth"})}setActiveTab(e,t){if(t=Ot({emitEvents:!0,scrollBehavior:"auto"},t),e!==this.activeTab&&!e.disabled){const s=this.activeTab;this.activeTab=e,this.tabs.forEach(o=>o.active=o===this.activeTab),this.panels.forEach(o=>{var i;return o.active=o.name===((i=this.activeTab)==null?void 0:i.panel)}),this.syncIndicator(),["top","bottom"].includes(this.placement)&&xs(this.activeTab,this.nav,"horizontal",t.scrollBehavior),t.emitEvents&&(s&&this.emit("sl-tab-hide",{detail:{name:s.panel}}),this.emit("sl-tab-show",{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{const t=this.panels.find(s=>s.name===e.panel);t&&(e.setAttribute("aria-controls",t.getAttribute("id")),t.setAttribute("aria-labelledby",e.getAttribute("id")))})}repositionIndicator(){const e=this.getActiveTab();if(!e)return;const t=e.clientWidth,s=e.clientHeight,o=this.localize.dir()==="rtl",i=this.getAllTabs(),n=i.slice(0,i.indexOf(e)).reduce((l,a)=>({left:l.left+a.clientWidth,top:l.top+a.clientHeight}),{left:0,top:0});switch(this.placement){case"top":case"bottom":this.indicator.style.width=`${t}px`,this.indicator.style.height="auto",this.indicator.style.translate=o?`${-1*n.left}px`:`${n.left}px`;break;case"start":case"end":this.indicator.style.width="auto",this.indicator.style.height=`${s}px`,this.indicator.style.translate=`0 ${n.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs({includeDisabled:!1}),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=["top","bottom"].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1}syncIndicator(){this.getActiveTab()?(this.indicator.style.display="block",this.repositionIndicator()):this.indicator.style.display="none"}show(e){const t=this.tabs.find(s=>s.panel===e);t&&this.setActiveTab(t,{scrollBehavior:"smooth"})}render(){const e=this.localize.dir()==="rtl";return T`
      <div
        part="base"
        class=${X({"tab-group":!0,"tab-group--top":this.placement==="top","tab-group--bottom":this.placement==="bottom","tab-group--start":this.placement==="start","tab-group--end":this.placement==="end","tab-group--rtl":this.localize.dir()==="rtl","tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?T`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--start"
                  name=${e?"chevron-right":"chevron-left"}
                  library="system"
                  label=${this.localize.term("scrollToStart")}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:""}

          <div class="tab-group__nav">
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
            </div>
          </div>

          ${this.hasScrollControls?T`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class="tab-group__scroll-button tab-group__scroll-button--end"
                  name=${e?"chevron-left":"chevron-right"}
                  library="system"
                  label=${this.localize.term("scrollToEnd")}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:""}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};D.styles=[Z,qi];D.dependencies={"sl-icon-button":R};h([E(".tab-group")],D.prototype,"tabGroup",2);h([E(".tab-group__body")],D.prototype,"body",2);h([E(".tab-group__nav")],D.prototype,"nav",2);h([E(".tab-group__indicator")],D.prototype,"indicator",2);h([Gt()],D.prototype,"hasScrollControls",2);h([f()],D.prototype,"placement",2);h([f()],D.prototype,"activation",2);h([f({attribute:"no-scroll-controls",type:Boolean})],D.prototype,"noScrollControls",2);h([I("noScrollControls",{waitUntilFirstUpdate:!0})],D.prototype,"updateScrollControls",1);h([I("placement",{waitUntilFirstUpdate:!0})],D.prototype,"syncIndicator",1);D.define("sl-tab-group");var Ki=U`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Xi=0,Qt=class extends O{constructor(){super(...arguments),this.attrId=++Xi,this.componentId=`sl-tab-panel-${this.attrId}`,this.name="",this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute("role","tabpanel")}handleActiveChange(){this.setAttribute("aria-hidden",this.active?"false":"true")}render(){return T`
      <slot
        part="base"
        class=${X({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Qt.styles=[Z,Ki];h([f({reflect:!0})],Qt.prototype,"name",2);h([f({type:Boolean,reflect:!0})],Qt.prototype,"active",2);h([I("active")],Qt.prototype,"handleActiveChange",1);Qt.define("sl-tab-panel");function se(e,t){const s=new URLSearchParams(e),o={};for(const[i,r]of s.entries())t?t.includes(i)&&(o[i]=r):o[i]=r;return o}class Ke{constructor(t){nt(this,"panelEl");nt(this,"els",{});if(this.panelName=t,this.panelEl=document.querySelector(`sl-tab-panel[name='${t}']`),!this.panelEl)throw new Error(`Panel "${this.panelName}" not found`)}initEls(t){const s={};for(const[o,i]of Object.entries(t)){const r=`[data-component="${i}"]`,n=this.panelEl.querySelector(r);if(!n)throw new Error(`el "${this.panelName} > ${o}" not found`);s[o]=n}return s}refresh(){this.clearEls()}clearEls(){for(const t of Object.values(this.els))t&&(t.innerHTML="")}}const As=["auuid","ca","cc","ct","device_spoor_id","gender","guid","loggedIn","mvt","pt","res"];var bt;const fe=class fe extends Ke{constructor(){super("panel-gam");nt(this,"els");xt(this,bt,{});this.els=this.initEls(fe.elMap)}processSraParams(s){const o=s.get("iu_parts"),i=s.get("us_privacy"),r=se(s.get("cust_params"),As),n=s.get("prev_scp").split("|").map(c=>se(c)),l=s.get("prev_iu_szs").split(",").map(c=>c.split("|")),a={};for(let c=0;c<n.length;c++){const d=n[c],p=l[c];a[d.pos]={prev_scp:d,cust_params:r,prev_iu_szs:p,iu_parts:o,us_privacy:i}}return a}processMraParams(s){const o={};for(const[i,r]of s.entries())switch(i){case"cust_params":o[i]=se(r,As);break;case"prev_scp":o[i]=se(r);break;case"prev_iu_szs":o[i]=r.split("|");break;default:o[i]=r;break}return o}parseParams(s){var c;let o="",i="";const[r]=Object.values(s),{iu_parts:n,us_privacy:l,cust_params:a}=r;o+=`
      <ul>
        <li>iu_parts: ${n}</li>
        <li>us_privacy: ${l}</li>
        <li>cust_params:
          <ul>
            ${Object.entries(a??{}).map(([d,p])=>`<li>${d}: ${p}</li>`).join("")}
          </ul>
        </li>
      </ul>
    `,i+="<table>";for(const[d,p]of Object.entries(s))i+=`
        <tr>
          <td><strong>${d}</strong></td>
          <td>prev_iu_szs: ${(c=p.prev_iu_szs)==null?void 0:c.join(", ")}</td>
        </tr>
      `;return i+="</table>",{pageLevelHtml:o,slotLevelHtml:i}}onRequestFinished({url:s}){var o;try{if(s.includes("/gampad/ads")){const i=new URL(s);if((o=i.searchParams.get("prev_scp"))==null?void 0:o.includes("|"))At(this,bt,this.processSraParams(i.searchParams));else{const a=this.processMraParams(i.searchParams),{pos:c}=a.prev_scp??{pos:"unknown"};N(this,bt)[c]=a}const{pageLevelHtml:n,slotLevelHtml:l}=this.parseParams(N(this,bt));this.els.pageLevel.innerHTML=n,this.els.slotLevel.innerHTML=l,this.els.requestsRaw.innerText=JSON.stringify(N(this,bt),null,2)}}catch(i){console.error("GAMPanel.onRequestFinished",i)}}};bt=new WeakMap,nt(fe,"elMap",{pageLevel:"page-level-data",slotLevel:"slot-level-data",requestsRaw:"requests-raw"});let Re=fe;function re(e){return Object.entries(e??{}).map(([t,s])=>`<li>${t}: ${s}</li>`).join("")}const Xe="https://spoor-api.ft.com/ingest",Gi=`${Xe}?type=ads:slot-requested`,Ji=`${Xe}?type=ads:slot-rendered`;function Zi({context:e,user:t}){const{advert:s,creative:o,...i}=e;return`
    <ul>
      <li>Adtech: ${s.adtech??"OAds"}</li>
      <li>Consents: <ul>${re(s.consents)}</ul></li>
      <li>User: <ul>${re(t)}</ul></li>
      <li>Context: <ul>${re(i)}</ul></li>
    </ul>
  `}function Qi(e={}){const t=[];for(const[s,o]of Object.entries(e))t.push(`
      <tr>
        <td>${s}</td>
        <td>${re(o.context.creative)}</td>
      </tr>
    `);return`
    <table>
      ${t.join("")}
    </table>
  `}var mt,kt;const ge=class ge extends Ke{constructor(){super("panel-spoor-ads");xt(this,mt,{});xt(this,kt,!0);nt(this,"els");this.els=this.initEls(ge.elMap)}onRequestFinished({url:s,postData:o}){try{if(s.startsWith(Gi)||s.startsWith(Ji)){const i=JSON.parse(o.text),{pos:r}=i.context.creative;N(this,kt)&&(At(this,kt,!1),this.els.sharedData.innerHTML=Zi(i)),N(this,mt)[r]=i,this.els.eventsParsed.innerHTML=Qi(N(this,mt)),this.els.eventsRaw.innerText=JSON.stringify(N(this,mt),null,2)}}catch(i){console.error("SpoorPanel.onRequestFinished",i)}}refresh(){At(this,mt,{}),At(this,kt,!0),this.clearEls()}};mt=new WeakMap,kt=new WeakMap,nt(ge,"elMap",{sharedData:"shared-data",eventsParsed:"events-parsed",eventsRaw:"events-raw"});let ze=ge;var Yt,Kt;const be=class be extends Ke{constructor(){super("panel-spoor-page");xt(this,Yt,new Map);xt(this,Kt,!0);this.els=this.initEls(be.elMap),this.els.events.addEventListener("click",s=>{s.preventDefault();const i=s.target.dataset.spoorId;if(!i)return;const r=N(this,Yt).get(i);this.els.eventData.innerHTML=JSON.stringify(r,null,2)})}onRequestFinished({url:s,postData:o}){try{if(s.startsWith(Xe)){N(this,Kt)&&(At(this,Kt,!1),this.els.events.innerHTML="");const i=JSON.parse(o.text);N(this,Yt).set(i.context.id,i),this.els.events.appendChild(this.createEventElement(i))}}catch(i){console.error("PagePanel.onRequestFinished",i)}}createEventElement(s){const{id:o}=s.context,i=document.createElement("a");i.href=`#${o}`,i.dataset.spoorId=o,i.textContent=`${s.category}: ${s.action}`;const r=document.createElement("li");return r.id=o,r.appendChild(i),r}};Yt=new WeakMap,Kt=new WeakMap,nt(be,"elMap",{events:"events",eventData:"event-data"});let Me=be;const Js=new Re,Zs=new ze,Qs=new Me;function tr(){Js.refresh(),Zs.refresh(),Qs.refresh()}var Es;(Es=chrome.devtools)==null||Es.network.onRequestFinished.addListener(({request:e})=>{Js.onRequestFinished(e),Zs.onRequestFinished(e),Qs.onRequestFinished(e)});var Ss;(Ss=chrome.devtools)==null||Ss.network.onNavigated.addListener(tr);
