(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))n(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&n(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerPolicy&&(i.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?i.credentials="include":r.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(r){if(r.ep)return;r.ep=!0;const i=t(r);fetch(r.href,i)}})();/**
* @vue/shared v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function An(e){const u=Object.create(null);for(const t of e.split(","))u[t]=1;return t=>t in u}const U={},yu=[],Ne=()=>{},vi=()=>!1,St=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&(e.charCodeAt(2)>122||e.charCodeAt(2)<97),Fn=e=>e.startsWith("onUpdate:"),ce=Object.assign,vn=(e,u)=>{const t=e.indexOf(u);t>-1&&e.splice(t,1)},wi=Object.prototype.hasOwnProperty,q=(e,u)=>wi.call(e,u),j=Array.isArray,Cu=e=>Tt(e)==="[object Map]",Gr=e=>Tt(e)==="[object Set]",L=e=>typeof e=="function",Y=e=>typeof e=="string",su=e=>typeof e=="symbol",K=e=>e!==null&&typeof e=="object",Jr=e=>(K(e)||L(e))&&L(e.then)&&L(e.catch),Kr=Object.prototype.toString,Tt=e=>Kr.call(e),Si=e=>Tt(e).slice(8,-1),Qr=e=>Tt(e)==="[object Object]",wn=e=>Y(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,zu=An(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),It=e=>{const u=Object.create(null);return t=>u[t]||(u[t]=e(t))},Ti=/-(\w)/g,Ee=It(e=>e.replace(Ti,(u,t)=>t?t.toUpperCase():"")),Ii=/\B([A-Z])/g,pu=It(e=>e.replace(Ii,"-$1").toLowerCase()),Mt=It(e=>e.charAt(0).toUpperCase()+e.slice(1)),Wt=It(e=>e?`on${Mt(e)}`:""),ru=(e,u)=>!Object.is(e,u),Zt=(e,...u)=>{for(let t=0;t<e.length;t++)e[t](...u)},fn=(e,u,t,n=!1)=>{Object.defineProperty(e,u,{configurable:!0,enumerable:!1,writable:n,value:t})},Mi=e=>{const u=parseFloat(e);return isNaN(u)?e:u};let tr;const Pt=()=>tr||(tr=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Sn(e){if(j(e)){const u={};for(let t=0;t<e.length;t++){const n=e[t],r=Y(n)?ji(n):Sn(n);if(r)for(const i in r)u[i]=r[i]}return u}else if(Y(e)||K(e))return e}const Pi=/;(?![^(]*\))/g,Ri=/:([^]+)/,Oi=/\/\*[^]*?\*\//g;function ji(e){const u={};return e.replace(Oi,"").split(Pi).forEach(t=>{if(t){const n=t.split(Ri);n.length>1&&(u[n[0].trim()]=n[1].trim())}}),u}function ye(e){let u="";if(Y(e))u=e;else if(j(e))for(let t=0;t<e.length;t++){const n=ye(e[t]);n&&(u+=n+" ")}else if(K(e))for(const t in e)e[t]&&(u+=t+" ");return u.trim()}const Bi="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Li=An(Bi);function Yr(e){return!!e||e===""}const Xr=e=>!!(e&&e.__v_isRef===!0),Tn=e=>Y(e)?e:e==null?"":j(e)||K(e)&&(e.toString===Kr||!L(e.toString))?Xr(e)?Tn(e.value):JSON.stringify(e,e0,2):String(e),e0=(e,u)=>Xr(u)?e0(e,u.value):Cu(u)?{[`Map(${u.size})`]:[...u.entries()].reduce((t,[n,r],i)=>(t[Gt(n,i)+" =>"]=r,t),{})}:Gr(u)?{[`Set(${u.size})`]:[...u.values()].map(t=>Gt(t))}:su(u)?Gt(u):K(u)&&!j(u)&&!Qr(u)?String(u):u,Gt=(e,u="")=>{var t;return su(e)?`Symbol(${(t=e.description)!=null?t:u})`:e};/**
* @vue/reactivity v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let fe;class Ni{constructor(u=!1){this.detached=u,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=fe,!u&&fe&&(this.index=(fe.scopes||(fe.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let u,t;if(this.scopes)for(u=0,t=this.scopes.length;u<t;u++)this.scopes[u].pause();for(u=0,t=this.effects.length;u<t;u++)this.effects[u].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let u,t;if(this.scopes)for(u=0,t=this.scopes.length;u<t;u++)this.scopes[u].resume();for(u=0,t=this.effects.length;u<t;u++)this.effects[u].resume()}}run(u){if(this._active){const t=fe;try{return fe=this,u()}finally{fe=t}}}on(){++this._on===1&&(this.prevScope=fe,fe=this)}off(){this._on>0&&--this._on===0&&(fe=this.prevScope,this.prevScope=void 0)}stop(u){if(this._active){this._active=!1;let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(this.effects.length=0,t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.cleanups.length=0,this.scopes){for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!u){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0}}}function zi(){return fe}let Z;const Jt=new WeakSet;class u0{constructor(u){this.fn=u,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,fe&&fe.active&&fe.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Jt.has(this)&&(Jt.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||n0(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nr(this),r0(this);const u=Z,t=Fe;Z=this,Fe=!0;try{return this.fn()}finally{i0(this),Z=u,Fe=t,this.flags&=-3}}stop(){if(this.flags&1){for(let u=this.deps;u;u=u.nextDep)Pn(u);this.deps=this.depsTail=void 0,nr(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Jt.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){dn(this)&&this.run()}get dirty(){return dn(this)}}let t0=0,qu,Hu;function n0(e,u=!1){if(e.flags|=8,u){e.next=Hu,Hu=e;return}e.next=qu,qu=e}function In(){t0++}function Mn(){if(--t0>0)return;if(Hu){let u=Hu;for(Hu=void 0;u;){const t=u.next;u.next=void 0,u.flags&=-9,u=t}}let e;for(;qu;){let u=qu;for(qu=void 0;u;){const t=u.next;if(u.next=void 0,u.flags&=-9,u.flags&1)try{u.trigger()}catch(n){e||(e=n)}u=t}}if(e)throw e}function r0(e){for(let u=e.deps;u;u=u.nextDep)u.version=-1,u.prevActiveLink=u.dep.activeLink,u.dep.activeLink=u}function i0(e){let u,t=e.depsTail,n=t;for(;n;){const r=n.prevDep;n.version===-1?(n===t&&(t=r),Pn(n),qi(n)):u=n,n.dep.activeLink=n.prevActiveLink,n.prevActiveLink=void 0,n=r}e.deps=u,e.depsTail=t}function dn(e){for(let u=e.deps;u;u=u.nextDep)if(u.dep.version!==u.version||u.dep.computed&&(o0(u.dep.computed)||u.dep.version!==u.version))return!0;return!!e._dirty}function o0(e){if(e.flags&4&&!(e.flags&16)||(e.flags&=-17,e.globalVersion===Zu)||(e.globalVersion=Zu,!e.isSSR&&e.flags&128&&(!e.deps&&!e._dirty||!dn(e))))return;e.flags|=2;const u=e.dep,t=Z,n=Fe;Z=e,Fe=!0;try{r0(e);const r=e.fn(e._value);(u.version===0||ru(r,e._value))&&(e.flags|=128,e._value=r,u.version++)}catch(r){throw u.version++,r}finally{Z=t,Fe=n,i0(e),e.flags&=-3}}function Pn(e,u=!1){const{dep:t,prevSub:n,nextSub:r}=e;if(n&&(n.nextSub=r,e.prevSub=void 0),r&&(r.prevSub=n,e.nextSub=void 0),t.subs===e&&(t.subs=n,!n&&t.computed)){t.computed.flags&=-5;for(let i=t.computed.deps;i;i=i.nextDep)Pn(i,!0)}!u&&!--t.sc&&t.map&&t.map.delete(t.key)}function qi(e){const{prevDep:u,nextDep:t}=e;u&&(u.nextDep=t,e.prevDep=void 0),t&&(t.prevDep=u,e.nextDep=void 0)}let Fe=!0;const s0=[];function Ke(){s0.push(Fe),Fe=!1}function Qe(){const e=s0.pop();Fe=e===void 0?!0:e}function nr(e){const{cleanup:u}=e;if(e.cleanup=void 0,u){const t=Z;Z=void 0;try{u()}finally{Z=t}}}let Zu=0;class Hi{constructor(u,t){this.sub=u,this.dep=t,this.version=t.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class Rn{constructor(u){this.computed=u,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(u){if(!Z||!Fe||Z===this.computed)return;let t=this.activeLink;if(t===void 0||t.sub!==Z)t=this.activeLink=new Hi(Z,this),Z.deps?(t.prevDep=Z.depsTail,Z.depsTail.nextDep=t,Z.depsTail=t):Z.deps=Z.depsTail=t,c0(t);else if(t.version===-1&&(t.version=this.version,t.nextDep)){const n=t.nextDep;n.prevDep=t.prevDep,t.prevDep&&(t.prevDep.nextDep=n),t.prevDep=Z.depsTail,t.nextDep=void 0,Z.depsTail.nextDep=t,Z.depsTail=t,Z.deps===t&&(Z.deps=n)}return t}trigger(u){this.version++,Zu++,this.notify(u)}notify(u){In();try{for(let t=this.subs;t;t=t.prevSub)t.sub.notify()&&t.sub.dep.notify()}finally{Mn()}}}function c0(e){if(e.dep.sc++,e.sub.flags&4){const u=e.dep.computed;if(u&&!e.dep.subs){u.flags|=20;for(let n=u.deps;n;n=n.nextDep)c0(n)}const t=e.dep.subs;t!==e&&(e.prevSub=t,t&&(t.nextSub=e)),e.dep.subs=e}}const hn=new WeakMap,hu=Symbol(""),pn=Symbol(""),Gu=Symbol("");function ne(e,u,t){if(Fe&&Z){let n=hn.get(e);n||hn.set(e,n=new Map);let r=n.get(t);r||(n.set(t,r=new Rn),r.map=n,r.key=t),r.track()}}function Ze(e,u,t,n,r,i){const o=hn.get(e);if(!o){Zu++;return}const s=c=>{c&&c.trigger()};if(In(),u==="clear")o.forEach(s);else{const c=j(e),l=c&&wn(t);if(c&&t==="length"){const a=Number(n);o.forEach((f,m)=>{(m==="length"||m===Gu||!su(m)&&m>=a)&&s(f)})}else switch((t!==void 0||o.has(void 0))&&s(o.get(t)),l&&s(o.get(Gu)),u){case"add":c?l&&s(o.get("length")):(s(o.get(hu)),Cu(e)&&s(o.get(pn)));break;case"delete":c||(s(o.get(hu)),Cu(e)&&s(o.get(pn)));break;case"set":Cu(e)&&s(o.get(hu));break}}Mn()}function gu(e){const u=z(e);return u===e?u:(ne(u,"iterate",Gu),Ce(e)?u:u.map(te))}function Rt(e){return ne(e=z(e),"iterate",Gu),e}const $i={__proto__:null,[Symbol.iterator](){return Kt(this,Symbol.iterator,te)},concat(...e){return gu(this).concat(...e.map(u=>j(u)?gu(u):u))},entries(){return Kt(this,"entries",e=>(e[1]=te(e[1]),e))},every(e,u){return Ve(this,"every",e,u,void 0,arguments)},filter(e,u){return Ve(this,"filter",e,u,t=>t.map(te),arguments)},find(e,u){return Ve(this,"find",e,u,te,arguments)},findIndex(e,u){return Ve(this,"findIndex",e,u,void 0,arguments)},findLast(e,u){return Ve(this,"findLast",e,u,te,arguments)},findLastIndex(e,u){return Ve(this,"findLastIndex",e,u,void 0,arguments)},forEach(e,u){return Ve(this,"forEach",e,u,void 0,arguments)},includes(...e){return Qt(this,"includes",e)},indexOf(...e){return Qt(this,"indexOf",e)},join(e){return gu(this).join(e)},lastIndexOf(...e){return Qt(this,"lastIndexOf",e)},map(e,u){return Ve(this,"map",e,u,void 0,arguments)},pop(){return Ou(this,"pop")},push(...e){return Ou(this,"push",e)},reduce(e,...u){return rr(this,"reduce",e,u)},reduceRight(e,...u){return rr(this,"reduceRight",e,u)},shift(){return Ou(this,"shift")},some(e,u){return Ve(this,"some",e,u,void 0,arguments)},splice(...e){return Ou(this,"splice",e)},toReversed(){return gu(this).toReversed()},toSorted(e){return gu(this).toSorted(e)},toSpliced(...e){return gu(this).toSpliced(...e)},unshift(...e){return Ou(this,"unshift",e)},values(){return Kt(this,"values",te)}};function Kt(e,u,t){const n=Rt(e),r=n[u]();return n!==e&&!Ce(e)&&(r._next=r.next,r.next=()=>{const i=r._next();return i.value&&(i.value=t(i.value)),i}),r}const Ui=Array.prototype;function Ve(e,u,t,n,r,i){const o=Rt(e),s=o!==e&&!Ce(e),c=o[u];if(c!==Ui[u]){const f=c.apply(e,i);return s?te(f):f}let l=t;o!==e&&(s?l=function(f,m){return t.call(this,te(f),m,e)}:t.length>2&&(l=function(f,m){return t.call(this,f,m,e)}));const a=c.call(o,l,n);return s&&r?r(a):a}function rr(e,u,t,n){const r=Rt(e);let i=t;return r!==e&&(Ce(e)?t.length>3&&(i=function(o,s,c){return t.call(this,o,s,c,e)}):i=function(o,s,c){return t.call(this,o,te(s),c,e)}),r[u](i,...n)}function Qt(e,u,t){const n=z(e);ne(n,"iterate",Gu);const r=n[u](...t);return(r===-1||r===!1)&&Ln(t[0])?(t[0]=z(t[0]),n[u](...t)):r}function Ou(e,u,t=[]){Ke(),In();const n=z(e)[u].apply(e,t);return Mn(),Qe(),n}const Vi=An("__proto__,__v_isRef,__isVue"),l0=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(su));function Wi(e){su(e)||(e=String(e));const u=z(this);return ne(u,"has",e),u.hasOwnProperty(e)}class a0{constructor(u=!1,t=!1){this._isReadonly=u,this._isShallow=t}get(u,t,n){if(t==="__v_skip")return u.__v_skip;const r=this._isReadonly,i=this._isShallow;if(t==="__v_isReactive")return!r;if(t==="__v_isReadonly")return r;if(t==="__v_isShallow")return i;if(t==="__v_raw")return n===(r?i?to:p0:i?h0:d0).get(u)||Object.getPrototypeOf(u)===Object.getPrototypeOf(n)?u:void 0;const o=j(u);if(!r){let c;if(o&&(c=$i[t]))return c;if(t==="hasOwnProperty")return Wi}const s=Reflect.get(u,t,ie(u)?u:n);return(su(t)?l0.has(t):Vi(t))||(r||ne(u,"get",t),i)?s:ie(s)?o&&wn(t)?s:s.value:K(s)?r?b0(s):jn(s):s}}class f0 extends a0{constructor(u=!1){super(!1,u)}set(u,t,n,r){let i=u[t];if(!this._isShallow){const c=iu(i);if(!Ce(n)&&!iu(n)&&(i=z(i),n=z(n)),!j(u)&&ie(i)&&!ie(n))return c?!1:(i.value=n,!0)}const o=j(u)&&wn(t)?Number(t)<u.length:q(u,t),s=Reflect.set(u,t,n,ie(u)?u:r);return u===z(r)&&(o?ru(n,i)&&Ze(u,"set",t,n):Ze(u,"add",t,n)),s}deleteProperty(u,t){const n=q(u,t);u[t];const r=Reflect.deleteProperty(u,t);return r&&n&&Ze(u,"delete",t,void 0),r}has(u,t){const n=Reflect.has(u,t);return(!su(t)||!l0.has(t))&&ne(u,"has",t),n}ownKeys(u){return ne(u,"iterate",j(u)?"length":hu),Reflect.ownKeys(u)}}class Zi extends a0{constructor(u=!1){super(!0,u)}set(u,t){return!0}deleteProperty(u,t){return!0}}const Gi=new f0,Ji=new Zi,Ki=new f0(!0);const bn=e=>e,lt=e=>Reflect.getPrototypeOf(e);function Qi(e,u,t){return function(...n){const r=this.__v_raw,i=z(r),o=Cu(i),s=e==="entries"||e===Symbol.iterator&&o,c=e==="keys"&&o,l=r[e](...n),a=t?bn:u?gt:te;return!u&&ne(i,"iterate",c?pn:hu),{next(){const{value:f,done:m}=l.next();return m?{value:f,done:m}:{value:s?[a(f[0]),a(f[1])]:a(f),done:m}},[Symbol.iterator](){return this}}}}function at(e){return function(...u){return e==="delete"?!1:e==="clear"?void 0:this}}function Yi(e,u){const t={get(r){const i=this.__v_raw,o=z(i),s=z(r);e||(ru(r,s)&&ne(o,"get",r),ne(o,"get",s));const{has:c}=lt(o),l=u?bn:e?gt:te;if(c.call(o,r))return l(i.get(r));if(c.call(o,s))return l(i.get(s));i!==o&&i.get(r)},get size(){const r=this.__v_raw;return!e&&ne(z(r),"iterate",hu),Reflect.get(r,"size",r)},has(r){const i=this.__v_raw,o=z(i),s=z(r);return e||(ru(r,s)&&ne(o,"has",r),ne(o,"has",s)),r===s?i.has(r):i.has(r)||i.has(s)},forEach(r,i){const o=this,s=o.__v_raw,c=z(s),l=u?bn:e?gt:te;return!e&&ne(c,"iterate",hu),s.forEach((a,f)=>r.call(i,l(a),l(f),o))}};return ce(t,e?{add:at("add"),set:at("set"),delete:at("delete"),clear:at("clear")}:{add(r){!u&&!Ce(r)&&!iu(r)&&(r=z(r));const i=z(this);return lt(i).has.call(i,r)||(i.add(r),Ze(i,"add",r,r)),this},set(r,i){!u&&!Ce(i)&&!iu(i)&&(i=z(i));const o=z(this),{has:s,get:c}=lt(o);let l=s.call(o,r);l||(r=z(r),l=s.call(o,r));const a=c.call(o,r);return o.set(r,i),l?ru(i,a)&&Ze(o,"set",r,i):Ze(o,"add",r,i),this},delete(r){const i=z(this),{has:o,get:s}=lt(i);let c=o.call(i,r);c||(r=z(r),c=o.call(i,r)),s&&s.call(i,r);const l=i.delete(r);return c&&Ze(i,"delete",r,void 0),l},clear(){const r=z(this),i=r.size!==0,o=r.clear();return i&&Ze(r,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(r=>{t[r]=Qi(r,e,u)}),t}function On(e,u){const t=Yi(e,u);return(n,r,i)=>r==="__v_isReactive"?!e:r==="__v_isReadonly"?e:r==="__v_raw"?n:Reflect.get(q(t,r)&&r in n?t:n,r,i)}const Xi={get:On(!1,!1)},eo={get:On(!1,!0)},uo={get:On(!0,!1)};const d0=new WeakMap,h0=new WeakMap,p0=new WeakMap,to=new WeakMap;function no(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function ro(e){return e.__v_skip||!Object.isExtensible(e)?0:no(Si(e))}function jn(e){return iu(e)?e:Bn(e,!1,Gi,Xi,d0)}function io(e){return Bn(e,!1,Ki,eo,h0)}function b0(e){return Bn(e,!0,Ji,uo,p0)}function Bn(e,u,t,n,r){if(!K(e)||e.__v_raw&&!(u&&e.__v_isReactive))return e;const i=ro(e);if(i===0)return e;const o=r.get(e);if(o)return o;const s=new Proxy(e,i===2?n:t);return r.set(e,s),s}function Eu(e){return iu(e)?Eu(e.__v_raw):!!(e&&e.__v_isReactive)}function iu(e){return!!(e&&e.__v_isReadonly)}function Ce(e){return!!(e&&e.__v_isShallow)}function Ln(e){return e?!!e.__v_raw:!1}function z(e){const u=e&&e.__v_raw;return u?z(u):e}function oo(e){return!q(e,"__v_skip")&&Object.isExtensible(e)&&fn(e,"__v_skip",!0),e}const te=e=>K(e)?jn(e):e,gt=e=>K(e)?b0(e):e;function ie(e){return e?e.__v_isRef===!0:!1}function m0(e){return so(e,!1)}function so(e,u){return ie(e)?e:new co(e,u)}class co{constructor(u,t){this.dep=new Rn,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=t?u:z(u),this._value=t?u:te(u),this.__v_isShallow=t}get value(){return this.dep.track(),this._value}set value(u){const t=this._rawValue,n=this.__v_isShallow||Ce(u)||iu(u);u=n?u:z(u),ru(u,t)&&(this._rawValue=u,this._value=n?u:te(u),this.dep.trigger())}}function Lu(e){return ie(e)?e.value:e}const lo={get:(e,u,t)=>u==="__v_raw"?e:Lu(Reflect.get(e,u,t)),set:(e,u,t,n)=>{const r=e[u];return ie(r)&&!ie(t)?(r.value=t,!0):Reflect.set(e,u,t,n)}};function x0(e){return Eu(e)?e:new Proxy(e,lo)}class ao{constructor(u,t,n){this.fn=u,this.setter=t,this._value=void 0,this.dep=new Rn(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Zu-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!t,this.isSSR=n}notify(){if(this.flags|=16,!(this.flags&8)&&Z!==this)return n0(this,!0),!0}get value(){const u=this.dep.track();return o0(this),u&&(u.version=this.dep.version),this._value}set value(u){this.setter&&this.setter(u)}}function fo(e,u,t=!1){let n,r;return L(e)?n=e:(n=e.get,r=e.set),new ao(n,r,t)}const ft={},_t=new WeakMap;let du;function ho(e,u=!1,t=du){if(t){let n=_t.get(t);n||_t.set(t,n=[]),n.push(e)}}function po(e,u,t=U){const{immediate:n,deep:r,once:i,scheduler:o,augmentJob:s,call:c}=t,l=k=>r?k:Ce(k)||r===!1||r===0?Ge(k,1):Ge(k);let a,f,m,b,p=!1,F=!1;if(ie(e)?(f=()=>e.value,p=Ce(e)):Eu(e)?(f=()=>l(e),p=!0):j(e)?(F=!0,p=e.some(k=>Eu(k)||Ce(k)),f=()=>e.map(k=>{if(ie(k))return k.value;if(Eu(k))return l(k);if(L(k))return c?c(k,2):k()})):L(e)?u?f=c?()=>c(e,2):e:f=()=>{if(m){Ke();try{m()}finally{Qe()}}const k=du;du=a;try{return c?c(e,3,[b]):e(b)}finally{du=k}}:f=Ne,u&&r){const k=f,T=r===!0?1/0:r;f=()=>Ge(k(),T)}const R=zi(),I=()=>{a.stop(),R&&R.active&&vn(R.effects,a)};if(i&&u){const k=u;u=(...T)=>{k(...T),I()}}let w=F?new Array(e.length).fill(ft):ft;const S=k=>{if(!(!(a.flags&1)||!a.dirty&&!k))if(u){const T=a.run();if(r||p||(F?T.some((B,$)=>ru(B,w[$])):ru(T,w))){m&&m();const B=du;du=a;try{const $=[T,w===ft?void 0:F&&w[0]===ft?[]:w,b];w=T,c?c(u,3,$):u(...$)}finally{du=B}}}else a.run()};return s&&s(S),a=new u0(f),a.scheduler=o?()=>o(S,!1):S,b=k=>ho(k,!1,a),m=a.onStop=()=>{const k=_t.get(a);if(k){if(c)c(k,4);else for(const T of k)T();_t.delete(a)}},u?n?S(!0):w=a.run():o?o(S.bind(null,!0),!0):a.run(),I.pause=a.pause.bind(a),I.resume=a.resume.bind(a),I.stop=I,I}function Ge(e,u=1/0,t){if(u<=0||!K(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),u--,ie(e))Ge(e.value,u,t);else if(j(e))for(let n=0;n<e.length;n++)Ge(e[n],u,t);else if(Gr(e)||Cu(e))e.forEach(n=>{Ge(n,u,t)});else if(Qr(e)){for(const n in e)Ge(e[n],u,t);for(const n of Object.getOwnPropertySymbols(e))Object.prototype.propertyIsEnumerable.call(e,n)&&Ge(e[n],u,t)}return e}/**
* @vue/runtime-core v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function tt(e,u,t,n){try{return n?e(...n):e()}catch(r){Ot(r,u,t)}}function ze(e,u,t,n){if(L(e)){const r=tt(e,u,t,n);return r&&Jr(r)&&r.catch(i=>{Ot(i,u,t)}),r}if(j(e)){const r=[];for(let i=0;i<e.length;i++)r.push(ze(e[i],u,t,n));return r}}function Ot(e,u,t,n=!0){const r=u?u.vnode:null,{errorHandler:i,throwUnhandledErrorInProduction:o}=u&&u.appContext.config||U;if(u){let s=u.parent;const c=u.proxy,l=`https://vuejs.org/error-reference/#runtime-${t}`;for(;s;){const a=s.ec;if(a){for(let f=0;f<a.length;f++)if(a[f](e,c,l)===!1)return}s=s.parent}if(i){Ke(),tt(i,null,10,[e,c,l]),Qe();return}}bo(e,t,r,n,o)}function bo(e,u,t,n=!0,r=!1){if(r)throw e;console.error(e)}const se=[];let Re=-1;const Du=[];let Xe=null,ku=0;const g0=Promise.resolve();let kt=null;function mo(e){const u=kt||g0;return e?u.then(this?e.bind(this):e):u}function xo(e){let u=Re+1,t=se.length;for(;u<t;){const n=u+t>>>1,r=se[n],i=Ju(r);i<e||i===e&&r.flags&2?u=n+1:t=n}return u}function Nn(e){if(!(e.flags&1)){const u=Ju(e),t=se[se.length-1];!t||!(e.flags&2)&&u>=Ju(t)?se.push(e):se.splice(xo(u),0,e),e.flags|=1,_0()}}function _0(){kt||(kt=g0.then(y0))}function go(e){j(e)?Du.push(...e):Xe&&e.id===-1?Xe.splice(ku+1,0,e):e.flags&1||(Du.push(e),e.flags|=1),_0()}function ir(e,u,t=Re+1){for(;t<se.length;t++){const n=se[t];if(n&&n.flags&2){if(e&&n.id!==e.uid)continue;se.splice(t,1),t--,n.flags&4&&(n.flags&=-2),n(),n.flags&4||(n.flags&=-2)}}}function k0(e){if(Du.length){const u=[...new Set(Du)].sort((t,n)=>Ju(t)-Ju(n));if(Du.length=0,Xe){Xe.push(...u);return}for(Xe=u,ku=0;ku<Xe.length;ku++){const t=Xe[ku];t.flags&4&&(t.flags&=-2),t.flags&8||t(),t.flags&=-2}Xe=null,ku=0}}const Ju=e=>e.id==null?e.flags&2?-1:1/0:e.id;function y0(e){try{for(Re=0;Re<se.length;Re++){const u=se[Re];u&&!(u.flags&8)&&(u.flags&4&&(u.flags&=-2),tt(u,u.i,u.i?15:14),u.flags&4||(u.flags&=-2))}}finally{for(;Re<se.length;Re++){const u=se[Re];u&&(u.flags&=-2)}Re=-1,se.length=0,k0(),kt=null,(se.length||Du.length)&&y0()}}let xe=null,C0=null;function yt(e){const u=xe;return xe=e,C0=e&&e.type.__scopeId||null,u}function _o(e,u=xe,t){if(!u||e._n)return e;const n=(...r)=>{n._d&&br(-1);const i=yt(u);let o;try{o=e(...r)}finally{yt(i),n._d&&br(1)}return o};return n._n=!0,n._c=!0,n._d=!0,n}function ko(e,u){if(xe===null)return e;const t=Nt(xe),n=e.dirs||(e.dirs=[]);for(let r=0;r<u.length;r++){let[i,o,s,c=U]=u[r];i&&(L(i)&&(i={mounted:i,updated:i}),i.deep&&Ge(o),n.push({dir:i,instance:t,value:o,oldValue:void 0,arg:s,modifiers:c}))}return e}function au(e,u,t,n){const r=e.dirs,i=u&&u.dirs;for(let o=0;o<r.length;o++){const s=r[o];i&&(s.oldValue=i[o].value);let c=s.dir[n];c&&(Ke(),ze(c,t,8,[e.el,s,e,u]),Qe())}}const yo=Symbol("_vte"),Co=e=>e.__isTeleport;function zn(e,u){e.shapeFlag&6&&e.component?(e.transition=u,zn(e.component.subTree,u)):e.shapeFlag&128?(e.ssContent.transition=u.clone(e.ssContent),e.ssFallback.transition=u.clone(e.ssFallback)):e.transition=u}function E0(e){e.ids=[e.ids[0]+e.ids[2]+++"-",0,0]}function $u(e,u,t,n,r=!1){if(j(e)){e.forEach((p,F)=>$u(p,u&&(j(u)?u[F]:u),t,n,r));return}if(Uu(n)&&!r){n.shapeFlag&512&&n.type.__asyncResolved&&n.component.subTree.component&&$u(e,u,t,n.component.subTree);return}const i=n.shapeFlag&4?Nt(n.component):n.el,o=r?null:i,{i:s,r:c}=e,l=u&&u.r,a=s.refs===U?s.refs={}:s.refs,f=s.setupState,m=z(f),b=f===U?()=>!1:p=>q(m,p);if(l!=null&&l!==c&&(Y(l)?(a[l]=null,b(l)&&(f[l]=null)):ie(l)&&(l.value=null)),L(c))tt(c,s,12,[o,a]);else{const p=Y(c),F=ie(c);if(p||F){const R=()=>{if(e.f){const I=p?b(c)?f[c]:a[c]:c.value;r?j(I)&&vn(I,i):j(I)?I.includes(i)||I.push(i):p?(a[c]=[i],b(c)&&(f[c]=a[c])):(c.value=[i],e.k&&(a[e.k]=c.value))}else p?(a[c]=o,b(c)&&(f[c]=o)):F&&(c.value=o,e.k&&(a[e.k]=o))};o?(R.id=-1,me(R,t)):R()}}}Pt().requestIdleCallback;Pt().cancelIdleCallback;const Uu=e=>!!e.type.__asyncLoader,D0=e=>e.type.__isKeepAlive;function Eo(e,u){A0(e,"a",u)}function Do(e,u){A0(e,"da",u)}function A0(e,u,t=re){const n=e.__wdc||(e.__wdc=()=>{let r=t;for(;r;){if(r.isDeactivated)return;r=r.parent}return e()});if(jt(u,n,t),t){let r=t.parent;for(;r&&r.parent;)D0(r.parent.vnode)&&Ao(n,u,t,r),r=r.parent}}function Ao(e,u,t,n){const r=jt(u,e,n,!0);F0(()=>{vn(n[u],r)},t)}function jt(e,u,t=re,n=!1){if(t){const r=t[e]||(t[e]=[]),i=u.__weh||(u.__weh=(...o)=>{Ke();const s=nt(t),c=ze(u,t,e,o);return s(),Qe(),c});return n?r.unshift(i):r.push(i),i}}const Ye=e=>(u,t=re)=>{(!Qu||e==="sp")&&jt(e,(...n)=>u(...n),t)},Fo=Ye("bm"),vo=Ye("m"),wo=Ye("bu"),So=Ye("u"),To=Ye("bum"),F0=Ye("um"),Io=Ye("sp"),Mo=Ye("rtg"),Po=Ye("rtc");function Ro(e,u=re){jt("ec",e,u)}const Oo="components";function jo(e,u){return Lo(Oo,e,!0,u)||e}const Bo=Symbol.for("v-ndc");function Lo(e,u,t=!0,n=!1){const r=xe||re;if(r){const i=r.type;{const s=vs(i,!1);if(s&&(s===u||s===Ee(u)||s===Mt(Ee(u))))return i}const o=or(r[e]||i[e],u)||or(r.appContext[e],u);return!o&&n?i:o}}function or(e,u){return e&&(e[u]||e[Ee(u)]||e[Mt(Ee(u))])}function v0(e,u,t,n){let r;const i=t,o=j(e);if(o||Y(e)){const s=o&&Eu(e);let c=!1,l=!1;s&&(c=!Ce(e),l=iu(e),e=Rt(e)),r=new Array(e.length);for(let a=0,f=e.length;a<f;a++)r[a]=u(c?l?gt(te(e[a])):te(e[a]):e[a],a,void 0,i)}else if(typeof e=="number"){r=new Array(e);for(let s=0;s<e;s++)r[s]=u(s+1,s,void 0,i)}else if(K(e))if(e[Symbol.iterator])r=Array.from(e,(s,c)=>u(s,c,void 0,i));else{const s=Object.keys(e);r=new Array(s.length);for(let c=0,l=s.length;c<l;c++){const a=s[c];r[c]=u(e[a],a,c,i)}}else r=[];return r}const mn=e=>e?G0(e)?Nt(e):mn(e.parent):null,Vu=ce(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>mn(e.parent),$root:e=>mn(e.root),$host:e=>e.ce,$emit:e=>e.emit,$options:e=>S0(e),$forceUpdate:e=>e.f||(e.f=()=>{Nn(e.update)}),$nextTick:e=>e.n||(e.n=mo.bind(e.proxy)),$watch:e=>os.bind(e)}),Yt=(e,u)=>e!==U&&!e.__isScriptSetup&&q(e,u),No={get({_:e},u){if(u==="__v_skip")return!0;const{ctx:t,setupState:n,data:r,props:i,accessCache:o,type:s,appContext:c}=e;let l;if(u[0]!=="$"){const b=o[u];if(b!==void 0)switch(b){case 1:return n[u];case 2:return r[u];case 4:return t[u];case 3:return i[u]}else{if(Yt(n,u))return o[u]=1,n[u];if(r!==U&&q(r,u))return o[u]=2,r[u];if((l=e.propsOptions[0])&&q(l,u))return o[u]=3,i[u];if(t!==U&&q(t,u))return o[u]=4,t[u];xn&&(o[u]=0)}}const a=Vu[u];let f,m;if(a)return u==="$attrs"&&ne(e.attrs,"get",""),a(e);if((f=s.__cssModules)&&(f=f[u]))return f;if(t!==U&&q(t,u))return o[u]=4,t[u];if(m=c.config.globalProperties,q(m,u))return m[u]},set({_:e},u,t){const{data:n,setupState:r,ctx:i}=e;return Yt(r,u)?(r[u]=t,!0):n!==U&&q(n,u)?(n[u]=t,!0):q(e.props,u)||u[0]==="$"&&u.slice(1)in e?!1:(i[u]=t,!0)},has({_:{data:e,setupState:u,accessCache:t,ctx:n,appContext:r,propsOptions:i}},o){let s;return!!t[o]||e!==U&&q(e,o)||Yt(u,o)||(s=i[0])&&q(s,o)||q(n,o)||q(Vu,o)||q(r.config.globalProperties,o)},defineProperty(e,u,t){return t.get!=null?e._.accessCache[u]=0:q(t,"value")&&this.set(e,u,t.value,null),Reflect.defineProperty(e,u,t)}};function sr(e){return j(e)?e.reduce((u,t)=>(u[t]=null,u),{}):e}let xn=!0;function zo(e){const u=S0(e),t=e.proxy,n=e.ctx;xn=!1,u.beforeCreate&&cr(u.beforeCreate,e,"bc");const{data:r,computed:i,methods:o,watch:s,provide:c,inject:l,created:a,beforeMount:f,mounted:m,beforeUpdate:b,updated:p,activated:F,deactivated:R,beforeDestroy:I,beforeUnmount:w,destroyed:S,unmounted:k,render:T,renderTracked:B,renderTriggered:$,errorCaptured:Q,serverPrefetch:he,expose:pe,inheritAttrs:$e,components:bu,directives:mu,filters:xu}=u;if(l&&qo(l,n,null),o)for(const J in o){const V=o[J];L(V)&&(n[J]=V.bind(t))}if(r){const J=r.call(t,t);K(J)&&(e.data=jn(J))}if(xn=!0,i)for(const J in i){const V=i[J],cu=L(V)?V.bind(t,t):L(V.get)?V.get.bind(t,t):Ne,st=!L(V)&&L(V.set)?V.set.bind(t):Ne,lu=K0({get:cu,set:st});Object.defineProperty(n,J,{enumerable:!0,configurable:!0,get:()=>lu.value,set:Se=>lu.value=Se})}if(s)for(const J in s)w0(s[J],n,t,J);if(c){const J=L(c)?c.call(t):c;Reflect.ownKeys(J).forEach(V=>{Zo(V,J[V])})}a&&cr(a,e,"c");function ue(J,V){j(V)?V.forEach(cu=>J(cu.bind(t))):V&&J(V.bind(t))}if(ue(Fo,f),ue(vo,m),ue(wo,b),ue(So,p),ue(Eo,F),ue(Do,R),ue(Ro,Q),ue(Po,B),ue(Mo,$),ue(To,w),ue(F0,k),ue(Io,he),j(pe))if(pe.length){const J=e.exposed||(e.exposed={});pe.forEach(V=>{Object.defineProperty(J,V,{get:()=>t[V],set:cu=>t[V]=cu})})}else e.exposed||(e.exposed={});T&&e.render===Ne&&(e.render=T),$e!=null&&(e.inheritAttrs=$e),bu&&(e.components=bu),mu&&(e.directives=mu),he&&E0(e)}function qo(e,u,t=Ne){j(e)&&(e=gn(e));for(const n in e){const r=e[n];let i;K(r)?"default"in r?i=pt(r.from||n,r.default,!0):i=pt(r.from||n):i=pt(r),ie(i)?Object.defineProperty(u,n,{enumerable:!0,configurable:!0,get:()=>i.value,set:o=>i.value=o}):u[n]=i}}function cr(e,u,t){ze(j(e)?e.map(n=>n.bind(u.proxy)):e.bind(u.proxy),u,t)}function w0(e,u,t,n){let r=n.includes(".")?H0(t,n):()=>t[n];if(Y(e)){const i=u[e];L(i)&&bt(r,i)}else if(L(e))bt(r,e.bind(t));else if(K(e))if(j(e))e.forEach(i=>w0(i,u,t,n));else{const i=L(e.handler)?e.handler.bind(t):u[e.handler];L(i)&&bt(r,i,e)}}function S0(e){const u=e.type,{mixins:t,extends:n}=u,{mixins:r,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(u);let c;return s?c=s:!r.length&&!t&&!n?c=u:(c={},r.length&&r.forEach(l=>Ct(c,l,o,!0)),Ct(c,u,o)),K(u)&&i.set(u,c),c}function Ct(e,u,t,n=!1){const{mixins:r,extends:i}=u;i&&Ct(e,i,t,!0),r&&r.forEach(o=>Ct(e,o,t,!0));for(const o in u)if(!(n&&o==="expose")){const s=Ho[o]||t&&t[o];e[o]=s?s(e[o],u[o]):u[o]}return e}const Ho={data:lr,props:ar,emits:ar,methods:Nu,computed:Nu,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:Nu,directives:Nu,watch:Uo,provide:lr,inject:$o};function lr(e,u){return u?e?function(){return ce(L(e)?e.call(this,this):e,L(u)?u.call(this,this):u)}:u:e}function $o(e,u){return Nu(gn(e),gn(u))}function gn(e){if(j(e)){const u={};for(let t=0;t<e.length;t++)u[e[t]]=e[t];return u}return e}function oe(e,u){return e?[...new Set([].concat(e,u))]:u}function Nu(e,u){return e?ce(Object.create(null),e,u):u}function ar(e,u){return e?j(e)&&j(u)?[...new Set([...e,...u])]:ce(Object.create(null),sr(e),sr(u??{})):u}function Uo(e,u){if(!e)return u;if(!u)return e;const t=ce(Object.create(null),e);for(const n in u)t[n]=oe(e[n],u[n]);return t}function T0(){return{app:null,config:{isNativeTag:vi,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Vo=0;function Wo(e,u){return function(n,r=null){L(n)||(n=ce({},n)),r!=null&&!K(r)&&(r=null);const i=T0(),o=new WeakSet,s=[];let c=!1;const l=i.app={_uid:Vo++,_component:n,_props:r,_container:null,_context:i,_instance:null,version:Ss,get config(){return i.config},set config(a){},use(a,...f){return o.has(a)||(a&&L(a.install)?(o.add(a),a.install(l,...f)):L(a)&&(o.add(a),a(l,...f))),l},mixin(a){return i.mixins.includes(a)||i.mixins.push(a),l},component(a,f){return f?(i.components[a]=f,l):i.components[a]},directive(a,f){return f?(i.directives[a]=f,l):i.directives[a]},mount(a,f,m){if(!c){const b=l._ceVNode||ve(n,r);return b.appContext=i,m===!0?m="svg":m===!1&&(m=void 0),e(b,a,m),c=!0,l._container=a,a.__vue_app__=l,Nt(b.component)}},onUnmount(a){s.push(a)},unmount(){c&&(ze(s,l._instance,16),e(null,l._container),delete l._container.__vue_app__)},provide(a,f){return i.provides[a]=f,l},runWithContext(a){const f=Au;Au=l;try{return a()}finally{Au=f}}};return l}}let Au=null;function Zo(e,u){if(re){let t=re.provides;const n=re.parent&&re.parent.provides;n===t&&(t=re.provides=Object.create(n)),t[e]=u}}function pt(e,u,t=!1){const n=re||xe;if(n||Au){let r=Au?Au._context.provides:n?n.parent==null||n.ce?n.vnode.appContext&&n.vnode.appContext.provides:n.parent.provides:void 0;if(r&&e in r)return r[e];if(arguments.length>1)return t&&L(u)?u.call(n&&n.proxy):u}}const I0={},M0=()=>Object.create(I0),P0=e=>Object.getPrototypeOf(e)===I0;function Go(e,u,t,n=!1){const r={},i=M0();e.propsDefaults=Object.create(null),R0(e,u,r,i);for(const o in e.propsOptions[0])o in r||(r[o]=void 0);t?e.props=n?r:io(r):e.type.props?e.props=r:e.props=i,e.attrs=i}function Jo(e,u,t,n){const{props:r,attrs:i,vnode:{patchFlag:o}}=e,s=z(r),[c]=e.propsOptions;let l=!1;if((n||o>0)&&!(o&16)){if(o&8){const a=e.vnode.dynamicProps;for(let f=0;f<a.length;f++){let m=a[f];if(Bt(e.emitsOptions,m))continue;const b=u[m];if(c)if(q(i,m))b!==i[m]&&(i[m]=b,l=!0);else{const p=Ee(m);r[p]=_n(c,s,p,b,e,!1)}else b!==i[m]&&(i[m]=b,l=!0)}}}else{R0(e,u,r,i)&&(l=!0);let a;for(const f in s)(!u||!q(u,f)&&((a=pu(f))===f||!q(u,a)))&&(c?t&&(t[f]!==void 0||t[a]!==void 0)&&(r[f]=_n(c,s,f,void 0,e,!0)):delete r[f]);if(i!==s)for(const f in i)(!u||!q(u,f))&&(delete i[f],l=!0)}l&&Ze(e.attrs,"set","")}function R0(e,u,t,n){const[r,i]=e.propsOptions;let o=!1,s;if(u)for(let c in u){if(zu(c))continue;const l=u[c];let a;r&&q(r,a=Ee(c))?!i||!i.includes(a)?t[a]=l:(s||(s={}))[a]=l:Bt(e.emitsOptions,c)||(!(c in n)||l!==n[c])&&(n[c]=l,o=!0)}if(i){const c=z(t),l=s||U;for(let a=0;a<i.length;a++){const f=i[a];t[f]=_n(r,c,f,l[f],e,!q(l,f))}}return o}function _n(e,u,t,n,r,i){const o=e[t];if(o!=null){const s=q(o,"default");if(s&&n===void 0){const c=o.default;if(o.type!==Function&&!o.skipFactory&&L(c)){const{propsDefaults:l}=r;if(t in l)n=l[t];else{const a=nt(r);n=l[t]=c.call(null,u),a()}}else n=c;r.ce&&r.ce._setProp(t,n)}o[0]&&(i&&!s?n=!1:o[1]&&(n===""||n===pu(t))&&(n=!0))}return n}const Ko=new WeakMap;function O0(e,u,t=!1){const n=t?Ko:u.propsCache,r=n.get(e);if(r)return r;const i=e.props,o={},s=[];let c=!1;if(!L(e)){const a=f=>{c=!0;const[m,b]=O0(f,u,!0);ce(o,m),b&&s.push(...b)};!t&&u.mixins.length&&u.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}if(!i&&!c)return K(e)&&n.set(e,yu),yu;if(j(i))for(let a=0;a<i.length;a++){const f=Ee(i[a]);fr(f)&&(o[f]=U)}else if(i)for(const a in i){const f=Ee(a);if(fr(f)){const m=i[a],b=o[f]=j(m)||L(m)?{type:m}:ce({},m),p=b.type;let F=!1,R=!0;if(j(p))for(let I=0;I<p.length;++I){const w=p[I],S=L(w)&&w.name;if(S==="Boolean"){F=!0;break}else S==="String"&&(R=!1)}else F=L(p)&&p.name==="Boolean";b[0]=F,b[1]=R,(F||q(b,"default"))&&s.push(f)}}const l=[o,s];return K(e)&&n.set(e,l),l}function fr(e){return e[0]!=="$"&&!zu(e)}const qn=e=>e[0]==="_"||e==="$stable",Hn=e=>j(e)?e.map(Oe):[Oe(e)],Qo=(e,u,t)=>{if(u._n)return u;const n=_o((...r)=>Hn(u(...r)),t);return n._c=!1,n},j0=(e,u,t)=>{const n=e._ctx;for(const r in e){if(qn(r))continue;const i=e[r];if(L(i))u[r]=Qo(r,i,n);else if(i!=null){const o=Hn(i);u[r]=()=>o}}},B0=(e,u)=>{const t=Hn(u);e.slots.default=()=>t},L0=(e,u,t)=>{for(const n in u)(t||!qn(n))&&(e[n]=u[n])},Yo=(e,u,t)=>{const n=e.slots=M0();if(e.vnode.shapeFlag&32){const r=u.__;r&&fn(n,"__",r,!0);const i=u._;i?(L0(n,u,t),t&&fn(n,"_",i,!0)):j0(u,n)}else u&&B0(e,u)},Xo=(e,u,t)=>{const{vnode:n,slots:r}=e;let i=!0,o=U;if(n.shapeFlag&32){const s=u._;s?t&&s===1?i=!1:L0(r,u,t):(i=!u.$stable,j0(u,r)),o=u}else u&&(B0(e,u),o={default:1});if(i)for(const s in r)!qn(s)&&o[s]==null&&delete r[s]},me=hs;function es(e){return us(e)}function us(e,u){const t=Pt();t.__VUE__=!0;const{insert:n,remove:r,patchProp:i,createElement:o,createText:s,createComment:c,setText:l,setElementText:a,parentNode:f,nextSibling:m,setScopeId:b=Ne,insertStaticContent:p}=e,F=(d,h,x,y=null,g=null,_=null,A=void 0,D=null,E=!!h.dynamicChildren)=>{if(d===h)return;d&&!ju(d,h)&&(y=ct(d),Se(d,g,_,!0),d=null),h.patchFlag===-2&&(E=!1,h.dynamicChildren=null);const{type:C,ref:P,shapeFlag:v}=h;switch(C){case Lt:R(d,h,x,y);break;case vu:I(d,h,x,y);break;case en:d==null&&w(h,x,y,A);break;case Ae:bu(d,h,x,y,g,_,A,D,E);break;default:v&1?T(d,h,x,y,g,_,A,D,E):v&6?mu(d,h,x,y,g,_,A,D,E):(v&64||v&128)&&C.process(d,h,x,y,g,_,A,D,E,Pu)}P!=null&&g?$u(P,d&&d.ref,_,h||d,!h):P==null&&d&&d.ref!=null&&$u(d.ref,null,_,d,!0)},R=(d,h,x,y)=>{if(d==null)n(h.el=s(h.children),x,y);else{const g=h.el=d.el;h.children!==d.children&&l(g,h.children)}},I=(d,h,x,y)=>{d==null?n(h.el=c(h.children||""),x,y):h.el=d.el},w=(d,h,x,y)=>{[d.el,d.anchor]=p(d.children,h,x,y,d.el,d.anchor)},S=({el:d,anchor:h},x,y)=>{let g;for(;d&&d!==h;)g=m(d),n(d,x,y),d=g;n(h,x,y)},k=({el:d,anchor:h})=>{let x;for(;d&&d!==h;)x=m(d),r(d),d=x;r(h)},T=(d,h,x,y,g,_,A,D,E)=>{h.type==="svg"?A="svg":h.type==="math"&&(A="mathml"),d==null?B(h,x,y,g,_,A,D,E):he(d,h,g,_,A,D,E)},B=(d,h,x,y,g,_,A,D)=>{let E,C;const{props:P,shapeFlag:v,transition:M,dirs:O}=d;if(E=d.el=o(d.type,_,P&&P.is,P),v&8?a(E,d.children):v&16&&Q(d.children,E,null,y,g,Xt(d,_),A,D),O&&au(d,null,y,"created"),$(E,d,d.scopeId,A,y),P){for(const W in P)W!=="value"&&!zu(W)&&i(E,W,null,P[W],_,y);"value"in P&&i(E,"value",null,P.value,_),(C=P.onVnodeBeforeMount)&&Pe(C,y,d)}O&&au(d,null,y,"beforeMount");const N=ts(g,M);N&&M.beforeEnter(E),n(E,h,x),((C=P&&P.onVnodeMounted)||N||O)&&me(()=>{C&&Pe(C,y,d),N&&M.enter(E),O&&au(d,null,y,"mounted")},g)},$=(d,h,x,y,g)=>{if(x&&b(d,x),y)for(let _=0;_<y.length;_++)b(d,y[_]);if(g){let _=g.subTree;if(h===_||U0(_.type)&&(_.ssContent===h||_.ssFallback===h)){const A=g.vnode;$(d,A,A.scopeId,A.slotScopeIds,g.parent)}}},Q=(d,h,x,y,g,_,A,D,E=0)=>{for(let C=E;C<d.length;C++){const P=d[C]=D?eu(d[C]):Oe(d[C]);F(null,P,h,x,y,g,_,A,D)}},he=(d,h,x,y,g,_,A)=>{const D=h.el=d.el;let{patchFlag:E,dynamicChildren:C,dirs:P}=h;E|=d.patchFlag&16;const v=d.props||U,M=h.props||U;let O;if(x&&fu(x,!1),(O=M.onVnodeBeforeUpdate)&&Pe(O,x,h,d),P&&au(h,d,x,"beforeUpdate"),x&&fu(x,!0),(v.innerHTML&&M.innerHTML==null||v.textContent&&M.textContent==null)&&a(D,""),C?pe(d.dynamicChildren,C,D,x,y,Xt(h,g),_):A||V(d,h,D,null,x,y,Xt(h,g),_,!1),E>0){if(E&16)$e(D,v,M,x,g);else if(E&2&&v.class!==M.class&&i(D,"class",null,M.class,g),E&4&&i(D,"style",v.style,M.style,g),E&8){const N=h.dynamicProps;for(let W=0;W<N.length;W++){const H=N[W],le=v[H],ae=M[H];(ae!==le||H==="value")&&i(D,H,le,ae,g,x)}}E&1&&d.children!==h.children&&a(D,h.children)}else!A&&C==null&&$e(D,v,M,x,g);((O=M.onVnodeUpdated)||P)&&me(()=>{O&&Pe(O,x,h,d),P&&au(h,d,x,"updated")},y)},pe=(d,h,x,y,g,_,A)=>{for(let D=0;D<h.length;D++){const E=d[D],C=h[D],P=E.el&&(E.type===Ae||!ju(E,C)||E.shapeFlag&198)?f(E.el):x;F(E,C,P,null,y,g,_,A,!0)}},$e=(d,h,x,y,g)=>{if(h!==x){if(h!==U)for(const _ in h)!zu(_)&&!(_ in x)&&i(d,_,h[_],null,g,y);for(const _ in x){if(zu(_))continue;const A=x[_],D=h[_];A!==D&&_!=="value"&&i(d,_,D,A,g,y)}"value"in x&&i(d,"value",h.value,x.value,g)}},bu=(d,h,x,y,g,_,A,D,E)=>{const C=h.el=d?d.el:s(""),P=h.anchor=d?d.anchor:s("");let{patchFlag:v,dynamicChildren:M,slotScopeIds:O}=h;O&&(D=D?D.concat(O):O),d==null?(n(C,x,y),n(P,x,y),Q(h.children||[],x,P,g,_,A,D,E)):v>0&&v&64&&M&&d.dynamicChildren?(pe(d.dynamicChildren,M,x,g,_,A,D),(h.key!=null||g&&h===g.subTree)&&N0(d,h,!0)):V(d,h,x,P,g,_,A,D,E)},mu=(d,h,x,y,g,_,A,D,E)=>{h.slotScopeIds=D,d==null?h.shapeFlag&512?g.ctx.activate(h,x,y,A,E):xu(h,x,y,g,_,A,E):Ue(d,h,E)},xu=(d,h,x,y,g,_,A)=>{const D=d.component=Cs(d,y,g);if(D0(d)&&(D.ctx.renderer=Pu),Es(D,!1,A),D.asyncDep){if(g&&g.registerDep(D,ue,A),!d.el){const E=D.subTree=ve(vu);I(null,E,h,x)}}else ue(D,d,h,x,g,_,A)},Ue=(d,h,x)=>{const y=h.component=d.component;if(fs(d,h,x))if(y.asyncDep&&!y.asyncResolved){J(y,h,x);return}else y.next=h,y.update();else h.el=d.el,y.vnode=h},ue=(d,h,x,y,g,_,A)=>{const D=()=>{if(d.isMounted){let{next:v,bu:M,u:O,parent:N,vnode:W}=d;{const Ie=z0(d);if(Ie){v&&(v.el=W.el,J(d,v,A)),Ie.asyncDep.then(()=>{d.isUnmounted||D()});return}}let H=v,le;fu(d,!1),v?(v.el=W.el,J(d,v,A)):v=W,M&&Zt(M),(le=v.props&&v.props.onVnodeBeforeUpdate)&&Pe(le,N,v,W),fu(d,!0);const ae=hr(d),Te=d.subTree;d.subTree=ae,F(Te,ae,f(Te.el),ct(Te),d,g,_),v.el=ae.el,H===null&&ds(d,ae.el),O&&me(O,g),(le=v.props&&v.props.onVnodeUpdated)&&me(()=>Pe(le,N,v,W),g)}else{let v;const{el:M,props:O}=h,{bm:N,m:W,parent:H,root:le,type:ae}=d,Te=Uu(h);fu(d,!1),N&&Zt(N),!Te&&(v=O&&O.onVnodeBeforeMount)&&Pe(v,H,h),fu(d,!0);{le.ce&&le.ce._def.shadowRoot!==!1&&le.ce._injectChildStyle(ae);const Ie=d.subTree=hr(d);F(null,Ie,x,y,d,g,_),h.el=Ie.el}if(W&&me(W,g),!Te&&(v=O&&O.onVnodeMounted)){const Ie=h;me(()=>Pe(v,H,Ie),g)}(h.shapeFlag&256||H&&Uu(H.vnode)&&H.vnode.shapeFlag&256)&&d.a&&me(d.a,g),d.isMounted=!0,h=x=y=null}};d.scope.on();const E=d.effect=new u0(D);d.scope.off();const C=d.update=E.run.bind(E),P=d.job=E.runIfDirty.bind(E);P.i=d,P.id=d.uid,E.scheduler=()=>Nn(P),fu(d,!0),C()},J=(d,h,x)=>{h.component=d;const y=d.vnode.props;d.vnode=h,d.next=null,Jo(d,h.props,y,x),Xo(d,h.children,x),Ke(),ir(d),Qe()},V=(d,h,x,y,g,_,A,D,E=!1)=>{const C=d&&d.children,P=d?d.shapeFlag:0,v=h.children,{patchFlag:M,shapeFlag:O}=h;if(M>0){if(M&128){st(C,v,x,y,g,_,A,D,E);return}else if(M&256){cu(C,v,x,y,g,_,A,D,E);return}}O&8?(P&16&&Mu(C,g,_),v!==C&&a(x,v)):P&16?O&16?st(C,v,x,y,g,_,A,D,E):Mu(C,g,_,!0):(P&8&&a(x,""),O&16&&Q(v,x,y,g,_,A,D,E))},cu=(d,h,x,y,g,_,A,D,E)=>{d=d||yu,h=h||yu;const C=d.length,P=h.length,v=Math.min(C,P);let M;for(M=0;M<v;M++){const O=h[M]=E?eu(h[M]):Oe(h[M]);F(d[M],O,x,null,g,_,A,D,E)}C>P?Mu(d,g,_,!0,!1,v):Q(h,x,y,g,_,A,D,E,v)},st=(d,h,x,y,g,_,A,D,E)=>{let C=0;const P=h.length;let v=d.length-1,M=P-1;for(;C<=v&&C<=M;){const O=d[C],N=h[C]=E?eu(h[C]):Oe(h[C]);if(ju(O,N))F(O,N,x,null,g,_,A,D,E);else break;C++}for(;C<=v&&C<=M;){const O=d[v],N=h[M]=E?eu(h[M]):Oe(h[M]);if(ju(O,N))F(O,N,x,null,g,_,A,D,E);else break;v--,M--}if(C>v){if(C<=M){const O=M+1,N=O<P?h[O].el:y;for(;C<=M;)F(null,h[C]=E?eu(h[C]):Oe(h[C]),x,N,g,_,A,D,E),C++}}else if(C>M)for(;C<=v;)Se(d[C],g,_,!0),C++;else{const O=C,N=C,W=new Map;for(C=N;C<=M;C++){const be=h[C]=E?eu(h[C]):Oe(h[C]);be.key!=null&&W.set(be.key,C)}let H,le=0;const ae=M-N+1;let Te=!1,Ie=0;const Ru=new Array(ae);for(C=0;C<ae;C++)Ru[C]=0;for(C=O;C<=v;C++){const be=d[C];if(le>=ae){Se(be,g,_,!0);continue}let Me;if(be.key!=null)Me=W.get(be.key);else for(H=N;H<=M;H++)if(Ru[H-N]===0&&ju(be,h[H])){Me=H;break}Me===void 0?Se(be,g,_,!0):(Ru[Me-N]=C+1,Me>=Ie?Ie=Me:Te=!0,F(be,h[Me],x,null,g,_,A,D,E),le++)}const er=Te?ns(Ru):yu;for(H=er.length-1,C=ae-1;C>=0;C--){const be=N+C,Me=h[be],ur=be+1<P?h[be+1].el:y;Ru[C]===0?F(null,Me,x,ur,g,_,A,D,E):Te&&(H<0||C!==er[H]?lu(Me,x,ur,2):H--)}}},lu=(d,h,x,y,g=null)=>{const{el:_,type:A,transition:D,children:E,shapeFlag:C}=d;if(C&6){lu(d.component.subTree,h,x,y);return}if(C&128){d.suspense.move(h,x,y);return}if(C&64){A.move(d,h,x,Pu);return}if(A===Ae){n(_,h,x);for(let v=0;v<E.length;v++)lu(E[v],h,x,y);n(d.anchor,h,x);return}if(A===en){S(d,h,x);return}if(y!==2&&C&1&&D)if(y===0)D.beforeEnter(_),n(_,h,x),me(()=>D.enter(_),g);else{const{leave:v,delayLeave:M,afterLeave:O}=D,N=()=>{d.ctx.isUnmounted?r(_):n(_,h,x)},W=()=>{v(_,()=>{N(),O&&O()})};M?M(_,N,W):W()}else n(_,h,x)},Se=(d,h,x,y=!1,g=!1)=>{const{type:_,props:A,ref:D,children:E,dynamicChildren:C,shapeFlag:P,patchFlag:v,dirs:M,cacheIndex:O}=d;if(v===-2&&(g=!1),D!=null&&(Ke(),$u(D,null,x,d,!0),Qe()),O!=null&&(h.renderCache[O]=void 0),P&256){h.ctx.deactivate(d);return}const N=P&1&&M,W=!Uu(d);let H;if(W&&(H=A&&A.onVnodeBeforeUnmount)&&Pe(H,h,d),P&6)Fi(d.component,x,y);else{if(P&128){d.suspense.unmount(x,y);return}N&&au(d,null,h,"beforeUnmount"),P&64?d.type.remove(d,h,x,Pu,y):C&&!C.hasOnce&&(_!==Ae||v>0&&v&64)?Mu(C,h,x,!1,!0):(_===Ae&&v&384||!g&&P&16)&&Mu(E,h,x),y&&Yn(d)}(W&&(H=A&&A.onVnodeUnmounted)||N)&&me(()=>{H&&Pe(H,h,d),N&&au(d,null,h,"unmounted")},x)},Yn=d=>{const{type:h,el:x,anchor:y,transition:g}=d;if(h===Ae){Ai(x,y);return}if(h===en){k(d);return}const _=()=>{r(x),g&&!g.persisted&&g.afterLeave&&g.afterLeave()};if(d.shapeFlag&1&&g&&!g.persisted){const{leave:A,delayLeave:D}=g,E=()=>A(x,_);D?D(d.el,_,E):E()}else _()},Ai=(d,h)=>{let x;for(;d!==h;)x=m(d),r(d),d=x;r(h)},Fi=(d,h,x)=>{const{bum:y,scope:g,job:_,subTree:A,um:D,m:E,a:C,parent:P,slots:{__:v}}=d;dr(E),dr(C),y&&Zt(y),P&&j(v)&&v.forEach(M=>{P.renderCache[M]=void 0}),g.stop(),_&&(_.flags|=8,Se(A,d,h,x)),D&&me(D,h),me(()=>{d.isUnmounted=!0},h),h&&h.pendingBranch&&!h.isUnmounted&&d.asyncDep&&!d.asyncResolved&&d.suspenseId===h.pendingId&&(h.deps--,h.deps===0&&h.resolve())},Mu=(d,h,x,y=!1,g=!1,_=0)=>{for(let A=_;A<d.length;A++)Se(d[A],h,x,y,g)},ct=d=>{if(d.shapeFlag&6)return ct(d.component.subTree);if(d.shapeFlag&128)return d.suspense.next();const h=m(d.anchor||d.el),x=h&&h[yo];return x?m(x):h};let Vt=!1;const Xn=(d,h,x)=>{d==null?h._vnode&&Se(h._vnode,null,null,!0):F(h._vnode||null,d,h,null,null,null,x),h._vnode=d,Vt||(Vt=!0,ir(),k0(),Vt=!1)},Pu={p:F,um:Se,m:lu,r:Yn,mt:xu,mc:Q,pc:V,pbc:pe,n:ct,o:e};return{render:Xn,hydrate:void 0,createApp:Wo(Xn)}}function Xt({type:e,props:u},t){return t==="svg"&&e==="foreignObject"||t==="mathml"&&e==="annotation-xml"&&u&&u.encoding&&u.encoding.includes("html")?void 0:t}function fu({effect:e,job:u},t){t?(e.flags|=32,u.flags|=4):(e.flags&=-33,u.flags&=-5)}function ts(e,u){return(!e||e&&!e.pendingBranch)&&u&&!u.persisted}function N0(e,u,t=!1){const n=e.children,r=u.children;if(j(n)&&j(r))for(let i=0;i<n.length;i++){const o=n[i];let s=r[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=r[i]=eu(r[i]),s.el=o.el),!t&&s.patchFlag!==-2&&N0(o,s)),s.type===Lt&&(s.el=o.el),s.type===vu&&!s.el&&(s.el=o.el)}}function ns(e){const u=e.slice(),t=[0];let n,r,i,o,s;const c=e.length;for(n=0;n<c;n++){const l=e[n];if(l!==0){if(r=t[t.length-1],e[r]<l){u[n]=r,t.push(n);continue}for(i=0,o=t.length-1;i<o;)s=i+o>>1,e[t[s]]<l?i=s+1:o=s;l<e[t[i]]&&(i>0&&(u[n]=t[i-1]),t[i]=n)}}for(i=t.length,o=t[i-1];i-- >0;)t[i]=o,o=u[o];return t}function z0(e){const u=e.subTree.component;if(u)return u.asyncDep&&!u.asyncResolved?u:z0(u)}function dr(e){if(e)for(let u=0;u<e.length;u++)e[u].flags|=8}const rs=Symbol.for("v-scx"),is=()=>pt(rs);function bt(e,u,t){return q0(e,u,t)}function q0(e,u,t=U){const{immediate:n,deep:r,flush:i,once:o}=t,s=ce({},t),c=u&&n||!u&&i!=="post";let l;if(Qu){if(i==="sync"){const b=is();l=b.__watcherHandles||(b.__watcherHandles=[])}else if(!c){const b=()=>{};return b.stop=Ne,b.resume=Ne,b.pause=Ne,b}}const a=re;s.call=(b,p,F)=>ze(b,a,p,F);let f=!1;i==="post"?s.scheduler=b=>{me(b,a&&a.suspense)}:i!=="sync"&&(f=!0,s.scheduler=(b,p)=>{p?b():Nn(b)}),s.augmentJob=b=>{u&&(b.flags|=4),f&&(b.flags|=2,a&&(b.id=a.uid,b.i=a))};const m=po(e,u,s);return Qu&&(l?l.push(m):c&&m()),m}function os(e,u,t){const n=this.proxy,r=Y(e)?e.includes(".")?H0(n,e):()=>n[e]:e.bind(n,n);let i;L(u)?i=u:(i=u.handler,t=u);const o=nt(this),s=q0(r,i.bind(n),t);return o(),s}function H0(e,u){const t=u.split(".");return()=>{let n=e;for(let r=0;r<t.length&&n;r++)n=n[t[r]];return n}}const ss=(e,u)=>u==="modelValue"||u==="model-value"?e.modelModifiers:e[`${u}Modifiers`]||e[`${Ee(u)}Modifiers`]||e[`${pu(u)}Modifiers`];function cs(e,u,...t){if(e.isUnmounted)return;const n=e.vnode.props||U;let r=t;const i=u.startsWith("update:"),o=i&&ss(n,u.slice(7));o&&(o.trim&&(r=t.map(a=>Y(a)?a.trim():a)),o.number&&(r=t.map(Mi)));let s,c=n[s=Wt(u)]||n[s=Wt(Ee(u))];!c&&i&&(c=n[s=Wt(pu(u))]),c&&ze(c,e,6,r);const l=n[s+"Once"];if(l){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,ze(l,e,6,r)}}function $0(e,u,t=!1){const n=u.emitsCache,r=n.get(e);if(r!==void 0)return r;const i=e.emits;let o={},s=!1;if(!L(e)){const c=l=>{const a=$0(l,u,!0);a&&(s=!0,ce(o,a))};!t&&u.mixins.length&&u.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}return!i&&!s?(K(e)&&n.set(e,null),null):(j(i)?i.forEach(c=>o[c]=null):ce(o,i),K(e)&&n.set(e,o),o)}function Bt(e,u){return!e||!St(u)?!1:(u=u.slice(2).replace(/Once$/,""),q(e,u[0].toLowerCase()+u.slice(1))||q(e,pu(u))||q(e,u))}function hr(e){const{type:u,vnode:t,proxy:n,withProxy:r,propsOptions:[i],slots:o,attrs:s,emit:c,render:l,renderCache:a,props:f,data:m,setupState:b,ctx:p,inheritAttrs:F}=e,R=yt(e);let I,w;try{if(t.shapeFlag&4){const k=r||n,T=k;I=Oe(l.call(T,k,a,f,b,m,p)),w=s}else{const k=u;I=Oe(k.length>1?k(f,{attrs:s,slots:o,emit:c}):k(f,null)),w=u.props?s:ls(s)}}catch(k){Wu.length=0,Ot(k,e,1),I=ve(vu)}let S=I;if(w&&F!==!1){const k=Object.keys(w),{shapeFlag:T}=S;k.length&&T&7&&(i&&k.some(Fn)&&(w=as(w,i)),S=wu(S,w,!1,!0))}return t.dirs&&(S=wu(S,null,!1,!0),S.dirs=S.dirs?S.dirs.concat(t.dirs):t.dirs),t.transition&&zn(S,t.transition),I=S,yt(R),I}const ls=e=>{let u;for(const t in e)(t==="class"||t==="style"||St(t))&&((u||(u={}))[t]=e[t]);return u},as=(e,u)=>{const t={};for(const n in e)(!Fn(n)||!(n.slice(9)in u))&&(t[n]=e[n]);return t};function fs(e,u,t){const{props:n,children:r,component:i}=e,{props:o,children:s,patchFlag:c}=u,l=i.emitsOptions;if(u.dirs||u.transition)return!0;if(t&&c>=0){if(c&1024)return!0;if(c&16)return n?pr(n,o,l):!!o;if(c&8){const a=u.dynamicProps;for(let f=0;f<a.length;f++){const m=a[f];if(o[m]!==n[m]&&!Bt(l,m))return!0}}}else return(r||s)&&(!s||!s.$stable)?!0:n===o?!1:n?o?pr(n,o,l):!0:!!o;return!1}function pr(e,u,t){const n=Object.keys(u);if(n.length!==Object.keys(e).length)return!0;for(let r=0;r<n.length;r++){const i=n[r];if(u[i]!==e[i]&&!Bt(t,i))return!0}return!1}function ds({vnode:e,parent:u},t){for(;u;){const n=u.subTree;if(n.suspense&&n.suspense.activeBranch===e&&(n.el=e.el),n===e)(e=u.vnode).el=t,u=u.parent;else break}}const U0=e=>e.__isSuspense;function hs(e,u){u&&u.pendingBranch?j(e)?u.effects.push(...e):u.effects.push(e):go(e)}const Ae=Symbol.for("v-fgt"),Lt=Symbol.for("v-txt"),vu=Symbol.for("v-cmt"),en=Symbol.for("v-stc"),Wu=[];let ge=null;function je(e=!1){Wu.push(ge=e?null:[])}function ps(){Wu.pop(),ge=Wu[Wu.length-1]||null}let Ku=1;function br(e,u=!1){Ku+=e,e<0&&ge&&u&&(ge.hasOnce=!0)}function V0(e){return e.dynamicChildren=Ku>0?ge||yu:null,ps(),Ku>0&&ge&&ge.push(e),e}function Je(e,u,t,n,r,i){return V0(Et(e,u,t,n,r,i,!0))}function bs(e,u,t,n,r){return V0(ve(e,u,t,n,r,!0))}function W0(e){return e?e.__v_isVNode===!0:!1}function ju(e,u){return e.type===u.type&&e.key===u.key}const Z0=({key:e})=>e??null,mt=({ref:e,ref_key:u,ref_for:t})=>(typeof e=="number"&&(e=""+e),e!=null?Y(e)||ie(e)||L(e)?{i:xe,r:e,k:u,f:!!t}:e:null);function Et(e,u=null,t=null,n=0,r=null,i=e===Ae?0:1,o=!1,s=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:u,key:u&&Z0(u),ref:u&&mt(u),scopeId:C0,slotScopeIds:null,children:t,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:n,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:xe};return s?($n(c,t),i&128&&e.normalize(c)):t&&(c.shapeFlag|=Y(t)?8:16),Ku>0&&!o&&ge&&(c.patchFlag>0||i&6)&&c.patchFlag!==32&&ge.push(c),c}const ve=ms;function ms(e,u=null,t=null,n=0,r=null,i=!1){if((!e||e===Bo)&&(e=vu),W0(e)){const s=wu(e,u,!0);return t&&$n(s,t),Ku>0&&!i&&ge&&(s.shapeFlag&6?ge[ge.indexOf(e)]=s:ge.push(s)),s.patchFlag=-2,s}if(ws(e)&&(e=e.__vccOpts),u){u=xs(u);let{class:s,style:c}=u;s&&!Y(s)&&(u.class=ye(s)),K(c)&&(Ln(c)&&!j(c)&&(c=ce({},c)),u.style=Sn(c))}const o=Y(e)?1:U0(e)?128:Co(e)?64:K(e)?4:L(e)?2:0;return Et(e,u,t,n,r,o,i,!0)}function xs(e){return e?Ln(e)||P0(e)?ce({},e):e:null}function wu(e,u,t=!1,n=!1){const{props:r,ref:i,patchFlag:o,children:s,transition:c}=e,l=u?_s(r||{},u):r,a={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Z0(l),ref:u&&u.ref?t&&i?j(i)?i.concat(mt(u)):[i,mt(u)]:mt(u):i,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:s,target:e.target,targetStart:e.targetStart,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:u&&e.type!==Ae?o===-1?16:o|16:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:c,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wu(e.ssContent),ssFallback:e.ssFallback&&wu(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce};return c&&n&&zn(a,c.clone(a)),a}function gs(e=" ",u=0){return ve(Lt,null,e,u)}function Oe(e){return e==null||typeof e=="boolean"?ve(vu):j(e)?ve(Ae,null,e.slice()):W0(e)?eu(e):ve(Lt,null,String(e))}function eu(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:wu(e)}function $n(e,u){let t=0;const{shapeFlag:n}=e;if(u==null)u=null;else if(j(u))t=16;else if(typeof u=="object")if(n&65){const r=u.default;r&&(r._c&&(r._d=!1),$n(e,r()),r._c&&(r._d=!0));return}else{t=32;const r=u._;!r&&!P0(u)?u._ctx=xe:r===3&&xe&&(xe.slots._===1?u._=1:(u._=2,e.patchFlag|=1024))}else L(u)?(u={default:u,_ctx:xe},t=32):(u=String(u),n&64?(t=16,u=[gs(u)]):t=8);e.children=u,e.shapeFlag|=t}function _s(...e){const u={};for(let t=0;t<e.length;t++){const n=e[t];for(const r in n)if(r==="class")u.class!==n.class&&(u.class=ye([u.class,n.class]));else if(r==="style")u.style=Sn([u.style,n.style]);else if(St(r)){const i=u[r],o=n[r];o&&i!==o&&!(j(i)&&i.includes(o))&&(u[r]=i?[].concat(i,o):o)}else r!==""&&(u[r]=n[r])}return u}function Pe(e,u,t,n=null){ze(e,u,7,[t,n])}const ks=T0();let ys=0;function Cs(e,u,t){const n=e.type,r=(u?u.appContext:e.appContext)||ks,i={uid:ys++,vnode:e,type:n,parent:u,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Ni(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:u?u.provides:Object.create(r.provides),ids:u?u.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:O0(n,r),emitsOptions:$0(n,r),emit:null,emitted:null,propsDefaults:U,inheritAttrs:n.inheritAttrs,ctx:U,data:U,props:U,attrs:U,slots:U,refs:U,setupState:U,setupContext:null,suspense:t,suspenseId:t?t.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=u?u.root:i,i.emit=cs.bind(null,i),e.ce&&e.ce(i),i}let re=null,Dt,kn;{const e=Pt(),u=(t,n)=>{let r;return(r=e[t])||(r=e[t]=[]),r.push(n),i=>{r.length>1?r.forEach(o=>o(i)):r[0](i)}};Dt=u("__VUE_INSTANCE_SETTERS__",t=>re=t),kn=u("__VUE_SSR_SETTERS__",t=>Qu=t)}const nt=e=>{const u=re;return Dt(e),e.scope.on(),()=>{e.scope.off(),Dt(u)}},mr=()=>{re&&re.scope.off(),Dt(null)};function G0(e){return e.vnode.shapeFlag&4}let Qu=!1;function Es(e,u=!1,t=!1){u&&kn(u);const{props:n,children:r}=e.vnode,i=G0(e);Go(e,n,i,u),Yo(e,r,t||u);const o=i?Ds(e,u):void 0;return u&&kn(!1),o}function Ds(e,u){const t=e.type;e.accessCache=Object.create(null),e.proxy=new Proxy(e.ctx,No);const{setup:n}=t;if(n){Ke();const r=e.setupContext=n.length>1?Fs(e):null,i=nt(e),o=tt(n,e,0,[e.props,r]),s=Jr(o);if(Qe(),i(),(s||e.sp)&&!Uu(e)&&E0(e),s){if(o.then(mr,mr),u)return o.then(c=>{xr(e,c)}).catch(c=>{Ot(c,e,0)});e.asyncDep=o}else xr(e,o)}else J0(e)}function xr(e,u,t){L(u)?e.type.__ssrInlineRender?e.ssrRender=u:e.render=u:K(u)&&(e.setupState=x0(u)),J0(e)}function J0(e,u,t){const n=e.type;e.render||(e.render=n.render||Ne);{const r=nt(e);Ke();try{zo(e)}finally{Qe(),r()}}}const As={get(e,u){return ne(e,"get",""),e[u]}};function Fs(e){const u=t=>{e.exposed=t||{}};return{attrs:new Proxy(e.attrs,As),slots:e.slots,emit:e.emit,expose:u}}function Nt(e){return e.exposed?e.exposeProxy||(e.exposeProxy=new Proxy(x0(oo(e.exposed)),{get(u,t){if(t in u)return u[t];if(t in Vu)return Vu[t](e)},has(u,t){return t in u||t in Vu}})):e.proxy}function vs(e,u=!0){return L(e)?e.displayName||e.name:e.name||u&&e.__name}function ws(e){return L(e)&&"__vccOpts"in e}const K0=(e,u)=>fo(e,u,Qu),Ss="3.5.17";/**
* @vue/runtime-dom v3.5.17
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let yn;const gr=typeof window<"u"&&window.trustedTypes;if(gr)try{yn=gr.createPolicy("vue",{createHTML:e=>e})}catch{}const Q0=yn?e=>yn.createHTML(e):e=>e,Ts="http://www.w3.org/2000/svg",Is="http://www.w3.org/1998/Math/MathML",We=typeof document<"u"?document:null,_r=We&&We.createElement("template"),Ms={insert:(e,u,t)=>{u.insertBefore(e,t||null)},remove:e=>{const u=e.parentNode;u&&u.removeChild(e)},createElement:(e,u,t,n)=>{const r=u==="svg"?We.createElementNS(Ts,e):u==="mathml"?We.createElementNS(Is,e):t?We.createElement(e,{is:t}):We.createElement(e);return e==="select"&&n&&n.multiple!=null&&r.setAttribute("multiple",n.multiple),r},createText:e=>We.createTextNode(e),createComment:e=>We.createComment(e),setText:(e,u)=>{e.nodeValue=u},setElementText:(e,u)=>{e.textContent=u},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>We.querySelector(e),setScopeId(e,u){e.setAttribute(u,"")},insertStaticContent(e,u,t,n,r,i){const o=t?t.previousSibling:u.lastChild;if(r&&(r===i||r.nextSibling))for(;u.insertBefore(r.cloneNode(!0),t),!(r===i||!(r=r.nextSibling)););else{_r.innerHTML=Q0(n==="svg"?`<svg>${e}</svg>`:n==="mathml"?`<math>${e}</math>`:e);const s=_r.content;if(n==="svg"||n==="mathml"){const c=s.firstChild;for(;c.firstChild;)s.appendChild(c.firstChild);s.removeChild(c)}u.insertBefore(s,t)}return[o?o.nextSibling:u.firstChild,t?t.previousSibling:u.lastChild]}},Ps=Symbol("_vtc");function Rs(e,u,t){const n=e[Ps];n&&(u=(u?[u,...n]:[...n]).join(" ")),u==null?e.removeAttribute("class"):t?e.setAttribute("class",u):e.className=u}const At=Symbol("_vod"),Y0=Symbol("_vsh"),Os={beforeMount(e,{value:u},{transition:t}){e[At]=e.style.display==="none"?"":e.style.display,t&&u?t.beforeEnter(e):Bu(e,u)},mounted(e,{value:u},{transition:t}){t&&u&&t.enter(e)},updated(e,{value:u,oldValue:t},{transition:n}){!u!=!t&&(n?u?(n.beforeEnter(e),Bu(e,!0),n.enter(e)):n.leave(e,()=>{Bu(e,!1)}):Bu(e,u))},beforeUnmount(e,{value:u}){Bu(e,u)}};function Bu(e,u){e.style.display=u?e[At]:"none",e[Y0]=!u}const js=Symbol(""),Bs=/(^|;)\s*display\s*:/;function Ls(e,u,t){const n=e.style,r=Y(t);let i=!1;if(t&&!r){if(u)if(Y(u))for(const o of u.split(";")){const s=o.slice(0,o.indexOf(":")).trim();t[s]==null&&xt(n,s,"")}else for(const o in u)t[o]==null&&xt(n,o,"");for(const o in t)o==="display"&&(i=!0),xt(n,o,t[o])}else if(r){if(u!==t){const o=n[js];o&&(t+=";"+o),n.cssText=t,i=Bs.test(t)}}else u&&e.removeAttribute("style");At in e&&(e[At]=i?n.display:"",e[Y0]&&(n.display="none"))}const kr=/\s*!important$/;function xt(e,u,t){if(j(t))t.forEach(n=>xt(e,u,n));else if(t==null&&(t=""),u.startsWith("--"))e.setProperty(u,t);else{const n=Ns(e,u);kr.test(t)?e.setProperty(pu(n),t.replace(kr,""),"important"):e[n]=t}}const yr=["Webkit","Moz","ms"],un={};function Ns(e,u){const t=un[u];if(t)return t;let n=Ee(u);if(n!=="filter"&&n in e)return un[u]=n;n=Mt(n);for(let r=0;r<yr.length;r++){const i=yr[r]+n;if(i in e)return un[u]=i}return u}const Cr="http://www.w3.org/1999/xlink";function Er(e,u,t,n,r,i=Li(u)){n&&u.startsWith("xlink:")?t==null?e.removeAttributeNS(Cr,u.slice(6,u.length)):e.setAttributeNS(Cr,u,t):t==null||i&&!Yr(t)?e.removeAttribute(u):e.setAttribute(u,i?"":su(t)?String(t):t)}function Dr(e,u,t,n,r){if(u==="innerHTML"||u==="textContent"){t!=null&&(e[u]=u==="innerHTML"?Q0(t):t);return}const i=e.tagName;if(u==="value"&&i!=="PROGRESS"&&!i.includes("-")){const s=i==="OPTION"?e.getAttribute("value")||"":e.value,c=t==null?e.type==="checkbox"?"on":"":String(t);(s!==c||!("_value"in e))&&(e.value=c),t==null&&e.removeAttribute(u),e._value=t;return}let o=!1;if(t===""||t==null){const s=typeof e[u];s==="boolean"?t=Yr(t):t==null&&s==="string"?(t="",o=!0):s==="number"&&(t=0,o=!0)}try{e[u]=t}catch{}o&&e.removeAttribute(r||u)}function zs(e,u,t,n){e.addEventListener(u,t,n)}function qs(e,u,t,n){e.removeEventListener(u,t,n)}const Ar=Symbol("_vei");function Hs(e,u,t,n,r=null){const i=e[Ar]||(e[Ar]={}),o=i[u];if(n&&o)o.value=n;else{const[s,c]=$s(u);if(n){const l=i[u]=Ws(n,r);zs(e,s,l,c)}else o&&(qs(e,s,o,c),i[u]=void 0)}}const Fr=/(?:Once|Passive|Capture)$/;function $s(e){let u;if(Fr.test(e)){u={};let n;for(;n=e.match(Fr);)e=e.slice(0,e.length-n[0].length),u[n[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):pu(e.slice(2)),u]}let tn=0;const Us=Promise.resolve(),Vs=()=>tn||(Us.then(()=>tn=0),tn=Date.now());function Ws(e,u){const t=n=>{if(!n._vts)n._vts=Date.now();else if(n._vts<=t.attached)return;ze(Zs(n,t.value),u,5,[n])};return t.value=e,t.attached=Vs(),t}function Zs(e,u){if(j(u)){const t=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{t.call(e),e._stopped=!0},u.map(n=>r=>!r._stopped&&n&&n(r))}else return u}const vr=e=>e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)>96&&e.charCodeAt(2)<123,Gs=(e,u,t,n,r,i)=>{const o=r==="svg";u==="class"?Rs(e,n,o):u==="style"?Ls(e,t,n):St(u)?Fn(u)||Hs(e,u,t,n,i):(u[0]==="."?(u=u.slice(1),!0):u[0]==="^"?(u=u.slice(1),!1):Js(e,u,n,o))?(Dr(e,u,n),!e.tagName.includes("-")&&(u==="value"||u==="checked"||u==="selected")&&Er(e,u,n,o,i,u!=="value")):e._isVueCE&&(/[A-Z]/.test(u)||!Y(n))?Dr(e,Ee(u),n,i,u):(u==="true-value"?e._trueValue=n:u==="false-value"&&(e._falseValue=n),Er(e,u,n,o))};function Js(e,u,t,n){if(n)return!!(u==="innerHTML"||u==="textContent"||u in e&&vr(u)&&L(t));if(u==="spellcheck"||u==="draggable"||u==="translate"||u==="autocorrect"||u==="form"||u==="list"&&e.tagName==="INPUT"||u==="type"&&e.tagName==="TEXTAREA")return!1;if(u==="width"||u==="height"){const r=e.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return vr(u)&&Y(t)?!1:u in e}const Ks=ce({patchProp:Gs},Ms);let wr;function Qs(){return wr||(wr=es(Ks))}const Ys=(...e)=>{const u=Qs().createApp(...e),{mount:t}=u;return u.mount=n=>{const r=ec(n);if(!r)return;const i=u._component;!L(i)&&!i.render&&!i.template&&(i.template=r.innerHTML),r.nodeType===1&&(r.textContent="");const o=t(r,!1,Xs(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},u};function Xs(e){if(e instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&e instanceof MathMLElement)return"mathml"}function ec(e){return Y(e)?document.querySelector(e):e}const zt=(e,u)=>{const t=e.__vccOpts||e;for(const[n,r]of u)t[n]=r;return t},uc={},tc={class:"text-white"};function nc(e,u){return je(),Je("div",tc," HelloSkills Memory ")}const rc=zt(uc,[["render",nc]]),Sr={};function ic(e){let u=Sr[e];if(u)return u;u=Sr[e]=[];for(let t=0;t<128;t++){const n=String.fromCharCode(t);u.push(n)}for(let t=0;t<e.length;t++){const n=e.charCodeAt(t);u[n]="%"+("0"+n.toString(16).toUpperCase()).slice(-2)}return u}function Su(e,u){typeof u!="string"&&(u=Su.defaultChars);const t=ic(u);return e.replace(/(%[a-f0-9]{2})+/gi,function(n){let r="";for(let i=0,o=n.length;i<o;i+=3){const s=parseInt(n.slice(i+1,i+3),16);if(s<128){r+=t[s];continue}if((s&224)===192&&i+3<o){const c=parseInt(n.slice(i+4,i+6),16);if((c&192)===128){const l=s<<6&1984|c&63;l<128?r+="��":r+=String.fromCharCode(l),i+=3;continue}}if((s&240)===224&&i+6<o){const c=parseInt(n.slice(i+4,i+6),16),l=parseInt(n.slice(i+7,i+9),16);if((c&192)===128&&(l&192)===128){const a=s<<12&61440|c<<6&4032|l&63;a<2048||a>=55296&&a<=57343?r+="���":r+=String.fromCharCode(a),i+=6;continue}}if((s&248)===240&&i+9<o){const c=parseInt(n.slice(i+4,i+6),16),l=parseInt(n.slice(i+7,i+9),16),a=parseInt(n.slice(i+10,i+12),16);if((c&192)===128&&(l&192)===128&&(a&192)===128){let f=s<<18&1835008|c<<12&258048|l<<6&4032|a&63;f<65536||f>1114111?r+="����":(f-=65536,r+=String.fromCharCode(55296+(f>>10),56320+(f&1023))),i+=9;continue}}r+="�"}return r})}Su.defaultChars=";/?:@&=+$,#";Su.componentChars="";const Tr={};function oc(e){let u=Tr[e];if(u)return u;u=Tr[e]=[];for(let t=0;t<128;t++){const n=String.fromCharCode(t);/^[0-9a-z]$/i.test(n)?u.push(n):u.push("%"+("0"+t.toString(16).toUpperCase()).slice(-2))}for(let t=0;t<e.length;t++)u[e.charCodeAt(t)]=e[t];return u}function rt(e,u,t){typeof u!="string"&&(t=u,u=rt.defaultChars),typeof t>"u"&&(t=!0);const n=oc(u);let r="";for(let i=0,o=e.length;i<o;i++){const s=e.charCodeAt(i);if(t&&s===37&&i+2<o&&/^[0-9a-f]{2}$/i.test(e.slice(i+1,i+3))){r+=e.slice(i,i+3),i+=2;continue}if(s<128){r+=n[s];continue}if(s>=55296&&s<=57343){if(s>=55296&&s<=56319&&i+1<o){const c=e.charCodeAt(i+1);if(c>=56320&&c<=57343){r+=encodeURIComponent(e[i]+e[i+1]),i++;continue}}r+="%EF%BF%BD";continue}r+=encodeURIComponent(e[i])}return r}rt.defaultChars=";/?:@&=+$,-_.!~*'()#";rt.componentChars="-_.!~*'()";function Un(e){let u="";return u+=e.protocol||"",u+=e.slashes?"//":"",u+=e.auth?e.auth+"@":"",e.hostname&&e.hostname.indexOf(":")!==-1?u+="["+e.hostname+"]":u+=e.hostname||"",u+=e.port?":"+e.port:"",u+=e.pathname||"",u+=e.search||"",u+=e.hash||"",u}function Ft(){this.protocol=null,this.slashes=null,this.auth=null,this.port=null,this.hostname=null,this.hash=null,this.search=null,this.pathname=null}const sc=/^([a-z0-9.+-]+:)/i,cc=/:[0-9]*$/,lc=/^(\/\/?(?!\/)[^\?\s]*)(\?[^\s]*)?$/,ac=["<",">",'"',"`"," ","\r",`
`,"	"],fc=["{","}","|","\\","^","`"].concat(ac),dc=["'"].concat(fc),Ir=["%","/","?",";","#"].concat(dc),Mr=["/","?","#"],hc=255,Pr=/^[+a-z0-9A-Z_-]{0,63}$/,pc=/^([+a-z0-9A-Z_-]{0,63})(.*)$/,Rr={javascript:!0,"javascript:":!0},Or={http:!0,https:!0,ftp:!0,gopher:!0,file:!0,"http:":!0,"https:":!0,"ftp:":!0,"gopher:":!0,"file:":!0};function Vn(e,u){if(e&&e instanceof Ft)return e;const t=new Ft;return t.parse(e,u),t}Ft.prototype.parse=function(e,u){let t,n,r,i=e;if(i=i.trim(),!u&&e.split("#").length===1){const l=lc.exec(i);if(l)return this.pathname=l[1],l[2]&&(this.search=l[2]),this}let o=sc.exec(i);if(o&&(o=o[0],t=o.toLowerCase(),this.protocol=o,i=i.substr(o.length)),(u||o||i.match(/^\/\/[^@\/]+@[^@\/]+/))&&(r=i.substr(0,2)==="//",r&&!(o&&Rr[o])&&(i=i.substr(2),this.slashes=!0)),!Rr[o]&&(r||o&&!Or[o])){let l=-1;for(let p=0;p<Mr.length;p++)n=i.indexOf(Mr[p]),n!==-1&&(l===-1||n<l)&&(l=n);let a,f;l===-1?f=i.lastIndexOf("@"):f=i.lastIndexOf("@",l),f!==-1&&(a=i.slice(0,f),i=i.slice(f+1),this.auth=a),l=-1;for(let p=0;p<Ir.length;p++)n=i.indexOf(Ir[p]),n!==-1&&(l===-1||n<l)&&(l=n);l===-1&&(l=i.length),i[l-1]===":"&&l--;const m=i.slice(0,l);i=i.slice(l),this.parseHost(m),this.hostname=this.hostname||"";const b=this.hostname[0]==="["&&this.hostname[this.hostname.length-1]==="]";if(!b){const p=this.hostname.split(/\./);for(let F=0,R=p.length;F<R;F++){const I=p[F];if(I&&!I.match(Pr)){let w="";for(let S=0,k=I.length;S<k;S++)I.charCodeAt(S)>127?w+="x":w+=I[S];if(!w.match(Pr)){const S=p.slice(0,F),k=p.slice(F+1),T=I.match(pc);T&&(S.push(T[1]),k.unshift(T[2])),k.length&&(i=k.join(".")+i),this.hostname=S.join(".");break}}}}this.hostname.length>hc&&(this.hostname=""),b&&(this.hostname=this.hostname.substr(1,this.hostname.length-2))}const s=i.indexOf("#");s!==-1&&(this.hash=i.substr(s),i=i.slice(0,s));const c=i.indexOf("?");return c!==-1&&(this.search=i.substr(c),i=i.slice(0,c)),i&&(this.pathname=i),Or[t]&&this.hostname&&!this.pathname&&(this.pathname=""),this};Ft.prototype.parseHost=function(e){let u=cc.exec(e);u&&(u=u[0],u!==":"&&(this.port=u.substr(1)),e=e.substr(0,e.length-u.length)),e&&(this.hostname=e)};const bc=Object.freeze(Object.defineProperty({__proto__:null,decode:Su,encode:rt,format:Un,parse:Vn},Symbol.toStringTag,{value:"Module"})),X0=/[\0-\uD7FF\uE000-\uFFFF]|[\uD800-\uDBFF][\uDC00-\uDFFF]|[\uD800-\uDBFF](?![\uDC00-\uDFFF])|(?:[^\uD800-\uDBFF]|^)[\uDC00-\uDFFF]/,ei=/[\0-\x1F\x7F-\x9F]/,mc=/[\xAD\u0600-\u0605\u061C\u06DD\u070F\u0890\u0891\u08E2\u180E\u200B-\u200F\u202A-\u202E\u2060-\u2064\u2066-\u206F\uFEFF\uFFF9-\uFFFB]|\uD804[\uDCBD\uDCCD]|\uD80D[\uDC30-\uDC3F]|\uD82F[\uDCA0-\uDCA3]|\uD834[\uDD73-\uDD7A]|\uDB40[\uDC01\uDC20-\uDC7F]/,Wn=/[!-#%-\*,-\/:;\?@\[-\]_\{\}\xA1\xA7\xAB\xB6\xB7\xBB\xBF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061D-\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1B7D\u1B7E\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52-\u2E5D\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]|\uD800[\uDD00-\uDD02\uDF9F\uDFD0]|\uD801\uDD6F|\uD802[\uDC57\uDD1F\uDD3F\uDE50-\uDE58\uDE7F\uDEF0-\uDEF6\uDF39-\uDF3F\uDF99-\uDF9C]|\uD803[\uDEAD\uDF55-\uDF59\uDF86-\uDF89]|\uD804[\uDC47-\uDC4D\uDCBB\uDCBC\uDCBE-\uDCC1\uDD40-\uDD43\uDD74\uDD75\uDDC5-\uDDC8\uDDCD\uDDDB\uDDDD-\uDDDF\uDE38-\uDE3D\uDEA9]|\uD805[\uDC4B-\uDC4F\uDC5A\uDC5B\uDC5D\uDCC6\uDDC1-\uDDD7\uDE41-\uDE43\uDE60-\uDE6C\uDEB9\uDF3C-\uDF3E]|\uD806[\uDC3B\uDD44-\uDD46\uDDE2\uDE3F-\uDE46\uDE9A-\uDE9C\uDE9E-\uDEA2\uDF00-\uDF09]|\uD807[\uDC41-\uDC45\uDC70\uDC71\uDEF7\uDEF8\uDF43-\uDF4F\uDFFF]|\uD809[\uDC70-\uDC74]|\uD80B[\uDFF1\uDFF2]|\uD81A[\uDE6E\uDE6F\uDEF5\uDF37-\uDF3B\uDF44]|\uD81B[\uDE97-\uDE9A\uDFE2]|\uD82F\uDC9F|\uD836[\uDE87-\uDE8B]|\uD83A[\uDD5E\uDD5F]/,ui=/[\$\+<->\^`\|~\xA2-\xA6\xA8\xA9\xAC\xAE-\xB1\xB4\xB8\xD7\xF7\u02C2-\u02C5\u02D2-\u02DF\u02E5-\u02EB\u02ED\u02EF-\u02FF\u0375\u0384\u0385\u03F6\u0482\u058D-\u058F\u0606-\u0608\u060B\u060E\u060F\u06DE\u06E9\u06FD\u06FE\u07F6\u07FE\u07FF\u0888\u09F2\u09F3\u09FA\u09FB\u0AF1\u0B70\u0BF3-\u0BFA\u0C7F\u0D4F\u0D79\u0E3F\u0F01-\u0F03\u0F13\u0F15-\u0F17\u0F1A-\u0F1F\u0F34\u0F36\u0F38\u0FBE-\u0FC5\u0FC7-\u0FCC\u0FCE\u0FCF\u0FD5-\u0FD8\u109E\u109F\u1390-\u1399\u166D\u17DB\u1940\u19DE-\u19FF\u1B61-\u1B6A\u1B74-\u1B7C\u1FBD\u1FBF-\u1FC1\u1FCD-\u1FCF\u1FDD-\u1FDF\u1FED-\u1FEF\u1FFD\u1FFE\u2044\u2052\u207A-\u207C\u208A-\u208C\u20A0-\u20C0\u2100\u2101\u2103-\u2106\u2108\u2109\u2114\u2116-\u2118\u211E-\u2123\u2125\u2127\u2129\u212E\u213A\u213B\u2140-\u2144\u214A-\u214D\u214F\u218A\u218B\u2190-\u2307\u230C-\u2328\u232B-\u2426\u2440-\u244A\u249C-\u24E9\u2500-\u2767\u2794-\u27C4\u27C7-\u27E5\u27F0-\u2982\u2999-\u29D7\u29DC-\u29FB\u29FE-\u2B73\u2B76-\u2B95\u2B97-\u2BFF\u2CE5-\u2CEA\u2E50\u2E51\u2E80-\u2E99\u2E9B-\u2EF3\u2F00-\u2FD5\u2FF0-\u2FFF\u3004\u3012\u3013\u3020\u3036\u3037\u303E\u303F\u309B\u309C\u3190\u3191\u3196-\u319F\u31C0-\u31E3\u31EF\u3200-\u321E\u322A-\u3247\u3250\u3260-\u327F\u328A-\u32B0\u32C0-\u33FF\u4DC0-\u4DFF\uA490-\uA4C6\uA700-\uA716\uA720\uA721\uA789\uA78A\uA828-\uA82B\uA836-\uA839\uAA77-\uAA79\uAB5B\uAB6A\uAB6B\uFB29\uFBB2-\uFBC2\uFD40-\uFD4F\uFDCF\uFDFC-\uFDFF\uFE62\uFE64-\uFE66\uFE69\uFF04\uFF0B\uFF1C-\uFF1E\uFF3E\uFF40\uFF5C\uFF5E\uFFE0-\uFFE6\uFFE8-\uFFEE\uFFFC\uFFFD]|\uD800[\uDD37-\uDD3F\uDD79-\uDD89\uDD8C-\uDD8E\uDD90-\uDD9C\uDDA0\uDDD0-\uDDFC]|\uD802[\uDC77\uDC78\uDEC8]|\uD805\uDF3F|\uD807[\uDFD5-\uDFF1]|\uD81A[\uDF3C-\uDF3F\uDF45]|\uD82F\uDC9C|\uD833[\uDF50-\uDFC3]|\uD834[\uDC00-\uDCF5\uDD00-\uDD26\uDD29-\uDD64\uDD6A-\uDD6C\uDD83\uDD84\uDD8C-\uDDA9\uDDAE-\uDDEA\uDE00-\uDE41\uDE45\uDF00-\uDF56]|\uD835[\uDEC1\uDEDB\uDEFB\uDF15\uDF35\uDF4F\uDF6F\uDF89\uDFA9\uDFC3]|\uD836[\uDC00-\uDDFF\uDE37-\uDE3A\uDE6D-\uDE74\uDE76-\uDE83\uDE85\uDE86]|\uD838[\uDD4F\uDEFF]|\uD83B[\uDCAC\uDCB0\uDD2E\uDEF0\uDEF1]|\uD83C[\uDC00-\uDC2B\uDC30-\uDC93\uDCA0-\uDCAE\uDCB1-\uDCBF\uDCC1-\uDCCF\uDCD1-\uDCF5\uDD0D-\uDDAD\uDDE6-\uDE02\uDE10-\uDE3B\uDE40-\uDE48\uDE50\uDE51\uDE60-\uDE65\uDF00-\uDFFF]|\uD83D[\uDC00-\uDED7\uDEDC-\uDEEC\uDEF0-\uDEFC\uDF00-\uDF76\uDF7B-\uDFD9\uDFE0-\uDFEB\uDFF0]|\uD83E[\uDC00-\uDC0B\uDC10-\uDC47\uDC50-\uDC59\uDC60-\uDC87\uDC90-\uDCAD\uDCB0\uDCB1\uDD00-\uDE53\uDE60-\uDE6D\uDE70-\uDE7C\uDE80-\uDE88\uDE90-\uDEBD\uDEBF-\uDEC5\uDECE-\uDEDB\uDEE0-\uDEE8\uDEF0-\uDEF8\uDF00-\uDF92\uDF94-\uDFCA]/,ti=/[ \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000]/,xc=Object.freeze(Object.defineProperty({__proto__:null,Any:X0,Cc:ei,Cf:mc,P:Wn,S:ui,Z:ti},Symbol.toStringTag,{value:"Module"})),gc=new Uint16Array('ᵁ<Õıʊҝջאٵ۞ޢߖࠏ੊ઑඡ๭༉༦჊ረዡᐕᒝᓃᓟᔥ\0\0\0\0\0\0ᕫᛍᦍᰒᷝ὾⁠↰⊍⏀⏻⑂⠤⤒ⴈ⹈⿎〖㊺㘹㞬㣾㨨㩱㫠㬮ࠀEMabcfglmnoprstu\\bfms¦³¹ÈÏlig耻Æ䃆P耻&䀦cute耻Á䃁reve;䄂Āiyx}rc耻Â䃂;䐐r;쀀𝔄rave耻À䃀pha;䎑acr;䄀d;橓Āgp¡on;䄄f;쀀𝔸plyFunction;恡ing耻Å䃅Ācs¾Ãr;쀀𝒜ign;扔ilde耻Ã䃃ml耻Ä䃄ЀaceforsuåûþėĜĢħĪĀcrêòkslash;或Ŷöø;櫧ed;挆y;䐑ƀcrtąċĔause;戵noullis;愬a;䎒r;쀀𝔅pf;쀀𝔹eve;䋘còēmpeq;扎܀HOacdefhilorsuōőŖƀƞƢƵƷƺǜȕɳɸɾcy;䐧PY耻©䂩ƀcpyŝŢźute;䄆Ā;iŧŨ拒talDifferentialD;慅leys;愭ȀaeioƉƎƔƘron;䄌dil耻Ç䃇rc;䄈nint;戰ot;䄊ĀdnƧƭilla;䂸terDot;䂷òſi;䎧rcleȀDMPTǇǋǑǖot;抙inus;抖lus;投imes;抗oĀcsǢǸkwiseContourIntegral;戲eCurlyĀDQȃȏoubleQuote;思uote;怙ȀlnpuȞȨɇɕonĀ;eȥȦ户;橴ƀgitȯȶȺruent;扡nt;戯ourIntegral;戮ĀfrɌɎ;愂oduct;成nterClockwiseContourIntegral;戳oss;樯cr;쀀𝒞pĀ;Cʄʅ拓ap;才րDJSZacefiosʠʬʰʴʸˋ˗ˡ˦̳ҍĀ;oŹʥtrahd;椑cy;䐂cy;䐅cy;䐏ƀgrsʿ˄ˇger;怡r;憡hv;櫤Āayː˕ron;䄎;䐔lĀ;t˝˞戇a;䎔r;쀀𝔇Āaf˫̧Ācm˰̢riticalȀADGT̖̜̀̆cute;䂴oŴ̋̍;䋙bleAcute;䋝rave;䁠ilde;䋜ond;拄ferentialD;慆Ѱ̽\0\0\0͔͂\0Ѕf;쀀𝔻ƀ;DE͈͉͍䂨ot;惜qual;扐blèCDLRUVͣͲ΂ϏϢϸontourIntegraìȹoɴ͹\0\0ͻ»͉nArrow;懓Āeo·ΤftƀARTΐΖΡrrow;懐ightArrow;懔eåˊngĀLRΫτeftĀARγιrrow;柸ightArrow;柺ightArrow;柹ightĀATϘϞrrow;懒ee;抨pɁϩ\0\0ϯrrow;懑ownArrow;懕erticalBar;戥ǹABLRTaВЪаўѿͼrrowƀ;BUНОТ憓ar;椓pArrow;懵reve;䌑eft˒к\0ц\0ѐightVector;楐eeVector;楞ectorĀ;Bљњ憽ar;楖ightǔѧ\0ѱeeVector;楟ectorĀ;BѺѻ懁ar;楗eeĀ;A҆҇护rrow;憧ĀctҒҗr;쀀𝒟rok;䄐ࠀNTacdfglmopqstuxҽӀӄӋӞӢӧӮӵԡԯԶՒ՝ՠեG;䅊H耻Ð䃐cute耻É䃉ƀaiyӒӗӜron;䄚rc耻Ê䃊;䐭ot;䄖r;쀀𝔈rave耻È䃈ement;戈ĀapӺӾcr;䄒tyɓԆ\0\0ԒmallSquare;旻erySmallSquare;斫ĀgpԦԪon;䄘f;쀀𝔼silon;䎕uĀaiԼՉlĀ;TՂՃ橵ilde;扂librium;懌Āci՗՚r;愰m;橳a;䎗ml耻Ë䃋Āipժկsts;戃onentialE;慇ʀcfiosօֈ֍ֲ׌y;䐤r;쀀𝔉lledɓ֗\0\0֣mallSquare;旼erySmallSquare;斪Ͱֺ\0ֿ\0\0ׄf;쀀𝔽All;戀riertrf;愱cò׋؀JTabcdfgorstר׬ׯ׺؀ؒؖ؛؝أ٬ٲcy;䐃耻>䀾mmaĀ;d׷׸䎓;䏜reve;䄞ƀeiy؇،ؐdil;䄢rc;䄜;䐓ot;䄠r;쀀𝔊;拙pf;쀀𝔾eater̀EFGLSTصلَٖٛ٦qualĀ;Lؾؿ扥ess;招ullEqual;执reater;檢ess;扷lantEqual;橾ilde;扳cr;쀀𝒢;扫ЀAacfiosuڅڋږڛڞڪھۊRDcy;䐪Āctڐڔek;䋇;䁞irc;䄤r;愌lbertSpace;愋ǰگ\0ڲf;愍izontalLine;攀Āctۃۅòکrok;䄦mpńېۘownHumðįqual;扏܀EJOacdfgmnostuۺ۾܃܇܎ܚܞܡܨ݄ݸދޏޕcy;䐕lig;䄲cy;䐁cute耻Í䃍Āiyܓܘrc耻Î䃎;䐘ot;䄰r;愑rave耻Ì䃌ƀ;apܠܯܿĀcgܴܷr;䄪inaryI;慈lieóϝǴ݉\0ݢĀ;eݍݎ戬Āgrݓݘral;戫section;拂isibleĀCTݬݲomma;恣imes;恢ƀgptݿރވon;䄮f;쀀𝕀a;䎙cr;愐ilde;䄨ǫޚ\0ޞcy;䐆l耻Ï䃏ʀcfosuެ޷޼߂ߐĀiyޱ޵rc;䄴;䐙r;쀀𝔍pf;쀀𝕁ǣ߇\0ߌr;쀀𝒥rcy;䐈kcy;䐄΀HJacfosߤߨ߽߬߱ࠂࠈcy;䐥cy;䐌ppa;䎚Āey߶߻dil;䄶;䐚r;쀀𝔎pf;쀀𝕂cr;쀀𝒦րJTaceflmostࠥࠩࠬࡐࡣ঳সে্਷ੇcy;䐉耻<䀼ʀcmnpr࠷࠼ࡁࡄࡍute;䄹bda;䎛g;柪lacetrf;愒r;憞ƀaeyࡗ࡜ࡡron;䄽dil;䄻;䐛Āfsࡨ॰tԀACDFRTUVarࡾࢩࢱࣦ࣠ࣼयज़ΐ४Ānrࢃ࢏gleBracket;柨rowƀ;BR࢙࢚࢞憐ar;懤ightArrow;懆eiling;挈oǵࢷ\0ࣃbleBracket;柦nǔࣈ\0࣒eeVector;楡ectorĀ;Bࣛࣜ懃ar;楙loor;挊ightĀAV࣯ࣵrrow;憔ector;楎Āerँगeƀ;AVउऊऐ抣rrow;憤ector;楚iangleƀ;BEतथऩ抲ar;槏qual;抴pƀDTVषूौownVector;楑eeVector;楠ectorĀ;Bॖॗ憿ar;楘ectorĀ;B॥०憼ar;楒ightáΜs̀EFGLSTॾঋকঝঢভqualGreater;拚ullEqual;扦reater;扶ess;檡lantEqual;橽ilde;扲r;쀀𝔏Ā;eঽা拘ftarrow;懚idot;䄿ƀnpw৔ਖਛgȀLRlr৞৷ਂਐeftĀAR০৬rrow;柵ightArrow;柷ightArrow;柶eftĀarγਊightáοightáϊf;쀀𝕃erĀLRਢਬeftArrow;憙ightArrow;憘ƀchtਾੀੂòࡌ;憰rok;䅁;扪Ѐacefiosuਗ਼੝੠੷੼અઋ઎p;椅y;䐜Ādl੥੯iumSpace;恟lintrf;愳r;쀀𝔐nusPlus;戓pf;쀀𝕄cò੶;䎜ҀJacefostuણધભીଔଙඑ඗ඞcy;䐊cute;䅃ƀaey઴હાron;䅇dil;䅅;䐝ƀgswે૰଎ativeƀMTV૓૟૨ediumSpace;怋hiĀcn૦૘ë૙eryThiî૙tedĀGL૸ଆreaterGreateòٳessLesóੈLine;䀊r;쀀𝔑ȀBnptଢନଷ଺reak;恠BreakingSpace;䂠f;愕ڀ;CDEGHLNPRSTV୕ୖ୪୼஡௫ఄ౞಄ದ೘ൡඅ櫬Āou୛୤ngruent;扢pCap;扭oubleVerticalBar;戦ƀlqxஃஊ஛ement;戉ualĀ;Tஒஓ扠ilde;쀀≂̸ists;戄reater΀;EFGLSTஶஷ஽௉௓௘௥扯qual;扱ullEqual;쀀≧̸reater;쀀≫̸ess;批lantEqual;쀀⩾̸ilde;扵umpń௲௽ownHump;쀀≎̸qual;쀀≏̸eĀfsఊధtTriangleƀ;BEచఛడ拪ar;쀀⧏̸qual;括s̀;EGLSTవశ఼ౄోౘ扮qual;扰reater;扸ess;쀀≪̸lantEqual;쀀⩽̸ilde;扴estedĀGL౨౹reaterGreater;쀀⪢̸essLess;쀀⪡̸recedesƀ;ESಒಓಛ技qual;쀀⪯̸lantEqual;拠ĀeiಫಹverseElement;戌ghtTriangleƀ;BEೋೌ೒拫ar;쀀⧐̸qual;拭ĀquೝഌuareSuĀbp೨೹setĀ;E೰ೳ쀀⊏̸qual;拢ersetĀ;Eഃആ쀀⊐̸qual;拣ƀbcpഓതൎsetĀ;Eഛഞ쀀⊂⃒qual;抈ceedsȀ;ESTലള഻െ抁qual;쀀⪰̸lantEqual;拡ilde;쀀≿̸ersetĀ;E൘൛쀀⊃⃒qual;抉ildeȀ;EFT൮൯൵ൿ扁qual;扄ullEqual;扇ilde;扉erticalBar;戤cr;쀀𝒩ilde耻Ñ䃑;䎝܀Eacdfgmoprstuvලෂ෉෕ෛ෠෧෼ขภยา฿ไlig;䅒cute耻Ó䃓Āiy෎ීrc耻Ô䃔;䐞blac;䅐r;쀀𝔒rave耻Ò䃒ƀaei෮ෲ෶cr;䅌ga;䎩cron;䎟pf;쀀𝕆enCurlyĀDQฎบoubleQuote;怜uote;怘;橔Āclวฬr;쀀𝒪ash耻Ø䃘iŬื฼de耻Õ䃕es;樷ml耻Ö䃖erĀBP๋๠Āar๐๓r;怾acĀek๚๜;揞et;掴arenthesis;揜Ҁacfhilors๿ງຊຏຒດຝະ໼rtialD;戂y;䐟r;쀀𝔓i;䎦;䎠usMinus;䂱Āipຢອncareplanåڝf;愙Ȁ;eio຺ູ໠໤檻cedesȀ;EST່້໏໚扺qual;檯lantEqual;扼ilde;找me;怳Ādp໩໮uct;戏ortionĀ;aȥ໹l;戝Āci༁༆r;쀀𝒫;䎨ȀUfos༑༖༛༟OT耻"䀢r;쀀𝔔pf;愚cr;쀀𝒬؀BEacefhiorsu༾གྷཇའཱིྦྷྪྭ႖ႩႴႾarr;椐G耻®䂮ƀcnrཎནབute;䅔g;柫rĀ;tཛྷཝ憠l;椖ƀaeyཧཬཱron;䅘dil;䅖;䐠Ā;vླྀཹ愜erseĀEUྂྙĀlq྇ྎement;戋uilibrium;懋pEquilibrium;楯r»ཹo;䎡ghtЀACDFTUVa࿁࿫࿳ဢဨၛႇϘĀnr࿆࿒gleBracket;柩rowƀ;BL࿜࿝࿡憒ar;懥eftArrow;懄eiling;按oǵ࿹\0စbleBracket;柧nǔည\0နeeVector;楝ectorĀ;Bဝသ懂ar;楕loor;挋Āerိ၃eƀ;AVဵံြ抢rrow;憦ector;楛iangleƀ;BEၐၑၕ抳ar;槐qual;抵pƀDTVၣၮၸownVector;楏eeVector;楜ectorĀ;Bႂႃ憾ar;楔ectorĀ;B႑႒懀ar;楓Āpuႛ႞f;愝ndImplies;楰ightarrow;懛ĀchႹႼr;愛;憱leDelayed;槴ڀHOacfhimoqstuფჱჷჽᄙᄞᅑᅖᅡᅧᆵᆻᆿĀCcჩხHcy;䐩y;䐨FTcy;䐬cute;䅚ʀ;aeiyᄈᄉᄎᄓᄗ檼ron;䅠dil;䅞rc;䅜;䐡r;쀀𝔖ortȀDLRUᄪᄴᄾᅉownArrow»ОeftArrow»࢚ightArrow»࿝pArrow;憑gma;䎣allCircle;战pf;쀀𝕊ɲᅭ\0\0ᅰt;戚areȀ;ISUᅻᅼᆉᆯ斡ntersection;抓uĀbpᆏᆞsetĀ;Eᆗᆘ抏qual;抑ersetĀ;Eᆨᆩ抐qual;抒nion;抔cr;쀀𝒮ar;拆ȀbcmpᇈᇛሉላĀ;sᇍᇎ拐etĀ;Eᇍᇕqual;抆ĀchᇠህeedsȀ;ESTᇭᇮᇴᇿ扻qual;檰lantEqual;扽ilde;承Tháྌ;我ƀ;esሒሓሣ拑rsetĀ;Eሜም抃qual;抇et»ሓրHRSacfhiorsሾቄ቉ቕ቞ቱቶኟዂወዑORN耻Þ䃞ADE;愢ĀHc቎ቒcy;䐋y;䐦Ābuቚቜ;䀉;䎤ƀaeyብቪቯron;䅤dil;䅢;䐢r;쀀𝔗Āeiቻ኉ǲኀ\0ኇefore;戴a;䎘Ācn኎ኘkSpace;쀀  Space;怉ldeȀ;EFTካኬኲኼ戼qual;扃ullEqual;扅ilde;扈pf;쀀𝕋ipleDot;惛Āctዖዛr;쀀𝒯rok;䅦ૡዷጎጚጦ\0ጬጱ\0\0\0\0\0ጸጽ፷ᎅ\0᏿ᐄᐊᐐĀcrዻጁute耻Ú䃚rĀ;oጇገ憟cir;楉rǣጓ\0጖y;䐎ve;䅬Āiyጞጣrc耻Û䃛;䐣blac;䅰r;쀀𝔘rave耻Ù䃙acr;䅪Ādiፁ፩erĀBPፈ፝Āarፍፐr;䁟acĀekፗፙ;揟et;掵arenthesis;揝onĀ;P፰፱拃lus;抎Āgp፻፿on;䅲f;쀀𝕌ЀADETadps᎕ᎮᎸᏄϨᏒᏗᏳrrowƀ;BDᅐᎠᎤar;椒ownArrow;懅ownArrow;憕quilibrium;楮eeĀ;AᏋᏌ报rrow;憥ownáϳerĀLRᏞᏨeftArrow;憖ightArrow;憗iĀ;lᏹᏺ䏒on;䎥ing;䅮cr;쀀𝒰ilde;䅨ml耻Ü䃜ҀDbcdefosvᐧᐬᐰᐳᐾᒅᒊᒐᒖash;披ar;櫫y;䐒ashĀ;lᐻᐼ抩;櫦Āerᑃᑅ;拁ƀbtyᑌᑐᑺar;怖Ā;iᑏᑕcalȀBLSTᑡᑥᑪᑴar;戣ine;䁼eparator;杘ilde;所ThinSpace;怊r;쀀𝔙pf;쀀𝕍cr;쀀𝒱dash;抪ʀcefosᒧᒬᒱᒶᒼirc;䅴dge;拀r;쀀𝔚pf;쀀𝕎cr;쀀𝒲Ȁfiosᓋᓐᓒᓘr;쀀𝔛;䎞pf;쀀𝕏cr;쀀𝒳ҀAIUacfosuᓱᓵᓹᓽᔄᔏᔔᔚᔠcy;䐯cy;䐇cy;䐮cute耻Ý䃝Āiyᔉᔍrc;䅶;䐫r;쀀𝔜pf;쀀𝕐cr;쀀𝒴ml;䅸ЀHacdefosᔵᔹᔿᕋᕏᕝᕠᕤcy;䐖cute;䅹Āayᕄᕉron;䅽;䐗ot;䅻ǲᕔ\0ᕛoWidtè૙a;䎖r;愨pf;愤cr;쀀𝒵௡ᖃᖊᖐ\0ᖰᖶᖿ\0\0\0\0ᗆᗛᗫᙟ᙭\0ᚕ᚛ᚲᚹ\0ᚾcute耻á䃡reve;䄃̀;Ediuyᖜᖝᖡᖣᖨᖭ戾;쀀∾̳;房rc耻â䃢te肻´̆;䐰lig耻æ䃦Ā;r²ᖺ;쀀𝔞rave耻à䃠ĀepᗊᗖĀfpᗏᗔsym;愵èᗓha;䎱ĀapᗟcĀclᗤᗧr;䄁g;樿ɤᗰ\0\0ᘊʀ;adsvᗺᗻᗿᘁᘇ戧nd;橕;橜lope;橘;橚΀;elmrszᘘᘙᘛᘞᘿᙏᙙ戠;榤e»ᘙsdĀ;aᘥᘦ戡ѡᘰᘲᘴᘶᘸᘺᘼᘾ;榨;榩;榪;榫;榬;榭;榮;榯tĀ;vᙅᙆ戟bĀ;dᙌᙍ抾;榝Āptᙔᙗh;戢»¹arr;捼Āgpᙣᙧon;䄅f;쀀𝕒΀;Eaeiop዁ᙻᙽᚂᚄᚇᚊ;橰cir;橯;扊d;手s;䀧roxĀ;e዁ᚒñᚃing耻å䃥ƀctyᚡᚦᚨr;쀀𝒶;䀪mpĀ;e዁ᚯñʈilde耻ã䃣ml耻ä䃤Āciᛂᛈoninôɲnt;樑ࠀNabcdefiklnoprsu᛭ᛱᜰ᜼ᝃᝈ᝸᝽០៦ᠹᡐᜍ᤽᥈ᥰot;櫭Ācrᛶ᜞kȀcepsᜀᜅᜍᜓong;扌psilon;䏶rime;怵imĀ;e᜚᜛戽q;拍Ŷᜢᜦee;抽edĀ;gᜬᜭ挅e»ᜭrkĀ;t፜᜷brk;掶Āoyᜁᝁ;䐱quo;怞ʀcmprtᝓ᝛ᝡᝤᝨausĀ;eĊĉptyv;榰séᜌnoõēƀahwᝯ᝱ᝳ;䎲;愶een;扬r;쀀𝔟g΀costuvwឍឝឳេ៕៛៞ƀaiuបពរðݠrc;旯p»፱ƀdptឤឨឭot;樀lus;樁imes;樂ɱឹ\0\0ើcup;樆ar;昅riangleĀdu៍្own;施p;斳plus;樄eåᑄåᒭarow;植ƀako៭ᠦᠵĀcn៲ᠣkƀlst៺֫᠂ozenge;槫riangleȀ;dlr᠒᠓᠘᠝斴own;斾eft;旂ight;斸k;搣Ʊᠫ\0ᠳƲᠯ\0ᠱ;斒;斑4;斓ck;斈ĀeoᠾᡍĀ;qᡃᡆ쀀=⃥uiv;쀀≡⃥t;挐Ȁptwxᡙᡞᡧᡬf;쀀𝕓Ā;tᏋᡣom»Ꮜtie;拈؀DHUVbdhmptuvᢅᢖᢪᢻᣗᣛᣬ᣿ᤅᤊᤐᤡȀLRlrᢎᢐᢒᢔ;敗;敔;敖;敓ʀ;DUduᢡᢢᢤᢦᢨ敐;敦;敩;敤;敧ȀLRlrᢳᢵᢷᢹ;敝;敚;敜;教΀;HLRhlrᣊᣋᣍᣏᣑᣓᣕ救;敬;散;敠;敫;敢;敟ox;槉ȀLRlrᣤᣦᣨᣪ;敕;敒;攐;攌ʀ;DUduڽ᣷᣹᣻᣽;敥;敨;攬;攴inus;抟lus;択imes;抠ȀLRlrᤙᤛᤝ᤟;敛;敘;攘;攔΀;HLRhlrᤰᤱᤳᤵᤷ᤻᤹攂;敪;敡;敞;攼;攤;攜Āevģ᥂bar耻¦䂦Ȁceioᥑᥖᥚᥠr;쀀𝒷mi;恏mĀ;e᜚᜜lƀ;bhᥨᥩᥫ䁜;槅sub;柈Ŭᥴ᥾lĀ;e᥹᥺怢t»᥺pƀ;Eeįᦅᦇ;檮Ā;qۜۛೡᦧ\0᧨ᨑᨕᨲ\0ᨷᩐ\0\0᪴\0\0᫁\0\0ᬡᬮ᭍᭒\0᯽\0ᰌƀcpr᦭ᦲ᧝ute;䄇̀;abcdsᦿᧀᧄ᧊᧕᧙戩nd;橄rcup;橉Āau᧏᧒p;橋p;橇ot;橀;쀀∩︀Āeo᧢᧥t;恁îړȀaeiu᧰᧻ᨁᨅǰ᧵\0᧸s;橍on;䄍dil耻ç䃧rc;䄉psĀ;sᨌᨍ橌m;橐ot;䄋ƀdmnᨛᨠᨦil肻¸ƭptyv;榲t脀¢;eᨭᨮ䂢räƲr;쀀𝔠ƀceiᨽᩀᩍy;䑇ckĀ;mᩇᩈ朓ark»ᩈ;䏇r΀;Ecefms᩟᩠ᩢᩫ᪤᪪᪮旋;槃ƀ;elᩩᩪᩭ䋆q;扗eɡᩴ\0\0᪈rrowĀlr᩼᪁eft;憺ight;憻ʀRSacd᪒᪔᪖᪚᪟»ཇ;擈st;抛irc;抚ash;抝nint;樐id;櫯cir;槂ubsĀ;u᪻᪼晣it»᪼ˬ᫇᫔᫺\0ᬊonĀ;eᫍᫎ䀺Ā;qÇÆɭ᫙\0\0᫢aĀ;t᫞᫟䀬;䁀ƀ;fl᫨᫩᫫戁îᅠeĀmx᫱᫶ent»᫩eóɍǧ᫾\0ᬇĀ;dኻᬂot;橭nôɆƀfryᬐᬔᬗ;쀀𝕔oäɔ脀©;sŕᬝr;愗Āaoᬥᬩrr;憵ss;朗Ācuᬲᬷr;쀀𝒸Ābpᬼ᭄Ā;eᭁᭂ櫏;櫑Ā;eᭉᭊ櫐;櫒dot;拯΀delprvw᭠᭬᭷ᮂᮬᯔ᯹arrĀlr᭨᭪;椸;椵ɰ᭲\0\0᭵r;拞c;拟arrĀ;p᭿ᮀ憶;椽̀;bcdosᮏᮐᮖᮡᮥᮨ截rcap;橈Āauᮛᮞp;橆p;橊ot;抍r;橅;쀀∪︀Ȁalrv᮵ᮿᯞᯣrrĀ;mᮼᮽ憷;椼yƀevwᯇᯔᯘqɰᯎ\0\0ᯒreã᭳uã᭵ee;拎edge;拏en耻¤䂤earrowĀlrᯮ᯳eft»ᮀight»ᮽeäᯝĀciᰁᰇoninôǷnt;戱lcty;挭ঀAHabcdefhijlorstuwz᰸᰻᰿ᱝᱩᱵᲊᲞᲬᲷ᳻᳿ᴍᵻᶑᶫᶻ᷆᷍rò΁ar;楥Ȁglrs᱈ᱍ᱒᱔ger;怠eth;愸òᄳhĀ;vᱚᱛ怐»ऊūᱡᱧarow;椏aã̕Āayᱮᱳron;䄏;䐴ƀ;ao̲ᱼᲄĀgrʿᲁr;懊tseq;橷ƀglmᲑᲔᲘ耻°䂰ta;䎴ptyv;榱ĀirᲣᲨsht;楿;쀀𝔡arĀlrᲳᲵ»ࣜ»သʀaegsv᳂͸᳖᳜᳠mƀ;oș᳊᳔ndĀ;ș᳑uit;晦amma;䏝in;拲ƀ;io᳧᳨᳸䃷de脀÷;o᳧ᳰntimes;拇nø᳷cy;䑒cɯᴆ\0\0ᴊrn;挞op;挍ʀlptuwᴘᴝᴢᵉᵕlar;䀤f;쀀𝕕ʀ;emps̋ᴭᴷᴽᵂqĀ;d͒ᴳot;扑inus;戸lus;戔quare;抡blebarwedgåúnƀadhᄮᵝᵧownarrowóᲃarpoonĀlrᵲᵶefôᲴighôᲶŢᵿᶅkaro÷གɯᶊ\0\0ᶎrn;挟op;挌ƀcotᶘᶣᶦĀryᶝᶡ;쀀𝒹;䑕l;槶rok;䄑Ādrᶰᶴot;拱iĀ;fᶺ᠖斿Āah᷀᷃ròЩaòྦangle;榦Āci᷒ᷕy;䑟grarr;柿ऀDacdefglmnopqrstuxḁḉḙḸոḼṉṡṾấắẽỡἪἷὄ὎὚ĀDoḆᴴoôᲉĀcsḎḔute耻é䃩ter;橮ȀaioyḢḧḱḶron;䄛rĀ;cḭḮ扖耻ê䃪lon;払;䑍ot;䄗ĀDrṁṅot;扒;쀀𝔢ƀ;rsṐṑṗ檚ave耻è䃨Ā;dṜṝ檖ot;檘Ȁ;ilsṪṫṲṴ檙nters;揧;愓Ā;dṹṺ檕ot;檗ƀapsẅẉẗcr;䄓tyƀ;svẒẓẕ戅et»ẓpĀ1;ẝẤĳạả;怄;怅怃ĀgsẪẬ;䅋p;怂ĀgpẴẸon;䄙f;쀀𝕖ƀalsỄỎỒrĀ;sỊị拕l;槣us;橱iƀ;lvỚớở䎵on»ớ;䏵ȀcsuvỪỳἋἣĀioữḱrc»Ḯɩỹ\0\0ỻíՈantĀglἂἆtr»ṝess»Ṻƀaeiἒ἖Ἒls;䀽st;扟vĀ;DȵἠD;橸parsl;槥ĀDaἯἳot;打rr;楱ƀcdiἾὁỸr;愯oô͒ĀahὉὋ;䎷耻ð䃰Āmrὓὗl耻ë䃫o;悬ƀcipὡὤὧl;䀡sôծĀeoὬὴctatioîՙnentialåչৡᾒ\0ᾞ\0ᾡᾧ\0\0ῆῌ\0ΐ\0ῦῪ \0 ⁚llingdotseñṄy;䑄male;晀ƀilrᾭᾳ῁lig;耀ﬃɩᾹ\0\0᾽g;耀ﬀig;耀ﬄ;쀀𝔣lig;耀ﬁlig;쀀fjƀaltῙ῜ῡt;晭ig;耀ﬂns;斱of;䆒ǰ΅\0ῳf;쀀𝕗ĀakֿῷĀ;vῼ´拔;櫙artint;樍Āao‌⁕Ācs‑⁒α‚‰‸⁅⁈\0⁐β•‥‧‪‬\0‮耻½䂽;慓耻¼䂼;慕;慙;慛Ƴ‴\0‶;慔;慖ʴ‾⁁\0\0⁃耻¾䂾;慗;慜5;慘ƶ⁌\0⁎;慚;慝8;慞l;恄wn;挢cr;쀀𝒻ࢀEabcdefgijlnorstv₂₉₟₥₰₴⃰⃵⃺⃿℃ℒℸ̗ℾ⅒↞Ā;lٍ₇;檌ƀcmpₐₕ₝ute;䇵maĀ;dₜ᳚䎳;檆reve;䄟Āiy₪₮rc;䄝;䐳ot;䄡Ȁ;lqsؾق₽⃉ƀ;qsؾٌ⃄lanô٥Ȁ;cdl٥⃒⃥⃕c;檩otĀ;o⃜⃝檀Ā;l⃢⃣檂;檄Ā;e⃪⃭쀀⋛︀s;檔r;쀀𝔤Ā;gٳ؛mel;愷cy;䑓Ȁ;Eajٚℌℎℐ;檒;檥;檤ȀEaesℛℝ℩ℴ;扩pĀ;p℣ℤ檊rox»ℤĀ;q℮ℯ檈Ā;q℮ℛim;拧pf;쀀𝕘Āci⅃ⅆr;愊mƀ;el٫ⅎ⅐;檎;檐茀>;cdlqr׮ⅠⅪⅮⅳⅹĀciⅥⅧ;檧r;橺ot;拗Par;榕uest;橼ʀadelsↄⅪ←ٖ↛ǰ↉\0↎proø₞r;楸qĀlqؿ↖lesó₈ií٫Āen↣↭rtneqq;쀀≩︀Å↪ԀAabcefkosy⇄⇇⇱⇵⇺∘∝∯≨≽ròΠȀilmr⇐⇔⇗⇛rsðᒄf»․ilôکĀdr⇠⇤cy;䑊ƀ;cwࣴ⇫⇯ir;楈;憭ar;意irc;䄥ƀalr∁∎∓rtsĀ;u∉∊晥it»∊lip;怦con;抹r;쀀𝔥sĀew∣∩arow;椥arow;椦ʀamopr∺∾≃≞≣rr;懿tht;戻kĀlr≉≓eftarrow;憩ightarrow;憪f;쀀𝕙bar;怕ƀclt≯≴≸r;쀀𝒽asè⇴rok;䄧Ābp⊂⊇ull;恃hen»ᱛૡ⊣\0⊪\0⊸⋅⋎\0⋕⋳\0\0⋸⌢⍧⍢⍿\0⎆⎪⎴cute耻í䃭ƀ;iyݱ⊰⊵rc耻î䃮;䐸Ācx⊼⊿y;䐵cl耻¡䂡ĀfrΟ⋉;쀀𝔦rave耻ì䃬Ȁ;inoܾ⋝⋩⋮Āin⋢⋦nt;樌t;戭fin;槜ta;愩lig;䄳ƀaop⋾⌚⌝ƀcgt⌅⌈⌗r;䄫ƀelpܟ⌏⌓inåގarôܠh;䄱f;抷ed;䆵ʀ;cfotӴ⌬⌱⌽⍁are;愅inĀ;t⌸⌹戞ie;槝doô⌙ʀ;celpݗ⍌⍐⍛⍡al;抺Āgr⍕⍙eróᕣã⍍arhk;樗rod;樼Ȁcgpt⍯⍲⍶⍻y;䑑on;䄯f;쀀𝕚a;䎹uest耻¿䂿Āci⎊⎏r;쀀𝒾nʀ;EdsvӴ⎛⎝⎡ӳ;拹ot;拵Ā;v⎦⎧拴;拳Ā;iݷ⎮lde;䄩ǫ⎸\0⎼cy;䑖l耻ï䃯̀cfmosu⏌⏗⏜⏡⏧⏵Āiy⏑⏕rc;䄵;䐹r;쀀𝔧ath;䈷pf;쀀𝕛ǣ⏬\0⏱r;쀀𝒿rcy;䑘kcy;䑔Ѐacfghjos␋␖␢␧␭␱␵␻ppaĀ;v␓␔䎺;䏰Āey␛␠dil;䄷;䐺r;쀀𝔨reen;䄸cy;䑅cy;䑜pf;쀀𝕜cr;쀀𝓀஀ABEHabcdefghjlmnoprstuv⑰⒁⒆⒍⒑┎┽╚▀♎♞♥♹♽⚚⚲⛘❝❨➋⟀⠁⠒ƀart⑷⑺⑼rò৆òΕail;椛arr;椎Ā;gঔ⒋;檋ar;楢ॣ⒥\0⒪\0⒱\0\0\0\0\0⒵Ⓔ\0ⓆⓈⓍ\0⓹ute;䄺mptyv;榴raîࡌbda;䎻gƀ;dlࢎⓁⓃ;榑åࢎ;檅uo耻«䂫rЀ;bfhlpst࢙ⓞⓦⓩ⓫⓮⓱⓵Ā;f࢝ⓣs;椟s;椝ë≒p;憫l;椹im;楳l;憢ƀ;ae⓿─┄檫il;椙Ā;s┉┊檭;쀀⪭︀ƀabr┕┙┝rr;椌rk;杲Āak┢┬cĀek┨┪;䁻;䁛Āes┱┳;榋lĀdu┹┻;榏;榍Ȁaeuy╆╋╖╘ron;䄾Ādi═╔il;䄼ìࢰâ┩;䐻Ȁcqrs╣╦╭╽a;椶uoĀ;rนᝆĀdu╲╷har;楧shar;楋h;憲ʀ;fgqs▋▌উ◳◿扤tʀahlrt▘▤▷◂◨rrowĀ;t࢙□aé⓶arpoonĀdu▯▴own»њp»०eftarrows;懇ightƀahs◍◖◞rrowĀ;sࣴࢧarpoonó྘quigarro÷⇰hreetimes;拋ƀ;qs▋ও◺lanôবʀ;cdgsব☊☍☝☨c;檨otĀ;o☔☕橿Ā;r☚☛檁;檃Ā;e☢☥쀀⋚︀s;檓ʀadegs☳☹☽♉♋pproøⓆot;拖qĀgq♃♅ôউgtò⒌ôছiíলƀilr♕࣡♚sht;楼;쀀𝔩Ā;Eজ♣;檑š♩♶rĀdu▲♮Ā;l॥♳;楪lk;斄cy;䑙ʀ;achtੈ⚈⚋⚑⚖rò◁orneòᴈard;楫ri;旺Āio⚟⚤dot;䅀ustĀ;a⚬⚭掰che»⚭ȀEaes⚻⚽⛉⛔;扨pĀ;p⛃⛄檉rox»⛄Ā;q⛎⛏檇Ā;q⛎⚻im;拦Ѐabnoptwz⛩⛴⛷✚✯❁❇❐Ānr⛮⛱g;柬r;懽rëࣁgƀlmr⛿✍✔eftĀar০✇ightá৲apsto;柼ightá৽parrowĀlr✥✩efô⓭ight;憬ƀafl✶✹✽r;榅;쀀𝕝us;樭imes;樴š❋❏st;戗áፎƀ;ef❗❘᠀旊nge»❘arĀ;l❤❥䀨t;榓ʀachmt❳❶❼➅➇ròࢨorneòᶌarĀ;d྘➃;業;怎ri;抿̀achiqt➘➝ੀ➢➮➻quo;怹r;쀀𝓁mƀ;egল➪➬;檍;檏Ābu┪➳oĀ;rฟ➹;怚rok;䅂萀<;cdhilqrࠫ⟒☹⟜⟠⟥⟪⟰Āci⟗⟙;檦r;橹reå◲mes;拉arr;楶uest;橻ĀPi⟵⟹ar;榖ƀ;ef⠀भ᠛旃rĀdu⠇⠍shar;楊har;楦Āen⠗⠡rtneqq;쀀≨︀Å⠞܀Dacdefhilnopsu⡀⡅⢂⢎⢓⢠⢥⢨⣚⣢⣤ઃ⣳⤂Dot;戺Ȁclpr⡎⡒⡣⡽r耻¯䂯Āet⡗⡙;時Ā;e⡞⡟朠se»⡟Ā;sျ⡨toȀ;dluျ⡳⡷⡻owîҌefôएðᏑker;斮Āoy⢇⢌mma;権;䐼ash;怔asuredangle»ᘦr;쀀𝔪o;愧ƀcdn⢯⢴⣉ro耻µ䂵Ȁ;acdᑤ⢽⣀⣄sôᚧir;櫰ot肻·Ƶusƀ;bd⣒ᤃ⣓戒Ā;uᴼ⣘;横ţ⣞⣡p;櫛ò−ðઁĀdp⣩⣮els;抧f;쀀𝕞Āct⣸⣽r;쀀𝓂pos»ᖝƀ;lm⤉⤊⤍䎼timap;抸ఀGLRVabcdefghijlmoprstuvw⥂⥓⥾⦉⦘⧚⧩⨕⨚⩘⩝⪃⪕⪤⪨⬄⬇⭄⭿⮮ⰴⱧⱼ⳩Āgt⥇⥋;쀀⋙̸Ā;v⥐௏쀀≫⃒ƀelt⥚⥲⥶ftĀar⥡⥧rrow;懍ightarrow;懎;쀀⋘̸Ā;v⥻ే쀀≪⃒ightarrow;懏ĀDd⦎⦓ash;抯ash;抮ʀbcnpt⦣⦧⦬⦱⧌la»˞ute;䅄g;쀀∠⃒ʀ;Eiop඄⦼⧀⧅⧈;쀀⩰̸d;쀀≋̸s;䅉roø඄urĀ;a⧓⧔普lĀ;s⧓ସǳ⧟\0⧣p肻 ଷmpĀ;e௹ఀʀaeouy⧴⧾⨃⨐⨓ǰ⧹\0⧻;橃on;䅈dil;䅆ngĀ;dൾ⨊ot;쀀⩭̸p;橂;䐽ash;怓΀;Aadqsxஒ⨩⨭⨻⩁⩅⩐rr;懗rĀhr⨳⨶k;椤Ā;oᏲᏰot;쀀≐̸uiöୣĀei⩊⩎ar;椨í஘istĀ;s஠டr;쀀𝔫ȀEest௅⩦⩹⩼ƀ;qs஼⩭௡ƀ;qs஼௅⩴lanô௢ií௪Ā;rஶ⪁»ஷƀAap⪊⪍⪑rò⥱rr;憮ar;櫲ƀ;svྍ⪜ྌĀ;d⪡⪢拼;拺cy;䑚΀AEadest⪷⪺⪾⫂⫅⫶⫹rò⥦;쀀≦̸rr;憚r;急Ȁ;fqs఻⫎⫣⫯tĀar⫔⫙rro÷⫁ightarro÷⪐ƀ;qs఻⪺⫪lanôౕĀ;sౕ⫴»శiíౝĀ;rవ⫾iĀ;eచథiäඐĀpt⬌⬑f;쀀𝕟膀¬;in⬙⬚⬶䂬nȀ;Edvஉ⬤⬨⬮;쀀⋹̸ot;쀀⋵̸ǡஉ⬳⬵;拷;拶iĀ;vಸ⬼ǡಸ⭁⭃;拾;拽ƀaor⭋⭣⭩rȀ;ast୻⭕⭚⭟lleì୻l;쀀⫽⃥;쀀∂̸lint;樔ƀ;ceಒ⭰⭳uåಥĀ;cಘ⭸Ā;eಒ⭽ñಘȀAait⮈⮋⮝⮧rò⦈rrƀ;cw⮔⮕⮙憛;쀀⤳̸;쀀↝̸ghtarrow»⮕riĀ;eೋೖ΀chimpqu⮽⯍⯙⬄୸⯤⯯Ȁ;cerല⯆ഷ⯉uå൅;쀀𝓃ortɭ⬅\0\0⯖ará⭖mĀ;e൮⯟Ā;q൴൳suĀbp⯫⯭å೸åഋƀbcp⯶ⰑⰙȀ;Ees⯿ⰀഢⰄ抄;쀀⫅̸etĀ;eഛⰋqĀ;qണⰀcĀ;eലⰗñസȀ;EesⰢⰣൟⰧ抅;쀀⫆̸etĀ;e൘ⰮqĀ;qൠⰣȀgilrⰽⰿⱅⱇìௗlde耻ñ䃱çృiangleĀlrⱒⱜeftĀ;eచⱚñదightĀ;eೋⱥñ೗Ā;mⱬⱭ䎽ƀ;esⱴⱵⱹ䀣ro;愖p;怇ҀDHadgilrsⲏⲔⲙⲞⲣⲰⲶⳓⳣash;抭arr;椄p;쀀≍⃒ash;抬ĀetⲨⲬ;쀀≥⃒;쀀>⃒nfin;槞ƀAetⲽⳁⳅrr;椂;쀀≤⃒Ā;rⳊⳍ쀀<⃒ie;쀀⊴⃒ĀAtⳘⳜrr;椃rie;쀀⊵⃒im;쀀∼⃒ƀAan⳰⳴ⴂrr;懖rĀhr⳺⳽k;椣Ā;oᏧᏥear;椧ቓ᪕\0\0\0\0\0\0\0\0\0\0\0\0\0ⴭ\0ⴸⵈⵠⵥ⵲ⶄᬇ\0\0ⶍⶫ\0ⷈⷎ\0ⷜ⸙⸫⸾⹃Ācsⴱ᪗ute耻ó䃳ĀiyⴼⵅrĀ;c᪞ⵂ耻ô䃴;䐾ʀabios᪠ⵒⵗǈⵚlac;䅑v;樸old;榼lig;䅓Ācr⵩⵭ir;榿;쀀𝔬ͯ⵹\0\0⵼\0ⶂn;䋛ave耻ò䃲;槁Ābmⶈ෴ar;榵Ȁacitⶕ⶘ⶥⶨrò᪀Āir⶝ⶠr;榾oss;榻nå๒;槀ƀaeiⶱⶵⶹcr;䅍ga;䏉ƀcdnⷀⷅǍron;䎿;榶pf;쀀𝕠ƀaelⷔ⷗ǒr;榷rp;榹΀;adiosvⷪⷫⷮ⸈⸍⸐⸖戨rò᪆Ȁ;efmⷷⷸ⸂⸅橝rĀ;oⷾⷿ愴f»ⷿ耻ª䂪耻º䂺gof;抶r;橖lope;橗;橛ƀclo⸟⸡⸧ò⸁ash耻ø䃸l;折iŬⸯ⸴de耻õ䃵esĀ;aǛ⸺s;樶ml耻ö䃶bar;挽ૡ⹞\0⹽\0⺀⺝\0⺢⺹\0\0⻋ຜ\0⼓\0\0⼫⾼\0⿈rȀ;astЃ⹧⹲຅脀¶;l⹭⹮䂶leìЃɩ⹸\0\0⹻m;櫳;櫽y;䐿rʀcimpt⺋⺏⺓ᡥ⺗nt;䀥od;䀮il;怰enk;怱r;쀀𝔭ƀimo⺨⺰⺴Ā;v⺭⺮䏆;䏕maô੶ne;明ƀ;tv⺿⻀⻈䏀chfork»´;䏖Āau⻏⻟nĀck⻕⻝kĀ;h⇴⻛;愎ö⇴sҀ;abcdemst⻳⻴ᤈ⻹⻽⼄⼆⼊⼎䀫cir;樣ir;樢Āouᵀ⼂;樥;橲n肻±ຝim;樦wo;樧ƀipu⼙⼠⼥ntint;樕f;쀀𝕡nd耻£䂣Ԁ;Eaceinosu່⼿⽁⽄⽇⾁⾉⾒⽾⾶;檳p;檷uå໙Ā;c໎⽌̀;acens່⽙⽟⽦⽨⽾pproø⽃urlyeñ໙ñ໎ƀaes⽯⽶⽺pprox;檹qq;檵im;拨iíໟmeĀ;s⾈ຮ怲ƀEas⽸⾐⽺ð⽵ƀdfp໬⾙⾯ƀals⾠⾥⾪lar;挮ine;挒urf;挓Ā;t໻⾴ï໻rel;抰Āci⿀⿅r;쀀𝓅;䏈ncsp;怈̀fiopsu⿚⋢⿟⿥⿫⿱r;쀀𝔮pf;쀀𝕢rime;恗cr;쀀𝓆ƀaeo⿸〉〓tĀei⿾々rnionóڰnt;樖stĀ;e【】䀿ñἙô༔઀ABHabcdefhilmnoprstux぀けさすムㄎㄫㅇㅢㅲㆎ㈆㈕㈤㈩㉘㉮㉲㊐㊰㊷ƀartぇおがròႳòϝail;検aròᱥar;楤΀cdenqrtとふへみわゔヌĀeuねぱ;쀀∽̱te;䅕iãᅮmptyv;榳gȀ;del࿑らるろ;榒;榥å࿑uo耻»䂻rր;abcfhlpstw࿜ガクシスゼゾダッデナp;極Ā;f࿠ゴs;椠;椳s;椞ë≝ð✮l;楅im;楴l;憣;憝Āaiパフil;椚oĀ;nホボ戶aló༞ƀabrョリヮrò៥rk;杳ĀakンヽcĀekヹ・;䁽;䁝Āes㄂㄄;榌lĀduㄊㄌ;榎;榐Ȁaeuyㄗㄜㄧㄩron;䅙Ādiㄡㄥil;䅗ì࿲âヺ;䑀Ȁclqsㄴㄷㄽㅄa;椷dhar;楩uoĀ;rȎȍh;憳ƀacgㅎㅟངlȀ;ipsླྀㅘㅛႜnåႻarôྩt;断ƀilrㅩဣㅮsht;楽;쀀𝔯ĀaoㅷㆆrĀduㅽㅿ»ѻĀ;l႑ㆄ;楬Ā;vㆋㆌ䏁;䏱ƀgns㆕ㇹㇼht̀ahlrstㆤㆰ㇂㇘㇤㇮rrowĀ;t࿜ㆭaéトarpoonĀduㆻㆿowîㅾp»႒eftĀah㇊㇐rrowó࿪arpoonóՑightarrows;應quigarro÷ニhreetimes;拌g;䋚ingdotseñἲƀahm㈍㈐㈓rò࿪aòՑ;怏oustĀ;a㈞㈟掱che»㈟mid;櫮Ȁabpt㈲㈽㉀㉒Ānr㈷㈺g;柭r;懾rëဃƀafl㉇㉊㉎r;榆;쀀𝕣us;樮imes;樵Āap㉝㉧rĀ;g㉣㉤䀩t;榔olint;樒arò㇣Ȁachq㉻㊀Ⴜ㊅quo;怺r;쀀𝓇Ābu・㊊oĀ;rȔȓƀhir㊗㊛㊠reåㇸmes;拊iȀ;efl㊪ၙᠡ㊫方tri;槎luhar;楨;愞ൡ㋕㋛㋟㌬㌸㍱\0㍺㎤\0\0㏬㏰\0㐨㑈㑚㒭㒱㓊㓱\0㘖\0\0㘳cute;䅛quï➺Ԁ;Eaceinpsyᇭ㋳㋵㋿㌂㌋㌏㌟㌦㌩;檴ǰ㋺\0㋼;檸on;䅡uåᇾĀ;dᇳ㌇il;䅟rc;䅝ƀEas㌖㌘㌛;檶p;檺im;择olint;樓iíሄ;䑁otƀ;be㌴ᵇ㌵担;橦΀Aacmstx㍆㍊㍗㍛㍞㍣㍭rr;懘rĀhr㍐㍒ë∨Ā;oਸ਼਴t耻§䂧i;䀻war;椩mĀin㍩ðnuóñt;朶rĀ;o㍶⁕쀀𝔰Ȁacoy㎂㎆㎑㎠rp;景Āhy㎋㎏cy;䑉;䑈rtɭ㎙\0\0㎜iäᑤaraì⹯耻­䂭Āgm㎨㎴maƀ;fv㎱㎲㎲䏃;䏂Ѐ;deglnprካ㏅㏉㏎㏖㏞㏡㏦ot;橪Ā;q኱ኰĀ;E㏓㏔檞;檠Ā;E㏛㏜檝;檟e;扆lus;樤arr;楲aròᄽȀaeit㏸㐈㐏㐗Āls㏽㐄lsetmé㍪hp;樳parsl;槤Ādlᑣ㐔e;挣Ā;e㐜㐝檪Ā;s㐢㐣檬;쀀⪬︀ƀflp㐮㐳㑂tcy;䑌Ā;b㐸㐹䀯Ā;a㐾㐿槄r;挿f;쀀𝕤aĀdr㑍ЂesĀ;u㑔㑕晠it»㑕ƀcsu㑠㑹㒟Āau㑥㑯pĀ;sᆈ㑫;쀀⊓︀pĀ;sᆴ㑵;쀀⊔︀uĀbp㑿㒏ƀ;esᆗᆜ㒆etĀ;eᆗ㒍ñᆝƀ;esᆨᆭ㒖etĀ;eᆨ㒝ñᆮƀ;afᅻ㒦ְrť㒫ֱ»ᅼaròᅈȀcemt㒹㒾㓂㓅r;쀀𝓈tmîñiì㐕aræᆾĀar㓎㓕rĀ;f㓔ឿ昆Āan㓚㓭ightĀep㓣㓪psiloîỠhé⺯s»⡒ʀbcmnp㓻㕞ሉ㖋㖎Ҁ;Edemnprs㔎㔏㔑㔕㔞㔣㔬㔱㔶抂;櫅ot;檽Ā;dᇚ㔚ot;櫃ult;櫁ĀEe㔨㔪;櫋;把lus;檿arr;楹ƀeiu㔽㕒㕕tƀ;en㔎㕅㕋qĀ;qᇚ㔏eqĀ;q㔫㔨m;櫇Ābp㕚㕜;櫕;櫓c̀;acensᇭ㕬㕲㕹㕻㌦pproø㋺urlyeñᇾñᇳƀaes㖂㖈㌛pproø㌚qñ㌗g;晪ڀ123;Edehlmnps㖩㖬㖯ሜ㖲㖴㗀㗉㗕㗚㗟㗨㗭耻¹䂹耻²䂲耻³䂳;櫆Āos㖹㖼t;檾ub;櫘Ā;dሢ㗅ot;櫄sĀou㗏㗒l;柉b;櫗arr;楻ult;櫂ĀEe㗤㗦;櫌;抋lus;櫀ƀeiu㗴㘉㘌tƀ;enሜ㗼㘂qĀ;qሢ㖲eqĀ;q㗧㗤m;櫈Ābp㘑㘓;櫔;櫖ƀAan㘜㘠㘭rr;懙rĀhr㘦㘨ë∮Ā;oਫ਩war;椪lig耻ß䃟௡㙑㙝㙠ዎ㙳㙹\0㙾㛂\0\0\0\0\0㛛㜃\0㜉㝬\0\0\0㞇ɲ㙖\0\0㙛get;挖;䏄rë๟ƀaey㙦㙫㙰ron;䅥dil;䅣;䑂lrec;挕r;쀀𝔱Ȁeiko㚆㚝㚵㚼ǲ㚋\0㚑eĀ4fኄኁaƀ;sv㚘㚙㚛䎸ym;䏑Ācn㚢㚲kĀas㚨㚮pproø዁im»ኬsðኞĀas㚺㚮ð዁rn耻þ䃾Ǭ̟㛆⋧es膀×;bd㛏㛐㛘䃗Ā;aᤏ㛕r;樱;樰ƀeps㛡㛣㜀á⩍Ȁ;bcf҆㛬㛰㛴ot;挶ir;櫱Ā;o㛹㛼쀀𝕥rk;櫚á㍢rime;怴ƀaip㜏㜒㝤dåቈ΀adempst㜡㝍㝀㝑㝗㝜㝟ngleʀ;dlqr㜰㜱㜶㝀㝂斵own»ᶻeftĀ;e⠀㜾ñम;扜ightĀ;e㊪㝋ñၚot;旬inus;樺lus;樹b;槍ime;樻ezium;揢ƀcht㝲㝽㞁Āry㝷㝻;쀀𝓉;䑆cy;䑛rok;䅧Āio㞋㞎xô᝷headĀlr㞗㞠eftarro÷ࡏightarrow»ཝऀAHabcdfghlmoprstuw㟐㟓㟗㟤㟰㟼㠎㠜㠣㠴㡑㡝㡫㢩㣌㣒㣪㣶ròϭar;楣Ācr㟜㟢ute耻ú䃺òᅐrǣ㟪\0㟭y;䑞ve;䅭Āiy㟵㟺rc耻û䃻;䑃ƀabh㠃㠆㠋ròᎭlac;䅱aòᏃĀir㠓㠘sht;楾;쀀𝔲rave耻ù䃹š㠧㠱rĀlr㠬㠮»ॗ»ႃlk;斀Āct㠹㡍ɯ㠿\0\0㡊rnĀ;e㡅㡆挜r»㡆op;挏ri;旸Āal㡖㡚cr;䅫肻¨͉Āgp㡢㡦on;䅳f;쀀𝕦̀adhlsuᅋ㡸㡽፲㢑㢠ownáᎳarpoonĀlr㢈㢌efô㠭ighô㠯iƀ;hl㢙㢚㢜䏅»ᏺon»㢚parrows;懈ƀcit㢰㣄㣈ɯ㢶\0\0㣁rnĀ;e㢼㢽挝r»㢽op;挎ng;䅯ri;旹cr;쀀𝓊ƀdir㣙㣝㣢ot;拰lde;䅩iĀ;f㜰㣨»᠓Āam㣯㣲rò㢨l耻ü䃼angle;榧ހABDacdeflnoprsz㤜㤟㤩㤭㦵㦸㦽㧟㧤㧨㧳㧹㧽㨁㨠ròϷarĀ;v㤦㤧櫨;櫩asèϡĀnr㤲㤷grt;榜΀eknprst㓣㥆㥋㥒㥝㥤㦖appá␕othinçẖƀhir㓫⻈㥙opô⾵Ā;hᎷ㥢ïㆍĀiu㥩㥭gmá㎳Ābp㥲㦄setneqĀ;q㥽㦀쀀⊊︀;쀀⫋︀setneqĀ;q㦏㦒쀀⊋︀;쀀⫌︀Āhr㦛㦟etá㚜iangleĀlr㦪㦯eft»थight»ၑy;䐲ash»ံƀelr㧄㧒㧗ƀ;beⷪ㧋㧏ar;抻q;扚lip;拮Ābt㧜ᑨaòᑩr;쀀𝔳tré㦮suĀbp㧯㧱»ജ»൙pf;쀀𝕧roð໻tré㦴Ācu㨆㨋r;쀀𝓋Ābp㨐㨘nĀEe㦀㨖»㥾nĀEe㦒㨞»㦐igzag;榚΀cefoprs㨶㨻㩖㩛㩔㩡㩪irc;䅵Ādi㩀㩑Ābg㩅㩉ar;機eĀ;qᗺ㩏;扙erp;愘r;쀀𝔴pf;쀀𝕨Ā;eᑹ㩦atèᑹcr;쀀𝓌ૣណ㪇\0㪋\0㪐㪛\0\0㪝㪨㪫㪯\0\0㫃㫎\0㫘ៜ៟tré៑r;쀀𝔵ĀAa㪔㪗ròσrò৶;䎾ĀAa㪡㪤ròθrò৫að✓is;拻ƀdptឤ㪵㪾Āfl㪺ឩ;쀀𝕩imåឲĀAa㫇㫊ròώròਁĀcq㫒ីr;쀀𝓍Āpt៖㫜ré។Ѐacefiosu㫰㫽㬈㬌㬑㬕㬛㬡cĀuy㫶㫻te耻ý䃽;䑏Āiy㬂㬆rc;䅷;䑋n耻¥䂥r;쀀𝔶cy;䑗pf;쀀𝕪cr;쀀𝓎Ācm㬦㬩y;䑎l耻ÿ䃿Ԁacdefhiosw㭂㭈㭔㭘㭤㭩㭭㭴㭺㮀cute;䅺Āay㭍㭒ron;䅾;䐷ot;䅼Āet㭝㭡træᕟa;䎶r;쀀𝔷cy;䐶grarr;懝pf;쀀𝕫cr;쀀𝓏Ājn㮅㮇;怍j;怌'.split("").map(e=>e.charCodeAt(0))),_c=new Uint16Array("Ȁaglq	\x1Bɭ\0\0p;䀦os;䀧t;䀾t;䀼uot;䀢".split("").map(e=>e.charCodeAt(0)));var nn;const kc=new Map([[0,65533],[128,8364],[130,8218],[131,402],[132,8222],[133,8230],[134,8224],[135,8225],[136,710],[137,8240],[138,352],[139,8249],[140,338],[142,381],[145,8216],[146,8217],[147,8220],[148,8221],[149,8226],[150,8211],[151,8212],[152,732],[153,8482],[154,353],[155,8250],[156,339],[158,382],[159,376]]),yc=(nn=String.fromCodePoint)!==null&&nn!==void 0?nn:function(e){let u="";return e>65535&&(e-=65536,u+=String.fromCharCode(e>>>10&1023|55296),e=56320|e&1023),u+=String.fromCharCode(e),u};function Cc(e){var u;return e>=55296&&e<=57343||e>1114111?65533:(u=kc.get(e))!==null&&u!==void 0?u:e}var ee;(function(e){e[e.NUM=35]="NUM",e[e.SEMI=59]="SEMI",e[e.EQUALS=61]="EQUALS",e[e.ZERO=48]="ZERO",e[e.NINE=57]="NINE",e[e.LOWER_A=97]="LOWER_A",e[e.LOWER_F=102]="LOWER_F",e[e.LOWER_X=120]="LOWER_X",e[e.LOWER_Z=122]="LOWER_Z",e[e.UPPER_A=65]="UPPER_A",e[e.UPPER_F=70]="UPPER_F",e[e.UPPER_Z=90]="UPPER_Z"})(ee||(ee={}));const Ec=32;var nu;(function(e){e[e.VALUE_LENGTH=49152]="VALUE_LENGTH",e[e.BRANCH_LENGTH=16256]="BRANCH_LENGTH",e[e.JUMP_TABLE=127]="JUMP_TABLE"})(nu||(nu={}));function Cn(e){return e>=ee.ZERO&&e<=ee.NINE}function Dc(e){return e>=ee.UPPER_A&&e<=ee.UPPER_F||e>=ee.LOWER_A&&e<=ee.LOWER_F}function Ac(e){return e>=ee.UPPER_A&&e<=ee.UPPER_Z||e>=ee.LOWER_A&&e<=ee.LOWER_Z||Cn(e)}function Fc(e){return e===ee.EQUALS||Ac(e)}var X;(function(e){e[e.EntityStart=0]="EntityStart",e[e.NumericStart=1]="NumericStart",e[e.NumericDecimal=2]="NumericDecimal",e[e.NumericHex=3]="NumericHex",e[e.NamedEntity=4]="NamedEntity"})(X||(X={}));var tu;(function(e){e[e.Legacy=0]="Legacy",e[e.Strict=1]="Strict",e[e.Attribute=2]="Attribute"})(tu||(tu={}));class vc{constructor(u,t,n){this.decodeTree=u,this.emitCodePoint=t,this.errors=n,this.state=X.EntityStart,this.consumed=1,this.result=0,this.treeIndex=0,this.excess=1,this.decodeMode=tu.Strict}startEntity(u){this.decodeMode=u,this.state=X.EntityStart,this.result=0,this.treeIndex=0,this.excess=1,this.consumed=1}write(u,t){switch(this.state){case X.EntityStart:return u.charCodeAt(t)===ee.NUM?(this.state=X.NumericStart,this.consumed+=1,this.stateNumericStart(u,t+1)):(this.state=X.NamedEntity,this.stateNamedEntity(u,t));case X.NumericStart:return this.stateNumericStart(u,t);case X.NumericDecimal:return this.stateNumericDecimal(u,t);case X.NumericHex:return this.stateNumericHex(u,t);case X.NamedEntity:return this.stateNamedEntity(u,t)}}stateNumericStart(u,t){return t>=u.length?-1:(u.charCodeAt(t)|Ec)===ee.LOWER_X?(this.state=X.NumericHex,this.consumed+=1,this.stateNumericHex(u,t+1)):(this.state=X.NumericDecimal,this.stateNumericDecimal(u,t))}addToNumericResult(u,t,n,r){if(t!==n){const i=n-t;this.result=this.result*Math.pow(r,i)+parseInt(u.substr(t,i),r),this.consumed+=i}}stateNumericHex(u,t){const n=t;for(;t<u.length;){const r=u.charCodeAt(t);if(Cn(r)||Dc(r))t+=1;else return this.addToNumericResult(u,n,t,16),this.emitNumericEntity(r,3)}return this.addToNumericResult(u,n,t,16),-1}stateNumericDecimal(u,t){const n=t;for(;t<u.length;){const r=u.charCodeAt(t);if(Cn(r))t+=1;else return this.addToNumericResult(u,n,t,10),this.emitNumericEntity(r,2)}return this.addToNumericResult(u,n,t,10),-1}emitNumericEntity(u,t){var n;if(this.consumed<=t)return(n=this.errors)===null||n===void 0||n.absenceOfDigitsInNumericCharacterReference(this.consumed),0;if(u===ee.SEMI)this.consumed+=1;else if(this.decodeMode===tu.Strict)return 0;return this.emitCodePoint(Cc(this.result),this.consumed),this.errors&&(u!==ee.SEMI&&this.errors.missingSemicolonAfterCharacterReference(),this.errors.validateNumericCharacterReference(this.result)),this.consumed}stateNamedEntity(u,t){const{decodeTree:n}=this;let r=n[this.treeIndex],i=(r&nu.VALUE_LENGTH)>>14;for(;t<u.length;t++,this.excess++){const o=u.charCodeAt(t);if(this.treeIndex=wc(n,r,this.treeIndex+Math.max(1,i),o),this.treeIndex<0)return this.result===0||this.decodeMode===tu.Attribute&&(i===0||Fc(o))?0:this.emitNotTerminatedNamedEntity();if(r=n[this.treeIndex],i=(r&nu.VALUE_LENGTH)>>14,i!==0){if(o===ee.SEMI)return this.emitNamedEntityData(this.treeIndex,i,this.consumed+this.excess);this.decodeMode!==tu.Strict&&(this.result=this.treeIndex,this.consumed+=this.excess,this.excess=0)}}return-1}emitNotTerminatedNamedEntity(){var u;const{result:t,decodeTree:n}=this,r=(n[t]&nu.VALUE_LENGTH)>>14;return this.emitNamedEntityData(t,r,this.consumed),(u=this.errors)===null||u===void 0||u.missingSemicolonAfterCharacterReference(),this.consumed}emitNamedEntityData(u,t,n){const{decodeTree:r}=this;return this.emitCodePoint(t===1?r[u]&~nu.VALUE_LENGTH:r[u+1],n),t===3&&this.emitCodePoint(r[u+2],n),n}end(){var u;switch(this.state){case X.NamedEntity:return this.result!==0&&(this.decodeMode!==tu.Attribute||this.result===this.treeIndex)?this.emitNotTerminatedNamedEntity():0;case X.NumericDecimal:return this.emitNumericEntity(0,2);case X.NumericHex:return this.emitNumericEntity(0,3);case X.NumericStart:return(u=this.errors)===null||u===void 0||u.absenceOfDigitsInNumericCharacterReference(this.consumed),0;case X.EntityStart:return 0}}}function ni(e){let u="";const t=new vc(e,n=>u+=yc(n));return function(r,i){let o=0,s=0;for(;(s=r.indexOf("&",s))>=0;){u+=r.slice(o,s),t.startEntity(i);const l=t.write(r,s+1);if(l<0){o=s+t.end();break}o=s+l,s=l===0?o+1:o}const c=u+r.slice(o);return u="",c}}function wc(e,u,t,n){const r=(u&nu.BRANCH_LENGTH)>>7,i=u&nu.JUMP_TABLE;if(r===0)return i!==0&&n===i?t:-1;if(i){const c=n-i;return c<0||c>=r?-1:e[t+c]-1}let o=t,s=o+r-1;for(;o<=s;){const c=o+s>>>1,l=e[c];if(l<n)o=c+1;else if(l>n)s=c-1;else return e[c+r]}return-1}const Sc=ni(gc);ni(_c);function ri(e,u=tu.Legacy){return Sc(e,u)}function Tc(e){return Object.prototype.toString.call(e)}function Zn(e){return Tc(e)==="[object String]"}const Ic=Object.prototype.hasOwnProperty;function Mc(e,u){return Ic.call(e,u)}function qt(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){if(t){if(typeof t!="object")throw new TypeError(t+"must be object");Object.keys(t).forEach(function(n){e[n]=t[n]})}}),e}function ii(e,u,t){return[].concat(e.slice(0,u),t,e.slice(u+1))}function Gn(e){return!(e>=55296&&e<=57343||e>=64976&&e<=65007||(e&65535)===65535||(e&65535)===65534||e>=0&&e<=8||e===11||e>=14&&e<=31||e>=127&&e<=159||e>1114111)}function vt(e){if(e>65535){e-=65536;const u=55296+(e>>10),t=56320+(e&1023);return String.fromCharCode(u,t)}return String.fromCharCode(e)}const oi=/\\([!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~])/g,Pc=/&([a-z#][a-z0-9]{1,31});/gi,Rc=new RegExp(oi.source+"|"+Pc.source,"gi"),Oc=/^#((?:x[a-f0-9]{1,8}|[0-9]{1,8}))$/i;function jc(e,u){if(u.charCodeAt(0)===35&&Oc.test(u)){const n=u[1].toLowerCase()==="x"?parseInt(u.slice(2),16):parseInt(u.slice(1),10);return Gn(n)?vt(n):e}const t=ri(e);return t!==e?t:e}function Bc(e){return e.indexOf("\\")<0?e:e.replace(oi,"$1")}function Tu(e){return e.indexOf("\\")<0&&e.indexOf("&")<0?e:e.replace(Rc,function(u,t,n){return t||jc(u,n)})}const Lc=/[&<>"]/,Nc=/[&<>"]/g,zc={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"};function qc(e){return zc[e]}function ou(e){return Lc.test(e)?e.replace(Nc,qc):e}const Hc=/[.?*+^$[\]\\(){}|-]/g;function $c(e){return e.replace(Hc,"\\$&")}function G(e){switch(e){case 9:case 32:return!0}return!1}function Yu(e){if(e>=8192&&e<=8202)return!0;switch(e){case 9:case 10:case 11:case 12:case 13:case 32:case 160:case 5760:case 8239:case 8287:case 12288:return!0}return!1}function Xu(e){return Wn.test(e)||ui.test(e)}function et(e){switch(e){case 33:case 34:case 35:case 36:case 37:case 38:case 39:case 40:case 41:case 42:case 43:case 44:case 45:case 46:case 47:case 58:case 59:case 60:case 61:case 62:case 63:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 124:case 125:case 126:return!0;default:return!1}}function Ht(e){return e=e.trim().replace(/\s+/g," "),"ẞ".toLowerCase()==="Ṿ"&&(e=e.replace(/ẞ/g,"ß")),e.toLowerCase().toUpperCase()}const Uc={mdurl:bc,ucmicro:xc},Vc=Object.freeze(Object.defineProperty({__proto__:null,arrayReplaceAt:ii,assign:qt,escapeHtml:ou,escapeRE:$c,fromCodePoint:vt,has:Mc,isMdAsciiPunct:et,isPunctChar:Xu,isSpace:G,isString:Zn,isValidEntityCode:Gn,isWhiteSpace:Yu,lib:Uc,normalizeReference:Ht,unescapeAll:Tu,unescapeMd:Bc},Symbol.toStringTag,{value:"Module"}));function Wc(e,u,t){let n,r,i,o;const s=e.posMax,c=e.pos;for(e.pos=u+1,n=1;e.pos<s;){if(i=e.src.charCodeAt(e.pos),i===93&&(n--,n===0)){r=!0;break}if(o=e.pos,e.md.inline.skipToken(e),i===91){if(o===e.pos-1)n++;else if(t)return e.pos=c,-1}}let l=-1;return r&&(l=e.pos),e.pos=c,l}function Zc(e,u,t){let n,r=u;const i={ok:!1,pos:0,str:""};if(e.charCodeAt(r)===60){for(r++;r<t;){if(n=e.charCodeAt(r),n===10||n===60)return i;if(n===62)return i.pos=r+1,i.str=Tu(e.slice(u+1,r)),i.ok=!0,i;if(n===92&&r+1<t){r+=2;continue}r++}return i}let o=0;for(;r<t&&(n=e.charCodeAt(r),!(n===32||n<32||n===127));){if(n===92&&r+1<t){if(e.charCodeAt(r+1)===32)break;r+=2;continue}if(n===40&&(o++,o>32))return i;if(n===41){if(o===0)break;o--}r++}return u===r||o!==0||(i.str=Tu(e.slice(u,r)),i.pos=r,i.ok=!0),i}function Gc(e,u,t,n){let r,i=u;const o={ok:!1,can_continue:!1,pos:0,str:"",marker:0};if(n)o.str=n.str,o.marker=n.marker;else{if(i>=t)return o;let s=e.charCodeAt(i);if(s!==34&&s!==39&&s!==40)return o;u++,i++,s===40&&(s=41),o.marker=s}for(;i<t;){if(r=e.charCodeAt(i),r===o.marker)return o.pos=i+1,o.str+=Tu(e.slice(u,i)),o.ok=!0,o;if(r===40&&o.marker===41)return o;r===92&&i+1<t&&i++,i++}return o.can_continue=!0,o.str+=Tu(e.slice(u,i)),o}const Jc=Object.freeze(Object.defineProperty({__proto__:null,parseLinkDestination:Zc,parseLinkLabel:Wc,parseLinkTitle:Gc},Symbol.toStringTag,{value:"Module"})),qe={};qe.code_inline=function(e,u,t,n,r){const i=e[u];return"<code"+r.renderAttrs(i)+">"+ou(i.content)+"</code>"};qe.code_block=function(e,u,t,n,r){const i=e[u];return"<pre"+r.renderAttrs(i)+"><code>"+ou(e[u].content)+`</code></pre>
`};qe.fence=function(e,u,t,n,r){const i=e[u],o=i.info?Tu(i.info).trim():"";let s="",c="";if(o){const a=o.split(/(\s+)/g);s=a[0],c=a.slice(2).join("")}let l;if(t.highlight?l=t.highlight(i.content,s,c)||ou(i.content):l=ou(i.content),l.indexOf("<pre")===0)return l+`
`;if(o){const a=i.attrIndex("class"),f=i.attrs?i.attrs.slice():[];a<0?f.push(["class",t.langPrefix+s]):(f[a]=f[a].slice(),f[a][1]+=" "+t.langPrefix+s);const m={attrs:f};return`<pre><code${r.renderAttrs(m)}>${l}</code></pre>
`}return`<pre><code${r.renderAttrs(i)}>${l}</code></pre>
`};qe.image=function(e,u,t,n,r){const i=e[u];return i.attrs[i.attrIndex("alt")][1]=r.renderInlineAsText(i.children,t,n),r.renderToken(e,u,t)};qe.hardbreak=function(e,u,t){return t.xhtmlOut?`<br />
`:`<br>
`};qe.softbreak=function(e,u,t){return t.breaks?t.xhtmlOut?`<br />
`:`<br>
`:`
`};qe.text=function(e,u){return ou(e[u].content)};qe.html_block=function(e,u){return e[u].content};qe.html_inline=function(e,u){return e[u].content};function Iu(){this.rules=qt({},qe)}Iu.prototype.renderAttrs=function(u){let t,n,r;if(!u.attrs)return"";for(r="",t=0,n=u.attrs.length;t<n;t++)r+=" "+ou(u.attrs[t][0])+'="'+ou(u.attrs[t][1])+'"';return r};Iu.prototype.renderToken=function(u,t,n){const r=u[t];let i="";if(r.hidden)return"";r.block&&r.nesting!==-1&&t&&u[t-1].hidden&&(i+=`
`),i+=(r.nesting===-1?"</":"<")+r.tag,i+=this.renderAttrs(r),r.nesting===0&&n.xhtmlOut&&(i+=" /");let o=!1;if(r.block&&(o=!0,r.nesting===1&&t+1<u.length)){const s=u[t+1];(s.type==="inline"||s.hidden||s.nesting===-1&&s.tag===r.tag)&&(o=!1)}return i+=o?`>
`:">",i};Iu.prototype.renderInline=function(e,u,t){let n="";const r=this.rules;for(let i=0,o=e.length;i<o;i++){const s=e[i].type;typeof r[s]<"u"?n+=r[s](e,i,u,t,this):n+=this.renderToken(e,i,u)}return n};Iu.prototype.renderInlineAsText=function(e,u,t){let n="";for(let r=0,i=e.length;r<i;r++)switch(e[r].type){case"text":n+=e[r].content;break;case"image":n+=this.renderInlineAsText(e[r].children,u,t);break;case"html_inline":case"html_block":n+=e[r].content;break;case"softbreak":case"hardbreak":n+=`
`;break}return n};Iu.prototype.render=function(e,u,t){let n="";const r=this.rules;for(let i=0,o=e.length;i<o;i++){const s=e[i].type;s==="inline"?n+=this.renderInline(e[i].children,u,t):typeof r[s]<"u"?n+=r[s](e,i,u,t,this):n+=this.renderToken(e,i,u,t)}return n};function de(){this.__rules__=[],this.__cache__=null}de.prototype.__find__=function(e){for(let u=0;u<this.__rules__.length;u++)if(this.__rules__[u].name===e)return u;return-1};de.prototype.__compile__=function(){const e=this,u=[""];e.__rules__.forEach(function(t){t.enabled&&t.alt.forEach(function(n){u.indexOf(n)<0&&u.push(n)})}),e.__cache__={},u.forEach(function(t){e.__cache__[t]=[],e.__rules__.forEach(function(n){n.enabled&&(t&&n.alt.indexOf(t)<0||e.__cache__[t].push(n.fn))})})};de.prototype.at=function(e,u,t){const n=this.__find__(e),r=t||{};if(n===-1)throw new Error("Parser rule not found: "+e);this.__rules__[n].fn=u,this.__rules__[n].alt=r.alt||[],this.__cache__=null};de.prototype.before=function(e,u,t,n){const r=this.__find__(e),i=n||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(r,0,{name:u,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};de.prototype.after=function(e,u,t,n){const r=this.__find__(e),i=n||{};if(r===-1)throw new Error("Parser rule not found: "+e);this.__rules__.splice(r+1,0,{name:u,enabled:!0,fn:t,alt:i.alt||[]}),this.__cache__=null};de.prototype.push=function(e,u,t){const n=t||{};this.__rules__.push({name:e,enabled:!0,fn:u,alt:n.alt||[]}),this.__cache__=null};de.prototype.enable=function(e,u){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(n){const r=this.__find__(n);if(r<0){if(u)return;throw new Error("Rules manager: invalid rule name "+n)}this.__rules__[r].enabled=!0,t.push(n)},this),this.__cache__=null,t};de.prototype.enableOnly=function(e,u){Array.isArray(e)||(e=[e]),this.__rules__.forEach(function(t){t.enabled=!1}),this.enable(e,u)};de.prototype.disable=function(e,u){Array.isArray(e)||(e=[e]);const t=[];return e.forEach(function(n){const r=this.__find__(n);if(r<0){if(u)return;throw new Error("Rules manager: invalid rule name "+n)}this.__rules__[r].enabled=!1,t.push(n)},this),this.__cache__=null,t};de.prototype.getRules=function(e){return this.__cache__===null&&this.__compile__(),this.__cache__[e]||[]};function we(e,u,t){this.type=e,this.tag=u,this.attrs=null,this.map=null,this.nesting=t,this.level=0,this.children=null,this.content="",this.markup="",this.info="",this.meta=null,this.block=!1,this.hidden=!1}we.prototype.attrIndex=function(u){if(!this.attrs)return-1;const t=this.attrs;for(let n=0,r=t.length;n<r;n++)if(t[n][0]===u)return n;return-1};we.prototype.attrPush=function(u){this.attrs?this.attrs.push(u):this.attrs=[u]};we.prototype.attrSet=function(u,t){const n=this.attrIndex(u),r=[u,t];n<0?this.attrPush(r):this.attrs[n]=r};we.prototype.attrGet=function(u){const t=this.attrIndex(u);let n=null;return t>=0&&(n=this.attrs[t][1]),n};we.prototype.attrJoin=function(u,t){const n=this.attrIndex(u);n<0?this.attrPush([u,t]):this.attrs[n][1]=this.attrs[n][1]+" "+t};function si(e,u,t){this.src=e,this.env=t,this.tokens=[],this.inlineMode=!1,this.md=u}si.prototype.Token=we;const Kc=/\r\n?|\n/g,Qc=/\0/g;function Yc(e){let u;u=e.src.replace(Kc,`
`),u=u.replace(Qc,"�"),e.src=u}function Xc(e){let u;e.inlineMode?(u=new e.Token("inline","",0),u.content=e.src,u.map=[0,1],u.children=[],e.tokens.push(u)):e.md.block.parse(e.src,e.md,e.env,e.tokens)}function el(e){const u=e.tokens;for(let t=0,n=u.length;t<n;t++){const r=u[t];r.type==="inline"&&e.md.inline.parse(r.content,e.md,e.env,r.children)}}function ul(e){return/^<a[>\s]/i.test(e)}function tl(e){return/^<\/a\s*>/i.test(e)}function nl(e){const u=e.tokens;if(e.md.options.linkify)for(let t=0,n=u.length;t<n;t++){if(u[t].type!=="inline"||!e.md.linkify.pretest(u[t].content))continue;let r=u[t].children,i=0;for(let o=r.length-1;o>=0;o--){const s=r[o];if(s.type==="link_close"){for(o--;r[o].level!==s.level&&r[o].type!=="link_open";)o--;continue}if(s.type==="html_inline"&&(ul(s.content)&&i>0&&i--,tl(s.content)&&i++),!(i>0)&&s.type==="text"&&e.md.linkify.test(s.content)){const c=s.content;let l=e.md.linkify.match(c);const a=[];let f=s.level,m=0;l.length>0&&l[0].index===0&&o>0&&r[o-1].type==="text_special"&&(l=l.slice(1));for(let b=0;b<l.length;b++){const p=l[b].url,F=e.md.normalizeLink(p);if(!e.md.validateLink(F))continue;let R=l[b].text;l[b].schema?l[b].schema==="mailto:"&&!/^mailto:/i.test(R)?R=e.md.normalizeLinkText("mailto:"+R).replace(/^mailto:/,""):R=e.md.normalizeLinkText(R):R=e.md.normalizeLinkText("http://"+R).replace(/^http:\/\//,"");const I=l[b].index;if(I>m){const T=new e.Token("text","",0);T.content=c.slice(m,I),T.level=f,a.push(T)}const w=new e.Token("link_open","a",1);w.attrs=[["href",F]],w.level=f++,w.markup="linkify",w.info="auto",a.push(w);const S=new e.Token("text","",0);S.content=R,S.level=f,a.push(S);const k=new e.Token("link_close","a",-1);k.level=--f,k.markup="linkify",k.info="auto",a.push(k),m=l[b].lastIndex}if(m<c.length){const b=new e.Token("text","",0);b.content=c.slice(m),b.level=f,a.push(b)}u[t].children=r=ii(r,o,a)}}}}const ci=/\+-|\.\.|\?\?\?\?|!!!!|,,|--/,rl=/\((c|tm|r)\)/i,il=/\((c|tm|r)\)/ig,ol={c:"©",r:"®",tm:"™"};function sl(e,u){return ol[u.toLowerCase()]}function cl(e){let u=0;for(let t=e.length-1;t>=0;t--){const n=e[t];n.type==="text"&&!u&&(n.content=n.content.replace(il,sl)),n.type==="link_open"&&n.info==="auto"&&u--,n.type==="link_close"&&n.info==="auto"&&u++}}function ll(e){let u=0;for(let t=e.length-1;t>=0;t--){const n=e[t];n.type==="text"&&!u&&ci.test(n.content)&&(n.content=n.content.replace(/\+-/g,"±").replace(/\.{2,}/g,"…").replace(/([?!])…/g,"$1..").replace(/([?!]){4,}/g,"$1$1$1").replace(/,{2,}/g,",").replace(/(^|[^-])---(?=[^-]|$)/mg,"$1—").replace(/(^|\s)--(?=\s|$)/mg,"$1–").replace(/(^|[^-\s])--(?=[^-\s]|$)/mg,"$1–")),n.type==="link_open"&&n.info==="auto"&&u--,n.type==="link_close"&&n.info==="auto"&&u++}}function al(e){let u;if(e.md.options.typographer)for(u=e.tokens.length-1;u>=0;u--)e.tokens[u].type==="inline"&&(rl.test(e.tokens[u].content)&&cl(e.tokens[u].children),ci.test(e.tokens[u].content)&&ll(e.tokens[u].children))}const fl=/['"]/,jr=/['"]/g,Br="’";function dt(e,u,t){return e.slice(0,u)+t+e.slice(u+1)}function dl(e,u){let t;const n=[];for(let r=0;r<e.length;r++){const i=e[r],o=e[r].level;for(t=n.length-1;t>=0&&!(n[t].level<=o);t--);if(n.length=t+1,i.type!=="text")continue;let s=i.content,c=0,l=s.length;e:for(;c<l;){jr.lastIndex=c;const a=jr.exec(s);if(!a)break;let f=!0,m=!0;c=a.index+1;const b=a[0]==="'";let p=32;if(a.index-1>=0)p=s.charCodeAt(a.index-1);else for(t=r-1;t>=0&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t--)if(e[t].content){p=e[t].content.charCodeAt(e[t].content.length-1);break}let F=32;if(c<l)F=s.charCodeAt(c);else for(t=r+1;t<e.length&&!(e[t].type==="softbreak"||e[t].type==="hardbreak");t++)if(e[t].content){F=e[t].content.charCodeAt(0);break}const R=et(p)||Xu(String.fromCharCode(p)),I=et(F)||Xu(String.fromCharCode(F)),w=Yu(p),S=Yu(F);if(S?f=!1:I&&(w||R||(f=!1)),w?m=!1:R&&(S||I||(m=!1)),F===34&&a[0]==='"'&&p>=48&&p<=57&&(m=f=!1),f&&m&&(f=R,m=I),!f&&!m){b&&(i.content=dt(i.content,a.index,Br));continue}if(m)for(t=n.length-1;t>=0;t--){let k=n[t];if(n[t].level<o)break;if(k.single===b&&n[t].level===o){k=n[t];let T,B;b?(T=u.md.options.quotes[2],B=u.md.options.quotes[3]):(T=u.md.options.quotes[0],B=u.md.options.quotes[1]),i.content=dt(i.content,a.index,B),e[k.token].content=dt(e[k.token].content,k.pos,T),c+=B.length-1,k.token===r&&(c+=T.length-1),s=i.content,l=s.length,n.length=t;continue e}}f?n.push({token:r,pos:a.index,single:b,level:o}):m&&b&&(i.content=dt(i.content,a.index,Br))}}}function hl(e){if(e.md.options.typographer)for(let u=e.tokens.length-1;u>=0;u--)e.tokens[u].type!=="inline"||!fl.test(e.tokens[u].content)||dl(e.tokens[u].children,e)}function pl(e){let u,t;const n=e.tokens,r=n.length;for(let i=0;i<r;i++){if(n[i].type!=="inline")continue;const o=n[i].children,s=o.length;for(u=0;u<s;u++)o[u].type==="text_special"&&(o[u].type="text");for(u=t=0;u<s;u++)o[u].type==="text"&&u+1<s&&o[u+1].type==="text"?o[u+1].content=o[u].content+o[u+1].content:(u!==t&&(o[t]=o[u]),t++);u!==t&&(o.length=t)}}const rn=[["normalize",Yc],["block",Xc],["inline",el],["linkify",nl],["replacements",al],["smartquotes",hl],["text_join",pl]];function Jn(){this.ruler=new de;for(let e=0;e<rn.length;e++)this.ruler.push(rn[e][0],rn[e][1])}Jn.prototype.process=function(e){const u=this.ruler.getRules("");for(let t=0,n=u.length;t<n;t++)u[t](e)};Jn.prototype.State=si;function He(e,u,t,n){this.src=e,this.md=u,this.env=t,this.tokens=n,this.bMarks=[],this.eMarks=[],this.tShift=[],this.sCount=[],this.bsCount=[],this.blkIndent=0,this.line=0,this.lineMax=0,this.tight=!1,this.ddIndent=-1,this.listIndent=-1,this.parentType="root",this.level=0;const r=this.src;for(let i=0,o=0,s=0,c=0,l=r.length,a=!1;o<l;o++){const f=r.charCodeAt(o);if(!a)if(G(f)){s++,f===9?c+=4-c%4:c++;continue}else a=!0;(f===10||o===l-1)&&(f!==10&&o++,this.bMarks.push(i),this.eMarks.push(o),this.tShift.push(s),this.sCount.push(c),this.bsCount.push(0),a=!1,s=0,c=0,i=o+1)}this.bMarks.push(r.length),this.eMarks.push(r.length),this.tShift.push(0),this.sCount.push(0),this.bsCount.push(0),this.lineMax=this.bMarks.length-1}He.prototype.push=function(e,u,t){const n=new we(e,u,t);return n.block=!0,t<0&&this.level--,n.level=this.level,t>0&&this.level++,this.tokens.push(n),n};He.prototype.isEmpty=function(u){return this.bMarks[u]+this.tShift[u]>=this.eMarks[u]};He.prototype.skipEmptyLines=function(u){for(let t=this.lineMax;u<t&&!(this.bMarks[u]+this.tShift[u]<this.eMarks[u]);u++);return u};He.prototype.skipSpaces=function(u){for(let t=this.src.length;u<t;u++){const n=this.src.charCodeAt(u);if(!G(n))break}return u};He.prototype.skipSpacesBack=function(u,t){if(u<=t)return u;for(;u>t;)if(!G(this.src.charCodeAt(--u)))return u+1;return u};He.prototype.skipChars=function(u,t){for(let n=this.src.length;u<n&&this.src.charCodeAt(u)===t;u++);return u};He.prototype.skipCharsBack=function(u,t,n){if(u<=n)return u;for(;u>n;)if(t!==this.src.charCodeAt(--u))return u+1;return u};He.prototype.getLines=function(u,t,n,r){if(u>=t)return"";const i=new Array(t-u);for(let o=0,s=u;s<t;s++,o++){let c=0;const l=this.bMarks[s];let a=l,f;for(s+1<t||r?f=this.eMarks[s]+1:f=this.eMarks[s];a<f&&c<n;){const m=this.src.charCodeAt(a);if(G(m))m===9?c+=4-(c+this.bsCount[s])%4:c++;else if(a-l<this.tShift[s])c++;else break;a++}c>n?i[o]=new Array(c-n+1).join(" ")+this.src.slice(a,f):i[o]=this.src.slice(a,f)}return i.join("")};He.prototype.Token=we;const bl=65536;function on(e,u){const t=e.bMarks[u]+e.tShift[u],n=e.eMarks[u];return e.src.slice(t,n)}function Lr(e){const u=[],t=e.length;let n=0,r=e.charCodeAt(n),i=!1,o=0,s="";for(;n<t;)r===124&&(i?(s+=e.substring(o,n-1),o=n):(u.push(s+e.substring(o,n)),s="",o=n+1)),i=r===92,n++,r=e.charCodeAt(n);return u.push(s+e.substring(o)),u}function ml(e,u,t,n){if(u+2>t)return!1;let r=u+1;if(e.sCount[r]<e.blkIndent||e.sCount[r]-e.blkIndent>=4)return!1;let i=e.bMarks[r]+e.tShift[r];if(i>=e.eMarks[r])return!1;const o=e.src.charCodeAt(i++);if(o!==124&&o!==45&&o!==58||i>=e.eMarks[r])return!1;const s=e.src.charCodeAt(i++);if(s!==124&&s!==45&&s!==58&&!G(s)||o===45&&G(s))return!1;for(;i<e.eMarks[r];){const k=e.src.charCodeAt(i);if(k!==124&&k!==45&&k!==58&&!G(k))return!1;i++}let c=on(e,u+1),l=c.split("|");const a=[];for(let k=0;k<l.length;k++){const T=l[k].trim();if(!T){if(k===0||k===l.length-1)continue;return!1}if(!/^:?-+:?$/.test(T))return!1;T.charCodeAt(T.length-1)===58?a.push(T.charCodeAt(0)===58?"center":"right"):T.charCodeAt(0)===58?a.push("left"):a.push("")}if(c=on(e,u).trim(),c.indexOf("|")===-1||e.sCount[u]-e.blkIndent>=4)return!1;l=Lr(c),l.length&&l[0]===""&&l.shift(),l.length&&l[l.length-1]===""&&l.pop();const f=l.length;if(f===0||f!==a.length)return!1;if(n)return!0;const m=e.parentType;e.parentType="table";const b=e.md.block.ruler.getRules("blockquote"),p=e.push("table_open","table",1),F=[u,0];p.map=F;const R=e.push("thead_open","thead",1);R.map=[u,u+1];const I=e.push("tr_open","tr",1);I.map=[u,u+1];for(let k=0;k<l.length;k++){const T=e.push("th_open","th",1);a[k]&&(T.attrs=[["style","text-align:"+a[k]]]);const B=e.push("inline","",0);B.content=l[k].trim(),B.children=[],e.push("th_close","th",-1)}e.push("tr_close","tr",-1),e.push("thead_close","thead",-1);let w,S=0;for(r=u+2;r<t&&!(e.sCount[r]<e.blkIndent);r++){let k=!1;for(let B=0,$=b.length;B<$;B++)if(b[B](e,r,t,!0)){k=!0;break}if(k||(c=on(e,r).trim(),!c)||e.sCount[r]-e.blkIndent>=4||(l=Lr(c),l.length&&l[0]===""&&l.shift(),l.length&&l[l.length-1]===""&&l.pop(),S+=f-l.length,S>bl))break;if(r===u+2){const B=e.push("tbody_open","tbody",1);B.map=w=[u+2,0]}const T=e.push("tr_open","tr",1);T.map=[r,r+1];for(let B=0;B<f;B++){const $=e.push("td_open","td",1);a[B]&&($.attrs=[["style","text-align:"+a[B]]]);const Q=e.push("inline","",0);Q.content=l[B]?l[B].trim():"",Q.children=[],e.push("td_close","td",-1)}e.push("tr_close","tr",-1)}return w&&(e.push("tbody_close","tbody",-1),w[1]=r),e.push("table_close","table",-1),F[1]=r,e.parentType=m,e.line=r,!0}function xl(e,u,t){if(e.sCount[u]-e.blkIndent<4)return!1;let n=u+1,r=n;for(;n<t;){if(e.isEmpty(n)){n++;continue}if(e.sCount[n]-e.blkIndent>=4){n++,r=n;continue}break}e.line=r;const i=e.push("code_block","code",0);return i.content=e.getLines(u,r,4+e.blkIndent,!1)+`
`,i.map=[u,e.line],!0}function gl(e,u,t,n){let r=e.bMarks[u]+e.tShift[u],i=e.eMarks[u];if(e.sCount[u]-e.blkIndent>=4||r+3>i)return!1;const o=e.src.charCodeAt(r);if(o!==126&&o!==96)return!1;let s=r;r=e.skipChars(r,o);let c=r-s;if(c<3)return!1;const l=e.src.slice(s,r),a=e.src.slice(r,i);if(o===96&&a.indexOf(String.fromCharCode(o))>=0)return!1;if(n)return!0;let f=u,m=!1;for(;f++,!(f>=t||(r=s=e.bMarks[f]+e.tShift[f],i=e.eMarks[f],r<i&&e.sCount[f]<e.blkIndent));)if(e.src.charCodeAt(r)===o&&!(e.sCount[f]-e.blkIndent>=4)&&(r=e.skipChars(r,o),!(r-s<c)&&(r=e.skipSpaces(r),!(r<i)))){m=!0;break}c=e.sCount[u],e.line=f+(m?1:0);const b=e.push("fence","code",0);return b.info=a,b.content=e.getLines(u+1,f,c,!0),b.markup=l,b.map=[u,e.line],!0}function _l(e,u,t,n){let r=e.bMarks[u]+e.tShift[u],i=e.eMarks[u];const o=e.lineMax;if(e.sCount[u]-e.blkIndent>=4||e.src.charCodeAt(r)!==62)return!1;if(n)return!0;const s=[],c=[],l=[],a=[],f=e.md.block.ruler.getRules("blockquote"),m=e.parentType;e.parentType="blockquote";let b=!1,p;for(p=u;p<t;p++){const S=e.sCount[p]<e.blkIndent;if(r=e.bMarks[p]+e.tShift[p],i=e.eMarks[p],r>=i)break;if(e.src.charCodeAt(r++)===62&&!S){let T=e.sCount[p]+1,B,$;e.src.charCodeAt(r)===32?(r++,T++,$=!1,B=!0):e.src.charCodeAt(r)===9?(B=!0,(e.bsCount[p]+T)%4===3?(r++,T++,$=!1):$=!0):B=!1;let Q=T;for(s.push(e.bMarks[p]),e.bMarks[p]=r;r<i;){const he=e.src.charCodeAt(r);if(G(he))he===9?Q+=4-(Q+e.bsCount[p]+($?1:0))%4:Q++;else break;r++}b=r>=i,c.push(e.bsCount[p]),e.bsCount[p]=e.sCount[p]+1+(B?1:0),l.push(e.sCount[p]),e.sCount[p]=Q-T,a.push(e.tShift[p]),e.tShift[p]=r-e.bMarks[p];continue}if(b)break;let k=!1;for(let T=0,B=f.length;T<B;T++)if(f[T](e,p,t,!0)){k=!0;break}if(k){e.lineMax=p,e.blkIndent!==0&&(s.push(e.bMarks[p]),c.push(e.bsCount[p]),a.push(e.tShift[p]),l.push(e.sCount[p]),e.sCount[p]-=e.blkIndent);break}s.push(e.bMarks[p]),c.push(e.bsCount[p]),a.push(e.tShift[p]),l.push(e.sCount[p]),e.sCount[p]=-1}const F=e.blkIndent;e.blkIndent=0;const R=e.push("blockquote_open","blockquote",1);R.markup=">";const I=[u,0];R.map=I,e.md.block.tokenize(e,u,p);const w=e.push("blockquote_close","blockquote",-1);w.markup=">",e.lineMax=o,e.parentType=m,I[1]=e.line;for(let S=0;S<a.length;S++)e.bMarks[S+u]=s[S],e.tShift[S+u]=a[S],e.sCount[S+u]=l[S],e.bsCount[S+u]=c[S];return e.blkIndent=F,!0}function kl(e,u,t,n){const r=e.eMarks[u];if(e.sCount[u]-e.blkIndent>=4)return!1;let i=e.bMarks[u]+e.tShift[u];const o=e.src.charCodeAt(i++);if(o!==42&&o!==45&&o!==95)return!1;let s=1;for(;i<r;){const l=e.src.charCodeAt(i++);if(l!==o&&!G(l))return!1;l===o&&s++}if(s<3)return!1;if(n)return!0;e.line=u+1;const c=e.push("hr","hr",0);return c.map=[u,e.line],c.markup=Array(s+1).join(String.fromCharCode(o)),!0}function Nr(e,u){const t=e.eMarks[u];let n=e.bMarks[u]+e.tShift[u];const r=e.src.charCodeAt(n++);if(r!==42&&r!==45&&r!==43)return-1;if(n<t){const i=e.src.charCodeAt(n);if(!G(i))return-1}return n}function zr(e,u){const t=e.bMarks[u]+e.tShift[u],n=e.eMarks[u];let r=t;if(r+1>=n)return-1;let i=e.src.charCodeAt(r++);if(i<48||i>57)return-1;for(;;){if(r>=n)return-1;if(i=e.src.charCodeAt(r++),i>=48&&i<=57){if(r-t>=10)return-1;continue}if(i===41||i===46)break;return-1}return r<n&&(i=e.src.charCodeAt(r),!G(i))?-1:r}function yl(e,u){const t=e.level+2;for(let n=u+2,r=e.tokens.length-2;n<r;n++)e.tokens[n].level===t&&e.tokens[n].type==="paragraph_open"&&(e.tokens[n+2].hidden=!0,e.tokens[n].hidden=!0,n+=2)}function Cl(e,u,t,n){let r,i,o,s,c=u,l=!0;if(e.sCount[c]-e.blkIndent>=4||e.listIndent>=0&&e.sCount[c]-e.listIndent>=4&&e.sCount[c]<e.blkIndent)return!1;let a=!1;n&&e.parentType==="paragraph"&&e.sCount[c]>=e.blkIndent&&(a=!0);let f,m,b;if((b=zr(e,c))>=0){if(f=!0,o=e.bMarks[c]+e.tShift[c],m=Number(e.src.slice(o,b-1)),a&&m!==1)return!1}else if((b=Nr(e,c))>=0)f=!1;else return!1;if(a&&e.skipSpaces(b)>=e.eMarks[c])return!1;if(n)return!0;const p=e.src.charCodeAt(b-1),F=e.tokens.length;f?(s=e.push("ordered_list_open","ol",1),m!==1&&(s.attrs=[["start",m]])):s=e.push("bullet_list_open","ul",1);const R=[c,0];s.map=R,s.markup=String.fromCharCode(p);let I=!1;const w=e.md.block.ruler.getRules("list"),S=e.parentType;for(e.parentType="list";c<t;){i=b,r=e.eMarks[c];const k=e.sCount[c]+b-(e.bMarks[c]+e.tShift[c]);let T=k;for(;i<r;){const Ue=e.src.charCodeAt(i);if(Ue===9)T+=4-(T+e.bsCount[c])%4;else if(Ue===32)T++;else break;i++}const B=i;let $;B>=r?$=1:$=T-k,$>4&&($=1);const Q=k+$;s=e.push("list_item_open","li",1),s.markup=String.fromCharCode(p);const he=[c,0];s.map=he,f&&(s.info=e.src.slice(o,b-1));const pe=e.tight,$e=e.tShift[c],bu=e.sCount[c],mu=e.listIndent;if(e.listIndent=e.blkIndent,e.blkIndent=Q,e.tight=!0,e.tShift[c]=B-e.bMarks[c],e.sCount[c]=T,B>=r&&e.isEmpty(c+1)?e.line=Math.min(e.line+2,t):e.md.block.tokenize(e,c,t,!0),(!e.tight||I)&&(l=!1),I=e.line-c>1&&e.isEmpty(e.line-1),e.blkIndent=e.listIndent,e.listIndent=mu,e.tShift[c]=$e,e.sCount[c]=bu,e.tight=pe,s=e.push("list_item_close","li",-1),s.markup=String.fromCharCode(p),c=e.line,he[1]=c,c>=t||e.sCount[c]<e.blkIndent||e.sCount[c]-e.blkIndent>=4)break;let xu=!1;for(let Ue=0,ue=w.length;Ue<ue;Ue++)if(w[Ue](e,c,t,!0)){xu=!0;break}if(xu)break;if(f){if(b=zr(e,c),b<0)break;o=e.bMarks[c]+e.tShift[c]}else if(b=Nr(e,c),b<0)break;if(p!==e.src.charCodeAt(b-1))break}return f?s=e.push("ordered_list_close","ol",-1):s=e.push("bullet_list_close","ul",-1),s.markup=String.fromCharCode(p),R[1]=c,e.line=c,e.parentType=S,l&&yl(e,F),!0}function El(e,u,t,n){let r=e.bMarks[u]+e.tShift[u],i=e.eMarks[u],o=u+1;if(e.sCount[u]-e.blkIndent>=4||e.src.charCodeAt(r)!==91)return!1;function s(w){const S=e.lineMax;if(w>=S||e.isEmpty(w))return null;let k=!1;if(e.sCount[w]-e.blkIndent>3&&(k=!0),e.sCount[w]<0&&(k=!0),!k){const $=e.md.block.ruler.getRules("reference"),Q=e.parentType;e.parentType="reference";let he=!1;for(let pe=0,$e=$.length;pe<$e;pe++)if($[pe](e,w,S,!0)){he=!0;break}if(e.parentType=Q,he)return null}const T=e.bMarks[w]+e.tShift[w],B=e.eMarks[w];return e.src.slice(T,B+1)}let c=e.src.slice(r,i+1);i=c.length;let l=-1;for(r=1;r<i;r++){const w=c.charCodeAt(r);if(w===91)return!1;if(w===93){l=r;break}else if(w===10){const S=s(o);S!==null&&(c+=S,i=c.length,o++)}else if(w===92&&(r++,r<i&&c.charCodeAt(r)===10)){const S=s(o);S!==null&&(c+=S,i=c.length,o++)}}if(l<0||c.charCodeAt(l+1)!==58)return!1;for(r=l+2;r<i;r++){const w=c.charCodeAt(r);if(w===10){const S=s(o);S!==null&&(c+=S,i=c.length,o++)}else if(!G(w))break}const a=e.md.helpers.parseLinkDestination(c,r,i);if(!a.ok)return!1;const f=e.md.normalizeLink(a.str);if(!e.md.validateLink(f))return!1;r=a.pos;const m=r,b=o,p=r;for(;r<i;r++){const w=c.charCodeAt(r);if(w===10){const S=s(o);S!==null&&(c+=S,i=c.length,o++)}else if(!G(w))break}let F=e.md.helpers.parseLinkTitle(c,r,i);for(;F.can_continue;){const w=s(o);if(w===null)break;c+=w,r=i,i=c.length,o++,F=e.md.helpers.parseLinkTitle(c,r,i,F)}let R;for(r<i&&p!==r&&F.ok?(R=F.str,r=F.pos):(R="",r=m,o=b);r<i;){const w=c.charCodeAt(r);if(!G(w))break;r++}if(r<i&&c.charCodeAt(r)!==10&&R)for(R="",r=m,o=b;r<i;){const w=c.charCodeAt(r);if(!G(w))break;r++}if(r<i&&c.charCodeAt(r)!==10)return!1;const I=Ht(c.slice(1,l));return I?(n||(typeof e.env.references>"u"&&(e.env.references={}),typeof e.env.references[I]>"u"&&(e.env.references[I]={title:R,href:f}),e.line=o),!0):!1}const Dl=["address","article","aside","base","basefont","blockquote","body","caption","center","col","colgroup","dd","details","dialog","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","frame","frameset","h1","h2","h3","h4","h5","h6","head","header","hr","html","iframe","legend","li","link","main","menu","menuitem","nav","noframes","ol","optgroup","option","p","param","search","section","summary","table","tbody","td","tfoot","th","thead","title","tr","track","ul"],Al="[a-zA-Z_:][a-zA-Z0-9:._-]*",Fl="[^\"'=<>`\\x00-\\x20]+",vl="'[^']*'",wl='"[^"]*"',Sl="(?:"+Fl+"|"+vl+"|"+wl+")",Tl="(?:\\s+"+Al+"(?:\\s*=\\s*"+Sl+")?)",li="<[A-Za-z][A-Za-z0-9\\-]*"+Tl+"*\\s*\\/?>",ai="<\\/[A-Za-z][A-Za-z0-9\\-]*\\s*>",Il="<!---?>|<!--(?:[^-]|-[^-]|--[^>])*-->",Ml="<[?][\\s\\S]*?[?]>",Pl="<![A-Za-z][^>]*>",Rl="<!\\[CDATA\\[[\\s\\S]*?\\]\\]>",Ol=new RegExp("^(?:"+li+"|"+ai+"|"+Il+"|"+Ml+"|"+Pl+"|"+Rl+")"),jl=new RegExp("^(?:"+li+"|"+ai+")"),_u=[[/^<(script|pre|style|textarea)(?=(\s|>|$))/i,/<\/(script|pre|style|textarea)>/i,!0],[/^<!--/,/-->/,!0],[/^<\?/,/\?>/,!0],[/^<![A-Z]/,/>/,!0],[/^<!\[CDATA\[/,/\]\]>/,!0],[new RegExp("^</?("+Dl.join("|")+")(?=(\\s|/?>|$))","i"),/^$/,!0],[new RegExp(jl.source+"\\s*$"),/^$/,!1]];function Bl(e,u,t,n){let r=e.bMarks[u]+e.tShift[u],i=e.eMarks[u];if(e.sCount[u]-e.blkIndent>=4||!e.md.options.html||e.src.charCodeAt(r)!==60)return!1;let o=e.src.slice(r,i),s=0;for(;s<_u.length&&!_u[s][0].test(o);s++);if(s===_u.length)return!1;if(n)return _u[s][2];let c=u+1;if(!_u[s][1].test(o)){for(;c<t&&!(e.sCount[c]<e.blkIndent);c++)if(r=e.bMarks[c]+e.tShift[c],i=e.eMarks[c],o=e.src.slice(r,i),_u[s][1].test(o)){o.length!==0&&c++;break}}e.line=c;const l=e.push("html_block","",0);return l.map=[u,c],l.content=e.getLines(u,c,e.blkIndent,!0),!0}function Ll(e,u,t,n){let r=e.bMarks[u]+e.tShift[u],i=e.eMarks[u];if(e.sCount[u]-e.blkIndent>=4)return!1;let o=e.src.charCodeAt(r);if(o!==35||r>=i)return!1;let s=1;for(o=e.src.charCodeAt(++r);o===35&&r<i&&s<=6;)s++,o=e.src.charCodeAt(++r);if(s>6||r<i&&!G(o))return!1;if(n)return!0;i=e.skipSpacesBack(i,r);const c=e.skipCharsBack(i,35,r);c>r&&G(e.src.charCodeAt(c-1))&&(i=c),e.line=u+1;const l=e.push("heading_open","h"+String(s),1);l.markup="########".slice(0,s),l.map=[u,e.line];const a=e.push("inline","",0);a.content=e.src.slice(r,i).trim(),a.map=[u,e.line],a.children=[];const f=e.push("heading_close","h"+String(s),-1);return f.markup="########".slice(0,s),!0}function Nl(e,u,t){const n=e.md.block.ruler.getRules("paragraph");if(e.sCount[u]-e.blkIndent>=4)return!1;const r=e.parentType;e.parentType="paragraph";let i=0,o,s=u+1;for(;s<t&&!e.isEmpty(s);s++){if(e.sCount[s]-e.blkIndent>3)continue;if(e.sCount[s]>=e.blkIndent){let b=e.bMarks[s]+e.tShift[s];const p=e.eMarks[s];if(b<p&&(o=e.src.charCodeAt(b),(o===45||o===61)&&(b=e.skipChars(b,o),b=e.skipSpaces(b),b>=p))){i=o===61?1:2;break}}if(e.sCount[s]<0)continue;let m=!1;for(let b=0,p=n.length;b<p;b++)if(n[b](e,s,t,!0)){m=!0;break}if(m)break}if(!i)return!1;const c=e.getLines(u,s,e.blkIndent,!1).trim();e.line=s+1;const l=e.push("heading_open","h"+String(i),1);l.markup=String.fromCharCode(o),l.map=[u,e.line];const a=e.push("inline","",0);a.content=c,a.map=[u,e.line-1],a.children=[];const f=e.push("heading_close","h"+String(i),-1);return f.markup=String.fromCharCode(o),e.parentType=r,!0}function zl(e,u,t){const n=e.md.block.ruler.getRules("paragraph"),r=e.parentType;let i=u+1;for(e.parentType="paragraph";i<t&&!e.isEmpty(i);i++){if(e.sCount[i]-e.blkIndent>3||e.sCount[i]<0)continue;let l=!1;for(let a=0,f=n.length;a<f;a++)if(n[a](e,i,t,!0)){l=!0;break}if(l)break}const o=e.getLines(u,i,e.blkIndent,!1).trim();e.line=i;const s=e.push("paragraph_open","p",1);s.map=[u,e.line];const c=e.push("inline","",0);return c.content=o,c.map=[u,e.line],c.children=[],e.push("paragraph_close","p",-1),e.parentType=r,!0}const ht=[["table",ml,["paragraph","reference"]],["code",xl],["fence",gl,["paragraph","reference","blockquote","list"]],["blockquote",_l,["paragraph","reference","blockquote","list"]],["hr",kl,["paragraph","reference","blockquote","list"]],["list",Cl,["paragraph","reference","blockquote"]],["reference",El],["html_block",Bl,["paragraph","reference","blockquote"]],["heading",Ll,["paragraph","reference","blockquote"]],["lheading",Nl],["paragraph",zl]];function $t(){this.ruler=new de;for(let e=0;e<ht.length;e++)this.ruler.push(ht[e][0],ht[e][1],{alt:(ht[e][2]||[]).slice()})}$t.prototype.tokenize=function(e,u,t){const n=this.ruler.getRules(""),r=n.length,i=e.md.options.maxNesting;let o=u,s=!1;for(;o<t&&(e.line=o=e.skipEmptyLines(o),!(o>=t||e.sCount[o]<e.blkIndent));){if(e.level>=i){e.line=t;break}const c=e.line;let l=!1;for(let a=0;a<r;a++)if(l=n[a](e,o,t,!1),l){if(c>=e.line)throw new Error("block rule didn't increment state.line");break}if(!l)throw new Error("none of the block rules matched");e.tight=!s,e.isEmpty(e.line-1)&&(s=!0),o=e.line,o<t&&e.isEmpty(o)&&(s=!0,o++,e.line=o)}};$t.prototype.parse=function(e,u,t,n){if(!e)return;const r=new this.State(e,u,t,n);this.tokenize(r,r.line,r.lineMax)};$t.prototype.State=He;function it(e,u,t,n){this.src=e,this.env=t,this.md=u,this.tokens=n,this.tokens_meta=Array(n.length),this.pos=0,this.posMax=this.src.length,this.level=0,this.pending="",this.pendingLevel=0,this.cache={},this.delimiters=[],this._prev_delimiters=[],this.backticks={},this.backticksScanned=!1,this.linkLevel=0}it.prototype.pushPending=function(){const e=new we("text","",0);return e.content=this.pending,e.level=this.pendingLevel,this.tokens.push(e),this.pending="",e};it.prototype.push=function(e,u,t){this.pending&&this.pushPending();const n=new we(e,u,t);let r=null;return t<0&&(this.level--,this.delimiters=this._prev_delimiters.pop()),n.level=this.level,t>0&&(this.level++,this._prev_delimiters.push(this.delimiters),this.delimiters=[],r={delimiters:this.delimiters}),this.pendingLevel=this.level,this.tokens.push(n),this.tokens_meta.push(r),n};it.prototype.scanDelims=function(e,u){const t=this.posMax,n=this.src.charCodeAt(e),r=e>0?this.src.charCodeAt(e-1):32;let i=e;for(;i<t&&this.src.charCodeAt(i)===n;)i++;const o=i-e,s=i<t?this.src.charCodeAt(i):32,c=et(r)||Xu(String.fromCharCode(r)),l=et(s)||Xu(String.fromCharCode(s)),a=Yu(r),f=Yu(s),m=!f&&(!l||a||c),b=!a&&(!c||f||l);return{can_open:m&&(u||!b||c),can_close:b&&(u||!m||l),length:o}};it.prototype.Token=we;function ql(e){switch(e){case 10:case 33:case 35:case 36:case 37:case 38:case 42:case 43:case 45:case 58:case 60:case 61:case 62:case 64:case 91:case 92:case 93:case 94:case 95:case 96:case 123:case 125:case 126:return!0;default:return!1}}function Hl(e,u){let t=e.pos;for(;t<e.posMax&&!ql(e.src.charCodeAt(t));)t++;return t===e.pos?!1:(u||(e.pending+=e.src.slice(e.pos,t)),e.pos=t,!0)}const $l=/(?:^|[^a-z0-9.+-])([a-z][a-z0-9.+-]*)$/i;function Ul(e,u){if(!e.md.options.linkify||e.linkLevel>0)return!1;const t=e.pos,n=e.posMax;if(t+3>n||e.src.charCodeAt(t)!==58||e.src.charCodeAt(t+1)!==47||e.src.charCodeAt(t+2)!==47)return!1;const r=e.pending.match($l);if(!r)return!1;const i=r[1],o=e.md.linkify.matchAtStart(e.src.slice(t-i.length));if(!o)return!1;let s=o.url;if(s.length<=i.length)return!1;s=s.replace(/\*+$/,"");const c=e.md.normalizeLink(s);if(!e.md.validateLink(c))return!1;if(!u){e.pending=e.pending.slice(0,-i.length);const l=e.push("link_open","a",1);l.attrs=[["href",c]],l.markup="linkify",l.info="auto";const a=e.push("text","",0);a.content=e.md.normalizeLinkText(s);const f=e.push("link_close","a",-1);f.markup="linkify",f.info="auto"}return e.pos+=s.length-i.length,!0}function Vl(e,u){let t=e.pos;if(e.src.charCodeAt(t)!==10)return!1;const n=e.pending.length-1,r=e.posMax;if(!u)if(n>=0&&e.pending.charCodeAt(n)===32)if(n>=1&&e.pending.charCodeAt(n-1)===32){let i=n-1;for(;i>=1&&e.pending.charCodeAt(i-1)===32;)i--;e.pending=e.pending.slice(0,i),e.push("hardbreak","br",0)}else e.pending=e.pending.slice(0,-1),e.push("softbreak","br",0);else e.push("softbreak","br",0);for(t++;t<r&&G(e.src.charCodeAt(t));)t++;return e.pos=t,!0}const Kn=[];for(let e=0;e<256;e++)Kn.push(0);"\\!\"#$%&'()*+,./:;<=>?@[]^_`{|}~-".split("").forEach(function(e){Kn[e.charCodeAt(0)]=1});function Wl(e,u){let t=e.pos;const n=e.posMax;if(e.src.charCodeAt(t)!==92||(t++,t>=n))return!1;let r=e.src.charCodeAt(t);if(r===10){for(u||e.push("hardbreak","br",0),t++;t<n&&(r=e.src.charCodeAt(t),!!G(r));)t++;return e.pos=t,!0}let i=e.src[t];if(r>=55296&&r<=56319&&t+1<n){const s=e.src.charCodeAt(t+1);s>=56320&&s<=57343&&(i+=e.src[t+1],t++)}const o="\\"+i;if(!u){const s=e.push("text_special","",0);r<256&&Kn[r]!==0?s.content=i:s.content=o,s.markup=o,s.info="escape"}return e.pos=t+1,!0}function Zl(e,u){let t=e.pos;if(e.src.charCodeAt(t)!==96)return!1;const r=t;t++;const i=e.posMax;for(;t<i&&e.src.charCodeAt(t)===96;)t++;const o=e.src.slice(r,t),s=o.length;if(e.backticksScanned&&(e.backticks[s]||0)<=r)return u||(e.pending+=o),e.pos+=s,!0;let c=t,l;for(;(l=e.src.indexOf("`",c))!==-1;){for(c=l+1;c<i&&e.src.charCodeAt(c)===96;)c++;const a=c-l;if(a===s){if(!u){const f=e.push("code_inline","code",0);f.markup=o,f.content=e.src.slice(t,l).replace(/\n/g," ").replace(/^ (.+) $/,"$1")}return e.pos=c,!0}e.backticks[a]=l}return e.backticksScanned=!0,u||(e.pending+=o),e.pos+=s,!0}function Gl(e,u){const t=e.pos,n=e.src.charCodeAt(t);if(u||n!==126)return!1;const r=e.scanDelims(e.pos,!0);let i=r.length;const o=String.fromCharCode(n);if(i<2)return!1;let s;i%2&&(s=e.push("text","",0),s.content=o,i--);for(let c=0;c<i;c+=2)s=e.push("text","",0),s.content=o+o,e.delimiters.push({marker:n,length:0,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close});return e.pos+=r.length,!0}function qr(e,u){let t;const n=[],r=u.length;for(let i=0;i<r;i++){const o=u[i];if(o.marker!==126||o.end===-1)continue;const s=u[o.end];t=e.tokens[o.token],t.type="s_open",t.tag="s",t.nesting=1,t.markup="~~",t.content="",t=e.tokens[s.token],t.type="s_close",t.tag="s",t.nesting=-1,t.markup="~~",t.content="",e.tokens[s.token-1].type==="text"&&e.tokens[s.token-1].content==="~"&&n.push(s.token-1)}for(;n.length;){const i=n.pop();let o=i+1;for(;o<e.tokens.length&&e.tokens[o].type==="s_close";)o++;o--,i!==o&&(t=e.tokens[o],e.tokens[o]=e.tokens[i],e.tokens[i]=t)}}function Jl(e){const u=e.tokens_meta,t=e.tokens_meta.length;qr(e,e.delimiters);for(let n=0;n<t;n++)u[n]&&u[n].delimiters&&qr(e,u[n].delimiters)}const fi={tokenize:Gl,postProcess:Jl};function Kl(e,u){const t=e.pos,n=e.src.charCodeAt(t);if(u||n!==95&&n!==42)return!1;const r=e.scanDelims(e.pos,n===42);for(let i=0;i<r.length;i++){const o=e.push("text","",0);o.content=String.fromCharCode(n),e.delimiters.push({marker:n,length:r.length,token:e.tokens.length-1,end:-1,open:r.can_open,close:r.can_close})}return e.pos+=r.length,!0}function Hr(e,u){const t=u.length;for(let n=t-1;n>=0;n--){const r=u[n];if(r.marker!==95&&r.marker!==42||r.end===-1)continue;const i=u[r.end],o=n>0&&u[n-1].end===r.end+1&&u[n-1].marker===r.marker&&u[n-1].token===r.token-1&&u[r.end+1].token===i.token+1,s=String.fromCharCode(r.marker),c=e.tokens[r.token];c.type=o?"strong_open":"em_open",c.tag=o?"strong":"em",c.nesting=1,c.markup=o?s+s:s,c.content="";const l=e.tokens[i.token];l.type=o?"strong_close":"em_close",l.tag=o?"strong":"em",l.nesting=-1,l.markup=o?s+s:s,l.content="",o&&(e.tokens[u[n-1].token].content="",e.tokens[u[r.end+1].token].content="",n--)}}function Ql(e){const u=e.tokens_meta,t=e.tokens_meta.length;Hr(e,e.delimiters);for(let n=0;n<t;n++)u[n]&&u[n].delimiters&&Hr(e,u[n].delimiters)}const di={tokenize:Kl,postProcess:Ql};function Yl(e,u){let t,n,r,i,o="",s="",c=e.pos,l=!0;if(e.src.charCodeAt(e.pos)!==91)return!1;const a=e.pos,f=e.posMax,m=e.pos+1,b=e.md.helpers.parseLinkLabel(e,e.pos,!0);if(b<0)return!1;let p=b+1;if(p<f&&e.src.charCodeAt(p)===40){for(l=!1,p++;p<f&&(t=e.src.charCodeAt(p),!(!G(t)&&t!==10));p++);if(p>=f)return!1;if(c=p,r=e.md.helpers.parseLinkDestination(e.src,p,e.posMax),r.ok){for(o=e.md.normalizeLink(r.str),e.md.validateLink(o)?p=r.pos:o="",c=p;p<f&&(t=e.src.charCodeAt(p),!(!G(t)&&t!==10));p++);if(r=e.md.helpers.parseLinkTitle(e.src,p,e.posMax),p<f&&c!==p&&r.ok)for(s=r.str,p=r.pos;p<f&&(t=e.src.charCodeAt(p),!(!G(t)&&t!==10));p++);}(p>=f||e.src.charCodeAt(p)!==41)&&(l=!0),p++}if(l){if(typeof e.env.references>"u")return!1;if(p<f&&e.src.charCodeAt(p)===91?(c=p+1,p=e.md.helpers.parseLinkLabel(e,p),p>=0?n=e.src.slice(c,p++):p=b+1):p=b+1,n||(n=e.src.slice(m,b)),i=e.env.references[Ht(n)],!i)return e.pos=a,!1;o=i.href,s=i.title}if(!u){e.pos=m,e.posMax=b;const F=e.push("link_open","a",1),R=[["href",o]];F.attrs=R,s&&R.push(["title",s]),e.linkLevel++,e.md.inline.tokenize(e),e.linkLevel--,e.push("link_close","a",-1)}return e.pos=p,e.posMax=f,!0}function Xl(e,u){let t,n,r,i,o,s,c,l,a="";const f=e.pos,m=e.posMax;if(e.src.charCodeAt(e.pos)!==33||e.src.charCodeAt(e.pos+1)!==91)return!1;const b=e.pos+2,p=e.md.helpers.parseLinkLabel(e,e.pos+1,!1);if(p<0)return!1;if(i=p+1,i<m&&e.src.charCodeAt(i)===40){for(i++;i<m&&(t=e.src.charCodeAt(i),!(!G(t)&&t!==10));i++);if(i>=m)return!1;for(l=i,s=e.md.helpers.parseLinkDestination(e.src,i,e.posMax),s.ok&&(a=e.md.normalizeLink(s.str),e.md.validateLink(a)?i=s.pos:a=""),l=i;i<m&&(t=e.src.charCodeAt(i),!(!G(t)&&t!==10));i++);if(s=e.md.helpers.parseLinkTitle(e.src,i,e.posMax),i<m&&l!==i&&s.ok)for(c=s.str,i=s.pos;i<m&&(t=e.src.charCodeAt(i),!(!G(t)&&t!==10));i++);else c="";if(i>=m||e.src.charCodeAt(i)!==41)return e.pos=f,!1;i++}else{if(typeof e.env.references>"u")return!1;if(i<m&&e.src.charCodeAt(i)===91?(l=i+1,i=e.md.helpers.parseLinkLabel(e,i),i>=0?r=e.src.slice(l,i++):i=p+1):i=p+1,r||(r=e.src.slice(b,p)),o=e.env.references[Ht(r)],!o)return e.pos=f,!1;a=o.href,c=o.title}if(!u){n=e.src.slice(b,p);const F=[];e.md.inline.parse(n,e.md,e.env,F);const R=e.push("image","img",0),I=[["src",a],["alt",""]];R.attrs=I,R.children=F,R.content=n,c&&I.push(["title",c])}return e.pos=i,e.posMax=m,!0}const ea=/^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*)$/,ua=/^([a-zA-Z][a-zA-Z0-9+.-]{1,31}):([^<>\x00-\x20]*)$/;function ta(e,u){let t=e.pos;if(e.src.charCodeAt(t)!==60)return!1;const n=e.pos,r=e.posMax;for(;;){if(++t>=r)return!1;const o=e.src.charCodeAt(t);if(o===60)return!1;if(o===62)break}const i=e.src.slice(n+1,t);if(ua.test(i)){const o=e.md.normalizeLink(i);if(!e.md.validateLink(o))return!1;if(!u){const s=e.push("link_open","a",1);s.attrs=[["href",o]],s.markup="autolink",s.info="auto";const c=e.push("text","",0);c.content=e.md.normalizeLinkText(i);const l=e.push("link_close","a",-1);l.markup="autolink",l.info="auto"}return e.pos+=i.length+2,!0}if(ea.test(i)){const o=e.md.normalizeLink("mailto:"+i);if(!e.md.validateLink(o))return!1;if(!u){const s=e.push("link_open","a",1);s.attrs=[["href",o]],s.markup="autolink",s.info="auto";const c=e.push("text","",0);c.content=e.md.normalizeLinkText(i);const l=e.push("link_close","a",-1);l.markup="autolink",l.info="auto"}return e.pos+=i.length+2,!0}return!1}function na(e){return/^<a[>\s]/i.test(e)}function ra(e){return/^<\/a\s*>/i.test(e)}function ia(e){const u=e|32;return u>=97&&u<=122}function oa(e,u){if(!e.md.options.html)return!1;const t=e.posMax,n=e.pos;if(e.src.charCodeAt(n)!==60||n+2>=t)return!1;const r=e.src.charCodeAt(n+1);if(r!==33&&r!==63&&r!==47&&!ia(r))return!1;const i=e.src.slice(n).match(Ol);if(!i)return!1;if(!u){const o=e.push("html_inline","",0);o.content=i[0],na(o.content)&&e.linkLevel++,ra(o.content)&&e.linkLevel--}return e.pos+=i[0].length,!0}const sa=/^&#((?:x[a-f0-9]{1,6}|[0-9]{1,7}));/i,ca=/^&([a-z][a-z0-9]{1,31});/i;function la(e,u){const t=e.pos,n=e.posMax;if(e.src.charCodeAt(t)!==38||t+1>=n)return!1;if(e.src.charCodeAt(t+1)===35){const i=e.src.slice(t).match(sa);if(i){if(!u){const o=i[1][0].toLowerCase()==="x"?parseInt(i[1].slice(1),16):parseInt(i[1],10),s=e.push("text_special","",0);s.content=Gn(o)?vt(o):vt(65533),s.markup=i[0],s.info="entity"}return e.pos+=i[0].length,!0}}else{const i=e.src.slice(t).match(ca);if(i){const o=ri(i[0]);if(o!==i[0]){if(!u){const s=e.push("text_special","",0);s.content=o,s.markup=i[0],s.info="entity"}return e.pos+=i[0].length,!0}}}return!1}function $r(e){const u={},t=e.length;if(!t)return;let n=0,r=-2;const i=[];for(let o=0;o<t;o++){const s=e[o];if(i.push(0),(e[n].marker!==s.marker||r!==s.token-1)&&(n=o),r=s.token,s.length=s.length||0,!s.close)continue;u.hasOwnProperty(s.marker)||(u[s.marker]=[-1,-1,-1,-1,-1,-1]);const c=u[s.marker][(s.open?3:0)+s.length%3];let l=n-i[n]-1,a=l;for(;l>c;l-=i[l]+1){const f=e[l];if(f.marker===s.marker&&f.open&&f.end<0){let m=!1;if((f.close||s.open)&&(f.length+s.length)%3===0&&(f.length%3!==0||s.length%3!==0)&&(m=!0),!m){const b=l>0&&!e[l-1].open?i[l-1]+1:0;i[o]=o-l+b,i[l]=b,s.open=!1,f.end=o,f.close=!1,a=-1,r=-2;break}}}a!==-1&&(u[s.marker][(s.open?3:0)+(s.length||0)%3]=a)}}function aa(e){const u=e.tokens_meta,t=e.tokens_meta.length;$r(e.delimiters);for(let n=0;n<t;n++)u[n]&&u[n].delimiters&&$r(u[n].delimiters)}function fa(e){let u,t,n=0;const r=e.tokens,i=e.tokens.length;for(u=t=0;u<i;u++)r[u].nesting<0&&n--,r[u].level=n,r[u].nesting>0&&n++,r[u].type==="text"&&u+1<i&&r[u+1].type==="text"?r[u+1].content=r[u].content+r[u+1].content:(u!==t&&(r[t]=r[u]),t++);u!==t&&(r.length=t)}const sn=[["text",Hl],["linkify",Ul],["newline",Vl],["escape",Wl],["backticks",Zl],["strikethrough",fi.tokenize],["emphasis",di.tokenize],["link",Yl],["image",Xl],["autolink",ta],["html_inline",oa],["entity",la]],cn=[["balance_pairs",aa],["strikethrough",fi.postProcess],["emphasis",di.postProcess],["fragments_join",fa]];function ot(){this.ruler=new de;for(let e=0;e<sn.length;e++)this.ruler.push(sn[e][0],sn[e][1]);this.ruler2=new de;for(let e=0;e<cn.length;e++)this.ruler2.push(cn[e][0],cn[e][1])}ot.prototype.skipToken=function(e){const u=e.pos,t=this.ruler.getRules(""),n=t.length,r=e.md.options.maxNesting,i=e.cache;if(typeof i[u]<"u"){e.pos=i[u];return}let o=!1;if(e.level<r){for(let s=0;s<n;s++)if(e.level++,o=t[s](e,!0),e.level--,o){if(u>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}else e.pos=e.posMax;o||e.pos++,i[u]=e.pos};ot.prototype.tokenize=function(e){const u=this.ruler.getRules(""),t=u.length,n=e.posMax,r=e.md.options.maxNesting;for(;e.pos<n;){const i=e.pos;let o=!1;if(e.level<r){for(let s=0;s<t;s++)if(o=u[s](e,!1),o){if(i>=e.pos)throw new Error("inline rule didn't increment state.pos");break}}if(o){if(e.pos>=n)break;continue}e.pending+=e.src[e.pos++]}e.pending&&e.pushPending()};ot.prototype.parse=function(e,u,t,n){const r=new this.State(e,u,t,n);this.tokenize(r);const i=this.ruler2.getRules(""),o=i.length;for(let s=0;s<o;s++)i[s](r)};ot.prototype.State=it;function da(e){const u={};e=e||{},u.src_Any=X0.source,u.src_Cc=ei.source,u.src_Z=ti.source,u.src_P=Wn.source,u.src_ZPCc=[u.src_Z,u.src_P,u.src_Cc].join("|"),u.src_ZCc=[u.src_Z,u.src_Cc].join("|");const t="[><｜]";return u.src_pseudo_letter="(?:(?!"+t+"|"+u.src_ZPCc+")"+u.src_Any+")",u.src_ip4="(?:(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)",u.src_auth="(?:(?:(?!"+u.src_ZCc+"|[@/\\[\\]()]).)+@)?",u.src_port="(?::(?:6(?:[0-4]\\d{3}|5(?:[0-4]\\d{2}|5(?:[0-2]\\d|3[0-5])))|[1-5]?\\d{1,4}))?",u.src_host_terminator="(?=$|"+t+"|"+u.src_ZPCc+")(?!"+(e["---"]?"-(?!--)|":"-|")+"_|:\\d|\\.-|\\.(?!$|"+u.src_ZPCc+"))",u.src_path="(?:[/?#](?:(?!"+u.src_ZCc+"|"+t+`|[()[\\]{}.,"'?!\\-;]).|\\[(?:(?!`+u.src_ZCc+"|\\]).)*\\]|\\((?:(?!"+u.src_ZCc+"|[)]).)*\\)|\\{(?:(?!"+u.src_ZCc+'|[}]).)*\\}|\\"(?:(?!'+u.src_ZCc+`|["]).)+\\"|\\'(?:(?!`+u.src_ZCc+"|[']).)+\\'|\\'(?="+u.src_pseudo_letter+"|[-])|\\.{2,}[a-zA-Z0-9%/&]|\\.(?!"+u.src_ZCc+"|[.]|$)|"+(e["---"]?"\\-(?!--(?:[^-]|$))(?:-*)|":"\\-+|")+",(?!"+u.src_ZCc+"|$)|;(?!"+u.src_ZCc+"|$)|\\!+(?!"+u.src_ZCc+"|[!]|$)|\\?(?!"+u.src_ZCc+"|[?]|$))+|\\/)?",u.src_email_name='[\\-;:&=\\+\\$,\\.a-zA-Z0-9_][\\-;:&=\\+\\$,\\"\\.a-zA-Z0-9_]*',u.src_xn="xn--[a-z0-9\\-]{1,59}",u.src_domain_root="(?:"+u.src_xn+"|"+u.src_pseudo_letter+"{1,63})",u.src_domain="(?:"+u.src_xn+"|(?:"+u.src_pseudo_letter+")|(?:"+u.src_pseudo_letter+"(?:-|"+u.src_pseudo_letter+"){0,61}"+u.src_pseudo_letter+"))",u.src_host="(?:(?:(?:(?:"+u.src_domain+")\\.)*"+u.src_domain+"))",u.tpl_host_fuzzy="(?:"+u.src_ip4+"|(?:(?:(?:"+u.src_domain+")\\.)+(?:%TLDS%)))",u.tpl_host_no_ip_fuzzy="(?:(?:(?:"+u.src_domain+")\\.)+(?:%TLDS%))",u.src_host_strict=u.src_host+u.src_host_terminator,u.tpl_host_fuzzy_strict=u.tpl_host_fuzzy+u.src_host_terminator,u.src_host_port_strict=u.src_host+u.src_port+u.src_host_terminator,u.tpl_host_port_fuzzy_strict=u.tpl_host_fuzzy+u.src_port+u.src_host_terminator,u.tpl_host_port_no_ip_fuzzy_strict=u.tpl_host_no_ip_fuzzy+u.src_port+u.src_host_terminator,u.tpl_host_fuzzy_test="localhost|www\\.|\\.\\d{1,3}\\.|(?:\\.(?:%TLDS%)(?:"+u.src_ZPCc+"|>|$))",u.tpl_email_fuzzy="(^|"+t+'|"|\\(|'+u.src_ZCc+")("+u.src_email_name+"@"+u.tpl_host_fuzzy_strict+")",u.tpl_link_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+u.src_ZPCc+"))((?![$+<=>^`|｜])"+u.tpl_host_port_fuzzy_strict+u.src_path+")",u.tpl_link_no_ip_fuzzy="(^|(?![.:/\\-_@])(?:[$+<=>^`|｜]|"+u.src_ZPCc+"))((?![$+<=>^`|｜])"+u.tpl_host_port_no_ip_fuzzy_strict+u.src_path+")",u}function En(e){return Array.prototype.slice.call(arguments,1).forEach(function(t){t&&Object.keys(t).forEach(function(n){e[n]=t[n]})}),e}function Ut(e){return Object.prototype.toString.call(e)}function ha(e){return Ut(e)==="[object String]"}function pa(e){return Ut(e)==="[object Object]"}function ba(e){return Ut(e)==="[object RegExp]"}function Ur(e){return Ut(e)==="[object Function]"}function ma(e){return e.replace(/[.?*+^$[\]\\(){}|-]/g,"\\$&")}const hi={fuzzyLink:!0,fuzzyEmail:!0,fuzzyIP:!1};function xa(e){return Object.keys(e||{}).reduce(function(u,t){return u||hi.hasOwnProperty(t)},!1)}const ga={"http:":{validate:function(e,u,t){const n=e.slice(u);return t.re.http||(t.re.http=new RegExp("^\\/\\/"+t.re.src_auth+t.re.src_host_port_strict+t.re.src_path,"i")),t.re.http.test(n)?n.match(t.re.http)[0].length:0}},"https:":"http:","ftp:":"http:","//":{validate:function(e,u,t){const n=e.slice(u);return t.re.no_http||(t.re.no_http=new RegExp("^"+t.re.src_auth+"(?:localhost|(?:(?:"+t.re.src_domain+")\\.)+"+t.re.src_domain_root+")"+t.re.src_port+t.re.src_host_terminator+t.re.src_path,"i")),t.re.no_http.test(n)?u>=3&&e[u-3]===":"||u>=3&&e[u-3]==="/"?0:n.match(t.re.no_http)[0].length:0}},"mailto:":{validate:function(e,u,t){const n=e.slice(u);return t.re.mailto||(t.re.mailto=new RegExp("^"+t.re.src_email_name+"@"+t.re.src_host_strict,"i")),t.re.mailto.test(n)?n.match(t.re.mailto)[0].length:0}}},_a="a[cdefgilmnoqrstuwxz]|b[abdefghijmnorstvwyz]|c[acdfghiklmnoruvwxyz]|d[ejkmoz]|e[cegrstu]|f[ijkmor]|g[abdefghilmnpqrstuwy]|h[kmnrtu]|i[delmnoqrst]|j[emop]|k[eghimnprwyz]|l[abcikrstuvy]|m[acdeghklmnopqrstuvwxyz]|n[acefgilopruz]|om|p[aefghklmnrstwy]|qa|r[eosuw]|s[abcdeghijklmnortuvxyz]|t[cdfghjklmnortvwz]|u[agksyz]|v[aceginu]|w[fs]|y[et]|z[amw]",ka="biz|com|edu|gov|net|org|pro|web|xxx|aero|asia|coop|info|museum|name|shop|рф".split("|");function ya(e){e.__index__=-1,e.__text_cache__=""}function Ca(e){return function(u,t){const n=u.slice(t);return e.test(n)?n.match(e)[0].length:0}}function Vr(){return function(e,u){u.normalize(e)}}function wt(e){const u=e.re=da(e.__opts__),t=e.__tlds__.slice();e.onCompile(),e.__tlds_replaced__||t.push(_a),t.push(u.src_xn),u.src_tlds=t.join("|");function n(s){return s.replace("%TLDS%",u.src_tlds)}u.email_fuzzy=RegExp(n(u.tpl_email_fuzzy),"i"),u.link_fuzzy=RegExp(n(u.tpl_link_fuzzy),"i"),u.link_no_ip_fuzzy=RegExp(n(u.tpl_link_no_ip_fuzzy),"i"),u.host_fuzzy_test=RegExp(n(u.tpl_host_fuzzy_test),"i");const r=[];e.__compiled__={};function i(s,c){throw new Error('(LinkifyIt) Invalid schema "'+s+'": '+c)}Object.keys(e.__schemas__).forEach(function(s){const c=e.__schemas__[s];if(c===null)return;const l={validate:null,link:null};if(e.__compiled__[s]=l,pa(c)){ba(c.validate)?l.validate=Ca(c.validate):Ur(c.validate)?l.validate=c.validate:i(s,c),Ur(c.normalize)?l.normalize=c.normalize:c.normalize?i(s,c):l.normalize=Vr();return}if(ha(c)){r.push(s);return}i(s,c)}),r.forEach(function(s){e.__compiled__[e.__schemas__[s]]&&(e.__compiled__[s].validate=e.__compiled__[e.__schemas__[s]].validate,e.__compiled__[s].normalize=e.__compiled__[e.__schemas__[s]].normalize)}),e.__compiled__[""]={validate:null,normalize:Vr()};const o=Object.keys(e.__compiled__).filter(function(s){return s.length>0&&e.__compiled__[s]}).map(ma).join("|");e.re.schema_test=RegExp("(^|(?!_)(?:[><｜]|"+u.src_ZPCc+"))("+o+")","i"),e.re.schema_search=RegExp("(^|(?!_)(?:[><｜]|"+u.src_ZPCc+"))("+o+")","ig"),e.re.schema_at_start=RegExp("^"+e.re.schema_search.source,"i"),e.re.pretest=RegExp("("+e.re.schema_test.source+")|("+e.re.host_fuzzy_test.source+")|@","i"),ya(e)}function Ea(e,u){const t=e.__index__,n=e.__last_index__,r=e.__text_cache__.slice(t,n);this.schema=e.__schema__.toLowerCase(),this.index=t+u,this.lastIndex=n+u,this.raw=r,this.text=r,this.url=r}function Dn(e,u){const t=new Ea(e,u);return e.__compiled__[t.schema].normalize(t,e),t}function _e(e,u){if(!(this instanceof _e))return new _e(e,u);u||xa(e)&&(u=e,e={}),this.__opts__=En({},hi,u),this.__index__=-1,this.__last_index__=-1,this.__schema__="",this.__text_cache__="",this.__schemas__=En({},ga,e),this.__compiled__={},this.__tlds__=ka,this.__tlds_replaced__=!1,this.re={},wt(this)}_e.prototype.add=function(u,t){return this.__schemas__[u]=t,wt(this),this};_e.prototype.set=function(u){return this.__opts__=En(this.__opts__,u),this};_e.prototype.test=function(u){if(this.__text_cache__=u,this.__index__=-1,!u.length)return!1;let t,n,r,i,o,s,c,l,a;if(this.re.schema_test.test(u)){for(c=this.re.schema_search,c.lastIndex=0;(t=c.exec(u))!==null;)if(i=this.testSchemaAt(u,t[2],c.lastIndex),i){this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+i;break}}return this.__opts__.fuzzyLink&&this.__compiled__["http:"]&&(l=u.search(this.re.host_fuzzy_test),l>=0&&(this.__index__<0||l<this.__index__)&&(n=u.match(this.__opts__.fuzzyIP?this.re.link_fuzzy:this.re.link_no_ip_fuzzy))!==null&&(o=n.index+n[1].length,(this.__index__<0||o<this.__index__)&&(this.__schema__="",this.__index__=o,this.__last_index__=n.index+n[0].length))),this.__opts__.fuzzyEmail&&this.__compiled__["mailto:"]&&(a=u.indexOf("@"),a>=0&&(r=u.match(this.re.email_fuzzy))!==null&&(o=r.index+r[1].length,s=r.index+r[0].length,(this.__index__<0||o<this.__index__||o===this.__index__&&s>this.__last_index__)&&(this.__schema__="mailto:",this.__index__=o,this.__last_index__=s))),this.__index__>=0};_e.prototype.pretest=function(u){return this.re.pretest.test(u)};_e.prototype.testSchemaAt=function(u,t,n){return this.__compiled__[t.toLowerCase()]?this.__compiled__[t.toLowerCase()].validate(u,n,this):0};_e.prototype.match=function(u){const t=[];let n=0;this.__index__>=0&&this.__text_cache__===u&&(t.push(Dn(this,n)),n=this.__last_index__);let r=n?u.slice(n):u;for(;this.test(r);)t.push(Dn(this,n)),r=r.slice(this.__last_index__),n+=this.__last_index__;return t.length?t:null};_e.prototype.matchAtStart=function(u){if(this.__text_cache__=u,this.__index__=-1,!u.length)return null;const t=this.re.schema_at_start.exec(u);if(!t)return null;const n=this.testSchemaAt(u,t[2],t[0].length);return n?(this.__schema__=t[2],this.__index__=t.index+t[1].length,this.__last_index__=t.index+t[0].length+n,Dn(this,0)):null};_e.prototype.tlds=function(u,t){return u=Array.isArray(u)?u:[u],t?(this.__tlds__=this.__tlds__.concat(u).sort().filter(function(n,r,i){return n!==i[r-1]}).reverse(),wt(this),this):(this.__tlds__=u.slice(),this.__tlds_replaced__=!0,wt(this),this)};_e.prototype.normalize=function(u){u.schema||(u.url="http://"+u.url),u.schema==="mailto:"&&!/^mailto:/i.test(u.url)&&(u.url="mailto:"+u.url)};_e.prototype.onCompile=function(){};const Fu=2147483647,Be=36,Qn=1,ut=26,Da=38,Aa=700,pi=72,bi=128,mi="-",Fa=/^xn--/,va=/[^\0-\x7F]/,wa=/[\x2E\u3002\uFF0E\uFF61]/g,Sa={overflow:"Overflow: input needs wider integers to process","not-basic":"Illegal input >= 0x80 (not a basic code point)","invalid-input":"Invalid input"},ln=Be-Qn,Le=Math.floor,an=String.fromCharCode;function uu(e){throw new RangeError(Sa[e])}function Ta(e,u){const t=[];let n=e.length;for(;n--;)t[n]=u(e[n]);return t}function xi(e,u){const t=e.split("@");let n="";t.length>1&&(n=t[0]+"@",e=t[1]),e=e.replace(wa,".");const r=e.split("."),i=Ta(r,u).join(".");return n+i}function gi(e){const u=[];let t=0;const n=e.length;for(;t<n;){const r=e.charCodeAt(t++);if(r>=55296&&r<=56319&&t<n){const i=e.charCodeAt(t++);(i&64512)==56320?u.push(((r&1023)<<10)+(i&1023)+65536):(u.push(r),t--)}else u.push(r)}return u}const Ia=e=>String.fromCodePoint(...e),Ma=function(e){return e>=48&&e<58?26+(e-48):e>=65&&e<91?e-65:e>=97&&e<123?e-97:Be},Wr=function(e,u){return e+22+75*(e<26)-((u!=0)<<5)},_i=function(e,u,t){let n=0;for(e=t?Le(e/Aa):e>>1,e+=Le(e/u);e>ln*ut>>1;n+=Be)e=Le(e/ln);return Le(n+(ln+1)*e/(e+Da))},ki=function(e){const u=[],t=e.length;let n=0,r=bi,i=pi,o=e.lastIndexOf(mi);o<0&&(o=0);for(let s=0;s<o;++s)e.charCodeAt(s)>=128&&uu("not-basic"),u.push(e.charCodeAt(s));for(let s=o>0?o+1:0;s<t;){const c=n;for(let a=1,f=Be;;f+=Be){s>=t&&uu("invalid-input");const m=Ma(e.charCodeAt(s++));m>=Be&&uu("invalid-input"),m>Le((Fu-n)/a)&&uu("overflow"),n+=m*a;const b=f<=i?Qn:f>=i+ut?ut:f-i;if(m<b)break;const p=Be-b;a>Le(Fu/p)&&uu("overflow"),a*=p}const l=u.length+1;i=_i(n-c,l,c==0),Le(n/l)>Fu-r&&uu("overflow"),r+=Le(n/l),n%=l,u.splice(n++,0,r)}return String.fromCodePoint(...u)},yi=function(e){const u=[];e=gi(e);const t=e.length;let n=bi,r=0,i=pi;for(const c of e)c<128&&u.push(an(c));const o=u.length;let s=o;for(o&&u.push(mi);s<t;){let c=Fu;for(const a of e)a>=n&&a<c&&(c=a);const l=s+1;c-n>Le((Fu-r)/l)&&uu("overflow"),r+=(c-n)*l,n=c;for(const a of e)if(a<n&&++r>Fu&&uu("overflow"),a===n){let f=r;for(let m=Be;;m+=Be){const b=m<=i?Qn:m>=i+ut?ut:m-i;if(f<b)break;const p=f-b,F=Be-b;u.push(an(Wr(b+p%F,0))),f=Le(p/F)}u.push(an(Wr(f,0))),i=_i(r,l,s===o),r=0,++s}++r,++n}return u.join("")},Pa=function(e){return xi(e,function(u){return Fa.test(u)?ki(u.slice(4).toLowerCase()):u})},Ra=function(e){return xi(e,function(u){return va.test(u)?"xn--"+yi(u):u})},Ci={version:"2.3.1",ucs2:{decode:gi,encode:Ia},decode:ki,encode:yi,toASCII:Ra,toUnicode:Pa},Oa={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:100},components:{core:{},block:{},inline:{}}},ja={options:{html:!1,xhtmlOut:!1,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["paragraph"]},inline:{rules:["text"],rules2:["balance_pairs","fragments_join"]}}},Ba={options:{html:!0,xhtmlOut:!0,breaks:!1,langPrefix:"language-",linkify:!1,typographer:!1,quotes:"“”‘’",highlight:null,maxNesting:20},components:{core:{rules:["normalize","block","inline","text_join"]},block:{rules:["blockquote","code","fence","heading","hr","html_block","lheading","list","reference","paragraph"]},inline:{rules:["autolink","backticks","emphasis","entity","escape","html_inline","image","link","newline","text"],rules2:["balance_pairs","emphasis","fragments_join"]}}},La={default:Oa,zero:ja,commonmark:Ba},Na=/^(vbscript|javascript|file|data):/,za=/^data:image\/(gif|png|jpeg|webp);/;function qa(e){const u=e.trim().toLowerCase();return Na.test(u)?za.test(u):!0}const Ei=["http:","https:","mailto:"];function Ha(e){const u=Vn(e,!0);if(u.hostname&&(!u.protocol||Ei.indexOf(u.protocol)>=0))try{u.hostname=Ci.toASCII(u.hostname)}catch{}return rt(Un(u))}function $a(e){const u=Vn(e,!0);if(u.hostname&&(!u.protocol||Ei.indexOf(u.protocol)>=0))try{u.hostname=Ci.toUnicode(u.hostname)}catch{}return Su(Un(u),Su.defaultChars+"%")}function De(e,u){if(!(this instanceof De))return new De(e,u);u||Zn(e)||(u=e||{},e="default"),this.inline=new ot,this.block=new $t,this.core=new Jn,this.renderer=new Iu,this.linkify=new _e,this.validateLink=qa,this.normalizeLink=Ha,this.normalizeLinkText=$a,this.utils=Vc,this.helpers=qt({},Jc),this.options={},this.configure(e),u&&this.set(u)}De.prototype.set=function(e){return qt(this.options,e),this};De.prototype.configure=function(e){const u=this;if(Zn(e)){const t=e;if(e=La[t],!e)throw new Error('Wrong `markdown-it` preset "'+t+'", check name')}if(!e)throw new Error("Wrong `markdown-it` preset, can't be empty");return e.options&&u.set(e.options),e.components&&Object.keys(e.components).forEach(function(t){e.components[t].rules&&u[t].ruler.enableOnly(e.components[t].rules),e.components[t].rules2&&u[t].ruler2.enableOnly(e.components[t].rules2)}),this};De.prototype.enable=function(e,u){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.enable(e,!0))},this),t=t.concat(this.inline.ruler2.enable(e,!0));const n=e.filter(function(r){return t.indexOf(r)<0});if(n.length&&!u)throw new Error("MarkdownIt. Failed to enable unknown rule(s): "+n);return this};De.prototype.disable=function(e,u){let t=[];Array.isArray(e)||(e=[e]),["core","block","inline"].forEach(function(r){t=t.concat(this[r].ruler.disable(e,!0))},this),t=t.concat(this.inline.ruler2.disable(e,!0));const n=e.filter(function(r){return t.indexOf(r)<0});if(n.length&&!u)throw new Error("MarkdownIt. Failed to disable unknown rule(s): "+n);return this};De.prototype.use=function(e){const u=[this].concat(Array.prototype.slice.call(arguments,1));return e.apply(e,u),this};De.prototype.parse=function(e,u){if(typeof e!="string")throw new Error("Input data should be a String");const t=new this.core.State(e,this,u);return this.core.process(t),t.tokens};De.prototype.render=function(e,u){return u=u||{},this.renderer.render(this.parse(e,u),this.options,u)};De.prototype.parseInline=function(e,u){const t=new this.core.State(e,this,u);return t.inlineMode=!0,this.core.process(t),t.tokens};De.prototype.renderInline=function(e,u){return u=u||{},this.renderer.render(this.parseInline(e,u),this.options,u)};const Di=new De;Di.renderer.rules.link_open=(e,u,t,n,r)=>{const i=e[u].attrIndex("target");return i<0?(e[u].attrPush(["target","_blank"]),e[u].attrPush(["rel","noopener noreferrer"])):e[u].attrs[i][1]="_blank",r.renderToken(e,u,t)};const Ua=()=>Di,Va="_wrap_2rkhf_2",Wa="_content_2rkhf_10",Za="_contentTextOnly_2rkhf_26",Ga="_markdown_2rkhf_30",Ja={wrap:Va,content:Wa,contentTextOnly:Za,markdown:Ga},Ka=["onClick"],Qa=["innerHTML"],Ya={__name:"AppContent",props:{selectedMenu:Array|null},setup(e){const u=Ua();function t(o){return u.render(o||"")}const n=e;bt(()=>n.selectedMenu,(o,s)=>{o!==s&&r.value.clear()});const r=m0(new Set);function i(o){r.value.has(o)?r.value.delete(o):r.value.add(o)}return(o,s)=>{const c=jo("AppContent",!0);return je(),Je("div",{class:ye([o.$style.wrap,"flex-col"])},[(je(!0),Je(Ae,null,v0(e.selectedMenu,(l,a)=>(je(),Je("div",{key:a,class:ye([o.$style.content,r.value.has(a)&&l.items?o.$style.active:"",l.items?o.$style.contentTextOnly:""])},[Et("div",{class:ye([o.$style.title,"text-green"]),onClick:f=>i(a)},Tn(l.title),11,Ka),ko(Et("div",{class:ye(o.$style.text)},[l.items?(je(),bs(c,{key:0,selectedMenu:l.items,class:ye([o.$style.items,"mt-16 mb-24"])},null,8,["selectedMenu","class"])):(je(),Je("div",{key:1,class:ye(["text-left ml-16",o.$style.markdown]),innerHTML:t(l.text)},null,10,Qa))],2),[[Os,r.value.has(a)]])],2))),128))],2)}}},Xa={$style:Ja},ef=zt(Ya,[["__cssModules",Xa]]),uf="_container_1c09i_1",tf="_navigation_1c09i_7",nf="_active_1c09i_22",rf={container:uf,navigation:tf,active:nf},of=["onClick"],sf={__name:"AppMenu",props:{items:Array,activeIndex:Number|null},emits:["changeActiveIndex"],setup(e,{emit:u}){const t=u;function n(r){t("changeActiveIndex",r)}return(r,i)=>(je(),Je("div",{class:ye([r.$style.container,"gap-16 mb-24"])},[(je(!0),Je(Ae,null,v0(e.items,(o,s)=>(je(),Je("div",{key:s,class:ye([r.$style.navigation,e.activeIndex===s?r.$style.active:""]),onClick:c=>n(s)},Tn(o),11,of))),128))],2))}},cf={$style:rf},lf=zt(sf,[["__cssModules",cf]]),ke={GIT:"GIT",JS:"JS",Objects:"OBJECT",Arrays:"ARRAYS",Markup:"MARKUP",Styles:"STYLES",Browser:"BROWSER",Vue:"VUE",Nuxt:"NUXT",Links:"LINKS",Hotkeys:"HOTKEYS"},Zr=Object.values(ke),af={[ke.GIT]:[{title:"📥 Клонирование и удалённый репозиторий",text:`- **git clone <url>** – Клонировать удалённый репозиторий на локальную машину
- **git remote -v** – Показывает связку с гитом (куда / откуда)`},{title:"🔍 Проверка состояния",text:`- **git status** – Показать текущее состояние репозитория (изменения, ветки)
- **git log** – Показать историю коммитов`},{title:"➕ Добавление и коммиты",text:`- **git add <файл>** – Добавить файл(ы) в индекс (готовность к коммиту)
- **git add .** – Добавить все файлы в индекс
- **git commit -m "msg"** – Зафиксировать изменения с сообщением коммита`},{title:"📤 Отправка и получение",text:`- **git push** – Отправить коммиты в удалённый репозиторий
- **git pull** – Забрать изменения с удалённого репозитория и слить с локальными`},{title:"🌿 Работа с ветками",text:`- **git branch** – Показать список веток
- **git checkout <ветка>** – Переключиться на другую ветку
- **git merge <ветка>** – Слить указанную ветку в текущую`}],[ke.JS]:[{title:"📚 Типы данных",items:[{title:"🔢 Примитивные типы данных",text:`- **string** – Строка: "Hello", 'world', template

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
- ⚠ Используется только в старом коде`},{title:"Область видимости (Scope)",text:"```js\nfunction test() {\n  if (true) {\n    let x = 1\n    var y = 2\n  }\n  console.log(x) // ❌ ошибка\n  console.log(y) // ✅ 2 (var видна во всей функции)\n}\n```\n\n- Особенности:\n- ✔ `let` и `const` — видны только в блоке `{...}`\n- ✔ `var` — видна во всей функции\n- ✘ `var` игнорирует блочную структуру (например, if)"},{title:"Всплытие (Hoisting)",text:"```js\nconsole.log(a) // undefined (var всплыла)\nvar a = 5\n\nconsole.log(b) // ❌ ошибка (ReferenceError)\nlet b = 10\n```\n\n- Особенности:\n- ✔ `var` всплывает — переменная создаётся и инициализируется как `undefined`\n- ✔ `let` и `const` тоже всплывают, но попадают в TDZ (зона временной недоступности)\n- ✘ Обращение к `let/const` до строки объявления вызывает ошибку"}]},{title:"📘 Объявления функции",items:[{title:"Function Declaration – Обычное объявление функции",text:`\`\`\`js
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
`}]},{title:"⏱ Async / Await – Асинхронность",items:[{title:"Async Function – Асинхронная функция",text:`\`\`\`js
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
- ✔ Удобен для логики "на запись" и валидации`}]}],[ke.Objects]:[{title:"🧱 Методы объекта",text:'**Object.keys(obj)** – Возвращает массив всех ключей (имён свойств) переданного объекта\n```js\nconst user = { name: "Roman", age: 25 }\nconsole.log(Object.keys(user)) // ["name", "age"]\n```\n\n**Object.values(obj)** – Возвращает массив всех значений (значений свойств) переданного объекта\n```js\nconst user = { name: "Roman", age: 25 }\nconsole.log(Object.values(user)) // ["Roman", 25"]\n```'}],[ke.Arrays]:[],[ke.Markup]:[{title:"🧱 Основные HTML-теги",items:[{title:"Структура документа и разметка",text:`\`\`\`html
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

- Для расширенных возможностей и улучшения UX и доступности`}]}],[ke.Styles]:[],[ke.Browser]:[{title:"🌐 HTTP(S) протокол – Основы клиент-серверного общения",items:[{title:"Методы HTTP – Что делает клиент",text:`\`\`\`js
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
- 🔐 Все современные сайты используют HTTPS (HTTP считается небезопасным)`},{title:"CORS – Кросс-доменные запросы",text:"```js\nfetch('https://api.example.com', {\n  mode: 'cors'\n})\n```\n\n- 🌍 Браузеры по умолчанию блокируют запросы на другие домены\n- 🛑 Без нужных заголовков сервер выдаст ошибку CORS\n- ✅ Сервер должен ответить:\n  ```http\n  Access-Control-Allow-Origin: *\n  ```\n- ✅ Для защищённых методов (POST, PUT...) может быть preflight-запрос с методом **OPTIONS**"}]},{title:"🌐 Параметры в адресной строке (URL query)",items:[{title:"Что такое параметры в URL",text:`\`\`\`js
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

- Дополнительные возможности для глубокого анализа и инспекции`}]}],[ke.Vue]:[{title:"🖖 Vue — директивы",text:`- **v-if** – Условный рендеринг элемента (если условие true — отрисовывается)
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
\`\`\``},{title:"onBeforeMount – Вызывается перед монтированием компонента",text:"```js\nimport { onBeforeMount } from 'vue'\n\nonBeforeMount(() => {\n  console.log('Компонент скоро будет смонтирован')\n})\n```"},{title:"onUpdated – Вызывается после каждого обновления DOM компонента",text:"```js\nimport { onUpdated } from 'vue'\n\nonUpdated(() => {\n  console.log('Компонент обновился')\n})\n```"},{title:"onBeforeUnmount – Вызывается перед удалением компонента из DOM",text:"```js\nimport { onBeforeUnmount } from 'vue'\n\nonBeforeUnmount(() => {\n  console.log('Компонент будет удалён')\n})\n```"},{title:"onActivated – Вызывается, когда keep-alive компонент активируется",text:"```js\nimport { onActivated } from 'vue'\n\nonActivated(() => {\n  console.log('Компонент активирован')\n})\n```"},{title:"onDeactivated – Вызывается, когда keep-alive компонент деактивируется",text:"```js\nimport { onDeactivated } from 'vue'\n\nonDeactivated(() => {\n  console.log('Компонент деактивирован')\n})\n```"}]}],[ke.Nuxt]:[],[ke.Links]:[{title:"📦 CSS & JS: библиотеки, шпаргалки, инструменты",text:`
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
`}],[ke.Hotkeys]:[{title:"🔄 Редактирование и работа с кодом",text:`- **Ctrl + D** – Дублировать строку/блок
- **Ctrl + Y** – Удалить строку
- **Shift + Alt + ↑ / ↓** – Переместить строку вверх/вниз
- **Ctrl + ]** → перейти к закрывающей скобке
- **Ctrl + [** → перейти к открывающей скобке
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
- **Ctrl + Shift + A** – Переопределить шорткаты (Find Action)`}]};function ff(e,u){const t=m0(null);function n(i){t.value=t.value===i?null:i}const r=K0(()=>{if(t.value==null)return null;const i=e[t.value];return u[i]});return{activeIndex:t,selectedMenu:r,handleChangeActiveIndex:n}}const df={},hf={__name:"App",setup(e){const{activeIndex:u,selectedMenu:t,handleChangeActiveIndex:n}=ff(Zr,af);return(r,i)=>(je(),Je("div",{class:ye([r.$style.container,"text-center pt-16"])},[ve(rc,{class:"mb-16"}),ve(lf,{items:Lu(Zr),activeIndex:Lu(u),onChangeActiveIndex:Lu(n)},null,8,["items","activeIndex","onChangeActiveIndex"]),ve(ef,{selectedMenu:Lu(t)},null,8,["selectedMenu"])],2))}},pf={$style:df},bf=zt(hf,[["__cssModules",pf]]);Ys(bf).mount("#app");
