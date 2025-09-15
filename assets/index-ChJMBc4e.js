(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const s of i.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function Dn(e){const u=Object.create(null);for(const t of e.split(","))u[t]=1;return t=>t in u}const $={},ku=[],Le=()=>{},ws=()=>!1,St=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),vn=e=>e.startsWith("onUpdate:"),ce=Object.assign,wn=(e,u)=>{const t=e.indexOf(u);t>-1&&e.splice(t,1)},Fs=Object.prototype.hasOwnProperty,z=(e,u)=>Fs.call(e,u),R=Array.isArray,Cu=e=>Tt(e)==="[object Map]",Jr=e=>Tt(e)==="[object Set]",B=e=>typeof e=="function",Y=e=>typeof e=="string",ou=e=>typeof e=="symbol",K=e=>e!==null&&typeof e=="object",Zr=e=>(K(e)||B(e))&&B(e.then)&&B(e.catch),Kr=Object.prototype.toString,Tt=e=>Kr.call(e),Ss=e=>Tt(e).slice(8,-1),Qr=e=>Tt(e)==="[object Object]",Fn=e=>Y(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Hu=Dn(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),jt=e=>{const u=Object.create(null);return t=>u[t]||(u[t]=e(t))},Ts=/-(\w)/g,Ae=jt(e=>e.replace(Ts,(u,t)=>t?t.toUpperCase():"")),js=/\B([A-Z])/g,pu=jt(e=>e.replace(js,"-$1").toLowerCase()),It=jt(e=>e.charAt(0).toUpperCase()+e.slice(1)),Wt=jt(e=>e?`on${It(e)}`:""),ru=(e,u)=>!Object.is(e,u),Gt=(e,...u)=>{for(let t=0;t<e.length;t++)e[t](...u)},fn=(e,u,t,n=!1)=>{Object.defineProperty(e,u,{configurable:!0,enumerable:!1,writable:n,value:t})},Is=e=>{const u=parseFloat(e);return isNaN(u)?e:u};let tr;const Pt=()=>tr||(tr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Sn(e){if(R(e)){const u={};for(let t=0;t<e.length;t++){const n=e[t],r=Y(n)?Rs(n):Sn(n);if(r)for(const i in r)u[i]=r[i]}return u}else if(Y(e)||K(e))return e}const Ps=/;(?![^(]*\))/g,Ms=/:([^]+)/,Os=/\/\*[^]*?\*\//g;function Rs(e){const u={};return e.replace(Os,"").split(Ps).forEach(t=>{if(t){const n=t.split(Ms);n.length>1&&(u[n[0].trim()]=n[1].trim())}}),u}function ke(e){let u="";if(Y(e))u=e;else if(R(e))for(let t=0;t<e.length;t++){const n=ke(e[t]);n&&(u+=n+" ")}else if(K(e))for(const t in e)e[t]&&(u+=t+" ");return u.trim()}const Ns="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Bs=Dn(Ns);function Yr(e){return!!e||e===""}const Xr=e=>!!(e&&e.__v_isRef===!0),Tn=e=>Y(e)?e:e==null?"":R(e)||K(e)&&(e.toString===Kr||!B(e.toString))?Xr(e)?Tn(e.value):JSON.stringify(e,ei,2):String(e),ei=(e,u)=>Xr(u)?ei(e,u.value):Cu(u)?{[`Map(${u.size})`]:[...u.entries()].reduce((t,[n,r],i)=>(t[Jt(n,i)+" =>"]=r,t),{})}:Jr(u)?{[`Set(${u.size})`]:[...u.values()].map(t=>Jt(t))}:ou(u)?Jt(u):K(u)&&!R(u)&&!Qr(u)?String(u):u,Jt=(e,u="")=>{var t;return ou(e)?`Symbol(${(t=e.description)!=null?t:u})`:e};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let de;class Ls{constructor(u=!1){this.detached=u,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=de,!u&&de&&(this.index=(de.scopes||(de.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let u,t;if(this.scopes)for(u=0,t=this.scopes.length;u<t;u++)this.scopes[u].pause();for(u=0,t=this.effects.length;u<t;u++)this.effects[u].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let u,t;if(this.scopes)for(u=0,t=this.scopes.length;u<t;u++)this.scopes[u].resume();for(u=0,t=this.effects.length;u<t;u++)this.effects[u].resume()}}run(u){if(this._active){const t=de;try{return de=this,u()}finally{de=t}}}on(){++this._on===1&&(this.prevScope=de,de=this)}off(){this._on>0&&--this._on===0&&(de=this.prevScope,this.prevScope=void 0)}stop(u){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!u){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function Hs(){return de}let G;const Zt=new WeakSet;class ui{constructor(u){this.fn=u,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,de&&de.active&&de.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Zt.has(this)&&(Zt.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ni(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nr(this),ri(this);const u=G,t=ve;G=this,ve=!0;try{return this.fn()}finally{ii(this),G=u,ve=t,this.flags&=-3}}stop(){if(this.flags&1){for(let u=this.deps;u;u=u.nextDep)Pn(u);this.deps=this.depsTail=void 0,nr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Zt.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){dn(this)&&this.run()}get dirty(){return dn(this)}}let ti=0,zu,qu;function ni(e,u=!1){if(e.flags|=8,u){e.next=qu,qu=e;return}e.next=zu,zu=e}function jn(){ti++}function In(){if(--ti>0)return;if(qu){let u=qu;for(qu=void 0;u;){const t=u.next;u.next=void 0,u.flags&=-9,u=t}}let e;for(;zu;){let u=zu;for(zu=void 0;u;){const t=u.next;if(u.next=void 0,u.flags&=-9,u.flags&1)try{u.trigger()}catch(n){e||(e=n)}u=t}}if(e)throw e}function ri(e){for(let u=e.deps;u;u=u.nextDep)u.version=-1,u.prevActiveLink=u.dep.activeLink,u.dep.activeLink=u}function ii(e){let u,t=e.depsTail,n=t;for(;n;){const r=n.prevDep;n.version===-1?(n===t&&(t=r),Pn(n),zs(n)):u=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}e.deps=u,e.depsTail=t}function dn(e){for(let u=e.deps;u;u=u.nextDep)if(u.dep.version!==u.version||u.dep.computed&&(si(u.dep.computed)||u.dep.version!==u.version))return!0;return!!e._dirty}function si(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Gu)||(e.globalVersion=Gu,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!dn(e))))return;e.flags|=2;const u=e.dep,t=G,n=ve;G=e,ve=!0;try{ri(e);const r=e.fn(e._value);(u.version===0||ru(r,e._value))&&(e.flags|=128,e._value=r,u.version++)}catch(r){throw u.version++,r}finally{G=t,ve=n,ii(e),e.flags&=-3}}function Pn(e,u=!1){const{dep:t,prevSub:n,nextSub:r}=e;if(n&&(n.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=n,e.nextSub=void 0),t.subs===e&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Pn(i,!0)}!u&&!--t.sc&&t.map&&t.map.delete(t.key)}function zs(e){const{prevDep:u,nextDep:t}=e;u&&(u.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=u,e.nextDep=void 0)}let ve=!0;const oi=[];function Ke(){oi.push(ve),ve=!1}function Qe(){const e=oi.pop();ve=e===void 0?!0:e}function nr(e){const{cleanup:u}=e;if(e.cleanup=void 0,u){const t=G;G=void 0;try{u()}finally{G=t}}}let Gu=0;class qs{constructor(u,t){this.sub=u,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Mn{constructor(u){this.computed=u,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(u){if(!G||!ve||G===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==G)t=this.activeLink=new qs(G,this),G.deps?(t.prevDep=G.depsTail,G.depsTail.nextDep=t,G.depsTail=t):G.deps=G.depsTail=t,ci(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=G.depsTail,t.nextDep=void 0,G.depsTail.nextDep=t,G.depsTail=t,G.deps===t&&(G.deps=n)}return t}trigger(u){this.version++,Gu++,this.notify(u)}notify(u){jn();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{In()}}}function ci(e){if(e.dep.sc++,e.sub.flags&4){const u=e.dep.computed;if(u&&!e.dep.subs){u.flags|=20;for(let n=u.deps;n;n=n.nextDep)ci(n)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const hn=new WeakMap,hu=Symbol(""),pn=Symbol(""),Ju=Symbol("");function ne(e,u,t){if(ve&&G){let n=hn.get(e);n||hn.set(e,n=new Map);let r=n.get(t);r||(n.set(t,r=new Mn),r.map=n,r.key=t),r.track()}}function Ge(e,u,t,n,r,i){const s=hn.get(e);if(!s){Gu++;return}const o=c=>{c&&c.trigger()};if(jn(),u==="clear")s.forEach(o);else{const c=R(e),l=c&&Fn(t);if(c&&t==="length"){const a=Number(n);s.forEach((f,m)=>{(m==="length"||m===Ju||!ou(m)&&m>=a)&&o(f)})}else switch((t!==void 0||s.has(void 0))&&o(s.get(t)),l&&o(s.get(Ju)),u){case"add":c?l&&o(s.get("length")):(o(s.get(hu)),Cu(e)&&o(s.get(pn)));break;case"delete":c||(o(s.get(hu)),Cu(e)&&o(s.get(pn)));break;case"set":Cu(e)&&o(s.get(hu));break}}In()}function gu(e){const u=H(e);return u===e?u:(ne(u,"iterate",Ju),Ce(e)?u:u.map(te))}function Mt(e){return ne(e=H(e),"iterate",Ju),e}const Us={__proto__:null,[Symbol.iterator](){return Kt(this,Symbol.iterator,te)},concat(...e){return gu(this).concat(...e.map(u=>R(u)?gu(u):u))},entries(){return Kt(this,"entries",e=>(e[1]=te(e[1]),e))},every(e,u){return Ve(this,"every",e,u,void 0,arguments)},filter(e,u){return Ve(this,"filter",e,u,t=>t.map(te),arguments)},find(e,u){return Ve(this,"find",e,u,te,arguments)},findIndex(e,u){return Ve(this,"findIndex",e,u,void 0,arguments)},findLast(e,u){return Ve(this,"findLast",e,u,te,arguments)},findLastIndex(e,u){return Ve(this,"findLastIndex",e,u,void 0,arguments)},forEach(e,u){return Ve(this,"forEach",e,u,void 0,arguments)},includes(...e){return Qt(this,"includes",e)},indexOf(...e){return Qt(this,"indexOf",e)},join(e){return gu(this).join(e)},lastIndexOf(...e){return Qt(this,"lastIndexOf",e)},map(e,u){return Ve(this,"map",e,u,void 0,arguments)},pop(){return Ou(this,"pop")},push(...e){return Ou(this,"push",e)},reduce(e,...u){return rr(this,"reduce",e,u)},reduceRight(e,...u){return rr(this,"reduceRight",e,u)},shift(){return Ou(this,"shift")},some(e,u){return Ve(this,"some",e,u,void 0,arguments)},splice(...e){return Ou(this,"splice",e)},toReversed(){return gu(this).toReversed()},toSorted(e){return gu(this).toSorted(e)},toSpliced(...e){return gu(this).toSpliced(...e)},unshift(...e){return Ou(this,"unshift",e)},values(){return Kt(this,"values",te)}};function Kt(e,u,t){const n=Mt(e),r=n[u]();return n!==e&&!Ce(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=t(i.value)),i}),r}const $s=Array.prototype;function Ve(e,u,t,n,r,i){const s=Mt(e),o=s!==e&&!Ce(e),c=s[u];if(c!==$s[u]){const f=c.apply(e,i);return o?te(f):f}let l=t;s!==e&&(o?l=function(f,m){return t.call(this,te(f),m,e)}:t.length>2&&(l=function(f,m){return t.call(this,f,m,e)}));const a=c.call(s,l,n);return o&&r?r(a):a}function rr(e,u,t,n){const r=Mt(e);let i=t;return r!==e&&(Ce(e)?t.length>3&&(i=function(s,o,c){return t.call(this,s,o,c,e)}):i=function(s,o,c){return t.call(this,s,te(o),c,e)}),r[u](i,...n)}function Qt(e,u,t){const n=H(e);ne(n,"iterate",Ju);const r=n[u](...t);return(r===-1||r===!1)&&Bn(t[0])?(t[0]=H(t[0]),n[u](...t)):r}function Ou(e,u,t=[]){Ke(),jn();const n=H(e)[u].apply(e,t);return In(),Qe(),n}const Vs=Dn("__proto__,__v_isRef,__isVue"),li=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(ou));function Ws(e){ou(e)||(e=String(e));const u=H(this);return ne(u,"has",e),u.hasOwnProperty(e)}class ai{constructor(u=!1,t=!1){this._isReadonly=u,this._isShallow=t}get(u,t,n){if(t==="__v_skip")return u.__v_skip;const r=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return i;if(t==="__v_raw")return n===(r?i?t0:pi:i?hi:di).get(u)||Object.getPrototypeOf(u)===Object.getPrototypeOf(n)?u:void 0;const s=R(u);if(!r){let c;if(s&&(c=Us[t]))return c;if(t==="hasOwnProperty")return Ws}const o=Reflect.get(u,t,ie(u)?u:n);return(ou(t)?li.has(t):Vs(t))||(r||ne(u,"get",t),i)?o:ie(o)?s&&Fn(t)?o:o.value:K(o)?r?bi(o):Rn(o):o}}class fi extends ai{constructor(u=!1){super(!1,u)}set(u,t,n,r){let i=u[t];if(!this._isShallow){const c=iu(i);if(!Ce(n)&&!iu(n)&&(i=H(i),n=H(n)),!R(u)&&ie(i)&&!ie(n))return c?!1:(i.value=n,!0)}const s=R(u)&&Fn(t)?Number(t)<u.length:z(u,t),o=Reflect.set(u,t,n,ie(u)?u:r);return u===H(r)&&(s?ru(n,i)&&Ge(u,"set",t,n):Ge(u,"add",t,n)),o}deleteProperty(u,t){const n=z(u,t);u[t];const r=Reflect.deleteProperty(u,t);return r&&n&&Ge(u,"delete",t,void 0),r}has(u,t){const n=Reflect.has(u,t);return(!ou(t)||!li.has(t))&&ne(u,"has",t),n}ownKeys(u){return ne(u,"iterate",R(u)?"length":hu),Reflect.ownKeys(u)}}class Gs extends ai{constructor(u=!1){super(!0,u)}set(u,t){return!0}deleteProperty(u,t){return!0}}const Js=new fi,Zs=new Gs,Ks=new fi(!0);const bn=e=>e,lt=e=>Reflect.getPrototypeOf(e);function Qs(e,u,t){return function(...n){const r=this.__v_raw,i=H(r),s=Cu(i),o=e==="entries"||e===Symbol.iterator&&s,c=e==="keys"&&s,l=r[e](...n),a=t?bn:u?gt:te;return!u&&ne(i,"iterate",c?pn:hu),{next(){const{value:f,done:m}=l.next();return m?{value:f,done:m}:{value:o?[a(f[0]),a(f[1])]:a(f),done:m}},[Symbol.iterator](){return this}}}}function at(e){return function(...u){return e==="delete"?!1:e==="clear"?void 0:this}}function Ys(e,u){const t={get(r){const i=this.__v_raw,s=H(i),o=H(r);e||(ru(r,o)&&ne(s,"get",r),ne(s,"get",o));const{has:c}=lt(s),l=u?bn:e?gt:te;if(c.call(s,r))return l(i.get(r));if(c.call(s,o))return l(i.get(o));i!==s&&i.get(r)},get size(){const r=this.__v_raw;return!e&&ne(H(r),"iterate",hu),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,s=H(i),o=H(r);return e||(ru(r,o)&&ne(s,"has",r),ne(s,"has",o)),r===o?i.has(r):i.has(r)||i.has(o)},forEach(r,i){const s=this,o=s.__v_raw,c=H(o),l=u?bn:e?gt:te;return!e&&ne(c,"iterate",hu),o.forEach((a,f)=>r.call(i,l(a),l(f),s))}};return ce(t,e?{add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear")}:{add(r){!u&&!Ce(r)&&!iu(r)&&(r=H(r));const i=H(this);return lt(i).has.call(i,r)||(i.add(r),Ge(i,"add",r,r)),this},set(r,i){!u&&!Ce(i)&&!iu(i)&&(i=H(i));const s=H(this),{has:o,get:c}=lt(s);let l=o.call(s,r);l||(r=H(r),l=o.call(s,r));const a=c.call(s,r);return s.set(r,i),l?ru(i,a)&&Ge(s,"set",r,i):Ge(s,"add",r,i),this},delete(r){const i=H(this),{has:s,get:o}=lt(i);let c=s.call(i,r);c||(r=H(r),c=s.call(i,r)),o&&o.call(i,r);const l=i.delete(r);return c&&Ge(i,"delete",r,void 0),l},clear(){const r=H(this),i=r.size!==0,s=r.clear();return i&&Ge(r,"clear",void 0,void 0),s}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Qs(r,e,u)}),t}function On(e,u){const t=Ys(e,u);return(n,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?n:Reflect.get(z(t,r)&&r in n?t:n,r,i)}const Xs={get:On(!1,!1)},e0={get:On(!1,!0)},u0={get:On(!0,!1)};const di=new WeakMap,hi=new WeakMap,pi=new WeakMap,t0=new WeakMap;function n0(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function r0(e){return e.__v_skip||!Object.isExtensible(e)?0:n0(Ss(e))}function Rn(e){return iu(e)?e:Nn(e,!1,Js,Xs,di)}function i0(e){return Nn(e,!1,Ks,e0,hi)}function bi(e){return Nn(e,!0,Zs,u0,pi)}function Nn(e,u,t,n,r){if(!K(e)||e.__v_raw&&!(u&&e.__v_isReactive))return e;const i=r0(e);if(i===0)return e;const s=r.get(e);if(s)return s;const o=new Proxy(e,i===2?n:t);return r.set(e,o),o}function Au(e){return iu(e)?Au(e.__v_raw):!!(e&&e.__v_isReactive)}function iu(e){return!!(e&&e.__v_isReadonly)}function Ce(e){return!!(e&&e.__v_isShallow)}function Bn(e){return e?!!e.__v_raw:!1}function H(e){const u=e&&e.__v_raw;return u?H(u):e}function s0(e){return!z(e,"__v_skip")&&Object.isExtensible(e)&&fn(e,"__v_skip",!0),e}const te=e=>K(e)?Rn(e):e,gt=e=>K(e)?bi(e):e;function ie(e){return e?e.__v_isRef===!0:!1}function mi(e){return o0(e,!1)}function o0(e,u){return ie(e)?e:new c0(e,u)}class c0{constructor(u,t){this.dep=new Mn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?u:H(u),this._value=t?u:te(u),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(u){const t=this._rawValue,n=this.__v_isShallow||Ce(u)||iu(u);u=n?u:H(u),ru(u,t)&&(this._rawValue=u,this._value=n?u:te(u),this.dep.trigger())}}function Bu(e){return ie(e)?e.value:e}const l0={get:(e,u,t)=>u==="__v_raw"?e:Bu(Reflect.get(e,u,t)),set:(e,u,t,n)=>{const r=e[u];return ie(r)&&!ie(t)?(r.value=t,!0):Reflect.set(e,u,t,n)}};function xi(e){return Au(e)?e:new Proxy(e,l0)}class a0{constructor(u,t,n){this.fn=u,this.setter=t,this._value=void 0,this.dep=new Mn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Gu-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&G!==this)return ni(this,!0),!0}get value(){const u=this.dep.track();return si(this),u&&(u.version=this.dep.version),this._value}set value(u){this.setter&&this.setter(u)}}function f0(e,u,t=!1){let n,r;return B(e)?n=e:(n=e.get,r=e.set),new a0(n,r,t)}const ft={},_t=new WeakMap;let du;function d0(e,u=!1,t=du){if(t){let n=_t.get(t);n||_t.set(t,n=[]),n.push(e)}}function h0(e,u,t=$){const{immediate:n,deep:r,once:i,scheduler:s,augmentJob:o,call:c}=t,l=y=>r?y:Ce(y)||r===!1||r===0?Je(y,1):Je(y);let a,f,m,b,p=!1,v=!1;if(ie(e)?(f=()=>e.value,p=Ce(e)):Au(e)?(f=()=>l(e),p=!0):R(e)?(v=!0,p=e.some(y=>Au(y)||Ce(y)),f=()=>e.map(y=>{if(ie(y))return y.value;if(Au(y))return l(y);if(B(y))return c?c(y,2):y()})):B(e)?u?f=c?()=>c(e,2):e:f=()=>{if(m){Ke();try{m()}finally{Qe()}}const y=du;du=a;try{return c?c(e,3,[b]):e(b)}finally{du=y}}:f=Le,u&&r){const y=f,T=r===!0?1/0:r;f=()=>Je(y(),T)}const M=Hs(),j=()=>{a.stop(),M&&M.active&&wn(M.effects,a)};if(i&&u){const y=u;u=(...T)=>{y(...T),j()}}let F=v?new Array(e.length).fill(ft):ft;const S=y=>{if(!(!(a.flags&1)||!a.dirty&&!y))if(u){const T=a.run();if(r||p||(v?T.some((N,U)=>ru(N,F[U])):ru(T,F))){m&&m();const N=du;du=a;try{const U=[T,F===ft?void 0:v&&F[0]===ft?[]:F,b];F=T,c?c(u,3,U):u(...U)}finally{du=N}}}else a.run()};return o&&o(S),a=new ui(f),a.scheduler=s?()=>s(S,!1):S,b=y=>d0(y,!1,a),m=a.onStop=()=>{const y=_t.get(a);if(y){if(c)c(y,4);else for(const T of y)T();_t.delete(a)}},u?n?S(!0):F=a.run():s?s(S.bind(null,!0),!0):a.run(),j.pause=a.pause.bind(a),j.resume=a.resume.bind(a),j.stop=j,j}function Je(e,u=1/0,t){if(u<=0||!K(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),u--,ie(e))Je(e.value,u,t);else if(R(e))for(let n=0;n<e.length;n++)Je(e[n],u,t);else if(Jr(e)||Cu(e))e.forEach(n=>{Je(n,u,t)});else if(Qr(e)){for(const n in e)Je(e[n],u,t);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&Je(e[n],u,t)}return e}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function tt(e,u,t,n){try{return n?e(...n):e()}catch(r){Ot(r,u,t)}}function He(e,u,t,n){if(B(e)){const r=tt(e,u,t,n);return r&&Zr(r)&&r.catch(i=>{Ot(i,u,t)}),r}if(R(e)){const r=[];for(let i=0;i<e.length;i++)r.push(He(e[i],u,t,n));return r}}function Ot(e,u,t,n=!0){const r=u?u.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:s}=u&&u.appContext.config||$;if(u){let o=u.parent;const c=u.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;o;){const a=o.ec;if(a){for(let f=0;f<a.length;f++)if(a[f](e,c,l)===!1)return}o=o.parent}if(i){Ke(),tt(i,null,10,[e,c,l]),Qe();return}}p0(e,t,r,n,s)}function p0(e,u,t,n=!0,r=!1){if(r)throw e;console.error(e)}const oe=[];let Me=-1;const Eu=[];let Xe=null,yu=0;const gi=Promise.resolve();let yt=null;function b0(e){const u=yt||gi;return e?u.then(this?e.bind(this):e):u}function m0(e){let u=Me+1,t=oe.length;for(;u<t;){const n=u+t>>>1,r=oe[n],i=Zu(r);i<e||i===e&&r.flags&2?u=n+1:t=n}return u}function Ln(e){if(!(e.flags&1)){const u=Zu(e),t=oe[oe.length-1];!t||!(e.flags&2)&&u>=Zu(t)?oe.push(e):oe.splice(m0(u),0,e),e.flags|=1,_i()}}function _i(){yt||(yt=gi.then(ki))}function x0(e){R(e)?Eu.push(...e):Xe&&e.id===-1?Xe.splice(yu+1,0,e):e.flags&1||(Eu.push(e),e.flags|=1),_i()}function ir(e,u,t=Me+1){for(;t<oe.length;t++){const n=oe[t];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;oe.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function yi(e){if(Eu.length){const u=[...new Set(Eu)].sort((t,n)=>Zu(t)-Zu(n));if(Eu.length=0,Xe){Xe.push(...u);return}for(Xe=u,yu=0;yu<Xe.length;yu++){const t=Xe[yu];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Xe=null,yu=0}}const Zu=e=>e.id==null?e.flags&2?-1:1/0:e.id;function ki(e){try{for(Me=0;Me<oe.length;Me++){const u=oe[Me];u&&!(u.flags&8)&&(u.flags&4&&(u.flags&=-2),tt(u,u.i,u.i?15:14),u.flags&4||(u.flags&=-2))}}finally{for(;Me<oe.length;Me++){const u=oe[Me];u&&(u.flags&=-2)}Me=-1,oe.length=0,yi(),yt=null,(oe.length||Eu.length)&&ki()}}let ge=null,Ci=null;function kt(e){const u=ge;return ge=e,Ci=e&&e.type.__scopeId||null,u}function g0(e,u=ge,t){if(!u||e._n)return e;const n=(...r)=>{n._d&&br(-1);const i=kt(u);let s;try{s=e(...r)}finally{kt(i),n._d&&br(1)}return s};return n._n=!0,n._c=!0,n._d=!0,n}function _0(e,u){if(ge===null)return e;const t=Lt(ge),n=e.dirs||(e.dirs=[]);for(let r=0;r<u.length;r++){let[i,s,o,c=$]=u[r];i&&(B(i)&&(i={mounted:i,updated:i}),i.deep&&Je(s),n.push({dir:i,instance:t,value:s,oldValue:void 0,arg:o,modifiers:c}))}return e}function au(e,u,t,n){const r=e.dirs,i=u&&u.dirs;for(let s=0;s<r.length;s++){const o=r[s];i&&(o.oldValue=i[s].value);let c=o.dir[n];c&&(Ke(),He(c,t,8,[e.el,o,e,u]),Qe())}}const y0=Symbol("_vte"),k0=e=>e.__isTeleport;function Hn(e,u){e.shapeFlag&6&&e.component?(e.transition=u,Hn(e.component.subTree,u)):e.shapeFlag&128?(e.ssContent.transition=u.clone(e.ssContent),e.ssFallback.transition=u.clone(e.ssFallback)):e.transition=u}function Ai(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function Uu(e,u,t,n,r=!1){if(R(e)){e.forEach((p,v)=>Uu(p,u&&(R(u)?u[v]:u),t,n,r));return}if($u(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&Uu(e,u,t,n.component.subTree);return}const i=n.shapeFlag&4?Lt(n.component):n.el,s=r?null:i,{i:o,r:c}=e,l=u&&u.r,a=o.refs===$?o.refs={}:o.refs,f=o.setupState,m=H(f),b=f===$?()=>!1:p=>z(m,p);if(l!=null&&l!==c&&(Y(l)?(a[l]=null,b(l)&&(f[l]=null)):ie(l)&&(l.value=null)),B(c))tt(c,o,12,[s,a]);else{const p=Y(c),v=ie(c);if(p||v){const M=()=>{if(e.f){const j=p?b(c)?f[c]:a[c]:c.value;r?R(j)&&wn(j,i):R(j)?j.includes(i)||j.push(i):p?(a[c]=[i],b(c)&&(f[c]=a[c])):(c.value=[i],e.k&&(a[e.k]=c.value))}else p?(a[c]=s,b(c)&&(f[c]=s)):v&&(c.value=s,e.k&&(a[e.k]=s))};s?(M.id=-1,xe(M,t)):M()}}}Pt().requestIdleCallback;Pt().cancelIdleCallback;const $u=e=>!!e.type.__asyncLoader,Ei=e=>e.type.__isKeepAlive;function C0(e,u){Di(e,"a",u)}function A0(e,u){Di(e,"da",u)}function Di(e,u,t=re){const n=e.__wdc||(e.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(Rt(u,n,t),t){let r=t.parent;for(;r&&r.parent;)Ei(r.parent.vnode)&&E0(n,u,t,r),r=r.parent}}function E0(e,u,t,n){const r=Rt(u,e,n,!0);vi(()=>{wn(n[u],r)},t)}function Rt(e,u,t=re,n=!1){if(t){const r=t[e]||(t[e]=[]),i=u.__weh||(u.__weh=(...s)=>{Ke();const o=nt(t),c=He(u,t,e,s);return o(),Qe(),c});return n?r.unshift(i):r.push(i),i}}const Ye=e=>(u,t=re)=>{(!Qu||e==="sp")&&Rt(e,(...n)=>u(...n),t)},D0=Ye("bm"),v0=Ye("m"),w0=Ye("bu"),F0=Ye("u"),S0=Ye("bum"),vi=Ye("um"),T0=Ye("sp"),j0=Ye("rtg"),I0=Ye("rtc");function P0(e,u=re){Rt("ec",e,u)}const M0="components";function O0(e,u){return N0(M0,e,!0,u)||e}const R0=Symbol.for("v-ndc");function N0(e,u,t=!0,n=!1){const r=ge||re;if(r){const i=r.type;{const o=wo(i,!1);if(o&&(o===u||o===Ae(u)||o===It(Ae(u))))return i}const s=sr(r[e]||i[e],u)||sr(r.appContext[e],u);return!s&&n?i:s}}function sr(e,u){return e&&(e[u]||e[Ae(u)]||e[It(Ae(u))])}function wi(e,u,t,n){let r;const i=t,s=R(e);if(s||Y(e)){const o=s&&Au(e);let c=!1,l=!1;o&&(c=!Ce(e),l=iu(e),e=Mt(e)),r=new Array(e.length);for(let a=0,f=e.length;a<f;a++)r[a]=u(c?l?gt(te(e[a])):te(e[a]):e[a],a,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let o=0;o<e;o++)r[o]=u(o+1,o,void 0,i)}else if(K(e))if(e[Symbol.iterator])r=Array.from(e,(o,c)=>u(o,c,void 0,i));else{const o=Object.keys(e);r=new Array(o.length);for(let c=0,l=o.length;c<l;c++){const a=o[c];r[c]=u(e[a],a,c,i)}}else r=[];return r}const mn=e=>e?Ji(e)?Lt(e):mn(e.parent):null,Vu=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>mn(e.parent),$root:e=>mn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>Si(e),$forceUpdate:e=>e.f||(e.f=()=>{Ln(e.update)}),$nextTick:e=>e.n||(e.n=b0.bind(e.proxy)),$watch:e=>io.bind(e)}),Yt=(e,u)=>e!==$&&!e.__isScriptSetup&&z(e,u),B0={get({_:e},u){if(u==="__v_skip")return!0;const{ctx:t,setupState:n,data:r,props:i,accessCache:s,type:o,appContext:c}=e;let l;if(u[0]!=="$"){const b=s[u];if(b!==void 0)switch(b){case 1:return n[u];case 2:return r[u];case 4:return t[u];case 3:return i[u]}else{if(Yt(n,u))return s[u]=1,n[u];if(r!==$&&z(r,u))return s[u]=2,r[u];if((l=e.propsOptions[0])&&z(l,u))return s[u]=3,i[u];if(t!==$&&z(t,u))return s[u]=4,t[u];xn&&(s[u]=0)}}const a=Vu[u];let f,m;if(a)return u==="$attrs"&&ne(e.attrs,"get",""),a(e);if((f=o.__cssModules)&&(f=f[u]))return f;if(t!==$&&z(t,u))return s[u]=4,t[u];if(m=c.config.globalProperties,z(m,u))return m[u]},set({_:e},u,t){const{data:n,setupState:r,ctx:i}=e;return Yt(r,u)?(r[u]=t,!0):n!==$&&z(n,u)?(n[u]=t,!0):z(e.props,u)||u[0]==="$"&&u.slice(1)in e?!1:(i[u]=t,!0)},has({_:{data:e,setupState:u,accessCache:t,ctx:n,appContext:r,propsOptions:i}},s){let o;return!!t[s]||e!==$&&z(e,s)||Yt(u,s)||(o=i[0])&&z(o,s)||z(n,s)||z(Vu,s)||z(r.config.globalProperties,s)},defineProperty(e,u,t){return t.get!=null?e._.accessCache[u]=0:z(t,"value")&&this.set(e,u,t.value,null),Reflect.defineProperty(e,u,t)}};function or(e){return R(e)?e.reduce((u,t)=>(u[t]=null,u),{}):e}let xn=!0;function L0(e){const u=Si(e),t=e.proxy,n=e.ctx;xn=!1,u.beforeCreate&&cr(u.beforeCreate,e,"bc");const{data:r,computed:i,methods:s,watch:o,provide:c,inject:l,created:a,beforeMount:f,mounted:m,beforeUpdate:b,updated:p,activated:v,deactivated:M,beforeDestroy:j,beforeUnmount:F,destroyed:S,unmounted:y,render:T,renderTracked:N,renderTriggered:U,errorCaptured:Q,serverPrefetch:pe,expose:be,inheritAttrs:Ue,components:bu,directives:mu,filters:xu}=u;if(l&&H0(l,n,null),s)for(const Z in s){const V=s[Z];B(V)&&(n[Z]=V.bind(t))}if(r){const Z=r.call(t,t);K(Z)&&(e.data=Rn(Z))}if(xn=!0,i)for(const Z in i){const V=i[Z],cu=B(V)?V.bind(t,t):B(V.get)?V.get.bind(t,t):Le,ot=!B(V)&&B(V.set)?V.set.bind(t):Le,lu=Ki({get:cu,set:ot});Object.defineProperty(n,Z,{enumerable:!0,configurable:!0,get:()=>lu.value,set:Se=>lu.value=Se})}if(o)for(const Z in o)Fi(o[Z],n,t,Z);if(c){const Z=B(c)?c.call(t):c;Reflect.ownKeys(Z).forEach(V=>{W0(V,Z[V])})}a&&cr(a,e,"c");function ue(Z,V){R(V)?V.forEach(cu=>Z(cu.bind(t))):V&&Z(V.bind(t))}if(ue(D0,f),ue(v0,m),ue(w0,b),ue(F0,p),ue(C0,v),ue(A0,M),ue(P0,Q),ue(I0,N),ue(j0,U),ue(S0,F),ue(vi,y),ue(T0,pe),R(be))if(be.length){const Z=e.exposed||(e.exposed={});be.forEach(V=>{Object.defineProperty(Z,V,{get:()=>t[V],set:cu=>t[V]=cu})})}else e.exposed||(e.exposed={});T&&e.render===Le&&(e.render=T),Ue!=null&&(e.inheritAttrs=Ue),bu&&(e.components=bu),mu&&(e.directives=mu),pe&&Ai(e)}function H0(e,u,t=Le){R(e)&&(e=gn(e));for(const n in e){const r=e[n];let i;K(r)?"default"in r?i=pt(r.from||n,r.default,!0):i=pt(r.from||n):i=pt(r),ie(i)?Object.defineProperty(u,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:s=>i.value=s}):u[n]=i}}function cr(e,u,t){He(R(e)?e.map(n=>n.bind(u.proxy)):e.bind(u.proxy),u,t)}function Fi(e,u,t,n){let r=n.includes(".")?qi(t,n):()=>t[n];if(Y(e)){const i=u[e];B(i)&&bt(r,i)}else if(B(e))bt(r,e.bind(t));else if(K(e))if(R(e))e.forEach(i=>Fi(i,u,t,n));else{const i=B(e.handler)?e.handler.bind(t):u[e.handler];B(i)&&bt(r,i,e)}}function Si(e){const u=e.type,{mixins:t,extends:n}=u,{mixins:r,optionsCache:i,config:{optionMergeStrategies:s}}=e.appContext,o=i.get(u);let c;return o?c=o:!r.length&&!t&&!n?c=u:(c={},r.length&&r.forEach(l=>Ct(c,l,s,!0)),Ct(c,u,s)),K(u)&&i.set(u,c),c}function Ct(e,u,t,n=!1){const{mixins:r,extends:i}=u;i&&Ct(e,i,t,!0),r&&r.forEach(s=>Ct(e,s,t,!0));for(const s in u)if(!(n&&s==="expose")){const o=z0[s]||t&&t[s];e[s]=o?o(e[s],u[s]):u[s]}return e}const z0={data:lr,props:ar,emits:ar,methods:Lu,computed:Lu,beforeCreate:se,created:se,beforeMount:se,mounted:se,beforeUpdate:se,updated:se,beforeDestroy:se,beforeUnmount:se,destroyed:se,unmounted:se,activated:se,deactivated:se,errorCaptured:se,serverPrefetch:se,components:Lu,directives:Lu,watch:U0,provide:lr,inject:q0};function lr(e,u){return u?e?function(){return ce(B(e)?e.call(this,this):e,B(u)?u.call(this,this):u)}:u:e}function q0(e,u){return Lu(gn(e),gn(u))}function gn(e){if(R(e)){const u={};for(let t=0;t<e.length;t++)u[e[t]]=e[t];return u}return e}function se(e,u){return e?[...new Set([].concat(e,u))]:u}function Lu(e,u){return e?ce(Object.create(null),e,u):u}function ar(e,u){return e?R(e)&&R(u)?[...new Set([...e,...u])]:ce(Object.create(null),or(e),or(u??{})):u}function U0(e,u){if(!e)return u;if(!u)return e;const t=ce(Object.create(null),e);for(const n in u)t[n]=se(e[n],u[n]);return t}function Ti(){return{app:null,config:{isNativeTag:ws,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $0=0;function V0(e,u){return function(n,r=null){B(n)||(n=ce({},n)),r!=null&&!K(r)&&(r=null);const i=Ti(),s=new WeakSet,o=[];let c=!1;const l=i.app={_uid:$0++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:So,get config(){return i.config},set config(a){},use(a,...f){return s.has(a)||(a&&B(a.install)?(s.add(a),a.install(l,...f)):B(a)&&(s.add(a),a(l,...f))),l},mixin(a){return i.mixins.includes(a)||i.mixins.push(a),l},component(a,f){return f?(i.components[a]=f,l):i.components[a]},directive(a,f){return f?(i.directives[a]=f,l):i.directives[a]},mount(a,f,m){if(!c){const b=l._ceVNode||we(n,r);return b.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),e(b,a,m),c=!0,l._container=a,a.__vue_app__=l,Lt(b.component)}},onUnmount(a){o.push(a)},unmount(){c&&(He(o,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(a,f){return i.provides[a]=f,l},runWithContext(a){const f=Du;Du=l;try{return a()}finally{Du=f}}};return l}}let Du=null;function W0(e,u){if(re){let t=re.provides;const n=re.parent&&re.parent.provides;n===t&&(t=re.provides=Object.create(n)),t[e]=u}}function pt(e,u,t=!1){const n=re||ge;if(n||Du){let r=Du?Du._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return t&&B(u)?u.call(n&&n.proxy):u}}const ji={},Ii=()=>Object.create(ji),Pi=e=>Object.getPrototypeOf(e)===ji;function G0(e,u,t,n=!1){const r={},i=Ii();e.propsDefaults=Object.create(null),Mi(e,u,r,i);for(const s in e.propsOptions[0])s in r||(r[s]=void 0);t?e.props=n?r:i0(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function J0(e,u,t,n){const{props:r,attrs:i,vnode:{patchFlag:s}}=e,o=H(r),[c]=e.propsOptions;let l=!1;if((n||s>0)&&!(s&16)){if(s&8){const a=e.vnode.dynamicProps;for(let f=0;f<a.length;f++){let m=a[f];if(Nt(e.emitsOptions,m))continue;const b=u[m];if(c)if(z(i,m))b!==i[m]&&(i[m]=b,l=!0);else{const p=Ae(m);r[p]=_n(c,o,p,b,e,!1)}else b!==i[m]&&(i[m]=b,l=!0)}}}else{Mi(e,u,r,i)&&(l=!0);let a;for(const f in o)(!u||!z(u,f)&&((a=pu(f))===f||!z(u,a)))&&(c?t&&(t[f]!==void 0||t[a]!==void 0)&&(r[f]=_n(c,o,f,void 0,e,!0)):delete r[f]);if(i!==o)for(const f in i)(!u||!z(u,f))&&(delete i[f],l=!0)}l&&Ge(e.attrs,"set","")}function Mi(e,u,t,n){const[r,i]=e.propsOptions;let s=!1,o;if(u)for(let c in u){if(Hu(c))continue;const l=u[c];let a;r&&z(r,a=Ae(c))?!i||!i.includes(a)?t[a]=l:(o||(o={}))[a]=l:Nt(e.emitsOptions,c)||(!(c in n)||l!==n[c])&&(n[c]=l,s=!0)}if(i){const c=H(t),l=o||$;for(let a=0;a<i.length;a++){const f=i[a];t[f]=_n(r,c,f,l[f],e,!z(l,f))}}return s}function _n(e,u,t,n,r,i){const s=e[t];if(s!=null){const o=z(s,"default");if(o&&n===void 0){const c=s.default;if(s.type!==Function&&!s.skipFactory&&B(c)){const{propsDefaults:l}=r;if(t in l)n=l[t];else{const a=nt(r);n=l[t]=c.call(null,u),a()}}else n=c;r.ce&&r.ce._setProp(t,n)}s[0]&&(i&&!o?n=!1:s[1]&&(n===""||n===pu(t))&&(n=!0))}return n}const Z0=new WeakMap;function Oi(e,u,t=!1){const n=t?Z0:u.propsCache,r=n.get(e);if(r)return r;const i=e.props,s={},o=[];let c=!1;if(!B(e)){const a=f=>{c=!0;const[m,b]=Oi(f,u,!0);ce(s,m),b&&o.push(...b)};!t&&u.mixins.length&&u.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}if(!i&&!c)return K(e)&&n.set(e,ku),ku;if(R(i))for(let a=0;a<i.length;a++){const f=Ae(i[a]);fr(f)&&(s[f]=$)}else if(i)for(const a in i){const f=Ae(a);if(fr(f)){const m=i[a],b=s[f]=R(m)||B(m)?{type:m}:ce({},m),p=b.type;let v=!1,M=!0;if(R(p))for(let j=0;j<p.length;++j){const F=p[j],S=B(F)&&F.name;if(S==="Boolean"){v=!0;break}else S==="String"&&(M=!1)}else v=B(p)&&p.name==="Boolean";b[0]=v,b[1]=M,(v||z(b,"default"))&&o.push(f)}}const l=[s,o];return K(e)&&n.set(e,l),l}function fr(e){return e[0]!=="$"&&!Hu(e)}const zn=e=>e[0]==="_"||e==="$stable",qn=e=>R(e)?e.map(Oe):[Oe(e)],K0=(e,u,t)=>{if(u._n)return u;const n=g0((...r)=>qn(u(...r)),t);return n._c=!1,n},Ri=(e,u,t)=>{const n=e._ctx;for(const r in e){if(zn(r))continue;const i=e[r];if(B(i))u[r]=K0(r,i,n);else if(i!=null){const s=qn(i);u[r]=()=>s}}},Ni=(e,u)=>{const t=qn(u);e.slots.default=()=>t},Bi=(e,u,t)=>{for(const n in u)(t||!zn(n))&&(e[n]=u[n])},Q0=(e,u,t)=>{const n=e.slots=Ii();if(e.vnode.shapeFlag&32){const r=u.__;r&&fn(n,"__",r,!0);const i=u._;i?(Bi(n,u,t),t&&fn(n,"_",i,!0)):Ri(u,n)}else u&&Ni(e,u)},Y0=(e,u,t)=>{const{vnode:n,slots:r}=e;let i=!0,s=$;if(n.shapeFlag&32){const o=u._;o?t&&o===1?i=!1:Bi(r,u,t):(i=!u.$stable,Ri(u,r)),s=u}else u&&(Ni(e,u),s={default:1});if(i)for(const o in r)!zn(o)&&s[o]==null&&delete r[o]},xe=ho;function X0(e){return eo(e)}function eo(e,u){const t=Pt();t.__VUE__=!0;const{insert:n,remove:r,patchProp:i,createElement:s,createText:o,createComment:c,setText:l,setElementText:a,parentNode:f,nextSibling:m,setScopeId:b=Le,insertStaticContent:p}=e,v=(d,h,x,k=null,g=null,_=null,D=void 0,E=null,A=!!h.dynamicChildren)=>{if(d===h)return;d&&!Ru(d,h)&&(k=ct(d),Se(d,g,_,!0),d=null),h.patchFlag===-2&&(A=!1,h.dynamicChildren=null);const{type:C,ref:P,shapeFlag:w}=h;switch(C){case Bt:M(d,h,x,k);break;case wu:j(d,h,x,k);break;case en:d==null&&F(h,x,k,D);break;case De:bu(d,h,x,k,g,_,D,E,A);break;default:w&1?T(d,h,x,k,g,_,D,E,A):w&6?mu(d,h,x,k,g,_,D,E,A):(w&64||w&128)&&C.process(d,h,x,k,g,_,D,E,A,Pu)}P!=null&&g?Uu(P,d&&d.ref,_,h||d,!h):P==null&&d&&d.ref!=null&&Uu(d.ref,null,_,d,!0)},M=(d,h,x,k)=>{if(d==null)n(h.el=o(h.children),x,k);else{const g=h.el=d.el;h.children!==d.children&&l(g,h.children)}},j=(d,h,x,k)=>{d==null?n(h.el=c(h.children||""),x,k):h.el=d.el},F=(d,h,x,k)=>{[d.el,d.anchor]=p(d.children,h,x,k,d.el,d.anchor)},S=({el:d,anchor:h},x,k)=>{let g;for(;d&&d!==h;)g=m(d),n(d,x,k),d=g;n(h,x,k)},y=({el:d,anchor:h})=>{let x;for(;d&&d!==h;)x=m(d),r(d),d=x;r(h)},T=(d,h,x,k,g,_,D,E,A)=>{h.type==="svg"?D="svg":h.type==="math"&&(D="mathml"),d==null?N(h,x,k,g,_,D,E,A):pe(d,h,g,_,D,E,A)},N=(d,h,x,k,g,_,D,E)=>{let A,C;const{props:P,shapeFlag:w,transition:I,dirs:O}=d;if(A=d.el=s(d.type,_,P&&P.is,P),w&8?a(A,d.children):w&16&&Q(d.children,A,null,k,g,Xt(d,_),D,E),O&&au(d,null,k,"created"),U(A,d,d.scopeId,D,k),P){for(const W in P)W!=="value"&&!Hu(W)&&i(A,W,null,P[W],_,k);"value"in P&&i(A,"value",null,P.value,_),(C=P.onVnodeBeforeMount)&&Pe(C,k,d)}O&&au(d,null,k,"beforeMount");const L=uo(g,I);L&&I.beforeEnter(A),n(A,h,x),((C=P&&P.onVnodeMounted)||L||O)&&xe(()=>{C&&Pe(C,k,d),L&&I.enter(A),O&&au(d,null,k,"mounted")},g)},U=(d,h,x,k,g)=>{if(x&&b(d,x),k)for(let _=0;_<k.length;_++)b(d,k[_]);if(g){let _=g.subTree;if(h===_||$i(_.type)&&(_.ssContent===h||_.ssFallback===h)){const D=g.vnode;U(d,D,D.scopeId,D.slotScopeIds,g.parent)}}},Q=(d,h,x,k,g,_,D,E,A=0)=>{for(let C=A;C<d.length;C++){const P=d[C]=E?eu(d[C]):Oe(d[C]);v(null,P,h,x,k,g,_,D,E)}},pe=(d,h,x,k,g,_,D)=>{const E=h.el=d.el;let{patchFlag:A,dynamicChildren:C,dirs:P}=h;A|=d.patchFlag&16;const w=d.props||$,I=h.props||$;let O;if(x&&fu(x,!1),(O=I.onVnodeBeforeUpdate)&&Pe(O,x,h,d),P&&au(h,d,x,"beforeUpdate"),x&&fu(x,!0),(w.innerHTML&&I.innerHTML==null||w.textContent&&I.textContent==null)&&a(E,""),C?be(d.dynamicChildren,C,E,x,k,Xt(h,g),_):D||V(d,h,E,null,x,k,Xt(h,g),_,!1),A>0){if(A&16)Ue(E,w,I,x,g);else if(A&2&&w.class!==I.class&&i(E,"class",null,I.class,g),A&4&&i(E,"style",w.style,I.style,g),A&8){const L=h.dynamicProps;for(let W=0;W<L.length;W++){const q=L[W],le=w[q],ae=I[q];(ae!==le||q==="value")&&i(E,q,le,ae,g,x)}}A&1&&d.children!==h.children&&a(E,h.children)}else!D&&C==null&&Ue(E,w,I,x,g);((O=I.onVnodeUpdated)||P)&&xe(()=>{O&&Pe(O,x,h,d),P&&au(h,d,x,"updated")},k)},be=(d,h,x,k,g,_,D)=>{for(let E=0;E<h.length;E++){const A=d[E],C=h[E],P=A.el&&(A.type===De||!Ru(A,C)||A.shapeFlag&198)?f(A.el):x;v(A,C,P,null,k,g,_,D,!0)}},Ue=(d,h,x,k,g)=>{if(h!==x){if(h!==$)for(const _ in h)!Hu(_)&&!(_ in x)&&i(d,_,h[_],null,g,k);for(const _ in x){if(Hu(_))continue;const D=x[_],E=h[_];D!==E&&_!=="value"&&i(d,_,E,D,g,k)}"value"in x&&i(d,"value",h.value,x.value,g)}},bu=(d,h,x,k,g,_,D,E,A)=>{const C=h.el=d?d.el:o(""),P=h.anchor=d?d.anchor:o("");let{patchFlag:w,dynamicChildren:I,slotScopeIds:O}=h;O&&(E=E?E.concat(O):O),d==null?(n(C,x,k),n(P,x,k),Q(h.children||[],x,P,g,_,D,E,A)):w>0&&w&64&&I&&d.dynamicChildren?(be(d.dynamicChildren,I,x,g,_,D,E),(h.key!=null||g&&h===g.subTree)&&Li(d,h,!0)):V(d,h,x,P,g,_,D,E,A)},mu=(d,h,x,k,g,_,D,E,A)=>{h.slotScopeIds=E,d==null?h.shapeFlag&512?g.ctx.activate(h,x,k,D,A):xu(h,x,k,g,_,D,A):$e(d,h,A)},xu=(d,h,x,k,g,_,D)=>{const E=d.component=Co(d,k,g);if(Ei(d)&&(E.ctx.renderer=Pu),Ao(E,!1,D),E.asyncDep){if(g&&g.registerDep(E,ue,D),!d.el){const A=E.subTree=we(wu);j(null,A,h,x)}}else ue(E,d,h,x,g,_,D)},$e=(d,h,x)=>{const k=h.component=d.component;if(ao(d,h,x))if(k.asyncDep&&!k.asyncResolved){Z(k,h,x);return}else k.next=h,k.update();else h.el=d.el,k.vnode=h},ue=(d,h,x,k,g,_,D)=>{const E=()=>{if(d.isMounted){let{next:w,bu:I,u:O,parent:L,vnode:W}=d;{const je=Hi(d);if(je){w&&(w.el=W.el,Z(d,w,D)),je.asyncDep.then(()=>{d.isUnmounted||E()});return}}let q=w,le;fu(d,!1),w?(w.el=W.el,Z(d,w,D)):w=W,I&&Gt(I),(le=w.props&&w.props.onVnodeBeforeUpdate)&&Pe(le,L,w,W),fu(d,!0);const ae=hr(d),Te=d.subTree;d.subTree=ae,v(Te,ae,f(Te.el),ct(Te),d,g,_),w.el=ae.el,q===null&&fo(d,ae.el),O&&xe(O,g),(le=w.props&&w.props.onVnodeUpdated)&&xe(()=>Pe(le,L,w,W),g)}else{let w;const{el:I,props:O}=h,{bm:L,m:W,parent:q,root:le,type:ae}=d,Te=$u(h);fu(d,!1),L&&Gt(L),!Te&&(w=O&&O.onVnodeBeforeMount)&&Pe(w,q,h),fu(d,!0);{le.ce&&le.ce._def.shadowRoot!==!1&&le.ce._injectChildStyle(ae);const je=d.subTree=hr(d);v(null,je,x,k,d,g,_),h.el=je.el}if(W&&xe(W,g),!Te&&(w=O&&O.onVnodeMounted)){const je=h;xe(()=>Pe(w,q,je),g)}(h.shapeFlag&256||q&&$u(q.vnode)&&q.vnode.shapeFlag&256)&&d.a&&xe(d.a,g),d.isMounted=!0,h=x=k=null}};d.scope.on();const A=d.effect=new ui(E);d.scope.off();const C=d.update=A.run.bind(A),P=d.job=A.runIfDirty.bind(A);P.i=d,P.id=d.uid,A.scheduler=()=>Ln(P),fu(d,!0),C()},Z=(d,h,x)=>{h.component=d;const k=d.vnode.props;d.vnode=h,d.next=null,J0(d,h.props,k,x),Y0(d,h.children,x),Ke(),ir(d),Qe()},V=(d,h,x,k,g,_,D,E,A=!1)=>{const C=d&&d.children,P=d?d.shapeFlag:0,w=h.children,{patchFlag:I,shapeFlag:O}=h;if(I>0){if(I&128){ot(C,w,x,k,g,_,D,E,A);return}else if(I&256){cu(C,w,x,k,g,_,D,E,A);return}}O&8?(P&16&&Iu(C,g,_),w!==C&&a(x,w)):P&16?O&16?ot(C,w,x,k,g,_,D,E,A):Iu(C,g,_,!0):(P&8&&a(x,""),O&16&&Q(w,x,k,g,_,D,E,A))},cu=(d,h,x,k,g,_,D,E,A)=>{d=d||ku,h=h||ku;const C=d.length,P=h.length,w=Math.min(C,P);let I;for(I=0;I<w;I++){const O=h[I]=A?eu(h[I]):Oe(h[I]);v(d[I],O,x,null,g,_,D,E,A)}C>P?Iu(d,g,_,!0,!1,w):Q(h,x,k,g,_,D,E,A,w)},ot=(d,h,x,k,g,_,D,E,A)=>{let C=0;const P=h.length;let w=d.length-1,I=P-1;for(;C<=w&&C<=I;){const O=d[C],L=h[C]=A?eu(h[C]):Oe(h[C]);if(Ru(O,L))v(O,L,x,null,g,_,D,E,A);else break;C++}for(;C<=w&&C<=I;){const O=d[w],L=h[I]=A?eu(h[I]):Oe(h[I]);if(Ru(O,L))v(O,L,x,null,g,_,D,E,A);else break;w--,I--}if(C>w){if(C<=I){const O=I+1,L=O<P?h[O].el:k;for(;C<=I;)v(null,h[C]=A?eu(h[C]):Oe(h[C]),x,L,g,_,D,E,A),C++}}else if(C>I)for(;C<=w;)Se(d[C],g,_,!0),C++;else{const O=C,L=C,W=new Map;for(C=L;C<=I;C++){const me=h[C]=A?eu(h[C]):Oe(h[C]);me.key!=null&&W.set(me.key,C)}let q,le=0;const ae=I-L+1;let Te=!1,je=0;const Mu=new Array(ae);for(C=0;C<ae;C++)Mu[C]=0;for(C=O;C<=w;C++){const me=d[C];if(le>=ae){Se(me,g,_,!0);continue}let Ie;if(me.key!=null)Ie=W.get(me.key);else for(q=L;q<=I;q++)if(Mu[q-L]===0&&Ru(me,h[q])){Ie=q;break}Ie===void 0?Se(me,g,_,!0):(Mu[Ie-L]=C+1,Ie>=je?je=Ie:Te=!0,v(me,h[Ie],x,null,g,_,D,E,A),le++)}const er=Te?to(Mu):ku;for(q=er.length-1,C=ae-1;C>=0;C--){const me=L+C,Ie=h[me],ur=me+1<P?h[me+1].el:k;Mu[C]===0?v(null,Ie,x,ur,g,_,D,E,A):Te&&(q<0||C!==er[q]?lu(Ie,x,ur,2):q--)}}},lu=(d,h,x,k,g=null)=>{const{el:_,type:D,transition:E,children:A,shapeFlag:C}=d;if(C&6){lu(d.component.subTree,h,x,k);return}if(C&128){d.suspense.move(h,x,k);return}if(C&64){D.move(d,h,x,Pu);return}if(D===De){n(_,h,x);for(let w=0;w<A.length;w++)lu(A[w],h,x,k);n(d.anchor,h,x);return}if(D===en){S(d,h,x);return}if(k!==2&&C&1&&E)if(k===0)E.beforeEnter(_),n(_,h,x),xe(()=>E.enter(_),g);else{const{leave:w,delayLeave:I,afterLeave:O}=E,L=()=>{d.ctx.isUnmounted?r(_):n(_,h,x)},W=()=>{w(_,()=>{L(),O&&O()})};I?I(_,L,W):W()}else n(_,h,x)},Se=(d,h,x,k=!1,g=!1)=>{const{type:_,props:D,ref:E,children:A,dynamicChildren:C,shapeFlag:P,patchFlag:w,dirs:I,cacheIndex:O}=d;if(w===-2&&(g=!1),E!=null&&(Ke(),Uu(E,null,x,d,!0),Qe()),O!=null&&(h.renderCache[O]=void 0),P&256){h.ctx.deactivate(d);return}const L=P&1&&I,W=!$u(d);let q;if(W&&(q=D&&D.onVnodeBeforeUnmount)&&Pe(q,h,d),P&6)vs(d.component,x,k);else{if(P&128){d.suspense.unmount(x,k);return}L&&au(d,null,h,"beforeUnmount"),P&64?d.type.remove(d,h,x,Pu,k):C&&!C.hasOnce&&(_!==De||w>0&&w&64)?Iu(C,h,x,!1,!0):(_===De&&w&384||!g&&P&16)&&Iu(A,h,x),k&&Yn(d)}(W&&(q=D&&D.onVnodeUnmounted)||L)&&xe(()=>{q&&Pe(q,h,d),L&&au(d,null,h,"unmounted")},x)},Yn=d=>{const{type:h,el:x,anchor:k,transition:g}=d;if(h===De){Ds(x,k);return}if(h===en){y(d);return}const _=()=>{r(x),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(d.shapeFlag&1&&g&&!g.persisted){const{leave:D,delayLeave:E}=g,A=()=>D(x,_);E?E(d.el,_,A):A()}else _()},Ds=(d,h)=>{let x;for(;d!==h;)x=m(d),r(d),d=x;r(h)},vs=(d,h,x)=>{const{bum:k,scope:g,job:_,subTree:D,um:E,m:A,a:C,parent:P,slots:{__:w}}=d;dr(A),dr(C),k&&Gt(k),P&&R(w)&&w.forEach(I=>{P.renderCache[I]=void 0}),g.stop(),_&&(_.flags|=8,Se(D,d,h,x)),E&&xe(E,h),xe(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Iu=(d,h,x,k=!1,g=!1,_=0)=>{for(let D=_;D<d.length;D++)Se(d[D],h,x,k,g)},ct=d=>{if(d.shapeFlag&6)return ct(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=m(d.anchor||d.el),x=h&&h[y0];return x?m(x):h};let Vt=!1;const Xn=(d,h,x)=>{d==null?h._vnode&&Se(h._vnode,null,null,!0):v(h._vnode||null,d,h,null,null,null,x),h._vnode=d,Vt||(Vt=!0,ir(),yi(),Vt=!1)},Pu={p:v,um:Se,m:lu,r:Yn,mt:xu,mc:Q,pc:V,pbc:be,n:ct,o:e};return{render:Xn,hydrate:void 0,createApp:V0(Xn)}}function Xt({type:e,props:u},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&u&&u.encoding&&u.encoding.includes("html")?void 0:t}function fu({effect:e,job:u},t){t?(e.flags|=32,u.flags|=4):(e.flags&=-33,u.flags&=-5)}function uo(e,u){return(!e||e&&!e.pendingBranch)&&u&&!u.persisted}function Li(e,u,t=!1){const n=e.children,r=u.children;if(R(n)&&R(r))for(let i=0;i<n.length;i++){const s=n[i];let o=r[i];o.shapeFlag&1&&!o.dynamicChildren&&((o.patchFlag<=0||o.patchFlag===32)&&(o=r[i]=eu(r[i]),o.el=s.el),!t&&o.patchFlag!==-2&&Li(s,o)),o.type===Bt&&(o.el=s.el),o.type===wu&&!o.el&&(o.el=s.el)}}function to(e){const u=e.slice(),t=[0];let n,r,i,s,o;const c=e.length;for(n=0;n<c;n++){const l=e[n];if(l!==0){if(r=t[t.length-1],e[r]<l){u[n]=r,t.push(n);continue}for(i=0,s=t.length-1;i<s;)o=i+s>>1,e[t[o]]<l?i=o+1:s=o;l<e[t[i]]&&(i>0&&(u[n]=t[i-1]),t[i]=n)}}for(i=t.length,s=t[i-1];i-- >0;)t[i]=s,s=u[s];return t}function Hi(e){const u=e.subTree.component;if(u)return u.asyncDep&&!u.asyncResolved?u:Hi(u)}function dr(e){if(e)for(let u=0;u<e.length;u++)e[u].flags|=8}const no=Symbol.for("v-scx"),ro=()=>pt(no);function bt(e,u,t){return zi(e,u,t)}function zi(e,u,t=$){const{immediate:n,deep:r,flush:i,once:s}=t,o=ce({},t),c=u&&n||!u&&i!=="post";let l;if(Qu){if(i==="sync"){const b=ro();l=b.__watcherHandles||(b.__watcherHandles=[])}else if(!c){const b=()=>{};return b.stop=Le,b.resume=Le,b.pause=Le,b}}const a=re;o.call=(b,p,v)=>He(b,a,p,v);let f=!1;i==="post"?o.scheduler=b=>{xe(b,a&&a.suspense)}:i!=="sync"&&(f=!0,o.scheduler=(b,p)=>{p?b():Ln(b)}),o.augmentJob=b=>{u&&(b.flags|=4),f&&(b.flags|=2,a&&(b.id=a.uid,b.i=a))};const m=h0(e,u,o);return Qu&&(l?l.push(m):c&&m()),m}function io(e,u,t){const n=this.proxy,r=Y(e)?e.includes(".")?qi(n,e):()=>n[e]:e.bind(n,n);let i;B(u)?i=u:(i=u.handler,t=u);const s=nt(this),o=zi(r,i.bind(n),t);return s(),o}function qi(e,u){const t=u.split(".");return()=>{let n=e;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}const so=(e,u)=>u==="modelValue"||u==="model-value"?e.modelModifiers:e[`${u}Modifiers`]||e[`${Ae(u)}Modifiers`]||e[`${pu(u)}Modifiers`];function oo(e,u,...t){if(e.isUnmounted)return;const n=e.vnode.props||$;let r=t;const i=u.startsWith("update:"),s=i&&so(n,u.slice(7));s&&(s.trim&&(r=t.map(a=>Y(a)?a.trim():a)),s.number&&(r=t.map(Is)));let o,c=n[o=Wt(u)]||n[o=Wt(Ae(u))];!c&&i&&(c=n[o=Wt(pu(u))]),c&&He(c,e,6,r);const l=n[o+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[o])return;e.emitted[o]=!0,He(l,e,6,r)}}function Ui(e,u,t=!1){const n=u.emitsCache,r=n.get(e);if(r!==void 0)return r;const i=e.emits;let s={},o=!1;if(!B(e)){const c=l=>{const a=Ui(l,u,!0);a&&(o=!0,ce(s,a))};!t&&u.mixins.length&&u.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!o?(K(e)&&n.set(e,null),null):(R(i)?i.forEach(c=>s[c]=null):ce(s,i),K(e)&&n.set(e,s),s)}function Nt(e,u){return!e||!St(u)?!1:(u=u.slice(2).replace(/Once$/,""),z(e,u[0].toLowerCase()+u.slice(1))||z(e,pu(u))||z(e,u))}function hr(e){const{type:u,vnode:t,proxy:n,withProxy:r,propsOptions:[i],slots:s,attrs:o,emit:c,render:l,renderCache:a,props:f,data:m,setupState:b,ctx:p,inheritAttrs:v}=e,M=kt(e);let j,F;try{if(t.shapeFlag&4){const y=r||n,T=y;j=Oe(l.call(T,y,a,f,b,m,p)),F=o}else{const y=u;j=Oe(y.length>1?y(f,{attrs:o,slots:s,emit:c}):y(f,null)),F=u.props?o:co(o)}}catch(y){Wu.length=0,Ot(y,e,1),j=we(wu)}let S=j;if(F&&v!==!1){const y=Object.keys(F),{shapeFlag:T}=S;y.length&&T&7&&(i&&y.some(vn)&&(F=lo(F,i)),S=Fu(S,F,!1,!0))}return t.dirs&&(S=Fu(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&Hn(S,t.transition),j=S,kt(M),j}const co=e=>{let u;for(const t in e)(t==="class"||t==="style"||St(t))&&((u||(u={}))[t]=e[t]);return u},lo=(e,u)=>{const t={};for(const n in e)(!vn(n)||!(n.slice(9)in u))&&(t[n]=e[n]);return t};function ao(e,u,t){const{props:n,children:r,component:i}=e,{props:s,children:o,patchFlag:c}=u,l=i.emitsOptions;if(u.dirs||u.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return n?pr(n,s,l):!!s;if(c&8){const a=u.dynamicProps;for(let f=0;f<a.length;f++){const m=a[f];if(s[m]!==n[m]&&!Nt(l,m))return!0}}}else return(r||o)&&(!o||!o.$stable)?!0:n===s?!1:n?s?pr(n,s,l):!0:!!s;return!1}function pr(e,u,t){const n=Object.keys(u);if(n.length!==Object.keys(e).length)return!0;for(let r=0;r<n.length;r++){const i=n[r];if(u[i]!==e[i]&&!Nt(t,i))return!0}return!1}function fo({vnode:e,parent:u},t){for(;u;){const n=u.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=u.vnode).el=t,u=u.parent;else break}}const $i=e=>e.__isSuspense;function ho(e,u){u&&u.pendingBranch?R(e)?u.effects.push(...e):u.effects.push(e):x0(e)}const De=Symbol.for("v-fgt"),Bt=Symbol.for("v-txt"),wu=Symbol.for("v-cmt"),en=Symbol.for("v-stc"),Wu=[];let _e=null;function Re(e=!1){Wu.push(_e=e?null:[])}function po(){Wu.pop(),_e=Wu[Wu.length-1]||null}let Ku=1;function br(e,u=!1){Ku+=e,e<0&&_e&&u&&(_e.hasOnce=!0)}function Vi(e){return e.dynamicChildren=Ku>0?_e||ku:null,po(),Ku>0&&_e&&_e.push(e),e}function Ze(e,u,t,n,r,i){return Vi(At(e,u,t,n,r,i,!0))}function bo(e,u,t,n,r){return Vi(we(e,u,t,n,r,!0))}function Wi(e){return e?e.__v_isVNode===!0:!1}function Ru(e,u){return e.type===u.type&&e.key===u.key}const Gi=({key:e})=>e??null,mt=({ref:e,ref_key:u,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Y(e)||ie(e)||B(e)?{i:ge,r:e,k:u,f:!!t}:e:null);function At(e,u=null,t=null,n=0,r=null,i=e===De?0:1,s=!1,o=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:u,key:u&&Gi(u),ref:u&&mt(u),scopeId:Ci,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:ge};return o?(Un(c,t),i&128&&e.normalize(c)):t&&(c.shapeFlag|=Y(t)?8:16),Ku>0&&!s&&_e&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&_e.push(c),c}const we=mo;function mo(e,u=null,t=null,n=0,r=null,i=!1){if((!e||e===R0)&&(e=wu),Wi(e)){const o=Fu(e,u,!0);return t&&Un(o,t),Ku>0&&!i&&_e&&(o.shapeFlag&6?_e[_e.indexOf(e)]=o:_e.push(o)),o.patchFlag=-2,o}if(Fo(e)&&(e=e.__vccOpts),u){u=xo(u);let{class:o,style:c}=u;o&&!Y(o)&&(u.class=ke(o)),K(c)&&(Bn(c)&&!R(c)&&(c=ce({},c)),u.style=Sn(c))}const s=Y(e)?1:$i(e)?128:k0(e)?64:K(e)?4:B(e)?2:0;return At(e,u,t,n,r,s,i,!0)}function xo(e){return e?Bn(e)||Pi(e)?ce({},e):e:null}function Fu(e,u,t=!1,n=!1){const{props:r,ref:i,patchFlag:s,children:o,transition:c}=e,l=u?_o(r||{},u):r,a={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Gi(l),ref:u&&u.ref?t&&i?R(i)?i.concat(mt(u)):[i,mt(u)]:mt(u):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:u&&e.type!==De?s===-1?16:s|16:s,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&Fu(e.ssContent),ssFallback:e.ssFallback&&Fu(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&n&&Hn(a,c.clone(a)),a}function go(e=" ",u=0){return we(Bt,null,e,u)}function Oe(e){return e==null||typeof e=="boolean"?we(wu):R(e)?we(De,null,e.slice()):Wi(e)?eu(e):we(Bt,null,String(e))}function eu(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:Fu(e)}function Un(e,u){let t=0;const{shapeFlag:n}=e;if(u==null)u=null;else if(R(u))t=16;else if(typeof u=="object")if(n&65){const r=u.default;r&&(r._c&&(r._d=!1),Un(e,r()),r._c&&(r._d=!0));return}else{t=32;const r=u._;!r&&!Pi(u)?u._ctx=ge:r===3&&ge&&(ge.slots._===1?u._=1:(u._=2,e.patchFlag|=1024))}else B(u)?(u={default:u,_ctx:ge},t=32):(u=String(u),n&64?(t=16,u=[go(u)]):t=8);e.children=u,e.shapeFlag|=t}function _o(...e){const u={};for(let t=0;t<e.length;t++){const n=e[t];for(const r in n)if(r==="class")u.class!==n.class&&(u.class=ke([u.class,n.class]));else if(r==="style")u.style=Sn([u.style,n.style]);else if(St(r)){const i=u[r],s=n[r];s&&i!==s&&!(R(i)&&i.includes(s))&&(u[r]=i?[].concat(i,s):s)}else r!==""&&(u[r]=n[r])}return u}function Pe(e,u,t,n=null){He(e,u,7,[t,n])}const yo=Ti();let ko=0;function Co(e,u,t){const n=e.type,r=(u?u.appContext:e.appContext)||yo,i={uid:ko++,vnode:e,type:n,parent:u,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ls(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:u?u.provides:Object.create(r.provides),ids:u?u.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Oi(n,r),emitsOptions:Ui(n,r),emit:null,emitted:null,propsDefaults:$,inheritAttrs:n.inheritAttrs,ctx:$,data:$,props:$,attrs:$,slots:$,refs:$,setupState:$,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=u?u.root:i,i.emit=oo.bind(null,i),e.ce&&e.ce(i),i}let re=null,Et,yn;{const e=Pt(),u=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),i=>{r.length>1?r.forEach(s=>s(i)):r[0](i)}};Et=u("__VUE_INSTANCE_SETTERS__",t=>re=t),yn=u("__VUE_SSR_SETTERS__",t=>Qu=t)}const nt=e=>{const u=re;return Et(e),e.scope.on(),()=>{e.scope.off(),Et(u)}},mr=()=>{re&&re.scope.off(),Et(null)};function Ji(e){return e.vnode.shapeFlag&4}let Qu=!1;function Ao(e,u=!1,t=!1){u&&yn(u);const{props:n,children:r}=e.vnode,i=Ji(e);G0(e,n,i,u),Q0(e,r,t||u);const s=i?Eo(e,u):void 0;return u&&yn(!1),s}function Eo(e,u){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,B0);const{setup:n}=t;if(n){Ke();const r=e.setupContext=n.length>1?vo(e):null,i=nt(e),s=tt(n,e,0,[e.props,r]),o=Zr(s);if(Qe(),i(),(o||e.sp)&&!$u(e)&&Ai(e),o){if(s.then(mr,mr),u)return s.then(c=>{xr(e,c)}).catch(c=>{Ot(c,e,0)});e.asyncDep=s}else xr(e,s)}else Zi(e)}function xr(e,u,t){B(u)?e.type.__ssrInlineRender?e.ssrRender=u:e.render=u:K(u)&&(e.setupState=xi(u)),Zi(e)}function Zi(e,u,t){const n=e.type;e.render||(e.render=n.render||Le);{const r=nt(e);Ke();try{L0(e)}finally{Qe(),r()}}}const Do={get(e,u){return ne(e,"get",""),e[u]}};function vo(e){const u=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,Do),slots:e.slots,emit:e.emit,expose:u}}function Lt(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(xi(s0(e.exposed)),{get(u,t){if(t in u)return u[t];if(t in Vu)return Vu[t](e)},has(u,t){return t in u||t in Vu}})):e.proxy}function wo(e,u=!0){return B(e)?e.displayName||e.name:e.name||u&&e.__name}function Fo(e){return B(e)&&"__vccOpts"in e}const Ki=(e,u)=>f0(e,u,Qu),So="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let kn;const gr=typeof window<"u"&&window.trustedTypes;if(gr)try{kn=gr.createPolicy("vue",{createHTML:e=>e})}catch{}const Qi=kn?e=>kn.createHTML(e):e=>e,To="http://www.w3.org/2000/svg",jo="http://www.w3.org/1998/Math/MathML",We=typeof document<"u"?document:null,_r=We&&We.createElement("template"),Io={insert:(e,u,t)=>{u.insertBefore(e,t||null)},remove:e=>{const u=e.parentNode;u&&u.removeChild(e)},createElement:(e,u,t,n)=>{const r=u==="svg"?We.createElementNS(To,e):u==="mathml"?We.createElementNS(jo,e):t?We.createElement(e,{is:t}):We.createElement(e);return e==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:e=>We.createTextNode(e),createComment:e=>We.createComment(e),setText:(e,u)=>{e.nodeValue=u},setElementText:(e,u)=>{e.textContent=u},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>We.querySelector(e),setScopeId(e,u){e.setAttribute(u,"")},insertStaticContent(e,u,t,n,r,i){const s=t?t.previousSibling:u.lastChild;if(r&&(r===i||r.nextSibling))for(;u.insertBefore(r.cloneNode(!0),t),!(r===i||!(r=r.nextSibling)););else{_r.innerHTML=Qi(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const o=_r.content;if(n==="svg"||n==="mathml"){const c=o.firstChild;for(;c.firstChild;)o.appendChild(c.firstChild);o.removeChild(c)}u.insertBefore(o,t)}return[s?s.nextSibling:u.firstChild,t?t.previousSibling:u.lastChild]}},Po=Symbol("_vtc");function Mo(e,u,t){const n=e[Po];n&&(u=(u?[u,...n]:[...n]).join(" ")),u==null?e.removeAttribute("class"):t?e.setAttribute("class",u):e.className=u}const Dt=Symbol("_vod"),Yi=Symbol("_vsh"),Oo={beforeMount(e,{value:u},{transition:t}){e[Dt]=e.style.display==="none"?"":e.style.display,t&&u?t.beforeEnter(e):Nu(e,u)},mounted(e,{value:u},{transition:t}){t&&u&&t.enter(e)},updated(e,{value:u,oldValue:t},{transition:n}){!u!=!t&&(n?u?(n.beforeEnter(e),Nu(e,!0),n.enter(e)):n.leave(e,()=>{Nu(e,!1)}):Nu(e,u))},beforeUnmount(e,{value:u}){Nu(e,u)}};function Nu(e,u){e.style.display=u?e[Dt]:"none",e[Yi]=!u}const Ro=Symbol(""),No=/(^|;)\s*display\s*:/;function Bo(e,u,t){const n=e.style,r=Y(t);let i=!1;if(t&&!r){if(u)if(Y(u))for(const s of u.split(";")){const o=s.slice(0,s.indexOf(":")).trim();t[o]==null&&xt(n,o,"")}else for(const s in u)t[s]==null&&xt(n,s,"");for(const s in t)s==="display"&&(i=!0),xt(n,s,t[s])}else if(r){if(u!==t){const s=n[Ro];s&&(t+=";"+s),n.cssText=t,i=No.test(t)}}else u&&e.removeAttribute("style");Dt in e&&(e[Dt]=i?n.display:"",e[Yi]&&(n.display="none"))}const yr=/\s*!important$/;function xt(e,u,t){if(R(t))t.forEach(n=>xt(e,u,n));else if(t==null&&(t=""),u.startsWith("--"))e.setProperty(u,t);else{const n=Lo(e,u);yr.test(t)?e.setProperty(pu(n),t.replace(yr,""),"important"):e[n]=t}}const kr=["Webkit","Moz","ms"],un={};function Lo(e,u){const t=un[u];if(t)return t;let n=Ae(u);if(n!=="filter"&&n in e)return un[u]=n;n=It(n);for(let r=0;r<kr.length;r++){const i=kr[r]+n;if(i in e)return un[u]=i}return u}const Cr="http://www.w3.org/1999/xlink";function Ar(e,u,t,n,r,i=Bs(u)){n&&u.startsWith("xlink:")?t==null?e.removeAttributeNS(Cr,u.slice(6,u.length)):e.setAttributeNS(Cr,u,t):t==null||i&&!Yr(t)?e.removeAttribute(u):e.setAttribute(u,i?"":ou(t)?String(t):t)}function Er(e,u,t,n,r){if(u==="innerHTML"||u==="textContent"){t!=null&&(e[u]=u==="innerHTML"?Qi(t):t);return}const i=e.tagName;if(u==="value"&&i!=="PROGRESS"&&!i.includes("-")){const o=i==="OPTION"?e.getAttribute("value")||"":e.value,c=t==null?e.type==="checkbox"?"on":"":String(t);(o!==c||!("_value"in e))&&(e.value=c),t==null&&e.removeAttribute(u),e._value=t;return}let s=!1;if(t===""||t==null){const o=typeof e[u];o==="boolean"?t=Yr(t):t==null&&o==="string"?(t="",s=!0):o==="number"&&(t=0,s=!0)}try{e[u]=t}catch{}s&&e.removeAttribute(r||u)}function Ho(e,u,t,n){e.addEventListener(u,t,n)}function zo(e,u,t,n){e.removeEventListener(u,t,n)}const Dr=Symbol("_vei");function qo(e,u,t,n,r=null){const i=e[Dr]||(e[Dr]={}),s=i[u];if(n&&s)s.value=n;else{const[o,c]=Uo(u);if(n){const l=i[u]=Wo(n,r);Ho(e,o,l,c)}else s&&(zo(e,o,s,c),i[u]=void 0)}}const vr=/(?:Once|Passive|Capture)$/;function Uo(e){let u;if(vr.test(e)){u={};let n;for(;n=e.match(vr);)e=e.slice(0,e.length-n[0].length),u[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):pu(e.slice(2)),u]}let tn=0;const $o=Promise.resolve(),Vo=()=>tn||($o.then(()=>tn=0),tn=Date.now());function Wo(e,u){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;He(Go(n,t.value),u,5,[n])};return t.value=e,t.attached=Vo(),t}function Go(e,u){if(R(u)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},u.map(n=>r=>!r._stopped&&n&&n(r))}else return u}const wr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Jo=(e,u,t,n,r,i)=>{const s=r==="svg";u==="class"?Mo(e,n,s):u==="style"?Bo(e,t,n):St(u)?vn(u)||qo(e,u,t,n,i):(u[0]==="."?(u=u.slice(1),!0):u[0]==="^"?(u=u.slice(1),!1):Zo(e,u,n,s))?(Er(e,u,n),!e.tagName.includes("-")&&(u==="value"||u==="checked"||u==="selected")&&Ar(e,u,n,s,i,u!=="value")):e._isVueCE&&(/[A-Z]/.test(u)||!Y(n))?Er(e,Ae(u),n,i,u):(u==="true-value"?e._trueValue=n:u==="false-value"&&(e._falseValue=n),Ar(e,u,n,s))};function Zo(e,u,t,n){if(n)return!!(u==="innerHTML"||u==="textContent"||u in e&&wr(u)&&B(t));if(u==="spellcheck"||u==="draggable"||u==="translate"||u==="autocorrect"||u==="form"||u==="list"&&e.tagName==="INPUT"||u==="type"&&e.tagName==="TEXTAREA")return!1;if(u==="width"||u==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return wr(u)&&Y(t)?!1:u in e}const Ko=ce({patchProp:Jo},Io);let Fr;function Qo(){return Fr||(Fr=X0(Ko))}const Yo=(...e)=>{const u=Qo().createApp(...e),{mount:t}=u;return u.mount=n=>{const r=ec(n);if(!r)return;const i=u._component;!B(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const s=t(r,!1,Xo(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),s},u};function Xo(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ec(e){return Y(e)?document.querySelector(e):e}const Ht=(e,u)=>{const t=e.__vccOpts||e;for(const[n,r]of u)t[n]=r;return t},uc={},tc={class:"text-white"};function nc(e,u){return Re(),Ze("div",tc," HelloSkills Memory ")}const rc=Ht(uc,[["render",nc]]),Sr={};function ic(e){let u=Sr[e];if(u)return u;u=Sr[e]=[];for(let t=0;t<128;t++){const n=String.fromCharCode(t);u.push(n)}for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);u[n]="%"+("0"+n.toString(16).toUpperCase()).slice(-2)}return u}function Su(e,u){typeof u!="string"&&(u=Su.defaultChars);const t=ic(u);return e.replace(/(%[a-f0-9]{2})+/gi,function(n){let r="";for(let i=0,s=n.length;i<s;i+=3){const o=parseInt(n.slice(i+1,i+3),16);if(o<128){r+=t[o];continue}if((o&224)===192&&i+3<s){const c=parseInt(n.slice(i+4,i+6),16);if((c&192)===128){const l=o<<6&1984|c&63;l<128?r+="��":r+=String.fromCharCode(l),i+=3;continue}}if((o&240)===224&&i+6<s){const c=parseInt(n.slice(i+4,i+6),16),l=parseInt(n.slice(i+7,i+9),16);if((c&192)===128&&(l&192)===128){const a=o<<12&61440|c<<6&4032|l&63;a<2048||a>=55296&&a<=57343?r+="���":r+=String.fromCharCode(a),i+=6;continue}}if((o&248)===240&&i+9<s){const c=parseInt(n.slice(i+4,i+6),16),l=parseInt(n.slice(i+7,i+9),16),a=parseInt(n.slice(i+10,i+12),16);if((c&192)===128&&(l&192)===128&&(a&192)===128){let f=o<<18&1835008|c<<12&258048|l<<6&4032|a&63;f<65536||f>1114111?r+="����":(f-=65536,r+=String.fromCharCode(55296+(f>>10),56320+(f&1023))),i+=9;continue}}r+="�"}return r})}Su.defaultChars=";/?:@&=+$,#";Su.componentChars="";const Tr={};function sc(e){let u=Tr[e];if(u)return u;u=Tr[e]=[];for(let t=0;t<128;t++){const n=String.fromCharCode(t);/^[0-9a-z]$/i.test(n)?u.push(n):u.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2))}for(let t=0;t<e.length;t++)u[e.charCodeAt(t)]=e[t];return u}function rt(e,u,t){typeof u!="string"&&(t=u,u=rt.defaultChars),typeof t>"u"&&(t=!0);const n=sc(u);let r="";for(let i=0,s=e.length;i<s;i++){const o=e.charCodeAt(i);if(t&&o===37&&i+2<s&&/^[0-9a-f]{2}$/i.test(e.slice(i+1,i+3))){r+=e.slice(i,i+3),i+=2;continue}if(o<128){r+=n[o];continue}if(o>=55296&&o<=57343){if(o>=55296&&o<=56319&&i+1<s){const c=e.charCodeAt(i+1);if(c>=56320&&c<=57343){r+=encodeURIComponent(e[i]+e[i+1]),i++;continue}}r+="%EF%BF%BD";continue}r+=encodeURIComponent(e[i])}return r}rt.defaultChars=";/?:@&=+$,-_.!~*'()#";rt.componentChars="-_.!~*'()";function $n(e){let u="";return u+=e.protocol||"",u+=e.slashes?"//":"",u+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?u+="["+e.hostname+"]":u+=e.hostname||"",u+=e.port?":"+e.port:"",u+=e.pathname||"",u+=e.search||"",u+=e.hash||"",u}function vt(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const oc=/^([a-z0-9.+-]+:)/i,cc=/:[0-9]*$/,lc=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,ac=["<",">",'"',"`"," ","\r",`
`,"	"],fc=["{","}","|","\\","^","`"].concat(ac),dc=["'"].concat(fc),jr=["%","/","?",";","#"].concat(dc),Ir=["/","?","#"],hc=255,Pr=/^[+a-z0-9A-Z_-]{0,63}$/,pc=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Mr={javascript:!0,"javascript:":!0},Or={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Vn(e,u){if(e&&e instanceof vt)return e;const t=new vt;return t.parse(e,u),t}vt.prototype.parse=function(e,u){let t,n,r,i=e;if(i=i.trim(),!u&&e.split("#").length===1){const l=lc.exec(i);if(l)return this.pathname=l[1],l[2]&&(this.search=l[2]),this}let s=oc.exec(i);if(s&&(s=s[0],t=s.toLowerCase(),this.protocol=s,i=i.substr(s.length)),(u||s||i.match(/^\/\/[^@\/]+@[^@\/]+/))&&(r=i.substr(0,2)==="//",r&&!(s&&Mr[s])&&(i=i.substr(2),this.slashes=!0)),!Mr[s]&&(r||s&&!Or[s])){let l=-1;for(let p=0;p<Ir.length;p++)n=i.indexOf(Ir[p]),n!==-1&&(l===-1||n<l)&&(l=n);let a,f;l===-1?f=i.lastIndexOf("@"):f=i.lastIndexOf("@",l),f!==-1&&(a=i.slice(0,f),i=i.slice(f+1),this.auth=a),l=-1;for(let p=0;p<jr.length;p++)n=i.indexOf(jr[p]),n!==-1&&(l===-1||n<l)&&(l=n);l===-1&&(l=i.length),i[l-1]===":"&&l--;const m=i.slice(0,l);i=i.slice(l),this.parseHost(m),this.hostname=this.hostname||"";const b=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!b){const p=this.hostname.split(/\./);for(let v=0,M=p.length;v<M;v++){const j=p[v];if(j&&!j.match(Pr)){let F="";for(let S=0,y=j.length;S<y;S++)j.charCodeAt(S)>127?F+="x":F+=j[S];if(!F.match(Pr)){const S=p.slice(0,v),y=p.slice(v+1),T=j.match(pc);T&&(S.push(T[1]),y.unshift(T[2])),y.length&&(i=y.join(".")+i),this.hostname=S.join(".");break}}}}this.hostname.length>hc&&(this.hostname=""),b&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const o=i.indexOf("#");o!==-1&&(this.hash=i.substr(o),i=i.slice(0,o));const c=i.indexOf("?");return c!==-1&&(this.search=i.substr(c),i=i.slice(0,c)),i&&(this.pathname=i),Or[t]&&this.hostname&&!this.pathname&&(this.pathname=""),this};vt.prototype.parseHost=function(e){let u=cc.exec(e);u&&(u=u[0],u!==":"&&(this.port=u.substr(1)),e=e.substr(0,e.length-u.length)),e&&(this.hostname=e)};const bc=Object.freeze(Object.defineProperty({__proto__:null,decode:Su,encode:rt,format:$n,parse:Vn},Symbol.toStringTag,{value:"Module"})),Xi=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,es=/[\0-\x1F\x7F-\x9F]/,mc=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Wn=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,us=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,ts=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,xc=Object.freeze(Object.defineProperty({__proto__:null,Any:Xi,Cc:es,Cf:mc,P:Wn,S:us,Z:ts},Symbol.toStringTag,{value:"Module"})),gc=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),_c=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var nn;const yc=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),kc=(nn=String.fromCodePoint)!==null&&nn!==void 0?nn:function(e){let u="";return e>65535&&(e-=65536,u+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),u+=String.fromCharCode(e),u};function Cc(e){var u;return e>=55296&&e<=57343||e>1114111?65533:(u=yc.get(e))!==null&&u!==void 0?u:e}var ee;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(ee||(ee={}));const Ac=32;var nu;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(nu||(nu={}));function Cn(e){return e>=ee.ZERO&&e<=ee.NINE}function Ec(e){return e>=ee.UPPER_A&&e<=ee.UPPER_F||e>=ee.LOWER_A&&e<=ee.LOWER_F}function Dc(e){return e>=ee.UPPER_A&&e<=ee.UPPER_Z||e>=ee.LOWER_A&&e<=ee.LOWER_Z||Cn(e)}function vc(e){return e===ee.EQUALS||Dc(e)}var X;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(X||(X={}));var tu;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(tu||(tu={}));class wc{constructor(u,t,n){this.decodeTree=u,this.emitCodePoint=t,this.errors=n,this.state=X.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=tu.Strict}startEntity(u){this.decodeMode=u,this.state=X.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(u,t){switch(this.state){case X.EntityStart:return u.charCodeAt(t)===ee.NUM?(this.state=X.NumericStart,this.consumed+=1,this.stateNumericStart(u,t+1)):(this.state=X.NamedEntity,this.stateNamedEntity(u,t));case X.NumericStart:return this.stateNumericStart(u,t);case X.NumericDecimal:return this.stateNumericDecimal(u,t);case X.NumericHex:return this.stateNumericHex(u,t);case X.NamedEntity:return this.stateNamedEntity(u,t)}}stateNumericStart(u,t){return t>=u.length?-1:(u.charCodeAt(t)|Ac)===ee.LOWER_X?(this.state=X.NumericHex,this.consumed+=1,this.stateNumericHex(u,t+1)):(this.state=X.NumericDecimal,this.stateNumericDecimal(u,t))}addToNumericResult(u,t,n,r){if(t!==n){const i=n-t;this.result=this.result*Math.pow(r,i)+parseInt(u.substr(t,i),r),this.consumed+=i}}stateNumericHex(u,t){const n=t;for(;t<u.length;){const r=u.charCodeAt(t);if(Cn(r)||Ec(r))t+=1;else return this.addToNumericResult(u,n,t,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(u,n,t,16),-1}stateNumericDecimal(u,t){const n=t;for(;t<u.length;){const r=u.charCodeAt(t);if(Cn(r))t+=1;else return this.addToNumericResult(u,n,t,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(u,n,t,10),-1}emitNumericEntity(u,t){var n;if(this.consumed<=t)return(n=this.errors)===null||n===void 0||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(u===ee.SEMI)this.consumed+=1;else if(this.decodeMode===tu.Strict)return 0;return this.emitCodePoint(Cc(this.result),this.consumed),this.errors&&(u!==ee.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(u,t){const{decodeTree:n}=this;let r=n[this.treeIndex],i=(r&nu.VALUE_LENGTH)>>14;for(;t<u.length;t++,this.excess++){const s=u.charCodeAt(t);if(this.treeIndex=Fc(n,r,this.treeIndex+Math.max(1,i),s),this.treeIndex<0)return this.result===0||this.decodeMode===tu.Attribute&&(i===0||vc(s))?0:this.emitNotTerminatedNamedEntity();if(r=n[this.treeIndex],i=(r&nu.VALUE_LENGTH)>>14,i!==0){if(s===ee.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==tu.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var u;const{result:t,decodeTree:n}=this,r=(n[t]&nu.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,r,this.consumed),(u=this.errors)===null||u===void 0||u.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(u,t,n){const{decodeTree:r}=this;return this.emitCodePoint(t===1?r[u]&~nu.VALUE_LENGTH:r[u+1],n),t===3&&this.emitCodePoint(r[u+2],n),n}end(){var u;switch(this.state){case X.NamedEntity:return this.result!==0&&(this.decodeMode!==tu.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case X.NumericDecimal:return this.emitNumericEntity(0,2);case X.NumericHex:return this.emitNumericEntity(0,3);case X.NumericStart:return(u=this.errors)===null||u===void 0||u.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case X.EntityStart:return 0}}}function ns(e){let u="";const t=new wc(e,n=>u+=kc(n));return function(r,i){let s=0,o=0;for(;(o=r.indexOf("&",o))>=0;){u+=r.slice(s,o),t.startEntity(i);const l=t.write(r,o+1);if(l<0){s=o+t.end();break}s=o+l,o=l===0?s+1:s}const c=u+r.slice(s);return u="",c}}function Fc(e,u,t,n){const r=(u&nu.BRANCH_LENGTH)>>7,i=u&nu.JUMP_TABLE;if(r===0)return i!==0&&n===i?t:-1;if(i){const c=n-i;return c<0||c>=r?-1:e[t+c]-1}let s=t,o=s+r-1;for(;s<=o;){const c=s+o>>>1,l=e[c];if(l<n)s=c+1;else if(l>n)o=c-1;else return e[c+r]}return-1}const Sc=ns(gc);ns(_c);function rs(e,u=tu.Legacy){return Sc(e,u)}function Tc(e){return Object.prototype.toString.call(e)}function Gn(e){return Tc(e)==="[object String]"}const jc=Object.prototype.hasOwnProperty;function Ic(e,u){return jc.call(e,u)}function zt(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!="object")throw new TypeError(t+"must be object");Object.keys(t).forEach(function(n){e[n]=t[n]})}}),e}function is(e,u,t){return[].concat(e.slice(0,u),t,e.slice(u+1))}function Jn(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function wt(e){if(e>65535){e-=65536;const u=55296+(e>>10),t=56320+(e&1023);return String.fromCharCode(u,t)}return String.fromCharCode(e)}const ss=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,Pc=/&([a-z#][a-z0-9]{1,31});/gi,Mc=new RegExp(ss.source+"|"+Pc.source,"gi"),Oc=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function Rc(e,u){if(u.charCodeAt(0)===35&&Oc.test(u)){const n=u[1].toLowerCase()==="x"?parseInt(u.slice(2),16):parseInt(u.slice(1),10);return Jn(n)?wt(n):e}const t=rs(e);return t!==e?t:e}function Nc(e){return e.indexOf("\\")<0?e:e.replace(ss,"$1")}function Tu(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(Mc,function(u,t,n){return t||Rc(u,n)})}const Bc=/[&<>"]/,Lc=/[&<>"]/g,Hc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function zc(e){return Hc[e]}function su(e){return Bc.test(e)?e.replace(Lc,zc):e}const qc=/[.?*+^$[\]\\(){}|-]/g;function Uc(e){return e.replace(qc,"\\$&")}function J(e){switch(e){case 9:case 32:return!0}return!1}function Yu(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Xu(e){return Wn.test(e)||us.test(e)}function et(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function qt(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}const $c={mdurl:bc,ucmicro:xc},Vc=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:is,assign:zt,escapeHtml:su,escapeRE:Uc,fromCodePoint:wt,has:Ic,isMdAsciiPunct:et,isPunctChar:Xu,isSpace:J,isString:Gn,isValidEntityCode:Jn,isWhiteSpace:Yu,lib:$c,normalizeReference:qt,unescapeAll:Tu,unescapeMd:Nc},Symbol.toStringTag,{value:"Module"}));function Wc(e,u,t){let n,r,i,s;const o=e.posMax,c=e.pos;for(e.pos=u+1,n=1;e.pos<o;){if(i=e.src.charCodeAt(e.pos),i===93&&(n--,n===0)){r=!0;break}if(s=e.pos,e.md.inline.skipToken(e),i===91){if(s===e.pos-1)n++;else if(t)return e.pos=c,-1}}let l=-1;return r&&(l=e.pos),e.pos=c,l}function Gc(e,u,t){let n,r=u;const i={ok:!1,pos:0,str:""};if(e.charCodeAt(r)===60){for(r++;r<t;){if(n=e.charCodeAt(r),n===10||n===60)return i;if(n===62)return i.pos=r+1,i.str=Tu(e.slice(u+1,r)),i.ok=!0,i;if(n===92&&r+1<t){r+=2;continue}r++}return i}let s=0;for(;r<t&&(n=e.charCodeAt(r),!(n===32||n<32||n===127));){if(n===92&&r+1<t){if(e.charCodeAt(r+1)===32)break;r+=2;continue}if(n===40&&(s++,s>32))return i;if(n===41){if(s===0)break;s--}r++}return u===r||s!==0||(i.str=Tu(e.slice(u,r)),i.pos=r,i.ok=!0),i}function Jc(e,u,t,n){let r,i=u;const s={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(n)s.str=n.str,s.marker=n.marker;else{if(i>=t)return s;let o=e.charCodeAt(i);if(o!==34&&o!==39&&o!==40)return s;u++,i++,o===40&&(o=41),s.marker=o}for(;i<t;){if(r=e.charCodeAt(i),r===s.marker)return s.pos=i+1,s.str+=Tu(e.slice(u,i)),s.ok=!0,s;if(r===40&&s.marker===41)return s;r===92&&i+1<t&&i++,i++}return s.can_continue=!0,s.str+=Tu(e.slice(u,i)),s}const Zc=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:Gc,parseLinkLabel:Wc,parseLinkTitle:Jc},Symbol.toStringTag,{value:"Module"})),ze={};ze.code_inline=function(e,u,t,n,r){const i=e[u];return"<code"+r.renderAttrs(i)+">"+su(i.content)+"</code>"};ze.code_block=function(e,u,t,n,r){const i=e[u];return"<pre"+r.renderAttrs(i)+"><code>"+su(e[u].content)+`</code></pre>
`};ze.fence=function(e,u,t,n,r){const i=e[u],s=i.info?Tu(i.info).trim():"";let o="",c="";if(s){const a=s.split(/(\s+)/g);o=a[0],c=a.slice(2).join("")}let l;if(t.highlight?l=t.highlight(i.content,o,c)||su(i.content):l=su(i.content),l.indexOf("<pre")===0)return l+`
`;if(s){const a=i.attrIndex("class"),f=i.attrs?i.attrs.slice():[];a<0?f.push(["class",t.langPrefix+o]):(f[a]=f[a].slice(),f[a][1]+=" "+t.langPrefix+o);const m={attrs:f};return`<pre><code${r.renderAttrs(m)}>${l}</code></pre>
`}return`<pre><code${r.renderAttrs(i)}>${l}</code></pre>
`};ze.image=function(e,u,t,n,r){const i=e[u];return i.attrs[i.attrIndex("alt")][1]=r.renderInlineAsText(i.children,t,n),r.renderToken(e,u,t)};ze.hardbreak=function(e,u,t){return t.xhtmlOut?`<br />
`:`<br>
`};ze.softbreak=function(e,u,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};ze.text=function(e,u){return su(e[u].content)};ze.html_block=function(e,u){return e[u].content};ze.html_inline=function(e,u){return e[u].content};function ju(){this.rules=zt({},ze)}ju.prototype.renderAttrs=function(u){let t,n,r;if(!u.attrs)return"";for(r="",t=0,n=u.attrs.length;t<n;t++)r+=" "+su(u.attrs[t][0])+'="'+su(u.attrs[t][1])+'"';return r};ju.prototype.renderToken=function(u,t,n){const r=u[t];let i="";if(r.hidden)return"";r.block&&r.nesting!==-1&&t&&u[t-1].hidden&&(i+=`
`),i+=(r.nesting===-1?"</":"<")+r.tag,i+=this.renderAttrs(r),r.nesting===0&&n.xhtmlOut&&(i+=" /");let s=!1;if(r.block&&(s=!0,r.nesting===1&&t+1<u.length)){const o=u[t+1];(o.type==="inline"||o.hidden||o.nesting===-1&&o.tag===r.tag)&&(s=!1)}return i+=s?`>
`:">",i};ju.prototype.renderInline=function(e,u,t){let n="";const r=this.rules;for(let i=0,s=e.length;i<s;i++){const o=e[i].type;typeof r[o]<"u"?n+=r[o](e,i,u,t,this):n+=this.renderToken(e,i,u)}return n};ju.prototype.renderInlineAsText=function(e,u,t){let n="";for(let r=0,i=e.length;r<i;r++)switch(e[r].type){case"text":n+=e[r].content;break;case"image":n+=this.renderInlineAsText(e[r].children,u,t);break;case"html_inline":case"html_block":n+=e[r].content;break;case"softbreak":case"hardbreak":n+=`
`;break}return n};ju.prototype.render=function(e,u,t){let n="";const r=this.rules;for(let i=0,s=e.length;i<s;i++){const o=e[i].type;o==="inline"?n+=this.renderInline(e[i].children,u,t):typeof r[o]<"u"?n+=r[o](e,i,u,t,this):n+=this.renderToken(e,i,u,t)}return n};function he(){this.__rules__=[],this.__cache__=null}he.prototype.__find__=function(e){for(let u=0;u<this.__rules__.length;u++)if(this.__rules__[u].name===e)return u;return-1};he.prototype.__compile__=function(){const e=this,u=[""];e.__rules__.forEach(function(t){t.enabled&&t.alt.forEach(function(n){u.indexOf(n)<0&&u.push(n)})}),e.__cache__={},u.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))})})};he.prototype.at=function(e,u,t){const n=this.__find__(e),r=t||{};if(n===-1)throw new Error("Parser rule not found: "+e);this.__rules__[n].fn=u,this.__rules__[n].alt=r.alt||[],this.__cache__=null};he.prototype.before=function(e,u,t,n){const r=this.__find__(e),i=n||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(r,0,{name:u,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};he.prototype.after=function(e,u,t,n){const r=this.__find__(e),i=n||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(r+1,0,{name:u,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};he.prototype.push=function(e,u,t){const n=t||{};this.__rules__.push({name:e,enabled:!0,fn:u,alt:n.alt||[]}),this.__cache__=null};he.prototype.enable=function(e,u){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(n){const r=this.__find__(n);if(r<0){if(u)return;throw new Error("Rules manager: invalid rule name "+n)}this.__rules__[r].enabled=!0,t.push(n)},this),this.__cache__=null,t};he.prototype.enableOnly=function(e,u){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(e,u)};he.prototype.disable=function(e,u){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(n){const r=this.__find__(n);if(r<0){if(u)return;throw new Error("Rules manager: invalid rule name "+n)}this.__rules__[r].enabled=!1,t.push(n)},this),this.__cache__=null,t};he.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function Fe(e,u,t){this.type=e,this.tag=u,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}Fe.prototype.attrIndex=function(u){if(!this.attrs)return-1;const t=this.attrs;for(let n=0,r=t.length;n<r;n++)if(t[n][0]===u)return n;return-1};Fe.prototype.attrPush=function(u){this.attrs?this.attrs.push(u):this.attrs=[u]};Fe.prototype.attrSet=function(u,t){const n=this.attrIndex(u),r=[u,t];n<0?this.attrPush(r):this.attrs[n]=r};Fe.prototype.attrGet=function(u){const t=this.attrIndex(u);let n=null;return t>=0&&(n=this.attrs[t][1]),n};Fe.prototype.attrJoin=function(u,t){const n=this.attrIndex(u);n<0?this.attrPush([u,t]):this.attrs[n][1]=this.attrs[n][1]+" "+t};function os(e,u,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=u}os.prototype.Token=Fe;const Kc=/\r\n?|\n/g,Qc=/\0/g;function Yc(e){let u;u=e.src.replace(Kc,`
`),u=u.replace(Qc,"�"),e.src=u}function Xc(e){let u;e.inlineMode?(u=new e.Token("inline","",0),u.content=e.src,u.map=[0,1],u.children=[],e.tokens.push(u)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function el(e){const u=e.tokens;for(let t=0,n=u.length;t<n;t++){const r=u[t];r.type==="inline"&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function ul(e){return/^<a[>\s]/i.test(e)}function tl(e){return/^<\/a\s*>/i.test(e)}function nl(e){const u=e.tokens;if(e.md.options.linkify)for(let t=0,n=u.length;t<n;t++){if(u[t].type!=="inline"||!e.md.linkify.pretest(u[t].content))continue;let r=u[t].children,i=0;for(let s=r.length-1;s>=0;s--){const o=r[s];if(o.type==="link_close"){for(s--;r[s].level!==o.level&&r[s].type!=="link_open";)s--;continue}if(o.type==="html_inline"&&(ul(o.content)&&i>0&&i--,tl(o.content)&&i++),!(i>0)&&o.type==="text"&&e.md.linkify.test(o.content)){const c=o.content;let l=e.md.linkify.match(c);const a=[];let f=o.level,m=0;l.length>0&&l[0].index===0&&s>0&&r[s-1].type==="text_special"&&(l=l.slice(1));for(let b=0;b<l.length;b++){const p=l[b].url,v=e.md.normalizeLink(p);if(!e.md.validateLink(v))continue;let M=l[b].text;l[b].schema?l[b].schema==="mailto:"&&!/^mailto:/i.test(M)?M=e.md.normalizeLinkText("mailto:"+M).replace(/^mailto:/,""):M=e.md.normalizeLinkText(M):M=e.md.normalizeLinkText("http://"+M).replace(/^http:\/\//,"");const j=l[b].index;if(j>m){const T=new e.Token("text","",0);T.content=c.slice(m,j),T.level=f,a.push(T)}const F=new e.Token("link_open","a",1);F.attrs=[["href",v]],F.level=f++,F.markup="linkify",F.info="auto",a.push(F);const S=new e.Token("text","",0);S.content=M,S.level=f,a.push(S);const y=new e.Token("link_close","a",-1);y.level=--f,y.markup="linkify",y.info="auto",a.push(y),m=l[b].lastIndex}if(m<c.length){const b=new e.Token("text","",0);b.content=c.slice(m),b.level=f,a.push(b)}u[t].children=r=is(r,s,a)}}}}const cs=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,rl=/\((c|tm|r)\)/i,il=/\((c|tm|r)\)/ig,sl={c:"©",r:"®",tm:"™"};function ol(e,u){return sl[u.toLowerCase()]}function cl(e){let u=0;for(let t=e.length-1;t>=0;t--){const n=e[t];n.type==="text"&&!u&&(n.content=n.content.replace(il,ol)),n.type==="link_open"&&n.info==="auto"&&u--,n.type==="link_close"&&n.info==="auto"&&u++}}function ll(e){let u=0;for(let t=e.length-1;t>=0;t--){const n=e[t];n.type==="text"&&!u&&cs.test(n.content)&&(n.content=n.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),n.type==="link_open"&&n.info==="auto"&&u--,n.type==="link_close"&&n.info==="auto"&&u++}}function al(e){let u;if(e.md.options.typographer)for(u=e.tokens.length-1;u>=0;u--)e.tokens[u].type==="inline"&&(rl.test(e.tokens[u].content)&&cl(e.tokens[u].children),cs.test(e.tokens[u].content)&&ll(e.tokens[u].children))}const fl=/['"]/,Rr=/['"]/g,Nr="’";function dt(e,u,t){return e.slice(0,u)+t+e.slice(u+1)}function dl(e,u){let t;const n=[];for(let r=0;r<e.length;r++){const i=e[r],s=e[r].level;for(t=n.length-1;t>=0&&!(n[t].level<=s);t--);if(n.length=t+1,i.type!=="text")continue;let o=i.content,c=0,l=o.length;e:for(;c<l;){Rr.lastIndex=c;const a=Rr.exec(o);if(!a)break;let f=!0,m=!0;c=a.index+1;const b=a[0]==="'";let p=32;if(a.index-1>=0)p=o.charCodeAt(a.index-1);else for(t=r-1;t>=0&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t--)if(e[t].content){p=e[t].content.charCodeAt(e[t].content.length-1);break}let v=32;if(c<l)v=o.charCodeAt(c);else for(t=r+1;t<e.length&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t++)if(e[t].content){v=e[t].content.charCodeAt(0);break}const M=et(p)||Xu(String.fromCharCode(p)),j=et(v)||Xu(String.fromCharCode(v)),F=Yu(p),S=Yu(v);if(S?f=!1:j&&(F||M||(f=!1)),F?m=!1:M&&(S||j||(m=!1)),v===34&&a[0]==='"'&&p>=48&&p<=57&&(m=f=!1),f&&m&&(f=M,m=j),!f&&!m){b&&(i.content=dt(i.content,a.index,Nr));continue}if(m)for(t=n.length-1;t>=0;t--){let y=n[t];if(n[t].level<s)break;if(y.single===b&&n[t].level===s){y=n[t];let T,N;b?(T=u.md.options.quotes[2],N=u.md.options.quotes[3]):(T=u.md.options.quotes[0],N=u.md.options.quotes[1]),i.content=dt(i.content,a.index,N),e[y.token].content=dt(e[y.token].content,y.pos,T),c+=N.length-1,y.token===r&&(c+=T.length-1),o=i.content,l=o.length,n.length=t;continue e}}f?n.push({token:r,pos:a.index,single:b,level:s}):m&&b&&(i.content=dt(i.content,a.index,Nr))}}}function hl(e){if(e.md.options.typographer)for(let u=e.tokens.length-1;u>=0;u--)e.tokens[u].type!=="inline"||!fl.test(e.tokens[u].content)||dl(e.tokens[u].children,e)}function pl(e){let u,t;const n=e.tokens,r=n.length;for(let i=0;i<r;i++){if(n[i].type!=="inline")continue;const s=n[i].children,o=s.length;for(u=0;u<o;u++)s[u].type==="text_special"&&(s[u].type="text");for(u=t=0;u<o;u++)s[u].type==="text"&&u+1<o&&s[u+1].type==="text"?s[u+1].content=s[u].content+s[u+1].content:(u!==t&&(s[t]=s[u]),t++);u!==t&&(s.length=t)}}const rn=[["normalize",Yc],["block",Xc],["inline",el],["linkify",nl],["replacements",al],["smartquotes",hl],["text_join",pl]];function Zn(){this.ruler=new he;for(let e=0;e<rn.length;e++)this.ruler.push(rn[e][0],rn[e][1])}Zn.prototype.process=function(e){const u=this.ruler.getRules("");for(let t=0,n=u.length;t<n;t++)u[t](e)};Zn.prototype.State=os;function qe(e,u,t,n){this.src=e,this.md=u,this.env=t,this.tokens=n,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const r=this.src;for(let i=0,s=0,o=0,c=0,l=r.length,a=!1;s<l;s++){const f=r.charCodeAt(s);if(!a)if(J(f)){o++,f===9?c+=4-c%4:c++;continue}else a=!0;(f===10||s===l-1)&&(f!==10&&s++,this.bMarks.push(i),this.eMarks.push(s),this.tShift.push(o),this.sCount.push(c),this.bsCount.push(0),a=!1,o=0,c=0,i=s+1)}this.bMarks.push(r.length),this.eMarks.push(r.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}qe.prototype.push=function(e,u,t){const n=new Fe(e,u,t);return n.block=!0,t<0&&this.level--,n.level=this.level,t>0&&this.level++,this.tokens.push(n),n};qe.prototype.isEmpty=function(u){return this.bMarks[u]+this.tShift[u]>=this.eMarks[u]};qe.prototype.skipEmptyLines=function(u){for(let t=this.lineMax;u<t&&!(this.bMarks[u]+this.tShift[u]<this.eMarks[u]);u++);return u};qe.prototype.skipSpaces=function(u){for(let t=this.src.length;u<t;u++){const n=this.src.charCodeAt(u);if(!J(n))break}return u};qe.prototype.skipSpacesBack=function(u,t){if(u<=t)return u;for(;u>t;)if(!J(this.src.charCodeAt(--u)))return u+1;return u};qe.prototype.skipChars=function(u,t){for(let n=this.src.length;u<n&&this.src.charCodeAt(u)===t;u++);return u};qe.prototype.skipCharsBack=function(u,t,n){if(u<=n)return u;for(;u>n;)if(t!==this.src.charCodeAt(--u))return u+1;return u};qe.prototype.getLines=function(u,t,n,r){if(u>=t)return"";const i=new Array(t-u);for(let s=0,o=u;o<t;o++,s++){let c=0;const l=this.bMarks[o];let a=l,f;for(o+1<t||r?f=this.eMarks[o]+1:f=this.eMarks[o];a<f&&c<n;){const m=this.src.charCodeAt(a);if(J(m))m===9?c+=4-(c+this.bsCount[o])%4:c++;else if(a-l<this.tShift[o])c++;else break;a++}c>n?i[s]=new Array(c-n+1).join(" ")+this.src.slice(a,f):i[s]=this.src.slice(a,f)}return i.join("")};qe.prototype.Token=Fe;const bl=65536;function sn(e,u){const t=e.bMarks[u]+e.tShift[u],n=e.eMarks[u];return e.src.slice(t,n)}function Br(e){const u=[],t=e.length;let n=0,r=e.charCodeAt(n),i=!1,s=0,o="";for(;n<t;)r===124&&(i?(o+=e.substring(s,n-1),s=n):(u.push(o+e.substring(s,n)),o="",s=n+1)),i=r===92,n++,r=e.charCodeAt(n);return u.push(o+e.substring(s)),u}function ml(e,u,t,n){if(u+2>t)return!1;let r=u+1;if(e.sCount[r]<e.blkIndent||e.sCount[r]-e.blkIndent>=4)return!1;let i=e.bMarks[r]+e.tShift[r];if(i>=e.eMarks[r])return!1;const s=e.src.charCodeAt(i++);if(s!==124&&s!==45&&s!==58||i>=e.eMarks[r])return!1;const o=e.src.charCodeAt(i++);if(o!==124&&o!==45&&o!==58&&!J(o)||s===45&&J(o))return!1;for(;i<e.eMarks[r];){const y=e.src.charCodeAt(i);if(y!==124&&y!==45&&y!==58&&!J(y))return!1;i++}let c=sn(e,u+1),l=c.split("|");const a=[];for(let y=0;y<l.length;y++){const T=l[y].trim();if(!T){if(y===0||y===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(T))return!1;T.charCodeAt(T.length-1)===58?a.push(T.charCodeAt(0)===58?"center":"right"):T.charCodeAt(0)===58?a.push("left"):a.push("")}if(c=sn(e,u).trim(),c.indexOf("|")===-1||e.sCount[u]-e.blkIndent>=4)return!1;l=Br(c),l.length&&l[0]===""&&l.shift(),l.length&&l[l.length-1]===""&&l.pop();const f=l.length;if(f===0||f!==a.length)return!1;if(n)return!0;const m=e.parentType;e.parentType="table";const b=e.md.block.ruler.getRules("blockquote"),p=e.push("table_open","table",1),v=[u,0];p.map=v;const M=e.push("thead_open","thead",1);M.map=[u,u+1];const j=e.push("tr_open","tr",1);j.map=[u,u+1];for(let y=0;y<l.length;y++){const T=e.push("th_open","th",1);a[y]&&(T.attrs=[["style","text-align:"+a[y]]]);const N=e.push("inline","",0);N.content=l[y].trim(),N.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let F,S=0;for(r=u+2;r<t&&!(e.sCount[r]<e.blkIndent);r++){let y=!1;for(let N=0,U=b.length;N<U;N++)if(b[N](e,r,t,!0)){y=!0;break}if(y||(c=sn(e,r).trim(),!c)||e.sCount[r]-e.blkIndent>=4||(l=Br(c),l.length&&l[0]===""&&l.shift(),l.length&&l[l.length-1]===""&&l.pop(),S+=f-l.length,S>bl))break;if(r===u+2){const N=e.push("tbody_open","tbody",1);N.map=F=[u+2,0]}const T=e.push("tr_open","tr",1);T.map=[r,r+1];for(let N=0;N<f;N++){const U=e.push("td_open","td",1);a[N]&&(U.attrs=[["style","text-align:"+a[N]]]);const Q=e.push("inline","",0);Q.content=l[N]?l[N].trim():"",Q.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return F&&(e.push("tbody_close","tbody",-1),F[1]=r),e.push("table_close","table",-1),v[1]=r,e.parentType=m,e.line=r,!0}function xl(e,u,t){if(e.sCount[u]-e.blkIndent<4)return!1;let n=u+1,r=n;for(;n<t;){if(e.isEmpty(n)){n++;continue}if(e.sCount[n]-e.blkIndent>=4){n++,r=n;continue}break}e.line=r;const i=e.push("code_block","code",0);return i.content=e.getLines(u,r,4+e.blkIndent,!1)+`
`,i.map=[u,e.line],!0}function gl(e,u,t,n){let r=e.bMarks[u]+e.tShift[u],i=e.eMarks[u];if(e.sCount[u]-e.blkIndent>=4||r+3>i)return!1;const s=e.src.charCodeAt(r);if(s!==126&&s!==96)return!1;let o=r;r=e.skipChars(r,s);let c=r-o;if(c<3)return!1;const l=e.src.slice(o,r),a=e.src.slice(r,i);if(s===96&&a.indexOf(String.fromCharCode(s))>=0)return!1;if(n)return!0;let f=u,m=!1;for(;f++,!(f>=t||(r=o=e.bMarks[f]+e.tShift[f],i=e.eMarks[f],r<i&&e.sCount[f]<e.blkIndent));)if(e.src.charCodeAt(r)===s&&!(e.sCount[f]-e.blkIndent>=4)&&(r=e.skipChars(r,s),!(r-o<c)&&(r=e.skipSpaces(r),!(r<i)))){m=!0;break}c=e.sCount[u],e.line=f+(m?1:0);const b=e.push("fence","code",0);return b.info=a,b.content=e.getLines(u+1,f,c,!0),b.markup=l,b.map=[u,e.line],!0}function _l(e,u,t,n){let r=e.bMarks[u]+e.tShift[u],i=e.eMarks[u];const s=e.lineMax;if(e.sCount[u]-e.blkIndent>=4||e.src.charCodeAt(r)!==62)return!1;if(n)return!0;const o=[],c=[],l=[],a=[],f=e.md.block.ruler.getRules("blockquote"),m=e.parentType;e.parentType="blockquote";let b=!1,p;for(p=u;p<t;p++){const S=e.sCount[p]<e.blkIndent;if(r=e.bMarks[p]+e.tShift[p],i=e.eMarks[p],r>=i)break;if(e.src.charCodeAt(r++)===62&&!S){let T=e.sCount[p]+1,N,U;e.src.charCodeAt(r)===32?(r++,T++,U=!1,N=!0):e.src.charCodeAt(r)===9?(N=!0,(e.bsCount[p]+T)%4===3?(r++,T++,U=!1):U=!0):N=!1;let Q=T;for(o.push(e.bMarks[p]),e.bMarks[p]=r;r<i;){const pe=e.src.charCodeAt(r);if(J(pe))pe===9?Q+=4-(Q+e.bsCount[p]+(U?1:0))%4:Q++;else break;r++}b=r>=i,c.push(e.bsCount[p]),e.bsCount[p]=e.sCount[p]+1+(N?1:0),l.push(e.sCount[p]),e.sCount[p]=Q-T,a.push(e.tShift[p]),e.tShift[p]=r-e.bMarks[p];continue}if(b)break;let y=!1;for(let T=0,N=f.length;T<N;T++)if(f[T](e,p,t,!0)){y=!0;break}if(y){e.lineMax=p,e.blkIndent!==0&&(o.push(e.bMarks[p]),c.push(e.bsCount[p]),a.push(e.tShift[p]),l.push(e.sCount[p]),e.sCount[p]-=e.blkIndent);break}o.push(e.bMarks[p]),c.push(e.bsCount[p]),a.push(e.tShift[p]),l.push(e.sCount[p]),e.sCount[p]=-1}const v=e.blkIndent;e.blkIndent=0;const M=e.push("blockquote_open","blockquote",1);M.markup=">";const j=[u,0];M.map=j,e.md.block.tokenize(e,u,p);const F=e.push("blockquote_close","blockquote",-1);F.markup=">",e.lineMax=s,e.parentType=m,j[1]=e.line;for(let S=0;S<a.length;S++)e.bMarks[S+u]=o[S],e.tShift[S+u]=a[S],e.sCount[S+u]=l[S],e.bsCount[S+u]=c[S];return e.blkIndent=v,!0}function yl(e,u,t,n){const r=e.eMarks[u];if(e.sCount[u]-e.blkIndent>=4)return!1;let i=e.bMarks[u]+e.tShift[u];const s=e.src.charCodeAt(i++);if(s!==42&&s!==45&&s!==95)return!1;let o=1;for(;i<r;){const l=e.src.charCodeAt(i++);if(l!==s&&!J(l))return!1;l===s&&o++}if(o<3)return!1;if(n)return!0;e.line=u+1;const c=e.push("hr","hr",0);return c.map=[u,e.line],c.markup=Array(o+1).join(String.fromCharCode(s)),!0}function Lr(e,u){const t=e.eMarks[u];let n=e.bMarks[u]+e.tShift[u];const r=e.src.charCodeAt(n++);if(r!==42&&r!==45&&r!==43)return-1;if(n<t){const i=e.src.charCodeAt(n);if(!J(i))return-1}return n}function Hr(e,u){const t=e.bMarks[u]+e.tShift[u],n=e.eMarks[u];let r=t;if(r+1>=n)return-1;let i=e.src.charCodeAt(r++);if(i<48||i>57)return-1;for(;;){if(r>=n)return-1;if(i=e.src.charCodeAt(r++),i>=48&&i<=57){if(r-t>=10)return-1;continue}if(i===41||i===46)break;return-1}return r<n&&(i=e.src.charCodeAt(r),!J(i))?-1:r}function kl(e,u){const t=e.level+2;for(let n=u+2,r=e.tokens.length-2;n<r;n++)e.tokens[n].level===t&&e.tokens[n].type==="paragraph_open"&&(e.tokens[n+2].hidden=!0,e.tokens[n].hidden=!0,n+=2)}function Cl(e,u,t,n){let r,i,s,o,c=u,l=!0;if(e.sCount[c]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[c]-e.listIndent>=4&&e.sCount[c]<e.blkIndent)return!1;let a=!1;n&&e.parentType==="paragraph"&&e.sCount[c]>=e.blkIndent&&(a=!0);let f,m,b;if((b=Hr(e,c))>=0){if(f=!0,s=e.bMarks[c]+e.tShift[c],m=Number(e.src.slice(s,b-1)),a&&m!==1)return!1}else if((b=Lr(e,c))>=0)f=!1;else return!1;if(a&&e.skipSpaces(b)>=e.eMarks[c])return!1;if(n)return!0;const p=e.src.charCodeAt(b-1),v=e.tokens.length;f?(o=e.push("ordered_list_open","ol",1),m!==1&&(o.attrs=[["start",m]])):o=e.push("bullet_list_open","ul",1);const M=[c,0];o.map=M,o.markup=String.fromCharCode(p);let j=!1;const F=e.md.block.ruler.getRules("list"),S=e.parentType;for(e.parentType="list";c<t;){i=b,r=e.eMarks[c];const y=e.sCount[c]+b-(e.bMarks[c]+e.tShift[c]);let T=y;for(;i<r;){const $e=e.src.charCodeAt(i);if($e===9)T+=4-(T+e.bsCount[c])%4;else if($e===32)T++;else break;i++}const N=i;let U;N>=r?U=1:U=T-y,U>4&&(U=1);const Q=y+U;o=e.push("list_item_open","li",1),o.markup=String.fromCharCode(p);const pe=[c,0];o.map=pe,f&&(o.info=e.src.slice(s,b-1));const be=e.tight,Ue=e.tShift[c],bu=e.sCount[c],mu=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=Q,e.tight=!0,e.tShift[c]=N-e.bMarks[c],e.sCount[c]=T,N>=r&&e.isEmpty(c+1)?e.line=Math.min(e.line+2,t):e.md.block.tokenize(e,c,t,!0),(!e.tight||j)&&(l=!1),j=e.line-c>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=mu,e.tShift[c]=Ue,e.sCount[c]=bu,e.tight=be,o=e.push("list_item_close","li",-1),o.markup=String.fromCharCode(p),c=e.line,pe[1]=c,c>=t||e.sCount[c]<e.blkIndent||e.sCount[c]-e.blkIndent>=4)break;let xu=!1;for(let $e=0,ue=F.length;$e<ue;$e++)if(F[$e](e,c,t,!0)){xu=!0;break}if(xu)break;if(f){if(b=Hr(e,c),b<0)break;s=e.bMarks[c]+e.tShift[c]}else if(b=Lr(e,c),b<0)break;if(p!==e.src.charCodeAt(b-1))break}return f?o=e.push("ordered_list_close","ol",-1):o=e.push("bullet_list_close","ul",-1),o.markup=String.fromCharCode(p),M[1]=c,e.line=c,e.parentType=S,l&&kl(e,v),!0}function Al(e,u,t,n){let r=e.bMarks[u]+e.tShift[u],i=e.eMarks[u],s=u+1;if(e.sCount[u]-e.blkIndent>=4||e.src.charCodeAt(r)!==91)return!1;function o(F){const S=e.lineMax;if(F>=S||e.isEmpty(F))return null;let y=!1;if(e.sCount[F]-e.blkIndent>3&&(y=!0),e.sCount[F]<0&&(y=!0),!y){const U=e.md.block.ruler.getRules("reference"),Q=e.parentType;e.parentType="reference";let pe=!1;for(let be=0,Ue=U.length;be<Ue;be++)if(U[be](e,F,S,!0)){pe=!0;break}if(e.parentType=Q,pe)return null}const T=e.bMarks[F]+e.tShift[F],N=e.eMarks[F];return e.src.slice(T,N+1)}let c=e.src.slice(r,i+1);i=c.length;let l=-1;for(r=1;r<i;r++){const F=c.charCodeAt(r);if(F===91)return!1;if(F===93){l=r;break}else if(F===10){const S=o(s);S!==null&&(c+=S,i=c.length,s++)}else if(F===92&&(r++,r<i&&c.charCodeAt(r)===10)){const S=o(s);S!==null&&(c+=S,i=c.length,s++)}}if(l<0||c.charCodeAt(l+1)!==58)return!1;for(r=l+2;r<i;r++){const F=c.charCodeAt(r);if(F===10){const S=o(s);S!==null&&(c+=S,i=c.length,s++)}else if(!J(F))break}const a=e.md.helpers.parseLinkDestination(c,r,i);if(!a.ok)return!1;const f=e.md.normalizeLink(a.str);if(!e.md.validateLink(f))return!1;r=a.pos;const m=r,b=s,p=r;for(;r<i;r++){const F=c.charCodeAt(r);if(F===10){const S=o(s);S!==null&&(c+=S,i=c.length,s++)}else if(!J(F))break}let v=e.md.helpers.parseLinkTitle(c,r,i);for(;v.can_continue;){const F=o(s);if(F===null)break;c+=F,r=i,i=c.length,s++,v=e.md.helpers.parseLinkTitle(c,r,i,v)}let M;for(r<i&&p!==r&&v.ok?(M=v.str,r=v.pos):(M="",r=m,s=b);r<i;){const F=c.charCodeAt(r);if(!J(F))break;r++}if(r<i&&c.charCodeAt(r)!==10&&M)for(M="",r=m,s=b;r<i;){const F=c.charCodeAt(r);if(!J(F))break;r++}if(r<i&&c.charCodeAt(r)!==10)return!1;const j=qt(c.slice(1,l));return j?(n||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[j]>"u"&&(e.env.references[j]={title:M,href:f}),e.line=s),!0):!1}const El=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Dl="[a-zA-Z_:][a-zA-Z0-9:._-]*",vl="[^\"'=<>`\\x00-\\x20]+",wl="'[^']*'",Fl='"[^"]*"',Sl="(?:"+vl+"|"+wl+"|"+Fl+")",Tl="(?:\\s+"+Dl+"(?:\\s*=\\s*"+Sl+")?)",ls="<[A-Za-z][A-Za-z0-9\\-]*"+Tl+"*\\s*\\/?>",as="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",jl="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",Il="<[?][\\s\\S]*?[?]>",Pl="<![A-Za-z][^>]*>",Ml="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",Ol=new RegExp("^(?:"+ls+"|"+as+"|"+jl+"|"+Il+"|"+Pl+"|"+Ml+")"),Rl=new RegExp("^(?:"+ls+"|"+as+")"),_u=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+El.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(Rl.source+"\\s*$"),/^$/,!1]];function Nl(e,u,t,n){let r=e.bMarks[u]+e.tShift[u],i=e.eMarks[u];if(e.sCount[u]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(r)!==60)return!1;let s=e.src.slice(r,i),o=0;for(;o<_u.length&&!_u[o][0].test(s);o++);if(o===_u.length)return!1;if(n)return _u[o][2];let c=u+1;if(!_u[o][1].test(s)){for(;c<t&&!(e.sCount[c]<e.blkIndent);c++)if(r=e.bMarks[c]+e.tShift[c],i=e.eMarks[c],s=e.src.slice(r,i),_u[o][1].test(s)){s.length!==0&&c++;break}}e.line=c;const l=e.push("html_block","",0);return l.map=[u,c],l.content=e.getLines(u,c,e.blkIndent,!0),!0}function Bl(e,u,t,n){let r=e.bMarks[u]+e.tShift[u],i=e.eMarks[u];if(e.sCount[u]-e.blkIndent>=4)return!1;let s=e.src.charCodeAt(r);if(s!==35||r>=i)return!1;let o=1;for(s=e.src.charCodeAt(++r);s===35&&r<i&&o<=6;)o++,s=e.src.charCodeAt(++r);if(o>6||r<i&&!J(s))return!1;if(n)return!0;i=e.skipSpacesBack(i,r);const c=e.skipCharsBack(i,35,r);c>r&&J(e.src.charCodeAt(c-1))&&(i=c),e.line=u+1;const l=e.push("heading_open","h"+String(o),1);l.markup="########".slice(0,o),l.map=[u,e.line];const a=e.push("inline","",0);a.content=e.src.slice(r,i).trim(),a.map=[u,e.line],a.children=[];const f=e.push("heading_close","h"+String(o),-1);return f.markup="########".slice(0,o),!0}function Ll(e,u,t){const n=e.md.block.ruler.getRules("paragraph");if(e.sCount[u]-e.blkIndent>=4)return!1;const r=e.parentType;e.parentType="paragraph";let i=0,s,o=u+1;for(;o<t&&!e.isEmpty(o);o++){if(e.sCount[o]-e.blkIndent>3)continue;if(e.sCount[o]>=e.blkIndent){let b=e.bMarks[o]+e.tShift[o];const p=e.eMarks[o];if(b<p&&(s=e.src.charCodeAt(b),(s===45||s===61)&&(b=e.skipChars(b,s),b=e.skipSpaces(b),b>=p))){i=s===61?1:2;break}}if(e.sCount[o]<0)continue;let m=!1;for(let b=0,p=n.length;b<p;b++)if(n[b](e,o,t,!0)){m=!0;break}if(m)break}if(!i)return!1;const c=e.getLines(u,o,e.blkIndent,!1).trim();e.line=o+1;const l=e.push("heading_open","h"+String(i),1);l.markup=String.fromCharCode(s),l.map=[u,e.line];const a=e.push("inline","",0);a.content=c,a.map=[u,e.line-1],a.children=[];const f=e.push("heading_close","h"+String(i),-1);return f.markup=String.fromCharCode(s),e.parentType=r,!0}function Hl(e,u,t){const n=e.md.block.ruler.getRules("paragraph"),r=e.parentType;let i=u+1;for(e.parentType="paragraph";i<t&&!e.isEmpty(i);i++){if(e.sCount[i]-e.blkIndent>3||e.sCount[i]<0)continue;let l=!1;for(let a=0,f=n.length;a<f;a++)if(n[a](e,i,t,!0)){l=!0;break}if(l)break}const s=e.getLines(u,i,e.blkIndent,!1).trim();e.line=i;const o=e.push("paragraph_open","p",1);o.map=[u,e.line];const c=e.push("inline","",0);return c.content=s,c.map=[u,e.line],c.children=[],e.push("paragraph_close","p",-1),e.parentType=r,!0}const ht=[["table",ml,["paragraph","reference"]],["code",xl],["fence",gl,["paragraph","reference","blockquote","list"]],["blockquote",_l,["paragraph","reference","blockquote","list"]],["hr",yl,["paragraph","reference","blockquote","list"]],["list",Cl,["paragraph","reference","blockquote"]],["reference",Al],["html_block",Nl,["paragraph","reference","blockquote"]],["heading",Bl,["paragraph","reference","blockquote"]],["lheading",Ll],["paragraph",Hl]];function Ut(){this.ruler=new he;for(let e=0;e<ht.length;e++)this.ruler.push(ht[e][0],ht[e][1],{alt:(ht[e][2]||[]).slice()})}Ut.prototype.tokenize=function(e,u,t){const n=this.ruler.getRules(""),r=n.length,i=e.md.options.maxNesting;let s=u,o=!1;for(;s<t&&(e.line=s=e.skipEmptyLines(s),!(s>=t||e.sCount[s]<e.blkIndent));){if(e.level>=i){e.line=t;break}const c=e.line;let l=!1;for(let a=0;a<r;a++)if(l=n[a](e,s,t,!1),l){if(c>=e.line)throw new Error("block rule didn't increment state.line");break}if(!l)throw new Error("none of the block rules matched");e.tight=!o,e.isEmpty(e.line-1)&&(o=!0),s=e.line,s<t&&e.isEmpty(s)&&(o=!0,s++,e.line=s)}};Ut.prototype.parse=function(e,u,t,n){if(!e)return;const r=new this.State(e,u,t,n);this.tokenize(r,r.line,r.lineMax)};Ut.prototype.State=qe;function it(e,u,t,n){this.src=e,this.env=t,this.md=u,this.tokens=n,this.tokens_meta=Array(n.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}it.prototype.pushPending=function(){const e=new Fe("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};it.prototype.push=function(e,u,t){this.pending&&this.pushPending();const n=new Fe(e,u,t);let r=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),n.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],r={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(n),this.tokens_meta.push(r),n};it.prototype.scanDelims=function(e,u){const t=this.posMax,n=this.src.charCodeAt(e),r=e>0?this.src.charCodeAt(e-1):32;let i=e;for(;i<t&&this.src.charCodeAt(i)===n;)i++;const s=i-e,o=i<t?this.src.charCodeAt(i):32,c=et(r)||Xu(String.fromCharCode(r)),l=et(o)||Xu(String.fromCharCode(o)),a=Yu(r),f=Yu(o),m=!f&&(!l||a||c),b=!a&&(!c||f||l);return{can_open:m&&(u||!b||c),can_close:b&&(u||!m||l),length:s}};it.prototype.Token=Fe;function zl(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function ql(e,u){let t=e.pos;for(;t<e.posMax&&!zl(e.src.charCodeAt(t));)t++;return t===e.pos?!1:(u||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)}const Ul=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function $l(e,u){if(!e.md.options.linkify||e.linkLevel>0)return!1;const t=e.pos,n=e.posMax;if(t+3>n||e.src.charCodeAt(t)!==58||e.src.charCodeAt(t+1)!==47||e.src.charCodeAt(t+2)!==47)return!1;const r=e.pending.match(Ul);if(!r)return!1;const i=r[1],s=e.md.linkify.matchAtStart(e.src.slice(t-i.length));if(!s)return!1;let o=s.url;if(o.length<=i.length)return!1;o=o.replace(/\*+$/,"");const c=e.md.normalizeLink(o);if(!e.md.validateLink(c))return!1;if(!u){e.pending=e.pending.slice(0,-i.length);const l=e.push("link_open","a",1);l.attrs=[["href",c]],l.markup="linkify",l.info="auto";const a=e.push("text","",0);a.content=e.md.normalizeLinkText(o);const f=e.push("link_close","a",-1);f.markup="linkify",f.info="auto"}return e.pos+=o.length-i.length,!0}function Vl(e,u){let t=e.pos;if(e.src.charCodeAt(t)!==10)return!1;const n=e.pending.length-1,r=e.posMax;if(!u)if(n>=0&&e.pending.charCodeAt(n)===32)if(n>=1&&e.pending.charCodeAt(n-1)===32){let i=n-1;for(;i>=1&&e.pending.charCodeAt(i-1)===32;)i--;e.pending=e.pending.slice(0,i),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(t++;t<r&&J(e.src.charCodeAt(t));)t++;return e.pos=t,!0}const Kn=[];for(let e=0;e<256;e++)Kn.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){Kn[e.charCodeAt(0)]=1});function Wl(e,u){let t=e.pos;const n=e.posMax;if(e.src.charCodeAt(t)!==92||(t++,t>=n))return!1;let r=e.src.charCodeAt(t);if(r===10){for(u||e.push("hardbreak","br",0),t++;t<n&&(r=e.src.charCodeAt(t),!!J(r));)t++;return e.pos=t,!0}let i=e.src[t];if(r>=55296&&r<=56319&&t+1<n){const o=e.src.charCodeAt(t+1);o>=56320&&o<=57343&&(i+=e.src[t+1],t++)}const s="\\"+i;if(!u){const o=e.push("text_special","",0);r<256&&Kn[r]!==0?o.content=i:o.content=s,o.markup=s,o.info="escape"}return e.pos=t+1,!0}function Gl(e,u){let t=e.pos;if(e.src.charCodeAt(t)!==96)return!1;const r=t;t++;const i=e.posMax;for(;t<i&&e.src.charCodeAt(t)===96;)t++;const s=e.src.slice(r,t),o=s.length;if(e.backticksScanned&&(e.backticks[o]||0)<=r)return u||(e.pending+=s),e.pos+=o,!0;let c=t,l;for(;(l=e.src.indexOf("`",c))!==-1;){for(c=l+1;c<i&&e.src.charCodeAt(c)===96;)c++;const a=c-l;if(a===o){if(!u){const f=e.push("code_inline","code",0);f.markup=s,f.content=e.src.slice(t,l).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=c,!0}e.backticks[a]=l}return e.backticksScanned=!0,u||(e.pending+=s),e.pos+=o,!0}function Jl(e,u){const t=e.pos,n=e.src.charCodeAt(t);if(u||n!==126)return!1;const r=e.scanDelims(e.pos,!0);let i=r.length;const s=String.fromCharCode(n);if(i<2)return!1;let o;i%2&&(o=e.push("text","",0),o.content=s,i--);for(let c=0;c<i;c+=2)o=e.push("text","",0),o.content=s+s,e.delimiters.push({marker:n,length:0,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close});return e.pos+=r.length,!0}function zr(e,u){let t;const n=[],r=u.length;for(let i=0;i<r;i++){const s=u[i];if(s.marker!==126||s.end===-1)continue;const o=u[s.end];t=e.tokens[s.token],t.type="s_open",t.tag="s",t.nesting=1,t.markup="~~",t.content="",t=e.tokens[o.token],t.type="s_close",t.tag="s",t.nesting=-1,t.markup="~~",t.content="",e.tokens[o.token-1].type==="text"&&e.tokens[o.token-1].content==="~"&&n.push(o.token-1)}for(;n.length;){const i=n.pop();let s=i+1;for(;s<e.tokens.length&&e.tokens[s].type==="s_close";)s++;s--,i!==s&&(t=e.tokens[s],e.tokens[s]=e.tokens[i],e.tokens[i]=t)}}function Zl(e){const u=e.tokens_meta,t=e.tokens_meta.length;zr(e,e.delimiters);for(let n=0;n<t;n++)u[n]&&u[n].delimiters&&zr(e,u[n].delimiters)}const fs={tokenize:Jl,postProcess:Zl};function Kl(e,u){const t=e.pos,n=e.src.charCodeAt(t);if(u||n!==95&&n!==42)return!1;const r=e.scanDelims(e.pos,n===42);for(let i=0;i<r.length;i++){const s=e.push("text","",0);s.content=String.fromCharCode(n),e.delimiters.push({marker:n,length:r.length,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close})}return e.pos+=r.length,!0}function qr(e,u){const t=u.length;for(let n=t-1;n>=0;n--){const r=u[n];if(r.marker!==95&&r.marker!==42||r.end===-1)continue;const i=u[r.end],s=n>0&&u[n-1].end===r.end+1&&u[n-1].marker===r.marker&&u[n-1].token===r.token-1&&u[r.end+1].token===i.token+1,o=String.fromCharCode(r.marker),c=e.tokens[r.token];c.type=s?"strong_open":"em_open",c.tag=s?"strong":"em",c.nesting=1,c.markup=s?o+o:o,c.content="";const l=e.tokens[i.token];l.type=s?"strong_close":"em_close",l.tag=s?"strong":"em",l.nesting=-1,l.markup=s?o+o:o,l.content="",s&&(e.tokens[u[n-1].token].content="",e.tokens[u[r.end+1].token].content="",n--)}}function Ql(e){const u=e.tokens_meta,t=e.tokens_meta.length;qr(e,e.delimiters);for(let n=0;n<t;n++)u[n]&&u[n].delimiters&&qr(e,u[n].delimiters)}const ds={tokenize:Kl,postProcess:Ql};function Yl(e,u){let t,n,r,i,s="",o="",c=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const a=e.pos,f=e.posMax,m=e.pos+1,b=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(b<0)return!1;let p=b+1;if(p<f&&e.src.charCodeAt(p)===40){for(l=!1,p++;p<f&&(t=e.src.charCodeAt(p),!(!J(t)&&t!==10));p++);if(p>=f)return!1;if(c=p,r=e.md.helpers.parseLinkDestination(e.src,p,e.posMax),r.ok){for(s=e.md.normalizeLink(r.str),e.md.validateLink(s)?p=r.pos:s="",c=p;p<f&&(t=e.src.charCodeAt(p),!(!J(t)&&t!==10));p++);if(r=e.md.helpers.parseLinkTitle(e.src,p,e.posMax),p<f&&c!==p&&r.ok)for(o=r.str,p=r.pos;p<f&&(t=e.src.charCodeAt(p),!(!J(t)&&t!==10));p++);}(p>=f||e.src.charCodeAt(p)!==41)&&(l=!0),p++}if(l){if(typeof e.env.references>"u")return!1;if(p<f&&e.src.charCodeAt(p)===91?(c=p+1,p=e.md.helpers.parseLinkLabel(e,p),p>=0?n=e.src.slice(c,p++):p=b+1):p=b+1,n||(n=e.src.slice(m,b)),i=e.env.references[qt(n)],!i)return e.pos=a,!1;s=i.href,o=i.title}if(!u){e.pos=m,e.posMax=b;const v=e.push("link_open","a",1),M=[["href",s]];v.attrs=M,o&&M.push(["title",o]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=p,e.posMax=f,!0}function Xl(e,u){let t,n,r,i,s,o,c,l,a="";const f=e.pos,m=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const b=e.pos+2,p=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(p<0)return!1;if(i=p+1,i<m&&e.src.charCodeAt(i)===40){for(i++;i<m&&(t=e.src.charCodeAt(i),!(!J(t)&&t!==10));i++);if(i>=m)return!1;for(l=i,o=e.md.helpers.parseLinkDestination(e.src,i,e.posMax),o.ok&&(a=e.md.normalizeLink(o.str),e.md.validateLink(a)?i=o.pos:a=""),l=i;i<m&&(t=e.src.charCodeAt(i),!(!J(t)&&t!==10));i++);if(o=e.md.helpers.parseLinkTitle(e.src,i,e.posMax),i<m&&l!==i&&o.ok)for(c=o.str,i=o.pos;i<m&&(t=e.src.charCodeAt(i),!(!J(t)&&t!==10));i++);else c="";if(i>=m||e.src.charCodeAt(i)!==41)return e.pos=f,!1;i++}else{if(typeof e.env.references>"u")return!1;if(i<m&&e.src.charCodeAt(i)===91?(l=i+1,i=e.md.helpers.parseLinkLabel(e,i),i>=0?r=e.src.slice(l,i++):i=p+1):i=p+1,r||(r=e.src.slice(b,p)),s=e.env.references[qt(r)],!s)return e.pos=f,!1;a=s.href,c=s.title}if(!u){n=e.src.slice(b,p);const v=[];e.md.inline.parse(n,e.md,e.env,v);const M=e.push("image","img",0),j=[["src",a],["alt",""]];M.attrs=j,M.children=v,M.content=n,c&&j.push(["title",c])}return e.pos=i,e.posMax=m,!0}const ea=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,ua=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function ta(e,u){let t=e.pos;if(e.src.charCodeAt(t)!==60)return!1;const n=e.pos,r=e.posMax;for(;;){if(++t>=r)return!1;const s=e.src.charCodeAt(t);if(s===60)return!1;if(s===62)break}const i=e.src.slice(n+1,t);if(ua.test(i)){const s=e.md.normalizeLink(i);if(!e.md.validateLink(s))return!1;if(!u){const o=e.push("link_open","a",1);o.attrs=[["href",s]],o.markup="autolink",o.info="auto";const c=e.push("text","",0);c.content=e.md.normalizeLinkText(i);const l=e.push("link_close","a",-1);l.markup="autolink",l.info="auto"}return e.pos+=i.length+2,!0}if(ea.test(i)){const s=e.md.normalizeLink("mailto:"+i);if(!e.md.validateLink(s))return!1;if(!u){const o=e.push("link_open","a",1);o.attrs=[["href",s]],o.markup="autolink",o.info="auto";const c=e.push("text","",0);c.content=e.md.normalizeLinkText(i);const l=e.push("link_close","a",-1);l.markup="autolink",l.info="auto"}return e.pos+=i.length+2,!0}return!1}function na(e){return/^<a[>\s]/i.test(e)}function ra(e){return/^<\/a\s*>/i.test(e)}function ia(e){const u=e|32;return u>=97&&u<=122}function sa(e,u){if(!e.md.options.html)return!1;const t=e.posMax,n=e.pos;if(e.src.charCodeAt(n)!==60||n+2>=t)return!1;const r=e.src.charCodeAt(n+1);if(r!==33&&r!==63&&r!==47&&!ia(r))return!1;const i=e.src.slice(n).match(Ol);if(!i)return!1;if(!u){const s=e.push("html_inline","",0);s.content=i[0],na(s.content)&&e.linkLevel++,ra(s.content)&&e.linkLevel--}return e.pos+=i[0].length,!0}const oa=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,ca=/^&([a-z][a-z0-9]{1,31});/i;function la(e,u){const t=e.pos,n=e.posMax;if(e.src.charCodeAt(t)!==38||t+1>=n)return!1;if(e.src.charCodeAt(t+1)===35){const i=e.src.slice(t).match(oa);if(i){if(!u){const s=i[1][0].toLowerCase()==="x"?parseInt(i[1].slice(1),16):parseInt(i[1],10),o=e.push("text_special","",0);o.content=Jn(s)?wt(s):wt(65533),o.markup=i[0],o.info="entity"}return e.pos+=i[0].length,!0}}else{const i=e.src.slice(t).match(ca);if(i){const s=rs(i[0]);if(s!==i[0]){if(!u){const o=e.push("text_special","",0);o.content=s,o.markup=i[0],o.info="entity"}return e.pos+=i[0].length,!0}}}return!1}function Ur(e){const u={},t=e.length;if(!t)return;let n=0,r=-2;const i=[];for(let s=0;s<t;s++){const o=e[s];if(i.push(0),(e[n].marker!==o.marker||r!==o.token-1)&&(n=s),r=o.token,o.length=o.length||0,!o.close)continue;u.hasOwnProperty(o.marker)||(u[o.marker]=[-1,-1,-1,-1,-1,-1]);const c=u[o.marker][(o.open?3:0)+o.length%3];let l=n-i[n]-1,a=l;for(;l>c;l-=i[l]+1){const f=e[l];if(f.marker===o.marker&&f.open&&f.end<0){let m=!1;if((f.close||o.open)&&(f.length+o.length)%3===0&&(f.length%3!==0||o.length%3!==0)&&(m=!0),!m){const b=l>0&&!e[l-1].open?i[l-1]+1:0;i[s]=s-l+b,i[l]=b,o.open=!1,f.end=s,f.close=!1,a=-1,r=-2;break}}}a!==-1&&(u[o.marker][(o.open?3:0)+(o.length||0)%3]=a)}}function aa(e){const u=e.tokens_meta,t=e.tokens_meta.length;Ur(e.delimiters);for(let n=0;n<t;n++)u[n]&&u[n].delimiters&&Ur(u[n].delimiters)}function fa(e){let u,t,n=0;const r=e.tokens,i=e.tokens.length;for(u=t=0;u<i;u++)r[u].nesting<0&&n--,r[u].level=n,r[u].nesting>0&&n++,r[u].type==="text"&&u+1<i&&r[u+1].type==="text"?r[u+1].content=r[u].content+r[u+1].content:(u!==t&&(r[t]=r[u]),t++);u!==t&&(r.length=t)}const on=[["text",ql],["linkify",$l],["newline",Vl],["escape",Wl],["backticks",Gl],["strikethrough",fs.tokenize],["emphasis",ds.tokenize],["link",Yl],["image",Xl],["autolink",ta],["html_inline",sa],["entity",la]],cn=[["balance_pairs",aa],["strikethrough",fs.postProcess],["emphasis",ds.postProcess],["fragments_join",fa]];function st(){this.ruler=new he;for(let e=0;e<on.length;e++)this.ruler.push(on[e][0],on[e][1]);this.ruler2=new he;for(let e=0;e<cn.length;e++)this.ruler2.push(cn[e][0],cn[e][1])}st.prototype.skipToken=function(e){const u=e.pos,t=this.ruler.getRules(""),n=t.length,r=e.md.options.maxNesting,i=e.cache;if(typeof i[u]<"u"){e.pos=i[u];return}let s=!1;if(e.level<r){for(let o=0;o<n;o++)if(e.level++,s=t[o](e,!0),e.level--,s){if(u>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;s||e.pos++,i[u]=e.pos};st.prototype.tokenize=function(e){const u=this.ruler.getRules(""),t=u.length,n=e.posMax,r=e.md.options.maxNesting;for(;e.pos<n;){const i=e.pos;let s=!1;if(e.level<r){for(let o=0;o<t;o++)if(s=u[o](e,!1),s){if(i>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(s){if(e.pos>=n)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};st.prototype.parse=function(e,u,t,n){const r=new this.State(e,u,t,n);this.tokenize(r);const i=this.ruler2.getRules(""),s=i.length;for(let o=0;o<s;o++)i[o](r)};st.prototype.State=it;function da(e){const u={};e=e||{},u.src_Any=Xi.source,u.src_Cc=es.source,u.src_Z=ts.source,u.src_P=Wn.source,u.src_ZPCc=[u.src_Z,u.src_P,u.src_Cc].join("|"),u.src_ZCc=[u.src_Z,u.src_Cc].join("|");const t="[><｜]";return u.src_pseudo_letter="(?:(?!"+t+"|"+u.src_ZPCc+")"+u.src_Any+")",u.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",u.src_auth="(?:(?:(?!"+u.src_ZCc+"|[@/\\[\\]()]).)+@)?",u.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",u.src_host_terminator="(?=$|"+t+"|"+u.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+u.src_ZPCc+"))",u.src_path="(?:[/?#](?:(?!"+u.src_ZCc+"|"+t+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+u.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+u.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+u.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+u.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+u.src_ZCc+"|[']).)+\\'|\\'(?="+u.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+u.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+u.src_ZCc+"|$)|;(?!"+u.src_ZCc+"|$)|\\!+(?!"+u.src_ZCc+"|[!]|$)|\\?(?!"+u.src_ZCc+"|[?]|$))+|\\/)?",u.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',u.src_xn="xn--[a-z0-9\\-]{1,59}",u.src_domain_root="(?:"+u.src_xn+"|"+u.src_pseudo_letter+"{1,63})",u.src_domain="(?:"+u.src_xn+"|(?:"+u.src_pseudo_letter+")|(?:"+u.src_pseudo_letter+"(?:-|"+u.src_pseudo_letter+"){0,61}"+u.src_pseudo_letter+"))",u.src_host="(?:(?:(?:(?:"+u.src_domain+")\\.)*"+u.src_domain+"))",u.tpl_host_fuzzy="(?:"+u.src_ip4+"|(?:(?:(?:"+u.src_domain+")\\.)+(?:%TLDS%)))",u.tpl_host_no_ip_fuzzy="(?:(?:(?:"+u.src_domain+")\\.)+(?:%TLDS%))",u.src_host_strict=u.src_host+u.src_host_terminator,u.tpl_host_fuzzy_strict=u.tpl_host_fuzzy+u.src_host_terminator,u.src_host_port_strict=u.src_host+u.src_port+u.src_host_terminator,u.tpl_host_port_fuzzy_strict=u.tpl_host_fuzzy+u.src_port+u.src_host_terminator,u.tpl_host_port_no_ip_fuzzy_strict=u.tpl_host_no_ip_fuzzy+u.src_port+u.src_host_terminator,u.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+u.src_ZPCc+"|>|$))",u.tpl_email_fuzzy="(^|"+t+'|"|\\(|'+u.src_ZCc+")("+u.src_email_name+"@"+u.tpl_host_fuzzy_strict+")",u.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+u.src_ZPCc+"))((?![$+<=>^`|｜])"+u.tpl_host_port_fuzzy_strict+u.src_path+")",u.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+u.src_ZPCc+"))((?![$+<=>^`|｜])"+u.tpl_host_port_no_ip_fuzzy_strict+u.src_path+")",u}function An(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}function $t(e){return Object.prototype.toString.call(e)}function ha(e){return $t(e)==="[object String]"}function pa(e){return $t(e)==="[object Object]"}function ba(e){return $t(e)==="[object RegExp]"}function $r(e){return $t(e)==="[object Function]"}function ma(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const hs={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function xa(e){return Object.keys(e||{}).reduce(function(u,t){return u||hs.hasOwnProperty(t)},!1)}const ga={"http:":{validate:function(e,u,t){const n=e.slice(u);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(n)?n.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,u,t){const n=e.slice(u);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(n)?u>=3&&e[u-3]===":"||u>=3&&e[u-3]==="/"?0:n.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,u,t){const n=e.slice(u);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(n)?n.match(t.re.mailto)[0].length:0}}},_a="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",ya="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function ka(e){e.__index__=-1,e.__text_cache__=""}function Ca(e){return function(u,t){const n=u.slice(t);return e.test(n)?n.match(e)[0].length:0}}function Vr(){return function(e,u){u.normalize(e)}}function Ft(e){const u=e.re=da(e.__opts__),t=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||t.push(_a),t.push(u.src_xn),u.src_tlds=t.join("|");function n(o){return o.replace("%TLDS%",u.src_tlds)}u.email_fuzzy=RegExp(n(u.tpl_email_fuzzy),"i"),u.link_fuzzy=RegExp(n(u.tpl_link_fuzzy),"i"),u.link_no_ip_fuzzy=RegExp(n(u.tpl_link_no_ip_fuzzy),"i"),u.host_fuzzy_test=RegExp(n(u.tpl_host_fuzzy_test),"i");const r=[];e.__compiled__={};function i(o,c){throw new Error('(LinkifyIt) Invalid schema "'+o+'": '+c)}Object.keys(e.__schemas__).forEach(function(o){const c=e.__schemas__[o];if(c===null)return;const l={validate:null,link:null};if(e.__compiled__[o]=l,pa(c)){ba(c.validate)?l.validate=Ca(c.validate):$r(c.validate)?l.validate=c.validate:i(o,c),$r(c.normalize)?l.normalize=c.normalize:c.normalize?i(o,c):l.normalize=Vr();return}if(ha(c)){r.push(o);return}i(o,c)}),r.forEach(function(o){e.__compiled__[e.__schemas__[o]]&&(e.__compiled__[o].validate=e.__compiled__[e.__schemas__[o]].validate,e.__compiled__[o].normalize=e.__compiled__[e.__schemas__[o]].normalize)}),e.__compiled__[""]={validate:null,normalize:Vr()};const s=Object.keys(e.__compiled__).filter(function(o){return o.length>0&&e.__compiled__[o]}).map(ma).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+u.src_ZPCc+"))("+s+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+u.src_ZPCc+"))("+s+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),ka(e)}function Aa(e,u){const t=e.__index__,n=e.__last_index__,r=e.__text_cache__.slice(t,n);this.schema=e.__schema__.toLowerCase(),this.index=t+u,this.lastIndex=n+u,this.raw=r,this.text=r,this.url=r}function En(e,u){const t=new Aa(e,u);return e.__compiled__[t.schema].normalize(t,e),t}function ye(e,u){if(!(this instanceof ye))return new ye(e,u);u||xa(e)&&(u=e,e={}),this.__opts__=An({},hs,u),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=An({},ga,e),this.__compiled__={},this.__tlds__=ya,this.__tlds_replaced__=!1,this.re={},Ft(this)}ye.prototype.add=function(u,t){return this.__schemas__[u]=t,Ft(this),this};ye.prototype.set=function(u){return this.__opts__=An(this.__opts__,u),this};ye.prototype.test=function(u){if(this.__text_cache__=u,this.__index__=-1,!u.length)return!1;let t,n,r,i,s,o,c,l,a;if(this.re.schema_test.test(u)){for(c=this.re.schema_search,c.lastIndex=0;(t=c.exec(u))!==null;)if(i=this.testSchemaAt(u,t[2],c.lastIndex),i){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(l=u.search(this.re.host_fuzzy_test),l>=0&&(this.__index__<0||l<this.__index__)&&(n=u.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(s=n.index+n[1].length,(this.__index__<0||s<this.__index__)&&(this.__schema__="",this.__index__=s,this.__last_index__=n.index+n[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(a=u.indexOf("@"),a>=0&&(r=u.match(this.re.email_fuzzy))!==null&&(s=r.index+r[1].length,o=r.index+r[0].length,(this.__index__<0||s<this.__index__||s===this.__index__&&o>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=s,this.__last_index__=o))),this.__index__>=0};ye.prototype.pretest=function(u){return this.re.pretest.test(u)};ye.prototype.testSchemaAt=function(u,t,n){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(u,n,this):0};ye.prototype.match=function(u){const t=[];let n=0;this.__index__>=0&&this.__text_cache__===u&&(t.push(En(this,n)),n=this.__last_index__);let r=n?u.slice(n):u;for(;this.test(r);)t.push(En(this,n)),r=r.slice(this.__last_index__),n+=this.__last_index__;return t.length?t:null};ye.prototype.matchAtStart=function(u){if(this.__text_cache__=u,this.__index__=-1,!u.length)return null;const t=this.re.schema_at_start.exec(u);if(!t)return null;const n=this.testSchemaAt(u,t[2],t[0].length);return n?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+n,En(this,0)):null};ye.prototype.tlds=function(u,t){return u=Array.isArray(u)?u:[u],t?(this.__tlds__=this.__tlds__.concat(u).sort().filter(function(n,r,i){return n!==i[r-1]}).reverse(),Ft(this),this):(this.__tlds__=u.slice(),this.__tlds_replaced__=!0,Ft(this),this)};ye.prototype.normalize=function(u){u.schema||(u.url="http://"+u.url),u.schema==="mailto:"&&!/^mailto:/i.test(u.url)&&(u.url="mailto:"+u.url)};ye.prototype.onCompile=function(){};const vu=2147483647,Ne=36,Qn=1,ut=26,Ea=38,Da=700,ps=72,bs=128,ms="-",va=/^xn--/,wa=/[^\0-\x7F]/,Fa=/[\x2E\u3002\uFF0E\uFF61]/g,Sa={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},ln=Ne-Qn,Be=Math.floor,an=String.fromCharCode;function uu(e){throw new RangeError(Sa[e])}function Ta(e,u){const t=[];let n=e.length;for(;n--;)t[n]=u(e[n]);return t}function xs(e,u){const t=e.split("@");let n="";t.length>1&&(n=t[0]+"@",e=t[1]),e=e.replace(Fa,".");const r=e.split("."),i=Ta(r,u).join(".");return n+i}function gs(e){const u=[];let t=0;const n=e.length;for(;t<n;){const r=e.charCodeAt(t++);if(r>=55296&&r<=56319&&t<n){const i=e.charCodeAt(t++);(i&64512)==56320?u.push(((r&1023)<<10)+(i&1023)+65536):(u.push(r),t--)}else u.push(r)}return u}const ja=e=>String.fromCodePoint(...e),Ia=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:Ne},Wr=function(e,u){return e+22+75*(e<26)-((u!=0)<<5)},_s=function(e,u,t){let n=0;for(e=t?Be(e/Da):e>>1,e+=Be(e/u);e>ln*ut>>1;n+=Ne)e=Be(e/ln);return Be(n+(ln+1)*e/(e+Ea))},ys=function(e){const u=[],t=e.length;let n=0,r=bs,i=ps,s=e.lastIndexOf(ms);s<0&&(s=0);for(let o=0;o<s;++o)e.charCodeAt(o)>=128&&uu("not-basic"),u.push(e.charCodeAt(o));for(let o=s>0?s+1:0;o<t;){const c=n;for(let a=1,f=Ne;;f+=Ne){o>=t&&uu("invalid-input");const m=Ia(e.charCodeAt(o++));m>=Ne&&uu("invalid-input"),m>Be((vu-n)/a)&&uu("overflow"),n+=m*a;const b=f<=i?Qn:f>=i+ut?ut:f-i;if(m<b)break;const p=Ne-b;a>Be(vu/p)&&uu("overflow"),a*=p}const l=u.length+1;i=_s(n-c,l,c==0),Be(n/l)>vu-r&&uu("overflow"),r+=Be(n/l),n%=l,u.splice(n++,0,r)}return String.fromCodePoint(...u)},ks=function(e){const u=[];e=gs(e);const t=e.length;let n=bs,r=0,i=ps;for(const c of e)c<128&&u.push(an(c));const s=u.length;let o=s;for(s&&u.push(ms);o<t;){let c=vu;for(const a of e)a>=n&&a<c&&(c=a);const l=o+1;c-n>Be((vu-r)/l)&&uu("overflow"),r+=(c-n)*l,n=c;for(const a of e)if(a<n&&++r>vu&&uu("overflow"),a===n){let f=r;for(let m=Ne;;m+=Ne){const b=m<=i?Qn:m>=i+ut?ut:m-i;if(f<b)break;const p=f-b,v=Ne-b;u.push(an(Wr(b+p%v,0))),f=Be(p/v)}u.push(an(Wr(f,0))),i=_s(r,l,o===s),r=0,++o}++r,++n}return u.join("")},Pa=function(e){return xs(e,function(u){return va.test(u)?ys(u.slice(4).toLowerCase()):u})},Ma=function(e){return xs(e,function(u){return wa.test(u)?"xn--"+ks(u):u})},Cs={version:"2.3.1",ucs2:{decode:gs,encode:ja},decode:ys,encode:ks,toASCII:Ma,toUnicode:Pa},Oa={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},Ra={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},Na={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},Ba={default:Oa,zero:Ra,commonmark:Na},La=/^(vbscript|javascript|file|data):/,Ha=/^data:image\/(gif|png|jpeg|webp);/;function za(e){const u=e.trim().toLowerCase();return La.test(u)?Ha.test(u):!0}const As=["http:","https:","mailto:"];function qa(e){const u=Vn(e,!0);if(u.hostname&&(!u.protocol||As.indexOf(u.protocol)>=0))try{u.hostname=Cs.toASCII(u.hostname)}catch{}return rt($n(u))}function Ua(e){const u=Vn(e,!0);if(u.hostname&&(!u.protocol||As.indexOf(u.protocol)>=0))try{u.hostname=Cs.toUnicode(u.hostname)}catch{}return Su($n(u),Su.defaultChars+"%")}function Ee(e,u){if(!(this instanceof Ee))return new Ee(e,u);u||Gn(e)||(u=e||{},e="default"),this.inline=new st,this.block=new Ut,this.core=new Zn,this.renderer=new ju,this.linkify=new ye,this.validateLink=za,this.normalizeLink=qa,this.normalizeLinkText=Ua,this.utils=Vc,this.helpers=zt({},Zc),this.options={},this.configure(e),u&&this.set(u)}Ee.prototype.set=function(e){return zt(this.options,e),this};Ee.prototype.configure=function(e){const u=this;if(Gn(e)){const t=e;if(e=Ba[t],!e)throw new Error('Wrong `markdown-it` preset "'+t+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&u.set(e.options),e.components&&Object.keys(e.components).forEach(function(t){e.components[t].rules&&u[t].ruler.enableOnly(e.components[t].rules),e.components[t].rules2&&u[t].ruler2.enableOnly(e.components[t].rules2)}),this};Ee.prototype.enable=function(e,u){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));const n=e.filter(function(r){return t.indexOf(r)<0});if(n.length&&!u)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+n);return this};Ee.prototype.disable=function(e,u){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));const n=e.filter(function(r){return t.indexOf(r)<0});if(n.length&&!u)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+n);return this};Ee.prototype.use=function(e){const u=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,u),this};Ee.prototype.parse=function(e,u){if(typeof e!="string")throw new Error("Input data should be a String");const t=new this.core.State(e,this,u);return this.core.process(t),t.tokens};Ee.prototype.render=function(e,u){return u=u||{},this.renderer.render(this.parse(e,u),this.options,u)};Ee.prototype.parseInline=function(e,u){const t=new this.core.State(e,this,u);return t.inlineMode=!0,this.core.process(t),t.tokens};Ee.prototype.renderInline=function(e,u){return u=u||{},this.renderer.render(this.parseInline(e,u),this.options,u)};const Es=new Ee;Es.renderer.rules.link_open=(e,u,t,n,r)=>{const i=e[u].attrIndex("target");return i<0?(e[u].attrPush(["target","_blank"]),e[u].attrPush(["rel","noopener noreferrer"])):e[u].attrs[i][1]="_blank",r.renderToken(e,u,t)};const $a=()=>Es,Va="_wrap_2rkhf_2",Wa="_content_2rkhf_10",Ga="_contentTextOnly_2rkhf_26",Ja="_markdown_2rkhf_30",Za={wrap:Va,content:Wa,contentTextOnly:Ga,markdown:Ja},Ka=["onClick"],Qa=["innerHTML"],Ya={__name:"AppContent",props:{selectedMenu:Array|null},setup(e){const u=$a();function t(s){return u.render(s||"")}const n=e;bt(()=>n.selectedMenu,(s,o)=>{s!==o&&r.value.clear()});const r=mi(new Set);function i(s){r.value.has(s)?r.value.delete(s):r.value.add(s)}return(s,o)=>{const c=O0("AppContent",!0);return Re(),Ze("div",{class:ke([s.$style.wrap,"flex-col"])},[(Re(!0),Ze(De,null,wi(e.selectedMenu,(l,a)=>(Re(),Ze("div",{key:a,class:ke([s.$style.content,r.value.has(a)&&l.items?s.$style.active:"",l.items?s.$style.contentTextOnly:""])},[At("div",{class:ke([s.$style.title,"text-green"]),onClick:f=>i(a)},Tn(l.title),11,Ka),_0(At("div",{class:ke(s.$style.text)},[l.items?(Re(),bo(c,{key:0,selectedMenu:l.items,class:ke([s.$style.items,"mt-16 mb-24"])},null,8,["selectedMenu","class"])):(Re(),Ze("div",{key:1,class:ke(["text-left ml-16",s.$style.markdown]),innerHTML:t(l.text)},null,10,Qa))],2),[[Oo,r.value.has(a)]])],2))),128))],2)}}},Xa={$style:Za},ef=Ht(Ya,[["__cssModules",Xa]]),uf="_container_1c09i_1",tf="_navigation_1c09i_7",nf="_active_1c09i_22",rf={container:uf,navigation:tf,active:nf},sf=["onClick"],of={__name:"AppMenu",props:{items:Array,activeIndex:Number|null},emits:["changeActiveIndex"],setup(e,{emit:u}){const t=u;function n(r){t("changeActiveIndex",r)}return(r,i)=>(Re(),Ze("div",{class:ke([r.$style.container,"gap-16 mb-24"])},[(Re(!0),Ze(De,null,wi(e.items,(s,o)=>(Re(),Ze("div",{key:o,class:ke([r.$style.navigation,e.activeIndex===o?r.$style.active:""]),onClick:c=>n(o)},Tn(s),11,sf))),128))],2))}},cf={$style:rf},lf=Ht(of,[["__cssModules",cf]]),fe={GIT:"GIT",JS:"JS",Objects:"OBJECT",Arrays:"ARRAYS",Markup:"MARKUP",Pug:"PUG",Styles:"STYLES",Browser:"BROWSER",Vue:"VUE",Nuxt:"NUXT",TS:"TS",Links:"LINKS",Hotkeys:"HOTKEYS"},Gr=Object.values(fe),af={[fe.GIT]:[{title:"🔖 Семантическое версионирование и соглашения коммитов",items:[{title:"SemVer – Семантическое версионирование",text:`\`\`\`text
Формат: MAJOR.MINOR.PATCH
Пример: 2.5.1
\`\`\`

- ✔ Стандартизирует подход к версиям (понятно, что изменилось)
- ✔ Помогает избежать неожиданных поломок при обновлениях
- ✔ Упрощает управление зависимостями (npm, yarn)

\`\`\`text
1. MAJOR – серьёзные изменения (ломают старый код)
2. MINOR – новые фичи (старое работает как раньше)
3. PATCH – багфиксы (поведение не меняется)
\`\`\`

\`\`\`text
Примеры:
1.0.0 → 2.0.0 – удалили старое API
1.0.0 → 1.1.0 – добавили новую функцию
1.0.0 → 1.0.1 – исправили баг
\`\`\`

- ✘ Нельзя рандомно менять версию — важно соблюдать смысл
- ✘ При MAJOR-изменениях важно документировать, что сломалось`},{title:"Conventional Commits – Соглашения по названиям коммитов",text:`\`\`\`text
Формат: тип(область): сообщение

Примеры:
feat(chat): добавлена отправка сообщений  
fix(auth): исправлена ошибка логина  
docs(readme): обновили описание проекта
\`\`\`

**Поддерживаемые типы:**

\`feat – добавление новой фичи\`
\`fix – исправление ошибки\`
\`docs – только документация\` 
\`style – изменения стилей, не влияющие на поведение (отступы, пробелы)\`
\`refactor – улучшение кода без изменения внешнего поведения\`
\`test – добавление/обновление тестов\`
\`chore – вспомогательные задачи (билды, CI и т.п.)\`


**Дополнительно:**


- \`BREAKING CHANGE: — помечает слом совместимости (для MAJOR версии)\` 
- \`feat(auth)!: — ! используется в заголовке коммита для обозначения breaking change\`
- \`fix(api): — скобки (scope) — не обязательны, но полезны\`
- \`feat(ui): — скобки (scope) — не обязательны, но полезны\`

- ✔ Упрощает чтение истории коммитов  
- ✔ Можно автоматизировать генерацию CHANGELOG  
- ✔ Работает с CI/CD (например, semantic-release)

- ✘ Требует самодисциплины и договоренности в команде  
- ✘ Нужны линтеры или хуки, чтобы все придерживались стиля`},{title:"Примеры коммитов",text:`\`\`\`text
feat(form): добавлен инпут для номера телефона

fix(modal): закрытие не срабатывало при esc

refactor(api): вынес запросы в отдельный сервис

docs: добавлен раздел "Установка" в README

feat(auth)!: удалён устаревший механизм авторизации

BREAKING CHANGE: удалена поддержка IE11
\`\`\`

- ✔ Используются во многих крупных проектах (Angular, Vite, Nuxt)
- ✔ Помогают авто-генерации changelog и релизов
- ✔ Упрощают поддержку проекта в долгосрочной перспективе`}]},{title:"📥 Клонирование и удалённый репозиторий",text:`- **git clone <url>** – Клонировать удалённый репозиторий на локальную машину
- **git remote -v** – Показывает связку с гитом (куда / откуда)`},{title:"🔍 Проверка состояния",text:`- **git status** – Показать текущее состояние репозитория (изменения, ветки)
- **git log** – Показать историю коммитов`},{title:"➕ Добавление и коммиты",text:`- **git add <файл>** – Добавить файл(ы) в индекс (готовность к коммиту)
- **git add .** – Добавить все файлы в индекс
- **git commit -m "msg"** – Зафиксировать изменения с сообщением коммита`},{title:"📤 Отправка и получение",text:`- **git push** – Отправить коммиты в удалённый репозиторий
- **git pull** – Забрать изменения с удалённого репозитория и слить с локальными`},{title:"🌿 Работа с ветками",text:`- **git branch** – Показать список веток
- **git checkout <ветка>** – Переключиться на другую ветку
- **git merge <ветка>** – Слить указанную ветку в текущую`}],[fe.JS]:[{title:"📚 Типы данных",items:[{title:"🔢 Примитивные типы данных",text:`- **string** – Строка: "Hello", 'world', template

- **number** – Число: 42, 3.14, NaN, Infinity

- **bigint** – Большие числа: 1234567890123456789012345678901234567890n

- **boolean** – Логический тип: true, false

- **undefined** – Тип значения, которое не было присвоено

- **null** – Пустое или неизвестное значение

- **symbol** – Уникальные идентификаторы: Symbol("id")`},{title:"📦 Ссылочные (объектные) типы",text:`- **object** – Объекты: { name: "JS" }

- **array** – Массивы: [1, 2, 3]

- **function** – Функции: function() {}, () => {}

- **date** – Дата: new Date()

- **regexp** – Регулярные выражения: /abc/i

- **error** – Ошибки: new Error("message")

- **map** – Коллекции ключ/значение: new Map()

- **set** – Уникальные значения: new Set()

- **weakmap** – Слабые коллекции: new WeakMap()

- **weakset** – Слабые уникальные коллекции: new WeakSet()`},{title:"🧪 Проверка типов",text:`- **typeof** – typeof 42 // "number"

- **Array.isArray()** – Array.isArray([1, 2]) // true

- **instanceof** – {} instanceof Object // true

- **Object.prototype.toString** – Object.prototype.toString.call(null)

// "[object Null]"`},{title:"📌 Особенности",text:`- **null** — это object – typeof null === "object" — историческая ошибка

- **NaN** — число – typeof NaN === "number"

- **undefined !== null** – undefined — нет значения, null — намеренно пусто`}]},{title:"📦 Объявление переменных: const, let, var",items:[{title:"const – Константа (не переназначается)",text:`\`\`\`js
const name = 'Roman'
// name = 'Другой' ❌ ошибка
\`\`\`

- Особенности:
- ✔ Нельзя переназначить (но можно менять содержимое объекта)
- ✔ Блочная область видимости ({} внутри if, for и т.д.)
- ✔ Не всплывает — доступна только после строки объявления
- ✘ Обязательно инициализировать сразу`},{title:"let – Переменная с блочной областью",text:`\`\`\`js
let counter = 0
counter++
\`\`\`

- Особенности:
- ✔ Можно переопределять значение
- ✔ Блочная область видимости
- ✔ Не всплывает — создаётся, но не инициализируется (TDZ)
- ✔ Используется чаще всего в циклах и логике`},{title:"var – Устаревшее объявление",text:`\`\`\`js
var age = 30
\`\`\`

- Особенности:
- ✘ Имеет **функциональную** область видимости (не блочную!)
- ✔ Всплывает — доступна до строки объявления (undefined)
- ✘ Может вести к багам — избегай использования
- ⚠ Используется только в старом коде`},{title:"Область видимости (Scope)",text:"```js\nfunction test() {\n  if (true) {\n    let x = 1\n    var y = 2\n  }\n  console.log(x) // ❌ ошибка\n  console.log(y) // ✅ 2 (var видна во всей функции)\n}\n```\n\n- Особенности:\n- ✔ `let` и `const` — видны только в блоке `{...}`\n- ✔ `var` — видна во всей функции\n- ✘ `var` игнорирует блочную структуру (например, if)"},{title:"Всплытие (Hoisting)",text:"```js\nconsole.log(a) // undefined (var всплыла)\nvar a = 5\n\nconsole.log(b) // ❌ ошибка (ReferenceError)\nlet b = 10\n```\n\n- Особенности:\n- ✔ `var` всплывает — переменная создаётся и инициализируется как `undefined`\n- ✔ `let` и `const` тоже всплывают, но попадают в TDZ (зона временной недоступности)\n- ✘ Обращение к `let/const` до строки объявления вызывает ошибку"}]},{title:"📌 Область видимости и всплытие (Hoisting)",items:[{title:"Global Scope – Глобальная область видимости",text:`\`\`\`js
const user = 'Roman'

function showUser() {
  console.log(user) // Доступен из глобальной области
}
\`\`\`

- ✔ Переменные доступны в любом месте кода (если определены в глобальной области)
- ✔ Глобальные переменные становятся свойствами window в браузере
- ✔ Хорошо подходит для конфигурации и глобальных констант
- ✘ Загрязняет глобальное пространство имён
- ✘ Риск переопределения переменных в других скриптах`},{title:"Function Scope – Область функции",text:`\`\`\`js
function greet() {
  const name = 'Roman'
  console.log(name)
}
console.log(name) // Ошибка: name не определён
\`\`\`

- ✔ Переменные доступны только внутри функции
- ✔ Используется для инкапсуляции
- ✔ Надёжно изолирует данные
- ✘ Не видно снаружи, даже если нужно`},{title:"Block Scope – Блочная область видимости (let, const)",text:`\`\`\`js
if (true) {
  let count = 5
}
console.log(count) // Ошибка: count не определён
\`\`\`

- ✔ Поддерживается с ES6 (let, const)
- ✔ Позволяет использовать одни и те же имена переменных в разных блоках
- ✔ Удобно при циклах и условиях
- ✘ var не поддерживает блоковую область`},{title:"Lexical Scope – Лексическая область",text:`\`\`\`js
function outer() {
  const x = 10
  function inner() {
    console.log(x) // Доступ к x из внешней функции
  }
  inner()
}
outer()
\`\`\`

- ✔ Вложенные функции имеют доступ к переменным из внешней области
- ✔ Работает "снаружи внутрь"
- ✔ Основа для замыканий (closures)
- ✘ Нет доступа к "внутренним" переменным снаружи`},{title:"Hoisting – Всплытие",text:`\`\`\`js
console.log(x) // undefined
var x = 10

// let и const не всплывают
console.log(y) // Ошибка
let y = 20
\`\`\`

- ✔ Переменные var и объявления функций "всплывают" вверх области
- ✔ Функции можно вызывать до объявления (если function declaration)
- ✘ let и const попадают во "временную мёртвую зону" (TDZ)
- ✘ Может вызывать путаницу и баги`},{title:"Closures – Замыкания",text:`\`\`\`js
function counter() {
  let count = 0
  return () => ++count
}
const inc = counter()
console.log(inc()) // 1
console.log(inc()) // 2
\`\`\`

- ✔ Функции «запоминают» лексическую область
- ✔ Позволяет создавать приватные переменные
- ✔ Используются в таймерах, обработчиках, функциональном стиле
- ✘ Возможна утечка памяти, если не очищать замыкания`}]},{title:"📘 Объявления функции",items:[{title:"Function Declaration – Обычное объявление функции",text:`\`\`\`js
function sayHi() {
  console.log("Hi")
}
\`\`\`

- Особенности:
- ✔ Поднимается (hoisting) — можно вызвать до определения
- ✔ Именованная функция — отображается в стеке ошибок
- ✔ this определяется в момент вызова
- ✔ Подходит для описания основной логики`},{title:"Function Expression – Функциональное выражение",text:`\`\`\`js
const sayHi = function() {
  console.log("Hi")
}
\`\`\`

- Особенности:
- ✘ Не поднимается — нельзя вызывать до объявления
- ✔ Может быть анонимной или с именем
- ✔ Можно передавать как аргумент
- ✔ this определяется в момент вызова`},{title:"Arrow Function – Стрелочная функция",text:`\`\`\`js
const sayHi = () => console.log("Hi")
\`\`\`

- Особенности:
- ✔ Короткий синтаксис
- ✘ Не имеет своего this, arguments, super
- ✘ Нельзя использовать как конструктор (через new)
- ✔ Идеальна для колбэков и простых выражений`},{title:"Method Definition – Метод объекта",text:`\`\`\`js
const obj = {
  sayHi() {
    console.log("Hi")
  }
}
\`\`\`

- Особенности:
- ✔ Краткий синтаксис
- ✔ this ссылается на объект
- ✘ Не поднимается
- ✔ Используется в объектах и классах`},{title:"IIFE – Самовызывающаяся функция",text:`\`\`\`js
(function() {
  console.log("Run once")
})()
\`\`\`

- Особенности:
- ✔ Выполняется сразу после объявления
- ✔ Часто используется для изоляции переменных
- ✔ Можно использовать и со стрелочной: (() => {})()
- ✘ Не используется повторно — без повторного объявления`}]},{title:"📦 Импорт / Экспорт (Import / Export)",items:[{title:"Named Export – Именованный экспорт",text:`\`\`\`js
// file: utils.js
export function sayHi() {
  console.log("Hi")
}
\`\`\`

- Особенности:
- ✔ Можно экспортировать несколько сущностей из одного файла
- ✔ Экспорт по имени — обязательно использовать то же имя при импорте
- ✔ Удобно для автодополнения и навигации
- ✘ При импорте обязательно указывать имя в \`{}\`
`},{title:"Named Import – Именованный импорт",text:`\`\`\`js
// file: main.js
import { sayHi } from './utils'

sayHi()
\`\`\`

- Особенности:
- ✔ Импорт строго по имени, указанному в export
- ✔ Удобен при работе с несколькими функциями/константами
- ✔ Можно делать алиас: \`import { sayHi as greet }\`
`},{title:"Default Export – Экспорт по умолчанию",text:`\`\`\`js
// file: utils.js
export default function sayHi() {
  console.log("Hi")
}
\`\`\`

- Особенности:
- ✔ Только один экспорт по умолчанию в файле
- ✔ При импорте можно задать любое имя
- ✔ Удобно для основного функционала модуля
`},{title:"Default Import – Импорт по умолчанию",text:`\`\`\`js
// file: main.js
import sayHi from './utils'

sayHi()
\`\`\`

- Особенности:
- ✔ Имя импорта можно выбрать произвольно
- ✔ Удобно, если в модуле один главный экспорт
- ✘ Сложнее отслеживать имя при рефакторинге
`},{title:"Mixed Export – Смешанный экспорт (default + named)",text:`\`\`\`js
// file: utils.js
export default function sayHi() {
  console.log("Hi")
}

export const version = '1.0.0'
\`\`\`

- Особенности:
- ✔ Один default + сколько угодно named
- ✔ Гибкость: главный экспорт + доп. функциональность
- ✘ Немного сложнее читаемость при импорте
`},{title:"Mixed Import – Смешанный импорт (default + named)",text:`\`\`\`js
// file: main.js
import sayHi, { version } from './utils'

sayHi()
console.log(version)
\`\`\`

- Особенности:
- ✔ Можно заимпортить всё в одной строке
- ✔ Default импорт идёт первым, потом named через \`{}\`
- ✘ Важно соблюдать порядок: default, затем named
`},{title:"Import All – Импорт всего содержимого",text:`\`\`\`js
// file: utils.js
export const sayHi = () => console.log("Hi")
export const sayBye = () => console.log("Bye")
\`\`\`

\`\`\`js
// file: main.js
import * as utils from './utils'

utils.sayHi()
utils.sayBye()
\`\`\`

- Особенности:
- ✔ Собирает все экспортируемые сущности в один объект
- ✔ Удобно, если нужно использовать всё как модуль
- ✘ Чуть более громоздкий синтаксис при использовании
`},{title:"Re-export – Переэкспорт",text:`\`\`\`js
// file: say.js
export const sayHi = () => console.log("Hi")

// file: index.js
export * from './say'
\`\`\`

- Особенности:
- ✔ Позволяет объединить модули в один вход
- ✔ Полезно в index.ts файлах или barrels
- ✘ Сложнее отследить, откуда что пришло
`}]},{title:"📌 Rest и Spread операторы в JavaScript",items:[{title:"Spread – Распаковка значений",text:"```js\nconst arr = [1, 2, 3]\nconst newArr = [...arr, 4, 5] // [1, 2, 3, 4, 5]\n\nconst obj = { name: 'Roman' }\nconst copy = { ...obj, age: 25 } // { name: 'Roman', age: 25 }\n```\n\n- ✔ Распаковывает массивы, объекты, строки и другие итерируемые значения\n- ✔ Упрощает копирование и объединение данных\n- ✔ Можно использовать в аргументах функций:\n  ```js\n  Math.max(...[1, 5, 3]) // 5\n  ```\n- ✔ Работает справа от знаков `=` `()` и в литералах `[]` `{}`\n- ✘ При копировании объектов не делает глубокую копию\n- ✘ В массивах важен порядок элементов"},{title:"Rest – Сбор оставшихся значений",text:`\`\`\`js
function greet(greeting, ...names) {
  console.log(greeting)  // 'Привет'
  console.log(names)     // ['Аня', 'Петя']
}

greet('Привет', 'Аня', 'Петя')

const user = { id: 1, name: 'Roman', role: 'admin' }
const { id, ...rest } = user

console.log(id)   // 1
console.log(rest) // { name: 'Roman', role: 'admin' }
\`\`\`

- ✔ Собирает «остатки» аргументов или свойств
- ✔ Полезен в деструктуризации и функциях с переменным числом параметров
- ✔ Работает только слева при деструктуризации или в параметрах функций
- ✘ Не может стоять не последним
- ✘ В объектах нельзя переименовывать через rest`}]},{title:"⏱ Async / Await – Асинхронность",items:[{title:"Async Function – Асинхронная функция",text:`\`\`\`js
async function fetchData() {
  return 'данные'
}
\`\`\`

- Особенности:
- ✔ Возвращает Promise
- ✔ Можно использовать await внутри
- ✔ Удобна для последовательных операций
- ✘ Ошибки нужно обрабатывать через try/catch`},{title:"Await – Ожидание результата",text:`\`\`\`js
async function fetchData() {
  const result = await getData()
  console.log(result)
}
\`\`\`

- Особенности:
- ✔ Приостанавливает выполнение до получения результата
- ✔ Заменяет .then() — делает код читаемым
- ✘ Работает только внутри async-функций`},{title:"Обработка ошибок через try/catch",text:`\`\`\`js
async function fetchData() {
  try {
    const data = await getData()
    console.log(data)
  } catch (error) {
    console.error('Ошибка:', error)
  }
}
\`\`\`

- Особенности:
- ✔ Позволяет ловить ошибки из промисов
- ✔ Повышает читаемость
- ✔ Можно комбинировать с условными блоками`},{title:"Async Arrow Function – Асинхронная стрелочная функция",text:`\`\`\`js
const fetchData = async () => {
  const result = await getData()
  console.log(result)
}
\`\`\`

- Особенности:
- ✔ Компактный синтаксис
- ✔ Отлично подходит для Vue setup() и событий
- ✔ Легко передавать как параметр`},{title:"Promise.all – Параллельные await-вызовы",text:`\`\`\`js
const [user, posts] = await Promise.all([
  fetchUser(),
  fetchPosts()
])
\`\`\`

- Особенности:
- ✔ Выполняет запросы параллельно
- ✔ Быстрее, чем по одному await
- ✘ Один сбой — и падают все`},{title:"Top-level await – вне функции",text:`\`\`\`js
const data = await fetchData()
\`\`\`

- Особенности:
- ✔ Работает в ES-модулях (.mjs или type: module)
- ✔ Поддерживается в Nuxt 3 (например, useAsyncData)
- ✘ Нельзя использовать в обычных .js-файлах без модуля`},{title:"🔄 Состояния промисов (Promise States)",items:[{title:"Pending – Ожидание",text:`\`\`\`js
const promise = new Promise(() => {
  // пока ничего не вызвано
})
\`\`\`

- Особенности:
- ✔ Начальное состояние промиса
- ✔ Операция ещё не завершена
- ✘ Ни resolve, ни reject ещё не были вызваны`},{title:"Fulfilled – Успешно выполнен",text:`\`\`\`js
const promise = Promise.resolve('Готово')

promise.then(result => console.log(result)) // 'Готово'
\`\`\`

- Особенности:
- ✔ Операция завершена успешно
- ✔ Результат доступен в .then()
- ✔ Переходит из pending → fulfilled`},{title:"Rejected – Отклонён",text:`\`\`\`js
const promise = Promise.reject('Ошибка')

promise.catch(error => console.error(error)) // 'Ошибка'
\`\`\`

- Особенности:
- ✔ Промис завершён с ошибкой
- ✔ Ошибка доступна в .catch()
- ✔ Переходит из pending → rejected`},{title:"Settled – Завершён (итоговое состояние)",text:`\`\`\`js
const promise1 = Promise.resolve()
const promise2 = Promise.reject()

Promise.allSettled([promise1, promise2])
  .then(results => console.log(results))
\`\`\`

- Особенности:
- ✔ Объединённое состояние: fulfilled или rejected
- ✔ Полезно, если важно завершение всех промисов
- ✔ Используется в Promise.allSettled()`}]}]},{title:"🔒 Замыкания (Closures)",items:[{title:"Что такое замыкание?",text:`\`\`\`js
function outer() {
  const name = 'Roman'
  return function inner() {
    console.log(name)
  }
}

const sayName = outer()
sayName() // 'Roman'
\`\`\`

- Особенности:
- ✔ Внутренняя функция "помнит" переменные внешней
- ✔ Замыкание создаётся при возврате функции
- ✔ Используется для скрытия данных и состояния`},{title:"Замыкание сохраняет доступ к переменным",text:`\`\`\`js
function counter() {
  let count = 0
  return () => ++count
}

const increment = counter()
console.log(increment()) // 1
console.log(increment()) // 2
\`\`\`

- Особенности:
- ✔ \`count\` сохраняется между вызовами
- ✔ Можно создавать приватные состояния
- ✔ Полезно в Nuxt/Vue для трекеров, генераторов`},{title:"Замыкание в цикле (ошибка с var)",text:"```js\nfor (var i = 0; i < 3; i++) {\n  setTimeout(() => console.log(i), 100)\n}\n// Вывод: 3, 3, 3 (а не 0, 1, 2)\n```\n\n- Особенности:\n- ✘ `var` не создаёт отдельную область видимости на каждой итерации\n- ✔ Решается через `let` или IIFE\n- ✔ Проблема замыкания на общую переменную"},{title:"Правильное замыкание в цикле (с let)",text:`\`\`\`js
for (let i = 0; i < 3; i++) {
  setTimeout(() => console.log(i), 100)
}
// Вывод: 0, 1, 2
\`\`\`

- Особенности:
- ✔ \`let\` создаёт новую переменную на каждой итерации
- ✔ Замыкание работает как ожидается
- ✔ Используется в асинхронных циклах и UI-логике`},{title:"Приватные данные через замыкание",text:`\`\`\`js
function createSecret() {
  const secret = '🔐'
  return {
    getSecret() {
      return secret
    }
  }
}

const safe = createSecret()
console.log(safe.getSecret()) // '🔐'
\`\`\`

- Особенности:
- ✔ Переменные недоступны извне напрямую
- ✔ Часто используется в фабриках, API, сервисах
- ✔ Помогает инкапсулировать данные`}]},{title:"🧱 Основы ООП в JavaScript",items:[{title:"Класс – шаблон объекта",text:`\`\`\`js
class User {
  // свойства и методы
}
\`\`\`

- ✔ Шаблон для создания объектов
- ✔ Удобен для структурирования логики
- ✔ Поддерживает наследование через extends`},{title:"Constructor – конструктор класса",text:`\`\`\`js
class User {
  constructor(name) {
    this.name = name
  }
}
\`\`\`

- ✔ Вызывается при создании new User(...)
- ✔ Инициализирует данные объекта
- ✔ this указывает на экземпляр`},{title:"Instance – экземпляр класса",text:'```js\nconst user = new User("Roman")\n```\n\n- ✔ Реальный объект, созданный по шаблону класса\n- ✔ Получает все свойства и методы\n- ✔ Может вызываться как user.method()'},{title:"Расширение класса – extends",text:`\`\`\`js
class Admin extends User {
  constructor(name, role) {
    super(name)
    this.role = role
  }
}
\`\`\`

- ✔ Наследует свойства и методы от родителя
- ✔ Можно дописывать или переопределять методы`},{title:"super – вызов родительского конструктора",text:`\`\`\`js
class Admin extends User {
  constructor(name) {
    super(name)
  }
}
\`\`\`

- ✔ Вызывает constructor родителя
- ✔ Должен быть вызван до использования this
- ✔ Можно использовать для вызова методов родителя`},{title:"Методы класса",text:`\`\`\`js
class User {
  sayHi() {
    console.log(\`Привет, \${this.name}\`)
  }
}
\`\`\`

- ✔ this указывает на экземпляр
- ✔ Не поднимаются (hoisting ✘)
- ✔ Можно переопределить при наследовании`},{title:"Статические методы – static",text:`\`\`\`js
class MathUtils {
  static double(n) {
    return n * 2
  }
}

MathUtils.double(4) // 8
\`\`\`

- ✔ Вызываются без создания экземпляра
- ✘ Не имеют доступа к this экземпляра
- ✔ Удобны для вспомогательных функций`},{title:"Приватные поля – #",text:`\`\`\`js
class Bank {
  #balance = 0

  getBalance() {
    return this.#balance
  }
}
\`\`\`

- ✔ Скрывают данные от внешнего доступа
- ✘ Не читаются напрямую: obj.#balance ✘ ошибка
- ✔ Удобны для инкапсуляции`},{title:"Геттер – доступ как к свойству",text:`\`\`\`js
class Product {
  constructor(price) {
    this._price = price
  }

  get price() {
    return this._price + "₽"
  }
}
\`\`\`

- ✔ Обращение как к свойству: product.price
- ✔ Удобен для форматирования и логики "на чтение"`},{title:"Сеттер – установка значения как в свойство",text:`\`\`\`js
class Product {
  set price(value) {
    this._price = value
  }
}
\`\`\`

- ✔ Установка как свойства: product.price = 100
- ✔ Удобен для логики "на запись" и валидации`}]},{title:"⚙️ Методы (String / Number / JSON / Boolean)",items:[{title:"🧵 Методы строк - String",items:[{title:"slice – Вырезать часть строки",text:"```js\nconst str = 'Hello world'\nstr.slice(0, 5) // 'Hello'\n```\n- ✔ Не изменяет исходную строку  \n- ✔ Удобен для получения подстроки  \n- ✘ Индексы могут запутать"},{title:"substring – Альтернативный срез",text:"```js\nconst str = 'Hello world'\nstr.substring(0, 5) // 'Hello'\n```\n- ✔ Аналог slice, но не поддерживает отрицательные индексы  \n- ✔ Удобен для базовых срезов"},{title:"indexOf – Поиск позиции",text:"```js\nconst str = 'Hello world'\nstr.indexOf('world') // 6\n```\n- ✔ Возвращает индекс первого совпадения  \n- ✔ -1, если не найдено"},{title:"includes – Проверка наличия подстроки",text:"```js\nconst str = 'Hello world'\nstr.includes('world') // true\n```\n- ✔ Возвращает true/false  \n- ✔ Удобен для проверки"},{title:"replace – Замена части строки",text:"```js\nconst str = 'Hello world'\nstr.replace('world', 'Vue') // 'Hello Vue'\n```\n- ✔ Возвращает новую строку  \n- ✔ Меняет только первое вхождение (если без флага g)"},{title:"toLowerCase / toUpperCase – Изменение регистра",text:"```js\nconst str = 'Hello'\nstr.toLowerCase() // 'hello'\nstr.toUpperCase() // 'HELLO'\n```\n- ✔ Не меняют исходную строку  \n- ✔ Удобны для нормализации"},{title:"trim – Удаление пробелов",text:"```js\nconst str = '  hello  '\nstr.trim() // 'hello'\n```\n- ✔ Удаляет пробелы с начала и конца"},{title:"split – Разделение строки",text:"```js\nconst str = 'a,b,c'\nstr.split(',') // ['a', 'b', 'c']\n```\n- ✔ Преобразует строку в массив по разделителю"},{title:"charAt – Получить символ по индексу",text:"```js\nconst str = 'Hello'\nstr.charAt(1) // 'e'\n```\n- ✔ Возвращает символ строки по индексу"},{title:"Редко используемые методы",items:[{title:"startsWith – Проверка начала строки",text:"```js\nconst str = 'Hello world'\nstr.startsWith('Hello') // true\n```\n- ✔ Проверяет, начинается ли строка с подстроки"},{title:"endsWith – Проверка окончания строки",text:"```js\nconst str = 'Hello world'\nstr.endsWith('world') // true\n```\n- ✔ Проверяет, заканчивается ли строка подстрокой"},{title:"repeat – Повторение строки",text:"```js\nconst str = 'ha'\nstr.repeat(3) // 'hahaha'\n```\n- ✔ Повторяет строку заданное количество раз"},{title:"padStart – Дополнение слева",text:"```js\nconst str = '5'\nstr.padStart(3, '0') // '005'\n```\n- ✔ Добавляет символы в начало строки до нужной длины"},{title:"padEnd – Дополнение справа",text:"```js\nconst str = '5'\nstr.padEnd(3, '0') // '500'\n```\n- ✔ Добавляет символы в конец строки до нужной длины"},{title:"match – Поиск по регулярному выражению",text:"```js\nconst str = 'abc123'\nstr.match(/[0-9]+/) // ['123']\n```\n- ✔ Возвращает совпадения по регулярному выражению"},{title:"search – Поиск индекса по регулярному выражению",text:"```js\nconst str = 'abc123'\nstr.search(/[0-9]+/) // 3\n```\n- ✔ Возвращает индекс первого совпадения"},{title:"localeCompare – Сравнение строк с учётом локали",text:"```js\nconst str1 = 'a'\nconst str2 = 'b'\nstr1.localeCompare(str2) // -1\n```\n- ✔ Используется для сортировки с учётом локали"}]}]},{title:"🔢 Методы чисел - Number",items:[{title:"toFixed – Формат числа с фиксированной точностью",text:"```js\nconst num = 3.14159\nnum.toFixed(2) // '3.14'\n```\n- ✔ Возвращает строку  \n- ✔ Удобен для форматирования"},{title:"toString – Преобразование в строку",text:"```js\nconst num = 255\nnum.toString(16) // 'ff'\n```\n- ✔ Позволяет указать систему счисления"},{title:"parseInt – Парсинг целого числа из строки",text:"```js\nparseInt('123px') // 123\n```\n- ✔ Игнорирует символы после числа  \n- ✔ Второй аргумент — основание системы счисления"},{title:"parseFloat – Парсинг числа с плавающей точкой",text:"```js\nparseFloat('3.14abc') // 3.14\n```\n- ✔ Аналогично parseInt для дробных чисел"},{title:"isNaN – Проверка, не является ли значение NaN",text:"```js\nisNaN('hello') // true\nisNaN(123) // false\n```\n- ✔ Проверяет, является ли значение нечислом"},{title:"Number.isFinite – Проверка конечности числа",text:"```js\nNumber.isFinite(123) // true\nNumber.isFinite(Infinity) // false\n```\n- ✔ Более надежная проверка, чем глобальная isFinite"},{title:"Number.isInteger – Проверка целого числа",text:"```js\nNumber.isInteger(123) // true\nNumber.isInteger(3.14) // false\n```\n- ✔ Проверяет, что число — целое"},{title:"Редко используемые методы",items:[{title:"Number.isNaN – Надёжная проверка NaN",text:"```js\nNumber.isNaN(NaN) // true\nNumber.isNaN('abc') // false\n```\n- ✔ Отличается от глобального isNaN, проверяет только NaN"},{title:"toPrecision – Формат числа с указанной точностью",text:"```js\nconst num = 3.14159\nnum.toPrecision(3) // '3.14'\n```\n- ✔ Возвращает строку с числом в нужной точности"},{title:"Math.round / Math.floor / Math.ceil – Округление",text:`\`\`\`js
Math.round(3.5) // 4      // Округляет до ближайшего целого числа (0.5 и выше вверх)
Math.round(3.4) // 3

Math.floor(3.9) // 3      // Округляет вниз до ближайшего целого (в меньшую сторону)

Math.ceil(3.1)  // 4      // Округляет вверх до ближайшего целого (в большую сторону)
\`\`\`
- ✔ Math.round: округляет до ближайшего целого числа  
- ✔ Math.floor: округляет вниз, всегда к меньшему целому  
- ✔ Math.ceil: округляет вверх, всегда к большему целому`},{title:"Math.random – Случайное число",text:"```js\nMath.random() // 0.123456789 (пример)\n```\n- ✔ Генерирует случайное число от 0 до 1"},{title:"Math.max / Math.min – Максимум и минимум",text:"```js\nMath.max(1, 5, 3) // 5\nMath.min(1, 5, 3) // 1\n```\n- ✔ Быстро находят максимальное или минимальное значение"}]}]},{title:"🧩 Методы JSON",items:[{title:"JSON.stringify – Преобразование объекта в JSON строку",text:`\`\`\`js
const obj = { a: 1, b: 2 }
JSON.stringify(obj) // '{"a":1,"b":2}'
\`\`\`
- ✔ Используется для отправки данных на сервер  
- ✔ Сериализация объектов`},{title:"JSON.parse – Преобразование JSON строки в объект",text:'```js\nconst json = \'{"a":1,"b":2}\'\nJSON.parse(json) // { a: 1, b: 2 }\n```\n- ✔ Десериализация строк'}]},{title:"⚡️ Булевые методы - Boolean",items:[{title:"Boolean – Преобразование в логическое значение",text:'```js\nBoolean(0) // false\nBoolean("text") // true\n```\n- ✔ Удобен для явного преобразования'},{title:"!! (Двойное отрицание)",text:'```js\n!!0 // false\n!!"text" // true\n```\n- ✔ Быстрый способ преобразовать в Boolean'}]},{title:"typeof – Определение типа",text:"```js\ntypeof 123 // 'number'\ntypeof 'abc' // 'string'\ntypeof {} // 'object'\n```\n- ✔ Быстрая проверка типа значения"},{title:"eval – Выполнение строки как кода (не рекомендуется)",text:"```js\neval('2 + 2') // 4\n```\n- ⚠️ Опасно, может привести к уязвимостям"}]}],[fe.Objects]:[{title:"📊 Методы объекта",items:[{title:"Object.keys – Получение ключей объекта",text:`\`\`\`js
const obj = { a: 1, b: 2 }
const keys = Object.keys(obj) // ['a', 'b']
\`\`\`

- ✔ Возвращает массив строк с ключами объекта  
- ✔ Удобен для перебора ключей  
- ✘ Не включает символы или неперечисляемые свойства

- ✅ Не мутирует объект
`},{title:"Object.values – Получение значений объекта",text:`\`\`\`js
const obj = { a: 1, b: 2 }
const values = Object.values(obj) // [1, 2]
\`\`\`

- ✔ Возвращает массив значений объекта  
- ✔ Удобен для перебора значений  
- ✘ Не возвращает ключи

- ✅ Не мутирует объект
`},{title:"Object.entries – Получение пар [ключ, значение]",text:`\`\`\`js
const obj = { a: 1, b: 2 }
const entries = Object.entries(obj) // [['a', 1], ['b', 2]]
\`\`\`

- ✔ Возвращает массив массивов с парами ключ-значение  
- ✔ Удобен для перебора и деструктуризации  
- ✘ Не включает неперечисляемые свойства

- ✅ Не мутирует объект
`},{title:"Object.assign – Копирование свойств объекта",text:`\`\`\`js
const target = { a: 1 }
const source = { b: 2 }
Object.assign(target, source) // { a: 1, b: 2 }
\`\`\`

- ✔ Копирует свойства из одного или нескольких объектов в целевой  
- ✔ Используется для слияния объектов  
- ✘ Мутирует первый (целевой) объект

- ✅ Быстрое слияние объектов
- ❌ Мутирует целевой объект
`},{title:"Object.freeze – Заморозка объекта",text:`\`\`\`js
const obj = { a: 1 }
Object.freeze(obj)
obj.a = 2 // не изменится
\`\`\`

- ✔ Делает объект неизменяемым (поверхностно)  
- ✔ Защищает от изменений свойств  
- ✘ Не предотвращает изменения вложенных объектов

- ✅ Защищает от мутаций
- ⚠️ Поверхностная заморозка`},{title:"Object.seal – Запечатывание объекта",text:`\`\`\`js
const obj = { a: 1 }
Object.seal(obj)
obj.a = 2 // изменится
obj.b = 3 // добавление невозможно
\`\`\`

- ✔ Запрещает добавление и удаление свойств  
- ✔ Позволяет изменять существующие свойства  
- ✘ Не защищает от изменения вложенных объектов

- ✅ Запрещает добавлять/удалять свойства
- ⚠️ Позволяет изменять значения существующих`},{title:"Object.hasOwn – Проверка наличия ключа",text:`\`\`\`js
const obj = { a: 1 }
Object.hasOwn(obj, 'a') // true
\`\`\`

- ✔ Проверяет, есть ли свойство именно у объекта, а не в прототипе  
- ✔ Альтернатива obj.hasOwnProperty

- ✅ Не мутирует объект
`},{title:"Object.getOwnPropertyDescriptor – Получение дескриптора свойства",text:`\`\`\`js
const obj = { a: 1 }
const desc = Object.getOwnPropertyDescriptor(obj, 'a')
\`\`\`

- ✔ Возвращает описание свойства (value, writable, enumerable, configurable)  
- ✔ Позволяет узнать, можно ли менять или удалять свойство

- ✅ Не мутирует объект
`},{title:"Object.getPrototypeOf – Получение прототипа объекта",text:`\`\`\`js
const proto = Object.getPrototypeOf({})
\`\`\`

- ✔ Возвращает прототип объекта  
- ✔ Позволяет работать с цепочкой прототипов

- ✅ Не мутирует объект
`},{title:"Object.is – Проверка строгого равенства",text:`\`\`\`js
Object.is(NaN, NaN) // true
Object.is(0, -0) // false
\`\`\`

- ✔ Точное сравнение значений (лучше, чем === в некоторых случаях)  
- ✔ Работает корректно с NaN и -0

- ✅ Не мутирует данные
`},{title:"Object.fromEntries – Создание объекта из пар [ключ, значение]",text:`\`\`\`js
const entries = [['a', 1], ['b', 2]]
const obj = Object.fromEntries(entries) // { a: 1, b: 2 }
\`\`\`

- ✔ Создает объект из массива пар ключ-значение  
- ✔ Удобен для обратной трансформации после Object.entries

- ✅ Не мутирует входные данные
`},{title:"Object.defineProperty – Определение свойства с дескриптором",text:`\`\`\`js
const obj = {}
Object.defineProperty(obj, 'a', {
  value: 1,
  writable: false
})
\`\`\`

- ✔ Позволяет создать или изменить свойство с настройками (writable, enumerable и т.д.)  
- ✔ Контролирует доступ к свойствам

- ✅ Управляет свойствами объекта
- ❌ Мутирует объект
`},{title:"Object.defineProperties – Определение нескольких свойств",text:`\`\`\`js
const obj = {}
Object.defineProperties(obj, {
  a: { value: 1, writable: true },
  b: { value: 2 }
})
\`\`\`

- ✔ Определяет несколько свойств одновременно  
- ✔ Позволяет контролировать свойства

- ✅ Удобно для настройки объекта
- ❌ Мутирует объект
`}]}],[fe.Arrays]:[{title:"📊 Методы массива",items:[{title:"push – Добавление в конец",text:`\`\`\`js
const arr = [1, 2]
arr.push(3) // [1, 2, 3]
\`\`\`

- ✔ Добавляет один или несколько элементов в конец  
- ✔ Возвращает новую длину  
- ✘ Не возвращает сам массив (для чейнинга не удобен)

- ✅ Быстрый способ добавить элемент в конец
- ❌ Мутирует исходный массив`},{title:"map – Преобразование значений",text:`\`\`\`js
const nums = [1, 2, 3]
const doubled = nums.map(n => n * 2)
\`\`\`

- ✔ Не изменяет исходный массив  
- ✔ Возвращает новый массив той же длины  
- ✘ Не пропускает пустые ячейки

- ✅ Не мутирует массив — возвращает новый
`},{title:"filter – Фильтрация по условию",text:`\`\`\`js
const nums = [1, 2, 3, 4]
const even = nums.filter(n => n % 2 === 0)
\`\`\`

- ✔ Убирает ненужные элементы по условию  
- ✔ Возвращает новый массив  
- ✘ Перебирает весь массив (даже если найдено нужное)

- ✅ Возвращает новый массив без мутаций
`},{title:"forEach – Перебор элементов",text:`\`\`\`js
const arr = [1, 2, 3]
arr.forEach(n => console.log(n))
\`\`\`

- ✔ Удобен для побочных эффектов (лог, вызов функций)  
- ✔ Понятен для чтения  
- ✘ Нельзя прервать (нет return/break)  
- ✘ Не возвращает результат

- ✅ Не мутирует массив
`},{title:"includes – Проверка значения",text:`\`\`\`js
const arr = [1, 2, 3]
arr.includes(2) // true
\`\`\`

- ✔ Удобен для простой проверки наличия  
- ✔ Работает по значению (===)  
- ✘ Не поддерживает условие (в отличие от some)

- ✅ Не мутирует массив
`},{title:"find – Первый элемент по условию",text:`\`\`\`js
const users = [{ name: 'Roman' }, { name: 'Anna' }]
const result = users.find(u => u.name === 'Anna')
\`\`\`

- ✔ Возвращает первый найденный объект  
- ✔ Удобен при работе с массивом объектов  
- ✘ Не возвращает все совпадения  
- ✘ Возвращает undefined, если не найдено

- ✅ Не мутирует массив
`},{title:"some – Хоть один удовлетворяет",text:`\`\`\`js
const arr = [1, 2, 3]
arr.some(n => n > 2) // true
\`\`\`

- ✔ Проверяет хотя бы одно совпадение  
- ✔ Быстро останавливается при первом true  
- ✘ Не возвращает сам элемент

- ✅ Не мутирует массив
`},{title:"every – Все соответствуют",text:`\`\`\`js
const arr = [1, 2, 3]
arr.every(n => n > 0) // true
\`\`\`

- ✔ Проверяет, удовлетворяют ли все элементы  
- ✔ Удобен для валидации  
- ✘ Останавливается при первом несоответствии

- ✅ Не мутирует массив
`},{title:"pop – Удаление с конца",text:`\`\`\`js
const arr = [1, 2, 3]
arr.pop() // 3
\`\`\`

- ✔ Удаляет последний элемент и возвращает его  
- ✔ Удобен для стека  
- ✘ Изменяет оригинальный массив

- ✅ Удобен для стека (LIFO)
- ❌ Мутирует исходный массив`},{title:"shift – Удаление с начала",text:`\`\`\`js
const arr = [1, 2, 3]
arr.shift() // 1
\`\`\`

- ✔ Удаляет первый элемент и возвращает его  
- ✔ Используется в очередях  
- ✘ Изменяет массив  
- ✘ Медленнее из-за сдвига остальных элементов

- ✅ Удобен для очередей (FIFO)
- ❌ Мутирует исходный массив
- ⚠️ Может быть менее производительным на больших массивах`},{title:"unshift – Добавление в начало",text:`\`\`\`js
const arr = [2, 3]
arr.unshift(1) // [1, 2, 3]
\`\`\`

- ✔ Добавляет элементы в начало  
- ✔ Возвращает новую длину  
- ✘ Изменяет массив  
- ✘ Менее производителен на больших массивах

- ✅ Быстро добавляет в начало
- ❌ Мутирует исходный массив
- ⚠️ Менее эффективен на больших массивах`},{title:"reduce – Агрегация значений",text:`\`\`\`js
const arr = [1, 2, 3, 4]
arr.reduce((acc, val) => acc + val, 0) // 10
\`\`\`

- ✔ Собирает значение из массива (сумма, объект, строка)  
- ✔ Универсален для продвинутой логики  
- ✘ Требует понимания принципа работы аккумулятора

- ✅ Не мутирует массив
`},{title:"slice – Копия части массива",text:`\`\`\`js
const arr = [1, 2, 3, 4]
arr.slice(1, 3) // [2, 3]
\`\`\`

- ✔ Не изменяет оригинальный массив  
- ✔ Удобен для создания копий и пагинации  
- ✘ Поверхностное копирование — вложенные объекты остаются ссылками

- ✅ Не мутирует массив
- ⚠️ Копия поверхностная`},{title:"sort – Сортировка",text:`\`\`\`js
const arr = [3, 1, 2]
arr.sort((a, b) => a - b) // [1, 2, 3]
\`\`\`

- ✔ Работает с числами и строками  
- ✔ Позволяет задать свою функцию сортировки  
- ✘ Изменяет оригинальный массив  
- ✘ Без функции сортирует как строки (по Unicode)

- ✅ Гибкий способ сортировки
- ❌ Мутирует исходный массив
- ⚠️ По умолчанию сортирует как строки`},{title:"splice – Вырезание / вставка",text:`\`\`\`js
const arr = [1, 2, 3, 4]
arr.splice(1, 2) // [2, 3]
\`\`\`

- ✔ Удаление и вставка в массив  
- ✔ Гибкий по параметрам  
- ✘ Изменяет исходный массив  
- ✘ Менее читаем, чем slice/filter

- ✅ Гибкий для удаления/вставки
- ❌ Мутирует исходный массив
- ⚠️ Сложнее для понимания`},{title:"concat – Объединение массивов",text:`\`\`\`js
const arr1 = [1, 2]
const arr2 = [3, 4]
arr1.concat(arr2) // [1, 2, 3, 4]
\`\`\`

- ✔ Не изменяет оригиналы  
- ✔ Удобен для объединения нескольких массивов  
- ✘ Предпочтение отдаётся спред-синтаксису: [...arr1, ...arr2]

- ✅ Не мутирует исходные массивы
`},{title:"flat – Разворачивание вложенности",text:`\`\`\`js
const arr = [1, [2, [3]]]
arr.flat(2) // [1, 2, 3]
\`\`\`

- ✔ Удаляет вложенность на заданную глубину  
- ✔ Удобен для массивов из массивов  
- ✘ Не работает с объектами  
- ✘ Поддерживается не во всех старых браузерах

- ✅ Не мутирует массив
- ⚠️ Поддержка браузеров`},{title:"reverse – Переворот массива",text:`\`\`\`js
const arr = [1, 2, 3]
arr.reverse() // [3, 2, 1]
\`\`\`

- ✔ Быстро разворачивает массив  
- ✔ Прост в использовании  
- ✘ Изменяет оригинальный массив

- ✅ Быстрый способ инвертировать порядок
- ❌ Мутирует исходный массив`},{title:"findIndex – Индекс по условию",text:`\`\`\`js
const arr = [10, 20, 30]
arr.findIndex(n => n === 20) // 1
\`\`\`

- ✔ Находит индекс по условию  
- ✔ Удобен для удаления по позиции  
- ✘ Возвращает -1, если ничего не найдено

- ✅ Не мутирует массив
- ✅ Возвращает индекс или -1`},{title:"join – Склейка в строку",text:`\`\`\`js
const arr = ['a', 'b', 'c']
arr.join('-') // 'a-b-c'
\`\`\`

- ✔ Объединяет все элементы в строку  
- ✔ Позволяет задать разделитель  
- ✘ Все элементы преобразуются в строки

- ✅ Не мутирует массив
- ✅ Удобен для создания строк`}]}],[fe.Markup]:[{title:"🧱 Основные HTML-теги",items:[{title:"Структура документа и разметка",text:`\`\`\`html
<!DOCTYPE html>      <!-- Определяет тип документа -->
<html>               <!-- Корневой тег документа -->
<head>               <!-- Мета-информация о документе -->
<body>               <!-- Содержимое страницы -->

<header>             <!-- Шапка сайта -->
<main>               <!-- Основное содержимое -->
<footer>             <!-- Подвал сайта -->
<section>            <!-- Раздел контента -->
<article>            <!-- Самостоятельная статья -->
<aside>              <!-- Боковая панель -->
<nav>                <!-- Навигационное меню -->
<template>           <!-- Шаблон для отложенного рендера -->
\`\`\`

- Используются для логичной и семантической структуры страницы`},{title:"Текст и заголовки",text:`\`\`\`html
<h1> до <h6>         <!-- Заголовки от самого главного до самого мелкого -->
<p>                  <!-- Абзац -->
<span>               <!-- Встроенный контейнер -->
<strong>             <!-- Важный текст (жирный) -->
<em>                 <!-- Акцентированный текст (курсив) -->
<br>                 <!-- Перенос строки -->
<hr>                 <!-- Горизонтальная линия -->
<blockquote>         <!-- Цитата -->
<pre>               <!-- Предварительно отформатированный текст -->
<code>               <!-- Блок кода -->
<small>              <!-- Мелкий текст -->
<mark>               <!-- Выделенный текст -->
<abbr>               <!-- Аббревиатура -->
<time>               <!-- Дата и/или время -->
\`\`\`

- Используются для форматирования текста и заголовков`},{title:"Ссылки и изображения",text:`\`\`\`html
<a href="#">         <!-- Гиперссылка -->
<img src="img.jpg">  <!-- Изображение -->
<picture>            <!-- Альтернативные версии изображения -->
<figure>             <!-- Контейнер для изображения с подписью -->
<figcaption>         <!-- Подпись к изображению -->
\`\`\`

- Отвечают за навигацию и отображение медиа-контента`},{title:"Списки",text:`\`\`\`html
<ul>                 <!-- Неупорядоченный список -->
<ol>                 <!-- Упорядоченный список -->
<li>                 <!-- Элемент списка -->
<dl>                 <!-- Список определений -->
<dt>                 <!-- Термин -->
<dd>                 <!-- Определение -->
\`\`\`

- Для создания разных типов списков`},{title:"Формы и ввод данных",text:`\`\`\`html
<form>               <!-- Форма -->
<input type="text">  <!-- Поле ввода -->
<textarea>           <!-- Многострочное поле -->
<select>             <!-- Выпадающий список -->
<option>             <!-- Элемент списка -->
<button>             <!-- Кнопка -->
<label>              <!-- Подпись к элементу формы -->
<fieldset>           <!-- Группировка полей формы -->
<legend>             <!-- Заголовок группы -->
\`\`\`

- Используются для создания пользовательского ввода`},{title:"Таблицы",text:`\`\`\`html
<table>              <!-- Таблица -->
<thead>              <!-- Заголовок таблицы -->
<tbody>              <!-- Тело таблицы -->
<tfoot>              <!-- Подвал таблицы -->
<tr>                 <!-- Строка таблицы -->
<th>                 <!-- Ячейка заголовка -->
<td>                 <!-- Ячейка данных -->
<caption>            <!-- Название таблицы -->
<colgroup> <col>     <!-- Группировка и стилизация столбцов -->
\`\`\`

- Для отображения табличных данных`},{title:"SEO и мета-теги (в <head>)",text:`\`\`\`html
<title>              <!-- Название страницы -->
<meta charset="UTF-8">       <!-- Кодировка -->
<meta name="description">    <!-- Описание страницы -->
<meta name="viewport">       <!-- Адаптивность -->
<link rel="stylesheet">      <!-- Подключение CSS -->
<script src="main.js">       <!-- Подключение JS -->
\`\`\`

- Используются для SEO, адаптивности и подключения ресурсов`},{title:"Медиа и интерактивность",text:`\`\`\`html
<video>              <!-- Видеоплеер -->
<audio>              <!-- Аудиоплеер -->
<source>             <!-- Источник медиафайла -->
<iframe>             <!-- Встраиваемый фрейм -->
<canvas>             <!-- Графика через JS -->
<svg>                <!-- Векторная графика -->
<embed>              <!-- Встраивание внешнего ресурса -->
<object>             <!-- Встраивание объектов (например, PDF) -->
\`\`\`

- Для встраивания мультимедиа и динамики`},{title:"Служебные и редко используемые",text:`\`\`\`html
<details>            <!-- Раскрывающийся блок -->
<summary>            <!-- Заголовок details -->
<dialog>             <!-- Модальное окно -->
<noscript>           <!-- Содержимое при отключенном JS -->
<slot>               <!-- Слот для Web Components -->
<custom-element>     <!-- Пользовательские теги -->
\`\`\`

- Используются в специфических случаях или для современных API`}]},{title:"⚙️ Основные атрибуты HTML-тегов",items:[{title:"Глобальные атрибуты",text:`\`\`\`html
id="idName"                <!-- Уникальный идентификатор элемента -->
class="className"          <!-- Классы для стилизации и селекторов -->
style="color: red"         <!-- Встроенные стили -->
title="tooltip text"       <!-- Всплывающая подсказка при наведении -->
hidden                     <!-- Скрывает элемент -->
data-*                     <!-- Пользовательские data-атрибуты -->
tabindex="0"               <!-- Порядок фокусировки -->
lang="en"                  <!-- Язык содержимого элемента -->
\`\`\`

- Работают почти со всеми тегами для базовой настройки и управления`},{title:"Атрибуты ссылок <a>",text:`\`\`\`html
href="https://example.com"   <!-- URL перехода по ссылке -->
target="_blank"              <!-- Открыть ссылку в новой вкладке -->
rel="noopener noreferrer"    <!-- Безопасность при target="_blank" -->
download                    <!-- Предлагает скачать файл вместо открытия -->
\`\`\`

- Управляют навигацией и поведением ссылок`},{title:"Атрибуты изображений <img> и медиа",text:`\`\`\`html
src="image.jpg"              <!-- Путь к изображению или медиа -->
alt="Описание"               <!-- Текст, если изображение не загрузилось -->
width="300"                  <!-- Ширина изображения в пикселях -->
height="200"                 <!-- Высота изображения в пикселях -->
loading="lazy"               <!-- Ленивое (отложенное) загрузка -->
\`\`\`

- Основные для управления картинками и медиафайлами`},{title:"Атрибуты форм и ввода",text:`\`\`\`html
type="text"                  <!-- Тип поля ввода (text, email, password, checkbox и др.) -->
name="username"              <!-- Имя поля для отправки на сервер -->
value="default"              <!-- Значение поля -->
placeholder="Введите текст"  <!-- Подсказка внутри поля -->
required                    <!-- Обязательное для заполнения -->
disabled                    <!-- Заблокировано для ввода -->
readonly                    <!-- Только для чтения -->
checked                     <!-- Для чекбоксов и радио: выбран -->
maxlength="10"              <!-- Максимальное количество символов -->
min="1" max="10"            <!-- Минимальное и максимальное значение для числовых полей -->
step="1"                   <!-- Шаг изменения значения -->
multiple                   <!-- Разрешить множественный выбор (например, для select или файлов) -->
autocomplete="off"         <!-- Отключить автозаполнение -->
form="formId"              <!-- Связать поле с формой по id -->
\`\`\`

- Для настройки поведения форм и полей ввода`},{title:"Атрибуты мультимедиа (<video>, <audio>)",text:`\`\`\`html
src="video.mp4"              <!-- Путь к файлу -->
controls                    <!-- Отображать стандартные элементы управления -->
autoplay                   <!-- Автоматически запускать при загрузке -->
loop                       <!-- Повторять воспроизведение -->
muted                      <!-- Без звука -->
preload="auto"             <!-- Предзагрузка медиа -->
poster="poster.jpg"        <!-- Постер (картинка) до воспроизведения видео -->
\`\`\`

- Управляют воспроизведением аудио и видео`},{title:"Атрибуты табличных элементов",text:`\`\`\`html
colspan="2"                 <!-- Объединяет ячейки по горизонтали -->
rowspan="3"                 <!-- Объединяет ячейки по вертикали -->
headers="id1 id2"           <!-- Связь ячейки с заголовками для доступности -->
scope="col"                 <!-- Определяет область заголовка (col, row) -->
\`\`\`

- Для управления разметкой таблиц`},{title:"Атрибуты iframe",text:`\`\`\`html
src="https://example.com"    <!-- URL встраиваемого контента -->
width="600" height="400"     <!-- Размеры iframe -->
frameborder="0"              <!-- Убирает рамку -->
allowfullscreen              <!-- Разрешает полноэкранный режим -->
loading="lazy"               <!-- Ленивое загружение -->
sandbox                     <!-- Ограничения безопасности (напр. sandbox="allow-scripts") -->
referrerpolicy="no-referrer"<!-- Политика отправки Referer -->
\`\`\`

- Настраивают встраиваемые фреймы`},{title:"Другие полезные атрибуты",text:`\`\`\`html
aria-*                      <!-- Атрибуты для доступности (ARIA) -->
role="button"               <!-- Роль элемента для скринридеров -->
contenteditable="true"      <!-- Делает элемент редактируемым -->
draggable="true"            <!-- Позволяет перетаскивать элемент -->
hidden                      <!-- Скрывает элемент -->
tabindex="0"                <!-- Управляет порядком фокуса -->
download                    <!-- Для ссылок: предлагает скачать файл -->
\`\`\`

- Для расширенных возможностей и улучшения UX и доступности`}]}],[fe.Pug]:[{title:"📑 Pug",text:`Классы и id **div.red#box** – <div id="box" class="red"></div>  

-

Классы несколько **button.btn.btn-primary** – <button class="btn btn-primary"></button>  

-

Атрибуты статические **img(src="/logo.png" alt="Лого")** – <img src="/logo.png" alt="Лого">  

-

Атрибуты динамические **img(:src="imageUrl" :alt="imageAlt")** – <img :src="imageUrl" :alt="imageAlt">  

-

Самозакрывающийся input **input(type="text")** – <input type="text">  

-

Самозакрывающийся img **img(:src="avatar")** – <img :src="avatar">  

-

Интерполяция **h2 {{ title }}** – <h2>{{ title }}</h2>  

-

Интерполяция объекта **p {{ user.name }}** – <p>{{ user.name }}</p>  

-

Условие v-if **div(v-if="isVisible")** – <div v-if="isVisible"></div>  

-

Условие v-else-if **div(v-else-if="hasError")** – <div v-else-if="hasError"></div>  

-

Условие v-else **div(v-else)** – <div v-else></div>  

-

Цикл v-for **li(v-for="(item, i) in items" :key="i") {{ item }}** – <li v-for="(item, i) in items" :key="i">{{ item }}</li>  

-

Привязка класса **div(:class="dynamicClass")** – <div :class="dynamicClass"></div>  

-

Событие **button(@click="handleClick")** – <button @click="handleClick"></button>  

-

Условный класс **div(:class="{ active: isActive }")** – <div :class="{ active: isActive }"></div>  

-

Инлайн-стили **div(:style="{ color: textColor }")** – <div :style="{ color: textColor }"></div>  

-

v-model input **input(v-model="username")** – <input v-model="username">  

-

v-model textarea **textarea(v-model="message")** – <textarea v-model="message"></textarea>  

-

Компонент с пропсом **MyButton(label="Кнопка")** – <MyButton label="Кнопка" />  

-

Компонент с пропсом и событием **MyCard(:title="cardTitle" @close="closeCard")** – <MyCard :title="cardTitle" @close="closeCard" />  

-

Слот header **template(#header) h1 Заголовок** – <template #header><h1>Заголовок</h1></template>  

-

Слот footer **template(#footer) p Подвал** – <template #footer><p>Подвал</p></template>  

-

Условный рендер v-show **div(v-show="isVisible")** – <div v-show="isVisible"></div>`}],[fe.Styles]:[],[fe.Browser]:[{title:"🌐 Основные методы браузерного API (DOM, события, запросы и др.)",items:[{title:"document.querySelector – Поиск первого элемента по селектору",text:"```js\nconst button = document.querySelector('.btn-primary')\n```\n\n- ✔ Возвращает первый элемент, соответствующий CSS-селектору  \n- ✔ Очень удобен для быстрого поиска элемента на странице  \n- ✘ Если элемент не найден, возвращает null"},{title:"document.querySelectorAll – Поиск всех элементов по селектору",text:"```js\nconst items = document.querySelectorAll('.list-item')\n```\n\n- ✔ Возвращает статический NodeList всех подходящих элементов  \n- ✔ Можно перебрать циклом или forEach  \n- ✘ NodeList не является полноценным массивом"},{title:"document.getElementById – Поиск элемента по id",text:"```js\nconst header = document.getElementById('main-header')\n```\n\n- ✔ Быстрый доступ к элементу по id  \n- ✔ Возвращает один элемент или null, если не найден"},{title:"element.addEventListener – Добавление обработчика события",text:`\`\`\`js
button.addEventListener('click', () => {
  alert('Clicked!')
})
\`\`\`

- ✔ Позволяет слушать события на элементе  
- ✔ Можно добавить несколько обработчиков на одно событие  
- ✔ Поддерживает разные типы событий (click, input, scroll и др.)`},{title:"element.removeEventListener – Удаление обработчика события",text:`\`\`\`js
function onClick() {
  console.log('Clicked')
}
button.addEventListener('click', onClick)
button.removeEventListener('click', onClick)
\`\`\`

- ✔ Удаляет ранее добавленный обработчик  
- ✔ Требует ссылку на ту же функцию, что была добавлена`},{title:"document.createElement – Создание нового элемента",text:`\`\`\`js
const div = document.createElement('div')
div.textContent = 'Hello'
document.body.appendChild(div)
\`\`\`

- ✔ Создает новый элемент DOM  
- ✔ Можно потом вставить его в документ  
- ✔ Используется для динамического создания контента`},{title:"element.appendChild – Добавление дочернего элемента",text:`\`\`\`js
const ul = document.querySelector('ul')
const li = document.createElement('li')
li.textContent = 'Item'
ul.appendChild(li)
\`\`\`

- ✔ Вставляет элемент в конец списка дочерних элементов  
- ✔ Перемещает элемент, если он уже в DOM`},{title:"element.remove – Удаление элемента из DOM",text:"```js\nconst banner = document.querySelector('.banner')\nbanner.remove()\n```\n\n- ✔ Удаляет элемент из DOM  \n- ✔ Не требует указания родителя"},{title:"element.classList – Работа с классами элемента",text:`\`\`\`js
const btn = document.querySelector('button')
btn.classList.add('active')
btn.classList.remove('disabled')
btn.classList.toggle('hidden')
\`\`\`

- ✔ Добавляет, удаляет, переключает классы  
- ✔ Удобнее, чем манипуляции со строкой className`},{title:"element.setAttribute – Установка атрибута элемента",text:"```js\nconst link = document.querySelector('a')\nlink.setAttribute('href', 'https://example.com')\n```\n\n- ✔ Задает или изменяет атрибут элемента  \n- ✔ Можно использовать для data-атрибутов и стандартных"},{title:"element.getAttribute – Получение значения атрибута",text:"```js\nconst href = link.getAttribute('href')\n```\n\n- ✔ Читает значение атрибута элемента  \n- ✔ Возвращает null, если атрибут отсутствует"},{title:"fetch – Современный API для HTTP-запросов",text:`\`\`\`js
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log(data))
\`\`\`

- ✔ Асинхронные HTTP-запросы (GET, POST и др.)  
- ✔ Поддерживает промисы и async/await  
- ✔ Замена устаревшему XMLHttpRequest`},{title:"setTimeout – Выполнение функции с задержкой",text:"```js\nsetTimeout(() => {\n  console.log('Привет через 1 секунду')\n}, 1000)\n```\n\n- ✔ Запускает функцию один раз после указанной задержки в мс"},{title:"setInterval – Повторное выполнение с интервалом",text:`\`\`\`js
const id = setInterval(() => {
  console.log('Каждую секунду')
}, 1000)

clearInterval(id) // остановить
\`\`\`

- ✔ Запускает функцию периодически через указанный интервал`},{title:"localStorage.setItem – Запись данных в локальное хранилище",text:"```js\nlocalStorage.setItem('token', '12345')\n```\n\n- ✔ Хранит данные в браузере без срока годности  \n- ✔ Доступно по ключу в виде строки"},{title:"localStorage.getItem – Чтение данных из локального хранилища",text:"```js\nconst token = localStorage.getItem('token')\n```\n\n- ✔ Получает данные по ключу  \n- ✔ Возвращает null, если ключ отсутствует"},{title:"sessionStorage.setItem – Запись данных сессии",text:"```js\nsessionStorage.setItem('user', 'Roman')\n```\n\n- ✔ Хранит данные до закрытия вкладки браузера  \n- ✔ По ключу в виде строки"},{title:"sessionStorage.getItem – Чтение данных сессии",text:"```js\nconst user = sessionStorage.getItem('user')\n```\n\n- ✔ Получает данные по ключу из сессии  \n- ✔ Возвращает null, если нет"},{title:"navigator.geolocation.getCurrentPosition – Получение текущих координат",text:`\`\`\`js
navigator.geolocation.getCurrentPosition(pos => {
  console.log(pos.coords.latitude, pos.coords.longitude)
})
\`\`\`

- ✔ Запрашивает разрешение пользователя  
- ✔ Возвращает координаты GPS
- ✘ Может не сработать без HTTPS`},{title:"window.alert – Показ модального окна с сообщением",text:"```js\nalert('Привет!')\n```\n\n- ✔ Быстро показать сообщение пользователю  \n- ✔ Блокирует поток до закрытия"},{title:"window.confirm – Запрос подтверждения",text:"```js\nconst result = confirm('Удалить?')\nif (result) { /* да */ }\n```\n\n- ✔ Показывает окно с кнопками OK и Cancel  \n- ✔ Возвращает true/false"},{title:"window.prompt – Запрос ввода текста",text:"```js\nconst name = prompt('Введите имя')\n```\n\n- ✔ Открывает окно с полем ввода  \n- ✔ Возвращает строку или null при отмене"},{title:"element.scrollIntoView – Прокрутка к элементу",text:"```js\ndocument.querySelector('#footer').scrollIntoView({ behavior: 'smooth' })\n```\n\n- ✔ Прокручивает страницу к указанному элементу  \n- ✔ Можно сделать плавную прокрутку"},{title:"element.closest – Поиск ближайшего родителя по селектору",text:"```js\nconst parentForm = button.closest('form')\n```\n\n- ✔ Идет вверх по DOM, ищет первый подходящий элемент  \n- ✔ Удобен для делегирования событий"}]},{title:"🌐 HTTP(S) протокол – Основы клиент-серверного общения",items:[{title:"Методы HTTP – Что делает клиент",text:`\`\`\`js
fetch('/api/user', { method: 'GET' })
fetch('/api/user', { method: 'POST', body: JSON.stringify(data) })
\`\`\`

- ✔ **GET** – Получение данных (idempotent, без тела)
- ✔ **POST** – Отправка новых данных (форма, JSON)
- ✔ **PUT** – Полное обновление ресурса
- ✔ **PATCH** – Частичное обновление ресурса
- ✔ **DELETE** – Удаление ресурса
- ✔ **HEAD** – Только заголовки (без тела ответа)
- ✔ **OPTIONS** – Узнать, какие методы поддерживает сервер
- ✔ Все методы используют URL и заголовки, но по-разному обрабатываются сервером`},{title:"Коды ответа – Что отвечает сервер",text:`\`\`\`txt
200 OK
404 Not Found
500 Internal Server Error
\`\`\`

- ✅ **1xx** – Информационные (редко используются)
- ✅ **2xx** – Успешно:
  - 200 OK – всё хорошо
  - 201 Created – создан новый ресурс
  - 204 No Content – без тела ответа
- ⚠️ **3xx** – Перенаправление:
  - 301 Moved Permanently
  - 302 Found
  - 304 Not Modified – используй кэш
- ❌ **4xx** – Ошибка клиента:
  - 400 Bad Request
  - 401 Unauthorized
  - 403 Forbidden
  - 404 Not Found
- 🔥 **5xx** – Ошибка сервера:
  - 500 Internal Server Error
  - 502 Bad Gateway
  - 503 Service Unavailable`},{title:"Заголовки HTTP – Метаинформация запроса и ответа",text:`\`\`\`js
fetch('/api/data', {
  headers: {
    'Content-Type': 'application/json',
    'Authorization': 'Bearer token'
  }
})
\`\`\`

- ✅ **Content-Type** – Тип содержимого (например, application/json)
- ✅ **Accept** – Какие форматы клиент может принять
- ✅ **Authorization** – Токены авторизации (Bearer, Basic)
- ✅ **Cache-Control** – Управление кешем (no-cache, max-age)
- ✅ **User-Agent** – Инфо о браузере
- ✅ **Referer** – Откуда пришёл запрос
- ✅ **Cookie / Set-Cookie** – Работа с куками
- ✅ **Content-Length** – Длина тела запроса/ответа
- ✅ **CORS-заголовки**:
  - Access-Control-Allow-Origin
  - Access-Control-Allow-Methods`},{title:"Структура HTTP-запроса",text:`\`\`\`txt
GET /page HTTP/1.1
Host: example.com
Accept: text/html
\`\`\`

- 🔹 Стартовая строка: метод, путь и версия
- 🔹 Заголовки: ключ-значение, описывают запрос
- 🔹 Тело: только у методов POST/PUT/PATCH
- 📌 Протокол — текстовый и читаемый`},{title:"HTTPS – Защищённый HTTP",text:`- 🔐 Использует TLS/SSL для шифрования данных
- 🔐 Гарантирует конфиденциальность и целостность
- 🔐 Необходим для:
  - Авторизации и передачи чувствительных данных
  - PWA, Service Workers, CacheStorage
  - Современных API (например, geolocation)
- 🔐 Все современные сайты используют HTTPS (HTTP считается небезопасным)`},{title:"CORS – Кросс-доменные запросы",text:"```js\nfetch('https://api.example.com', {\n  mode: 'cors'\n})\n```\n\n- 🌍 Браузеры по умолчанию блокируют запросы на другие домены\n- 🛑 Без нужных заголовков сервер выдаст ошибку CORS\n- ✅ Сервер должен ответить:\n  ```http\n  Access-Control-Allow-Origin: *\n  ```\n- ✅ Для защищённых методов (POST, PUT...) может быть preflight-запрос с методом **OPTIONS**"}]},{title:"🌍 Типы рендеринга веб-приложений",items:[{title:"SPA – Single Page Application",text:`\`\`\`js
// Пример: Vue 3 без SSR
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
\`\`\`

- ✔ Всё рендерится на клиенте (в браузере)
- ✔ Быстрая разработка, минимальные настройки
- ✔ Отлично подходит для интерфейсов, дашбордов
- ✔ Легко хостить на GitHub Pages, Netlify и т.п.
- ✘ Плохой SEO (пустой HTML до загрузки JS)
- ✘ Первая загрузка может быть медленной (весь JS загружается сразу)`},{title:"SSR – Server-Side Rendering",text:`\`\`\`js
// Пример: Nuxt 3 с SSR (по умолчанию)
export default defineNuxtConfig({
  ssr: true
})
\`\`\`

- ✔ HTML создается на сервере при каждом запросе
- ✔ Отлично подходит для SEO и социальных сетей (OG теги и т.п.)
- ✔ Быстрая первая загрузка, особенно на слабых устройствах
- ✔ Динамические данные всегда актуальны
- ✘ Требуется сервер (Node.js или хост с поддержкой SSR)
- ✘ Сложнее в настройке и деплое
- ✘ Выше нагрузка на сервер (рендер каждого запроса)`},{title:"SSG – Static Site Generation",text:`\`\`\`js
// Пример: Nuxt 3 в режиме SSG
export default defineNuxtConfig({
  ssr: true,
  nitro: {
    preset: 'static'
  }
})
\`\`\`

- ✔ Все страницы генерируются заранее (на этапе сборки)
- ✔ Можно хостить как обычный HTML (GitHub Pages, Netlify)
- ✔ Высокая скорость загрузки, отлично для SEO
- ✔ Нет нагрузки на сервер — всё работает как статика
- ✘ Данные не обновляются без новой сборки
- ✘ Неудобно для часто обновляемых страниц`},{title:"CSR – Client-Side Rendering (то же что SPA)",text:`\`\`\`js
// Пример: Vue SPA (CSR)
import { createApp } from 'vue'
import App from './App.vue'

createApp(App).mount('#app')
\`\`\`

- ✔ Подходит для сложных интерактивных интерфейсов
- ✔ Вся логика и рендеринг в браузере
- ✔ Легко интегрировать с API
- ✘ Плохо для SEO (нужно пререндерить отдельно)
- ✘ Зависимость от JS — без него сайт не работает`},{title:"ISR – Incremental Static Regeneration",text:`\`\`\`js
// Только в Next.js (в Vue пока отсутствует)
\`\`\`

- ✔ Гибрид между SSG и SSR
- ✔ Страница сначала генерируется как статика, потом обновляется сервером в фоне
- ✔ Не требует полной пересборки сайта
- ✔ Хорош для сайтов с контентом, который редко меняется
- ✘ Не реализован во Vue/Nuxt (только в Next.js)`},{title:"Prerendering – Предрендеринг",text:`\`\`\`js
// Vite + плагин vite-plugin-ssr или prerender-spa-plugin для Vue CLI
\`\`\`

- ✔ Генерация HTML-файлов для ограниченного набора маршрутов
- ✔ Улучшает SEO для SPA
- ✔ Можно использовать без SSR и Nuxt
- ✘ Подходит только для сайтов с фиксированными страницами
- ✘ Нельзя рендерить динамический контент`},{title:"MPA – Multi Page Application",text:`\`\`\`js
// Используется редко с Vue
\`\`\`

- ✔ Каждая страница — отдельный HTML с полным перезагрузом
- ✔ Можно использовать без фреймворков
- ✔ Подходит для традиционных сайтов
- ✘ Нет общих данных между страницами
- ✘ Нет динамического обновления — всё через reload`}]},{title:"🌐 Параметры в адресной строке (URL query)",items:[{title:"Что такое параметры в URL",text:`\`\`\`js
https://example.com/page?user=roman&id=42
// ?user=roman        — параметр "user" со значением "roman"
// &id=42             — параметр "id" со значением "42"
// ?                  — начало query-параметров
// &                  — разделяет параметры
\`\`\`

- Используются для передачи данных через адресную строку`},{title:"Чтение параметров в JavaScript",text:`\`\`\`js
const params = new URLSearchParams(window.location.search)

params.get('user')    // "roman"
params.get('id')      // "42"
params.has('id')      // true
\`\`\`

- Позволяют получать параметры без ручного парсинга`},{title:"Изменение параметров без перезагрузки",text:"```js\nconst params = new URLSearchParams(window.location.search)\nparams.set('tab', 'info')\n\nconst newUrl = `${window.location.pathname}?${params.toString()}`\nwindow.history.pushState({}, '', newUrl)\n```\n\n- Обновляет URL без перезагрузки страницы"},{title:"Работа с параметрами в Nuxt 3",text:`\`\`\`js
const route = useRoute()
route.query.page         // Получение параметра ?page=...

const router = useRouter()
router.push({ query: { page: 2 } })  // Обновление параметра
\`\`\`

- Подходит для фильтров, табов, пагинации и т.д.`}]},{title:"🪟 Глобальный объект window",items:[{title:"Что такое window",text:`\`\`\`js
console.log(window)
// Глобальный объект браузера
\`\`\`

- ✔ Доступен везде в браузере (глобально)
- ✔ Автоматически включает в себя все глобальные функции и переменные
- ✔ Отражает саму вкладку браузера (окно)
- ✔ Можно не писать window: \`window.alert()\` ⇔ \`alert()\`
- ✔ Используется для доступа к DOM, location, navigator, history и т.д.
- ✘ Не существует в средах вне браузера (например, в Node.js)
- ✘ Может быть причиной конфликтов при большом количестве глобальных переменных`},{title:"Часто используемые свойства и методы",text:`\`\`\`js
window.alert("Привет!")                             // Показывает всплывающее сообщение
window.confirm("Вы уверены?")                       // Показывает диалог с выбором Да/Нет
window.prompt("Введите имя:")                       // Показывает поле для ввода
              
window.location.href                                // Получить текущий URL
window.location.reload()                            // Перезагрузить страницу
window.location.assign("https://...")               // Перейти на другую страницу
              
window.innerWidth                                   // Ширина окна просмотра
window.innerHeight                                  // Высота окна просмотра
              
window.addEventListener("resize", fn)               // Назначить обработчик события
              
window.setTimeout(fn, 1000)                         // Выполнить через 1 секунду
window.setInterval(fn, 1000)                        // Выполнять каждые 1 секунду
              
window.localStorage                                 // Доступ к localStorage
window.sessionStorage                               // Доступ к sessionStorage
window.indexedDB                                    // Доступ к IndexedDB
              
window.document                                     // Доступ к DOM-структуре страницы
window.navigator                                    // Информация о браузере и платформе
window.history.back()                               // Вернуться на предыдущую страницу
window.console.log("Лог")                           // Вывод в консоль

alert(), confirm(), prompt()                        // Методы взаимодействия с пользователем
location.href, location.reload(), location.assign() // Управление URL и переходами
innerWidth, innerHeight                             // Размеры окна
addEventListener()                                  // Назначение обработчиков событий
setTimeout(), setInterval()                         // Таймеры
localStorage, sessionStorage, indexedDB             // Доступ к хранилищам
document                                            // Доступ к DOM-структуре страницы
navigator                                           // Информация о браузере и системе
history.back(), history.forward()                   // Навигация по истории
console.log(), console.warn(), console.error()      // Методы отладки
\`\`\`

- ✘ Содержит множество свойств и методов, сложно охватить сразу
- ✘ Некоторые свойства ведут себя по-разному в разных контекстах (например, в iFrame)`}]},{title:"📦 Хранение данных в браузере",items:[{title:"Cookies – Куки",text:`\`\`\`js
document.cookie = "user=Roman; max-age=3600"
console.log(document.cookie)
\`\`\`

- ✔ Хранятся в виде строк (key=value)
- ✔ Автоматически отправляются серверу при каждом HTTP-запросе
- ✔ Можно задать срок действия (expires или max-age)
- ✔ Подходят для аутентификации, tracking
- ✘ Ограничены по размеру (~4KB)
- ✘ Доступны всему сайту (если не указать path)
- ✘ Не поддерживают объекты — нужно сериализовать вручную`},{title:"LocalStorage – Долговременное хранилище",text:`\`\`\`js
localStorage.setItem("user", "Roman")
const user = localStorage.getItem("user")
localStorage.removeItem("user")
\`\`\`

- ✔ Сохраняет данные между перезагрузками и закрытием браузера
- ✔ До 5–10MB объема (в зависимости от браузера)
- ✔ Не отправляется серверу автоматически
- ✔ Хорошо подходит для настроек пользователя, кеша UI
- ✘ Всё хранится как строки (нужен JSON.stringify)
- ✘ Доступно только из одного домена`},{title:"SessionStorage – Хранилище сессии",text:`\`\`\`js
sessionStorage.setItem("step", "1")
const step = sessionStorage.getItem("step")
sessionStorage.clear()
\`\`\`

- ✔ Живёт только в пределах одной вкладки (session/tab)
- ✔ Поведение как у localStorage, но срок — до конца сессии
- ✔ Удобно для хранения временных данных
- ✘ Исчезает после закрытия вкладки`},{title:"IndexedDB – База данных в браузере",text:`\`\`\`js
const request = indexedDB.open("myDB", 1)

request.onupgradeneeded = () => {
  const db = request.result
  db.createObjectStore("users", { keyPath: "id" })
}
\`\`\`

- ✔ Хранение структурированных объектов (ключ-значение)
- ✔ Асинхронная и мощная альтернатива localStorage
- ✔ До сотен мегабайт и больше
- ✔ Подходит для офлайн-приложений и кэширования больших данных
- ✘ Сложнее API (работает через события)`},{title:"CacheStorage – Кэш страниц и файлов (Service Worker)",text:`\`\`\`js
const cache = await caches.open("v1")
await cache.put("/page", new Response("Hello"))
\`\`\`

- ✔ Работает с Service Worker для офлайн-доступа
- ✔ Кэширует HTML, CSS, JS, изображения
- ✔ Доступ через API: caches.match(), caches.put()
- ✔ Ускоряет повторные загрузки страниц
- ✔ Используется в PWA-приложениях
- ✘ Требует HTTPS (или localhost)`},{title:"navigator.storage – Проверка и управление",text:"```js\nconst estimate = await navigator.storage.estimate()\nconsole.log(estimate.quota, estimate.usage)\n```\n\n- ✔ Дает информацию о доступном и используемом месте\n- ✔ Работает в современных браузерах\n- ✔ Полезно для контроля объема данных\n- ✔ Можно запросить постоянное хранилище:\n  ```js\n  navigator.storage.persist()\n  ```\n- ✔ Удобно при использовании IndexedDB и других API"}]},{title:"🔄 Event Loop",items:[{title:"Что такое Event Loop",text:`\`\`\`js
// Event Loop — это механизм в JavaScript,
// который позволяет выполнять асинхронный код
// и не блокировать главный поток выполнения
\`\`\`

- Особенности:
- ✔ Однопоточный цикл, который проверяет очередь событий
- ✔ Позволяет обрабатывать callback'и, обещания и таймеры
- ✔ Работает с Call Stack и Task Queue (очередь задач)
- ✔ Главный механизм для асинхронного выполнения`},{title:"Call Stack и Task Queue",text:`\`\`\`js
// Call Stack — стек вызовов функций
// Task Queue — очередь задач (callbacks, таймеры и др.)
\`\`\`

- Особенности:
- ✔ Когда стек пуст, Event Loop берет задачи из очереди и выполняет их
- ✔ Позволяет JS не блокироваться, несмотря на синхронность
- ✔ Основной принцип: выполнять задачи по очереди, не прерывая текущие вызовы`},{title:"Microtasks и Macrotasks",text:`\`\`\`js
// Microtasks — промисы, process.nextTick (Node.js)
// Macrotasks — setTimeout, setInterval, I/O операции
\`\`\`

- Особенности:
- ✔ Microtasks выполняются сразу после текущей задачи и перед Macrotasks
- ✔ Это позволяет создавать эффективные асинхронные цепочки
- ✔ Правильное понимание порядка выполнения важно для оптимизации`},{title:"Порядок выполнения задач",text:`\`\`\`js
console.log('1')

setTimeout(() => {
  console.log('setTimeout')
}, 0)

Promise.resolve().then(() => {
  console.log('promise')
})

console.log('2')
\`\`\`

// Что выведется в консоли:
1
2
promise
setTimeout

- ✔ Сначала выполняется синхронный код (1, 2)
- ✔ Затем — микрозадачи (promise)
- ✔ Потом — макрозадачи (setTimeout)`},{title:"Как браузер помогает Event Loop",text:`- ✔ Web API (браузера) выполняет "внешние" задачи: таймеры, сетевые запросы, слушатели событий
- ✔ Когда задача готова — браузер отправляет callback в очередь (Task Queue или Microtask Queue)
- ✔ JS сам ничего не "ждёт" — он просто ставит задачу в очередь

Пример:
\`\`\`js
setTimeout(() => {
  console.log('✅ Готово через 1 секунду')
}, 1000)
\`\`\`
- Пока идёт таймер, JS продолжает работать дальше`},{title:"Где Event Loop важен во фронтенде",text:`- ✔ Таймеры: setTimeout, setInterval
- ✔ Работа с fetch / API / промисами
- ✔ Рендеринг и перерисовка DOM
- ✔ Обработка пользовательских событий (click, input)
- ✔ Анимации и requestAnimationFrame
- ✔ Избежание "заморозки" интерфейса (например, при больших циклах или JSON.parse)

Важно:
- Никогда не блокируй главный поток (например, через долгие циклы)
- Всегда разделяй тяжёлую работу на части или используй Web Workers`}]},{title:"🐞 Методы объекта console",items:[{title:"Самые часто используемые методы",text:`\`\`\`js
console.log("message")           // Вывод обычного сообщения
console.info("info")             // Информационное сообщение (обычно синий цвет)
console.warn("warning")          // Предупреждение (желтый цвет)
console.error("error")           // Ошибка (красный цвет)
console.debug("debug")           // Отладочная информация (может быть скрыта по умолчанию)
console.clear()                  // Очистка консоли
\`\`\`

- Используются для вывода и отладки кода`},{title:"Методы для группировки и форматирования",text:`\`\`\`js
console.group("group name")            // Начинает новую группу логов
console.groupCollapsed("name")         // Группа свернута по умолчанию
console.groupEnd()                     // Заканчивает текущую группу

console.table([{a:1,b:2}, {a:3,b:4}])  // Выводит массив или объект в табличном виде

console.count("label")                 // Считает количество вызовов с меткой "label"
console.countReset("label")            // Сбрасывает счётчик для метки "label"
      
console.time("timer")                  // Запускает таймер с именем "timer"
console.timeLog("timer")               // Выводит текущее значение таймера
console.timeEnd("timer")               // Останавливает таймер и выводит результат
\`\`\`

- Позволяют структурировать вывод и измерять время`},{title:"Методы для отслеживания стека и трассировки",text:'```js\nconsole.trace("trace message")    // Выводит стек вызовов с сообщением\nconsole.assert(condition, "msg")  // Выводит сообщение если условие false\n```\n\n- Помогают отследить откуда вызван код и проверять условия'},{title:"Менее распространённые и дополнительные методы",text:`\`\`\`js
console.dir(obj)                // Выводит интерактивное дерево объекта
console.dirxml(node)            // Выводит XML-представление DOM-узла

console.profile("profile")      // Начинает запись профиля производительности
console.profileEnd("profile")   // Останавливает запись профиля

console.markTimeline("mark")    // Помечает событие в таймлайне (устаревший)

console.memory                  // Объект с информацией о памяти (только Chrome)
\`\`\`

- Дополнительные возможности для глубокого анализа и инспекции`}]}],[fe.Vue]:[{title:"🖖 Vue — директивы",text:`- **v-if** – Условный рендеринг элемента (если условие true — отрисовывается)
- **v-else-if** – Дополнительное условие для v-if (аналог else if)
- **v-else** – Блок, выполняющийся если все предыдущие v-if / v-else-if — false
- **v-show** – Показывает/скрывает элемент через display: none (не удаляет из DOM)
- **v-for** – Цикл по массиву или объекту (пример: v-for="(item, index) in items")
- **v-bind** – Привязывает значение к атрибуту (пример: :src="img")
- **:** – Сокращение для v-bind (пример: :href="link")
- **v-model** – Двусторонняя привязка данных (для input, select, textarea и компонентов)
- **v-on** – Обработка событий (пример: v-on:click="handleClick")
- **@** – Сокращение для v-on (пример: @click="handleClick")
- **v-slot** – Определяет слот и его имя в компоненте (пример: v-slot:header)
- **#** – Сокращение для v-slot (пример: #header)
- **v-pre** – Пропускает компиляцию внутри элемента (отображает как есть)
- **v-cloak** – Скрывает элемент до полной инициализации Vue (обычно с CSS)
- **v-once** – Рендерит элемент только один раз и больше не обновляет его`},{title:"⚙️ Vue — хуки жизненного цикла",items:[{title:"watch – Следит за изменением значения и выполняет реакцию",text:`\`\`\`js
const props = defineProps({ value: String })

watch(
  () => props.value,
  (newVal, oldVal) => {
    console.log('value изменился с', oldVal, 'на', newVal)
    // Реакция на изменение
  }
)
\`\`\``},{title:"onMounted – Выполняется один раз при монтировании компонента",text:"```js\nimport { onMounted } from 'vue'\n\nonMounted(() => {\n  console.log('Компонент смонтирован')\n})\n```"},{title:"onUnmounted – Срабатывает при уничтожении компонента (например, для очистки таймеров)",text:"```js\nimport { onUnmounted } from 'vue'\n\nonUnmounted(() => {\n  console.log('Компонент удалён')\n})\n```"},{title:"computed – Создаёт вычисляемое свойство с кэшированием. Автоматически обновляется при изменении зависимостей",text:`\`\`\`js
import { computed, ref } from 'vue'

const count = ref(0)
const doubleCount = computed(() => count.value * 2)

// doubleCount.value меняется автоматически при изменении count.value
\`\`\``},{title:"onBeforeMount – Вызывается перед монтированием компонента",text:"```js\nimport { onBeforeMount } from 'vue'\n\nonBeforeMount(() => {\n  console.log('Компонент скоро будет смонтирован')\n})\n```"},{title:"onUpdated – Вызывается после каждого обновления DOM компонента",text:"```js\nimport { onUpdated } from 'vue'\n\nonUpdated(() => {\n  console.log('Компонент обновился')\n})\n```"},{title:"onBeforeUnmount – Вызывается перед удалением компонента из DOM",text:"```js\nimport { onBeforeUnmount } from 'vue'\n\nonBeforeUnmount(() => {\n  console.log('Компонент будет удалён')\n})\n```"},{title:"onActivated – Вызывается, когда keep-alive компонент активируется",text:"```js\nimport { onActivated } from 'vue'\n\nonActivated(() => {\n  console.log('Компонент активирован')\n})\n```"},{title:"onDeactivated – Вызывается, когда keep-alive компонент деактивируется",text:"```js\nimport { onDeactivated } from 'vue'\n\nonDeactivated(() => {\n  console.log('Компонент деактивирован')\n})\n```"}]}],[fe.Nuxt]:[],[fe.TS]:[{title:"📑 TypeScript: Утилитарные типы",text:`Выбрать определённые ключи из типа **Pick<Type, Keys>** – выбираем только указанные ключи из Type  

-

Удалить ключи из типа **Omit<Type, Keys>** – исключаем указанные ключи из Type  

-

Сделать все свойства необязательными **Partial<Type>** – все свойства Type станут необязательными  

-

Сделать все свойства обязательными **Required<Type>** – все свойства Type станут обязательными  

-

Сделать все свойства только для чтения **Readonly<Type>** – все свойства Type нельзя будет изменять  

-

Объединение типов в ключи **Record<Keys, Type>** – создаёт объект, где ключи из Keys, а значения Type  

-

Исключить типы из объединения **Exclude<Type, Union>** – исключает типы из Type, которые есть в Union  

-

Выделить общий тип из объединения **Extract<Type, Union>** – оставляет только типы из Type, которые есть в Union  

-

Тип, который убирает null и undefined **NonNullable<Type>** – исключает null и undefined из Type  

-

Создать тип, который является параметрами функции **Parameters<Type>** – возвращает кортеж параметров функции Type  

-

Создать тип, который является возвращаемым значением функции **ReturnType<Type>** – возвращает тип результата функции Type  

-

Создать тип, который делает все свойства опциональными и оставляет только readonly **Readonly<Partial<Type>>** – комбинирует Partial и Readonly  

-

Тип, который делает все свойства nullable **Nullable<Type> = { [P in keyof Type]: Type[P] | null }** – все свойства могут быть null  

-

Тип, который оставляет только ключи с функциями **FunctionKeys<Type>** – создаёт тип с ключами, у которых значение функция  

-

Тип, который объединяет все типы объекта в один **ValueOf<Type>** – возвращает объединение всех значений типа Type  

-

Тип, который преобразует ключи объекта в строки **KeyOf<Type>** – возвращает объединение всех ключей Type  

-

Тип, который создаёт частичную запись с ключами и значениями **Partial<Record<Keys, Type>>** – комбинирует Partial и Record  

-

Тип, который делает свойства пересекающимися с другим типом **Intersection<A, B> = A & B** – объединяет A и B в один тип  

-

Тип, который делает свойства взаимно исключающимися **XOR<A, B>** – объекты могут быть либо A, либо B, но не оба сразу`},{title:"🔖 TypeScript: Интерфейсы",items:[{title:"Создание интерфейса",text:`\`\`\`ts
interface User {
  name: string
  age: number
}
\`\`\`

- ✔ Описывает структуру объекта или класса
- ✔ Используется для проверки типов на этапе компиляции
- ✔ Удобно для совместимости с классами`},{title:"Опциональные свойства",text:`\`\`\`ts
interface User {
  name: string
  age?: number
}
\`\`\`

- ✔ Свойство с ? может быть пропущено при создании объекта
- ✔ Упрощает работу с частично заполненными объектами`},{title:"Readonly свойства",text:`\`\`\`ts
interface User {
  readonly id: number
  name: string
}
\`\`\`

- ✔ Свойство нельзя изменить после создания объекта
- ✔ Помогает защитить данные от случайного изменения`},{title:"Расширение интерфейса (extends)",text:`\`\`\`ts
interface Person {
  name: string
}

interface Employee extends Person {
  salary: number
}
\`\`\`

- ✔ Позволяет наследовать свойства другого интерфейса
- ✔ Можно расширять несколько интерфейсов одновременно`},{title:"Методы в интерфейсе",text:`\`\`\`ts
interface User {
  name: string
  greet(message: string): void
}
\`\`\`

- ✔ Можно описывать методы объектов
- ✔ Типизация аргументов и возвращаемого значения`},{title:"Интерфейс для функции",text:`\`\`\`ts
interface Adder {
  (a: number, b: number): number
}

const add: Adder = (x, y) => x + y
\`\`\`

- ✔ Позволяет задавать тип функции
- ✔ Проверяет сигнатуру функции при присвоении`},{title:"Индексные сигнатуры",text:`\`\`\`ts
interface StringMap {
  [key: string]: string
}
\`\`\`

- ✔ Описывает объекты с динамическими ключами
- ✔ Все значения должны соответствовать указанному типу`},{title:"Использование с классами",text:`\`\`\`ts
interface User {
  name: string
  age: number
}

class Person implements User {
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}
\`\`\`

- ✔ Интерфейс задаёт "контракт" для класса
- ✔ Класс обязан реализовать все свойства и методы интерфейса`}]},{title:"🔖 TypeScript: Типы (type)",items:[{title:"Создание типа для объекта",text:`\`\`\`ts
type User = {
  name: string
  age: number
}
\`\`\`

- ✔ Описывает структуру объекта
- ✔ Используется для проверки типов на этапе компиляции`},{title:"Объединение типов (Union)",text:"```ts\ntype ID = string | number\n```\n\n- ✔ Позволяет переменной быть одним из нескольких типов\n- ✔ Часто используется для ограниченных наборов значений"},{title:"Пересечение типов (Intersection)",text:`\`\`\`ts
type Person = { name: string }
type Employee = { salary: number }
type Worker = Person & Employee
\`\`\`

- ✔ Объединяет несколько типов в один
- ✔ Новый тип содержит все свойства исходных типов`},{title:"Опциональные свойства",text:`\`\`\`ts
type User = {
  name: string
  age?: number
}
\`\`\`

- ✔ Свойство с ? может быть пропущено при создании объекта`},{title:"Readonly свойства",text:`\`\`\`ts
type User = {
  readonly id: number
  name: string
}
\`\`\`

- ✔ Свойство нельзя изменить после создания объекта`},{title:"Тип функции",text:`\`\`\`ts
type Adder = (a: number, b: number) => number

const add: Adder = (x, y) => x + y
\`\`\`

- ✔ Можно описывать сигнатуру функции
- ✔ Проверяет аргументы и возвращаемое значение`},{title:"Кортежи (Tuples)",text:"```ts\ntype Pair = [number, number]\n\nconst coords: Pair = [10, 20]\n```\n\n- ✔ Позволяет задавать фиксированный порядок и тип элементов массива"},{title:"Примитивы и литералы",text:"```ts\ntype Direction = 'up' | 'down' | 'left' | 'right'\n\nlet move: Direction = 'up'\n```\n\n- ✔ Можно ограничить набор допустимых строковых или числовых значений"}]},{title:"🔖 TypeScript: Дженерики (Generics)",items:[{title:"Что такое дженерики",text:`- Дженерики позволяют создавать **обобщённые типы**, которые работают с разными типами данных
- Они помогают **не дублировать код** и сохранять **типизацию**`},{title:"Синтаксис дженерика",text:`\`\`\`ts
function identity<T>(value: T): T {
  return value
}

const a = identity<number>(5)    // 5
const b = identity<string>("Hi") // "Hi"
\`\`\`

- ✔ T — это параметр типа (можно назвать как угодно)
- ✔ Функция возвращает тип, который совпадает с типом аргумента`},{title:"Дженерики с объектами",text:`\`\`\`ts
function wrap<T>(obj: T) {
  return { value: obj }
}

const wrapped = wrap({ name: "Alice" }) 
// wrapped имеет тип { value: { name: string } }
\`\`\`

- ✔ Можно использовать для любых объектов
- ✔ Тип остаётся строго проверяемым`},{title:"Дженерики с массивами",text:`\`\`\`ts
function firstItem<T>(arr: T[]): T | undefined {
  return arr[0]
}

const num = firstItem([1, 2, 3])   // number
const str = firstItem(["a", "b"])  // string
\`\`\`

- ✔ Функция возвращает элемент того же типа, что и массив`},{title:"Ограничения на дженерики",text:`\`\`\`ts
function getLength<T extends { length: number }>(item: T) {
  return item.length
}

getLength("Hello")       // 5
getLength([1, 2, 3])     // 3
// getLength(123) ❌ число не имеет свойства length
\`\`\`

- ✔ extends позволяет ограничить тип
- ✔ Удобно, когда нужен объект с определёнными свойствами`},{title:"Когда использовать дженерики",text:`- Когда функция или компонент должен работать с **разными типами данных**
- Чтобы избежать повторного написания одинаковых функций для разных типов
- Для строгой **типизации** без потери гибкости`}]},{title:"🔖 TypeScript: Типизация API-запросов",items:[{title:"Типизация fetch",text:`\`\`\`ts
interface User {
  id: number
  name: string
}

async function getUser(userId: number): Promise<User> {
  const res = await fetch(\`/api/users/\${userId}\`)
  const data: User = await res.json()
  return data
}

// Использование
getUser(1).then(user => console.log(user.name))
\`\`\`

- ✔ Указываем интерфейс для данных, которые вернёт API
- ✔ Функция возвращает Promise<T>, где T — ожидаемый тип данных`},{title:"Типизация fetch с массивом объектов",text:`\`\`\`ts
interface Post {
  id: number
  title: string
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('/api/posts')
  const data: Post[] = await res.json()
  return data
}

// Получаем массив постов с правильной типизацией
getPosts().then(posts => console.log(posts[0].title))
\`\`\`

- ✔ Массив объектов типизируем через Post[]`},{title:"Типизация axios",text:`\`\`\`ts
import axios from 'axios'

interface User {
  id: number
  name: string
}

async function getUser(userId: number): Promise<User> {
  const res = await axios.get<User>(\`/api/users/\${userId}\`)
  return res.data
}

// Использование
getUser(1).then(user => console.log(user.name))
\`\`\`

- ✔ В axios можно указать тип прямо в get<User>()
- ✔ res.data будет типизировано автоматически`},{title:"Типизация axios с массивом",text:`\`\`\`ts
interface Post {
  id: number
  title: string
}

async function getPosts(): Promise<Post[]> {
  const res = await axios.get<Post[]>('/api/posts')
  return res.data
}

// Получаем массив постов с правильной типизацией
getPosts().then(posts => console.log(posts[0].title))
\`\`\`

- ✔ Работает так же, как с fetch, но с axios удобнее — тип у данных берётся сразу`},{title:"Советы по типизации API",text:`- Используй интерфейсы для структуры ответа от сервера
- Всегда указывай Promise<Тип> в async функциях
- Для массивов добавляй []
- С axios тип указывай через axios.get<Тип>(...)`}]},{title:"🔖 TypeScript: as, as const, any, unknown и базовые типы",text:`Использование "as const" **const colors = ["red", "green"] as const** – тип массива будет readonly ["red", "green"], а не string[]

-

Приведение типов "as" **const value = "text" as string** – используется, чтобы явно указать тип переменной

-

Тип any **let data: any** – переменная может быть любым типом, отключает проверку TypeScript, использовать только если нет другого выхода

-

Тип unknown **let value: unknown** – безопасный аналог any, нельзя использовать без проверки типа, чтобы работать с value нужно явно привести тип

-

Примеры проверки unknown
**if (typeof value === "string") { const str: string = value }** – безопасная работа после проверки

-

Константы с конкретными литеральными типами
**const direction = "up" as const** – direction имеет тип "up", а не string

-

Массивы с as const
**const arr = [1, 2, 3] as const** – элементы массива readonly и конкретных значений, нельзя менять

-

Объекты с as const
**const obj = { name: "Alice", age: 25 } as const** – все свойства становятся readonly и литеральными типами

-

Приведение типов через as
**const num = someValue as number** – говорим TypeScript: доверяй, это число

-

Смешивание as const и generics
**function wrap<T>(value: T) { return value } const val = wrap("hello" as const)** – тип сохраняется точный "hello"

-

Любые базовые проверки с any/unknown
**let x: any = 5; let y: unknown = "text"**
**x + 10** – работает, TypeScript не проверяет
**y + 10** – ❌ ошибка, нужно привести тип через as или проверку typeof

-

Типизация функций с any и unknown
**function log(value: unknown) { if (typeof value === "string") console.log(value) }**
**function process(value: any) { console.log(value) }** – any отключает проверки, unknown безопаснее

-

Советы:
- ✔ Используй as const для литеральных значений, чтобы сохранить точный тип
- ✔ Используй unknown вместо any, когда нужно безопасно работать с неизвестными данными
- ✔ any только когда совсем невозможно типизировать
- ✔ as позволяет явно привести тип, но использовать нужно осторожно`}],[fe.Links]:[{title:"📦 CSS & JS: библиотеки, шпаргалки, инструменты",text:`
- [Tailwind Docs](https://tailwindcss.com/docs/text-align)
- [Sprite Generator](https://svgsprit.es)
- [Favicon Generator](https://realfavicongenerator.net)
- [CSS Cheatsheet](https://htmlcheatsheet.com/css/)
- [JS Cheatsheet (OverAPI)](https://overapi.com/javascript)
- [HTML Cheatsheet (OverAPI)](https://overapi.com/html)
- [CSS Cheatsheet (OverAPI)](https://overapi.com/css)
- [Doka JS Guide](https://doka.guide/js/)
- [CSS Grid Guide](https://grid.malven.co)
- [CSS Snippets](https://my-js.org/docs/other/snippets-css)
- [CSS Animation Easing](https://easings.net/en#/)
- [Base64 Image Converter](https://www.base64-image.de)
- [JS Обфускация (Habr)](https://habr.com/ru/post/533954/)
- [JS Обфускатор Webfanat](https://webfanat.com/obfuscator/)
`},{title:"⚙️ Инструменты и тулзы",text:`
- [CSS Easing Generator](https://tools.webdevpuneet.com/css-easing-generator/)
- [Настройка VS Code](https://webdesign-master.ru/blog/tools/vscode.html)
- [Оптимизация видео для сайтов](https://www.comss.ru/page.php?id=6780)
`},{title:"📈 Метрики и аналитика",text:`
- [Google Analytics Setup](https://support.google.com/analytics/answer/10269537?ref_topic=1009620)
- [Яндекс Метрика через GTM](https://ppc.world/articles/kak-ustanovit-schetchik-metriki-na-sayt-s-pomoschyu-google-tag-manager/)
`},{title:"🎠 Слайдеры, анимации и UI",text:`
- [Подборка слайдеров (3D и др.)](https://atuin.ru/blog/slajdery-i-karuseli/)
- [Интересное по тегу 3D](https://atuin.ru/blog/tag/3d/)
- [Плавное появление страницы](https://snipp.ru/jquery/smooth-pages)
- [Слайдер без JS (Scroll Snap)](https://tproger.ru/articles/css-scroll-snap-moshhnoe-svojstvo-dlja-sozdanija-prokruchivaemyh-kontejnerov-bez-javascript/)
- [Popup на чистом JS](https://webdevtips.pro/js/pure-js-popup/)
`},{title:"💠 Прелоадеры и курсоры",text:`
- [Простой прелоадер](https://smartlanding.biz/kak-sdelat-preloader.html)
- [Коллекция прелоадеров (Spinkit)](https://tobiasahlin.com/spinkit/)
- [Как изменить курсор (Pandoge)](https://www.pandoge.com/stati-i-sovety/kak-izmenit-standartnyy-kursor-na-sayte)
- [Изменение курсора (mojwp)](https://mojwp.ru/cursor-css.html)
`},{title:"🧩 Стилизация элементов",text:`
- [Стилизация Checkbox](https://computy.ru/blog/ispolzovanie-i-stilizacziya-input-checkbox/)
`},{title:"🧠 ИИ, генераторы, помощники",text:`
- [DuckDuckGo Chat AI](https://duckduckgo.com/?q=DuckDuckGo+AI+Chat&ia=chat&duckai=1)
- [GPT China (HuggingFace)](https://huggingface.co/spaces/Qwen/Qwen2.5-Coder-Artifacts)
`}],[fe.Hotkeys]:[{title:"🔄 Редактирование и работа с кодом",text:`- **Ctrl + D** – Дублировать строку/блок
- **Ctrl + Y** – Удалить строку
- **Shift + Alt + ↑ / ↓** – Переместить строку вверх/вниз
- **Ctrl + ]** → перейти к закрывающей скобке
- **Ctrl + [** → перейти к открывающей скобке
- **Ctrl -** → закрыть текущий выделенный блок
- **Ctrl +** → открыть текущий выделенный блок
- **Ctrl + Shift -** → закрыть все блоки
- **Ctrl + Shift +** → открыть все блоки
- **Ctrl + Alt + L** – Форматировать код
- **Ctrl + /** – Закомментировать строку
- **Ctrl + Shift + /** – Закомментировать блок
- **Ctrl + W / Ctrl + Shift + W** – Выделить следующую/предыдущую часть кода`},{title:"✏️ Рефакторинг и переименование",text:`- **Shift + F6** – Переименовать файл, переменную, функцию
- **Alt + Delete** – Безопасное удаление (с поиском использований)
- **F6** – Переместить файл/класс
- **Ctrl + Alt + Shift + T** – Показать рефакторинги`},{title:"💻 Терминал, окна, вкладки",text:`- **Alt + F12** – Открыть терминал
- **Alt + ← / →** – Переключить вкладку (вперёд/назад)
- **Ctrl + F4** – Закрыть вкладку`},{title:"🔍 Навигация",text:`- **Ctrl + Shift + N** – Переход к файлу
- **Ctrl + Alt + Shift + N** – Переход к символу (функция, переменная)
- **Ctrl + B** – Переход к определению
- **Alt + F7** – Поиск использования
- **Ctrl + E** – Недавние файлы
- **Ctrl + Shift + Backspace** – Последнее место редактирования`},{title:"🚀 Навигация по структуре",text:`- **Ctrl + F12** – Показать структуру файла
- **Alt + Enter** – Открыть быстрые действия
- **Ctrl + Q** – Быстрая документация`},{title:"🧠 Поиск",text:`- **Ctrl + Shift + F** – Поиск по проекту
- **Ctrl + R** – Поиск и замена
- **Ctrl + F** – Поиск в файле`},{title:"🧪 Запуск и дебаг",text:`- **Shift + F10** – Запустить
- **Ctrl + F2** – Остановить
- **Shift + F9** – Перезапустить`},{title:"🌈 Прочее",text:`- **Ctrl + Shift + A** – Показать все доступные горячие клавиши
- **Ctrl + Shift + A** – Переопределить шорткаты (Find Action)`}]};function ff(e,u){const t=mi(null);function n(i){t.value=t.value===i?null:i}const r=Ki(()=>{if(t.value==null)return null;const i=e[t.value];return u[i]});return{activeIndex:t,selectedMenu:r,handleChangeActiveIndex:n}}const df={},hf={__name:"App",setup(e){const{activeIndex:u,selectedMenu:t,handleChangeActiveIndex:n}=ff(Gr,af);return(r,i)=>(Re(),Ze("div",{class:ke([r.$style.container,"text-center pt-16"])},[we(rc,{class:"mb-16"}),we(lf,{items:Bu(Gr),activeIndex:Bu(u),onChangeActiveIndex:Bu(n)},null,8,["items","activeIndex","onChangeActiveIndex"]),we(ef,{selectedMenu:Bu(t)},null,8,["selectedMenu"])],2))}},pf={$style:df},bf=Ht(hf,[["__cssModules",pf]]);Yo(bf).mount("#app");
