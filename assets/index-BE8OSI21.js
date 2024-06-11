var az=(o,s)=>()=>(s||o((s={exports:{}}).exports,s),s.exports);var X$=az((pn,mn)=>{function cz(o,s){for(var l=0;l<s.length;l++){const h=s[l];if(typeof h!="string"&&!Array.isArray(h)){for(const m in h)if(m!=="default"&&!(m in o)){const w=Object.getOwnPropertyDescriptor(h,m);w&&Object.defineProperty(o,m,w.get?w:{enumerable:!0,get:()=>h[m]})}}}return Object.freeze(Object.defineProperty(o,Symbol.toStringTag,{value:"Module"}))}(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const m of document.querySelectorAll('link[rel="modulepreload"]'))h(m);new MutationObserver(m=>{for(const w of m)if(w.type==="childList")for(const k of w.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&h(k)}).observe(document,{childList:!0,subtree:!0});function l(m){const w={};return m.integrity&&(w.integrity=m.integrity),m.referrerPolicy&&(w.referrerPolicy=m.referrerPolicy),m.crossOrigin==="use-credentials"?w.credentials="include":m.crossOrigin==="anonymous"?w.credentials="omit":w.credentials="same-origin",w}function h(m){if(m.ep)return;m.ep=!0;const w=l(m);fetch(m.href,w)}})();var Jl=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lz(o){return o&&o.__esModule&&Object.prototype.hasOwnProperty.call(o,"default")?o.default:o}function dz(o){if(o.__esModule)return o;var s=o.default;if(typeof s=="function"){var l=function h(){return this instanceof h?Reflect.construct(s,arguments,this.constructor):s.apply(this,arguments)};l.prototype=s.prototype}else l={};return Object.defineProperty(l,"__esModule",{value:!0}),Object.keys(o).forEach(function(h){var m=Object.getOwnPropertyDescriptor(o,h);Object.defineProperty(l,h,m.get?m:{enumerable:!0,get:function(){return o[h]}})}),l}var gE={exports:{}},uu={},fE={exports:{}},ve={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var yc=Symbol.for("react.element"),uz=Symbol.for("react.portal"),hz=Symbol.for("react.fragment"),pz=Symbol.for("react.strict_mode"),mz=Symbol.for("react.profiler"),gz=Symbol.for("react.provider"),fz=Symbol.for("react.context"),kz=Symbol.for("react.forward_ref"),bz=Symbol.for("react.suspense"),wz=Symbol.for("react.memo"),_z=Symbol.for("react.lazy"),ix=Symbol.iterator;function Az(o){return o===null||typeof o!="object"?null:(o=ix&&o[ix]||o["@@iterator"],typeof o=="function"?o:null)}var kE={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},bE=Object.assign,wE={};function Ns(o,s,l){this.props=o,this.context=s,this.refs=wE,this.updater=l||kE}Ns.prototype.isReactComponent={};Ns.prototype.setState=function(o,s){if(typeof o!="object"&&typeof o!="function"&&o!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,o,s,"setState")};Ns.prototype.forceUpdate=function(o){this.updater.enqueueForceUpdate(this,o,"forceUpdate")};function _E(){}_E.prototype=Ns.prototype;function Gg(o,s,l){this.props=o,this.context=s,this.refs=wE,this.updater=l||kE}var Kg=Gg.prototype=new _E;Kg.constructor=Gg;bE(Kg,Ns.prototype);Kg.isPureReactComponent=!0;var rx=Array.isArray,AE=Object.prototype.hasOwnProperty,Qg={current:null},vE={key:!0,ref:!0,__self:!0,__source:!0};function CE(o,s,l){var h,m={},w=null,k=null;if(s!=null)for(h in s.ref!==void 0&&(k=s.ref),s.key!==void 0&&(w=""+s.key),s)AE.call(s,h)&&!vE.hasOwnProperty(h)&&(m[h]=s[h]);var A=arguments.length-2;if(A===1)m.children=l;else if(1<A){for(var b=Array(A),y=0;y<A;y++)b[y]=arguments[y+2];m.children=b}if(o&&o.defaultProps)for(h in A=o.defaultProps,A)m[h]===void 0&&(m[h]=A[h]);return{$$typeof:yc,type:o,key:w,ref:k,props:m,_owner:Qg.current}}function vz(o,s){return{$$typeof:yc,type:o.type,key:s,ref:o.ref,props:o.props,_owner:o._owner}}function Yg(o){return typeof o=="object"&&o!==null&&o.$$typeof===yc}function Cz(o){var s={"=":"=0",":":"=2"};return"$"+o.replace(/[=:]/g,function(l){return s[l]})}var sx=/\/+/g;function Zp(o,s){return typeof o=="object"&&o!==null&&o.key!=null?Cz(""+o.key):s.toString(36)}function bd(o,s,l,h,m){var w=typeof o;(w==="undefined"||w==="boolean")&&(o=null);var k=!1;if(o===null)k=!0;else switch(w){case"string":case"number":k=!0;break;case"object":switch(o.$$typeof){case yc:case uz:k=!0}}if(k)return k=o,m=m(k),o=h===""?"."+Zp(k,0):h,rx(m)?(l="",o!=null&&(l=o.replace(sx,"$&/")+"/"),bd(m,s,l,"",function(y){return y})):m!=null&&(Yg(m)&&(m=vz(m,l+(!m.key||k&&k.key===m.key?"":(""+m.key).replace(sx,"$&/")+"/")+o)),s.push(m)),1;if(k=0,h=h===""?".":h+":",rx(o))for(var A=0;A<o.length;A++){w=o[A];var b=h+Zp(w,A);k+=bd(w,s,l,b,m)}else if(b=Az(o),typeof b=="function")for(o=b.call(o),A=0;!(w=o.next()).done;)w=w.value,b=h+Zp(w,A++),k+=bd(w,s,l,b,m);else if(w==="object")throw s=String(o),Error("Objects are not valid as a React child (found: "+(s==="[object Object]"?"object with keys {"+Object.keys(o).join(", ")+"}":s)+"). If you meant to render a collection of children, use an array instead.");return k}function Xl(o,s,l){if(o==null)return o;var h=[],m=0;return bd(o,h,"","",function(w){return s.call(l,w,m++)}),h}function yz(o){if(o._status===-1){var s=o._result;s=s(),s.then(function(l){(o._status===0||o._status===-1)&&(o._status=1,o._result=l)},function(l){(o._status===0||o._status===-1)&&(o._status=2,o._result=l)}),o._status===-1&&(o._status=0,o._result=s)}if(o._status===1)return o._result.default;throw o._result}var Ft={current:null},wd={transition:null},xz={ReactCurrentDispatcher:Ft,ReactCurrentBatchConfig:wd,ReactCurrentOwner:Qg};function yE(){throw Error("act(...) is not supported in production builds of React.")}ve.Children={map:Xl,forEach:function(o,s,l){Xl(o,function(){s.apply(this,arguments)},l)},count:function(o){var s=0;return Xl(o,function(){s++}),s},toArray:function(o){return Xl(o,function(s){return s})||[]},only:function(o){if(!Yg(o))throw Error("React.Children.only expected to receive a single React element child.");return o}};ve.Component=Ns;ve.Fragment=hz;ve.Profiler=mz;ve.PureComponent=Gg;ve.StrictMode=pz;ve.Suspense=bz;ve.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=xz;ve.act=yE;ve.cloneElement=function(o,s,l){if(o==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+o+".");var h=bE({},o.props),m=o.key,w=o.ref,k=o._owner;if(s!=null){if(s.ref!==void 0&&(w=s.ref,k=Qg.current),s.key!==void 0&&(m=""+s.key),o.type&&o.type.defaultProps)var A=o.type.defaultProps;for(b in s)AE.call(s,b)&&!vE.hasOwnProperty(b)&&(h[b]=s[b]===void 0&&A!==void 0?A[b]:s[b])}var b=arguments.length-2;if(b===1)h.children=l;else if(1<b){A=Array(b);for(var y=0;y<b;y++)A[y]=arguments[y+2];h.children=A}return{$$typeof:yc,type:o.type,key:m,ref:w,props:h,_owner:k}};ve.createContext=function(o){return o={$$typeof:fz,_currentValue:o,_currentValue2:o,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},o.Provider={$$typeof:gz,_context:o},o.Consumer=o};ve.createElement=CE;ve.createFactory=function(o){var s=CE.bind(null,o);return s.type=o,s};ve.createRef=function(){return{current:null}};ve.forwardRef=function(o){return{$$typeof:kz,render:o}};ve.isValidElement=Yg;ve.lazy=function(o){return{$$typeof:_z,_payload:{_status:-1,_result:o},_init:yz}};ve.memo=function(o,s){return{$$typeof:wz,type:o,compare:s===void 0?null:s}};ve.startTransition=function(o){var s=wd.transition;wd.transition={};try{o()}finally{wd.transition=s}};ve.unstable_act=yE;ve.useCallback=function(o,s){return Ft.current.useCallback(o,s)};ve.useContext=function(o){return Ft.current.useContext(o)};ve.useDebugValue=function(){};ve.useDeferredValue=function(o){return Ft.current.useDeferredValue(o)};ve.useEffect=function(o,s){return Ft.current.useEffect(o,s)};ve.useId=function(){return Ft.current.useId()};ve.useImperativeHandle=function(o,s,l){return Ft.current.useImperativeHandle(o,s,l)};ve.useInsertionEffect=function(o,s){return Ft.current.useInsertionEffect(o,s)};ve.useLayoutEffect=function(o,s){return Ft.current.useLayoutEffect(o,s)};ve.useMemo=function(o,s){return Ft.current.useMemo(o,s)};ve.useReducer=function(o,s,l){return Ft.current.useReducer(o,s,l)};ve.useRef=function(o){return Ft.current.useRef(o)};ve.useState=function(o){return Ft.current.useState(o)};ve.useSyncExternalStore=function(o,s,l){return Ft.current.useSyncExternalStore(o,s,l)};ve.useTransition=function(){return Ft.current.useTransition()};ve.version="18.3.1";fE.exports=ve;var $=fE.exports;const Zg=lz($),jm=cz({__proto__:null,default:Zg},[$]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ez=$,Dz=Symbol.for("react.element"),Sz=Symbol.for("react.fragment"),Iz=Object.prototype.hasOwnProperty,Tz=Ez.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Mz={key:!0,ref:!0,__self:!0,__source:!0};function xE(o,s,l){var h,m={},w=null,k=null;l!==void 0&&(w=""+l),s.key!==void 0&&(w=""+s.key),s.ref!==void 0&&(k=s.ref);for(h in s)Iz.call(s,h)&&!Mz.hasOwnProperty(h)&&(m[h]=s[h]);if(o&&o.defaultProps)for(h in s=o.defaultProps,s)m[h]===void 0&&(m[h]=s[h]);return{$$typeof:Dz,type:o,key:w,ref:k,props:m,_owner:Tz.current}}uu.Fragment=Sz;uu.jsx=xE;uu.jsxs=xE;gE.exports=uu;var E=gE.exports,Om={},EE={exports:{}},wn={},DE={exports:{}},SE={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(o){function s(ie,ue){var se=ie.length;ie.push(ue);e:for(;0<se;){var Re=se-1>>>1,qe=ie[Re];if(0<m(qe,ue))ie[Re]=ue,ie[se]=qe,se=Re;else break e}}function l(ie){return ie.length===0?null:ie[0]}function h(ie){if(ie.length===0)return null;var ue=ie[0],se=ie.pop();if(se!==ue){ie[0]=se;e:for(var Re=0,qe=ie.length,Ao=qe>>>1;Re<Ao;){var Xt=2*(Re+1)-1,Go=ie[Xt],vn=Xt+1,ao=ie[vn];if(0>m(Go,se))vn<qe&&0>m(ao,Go)?(ie[Re]=ao,ie[vn]=se,Re=vn):(ie[Re]=Go,ie[Xt]=se,Re=Xt);else if(vn<qe&&0>m(ao,se))ie[Re]=ao,ie[vn]=se,Re=vn;else break e}}return ue}function m(ie,ue){var se=ie.sortIndex-ue.sortIndex;return se!==0?se:ie.id-ue.id}if(typeof performance=="object"&&typeof performance.now=="function"){var w=performance;o.unstable_now=function(){return w.now()}}else{var k=Date,A=k.now();o.unstable_now=function(){return k.now()-A}}var b=[],y=[],I=1,D=null,v=3,S=!1,B=!1,O=!1,R=typeof setTimeout=="function"?setTimeout:null,N=typeof clearTimeout=="function"?clearTimeout:null,P=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function L(ie){for(var ue=l(y);ue!==null;){if(ue.callback===null)h(y);else if(ue.startTime<=ie)h(y),ue.sortIndex=ue.expirationTime,s(b,ue);else break;ue=l(y)}}function V(ie){if(O=!1,L(ie),!B)if(l(b)!==null)B=!0,tt(G);else{var ue=l(y);ue!==null&&An(V,ue.startTime-ie)}}function G(ie,ue){B=!1,O&&(O=!1,N(U),U=-1),S=!0;var se=v;try{for(L(ue),D=l(b);D!==null&&(!(D.expirationTime>ue)||ie&&!re());){var Re=D.callback;if(typeof Re=="function"){D.callback=null,v=D.priorityLevel;var qe=Re(D.expirationTime<=ue);ue=o.unstable_now(),typeof qe=="function"?D.callback=qe:D===l(b)&&h(b),L(ue)}else h(b);D=l(b)}if(D!==null)var Ao=!0;else{var Xt=l(y);Xt!==null&&An(V,Xt.startTime-ue),Ao=!1}return Ao}finally{D=null,v=se,S=!1}}var Y=!1,H=null,U=-1,j=5,K=-1;function re(){return!(o.unstable_now()-K<j)}function ke(){if(H!==null){var ie=o.unstable_now();K=ie;var ue=!0;try{ue=H(!0,ie)}finally{ue?me():(Y=!1,H=null)}}else Y=!1}var me;if(typeof P=="function")me=function(){P(ke)};else if(typeof MessageChannel<"u"){var pt=new MessageChannel,rt=pt.port2;pt.port1.onmessage=ke,me=function(){rt.postMessage(null)}}else me=function(){R(ke,0)};function tt(ie){H=ie,Y||(Y=!0,me())}function An(ie,ue){U=R(function(){ie(o.unstable_now())},ue)}o.unstable_IdlePriority=5,o.unstable_ImmediatePriority=1,o.unstable_LowPriority=4,o.unstable_NormalPriority=3,o.unstable_Profiling=null,o.unstable_UserBlockingPriority=2,o.unstable_cancelCallback=function(ie){ie.callback=null},o.unstable_continueExecution=function(){B||S||(B=!0,tt(G))},o.unstable_forceFrameRate=function(ie){0>ie||125<ie?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<ie?Math.floor(1e3/ie):5},o.unstable_getCurrentPriorityLevel=function(){return v},o.unstable_getFirstCallbackNode=function(){return l(b)},o.unstable_next=function(ie){switch(v){case 1:case 2:case 3:var ue=3;break;default:ue=v}var se=v;v=ue;try{return ie()}finally{v=se}},o.unstable_pauseExecution=function(){},o.unstable_requestPaint=function(){},o.unstable_runWithPriority=function(ie,ue){switch(ie){case 1:case 2:case 3:case 4:case 5:break;default:ie=3}var se=v;v=ie;try{return ue()}finally{v=se}},o.unstable_scheduleCallback=function(ie,ue,se){var Re=o.unstable_now();switch(typeof se=="object"&&se!==null?(se=se.delay,se=typeof se=="number"&&0<se?Re+se:Re):se=Re,ie){case 1:var qe=-1;break;case 2:qe=250;break;case 5:qe=1073741823;break;case 4:qe=1e4;break;default:qe=5e3}return qe=se+qe,ie={id:I++,callback:ue,priorityLevel:ie,startTime:se,expirationTime:qe,sortIndex:-1},se>Re?(ie.sortIndex=se,s(y,ie),l(b)===null&&ie===l(y)&&(O?(N(U),U=-1):O=!0,An(V,se-Re))):(ie.sortIndex=qe,s(b,ie),B||S||(B=!0,tt(G))),ie},o.unstable_shouldYield=re,o.unstable_wrapCallback=function(ie){var ue=v;return function(){var se=v;v=ue;try{return ie.apply(this,arguments)}finally{v=se}}}})(SE);DE.exports=SE;var Bz=DE.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Nz=$,fn=Bz;function ee(o){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+o,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+o+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var IE=new Set,ec={};function ur(o,s){As(o,s),As(o+"Capture",s)}function As(o,s){for(ec[o]=s,o=0;o<s.length;o++)IE.add(s[o])}var Ro=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Lm=Object.prototype.hasOwnProperty,Pz=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,ax={},cx={};function jz(o){return Lm.call(cx,o)?!0:Lm.call(ax,o)?!1:Pz.test(o)?cx[o]=!0:(ax[o]=!0,!1)}function Oz(o,s,l,h){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return h?!1:l!==null?!l.acceptsBooleans:(o=o.toLowerCase().slice(0,5),o!=="data-"&&o!=="aria-");default:return!1}}function Lz(o,s,l,h){if(s===null||typeof s>"u"||Oz(o,s,l,h))return!0;if(h)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function Vt(o,s,l,h,m,w,k){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=h,this.attributeNamespace=m,this.mustUseProperty=l,this.propertyName=o,this.type=s,this.sanitizeURL=w,this.removeEmptyString=k}var Mt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(o){Mt[o]=new Vt(o,0,!1,o,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(o){var s=o[0];Mt[s]=new Vt(s,1,!1,o[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(o){Mt[o]=new Vt(o,2,!1,o.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(o){Mt[o]=new Vt(o,2,!1,o,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(o){Mt[o]=new Vt(o,3,!1,o.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(o){Mt[o]=new Vt(o,3,!0,o,null,!1,!1)});["capture","download"].forEach(function(o){Mt[o]=new Vt(o,4,!1,o,null,!1,!1)});["cols","rows","size","span"].forEach(function(o){Mt[o]=new Vt(o,6,!1,o,null,!1,!1)});["rowSpan","start"].forEach(function(o){Mt[o]=new Vt(o,5,!1,o.toLowerCase(),null,!1,!1)});var Jg=/[\-:]([a-z])/g;function Xg(o){return o[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(o){var s=o.replace(Jg,Xg);Mt[s]=new Vt(s,1,!1,o,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(o){var s=o.replace(Jg,Xg);Mt[s]=new Vt(s,1,!1,o,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(o){var s=o.replace(Jg,Xg);Mt[s]=new Vt(s,1,!1,o,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(o){Mt[o]=new Vt(o,1,!1,o.toLowerCase(),null,!1,!1)});Mt.xlinkHref=new Vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(o){Mt[o]=new Vt(o,1,!1,o.toLowerCase(),null,!0,!0)});function ef(o,s,l,h){var m=Mt.hasOwnProperty(s)?Mt[s]:null;(m!==null?m.type!==0:h||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(Lz(s,l,m,h)&&(l=null),h||m===null?jz(s)&&(l===null?o.removeAttribute(s):o.setAttribute(s,""+l)):m.mustUseProperty?o[m.propertyName]=l===null?m.type===3?!1:"":l:(s=m.attributeName,h=m.attributeNamespace,l===null?o.removeAttribute(s):(m=m.type,l=m===3||m===4&&l===!0?"":""+l,h?o.setAttributeNS(h,s,l):o.setAttribute(s,l))))}var qo=Nz.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ed=Symbol.for("react.element"),ts=Symbol.for("react.portal"),ns=Symbol.for("react.fragment"),tf=Symbol.for("react.strict_mode"),zm=Symbol.for("react.profiler"),TE=Symbol.for("react.provider"),ME=Symbol.for("react.context"),nf=Symbol.for("react.forward_ref"),Rm=Symbol.for("react.suspense"),Fm=Symbol.for("react.suspense_list"),of=Symbol.for("react.memo"),ii=Symbol.for("react.lazy"),BE=Symbol.for("react.offscreen"),lx=Symbol.iterator;function Sa(o){return o===null||typeof o!="object"?null:(o=lx&&o[lx]||o["@@iterator"],typeof o=="function"?o:null)}var et=Object.assign,Jp;function La(o){if(Jp===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);Jp=s&&s[1]||""}return`
`+Jp+o}var Xp=!1;function em(o,s){if(!o||Xp)return"";Xp=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(y){var h=y}Reflect.construct(o,[],s)}else{try{s.call()}catch(y){h=y}o.call(s.prototype)}else{try{throw Error()}catch(y){h=y}o()}}catch(y){if(y&&h&&typeof y.stack=="string"){for(var m=y.stack.split(`
`),w=h.stack.split(`
`),k=m.length-1,A=w.length-1;1<=k&&0<=A&&m[k]!==w[A];)A--;for(;1<=k&&0<=A;k--,A--)if(m[k]!==w[A]){if(k!==1||A!==1)do if(k--,A--,0>A||m[k]!==w[A]){var b=`
`+m[k].replace(" at new "," at ");return o.displayName&&b.includes("<anonymous>")&&(b=b.replace("<anonymous>",o.displayName)),b}while(1<=k&&0<=A);break}}}finally{Xp=!1,Error.prepareStackTrace=l}return(o=o?o.displayName||o.name:"")?La(o):""}function zz(o){switch(o.tag){case 5:return La(o.type);case 16:return La("Lazy");case 13:return La("Suspense");case 19:return La("SuspenseList");case 0:case 2:case 15:return o=em(o.type,!1),o;case 11:return o=em(o.type.render,!1),o;case 1:return o=em(o.type,!0),o;default:return""}}function Vm(o){if(o==null)return null;if(typeof o=="function")return o.displayName||o.name||null;if(typeof o=="string")return o;switch(o){case ns:return"Fragment";case ts:return"Portal";case zm:return"Profiler";case tf:return"StrictMode";case Rm:return"Suspense";case Fm:return"SuspenseList"}if(typeof o=="object")switch(o.$$typeof){case ME:return(o.displayName||"Context")+".Consumer";case TE:return(o._context.displayName||"Context")+".Provider";case nf:var s=o.render;return o=o.displayName,o||(o=s.displayName||s.name||"",o=o!==""?"ForwardRef("+o+")":"ForwardRef"),o;case of:return s=o.displayName||null,s!==null?s:Vm(o.type)||"Memo";case ii:s=o._payload,o=o._init;try{return Vm(o(s))}catch{}}return null}function Rz(o){var s=o.type;switch(o.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return o=s.render,o=o.displayName||o.name||"",s.displayName||(o!==""?"ForwardRef("+o+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Vm(s);case 8:return s===tf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function _i(o){switch(typeof o){case"boolean":case"number":case"string":case"undefined":return o;case"object":return o;default:return""}}function NE(o){var s=o.type;return(o=o.nodeName)&&o.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Fz(o){var s=NE(o)?"checked":"value",l=Object.getOwnPropertyDescriptor(o.constructor.prototype,s),h=""+o[s];if(!o.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var m=l.get,w=l.set;return Object.defineProperty(o,s,{configurable:!0,get:function(){return m.call(this)},set:function(k){h=""+k,w.call(this,k)}}),Object.defineProperty(o,s,{enumerable:l.enumerable}),{getValue:function(){return h},setValue:function(k){h=""+k},stopTracking:function(){o._valueTracker=null,delete o[s]}}}}function td(o){o._valueTracker||(o._valueTracker=Fz(o))}function PE(o){if(!o)return!1;var s=o._valueTracker;if(!s)return!0;var l=s.getValue(),h="";return o&&(h=NE(o)?o.checked?"true":"false":o.value),o=h,o!==l?(s.setValue(o),!0):!1}function Md(o){if(o=o||(typeof document<"u"?document:void 0),typeof o>"u")return null;try{return o.activeElement||o.body}catch{return o.body}}function Um(o,s){var l=s.checked;return et({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??o._wrapperState.initialChecked})}function dx(o,s){var l=s.defaultValue==null?"":s.defaultValue,h=s.checked!=null?s.checked:s.defaultChecked;l=_i(s.value!=null?s.value:l),o._wrapperState={initialChecked:h,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function jE(o,s){s=s.checked,s!=null&&ef(o,"checked",s,!1)}function Hm(o,s){jE(o,s);var l=_i(s.value),h=s.type;if(l!=null)h==="number"?(l===0&&o.value===""||o.value!=l)&&(o.value=""+l):o.value!==""+l&&(o.value=""+l);else if(h==="submit"||h==="reset"){o.removeAttribute("value");return}s.hasOwnProperty("value")?Wm(o,s.type,l):s.hasOwnProperty("defaultValue")&&Wm(o,s.type,_i(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(o.defaultChecked=!!s.defaultChecked)}function ux(o,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var h=s.type;if(!(h!=="submit"&&h!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+o._wrapperState.initialValue,l||s===o.value||(o.value=s),o.defaultValue=s}l=o.name,l!==""&&(o.name=""),o.defaultChecked=!!o._wrapperState.initialChecked,l!==""&&(o.name=l)}function Wm(o,s,l){(s!=="number"||Md(o.ownerDocument)!==o)&&(l==null?o.defaultValue=""+o._wrapperState.initialValue:o.defaultValue!==""+l&&(o.defaultValue=""+l))}var za=Array.isArray;function ms(o,s,l,h){if(o=o.options,s){s={};for(var m=0;m<l.length;m++)s["$"+l[m]]=!0;for(l=0;l<o.length;l++)m=s.hasOwnProperty("$"+o[l].value),o[l].selected!==m&&(o[l].selected=m),m&&h&&(o[l].defaultSelected=!0)}else{for(l=""+_i(l),s=null,m=0;m<o.length;m++){if(o[m].value===l){o[m].selected=!0,h&&(o[m].defaultSelected=!0);return}s!==null||o[m].disabled||(s=o[m])}s!==null&&(s.selected=!0)}}function qm(o,s){if(s.dangerouslySetInnerHTML!=null)throw Error(ee(91));return et({},s,{value:void 0,defaultValue:void 0,children:""+o._wrapperState.initialValue})}function hx(o,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(ee(92));if(za(l)){if(1<l.length)throw Error(ee(93));l=l[0]}s=l}s==null&&(s=""),l=s}o._wrapperState={initialValue:_i(l)}}function OE(o,s){var l=_i(s.value),h=_i(s.defaultValue);l!=null&&(l=""+l,l!==o.value&&(o.value=l),s.defaultValue==null&&o.defaultValue!==l&&(o.defaultValue=l)),h!=null&&(o.defaultValue=""+h)}function px(o){var s=o.textContent;s===o._wrapperState.initialValue&&s!==""&&s!==null&&(o.value=s)}function LE(o){switch(o){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function $m(o,s){return o==null||o==="http://www.w3.org/1999/xhtml"?LE(s):o==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":o}var nd,zE=function(o){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,h,m){MSApp.execUnsafeLocalFunction(function(){return o(s,l,h,m)})}:o}(function(o,s){if(o.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in o)o.innerHTML=s;else{for(nd=nd||document.createElement("div"),nd.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=nd.firstChild;o.firstChild;)o.removeChild(o.firstChild);for(;s.firstChild;)o.appendChild(s.firstChild)}});function tc(o,s){if(s){var l=o.firstChild;if(l&&l===o.lastChild&&l.nodeType===3){l.nodeValue=s;return}}o.textContent=s}var Ha={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Vz=["Webkit","ms","Moz","O"];Object.keys(Ha).forEach(function(o){Vz.forEach(function(s){s=s+o.charAt(0).toUpperCase()+o.substring(1),Ha[s]=Ha[o]})});function RE(o,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Ha.hasOwnProperty(o)&&Ha[o]?(""+s).trim():s+"px"}function FE(o,s){o=o.style;for(var l in s)if(s.hasOwnProperty(l)){var h=l.indexOf("--")===0,m=RE(l,s[l],h);l==="float"&&(l="cssFloat"),h?o.setProperty(l,m):o[l]=m}}var Uz=et({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Gm(o,s){if(s){if(Uz[o]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(ee(137,o));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(ee(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(ee(61))}if(s.style!=null&&typeof s.style!="object")throw Error(ee(62))}}function Km(o,s){if(o.indexOf("-")===-1)return typeof s.is=="string";switch(o){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Qm=null;function rf(o){return o=o.target||o.srcElement||window,o.correspondingUseElement&&(o=o.correspondingUseElement),o.nodeType===3?o.parentNode:o}var Ym=null,gs=null,fs=null;function mx(o){if(o=Dc(o)){if(typeof Ym!="function")throw Error(ee(280));var s=o.stateNode;s&&(s=fu(s),Ym(o.stateNode,o.type,s))}}function VE(o){gs?fs?fs.push(o):fs=[o]:gs=o}function UE(){if(gs){var o=gs,s=fs;if(fs=gs=null,mx(o),s)for(o=0;o<s.length;o++)mx(s[o])}}function HE(o,s){return o(s)}function WE(){}var tm=!1;function qE(o,s,l){if(tm)return o(s,l);tm=!0;try{return HE(o,s,l)}finally{tm=!1,(gs!==null||fs!==null)&&(WE(),UE())}}function nc(o,s){var l=o.stateNode;if(l===null)return null;var h=fu(l);if(h===null)return null;l=h[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(h=!h.disabled)||(o=o.type,h=!(o==="button"||o==="input"||o==="select"||o==="textarea")),o=!h;break e;default:o=!1}if(o)return null;if(l&&typeof l!="function")throw Error(ee(231,s,typeof l));return l}var Zm=!1;if(Ro)try{var Ia={};Object.defineProperty(Ia,"passive",{get:function(){Zm=!0}}),window.addEventListener("test",Ia,Ia),window.removeEventListener("test",Ia,Ia)}catch{Zm=!1}function Hz(o,s,l,h,m,w,k,A,b){var y=Array.prototype.slice.call(arguments,3);try{s.apply(l,y)}catch(I){this.onError(I)}}var Wa=!1,Bd=null,Nd=!1,Jm=null,Wz={onError:function(o){Wa=!0,Bd=o}};function qz(o,s,l,h,m,w,k,A,b){Wa=!1,Bd=null,Hz.apply(Wz,arguments)}function $z(o,s,l,h,m,w,k,A,b){if(qz.apply(this,arguments),Wa){if(Wa){var y=Bd;Wa=!1,Bd=null}else throw Error(ee(198));Nd||(Nd=!0,Jm=y)}}function hr(o){var s=o,l=o;if(o.alternate)for(;s.return;)s=s.return;else{o=s;do s=o,s.flags&4098&&(l=s.return),o=s.return;while(o)}return s.tag===3?l:null}function $E(o){if(o.tag===13){var s=o.memoizedState;if(s===null&&(o=o.alternate,o!==null&&(s=o.memoizedState)),s!==null)return s.dehydrated}return null}function gx(o){if(hr(o)!==o)throw Error(ee(188))}function Gz(o){var s=o.alternate;if(!s){if(s=hr(o),s===null)throw Error(ee(188));return s!==o?null:o}for(var l=o,h=s;;){var m=l.return;if(m===null)break;var w=m.alternate;if(w===null){if(h=m.return,h!==null){l=h;continue}break}if(m.child===w.child){for(w=m.child;w;){if(w===l)return gx(m),o;if(w===h)return gx(m),s;w=w.sibling}throw Error(ee(188))}if(l.return!==h.return)l=m,h=w;else{for(var k=!1,A=m.child;A;){if(A===l){k=!0,l=m,h=w;break}if(A===h){k=!0,h=m,l=w;break}A=A.sibling}if(!k){for(A=w.child;A;){if(A===l){k=!0,l=w,h=m;break}if(A===h){k=!0,h=w,l=m;break}A=A.sibling}if(!k)throw Error(ee(189))}}if(l.alternate!==h)throw Error(ee(190))}if(l.tag!==3)throw Error(ee(188));return l.stateNode.current===l?o:s}function GE(o){return o=Gz(o),o!==null?KE(o):null}function KE(o){if(o.tag===5||o.tag===6)return o;for(o=o.child;o!==null;){var s=KE(o);if(s!==null)return s;o=o.sibling}return null}var QE=fn.unstable_scheduleCallback,fx=fn.unstable_cancelCallback,Kz=fn.unstable_shouldYield,Qz=fn.unstable_requestPaint,lt=fn.unstable_now,Yz=fn.unstable_getCurrentPriorityLevel,sf=fn.unstable_ImmediatePriority,YE=fn.unstable_UserBlockingPriority,Pd=fn.unstable_NormalPriority,Zz=fn.unstable_LowPriority,ZE=fn.unstable_IdlePriority,hu=null,wo=null;function Jz(o){if(wo&&typeof wo.onCommitFiberRoot=="function")try{wo.onCommitFiberRoot(hu,o,void 0,(o.current.flags&128)===128)}catch{}}var oo=Math.clz32?Math.clz32:t8,Xz=Math.log,e8=Math.LN2;function t8(o){return o>>>=0,o===0?32:31-(Xz(o)/e8|0)|0}var od=64,id=4194304;function Ra(o){switch(o&-o){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return o&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return o&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return o}}function jd(o,s){var l=o.pendingLanes;if(l===0)return 0;var h=0,m=o.suspendedLanes,w=o.pingedLanes,k=l&268435455;if(k!==0){var A=k&~m;A!==0?h=Ra(A):(w&=k,w!==0&&(h=Ra(w)))}else k=l&~m,k!==0?h=Ra(k):w!==0&&(h=Ra(w));if(h===0)return 0;if(s!==0&&s!==h&&!(s&m)&&(m=h&-h,w=s&-s,m>=w||m===16&&(w&4194240)!==0))return s;if(h&4&&(h|=l&16),s=o.entangledLanes,s!==0)for(o=o.entanglements,s&=h;0<s;)l=31-oo(s),m=1<<l,h|=o[l],s&=~m;return h}function n8(o,s){switch(o){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function o8(o,s){for(var l=o.suspendedLanes,h=o.pingedLanes,m=o.expirationTimes,w=o.pendingLanes;0<w;){var k=31-oo(w),A=1<<k,b=m[k];b===-1?(!(A&l)||A&h)&&(m[k]=n8(A,s)):b<=s&&(o.expiredLanes|=A),w&=~A}}function Xm(o){return o=o.pendingLanes&-1073741825,o!==0?o:o&1073741824?1073741824:0}function JE(){var o=od;return od<<=1,!(od&4194240)&&(od=64),o}function nm(o){for(var s=[],l=0;31>l;l++)s.push(o);return s}function xc(o,s,l){o.pendingLanes|=s,s!==536870912&&(o.suspendedLanes=0,o.pingedLanes=0),o=o.eventTimes,s=31-oo(s),o[s]=l}function i8(o,s){var l=o.pendingLanes&~s;o.pendingLanes=s,o.suspendedLanes=0,o.pingedLanes=0,o.expiredLanes&=s,o.mutableReadLanes&=s,o.entangledLanes&=s,s=o.entanglements;var h=o.eventTimes;for(o=o.expirationTimes;0<l;){var m=31-oo(l),w=1<<m;s[m]=0,h[m]=-1,o[m]=-1,l&=~w}}function af(o,s){var l=o.entangledLanes|=s;for(o=o.entanglements;l;){var h=31-oo(l),m=1<<h;m&s|o[h]&s&&(o[h]|=s),l&=~m}}var Ne=0;function XE(o){return o&=-o,1<o?4<o?o&268435455?16:536870912:4:1}var e5,cf,t5,n5,o5,eg=!1,rd=[],ui=null,hi=null,pi=null,oc=new Map,ic=new Map,si=[],r8="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kx(o,s){switch(o){case"focusin":case"focusout":ui=null;break;case"dragenter":case"dragleave":hi=null;break;case"mouseover":case"mouseout":pi=null;break;case"pointerover":case"pointerout":oc.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":ic.delete(s.pointerId)}}function Ta(o,s,l,h,m,w){return o===null||o.nativeEvent!==w?(o={blockedOn:s,domEventName:l,eventSystemFlags:h,nativeEvent:w,targetContainers:[m]},s!==null&&(s=Dc(s),s!==null&&cf(s)),o):(o.eventSystemFlags|=h,s=o.targetContainers,m!==null&&s.indexOf(m)===-1&&s.push(m),o)}function s8(o,s,l,h,m){switch(s){case"focusin":return ui=Ta(ui,o,s,l,h,m),!0;case"dragenter":return hi=Ta(hi,o,s,l,h,m),!0;case"mouseover":return pi=Ta(pi,o,s,l,h,m),!0;case"pointerover":var w=m.pointerId;return oc.set(w,Ta(oc.get(w)||null,o,s,l,h,m)),!0;case"gotpointercapture":return w=m.pointerId,ic.set(w,Ta(ic.get(w)||null,o,s,l,h,m)),!0}return!1}function i5(o){var s=Xi(o.target);if(s!==null){var l=hr(s);if(l!==null){if(s=l.tag,s===13){if(s=$E(l),s!==null){o.blockedOn=s,o5(o.priority,function(){t5(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){o.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}o.blockedOn=null}function _d(o){if(o.blockedOn!==null)return!1;for(var s=o.targetContainers;0<s.length;){var l=tg(o.domEventName,o.eventSystemFlags,s[0],o.nativeEvent);if(l===null){l=o.nativeEvent;var h=new l.constructor(l.type,l);Qm=h,l.target.dispatchEvent(h),Qm=null}else return s=Dc(l),s!==null&&cf(s),o.blockedOn=l,!1;s.shift()}return!0}function bx(o,s,l){_d(o)&&l.delete(s)}function a8(){eg=!1,ui!==null&&_d(ui)&&(ui=null),hi!==null&&_d(hi)&&(hi=null),pi!==null&&_d(pi)&&(pi=null),oc.forEach(bx),ic.forEach(bx)}function Ma(o,s){o.blockedOn===s&&(o.blockedOn=null,eg||(eg=!0,fn.unstable_scheduleCallback(fn.unstable_NormalPriority,a8)))}function rc(o){function s(m){return Ma(m,o)}if(0<rd.length){Ma(rd[0],o);for(var l=1;l<rd.length;l++){var h=rd[l];h.blockedOn===o&&(h.blockedOn=null)}}for(ui!==null&&Ma(ui,o),hi!==null&&Ma(hi,o),pi!==null&&Ma(pi,o),oc.forEach(s),ic.forEach(s),l=0;l<si.length;l++)h=si[l],h.blockedOn===o&&(h.blockedOn=null);for(;0<si.length&&(l=si[0],l.blockedOn===null);)i5(l),l.blockedOn===null&&si.shift()}var ks=qo.ReactCurrentBatchConfig,Od=!0;function c8(o,s,l,h){var m=Ne,w=ks.transition;ks.transition=null;try{Ne=1,lf(o,s,l,h)}finally{Ne=m,ks.transition=w}}function l8(o,s,l,h){var m=Ne,w=ks.transition;ks.transition=null;try{Ne=4,lf(o,s,l,h)}finally{Ne=m,ks.transition=w}}function lf(o,s,l,h){if(Od){var m=tg(o,s,l,h);if(m===null)hm(o,s,h,Ld,l),kx(o,h);else if(s8(m,o,s,l,h))h.stopPropagation();else if(kx(o,h),s&4&&-1<r8.indexOf(o)){for(;m!==null;){var w=Dc(m);if(w!==null&&e5(w),w=tg(o,s,l,h),w===null&&hm(o,s,h,Ld,l),w===m)break;m=w}m!==null&&h.stopPropagation()}else hm(o,s,h,null,l)}}var Ld=null;function tg(o,s,l,h){if(Ld=null,o=rf(h),o=Xi(o),o!==null)if(s=hr(o),s===null)o=null;else if(l=s.tag,l===13){if(o=$E(s),o!==null)return o;o=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;o=null}else s!==o&&(o=null);return Ld=o,null}function r5(o){switch(o){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Yz()){case sf:return 1;case YE:return 4;case Pd:case Zz:return 16;case ZE:return 536870912;default:return 16}default:return 16}}var ci=null,df=null,Ad=null;function s5(){if(Ad)return Ad;var o,s=df,l=s.length,h,m="value"in ci?ci.value:ci.textContent,w=m.length;for(o=0;o<l&&s[o]===m[o];o++);var k=l-o;for(h=1;h<=k&&s[l-h]===m[w-h];h++);return Ad=m.slice(o,1<h?1-h:void 0)}function vd(o){var s=o.keyCode;return"charCode"in o?(o=o.charCode,o===0&&s===13&&(o=13)):o=s,o===10&&(o=13),32<=o||o===13?o:0}function sd(){return!0}function wx(){return!1}function _n(o){function s(l,h,m,w,k){this._reactName=l,this._targetInst=m,this.type=h,this.nativeEvent=w,this.target=k,this.currentTarget=null;for(var A in o)o.hasOwnProperty(A)&&(l=o[A],this[A]=l?l(w):w[A]);return this.isDefaultPrevented=(w.defaultPrevented!=null?w.defaultPrevented:w.returnValue===!1)?sd:wx,this.isPropagationStopped=wx,this}return et(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=sd)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=sd)},persist:function(){},isPersistent:sd}),s}var Ps={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(o){return o.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},uf=_n(Ps),Ec=et({},Ps,{view:0,detail:0}),d8=_n(Ec),om,im,Ba,pu=et({},Ec,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:hf,button:0,buttons:0,relatedTarget:function(o){return o.relatedTarget===void 0?o.fromElement===o.srcElement?o.toElement:o.fromElement:o.relatedTarget},movementX:function(o){return"movementX"in o?o.movementX:(o!==Ba&&(Ba&&o.type==="mousemove"?(om=o.screenX-Ba.screenX,im=o.screenY-Ba.screenY):im=om=0,Ba=o),om)},movementY:function(o){return"movementY"in o?o.movementY:im}}),_x=_n(pu),u8=et({},pu,{dataTransfer:0}),h8=_n(u8),p8=et({},Ec,{relatedTarget:0}),rm=_n(p8),m8=et({},Ps,{animationName:0,elapsedTime:0,pseudoElement:0}),g8=_n(m8),f8=et({},Ps,{clipboardData:function(o){return"clipboardData"in o?o.clipboardData:window.clipboardData}}),k8=_n(f8),b8=et({},Ps,{data:0}),Ax=_n(b8),w8={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},_8={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},A8={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v8(o){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(o):(o=A8[o])?!!s[o]:!1}function hf(){return v8}var C8=et({},Ec,{key:function(o){if(o.key){var s=w8[o.key]||o.key;if(s!=="Unidentified")return s}return o.type==="keypress"?(o=vd(o),o===13?"Enter":String.fromCharCode(o)):o.type==="keydown"||o.type==="keyup"?_8[o.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:hf,charCode:function(o){return o.type==="keypress"?vd(o):0},keyCode:function(o){return o.type==="keydown"||o.type==="keyup"?o.keyCode:0},which:function(o){return o.type==="keypress"?vd(o):o.type==="keydown"||o.type==="keyup"?o.keyCode:0}}),y8=_n(C8),x8=et({},pu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),vx=_n(x8),E8=et({},Ec,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:hf}),D8=_n(E8),S8=et({},Ps,{propertyName:0,elapsedTime:0,pseudoElement:0}),I8=_n(S8),T8=et({},pu,{deltaX:function(o){return"deltaX"in o?o.deltaX:"wheelDeltaX"in o?-o.wheelDeltaX:0},deltaY:function(o){return"deltaY"in o?o.deltaY:"wheelDeltaY"in o?-o.wheelDeltaY:"wheelDelta"in o?-o.wheelDelta:0},deltaZ:0,deltaMode:0}),M8=_n(T8),B8=[9,13,27,32],pf=Ro&&"CompositionEvent"in window,qa=null;Ro&&"documentMode"in document&&(qa=document.documentMode);var N8=Ro&&"TextEvent"in window&&!qa,a5=Ro&&(!pf||qa&&8<qa&&11>=qa),Cx=" ",yx=!1;function c5(o,s){switch(o){case"keyup":return B8.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function l5(o){return o=o.detail,typeof o=="object"&&"data"in o?o.data:null}var os=!1;function P8(o,s){switch(o){case"compositionend":return l5(s);case"keypress":return s.which!==32?null:(yx=!0,Cx);case"textInput":return o=s.data,o===Cx&&yx?null:o;default:return null}}function j8(o,s){if(os)return o==="compositionend"||!pf&&c5(o,s)?(o=s5(),Ad=df=ci=null,os=!1,o):null;switch(o){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return a5&&s.locale!=="ko"?null:s.data;default:return null}}var O8={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function xx(o){var s=o&&o.nodeName&&o.nodeName.toLowerCase();return s==="input"?!!O8[o.type]:s==="textarea"}function d5(o,s,l,h){VE(h),s=zd(s,"onChange"),0<s.length&&(l=new uf("onChange","change",null,l,h),o.push({event:l,listeners:s}))}var $a=null,sc=null;function L8(o){A5(o,0)}function mu(o){var s=ss(o);if(PE(s))return o}function z8(o,s){if(o==="change")return s}var u5=!1;if(Ro){var sm;if(Ro){var am="oninput"in document;if(!am){var Ex=document.createElement("div");Ex.setAttribute("oninput","return;"),am=typeof Ex.oninput=="function"}sm=am}else sm=!1;u5=sm&&(!document.documentMode||9<document.documentMode)}function Dx(){$a&&($a.detachEvent("onpropertychange",h5),sc=$a=null)}function h5(o){if(o.propertyName==="value"&&mu(sc)){var s=[];d5(s,sc,o,rf(o)),qE(L8,s)}}function R8(o,s,l){o==="focusin"?(Dx(),$a=s,sc=l,$a.attachEvent("onpropertychange",h5)):o==="focusout"&&Dx()}function F8(o){if(o==="selectionchange"||o==="keyup"||o==="keydown")return mu(sc)}function V8(o,s){if(o==="click")return mu(s)}function U8(o,s){if(o==="input"||o==="change")return mu(s)}function H8(o,s){return o===s&&(o!==0||1/o===1/s)||o!==o&&s!==s}var ro=typeof Object.is=="function"?Object.is:H8;function ac(o,s){if(ro(o,s))return!0;if(typeof o!="object"||o===null||typeof s!="object"||s===null)return!1;var l=Object.keys(o),h=Object.keys(s);if(l.length!==h.length)return!1;for(h=0;h<l.length;h++){var m=l[h];if(!Lm.call(s,m)||!ro(o[m],s[m]))return!1}return!0}function Sx(o){for(;o&&o.firstChild;)o=o.firstChild;return o}function Ix(o,s){var l=Sx(o);o=0;for(var h;l;){if(l.nodeType===3){if(h=o+l.textContent.length,o<=s&&h>=s)return{node:l,offset:s-o};o=h}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=Sx(l)}}function p5(o,s){return o&&s?o===s?!0:o&&o.nodeType===3?!1:s&&s.nodeType===3?p5(o,s.parentNode):"contains"in o?o.contains(s):o.compareDocumentPosition?!!(o.compareDocumentPosition(s)&16):!1:!1}function m5(){for(var o=window,s=Md();s instanceof o.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)o=s.contentWindow;else break;s=Md(o.document)}return s}function mf(o){var s=o&&o.nodeName&&o.nodeName.toLowerCase();return s&&(s==="input"&&(o.type==="text"||o.type==="search"||o.type==="tel"||o.type==="url"||o.type==="password")||s==="textarea"||o.contentEditable==="true")}function W8(o){var s=m5(),l=o.focusedElem,h=o.selectionRange;if(s!==l&&l&&l.ownerDocument&&p5(l.ownerDocument.documentElement,l)){if(h!==null&&mf(l)){if(s=h.start,o=h.end,o===void 0&&(o=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(o,l.value.length);else if(o=(s=l.ownerDocument||document)&&s.defaultView||window,o.getSelection){o=o.getSelection();var m=l.textContent.length,w=Math.min(h.start,m);h=h.end===void 0?w:Math.min(h.end,m),!o.extend&&w>h&&(m=h,h=w,w=m),m=Ix(l,w);var k=Ix(l,h);m&&k&&(o.rangeCount!==1||o.anchorNode!==m.node||o.anchorOffset!==m.offset||o.focusNode!==k.node||o.focusOffset!==k.offset)&&(s=s.createRange(),s.setStart(m.node,m.offset),o.removeAllRanges(),w>h?(o.addRange(s),o.extend(k.node,k.offset)):(s.setEnd(k.node,k.offset),o.addRange(s)))}}for(s=[],o=l;o=o.parentNode;)o.nodeType===1&&s.push({element:o,left:o.scrollLeft,top:o.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)o=s[l],o.element.scrollLeft=o.left,o.element.scrollTop=o.top}}var q8=Ro&&"documentMode"in document&&11>=document.documentMode,is=null,ng=null,Ga=null,og=!1;function Tx(o,s,l){var h=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;og||is==null||is!==Md(h)||(h=is,"selectionStart"in h&&mf(h)?h={start:h.selectionStart,end:h.selectionEnd}:(h=(h.ownerDocument&&h.ownerDocument.defaultView||window).getSelection(),h={anchorNode:h.anchorNode,anchorOffset:h.anchorOffset,focusNode:h.focusNode,focusOffset:h.focusOffset}),Ga&&ac(Ga,h)||(Ga=h,h=zd(ng,"onSelect"),0<h.length&&(s=new uf("onSelect","select",null,s,l),o.push({event:s,listeners:h}),s.target=is)))}function ad(o,s){var l={};return l[o.toLowerCase()]=s.toLowerCase(),l["Webkit"+o]="webkit"+s,l["Moz"+o]="moz"+s,l}var rs={animationend:ad("Animation","AnimationEnd"),animationiteration:ad("Animation","AnimationIteration"),animationstart:ad("Animation","AnimationStart"),transitionend:ad("Transition","TransitionEnd")},cm={},g5={};Ro&&(g5=document.createElement("div").style,"AnimationEvent"in window||(delete rs.animationend.animation,delete rs.animationiteration.animation,delete rs.animationstart.animation),"TransitionEvent"in window||delete rs.transitionend.transition);function gu(o){if(cm[o])return cm[o];if(!rs[o])return o;var s=rs[o],l;for(l in s)if(s.hasOwnProperty(l)&&l in g5)return cm[o]=s[l];return o}var f5=gu("animationend"),k5=gu("animationiteration"),b5=gu("animationstart"),w5=gu("transitionend"),_5=new Map,Mx="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function yi(o,s){_5.set(o,s),ur(s,[o])}for(var lm=0;lm<Mx.length;lm++){var dm=Mx[lm],$8=dm.toLowerCase(),G8=dm[0].toUpperCase()+dm.slice(1);yi($8,"on"+G8)}yi(f5,"onAnimationEnd");yi(k5,"onAnimationIteration");yi(b5,"onAnimationStart");yi("dblclick","onDoubleClick");yi("focusin","onFocus");yi("focusout","onBlur");yi(w5,"onTransitionEnd");As("onMouseEnter",["mouseout","mouseover"]);As("onMouseLeave",["mouseout","mouseover"]);As("onPointerEnter",["pointerout","pointerover"]);As("onPointerLeave",["pointerout","pointerover"]);ur("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));ur("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));ur("onBeforeInput",["compositionend","keypress","textInput","paste"]);ur("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));ur("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),K8=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fa));function Bx(o,s,l){var h=o.type||"unknown-event";o.currentTarget=l,$z(h,s,void 0,o),o.currentTarget=null}function A5(o,s){s=(s&4)!==0;for(var l=0;l<o.length;l++){var h=o[l],m=h.event;h=h.listeners;e:{var w=void 0;if(s)for(var k=h.length-1;0<=k;k--){var A=h[k],b=A.instance,y=A.currentTarget;if(A=A.listener,b!==w&&m.isPropagationStopped())break e;Bx(m,A,y),w=b}else for(k=0;k<h.length;k++){if(A=h[k],b=A.instance,y=A.currentTarget,A=A.listener,b!==w&&m.isPropagationStopped())break e;Bx(m,A,y),w=b}}}if(Nd)throw o=Jm,Nd=!1,Jm=null,o}function Ge(o,s){var l=s[cg];l===void 0&&(l=s[cg]=new Set);var h=o+"__bubble";l.has(h)||(v5(s,o,2,!1),l.add(h))}function um(o,s,l){var h=0;s&&(h|=4),v5(l,o,h,s)}var cd="_reactListening"+Math.random().toString(36).slice(2);function cc(o){if(!o[cd]){o[cd]=!0,IE.forEach(function(l){l!=="selectionchange"&&(K8.has(l)||um(l,!1,o),um(l,!0,o))});var s=o.nodeType===9?o:o.ownerDocument;s===null||s[cd]||(s[cd]=!0,um("selectionchange",!1,s))}}function v5(o,s,l,h){switch(r5(s)){case 1:var m=c8;break;case 4:m=l8;break;default:m=lf}l=m.bind(null,s,l,o),m=void 0,!Zm||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(m=!0),h?m!==void 0?o.addEventListener(s,l,{capture:!0,passive:m}):o.addEventListener(s,l,!0):m!==void 0?o.addEventListener(s,l,{passive:m}):o.addEventListener(s,l,!1)}function hm(o,s,l,h,m){var w=h;if(!(s&1)&&!(s&2)&&h!==null)e:for(;;){if(h===null)return;var k=h.tag;if(k===3||k===4){var A=h.stateNode.containerInfo;if(A===m||A.nodeType===8&&A.parentNode===m)break;if(k===4)for(k=h.return;k!==null;){var b=k.tag;if((b===3||b===4)&&(b=k.stateNode.containerInfo,b===m||b.nodeType===8&&b.parentNode===m))return;k=k.return}for(;A!==null;){if(k=Xi(A),k===null)return;if(b=k.tag,b===5||b===6){h=w=k;continue e}A=A.parentNode}}h=h.return}qE(function(){var y=w,I=rf(l),D=[];e:{var v=_5.get(o);if(v!==void 0){var S=uf,B=o;switch(o){case"keypress":if(vd(l)===0)break e;case"keydown":case"keyup":S=y8;break;case"focusin":B="focus",S=rm;break;case"focusout":B="blur",S=rm;break;case"beforeblur":case"afterblur":S=rm;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":S=_x;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":S=h8;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":S=D8;break;case f5:case k5:case b5:S=g8;break;case w5:S=I8;break;case"scroll":S=d8;break;case"wheel":S=M8;break;case"copy":case"cut":case"paste":S=k8;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":S=vx}var O=(s&4)!==0,R=!O&&o==="scroll",N=O?v!==null?v+"Capture":null:v;O=[];for(var P=y,L;P!==null;){L=P;var V=L.stateNode;if(L.tag===5&&V!==null&&(L=V,N!==null&&(V=nc(P,N),V!=null&&O.push(lc(P,V,L)))),R)break;P=P.return}0<O.length&&(v=new S(v,B,null,l,I),D.push({event:v,listeners:O}))}}if(!(s&7)){e:{if(v=o==="mouseover"||o==="pointerover",S=o==="mouseout"||o==="pointerout",v&&l!==Qm&&(B=l.relatedTarget||l.fromElement)&&(Xi(B)||B[Fo]))break e;if((S||v)&&(v=I.window===I?I:(v=I.ownerDocument)?v.defaultView||v.parentWindow:window,S?(B=l.relatedTarget||l.toElement,S=y,B=B?Xi(B):null,B!==null&&(R=hr(B),B!==R||B.tag!==5&&B.tag!==6)&&(B=null)):(S=null,B=y),S!==B)){if(O=_x,V="onMouseLeave",N="onMouseEnter",P="mouse",(o==="pointerout"||o==="pointerover")&&(O=vx,V="onPointerLeave",N="onPointerEnter",P="pointer"),R=S==null?v:ss(S),L=B==null?v:ss(B),v=new O(V,P+"leave",S,l,I),v.target=R,v.relatedTarget=L,V=null,Xi(I)===y&&(O=new O(N,P+"enter",B,l,I),O.target=L,O.relatedTarget=R,V=O),R=V,S&&B)t:{for(O=S,N=B,P=0,L=O;L;L=es(L))P++;for(L=0,V=N;V;V=es(V))L++;for(;0<P-L;)O=es(O),P--;for(;0<L-P;)N=es(N),L--;for(;P--;){if(O===N||N!==null&&O===N.alternate)break t;O=es(O),N=es(N)}O=null}else O=null;S!==null&&Nx(D,v,S,O,!1),B!==null&&R!==null&&Nx(D,R,B,O,!0)}}e:{if(v=y?ss(y):window,S=v.nodeName&&v.nodeName.toLowerCase(),S==="select"||S==="input"&&v.type==="file")var G=z8;else if(xx(v))if(u5)G=U8;else{G=F8;var Y=R8}else(S=v.nodeName)&&S.toLowerCase()==="input"&&(v.type==="checkbox"||v.type==="radio")&&(G=V8);if(G&&(G=G(o,y))){d5(D,G,l,I);break e}Y&&Y(o,v,y),o==="focusout"&&(Y=v._wrapperState)&&Y.controlled&&v.type==="number"&&Wm(v,"number",v.value)}switch(Y=y?ss(y):window,o){case"focusin":(xx(Y)||Y.contentEditable==="true")&&(is=Y,ng=y,Ga=null);break;case"focusout":Ga=ng=is=null;break;case"mousedown":og=!0;break;case"contextmenu":case"mouseup":case"dragend":og=!1,Tx(D,l,I);break;case"selectionchange":if(q8)break;case"keydown":case"keyup":Tx(D,l,I)}var H;if(pf)e:{switch(o){case"compositionstart":var U="onCompositionStart";break e;case"compositionend":U="onCompositionEnd";break e;case"compositionupdate":U="onCompositionUpdate";break e}U=void 0}else os?c5(o,l)&&(U="onCompositionEnd"):o==="keydown"&&l.keyCode===229&&(U="onCompositionStart");U&&(a5&&l.locale!=="ko"&&(os||U!=="onCompositionStart"?U==="onCompositionEnd"&&os&&(H=s5()):(ci=I,df="value"in ci?ci.value:ci.textContent,os=!0)),Y=zd(y,U),0<Y.length&&(U=new Ax(U,o,null,l,I),D.push({event:U,listeners:Y}),H?U.data=H:(H=l5(l),H!==null&&(U.data=H)))),(H=N8?P8(o,l):j8(o,l))&&(y=zd(y,"onBeforeInput"),0<y.length&&(I=new Ax("onBeforeInput","beforeinput",null,l,I),D.push({event:I,listeners:y}),I.data=H))}A5(D,s)})}function lc(o,s,l){return{instance:o,listener:s,currentTarget:l}}function zd(o,s){for(var l=s+"Capture",h=[];o!==null;){var m=o,w=m.stateNode;m.tag===5&&w!==null&&(m=w,w=nc(o,l),w!=null&&h.unshift(lc(o,w,m)),w=nc(o,s),w!=null&&h.push(lc(o,w,m))),o=o.return}return h}function es(o){if(o===null)return null;do o=o.return;while(o&&o.tag!==5);return o||null}function Nx(o,s,l,h,m){for(var w=s._reactName,k=[];l!==null&&l!==h;){var A=l,b=A.alternate,y=A.stateNode;if(b!==null&&b===h)break;A.tag===5&&y!==null&&(A=y,m?(b=nc(l,w),b!=null&&k.unshift(lc(l,b,A))):m||(b=nc(l,w),b!=null&&k.push(lc(l,b,A)))),l=l.return}k.length!==0&&o.push({event:s,listeners:k})}var Q8=/\r\n?/g,Y8=/\u0000|\uFFFD/g;function Px(o){return(typeof o=="string"?o:""+o).replace(Q8,`
`).replace(Y8,"")}function ld(o,s,l){if(s=Px(s),Px(o)!==s&&l)throw Error(ee(425))}function Rd(){}var ig=null,rg=null;function sg(o,s){return o==="textarea"||o==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var ag=typeof setTimeout=="function"?setTimeout:void 0,Z8=typeof clearTimeout=="function"?clearTimeout:void 0,jx=typeof Promise=="function"?Promise:void 0,J8=typeof queueMicrotask=="function"?queueMicrotask:typeof jx<"u"?function(o){return jx.resolve(null).then(o).catch(X8)}:ag;function X8(o){setTimeout(function(){throw o})}function pm(o,s){var l=s,h=0;do{var m=l.nextSibling;if(o.removeChild(l),m&&m.nodeType===8)if(l=m.data,l==="/$"){if(h===0){o.removeChild(m),rc(s);return}h--}else l!=="$"&&l!=="$?"&&l!=="$!"||h++;l=m}while(l);rc(s)}function mi(o){for(;o!=null;o=o.nextSibling){var s=o.nodeType;if(s===1||s===3)break;if(s===8){if(s=o.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return o}function Ox(o){o=o.previousSibling;for(var s=0;o;){if(o.nodeType===8){var l=o.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return o;s--}else l==="/$"&&s++}o=o.previousSibling}return null}var js=Math.random().toString(36).slice(2),bo="__reactFiber$"+js,dc="__reactProps$"+js,Fo="__reactContainer$"+js,cg="__reactEvents$"+js,eR="__reactListeners$"+js,tR="__reactHandles$"+js;function Xi(o){var s=o[bo];if(s)return s;for(var l=o.parentNode;l;){if(s=l[Fo]||l[bo]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(o=Ox(o);o!==null;){if(l=o[bo])return l;o=Ox(o)}return s}o=l,l=o.parentNode}return null}function Dc(o){return o=o[bo]||o[Fo],!o||o.tag!==5&&o.tag!==6&&o.tag!==13&&o.tag!==3?null:o}function ss(o){if(o.tag===5||o.tag===6)return o.stateNode;throw Error(ee(33))}function fu(o){return o[dc]||null}var lg=[],as=-1;function xi(o){return{current:o}}function Ye(o){0>as||(o.current=lg[as],lg[as]=null,as--)}function We(o,s){as++,lg[as]=o.current,o.current=s}var Ai={},Ot=xi(Ai),Qt=xi(!1),ir=Ai;function vs(o,s){var l=o.type.contextTypes;if(!l)return Ai;var h=o.stateNode;if(h&&h.__reactInternalMemoizedUnmaskedChildContext===s)return h.__reactInternalMemoizedMaskedChildContext;var m={},w;for(w in l)m[w]=s[w];return h&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=s,o.__reactInternalMemoizedMaskedChildContext=m),m}function Yt(o){return o=o.childContextTypes,o!=null}function Fd(){Ye(Qt),Ye(Ot)}function Lx(o,s,l){if(Ot.current!==Ai)throw Error(ee(168));We(Ot,s),We(Qt,l)}function C5(o,s,l){var h=o.stateNode;if(s=s.childContextTypes,typeof h.getChildContext!="function")return l;h=h.getChildContext();for(var m in h)if(!(m in s))throw Error(ee(108,Rz(o)||"Unknown",m));return et({},l,h)}function Vd(o){return o=(o=o.stateNode)&&o.__reactInternalMemoizedMergedChildContext||Ai,ir=Ot.current,We(Ot,o),We(Qt,Qt.current),!0}function zx(o,s,l){var h=o.stateNode;if(!h)throw Error(ee(169));l?(o=C5(o,s,ir),h.__reactInternalMemoizedMergedChildContext=o,Ye(Qt),Ye(Ot),We(Ot,o)):Ye(Qt),We(Qt,l)}var Po=null,ku=!1,mm=!1;function y5(o){Po===null?Po=[o]:Po.push(o)}function nR(o){ku=!0,y5(o)}function Ei(){if(!mm&&Po!==null){mm=!0;var o=0,s=Ne;try{var l=Po;for(Ne=1;o<l.length;o++){var h=l[o];do h=h(!0);while(h!==null)}Po=null,ku=!1}catch(m){throw Po!==null&&(Po=Po.slice(o+1)),QE(sf,Ei),m}finally{Ne=s,mm=!1}}return null}var cs=[],ls=0,Ud=null,Hd=0,jn=[],On=0,rr=null,Oo=1,Lo="";function Yi(o,s){cs[ls++]=Hd,cs[ls++]=Ud,Ud=o,Hd=s}function x5(o,s,l){jn[On++]=Oo,jn[On++]=Lo,jn[On++]=rr,rr=o;var h=Oo;o=Lo;var m=32-oo(h)-1;h&=~(1<<m),l+=1;var w=32-oo(s)+m;if(30<w){var k=m-m%5;w=(h&(1<<k)-1).toString(32),h>>=k,m-=k,Oo=1<<32-oo(s)+m|l<<m|h,Lo=w+o}else Oo=1<<w|l<<m|h,Lo=o}function gf(o){o.return!==null&&(Yi(o,1),x5(o,1,0))}function ff(o){for(;o===Ud;)Ud=cs[--ls],cs[ls]=null,Hd=cs[--ls],cs[ls]=null;for(;o===rr;)rr=jn[--On],jn[On]=null,Lo=jn[--On],jn[On]=null,Oo=jn[--On],jn[On]=null}var gn=null,un=null,Ze=!1,to=null;function E5(o,s){var l=Ln(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=o,s=o.deletions,s===null?(o.deletions=[l],o.flags|=16):s.push(l)}function Rx(o,s){switch(o.tag){case 5:var l=o.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(o.stateNode=s,gn=o,un=mi(s.firstChild),!0):!1;case 6:return s=o.pendingProps===""||s.nodeType!==3?null:s,s!==null?(o.stateNode=s,gn=o,un=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=rr!==null?{id:Oo,overflow:Lo}:null,o.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Ln(18,null,null,0),l.stateNode=s,l.return=o,o.child=l,gn=o,un=null,!0):!1;default:return!1}}function dg(o){return(o.mode&1)!==0&&(o.flags&128)===0}function ug(o){if(Ze){var s=un;if(s){var l=s;if(!Rx(o,s)){if(dg(o))throw Error(ee(418));s=mi(l.nextSibling);var h=gn;s&&Rx(o,s)?E5(h,l):(o.flags=o.flags&-4097|2,Ze=!1,gn=o)}}else{if(dg(o))throw Error(ee(418));o.flags=o.flags&-4097|2,Ze=!1,gn=o}}}function Fx(o){for(o=o.return;o!==null&&o.tag!==5&&o.tag!==3&&o.tag!==13;)o=o.return;gn=o}function dd(o){if(o!==gn)return!1;if(!Ze)return Fx(o),Ze=!0,!1;var s;if((s=o.tag!==3)&&!(s=o.tag!==5)&&(s=o.type,s=s!=="head"&&s!=="body"&&!sg(o.type,o.memoizedProps)),s&&(s=un)){if(dg(o))throw D5(),Error(ee(418));for(;s;)E5(o,s),s=mi(s.nextSibling)}if(Fx(o),o.tag===13){if(o=o.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(ee(317));e:{for(o=o.nextSibling,s=0;o;){if(o.nodeType===8){var l=o.data;if(l==="/$"){if(s===0){un=mi(o.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}o=o.nextSibling}un=null}}else un=gn?mi(o.stateNode.nextSibling):null;return!0}function D5(){for(var o=un;o;)o=mi(o.nextSibling)}function Cs(){un=gn=null,Ze=!1}function kf(o){to===null?to=[o]:to.push(o)}var oR=qo.ReactCurrentBatchConfig;function Na(o,s,l){if(o=l.ref,o!==null&&typeof o!="function"&&typeof o!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(ee(309));var h=l.stateNode}if(!h)throw Error(ee(147,o));var m=h,w=""+o;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===w?s.ref:(s=function(k){var A=m.refs;k===null?delete A[w]:A[w]=k},s._stringRef=w,s)}if(typeof o!="string")throw Error(ee(284));if(!l._owner)throw Error(ee(290,o))}return o}function ud(o,s){throw o=Object.prototype.toString.call(s),Error(ee(31,o==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":o))}function Vx(o){var s=o._init;return s(o._payload)}function S5(o){function s(N,P){if(o){var L=N.deletions;L===null?(N.deletions=[P],N.flags|=16):L.push(P)}}function l(N,P){if(!o)return null;for(;P!==null;)s(N,P),P=P.sibling;return null}function h(N,P){for(N=new Map;P!==null;)P.key!==null?N.set(P.key,P):N.set(P.index,P),P=P.sibling;return N}function m(N,P){return N=bi(N,P),N.index=0,N.sibling=null,N}function w(N,P,L){return N.index=L,o?(L=N.alternate,L!==null?(L=L.index,L<P?(N.flags|=2,P):L):(N.flags|=2,P)):(N.flags|=1048576,P)}function k(N){return o&&N.alternate===null&&(N.flags|=2),N}function A(N,P,L,V){return P===null||P.tag!==6?(P=Am(L,N.mode,V),P.return=N,P):(P=m(P,L),P.return=N,P)}function b(N,P,L,V){var G=L.type;return G===ns?I(N,P,L.props.children,V,L.key):P!==null&&(P.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===ii&&Vx(G)===P.type)?(V=m(P,L.props),V.ref=Na(N,P,L),V.return=N,V):(V=Id(L.type,L.key,L.props,null,N.mode,V),V.ref=Na(N,P,L),V.return=N,V)}function y(N,P,L,V){return P===null||P.tag!==4||P.stateNode.containerInfo!==L.containerInfo||P.stateNode.implementation!==L.implementation?(P=vm(L,N.mode,V),P.return=N,P):(P=m(P,L.children||[]),P.return=N,P)}function I(N,P,L,V,G){return P===null||P.tag!==7?(P=or(L,N.mode,V,G),P.return=N,P):(P=m(P,L),P.return=N,P)}function D(N,P,L){if(typeof P=="string"&&P!==""||typeof P=="number")return P=Am(""+P,N.mode,L),P.return=N,P;if(typeof P=="object"&&P!==null){switch(P.$$typeof){case ed:return L=Id(P.type,P.key,P.props,null,N.mode,L),L.ref=Na(N,null,P),L.return=N,L;case ts:return P=vm(P,N.mode,L),P.return=N,P;case ii:var V=P._init;return D(N,V(P._payload),L)}if(za(P)||Sa(P))return P=or(P,N.mode,L,null),P.return=N,P;ud(N,P)}return null}function v(N,P,L,V){var G=P!==null?P.key:null;if(typeof L=="string"&&L!==""||typeof L=="number")return G!==null?null:A(N,P,""+L,V);if(typeof L=="object"&&L!==null){switch(L.$$typeof){case ed:return L.key===G?b(N,P,L,V):null;case ts:return L.key===G?y(N,P,L,V):null;case ii:return G=L._init,v(N,P,G(L._payload),V)}if(za(L)||Sa(L))return G!==null?null:I(N,P,L,V,null);ud(N,L)}return null}function S(N,P,L,V,G){if(typeof V=="string"&&V!==""||typeof V=="number")return N=N.get(L)||null,A(P,N,""+V,G);if(typeof V=="object"&&V!==null){switch(V.$$typeof){case ed:return N=N.get(V.key===null?L:V.key)||null,b(P,N,V,G);case ts:return N=N.get(V.key===null?L:V.key)||null,y(P,N,V,G);case ii:var Y=V._init;return S(N,P,L,Y(V._payload),G)}if(za(V)||Sa(V))return N=N.get(L)||null,I(P,N,V,G,null);ud(P,V)}return null}function B(N,P,L,V){for(var G=null,Y=null,H=P,U=P=0,j=null;H!==null&&U<L.length;U++){H.index>U?(j=H,H=null):j=H.sibling;var K=v(N,H,L[U],V);if(K===null){H===null&&(H=j);break}o&&H&&K.alternate===null&&s(N,H),P=w(K,P,U),Y===null?G=K:Y.sibling=K,Y=K,H=j}if(U===L.length)return l(N,H),Ze&&Yi(N,U),G;if(H===null){for(;U<L.length;U++)H=D(N,L[U],V),H!==null&&(P=w(H,P,U),Y===null?G=H:Y.sibling=H,Y=H);return Ze&&Yi(N,U),G}for(H=h(N,H);U<L.length;U++)j=S(H,N,U,L[U],V),j!==null&&(o&&j.alternate!==null&&H.delete(j.key===null?U:j.key),P=w(j,P,U),Y===null?G=j:Y.sibling=j,Y=j);return o&&H.forEach(function(re){return s(N,re)}),Ze&&Yi(N,U),G}function O(N,P,L,V){var G=Sa(L);if(typeof G!="function")throw Error(ee(150));if(L=G.call(L),L==null)throw Error(ee(151));for(var Y=G=null,H=P,U=P=0,j=null,K=L.next();H!==null&&!K.done;U++,K=L.next()){H.index>U?(j=H,H=null):j=H.sibling;var re=v(N,H,K.value,V);if(re===null){H===null&&(H=j);break}o&&H&&re.alternate===null&&s(N,H),P=w(re,P,U),Y===null?G=re:Y.sibling=re,Y=re,H=j}if(K.done)return l(N,H),Ze&&Yi(N,U),G;if(H===null){for(;!K.done;U++,K=L.next())K=D(N,K.value,V),K!==null&&(P=w(K,P,U),Y===null?G=K:Y.sibling=K,Y=K);return Ze&&Yi(N,U),G}for(H=h(N,H);!K.done;U++,K=L.next())K=S(H,N,U,K.value,V),K!==null&&(o&&K.alternate!==null&&H.delete(K.key===null?U:K.key),P=w(K,P,U),Y===null?G=K:Y.sibling=K,Y=K);return o&&H.forEach(function(ke){return s(N,ke)}),Ze&&Yi(N,U),G}function R(N,P,L,V){if(typeof L=="object"&&L!==null&&L.type===ns&&L.key===null&&(L=L.props.children),typeof L=="object"&&L!==null){switch(L.$$typeof){case ed:e:{for(var G=L.key,Y=P;Y!==null;){if(Y.key===G){if(G=L.type,G===ns){if(Y.tag===7){l(N,Y.sibling),P=m(Y,L.props.children),P.return=N,N=P;break e}}else if(Y.elementType===G||typeof G=="object"&&G!==null&&G.$$typeof===ii&&Vx(G)===Y.type){l(N,Y.sibling),P=m(Y,L.props),P.ref=Na(N,Y,L),P.return=N,N=P;break e}l(N,Y);break}else s(N,Y);Y=Y.sibling}L.type===ns?(P=or(L.props.children,N.mode,V,L.key),P.return=N,N=P):(V=Id(L.type,L.key,L.props,null,N.mode,V),V.ref=Na(N,P,L),V.return=N,N=V)}return k(N);case ts:e:{for(Y=L.key;P!==null;){if(P.key===Y)if(P.tag===4&&P.stateNode.containerInfo===L.containerInfo&&P.stateNode.implementation===L.implementation){l(N,P.sibling),P=m(P,L.children||[]),P.return=N,N=P;break e}else{l(N,P);break}else s(N,P);P=P.sibling}P=vm(L,N.mode,V),P.return=N,N=P}return k(N);case ii:return Y=L._init,R(N,P,Y(L._payload),V)}if(za(L))return B(N,P,L,V);if(Sa(L))return O(N,P,L,V);ud(N,L)}return typeof L=="string"&&L!==""||typeof L=="number"?(L=""+L,P!==null&&P.tag===6?(l(N,P.sibling),P=m(P,L),P.return=N,N=P):(l(N,P),P=Am(L,N.mode,V),P.return=N,N=P),k(N)):l(N,P)}return R}var ys=S5(!0),I5=S5(!1),Wd=xi(null),qd=null,ds=null,bf=null;function wf(){bf=ds=qd=null}function _f(o){var s=Wd.current;Ye(Wd),o._currentValue=s}function hg(o,s,l){for(;o!==null;){var h=o.alternate;if((o.childLanes&s)!==s?(o.childLanes|=s,h!==null&&(h.childLanes|=s)):h!==null&&(h.childLanes&s)!==s&&(h.childLanes|=s),o===l)break;o=o.return}}function bs(o,s){qd=o,bf=ds=null,o=o.dependencies,o!==null&&o.firstContext!==null&&(o.lanes&s&&(Kt=!0),o.firstContext=null)}function Rn(o){var s=o._currentValue;if(bf!==o)if(o={context:o,memoizedValue:s,next:null},ds===null){if(qd===null)throw Error(ee(308));ds=o,qd.dependencies={lanes:0,firstContext:o}}else ds=ds.next=o;return s}var er=null;function Af(o){er===null?er=[o]:er.push(o)}function T5(o,s,l,h){var m=s.interleaved;return m===null?(l.next=l,Af(s)):(l.next=m.next,m.next=l),s.interleaved=l,Vo(o,h)}function Vo(o,s){o.lanes|=s;var l=o.alternate;for(l!==null&&(l.lanes|=s),l=o,o=o.return;o!==null;)o.childLanes|=s,l=o.alternate,l!==null&&(l.childLanes|=s),l=o,o=o.return;return l.tag===3?l.stateNode:null}var ri=!1;function vf(o){o.updateQueue={baseState:o.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function M5(o,s){o=o.updateQueue,s.updateQueue===o&&(s.updateQueue={baseState:o.baseState,firstBaseUpdate:o.firstBaseUpdate,lastBaseUpdate:o.lastBaseUpdate,shared:o.shared,effects:o.effects})}function zo(o,s){return{eventTime:o,lane:s,tag:0,payload:null,callback:null,next:null}}function gi(o,s,l){var h=o.updateQueue;if(h===null)return null;if(h=h.shared,Ie&2){var m=h.pending;return m===null?s.next=s:(s.next=m.next,m.next=s),h.pending=s,Vo(o,l)}return m=h.interleaved,m===null?(s.next=s,Af(h)):(s.next=m.next,m.next=s),h.interleaved=s,Vo(o,l)}function Cd(o,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var h=s.lanes;h&=o.pendingLanes,l|=h,s.lanes=l,af(o,l)}}function Ux(o,s){var l=o.updateQueue,h=o.alternate;if(h!==null&&(h=h.updateQueue,l===h)){var m=null,w=null;if(l=l.firstBaseUpdate,l!==null){do{var k={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};w===null?m=w=k:w=w.next=k,l=l.next}while(l!==null);w===null?m=w=s:w=w.next=s}else m=w=s;l={baseState:h.baseState,firstBaseUpdate:m,lastBaseUpdate:w,shared:h.shared,effects:h.effects},o.updateQueue=l;return}o=l.lastBaseUpdate,o===null?l.firstBaseUpdate=s:o.next=s,l.lastBaseUpdate=s}function $d(o,s,l,h){var m=o.updateQueue;ri=!1;var w=m.firstBaseUpdate,k=m.lastBaseUpdate,A=m.shared.pending;if(A!==null){m.shared.pending=null;var b=A,y=b.next;b.next=null,k===null?w=y:k.next=y,k=b;var I=o.alternate;I!==null&&(I=I.updateQueue,A=I.lastBaseUpdate,A!==k&&(A===null?I.firstBaseUpdate=y:A.next=y,I.lastBaseUpdate=b))}if(w!==null){var D=m.baseState;k=0,I=y=b=null,A=w;do{var v=A.lane,S=A.eventTime;if((h&v)===v){I!==null&&(I=I.next={eventTime:S,lane:0,tag:A.tag,payload:A.payload,callback:A.callback,next:null});e:{var B=o,O=A;switch(v=s,S=l,O.tag){case 1:if(B=O.payload,typeof B=="function"){D=B.call(S,D,v);break e}D=B;break e;case 3:B.flags=B.flags&-65537|128;case 0:if(B=O.payload,v=typeof B=="function"?B.call(S,D,v):B,v==null)break e;D=et({},D,v);break e;case 2:ri=!0}}A.callback!==null&&A.lane!==0&&(o.flags|=64,v=m.effects,v===null?m.effects=[A]:v.push(A))}else S={eventTime:S,lane:v,tag:A.tag,payload:A.payload,callback:A.callback,next:null},I===null?(y=I=S,b=D):I=I.next=S,k|=v;if(A=A.next,A===null){if(A=m.shared.pending,A===null)break;v=A,A=v.next,v.next=null,m.lastBaseUpdate=v,m.shared.pending=null}}while(!0);if(I===null&&(b=D),m.baseState=b,m.firstBaseUpdate=y,m.lastBaseUpdate=I,s=m.shared.interleaved,s!==null){m=s;do k|=m.lane,m=m.next;while(m!==s)}else w===null&&(m.shared.lanes=0);ar|=k,o.lanes=k,o.memoizedState=D}}function Hx(o,s,l){if(o=s.effects,s.effects=null,o!==null)for(s=0;s<o.length;s++){var h=o[s],m=h.callback;if(m!==null){if(h.callback=null,h=l,typeof m!="function")throw Error(ee(191,m));m.call(h)}}}var Sc={},_o=xi(Sc),uc=xi(Sc),hc=xi(Sc);function tr(o){if(o===Sc)throw Error(ee(174));return o}function Cf(o,s){switch(We(hc,s),We(uc,o),We(_o,Sc),o=s.nodeType,o){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:$m(null,"");break;default:o=o===8?s.parentNode:s,s=o.namespaceURI||null,o=o.tagName,s=$m(s,o)}Ye(_o),We(_o,s)}function xs(){Ye(_o),Ye(uc),Ye(hc)}function B5(o){tr(hc.current);var s=tr(_o.current),l=$m(s,o.type);s!==l&&(We(uc,o),We(_o,l))}function yf(o){uc.current===o&&(Ye(_o),Ye(uc))}var Je=xi(0);function Gd(o){for(var s=o;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if(s.flags&128)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===o)break;for(;s.sibling===null;){if(s.return===null||s.return===o)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var gm=[];function xf(){for(var o=0;o<gm.length;o++)gm[o]._workInProgressVersionPrimary=null;gm.length=0}var yd=qo.ReactCurrentDispatcher,fm=qo.ReactCurrentBatchConfig,sr=0,Xe=null,kt=null,Ct=null,Kd=!1,Ka=!1,pc=0,iR=0;function Bt(){throw Error(ee(321))}function Ef(o,s){if(s===null)return!1;for(var l=0;l<s.length&&l<o.length;l++)if(!ro(o[l],s[l]))return!1;return!0}function Df(o,s,l,h,m,w){if(sr=w,Xe=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,yd.current=o===null||o.memoizedState===null?cR:lR,o=l(h,m),Ka){w=0;do{if(Ka=!1,pc=0,25<=w)throw Error(ee(301));w+=1,Ct=kt=null,s.updateQueue=null,yd.current=dR,o=l(h,m)}while(Ka)}if(yd.current=Qd,s=kt!==null&&kt.next!==null,sr=0,Ct=kt=Xe=null,Kd=!1,s)throw Error(ee(300));return o}function Sf(){var o=pc!==0;return pc=0,o}function ko(){var o={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ct===null?Xe.memoizedState=Ct=o:Ct=Ct.next=o,Ct}function Fn(){if(kt===null){var o=Xe.alternate;o=o!==null?o.memoizedState:null}else o=kt.next;var s=Ct===null?Xe.memoizedState:Ct.next;if(s!==null)Ct=s,kt=o;else{if(o===null)throw Error(ee(310));kt=o,o={memoizedState:kt.memoizedState,baseState:kt.baseState,baseQueue:kt.baseQueue,queue:kt.queue,next:null},Ct===null?Xe.memoizedState=Ct=o:Ct=Ct.next=o}return Ct}function mc(o,s){return typeof s=="function"?s(o):s}function km(o){var s=Fn(),l=s.queue;if(l===null)throw Error(ee(311));l.lastRenderedReducer=o;var h=kt,m=h.baseQueue,w=l.pending;if(w!==null){if(m!==null){var k=m.next;m.next=w.next,w.next=k}h.baseQueue=m=w,l.pending=null}if(m!==null){w=m.next,h=h.baseState;var A=k=null,b=null,y=w;do{var I=y.lane;if((sr&I)===I)b!==null&&(b=b.next={lane:0,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null}),h=y.hasEagerState?y.eagerState:o(h,y.action);else{var D={lane:I,action:y.action,hasEagerState:y.hasEagerState,eagerState:y.eagerState,next:null};b===null?(A=b=D,k=h):b=b.next=D,Xe.lanes|=I,ar|=I}y=y.next}while(y!==null&&y!==w);b===null?k=h:b.next=A,ro(h,s.memoizedState)||(Kt=!0),s.memoizedState=h,s.baseState=k,s.baseQueue=b,l.lastRenderedState=h}if(o=l.interleaved,o!==null){m=o;do w=m.lane,Xe.lanes|=w,ar|=w,m=m.next;while(m!==o)}else m===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function bm(o){var s=Fn(),l=s.queue;if(l===null)throw Error(ee(311));l.lastRenderedReducer=o;var h=l.dispatch,m=l.pending,w=s.memoizedState;if(m!==null){l.pending=null;var k=m=m.next;do w=o(w,k.action),k=k.next;while(k!==m);ro(w,s.memoizedState)||(Kt=!0),s.memoizedState=w,s.baseQueue===null&&(s.baseState=w),l.lastRenderedState=w}return[w,h]}function N5(){}function P5(o,s){var l=Xe,h=Fn(),m=s(),w=!ro(h.memoizedState,m);if(w&&(h.memoizedState=m,Kt=!0),h=h.queue,If(L5.bind(null,l,h,o),[o]),h.getSnapshot!==s||w||Ct!==null&&Ct.memoizedState.tag&1){if(l.flags|=2048,gc(9,O5.bind(null,l,h,m,s),void 0,null),yt===null)throw Error(ee(349));sr&30||j5(l,s,m)}return m}function j5(o,s,l){o.flags|=16384,o={getSnapshot:s,value:l},s=Xe.updateQueue,s===null?(s={lastEffect:null,stores:null},Xe.updateQueue=s,s.stores=[o]):(l=s.stores,l===null?s.stores=[o]:l.push(o))}function O5(o,s,l,h){s.value=l,s.getSnapshot=h,z5(s)&&R5(o)}function L5(o,s,l){return l(function(){z5(s)&&R5(o)})}function z5(o){var s=o.getSnapshot;o=o.value;try{var l=s();return!ro(o,l)}catch{return!0}}function R5(o){var s=Vo(o,1);s!==null&&io(s,o,1,-1)}function Wx(o){var s=ko();return typeof o=="function"&&(o=o()),s.memoizedState=s.baseState=o,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:mc,lastRenderedState:o},s.queue=o,o=o.dispatch=aR.bind(null,Xe,o),[s.memoizedState,o]}function gc(o,s,l,h){return o={tag:o,create:s,destroy:l,deps:h,next:null},s=Xe.updateQueue,s===null?(s={lastEffect:null,stores:null},Xe.updateQueue=s,s.lastEffect=o.next=o):(l=s.lastEffect,l===null?s.lastEffect=o.next=o:(h=l.next,l.next=o,o.next=h,s.lastEffect=o)),o}function F5(){return Fn().memoizedState}function xd(o,s,l,h){var m=ko();Xe.flags|=o,m.memoizedState=gc(1|s,l,void 0,h===void 0?null:h)}function bu(o,s,l,h){var m=Fn();h=h===void 0?null:h;var w=void 0;if(kt!==null){var k=kt.memoizedState;if(w=k.destroy,h!==null&&Ef(h,k.deps)){m.memoizedState=gc(s,l,w,h);return}}Xe.flags|=o,m.memoizedState=gc(1|s,l,w,h)}function qx(o,s){return xd(8390656,8,o,s)}function If(o,s){return bu(2048,8,o,s)}function V5(o,s){return bu(4,2,o,s)}function U5(o,s){return bu(4,4,o,s)}function H5(o,s){if(typeof s=="function")return o=o(),s(o),function(){s(null)};if(s!=null)return o=o(),s.current=o,function(){s.current=null}}function W5(o,s,l){return l=l!=null?l.concat([o]):null,bu(4,4,H5.bind(null,s,o),l)}function Tf(){}function q5(o,s){var l=Fn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&Ef(s,h[1])?h[0]:(l.memoizedState=[o,s],o)}function $5(o,s){var l=Fn();s=s===void 0?null:s;var h=l.memoizedState;return h!==null&&s!==null&&Ef(s,h[1])?h[0]:(o=o(),l.memoizedState=[o,s],o)}function G5(o,s,l){return sr&21?(ro(l,s)||(l=JE(),Xe.lanes|=l,ar|=l,o.baseState=!0),s):(o.baseState&&(o.baseState=!1,Kt=!0),o.memoizedState=l)}function rR(o,s){var l=Ne;Ne=l!==0&&4>l?l:4,o(!0);var h=fm.transition;fm.transition={};try{o(!1),s()}finally{Ne=l,fm.transition=h}}function K5(){return Fn().memoizedState}function sR(o,s,l){var h=ki(o);if(l={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null},Q5(o))Y5(s,l);else if(l=T5(o,s,l,h),l!==null){var m=Rt();io(l,o,h,m),Z5(l,s,h)}}function aR(o,s,l){var h=ki(o),m={lane:h,action:l,hasEagerState:!1,eagerState:null,next:null};if(Q5(o))Y5(s,m);else{var w=o.alternate;if(o.lanes===0&&(w===null||w.lanes===0)&&(w=s.lastRenderedReducer,w!==null))try{var k=s.lastRenderedState,A=w(k,l);if(m.hasEagerState=!0,m.eagerState=A,ro(A,k)){var b=s.interleaved;b===null?(m.next=m,Af(s)):(m.next=b.next,b.next=m),s.interleaved=m;return}}catch{}finally{}l=T5(o,s,m,h),l!==null&&(m=Rt(),io(l,o,h,m),Z5(l,s,h))}}function Q5(o){var s=o.alternate;return o===Xe||s!==null&&s===Xe}function Y5(o,s){Ka=Kd=!0;var l=o.pending;l===null?s.next=s:(s.next=l.next,l.next=s),o.pending=s}function Z5(o,s,l){if(l&4194240){var h=s.lanes;h&=o.pendingLanes,l|=h,s.lanes=l,af(o,l)}}var Qd={readContext:Rn,useCallback:Bt,useContext:Bt,useEffect:Bt,useImperativeHandle:Bt,useInsertionEffect:Bt,useLayoutEffect:Bt,useMemo:Bt,useReducer:Bt,useRef:Bt,useState:Bt,useDebugValue:Bt,useDeferredValue:Bt,useTransition:Bt,useMutableSource:Bt,useSyncExternalStore:Bt,useId:Bt,unstable_isNewReconciler:!1},cR={readContext:Rn,useCallback:function(o,s){return ko().memoizedState=[o,s===void 0?null:s],o},useContext:Rn,useEffect:qx,useImperativeHandle:function(o,s,l){return l=l!=null?l.concat([o]):null,xd(4194308,4,H5.bind(null,s,o),l)},useLayoutEffect:function(o,s){return xd(4194308,4,o,s)},useInsertionEffect:function(o,s){return xd(4,2,o,s)},useMemo:function(o,s){var l=ko();return s=s===void 0?null:s,o=o(),l.memoizedState=[o,s],o},useReducer:function(o,s,l){var h=ko();return s=l!==void 0?l(s):s,h.memoizedState=h.baseState=s,o={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:o,lastRenderedState:s},h.queue=o,o=o.dispatch=sR.bind(null,Xe,o),[h.memoizedState,o]},useRef:function(o){var s=ko();return o={current:o},s.memoizedState=o},useState:Wx,useDebugValue:Tf,useDeferredValue:function(o){return ko().memoizedState=o},useTransition:function(){var o=Wx(!1),s=o[0];return o=rR.bind(null,o[1]),ko().memoizedState=o,[s,o]},useMutableSource:function(){},useSyncExternalStore:function(o,s,l){var h=Xe,m=ko();if(Ze){if(l===void 0)throw Error(ee(407));l=l()}else{if(l=s(),yt===null)throw Error(ee(349));sr&30||j5(h,s,l)}m.memoizedState=l;var w={value:l,getSnapshot:s};return m.queue=w,qx(L5.bind(null,h,w,o),[o]),h.flags|=2048,gc(9,O5.bind(null,h,w,l,s),void 0,null),l},useId:function(){var o=ko(),s=yt.identifierPrefix;if(Ze){var l=Lo,h=Oo;l=(h&~(1<<32-oo(h)-1)).toString(32)+l,s=":"+s+"R"+l,l=pc++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=iR++,s=":"+s+"r"+l.toString(32)+":";return o.memoizedState=s},unstable_isNewReconciler:!1},lR={readContext:Rn,useCallback:q5,useContext:Rn,useEffect:If,useImperativeHandle:W5,useInsertionEffect:V5,useLayoutEffect:U5,useMemo:$5,useReducer:km,useRef:F5,useState:function(){return km(mc)},useDebugValue:Tf,useDeferredValue:function(o){var s=Fn();return G5(s,kt.memoizedState,o)},useTransition:function(){var o=km(mc)[0],s=Fn().memoizedState;return[o,s]},useMutableSource:N5,useSyncExternalStore:P5,useId:K5,unstable_isNewReconciler:!1},dR={readContext:Rn,useCallback:q5,useContext:Rn,useEffect:If,useImperativeHandle:W5,useInsertionEffect:V5,useLayoutEffect:U5,useMemo:$5,useReducer:bm,useRef:F5,useState:function(){return bm(mc)},useDebugValue:Tf,useDeferredValue:function(o){var s=Fn();return kt===null?s.memoizedState=o:G5(s,kt.memoizedState,o)},useTransition:function(){var o=bm(mc)[0],s=Fn().memoizedState;return[o,s]},useMutableSource:N5,useSyncExternalStore:P5,useId:K5,unstable_isNewReconciler:!1};function Xn(o,s){if(o&&o.defaultProps){s=et({},s),o=o.defaultProps;for(var l in o)s[l]===void 0&&(s[l]=o[l]);return s}return s}function pg(o,s,l,h){s=o.memoizedState,l=l(h,s),l=l==null?s:et({},s,l),o.memoizedState=l,o.lanes===0&&(o.updateQueue.baseState=l)}var wu={isMounted:function(o){return(o=o._reactInternals)?hr(o)===o:!1},enqueueSetState:function(o,s,l){o=o._reactInternals;var h=Rt(),m=ki(o),w=zo(h,m);w.payload=s,l!=null&&(w.callback=l),s=gi(o,w,m),s!==null&&(io(s,o,m,h),Cd(s,o,m))},enqueueReplaceState:function(o,s,l){o=o._reactInternals;var h=Rt(),m=ki(o),w=zo(h,m);w.tag=1,w.payload=s,l!=null&&(w.callback=l),s=gi(o,w,m),s!==null&&(io(s,o,m,h),Cd(s,o,m))},enqueueForceUpdate:function(o,s){o=o._reactInternals;var l=Rt(),h=ki(o),m=zo(l,h);m.tag=2,s!=null&&(m.callback=s),s=gi(o,m,h),s!==null&&(io(s,o,h,l),Cd(s,o,h))}};function $x(o,s,l,h,m,w,k){return o=o.stateNode,typeof o.shouldComponentUpdate=="function"?o.shouldComponentUpdate(h,w,k):s.prototype&&s.prototype.isPureReactComponent?!ac(l,h)||!ac(m,w):!0}function J5(o,s,l){var h=!1,m=Ai,w=s.contextType;return typeof w=="object"&&w!==null?w=Rn(w):(m=Yt(s)?ir:Ot.current,h=s.contextTypes,w=(h=h!=null)?vs(o,m):Ai),s=new s(l,w),o.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=wu,o.stateNode=s,s._reactInternals=o,h&&(o=o.stateNode,o.__reactInternalMemoizedUnmaskedChildContext=m,o.__reactInternalMemoizedMaskedChildContext=w),s}function Gx(o,s,l,h){o=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,h),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,h),s.state!==o&&wu.enqueueReplaceState(s,s.state,null)}function mg(o,s,l,h){var m=o.stateNode;m.props=l,m.state=o.memoizedState,m.refs={},vf(o);var w=s.contextType;typeof w=="object"&&w!==null?m.context=Rn(w):(w=Yt(s)?ir:Ot.current,m.context=vs(o,w)),m.state=o.memoizedState,w=s.getDerivedStateFromProps,typeof w=="function"&&(pg(o,s,w,l),m.state=o.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof m.getSnapshotBeforeUpdate=="function"||typeof m.UNSAFE_componentWillMount!="function"&&typeof m.componentWillMount!="function"||(s=m.state,typeof m.componentWillMount=="function"&&m.componentWillMount(),typeof m.UNSAFE_componentWillMount=="function"&&m.UNSAFE_componentWillMount(),s!==m.state&&wu.enqueueReplaceState(m,m.state,null),$d(o,l,m,h),m.state=o.memoizedState),typeof m.componentDidMount=="function"&&(o.flags|=4194308)}function Es(o,s){try{var l="",h=s;do l+=zz(h),h=h.return;while(h);var m=l}catch(w){m=`
Error generating stack: `+w.message+`
`+w.stack}return{value:o,source:s,stack:m,digest:null}}function wm(o,s,l){return{value:o,source:null,stack:l??null,digest:s??null}}function gg(o,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var uR=typeof WeakMap=="function"?WeakMap:Map;function X5(o,s,l){l=zo(-1,l),l.tag=3,l.payload={element:null};var h=s.value;return l.callback=function(){Zd||(Zd=!0,xg=h),gg(o,s)},l}function eD(o,s,l){l=zo(-1,l),l.tag=3;var h=o.type.getDerivedStateFromError;if(typeof h=="function"){var m=s.value;l.payload=function(){return h(m)},l.callback=function(){gg(o,s)}}var w=o.stateNode;return w!==null&&typeof w.componentDidCatch=="function"&&(l.callback=function(){gg(o,s),typeof h!="function"&&(fi===null?fi=new Set([this]):fi.add(this));var k=s.stack;this.componentDidCatch(s.value,{componentStack:k!==null?k:""})}),l}function Kx(o,s,l){var h=o.pingCache;if(h===null){h=o.pingCache=new uR;var m=new Set;h.set(s,m)}else m=h.get(s),m===void 0&&(m=new Set,h.set(s,m));m.has(l)||(m.add(l),o=xR.bind(null,o,s,l),s.then(o,o))}function Qx(o){do{var s;if((s=o.tag===13)&&(s=o.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return o;o=o.return}while(o!==null);return null}function Yx(o,s,l,h,m){return o.mode&1?(o.flags|=65536,o.lanes=m,o):(o===s?o.flags|=65536:(o.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=zo(-1,1),s.tag=2,gi(l,s,1))),l.lanes|=1),o)}var hR=qo.ReactCurrentOwner,Kt=!1;function zt(o,s,l,h){s.child=o===null?I5(s,null,l,h):ys(s,o.child,l,h)}function Zx(o,s,l,h,m){l=l.render;var w=s.ref;return bs(s,m),h=Df(o,s,l,h,w,m),l=Sf(),o!==null&&!Kt?(s.updateQueue=o.updateQueue,s.flags&=-2053,o.lanes&=~m,Uo(o,s,m)):(Ze&&l&&gf(s),s.flags|=1,zt(o,s,h,m),s.child)}function Jx(o,s,l,h,m){if(o===null){var w=l.type;return typeof w=="function"&&!zf(w)&&w.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=w,tD(o,s,w,h,m)):(o=Id(l.type,null,h,s,s.mode,m),o.ref=s.ref,o.return=s,s.child=o)}if(w=o.child,!(o.lanes&m)){var k=w.memoizedProps;if(l=l.compare,l=l!==null?l:ac,l(k,h)&&o.ref===s.ref)return Uo(o,s,m)}return s.flags|=1,o=bi(w,h),o.ref=s.ref,o.return=s,s.child=o}function tD(o,s,l,h,m){if(o!==null){var w=o.memoizedProps;if(ac(w,h)&&o.ref===s.ref)if(Kt=!1,s.pendingProps=h=w,(o.lanes&m)!==0)o.flags&131072&&(Kt=!0);else return s.lanes=o.lanes,Uo(o,s,m)}return fg(o,s,l,h,m)}function nD(o,s,l){var h=s.pendingProps,m=h.children,w=o!==null?o.memoizedState:null;if(h.mode==="hidden")if(!(s.mode&1))s.memoizedState={baseLanes:0,cachePool:null,transitions:null},We(hs,dn),dn|=l;else{if(!(l&1073741824))return o=w!==null?w.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:o,cachePool:null,transitions:null},s.updateQueue=null,We(hs,dn),dn|=o,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},h=w!==null?w.baseLanes:l,We(hs,dn),dn|=h}else w!==null?(h=w.baseLanes|l,s.memoizedState=null):h=l,We(hs,dn),dn|=h;return zt(o,s,m,l),s.child}function oD(o,s){var l=s.ref;(o===null&&l!==null||o!==null&&o.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function fg(o,s,l,h,m){var w=Yt(l)?ir:Ot.current;return w=vs(s,w),bs(s,m),l=Df(o,s,l,h,w,m),h=Sf(),o!==null&&!Kt?(s.updateQueue=o.updateQueue,s.flags&=-2053,o.lanes&=~m,Uo(o,s,m)):(Ze&&h&&gf(s),s.flags|=1,zt(o,s,l,m),s.child)}function Xx(o,s,l,h,m){if(Yt(l)){var w=!0;Vd(s)}else w=!1;if(bs(s,m),s.stateNode===null)Ed(o,s),J5(s,l,h),mg(s,l,h,m),h=!0;else if(o===null){var k=s.stateNode,A=s.memoizedProps;k.props=A;var b=k.context,y=l.contextType;typeof y=="object"&&y!==null?y=Rn(y):(y=Yt(l)?ir:Ot.current,y=vs(s,y));var I=l.getDerivedStateFromProps,D=typeof I=="function"||typeof k.getSnapshotBeforeUpdate=="function";D||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(A!==h||b!==y)&&Gx(s,k,h,y),ri=!1;var v=s.memoizedState;k.state=v,$d(s,h,k,m),b=s.memoizedState,A!==h||v!==b||Qt.current||ri?(typeof I=="function"&&(pg(s,l,I,h),b=s.memoizedState),(A=ri||$x(s,l,A,h,v,b,y))?(D||typeof k.UNSAFE_componentWillMount!="function"&&typeof k.componentWillMount!="function"||(typeof k.componentWillMount=="function"&&k.componentWillMount(),typeof k.UNSAFE_componentWillMount=="function"&&k.UNSAFE_componentWillMount()),typeof k.componentDidMount=="function"&&(s.flags|=4194308)):(typeof k.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=h,s.memoizedState=b),k.props=h,k.state=b,k.context=y,h=A):(typeof k.componentDidMount=="function"&&(s.flags|=4194308),h=!1)}else{k=s.stateNode,M5(o,s),A=s.memoizedProps,y=s.type===s.elementType?A:Xn(s.type,A),k.props=y,D=s.pendingProps,v=k.context,b=l.contextType,typeof b=="object"&&b!==null?b=Rn(b):(b=Yt(l)?ir:Ot.current,b=vs(s,b));var S=l.getDerivedStateFromProps;(I=typeof S=="function"||typeof k.getSnapshotBeforeUpdate=="function")||typeof k.UNSAFE_componentWillReceiveProps!="function"&&typeof k.componentWillReceiveProps!="function"||(A!==D||v!==b)&&Gx(s,k,h,b),ri=!1,v=s.memoizedState,k.state=v,$d(s,h,k,m);var B=s.memoizedState;A!==D||v!==B||Qt.current||ri?(typeof S=="function"&&(pg(s,l,S,h),B=s.memoizedState),(y=ri||$x(s,l,y,h,v,B,b)||!1)?(I||typeof k.UNSAFE_componentWillUpdate!="function"&&typeof k.componentWillUpdate!="function"||(typeof k.componentWillUpdate=="function"&&k.componentWillUpdate(h,B,b),typeof k.UNSAFE_componentWillUpdate=="function"&&k.UNSAFE_componentWillUpdate(h,B,b)),typeof k.componentDidUpdate=="function"&&(s.flags|=4),typeof k.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof k.componentDidUpdate!="function"||A===o.memoizedProps&&v===o.memoizedState||(s.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||A===o.memoizedProps&&v===o.memoizedState||(s.flags|=1024),s.memoizedProps=h,s.memoizedState=B),k.props=h,k.state=B,k.context=b,h=y):(typeof k.componentDidUpdate!="function"||A===o.memoizedProps&&v===o.memoizedState||(s.flags|=4),typeof k.getSnapshotBeforeUpdate!="function"||A===o.memoizedProps&&v===o.memoizedState||(s.flags|=1024),h=!1)}return kg(o,s,l,h,w,m)}function kg(o,s,l,h,m,w){oD(o,s);var k=(s.flags&128)!==0;if(!h&&!k)return m&&zx(s,l,!1),Uo(o,s,w);h=s.stateNode,hR.current=s;var A=k&&typeof l.getDerivedStateFromError!="function"?null:h.render();return s.flags|=1,o!==null&&k?(s.child=ys(s,o.child,null,w),s.child=ys(s,null,A,w)):zt(o,s,A,w),s.memoizedState=h.state,m&&zx(s,l,!0),s.child}function iD(o){var s=o.stateNode;s.pendingContext?Lx(o,s.pendingContext,s.pendingContext!==s.context):s.context&&Lx(o,s.context,!1),Cf(o,s.containerInfo)}function e2(o,s,l,h,m){return Cs(),kf(m),s.flags|=256,zt(o,s,l,h),s.child}var bg={dehydrated:null,treeContext:null,retryLane:0};function wg(o){return{baseLanes:o,cachePool:null,transitions:null}}function rD(o,s,l){var h=s.pendingProps,m=Je.current,w=!1,k=(s.flags&128)!==0,A;if((A=k)||(A=o!==null&&o.memoizedState===null?!1:(m&2)!==0),A?(w=!0,s.flags&=-129):(o===null||o.memoizedState!==null)&&(m|=1),We(Je,m&1),o===null)return ug(s),o=s.memoizedState,o!==null&&(o=o.dehydrated,o!==null)?(s.mode&1?o.data==="$!"?s.lanes=8:s.lanes=1073741824:s.lanes=1,null):(k=h.children,o=h.fallback,w?(h=s.mode,w=s.child,k={mode:"hidden",children:k},!(h&1)&&w!==null?(w.childLanes=0,w.pendingProps=k):w=vu(k,h,0,null),o=or(o,h,l,null),w.return=s,o.return=s,w.sibling=o,s.child=w,s.child.memoizedState=wg(l),s.memoizedState=bg,o):Mf(s,k));if(m=o.memoizedState,m!==null&&(A=m.dehydrated,A!==null))return pR(o,s,k,h,A,m,l);if(w){w=h.fallback,k=s.mode,m=o.child,A=m.sibling;var b={mode:"hidden",children:h.children};return!(k&1)&&s.child!==m?(h=s.child,h.childLanes=0,h.pendingProps=b,s.deletions=null):(h=bi(m,b),h.subtreeFlags=m.subtreeFlags&14680064),A!==null?w=bi(A,w):(w=or(w,k,l,null),w.flags|=2),w.return=s,h.return=s,h.sibling=w,s.child=h,h=w,w=s.child,k=o.child.memoizedState,k=k===null?wg(l):{baseLanes:k.baseLanes|l,cachePool:null,transitions:k.transitions},w.memoizedState=k,w.childLanes=o.childLanes&~l,s.memoizedState=bg,h}return w=o.child,o=w.sibling,h=bi(w,{mode:"visible",children:h.children}),!(s.mode&1)&&(h.lanes=l),h.return=s,h.sibling=null,o!==null&&(l=s.deletions,l===null?(s.deletions=[o],s.flags|=16):l.push(o)),s.child=h,s.memoizedState=null,h}function Mf(o,s){return s=vu({mode:"visible",children:s},o.mode,0,null),s.return=o,o.child=s}function hd(o,s,l,h){return h!==null&&kf(h),ys(s,o.child,null,l),o=Mf(s,s.pendingProps.children),o.flags|=2,s.memoizedState=null,o}function pR(o,s,l,h,m,w,k){if(l)return s.flags&256?(s.flags&=-257,h=wm(Error(ee(422))),hd(o,s,k,h)):s.memoizedState!==null?(s.child=o.child,s.flags|=128,null):(w=h.fallback,m=s.mode,h=vu({mode:"visible",children:h.children},m,0,null),w=or(w,m,k,null),w.flags|=2,h.return=s,w.return=s,h.sibling=w,s.child=h,s.mode&1&&ys(s,o.child,null,k),s.child.memoizedState=wg(k),s.memoizedState=bg,w);if(!(s.mode&1))return hd(o,s,k,null);if(m.data==="$!"){if(h=m.nextSibling&&m.nextSibling.dataset,h)var A=h.dgst;return h=A,w=Error(ee(419)),h=wm(w,h,void 0),hd(o,s,k,h)}if(A=(k&o.childLanes)!==0,Kt||A){if(h=yt,h!==null){switch(k&-k){case 4:m=2;break;case 16:m=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:m=32;break;case 536870912:m=268435456;break;default:m=0}m=m&(h.suspendedLanes|k)?0:m,m!==0&&m!==w.retryLane&&(w.retryLane=m,Vo(o,m),io(h,o,m,-1))}return Lf(),h=wm(Error(ee(421))),hd(o,s,k,h)}return m.data==="$?"?(s.flags|=128,s.child=o.child,s=ER.bind(null,o),m._reactRetry=s,null):(o=w.treeContext,un=mi(m.nextSibling),gn=s,Ze=!0,to=null,o!==null&&(jn[On++]=Oo,jn[On++]=Lo,jn[On++]=rr,Oo=o.id,Lo=o.overflow,rr=s),s=Mf(s,h.children),s.flags|=4096,s)}function t2(o,s,l){o.lanes|=s;var h=o.alternate;h!==null&&(h.lanes|=s),hg(o.return,s,l)}function _m(o,s,l,h,m){var w=o.memoizedState;w===null?o.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:h,tail:l,tailMode:m}:(w.isBackwards=s,w.rendering=null,w.renderingStartTime=0,w.last=h,w.tail=l,w.tailMode=m)}function sD(o,s,l){var h=s.pendingProps,m=h.revealOrder,w=h.tail;if(zt(o,s,h.children,l),h=Je.current,h&2)h=h&1|2,s.flags|=128;else{if(o!==null&&o.flags&128)e:for(o=s.child;o!==null;){if(o.tag===13)o.memoizedState!==null&&t2(o,l,s);else if(o.tag===19)t2(o,l,s);else if(o.child!==null){o.child.return=o,o=o.child;continue}if(o===s)break e;for(;o.sibling===null;){if(o.return===null||o.return===s)break e;o=o.return}o.sibling.return=o.return,o=o.sibling}h&=1}if(We(Je,h),!(s.mode&1))s.memoizedState=null;else switch(m){case"forwards":for(l=s.child,m=null;l!==null;)o=l.alternate,o!==null&&Gd(o)===null&&(m=l),l=l.sibling;l=m,l===null?(m=s.child,s.child=null):(m=l.sibling,l.sibling=null),_m(s,!1,m,l,w);break;case"backwards":for(l=null,m=s.child,s.child=null;m!==null;){if(o=m.alternate,o!==null&&Gd(o)===null){s.child=m;break}o=m.sibling,m.sibling=l,l=m,m=o}_m(s,!0,l,null,w);break;case"together":_m(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function Ed(o,s){!(s.mode&1)&&o!==null&&(o.alternate=null,s.alternate=null,s.flags|=2)}function Uo(o,s,l){if(o!==null&&(s.dependencies=o.dependencies),ar|=s.lanes,!(l&s.childLanes))return null;if(o!==null&&s.child!==o.child)throw Error(ee(153));if(s.child!==null){for(o=s.child,l=bi(o,o.pendingProps),s.child=l,l.return=s;o.sibling!==null;)o=o.sibling,l=l.sibling=bi(o,o.pendingProps),l.return=s;l.sibling=null}return s.child}function mR(o,s,l){switch(s.tag){case 3:iD(s),Cs();break;case 5:B5(s);break;case 1:Yt(s.type)&&Vd(s);break;case 4:Cf(s,s.stateNode.containerInfo);break;case 10:var h=s.type._context,m=s.memoizedProps.value;We(Wd,h._currentValue),h._currentValue=m;break;case 13:if(h=s.memoizedState,h!==null)return h.dehydrated!==null?(We(Je,Je.current&1),s.flags|=128,null):l&s.child.childLanes?rD(o,s,l):(We(Je,Je.current&1),o=Uo(o,s,l),o!==null?o.sibling:null);We(Je,Je.current&1);break;case 19:if(h=(l&s.childLanes)!==0,o.flags&128){if(h)return sD(o,s,l);s.flags|=128}if(m=s.memoizedState,m!==null&&(m.rendering=null,m.tail=null,m.lastEffect=null),We(Je,Je.current),h)break;return null;case 22:case 23:return s.lanes=0,nD(o,s,l)}return Uo(o,s,l)}var aD,_g,cD,lD;aD=function(o,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)o.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}};_g=function(){};cD=function(o,s,l,h){var m=o.memoizedProps;if(m!==h){o=s.stateNode,tr(_o.current);var w=null;switch(l){case"input":m=Um(o,m),h=Um(o,h),w=[];break;case"select":m=et({},m,{value:void 0}),h=et({},h,{value:void 0}),w=[];break;case"textarea":m=qm(o,m),h=qm(o,h),w=[];break;default:typeof m.onClick!="function"&&typeof h.onClick=="function"&&(o.onclick=Rd)}Gm(l,h);var k;l=null;for(y in m)if(!h.hasOwnProperty(y)&&m.hasOwnProperty(y)&&m[y]!=null)if(y==="style"){var A=m[y];for(k in A)A.hasOwnProperty(k)&&(l||(l={}),l[k]="")}else y!=="dangerouslySetInnerHTML"&&y!=="children"&&y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&y!=="autoFocus"&&(ec.hasOwnProperty(y)?w||(w=[]):(w=w||[]).push(y,null));for(y in h){var b=h[y];if(A=m!=null?m[y]:void 0,h.hasOwnProperty(y)&&b!==A&&(b!=null||A!=null))if(y==="style")if(A){for(k in A)!A.hasOwnProperty(k)||b&&b.hasOwnProperty(k)||(l||(l={}),l[k]="");for(k in b)b.hasOwnProperty(k)&&A[k]!==b[k]&&(l||(l={}),l[k]=b[k])}else l||(w||(w=[]),w.push(y,l)),l=b;else y==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,A=A?A.__html:void 0,b!=null&&A!==b&&(w=w||[]).push(y,b)):y==="children"?typeof b!="string"&&typeof b!="number"||(w=w||[]).push(y,""+b):y!=="suppressContentEditableWarning"&&y!=="suppressHydrationWarning"&&(ec.hasOwnProperty(y)?(b!=null&&y==="onScroll"&&Ge("scroll",o),w||A===b||(w=[])):(w=w||[]).push(y,b))}l&&(w=w||[]).push("style",l);var y=w;(s.updateQueue=y)&&(s.flags|=4)}};lD=function(o,s,l,h){l!==h&&(s.flags|=4)};function Pa(o,s){if(!Ze)switch(o.tailMode){case"hidden":s=o.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?o.tail=null:l.sibling=null;break;case"collapsed":l=o.tail;for(var h=null;l!==null;)l.alternate!==null&&(h=l),l=l.sibling;h===null?s||o.tail===null?o.tail=null:o.tail.sibling=null:h.sibling=null}}function Nt(o){var s=o.alternate!==null&&o.alternate.child===o.child,l=0,h=0;if(s)for(var m=o.child;m!==null;)l|=m.lanes|m.childLanes,h|=m.subtreeFlags&14680064,h|=m.flags&14680064,m.return=o,m=m.sibling;else for(m=o.child;m!==null;)l|=m.lanes|m.childLanes,h|=m.subtreeFlags,h|=m.flags,m.return=o,m=m.sibling;return o.subtreeFlags|=h,o.childLanes=l,s}function gR(o,s,l){var h=s.pendingProps;switch(ff(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Nt(s),null;case 1:return Yt(s.type)&&Fd(),Nt(s),null;case 3:return h=s.stateNode,xs(),Ye(Qt),Ye(Ot),xf(),h.pendingContext&&(h.context=h.pendingContext,h.pendingContext=null),(o===null||o.child===null)&&(dd(s)?s.flags|=4:o===null||o.memoizedState.isDehydrated&&!(s.flags&256)||(s.flags|=1024,to!==null&&(Sg(to),to=null))),_g(o,s),Nt(s),null;case 5:yf(s);var m=tr(hc.current);if(l=s.type,o!==null&&s.stateNode!=null)cD(o,s,l,h,m),o.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!h){if(s.stateNode===null)throw Error(ee(166));return Nt(s),null}if(o=tr(_o.current),dd(s)){h=s.stateNode,l=s.type;var w=s.memoizedProps;switch(h[bo]=s,h[dc]=w,o=(s.mode&1)!==0,l){case"dialog":Ge("cancel",h),Ge("close",h);break;case"iframe":case"object":case"embed":Ge("load",h);break;case"video":case"audio":for(m=0;m<Fa.length;m++)Ge(Fa[m],h);break;case"source":Ge("error",h);break;case"img":case"image":case"link":Ge("error",h),Ge("load",h);break;case"details":Ge("toggle",h);break;case"input":dx(h,w),Ge("invalid",h);break;case"select":h._wrapperState={wasMultiple:!!w.multiple},Ge("invalid",h);break;case"textarea":hx(h,w),Ge("invalid",h)}Gm(l,w),m=null;for(var k in w)if(w.hasOwnProperty(k)){var A=w[k];k==="children"?typeof A=="string"?h.textContent!==A&&(w.suppressHydrationWarning!==!0&&ld(h.textContent,A,o),m=["children",A]):typeof A=="number"&&h.textContent!==""+A&&(w.suppressHydrationWarning!==!0&&ld(h.textContent,A,o),m=["children",""+A]):ec.hasOwnProperty(k)&&A!=null&&k==="onScroll"&&Ge("scroll",h)}switch(l){case"input":td(h),ux(h,w,!0);break;case"textarea":td(h),px(h);break;case"select":case"option":break;default:typeof w.onClick=="function"&&(h.onclick=Rd)}h=m,s.updateQueue=h,h!==null&&(s.flags|=4)}else{k=m.nodeType===9?m:m.ownerDocument,o==="http://www.w3.org/1999/xhtml"&&(o=LE(l)),o==="http://www.w3.org/1999/xhtml"?l==="script"?(o=k.createElement("div"),o.innerHTML="<script><\/script>",o=o.removeChild(o.firstChild)):typeof h.is=="string"?o=k.createElement(l,{is:h.is}):(o=k.createElement(l),l==="select"&&(k=o,h.multiple?k.multiple=!0:h.size&&(k.size=h.size))):o=k.createElementNS(o,l),o[bo]=s,o[dc]=h,aD(o,s,!1,!1),s.stateNode=o;e:{switch(k=Km(l,h),l){case"dialog":Ge("cancel",o),Ge("close",o),m=h;break;case"iframe":case"object":case"embed":Ge("load",o),m=h;break;case"video":case"audio":for(m=0;m<Fa.length;m++)Ge(Fa[m],o);m=h;break;case"source":Ge("error",o),m=h;break;case"img":case"image":case"link":Ge("error",o),Ge("load",o),m=h;break;case"details":Ge("toggle",o),m=h;break;case"input":dx(o,h),m=Um(o,h),Ge("invalid",o);break;case"option":m=h;break;case"select":o._wrapperState={wasMultiple:!!h.multiple},m=et({},h,{value:void 0}),Ge("invalid",o);break;case"textarea":hx(o,h),m=qm(o,h),Ge("invalid",o);break;default:m=h}Gm(l,m),A=m;for(w in A)if(A.hasOwnProperty(w)){var b=A[w];w==="style"?FE(o,b):w==="dangerouslySetInnerHTML"?(b=b?b.__html:void 0,b!=null&&zE(o,b)):w==="children"?typeof b=="string"?(l!=="textarea"||b!=="")&&tc(o,b):typeof b=="number"&&tc(o,""+b):w!=="suppressContentEditableWarning"&&w!=="suppressHydrationWarning"&&w!=="autoFocus"&&(ec.hasOwnProperty(w)?b!=null&&w==="onScroll"&&Ge("scroll",o):b!=null&&ef(o,w,b,k))}switch(l){case"input":td(o),ux(o,h,!1);break;case"textarea":td(o),px(o);break;case"option":h.value!=null&&o.setAttribute("value",""+_i(h.value));break;case"select":o.multiple=!!h.multiple,w=h.value,w!=null?ms(o,!!h.multiple,w,!1):h.defaultValue!=null&&ms(o,!!h.multiple,h.defaultValue,!0);break;default:typeof m.onClick=="function"&&(o.onclick=Rd)}switch(l){case"button":case"input":case"select":case"textarea":h=!!h.autoFocus;break e;case"img":h=!0;break e;default:h=!1}}h&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Nt(s),null;case 6:if(o&&s.stateNode!=null)lD(o,s,o.memoizedProps,h);else{if(typeof h!="string"&&s.stateNode===null)throw Error(ee(166));if(l=tr(hc.current),tr(_o.current),dd(s)){if(h=s.stateNode,l=s.memoizedProps,h[bo]=s,(w=h.nodeValue!==l)&&(o=gn,o!==null))switch(o.tag){case 3:ld(h.nodeValue,l,(o.mode&1)!==0);break;case 5:o.memoizedProps.suppressHydrationWarning!==!0&&ld(h.nodeValue,l,(o.mode&1)!==0)}w&&(s.flags|=4)}else h=(l.nodeType===9?l:l.ownerDocument).createTextNode(h),h[bo]=s,s.stateNode=h}return Nt(s),null;case 13:if(Ye(Je),h=s.memoizedState,o===null||o.memoizedState!==null&&o.memoizedState.dehydrated!==null){if(Ze&&un!==null&&s.mode&1&&!(s.flags&128))D5(),Cs(),s.flags|=98560,w=!1;else if(w=dd(s),h!==null&&h.dehydrated!==null){if(o===null){if(!w)throw Error(ee(318));if(w=s.memoizedState,w=w!==null?w.dehydrated:null,!w)throw Error(ee(317));w[bo]=s}else Cs(),!(s.flags&128)&&(s.memoizedState=null),s.flags|=4;Nt(s),w=!1}else to!==null&&(Sg(to),to=null),w=!0;if(!w)return s.flags&65536?s:null}return s.flags&128?(s.lanes=l,s):(h=h!==null,h!==(o!==null&&o.memoizedState!==null)&&h&&(s.child.flags|=8192,s.mode&1&&(o===null||Je.current&1?bt===0&&(bt=3):Lf())),s.updateQueue!==null&&(s.flags|=4),Nt(s),null);case 4:return xs(),_g(o,s),o===null&&cc(s.stateNode.containerInfo),Nt(s),null;case 10:return _f(s.type._context),Nt(s),null;case 17:return Yt(s.type)&&Fd(),Nt(s),null;case 19:if(Ye(Je),w=s.memoizedState,w===null)return Nt(s),null;if(h=(s.flags&128)!==0,k=w.rendering,k===null)if(h)Pa(w,!1);else{if(bt!==0||o!==null&&o.flags&128)for(o=s.child;o!==null;){if(k=Gd(o),k!==null){for(s.flags|=128,Pa(w,!1),h=k.updateQueue,h!==null&&(s.updateQueue=h,s.flags|=4),s.subtreeFlags=0,h=l,l=s.child;l!==null;)w=l,o=h,w.flags&=14680066,k=w.alternate,k===null?(w.childLanes=0,w.lanes=o,w.child=null,w.subtreeFlags=0,w.memoizedProps=null,w.memoizedState=null,w.updateQueue=null,w.dependencies=null,w.stateNode=null):(w.childLanes=k.childLanes,w.lanes=k.lanes,w.child=k.child,w.subtreeFlags=0,w.deletions=null,w.memoizedProps=k.memoizedProps,w.memoizedState=k.memoizedState,w.updateQueue=k.updateQueue,w.type=k.type,o=k.dependencies,w.dependencies=o===null?null:{lanes:o.lanes,firstContext:o.firstContext}),l=l.sibling;return We(Je,Je.current&1|2),s.child}o=o.sibling}w.tail!==null&&lt()>Ds&&(s.flags|=128,h=!0,Pa(w,!1),s.lanes=4194304)}else{if(!h)if(o=Gd(k),o!==null){if(s.flags|=128,h=!0,l=o.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),Pa(w,!0),w.tail===null&&w.tailMode==="hidden"&&!k.alternate&&!Ze)return Nt(s),null}else 2*lt()-w.renderingStartTime>Ds&&l!==1073741824&&(s.flags|=128,h=!0,Pa(w,!1),s.lanes=4194304);w.isBackwards?(k.sibling=s.child,s.child=k):(l=w.last,l!==null?l.sibling=k:s.child=k,w.last=k)}return w.tail!==null?(s=w.tail,w.rendering=s,w.tail=s.sibling,w.renderingStartTime=lt(),s.sibling=null,l=Je.current,We(Je,h?l&1|2:l&1),s):(Nt(s),null);case 22:case 23:return Of(),h=s.memoizedState!==null,o!==null&&o.memoizedState!==null!==h&&(s.flags|=8192),h&&s.mode&1?dn&1073741824&&(Nt(s),s.subtreeFlags&6&&(s.flags|=8192)):Nt(s),null;case 24:return null;case 25:return null}throw Error(ee(156,s.tag))}function fR(o,s){switch(ff(s),s.tag){case 1:return Yt(s.type)&&Fd(),o=s.flags,o&65536?(s.flags=o&-65537|128,s):null;case 3:return xs(),Ye(Qt),Ye(Ot),xf(),o=s.flags,o&65536&&!(o&128)?(s.flags=o&-65537|128,s):null;case 5:return yf(s),null;case 13:if(Ye(Je),o=s.memoizedState,o!==null&&o.dehydrated!==null){if(s.alternate===null)throw Error(ee(340));Cs()}return o=s.flags,o&65536?(s.flags=o&-65537|128,s):null;case 19:return Ye(Je),null;case 4:return xs(),null;case 10:return _f(s.type._context),null;case 22:case 23:return Of(),null;case 24:return null;default:return null}}var pd=!1,Pt=!1,kR=typeof WeakSet=="function"?WeakSet:Set,ae=null;function us(o,s){var l=o.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(h){it(o,s,h)}else l.current=null}function Ag(o,s,l){try{l()}catch(h){it(o,s,h)}}var n2=!1;function bR(o,s){if(ig=Od,o=m5(),mf(o)){if("selectionStart"in o)var l={start:o.selectionStart,end:o.selectionEnd};else e:{l=(l=o.ownerDocument)&&l.defaultView||window;var h=l.getSelection&&l.getSelection();if(h&&h.rangeCount!==0){l=h.anchorNode;var m=h.anchorOffset,w=h.focusNode;h=h.focusOffset;try{l.nodeType,w.nodeType}catch{l=null;break e}var k=0,A=-1,b=-1,y=0,I=0,D=o,v=null;t:for(;;){for(var S;D!==l||m!==0&&D.nodeType!==3||(A=k+m),D!==w||h!==0&&D.nodeType!==3||(b=k+h),D.nodeType===3&&(k+=D.nodeValue.length),(S=D.firstChild)!==null;)v=D,D=S;for(;;){if(D===o)break t;if(v===l&&++y===m&&(A=k),v===w&&++I===h&&(b=k),(S=D.nextSibling)!==null)break;D=v,v=D.parentNode}D=S}l=A===-1||b===-1?null:{start:A,end:b}}else l=null}l=l||{start:0,end:0}}else l=null;for(rg={focusedElem:o,selectionRange:l},Od=!1,ae=s;ae!==null;)if(s=ae,o=s.child,(s.subtreeFlags&1028)!==0&&o!==null)o.return=s,ae=o;else for(;ae!==null;){s=ae;try{var B=s.alternate;if(s.flags&1024)switch(s.tag){case 0:case 11:case 15:break;case 1:if(B!==null){var O=B.memoizedProps,R=B.memoizedState,N=s.stateNode,P=N.getSnapshotBeforeUpdate(s.elementType===s.type?O:Xn(s.type,O),R);N.__reactInternalSnapshotBeforeUpdate=P}break;case 3:var L=s.stateNode.containerInfo;L.nodeType===1?L.textContent="":L.nodeType===9&&L.documentElement&&L.removeChild(L.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ee(163))}}catch(V){it(s,s.return,V)}if(o=s.sibling,o!==null){o.return=s.return,ae=o;break}ae=s.return}return B=n2,n2=!1,B}function Qa(o,s,l){var h=s.updateQueue;if(h=h!==null?h.lastEffect:null,h!==null){var m=h=h.next;do{if((m.tag&o)===o){var w=m.destroy;m.destroy=void 0,w!==void 0&&Ag(s,l,w)}m=m.next}while(m!==h)}}function _u(o,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&o)===o){var h=l.create;l.destroy=h()}l=l.next}while(l!==s)}}function vg(o){var s=o.ref;if(s!==null){var l=o.stateNode;switch(o.tag){case 5:o=l;break;default:o=l}typeof s=="function"?s(o):s.current=o}}function dD(o){var s=o.alternate;s!==null&&(o.alternate=null,dD(s)),o.child=null,o.deletions=null,o.sibling=null,o.tag===5&&(s=o.stateNode,s!==null&&(delete s[bo],delete s[dc],delete s[cg],delete s[eR],delete s[tR])),o.stateNode=null,o.return=null,o.dependencies=null,o.memoizedProps=null,o.memoizedState=null,o.pendingProps=null,o.stateNode=null,o.updateQueue=null}function uD(o){return o.tag===5||o.tag===3||o.tag===4}function o2(o){e:for(;;){for(;o.sibling===null;){if(o.return===null||uD(o.return))return null;o=o.return}for(o.sibling.return=o.return,o=o.sibling;o.tag!==5&&o.tag!==6&&o.tag!==18;){if(o.flags&2||o.child===null||o.tag===4)continue e;o.child.return=o,o=o.child}if(!(o.flags&2))return o.stateNode}}function Cg(o,s,l){var h=o.tag;if(h===5||h===6)o=o.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(o,s):l.insertBefore(o,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(o,l)):(s=l,s.appendChild(o)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=Rd));else if(h!==4&&(o=o.child,o!==null))for(Cg(o,s,l),o=o.sibling;o!==null;)Cg(o,s,l),o=o.sibling}function yg(o,s,l){var h=o.tag;if(h===5||h===6)o=o.stateNode,s?l.insertBefore(o,s):l.appendChild(o);else if(h!==4&&(o=o.child,o!==null))for(yg(o,s,l),o=o.sibling;o!==null;)yg(o,s,l),o=o.sibling}var It=null,eo=!1;function oi(o,s,l){for(l=l.child;l!==null;)hD(o,s,l),l=l.sibling}function hD(o,s,l){if(wo&&typeof wo.onCommitFiberUnmount=="function")try{wo.onCommitFiberUnmount(hu,l)}catch{}switch(l.tag){case 5:Pt||us(l,s);case 6:var h=It,m=eo;It=null,oi(o,s,l),It=h,eo=m,It!==null&&(eo?(o=It,l=l.stateNode,o.nodeType===8?o.parentNode.removeChild(l):o.removeChild(l)):It.removeChild(l.stateNode));break;case 18:It!==null&&(eo?(o=It,l=l.stateNode,o.nodeType===8?pm(o.parentNode,l):o.nodeType===1&&pm(o,l),rc(o)):pm(It,l.stateNode));break;case 4:h=It,m=eo,It=l.stateNode.containerInfo,eo=!0,oi(o,s,l),It=h,eo=m;break;case 0:case 11:case 14:case 15:if(!Pt&&(h=l.updateQueue,h!==null&&(h=h.lastEffect,h!==null))){m=h=h.next;do{var w=m,k=w.destroy;w=w.tag,k!==void 0&&(w&2||w&4)&&Ag(l,s,k),m=m.next}while(m!==h)}oi(o,s,l);break;case 1:if(!Pt&&(us(l,s),h=l.stateNode,typeof h.componentWillUnmount=="function"))try{h.props=l.memoizedProps,h.state=l.memoizedState,h.componentWillUnmount()}catch(A){it(l,s,A)}oi(o,s,l);break;case 21:oi(o,s,l);break;case 22:l.mode&1?(Pt=(h=Pt)||l.memoizedState!==null,oi(o,s,l),Pt=h):oi(o,s,l);break;default:oi(o,s,l)}}function i2(o){var s=o.updateQueue;if(s!==null){o.updateQueue=null;var l=o.stateNode;l===null&&(l=o.stateNode=new kR),s.forEach(function(h){var m=DR.bind(null,o,h);l.has(h)||(l.add(h),h.then(m,m))})}}function Jn(o,s){var l=s.deletions;if(l!==null)for(var h=0;h<l.length;h++){var m=l[h];try{var w=o,k=s,A=k;e:for(;A!==null;){switch(A.tag){case 5:It=A.stateNode,eo=!1;break e;case 3:It=A.stateNode.containerInfo,eo=!0;break e;case 4:It=A.stateNode.containerInfo,eo=!0;break e}A=A.return}if(It===null)throw Error(ee(160));hD(w,k,m),It=null,eo=!1;var b=m.alternate;b!==null&&(b.return=null),m.return=null}catch(y){it(m,s,y)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)pD(s,o),s=s.sibling}function pD(o,s){var l=o.alternate,h=o.flags;switch(o.tag){case 0:case 11:case 14:case 15:if(Jn(s,o),fo(o),h&4){try{Qa(3,o,o.return),_u(3,o)}catch(O){it(o,o.return,O)}try{Qa(5,o,o.return)}catch(O){it(o,o.return,O)}}break;case 1:Jn(s,o),fo(o),h&512&&l!==null&&us(l,l.return);break;case 5:if(Jn(s,o),fo(o),h&512&&l!==null&&us(l,l.return),o.flags&32){var m=o.stateNode;try{tc(m,"")}catch(O){it(o,o.return,O)}}if(h&4&&(m=o.stateNode,m!=null)){var w=o.memoizedProps,k=l!==null?l.memoizedProps:w,A=o.type,b=o.updateQueue;if(o.updateQueue=null,b!==null)try{A==="input"&&w.type==="radio"&&w.name!=null&&jE(m,w),Km(A,k);var y=Km(A,w);for(k=0;k<b.length;k+=2){var I=b[k],D=b[k+1];I==="style"?FE(m,D):I==="dangerouslySetInnerHTML"?zE(m,D):I==="children"?tc(m,D):ef(m,I,D,y)}switch(A){case"input":Hm(m,w);break;case"textarea":OE(m,w);break;case"select":var v=m._wrapperState.wasMultiple;m._wrapperState.wasMultiple=!!w.multiple;var S=w.value;S!=null?ms(m,!!w.multiple,S,!1):v!==!!w.multiple&&(w.defaultValue!=null?ms(m,!!w.multiple,w.defaultValue,!0):ms(m,!!w.multiple,w.multiple?[]:"",!1))}m[dc]=w}catch(O){it(o,o.return,O)}}break;case 6:if(Jn(s,o),fo(o),h&4){if(o.stateNode===null)throw Error(ee(162));m=o.stateNode,w=o.memoizedProps;try{m.nodeValue=w}catch(O){it(o,o.return,O)}}break;case 3:if(Jn(s,o),fo(o),h&4&&l!==null&&l.memoizedState.isDehydrated)try{rc(s.containerInfo)}catch(O){it(o,o.return,O)}break;case 4:Jn(s,o),fo(o);break;case 13:Jn(s,o),fo(o),m=o.child,m.flags&8192&&(w=m.memoizedState!==null,m.stateNode.isHidden=w,!w||m.alternate!==null&&m.alternate.memoizedState!==null||(Pf=lt())),h&4&&i2(o);break;case 22:if(I=l!==null&&l.memoizedState!==null,o.mode&1?(Pt=(y=Pt)||I,Jn(s,o),Pt=y):Jn(s,o),fo(o),h&8192){if(y=o.memoizedState!==null,(o.stateNode.isHidden=y)&&!I&&o.mode&1)for(ae=o,I=o.child;I!==null;){for(D=ae=I;ae!==null;){switch(v=ae,S=v.child,v.tag){case 0:case 11:case 14:case 15:Qa(4,v,v.return);break;case 1:us(v,v.return);var B=v.stateNode;if(typeof B.componentWillUnmount=="function"){h=v,l=v.return;try{s=h,B.props=s.memoizedProps,B.state=s.memoizedState,B.componentWillUnmount()}catch(O){it(h,l,O)}}break;case 5:us(v,v.return);break;case 22:if(v.memoizedState!==null){s2(D);continue}}S!==null?(S.return=v,ae=S):s2(D)}I=I.sibling}e:for(I=null,D=o;;){if(D.tag===5){if(I===null){I=D;try{m=D.stateNode,y?(w=m.style,typeof w.setProperty=="function"?w.setProperty("display","none","important"):w.display="none"):(A=D.stateNode,b=D.memoizedProps.style,k=b!=null&&b.hasOwnProperty("display")?b.display:null,A.style.display=RE("display",k))}catch(O){it(o,o.return,O)}}}else if(D.tag===6){if(I===null)try{D.stateNode.nodeValue=y?"":D.memoizedProps}catch(O){it(o,o.return,O)}}else if((D.tag!==22&&D.tag!==23||D.memoizedState===null||D===o)&&D.child!==null){D.child.return=D,D=D.child;continue}if(D===o)break e;for(;D.sibling===null;){if(D.return===null||D.return===o)break e;I===D&&(I=null),D=D.return}I===D&&(I=null),D.sibling.return=D.return,D=D.sibling}}break;case 19:Jn(s,o),fo(o),h&4&&i2(o);break;case 21:break;default:Jn(s,o),fo(o)}}function fo(o){var s=o.flags;if(s&2){try{e:{for(var l=o.return;l!==null;){if(uD(l)){var h=l;break e}l=l.return}throw Error(ee(160))}switch(h.tag){case 5:var m=h.stateNode;h.flags&32&&(tc(m,""),h.flags&=-33);var w=o2(o);yg(o,w,m);break;case 3:case 4:var k=h.stateNode.containerInfo,A=o2(o);Cg(o,A,k);break;default:throw Error(ee(161))}}catch(b){it(o,o.return,b)}o.flags&=-3}s&4096&&(o.flags&=-4097)}function wR(o,s,l){ae=o,mD(o)}function mD(o,s,l){for(var h=(o.mode&1)!==0;ae!==null;){var m=ae,w=m.child;if(m.tag===22&&h){var k=m.memoizedState!==null||pd;if(!k){var A=m.alternate,b=A!==null&&A.memoizedState!==null||Pt;A=pd;var y=Pt;if(pd=k,(Pt=b)&&!y)for(ae=m;ae!==null;)k=ae,b=k.child,k.tag===22&&k.memoizedState!==null?a2(m):b!==null?(b.return=k,ae=b):a2(m);for(;w!==null;)ae=w,mD(w),w=w.sibling;ae=m,pd=A,Pt=y}r2(o)}else m.subtreeFlags&8772&&w!==null?(w.return=m,ae=w):r2(o)}}function r2(o){for(;ae!==null;){var s=ae;if(s.flags&8772){var l=s.alternate;try{if(s.flags&8772)switch(s.tag){case 0:case 11:case 15:Pt||_u(5,s);break;case 1:var h=s.stateNode;if(s.flags&4&&!Pt)if(l===null)h.componentDidMount();else{var m=s.elementType===s.type?l.memoizedProps:Xn(s.type,l.memoizedProps);h.componentDidUpdate(m,l.memoizedState,h.__reactInternalSnapshotBeforeUpdate)}var w=s.updateQueue;w!==null&&Hx(s,w,h);break;case 3:var k=s.updateQueue;if(k!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Hx(s,k,l)}break;case 5:var A=s.stateNode;if(l===null&&s.flags&4){l=A;var b=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":b.autoFocus&&l.focus();break;case"img":b.src&&(l.src=b.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var y=s.alternate;if(y!==null){var I=y.memoizedState;if(I!==null){var D=I.dehydrated;D!==null&&rc(D)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ee(163))}Pt||s.flags&512&&vg(s)}catch(v){it(s,s.return,v)}}if(s===o){ae=null;break}if(l=s.sibling,l!==null){l.return=s.return,ae=l;break}ae=s.return}}function s2(o){for(;ae!==null;){var s=ae;if(s===o){ae=null;break}var l=s.sibling;if(l!==null){l.return=s.return,ae=l;break}ae=s.return}}function a2(o){for(;ae!==null;){var s=ae;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{_u(4,s)}catch(b){it(s,l,b)}break;case 1:var h=s.stateNode;if(typeof h.componentDidMount=="function"){var m=s.return;try{h.componentDidMount()}catch(b){it(s,m,b)}}var w=s.return;try{vg(s)}catch(b){it(s,w,b)}break;case 5:var k=s.return;try{vg(s)}catch(b){it(s,k,b)}}}catch(b){it(s,s.return,b)}if(s===o){ae=null;break}var A=s.sibling;if(A!==null){A.return=s.return,ae=A;break}ae=s.return}}var _R=Math.ceil,Yd=qo.ReactCurrentDispatcher,Bf=qo.ReactCurrentOwner,zn=qo.ReactCurrentBatchConfig,Ie=0,yt=null,ut=null,Tt=0,dn=0,hs=xi(0),bt=0,fc=null,ar=0,Au=0,Nf=0,Ya=null,Gt=null,Pf=0,Ds=1/0,No=null,Zd=!1,xg=null,fi=null,md=!1,li=null,Jd=0,Za=0,Eg=null,Dd=-1,Sd=0;function Rt(){return Ie&6?lt():Dd!==-1?Dd:Dd=lt()}function ki(o){return o.mode&1?Ie&2&&Tt!==0?Tt&-Tt:oR.transition!==null?(Sd===0&&(Sd=JE()),Sd):(o=Ne,o!==0||(o=window.event,o=o===void 0?16:r5(o.type)),o):1}function io(o,s,l,h){if(50<Za)throw Za=0,Eg=null,Error(ee(185));xc(o,l,h),(!(Ie&2)||o!==yt)&&(o===yt&&(!(Ie&2)&&(Au|=l),bt===4&&ai(o,Tt)),Zt(o,h),l===1&&Ie===0&&!(s.mode&1)&&(Ds=lt()+500,ku&&Ei()))}function Zt(o,s){var l=o.callbackNode;o8(o,s);var h=jd(o,o===yt?Tt:0);if(h===0)l!==null&&fx(l),o.callbackNode=null,o.callbackPriority=0;else if(s=h&-h,o.callbackPriority!==s){if(l!=null&&fx(l),s===1)o.tag===0?nR(c2.bind(null,o)):y5(c2.bind(null,o)),J8(function(){!(Ie&6)&&Ei()}),l=null;else{switch(XE(h)){case 1:l=sf;break;case 4:l=YE;break;case 16:l=Pd;break;case 536870912:l=ZE;break;default:l=Pd}l=vD(l,gD.bind(null,o))}o.callbackPriority=s,o.callbackNode=l}}function gD(o,s){if(Dd=-1,Sd=0,Ie&6)throw Error(ee(327));var l=o.callbackNode;if(ws()&&o.callbackNode!==l)return null;var h=jd(o,o===yt?Tt:0);if(h===0)return null;if(h&30||h&o.expiredLanes||s)s=Xd(o,h);else{s=h;var m=Ie;Ie|=2;var w=kD();(yt!==o||Tt!==s)&&(No=null,Ds=lt()+500,nr(o,s));do try{CR();break}catch(A){fD(o,A)}while(!0);wf(),Yd.current=w,Ie=m,ut!==null?s=0:(yt=null,Tt=0,s=bt)}if(s!==0){if(s===2&&(m=Xm(o),m!==0&&(h=m,s=Dg(o,m))),s===1)throw l=fc,nr(o,0),ai(o,h),Zt(o,lt()),l;if(s===6)ai(o,h);else{if(m=o.current.alternate,!(h&30)&&!AR(m)&&(s=Xd(o,h),s===2&&(w=Xm(o),w!==0&&(h=w,s=Dg(o,w))),s===1))throw l=fc,nr(o,0),ai(o,h),Zt(o,lt()),l;switch(o.finishedWork=m,o.finishedLanes=h,s){case 0:case 1:throw Error(ee(345));case 2:Zi(o,Gt,No);break;case 3:if(ai(o,h),(h&130023424)===h&&(s=Pf+500-lt(),10<s)){if(jd(o,0)!==0)break;if(m=o.suspendedLanes,(m&h)!==h){Rt(),o.pingedLanes|=o.suspendedLanes&m;break}o.timeoutHandle=ag(Zi.bind(null,o,Gt,No),s);break}Zi(o,Gt,No);break;case 4:if(ai(o,h),(h&4194240)===h)break;for(s=o.eventTimes,m=-1;0<h;){var k=31-oo(h);w=1<<k,k=s[k],k>m&&(m=k),h&=~w}if(h=m,h=lt()-h,h=(120>h?120:480>h?480:1080>h?1080:1920>h?1920:3e3>h?3e3:4320>h?4320:1960*_R(h/1960))-h,10<h){o.timeoutHandle=ag(Zi.bind(null,o,Gt,No),h);break}Zi(o,Gt,No);break;case 5:Zi(o,Gt,No);break;default:throw Error(ee(329))}}}return Zt(o,lt()),o.callbackNode===l?gD.bind(null,o):null}function Dg(o,s){var l=Ya;return o.current.memoizedState.isDehydrated&&(nr(o,s).flags|=256),o=Xd(o,s),o!==2&&(s=Gt,Gt=l,s!==null&&Sg(s)),o}function Sg(o){Gt===null?Gt=o:Gt.push.apply(Gt,o)}function AR(o){for(var s=o;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var h=0;h<l.length;h++){var m=l[h],w=m.getSnapshot;m=m.value;try{if(!ro(w(),m))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===o)break;for(;s.sibling===null;){if(s.return===null||s.return===o)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function ai(o,s){for(s&=~Nf,s&=~Au,o.suspendedLanes|=s,o.pingedLanes&=~s,o=o.expirationTimes;0<s;){var l=31-oo(s),h=1<<l;o[l]=-1,s&=~h}}function c2(o){if(Ie&6)throw Error(ee(327));ws();var s=jd(o,0);if(!(s&1))return Zt(o,lt()),null;var l=Xd(o,s);if(o.tag!==0&&l===2){var h=Xm(o);h!==0&&(s=h,l=Dg(o,h))}if(l===1)throw l=fc,nr(o,0),ai(o,s),Zt(o,lt()),l;if(l===6)throw Error(ee(345));return o.finishedWork=o.current.alternate,o.finishedLanes=s,Zi(o,Gt,No),Zt(o,lt()),null}function jf(o,s){var l=Ie;Ie|=1;try{return o(s)}finally{Ie=l,Ie===0&&(Ds=lt()+500,ku&&Ei())}}function cr(o){li!==null&&li.tag===0&&!(Ie&6)&&ws();var s=Ie;Ie|=1;var l=zn.transition,h=Ne;try{if(zn.transition=null,Ne=1,o)return o()}finally{Ne=h,zn.transition=l,Ie=s,!(Ie&6)&&Ei()}}function Of(){dn=hs.current,Ye(hs)}function nr(o,s){o.finishedWork=null,o.finishedLanes=0;var l=o.timeoutHandle;if(l!==-1&&(o.timeoutHandle=-1,Z8(l)),ut!==null)for(l=ut.return;l!==null;){var h=l;switch(ff(h),h.tag){case 1:h=h.type.childContextTypes,h!=null&&Fd();break;case 3:xs(),Ye(Qt),Ye(Ot),xf();break;case 5:yf(h);break;case 4:xs();break;case 13:Ye(Je);break;case 19:Ye(Je);break;case 10:_f(h.type._context);break;case 22:case 23:Of()}l=l.return}if(yt=o,ut=o=bi(o.current,null),Tt=dn=s,bt=0,fc=null,Nf=Au=ar=0,Gt=Ya=null,er!==null){for(s=0;s<er.length;s++)if(l=er[s],h=l.interleaved,h!==null){l.interleaved=null;var m=h.next,w=l.pending;if(w!==null){var k=w.next;w.next=m,h.next=k}l.pending=h}er=null}return o}function fD(o,s){do{var l=ut;try{if(wf(),yd.current=Qd,Kd){for(var h=Xe.memoizedState;h!==null;){var m=h.queue;m!==null&&(m.pending=null),h=h.next}Kd=!1}if(sr=0,Ct=kt=Xe=null,Ka=!1,pc=0,Bf.current=null,l===null||l.return===null){bt=1,fc=s,ut=null;break}e:{var w=o,k=l.return,A=l,b=s;if(s=Tt,A.flags|=32768,b!==null&&typeof b=="object"&&typeof b.then=="function"){var y=b,I=A,D=I.tag;if(!(I.mode&1)&&(D===0||D===11||D===15)){var v=I.alternate;v?(I.updateQueue=v.updateQueue,I.memoizedState=v.memoizedState,I.lanes=v.lanes):(I.updateQueue=null,I.memoizedState=null)}var S=Qx(k);if(S!==null){S.flags&=-257,Yx(S,k,A,w,s),S.mode&1&&Kx(w,y,s),s=S,b=y;var B=s.updateQueue;if(B===null){var O=new Set;O.add(b),s.updateQueue=O}else B.add(b);break e}else{if(!(s&1)){Kx(w,y,s),Lf();break e}b=Error(ee(426))}}else if(Ze&&A.mode&1){var R=Qx(k);if(R!==null){!(R.flags&65536)&&(R.flags|=256),Yx(R,k,A,w,s),kf(Es(b,A));break e}}w=b=Es(b,A),bt!==4&&(bt=2),Ya===null?Ya=[w]:Ya.push(w),w=k;do{switch(w.tag){case 3:w.flags|=65536,s&=-s,w.lanes|=s;var N=X5(w,b,s);Ux(w,N);break e;case 1:A=b;var P=w.type,L=w.stateNode;if(!(w.flags&128)&&(typeof P.getDerivedStateFromError=="function"||L!==null&&typeof L.componentDidCatch=="function"&&(fi===null||!fi.has(L)))){w.flags|=65536,s&=-s,w.lanes|=s;var V=eD(w,A,s);Ux(w,V);break e}}w=w.return}while(w!==null)}wD(l)}catch(G){s=G,ut===l&&l!==null&&(ut=l=l.return);continue}break}while(!0)}function kD(){var o=Yd.current;return Yd.current=Qd,o===null?Qd:o}function Lf(){(bt===0||bt===3||bt===2)&&(bt=4),yt===null||!(ar&268435455)&&!(Au&268435455)||ai(yt,Tt)}function Xd(o,s){var l=Ie;Ie|=2;var h=kD();(yt!==o||Tt!==s)&&(No=null,nr(o,s));do try{vR();break}catch(m){fD(o,m)}while(!0);if(wf(),Ie=l,Yd.current=h,ut!==null)throw Error(ee(261));return yt=null,Tt=0,bt}function vR(){for(;ut!==null;)bD(ut)}function CR(){for(;ut!==null&&!Kz();)bD(ut)}function bD(o){var s=AD(o.alternate,o,dn);o.memoizedProps=o.pendingProps,s===null?wD(o):ut=s,Bf.current=null}function wD(o){var s=o;do{var l=s.alternate;if(o=s.return,s.flags&32768){if(l=fR(l,s),l!==null){l.flags&=32767,ut=l;return}if(o!==null)o.flags|=32768,o.subtreeFlags=0,o.deletions=null;else{bt=6,ut=null;return}}else if(l=gR(l,s,dn),l!==null){ut=l;return}if(s=s.sibling,s!==null){ut=s;return}ut=s=o}while(s!==null);bt===0&&(bt=5)}function Zi(o,s,l){var h=Ne,m=zn.transition;try{zn.transition=null,Ne=1,yR(o,s,l,h)}finally{zn.transition=m,Ne=h}return null}function yR(o,s,l,h){do ws();while(li!==null);if(Ie&6)throw Error(ee(327));l=o.finishedWork;var m=o.finishedLanes;if(l===null)return null;if(o.finishedWork=null,o.finishedLanes=0,l===o.current)throw Error(ee(177));o.callbackNode=null,o.callbackPriority=0;var w=l.lanes|l.childLanes;if(i8(o,w),o===yt&&(ut=yt=null,Tt=0),!(l.subtreeFlags&2064)&&!(l.flags&2064)||md||(md=!0,vD(Pd,function(){return ws(),null})),w=(l.flags&15990)!==0,l.subtreeFlags&15990||w){w=zn.transition,zn.transition=null;var k=Ne;Ne=1;var A=Ie;Ie|=4,Bf.current=null,bR(o,l),pD(l,o),W8(rg),Od=!!ig,rg=ig=null,o.current=l,wR(l),Qz(),Ie=A,Ne=k,zn.transition=w}else o.current=l;if(md&&(md=!1,li=o,Jd=m),w=o.pendingLanes,w===0&&(fi=null),Jz(l.stateNode),Zt(o,lt()),s!==null)for(h=o.onRecoverableError,l=0;l<s.length;l++)m=s[l],h(m.value,{componentStack:m.stack,digest:m.digest});if(Zd)throw Zd=!1,o=xg,xg=null,o;return Jd&1&&o.tag!==0&&ws(),w=o.pendingLanes,w&1?o===Eg?Za++:(Za=0,Eg=o):Za=0,Ei(),null}function ws(){if(li!==null){var o=XE(Jd),s=zn.transition,l=Ne;try{if(zn.transition=null,Ne=16>o?16:o,li===null)var h=!1;else{if(o=li,li=null,Jd=0,Ie&6)throw Error(ee(331));var m=Ie;for(Ie|=4,ae=o.current;ae!==null;){var w=ae,k=w.child;if(ae.flags&16){var A=w.deletions;if(A!==null){for(var b=0;b<A.length;b++){var y=A[b];for(ae=y;ae!==null;){var I=ae;switch(I.tag){case 0:case 11:case 15:Qa(8,I,w)}var D=I.child;if(D!==null)D.return=I,ae=D;else for(;ae!==null;){I=ae;var v=I.sibling,S=I.return;if(dD(I),I===y){ae=null;break}if(v!==null){v.return=S,ae=v;break}ae=S}}}var B=w.alternate;if(B!==null){var O=B.child;if(O!==null){B.child=null;do{var R=O.sibling;O.sibling=null,O=R}while(O!==null)}}ae=w}}if(w.subtreeFlags&2064&&k!==null)k.return=w,ae=k;else e:for(;ae!==null;){if(w=ae,w.flags&2048)switch(w.tag){case 0:case 11:case 15:Qa(9,w,w.return)}var N=w.sibling;if(N!==null){N.return=w.return,ae=N;break e}ae=w.return}}var P=o.current;for(ae=P;ae!==null;){k=ae;var L=k.child;if(k.subtreeFlags&2064&&L!==null)L.return=k,ae=L;else e:for(k=P;ae!==null;){if(A=ae,A.flags&2048)try{switch(A.tag){case 0:case 11:case 15:_u(9,A)}}catch(G){it(A,A.return,G)}if(A===k){ae=null;break e}var V=A.sibling;if(V!==null){V.return=A.return,ae=V;break e}ae=A.return}}if(Ie=m,Ei(),wo&&typeof wo.onPostCommitFiberRoot=="function")try{wo.onPostCommitFiberRoot(hu,o)}catch{}h=!0}return h}finally{Ne=l,zn.transition=s}}return!1}function l2(o,s,l){s=Es(l,s),s=X5(o,s,1),o=gi(o,s,1),s=Rt(),o!==null&&(xc(o,1,s),Zt(o,s))}function it(o,s,l){if(o.tag===3)l2(o,o,l);else for(;s!==null;){if(s.tag===3){l2(s,o,l);break}else if(s.tag===1){var h=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof h.componentDidCatch=="function"&&(fi===null||!fi.has(h))){o=Es(l,o),o=eD(s,o,1),s=gi(s,o,1),o=Rt(),s!==null&&(xc(s,1,o),Zt(s,o));break}}s=s.return}}function xR(o,s,l){var h=o.pingCache;h!==null&&h.delete(s),s=Rt(),o.pingedLanes|=o.suspendedLanes&l,yt===o&&(Tt&l)===l&&(bt===4||bt===3&&(Tt&130023424)===Tt&&500>lt()-Pf?nr(o,0):Nf|=l),Zt(o,s)}function _D(o,s){s===0&&(o.mode&1?(s=id,id<<=1,!(id&130023424)&&(id=4194304)):s=1);var l=Rt();o=Vo(o,s),o!==null&&(xc(o,s,l),Zt(o,l))}function ER(o){var s=o.memoizedState,l=0;s!==null&&(l=s.retryLane),_D(o,l)}function DR(o,s){var l=0;switch(o.tag){case 13:var h=o.stateNode,m=o.memoizedState;m!==null&&(l=m.retryLane);break;case 19:h=o.stateNode;break;default:throw Error(ee(314))}h!==null&&h.delete(s),_D(o,l)}var AD;AD=function(o,s,l){if(o!==null)if(o.memoizedProps!==s.pendingProps||Qt.current)Kt=!0;else{if(!(o.lanes&l)&&!(s.flags&128))return Kt=!1,mR(o,s,l);Kt=!!(o.flags&131072)}else Kt=!1,Ze&&s.flags&1048576&&x5(s,Hd,s.index);switch(s.lanes=0,s.tag){case 2:var h=s.type;Ed(o,s),o=s.pendingProps;var m=vs(s,Ot.current);bs(s,l),m=Df(null,s,h,o,m,l);var w=Sf();return s.flags|=1,typeof m=="object"&&m!==null&&typeof m.render=="function"&&m.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,Yt(h)?(w=!0,Vd(s)):w=!1,s.memoizedState=m.state!==null&&m.state!==void 0?m.state:null,vf(s),m.updater=wu,s.stateNode=m,m._reactInternals=s,mg(s,h,o,l),s=kg(null,s,h,!0,w,l)):(s.tag=0,Ze&&w&&gf(s),zt(null,s,m,l),s=s.child),s;case 16:h=s.elementType;e:{switch(Ed(o,s),o=s.pendingProps,m=h._init,h=m(h._payload),s.type=h,m=s.tag=IR(h),o=Xn(h,o),m){case 0:s=fg(null,s,h,o,l);break e;case 1:s=Xx(null,s,h,o,l);break e;case 11:s=Zx(null,s,h,o,l);break e;case 14:s=Jx(null,s,h,Xn(h.type,o),l);break e}throw Error(ee(306,h,""))}return s;case 0:return h=s.type,m=s.pendingProps,m=s.elementType===h?m:Xn(h,m),fg(o,s,h,m,l);case 1:return h=s.type,m=s.pendingProps,m=s.elementType===h?m:Xn(h,m),Xx(o,s,h,m,l);case 3:e:{if(iD(s),o===null)throw Error(ee(387));h=s.pendingProps,w=s.memoizedState,m=w.element,M5(o,s),$d(s,h,null,l);var k=s.memoizedState;if(h=k.element,w.isDehydrated)if(w={element:h,isDehydrated:!1,cache:k.cache,pendingSuspenseBoundaries:k.pendingSuspenseBoundaries,transitions:k.transitions},s.updateQueue.baseState=w,s.memoizedState=w,s.flags&256){m=Es(Error(ee(423)),s),s=e2(o,s,h,l,m);break e}else if(h!==m){m=Es(Error(ee(424)),s),s=e2(o,s,h,l,m);break e}else for(un=mi(s.stateNode.containerInfo.firstChild),gn=s,Ze=!0,to=null,l=I5(s,null,h,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Cs(),h===m){s=Uo(o,s,l);break e}zt(o,s,h,l)}s=s.child}return s;case 5:return B5(s),o===null&&ug(s),h=s.type,m=s.pendingProps,w=o!==null?o.memoizedProps:null,k=m.children,sg(h,m)?k=null:w!==null&&sg(h,w)&&(s.flags|=32),oD(o,s),zt(o,s,k,l),s.child;case 6:return o===null&&ug(s),null;case 13:return rD(o,s,l);case 4:return Cf(s,s.stateNode.containerInfo),h=s.pendingProps,o===null?s.child=ys(s,null,h,l):zt(o,s,h,l),s.child;case 11:return h=s.type,m=s.pendingProps,m=s.elementType===h?m:Xn(h,m),Zx(o,s,h,m,l);case 7:return zt(o,s,s.pendingProps,l),s.child;case 8:return zt(o,s,s.pendingProps.children,l),s.child;case 12:return zt(o,s,s.pendingProps.children,l),s.child;case 10:e:{if(h=s.type._context,m=s.pendingProps,w=s.memoizedProps,k=m.value,We(Wd,h._currentValue),h._currentValue=k,w!==null)if(ro(w.value,k)){if(w.children===m.children&&!Qt.current){s=Uo(o,s,l);break e}}else for(w=s.child,w!==null&&(w.return=s);w!==null;){var A=w.dependencies;if(A!==null){k=w.child;for(var b=A.firstContext;b!==null;){if(b.context===h){if(w.tag===1){b=zo(-1,l&-l),b.tag=2;var y=w.updateQueue;if(y!==null){y=y.shared;var I=y.pending;I===null?b.next=b:(b.next=I.next,I.next=b),y.pending=b}}w.lanes|=l,b=w.alternate,b!==null&&(b.lanes|=l),hg(w.return,l,s),A.lanes|=l;break}b=b.next}}else if(w.tag===10)k=w.type===s.type?null:w.child;else if(w.tag===18){if(k=w.return,k===null)throw Error(ee(341));k.lanes|=l,A=k.alternate,A!==null&&(A.lanes|=l),hg(k,l,s),k=w.sibling}else k=w.child;if(k!==null)k.return=w;else for(k=w;k!==null;){if(k===s){k=null;break}if(w=k.sibling,w!==null){w.return=k.return,k=w;break}k=k.return}w=k}zt(o,s,m.children,l),s=s.child}return s;case 9:return m=s.type,h=s.pendingProps.children,bs(s,l),m=Rn(m),h=h(m),s.flags|=1,zt(o,s,h,l),s.child;case 14:return h=s.type,m=Xn(h,s.pendingProps),m=Xn(h.type,m),Jx(o,s,h,m,l);case 15:return tD(o,s,s.type,s.pendingProps,l);case 17:return h=s.type,m=s.pendingProps,m=s.elementType===h?m:Xn(h,m),Ed(o,s),s.tag=1,Yt(h)?(o=!0,Vd(s)):o=!1,bs(s,l),J5(s,h,m),mg(s,h,m,l),kg(null,s,h,!0,o,l);case 19:return sD(o,s,l);case 22:return nD(o,s,l)}throw Error(ee(156,s.tag))};function vD(o,s){return QE(o,s)}function SR(o,s,l,h){this.tag=o,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=h,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Ln(o,s,l,h){return new SR(o,s,l,h)}function zf(o){return o=o.prototype,!(!o||!o.isReactComponent)}function IR(o){if(typeof o=="function")return zf(o)?1:0;if(o!=null){if(o=o.$$typeof,o===nf)return 11;if(o===of)return 14}return 2}function bi(o,s){var l=o.alternate;return l===null?(l=Ln(o.tag,s,o.key,o.mode),l.elementType=o.elementType,l.type=o.type,l.stateNode=o.stateNode,l.alternate=o,o.alternate=l):(l.pendingProps=s,l.type=o.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=o.flags&14680064,l.childLanes=o.childLanes,l.lanes=o.lanes,l.child=o.child,l.memoizedProps=o.memoizedProps,l.memoizedState=o.memoizedState,l.updateQueue=o.updateQueue,s=o.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=o.sibling,l.index=o.index,l.ref=o.ref,l}function Id(o,s,l,h,m,w){var k=2;if(h=o,typeof o=="function")zf(o)&&(k=1);else if(typeof o=="string")k=5;else e:switch(o){case ns:return or(l.children,m,w,s);case tf:k=8,m|=8;break;case zm:return o=Ln(12,l,s,m|2),o.elementType=zm,o.lanes=w,o;case Rm:return o=Ln(13,l,s,m),o.elementType=Rm,o.lanes=w,o;case Fm:return o=Ln(19,l,s,m),o.elementType=Fm,o.lanes=w,o;case BE:return vu(l,m,w,s);default:if(typeof o=="object"&&o!==null)switch(o.$$typeof){case TE:k=10;break e;case ME:k=9;break e;case nf:k=11;break e;case of:k=14;break e;case ii:k=16,h=null;break e}throw Error(ee(130,o==null?o:typeof o,""))}return s=Ln(k,l,s,m),s.elementType=o,s.type=h,s.lanes=w,s}function or(o,s,l,h){return o=Ln(7,o,h,s),o.lanes=l,o}function vu(o,s,l,h){return o=Ln(22,o,h,s),o.elementType=BE,o.lanes=l,o.stateNode={isHidden:!1},o}function Am(o,s,l){return o=Ln(6,o,null,s),o.lanes=l,o}function vm(o,s,l){return s=Ln(4,o.children!==null?o.children:[],o.key,s),s.lanes=l,s.stateNode={containerInfo:o.containerInfo,pendingChildren:null,implementation:o.implementation},s}function TR(o,s,l,h,m){this.tag=s,this.containerInfo=o,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=nm(0),this.expirationTimes=nm(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=nm(0),this.identifierPrefix=h,this.onRecoverableError=m,this.mutableSourceEagerHydrationData=null}function Rf(o,s,l,h,m,w,k,A,b){return o=new TR(o,s,l,A,b),s===1?(s=1,w===!0&&(s|=8)):s=0,w=Ln(3,null,null,s),o.current=w,w.stateNode=o,w.memoizedState={element:h,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},vf(w),o}function MR(o,s,l){var h=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ts,key:h==null?null:""+h,children:o,containerInfo:s,implementation:l}}function CD(o){if(!o)return Ai;o=o._reactInternals;e:{if(hr(o)!==o||o.tag!==1)throw Error(ee(170));var s=o;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(Yt(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(ee(171))}if(o.tag===1){var l=o.type;if(Yt(l))return C5(o,l,s)}return s}function yD(o,s,l,h,m,w,k,A,b){return o=Rf(l,h,!0,o,m,w,k,A,b),o.context=CD(null),l=o.current,h=Rt(),m=ki(l),w=zo(h,m),w.callback=s??null,gi(l,w,m),o.current.lanes=m,xc(o,m,h),Zt(o,h),o}function Cu(o,s,l,h){var m=s.current,w=Rt(),k=ki(m);return l=CD(l),s.context===null?s.context=l:s.pendingContext=l,s=zo(w,k),s.payload={element:o},h=h===void 0?null:h,h!==null&&(s.callback=h),o=gi(m,s,k),o!==null&&(io(o,m,k,w),Cd(o,m,k)),k}function eu(o){if(o=o.current,!o.child)return null;switch(o.child.tag){case 5:return o.child.stateNode;default:return o.child.stateNode}}function d2(o,s){if(o=o.memoizedState,o!==null&&o.dehydrated!==null){var l=o.retryLane;o.retryLane=l!==0&&l<s?l:s}}function Ff(o,s){d2(o,s),(o=o.alternate)&&d2(o,s)}function BR(){return null}var xD=typeof reportError=="function"?reportError:function(o){console.error(o)};function Vf(o){this._internalRoot=o}yu.prototype.render=Vf.prototype.render=function(o){var s=this._internalRoot;if(s===null)throw Error(ee(409));Cu(o,s,null,null)};yu.prototype.unmount=Vf.prototype.unmount=function(){var o=this._internalRoot;if(o!==null){this._internalRoot=null;var s=o.containerInfo;cr(function(){Cu(null,o,null,null)}),s[Fo]=null}};function yu(o){this._internalRoot=o}yu.prototype.unstable_scheduleHydration=function(o){if(o){var s=n5();o={blockedOn:null,target:o,priority:s};for(var l=0;l<si.length&&s!==0&&s<si[l].priority;l++);si.splice(l,0,o),l===0&&i5(o)}};function Uf(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11)}function xu(o){return!(!o||o.nodeType!==1&&o.nodeType!==9&&o.nodeType!==11&&(o.nodeType!==8||o.nodeValue!==" react-mount-point-unstable "))}function u2(){}function NR(o,s,l,h,m){if(m){if(typeof h=="function"){var w=h;h=function(){var y=eu(k);w.call(y)}}var k=yD(s,h,o,0,null,!1,!1,"",u2);return o._reactRootContainer=k,o[Fo]=k.current,cc(o.nodeType===8?o.parentNode:o),cr(),k}for(;m=o.lastChild;)o.removeChild(m);if(typeof h=="function"){var A=h;h=function(){var y=eu(b);A.call(y)}}var b=Rf(o,0,!1,null,null,!1,!1,"",u2);return o._reactRootContainer=b,o[Fo]=b.current,cc(o.nodeType===8?o.parentNode:o),cr(function(){Cu(s,b,l,h)}),b}function Eu(o,s,l,h,m){var w=l._reactRootContainer;if(w){var k=w;if(typeof m=="function"){var A=m;m=function(){var b=eu(k);A.call(b)}}Cu(s,k,o,m)}else k=NR(l,s,o,m,h);return eu(k)}e5=function(o){switch(o.tag){case 3:var s=o.stateNode;if(s.current.memoizedState.isDehydrated){var l=Ra(s.pendingLanes);l!==0&&(af(s,l|1),Zt(s,lt()),!(Ie&6)&&(Ds=lt()+500,Ei()))}break;case 13:cr(function(){var h=Vo(o,1);if(h!==null){var m=Rt();io(h,o,1,m)}}),Ff(o,1)}};cf=function(o){if(o.tag===13){var s=Vo(o,134217728);if(s!==null){var l=Rt();io(s,o,134217728,l)}Ff(o,134217728)}};t5=function(o){if(o.tag===13){var s=ki(o),l=Vo(o,s);if(l!==null){var h=Rt();io(l,o,s,h)}Ff(o,s)}};n5=function(){return Ne};o5=function(o,s){var l=Ne;try{return Ne=o,s()}finally{Ne=l}};Ym=function(o,s,l){switch(s){case"input":if(Hm(o,l),s=l.name,l.type==="radio"&&s!=null){for(l=o;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var h=l[s];if(h!==o&&h.form===o.form){var m=fu(h);if(!m)throw Error(ee(90));PE(h),Hm(h,m)}}}break;case"textarea":OE(o,l);break;case"select":s=l.value,s!=null&&ms(o,!!l.multiple,s,!1)}};HE=jf;WE=cr;var PR={usingClientEntryPoint:!1,Events:[Dc,ss,fu,VE,UE,jf]},ja={findFiberByHostInstance:Xi,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},jR={bundleType:ja.bundleType,version:ja.version,rendererPackageName:ja.rendererPackageName,rendererConfig:ja.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:qo.ReactCurrentDispatcher,findHostInstanceByFiber:function(o){return o=GE(o),o===null?null:o.stateNode},findFiberByHostInstance:ja.findFiberByHostInstance||BR,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var gd=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!gd.isDisabled&&gd.supportsFiber)try{hu=gd.inject(jR),wo=gd}catch{}}wn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=PR;wn.createPortal=function(o,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Uf(s))throw Error(ee(200));return MR(o,s,null,l)};wn.createRoot=function(o,s){if(!Uf(o))throw Error(ee(299));var l=!1,h="",m=xD;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(h=s.identifierPrefix),s.onRecoverableError!==void 0&&(m=s.onRecoverableError)),s=Rf(o,1,!1,null,null,l,!1,h,m),o[Fo]=s.current,cc(o.nodeType===8?o.parentNode:o),new Vf(s)};wn.findDOMNode=function(o){if(o==null)return null;if(o.nodeType===1)return o;var s=o._reactInternals;if(s===void 0)throw typeof o.render=="function"?Error(ee(188)):(o=Object.keys(o).join(","),Error(ee(268,o)));return o=GE(s),o=o===null?null:o.stateNode,o};wn.flushSync=function(o){return cr(o)};wn.hydrate=function(o,s,l){if(!xu(s))throw Error(ee(200));return Eu(null,o,s,!0,l)};wn.hydrateRoot=function(o,s,l){if(!Uf(o))throw Error(ee(405));var h=l!=null&&l.hydratedSources||null,m=!1,w="",k=xD;if(l!=null&&(l.unstable_strictMode===!0&&(m=!0),l.identifierPrefix!==void 0&&(w=l.identifierPrefix),l.onRecoverableError!==void 0&&(k=l.onRecoverableError)),s=yD(s,null,o,1,l??null,m,!1,w,k),o[Fo]=s.current,cc(o),h)for(o=0;o<h.length;o++)l=h[o],m=l._getVersion,m=m(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,m]:s.mutableSourceEagerHydrationData.push(l,m);return new yu(s)};wn.render=function(o,s,l){if(!xu(s))throw Error(ee(200));return Eu(null,o,s,!1,l)};wn.unmountComponentAtNode=function(o){if(!xu(o))throw Error(ee(40));return o._reactRootContainer?(cr(function(){Eu(null,null,o,!1,function(){o._reactRootContainer=null,o[Fo]=null})}),!0):!1};wn.unstable_batchedUpdates=jf;wn.unstable_renderSubtreeIntoContainer=function(o,s,l,h){if(!xu(l))throw Error(ee(200));if(o==null||o._reactInternals===void 0)throw Error(ee(38));return Eu(o,s,l,!1,h)};wn.version="18.3.1-next-f1338f8080-20240426";function ED(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(ED)}catch(o){console.error(o)}}ED(),EE.exports=wn;var OR=EE.exports,h2=OR;Om.createRoot=h2.createRoot,Om.hydrateRoot=h2.hydrateRoot;var DD={exports:{}},SD={};/**
 * @license React
 * use-sync-external-store-with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ic=$;function LR(o,s){return o===s&&(o!==0||1/o===1/s)||o!==o&&s!==s}var zR=typeof Object.is=="function"?Object.is:LR,RR=Ic.useSyncExternalStore,FR=Ic.useRef,VR=Ic.useEffect,UR=Ic.useMemo,HR=Ic.useDebugValue;SD.useSyncExternalStoreWithSelector=function(o,s,l,h,m){var w=FR(null);if(w.current===null){var k={hasValue:!1,value:null};w.current=k}else k=w.current;w=UR(function(){function b(S){if(!y){if(y=!0,I=S,S=h(S),m!==void 0&&k.hasValue){var B=k.value;if(m(B,S))return D=B}return D=S}if(B=D,zR(I,S))return B;var O=h(S);return m!==void 0&&m(B,O)?B:(I=S,D=O)}var y=!1,I,D,v=l===void 0?null:l;return[function(){return b(s())},v===null?void 0:function(){return b(v())}]},[s,l,h,m]);var A=RR(o,w[0],w[1]);return VR(function(){k.hasValue=!0,k.value=A},[A]),HR(A),A};DD.exports=SD;var WR=DD.exports,hn="default"in jm?Zg:jm,p2=Symbol.for("react-redux-context"),m2=typeof globalThis<"u"?globalThis:{};function qR(){if(!hn.createContext)return{};const o=m2[p2]??(m2[p2]=new Map);let s=o.get(hn.createContext);return s||(s=hn.createContext(null),o.set(hn.createContext,s)),s}var vi=qR(),$R=()=>{throw new Error("uSES not initialized!")};function Hf(o=vi){return function(){return hn.useContext(o)}}var ID=Hf(),TD=$R,GR=o=>{TD=o},KR=(o,s)=>o===s;function QR(o=vi){const s=o===vi?ID:Hf(o),l=(h,m={})=>{const{equalityFn:w=KR,devModeChecks:k={}}=typeof m=="function"?{equalityFn:m}:m,{store:A,subscription:b,getServerState:y,stabilityCheck:I,identityFunctionCheck:D}=s();hn.useRef(!0);const v=hn.useCallback({[h.name](B){return h(B)}}[h.name],[h,I,k.stabilityCheck]),S=TD(b.addNestedSub,A.getState,y||A.getState,v,w);return hn.useDebugValue(S),S};return Object.assign(l,{withTypes:()=>l}),l}var YR=QR();function ZR(o){o()}function JR(){let o=null,s=null;return{clear(){o=null,s=null},notify(){ZR(()=>{let l=o;for(;l;)l.callback(),l=l.next})},get(){const l=[];let h=o;for(;h;)l.push(h),h=h.next;return l},subscribe(l){let h=!0;const m=s={callback:l,next:null,prev:s};return m.prev?m.prev.next=m:o=m,function(){!h||o===null||(h=!1,m.next?m.next.prev=m.prev:s=m.prev,m.prev?m.prev.next=m.next:o=m.next)}}}}var g2={notify(){},get:()=>[]};function XR(o,s){let l,h=g2,m=0,w=!1;function k(O){I();const R=h.subscribe(O);let N=!1;return()=>{N||(N=!0,R(),D())}}function A(){h.notify()}function b(){B.onStateChange&&B.onStateChange()}function y(){return w}function I(){m++,l||(l=o.subscribe(b),h=JR())}function D(){m--,l&&m===0&&(l(),l=void 0,h.clear(),h=g2)}function v(){w||(w=!0,I())}function S(){w&&(w=!1,D())}const B={addNestedSub:k,notifyNestedSubs:A,handleChangeWrapper:b,isSubscribed:y,trySubscribe:v,tryUnsubscribe:S,getListeners:()=>h};return B}var e9=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",t9=typeof navigator<"u"&&navigator.product==="ReactNative",n9=e9||t9?hn.useLayoutEffect:hn.useEffect;function o9({store:o,context:s,children:l,serverState:h,stabilityCheck:m="once",identityFunctionCheck:w="once"}){const k=hn.useMemo(()=>{const y=XR(o);return{store:o,subscription:y,getServerState:h?()=>h:void 0,stabilityCheck:m,identityFunctionCheck:w}},[o,h,m,w]),A=hn.useMemo(()=>o.getState(),[o]);n9(()=>{const{subscription:y}=k;return y.onStateChange=y.notifyNestedSubs,y.trySubscribe(),A!==o.getState()&&y.notifyNestedSubs(),()=>{y.tryUnsubscribe(),y.onStateChange=void 0}},[k,A]);const b=s||vi;return hn.createElement(b.Provider,{value:k},l)}var i9=o9;function MD(o=vi){const s=o===vi?ID:Hf(o),l=()=>{const{store:h}=s();return h};return Object.assign(l,{withTypes:()=>l}),l}var r9=MD();function s9(o=vi){const s=o===vi?r9:MD(o),l=()=>s().dispatch;return Object.assign(l,{withTypes:()=>l}),l}var BD=s9();GR(WR.useSyncExternalStoreWithSelector);/**
 * @remix-run/router v1.16.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function kc(){return kc=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var h in l)Object.prototype.hasOwnProperty.call(l,h)&&(o[h]=l[h])}return o},kc.apply(this,arguments)}var di;(function(o){o.Pop="POP",o.Push="PUSH",o.Replace="REPLACE"})(di||(di={}));const f2="popstate";function a9(o){o===void 0&&(o={});function s(m,w){let{pathname:k="/",search:A="",hash:b=""}=pr(m.location.hash.substr(1));return!k.startsWith("/")&&!k.startsWith(".")&&(k="/"+k),Ig("",{pathname:k,search:A,hash:b},w.state&&w.state.usr||null,w.state&&w.state.key||"default")}function l(m,w){let k=m.document.querySelector("base"),A="";if(k&&k.getAttribute("href")){let b=m.location.href,y=b.indexOf("#");A=y===-1?b:b.slice(0,y)}return A+"#"+(typeof w=="string"?w:tu(w))}function h(m,w){Wf(m.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(w)+")")}return l9(s,l,h,o)}function ht(o,s){if(o===!1||o===null||typeof o>"u")throw new Error(s)}function Wf(o,s){if(!o){typeof console<"u"&&console.warn(s);try{throw new Error(s)}catch{}}}function c9(){return Math.random().toString(36).substr(2,8)}function k2(o,s){return{usr:o.state,key:o.key,idx:s}}function Ig(o,s,l,h){return l===void 0&&(l=null),kc({pathname:typeof o=="string"?o:o.pathname,search:"",hash:""},typeof s=="string"?pr(s):s,{state:l,key:s&&s.key||h||c9()})}function tu(o){let{pathname:s="/",search:l="",hash:h=""}=o;return l&&l!=="?"&&(s+=l.charAt(0)==="?"?l:"?"+l),h&&h!=="#"&&(s+=h.charAt(0)==="#"?h:"#"+h),s}function pr(o){let s={};if(o){let l=o.indexOf("#");l>=0&&(s.hash=o.substr(l),o=o.substr(0,l));let h=o.indexOf("?");h>=0&&(s.search=o.substr(h),o=o.substr(0,h)),o&&(s.pathname=o)}return s}function l9(o,s,l,h){h===void 0&&(h={});let{window:m=document.defaultView,v5Compat:w=!1}=h,k=m.history,A=di.Pop,b=null,y=I();y==null&&(y=0,k.replaceState(kc({},k.state,{idx:y}),""));function I(){return(k.state||{idx:null}).idx}function D(){A=di.Pop;let R=I(),N=R==null?null:R-y;y=R,b&&b({action:A,location:O.location,delta:N})}function v(R,N){A=di.Push;let P=Ig(O.location,R,N);l&&l(P,R),y=I()+1;let L=k2(P,y),V=O.createHref(P);try{k.pushState(L,"",V)}catch(G){if(G instanceof DOMException&&G.name==="DataCloneError")throw G;m.location.assign(V)}w&&b&&b({action:A,location:O.location,delta:1})}function S(R,N){A=di.Replace;let P=Ig(O.location,R,N);l&&l(P,R),y=I();let L=k2(P,y),V=O.createHref(P);k.replaceState(L,"",V),w&&b&&b({action:A,location:O.location,delta:0})}function B(R){let N=m.location.origin!=="null"?m.location.origin:m.location.href,P=typeof R=="string"?R:tu(R);return P=P.replace(/ $/,"%20"),ht(N,"No window.location.(origin|href) available to create URL for href: "+P),new URL(P,N)}let O={get action(){return A},get location(){return o(m,k)},listen(R){if(b)throw new Error("A history only accepts one active listener");return m.addEventListener(f2,D),b=R,()=>{m.removeEventListener(f2,D),b=null}},createHref(R){return s(m,R)},createURL:B,encodeLocation(R){let N=B(R);return{pathname:N.pathname,search:N.search,hash:N.hash}},push:v,replace:S,go(R){return k.go(R)}};return O}var b2;(function(o){o.data="data",o.deferred="deferred",o.redirect="redirect",o.error="error"})(b2||(b2={}));function d9(o,s,l){l===void 0&&(l="/");let h=typeof s=="string"?pr(s):s,m=qf(h.pathname||"/",l);if(m==null)return null;let w=ND(o);u9(w);let k=null;for(let A=0;k==null&&A<w.length;++A){let b=C9(m);k=_9(w[A],b)}return k}function ND(o,s,l,h){s===void 0&&(s=[]),l===void 0&&(l=[]),h===void 0&&(h="");let m=(w,k,A)=>{let b={relativePath:A===void 0?w.path||"":A,caseSensitive:w.caseSensitive===!0,childrenIndex:k,route:w};b.relativePath.startsWith("/")&&(ht(b.relativePath.startsWith(h),'Absolute route path "'+b.relativePath+'" nested under path '+('"'+h+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),b.relativePath=b.relativePath.slice(h.length));let y=wi([h,b.relativePath]),I=l.concat(b);w.children&&w.children.length>0&&(ht(w.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+y+'".')),ND(w.children,s,I,y)),!(w.path==null&&!w.index)&&s.push({path:y,score:b9(y,w.index),routesMeta:I})};return o.forEach((w,k)=>{var A;if(w.path===""||!((A=w.path)!=null&&A.includes("?")))m(w,k);else for(let b of PD(w.path))m(w,k,b)}),s}function PD(o){let s=o.split("/");if(s.length===0)return[];let[l,...h]=s,m=l.endsWith("?"),w=l.replace(/\?$/,"");if(h.length===0)return m?[w,""]:[w];let k=PD(h.join("/")),A=[];return A.push(...k.map(b=>b===""?w:[w,b].join("/"))),m&&A.push(...k),A.map(b=>o.startsWith("/")&&b===""?"/":b)}function u9(o){o.sort((s,l)=>s.score!==l.score?l.score-s.score:w9(s.routesMeta.map(h=>h.childrenIndex),l.routesMeta.map(h=>h.childrenIndex)))}const h9=/^:[\w-]+$/,p9=3,m9=2,g9=1,f9=10,k9=-2,w2=o=>o==="*";function b9(o,s){let l=o.split("/"),h=l.length;return l.some(w2)&&(h+=k9),s&&(h+=m9),l.filter(m=>!w2(m)).reduce((m,w)=>m+(h9.test(w)?p9:w===""?g9:f9),h)}function w9(o,s){return o.length===s.length&&o.slice(0,-1).every((h,m)=>h===s[m])?o[o.length-1]-s[s.length-1]:0}function _9(o,s){let{routesMeta:l}=o,h={},m="/",w=[];for(let k=0;k<l.length;++k){let A=l[k],b=k===l.length-1,y=m==="/"?s:s.slice(m.length)||"/",I=A9({path:A.relativePath,caseSensitive:A.caseSensitive,end:b},y);if(!I)return null;Object.assign(h,I.params);let D=A.route;w.push({params:h,pathname:wi([m,I.pathname]),pathnameBase:D9(wi([m,I.pathnameBase])),route:D}),I.pathnameBase!=="/"&&(m=wi([m,I.pathnameBase]))}return w}function A9(o,s){typeof o=="string"&&(o={path:o,caseSensitive:!1,end:!0});let[l,h]=v9(o.path,o.caseSensitive,o.end),m=s.match(l);if(!m)return null;let w=m[0],k=w.replace(/(.)\/+$/,"$1"),A=m.slice(1);return{params:h.reduce((y,I,D)=>{let{paramName:v,isOptional:S}=I;if(v==="*"){let O=A[D]||"";k=w.slice(0,w.length-O.length).replace(/(.)\/+$/,"$1")}const B=A[D];return S&&!B?y[v]=void 0:y[v]=(B||"").replace(/%2F/g,"/"),y},{}),pathname:w,pathnameBase:k,pattern:o}}function v9(o,s,l){s===void 0&&(s=!1),l===void 0&&(l=!0),Wf(o==="*"||!o.endsWith("*")||o.endsWith("/*"),'Route path "'+o+'" will be treated as if it were '+('"'+o.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+o.replace(/\*$/,"/*")+'".'));let h=[],m="^"+o.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(k,A,b)=>(h.push({paramName:A,isOptional:b!=null}),b?"/?([^\\/]+)?":"/([^\\/]+)"));return o.endsWith("*")?(h.push({paramName:"*"}),m+=o==="*"||o==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):l?m+="\\/*$":o!==""&&o!=="/"&&(m+="(?:(?=\\/|$))"),[new RegExp(m,s?void 0:"i"),h]}function C9(o){try{return o.split("/").map(s=>decodeURIComponent(s).replace(/\//g,"%2F")).join("/")}catch(s){return Wf(!1,'The URL path "'+o+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+s+").")),o}}function qf(o,s){if(s==="/")return o;if(!o.toLowerCase().startsWith(s.toLowerCase()))return null;let l=s.endsWith("/")?s.length-1:s.length,h=o.charAt(l);return h&&h!=="/"?null:o.slice(l)||"/"}function y9(o,s){s===void 0&&(s="/");let{pathname:l,search:h="",hash:m=""}=typeof o=="string"?pr(o):o;return{pathname:l?l.startsWith("/")?l:x9(l,s):s,search:S9(h),hash:I9(m)}}function x9(o,s){let l=s.replace(/\/+$/,"").split("/");return o.split("/").forEach(m=>{m===".."?l.length>1&&l.pop():m!=="."&&l.push(m)}),l.length>1?l.join("/"):"/"}function Cm(o,s,l,h){return"Cannot include a '"+o+"' character in a manually specified "+("`to."+s+"` field ["+JSON.stringify(h)+"].  Please separate it out to the ")+("`to."+l+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function E9(o){return o.filter((s,l)=>l===0||s.route.path&&s.route.path.length>0)}function jD(o,s){let l=E9(o);return s?l.map((h,m)=>m===o.length-1?h.pathname:h.pathnameBase):l.map(h=>h.pathnameBase)}function OD(o,s,l,h){h===void 0&&(h=!1);let m;typeof o=="string"?m=pr(o):(m=kc({},o),ht(!m.pathname||!m.pathname.includes("?"),Cm("?","pathname","search",m)),ht(!m.pathname||!m.pathname.includes("#"),Cm("#","pathname","hash",m)),ht(!m.search||!m.search.includes("#"),Cm("#","search","hash",m)));let w=o===""||m.pathname==="",k=w?"/":m.pathname,A;if(k==null)A=l;else{let D=s.length-1;if(!h&&k.startsWith("..")){let v=k.split("/");for(;v[0]==="..";)v.shift(),D-=1;m.pathname=v.join("/")}A=D>=0?s[D]:"/"}let b=y9(m,A),y=k&&k!=="/"&&k.endsWith("/"),I=(w||k===".")&&l.endsWith("/");return!b.pathname.endsWith("/")&&(y||I)&&(b.pathname+="/"),b}const wi=o=>o.join("/").replace(/\/\/+/g,"/"),D9=o=>o.replace(/\/+$/,"").replace(/^\/*/,"/"),S9=o=>!o||o==="?"?"":o.startsWith("?")?o:"?"+o,I9=o=>!o||o==="#"?"":o.startsWith("#")?o:"#"+o;function T9(o){return o!=null&&typeof o.status=="number"&&typeof o.statusText=="string"&&typeof o.internal=="boolean"&&"data"in o}const LD=["post","put","patch","delete"];new Set(LD);const M9=["get",...LD];new Set(M9);/**
 * React Router v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function bc(){return bc=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var h in l)Object.prototype.hasOwnProperty.call(l,h)&&(o[h]=l[h])}return o},bc.apply(this,arguments)}const $f=$.createContext(null),B9=$.createContext(null),mr=$.createContext(null),Du=$.createContext(null),gr=$.createContext({outlet:null,matches:[],isDataRoute:!1}),zD=$.createContext(null);function N9(o,s){let{relative:l}=s===void 0?{}:s;Tc()||ht(!1);let{basename:h,navigator:m}=$.useContext(mr),{hash:w,pathname:k,search:A}=VD(o,{relative:l}),b=k;return h!=="/"&&(b=k==="/"?h:wi([h,k])),m.createHref({pathname:b,search:A,hash:w})}function Tc(){return $.useContext(Du)!=null}function Os(){return Tc()||ht(!1),$.useContext(Du).location}function RD(o){$.useContext(mr).static||$.useLayoutEffect(o)}function FD(){let{isDataRoute:o}=$.useContext(gr);return o?$9():P9()}function P9(){Tc()||ht(!1);let o=$.useContext($f),{basename:s,future:l,navigator:h}=$.useContext(mr),{matches:m}=$.useContext(gr),{pathname:w}=Os(),k=JSON.stringify(jD(m,l.v7_relativeSplatPath)),A=$.useRef(!1);return RD(()=>{A.current=!0}),$.useCallback(function(y,I){if(I===void 0&&(I={}),!A.current)return;if(typeof y=="number"){h.go(y);return}let D=OD(y,JSON.parse(k),w,I.relative==="path");o==null&&s!=="/"&&(D.pathname=D.pathname==="/"?s:wi([s,D.pathname])),(I.replace?h.replace:h.push)(D,I.state,I)},[s,h,k,w,o])}function VD(o,s){let{relative:l}=s===void 0?{}:s,{future:h}=$.useContext(mr),{matches:m}=$.useContext(gr),{pathname:w}=Os(),k=JSON.stringify(jD(m,h.v7_relativeSplatPath));return $.useMemo(()=>OD(o,JSON.parse(k),w,l==="path"),[o,k,w,l])}function j9(o,s){return O9(o,s)}function O9(o,s,l,h){Tc()||ht(!1);let{navigator:m}=$.useContext(mr),{matches:w}=$.useContext(gr),k=w[w.length-1],A=k?k.params:{};k&&k.pathname;let b=k?k.pathnameBase:"/";k&&k.route;let y=Os(),I;if(s){var D;let R=typeof s=="string"?pr(s):s;b==="/"||(D=R.pathname)!=null&&D.startsWith(b)||ht(!1),I=R}else I=y;let v=I.pathname||"/",S=v;if(b!=="/"){let R=b.replace(/^\//,"").split("/");S="/"+v.replace(/^\//,"").split("/").slice(R.length).join("/")}let B=d9(o,{pathname:S}),O=V9(B&&B.map(R=>Object.assign({},R,{params:Object.assign({},A,R.params),pathname:wi([b,m.encodeLocation?m.encodeLocation(R.pathname).pathname:R.pathname]),pathnameBase:R.pathnameBase==="/"?b:wi([b,m.encodeLocation?m.encodeLocation(R.pathnameBase).pathname:R.pathnameBase])})),w,l,h);return s&&O?$.createElement(Du.Provider,{value:{location:bc({pathname:"/",search:"",hash:"",state:null,key:"default"},I),navigationType:di.Pop}},O):O}function L9(){let o=q9(),s=T9(o)?o.status+" "+o.statusText:o instanceof Error?o.message:JSON.stringify(o),l=o instanceof Error?o.stack:null,m={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return $.createElement($.Fragment,null,$.createElement("h2",null,"Unexpected Application Error!"),$.createElement("h3",{style:{fontStyle:"italic"}},s),l?$.createElement("pre",{style:m},l):null,null)}const z9=$.createElement(L9,null);class R9 extends $.Component{constructor(s){super(s),this.state={location:s.location,revalidation:s.revalidation,error:s.error}}static getDerivedStateFromError(s){return{error:s}}static getDerivedStateFromProps(s,l){return l.location!==s.location||l.revalidation!=="idle"&&s.revalidation==="idle"?{error:s.error,location:s.location,revalidation:s.revalidation}:{error:s.error!==void 0?s.error:l.error,location:l.location,revalidation:s.revalidation||l.revalidation}}componentDidCatch(s,l){console.error("React Router caught the following error during render",s,l)}render(){return this.state.error!==void 0?$.createElement(gr.Provider,{value:this.props.routeContext},$.createElement(zD.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function F9(o){let{routeContext:s,match:l,children:h}=o,m=$.useContext($f);return m&&m.static&&m.staticContext&&(l.route.errorElement||l.route.ErrorBoundary)&&(m.staticContext._deepestRenderedBoundaryId=l.route.id),$.createElement(gr.Provider,{value:s},h)}function V9(o,s,l,h){var m;if(s===void 0&&(s=[]),l===void 0&&(l=null),h===void 0&&(h=null),o==null){var w;if((w=l)!=null&&w.errors)o=l.matches;else return null}let k=o,A=(m=l)==null?void 0:m.errors;if(A!=null){let I=k.findIndex(D=>D.route.id&&(A==null?void 0:A[D.route.id])!==void 0);I>=0||ht(!1),k=k.slice(0,Math.min(k.length,I+1))}let b=!1,y=-1;if(l&&h&&h.v7_partialHydration)for(let I=0;I<k.length;I++){let D=k[I];if((D.route.HydrateFallback||D.route.hydrateFallbackElement)&&(y=I),D.route.id){let{loaderData:v,errors:S}=l,B=D.route.loader&&v[D.route.id]===void 0&&(!S||S[D.route.id]===void 0);if(D.route.lazy||B){b=!0,y>=0?k=k.slice(0,y+1):k=[k[0]];break}}}return k.reduceRight((I,D,v)=>{let S,B=!1,O=null,R=null;l&&(S=A&&D.route.id?A[D.route.id]:void 0,O=D.route.errorElement||z9,b&&(y<0&&v===0?(B=!0,R=null):y===v&&(B=!0,R=D.route.hydrateFallbackElement||null)));let N=s.concat(k.slice(0,v+1)),P=()=>{let L;return S?L=O:B?L=R:D.route.Component?L=$.createElement(D.route.Component,null):D.route.element?L=D.route.element:L=I,$.createElement(F9,{match:D,routeContext:{outlet:I,matches:N,isDataRoute:l!=null},children:L})};return l&&(D.route.ErrorBoundary||D.route.errorElement||v===0)?$.createElement(R9,{location:l.location,revalidation:l.revalidation,component:O,error:S,children:P(),routeContext:{outlet:null,matches:N,isDataRoute:!0}}):P()},null)}var UD=function(o){return o.UseBlocker="useBlocker",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o}(UD||{}),nu=function(o){return o.UseBlocker="useBlocker",o.UseLoaderData="useLoaderData",o.UseActionData="useActionData",o.UseRouteError="useRouteError",o.UseNavigation="useNavigation",o.UseRouteLoaderData="useRouteLoaderData",o.UseMatches="useMatches",o.UseRevalidator="useRevalidator",o.UseNavigateStable="useNavigate",o.UseRouteId="useRouteId",o}(nu||{});function U9(o){let s=$.useContext($f);return s||ht(!1),s}function H9(o){let s=$.useContext(B9);return s||ht(!1),s}function W9(o){let s=$.useContext(gr);return s||ht(!1),s}function HD(o){let s=W9(),l=s.matches[s.matches.length-1];return l.route.id||ht(!1),l.route.id}function q9(){var o;let s=$.useContext(zD),l=H9(nu.UseRouteError),h=HD(nu.UseRouteError);return s!==void 0?s:(o=l.errors)==null?void 0:o[h]}function $9(){let{router:o}=U9(UD.UseNavigateStable),s=HD(nu.UseNavigateStable),l=$.useRef(!1);return RD(()=>{l.current=!0}),$.useCallback(function(m,w){w===void 0&&(w={}),l.current&&(typeof m=="number"?o.navigate(m):o.navigate(m,bc({fromRouteId:s},w)))},[o,s])}function Qe(o){ht(!1)}function G9(o){let{basename:s="/",children:l=null,location:h,navigationType:m=di.Pop,navigator:w,static:k=!1,future:A}=o;Tc()&&ht(!1);let b=s.replace(/^\/*/,"/"),y=$.useMemo(()=>({basename:b,navigator:w,static:k,future:bc({v7_relativeSplatPath:!1},A)}),[b,A,w,k]);typeof h=="string"&&(h=pr(h));let{pathname:I="/",search:D="",hash:v="",state:S=null,key:B="default"}=h,O=$.useMemo(()=>{let R=qf(I,b);return R==null?null:{location:{pathname:R,search:D,hash:v,state:S,key:B},navigationType:m}},[b,I,D,v,S,B,m]);return O==null?null:$.createElement(mr.Provider,{value:y},$.createElement(Du.Provider,{children:l,value:O}))}function fr(o){let{children:s,location:l}=o;return j9(Tg(s),l)}new Promise(()=>{});function Tg(o,s){s===void 0&&(s=[]);let l=[];return $.Children.forEach(o,(h,m)=>{if(!$.isValidElement(h))return;let w=[...s,m];if(h.type===$.Fragment){l.push.apply(l,Tg(h.props.children,w));return}h.type!==Qe&&ht(!1),!h.props.index||!h.props.children||ht(!1);let k={id:h.props.id||w.join("-"),caseSensitive:h.props.caseSensitive,element:h.props.element,Component:h.props.Component,index:h.props.index,path:h.props.path,loader:h.props.loader,action:h.props.action,errorElement:h.props.errorElement,ErrorBoundary:h.props.ErrorBoundary,hasErrorBoundary:h.props.ErrorBoundary!=null||h.props.errorElement!=null,shouldRevalidate:h.props.shouldRevalidate,handle:h.props.handle,lazy:h.props.lazy};h.props.children&&(k.children=Tg(h.props.children,w)),l.push(k)}),l}/**
 * React Router DOM v6.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Mg(){return Mg=Object.assign?Object.assign.bind():function(o){for(var s=1;s<arguments.length;s++){var l=arguments[s];for(var h in l)Object.prototype.hasOwnProperty.call(l,h)&&(o[h]=l[h])}return o},Mg.apply(this,arguments)}function K9(o,s){if(o==null)return{};var l={},h=Object.keys(o),m,w;for(w=0;w<h.length;w++)m=h[w],!(s.indexOf(m)>=0)&&(l[m]=o[m]);return l}function Q9(o){return!!(o.metaKey||o.altKey||o.ctrlKey||o.shiftKey)}function Y9(o,s){return o.button===0&&(!s||s==="_self")&&!Q9(o)}const Z9=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","unstable_viewTransition"],J9="6";try{window.__reactRouterVersion=J9}catch{}const X9="startTransition",_2=jm[X9];function eF(o){let{basename:s,children:l,future:h,window:m}=o,w=$.useRef();w.current==null&&(w.current=a9({window:m,v5Compat:!0}));let k=w.current,[A,b]=$.useState({action:k.action,location:k.location}),{v7_startTransition:y}=h||{},I=$.useCallback(D=>{y&&_2?_2(()=>b(D)):b(D)},[b,y]);return $.useLayoutEffect(()=>k.listen(I),[k,I]),$.createElement(G9,{basename:s,children:l,location:A.location,navigationType:A.action,navigator:k,future:h})}const tF=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",nF=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,jt=$.forwardRef(function(s,l){let{onClick:h,relative:m,reloadDocument:w,replace:k,state:A,target:b,to:y,preventScrollReset:I,unstable_viewTransition:D}=s,v=K9(s,Z9),{basename:S}=$.useContext(mr),B,O=!1;if(typeof y=="string"&&nF.test(y)&&(B=y,tF))try{let L=new URL(window.location.href),V=y.startsWith("//")?new URL(L.protocol+y):new URL(y),G=qf(V.pathname,S);V.origin===L.origin&&G!=null?y=G+V.search+V.hash:O=!0}catch{}let R=N9(y,{relative:m}),N=oF(y,{replace:k,state:A,target:b,preventScrollReset:I,relative:m,unstable_viewTransition:D});function P(L){h&&h(L),L.defaultPrevented||N(L)}return $.createElement("a",Mg({},v,{href:B||R,onClick:O||w?h:P,ref:l,target:b}))});var A2;(function(o){o.UseScrollRestoration="useScrollRestoration",o.UseSubmit="useSubmit",o.UseSubmitFetcher="useSubmitFetcher",o.UseFetcher="useFetcher",o.useViewTransitionState="useViewTransitionState"})(A2||(A2={}));var v2;(function(o){o.UseFetcher="useFetcher",o.UseFetchers="useFetchers",o.UseScrollRestoration="useScrollRestoration"})(v2||(v2={}));function oF(o,s){let{target:l,replace:h,state:m,preventScrollReset:w,relative:k,unstable_viewTransition:A}=s===void 0?{}:s,b=FD(),y=Os(),I=VD(o,{relative:k});return $.useCallback(D=>{if(Y9(D,l)){D.preventDefault();let v=h!==void 0?h:tu(y)===tu(I);b(o,{replace:v,state:m,preventScrollReset:w,relative:k,unstable_viewTransition:A})}},[y,b,I,h,m,l,o,w,k,A])}const WD=o=>$.createElement("svg",{viewBox:"0 0 1043.63 592.71",className:"q r",...o},$.createElement("g",{"data-name":"Layer 2"},$.createElement("g",{"data-name":"Layer 1"},$.createElement("path",{d:"M588.67 296.36c0 163.67-131.78 296.35-294.33 296.35S0 460 0 296.36 131.78 0 294.34 0s294.33 132.69 294.33 296.36M911.56 296.36c0 154.06-65.89 279-147.17 279s-147.17-124.94-147.17-279 65.88-279 147.16-279 147.17 124.9 147.17 279M1043.63 296.36c0 138-23.17 249.94-51.76 249.94s-51.75-111.91-51.75-249.94 23.17-249.94 51.75-249.94 51.76 111.9 51.76 249.94"})))),qD=o=>$.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none","aria-label":"Notifications",...o},$.createElement("path",{d:"M15 18.5a3 3 0 1 1-6 0",stroke:"currentColor",strokeLinecap:"round"}),$.createElement("path",{d:"M5.5 10.53V9a6.5 6.5 0 0 1 13 0v1.53c0 1.42.56 2.78 1.57 3.79l.03.03c.26.26.4.6.4.97v2.93c0 .14-.11.25-.25.25H3.75a.25.25 0 0 1-.25-.25v-2.93c0-.37.14-.71.4-.97l.03-.03c1-1 1.57-2.37 1.57-3.79z",stroke:"currentColor",strokeLinejoin:"round"})),Bg=o=>$.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none","aria-label":"Search",...o},$.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M4.1 11.06a6.95 6.95 0 1 1 13.9 0 6.95 6.95 0 0 1-13.9 0zm6.94-8.05a8.05 8.05 0 1 0 5.13 14.26l3.75 3.75a.56.56 0 1 0 .8-.79l-3.74-3.73A8.05 8.05 0 0 0 11.04 3v.01z",fill:"currentColor"})),$D=o=>$.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none","aria-label":"Write",...o},$.createElement("path",{d:"M14 4a.5.5 0 0 0 0-1v1zm7 6a.5.5 0 0 0-1 0h1zm-7-7H4v1h10V3zM3 4v16h1V4H3zm1 17h16v-1H4v1zm17-1V10h-1v10h1zm-1 1a1 1 0 0 0 1-1h-1v1zM3 20a1 1 0 0 0 1 1v-1H3zM4 3a1 1 0 0 0-1 1h1V3z",fill:"currentColor"}),$.createElement("path",{d:"M17.5 4.5l-8.46 8.46a.25.25 0 0 0-.06.1l-.82 2.47c-.07.2.12.38.31.31l2.47-.82a.25.25 0 0 0 .1-.06L19.5 6.5m-2-2l2.32-2.32c.1-.1.26-.1.36 0l1.64 1.64c.1.1.1.26 0 .36L19.5 6.5m-2-2l2 2",stroke:"currentColor"})),iF=o=>$.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none","aria-label":"Profile",...o},$.createElement("circle",{cx:12,cy:7,r:4.5,stroke:"currentColor"}),$.createElement("path",{d:"M3.5 21.5v-4.34C3.5 15.4 7.3 14 12 14s8.5 1.41 8.5 3.16v4.34",stroke:"currentColor",strokeLinecap:"round"})),rF=o=>$.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none","aria-label":"Lists",...o},$.createElement("path",{d:"M6.44 6.69h0a1.5 1.5 0 0 1 1.06-.44h9c.4 0 .78.16 1.06.44l.35-.35-.35.35c.28.28.44.66.44 1.06v14l-5.7-4.4-.3-.23-.3.23-5.7 4.4v-14c0-.4.16-.78.44-1.06z",stroke:"currentColor"}),$.createElement("path",{d:"M12.5 2.75h-8a2 2 0 0 0-2 2v11.5",stroke:"currentColor",strokeLinecap:"round"})),sF=o=>$.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none","aria-label":"Stories",...o},$.createElement("path",{d:"M4.75 21.5h14.5c.14 0 .25-.11.25-.25V2.75a.25.25 0 0 0-.25-.25H4.75a.25.25 0 0 0-.25.25v18.5c0 .14.11.25.25.25z",stroke:"currentColor"}),$.createElement("path",{d:"M8 8.5h8M8 15.5h5M8 12h8",stroke:"currentColor",strokeLinecap:"round"})),aF=o=>$.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none","aria-label":"Stats",...o},$.createElement("path",{d:"M2.75 19h4.5c.14 0 .25-.11.25-.25v-6.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v6.5c0 .14.11.25.25.25zM9.75 19h4.5c.14 0 .25-.11.25-.25V8.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v10.5c0 .14.11.25.25.25zM16.75 19h4.5c.14 0 .25-.11.25-.25V4.25a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v14.5c0 .14.11.25.25.25z",stroke:"currentColor"})),cF=()=>E.jsxs("div",{className:"nav-dropdown",children:[E.jsx("div",{className:"nav-dropdown__items-container mobile",children:E.jsxs("div",{className:"nav-dropdown__items-container--item",children:[E.jsx($D,{className:"nav-dropdown__items-container--item__icon"}),E.jsx("span",{children:"Write"})]})}),E.jsxs("div",{className:"nav-dropdown__items-container",children:[E.jsxs(jt,{to:"/@simeon.emanuilov",className:"nav-dropdown__items-container--item",children:[E.jsx(iF,{className:"nav-dropdown__items-container--item__icon"}),E.jsx("span",{children:"Profile"})]}),E.jsxs(jt,{to:"/me/lists",className:"nav-dropdown__items-container--item",children:[E.jsx(rF,{className:"nav-dropdown__items-container--item__icon"}),E.jsx("span",{children:"Library"})]}),E.jsxs("div",{className:"nav-dropdown__items-container--item",children:[E.jsx(sF,{className:"nav-dropdown__items-container--item__icon"}),E.jsx("span",{children:"Stories"})]}),E.jsxs("div",{className:"nav-dropdown__items-container--item",children:[E.jsx(aF,{className:"nav-dropdown__items-container--item__icon"}),E.jsx("span",{children:"Stats"})]})]}),E.jsx("div",{className:"nav-dropdown__items-container",children:E.jsx(jt,{to:"/me/settings",className:"nav-dropdown__items-container--item",children:E.jsx("span",{children:"Settings"})})}),E.jsx("div",{className:"nav-dropdown__items-container",children:E.jsx("div",{className:"nav-dropdown__items-container--item",children:E.jsx("span",{children:"Signout"})})})]}),lF="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsJCQcJCQcJCQkJCwkJCQkJCQsJCwsMCwsLDA0QDBEODQ4MEhkSJRodJR0ZHxwpKRYlNzU2GioyPi0pMBk7IRP/2wBDAQcICAsJCxULCxUsHRkdLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCwsLCz/wAARCACrAIEDASIAAhEBAxEB/8QAGwABAQEBAQEBAQAAAAAAAAAAAAEFAgQDBgf/xAA5EAACAgECAwQHBgQHAAAAAAAAAQIDEQQhEjFRQWFxkQUiMoGhsdETNFJywfAVI2KSJDNCQ1Njgv/EABUBAQEAAAAAAAAAAAAAAAAAAAAB/8QAFBEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEQMRAD8A/pYAKgAAAAAAAAAAAAAAEAMmWGTIFy+oIAOwAAAAAAjcYpylJRiubk0kBQeOz0hp45UFKx9fZj5vf4HwfpG/srrS7+JgaYMxekb8711NdyaPtD0hTJ4si4d/tR+pR7QcxlCcVKElKL7Y8isgAHIBgEAoAA7AAAA5nONcJzl7MVl/okBxffXRDilvJ+xBc5d+ehkXXW3yzZLOPZivZiuiRLbZ3WSsnzeyX4YrkkcFDHiAAAAA6qttplxVya6rsa70a2n1EL4tracV68Oneu4xjquydU42QfrRfn3MDdIcV2RthCceUvg+1HRAZCk2AZBNgB9gAAPB6RsaVVSfP+ZLwWyPeY+tlxam3pHhj5Io84AAAAAQEAAEYHv9H2PNlT5NccfHkzQMbSycdRS+snHzWDYYBsgZCCgmQB9wNhsAMXVJrUX/AJk/NG1sZfpGDjdGeNrILfvjsUeMDYbACAACAACMZIB9tNvfR+dGw8GXoYcV/FjauLl4N7I0wDJkMhBfME94A9IAAHn1dP21LSXrx9aHe12HoG4H58M0NZpXl3VLP/JBc/zIzigQAAQrOQKRjOObPZpNM5cN1iwlvXGS5vsk+7oB6dJS6qlxe3N8Ul0XYj0BvmTJBGyNg5YF/fMEygB7AAAAGdm8rC5tvZd7bAmTyX6Kq1uUPUm+ePZl4otuu09e0c2y/peI/wBz+h5f4jbxZdcOH8O+fMo+Nml1NecwbX4oesvgfB5XNNeOUasNdppYy5QfRrK80fX7bTT/ANyp+Lj+oGJnl8D6w02osa4a5Jfin6q+O/wNV26eKz9pSvBxz8D4z12mitpSm+kFhebA5o0Vdb4rHxzW+P8AQn1wz1GbL0hbxZUIKP4W2372fevXUTwp5rffvHPiB6jl9hcppNPKfJp7MjII2cvcrOcgNgM/vcAe4A5nONcZTltGCzL6ICW3V0wc7G8cklzk+iMe/VXXtqT4YdkI8vF9WS+6d9jnLZcoRztGPT6nxKABMgGR46FIBNgUmQJkjYIwPrTqLaX6rzHti90zTqurujxRzs8Si+cWY2Tqu2dUozi+T3XY10YGyyHMLI2RjOPsteT6FbILkHOX1QA0TN9I3ZlCiPKOJ2d8mtl7v1NLK3b5Ld+C3MCybssssfOcnLzKOACMC7EBAABGAyclOQBGynIAjwU5A9eit4Zupv1Z7rpxL6nvyYqk4SjJPeLTXuNhNSUZLtSfmB17wTLBB7dTJxo1Ev8Arkv7vVMM2dZ92v8ABfNGMigyAAQAjAEeQyANyblOQDZy2XJGAICZAnPJq6Z5oqf9OPLYyepp6TbT1/8Ar5gegEz+8gg9esf+Gv8ABfMxsmzrPu1/gvmYxQIUgEJzOn2nL+gEI2V9hOwCZIV8iPkByNisj5+4DlguEcgGael/yK/f8zMfNGnpPu9fi/mB9gdYQIP/2Q==",GD=()=>{const[o,s]=$.useState(!1);return E.jsxs("div",{onClick:()=>{s(!o)},className:"nav-menu",children:[E.jsx("img",{src:lF,alt:"User"}),o?E.jsx(cF,{}):null]})},dF=()=>{const o=FD(),s=l=>{l.preventDefault(),o("/search/posts?query="+l.target.elements[0].value)};return E.jsxs(E.Fragment,{children:[E.jsxs("div",{className:"nav",children:[E.jsxs("div",{className:"nav__left",children:[E.jsx(jt,{to:"/",children:E.jsx(WD,{className:"logo"})}),E.jsxs("form",{onSubmit:s,className:"nav__left--input",children:[E.jsx("input",{type:"text",placeholder:"Search"}),E.jsx(Bg,{className:"nav__left--input__search-icon"})]})]}),E.jsxs("div",{className:"nav__right",children:[E.jsx(Bg,{className:"nav__right--search-icon mobile"}),E.jsxs("div",{className:"nav__right--write mobile",children:[E.jsx($D,{className:"write-icon"}),E.jsx(jt,{to:"/new-story",children:"Write"})]}),E.jsx(qD,{className:"nav__right--notification-icon"}),E.jsx(GD,{})]})]}),E.jsx("hr",{className:"nav-line"})]})},uF=o=>$.createElement("svg",{className:"arrow-left-19px_svg__svgIcon-use",width:"26px",height:"26px",viewBox:"0 0 19 19","aria-hidden":"true",...o},$.createElement("path",{d:"M11.47 13.97L6.99 9.48 11.47 5l.55.5-3.99 3.98 4 4z",fillRule:"evenodd"})),hF=o=>$.createElement("svg",{className:"arrow-left-19px_svg__svgIcon-use",width:"26px",height:"26px",viewBox:"0 0 19 19","aria-hidden":"true",style:{transform:"rotate(180deg)"},...o},$.createElement("path",{d:"M11.47 13.97L6.99 9.48 11.47 5l.55.5-3.99 3.98 4 4z",fillRule:"evenodd"})),pF=o=>$.createElement("svg",{width:19,height:19,className:"hk hl hm",...o},$.createElement("path",{d:"M9 9H3v1h6v6h1v-6h6V9h-6V3H9v6z",fillRule:"evenodd"})),Gf=(o,s,l,h)=>{l.scrollLeft>=20?(s.classList.remove("active"),o.classList.add("active")):(s.classList.add("active"),o.classList.remove("active"));const m=l.scrollWidth-l.clientWidth-20;l.scrollLeft>=m?h.classList.remove("active"):h.classList.add("active")},mF=(o,s,l,h)=>{l.scrollLeft-=100,Gf(o,h,l,s)},gF=(o,s,l,h)=>{l.scrollLeft+=100,Gf(o,h,l,s)},fF=()=>{const o=["Remote Work","Beauty","JavaScript","Leadership","Product Management","Photography","UX","Society","Marketing","Cybersecurity","Freelancing","Lifestyle"],s=$.useRef(),l=$.useRef(),h=$.useRef(),m=$.useRef(),w=()=>{mF(s.current,l.current,h.current,m.current)},k=()=>{gF(s.current,l.current,h.current,m.current)},A=()=>{Gf(s.current,l.current,h.current,m.current)};return E.jsxs("div",{className:"main-nav",children:[E.jsx("div",{className:"main-nav__left--arrow",ref:s,children:E.jsx(uF,{className:"main-nav__left--arrow__icon",onClick:w})}),E.jsx("div",{className:"main-nav__left--plus active",ref:l,children:E.jsx(pF,{className:"main-nav__left--plus__icon"})}),E.jsxs("div",{className:"main-nav__slider",ref:h,onScroll:A,children:[E.jsx("div",{className:"main-nav__slider--item",children:E.jsx("span",{children:"For You"})}),E.jsx("div",{className:"main-nav__slider--item",children:E.jsx("span",{children:"Following"})}),o.map(b=>E.jsx("div",{className:"main-nav__slider--item",children:E.jsx("span",{children:b})}))]}),E.jsx("div",{className:"main-nav__right-arrow active",ref:m,children:E.jsx(hF,{className:"main-nav__right-arrow--icon",onClick:k})})]})},KD=o=>$.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",fill:"none",className:"lm",...o},$.createElement("path",{d:"M17.5 1.25a.5.5 0 0 1 1 0v2.5H21a.5.5 0 0 1 0 1h-2.5v2.5a.5.5 0 0 1-1 0v-2.5H15a.5.5 0 0 1 0-1h2.5v-2.5zm-11 4.5a1 1 0 0 1 1-1H11a.5.5 0 0 0 0-1H7.5a2 2 0 0 0-2 2v14a.5.5 0 0 0 .8.4l5.7-4.4 5.7 4.4a.5.5 0 0 0 .8-.4v-8.5a.5.5 0 0 0-1 0v7.48l-5.2-4a.5.5 0 0 0-.6 0l-5.2 4V5.75z",fill:"#000"})),kF=({post:o})=>{const{author:s,img:l,date:h,postImg:m,topic:w,title:k,content:A}=o;return E.jsxs("div",{className:"article",children:[E.jsxs("div",{className:"article__author",children:[E.jsx("img",{className:"article__author--img",alt:"author",src:l}),E.jsx("span",{className:"article__author--name",children:s}),E.jsx("span",{className:"article__author--dot"}),E.jsx("span",{className:"article__author__date",children:h})]}),E.jsxs("div",{className:"article__post--img",children:[E.jsxs("div",{className:"article__post",children:[E.jsxs(jt,{to:"/@rajputgajanan50/post/top-7-django-commands-every-developer-needs-to-know-dd8e1ec3f987",className:"article__post--content",children:[E.jsx("h3",{className:"article__post--title",children:k}),E.jsx("p",{className:"article__post--para",children:A})]}),E.jsxs("div",{className:"article__extra-info",children:[E.jsx("span",{className:"article__extra-info--topic",children:w}),E.jsx(KD,{className:"article__extra-info--save-icon"})]})]}),E.jsx("img",{className:"article__img",alt:"post",src:m})]})]})},bF=()=>{const o={img:"https://miro.medium.com/v2/resize:fill:48:48/1*8iVO4UV4nuoZF38A1lvjng.jpeg",author:"Ashutosh singh",date:"Nov 13, 2023",title:"Master Django ORM Advanced Concepts",content:"Django ORM can seem straight forward at first but when you start doing complex queries or you want to optimize the queries, this is where it starts to get a bit confusing and complex. But don’t worry in this post will go over some intermediate and advanced ORM concepts that will allow to write complex and optimized queries.",topic:"Python",postImg:"https://miro.medium.com/v2/resize:fill:224:224/1*-0GldCPaHWo2PDsWUYEN5A.png"};let s=[];for(let l=0;l<5;l++)s.push(E.jsx("div",{className:"main-content__article",children:E.jsx(kF,{post:o})}));return E.jsx("div",{className:"main-content",children:s})},wF=()=>E.jsxs("div",{className:"main",children:[E.jsx(fF,{}),E.jsx(bF,{})]}),Kf=({topics:o})=>E.jsx("div",{className:"topics",children:o.map(s=>E.jsx("span",{className:"topics__topic article__extra-info--topic",children:s}))}),_F=()=>{const o=["Transportation","Feminism","Language","React","Life","Typescript","Web Development"];return E.jsxs("div",{className:"recommended-topics",children:[E.jsx("h4",{className:"recommended-topics__title",children:"Recommended topics"}),E.jsx(Kf,{topics:o}),E.jsx(jt,{to:"/explore-topics",className:"recommended-topics__see-more",children:"See more topics"})]})},AF=()=>{const o=[{img:"https://miro.medium.com/v2/resize:fill:32:32/1*ePzYrDdEQnxR48zdk4L6CQ.png",name:"Dennis Ivy",overview:"YouTuber, contributor at @traversymedia , software developer at @appwrite and online instructor."},{img:"https://miro.medium.com/v2/resize:fill:32:32/2*6hvhJMsNdJ2MWbPuIJqTug.jpeg",name:"Leanne Z",overview:"Youtube @CodingBFF"},{img:"https://miro.medium.com/v2/resize:fill:32:32/1*1fQjPI8qFJLLHbtAWk-6sA.jpeg",name:"Paige Niedringhaus",overview:"Staff Software Engineer at Blues, previously a digital marketer. Technical writer &amp; speaker. Co-host of Front-end Fire &amp; LogRocket podcasts"}];return E.jsxs("div",{className:"who-to-follow",children:[E.jsx("h4",{className:"who-to-follow__title recommended-topics__title",children:"Who to follow"}),E.jsx("div",{className:"who-to-follow__people-container",children:o.map(s=>E.jsxs("div",{className:"who-to-follow__person",children:[E.jsx("img",{className:"who-to-follow__person--img",alt:"Person",src:s.img}),E.jsxs("div",{className:"who-to-follow__person--text",children:[E.jsx("h4",{className:"who-to-follow__person--text__name",children:s.name}),E.jsx("p",{className:"who-to-follow__person--text__overview",children:s.overview})]}),E.jsx("button",{className:"who-to-follow__person--follow-btn",children:"Follow"})]}))}),E.jsx(jt,{to:"/me/following/suggestions",className:"who-to-follow__see-more recommended-topics__see-more",children:"See more suggestions"})]})},vF=()=>{const o=[{title:"Tips for Formatting Your Title and Headers",date:"Oct 8, 2019"},{title:"SEO tips to make your stories discoverable and grow your readership",date:"Jan 28, 2020"}];return E.jsxs("div",{className:"recently-saved",children:[E.jsx("h4",{className:"recently-saved__title recommended-topics__title",children:"Recently saved"}),E.jsx("div",{className:"recently-saved__posts-container",children:o.map(s=>E.jsxs("div",{className:"recently-saved__post",children:[E.jsx("h4",{className:"recently-saved__post--title who-to-follow__person--text__name",children:s.title}),E.jsx("p",{className:"recently-saved__post--date",children:s.date})]}))}),E.jsx("p",{className:"recently-saved__see-more recommended-topics__see-more",children:"See all(2)"})]})},CF=()=>E.jsxs("div",{className:"aside",children:[E.jsx(_F,{}),E.jsx(AF,{}),E.jsx(vF,{})]}),yF=()=>E.jsxs("div",{className:"home",children:[E.jsx(wF,{}),E.jsx(CF,{})]}),ou=({action:o,outline:s,children:l})=>{const h=m=>{m.preventDefault(),o&&o()};return E.jsx("button",{onClick:h,className:`blog-post-header-dropdown__follow--follow-btn ${s?"outline":""}`,children:l})},QD=()=>E.jsxs("div",{className:"blog-post-header-dropdown",children:[E.jsxs("div",{className:"blog-post-header-dropdown__header",children:[E.jsx("img",{className:"blog-post-header-dropdown__header--img",alt:"Dropdown",src:"https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg"}),E.jsx("h4",{className:"blog-post-header-dropdown__header--title",children:"Gajanan Rajput"})]}),E.jsx("p",{className:"blog-post-header-dropdown__text",children:"Coding in python one line at a time"}),E.jsxs("div",{className:"blog-post-header-dropdown__follow",children:[E.jsx("span",{className:"blog-post-header-dropdown__follow--followers-count",children:"370 followers"}),E.jsx(ou,{children:"Follow"})]})]}),xF=o=>$.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24","aria-label":"clap",...o},$.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M11.37.83L12 3.28l.63-2.45h-1.26zM13.92 3.95l1.52-2.1-1.18-.4-.34 2.5zM8.59 1.84l1.52 2.11-.34-2.5-1.18.4zM18.52 18.92a4.23 4.23 0 0 1-2.62 1.33l.41-.37c2.39-2.4 2.86-4.95 1.4-7.63l-.91-1.6-.8-1.67c-.25-.56-.19-.98.21-1.29a.7.7 0 0 1 .55-.13c.28.05.54.23.72.5l2.37 4.16c.97 1.62 1.14 4.23-1.33 6.7zm-11-.44l-4.15-4.15a.83.83 0 0 1 1.17-1.17l2.16 2.16a.37.37 0 0 0 .51-.52l-2.15-2.16L3.6 11.2a.83.83 0 0 1 1.17-1.17l3.43 3.44a.36.36 0 0 0 .52 0 .36.36 0 0 0 0-.52L5.29 9.51l-.97-.97a.83.83 0 0 1 0-1.16.84.84 0 0 1 1.17 0l.97.97 3.44 3.43a.36.36 0 0 0 .51 0 .37.37 0 0 0 0-.52L6.98 7.83a.82.82 0 0 1-.18-.9.82.82 0 0 1 .76-.51c.22 0 .43.09.58.24l5.8 5.79a.37.37 0 0 0 .58-.42L13.4 9.67c-.26-.56-.2-.98.2-1.29a.7.7 0 0 1 .55-.13c.28.05.55.23.73.5l2.2 3.86c1.3 2.38.87 4.59-1.29 6.75a4.65 4.65 0 0 1-4.19 1.37 7.73 7.73 0 0 1-4.07-2.25zm3.23-12.5l2.12 2.11c-.41.5-.47 1.17-.13 1.9l.22.46-3.52-3.53a.81.81 0 0 1-.1-.36c0-.23.09-.43.24-.59a.85.85 0 0 1 1.17 0zm7.36 1.7a1.86 1.86 0 0 0-1.23-.84 1.44 1.44 0 0 0-1.12.27c-.3.24-.5.55-.58.89-.25-.25-.57-.4-.91-.47-.28-.04-.56 0-.82.1l-2.18-2.18a1.56 1.56 0 0 0-2.2 0c-.2.2-.33.44-.4.7a1.56 1.56 0 0 0-2.63.75 1.6 1.6 0 0 0-2.23-.04 1.56 1.56 0 0 0 0 2.2c-.24.1-.5.24-.72.45a1.56 1.56 0 0 0 0 2.2l.52.52a1.56 1.56 0 0 0-.75 2.61L7 19a8.46 8.46 0 0 0 4.48 2.45 5.18 5.18 0 0 0 3.36-.5 4.89 4.89 0 0 0 4.2-1.51c2.75-2.77 2.54-5.74 1.43-7.59L18.1 7.68z"})),EF=o=>$.createElement("svg",{width:24,height:24,viewBox:"0 0 24 24",className:"kf",...o},$.createElement("path",{d:"M18 16.8a7.14 7.14 0 0 0 2.24-5.32c0-4.12-3.53-7.48-8.05-7.48C7.67 4 4 7.36 4 11.48c0 4.13 3.67 7.48 8.2 7.48a8.9 8.9 0 0 0 2.38-.32c.23.2.48.39.75.56 1.06.69 2.2 1.04 3.4 1.04.22 0 .4-.11.48-.29a.5.5 0 0 0-.04-.52 6.4 6.4 0 0 1-1.16-2.65v.02zm-3.12 1.06l-.06-.22-.32.1a8 8 0 0 1-2.3.33c-4.03 0-7.3-2.96-7.3-6.59S8.17 4.9 12.2 4.9c4 0 7.1 2.96 7.1 6.6 0 1.8-.6 3.47-2.02 4.72l-.2.16v.26l.02.3a6.74 6.74 0 0 0 .88 2.4 5.27 5.27 0 0 1-2.17-.86c-.28-.17-.72-.38-.94-.59l.01-.02z"})),Su=()=>E.jsxs("div",{className:"blog-post-engagement-summary",children:[E.jsxs("div",{className:"blog-post-engagement-summary__item summary-1",children:[E.jsx(xF,{className:"blog-post-engagement-summary__item--icon"}),E.jsx("span",{className:"blog-post-engagement-summary__item--text",children:"273"})]}),E.jsxs("div",{className:"blog-post-engagement-summary__item summary-2",children:[E.jsx(EF,{className:"blog-post-engagement-summary__item--icon"}),E.jsx("span",{className:"blog-post-engagement-summary__item--text",children:"3"})]}),E.jsx("div",{className:"blog-post-engagement-summary__item",children:E.jsx(KD,{className:"blog-post-engagement-summary__item--icon"})})]}),Mc=({length:o,img:s,showDropdown:l})=>E.jsxs("div",{style:{width:`${o}px`,height:`${o}px`},className:"post-profile-image",children:[E.jsx("img",{className:"post-profile-image__img",alt:"post author",src:s}),E.jsx("div",{className:"post-profile-image__overlay"}),l?E.jsx(QD,{}):null]}),Iu=({name:o,fs:s})=>E.jsxs("span",{style:{fontSize:`${s}px`},className:"post-author-name",children:[o,E.jsx(QD,{})]}),DF=()=>E.jsx("div",{className:"blog-post-header",children:E.jsxs("div",{className:"adjust-width",children:[E.jsx("h1",{className:"blog-post-header__title",children:"Top 7 Django Commands Every Developer Needs to Know"}),E.jsxs("div",{className:"blog-post-header__author",children:[E.jsx("div",{className:"blog-post-header__author--img-container",children:E.jsx(Mc,{length:45,img:"https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg",showDropdown:!0})}),E.jsxs("div",{className:"blog-post-header__author--text",children:[E.jsxs("div",{className:"blog-post-header__author--text__name--follow",children:[E.jsx(Iu,{name:"Gajanan Rajput",fs:14}),E.jsx("span",{className:"article__author--dot"}),E.jsx("span",{className:"blog-post-header__author--text__follow",children:"Follow"})]}),E.jsx("p",{className:"blog-post-header__author--text__date",children:"Apr 2, 2024"})]})]}),E.jsx("div",{className:"blog-post-header__engagement-container",children:E.jsx(Su,{})})]})}),SF=()=>{const o=["Django","Django Commands","Google","Medium","Python"];return E.jsx("div",{className:"blog-post-content",children:E.jsxs("div",{className:"adjust-width",children:[E.jsxs("div",{className:"blog-post-content__article",children:[E.jsx("img",{src:"https://miro.medium.com/v2/resize:fit:720/format:webp/1*5_8Q7wfGp3zoN7ktlAlcHw.png"}),E.jsx("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sodales risus eu tempor faucibus urna consequat risus sociosqu viverra hac facilisis orci iaculis consequat massa. Congue lorem ultrices dictum dictumst lectus aptent imperdiet euismod erat rutrum sollicitudin bibendum sociosqu. Sodales etiam sagittis nostra erat sagittis semper class eget cubilia hac aenean vulputate sagittis. Mauris sodales sem felis tempus primis rhoncus senectus."}),E.jsx("p",{children:"Nibh fermentum amet vivamus ante felis consectetur torquent placerat blandit adipiscing scelerisque fusce mollis. Consequat class fermentum quis torquent potenti lobortis blandit platea semper suspendisse diam integer donec sollicitudin."}),E.jsx("p",{children:"Lacus neque ullamcorper tempor primis mauris sem augue mollis ornare purus nullam at bibendum curae velit. Nostra finibus ante himenaeos magna mi vivamus viverra per justo quis."}),E.jsx("p",{children:"Metus feugiat vivamus ornare vitae vulputate porta adipiscing pharetra ut hac volutpat elit lacus. Bibendum proin nec a risus fusce sed per lacus pharetra vehicula imperdiet id eros tristique nullam. Maecenas molestie proin neque aliquet dapibus elementum dolor consequat suspendisse vivamus vehicula lobortis. Netus phasellus amet convallis sollicitudin consequat vivamus faucibus sed consequat aenean eget pulvinar platea ullamcorper."}),E.jsx("p",{children:"Pharetra aliquet lectus sodales litora venenatis nec lorem placerat euismod aliquam nunc viverra. Sed fringilla fusce accumsan proin potenti lorem mattis egestas augue vestibulum fermentum pellentesque enim congue. Laoreet hac mollis ligula senectus enim lacus felis ipsum platea tincidunt. Semper pulvinar egestas hendrerit nam vitae mi condimentum accumsan venenatis. Pulvinar viverra lorem phasellus tincidunt molestie placerat dictumst magna orci id imperdiet pharetra vivamus est."}),E.jsx("p",{children:"Arcu potenti risus ac curae et ac ligula tincidunt purus orci praesent. Vestibulum convallis libero integer habitasse erat molestie urna venenatis porta praesent egestas."}),E.jsx("p",{children:"Ut aliquam egestas potenti fringilla erat phasellus suscipit leo aliquet massa sodales pulvinar habitasse posuere egestas. Platea eleifend tortor suspendisse amet fusce non ligula porta sociosqu maecenas elementum. Ex hac conubia dolor metus torquent auctor eleifend tempor praesent tempus vestibulum class morbi dignissim mauris. Himenaeos arcu ultrices duis tincidunt scelerisque elementum ipsum maecenas integer nulla. Sollicitudin a enim metus vel erat augue commodo arcu pharetra nulla maecenas dignissim urna curae convallis."}),E.jsx("p",{children:"Sed integer ligula aliquam quam aptent vestibulum lorem lacus rutrum turpis. Porta platea tempor suspendisse placerat hac quisque vivamus non sagittis."}),E.jsx("p",{children:"Aliquam hendrerit ex felis porta sem molestie ad ultrices id dignissim finibus consequat phasellus inceptos. Potenti porttitor porta nisl auctor nullam egestas rutrum sagittis dapibus tincidunt erat aliquam varius maximus vivamus. Porttitor molestie consectetur eget tristique sit feugiat."}),E.jsx("p",{children:"Nulla quis felis rutrum sodales tellus per donec quam lorem tempor pulvinar rutrum. Sed nullam fusce aliquam elementum elit himenaeos. Fringilla tincidunt proin et nibh odio interdum cursus tristique ullamcorper neque. Erat sodales ex lectus taciti adipiscing proin."}),E.jsx("p",{children:"Sociosqu dictum tempus fames dui netus accumsan vestibulum conubia augue finibus proin adipiscing. Eros ultricies quis etiam lacus bibendum vehicula vulputate aliquam ipsum."}),E.jsx("p",{children:"Phasellus imperdiet dapibus sit commodo nisi consequat ullamcorper dapibus ultrices potenti senectus etiam egestas varius. Primis primis eget gravida ante rhoncus velit facilisis molestie nam dui maximus augue neque facilisis convallis. Mollis hendrerit risus dapibus ac nec ipsum justo velit rutrum nostra. Lectus vulputate facilisis et interdum convallis sem placerat torquent per pellentesque ornare."}),E.jsx("p",{children:"Sed etiam finibus nullam eget accumsan pulvinar est. Duis varius lorem nisi nisi potenti rhoncus potenti nisi urna arcu dapibus scelerisque rhoncus potenti. Justo donec ullamcorper habitant consequat metus pulvinar senectus convallis ornare taciti. Nulla ex habitasse gravida consequat elementum elit."}),E.jsx("p",{children:"Aptent fringilla imperdiet lectus etiam habitasse velit a orci nostra primis dignissim venenatis orci. Congue ex elit pharetra velit massa."}),E.jsx("p",{children:"Luctus tortor adipiscing velit vehicula netus nibh varius tempus lectus nostra felis tempus. Ante scelerisque etiam in commodo velit id egestas. Nunc enim per nostra nisi netus turpis habitasse cubilia imperdiet. Vel cras nostra eget sapien torquent phasellus accumsan."})]}),E.jsx(Kf,{topics:o}),E.jsx("div",{className:"blog-post-content__engagement-summary",children:E.jsx(Su,{})})]})})},IF=()=>E.jsxs("div",{className:"posts-grid-item",children:[E.jsx("img",{className:"posts-grid-item__post-img",alt:"Post",src:"https://miro.medium.com/v2/resize:fit:679/1*QCQqlZr6doDP-cszzpaSpw.png"}),E.jsxs("div",{className:"posts-grid-item__author",children:[E.jsx("div",{className:"posts-grid-item__author--img",children:E.jsx(Mc,{length:22,img:"https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg",showDropdown:!0})}),E.jsx(Iu,{fs:12,name:"Gajanan Rajput"})]}),E.jsx("h4",{className:"posts-grid-item__post-title",children:"TypeError: string argument without an encoding in Python"}),E.jsx("p",{className:"posts-grid-item__post-content",children:"Python is a powerful and flexible programming language, used widely for web development, data analysis, artificial intelligence, and many other applications."}),E.jsx("p",{className:"posts-grid-item__date",children:"Apr 6, 2023"}),E.jsx(Su,{})]}),C2=()=>{let o=[];for(let s=0;s<4;s++)o.push(E.jsx(IF,{}));return E.jsx("div",{class:"author-posts-grid",children:o})},wc=o=>E.jsx("div",{className:"blog-post-author-section__author-text--btn",children:E.jsx(ou,{...o})}),TF=()=>E.jsxs("div",{className:"blog-post-author-section",children:[E.jsxs("div",{className:"adjust-width",children:[E.jsxs("div",{className:"blog-post-author-section__author-text",children:[E.jsxs("div",{className:"blog-post-author-section__author-text--left",children:[E.jsx(Mc,{length:70,img:"https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg"}),E.jsx("h3",{children:"Written by Gajanan Rajput"}),E.jsx("span",{children:"370 followers"}),E.jsx("p",{children:"Coding in Python, one line at a time"})]}),E.jsx(wc,{children:"Follow"})]}),E.jsxs("div",{className:"blog-post-author-section__author-posts",children:[E.jsx("h4",{className:"blog-post-author-section__author-posts--header",children:"More from Gajanan Rajput"}),E.jsx(C2,{}),E.jsx("hr",{className:"blog-post-author-section__author-posts--line"}),E.jsx("button",{className:"blog-post-author-section__author-posts--see-all",children:"See all from Gajanan Rajput"})]})]}),E.jsx("hr",{className:"blog-post-author-section__author-posts--line author-posts-underline"}),E.jsx("div",{className:"adjust-width",children:E.jsxs("div",{className:"blog-post-author-section__recommendations",children:[E.jsx("h4",{className:"blog-post-author-section__author-posts--header recommendations-header",children:"Recommended from Medium"}),E.jsx(C2,{}),E.jsx("hr",{className:"blog-post-author-section__author-posts--line"}),E.jsx("button",{className:"blog-post-author-section__author-posts--see-all",children:"See more recommendations"})]})})]}),MF=()=>E.jsxs("div",{className:"blog-post",children:[E.jsx(DF,{}),E.jsx(SF,{}),E.jsx(TF,{})]}),Tu=({links:o})=>{const{pathname:s}=Os();return E.jsx("div",{className:"search-nav",children:o.map(({path:l,text:h})=>E.jsx("div",{className:`search-nav__item ${s===l?"active":""}`,children:E.jsx("span",{children:E.jsx(jt,{to:l,children:h})})}))})},BF=()=>{Os();const o=[{path:"/search/posts",text:"Stories"},{path:"/search/users",text:"People"},{path:"/search/tags",text:"Topics"}];return E.jsxs("div",{className:"search-header",children:[E.jsxs("h1",{className:"search-header__title",children:[E.jsx("span",{children:"Results for"})," django middleware"]}),E.jsx(Tu,{links:o})]})},NF=o=>$.createElement("svg",{width:21,height:21,viewBox:"0 0 21 21",...o},$.createElement("path",{d:"M4 7.33L10.03 14l.5.55.5-.55 5.96-6.6-.98-.9-5.98 6.6h1L4.98 6.45z",fillRule:"evenodd"})),Qf=()=>E.jsx("div",{className:"search-show-more",children:E.jsxs("div",{className:"search-show-more__text",children:[E.jsx("span",{children:"Show more"}),E.jsx(NF,{className:"icon"})]})}),PF=()=>E.jsxs("div",{className:"search-item",children:[E.jsxs("div",{className:"search-item__author",children:[E.jsx("div",{className:"search-item__author--img",children:E.jsx(Mc,{length:20,img:"https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg",showDropdown:!0})}),E.jsx(Iu,{name:"Gajanan Rajput",fs:13})]}),E.jsxs("div",{className:"search-item__content",children:[E.jsxs("div",{className:"search-item__content--text",children:[E.jsx("h2",{className:"search-item__content--text__title",children:"How to write Django middleware in 10 minutes"}),E.jsx("p",{className:"search-item__content--text__para",children:"What are middleware"}),E.jsx("p",{className:"search-item__content--text__date",children:"Oct 15, 2019"}),E.jsx(Su,{})]}),E.jsx("img",{className:"search-item__content--img",alt:"Post",src:"https://miro.medium.com/v2/resize:fit:679/1*QCQqlZr6doDP-cszzpaSpw.png"})]})]}),Mu=()=>{const o=[];for(let s=0;s<5;s++)o.push(E.jsx("div",{className:"posts-collection__item",children:E.jsx(PF,{})},s));return E.jsx("div",{className:"posts-collection",children:o})},jF=()=>E.jsxs("div",{className:"search-collection",children:[E.jsx(Mu,{}),E.jsx(Qf,{})]}),OF=o=>$.createElement("svg",{width:16,height:16,viewBox:"0 0 16 16",fill:"none",className:"ob",...o},$.createElement("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M3 14V2h10v12H3zM2.75 1a.75.75 0 0 0-.75.75v12.5c0 .41.34.75.75.75h10.5c.41 0 .75-.34.75-.75V1.75a.75.75 0 0 0-.75-.75H2.75zM5 10.5a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1H5zM4.5 9c0-.28.22-.5.5-.5h6a.5.5 0 0 1 0 1H5a.5.5 0 0 1-.5-.5zm1.25-2.5h4.5c.14 0 .25-.11.25-.25v-1.5a.25.25 0 0 0-.25-.25h-4.5a.25.25 0 0 0-.25.25v1.5c0 .14.11.25.25.25z",fill:"currentColor"})),LF=({item:o,otherPages:s})=>E.jsxs("div",{className:`search-users-item ${s?"other-pages":""}`,children:[o.img?E.jsx("img",{className:"search-users-item__img",alt:"User",src:o.img}):E.jsx("div",{className:"search-users-item__img-icon",children:E.jsx(OF,{})}),E.jsxs("div",{className:"search-users-item__user",children:[E.jsx("h5",{className:`search-users-item__user--name ${s?"other-pages":""}`,children:o.name}),o.text?E.jsx("div",{className:`search-users-item__user--overview ${s?"other-pages":""}`,children:o.text}):E.jsxs("div",{className:`search-users-item__user--overview ${s?"other-pages":""}`,children:[E.jsxs("span",{className:"stories-count",children:[o.storiesCount," Stories"]}),E.jsx("span",{className:"stories-dot"}),E.jsxs("span",{className:"writes-count",children:[o.writersCount," Writers"]})]})]}),E.jsx("span",{className:`search-users-item__follow-btn ${s?"other-pages":""}`,children:E.jsx(wc,{children:"Follow"})})]}),Ss=({items:o,underline:s,otherPages:l})=>E.jsx("div",{className:"users-collection",children:o.map((h,m)=>E.jsx("div",{className:`users-collection__item ${s?"underline":""}`,children:E.jsx(LF,{otherPages:!!l,item:h})},m))}),zF=()=>{const o=[];for(let s=0;s<5;s++)o.push({img:"https://miro.medium.com/v2/resize:fill:88:88/1*7BILKaMoDk90qDxKDYKP3w@2x.jpeg",name:"Gajanan Rajput",text:"Lorem ipsum felis magna neque quam curabitur ullamcorper, eleifend aliquam cras fringilla mattis torquent, adipiscing semper etiam fringilla habitant metus."});return E.jsxs("div",{className:"search-users-collection",children:[E.jsx(Ss,{items:o,underline:!0}),E.jsx(Qf,{})]})},RF=()=>{let o=[];for(let s=0;s<20;s++)o.push("Django Middleware");return E.jsxs("div",{className:"search-topics-collection",children:[E.jsx(Kf,{topics:o}),E.jsx(Qf,{})]})},FF=()=>E.jsxs("div",{className:"search",children:[E.jsx(BF,{}),E.jsxs(fr,{children:[E.jsx(Qe,{exact:!0,path:"posts",element:E.jsx(jF,{})}),E.jsx(Qe,{exact:!0,path:"users",element:E.jsx(zF,{})}),E.jsx(Qe,{exact:!0,path:"tags",element:E.jsx(RF,{})})]})]}),VF=()=>E.jsxs("div",{className:"write-header",children:[E.jsxs("div",{className:"write-header__left",children:[E.jsx(jt,{to:"/",children:E.jsx(WD,{className:"write-header__left--logo-icon"})}),E.jsx("span",{className:"write-header__left--draft-text",children:"Draft"})]}),E.jsxs("div",{className:"write-header__right",children:[E.jsx(ou,{children:"Publish"}),E.jsx(ou,{children:"Save Draft"}),E.jsx(qD,{className:"write-header__right--notification-icon"}),E.jsx(GD,{})]})]});var ym={exports:{}},xm,y2;function UF(){if(y2)return xm;y2=1;var o="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";return xm=o,xm}var Em,x2;function HF(){if(x2)return Em;x2=1;var o=UF();function s(){}function l(){}return l.resetWarningCache=s,Em=function(){function h(k,A,b,y,I,D){if(D!==o){var v=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw v.name="Invariant Violation",v}}h.isRequired=h;function m(){return h}var w={array:h,bigint:h,bool:h,func:h,number:h,object:h,string:h,symbol:h,any:h,arrayOf:m,element:h,elementType:h,instanceOf:m,node:h,objectOf:m,oneOf:m,oneOfType:m,shape:m,exact:m,checkPropTypes:l,resetWarningCache:s};return w.PropTypes=w,w},Em}var E2;function YD(){return E2||(E2=1,ym.exports=HF()()),ym.exports}var J=YD(),Ng=function(){return Ng=Object.assign||function(o){for(var s,l=1,h=arguments.length;l<h;l++){s=arguments[l];for(var m in s)Object.prototype.hasOwnProperty.call(s,m)&&(o[m]=s[m])}return o},Ng.apply(this,arguments)},ZD={onActivate:J.func,onAddUndo:J.func,onBeforeAddUndo:J.func,onBeforeExecCommand:J.func,onBeforeGetContent:J.func,onBeforeRenderUI:J.func,onBeforeSetContent:J.func,onBeforePaste:J.func,onBlur:J.func,onChange:J.func,onClearUndos:J.func,onClick:J.func,onContextMenu:J.func,onCommentChange:J.func,onCompositionEnd:J.func,onCompositionStart:J.func,onCompositionUpdate:J.func,onCopy:J.func,onCut:J.func,onDblclick:J.func,onDeactivate:J.func,onDirty:J.func,onDrag:J.func,onDragDrop:J.func,onDragEnd:J.func,onDragGesture:J.func,onDragOver:J.func,onDrop:J.func,onExecCommand:J.func,onFocus:J.func,onFocusIn:J.func,onFocusOut:J.func,onGetContent:J.func,onHide:J.func,onInit:J.func,onInput:J.func,onKeyDown:J.func,onKeyPress:J.func,onKeyUp:J.func,onLoadContent:J.func,onMouseDown:J.func,onMouseEnter:J.func,onMouseLeave:J.func,onMouseMove:J.func,onMouseOut:J.func,onMouseOver:J.func,onMouseUp:J.func,onNodeChange:J.func,onObjectResizeStart:J.func,onObjectResized:J.func,onObjectSelected:J.func,onPaste:J.func,onPostProcess:J.func,onPostRender:J.func,onPreProcess:J.func,onProgressState:J.func,onRedo:J.func,onRemove:J.func,onReset:J.func,onSaveContent:J.func,onSelectionChange:J.func,onSetAttrib:J.func,onSetContent:J.func,onShow:J.func,onSubmit:J.func,onUndo:J.func,onVisualAid:J.func,onSkinLoadError:J.func,onThemeLoadError:J.func,onModelLoadError:J.func,onPluginLoadError:J.func,onIconsLoadError:J.func,onLanguageLoadError:J.func,onScriptsLoad:J.func,onScriptsLoadError:J.func},WF=Ng({apiKey:J.string,licenseKey:J.string,id:J.string,inline:J.bool,init:J.object,initialValue:J.string,onEditorChange:J.func,value:J.string,tagName:J.string,cloudChannel:J.string,plugins:J.oneOfType([J.string,J.array]),toolbar:J.oneOfType([J.string,J.array]),disabled:J.bool,textareaName:J.string,tinymceScriptSrc:J.oneOfType([J.string,J.arrayOf(J.string),J.arrayOf(J.shape({src:J.string,async:J.bool,defer:J.bool}))]),rollback:J.oneOfType([J.number,J.oneOf([!1])]),scriptLoading:J.shape({async:J.bool,defer:J.bool,delay:J.number})},ZD),Dm=function(o){return typeof o=="function"},D2=function(o){return o in ZD},S2=function(o){return o.substr(2)},qF=function(o,s,l,h,m,w,k){var A=Object.keys(m).filter(D2),b=Object.keys(w).filter(D2),y=A.filter(function(D){return w[D]===void 0}),I=b.filter(function(D){return m[D]===void 0});y.forEach(function(D){var v=S2(D),S=k[v];l(v,S),delete k[v]}),I.forEach(function(D){var v=h(o,D),S=S2(D);k[S]=v,s(S,v)})},$F=function(o,s,l,h,m){return qF(m,o.on.bind(o),o.off.bind(o),function(w,k){return function(A){var b;return(b=w(k))===null||b===void 0?void 0:b(A,o)}},s,l,h)},I2=0,JD=function(o){var s=Date.now(),l=Math.floor(Math.random()*1e9);return I2++,o+"_"+l+I2+String(s)},T2=function(o){return o!==null&&(o.tagName.toLowerCase()==="textarea"||o.tagName.toLowerCase()==="input")},M2=function(o){return typeof o>"u"||o===""?[]:Array.isArray(o)?o:o.split(" ")},GF=function(o,s){return M2(o).concat(M2(s))},KF=function(){return window.InputEvent&&typeof InputEvent.prototype.getTargetRanges=="function"},QF=function(o){if(!("isConnected"in Node.prototype)){for(var s=o,l=o.parentNode;l!=null;)s=l,l=s.parentNode;return s===o.ownerDocument}return o.isConnected},B2=function(o,s){o!==void 0&&(o.mode!=null&&typeof o.mode=="object"&&typeof o.mode.set=="function"?o.mode.set(s):o.setMode(s))},Pg=function(){return Pg=Object.assign||function(o){for(var s,l=1,h=arguments.length;l<h;l++){s=arguments[l];for(var m in s)Object.prototype.hasOwnProperty.call(s,m)&&(o[m]=s[m])}return o},Pg.apply(this,arguments)},YF=function(o,s,l){var h,m,w=o.createElement("script");w.referrerPolicy="origin",w.type="application/javascript",w.id=s.id,w.src=s.src,w.async=(h=s.async)!==null&&h!==void 0?h:!1,w.defer=(m=s.defer)!==null&&m!==void 0?m:!1;var k=function(){w.removeEventListener("load",k),w.removeEventListener("error",A),l(s.src)},A=function(b){w.removeEventListener("load",k),w.removeEventListener("error",A),l(s.src,b)};w.addEventListener("load",k),w.addEventListener("error",A),o.head&&o.head.appendChild(w)},ZF=function(o){var s={},l=function(k,A){var b=s[k];b.done=!0,b.error=A;for(var y=0,I=b.handlers;y<I.length;y++){var D=I[y];D(k,A)}b.handlers=[]},h=function(k,A,b){var y=function(P){return b!==void 0?b(P):console.error(P)};if(k.length===0){y(new Error("At least one script must be provided"));return}for(var I=0,D=!1,v=function(P,L){D||(L?(D=!0,y(L)):++I===k.length&&A())},S=0,B=k;S<B.length;S++){var O=B[S],R=s[O.src];if(R)R.done?v(O.src,R.error):R.handlers.push(v);else{var N=JD("tiny-");s[O.src]={id:N,src:O.src,done:!1,error:null,handlers:[v]},YF(o,Pg({id:N},O),l)}}},m=function(){for(var k,A=0,b=Object.values(s);A<b.length;A++){var y=b[A],I=o.getElementById(y.id);I!=null&&I.tagName==="SCRIPT"&&((k=I.parentNode)===null||k===void 0||k.removeChild(I))}s={}},w=function(){return o};return{loadScripts:h,deleteScripts:m,getDocument:w}},JF=function(){var o=[],s=function(m){var w=o.find(function(k){return k.getDocument()===m});return w===void 0&&(w=ZF(m),o.push(w)),w},l=function(m,w,k,A,b){var y=function(){return s(m).loadScripts(w,A,b)};k>0?setTimeout(y,k):y()},h=function(){for(var m=o.pop();m!=null;m=o.pop())m.deleteScripts()};return{loadList:l,reinitialize:h}},XF=JF(),Sm=function(o){var s=o;return s&&s.tinymce?s.tinymce:null},eV=function(){var o=function(s,l){return o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(h,m){h.__proto__=m}||function(h,m){for(var w in m)Object.prototype.hasOwnProperty.call(m,w)&&(h[w]=m[w])},o(s,l)};return function(s,l){if(typeof l!="function"&&l!==null)throw new TypeError("Class extends value "+String(l)+" is not a constructor or null");o(s,l);function h(){this.constructor=s}s.prototype=l===null?Object.create(l):(h.prototype=l.prototype,new h)}}(),ps=function(){return ps=Object.assign||function(o){for(var s,l=1,h=arguments.length;l<h;l++){s=arguments[l];for(var m in s)Object.prototype.hasOwnProperty.call(s,m)&&(o[m]=s[m])}return o},ps.apply(this,arguments)},tV=function(o){eV(s,o);function s(l){var h,m,w,k=o.call(this,l)||this;return k.rollbackTimer=void 0,k.valueCursor=void 0,k.rollbackChange=function(){var A=k.editor,b=k.props.value;A&&b&&b!==k.currentContent&&A.undoManager.ignore(function(){if(A.setContent(b),k.valueCursor&&(!k.inline||A.hasFocus()))try{A.selection.moveToBookmark(k.valueCursor)}catch{}}),k.rollbackTimer=void 0},k.handleBeforeInput=function(A){if(k.props.value!==void 0&&k.props.value===k.currentContent&&k.editor&&(!k.inline||k.editor.hasFocus()))try{k.valueCursor=k.editor.selection.getBookmark(3)}catch{}},k.handleBeforeInputSpecial=function(A){(A.key==="Enter"||A.key==="Backspace"||A.key==="Delete")&&k.handleBeforeInput(A)},k.handleEditorChange=function(A){var b=k.editor;if(b&&b.initialized){var y=b.getContent();k.props.value!==void 0&&k.props.value!==y&&k.props.rollback!==!1&&(k.rollbackTimer||(k.rollbackTimer=window.setTimeout(k.rollbackChange,typeof k.props.rollback=="number"?k.props.rollback:200))),y!==k.currentContent&&(k.currentContent=y,Dm(k.props.onEditorChange)&&k.props.onEditorChange(y,b))}},k.handleEditorChangeSpecial=function(A){(A.key==="Backspace"||A.key==="Delete")&&k.handleEditorChange(A)},k.initialise=function(A){var b,y,I;A===void 0&&(A=0);var D=k.elementRef.current;if(D){if(!QF(D)){if(A===0)setTimeout(function(){return k.initialise(1)},1);else if(A<100)setTimeout(function(){return k.initialise(A+1)},100);else throw new Error("tinymce can only be initialised when in a document");return}var v=Sm(k.view);if(!v)throw new Error("tinymce should have been loaded into global scope");var S=ps(ps(ps(ps({},k.props.init),{selector:void 0,target:D,readonly:k.props.disabled,inline:k.inline,plugins:GF((b=k.props.init)===null||b===void 0?void 0:b.plugins,k.props.plugins),toolbar:(y=k.props.toolbar)!==null&&y!==void 0?y:(I=k.props.init)===null||I===void 0?void 0:I.toolbar}),k.props.licenseKey?{license_key:k.props.licenseKey}:{}),{setup:function(B){k.editor=B,k.bindHandlers({}),k.inline&&!T2(D)&&B.once("PostRender",function(O){B.setContent(k.getInitialValue(),{no_events:!0})}),k.props.init&&Dm(k.props.init.setup)&&k.props.init.setup(B)},init_instance_callback:function(B){var O,R,N=k.getInitialValue();k.currentContent=(O=k.currentContent)!==null&&O!==void 0?O:B.getContent(),k.currentContent!==N&&(k.currentContent=N,B.setContent(N),B.undoManager.clear(),B.undoManager.add(),B.setDirty(!1));var P=(R=k.props.disabled)!==null&&R!==void 0?R:!1;B2(k.editor,P?"readonly":"design"),k.props.init&&Dm(k.props.init.init_instance_callback)&&k.props.init.init_instance_callback(B)}});k.inline||(D.style.visibility=""),T2(D)&&(D.value=k.getInitialValue()),v.init(S)}},k.id=k.props.id||JD("tiny-react"),k.elementRef=$.createRef(),k.inline=(w=(h=k.props.inline)!==null&&h!==void 0?h:(m=k.props.init)===null||m===void 0?void 0:m.inline)!==null&&w!==void 0?w:!1,k.boundHandlers={},k}return Object.defineProperty(s.prototype,"view",{get:function(){var l,h;return(h=(l=this.elementRef.current)===null||l===void 0?void 0:l.ownerDocument.defaultView)!==null&&h!==void 0?h:window},enumerable:!1,configurable:!0}),s.prototype.componentDidUpdate=function(l){var h=this,m,w;if(this.rollbackTimer&&(clearTimeout(this.rollbackTimer),this.rollbackTimer=void 0),this.editor&&(this.bindHandlers(l),this.editor.initialized)){if(this.currentContent=(m=this.currentContent)!==null&&m!==void 0?m:this.editor.getContent(),typeof this.props.initialValue=="string"&&this.props.initialValue!==l.initialValue)this.editor.setContent(this.props.initialValue),this.editor.undoManager.clear(),this.editor.undoManager.add(),this.editor.setDirty(!1);else if(typeof this.props.value=="string"&&this.props.value!==this.currentContent){var k=this.editor;k.undoManager.transact(function(){var b;if(!h.inline||k.hasFocus())try{b=k.selection.getBookmark(3)}catch{}var y=h.valueCursor;if(k.setContent(h.props.value),!h.inline||k.hasFocus())for(var I=0,D=[b,y];I<D.length;I++){var v=D[I];if(v)try{k.selection.moveToBookmark(v),h.valueCursor=v;break}catch{}}})}if(this.props.disabled!==l.disabled){var A=(w=this.props.disabled)!==null&&w!==void 0?w:!1;B2(this.editor,A?"readonly":"design")}}},s.prototype.componentDidMount=function(){var l=this,h,m,w,k,A;if(Sm(this.view)!==null)this.initialise();else if(Array.isArray(this.props.tinymceScriptSrc)&&this.props.tinymceScriptSrc.length===0)(m=(h=this.props).onScriptsLoadError)===null||m===void 0||m.call(h,new Error("No `tinymce` global is present but the `tinymceScriptSrc` prop was an empty array."));else if(!((w=this.elementRef.current)===null||w===void 0)&&w.ownerDocument){var b=function(){var I,D;(D=(I=l.props).onScriptsLoad)===null||D===void 0||D.call(I),l.initialise()},y=function(I){var D,v;(v=(D=l.props).onScriptsLoadError)===null||v===void 0||v.call(D,I)};XF.loadList(this.elementRef.current.ownerDocument,this.getScriptSources(),(A=(k=this.props.scriptLoading)===null||k===void 0?void 0:k.delay)!==null&&A!==void 0?A:0,b,y)}},s.prototype.componentWillUnmount=function(){var l=this,h=this.editor;h&&(h.off(this.changeEvents(),this.handleEditorChange),h.off(this.beforeInputEvent(),this.handleBeforeInput),h.off("keypress",this.handleEditorChangeSpecial),h.off("keydown",this.handleBeforeInputSpecial),h.off("NewBlock",this.handleEditorChange),Object.keys(this.boundHandlers).forEach(function(m){h.off(m,l.boundHandlers[m])}),this.boundHandlers={},h.remove(),this.editor=void 0)},s.prototype.render=function(){return this.inline?this.renderInline():this.renderIframe()},s.prototype.changeEvents=function(){var l,h,m,w=(m=(h=(l=Sm(this.view))===null||l===void 0?void 0:l.Env)===null||h===void 0?void 0:h.browser)===null||m===void 0?void 0:m.isIE();return w?"change keyup compositionend setcontent CommentChange":"change input compositionend setcontent CommentChange"},s.prototype.beforeInputEvent=function(){return KF()?"beforeinput SelectionChange":"SelectionChange"},s.prototype.renderInline=function(){var l=this.props.tagName,h=l===void 0?"div":l;return $.createElement(h,{ref:this.elementRef,id:this.id})},s.prototype.renderIframe=function(){return $.createElement("textarea",{ref:this.elementRef,style:{visibility:"hidden"},name:this.props.textareaName,id:this.id})},s.prototype.getScriptSources=function(){var l,h,m=(l=this.props.scriptLoading)===null||l===void 0?void 0:l.async,w=(h=this.props.scriptLoading)===null||h===void 0?void 0:h.defer;if(this.props.tinymceScriptSrc!==void 0)return typeof this.props.tinymceScriptSrc=="string"?[{src:this.props.tinymceScriptSrc,async:m,defer:w}]:this.props.tinymceScriptSrc.map(function(y){return typeof y=="string"?{src:y,async:m,defer:w}:y});var k=this.props.cloudChannel,A=this.props.apiKey?this.props.apiKey:"no-api-key",b="https://cdn.tiny.cloud/1/".concat(A,"/tinymce/").concat(k,"/tinymce.min.js");return[{src:b,async:m,defer:w}]},s.prototype.getInitialValue=function(){return typeof this.props.initialValue=="string"?this.props.initialValue:typeof this.props.value=="string"?this.props.value:""},s.prototype.bindHandlers=function(l){var h=this;if(this.editor!==void 0){$F(this.editor,l,this.props,this.boundHandlers,function(A){return h.props[A]});var m=function(A){return A.onEditorChange!==void 0||A.value!==void 0},w=m(l),k=m(this.props);!w&&k?(this.editor.on(this.changeEvents(),this.handleEditorChange),this.editor.on(this.beforeInputEvent(),this.handleBeforeInput),this.editor.on("keydown",this.handleBeforeInputSpecial),this.editor.on("keyup",this.handleEditorChangeSpecial),this.editor.on("NewBlock",this.handleEditorChange)):w&&!k&&(this.editor.off(this.changeEvents(),this.handleEditorChange),this.editor.off(this.beforeInputEvent(),this.handleBeforeInput),this.editor.off("keydown",this.handleBeforeInputSpecial),this.editor.off("keyup",this.handleEditorChangeSpecial),this.editor.off("NewBlock",this.handleEditorChange))}},s.propTypes=WF,s.defaultProps={cloudChannel:"7"},s}($.Component),nV={exports:{}};/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class Yf{constructor(s){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof s.crashNumberLimit=="number"?s.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof s.minimumNonErrorTimePeriod=="number"?s.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=l=>{const h="error"in l?l.error:l.reason;h instanceof Error&&this._handleError(h,l)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(s,l){this._listeners[s]||(this._listeners[s]=[]),this._listeners[s].push(l)}off(s,l){this._listeners[s]=this._listeners[s].filter(h=>h!==l)}_fire(s,...l){const h=this._listeners[s]||[];for(const m of h)m.apply(this,[null,...l])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(s,l){if(this._shouldReactToError(s)){this.crashes.push({message:s.message,stack:s.stack,filename:l instanceof ErrorEvent?l.filename:void 0,lineno:l instanceof ErrorEvent?l.lineno:void 0,colno:l instanceof ErrorEvent?l.colno:void 0,date:this._now()});const h=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:s,causesRestart:h}),h?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(s){return s.is&&s.is("CKEditorError")&&s.context!==void 0&&s.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(s)}_shouldRestart(){if(this.crashes.length<=this._crashNumberLimit)return!0;const s=this.crashes[this.crashes.length-1].date,l=this.crashes[this.crashes.length-1-this._crashNumberLimit].date;return(s-l)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function jg(o,s=new Set){const l=[o],h=new Set;let m=0;for(;l.length>m;){const w=l[m++];if(!(h.has(w)||!oV(w)||s.has(w)))if(h.add(w),Symbol.iterator in w)try{for(const k of w)l.push(k)}catch{}else for(const k in w)k!=="defaultValue"&&l.push(w[k])}return h}function oV(o){const s=Object.prototype.toString.call(o),l=typeof o;return!(l==="number"||l==="boolean"||l==="string"||l==="symbol"||l==="function"||s==="[object Date]"||s==="[object RegExp]"||s==="[object Module]"||o===void 0||o===null||o._watchdogExcluded||o instanceof EventTarget||o instanceof Event)}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */function XD(o,s,l=new Set){if(o===s&&iV(o))return!0;const h=jg(o,l),m=jg(s,l);for(const w of h)if(m.has(w))return!0;return!1}function iV(o){return typeof o=="object"&&o!==null}var eS=typeof global=="object"&&global&&global.Object===Object&&global,rV=typeof self=="object"&&self&&self.Object===Object&&self,so=eS||rV||Function("return this")(),Is=so.Symbol,tS=Object.prototype,sV=tS.hasOwnProperty,aV=tS.toString,Oa=Is?Is.toStringTag:void 0;function cV(o){var s=sV.call(o,Oa),l=o[Oa];try{o[Oa]=void 0;var h=!0}catch{}var m=aV.call(o);return h&&(s?o[Oa]=l:delete o[Oa]),m}var lV=Object.prototype,dV=lV.toString;function uV(o){return dV.call(o)}var hV="[object Null]",pV="[object Undefined]",N2=Is?Is.toStringTag:void 0;function kr(o){return o==null?o===void 0?pV:hV:N2&&N2 in Object(o)?cV(o):uV(o)}function Di(o){return o!=null&&typeof o=="object"}var mV="[object Symbol]";function gV(o){return typeof o=="symbol"||Di(o)&&kr(o)==mV}var Zf=Array.isArray,fV=/\s/;function kV(o){for(var s=o.length;s--&&fV.test(o.charAt(s)););return s}var bV=/^\s+/;function wV(o){return o&&o.slice(0,kV(o)+1).replace(bV,"")}function Ho(o){var s=typeof o;return o!=null&&(s=="object"||s=="function")}var P2=NaN,_V=/^[-+]0x[0-9a-f]+$/i,AV=/^0b[01]+$/i,vV=/^0o[0-7]+$/i,CV=parseInt;function j2(o){if(typeof o=="number")return o;if(gV(o))return P2;if(Ho(o)){var s=typeof o.valueOf=="function"?o.valueOf():o;o=Ho(s)?s+"":s}if(typeof o!="string")return o===0?o:+o;o=wV(o);var l=AV.test(o);return l||vV.test(o)?CV(o.slice(2),l?2:8):_V.test(o)?P2:+o}var yV="[object AsyncFunction]",xV="[object Function]",EV="[object GeneratorFunction]",DV="[object Proxy]";function nS(o){if(!Ho(o))return!1;var s=kr(o);return s==xV||s==EV||s==yV||s==DV}var Im=so["__core-js_shared__"],O2=function(){var o=/[^.]+$/.exec(Im&&Im.keys&&Im.keys.IE_PROTO||"");return o?"Symbol(src)_1."+o:""}();function SV(o){return!!O2&&O2 in o}var IV=Function.prototype,TV=IV.toString;function br(o){if(o!=null){try{return TV.call(o)}catch{}try{return o+""}catch{}}return""}var MV=/[\\^$.*+?()[\]{}|]/g,BV=/^\[object .+?Constructor\]$/,NV=Function.prototype,PV=Object.prototype,jV=NV.toString,OV=PV.hasOwnProperty,LV=RegExp("^"+jV.call(OV).replace(MV,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");function zV(o){if(!Ho(o)||SV(o))return!1;var s=nS(o)?LV:BV;return s.test(br(o))}function RV(o,s){return o==null?void 0:o[s]}function wr(o,s){var l=RV(o,s);return zV(l)?l:void 0}var Og=wr(so,"WeakMap"),L2=Object.create,FV=function(){function o(){}return function(s){if(!Ho(s))return{};if(L2)return L2(s);o.prototype=s;var l=new o;return o.prototype=void 0,l}}();function VV(o,s){var l=-1,h=o.length;for(s||(s=Array(h));++l<h;)s[l]=o[l];return s}var z2=function(){try{var o=wr(Object,"defineProperty");return o({},"",{}),o}catch{}}();function UV(o,s){for(var l=-1,h=o==null?0:o.length;++l<h&&s(o[l],l,o)!==!1;);return o}var HV=9007199254740991,WV=/^(?:0|[1-9]\d*)$/;function qV(o,s){var l=typeof o;return s=s??HV,!!s&&(l=="number"||l!="symbol"&&WV.test(o))&&o>-1&&o%1==0&&o<s}function oS(o,s,l){s=="__proto__"&&z2?z2(o,s,{configurable:!0,enumerable:!0,value:l,writable:!0}):o[s]=l}function iS(o,s){return o===s||o!==o&&s!==s}var $V=Object.prototype,GV=$V.hasOwnProperty;function rS(o,s,l){var h=o[s];(!(GV.call(o,s)&&iS(h,l))||l===void 0&&!(s in o))&&oS(o,s,l)}function Bu(o,s,l,h){var m=!l;l||(l={});for(var w=-1,k=s.length;++w<k;){var A=s[w],b=void 0;b===void 0&&(b=o[A]),m?oS(l,A,b):rS(l,A,b)}return l}var KV=9007199254740991;function sS(o){return typeof o=="number"&&o>-1&&o%1==0&&o<=KV}function aS(o){return o!=null&&sS(o.length)&&!nS(o)}var QV=Object.prototype;function Jf(o){var s=o&&o.constructor,l=typeof s=="function"&&s.prototype||QV;return o===l}function YV(o,s){for(var l=-1,h=Array(o);++l<o;)h[l]=s(l);return h}var ZV="[object Arguments]";function R2(o){return Di(o)&&kr(o)==ZV}var cS=Object.prototype,JV=cS.hasOwnProperty,XV=cS.propertyIsEnumerable,eU=R2(function(){return arguments}())?R2:function(o){return Di(o)&&JV.call(o,"callee")&&!XV.call(o,"callee")};function tU(){return!1}var lS=typeof pn=="object"&&pn&&!pn.nodeType&&pn,F2=lS&&typeof mn=="object"&&mn&&!mn.nodeType&&mn,nU=F2&&F2.exports===lS,V2=nU?so.Buffer:void 0,oU=V2?V2.isBuffer:void 0,dS=oU||tU,iU="[object Arguments]",rU="[object Array]",sU="[object Boolean]",aU="[object Date]",cU="[object Error]",lU="[object Function]",dU="[object Map]",uU="[object Number]",hU="[object Object]",pU="[object RegExp]",mU="[object Set]",gU="[object String]",fU="[object WeakMap]",kU="[object ArrayBuffer]",bU="[object DataView]",wU="[object Float32Array]",_U="[object Float64Array]",AU="[object Int8Array]",vU="[object Int16Array]",CU="[object Int32Array]",yU="[object Uint8Array]",xU="[object Uint8ClampedArray]",EU="[object Uint16Array]",DU="[object Uint32Array]",Ke={};Ke[wU]=Ke[_U]=Ke[AU]=Ke[vU]=Ke[CU]=Ke[yU]=Ke[xU]=Ke[EU]=Ke[DU]=!0;Ke[iU]=Ke[rU]=Ke[kU]=Ke[sU]=Ke[bU]=Ke[aU]=Ke[cU]=Ke[lU]=Ke[dU]=Ke[uU]=Ke[hU]=Ke[pU]=Ke[mU]=Ke[gU]=Ke[fU]=!1;function SU(o){return Di(o)&&sS(o.length)&&!!Ke[kr(o)]}function Xf(o){return function(s){return o(s)}}var uS=typeof pn=="object"&&pn&&!pn.nodeType&&pn,Ja=uS&&typeof mn=="object"&&mn&&!mn.nodeType&&mn,IU=Ja&&Ja.exports===uS,Tm=IU&&eS.process,Ts=function(){try{var o=Ja&&Ja.require&&Ja.require("util").types;return o||Tm&&Tm.binding&&Tm.binding("util")}catch{}}(),U2=Ts&&Ts.isTypedArray,TU=U2?Xf(U2):SU,MU=Object.prototype,BU=MU.hasOwnProperty;function hS(o,s){var l=Zf(o),h=!l&&eU(o),m=!l&&!h&&dS(o),w=!l&&!h&&!m&&TU(o),k=l||h||m||w,A=k?YV(o.length,String):[],b=A.length;for(var y in o)(s||BU.call(o,y))&&!(k&&(y=="length"||m&&(y=="offset"||y=="parent")||w&&(y=="buffer"||y=="byteLength"||y=="byteOffset")||qV(y,b)))&&A.push(y);return A}function pS(o,s){return function(l){return o(s(l))}}var NU=pS(Object.keys,Object),PU=Object.prototype,jU=PU.hasOwnProperty;function OU(o){if(!Jf(o))return NU(o);var s=[];for(var l in Object(o))jU.call(o,l)&&l!="constructor"&&s.push(l);return s}function ek(o){return aS(o)?hS(o):OU(o)}function LU(o){var s=[];if(o!=null)for(var l in Object(o))s.push(l);return s}var zU=Object.prototype,RU=zU.hasOwnProperty;function FU(o){if(!Ho(o))return LU(o);var s=Jf(o),l=[];for(var h in o)h=="constructor"&&(s||!RU.call(o,h))||l.push(h);return l}function tk(o){return aS(o)?hS(o,!0):FU(o)}var _c=wr(Object,"create");function VU(){this.__data__=_c?_c(null):{},this.size=0}function UU(o){var s=this.has(o)&&delete this.__data__[o];return this.size-=s?1:0,s}var HU="__lodash_hash_undefined__",WU=Object.prototype,qU=WU.hasOwnProperty;function $U(o){var s=this.__data__;if(_c){var l=s[o];return l===HU?void 0:l}return qU.call(s,o)?s[o]:void 0}var GU=Object.prototype,KU=GU.hasOwnProperty;function QU(o){var s=this.__data__;return _c?s[o]!==void 0:KU.call(s,o)}var YU="__lodash_hash_undefined__";function ZU(o,s){var l=this.__data__;return this.size+=this.has(o)?0:1,l[o]=_c&&s===void 0?YU:s,this}function lr(o){var s=-1,l=o==null?0:o.length;for(this.clear();++s<l;){var h=o[s];this.set(h[0],h[1])}}lr.prototype.clear=VU;lr.prototype.delete=UU;lr.prototype.get=$U;lr.prototype.has=QU;lr.prototype.set=ZU;function JU(){this.__data__=[],this.size=0}function Nu(o,s){for(var l=o.length;l--;)if(iS(o[l][0],s))return l;return-1}var XU=Array.prototype,eH=XU.splice;function tH(o){var s=this.__data__,l=Nu(s,o);if(l<0)return!1;var h=s.length-1;return l==h?s.pop():eH.call(s,l,1),--this.size,!0}function nH(o){var s=this.__data__,l=Nu(s,o);return l<0?void 0:s[l][1]}function oH(o){return Nu(this.__data__,o)>-1}function iH(o,s){var l=this.__data__,h=Nu(l,o);return h<0?(++this.size,l.push([o,s])):l[h][1]=s,this}function $o(o){var s=-1,l=o==null?0:o.length;for(this.clear();++s<l;){var h=o[s];this.set(h[0],h[1])}}$o.prototype.clear=JU;$o.prototype.delete=tH;$o.prototype.get=nH;$o.prototype.has=oH;$o.prototype.set=iH;var Ac=wr(so,"Map");function rH(){this.size=0,this.__data__={hash:new lr,map:new(Ac||$o),string:new lr}}function sH(o){var s=typeof o;return s=="string"||s=="number"||s=="symbol"||s=="boolean"?o!=="__proto__":o===null}function Pu(o,s){var l=o.__data__;return sH(s)?l[typeof s=="string"?"string":"hash"]:l.map}function aH(o){var s=Pu(this,o).delete(o);return this.size-=s?1:0,s}function cH(o){return Pu(this,o).get(o)}function lH(o){return Pu(this,o).has(o)}function dH(o,s){var l=Pu(this,o),h=l.size;return l.set(o,s),this.size+=l.size==h?0:1,this}function Ls(o){var s=-1,l=o==null?0:o.length;for(this.clear();++s<l;){var h=o[s];this.set(h[0],h[1])}}Ls.prototype.clear=rH;Ls.prototype.delete=aH;Ls.prototype.get=cH;Ls.prototype.has=lH;Ls.prototype.set=dH;function mS(o,s){for(var l=-1,h=s.length,m=o.length;++l<h;)o[m+l]=s[l];return o}var nk=pS(Object.getPrototypeOf,Object),uH="[object Object]",hH=Function.prototype,pH=Object.prototype,gS=hH.toString,mH=pH.hasOwnProperty,gH=gS.call(Object);function fH(o){if(!Di(o)||kr(o)!=uH)return!1;var s=nk(o);if(s===null)return!0;var l=mH.call(s,"constructor")&&s.constructor;return typeof l=="function"&&l instanceof l&&gS.call(l)==gH}function kH(){this.__data__=new $o,this.size=0}function bH(o){var s=this.__data__,l=s.delete(o);return this.size=s.size,l}function wH(o){return this.__data__.get(o)}function _H(o){return this.__data__.has(o)}var AH=200;function vH(o,s){var l=this.__data__;if(l instanceof $o){var h=l.__data__;if(!Ac||h.length<AH-1)return h.push([o,s]),this.size=++l.size,this;l=this.__data__=new Ls(h)}return l.set(o,s),this.size=l.size,this}function zs(o){var s=this.__data__=new $o(o);this.size=s.size}zs.prototype.clear=kH;zs.prototype.delete=bH;zs.prototype.get=wH;zs.prototype.has=_H;zs.prototype.set=vH;function CH(o,s){return o&&Bu(s,ek(s),o)}function yH(o,s){return o&&Bu(s,tk(s),o)}var fS=typeof pn=="object"&&pn&&!pn.nodeType&&pn,H2=fS&&typeof mn=="object"&&mn&&!mn.nodeType&&mn,xH=H2&&H2.exports===fS,W2=xH?so.Buffer:void 0,q2=W2?W2.allocUnsafe:void 0;function EH(o,s){if(s)return o.slice();var l=o.length,h=q2?q2(l):new o.constructor(l);return o.copy(h),h}function DH(o,s){for(var l=-1,h=o==null?0:o.length,m=0,w=[];++l<h;){var k=o[l];s(k,l,o)&&(w[m++]=k)}return w}function kS(){return[]}var SH=Object.prototype,IH=SH.propertyIsEnumerable,$2=Object.getOwnPropertySymbols,ok=$2?function(o){return o==null?[]:(o=Object(o),DH($2(o),function(s){return IH.call(o,s)}))}:kS;function TH(o,s){return Bu(o,ok(o),s)}var MH=Object.getOwnPropertySymbols,bS=MH?function(o){for(var s=[];o;)mS(s,ok(o)),o=nk(o);return s}:kS;function BH(o,s){return Bu(o,bS(o),s)}function wS(o,s,l){var h=s(o);return Zf(o)?h:mS(h,l(o))}function NH(o){return wS(o,ek,ok)}function PH(o){return wS(o,tk,bS)}var Lg=wr(so,"DataView"),zg=wr(so,"Promise"),Rg=wr(so,"Set"),G2="[object Map]",jH="[object Object]",K2="[object Promise]",Q2="[object Set]",Y2="[object WeakMap]",Z2="[object DataView]",OH=br(Lg),LH=br(Ac),zH=br(zg),RH=br(Rg),FH=br(Og),jo=kr;(Lg&&jo(new Lg(new ArrayBuffer(1)))!=Z2||Ac&&jo(new Ac)!=G2||zg&&jo(zg.resolve())!=K2||Rg&&jo(new Rg)!=Q2||Og&&jo(new Og)!=Y2)&&(jo=function(o){var s=kr(o),l=s==jH?o.constructor:void 0,h=l?br(l):"";if(h)switch(h){case OH:return Z2;case LH:return G2;case zH:return K2;case RH:return Q2;case FH:return Y2}return s});var VH=Object.prototype,UH=VH.hasOwnProperty;function HH(o){var s=o.length,l=new o.constructor(s);return s&&typeof o[0]=="string"&&UH.call(o,"index")&&(l.index=o.index,l.input=o.input),l}var J2=so.Uint8Array;function ik(o){var s=new o.constructor(o.byteLength);return new J2(s).set(new J2(o)),s}function WH(o,s){var l=s?ik(o.buffer):o.buffer;return new o.constructor(l,o.byteOffset,o.byteLength)}var qH=/\w*$/;function $H(o){var s=new o.constructor(o.source,qH.exec(o));return s.lastIndex=o.lastIndex,s}var X2=Is?Is.prototype:void 0,eE=X2?X2.valueOf:void 0;function GH(o){return eE?Object(eE.call(o)):{}}function KH(o,s){var l=s?ik(o.buffer):o.buffer;return new o.constructor(l,o.byteOffset,o.length)}var QH="[object Boolean]",YH="[object Date]",ZH="[object Map]",JH="[object Number]",XH="[object RegExp]",eW="[object Set]",tW="[object String]",nW="[object Symbol]",oW="[object ArrayBuffer]",iW="[object DataView]",rW="[object Float32Array]",sW="[object Float64Array]",aW="[object Int8Array]",cW="[object Int16Array]",lW="[object Int32Array]",dW="[object Uint8Array]",uW="[object Uint8ClampedArray]",hW="[object Uint16Array]",pW="[object Uint32Array]";function mW(o,s,l){var h=o.constructor;switch(s){case oW:return ik(o);case QH:case YH:return new h(+o);case iW:return WH(o,l);case rW:case sW:case aW:case cW:case lW:case dW:case uW:case hW:case pW:return KH(o,l);case ZH:return new h;case JH:case tW:return new h(o);case XH:return $H(o);case eW:return new h;case nW:return GH(o)}}function gW(o){return typeof o.constructor=="function"&&!Jf(o)?FV(nk(o)):{}}var fW="[object Map]";function kW(o){return Di(o)&&jo(o)==fW}var tE=Ts&&Ts.isMap,bW=tE?Xf(tE):kW,wW="[object Set]";function _W(o){return Di(o)&&jo(o)==wW}var nE=Ts&&Ts.isSet,AW=nE?Xf(nE):_W,vW=1,CW=2,yW=4,_S="[object Arguments]",xW="[object Array]",EW="[object Boolean]",DW="[object Date]",SW="[object Error]",AS="[object Function]",IW="[object GeneratorFunction]",TW="[object Map]",MW="[object Number]",vS="[object Object]",BW="[object RegExp]",NW="[object Set]",PW="[object String]",jW="[object Symbol]",OW="[object WeakMap]",LW="[object ArrayBuffer]",zW="[object DataView]",RW="[object Float32Array]",FW="[object Float64Array]",VW="[object Int8Array]",UW="[object Int16Array]",HW="[object Int32Array]",WW="[object Uint8Array]",qW="[object Uint8ClampedArray]",$W="[object Uint16Array]",GW="[object Uint32Array]",He={};He[_S]=He[xW]=He[LW]=He[zW]=He[EW]=He[DW]=He[RW]=He[FW]=He[VW]=He[UW]=He[HW]=He[TW]=He[MW]=He[vS]=He[BW]=He[NW]=He[PW]=He[jW]=He[WW]=He[qW]=He[$W]=He[GW]=!0;He[SW]=He[AS]=He[OW]=!1;function Td(o,s,l,h,m,w){var k,A=s&vW,b=s&CW,y=s&yW;if(l&&(k=m?l(o,h,m,w):l(o)),k!==void 0)return k;if(!Ho(o))return o;var I=Zf(o);if(I){if(k=HH(o),!A)return VV(o,k)}else{var D=jo(o),v=D==AS||D==IW;if(dS(o))return EH(o,A);if(D==vS||D==_S||v&&!m){if(k=b||v?{}:gW(o),!A)return b?BH(o,yH(k,o)):TH(o,CH(k,o))}else{if(!He[D])return m?o:{};k=mW(o,D,A)}}w||(w=new zs);var S=w.get(o);if(S)return S;w.set(o,k),AW(o)?o.forEach(function(R){k.add(Td(R,s,l,R,o,w))}):bW(o)&&o.forEach(function(R,N){k.set(N,Td(R,s,l,N,o,w))});var B=y?b?PH:NH:b?tk:ek,O=I?void 0:B(o);return UV(O||o,function(R,N){O&&(N=R,R=o[N]),rS(k,N,Td(R,s,l,N,o,w))}),k}var KW=1,QW=4;function YW(o,s){return s=typeof s=="function"?s:void 0,Td(o,KW|QW,s)}var Mm=function(){return so.Date.now()},ZW="Expected a function",JW=Math.max,XW=Math.min;function eq(o,s,l){var h,m,w,k,A,b,y=0,I=!1,D=!1,v=!0;if(typeof o!="function")throw new TypeError(ZW);s=j2(s)||0,Ho(l)&&(I=!!l.leading,D="maxWait"in l,w=D?JW(j2(l.maxWait)||0,s):w,v="trailing"in l?!!l.trailing:v);function S(Y){var H=h,U=m;return h=m=void 0,y=Y,k=o.apply(U,H),k}function B(Y){return y=Y,A=setTimeout(N,s),I?S(Y):k}function O(Y){var H=Y-b,U=Y-y,j=s-H;return D?XW(j,w-U):j}function R(Y){var H=Y-b,U=Y-y;return b===void 0||H>=s||H<0||D&&U>=w}function N(){var Y=Mm();if(R(Y))return P(Y);A=setTimeout(N,O(Y))}function P(Y){return A=void 0,v&&h?S(Y):(h=m=void 0,k)}function L(){A!==void 0&&clearTimeout(A),y=0,h=b=m=A=void 0}function V(){return A===void 0?k:P(Mm())}function G(){var Y=Mm(),H=R(Y);if(h=arguments,m=this,b=Y,H){if(A===void 0)return B(b);if(D)return clearTimeout(A),A=setTimeout(N,s),S(b)}return A===void 0&&(A=setTimeout(N,s)),k}return G.cancel=L,G.flush=V,G}function oE(o){return Di(o)&&o.nodeType===1&&!fH(o)}var tq="Expected a function";function nq(o,s,l){var h=!0,m=!0;if(typeof o!="function")throw new TypeError(tq);return Ho(l)&&(h="leading"in l?!!l.leading:h,m="trailing"in l?!!l.trailing:m),eq(o,s,{leading:h,maxWait:s,trailing:m})}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */class CS extends Yf{constructor(s,l={}){super(l),this._editor=null,this._lifecyclePromise=null,this._initUsingData=!0,this._editables={},this._throttledSave=nq(this._save.bind(this),typeof l.saveInterval=="number"?l.saveInterval:5e3),s&&(this._creator=(h,m)=>s.create(h,m)),this._destructor=h=>h.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(s){this._creator=s}setDestructor(s){this._destructor=s}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(s=>{console.error("An error happened during the editor destroying.",s)}).then(()=>{const s={},l=[],h=this._config.rootsAttributes||{},m={};for(const[k,A]of Object.entries(this._data.roots))A.isLoaded?(s[k]="",m[k]=h[k]||{}):l.push(k);const w={...this._config,extraPlugins:this._config.extraPlugins||[],lazyRoots:l,rootsAttributes:m,_watchdogInitialData:this._data};return delete w.initialData,w.extraPlugins.push(oq),this._initUsingData?this.create(s,w,w.context):oE(this._elementOrData)?this.create(this._elementOrData,w,w.context):this.create(this._editables,w,w.context)}).then(()=>{this._fire("restart")})}create(s=this._elementOrData,l=this._config,h){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(super._startErrorHandling(),this._elementOrData=s,this._initUsingData=typeof s=="string"||Object.keys(s).length>0&&typeof Object.values(s)[0]=="string",this._config=this._cloneEditorConfiguration(l)||{},this._config.context=h,this._creator(s,this._config))).then(m=>{this._editor=m,m.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=m.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")}).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}destroy(){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const s=this._editor;return this._editor=null,s.model.document.off("change:data",this._throttledSave),this._destructor(s)})}_save(){const s=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=s}catch(l){console.error(l,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(s){this._excludedProps=s}_getData(){const s=this._editor,l=s.model.document.roots.filter(A=>A.isAttached()&&A.rootName!="$graveyard"),{plugins:h}=s,m=h.has("CommentsRepository")&&h.get("CommentsRepository"),w=h.has("TrackChanges")&&h.get("TrackChanges"),k={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};l.forEach(A=>{k.roots[A.rootName]={content:JSON.stringify(Array.from(A.getChildren())),attributes:JSON.stringify(Array.from(A.getAttributes())),isLoaded:A._isLoaded}});for(const A of s.model.markers)A._affectsData&&(k.markers[A.name]={rangeJSON:A.getRange().toJSON(),usingOperation:A._managedUsingOperations,affectsData:A._affectsData});return m&&(k.commentThreads=JSON.stringify(m.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),w&&(k.suggestions=JSON.stringify(w.getSuggestions({toJSON:!0,skipNotAttached:!0}))),k}_getEditables(){const s={};for(const l of this.editor.model.document.getRootNames()){const h=this.editor.ui.getEditableElement(l);h&&(s[l]=h)}return s}_isErrorComingFromThisItem(s){return XD(this._editor,s.context,this._excludedProps)}_cloneEditorConfiguration(s){return YW(s,(l,h)=>{if(oE(l)||h==="context")return l})}}class oq{constructor(s){this.editor=s,this._data=s.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",s=>{s.stop(),this.editor.model.enqueueChange({isUndoable:!1},l=>{this._restoreCollaborationData(),this._restoreEditorData(l)}),this.editor.data.fire("ready")},{priority:999})}_createNode(s,l){if("name"in l){const h=s.createElement(l.name,l.attributes);if(l.children)for(const m of l.children)h._appendChild(this._createNode(s,m));return h}else return s.createText(l.data,l.attributes)}_restoreEditorData(s){const l=this.editor;Object.entries(this._data.roots).forEach(([h,{content:m,attributes:w}])=>{const k=JSON.parse(m),A=JSON.parse(w),b=l.model.document.getRoot(h);for(const[y,I]of A)s.setAttribute(y,I,b);for(const y of k){const I=this._createNode(s,y);s.insert(I,b,"end")}}),Object.entries(this._data.markers).forEach(([h,m])=>{const{document:w}=l.model,{rangeJSON:{start:k,end:A},...b}=m,y=w.getRoot(k.root),I=s.createPositionFromPath(y,k.path,k.stickiness),D=s.createPositionFromPath(y,A.path,A.stickiness),v=s.createRange(I,D);s.addMarker(h,{range:v,...b})})}_restoreCollaborationData(){const s=JSON.parse(this._data.commentThreads),l=JSON.parse(this._data.suggestions);s.forEach(h=>{const m=this.editor.config.get("collaboration.channelId"),w=this.editor.plugins.get("CommentsRepository");w.hasCommentThread(h.threadId)&&w.getCommentThread(h.threadId).remove(),w.addCommentThread({channelId:m,...h})}),l.forEach(h=>{const m=this.editor.plugins.get("TrackChangesEditing");if(m.hasSuggestion(h.id)){const w=m.getSuggestion(h.id);w.attributes=h.attributes}else m.addSuggestionData(h)})}}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const Xa=Symbol("MainQueueId");class iq extends Yf{constructor(s,l={}){super(l),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new rq,this._watchdogConfig=l,this._creator=h=>s.create(h),this._destructor=h=>h.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(s){this._creator=s}setDestructor(s){this._destructor=s}get context(){return this._context}create(s={}){return this._actionQueues.enqueue(Xa,()=>(this._contextConfig=s,this._create()))}getItem(s){return this._getWatchdog(s)._item}getItemState(s){return this._getWatchdog(s).state}add(s){const l=iE(s);return Promise.all(l.map(h=>this._actionQueues.enqueue(h.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let m;if(this._watchdogs.has(h.id))throw new Error(`Item with the given id is already added: '${h.id}'.`);if(h.type==="editor")return m=new CS(null,this._watchdogConfig),m.setCreator(h.creator),m._setExcludedProperties(this._contextProps),h.destructor&&m.setDestructor(h.destructor),this._watchdogs.set(h.id,m),m.on("error",(w,{error:k,causesRestart:A})=>{this._fire("itemError",{itemId:h.id,error:k}),A&&this._actionQueues.enqueue(h.id,()=>new Promise(b=>{const y=()=>{m.off("restart",y),this._fire("itemRestart",{itemId:h.id}),b()};m.on("restart",y)}))}),m.create(h.sourceElementOrData,h.config,this._context);throw new Error(`Not supported item type: '${h.type}'.`)})))}remove(s){const l=iE(s);return Promise.all(l.map(h=>this._actionQueues.enqueue(h,()=>{const m=this._getWatchdog(h);return this._watchdogs.delete(h),m.destroy()})))}destroy(){return this._actionQueues.enqueue(Xa,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(Xa,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(s=>{console.error("An error happened during destroying the context or items.",s)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(s=>(this._context=s,this._contextProps=jg(this._context),Promise.all(Array.from(this._watchdogs.values()).map(l=>(l._setExcludedProperties(this._contextProps),l.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const s=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(l=>l.destroy())).then(()=>this._destructor(s))})}_getWatchdog(s){const l=this._watchdogs.get(s);if(!l)throw new Error(`Item with the given id was not registered: ${s}.`);return l}_isErrorComingFromThisItem(s){for(const l of this._watchdogs.values())if(l._isErrorComingFromThisItem(s))return!1;return XD(this._context,s.context)}}class rq{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(s){this._onEmptyCallbacks.push(s)}enqueue(s,l){const h=s===Xa;this._activeActions++,this._queues.get(s)||this._queues.set(s,Promise.resolve());const w=(h?Promise.all(this._queues.values()):Promise.all([this._queues.get(Xa),this._queues.get(s)])).then(l),k=w.catch(()=>{});return this._queues.set(s,k),w.finally(()=>{this._activeActions--,this._queues.get(s)===k&&this._activeActions===0&&this._onEmptyCallbacks.forEach(A=>A())})}}function iE(o){return Array.isArray(o)?o:[o]}/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */const sq=Object.freeze(Object.defineProperty({__proto__:null,ContextWatchdog:iq,EditorWatchdog:CS,Watchdog:Yf},Symbol.toStringTag,{value:"Module"})),aq=dz(sq);/*!
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md.
 */(function(o,s){(function(l,h){o.exports=h($,YD(),aq)})(self,(l,h,m)=>(()=>{var w={546:y=>{y.exports=m},949:y=>{y.exports=h},155:y=>{y.exports=l}},k={};function A(y){var I=k[y];if(I!==void 0)return I.exports;var D=k[y]={exports:{}};return w[y](D,D.exports,A),D.exports}A.n=y=>{var I=y&&y.__esModule?()=>y.default:()=>y;return A.d(I,{a:I}),I},A.d=(y,I)=>{for(var D in I)A.o(I,D)&&!A.o(y,D)&&Object.defineProperty(y,D,{enumerable:!0,get:I[D]})},A.o=(y,I)=>Object.prototype.hasOwnProperty.call(y,I),A.r=y=>{typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(y,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(y,"__esModule",{value:!0})};var b={};return(()=>{A.r(b),A.d(b,{CKEditor:()=>P,CKEditorContext:()=>R,useMultiRootEditor:()=>Y});var y=A(155),I=A.n(y),D=A(949),v=A.n(D);const S=new Array(256).fill("").map((H,U)=>("0"+U.toString(16)).slice(-2));var B=A(546);const O=I().createContext("contextWatchdog");class R extends I().Component{constructor(U,j){super(U,j),this.contextWatchdog=null,this.props.isLayoutReady&&this._initializeContextWatchdog(this.props.config)}shouldComponentUpdate(U){return this._shouldComponentUpdate(U)}async _shouldComponentUpdate(U){return U.id!==this.props.id&&(this.contextWatchdog&&await this.contextWatchdog.destroy(),await this._initializeContextWatchdog(U.config)),U.isLayoutReady&&!this.contextWatchdog?(await this._initializeContextWatchdog(U.config),!0):this.props.children!==U.children}render(){return I().createElement(O.Provider,{value:this.contextWatchdog},this.props.children)}componentWillUnmount(){this._destroyContext()}async _initializeContextWatchdog(U){this.contextWatchdog=new B.ContextWatchdog(this.props.context,this.props.watchdogConfig),this.contextWatchdog.on("error",(j,K)=>{this.props.onError(K.error,{phase:"runtime",willContextRestart:K.causesRestart})}),this.contextWatchdog.on("stateChange",()=>{this.contextWatchdog.state==="ready"&&this.props.onReady&&this.props.onReady(this.contextWatchdog.context)}),await this.contextWatchdog.create(U).catch(j=>{this.props.onError(j,{phase:"initialization",willContextRestart:!1})})}async _destroyContext(){this.contextWatchdog&&(await this.contextWatchdog.destroy(),this.contextWatchdog=null)}}R.defaultProps={isLayoutReady:!0,onError:(H,U)=>console.error(H,U)},R.propTypes={id:v().string,isLayoutReady:v().bool,context:v().func,watchdogConfig:v().object,config:v().object,onReady:v().func,onError:v().func};const N="Lock from React integration (@ckeditor/ckeditor5-react)";class P extends I().Component{constructor(U){super(U),this.editorDestructionInProgress=null,this.domContainer=I().createRef(),this.watchdog=null;const{CKEDITOR_VERSION:j}=window;if(j){const[K]=j.split(".").map(Number);K<37&&console.warn("The <CKEditor> component requires using CKEditor 5 in version 37 or higher.")}else console.warn('Cannot find the "CKEDITOR_VERSION" in the "window" scope.')}get editor(){return this.props.disableWatchdog?this.instance:this.watchdog?this.watchdog.editor:null}shouldComponentUpdate(U){return!!this.editor&&(U.id!==this.props.id||U.disableWatchdog!==this.props.disableWatchdog||(this._shouldUpdateEditor(U)&&this.editor.data.set(U.data),"disabled"in U&&(U.disabled?this.editor.enableReadOnlyMode(N):this.editor.disableReadOnlyMode(N)),!1))}async componentDidMount(){await this._initializeEditor()}async componentDidUpdate(){await this._destroyEditor(),await this._initializeEditor()}async componentWillUnmount(){await this._destroyEditor()}render(){return I().createElement("div",{ref:this.domContainer})}async _initializeEditor(){await this.editorDestructionInProgress,this.props.disableWatchdog?this.instance=await this._createEditor(this.domContainer.current,this._getConfig()):this.watchdog||(this.context instanceof B.ContextWatchdog?this.watchdog=new L(this.context):this.watchdog=new P._EditorWatchdog(this.props.editor,this.props.watchdogConfig),this.watchdog.setCreator((U,j)=>this._createEditor(U,j)),this.watchdog.on("error",(U,{error:j,causesRestart:K})=>{(this.props.onError||console.error)(j,{phase:"runtime",willEditorRestart:K})}),await this.watchdog.create(this.domContainer.current,this._getConfig()).catch(U=>{(this.props.onError||console.error)(U,{phase:"initialization",willEditorRestart:!1})}))}_createEditor(U,j){return this.props.editor.create(U,j).then(K=>{"disabled"in this.props&&this.props.disabled&&K.enableReadOnlyMode(N);const re=K.model.document,ke=K.editing.view.document;return re.on("change:data",me=>{this.props.onChange&&this.props.onChange(me,K)}),ke.on("focus",me=>{this.props.onFocus&&this.props.onFocus(me,K)}),ke.on("blur",me=>{this.props.onBlur&&this.props.onBlur(me,K)}),setTimeout(()=>{this.props.onReady&&this.props.onReady(K)}),K})}async _destroyEditor(){this.editorDestructionInProgress=new Promise(U=>{setTimeout(async()=>this.watchdog?(await this.watchdog.destroy(),this.watchdog=null,U()):this.instance?(await this.instance.destroy(),this.instance=null,U()):void U())})}_shouldUpdateEditor(U){return this.props.data!==U.data&&this.editor.data.get()!==U.data}_getConfig(){const U=this.props.config||{};return this.props.data&&U.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `content` property. The config value takes precedence over `content` property and will be used when both are specified."),{...U,initialData:U.initialData||this.props.data||""}}}P.contextType=O,P.propTypes={editor:v().func.isRequired,data:v().string,config:v().object,disableWatchdog:v().bool,watchdogConfig:v().object,onChange:v().func,onReady:v().func,onFocus:v().func,onBlur:v().func,onError:v().func,disabled:v().bool,id:v().any},P._EditorWatchdog=B.EditorWatchdog;class L{constructor(U){this._contextWatchdog=U,this._id=function(){const j=4294967296*Math.random()>>>0,K=4294967296*Math.random()>>>0,re=4294967296*Math.random()>>>0,ke=4294967296*Math.random()>>>0;return"e"+S[255&j]+S[j>>8&255]+S[j>>16&255]+S[j>>24&255]+S[255&K]+S[K>>8&255]+S[K>>16&255]+S[K>>24&255]+S[255&re]+S[re>>8&255]+S[re>>16&255]+S[re>>24&255]+S[255&ke]+S[ke>>8&255]+S[ke>>16&255]+S[ke>>24&255]}()}setCreator(U){this._creator=U}create(U,j){return this._contextWatchdog.add({sourceElementOrData:U,config:j,creator:this._creator,id:this._id,type:"editor"})}on(U,j){this._contextWatchdog.on("itemError",(K,{itemId:re,error:ke})=>{re===this._id&&j(null,{error:ke,causesRestart:void 0})})}destroy(){return this._contextWatchdog.state==="ready"?this._contextWatchdog.remove(this._id):Promise.resolve()}get editor(){return this._contextWatchdog.getItem(this._id)}}const V="Lock from React integration (@ckeditor/ckeditor5-react)",G=({editor:H})=>{const U=(0,y.useRef)(null);return(0,y.useEffect)(()=>{const j=U.current;if(!H||!j)return;const K=H.ui.view.toolbar.element;return j&&j.appendChild(K),()=>{j&&j.removeChild(K)}},[H&&H.id]),I().createElement("div",{ref:U})},Y=H=>{const U=(0,y.useRef)(null),j=(0,y.useRef)(null),K=(0,y.useContext)(O),[re,ke]=(0,y.useState)(null),[me,pt]=(0,y.useState)(H.data),[rt,tt]=(0,y.useState)(H.rootsAttributes||{}),[An,ie]=(0,y.useState)([]),ue=(0,y.useRef)(!0);(0,y.useEffect)(()=>((async()=>(await j.current,H.isLayoutReady!==!1&&await Xt()))(),()=>{Ao().then(()=>{j.current=null})}),[H.isLayoutReady]),(0,y.useEffect)(()=>{re&&(H.disabled?re.enableReadOnlyMode(V):re.disableReadOnlyMode(V))},[H.disabled]),(0,y.useEffect)(()=>{if(re&&!j.current){const fe=re.getFullData();pt({...fe}),tt({...re.getRootsAttributes()}),ie([...Object.keys(fe).map(je=>Re(re,je))])}},[re&&re.id]);const se=()=>{const fe=H.config||{};return H.data&&fe.initialData&&console.warn("Editor data should be provided either using `config.initialData` or `data` property. The config value takes precedence over `data` property and will be used when both are specified."),{...fe,rootsAttributes:rt}},Re=(fe,je)=>I().createElement("div",{id:je,key:je,ref:Ce=>{if(Ce){const be=fe.ui.view.createEditable(je,Ce);fe.ui.addEditable(be),fe.editing.view.forceRender()}}}),qe=(fe,je)=>H.editor.create(fe,je).then(Ce=>{H.disabled&&H.disabled&&Ce.enableReadOnlyMode(V);const be=Ce.model.document,Cn=Ce.editing.view.document;return be.on("change:data",Vn=>((yn,en)=>{const wt=yn.model.document;if(!H.disableTwoWayDataBinding){const xn={},xt={};wt.differ.getChanges().forEach(_e=>{let Te;if(Te=_e.type=="insert"||_e.type=="remove"?_e.position.root:_e.range.root,!Te.isAttached())return;const{rootName:vo}=Te;xn[vo]=yn.getData({rootName:vo})}),wt.differ.getChangedRoots().forEach(_e=>{if(_e.state)return void(xn[_e.name]!==void 0&&delete xn[_e.name]);const Te=_e.name;xt[Te]=yn.getRootAttributes(Te)}),Object.keys(xn).length&&pt(_e=>({..._e,...xn})),Object.keys(xt).length&&tt(_e=>({..._e,...xt}))}H.onChange&&H.onChange(en,yn)})(Ce,Vn)),Ce.on("addRoot",(Vn,yn)=>((en,wt,xn)=>{const xt=xn.rootName,_e=Re(en,xt);H.disableTwoWayDataBinding||(pt(Te=>({...Te,[xt]:en.getData({rootName:xt})})),tt(Te=>({...Te,[xt]:en.getRootAttributes(xt)}))),ie(Te=>[...Te,_e])})(Ce,0,yn)),Ce.on("detachRoot",(Vn,yn)=>((en,wt,xn)=>{const xt=xn.rootName;ie(_e=>_e.filter(Te=>Te.props.id!==xt)),H.disableTwoWayDataBinding||(pt(_e=>{const{[xt]:Te,...vo}=_e;return{...vo}}),tt(_e=>{const{[xt]:Te,...vo}=_e;return{...vo}})),en.detachEditable(xn)})(Ce,0,yn)),Cn.on("focus",Vn=>{H.onFocus&&H.onFocus(Vn,Ce)}),Cn.on("blur",Vn=>{H.onBlur&&H.onBlur(Vn,Ce)}),ke(Ce),H.onReady&&H.onReady(Ce),Ce}),Ao=async()=>{ke(null),pt({}),tt({}),ie([]),j.current=new Promise(fe=>{setTimeout(async()=>U.current?(await U.current.destroy(),U.current=null,fe()):re?(await re.destroy(),fe()):void fe())})},Xt=async()=>{if(H.disableWatchdog)return void await qe(H.data,se());if(U.current)return;K instanceof B.ContextWatchdog?U.current=new L(K):U.current=new B.EditorWatchdog(H.editor,H.watchdogConfig);const fe=U.current;fe.setCreator((je,Ce)=>qe(je,Ce)),fe.on("error",(je,{error:Ce,causesRestart:be})=>{(H.onError||console.error)(Ce,{phase:"runtime",willEditorRestart:be})}),await fe.create(me,se()).catch(je=>{(H.onError||console.error)(je,{phase:"initialization",willEditorRestart:!1})})};(0,y.useEffect)(()=>{if(re&&ue.current){ue.current=!1;const fe=Object.keys(me),je=Object.keys(rt);if(!fe.every(wt=>je.includes(wt)))throw new Error("`data` and `attributes` objects must have the same keys (roots).");const Ce=re.getFullData(),be=re.getRootsAttributes(),{addedKeys:Cn,removedKeys:Vn}=Go(Ce,me||{}),yn=fe.some(wt=>Ce[wt]!==void 0&&JSON.stringify(Ce[wt])!==JSON.stringify(me[wt])),en=je.filter(wt=>JSON.stringify(be[wt])!==JSON.stringify(rt[wt]));re.model.change(wt=>{vn(Cn),ao(Vn),yn&&Pe(),en.length&&_r(wt,en)})}},[me,rt]);const Go=(fe,je)=>{const Ce=Object.keys(fe),be=Object.keys(je);return{addedKeys:be.filter(Cn=>!Ce.includes(Cn)),removedKeys:Ce.filter(Cn=>!be.includes(Cn))}},vn=fe=>{fe.forEach(je=>{re.addRoot(je,{data:me[je]||"",attributes:(rt==null?void 0:rt[je])||{},isUndoable:!0})})},ao=fe=>{fe.forEach(je=>{re.detachRoot(je,!0)})},Pe=()=>{re.data.set(me,{suppressErrorInCollaboration:!0})},_r=(fe,je)=>{je.forEach(Ce=>{Object.keys(rt[Ce]).forEach(be=>{re.registerRootAttribute(be)}),fe.clearAttributes(re.model.document.getRoot(Ce)),fe.setAttributes(rt[Ce],re.model.document.getRoot(Ce))})},Ar=(0,y.useCallback)(fe=>{ue.current=!0,pt(fe)},[pt]),vr=(0,y.useCallback)(fe=>{ue.current=!0,tt(fe)},[tt]);return{editor:re,editableElements:An,toolbarElement:I().createElement(G,{editor:re}),data:me,setData:Ar,attributes:rt,setAttributes:vr}}})(),b})())})(nV);var iu={exports:{}};iu.exports;(function(o,s){(function(l){const h=l.en=l.en||{};h.dictionary=Object.assign(h.dictionary||{},{"(may require <kbd>Fn</kbd>)":"(may require <kbd>Fn</kbd>)","%0 of %1":"%0 of %1",Accept:"Accept",Accessibility:"Accessibility","Accessibility help":"Accessibility help","Align cell text to the bottom":"Align cell text to the bottom","Align cell text to the center":"Align cell text to the center","Align cell text to the left":"Align cell text to the left","Align cell text to the middle":"Align cell text to the middle","Align cell text to the right":"Align cell text to the right","Align cell text to the top":"Align cell text to the top","Align table to the left":"Align table to the left","Align table to the right":"Align table to the right",Alignment:"Alignment",Aquamarine:"Aquamarine",Background:"Background","Below, you can find a list of keyboard shortcuts that can be used in the editor.":"Below, you can find a list of keyboard shortcuts that can be used in the editor.",Black:"Black","Block quote":"Block quote",Blue:"Blue",Bold:"Bold","Bold text":"Bold text",Border:"Border","Break text":"Break text","Bulleted List":"Bulleted List","Bulleted list styles toolbar":"Bulleted list styles toolbar",Cancel:"Cancel","Cannot access default workspace.":"Cannot access default workspace.","Cannot determine a category for the uploaded file.":"Cannot determine a category for the uploaded file.","Cannot upload file:":"Cannot upload file:","Caption for image: %0":"Caption for image: %0","Caption for the image":"Caption for the image","Cell properties":"Cell properties","Center table":"Center table","Centered image":"Centered image","Change image text alternative":"Change image text alternative","Choose heading":"Choose heading",Circle:"Circle",Clear:"Clear","Click to edit block":"Click to edit block",Close:"Close","Close contextual balloons, dropdowns, and dialogs":"Close contextual balloons, dropdowns, and dialogs",Code:"Code",Color:"Color","Color picker":"Color picker",Column:"Column","Content editing keystrokes":"Content editing keystrokes","Copy selected content":"Copy selected content","Could not insert image at the current position.":"Could not insert image at the current position.","Could not obtain resized image URL.":"Could not obtain resized image URL.","Create link":"Create link",Dashed:"Dashed",Decimal:"Decimal","Decimal with leading zero":"Decimal with leading zero","Decrease indent":"Decrease indent","Decrease list item indent":"Decrease list item indent","Delete column":"Delete column","Delete row":"Delete row","Dim grey":"Dim grey",Dimensions:"Dimensions",Disc:"Disc",Dotted:"Dotted",Double:"Double",Downloadable:"Downloadable","Drag to move":"Drag to move","Dropdown toolbar":"Dropdown toolbar","Edit block":"Edit block","Edit image":"Edit image","Edit link":"Edit link","Editor block content toolbar":"Editor block content toolbar","Editor contextual toolbar":"Editor contextual toolbar","Editor dialog":"Editor dialog","Editor editing area: %0":"Editor editing area: %0","Editor menu bar":"Editor menu bar","Editor toolbar":"Editor toolbar","Enter image caption":"Enter image caption","Enter table caption":"Enter table caption","Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.":"Execute the currently focused button. Executing buttons that interact with the editor content moves the focus back to the content.","Failed to determine category of edited image.":"Failed to determine category of edited image.","Full size image":"Full size image",Green:"Green",Grey:"Grey",Groove:"Groove","Header column":"Header column","Header row":"Header row",Heading:"Heading","Heading 1":"Heading 1","Heading 2":"Heading 2","Heading 3":"Heading 3","Heading 4":"Heading 4","Heading 5":"Heading 5","Heading 6":"Heading 6",Height:"Height","Help Contents. To close this dialog press ESC.":"Help Contents. To close this dialog press ESC.",HEX:"HEX","Horizontal text alignment toolbar":"Horizontal text alignment toolbar","Image from computer":"Image from computer","Image resize list":"Image resize list","Image toolbar":"Image toolbar","image widget":"image widget","In line":"In line","Increase indent":"Increase indent","Increase list item indent":"Increase list item indent",Insert:"Insert","Insert a hard break (a new paragraph)":"Insert a hard break (a new paragraph)","Insert a new paragraph directly after a widget":"Insert a new paragraph directly after a widget","Insert a new paragraph directly before a widget":"Insert a new paragraph directly before a widget","Insert a new table row (when in the last cell of a table)":"Insert a new table row (when in the last cell of a table)","Insert a soft break (a <code>&lt;br&gt;</code> element)":"Insert a soft break (a <code>&lt;br&gt;</code> element)","Insert column left":"Insert column left","Insert column right":"Insert column right","Insert image":"Insert image","Insert image via URL":"Insert image via URL","Insert image with file manager":"Insert image with file manager","Insert media":"Insert media","Insert paragraph after block":"Insert paragraph after block","Insert paragraph before block":"Insert paragraph before block","Insert row above":"Insert row above","Insert row below":"Insert row below","Insert table":"Insert table","Insert with file manager":"Insert with file manager","Inserting image failed":"Inserting image failed",Inset:"Inset","Invalid start index value.":"Invalid start index value.",Italic:"Italic","Italic text":"Italic text","Justify cell text":"Justify cell text","Keystrokes that can be used in a list":"Keystrokes that can be used in a list","Keystrokes that can be used in a table cell":"Keystrokes that can be used in a table cell","Keystrokes that can be used when a widget is selected (for example: image, table, etc.)":"Keystrokes that can be used when a widget is selected (for example: image, table, etc.)","Left aligned image":"Left aligned image","Light blue":"Light blue","Light green":"Light green","Light grey":"Light grey",Link:"Link","Link image":"Link image","Link URL":"Link URL","List properties":"List properties","Lower-latin":"Lower-latin","Lower–roman":"Lower–roman","Media toolbar":"Media toolbar","Media URL":"Media URL","media widget":"media widget",MENU_BAR_MENU_EDIT:"Edit",MENU_BAR_MENU_FILE:"File",MENU_BAR_MENU_FONT:"Font",MENU_BAR_MENU_FORMAT:"Format",MENU_BAR_MENU_HELP:"Help",MENU_BAR_MENU_INSERT:"Insert",MENU_BAR_MENU_TEXT:"Text",MENU_BAR_MENU_TOOLS:"Tools",MENU_BAR_MENU_VIEW:"View","Merge cell down":"Merge cell down","Merge cell left":"Merge cell left","Merge cell right":"Merge cell right","Merge cell up":"Merge cell up","Merge cells":"Merge cells","Move focus between form fields (inputs, buttons, etc.)":"Move focus between form fields (inputs, buttons, etc.)","Move focus in and out of an active dialog window":"Move focus in and out of an active dialog window","Move focus to the menu bar, navigate between menu bars":"Move focus to the menu bar, navigate between menu bars","Move focus to the toolbar, navigate between toolbars":"Move focus to the toolbar, navigate between toolbars","Move out of a link":"Move out of a link","Move out of an inline code style":"Move out of an inline code style","Move the caret to allow typing directly after a widget":"Move the caret to allow typing directly after a widget","Move the caret to allow typing directly before a widget":"Move the caret to allow typing directly before a widget","Move the selection to the next cell":"Move the selection to the next cell","Move the selection to the previous cell":"Move the selection to the previous cell","Navigate through the table":"Navigate through the table","Navigate through the toolbar or menu bar":"Navigate through the toolbar or menu bar",Next:"Next","No results found":"No results found","No searchable items":"No searchable items",None:"None","Numbered List":"Numbered List","Numbered list styles toolbar":"Numbered list styles toolbar","Open file manager":"Open file manager","Open in a new tab":"Open in a new tab","Open link in new tab":"Open link in new tab","Open media in new tab":"Open media in new tab","Open the accessibility help dialog":"Open the accessibility help dialog",Orange:"Orange",Original:"Original",Outset:"Outset",Padding:"Padding",Paragraph:"Paragraph","Paste content":"Paste content","Paste content as plain text":"Paste content as plain text","Paste the media URL in the input.":"Paste the media URL in the input.","Press %0 for help.":"Press %0 for help.","Press Enter to type after or press Shift + Enter to type before the widget":"Press Enter to type after or press Shift + Enter to type before the widget",Previous:"Previous","Processing the edited image.":"Processing the edited image.",Purple:"Purple",Red:"Red",Redo:"Redo","Remove color":"Remove color","Replace from computer":"Replace from computer","Replace image":"Replace image","Replace image from computer":"Replace image from computer","Replace image with file manager":"Replace image with file manager","Replace with file manager":"Replace with file manager","Resize image":"Resize image","Resize image to %0":"Resize image to %0","Resize image to the original size":"Resize image to the original size","Restore default":"Restore default","Reversed order":"Reversed order","Revert autoformatting action":"Revert autoformatting action","Rich Text Editor":"Rich Text Editor",Ridge:"Ridge","Right aligned image":"Right aligned image",Row:"Row",Save:"Save","Select all":"Select all","Select column":"Select column","Select row":"Select row","Selecting resized image failed":"Selecting resized image failed","Server failed to process the image.":"Server failed to process the image.","Show more items":"Show more items","Side image":"Side image",Solid:"Solid","Split cell horizontally":"Split cell horizontally","Split cell vertically":"Split cell vertically",Square:"Square","Start at":"Start at","Start index must be greater than 0.":"Start index must be greater than 0.",Strikethrough:"Strikethrough","Strikethrough text":"Strikethrough text",Style:"Style",Subscript:"Subscript",Superscript:"Superscript",Table:"Table","Table alignment toolbar":"Table alignment toolbar","Table cell text alignment":"Table cell text alignment","Table properties":"Table properties","Table toolbar":"Table toolbar","Text alternative":"Text alternative",'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".':'The color is invalid. Try "#FF0000" or "rgb(255,0,0)" or "red".',"The URL must not be empty.":"The URL must not be empty.",'The value is invalid. Try "10px" or "2em" or simply "2".':'The value is invalid. Try "10px" or "2em" or simply "2".',"These keyboard shortcuts allow for quick access to content editing features.":"These keyboard shortcuts allow for quick access to content editing features.","This link has no URL":"This link has no URL","This media URL is not supported.":"This media URL is not supported.","Tip: Paste the URL into the content to embed faster.":"Tip: Paste the URL into the content to embed faster.","To-do List":"To-do List","Toggle caption off":"Toggle caption off","Toggle caption on":"Toggle caption on","Toggle the circle list style":"Toggle the circle list style","Toggle the decimal list style":"Toggle the decimal list style","Toggle the decimal with leading zero list style":"Toggle the decimal with leading zero list style","Toggle the disc list style":"Toggle the disc list style","Toggle the lower–latin list style":"Toggle the lower–latin list style","Toggle the lower–roman list style":"Toggle the lower–roman list style","Toggle the square list style":"Toggle the square list style","Toggle the upper–latin list style":"Toggle the upper–latin list style","Toggle the upper–roman list style":"Toggle the upper–roman list style",Turquoise:"Turquoise","Type or paste your content here.":"Type or paste your content here.","Type your title":"Type your title",Underline:"Underline","Underline text":"Underline text",Undo:"Undo",Unlink:"Unlink",Update:"Update","Update image URL":"Update image URL","Upload failed":"Upload failed","Upload from computer":"Upload from computer","Upload image from computer":"Upload image from computer","Upload in progress":"Upload in progress","Upper-latin":"Upper-latin","Upper-roman":"Upper-roman","Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.":"Use the following keystrokes for more efficient navigation in the CKEditor 5 user interface.","User interface and content navigation keystrokes":"User interface and content navigation keystrokes","Vertical text alignment toolbar":"Vertical text alignment toolbar",White:"White","Widget toolbar":"Widget toolbar",Width:"Width","Wrap text":"Wrap text",Yellow:"Yellow"})})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={})),function(l,h){o.exports=h()}(self,()=>(()=>{var l={9246:(k,A,b)=>{const y=b(6931),I={};for(const v of Object.keys(y))I[y[v]]=v;const D={rgb:{channels:3,labels:"rgb"},hsl:{channels:3,labels:"hsl"},hsv:{channels:3,labels:"hsv"},hwb:{channels:3,labels:"hwb"},cmyk:{channels:4,labels:"cmyk"},xyz:{channels:3,labels:"xyz"},lab:{channels:3,labels:"lab"},lch:{channels:3,labels:"lch"},hex:{channels:1,labels:["hex"]},keyword:{channels:1,labels:["keyword"]},ansi16:{channels:1,labels:["ansi16"]},ansi256:{channels:1,labels:["ansi256"]},hcg:{channels:3,labels:["h","c","g"]},apple:{channels:3,labels:["r16","g16","b16"]},gray:{channels:1,labels:["gray"]}};k.exports=D;for(const v of Object.keys(D)){if(!("channels"in D[v]))throw new Error("missing channels property: "+v);if(!("labels"in D[v]))throw new Error("missing channel labels property: "+v);if(D[v].labels.length!==D[v].channels)throw new Error("channel and label counts mismatch: "+v);const{channels:S,labels:B}=D[v];delete D[v].channels,delete D[v].labels,Object.defineProperty(D[v],"channels",{value:S}),Object.defineProperty(D[v],"labels",{value:B})}D.rgb.hsl=function(v){const S=v[0]/255,B=v[1]/255,O=v[2]/255,R=Math.min(S,B,O),N=Math.max(S,B,O),P=N-R;let L,V;N===R?L=0:S===N?L=(B-O)/P:B===N?L=2+(O-S)/P:O===N&&(L=4+(S-B)/P),L=Math.min(60*L,360),L<0&&(L+=360);const G=(R+N)/2;return V=N===R?0:G<=.5?P/(N+R):P/(2-N-R),[L,100*V,100*G]},D.rgb.hsv=function(v){let S,B,O,R,N;const P=v[0]/255,L=v[1]/255,V=v[2]/255,G=Math.max(P,L,V),Y=G-Math.min(P,L,V),H=function(U){return(G-U)/6/Y+.5};return Y===0?(R=0,N=0):(N=Y/G,S=H(P),B=H(L),O=H(V),P===G?R=O-B:L===G?R=.3333333333333333+S-O:V===G&&(R=.6666666666666666+B-S),R<0?R+=1:R>1&&(R-=1)),[360*R,100*N,100*G]},D.rgb.hwb=function(v){const S=v[0],B=v[1];let O=v[2];const R=D.rgb.hsl(v)[0],N=1/255*Math.min(S,Math.min(B,O));return O=1-.00392156862745098*Math.max(S,Math.max(B,O)),[R,100*N,100*O]},D.rgb.cmyk=function(v){const S=v[0]/255,B=v[1]/255,O=v[2]/255,R=Math.min(1-S,1-B,1-O);return[100*((1-S-R)/(1-R)||0),100*((1-B-R)/(1-R)||0),100*((1-O-R)/(1-R)||0),100*R]},D.rgb.keyword=function(v){const S=I[v];if(S)return S;let B,O=1/0;for(const P of Object.keys(y)){const L=y[P],V=(N=L,((R=v)[0]-N[0])**2+(R[1]-N[1])**2+(R[2]-N[2])**2);V<O&&(O=V,B=P)}var R,N;return B},D.keyword.rgb=function(v){return y[v]},D.rgb.xyz=function(v){let S=v[0]/255,B=v[1]/255,O=v[2]/255;return S=S>.04045?((S+.055)/1.055)**2.4:S/12.92,B=B>.04045?((B+.055)/1.055)**2.4:B/12.92,O=O>.04045?((O+.055)/1.055)**2.4:O/12.92,[100*(.4124*S+.3576*B+.1805*O),100*(.2126*S+.7152*B+.0722*O),100*(.0193*S+.1192*B+.9505*O)]},D.rgb.lab=function(v){const S=D.rgb.xyz(v);let B=S[0],O=S[1],R=S[2];return B/=95.047,O/=100,R/=108.883,B=B>.008856?B**.3333333333333333:7.787*B+.13793103448275862,O=O>.008856?O**.3333333333333333:7.787*O+.13793103448275862,R=R>.008856?R**.3333333333333333:7.787*R+.13793103448275862,[116*O-16,500*(B-O),200*(O-R)]},D.hsl.rgb=function(v){const S=v[0]/360,B=v[1]/100,O=v[2]/100;let R,N,P;if(B===0)return P=255*O,[P,P,P];R=O<.5?O*(1+B):O+B-O*B;const L=2*O-R,V=[0,0,0];for(let G=0;G<3;G++)N=S+.3333333333333333*-(G-1),N<0&&N++,N>1&&N--,P=6*N<1?L+6*(R-L)*N:2*N<1?R:3*N<2?L+(R-L)*(.6666666666666666-N)*6:L,V[G]=255*P;return V},D.hsl.hsv=function(v){const S=v[0];let B=v[1]/100,O=v[2]/100,R=B;const N=Math.max(O,.01);return O*=2,B*=O<=1?O:2-O,R*=N<=1?N:2-N,[S,100*(O===0?2*R/(N+R):2*B/(O+B)),100*((O+B)/2)]},D.hsv.rgb=function(v){const S=v[0]/60,B=v[1]/100;let O=v[2]/100;const R=Math.floor(S)%6,N=S-Math.floor(S),P=255*O*(1-B),L=255*O*(1-B*N),V=255*O*(1-B*(1-N));switch(O*=255,R){case 0:return[O,V,P];case 1:return[L,O,P];case 2:return[P,O,V];case 3:return[P,L,O];case 4:return[V,P,O];case 5:return[O,P,L]}},D.hsv.hsl=function(v){const S=v[0],B=v[1]/100,O=v[2]/100,R=Math.max(O,.01);let N,P;P=(2-B)*O;const L=(2-B)*R;return N=B*R,N/=L<=1?L:2-L,N=N||0,P/=2,[S,100*N,100*P]},D.hwb.rgb=function(v){const S=v[0]/360;let B=v[1]/100,O=v[2]/100;const R=B+O;let N;R>1&&(B/=R,O/=R);const P=Math.floor(6*S),L=1-O;N=6*S-P,1&P&&(N=1-N);const V=B+N*(L-B);let G,Y,H;switch(P){default:case 6:case 0:G=L,Y=V,H=B;break;case 1:G=V,Y=L,H=B;break;case 2:G=B,Y=L,H=V;break;case 3:G=B,Y=V,H=L;break;case 4:G=V,Y=B,H=L;break;case 5:G=L,Y=B,H=V}return[255*G,255*Y,255*H]},D.cmyk.rgb=function(v){const S=v[0]/100,B=v[1]/100,O=v[2]/100,R=v[3]/100;return[255*(1-Math.min(1,S*(1-R)+R)),255*(1-Math.min(1,B*(1-R)+R)),255*(1-Math.min(1,O*(1-R)+R))]},D.xyz.rgb=function(v){const S=v[0]/100,B=v[1]/100,O=v[2]/100;let R,N,P;return R=3.2406*S+-1.5372*B+-.4986*O,N=-.9689*S+1.8758*B+.0415*O,P=.0557*S+-.204*B+1.057*O,R=R>.0031308?1.055*R**.4166666666666667-.055:12.92*R,N=N>.0031308?1.055*N**.4166666666666667-.055:12.92*N,P=P>.0031308?1.055*P**.4166666666666667-.055:12.92*P,R=Math.min(Math.max(0,R),1),N=Math.min(Math.max(0,N),1),P=Math.min(Math.max(0,P),1),[255*R,255*N,255*P]},D.xyz.lab=function(v){let S=v[0],B=v[1],O=v[2];return S/=95.047,B/=100,O/=108.883,S=S>.008856?S**.3333333333333333:7.787*S+.13793103448275862,B=B>.008856?B**.3333333333333333:7.787*B+.13793103448275862,O=O>.008856?O**.3333333333333333:7.787*O+.13793103448275862,[116*B-16,500*(S-B),200*(B-O)]},D.lab.xyz=function(v){let S,B,O;B=(v[0]+16)/116,S=v[1]/500+B,O=B-v[2]/200;const R=B**3,N=S**3,P=O**3;return B=R>.008856?R:(B-.13793103448275862)/7.787,S=N>.008856?N:(S-.13793103448275862)/7.787,O=P>.008856?P:(O-.13793103448275862)/7.787,S*=95.047,B*=100,O*=108.883,[S,B,O]},D.lab.lch=function(v){const S=v[0],B=v[1],O=v[2];let R;return R=360*Math.atan2(O,B)/2/Math.PI,R<0&&(R+=360),[S,Math.sqrt(B*B+O*O),R]},D.lch.lab=function(v){const S=v[0],B=v[1],O=v[2]/360*2*Math.PI;return[S,B*Math.cos(O),B*Math.sin(O)]},D.rgb.ansi16=function(v,S=null){const[B,O,R]=v;let N=S===null?D.rgb.hsv(v)[2]:S;if(N=Math.round(N/50),N===0)return 30;let P=30+(Math.round(R/255)<<2|Math.round(O/255)<<1|Math.round(B/255));return N===2&&(P+=60),P},D.hsv.ansi16=function(v){return D.rgb.ansi16(D.hsv.rgb(v),v[2])},D.rgb.ansi256=function(v){const S=v[0],B=v[1],O=v[2];return S===B&&B===O?S<8?16:S>248?231:Math.round((S-8)/247*24)+232:16+36*Math.round(S/255*5)+6*Math.round(B/255*5)+Math.round(O/255*5)},D.ansi16.rgb=function(v){let S=v%10;if(S===0||S===7)return v>50&&(S+=3.5),S=S/10.5*255,[S,S,S];const B=.5*(1+~~(v>50));return[(1&S)*B*255,(S>>1&1)*B*255,(S>>2&1)*B*255]},D.ansi256.rgb=function(v){if(v>=232){const B=10*(v-232)+8;return[B,B,B]}let S;return v-=16,[Math.floor(v/36)/5*255,Math.floor((S=v%36)/6)/5*255,S%6/5*255]},D.rgb.hex=function(v){const S=(((255&Math.round(v[0]))<<16)+((255&Math.round(v[1]))<<8)+(255&Math.round(v[2]))).toString(16).toUpperCase();return"000000".substring(S.length)+S},D.hex.rgb=function(v){const S=v.toString(16).match(/[a-f0-9]{6}|[a-f0-9]{3}/i);if(!S)return[0,0,0];let B=S[0];S[0].length===3&&(B=B.split("").map(R=>R+R).join(""));const O=parseInt(B,16);return[O>>16&255,O>>8&255,255&O]},D.rgb.hcg=function(v){const S=v[0]/255,B=v[1]/255,O=v[2]/255,R=Math.max(Math.max(S,B),O),N=Math.min(Math.min(S,B),O),P=R-N;let L,V;return L=P<1?N/(1-P):0,V=P<=0?0:R===S?(B-O)/P%6:R===B?2+(O-S)/P:4+(S-B)/P,V/=6,V%=1,[360*V,100*P,100*L]},D.hsl.hcg=function(v){const S=v[1]/100,B=v[2]/100,O=B<.5?2*S*B:2*S*(1-B);let R=0;return O<1&&(R=(B-.5*O)/(1-O)),[v[0],100*O,100*R]},D.hsv.hcg=function(v){const S=v[1]/100,B=v[2]/100,O=S*B;let R=0;return O<1&&(R=(B-O)/(1-O)),[v[0],100*O,100*R]},D.hcg.rgb=function(v){const S=v[0]/360,B=v[1]/100,O=v[2]/100;if(B===0)return[255*O,255*O,255*O];const R=[0,0,0],N=S%1*6,P=N%1,L=1-P;let V=0;switch(Math.floor(N)){case 0:R[0]=1,R[1]=P,R[2]=0;break;case 1:R[0]=L,R[1]=1,R[2]=0;break;case 2:R[0]=0,R[1]=1,R[2]=P;break;case 3:R[0]=0,R[1]=L,R[2]=1;break;case 4:R[0]=P,R[1]=0,R[2]=1;break;default:R[0]=1,R[1]=0,R[2]=L}return V=(1-B)*O,[255*(B*R[0]+V),255*(B*R[1]+V),255*(B*R[2]+V)]},D.hcg.hsv=function(v){const S=v[1]/100,B=S+v[2]/100*(1-S);let O=0;return B>0&&(O=S/B),[v[0],100*O,100*B]},D.hcg.hsl=function(v){const S=v[1]/100,B=v[2]/100*(1-S)+.5*S;let O=0;return B>0&&B<.5?O=S/(2*B):B>=.5&&B<1&&(O=S/(2*(1-B))),[v[0],100*O,100*B]},D.hcg.hwb=function(v){const S=v[1]/100,B=S+v[2]/100*(1-S);return[v[0],100*(B-S),100*(1-B)]},D.hwb.hcg=function(v){const S=v[1]/100,B=1-v[2]/100,O=B-S;let R=0;return O<1&&(R=(B-O)/(1-O)),[v[0],100*O,100*R]},D.apple.rgb=function(v){return[v[0]/65535*255,v[1]/65535*255,v[2]/65535*255]},D.rgb.apple=function(v){return[v[0]/255*65535,v[1]/255*65535,v[2]/255*65535]},D.gray.rgb=function(v){return[v[0]/100*255,v[0]/100*255,v[0]/100*255]},D.gray.hsl=function(v){return[0,0,v[0]]},D.gray.hsv=D.gray.hsl,D.gray.hwb=function(v){return[0,100,v[0]]},D.gray.cmyk=function(v){return[0,0,0,v[0]]},D.gray.lab=function(v){return[v[0],0,0]},D.gray.hex=function(v){const S=255&Math.round(v[0]/100*255),B=((S<<16)+(S<<8)+S).toString(16).toUpperCase();return"000000".substring(B.length)+B},D.rgb.gray=function(v){return[(v[0]+v[1]+v[2])/3/255*100]}},9047:(k,A,b)=>{const y=b(9246),I=b(802),D={};Object.keys(y).forEach(v=>{D[v]={},Object.defineProperty(D[v],"channels",{value:y[v].channels}),Object.defineProperty(D[v],"labels",{value:y[v].labels});const S=I(v);Object.keys(S).forEach(B=>{const O=S[B];D[v][B]=function(R){const N=function(...P){const L=P[0];if(L==null)return L;L.length>1&&(P=L);const V=R(P);if(typeof V=="object")for(let G=V.length,Y=0;Y<G;Y++)V[Y]=Math.round(V[Y]);return V};return"conversion"in R&&(N.conversion=R.conversion),N}(O),D[v][B].raw=function(R){const N=function(...P){const L=P[0];return L==null?L:(L.length>1&&(P=L),R(P))};return"conversion"in R&&(N.conversion=R.conversion),N}(O)})}),k.exports=D},802:(k,A,b)=>{const y=b(9246);function I(S){const B=function(){const R={},N=Object.keys(y);for(let P=N.length,L=0;L<P;L++)R[N[L]]={distance:-1,parent:null};return R}(),O=[S];for(B[S].distance=0;O.length;){const R=O.pop(),N=Object.keys(y[R]);for(let P=N.length,L=0;L<P;L++){const V=N[L],G=B[V];G.distance===-1&&(G.distance=B[R].distance+1,G.parent=R,O.unshift(V))}}return B}function D(S,B){return function(O){return B(S(O))}}function v(S,B){const O=[B[S].parent,S];let R=y[B[S].parent][S],N=B[S].parent;for(;B[N].parent;)O.unshift(B[N].parent),R=D(y[B[N].parent][N],R),N=B[N].parent;return R.conversion=O,R}k.exports=function(S){const B=I(S),O={},R=Object.keys(B);for(let N=R.length,P=0;P<N;P++){const L=R[P];B[L].parent!==null&&(O[L]=v(L,B))}return O}},6931:k=>{k.exports={aliceblue:[240,248,255],antiquewhite:[250,235,215],aqua:[0,255,255],aquamarine:[127,255,212],azure:[240,255,255],beige:[245,245,220],bisque:[255,228,196],black:[0,0,0],blanchedalmond:[255,235,205],blue:[0,0,255],blueviolet:[138,43,226],brown:[165,42,42],burlywood:[222,184,135],cadetblue:[95,158,160],chartreuse:[127,255,0],chocolate:[210,105,30],coral:[255,127,80],cornflowerblue:[100,149,237],cornsilk:[255,248,220],crimson:[220,20,60],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgoldenrod:[184,134,11],darkgray:[169,169,169],darkgreen:[0,100,0],darkgrey:[169,169,169],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkseagreen:[143,188,143],darkslateblue:[72,61,139],darkslategray:[47,79,79],darkslategrey:[47,79,79],darkturquoise:[0,206,209],darkviolet:[148,0,211],deeppink:[255,20,147],deepskyblue:[0,191,255],dimgray:[105,105,105],dimgrey:[105,105,105],dodgerblue:[30,144,255],firebrick:[178,34,34],floralwhite:[255,250,240],forestgreen:[34,139,34],fuchsia:[255,0,255],gainsboro:[220,220,220],ghostwhite:[248,248,255],gold:[255,215,0],goldenrod:[218,165,32],gray:[128,128,128],green:[0,128,0],greenyellow:[173,255,47],grey:[128,128,128],honeydew:[240,255,240],hotpink:[255,105,180],indianred:[205,92,92],indigo:[75,0,130],ivory:[255,255,240],khaki:[240,230,140],lavender:[230,230,250],lavenderblush:[255,240,245],lawngreen:[124,252,0],lemonchiffon:[255,250,205],lightblue:[173,216,230],lightcoral:[240,128,128],lightcyan:[224,255,255],lightgoldenrodyellow:[250,250,210],lightgray:[211,211,211],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightsalmon:[255,160,122],lightseagreen:[32,178,170],lightskyblue:[135,206,250],lightslategray:[119,136,153],lightslategrey:[119,136,153],lightsteelblue:[176,196,222],lightyellow:[255,255,224],lime:[0,255,0],limegreen:[50,205,50],linen:[250,240,230],magenta:[255,0,255],maroon:[128,0,0],mediumaquamarine:[102,205,170],mediumblue:[0,0,205],mediumorchid:[186,85,211],mediumpurple:[147,112,219],mediumseagreen:[60,179,113],mediumslateblue:[123,104,238],mediumspringgreen:[0,250,154],mediumturquoise:[72,209,204],mediumvioletred:[199,21,133],midnightblue:[25,25,112],mintcream:[245,255,250],mistyrose:[255,228,225],moccasin:[255,228,181],navajowhite:[255,222,173],navy:[0,0,128],oldlace:[253,245,230],olive:[128,128,0],olivedrab:[107,142,35],orange:[255,165,0],orangered:[255,69,0],orchid:[218,112,214],palegoldenrod:[238,232,170],palegreen:[152,251,152],paleturquoise:[175,238,238],palevioletred:[219,112,147],papayawhip:[255,239,213],peachpuff:[255,218,185],peru:[205,133,63],pink:[255,192,203],plum:[221,160,221],powderblue:[176,224,230],purple:[128,0,128],rebeccapurple:[102,51,153],red:[255,0,0],rosybrown:[188,143,143],royalblue:[65,105,225],saddlebrown:[139,69,19],salmon:[250,128,114],sandybrown:[244,164,96],seagreen:[46,139,87],seashell:[255,245,238],sienna:[160,82,45],silver:[192,192,192],skyblue:[135,206,235],slateblue:[106,90,205],slategray:[112,128,144],slategrey:[112,128,144],snow:[255,250,250],springgreen:[0,255,127],steelblue:[70,130,180],tan:[210,180,140],teal:[0,128,128],thistle:[216,191,216],tomato:[255,99,71],turquoise:[64,224,208],violet:[238,130,238],wheat:[245,222,179],white:[255,255,255],whitesmoke:[245,245,245],yellow:[255,255,0],yellowgreen:[154,205,50]}},4199:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck-content code{background-color:hsla(0,0%,78%,.3);border-radius:2px;padding:.15em}.ck.ck-editor__editable .ck-code_selected{background-color:hsla(0,0%,78%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-basic-styles/theme/code.css"],names:[],mappings:"AAKA,iBACC,kCAAuC,CAEvC,iBAAkB,CADlB,aAED,CAEA,0CACC,kCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content code {
	background-color: hsla(0, 0%, 78%, 0.3);
	padding: .15em;
	border-radius: 2px;
}

.ck.ck-editor__editable .ck-code_selected  {
	background-color: hsla(0, 0%, 78%, 0.5);
}
`],sourceRoot:""}]);const S=v},8708:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck-content blockquote{border-left:5px solid #ccc;font-style:italic;margin-left:0;margin-right:0;overflow:hidden;padding-left:1.5em;padding-right:1.5em}.ck-content[dir=rtl] blockquote{border-left:0;border-right:5px solid #ccc}","",{version:3,sources:["webpack://./../ckeditor5-block-quote/theme/blockquote.css"],names:[],mappings:"AAKA,uBAWC,0BAAsC,CADtC,iBAAkB,CAFlB,aAAc,CACd,cAAe,CAPf,eAAgB,CAIhB,kBAAmB,CADnB,mBAOD,CAEA,gCACC,aAAc,CACd,2BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content blockquote {
	/* See #12 */
	overflow: hidden;

	/* https://github.com/ckeditor/ckeditor5-block-quote/issues/15 */
	padding-right: 1.5em;
	padding-left: 1.5em;

	margin-left: 0;
	margin-right: 0;
	font-style: italic;
	border-left: solid 5px hsl(0, 0%, 80%);
}

.ck-content[dir="rtl"] blockquote {
	border-left: 0;
	border-right: solid 5px hsl(0, 0%, 80%);
}
`],sourceRoot:""}]);const S=v},1866:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,':root{--ck-image-processing-highlight-color:#f9fafa;--ck-image-processing-background-color:#e3e5e8}.ck.ck-editor__editable .image.image-processing{position:relative}.ck.ck-editor__editable .image.image-processing:before{animation:ck-image-processing-animation 2s linear infinite;background:linear-gradient(90deg,var(--ck-image-processing-background-color),var(--ck-image-processing-highlight-color),var(--ck-image-processing-background-color));background-size:200% 100%;content:"";height:100%;left:0;position:absolute;top:0;width:100%;z-index:1}.ck.ck-editor__editable .image.image-processing img{height:100%}@keyframes ck-image-processing-animation{0%{background-position:200% 0}to{background-position:-200% 0}}',"",{version:3,sources:["webpack://./../ckeditor5-ckbox/theme/ckboximageedit.css"],names:[],mappings:"AAKA,MAEC,6CAAyD,CACzD,8CACD,CAIE,gDACC,iBA2BD,CAzBC,uDAmBC,0DAA2D,CAR3D,oKAKC,CACD,yBAA0B,CAhB1B,UAAW,CAOX,WAAY,CAHZ,MAAO,CAFP,iBAAkB,CAClB,KAAM,CAKN,UAAW,CAHX,SAcD,CAEA,oDACC,WACD,CAKH,yCACC,GACC,0BACD,CACA,GACC,2BACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Based on default CKBox theme colors */
	--ck-image-processing-highlight-color: hsl(220, 10%, 98%);
	--ck-image-processing-background-color: hsl(220, 10%, 90%);
}

.ck.ck-editor__editable {
	& .image {
		&.image-processing {
			position: relative;

			&:before {
				content: '';

				position: absolute;
				top: 0;
				left: 0;
				z-index: 1;

				height: 100%;
				width: 100%;

				background: linear-gradient(
					90deg,
					var(--ck-image-processing-background-color),
					var(--ck-image-processing-highlight-color),
					var(--ck-image-processing-background-color)
				);
				background-size: 200% 100%;

				animation: ck-image-processing-animation 2s linear infinite;
			}

			& img {
				height: 100%;
			}
		}
	}
}

@keyframes ck-image-processing-animation {
	0% {
		background-position: 200% 0;
	}
	100% {
		background-position: -200% 0;
	}
}
`],sourceRoot:""}]);const S=v},7793:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,'.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position{display:inline;pointer-events:none;position:relative}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{position:absolute;width:0}.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__selection-handle,.ck.ck-editor__editable .ck-widget:-webkit-drag>.ck-widget__type-around{display:none}.ck.ck-clipboard-drop-target-line{pointer-events:none;position:absolute}:root{--ck-clipboard-drop-target-dot-width:12px;--ck-clipboard-drop-target-dot-height:8px;--ck-clipboard-drop-target-color:var(--ck-color-focus-border)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);bottom:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);margin-left:-1px;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5)}.ck.ck-editor__editable .ck.ck-clipboard-drop-target-position span:after{border-color:var(--ck-clipboard-drop-target-color) transparent transparent transparent;border-style:solid;border-width:calc(var(--ck-clipboard-drop-target-dot-height)) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5);content:"";display:block;height:0;left:50%;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-height)*-.5);transform:translateX(-50%);width:0}.ck.ck-editor__editable .ck-widget.ck-clipboard-drop-target-range{outline:var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color)!important}.ck.ck-editor__editable .ck-widget:-webkit-drag{zoom:.6;outline:none!important}.ck.ck-clipboard-drop-target-line{background:var(--ck-clipboard-drop-target-color);border:1px solid var(--ck-clipboard-drop-target-color);height:0;margin-top:-1px}.ck.ck-clipboard-drop-target-line:before{border-style:solid;content:"";height:0;position:absolute;top:calc(var(--ck-clipboard-drop-target-dot-width)*-.5);width:0}[dir=ltr] .ck.ck-clipboard-drop-target-line:before{border-color:transparent transparent transparent var(--ck-clipboard-drop-target-color);border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0 calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height);left:-1px}[dir=rtl] .ck.ck-clipboard-drop-target-line:before{border-color:transparent var(--ck-clipboard-drop-target-color) transparent transparent;border-width:calc(var(--ck-clipboard-drop-target-dot-width)*.5) var(--ck-clipboard-drop-target-dot-height) calc(var(--ck-clipboard-drop-target-dot-width)*.5) 0;right:-1px}',"",{version:3,sources:["webpack://./../ckeditor5-clipboard/theme/clipboard.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-clipboard/clipboard.css"],names:[],mappings:"AASC,8DACC,cAAe,CAEf,mBAAoB,CADpB,iBAOD,CAJC,mEACC,iBAAkB,CAClB,OACD,CAWA,qJACC,YACD,CAIF,kCAEC,mBAAoB,CADpB,iBAED,CC9BA,MACC,yCAA0C,CAC1C,yCAA0C,CAC1C,6DACD,CAOE,mEAIC,gDAAiD,CADjD,sDAAuD,CAFvD,2DAA8D,CAI9D,gBAAiB,CAHjB,wDAqBD,CAfC,yEAWC,sFAAuF,CAEvF,kBAAmB,CADnB,qKAA0K,CAX1K,UAAW,CAIX,aAAc,CAFd,QAAS,CAIT,QAAS,CADT,iBAAkB,CAElB,wDAA2D,CAE3D,0BAA2B,CAR3B,OAYD,CAOF,kEACC,gGACD,CAKA,gDACC,OAAS,CACT,sBACD,CAGD,kCAGC,gDAAiD,CADjD,sDAAuD,CADvD,QAAS,CAGT,eAwBD,CAtBC,yCAMC,kBAAmB,CALnB,UAAW,CAIX,QAAS,CAHT,iBAAkB,CAClB,uDAA0D,CAC1D,OAiBD,CArBA,mDAYE,sFAAuF,CADvF,+JAAoK,CAFpK,SAYF,CArBA,mDAmBE,sFAAuF,CADvF,+JAAmK,CAFnK,UAKF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		display: inline;
		position: relative;
		pointer-events: none;

		& span {
			position: absolute;
			width: 0;
		}
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		& > .ck-widget__selection-handle {
			display: none;
		}

		& > .ck-widget__type-around {
			display: none;
		}
	}
}

.ck.ck-clipboard-drop-target-line {
	position: absolute;
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-clipboard-drop-target-dot-width: 12px;
	--ck-clipboard-drop-target-dot-height: 8px;
	--ck-clipboard-drop-target-color: var(--ck-color-focus-border);
}

.ck.ck-editor__editable {
	/*
	 * Vertical drop target (in text).
	 */
	& .ck.ck-clipboard-drop-target-position {
		& span {
			bottom: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));
			border: 1px solid var(--ck-clipboard-drop-target-color);
			background: var(--ck-clipboard-drop-target-color);
			margin-left: -1px;

			/* The triangle above the marker */
			&::after {
				content: '';
				width: 0;
				height: 0;

				display: block;
				position: absolute;
				left: 50%;
				top: calc(-.5 * var(--ck-clipboard-drop-target-dot-height));

				transform: translateX(-50%);
				border-color: var(--ck-clipboard-drop-target-color) transparent transparent transparent;
				border-width: calc(var(--ck-clipboard-drop-target-dot-height)) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width));
				border-style: solid;
			}
		}
	}

	/*
	 * Styles of the widget that it a drop target.
	 */
	& .ck-widget.ck-clipboard-drop-target-range {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-clipboard-drop-target-color) !important;
	}

	/*
	 * Styles of the widget being dragged (its preview).
	 */
	& .ck-widget:-webkit-drag {
		zoom: 0.6;
		outline: none !important;
	}
}

.ck.ck-clipboard-drop-target-line {
	height: 0;
	border: 1px solid var(--ck-clipboard-drop-target-color);
	background: var(--ck-clipboard-drop-target-color);
	margin-top: -1px;

	&::before {
		content: '';
		position: absolute;
		top: calc(-.5 * var(--ck-clipboard-drop-target-dot-width));
		width: 0;
		height: 0;
		border-style: solid;

		@mixin ck-dir ltr {
			left: -1px;

			border-width: calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0 calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height);
			border-color: transparent transparent transparent var(--ck-clipboard-drop-target-color);
		}

		@mixin ck-dir rtl {
			right: -1px;

			border-width:calc(.5 * var(--ck-clipboard-drop-target-dot-width)) var(--ck-clipboard-drop-target-dot-height) calc(.5 * var(--ck-clipboard-drop-target-dot-width)) 0;
			border-color: transparent var(--ck-clipboard-drop-target-color) transparent transparent;
		}
	}
}
`],sourceRoot:""}]);const S=v},7388:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-editor{position:relative}.ck.ck-editor .ck-editor__top .ck-sticky-panel .ck-toolbar{z-index:var(--ck-z-panel)}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border-radius:0}.ck-rounded-corners .ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content{border:solid var(--ck-color-base-border);border-width:1px 1px 0}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content.ck-sticky-panel__content_sticky{border-bottom-width:1px}.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-menu-bar,.ck.ck-editor__top .ck-sticky-panel .ck-sticky-panel__content .ck-toolbar{border:0}.ck.ck-editor__main>.ck-editor__editable{background:var(--ck-color-base-background);border-radius:0}.ck-rounded-corners .ck.ck-editor__main>.ck-editor__editable,.ck.ck-editor__main>.ck-editor__editable.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}.ck.ck-editor__main>.ck-editor__editable:not(.ck-focused){border-color:var(--ck-color-base-border)}","",{version:3,sources:["webpack://./../ckeditor5-editor-classic/theme/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-editor-classic/classiceditor.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,cAIC,iBAMD,CAJC,2DAEC,yBACD,CCLC,8DCED,eDeC,CAjBA,mKCMA,qCAAsC,CDJpC,2BAA4B,CAC5B,4BAcF,CAjBA,8DAOC,wCAAsB,CAAtB,sBAUD,CARC,8FACC,uBACD,CAEA,qJAEC,QACD,CAMH,yCAEC,0CAA2C,CCtB3C,eDgCD,CAZA,yHChBE,qCAAsC,CDqBtC,wBAAyB,CACzB,yBAMF,CAHC,0DACC,wCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor {
	/* All the elements within \`.ck-editor\` are positioned relatively to it.
	 If any element needs to be positioned with respect to the <body>, etc.,
	 it must land outside of the \`.ck-editor\` in DOM. */
	position: relative;

	& .ck-editor__top .ck-sticky-panel .ck-toolbar {
		/* https://github.com/ckeditor/ckeditor5-editor-classic/issues/62 */
		z-index: var(--ck-z-panel);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

.ck.ck-editor__top {
	& .ck-sticky-panel {
		& .ck-sticky-panel__content {
			@mixin ck-rounded-corners {
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}

			border: 1px solid var(--ck-color-base-border);
			border-bottom-width: 0;

			&.ck-sticky-panel__content_sticky {
				border-bottom-width: 1px;
			}

			& .ck-menu-bar,
			& .ck-toolbar {
				border: 0;
			}
		}
	}
}

/* Note: Use ck-editor__main to make sure these styles don't apply to other editor types */
.ck.ck-editor__main > .ck-editor__editable {
	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/113 */
	background: var(--ck-color-base-background);

	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}

	&:not(.ck-focused) {
		border-color: var(--ck-color-base-border);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=v},4098:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck .ck-placeholder,.ck.ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{content:attr(data-placeholder);left:0;pointer-events:none;position:absolute;right:0}.ck.ck-read-only .ck-placeholder:before{display:none}.ck.ck-reset_all .ck-placeholder{position:relative}.ck .ck-placeholder:before,.ck.ck-placeholder:before{color:var(--ck-color-engine-placeholder-text);cursor:text}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/placeholder.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-engine/placeholder.css"],names:[],mappings:"AAMA,uCAEC,iBAWD,CATC,qDAIC,8BAA+B,CAF/B,MAAO,CAKP,mBAAoB,CANpB,iBAAkB,CAElB,OAKD,CAKA,wCACC,YACD,CAQD,iCACC,iBACD,CC5BC,qDAEC,6CAA8C,CAD9C,WAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder,
.ck .ck-placeholder {
	position: relative;

	&::before {
		position: absolute;
		left: 0;
		right: 0;
		content: attr(data-placeholder);

		/* See ckeditor/ckeditor5#469. */
		pointer-events: none;
	}
}

/* See ckeditor/ckeditor5#1987. */
.ck.ck-read-only .ck-placeholder {
	&::before {
		display: none;
	}
}

/*
 * Rules for the \`ck-placeholder\` are loaded before the rules for \`ck-reset_all\` in the base CKEditor 5 DLL build.
 * This fix overwrites the incorrectly set \`position: static\` from \`ck-reset_all\`.
 * See https://github.com/ckeditor/ckeditor5/issues/11418.
 */
.ck.ck-reset_all .ck-placeholder {
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* See ckeditor/ckeditor5#936. */
.ck.ck-placeholder, .ck .ck-placeholder {
	&::before {
		cursor: text;
		color: var(--ck-color-engine-placeholder-text);
	}
}
`],sourceRoot:""}]);const S=v},8264:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-editor__editable span[data-ck-unsafe-element]{display:none}","",{version:3,sources:["webpack://./../ckeditor5-engine/theme/renderer.css"],names:[],mappings:"AAMA,qDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Elements marked by the Renderer as hidden should be invisible in the editor. */
.ck.ck-editor__editable span[data-ck-unsafe-element] {
	display: none;
}
`],sourceRoot:""}]);const S=v},6269:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-heading_heading1{font-size:20px}.ck.ck-heading_heading2{font-size:17px}.ck.ck-heading_heading3{font-size:14px}.ck[class*=ck-heading_heading]{font-weight:700}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__button .ck-button__label{width:8em}.ck.ck-dropdown.ck-heading-dropdown .ck-dropdown__panel .ck-list__item{min-width:18em}","",{version:3,sources:["webpack://./../ckeditor5-heading/theme/heading.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-heading/heading.css"],names:[],mappings:"AAKA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,wBACC,cACD,CAEA,+BACC,eACD,CCZC,2EACC,SACD,CAEA,uEACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-heading_heading1 {
	font-size: 20px;
}

.ck.ck-heading_heading2 {
	font-size: 17px;
}

.ck.ck-heading_heading3 {
	font-size: 14px;
}

.ck[class*="ck-heading_heading"] {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Resize dropdown's button label. */
.ck.ck-dropdown.ck-heading-dropdown {
	& .ck-dropdown__button .ck-button__label {
		width: 8em;
	}

	& .ck-dropdown__panel .ck-list__item {
		min-width: 18em;
	}
}
`],sourceRoot:""}]);const S=v},265:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck-content .image{clear:both;display:table;margin:.9em auto;min-width:50px;text-align:center}.ck-content .image img{display:block;height:auto;margin:0 auto;max-width:100%;min-width:100%}.ck-content .image-inline{align-items:flex-start;display:inline-flex;max-width:100%}.ck-content .image-inline picture{display:flex}.ck-content .image-inline img,.ck-content .image-inline picture{flex-grow:1;flex-shrink:1;max-width:100%}.ck.ck-editor__editable .image>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}.ck.ck-editor__editable .image{z-index:1}.ck.ck-editor__editable .image.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline{z-index:1}.ck.ck-editor__editable .image-inline.ck-widget_selected{z-index:2}.ck.ck-editor__editable .image-inline.ck-widget_selected ::selection{display:none}.ck.ck-editor__editable .image-inline img{height:auto}.ck.ck-editor__editable td .image-inline img,.ck.ck-editor__editable th .image-inline img{max-width:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/image.css"],names:[],mappings:"AAMC,mBAEC,UAAW,CADX,aAAc,CAOd,gBAAkB,CAGlB,cAAe,CARf,iBA2BD,CAjBC,uBAEC,aAAc,CAad,WAAY,CAVZ,aAAc,CAGd,cAAe,CAGf,cAKD,CAGD,0BAYC,sBAAuB,CANvB,mBAAoB,CAGpB,cAoBD,CAdC,kCACC,YACD,CAGA,gEAGC,WAAY,CACZ,aAAc,CAGd,cACD,CAUD,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAKA,+BACC,SASD,CAHC,kDACC,SACD,CAMD,sCACC,SAkBD,CAZC,yDACC,SAUD,CAHC,qEACC,YACD,CAMF,0CACC,WACD,CAMC,0FACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content {
	& .image {
		display: table;
		clear: both;
		text-align: center;

		/* Make sure there is some space between the content and the image. Center image by default. */
		/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	 	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
		margin: 0.9em auto;

		/* Make sure the caption will be displayed properly (See: https://github.com/ckeditor/ckeditor5/issues/1870). */
		min-width: 50px;

		& img {
			/* Prevent unnecessary margins caused by line-height (see #44). */
			display: block;

			/* Center the image if its width is smaller than the content's width. */
			margin: 0 auto;

			/* Make sure the image never exceeds the size of the parent container (ckeditor/ckeditor5-ui#67). */
			max-width: 100%;

			/* Make sure the image is never smaller than the parent container (See: https://github.com/ckeditor/ckeditor5/issues/9300). */
			min-width: 100%;

			/* Keep proportions of the block image if the height is set and the image is wider than the editor width.
			See https://github.com/ckeditor/ckeditor5/issues/14542. */
			height: auto;
		}
	}

	& .image-inline {
		/*
		 * Normally, the .image-inline would have "display: inline-block" and "img { width: 100% }" (to follow the wrapper while resizing).
		 * Unfortunately, together with "srcset", it gets automatically stretched up to the width of the editing root.
		 * This strange behavior does not happen with inline-flex.
		 */
		display: inline-flex;

		/* While being resized, don't allow the image to exceed the width of the editing root. */
		max-width: 100%;

		/* This is required by Safari to resize images in a sensible way. Without this, the browser breaks the ratio. */
		align-items: flex-start;

		/* When the picture is present it must act as a flex container to let the img resize properly */
		& picture {
			display: flex;
		}

		/* When the picture is present, it must act like a resizable img. */
		& picture,
		& img {
			/* This is necessary for the img to span the entire .image-inline wrapper and to resize properly. */
			flex-grow: 1;
			flex-shrink: 1;

			/* Prevents overflowing the editing root boundaries when an inline image is very wide. */
			max-width: 100%;
		}
	}
}

.ck.ck-editor__editable {
	/*
	 * Inhertit the content styles padding of the <figcaption> in case the integration overrides \`text-align: center\`
	 * of \`.image\` (e.g. to the left/right). This ensures the placeholder stays at the padding just like the native
	 * caret does, and not at the edge of <figcaption>.
	 */
	& .image > figcaption.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the image caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image {
		z-index: 1;

		/*
		 * Make sure the selected image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;
		}
	}

	/*
	 * See https://github.com/ckeditor/ckeditor5/issues/15115.
	 */
	& .image-inline {
		z-index: 1;

		/*
		 * Make sure the selected inline image always stays on top of its siblings.
		 * See https://github.com/ckeditor/ckeditor5/issues/9108.
		 */
		&.ck-widget_selected {
			z-index: 2;

			/*
			 * Make sure the native browser selection style is not displayed.
			 * Inline image widgets have their own styles for the selected state and
			 * leaving this up to the browser is asking for a visual collision.
			 */
			& ::selection {
				display: none;
			}
		}
	}

	/* Keep proportions of the inline image if the height is set and the image is wider than the editor width.
	See https://github.com/ckeditor/ckeditor5/issues/14542. */
	& .image-inline img {
		height: auto;
	}

	/* The inline image nested in the table should have its original size if not resized.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline img {
			max-width: none;
		}
	}
}
`],sourceRoot:""}]);const S=v},5247:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,":root{--ck-color-image-caption-background:#f7f7f7;--ck-color-image-caption-text:#333;--ck-color-image-caption-highlighted-background:#fd0}.ck-content .image>figcaption{background-color:var(--ck-color-image-caption-background);caption-side:bottom;color:var(--ck-color-image-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;word-break:break-word}.ck.ck-editor__editable .image>figcaption.image__caption_highlighted{animation:ck-image-caption-highlight .6s ease-out}@keyframes ck-image-caption-highlight{0%{background-color:var(--ck-color-image-caption-highlighted-background)}to{background-color:var(--ck-color-image-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagecaption.css"],names:[],mappings:"AAKA,MACC,2CAAoD,CACpD,kCAA8C,CAC9C,oDACD,CAGA,8BAKC,yDAA0D,CAH1D,mBAAoB,CAEpB,wCAAyC,CAHzC,qBAAsB,CAMtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,qBAMD,CAGA,qEACC,iDACD,CAEA,sCACC,GACC,qEACD,CAEA,GACC,yDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-caption-background: hsl(0, 0%, 97%);
	--ck-color-image-caption-text: hsl(0, 0%, 20%);
	--ck-color-image-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .image > figcaption {
	display: table-caption;
	caption-side: bottom;
	word-break: break-word;
	color: var(--ck-color-image-caption-text);
	background-color: var(--ck-color-image-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .image > figcaption.image__caption_highlighted {
	animation: ck-image-caption-highlight .6s ease-out;
}

@keyframes ck-image-caption-highlight {
	0% {
		background-color: var(--ck-color-image-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-image-caption-background);
	}
}
`],sourceRoot:""}]);const S=v},3350:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-image-insert-url .ck-image-insert-url__action-row{display:grid;grid-template-columns:repeat(2,1fr)}:root{--ck-image-insert-insert-by-url-width:250px}.ck.ck-image-insert-url{--ck-input-width:100%}.ck.ck-image-insert-url .ck-image-insert-url__action-row{grid-column-gap:var(--ck-spacing-large);margin-top:var(--ck-spacing-large)}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-cancel,.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button-save{justify-content:center;min-width:auto}.ck.ck-image-insert-url .ck-image-insert-url__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}.ck.ck-image-insert-form>.ck.ck-button{display:block;padding:var(--ck-list-button-padding);width:100%}[dir=ltr] .ck.ck-image-insert-form>.ck.ck-button{text-align:left}[dir=rtl] .ck.ck-image-insert-form>.ck.ck-button{text-align:right}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:first-child){border-top:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible:not(:last-child){border-bottom:1px solid var(--ck-color-base-border)}.ck.ck-image-insert-form>.ck.ck-collapsible,.ck.ck-image-insert-form>.ck.ck-image-insert-url{min-width:var(--ck-image-insert-insert-by-url-width)}.ck.ck-image-insert-form>.ck.ck-image-insert-url{padding:var(--ck-spacing-large)}.ck.ck-image-insert-form:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageinsert.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageinsert.css"],names:[],mappings:"AAMC,yDACC,YAAa,CACb,mCACD,CCFD,MACC,2CACD,CAEA,wBACC,qBAgBD,CAdC,yDACC,uCAAwC,CACxC,kCAWD,CATC,oJAEC,sBAAuB,CACvB,cACD,CAEA,sFACC,0BACD,CAKD,uCACC,aAAc,CAEd,qCAAsC,CADtC,UAUD,CAZA,iDAME,eAMF,CAZA,iDAUE,gBAEF,CAGC,8DACC,gDACD,CAEA,6DACC,mDACD,CAMD,6FAJC,oDAOD,CAHA,iDAEC,+BACD,CAEA,+BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-image-insert-url {
	& .ck-image-insert-url__action-row {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-image-insert-insert-by-url-width: 250px;
}

.ck.ck-image-insert-url {
	--ck-input-width: 100%;

	& .ck-image-insert-url__action-row {
		grid-column-gap: var(--ck-spacing-large);
		margin-top: var(--ck-spacing-large);

		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
			min-width: auto;
		}

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}

.ck.ck-image-insert-form {
	& > .ck.ck-button {
		display: block;
		width: 100%;
		padding: var(--ck-list-button-padding);

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& > .ck.ck-collapsible {
		&:not(:first-child) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		&:not(:last-child) {
			border-bottom: 1px solid var(--ck-color-base-border);
		}

		min-width: var(--ck-image-insert-insert-by-url-width);
	}

	/* This is the case when there are no other integrations configured than insert by URL */
	& > .ck.ck-image-insert-url {
		min-width: var(--ck-image-insert-insert-by-url-width);
		padding: var(--ck-spacing-large);
	}

	&:focus {
		outline: none;
	}
}
`],sourceRoot:""}]);const S=v},7378:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-editor__editable img.image_placeholder{background-size:100% 100%}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageplaceholder.css"],names:[],mappings:"AAMC,8CACC,yBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& img.image_placeholder {
		background-size: 100% 100%;
	}
}
`],sourceRoot:""}]);const S=v},3469:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck-content img.image_resized{height:auto}.ck-content .image.image_resized{box-sizing:border-box;display:block;max-width:100%}.ck-content .image.image_resized img{width:100%}.ck-content .image.image_resized>figcaption{display:block}.ck.ck-editor__editable td .image-inline.image_resized img,.ck.ck-editor__editable th .image-inline.image_resized img{max-width:100%}[dir=ltr] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon{margin-left:var(--ck-spacing-standard)}.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label{width:4em}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageresize.css"],names:[],mappings:"AAMA,8BACC,WACD,CAEA,iCAQC,qBAAsB,CADtB,aAAc,CANd,cAkBD,CATC,qCAEC,UACD,CAEA,4CAEC,aACD,CAQC,sHACC,cACD,CAIF,oFACC,uCACD,CAEA,oFACC,sCACD,CAEA,oEACC,SACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Preserve aspect ratio of the resized image after introducing image height attribute. */
.ck-content img.image_resized {
	height: auto;
}

.ck-content .image.image_resized {
	max-width: 100%;
	/*
	The \`<figure>\` element for resized images must not use \`display:table\` as browsers do not support \`max-width\` for it well.
	See https://stackoverflow.com/questions/4019604/chrome-safari-ignoring-max-width-in-table/14420691#14420691 for more.
	Fortunately, since we control the width, there is no risk that the image will look bad.
	*/
	display: block;
	box-sizing: border-box;

	& img {
		/* For resized images it is the \`<figure>\` element that determines the image width. */
		width: 100%;
	}

	& > figcaption {
		/* The \`<figure>\` element uses \`display:block\`, so \`<figcaption>\` also has to. */
		display: block;
	}
}

.ck.ck-editor__editable {
	/* The resized inline image nested in the table should respect its parent size.
	See https://github.com/ckeditor/ckeditor5/issues/9117. */
	& td,
	& th {
		& .image-inline.image_resized img {
			max-width: 100%;
		}
	}
}

[dir="ltr"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-right: var(--ck-spacing-standard);
}

[dir="rtl"] .ck.ck-button.ck-button_with-text.ck-resize-image-button .ck-button__icon {
	margin-left: var(--ck-spacing-standard);
}

.ck.ck-dropdown .ck-button.ck-resize-image-button .ck-button__label {
	width: 4em;
}
`],sourceRoot:""}]);const S=v},6386:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,":root{--ck-image-style-spacing:1.5em;--ck-inline-image-style-spacing:calc(var(--ck-image-style-spacing)/2)}.ck-content .image-style-block-align-left,.ck-content .image-style-block-align-right{max-width:calc(100% - var(--ck-image-style-spacing))}.ck-content .image-style-align-left,.ck-content .image-style-align-right{clear:none}.ck-content .image-style-side{float:right;margin-left:var(--ck-image-style-spacing);max-width:50%}.ck-content .image-style-align-left{float:left;margin-right:var(--ck-image-style-spacing)}.ck-content .image-style-align-center{margin-left:auto;margin-right:auto}.ck-content .image-style-align-right{float:right;margin-left:var(--ck-image-style-spacing)}.ck-content .image-style-block-align-right{margin-left:auto;margin-right:0}.ck-content .image-style-block-align-left{margin-left:0;margin-right:auto}.ck-content p+.image-style-align-left,.ck-content p+.image-style-align-right,.ck-content p+.image-style-side{margin-top:0}.ck-content .image-inline.image-style-align-left,.ck-content .image-inline.image-style-align-right{margin-bottom:var(--ck-inline-image-style-spacing);margin-top:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-left{margin-right:var(--ck-inline-image-style-spacing)}.ck-content .image-inline.image-style-align-right{margin-left:var(--ck-inline-image-style-spacing)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-background)}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__action:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton.ck-splitbutton_flatten:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover):after{display:none}.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__action:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled),.ck.ck-splitbutton.ck-splitbutton_flatten.ck-splitbutton_open:hover>.ck-splitbutton__arrow:not(.ck-disabled):not(:hover){background-color:var(--ck-color-button-on-hover-background)}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imagestyle.css"],names:[],mappings:"AAKA,MACC,8BAA+B,CAC/B,qEACD,CAMC,qFAEC,oDACD,CAIA,yEAEC,UACD,CAEA,8BACC,WAAY,CACZ,yCAA0C,CAC1C,aACD,CAEA,oCACC,UAAW,CACX,0CACD,CAEA,sCACC,gBAAiB,CACjB,iBACD,CAEA,qCACC,WAAY,CACZ,yCACD,CAEA,2CAEC,gBAAiB,CADjB,cAED,CAEA,0CACC,aAAc,CACd,iBACD,CAGA,6GAGC,YACD,CAGC,mGAGC,kDAAmD,CADnD,+CAED,CAEA,iDACC,iDACD,CAEA,kDACC,gDACD,CAUC,0lBAGC,qDAKD,CAHC,8nBACC,YACD,CAKD,oVAGC,2DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-image-style-spacing: 1.5em;
	--ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
}

.ck-content {
	/* Provides a minimal side margin for the left and right aligned images, so that the user has a visual feedback
	confirming successful application of the style if image width exceeds the editor's size.
	See https://github.com/ckeditor/ckeditor5/issues/9342 */
	& .image-style-block-align-left,
	& .image-style-block-align-right {
		max-width: calc(100% - var(--ck-image-style-spacing));
	}

	/* Allows displaying multiple floating images in the same line.
	See https://github.com/ckeditor/ckeditor5/issues/9183#issuecomment-804988132 */
	& .image-style-align-left,
	& .image-style-align-right {
		clear: none;
	}

	& .image-style-side {
		float: right;
		margin-left: var(--ck-image-style-spacing);
		max-width: 50%;
	}

	& .image-style-align-left {
		float: left;
		margin-right: var(--ck-image-style-spacing);
	}

	& .image-style-align-center {
		margin-left: auto;
		margin-right: auto;
	}

	& .image-style-align-right {
		float: right;
		margin-left: var(--ck-image-style-spacing);
	}

	& .image-style-block-align-right {
		margin-right: 0;
		margin-left: auto;
	}

	& .image-style-block-align-left {
		margin-left: 0;
		margin-right: auto;
	}

	/* Simulates margin collapsing with the preceding paragraph, which does not work for the floating elements. */
	& p + .image-style-align-left,
	& p + .image-style-align-right,
	& p + .image-style-side {
		margin-top: 0;
	}

	& .image-inline {
		&.image-style-align-left,
		&.image-style-align-right {
			margin-top: var(--ck-inline-image-style-spacing);
			margin-bottom: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-left {
			margin-right: var(--ck-inline-image-style-spacing);
		}

		&.image-style-align-right {
			margin-left: var(--ck-inline-image-style-spacing);
		}
	}
}

.ck.ck-splitbutton {
	/* The button should display as a regular drop-down if the action button
	is forced to fire the same action as the arrow button. */
	&.ck-splitbutton_flatten {
		&:hover,
		&.ck-splitbutton_open {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-background);

				&::after {
					display: none;
				}
			}
		}

		&.ck-splitbutton_open:hover {
			& > .ck-splitbutton__action:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled),
			& > .ck-splitbutton__arrow:not(.ck-disabled):not(:hover) {
				background-color: var(--ck-color-button-on-hover-background);
			}
		}
	}
}
`],sourceRoot:""}]);const S=v},7693:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,'.ck-image-upload-complete-icon{border-radius:50%;display:block;position:absolute;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);z-index:1}.ck-image-upload-complete-icon:after{content:"";position:absolute}:root{--ck-color-image-upload-icon:#fff;--ck-color-image-upload-icon-background:#008a00;--ck-image-upload-icon-size:20;--ck-image-upload-icon-width:2px;--ck-image-upload-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck-image-upload-complete-icon{animation-delay:0ms,3s;animation-duration:.5s,.5s;animation-fill-mode:forwards,forwards;animation-name:ck-upload-complete-icon-show,ck-upload-complete-icon-hide;background:var(--ck-color-image-upload-icon-background);font-size:calc(1px*var(--ck-image-upload-icon-size));height:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size));opacity:0;overflow:hidden;width:calc(var(--ck-image-upload-icon-is-visible)*var(--ck-image-upload-icon-size))}.ck-image-upload-complete-icon:after{animation-delay:.5s;animation-duration:.5s;animation-fill-mode:forwards;animation-name:ck-upload-complete-icon-check;border-right:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);border-top:var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);box-sizing:border-box;height:0;left:25%;opacity:0;top:50%;transform:scaleX(-1) rotate(135deg);transform-origin:left top;width:0}@keyframes ck-upload-complete-icon-show{0%{opacity:0}to{opacity:1}}@keyframes ck-upload-complete-icon-hide{0%{opacity:1}to{opacity:0}}@keyframes ck-upload-complete-icon-check{0%{height:0;opacity:1;width:0}33%{height:0;width:.3em}to{height:.45em;opacity:1;width:.3em}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadicon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadicon.css"],names:[],mappings:"AAKA,+BAUC,iBAAkB,CATlB,aAAc,CACd,iBAAkB,CAOlB,sCAAwC,CADxC,oCAAsC,CAGtC,SAMD,CAJC,qCACC,UAAW,CACX,iBACD,CChBD,MACC,iCAA8C,CAC9C,+CAA4D,CAG5D,8BAA+B,CAC/B,gCAAiC,CACjC,4DACD,CAEA,+BAWC,sBAA4B,CAN5B,0BAAgC,CADhC,qCAAuC,CADvC,wEAA0E,CAD1E,uDAAwD,CAMxD,oDAAuD,CAWvD,oFAAuF,CAlBvF,SAAU,CAgBV,eAAgB,CAChB,mFA0BD,CAtBC,qCAgBC,mBAAsB,CADtB,sBAAyB,CAEzB,4BAA6B,CAH7B,4CAA6C,CAF7C,sFAAuF,CADvF,oFAAqF,CASrF,qBAAsB,CAdtB,QAAS,CAJT,QAAS,CAGT,SAAU,CADV,OAAQ,CAKR,mCAAoC,CACpC,yBAA0B,CAH1B,OAcD,CAGD,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,wCACC,GACC,SACD,CAEA,GACC,SACD,CACD,CAEA,yCACC,GAGC,QAAS,CAFT,SAAU,CACV,OAED,CACA,IAEC,QAAS,CADT,UAED,CACA,GAGC,YAAc,CAFd,SAAU,CACV,UAED,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-image-upload-complete-icon {
	display: block;
	position: absolute;

	/*
	 * Smaller images should have the icon closer to the border.
	 * Match the icon position with the linked image indicator brought by the link image feature.
	 */
	top: min(var(--ck-spacing-medium), 6%);
	right: min(var(--ck-spacing-medium), 6%);
	border-radius: 50%;
	z-index: 1;

	&::after {
		content: "";
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-image-upload-icon: hsl(0, 0%, 100%);
	--ck-color-image-upload-icon-background: hsl(120, 100%, 27%);

	/* Match the icon size with the linked image indicator brought by the link image feature. */
	--ck-image-upload-icon-size: 20;
	--ck-image-upload-icon-width: 2px;
	--ck-image-upload-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck-image-upload-complete-icon {
	opacity: 0;
	background: var(--ck-color-image-upload-icon-background);
	animation-name: ck-upload-complete-icon-show, ck-upload-complete-icon-hide;
	animation-fill-mode: forwards, forwards;
	animation-duration: 500ms, 500ms;

	/* To make animation scalable. */
	font-size: calc(1px * var(--ck-image-upload-icon-size));

	/* Hide completed upload icon after 3 seconds. */
	animation-delay: 0ms, 3000ms;

	/*
	 * Use CSS math to simulate container queries.
	 * https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
	 */
	overflow: hidden;
	width: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));
	height: calc(var(--ck-image-upload-icon-is-visible) * var(--ck-image-upload-icon-size));

	/* This is check icon element made from border-width mixed with animations. */
	&::after {
		/* Because of border transformation we need to "hard code" left position. */
		left: 25%;

		top: 50%;
		opacity: 0;
		height: 0;
		width: 0;

		transform: scaleX(-1) rotate(135deg);
		transform-origin: left top;
		border-top: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);
		border-right: var(--ck-image-upload-icon-width) solid var(--ck-color-image-upload-icon);

		animation-name: ck-upload-complete-icon-check;
		animation-duration: 500ms;
		animation-delay: 500ms;
		animation-fill-mode: forwards;

		/* #1095. While reset is not providing proper box-sizing for pseudoelements, we need to handle it. */
		box-sizing: border-box;
	}
}

@keyframes ck-upload-complete-icon-show {
	from {
		opacity: 0;
	}

	to {
		opacity: 1;
	}
}

@keyframes ck-upload-complete-icon-hide {
	from {
		opacity: 1;
	}

	to {
		opacity: 0;
	}
}

@keyframes ck-upload-complete-icon-check {
	0% {
		opacity: 1;
		width: 0;
		height: 0;
	}
	33% {
		width: 0.3em;
		height: 0;
	}
	100% {
		opacity: 1;
		width: 0.3em;
		height: 0.45em;
	}
}
`],sourceRoot:""}]);const S=v},1559:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,'.ck .ck-upload-placeholder-loader{align-items:center;display:flex;justify-content:center;left:0;position:absolute;top:0}.ck .ck-upload-placeholder-loader:before{content:"";position:relative}:root{--ck-color-upload-placeholder-loader:#b3b3b3;--ck-upload-placeholder-loader-size:32px;--ck-upload-placeholder-image-aspect-ratio:2.8}.ck .ck-image-upload-placeholder{margin:0;width:100%}.ck .ck-image-upload-placeholder.image-inline{width:calc(var(--ck-upload-placeholder-loader-size)*2*var(--ck-upload-placeholder-image-aspect-ratio))}.ck .ck-image-upload-placeholder img{aspect-ratio:var(--ck-upload-placeholder-image-aspect-ratio)}.ck .ck-upload-placeholder-loader{height:100%;width:100%}.ck .ck-upload-placeholder-loader:before{animation:ck-upload-placeholder-loader 1s linear infinite;border-radius:50%;border-right:2px solid transparent;border-top:3px solid var(--ck-color-upload-placeholder-loader);height:var(--ck-upload-placeholder-loader-size);width:var(--ck-upload-placeholder-loader-size)}@keyframes ck-upload-placeholder-loader{to{transform:rotate(1turn)}}',"",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadloader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadloader.css"],names:[],mappings:"AAKA,kCAGC,kBAAmB,CADnB,YAAa,CAEb,sBAAuB,CAEvB,MAAO,CALP,iBAAkB,CAIlB,KAOD,CAJC,yCACC,UAAW,CACX,iBACD,CCXD,MACC,4CAAqD,CACrD,wCAAyC,CACzC,8CACD,CAEA,iCAGC,QAAS,CADT,UAgBD,CAbC,8CACC,sGACD,CAEA,qCAOC,4DACD,CAGD,kCAEC,WAAY,CADZ,UAWD,CARC,yCAMC,yDAA0D,CAH1D,iBAAkB,CAElB,kCAAmC,CADnC,8DAA+D,CAF/D,+CAAgD,CADhD,8CAMD,CAGD,wCACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-upload-placeholder-loader {
	position: absolute;
	display: flex;
	align-items: center;
	justify-content: center;
	top: 0;
	left: 0;

	&::before {
		content: '';
		position: relative;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-upload-placeholder-loader: hsl(0, 0%, 70%);
	--ck-upload-placeholder-loader-size: 32px;
	--ck-upload-placeholder-image-aspect-ratio: 2.8;
}

.ck .ck-image-upload-placeholder {
	/* We need to control the full width of the SVG gray background. */
	width: 100%;
	margin: 0;

	&.image-inline {
		width: calc( 2 * var(--ck-upload-placeholder-loader-size) * var(--ck-upload-placeholder-image-aspect-ratio) );
	}

	& img {
		/*
		 * This is an arbitrary aspect for a 1x1 px GIF to display to the user. Not too tall, not too short.
		 * There's nothing special about this number except that it should make the image placeholder look like
		 * a real image during this short period after the upload started and before the image was read from the
		 * file system (and a rich preview was loaded).
		 */
		aspect-ratio: var(--ck-upload-placeholder-image-aspect-ratio);
	}
}

.ck .ck-upload-placeholder-loader {
	width: 100%;
	height: 100%;

	&::before {
		width: var(--ck-upload-placeholder-loader-size);
		height: var(--ck-upload-placeholder-loader-size);
		border-radius: 50%;
		border-top: 3px solid var(--ck-color-upload-placeholder-loader);
		border-right: 2px solid transparent;
		animation: ck-upload-placeholder-loader 1s linear infinite;
	}
}

@keyframes ck-upload-placeholder-loader {
	to {
		transform: rotate( 360deg );
	}
}
`],sourceRoot:""}]);const S=v},2267:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-editor__editable .image,.ck.ck-editor__editable .image-inline{position:relative}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{left:0;position:absolute;top:0}.ck.ck-editor__editable .image-inline.ck-appear,.ck.ck-editor__editable .image.ck-appear{animation:fadeIn .7s}.ck.ck-editor__editable .image .ck-progress-bar,.ck.ck-editor__editable .image-inline .ck-progress-bar{background:var(--ck-color-upload-bar-background);height:2px;transition:width .1s;width:0}@keyframes fadeIn{0%{opacity:0}to{opacity:1}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/imageuploadprogress.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-image/imageuploadprogress.css"],names:[],mappings:"AAMC,qEAEC,iBACD,CAGA,uGAIC,MAAO,CAFP,iBAAkB,CAClB,KAED,CCRC,yFACC,oBACD,CAID,uGAIC,gDAAiD,CAFjD,UAAW,CAGX,oBAAuB,CAFvB,OAGD,CAGD,kBACC,GAAO,SAAY,CACnB,GAAO,SAAY,CACpB",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		position: relative;
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		position: absolute;
		top: 0;
		left: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	& .image,
	& .image-inline {
		/* Showing animation. */
		&.ck-appear {
			animation: fadeIn 700ms;
		}
	}

	/* Upload progress bar. */
	& .image .ck-progress-bar,
	& .image-inline .ck-progress-bar {
		height: 2px;
		width: 0;
		background: var(--ck-color-upload-bar-background);
		transition: width 100ms;
	}
}

@keyframes fadeIn {
	from { opacity: 0; }
	to   { opacity: 1; }
}
`],sourceRoot:""}]);const S=v},4062:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-text-alternative-form{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-text-alternative-form .ck-labeled-field-view{display:inline-block}.ck.ck-text-alternative-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-text-alternative-form{flex-wrap:wrap}.ck.ck-text-alternative-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-text-alternative-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-image/theme/textalternativeform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,6BACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,oDACC,oBACD,CAEA,uCACC,YACD,CCZA,oCDCD,6BAcE,cAUF,CARE,oDACC,eACD,CAEA,wCACC,cACD,CCrBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-text-alternative-form {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=v},7719:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck .ck-link_selected{background:var(--ck-color-link-selected-background)}.ck .ck-link_selected span.image-inline{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background)}.ck .ck-fake-link-selection{background:var(--ck-color-link-fake-selection)}.ck .ck-fake-link-selection_collapsed{border-right:1px solid var(--ck-color-base-text);height:100%;margin-right:-1px;outline:1px solid hsla(0,0%,100%,.5)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/link.css"],names:[],mappings:"AAMA,sBACC,mDAMD,CAHC,wCACC,yFACD,CAOD,4BACC,8CACD,CAGA,sCAEC,gDAAiD,CADjD,WAAY,CAEZ,iBAAkB,CAClB,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/* Class added to span element surrounding currently selected link. */
.ck .ck-link_selected {
	background: var(--ck-color-link-selected-background);

	/* Give linked inline images some outline to let the user know they are also part of the link. */
	& span.image-inline {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-link-selected-background);
	}
}

/*
 * Classes used by the "fake visual selection" displayed in the content when an input
 * in the link UI has focus (the browser does not render the native selection in this state).
 */
.ck .ck-fake-link-selection {
	background: var(--ck-color-link-fake-selection);
}

/* A collapsed fake visual selection. */
.ck .ck-fake-link-selection_collapsed {
	height: 100%;
	border-right: 1px solid var(--ck-color-base-text);
	margin-right: -1px;
	outline: solid 1px hsla(0, 0%, 100%, .5);
}
`],sourceRoot:""}]);const S=v},8762:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-link-actions{display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-link-actions .ck-link-actions__preview{display:inline-block}.ck.ck-link-actions .ck-link-actions__preview .ck-button__label{overflow:hidden}@media screen and (max-width:600px){.ck.ck-link-actions{flex-wrap:wrap}.ck.ck-link-actions .ck-link-actions__preview{flex-basis:100%}.ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){flex-basis:50%}}.ck.ck-link-actions .ck-button.ck-link-actions__preview{padding-left:0;padding-right:0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{color:var(--ck-color-link-default);cursor:pointer;max-width:var(--ck-input-width);min-width:3em;padding:0 var(--ck-spacing-medium);text-align:center;text-overflow:ellipsis}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label:hover{text-decoration:underline}.ck.ck-link-actions .ck-button.ck-link-actions__preview,.ck.ck-link-actions .ck-button.ck-link-actions__preview:active,.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus,.ck.ck-link-actions .ck-button.ck-link-actions__preview:hover{background:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:active{box-shadow:none}.ck.ck-link-actions .ck-button.ck-link-actions__preview:focus .ck-button__label{text-decoration:underline}[dir=ltr] .ck.ck-link-actions .ck-button:not(:first-child),[dir=rtl] .ck.ck-link-actions .ck-button:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-link-actions .ck-button.ck-link-actions__preview{margin:var(--ck-spacing-standard) var(--ck-spacing-standard) 0}.ck.ck-link-actions .ck-button.ck-link-actions__preview .ck-button__label{max-width:100%;min-width:0}[dir=ltr] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview),[dir=rtl] .ck.ck-link-actions .ck-button:not(.ck-link-actions__preview){margin-left:0}}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkactions.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkactions.css"],names:[],mappings:"AAOA,oBACC,YAAa,CACb,kBAAmB,CACnB,gBAqBD,CAnBC,8CACC,oBAKD,CAHC,gEACC,eACD,CCXD,oCDCD,oBAcE,cAUF,CARE,8CACC,eACD,CAEA,8DACC,cACD,CCrBD,CCIA,wDACC,cAAe,CACf,eAmCD,CAjCC,0EAEC,kCAAmC,CAEnC,cAAe,CAIf,+BAAgC,CAChC,aAAc,CARd,kCAAmC,CASnC,iBAAkB,CAPlB,sBAYD,CAHC,gFACC,yBACD,CAGD,mPAIC,eACD,CAEA,+DACC,eACD,CAGC,gFACC,yBACD,CAWD,qHACC,sCACD,CDtDD,oCC0DC,wDACC,8DAMD,CAJC,0EAEC,cAAe,CADf,WAED,CAGD,gJAME,aAEF,CDzED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-link-actions__preview {
		display: inline-block;

		& .ck-button__label {
			overflow: hidden;
		}
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-link-actions__preview {
			flex-basis: 100%;
		}

		& .ck-button:not(.ck-link-actions__preview) {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_unselectable.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-actions {
	& .ck-button.ck-link-actions__preview {
		padding-left: 0;
		padding-right: 0;

		& .ck-button__label {
			padding: 0 var(--ck-spacing-medium);
			color: var(--ck-color-link-default);
			text-overflow: ellipsis;
			cursor: pointer;

			/* Match the box model of the link editor form's input so the balloon
			does not change width when moving between actions and the form. */
			max-width: var(--ck-input-width);
			min-width: 3em;
			text-align: center;

			&:hover {
				text-decoration: underline;
			}
		}

		&,
		&:hover,
		&:focus,
		&:active {
			background: none;
		}

		&:active {
			box-shadow: none;
		}

		&:focus {
			& .ck-button__label {
				text-decoration: underline;
			}
		}
	}

	@mixin ck-dir ltr {
		& .ck-button:not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-button:not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		& .ck-button.ck-link-actions__preview {
			margin: var(--ck-spacing-standard) var(--ck-spacing-standard) 0;

			& .ck-button__label {
				min-width: 0;
				max-width: 100%;
			}
		}

		& .ck-button:not(.ck-link-actions__preview) {
			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;
			}
		}
	}
}
`],sourceRoot:""}]);const S=v},3817:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-link-form{display:flex}.ck.ck-link-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-link-form{flex-wrap:wrap}.ck.ck-link-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-link-form .ck-button{flex-basis:50%}}.ck.ck-link-form_layout-vertical{display:block}.ck.ck-link-form_layout-vertical .ck-button.ck-button-cancel,.ck.ck-link-form_layout-vertical .ck-button.ck-button-save{margin-top:var(--ck-spacing-medium)}.ck.ck-link-form_layout-vertical{min-width:var(--ck-input-width);padding:0}.ck.ck-link-form_layout-vertical .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small)}.ck.ck-link-form_layout-vertical .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-link-form_layout-vertical>.ck-button{border-radius:0;margin:0;padding:var(--ck-spacing-standard);width:50%}.ck.ck-link-form_layout-vertical>.ck-button:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-link-form_layout-vertical>.ck-button,[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button{margin-left:0}[dir=rtl] .ck.ck-link-form_layout-vertical>.ck-button:last-of-type{border-right:1px solid var(--ck-color-base-border)}.ck.ck-link-form_layout-vertical .ck.ck-list{margin:var(--ck-spacing-standard) var(--ck-spacing-large)}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton{padding:0;width:100%}.ck.ck-link-form_layout-vertical .ck.ck-list .ck-button.ck-switchbutton:hover{background:none}","",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkform.css"],names:[],mappings:"AAOA,iBACC,YAiBD,CAfC,2BACC,YACD,CCNA,oCDCD,iBAQE,cAUF,CARE,wCACC,eACD,CAEA,4BACC,cACD,CCfD,CDuBD,iCACC,aAYD,CALE,wHAEC,mCACD,CE/BF,iCAEC,+BAAgC,CADhC,SAgDD,CA7CC,wDACC,8EAMD,CAJC,uEACC,WAAY,CACZ,UACD,CAGD,4CAIC,eAAgB,CAFhB,QAAS,CADT,kCAAmC,CAEnC,SAkBD,CAfC,wDACC,gDACD,CARD,4GAeE,aAMF,CAJE,mEACC,kDACD,CAKF,6CACC,yDAUD,CARC,wEACC,SAAU,CACV,UAKD,CAHC,8EACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-link-form {
	display: flex;

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	display: block;

	/*
	 * Whether the form is in the responsive mode or not, if there are decorator buttons
	 * keep the top margin of action buttons medium.
	 */
	& .ck-button {
		&.ck-button-save,
		&.ck-button-cancel {
			margin-top: var(--ck-spacing-medium);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/*
 * Style link form differently when manual decorators are available.
 * See: https://github.com/ckeditor/ckeditor5-link/issues/186.
 */
.ck.ck-link-form_layout-vertical {
	padding: 0;
	min-width: var(--ck-input-width);

	& .ck-labeled-field-view {
		margin: var(--ck-spacing-large) var(--ck-spacing-large) var(--ck-spacing-small);

		& .ck-input-text {
			min-width: 0;
			width: 100%;
		}
	}

	& > .ck-button {
		padding: var(--ck-spacing-standard);
		margin: 0;
		width: 50%;
		border-radius: 0;

		&:not(:focus) {
			border-top: 1px solid var(--ck-color-base-border);
		}

		@mixin ck-dir ltr {
			margin-left: 0;
		}

		@mixin ck-dir rtl {
			margin-left: 0;

			&:last-of-type {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}
	}

	/* Using additional \`.ck\` class for stronger CSS specificity than \`.ck.ck-link-form > :not(:first-child)\`. */
	& .ck.ck-list {
		margin: var(--ck-spacing-standard) var(--ck-spacing-large);

		& .ck-button.ck-switchbutton {
			padding: 0;
			width: 100%;

			&:hover {
				background: none;
			}
		}
	}
}
`],sourceRoot:""}]);const S=v},4808:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,'.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{display:block;position:absolute}:root{--ck-link-image-indicator-icon-size:20;--ck-link-image-indicator-icon-is-visible:clamp(0px,100% - 50px,1px)}.ck.ck-editor__editable a span.image-inline:after,.ck.ck-editor__editable figure.image>a:after{background-color:rgba(0,0,0,.4);background-image:url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");background-position:50%;background-repeat:no-repeat;background-size:14px;border-radius:100%;content:"";height:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size));overflow:hidden;right:min(var(--ck-spacing-medium),6%);top:min(var(--ck-spacing-medium),6%);width:calc(var(--ck-link-image-indicator-icon-is-visible)*var(--ck-link-image-indicator-icon-size))}',"",{version:3,sources:["webpack://./../ckeditor5-link/theme/linkimage.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-link/linkimage.css"],names:[],mappings:"AASE,+FACC,aAAc,CACd,iBACD,CCPF,MAEC,sCAAuC,CACvC,oEACD,CAME,+FAUC,+BAAqC,CACrC,83BAA+3B,CAG/3B,uBAA2B,CAD3B,2BAA4B,CAD5B,oBAAqB,CAGrB,kBAAmB,CAdnB,UAAW,CAsBX,oGAAuG,CAFvG,eAAgB,CAbhB,sCAAwC,CADxC,oCAAsC,CAetC,mGAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			display: block;
			position: absolute;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Match the icon size with the upload indicator brought by the image upload feature. */
	--ck-link-image-indicator-icon-size: 20;
	--ck-link-image-indicator-icon-is-visible: clamp(0px, 100% - 50px, 1px);
}

.ck.ck-editor__editable {
	/* Linked image indicator */
	& figure.image > a,
	& a span.image-inline {
		&::after {
			content: "";

			/*
			 * Smaller images should have the icon closer to the border.
			 * Match the icon position with the upload indicator brought by the image upload feature.
			 */
			top: min(var(--ck-spacing-medium), 6%);
			right: min(var(--ck-spacing-medium), 6%);

			background-color: hsla(0, 0%, 0%, .4);
			background-image: url("data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZmlsbD0iI2ZmZiIgZD0ibTExLjA3NyAxNSAuOTkxLTEuNDE2YS43NS43NSAwIDEgMSAxLjIyOS44NmwtMS4xNDggMS42NGEuNzQ4Ljc0OCAwIDAgMS0uMjE3LjIwNiA1LjI1MSA1LjI1MSAwIDAgMS04LjUwMy01Ljk1NS43NDEuNzQxIDAgMCAxIC4xMi0uMjc0bDEuMTQ3LTEuNjM5YS43NS43NSAwIDEgMSAxLjIyOC44Nkw0LjkzMyAxMC43bC4wMDYuMDAzYTMuNzUgMy43NSAwIDAgMCA2LjEzMiA0LjI5NGwuMDA2LjAwNHptNS40OTQtNS4zMzVhLjc0OC43NDggMCAwIDEtLjEyLjI3NGwtMS4xNDcgMS42MzlhLjc1Ljc1IDAgMSAxLTEuMjI4LS44NmwuODYtMS4yM2EzLjc1IDMuNzUgMCAwIDAtNi4xNDQtNC4zMDFsLS44NiAxLjIyOWEuNzUuNzUgMCAwIDEtMS4yMjktLjg2bDEuMTQ4LTEuNjRhLjc0OC43NDggMCAwIDEgLjIxNy0uMjA2IDUuMjUxIDUuMjUxIDAgMCAxIDguNTAzIDUuOTU1em0tNC41NjMtMi41MzJhLjc1Ljc1IDAgMCAxIC4xODQgMS4wNDVsLTMuMTU1IDQuNTA1YS43NS43NSAwIDEgMS0xLjIyOS0uODZsMy4xNTUtNC41MDZhLjc1Ljc1IDAgMCAxIDEuMDQ1LS4xODR6Ii8+PC9zdmc+");
			background-size: 14px;
			background-repeat: no-repeat;
			background-position: center;
			border-radius: 100%;

			/*
			* Use CSS math to simulate container queries.
			* https://css-tricks.com/the-raven-technique-one-step-closer-to-container-queries/#what-about-showing-and-hiding-things
			*/
			overflow: hidden;
			width: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
			height: calc(var(--ck-link-image-indicator-icon-is-visible) * var(--ck-link-image-indicator-icon-size));
		}
	}
}

`],sourceRoot:""}]);const S=v},1232:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck-editor__editable .ck-list-bogus-paragraph{display:block}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/documentlist.css"],names:[],mappings:"AAKA,8CACC,aACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-editor__editable .ck-list-bogus-paragraph {
	display: block;
}
`],sourceRoot:""}]);const S=v},6903:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck-content ol{list-style-type:decimal}.ck-content ol ol{list-style-type:lower-latin}.ck-content ol ol ol{list-style-type:lower-roman}.ck-content ol ol ol ol{list-style-type:upper-latin}.ck-content ol ol ol ol ol{list-style-type:upper-roman}.ck-content ul{list-style-type:disc}.ck-content ul ul{list-style-type:circle}.ck-content ul ul ul,.ck-content ul ul ul ul{list-style-type:square}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/list.css"],names:[],mappings:"AAKA,eACC,uBAiBD,CAfC,kBACC,2BAaD,CAXC,qBACC,2BASD,CAPC,wBACC,2BAKD,CAHC,2BACC,2BACD,CAMJ,eACC,oBAaD,CAXC,kBACC,sBASD,CAJE,6CACC,sBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content ol {
	list-style-type: decimal;

	& ol {
		list-style-type: lower-latin;

		& ol {
			list-style-type: lower-roman;

			& ol {
				list-style-type: upper-latin;

				& ol {
					list-style-type: upper-roman;
				}
			}
		}
	}
}

.ck-content ul {
	list-style-type: disc;

	& ul {
		list-style-type: circle;

		& ul {
			list-style-type: square;

			& ul {
				list-style-type: square;
			}
		}
	}
}
`],sourceRoot:""}]);const S=v},9968:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-list-properties.ck-list-properties_without-styles{padding:var(--ck-spacing-large)}.ck.ck-list-properties.ck-list-properties_without-styles>*{min-width:14em}.ck.ck-list-properties.ck-list-properties_without-styles>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-list-styles-list{grid-template-columns:repeat(4,auto)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible{border-top:1px solid var(--ck-color-base-border)}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*{width:100%}.ck.ck-list-properties.ck-list-properties_with-numbered-properties>.ck-collapsible>.ck-collapsible__children>*+*{margin-top:var(--ck-spacing-standard)}.ck.ck-list-properties .ck.ck-numbered-list-properties__start-index .ck-input{min-width:auto;width:100%}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order{background:transparent;margin-bottom:calc(var(--ck-spacing-tiny)*-1);padding-left:0;padding-right:0}.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:active,.ck.ck-list-properties .ck.ck-numbered-list-properties__reversed-order:hover{background:none;border-color:transparent;box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/listproperties.css"],names:[],mappings:"AAOC,yDACC,+BASD,CAPC,2DACC,cAKD,CAHC,6DACC,qCACD,CASD,wFACC,oCACD,CAGA,mFACC,gDAWD,CARE,+GACC,UAKD,CAHC,iHACC,qCACD,CAMJ,8EACC,cAAe,CACf,UACD,CAEA,uEACC,sBAAuB,CAGvB,6CAAgD,CAFhD,cAAe,CACf,eAQD,CALC,2JAGC,eAAgB,CADhB,wBAAyB,CADzB,eAGD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-properties {
	/* When there are no list styles and there is no collapsible. */
	&.ck-list-properties_without-styles {
		padding: var(--ck-spacing-large);

		& > * {
			min-width: 14em;

			& + * {
				margin-top: var(--ck-spacing-standard);
			}
		}
	}

	/*
	 * When the numbered list property fields (start at, reversed) should be displayed,
	 * more horizontal space is needed. Reconfigure the style grid to create that space.
	 */
	&.ck-list-properties_with-numbered-properties {
		& > .ck-list-styles-list {
			grid-template-columns: repeat( 4, auto );
		}

		/* When list styles are rendered and property fields are in a collapsible. */
		& > .ck-collapsible {
			border-top: 1px solid var(--ck-color-base-border);

			& > .ck-collapsible__children {
				& > * {
					width: 100%;

					& + * {
						margin-top: var(--ck-spacing-standard);
					}
				}
			}
		}
	}

	& .ck.ck-numbered-list-properties__start-index .ck-input {
		min-width: auto;
		width: 100%;
	}

	& .ck.ck-numbered-list-properties__reversed-order {
		background: transparent;
		padding-left: 0;
		padding-right: 0;
		margin-bottom: calc(-1 * var(--ck-spacing-tiny));

		&:active, &:hover {
			box-shadow: none;
			border-color: transparent;
			background: none;
		}
	}
}
`],sourceRoot:""}]);const S=v},7141:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-list-styles-list{display:grid}:root{--ck-list-style-button-size:44px}.ck.ck-list-styles-list{column-gap:var(--ck-spacing-medium);grid-template-columns:repeat(3,auto);padding:var(--ck-spacing-large);row-gap:var(--ck-spacing-medium)}.ck.ck-list-styles-list .ck-button{box-sizing:content-box;margin:0;padding:0}.ck.ck-list-styles-list .ck-button,.ck.ck-list-styles-list .ck-button .ck-icon{height:var(--ck-list-style-button-size);width:var(--ck-list-style-button-size)}","",{version:3,sources:["webpack://./../ckeditor5-list/theme/liststyles.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-list/liststyles.css"],names:[],mappings:"AAKA,wBACC,YACD,CCFA,MACC,gCACD,CAEA,wBAGC,mCAAoC,CAFpC,oCAAwC,CAGxC,+BAAgC,CAFhC,gCA4BD,CAxBC,mCAiBC,sBAAuB,CAPvB,QAAS,CANT,SAmBD,CAJC,+EAhBA,uCAAwC,CADxC,sCAoBA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-list-styles-list {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-list-style-button-size: 44px;
}

.ck.ck-list-styles-list {
	grid-template-columns: repeat( 3, auto );
	row-gap: var(--ck-spacing-medium);
	column-gap: var(--ck-spacing-medium);
	padding: var(--ck-spacing-large);

	& .ck-button {
		/* Make the button look like a thumbnail (the icon "takes it all"). */
		width: var(--ck-list-style-button-size);
		height: var(--ck-list-style-button-size);
		padding: 0;

		/*
		 * Buttons are aligned by the grid so disable default button margins to not collide with the
		 * gaps in the grid.
		 */
		margin: 0;

		/*
		 * Make sure the button border (which is displayed on focus, BTW) does not steal pixels
		 * from the button dimensions and, as a result, decrease the size of the icon
		 * (which becomes blurry as it scales down).
		 */
		box-sizing: content-box;

		& .ck-icon {
			width: var(--ck-list-style-button-size);
			height: var(--ck-list-style-button-size);
		}
	}
}
`],sourceRoot:""}]);const S=v},8991:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,':root{--ck-todo-list-checkmark-size:16px}.ck-content .todo-list{list-style:none}.ck-content .todo-list li{margin-bottom:5px;position:relative}.ck-content .todo-list li .todo-list{margin-top:5px}.ck-content .todo-list .todo-list__label>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-content[dir=rtl] .todo-list .todo-list__label>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-content .todo-list .todo-list__label>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-content .todo-list .todo-list__label>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-content .todo-list .todo-list__label>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-content .todo-list .todo-list__label>input[checked]:after{border-color:#fff}.ck-content .todo-list .todo-list__label .todo-list__label__description{vertical-align:middle}.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}.ck-editor__editable.ck-content .todo-list .todo-list__label>input,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{cursor:pointer}.ck-editor__editable.ck-content .todo-list .todo-list__label>input:hover:before,.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:hover:before{box-shadow:0 0 0 5px rgba(0,0,0,.1)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input{-webkit-appearance:none;border:0;display:inline-block;height:var(--ck-todo-list-checkmark-size);left:-25px;margin-left:0;margin-right:-15px;position:relative;right:0;vertical-align:middle;width:var(--ck-todo-list-checkmark-size)}.ck-editor__editable.ck-content[dir=rtl] .todo-list .todo-list__label>span[contenteditable=false]>input{left:0;margin-left:-15px;margin-right:0;right:-25px}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:before{border:1px solid #333;border-radius:2px;box-sizing:border-box;content:"";display:block;height:100%;position:absolute;transition:box-shadow .25s ease-in-out;width:100%}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input:after{border-color:transparent;border-style:solid;border-width:0 calc(var(--ck-todo-list-checkmark-size)/8) calc(var(--ck-todo-list-checkmark-size)/8) 0;box-sizing:content-box;content:"";display:block;height:calc(var(--ck-todo-list-checkmark-size)/2.6);left:calc(var(--ck-todo-list-checkmark-size)/3);pointer-events:none;position:absolute;top:calc(var(--ck-todo-list-checkmark-size)/5.3);transform:rotate(45deg);width:calc(var(--ck-todo-list-checkmark-size)/5.3)}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:before{background:#26ab33;border-color:#26ab33}.ck-editor__editable.ck-content .todo-list .todo-list__label>span[contenteditable=false]>input[checked]:after{border-color:#fff}.ck-editor__editable.ck-content .todo-list .todo-list__label.todo-list__label_without-description input[type=checkbox]{position:absolute}',"",{version:3,sources:["webpack://./../ckeditor5-list/theme/todolist.css"],names:[],mappings:"AAKA,MACC,kCACD,CAwEA,uBACC,eAwBD,CAtBC,0BAEC,iBAAkB,CADlB,iBAMD,CAHC,qCACC,cACD,CAIA,+CAlFD,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAiFC,CAFA,wDAhEA,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAgEA,CA5DD,sDAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qDAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+DACC,kBAA8B,CAC9B,oBACD,CAEA,8DACC,iBACD,CAwBA,wEACC,qBACD,CAEA,mGACC,iBACD,CAYD,kKAEC,cAKD,CAHC,4LACC,mCACD,CAMD,+FApHA,uBAAwB,CAQxB,QAAS,CAPT,oBAAqB,CAGrB,yCAA0C,CAO1C,UAAW,CAGX,aAAc,CAFd,kBAAmB,CAVnB,iBAAkB,CAWlB,OAAQ,CARR,qBAAsB,CAFtB,wCAmHA,CAFA,wGAlGC,MAAO,CAGP,iBAAkB,CAFlB,cAAe,CACf,WAkGD,CA9FA,sGAOC,qBAAiC,CACjC,iBAAkB,CALlB,qBAAsB,CACtB,UAAW,CAHX,aAAc,CAKd,WAAY,CAJZ,iBAAkB,CAOlB,sCAAwC,CAJxC,UAKD,CAEA,qGAaC,wBAAyB,CADzB,kBAAmB,CAEnB,sGAA+G,CAX/G,sBAAuB,CAEvB,UAAW,CAJX,aAAc,CAUd,mDAAwD,CAHxD,+CAAoD,CAJpD,mBAAoB,CAFpB,iBAAkB,CAOlB,gDAAqD,CAMrD,uBAAwB,CALxB,kDAMD,CAGC,+GACC,kBAA8B,CAC9B,oBACD,CAEA,8GACC,iBACD,CA2DA,uHACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-todo-list-checkmark-size: 16px;
}

@define-mixin todo-list-checkbox {
	-webkit-appearance: none;
	display: inline-block;
	position: relative;
	width: var(--ck-todo-list-checkmark-size);
	height: var(--ck-todo-list-checkmark-size);
	vertical-align: middle;

	/* Needed on iOS */
	border: 0;

	/* LTR styles */
	left: -25px;
	margin-right: -15px;
	right: 0;
	margin-left: 0;

	/* RTL styles */
	@nest [dir=rtl]& {
		left: 0;
		margin-right: 0;
		right: -25px;
		margin-left: -15px;
	}

	&::before {
		display: block;
		position: absolute;
		box-sizing: border-box;
		content: '';
		width: 100%;
		height: 100%;
		border: 1px solid hsl(0, 0%, 20%);
		border-radius: 2px;
		transition: 250ms ease-in-out box-shadow;
	}

	&::after {
		display: block;
		position: absolute;
		box-sizing: content-box;
		pointer-events: none;
		content: '';

		/* Calculate tick position, size and border-width proportional to the checkmark size. */
		left: calc( var(--ck-todo-list-checkmark-size) / 3 );
		top: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		width: calc( var(--ck-todo-list-checkmark-size) / 5.3 );
		height: calc( var(--ck-todo-list-checkmark-size) / 2.6 );
		border-style: solid;
		border-color: transparent;
		border-width: 0 calc( var(--ck-todo-list-checkmark-size) / 8 ) calc( var(--ck-todo-list-checkmark-size) / 8 ) 0;
		transform: rotate(45deg);
	}

	&[checked] {
		&::before {
			background: hsl(126, 64%, 41%);
			border-color: hsl(126, 64%, 41%);
		}

		&::after {
			border-color: hsl(0, 0%, 100%);
		}
	}
}

/*
 * To-do list content styles.
 */
.ck-content .todo-list {
	list-style: none;

	& li {
		position: relative;
		margin-bottom: 5px;

		& .todo-list {
			margin-top: 5px;
		}
	}

	& .todo-list__label {
		& > input {
			@mixin todo-list-checkbox;
		}

		& .todo-list__label__description {
			vertical-align: middle;
		}

		&.todo-list__label_without-description input[type=checkbox] {
			position: absolute;
		}
	}
}

/*
 * To-do list editing view styles.
 */
.ck-editor__editable.ck-content .todo-list .todo-list__label {
	/*
	 * To-do list should be interactive only during the editing
	 * (https://github.com/ckeditor/ckeditor5/issues/2090).
	 */
	& > input,
	& > span[contenteditable=false] > input {
		cursor: pointer;

		&:hover::before {
			box-shadow: 0 0 0 5px hsla(0, 0%, 0%, 0.1);
		}
	}

	/*
	 * Document Lists - editing view has an additional span around checkbox.
	 */
	& > span[contenteditable=false] > input {
		@mixin todo-list-checkbox;
	}

	&.todo-list__label_without-description {
		& input[type=checkbox] {
			position: absolute;
		}
	}
}
`],sourceRoot:""}]);const S=v},70:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck-content .media{clear:both;display:block;margin:.9em 0;min-width:15em}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembed.css"],names:[],mappings:"AAKA,mBAGC,UAAW,CASX,aAAc,CAJd,aAAe,CAQf,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .media {
	/* Don't allow floated content overlap the media.
	https://github.com/ckeditor/ckeditor5-media-embed/issues/53 */
	clear: both;

	/* Make sure there is some space between the content and the media. */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em 0;

	/* Make sure media is not overriden with Bootstrap default \`flex\` value.
	See: https://github.com/ckeditor/ckeditor5/issues/1373. */
	display: block;

	/* Give the media some minimal width in the content to prevent them
	from being "squashed" in tight spaces, e.g. in table cells (#44) */
	min-width: 15em;
}
`],sourceRoot:""}]);const S=v},7048:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,'.ck-media__wrapper .ck-media__placeholder{align-items:center;display:flex;flex-direction:column}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url{max-width:100%;position:relative}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url .ck-media__placeholder__url__text{display:block;overflow:hidden}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon *,.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck-media__placeholder__icon *{display:none}.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper>:not(.ck-media__placeholder),.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder{pointer-events:none}:root{--ck-media-embed-placeholder-icon-size:3em;--ck-color-media-embed-placeholder-url-text:#757575;--ck-color-media-embed-placeholder-url-text-hover:var(--ck-color-base-text)}.ck-media__wrapper{margin:0 auto}.ck-media__wrapper .ck-media__placeholder{background:var(--ck-color-base-foreground);padding:calc(var(--ck-spacing-standard)*3)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon{background-position:50%;background-size:cover;height:var(--ck-media-embed-placeholder-icon-size);margin-bottom:var(--ck-spacing-large);min-width:var(--ck-media-embed-placeholder-icon-size)}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__icon .ck-icon{height:100%;width:100%}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text{color:var(--ck-color-media-embed-placeholder-url-text);font-style:italic;text-align:center;text-overflow:ellipsis;white-space:nowrap}.ck-media__wrapper .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:var(--ck-color-media-embed-placeholder-url-text-hover);cursor:pointer;text-decoration:underline}.ck-media__wrapper[data-oembed-url*="open.spotify.com"]{max-height:380px;max-width:300px}.ck-media__wrapper[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon,.ck-media__wrapper[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Im0yMDYuNDc3IDI2MC45LTI4Ljk4NyAyOC45ODdhNS4yMTggNS4yMTggMCAwIDAgMy43OCAxLjYxaDQ5LjYyMWMxLjY5NCAwIDMuMTktLjc5OCA0LjE0Ni0yLjAzN3oiIGZpbGw9IiM1Yzg4YzUiLz48cGF0aCBkPSJNMjI2Ljc0MiAyMjIuOTg4Yy05LjI2NiAwLTE2Ljc3NyA3LjE3LTE2Ljc3NyAxNi4wMTQuMDA3IDIuNzYyLjY2MyA1LjQ3NCAyLjA5MyA3Ljg3NS40My43MDMuODMgMS40MDggMS4xOSAyLjEwNy4zMzMuNTAyLjY1IDEuMDA1Ljk1IDEuNTA4LjM0My40NzcuNjczLjk1Ny45ODggMS40NCAxLjMxIDEuNzY5IDIuNSAzLjUwMiAzLjYzNyA1LjE2OC43OTMgMS4yNzUgMS42ODMgMi42NCAyLjQ2NiAzLjk5IDIuMzYzIDQuMDk0IDQuMDA3IDguMDkyIDQuNiAxMy45MTR2LjAxMmMuMTgyLjQxMi41MTYuNjY2Ljg3OS42NjcuNDAzLS4wMDEuNzY4LS4zMTQuOTMtLjc5OS42MDMtNS43NTYgMi4yMzgtOS43MjkgNC41ODUtMTMuNzk0Ljc4Mi0xLjM1IDEuNjczLTIuNzE1IDIuNDY1LTMuOTkgMS4xMzctMS42NjYgMi4zMjgtMy40IDMuNjM4LTUuMTY5LjMxNS0uNDgyLjY0NS0uOTYyLjk4OC0xLjQzOS4zLS41MDMuNjE3LTEuMDA2Ljk1LTEuNTA4LjM1OS0uNy43Ni0xLjQwNCAxLjE5LTIuMTA3IDEuNDI2LTIuNDAyIDItNS4xMTQgMi4wMDQtNy44NzUgMC04Ljg0NC03LjUxMS0xNi4wMTQtMTYuNzc2LTE2LjAxNHoiIGZpbGw9IiNkZDRiM2UiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PGVsbGlwc2Ugcnk9IjUuNTY0IiByeD0iNS44MjgiIGN5PSIyMzkuMDAyIiBjeD0iMjI2Ljc0MiIgZmlsbD0iIzgwMmQyNyIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMTkwLjMwMSAyMzcuMjgzYy00LjY3IDAtOC40NTcgMy44NTMtOC40NTcgOC42MDZzMy43ODYgOC42MDcgOC40NTcgOC42MDdjMy4wNDMgMCA0LjgwNi0uOTU4IDYuMzM3LTIuNTE2IDEuNTMtMS41NTcgMi4wODctMy45MTMgMi4wODctNi4yOSAwLS4zNjItLjAyMy0uNzIyLS4wNjQtMS4wNzloLTguMjU3djMuMDQzaDQuODVjLS4xOTcuNzU5LS41MzEgMS40NS0xLjA1OCAxLjk4Ni0uOTQyLjk1OC0yLjAyOCAxLjU0OC0zLjkwMSAxLjU0OC0yLjg3NiAwLTUuMjA4LTIuMzcyLTUuMjA4LTUuMjk5IDAtMi45MjYgMi4zMzItNS4yOTkgNS4yMDgtNS4yOTkgMS4zOTkgMCAyLjYxOC40MDcgMy41ODQgMS4yOTNsMi4zODEtMi4zOGMwLS4wMDItLjAwMy0uMDA0LS4wMDQtLjAwNS0xLjU4OC0xLjUyNC0zLjYyLTIuMjE1LTUuOTU1LTIuMjE1em00LjQzIDUuNjYuMDAzLjAwNnYtLjAwM3oiIGZpbGw9IiNmZmYiIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0ibTIxNS4xODQgMjUxLjkyOS03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVhNS4yMzMgNS4yMzMgMCAwIDAgLjQ0OS0yLjEyM3YtMzEuMTY1Yy0uNDY5LjY3NS0uOTM0IDEuMzQ5LTEuMzgyIDIuMDA1LS43OTIgMS4yNzUtMS42ODIgMi42NC0yLjQ2NSAzLjk5LTIuMzQ3IDQuMDY1LTMuOTgyIDguMDM4LTQuNTg1IDEzLjc5NC0uMTYyLjQ4NS0uNTI3Ljc5OC0uOTMuNzk5LS4zNjMtLjAwMS0uNjk3LS4yNTUtLjg3OS0uNjY3di0uMDEyYy0uNTkzLTUuODIyLTIuMjM3LTkuODItNC42LTEzLjkxNC0uNzgzLTEuMzUtMS42NzMtMi43MTUtMi40NjYtMy45OS0xLjEzNy0xLjY2Ni0yLjMyNy0zLjQtMy42MzctNS4xNjlsLS4wMDItLjAwM3oiIGZpbGw9IiNjM2MzYzMiLz48cGF0aCBkPSJtMjEyLjk4MyAyNDguNDk1LTM2Ljk1MiAzNi45NTN2LjgxMmE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOCA1LjIzOGgxLjAxNWwzNS42NjYtMzUuNjY2YTEzNi4yNzUgMTM2LjI3NSAwIDAgMC0yLjc2NC0zLjkgMzcuNTc1IDM3LjU3NSAwIDAgMC0uOTg5LTEuNDQgMzUuMTI3IDM1LjEyNyAwIDAgMC0uOTUtMS41MDhjLS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJtMjExLjk5OCAyNjEuMDgzLTYuMTUyIDYuMTUxIDI0LjI2NCAyNC4yNjRoLjc4MWE1LjIyNyA1LjIyNyAwIDAgMCA1LjIzOS01LjIzOHYtMS4wNDV6IiBmaWxsPSIjZmZmIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjwvZz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder{background:#4268b3}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAyNCIgaGVpZ2h0PSIxMDI0IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05NjcuNDg0IDBINTYuNTE3QzI1LjMwNCAwIDAgMjUuMzA0IDAgNTYuNTE3djkxMC45NjZDMCA5OTguNjk0IDI1LjI5NyAxMDI0IDU2LjUyMiAxMDI0SDU0N1Y2MjhINDE0VjQ3M2gxMzNWMzU5LjAyOWMwLTEzMi4yNjIgODAuNzczLTIwNC4yODIgMTk4Ljc1Ni0yMDQuMjgyIDU2LjUxMyAwIDEwNS4wODYgNC4yMDggMTE5LjI0NCA2LjA4OVYyOTlsLTgxLjYxNi4wMzdjLTYzLjk5MyAwLTc2LjM4NCAzMC40OTItNzYuMzg0IDc1LjIzNlY0NzNoMTUzLjQ4N2wtMTkuOTg2IDE1NUg3MDd2Mzk2aDI2MC40ODRjMzEuMjEzIDAgNTYuNTE2LTI1LjMwMyA1Ni41MTYtNTYuNTE2VjU2LjUxNUMxMDI0IDI1LjMwMyA5OTguNjk3IDAgOTY3LjQ4NCAwIiBmaWxsPSIjRkZGRkZFIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#cdf}.ck-media__wrapper[data-oembed-url*="facebook.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder{background:linear-gradient(-135deg,#1400c7,#b800b1,#f50000)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTA0IiBoZWlnaHQ9IjUwNCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PHBhdGggaWQ9ImEiIGQ9Ik0wIC4xNTloNTAzLjg0MVY1MDMuOTRIMHoiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj48bWFzayBpZD0iYiIgZmlsbD0iI2ZmZiI+PHVzZSB4bGluazpocmVmPSIjYSIvPjwvbWFzaz48cGF0aCBkPSJNMjUxLjkyMS4xNTljLTY4LjQxOCAwLTc2Ljk5Ny4yOS0xMDMuODY3IDEuNTE2LTI2LjgxNCAxLjIyMy00NS4xMjcgNS40ODItNjEuMTUxIDExLjcxLTE2LjU2NiA2LjQzNy0zMC42MTUgMTUuMDUxLTQ0LjYyMSAyOS4wNTYtMTQuMDA1IDE0LjAwNi0yMi42MTkgMjguMDU1LTI5LjA1NiA0NC42MjEtNi4yMjggMTYuMDI0LTEwLjQ4NyAzNC4zMzctMTEuNzEgNjEuMTUxQy4yOSAxNzUuMDgzIDAgMTgzLjY2MiAwIDI1Mi4wOGMwIDY4LjQxNy4yOSA3Ni45OTYgMS41MTYgMTAzLjg2NiAxLjIyMyAyNi44MTQgNS40ODIgNDUuMTI3IDExLjcxIDYxLjE1MSA2LjQzNyAxNi41NjYgMTUuMDUxIDMwLjYxNSAyOS4wNTYgNDQuNjIxIDE0LjAwNiAxNC4wMDUgMjguMDU1IDIyLjYxOSA0NC42MjEgMjkuMDU3IDE2LjAyNCA2LjIyNyAzNC4zMzcgMTAuNDg2IDYxLjE1MSAxMS43MDkgMjYuODcgMS4yMjYgMzUuNDQ5IDEuNTE2IDEwMy44NjcgMS41MTYgNjguNDE3IDAgNzYuOTk2LS4yOSAxMDMuODY2LTEuNTE2IDI2LjgxNC0xLjIyMyA0NS4xMjctNS40ODIgNjEuMTUxLTExLjcwOSAxNi41NjYtNi40MzggMzAuNjE1LTE1LjA1MiA0NC42MjEtMjkuMDU3IDE0LjAwNS0xNC4wMDYgMjIuNjE5LTI4LjA1NSAyOS4wNTctNDQuNjIxIDYuMjI3LTE2LjAyNCAxMC40ODYtMzQuMzM3IDExLjcwOS02MS4xNTEgMS4yMjYtMjYuODcgMS41MTYtMzUuNDQ5IDEuNTE2LTEwMy44NjYgMC02OC40MTgtLjI5LTc2Ljk5Ny0xLjUxNi0xMDMuODY3LTEuMjIzLTI2LjgxNC01LjQ4Mi00NS4xMjctMTEuNzA5LTYxLjE1MS02LjQzOC0xNi41NjYtMTUuMDUyLTMwLjYxNS0yOS4wNTctNDQuNjIxLTE0LjAwNi0xNC4wMDUtMjguMDU1LTIyLjYxOS00NC42MjEtMjkuMDU2LTE2LjAyNC02LjIyOC0zNC4zMzctMTAuNDg3LTYxLjE1MS0xMS43MUMzMjguOTE3LjQ0OSAzMjAuMzM4LjE1OSAyNTEuOTIxLjE1OVptMCA0NS4zOTFjNjcuMjY1IDAgNzUuMjMzLjI1NyAxMDEuNzk3IDEuNDY5IDI0LjU2MiAxLjEyIDM3LjkwMSA1LjIyNCA0Ni43NzggOC42NzQgMTEuNzU5IDQuNTcgMjAuMTUxIDEwLjAyOSAyOC45NjYgMTguODQ1IDguODE2IDguODE1IDE0LjI3NSAxNy4yMDcgMTguODQ1IDI4Ljk2NiAzLjQ1IDguODc3IDcuNTU0IDIyLjIxNiA4LjY3NCA0Ni43NzggMS4yMTIgMjYuNTY0IDEuNDY5IDM0LjUzMiAxLjQ2OSAxMDEuNzk4IDAgNjcuMjY1LS4yNTcgNzUuMjMzLTEuNDY5IDEwMS43OTctMS4xMiAyNC41NjItNS4yMjQgMzcuOTAxLTguNjc0IDQ2Ljc3OC00LjU3IDExLjc1OS0xMC4wMjkgMjAuMTUxLTE4Ljg0NSAyOC45NjYtOC44MTUgOC44MTYtMTcuMjA3IDE0LjI3NS0yOC45NjYgMTguODQ1LTguODc3IDMuNDUtMjIuMjE2IDcuNTU0LTQ2Ljc3OCA4LjY3NC0yNi41NiAxLjIxMi0zNC41MjcgMS40NjktMTAxLjc5NyAxLjQ2OS02Ny4yNzEgMC03NS4yMzctLjI1Ny0xMDEuNzk4LTEuNDY5LTI0LjU2Mi0xLjEyLTM3LjkwMS01LjIyNC00Ni43NzgtOC42NzQtMTEuNzU5LTQuNTctMjAuMTUxLTEwLjAyOS0yOC45NjYtMTguODQ1LTguODE1LTguODE1LTE0LjI3NS0xNy4yMDctMTguODQ1LTI4Ljk2Ni0zLjQ1LTguODc3LTcuNTU0LTIyLjIxNi04LjY3NC00Ni43NzgtMS4yMTItMjYuNTY0LTEuNDY5LTM0LjUzMi0xLjQ2OS0xMDEuNzk3IDAtNjcuMjY2LjI1Ny03NS4yMzQgMS40NjktMTAxLjc5OCAxLjEyLTI0LjU2MiA1LjIyNC0zNy45MDEgOC42NzQtNDYuNzc4IDQuNTctMTEuNzU5IDEwLjAyOS0yMC4xNTEgMTguODQ1LTI4Ljk2NiA4LjgxNS04LjgxNiAxNy4yMDctMTQuMjc1IDI4Ljk2Ni0xOC44NDUgOC44NzctMy40NSAyMi4yMTYtNy41NTQgNDYuNzc4LTguNjc0IDI2LjU2NC0xLjIxMiAzNC41MzItMS40NjkgMTAxLjc5OC0xLjQ2OVoiIGZpbGw9IiNGRkYiIG1hc2s9InVybCgjYikiLz48cGF0aCBkPSJNMjUxLjkyMSAzMzYuMDUzYy00Ni4zNzggMC04My45NzQtMzcuNTk2LTgzLjk3NC04My45NzMgMC00Ni4zNzggMzcuNTk2LTgzLjk3NCA4My45NzQtODMuOTc0IDQ2LjM3NyAwIDgzLjk3MyAzNy41OTYgODMuOTczIDgzLjk3NCAwIDQ2LjM3Ny0zNy41OTYgODMuOTczLTgzLjk3MyA4My45NzNabTAtMjEzLjMzOGMtNzEuNDQ3IDAtMTI5LjM2NSA1Ny45MTgtMTI5LjM2NSAxMjkuMzY1IDAgNzEuNDQ2IDU3LjkxOCAxMjkuMzY0IDEyOS4zNjUgMTI5LjM2NCA3MS40NDYgMCAxMjkuMzY0LTU3LjkxOCAxMjkuMzY0LTEyOS4zNjQgMC03MS40NDctNTcuOTE4LTEyOS4zNjUtMTI5LjM2NC0xMjkuMzY1Wk00MTYuNjI3IDExNy42MDRjMCAxNi42OTYtMTMuNTM1IDMwLjIzLTMwLjIzMSAzMC4yMy0xNi42OTUgMC0zMC4yMy0xMy41MzQtMzAuMjMtMzAuMjMgMC0xNi42OTYgMTMuNTM1LTMwLjIzMSAzMC4yMy0zMC4yMzEgMTYuNjk2IDAgMzAuMjMxIDEzLjUzNSAzMC4yMzEgMzAuMjMxIiBmaWxsPSIjRkZGIi8+PC9nPjwvc3ZnPg==)}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text{color:#ffe0fe}.ck-media__wrapper[data-oembed-url*="instagram.com"] .ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder{background:linear-gradient(90deg,#71c6f4,#0d70a5)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__icon{background-image:url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MDAgNDAwIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA0MDAgNDAwIiB4bWw6c3BhY2U9InByZXNlcnZlIj48cGF0aCBkPSJNNDAwIDIwMGMwIDExMC41LTg5LjUgMjAwLTIwMCAyMDBTMCAzMTAuNSAwIDIwMCA4OS41IDAgMjAwIDBzMjAwIDg5LjUgMjAwIDIwMHpNMTYzLjQgMzA1LjVjODguNyAwIDEzNy4yLTczLjUgMTM3LjItMTM3LjIgMC0yLjEgMC00LjItLjEtNi4yIDkuNC02LjggMTcuNi0xNS4zIDI0LjEtMjUtOC42IDMuOC0xNy45IDYuNC0yNy43IDcuNiAxMC02IDE3LjYtMTUuNCAyMS4yLTI2LjctOS4zIDUuNS0xOS42IDkuNS0zMC42IDExLjctOC44LTkuNC0yMS4zLTE1LjItMzUuMi0xNS4yLTI2LjYgMC00OC4yIDIxLjYtNDguMiA0OC4yIDAgMy44LjQgNy41IDEuMyAxMS00MC4xLTItNzUuNi0yMS4yLTk5LjQtNTAuNC00LjEgNy4xLTYuNSAxNS40LTYuNSAyNC4yIDAgMTYuNyA4LjUgMzEuNSAyMS41IDQwLjEtNy45LS4yLTE1LjMtMi40LTIxLjgtNnYuNmMwIDIzLjQgMTYuNiA0Mi44IDM4LjcgNDcuMy00IDEuMS04LjMgMS43LTEyLjcgMS43LTMuMSAwLTYuMS0uMy05LjEtLjkgNi4xIDE5LjIgMjMuOSAzMy4xIDQ1IDMzLjUtMTYuNSAxMi45LTM3LjMgMjAuNi01OS45IDIwLjYtMy45IDAtNy43LS4yLTExLjUtLjcgMjEuMSAxMy44IDQ2LjUgMjEuOCA3My43IDIxLjgiIHN0eWxlPSJmaWxsOiNmZmYiLz48L3N2Zz4=)}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text{color:#b8e6ff}.ck-media__wrapper[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder .ck-media__placeholder__url__text:hover{color:#fff}',"",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaembedediting.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-media-embed/mediaembedediting.css"],names:[],mappings:"AAMC,0CAGC,kBAAmB,CAFnB,YAAa,CACb,qBAcD,CAXC,sEAEC,cAAe,CAEf,iBAMD,CAJC,wGAEC,aAAc,CADd,eAED,CAWD,6kBACC,YACD,CAYF,2LACC,mBACD,CC1CA,MACC,0CAA2C,CAE3C,mDAA4D,CAC5D,2EACD,CAEA,mBACC,aA+FD,CA7FC,0CAEC,0CAA2C,CAD3C,0CA6BD,CA1BC,uEAIC,uBAA2B,CAC3B,qBAAsB,CAHtB,kDAAmD,CACnD,qCAAsC,CAFtC,qDAUD,CAJC,gFAEC,WAAY,CADZ,UAED,CAGD,4EACC,sDAAuD,CAGvD,iBAAkB,CADlB,iBAAkB,CAElB,sBAAuB,CAHvB,kBAUD,CALC,kFACC,4DAA6D,CAC7D,cAAe,CACf,yBACD,CAIF,wDAEC,gBAAiB,CADjB,eAED,CAEA,4UAIC,wvGACD,CAEA,2EACC,kBAaD,CAXC,wGACC,orBACD,CAEA,6GACC,UAKD,CAHC,mHACC,UACD,CAIF,4EACC,2DAcD,CAZC,yGACC,4jHACD,CAGA,8GACC,aAKD,CAHC,oHACC,UACD,CAIF,6EAEC,iDAaD,CAXC,0GACC,wiCACD,CAEA,+GACC,aAKD,CAHC,qHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-media__wrapper {
	& .ck-media__placeholder {
		display: flex;
		flex-direction: column;
		align-items: center;

		& .ck-media__placeholder__url {
			/* Otherwise the URL will overflow when the content is very narrow. */
			max-width: 100%;

			position: relative;

			& .ck-media__placeholder__url__text {
				overflow: hidden;
				display: block;
			}
		}
	}

	&[data-oembed-url*="twitter.com"],
	&[data-oembed-url*="google.com/maps"],
	&[data-oembed-url*="goo.gl/maps"],
	&[data-oembed-url*="maps.google.com"],
	&[data-oembed-url*="maps.app.goo.gl"],
	&[data-oembed-url*="facebook.com"],
	&[data-oembed-url*="instagram.com"] {
		& .ck-media__placeholder__icon * {
			display: none;
		}
	}
}

/* Disable all mouse interaction as long as the editor is not read–only.
   https://github.com/ckeditor/ckeditor5-media-embed/issues/58 */
.ck-editor__editable:not(.ck-read-only) .ck-media__wrapper > *:not(.ck-media__placeholder) {
	pointer-events: none;
}

/* Disable all mouse interaction when the widget is not selected (e.g. to avoid opening links by accident).
   https://github.com/ckeditor/ckeditor5-media-embed/issues/18 */
.ck-editor__editable:not(.ck-read-only) .ck-widget:not(.ck-widget_selected) .ck-media__placeholder {
	pointer-events: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-media-embed-placeholder-icon-size: 3em;

	--ck-color-media-embed-placeholder-url-text: hsl(0, 0%, 46%);
	--ck-color-media-embed-placeholder-url-text-hover: var(--ck-color-base-text);
}

.ck-media__wrapper {
	margin: 0 auto;

	& .ck-media__placeholder {
		padding: calc( 3 * var(--ck-spacing-standard) );
		background: var(--ck-color-base-foreground);

		& .ck-media__placeholder__icon {
			min-width: var(--ck-media-embed-placeholder-icon-size);
			height: var(--ck-media-embed-placeholder-icon-size);
			margin-bottom: var(--ck-spacing-large);
			background-position: center;
			background-size: cover;

			& .ck-icon {
				width: 100%;
				height: 100%;
			}
		}

		& .ck-media__placeholder__url__text {
			color: var(--ck-color-media-embed-placeholder-url-text);
			white-space: nowrap;
			text-align: center;
			font-style: italic;
			text-overflow: ellipsis;

			&:hover {
				color: var(--ck-color-media-embed-placeholder-url-text-hover);
				cursor: pointer;
				text-decoration: underline;
			}
		}
	}

	&[data-oembed-url*="open.spotify.com"] {
		max-width: 300px;
		max-height: 380px;
	}

	&[data-oembed-url*="google.com/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="goo.gl/maps"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.google.com"] .ck-media__placeholder__icon,
	&[data-oembed-url*="maps.app.goo.gl"] .ck-media__placeholder__icon {
		background-image: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNTAuMzc4IiBoZWlnaHQ9IjI1NC4xNjciIHZpZXdCb3g9IjAgMCA2Ni4yNDYgNjcuMjQ4Ij48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTcyLjUzMSAtMjE4LjQ1NSkgc2NhbGUoLjk4MDEyKSI+PHJlY3Qgcnk9IjUuMjM4IiByeD0iNS4yMzgiIHk9IjIzMS4zOTkiIHg9IjE3Ni4wMzEiIGhlaWdodD0iNjAuMDk5IiB3aWR0aD0iNjAuMDk5IiBmaWxsPSIjMzRhNjY4IiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxwYXRoIGQ9Ik0yMDYuNDc3IDI2MC45bC0yOC45ODcgMjguOTg3YTUuMjE4IDUuMjE4IDAgMCAwIDMuNzggMS42MWg0OS42MjFjMS42OTQgMCAzLjE5LS43OTggNC4xNDYtMi4wMzd6IiBmaWxsPSIjNWM4OGM1Ii8+PHBhdGggZD0iTTIyNi43NDIgMjIyLjk4OGMtOS4yNjYgMC0xNi43NzcgNy4xNy0xNi43NzcgMTYuMDE0LjAwNyAyLjc2Mi42NjMgNS40NzQgMi4wOTMgNy44NzUuNDMuNzAzLjgzIDEuNDA4IDEuMTkgMi4xMDcuMzMzLjUwMi42NSAxLjAwNS45NSAxLjUwOC4zNDMuNDc3LjY3My45NTcuOTg4IDEuNDQgMS4zMSAxLjc2OSAyLjUgMy41MDIgMy42MzcgNS4xNjguNzkzIDEuMjc1IDEuNjgzIDIuNjQgMi40NjYgMy45OSAyLjM2MyA0LjA5NCA0LjAwNyA4LjA5MiA0LjYgMTMuOTE0di4wMTJjLjE4Mi40MTIuNTE2LjY2Ni44NzkuNjY3LjQwMy0uMDAxLjc2OC0uMzE0LjkzLS43OTkuNjAzLTUuNzU2IDIuMjM4LTkuNzI5IDQuNTg1LTEzLjc5NC43ODItMS4zNSAxLjY3My0yLjcxNSAyLjQ2NS0zLjk5IDEuMTM3LTEuNjY2IDIuMzI4LTMuNCAzLjYzOC01LjE2OS4zMTUtLjQ4Mi42NDUtLjk2Mi45ODgtMS40MzkuMy0uNTAzLjYxNy0xLjAwNi45NS0xLjUwOC4zNTktLjcuNzYtMS40MDQgMS4xOS0yLjEwNyAxLjQyNi0yLjQwMiAyLTUuMTE0IDIuMDA0LTcuODc1IDAtOC44NDQtNy41MTEtMTYuMDE0LTE2Ljc3Ni0xNi4wMTR6IiBmaWxsPSIjZGQ0YjNlIiBwYWludC1vcmRlcj0ibWFya2VycyBzdHJva2UgZmlsbCIvPjxlbGxpcHNlIHJ5PSI1LjU2NCIgcng9IjUuODI4IiBjeT0iMjM5LjAwMiIgY3g9IjIyNi43NDIiIGZpbGw9IiM4MDJkMjciIHBhaW50LW9yZGVyPSJtYXJrZXJzIHN0cm9rZSBmaWxsIi8+PHBhdGggZD0iTTE5MC4zMDEgMjM3LjI4M2MtNC42NyAwLTguNDU3IDMuODUzLTguNDU3IDguNjA2czMuNzg2IDguNjA3IDguNDU3IDguNjA3YzMuMDQzIDAgNC44MDYtLjk1OCA2LjMzNy0yLjUxNiAxLjUzLTEuNTU3IDIuMDg3LTMuOTEzIDIuMDg3LTYuMjkgMC0uMzYyLS4wMjMtLjcyMi0uMDY0LTEuMDc5aC04LjI1N3YzLjA0M2g0Ljg1Yy0uMTk3Ljc1OS0uNTMxIDEuNDUtMS4wNTggMS45ODYtLjk0Mi45NTgtMi4wMjggMS41NDgtMy45MDEgMS41NDgtMi44NzYgMC01LjIwOC0yLjM3Mi01LjIwOC01LjI5OSAwLTIuOTI2IDIuMzMyLTUuMjk5IDUuMjA4LTUuMjk5IDEuMzk5IDAgMi42MTguNDA3IDMuNTg0IDEuMjkzbDIuMzgxLTIuMzhjMC0uMDAyLS4wMDMtLjAwNC0uMDA0LS4wMDUtMS41ODgtMS41MjQtMy42Mi0yLjIxNS01Ljk1NS0yLjIxNXptNC40MyA1LjY2bC4wMDMuMDA2di0uMDAzeiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjE1LjE4NCAyNTEuOTI5bC03Ljk4IDcuOTc5IDI4LjQ3NyAyOC40NzVjLjI4Ny0uNjQ5LjQ0OS0xLjM2Ni40NDktMi4xMjN2LTMxLjE2NWMtLjQ2OS42NzUtLjkzNCAxLjM0OS0xLjM4MiAyLjAwNS0uNzkyIDEuMjc1LTEuNjgyIDIuNjQtMi40NjUgMy45OS0yLjM0NyA0LjA2NS0zLjk4MiA4LjAzOC00LjU4NSAxMy43OTQtLjE2Mi40ODUtLjUyNy43OTgtLjkzLjc5OS0uMzYzLS4wMDEtLjY5Ny0uMjU1LS44NzktLjY2N3YtLjAxMmMtLjU5My01LjgyMi0yLjIzNy05LjgyLTQuNi0xMy45MTQtLjc4My0xLjM1LTEuNjczLTIuNzE1LTIuNDY2LTMuOTktMS4xMzctMS42NjYtMi4zMjctMy40LTMuNjM3LTUuMTY5bC0uMDAyLS4wMDN6IiBmaWxsPSIjYzNjM2MzIi8+PHBhdGggZD0iTTIxMi45ODMgMjQ4LjQ5NWwtMzYuOTUyIDM2Ljk1M3YuODEyYTUuMjI3IDUuMjI3IDAgMCAwIDUuMjM4IDUuMjM4aDEuMDE1bDM1LjY2Ni0zNS42NjZhMTM2LjI3NSAxMzYuMjc1IDAgMCAwLTIuNzY0LTMuOSAzNy41NzUgMzcuNTc1IDAgMCAwLS45ODktMS40NGMtLjI5OS0uNTAzLS42MTYtMS4wMDYtLjk1LTEuNTA4LS4wODMtLjE2Mi0uMTc2LS4zMjYtLjI2NC0uNDg5eiIgZmlsbD0iI2ZkZGM0ZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48cGF0aCBkPSJNMjExLjk5OCAyNjEuMDgzbC02LjE1MiA2LjE1MSAyNC4yNjQgMjQuMjY0aC43ODFhNS4yMjcgNS4yMjcgMCAwIDAgNS4yMzktNS4yMzh2LTEuMDQ1eiIgZmlsbD0iI2ZmZiIgcGFpbnQtb3JkZXI9Im1hcmtlcnMgc3Ryb2tlIGZpbGwiLz48L2c+PC9zdmc+);
	}

	&[data-oembed-url*="facebook.com"] .ck-media__placeholder {
		background: hsl(220, 46%, 48%);

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIxMDI0cHgiIGhlaWdodD0iMTAyNHB4IiB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPiAgICAgICAgPHRpdGxlPkZpbGwgMTwvdGl0bGU+ICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPiAgICA8ZGVmcz48L2RlZnM+ICAgIDxnIGlkPSJQYWdlLTEiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPiAgICAgICAgPGcgaWQ9ImZMb2dvX1doaXRlIiBmaWxsPSIjRkZGRkZFIj4gICAgICAgICAgICA8cGF0aCBkPSJNOTY3LjQ4NCwwIEw1Ni41MTcsMCBDMjUuMzA0LDAgMCwyNS4zMDQgMCw1Ni41MTcgTDAsOTY3LjQ4MyBDMCw5OTguNjk0IDI1LjI5NywxMDI0IDU2LjUyMiwxMDI0IEw1NDcsMTAyNCBMNTQ3LDYyOCBMNDE0LDYyOCBMNDE0LDQ3MyBMNTQ3LDQ3MyBMNTQ3LDM1OS4wMjkgQzU0NywyMjYuNzY3IDYyNy43NzMsMTU0Ljc0NyA3NDUuNzU2LDE1NC43NDcgQzgwMi4yNjksMTU0Ljc0NyA4NTAuODQyLDE1OC45NTUgODY1LDE2MC44MzYgTDg2NSwyOTkgTDc4My4zODQsMjk5LjAzNyBDNzE5LjM5MSwyOTkuMDM3IDcwNywzMjkuNTI5IDcwNywzNzQuMjczIEw3MDcsNDczIEw4NjAuNDg3LDQ3MyBMODQwLjUwMSw2MjggTDcwNyw2MjggTDcwNywxMDI0IEw5NjcuNDg0LDEwMjQgQzk5OC42OTcsMTAyNCAxMDI0LDk5OC42OTcgMTAyNCw5NjcuNDg0IEwxMDI0LDU2LjUxNSBDMTAyNCwyNS4zMDMgOTk4LjY5NywwIDk2Ny40ODQsMCIgaWQ9IkZpbGwtMSI+PC9wYXRoPiAgICAgICAgPC9nPiAgICA8L2c+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(220, 100%, 90%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="instagram.com"] .ck-media__placeholder {
		background: linear-gradient(-135deg,hsl(246, 100%, 39%),hsl(302, 100%, 36%),hsl(0, 100%, 48%));

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSI1MDRweCIgaGVpZ2h0PSI1MDRweCIgdmlld0JveD0iMCAwIDUwNCA1MDQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+ICAgICAgICA8dGl0bGU+Z2x5cGgtbG9nb19NYXkyMDE2PC90aXRsZT4gICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+ICAgIDxkZWZzPiAgICAgICAgPHBvbHlnb24gaWQ9InBhdGgtMSIgcG9pbnRzPSIwIDAuMTU5IDUwMy44NDEgMC4xNTkgNTAzLjg0MSA1MDMuOTQgMCA1MDMuOTQiPjwvcG9seWdvbj4gICAgPC9kZWZzPiAgICA8ZyBpZD0iZ2x5cGgtbG9nb19NYXkyMDE2IiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIj4gICAgICAgIDxnIGlkPSJHcm91cC0zIj4gICAgICAgICAgICA8bWFzayBpZD0ibWFzay0yIiBmaWxsPSJ3aGl0ZSI+ICAgICAgICAgICAgICAgIDx1c2UgeGxpbms6aHJlZj0iI3BhdGgtMSI+PC91c2U+ICAgICAgICAgICAgPC9tYXNrPiAgICAgICAgICAgIDxnIGlkPSJDbGlwLTIiPjwvZz4gICAgICAgICAgICA8cGF0aCBkPSJNMjUxLjkyMSwwLjE1OSBDMTgzLjUwMywwLjE1OSAxNzQuOTI0LDAuNDQ5IDE0OC4wNTQsMS42NzUgQzEyMS4yNCwyLjg5OCAxMDIuOTI3LDcuMTU3IDg2LjkwMywxMy4zODUgQzcwLjMzNywxOS44MjIgNTYuMjg4LDI4LjQzNiA0Mi4yODIsNDIuNDQxIEMyOC4yNzcsNTYuNDQ3IDE5LjY2Myw3MC40OTYgMTMuMjI2LDg3LjA2MiBDNi45OTgsMTAzLjA4NiAyLjczOSwxMjEuMzk5IDEuNTE2LDE0OC4yMTMgQzAuMjksMTc1LjA4MyAwLDE4My42NjIgMCwyNTIuMDggQzAsMzIwLjQ5NyAwLjI5LDMyOS4wNzYgMS41MTYsMzU1Ljk0NiBDMi43MzksMzgyLjc2IDYuOTk4LDQwMS4wNzMgMTMuMjI2LDQxNy4wOTcgQzE5LjY2Myw0MzMuNjYzIDI4LjI3Nyw0NDcuNzEyIDQyLjI4Miw0NjEuNzE4IEM1Ni4yODgsNDc1LjcyMyA3MC4zMzcsNDg0LjMzNyA4Ni45MDMsNDkwLjc3NSBDMTAyLjkyNyw0OTcuMDAyIDEyMS4yNCw1MDEuMjYxIDE0OC4wNTQsNTAyLjQ4NCBDMTc0LjkyNCw1MDMuNzEgMTgzLjUwMyw1MDQgMjUxLjkyMSw1MDQgQzMyMC4zMzgsNTA0IDMyOC45MTcsNTAzLjcxIDM1NS43ODcsNTAyLjQ4NCBDMzgyLjYwMSw1MDEuMjYxIDQwMC45MTQsNDk3LjAwMiA0MTYuOTM4LDQ5MC43NzUgQzQzMy41MDQsNDg0LjMzNyA0NDcuNTUzLDQ3NS43MjMgNDYxLjU1OSw0NjEuNzE4IEM0NzUuNTY0LDQ0Ny43MTIgNDg0LjE3OCw0MzMuNjYzIDQ5MC42MTYsNDE3LjA5NyBDNDk2Ljg0Myw0MDEuMDczIDUwMS4xMDIsMzgyLjc2IDUwMi4zMjUsMzU1Ljk0NiBDNTAzLjU1MSwzMjkuMDc2IDUwMy44NDEsMzIwLjQ5NyA1MDMuODQxLDI1Mi4wOCBDNTAzLjg0MSwxODMuNjYyIDUwMy41NTEsMTc1LjA4MyA1MDIuMzI1LDE0OC4yMTMgQzUwMS4xMDIsMTIxLjM5OSA0OTYuODQzLDEwMy4wODYgNDkwLjYxNiw4Ny4wNjIgQzQ4NC4xNzgsNzAuNDk2IDQ3NS41NjQsNTYuNDQ3IDQ2MS41NTksNDIuNDQxIEM0NDcuNTUzLDI4LjQzNiA0MzMuNTA0LDE5LjgyMiA0MTYuOTM4LDEzLjM4NSBDNDAwLjkxNCw3LjE1NyAzODIuNjAxLDIuODk4IDM1NS43ODcsMS42NzUgQzMyOC45MTcsMC40NDkgMzIwLjMzOCwwLjE1OSAyNTEuOTIxLDAuMTU5IFogTTI1MS45MjEsNDUuNTUgQzMxOS4xODYsNDUuNTUgMzI3LjE1NCw0NS44MDcgMzUzLjcxOCw0Ny4wMTkgQzM3OC4yOCw0OC4xMzkgMzkxLjYxOSw1Mi4yNDMgNDAwLjQ5Niw1NS42OTMgQzQxMi4yNTUsNjAuMjYzIDQyMC42NDcsNjUuNzIyIDQyOS40NjIsNzQuNTM4IEM0MzguMjc4LDgzLjM1MyA0NDMuNzM3LDkxLjc0NSA0NDguMzA3LDEwMy41MDQgQzQ1MS43NTcsMTEyLjM4MSA0NTUuODYxLDEyNS43MiA0NTYuOTgxLDE1MC4yODIgQzQ1OC4xOTMsMTc2Ljg0NiA0NTguNDUsMTg0LjgxNCA0NTguNDUsMjUyLjA4IEM0NTguNDUsMzE5LjM0NSA0NTguMTkzLDMyNy4zMTMgNDU2Ljk4MSwzNTMuODc3IEM0NTUuODYxLDM3OC40MzkgNDUxLjc1NywzOTEuNzc4IDQ0OC4zMDcsNDAwLjY1NSBDNDQzLjczNyw0MTIuNDE0IDQzOC4yNzgsNDIwLjgwNiA0MjkuNDYyLDQyOS42MjEgQzQyMC42NDcsNDM4LjQzNyA0MTIuMjU1LDQ0My44OTYgNDAwLjQ5Niw0NDguNDY2IEMzOTEuNjE5LDQ1MS45MTYgMzc4LjI4LDQ1Ni4wMiAzNTMuNzE4LDQ1Ny4xNCBDMzI3LjE1OCw0NTguMzUyIDMxOS4xOTEsNDU4LjYwOSAyNTEuOTIxLDQ1OC42MDkgQzE4NC42NSw0NTguNjA5IDE3Ni42ODQsNDU4LjM1MiAxNTAuMTIzLDQ1Ny4xNCBDMTI1LjU2MSw0NTYuMDIgMTEyLjIyMiw0NTEuOTE2IDEwMy4zNDUsNDQ4LjQ2NiBDOTEuNTg2LDQ0My44OTYgODMuMTk0LDQzOC40MzcgNzQuMzc5LDQyOS42MjEgQzY1LjU2NCw0MjAuODA2IDYwLjEwNCw0MTIuNDE0IDU1LjUzNCw0MDAuNjU1IEM1Mi4wODQsMzkxLjc3OCA0Ny45OCwzNzguNDM5IDQ2Ljg2LDM1My44NzcgQzQ1LjY0OCwzMjcuMzEzIDQ1LjM5MSwzMTkuMzQ1IDQ1LjM5MSwyNTIuMDggQzQ1LjM5MSwxODQuODE0IDQ1LjY0OCwxNzYuODQ2IDQ2Ljg2LDE1MC4yODIgQzQ3Ljk4LDEyNS43MiA1Mi4wODQsMTEyLjM4MSA1NS41MzQsMTAzLjUwNCBDNjAuMTA0LDkxLjc0NSA2NS41NjMsODMuMzUzIDc0LjM3OSw3NC41MzggQzgzLjE5NCw2NS43MjIgOTEuNTg2LDYwLjI2MyAxMDMuMzQ1LDU1LjY5MyBDMTEyLjIyMiw1Mi4yNDMgMTI1LjU2MSw0OC4xMzkgMTUwLjEyMyw0Ny4wMTkgQzE3Ni42ODcsNDUuODA3IDE4NC42NTUsNDUuNTUgMjUxLjkyMSw0NS41NSBaIiBpZD0iRmlsbC0xIiBmaWxsPSIjRkZGRkZGIiBtYXNrPSJ1cmwoI21hc2stMikiPjwvcGF0aD4gICAgICAgIDwvZz4gICAgICAgIDxwYXRoIGQ9Ik0yNTEuOTIxLDMzNi4wNTMgQzIwNS41NDMsMzM2LjA1MyAxNjcuOTQ3LDI5OC40NTcgMTY3Ljk0NywyNTIuMDggQzE2Ny45NDcsMjA1LjcwMiAyMDUuNTQzLDE2OC4xMDYgMjUxLjkyMSwxNjguMTA2IEMyOTguMjk4LDE2OC4xMDYgMzM1Ljg5NCwyMDUuNzAyIDMzNS44OTQsMjUyLjA4IEMzMzUuODk0LDI5OC40NTcgMjk4LjI5OCwzMzYuMDUzIDI1MS45MjEsMzM2LjA1MyBaIE0yNTEuOTIxLDEyMi43MTUgQzE4MC40NzQsMTIyLjcxNSAxMjIuNTU2LDE4MC42MzMgMTIyLjU1NiwyNTIuMDggQzEyMi41NTYsMzIzLjUyNiAxODAuNDc0LDM4MS40NDQgMjUxLjkyMSwzODEuNDQ0IEMzMjMuMzY3LDM4MS40NDQgMzgxLjI4NSwzMjMuNTI2IDM4MS4yODUsMjUyLjA4IEMzODEuMjg1LDE4MC42MzMgMzIzLjM2NywxMjIuNzE1IDI1MS45MjEsMTIyLjcxNSBaIiBpZD0iRmlsbC00IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgICAgICA8cGF0aCBkPSJNNDE2LjYyNywxMTcuNjA0IEM0MTYuNjI3LDEzNC4zIDQwMy4wOTIsMTQ3LjgzNCAzODYuMzk2LDE0Ny44MzQgQzM2OS43MDEsMTQ3LjgzNCAzNTYuMTY2LDEzNC4zIDM1Ni4xNjYsMTE3LjYwNCBDMzU2LjE2NiwxMDAuOTA4IDM2OS43MDEsODcuMzczIDM4Ni4zOTYsODcuMzczIEM0MDMuMDkyLDg3LjM3MyA0MTYuNjI3LDEwMC45MDggNDE2LjYyNywxMTcuNjA0IiBpZD0iRmlsbC01IiBmaWxsPSIjRkZGRkZGIj48L3BhdGg+ICAgIDwvZz48L3N2Zz4=);
		}

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-media__placeholder__url__text {
			color: hsl(302, 100%, 94%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}

	&[data-oembed-url*="twitter.com"] .ck.ck-media__placeholder {
		/* Use gradient to contrast with focused widget (ckeditor/ckeditor5-media-embed#22). */
		background: linear-gradient( to right, hsl(201, 85%, 70%), hsl(201, 85%, 35%) );

		& .ck-media__placeholder__icon {
			background-image: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz48c3ZnIHZlcnNpb249IjEuMSIgaWQ9IldoaXRlIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDQwMCA0MDAiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDQwMCA0MDA7IiB4bWw6c3BhY2U9InByZXNlcnZlIj48c3R5bGUgdHlwZT0idGV4dC9jc3MiPi5zdDB7ZmlsbDojRkZGRkZGO308L3N0eWxlPjxwYXRoIGNsYXNzPSJzdDAiIGQ9Ik00MDAsMjAwYzAsMTEwLjUtODkuNSwyMDAtMjAwLDIwMFMwLDMxMC41LDAsMjAwUzg5LjUsMCwyMDAsMFM0MDAsODkuNSw0MDAsMjAweiBNMTYzLjQsMzA1LjVjODguNywwLDEzNy4yLTczLjUsMTM3LjItMTM3LjJjMC0yLjEsMC00LjItMC4xLTYuMmM5LjQtNi44LDE3LjYtMTUuMywyNC4xLTI1Yy04LjYsMy44LTE3LjksNi40LTI3LjcsNy42YzEwLTYsMTcuNi0xNS40LDIxLjItMjYuN2MtOS4zLDUuNS0xOS42LDkuNS0zMC42LDExLjdjLTguOC05LjQtMjEuMy0xNS4yLTM1LjItMTUuMmMtMjYuNiwwLTQ4LjIsMjEuNi00OC4yLDQ4LjJjMCwzLjgsMC40LDcuNSwxLjMsMTFjLTQwLjEtMi03NS42LTIxLjItOTkuNC01MC40Yy00LjEsNy4xLTYuNSwxNS40LTYuNSwyNC4yYzAsMTYuNyw4LjUsMzEuNSwyMS41LDQwLjFjLTcuOS0wLjItMTUuMy0yLjQtMjEuOC02YzAsMC4yLDAsMC40LDAsMC42YzAsMjMuNCwxNi42LDQyLjgsMzguNyw0Ny4zYy00LDEuMS04LjMsMS43LTEyLjcsMS43Yy0zLjEsMC02LjEtMC4zLTkuMS0wLjljNi4xLDE5LjIsMjMuOSwzMy4xLDQ1LDMzLjVjLTE2LjUsMTIuOS0zNy4zLDIwLjYtNTkuOSwyMC42Yy0zLjksMC03LjctMC4yLTExLjUtMC43QzExMC44LDI5Ny41LDEzNi4yLDMwNS41LDE2My40LDMwNS41Ii8+PC9zdmc+);
		}

		& .ck-media__placeholder__url__text {
			color: hsl(201, 100%, 86%);

			&:hover {
				color: hsl(0, 0%, 100%);
			}
		}
	}
}
`],sourceRoot:""}]);const S=v},5651:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-media-form{align-items:flex-start;display:flex;flex-direction:row;flex-wrap:nowrap}.ck.ck-media-form .ck-labeled-field-view{display:inline-block}.ck.ck-media-form .ck-label{display:none}@media screen and (max-width:600px){.ck.ck-media-form{flex-wrap:wrap}.ck.ck-media-form .ck-labeled-field-view{flex-basis:100%}.ck.ck-media-form .ck-button{flex-basis:50%}}","",{version:3,sources:["webpack://./../ckeditor5-media-embed/theme/mediaform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css"],names:[],mappings:"AAOA,kBAEC,sBAAuB,CADvB,YAAa,CAEb,kBAAmB,CACnB,gBAqBD,CAnBC,yCACC,oBACD,CAEA,4BACC,YACD,CCbA,oCDCD,kBAeE,cAUF,CARE,yCACC,eACD,CAEA,6BACC,cACD,CCtBD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck.ck-media-form {
	display: flex;
	align-items: flex-start;
	flex-direction: row;
	flex-wrap: nowrap;

	& .ck-labeled-field-view {
		display: inline-block;
	}

	& .ck-label {
		display: none;
	}

	@mixin ck-media-phone {
		flex-wrap: wrap;

		& .ck-labeled-field-view {
			flex-basis: 100%;
		}

		& .ck-button {
			flex-basis: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=v},5506:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-input-color{display:flex;flex-direction:row-reverse;width:100%}.ck.ck-input-color>input.ck.ck-input-text{flex-grow:1;min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown{min-width:auto}.ck.ck-input-color>div.ck.ck-dropdown>.ck-input-color__button .ck-dropdown__arrow{display:none}.ck.ck-input-color .ck.ck-input-color__button{display:flex}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview{overflow:hidden;position:relative}.ck.ck-input-color .ck.ck-input-color__button .ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{display:block;position:absolute}[dir=ltr] .ck.ck-input-color>.ck.ck-input-text{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-input-text{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-input-color>.ck.ck-input-text:focus{z-index:0}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{padding:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-left-radius:0;border-top-left-radius:0}[dir=ltr] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-left:1px solid transparent}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button{border-bottom-right-radius:0;border-top-right-radius:0}[dir=rtl] .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button:not(:focus){border-right:1px solid transparent}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button.ck-disabled{background:var(--ck-color-input-disabled-background)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border-radius:0}.ck-rounded-corners .ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview,.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview{border:1px solid var(--ck-color-input-border);height:20px;width:20px}.ck.ck-input-color>.ck.ck-dropdown>.ck.ck-button.ck-input-color__button>.ck.ck-input-color__button__preview>.ck.ck-input-color__button__preview__no-color-indicator{background:red;border-radius:2px;height:150%;left:50%;top:-30%;transform:rotate(45deg);transform-origin:50%;width:8%}.ck.ck-input-color .ck.ck-input-color__remove-color{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard);width:100%}.ck.ck-input-color .ck.ck-input-color__remove-color:not(:focus){border-bottom:1px solid var(--ck-color-input-border)}[dir=ltr] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-right-radius:0}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color{border-top-left-radius:0}.ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-input-color .ck.ck-input-color__remove-color .ck.ck-icon{margin-left:var(--ck-spacing-standard);margin-right:0}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/colorinput.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,YAAa,CACb,0BAA2B,CAF3B,UAgCD,CA5BC,0CAEC,WAAY,CADZ,cAED,CAEA,sCACC,cAMD,CAHC,kFACC,YACD,CAGD,8CAEC,YAWD,CATC,kFAEC,eAAgB,CADhB,iBAOD,CAJC,0IAEC,aAAc,CADd,iBAED,CC1BF,+CAGE,4BAA6B,CAD7B,yBAcF,CAhBA,+CAQE,2BAA4B,CAD5B,wBASF,CAHC,2CACC,SACD,CAIA,wEACC,SA0CD,CA3CA,kFAKE,2BAA4B,CAD5B,wBAuCF,CApCE,8FACC,iCACD,CATF,kFAcE,4BAA6B,CAD7B,yBA8BF,CA3BE,8FACC,kCACD,CAGD,oFACC,oDACD,CAEA,4GC1CF,eD2DE,CAjBA,+PCtCD,qCDuDC,CAjBA,4GAKC,6CAA8C,CAD9C,WAAY,CADZ,UAcD,CAVC,oKAKC,cAA6B,CAC7B,iBAAkB,CAHlB,WAAY,CADZ,QAAS,CADT,QAAS,CAMT,uBAAwB,CACxB,oBAAqB,CAJrB,QAKD,CAKH,oDAIC,2BAA4B,CAC5B,4BAA6B,CAH7B,qEAAwE,CADxE,UA0BD,CApBC,gEACC,oDACD,CATD,8DAYE,yBAeF,CA3BA,8DAgBE,wBAWF,CARC,gEACC,uCAMD,CAPA,0EAKE,sCAAuC,CADvC,cAGF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-input-color {
	width: 100%;
	display: flex;
	flex-direction: row-reverse;

	& > input.ck.ck-input-text {
		min-width: auto;
		flex-grow: 1;
	}

	& > div.ck.ck-dropdown {
		min-width: auto;

		/* This dropdown has no arrow but a color preview instead. */
		& > .ck-input-color__button .ck-dropdown__arrow {
			display: none;
		}
	}

	& .ck.ck-input-color__button {
		/* Resolving issue with misaligned buttons on Safari (see #10589) */
		display: flex;

		& .ck.ck-input-color__button__preview {
			position: relative;
			overflow: hidden;

			& > .ck.ck-input-color__button__preview__no-color-indicator {
				position: absolute;
				display: block;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../mixins/_rounded.css";

.ck.ck-input-color {
	& > .ck.ck-input-text {
		@mixin ck-dir ltr {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* Make sure the focused input is always on top of the dropdown button so its
		   outline and border are never cropped (also when the input is read-only). */
		&:focus {
			z-index: 0;
		}
	}

	& > .ck.ck-dropdown {
		& > .ck.ck-button.ck-input-color__button {
			padding: 0;

			@mixin ck-dir ltr {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;

				&:not(:focus) {
					border-left: 1px solid transparent;
				}
			}

			@mixin ck-dir rtl {
				border-top-right-radius: 0;
				border-bottom-right-radius: 0;

				&:not(:focus) {
					border-right: 1px solid transparent;
				}
			}

			&.ck-disabled {
				background: var(--ck-color-input-disabled-background);
			}

			& > .ck.ck-input-color__button__preview {
				@mixin ck-rounded-corners;

				width: 20px;
				height: 20px;
				border: 1px solid var(--ck-color-input-border);

				& > .ck.ck-input-color__button__preview__no-color-indicator {
					top: -30%;
					left: 50%;
					height: 150%;
					width: 8%;
					background: hsl(0, 100%, 50%);
					border-radius: 2px;
					transform: rotate(45deg);
					transform-origin: 50%;
				}
			}
		}
	}

	& .ck.ck-input-color__remove-color {
		width: 100%;
		padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);

		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;

		&:not(:focus) {
			border-bottom: 1px solid var(--ck-color-input-border);
		}

		@mixin ck-dir ltr {
			border-top-right-radius: 0;
		}

		@mixin ck-dir rtl {
			border-top-left-radius: 0;
		}

		& .ck.ck-icon {
			margin-right: var(--ck-spacing-standard);

			@mixin ck-dir rtl {
				margin-right: 0;
				margin-left: var(--ck-spacing-standard);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=v},4043:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-form{padding:0 0 var(--ck-spacing-large)}.ck.ck-form:focus{outline:none}.ck.ck-form .ck.ck-input-text{min-width:100%;width:0}.ck.ck-form .ck.ck-dropdown{min-width:100%}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button:not(:focus){border:1px solid var(--ck-color-base-border)}.ck.ck-form .ck.ck-dropdown .ck-dropdown__button .ck-button__label{width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/form.css"],names:[],mappings:"AAKA,YACC,mCAyBD,CAvBC,kBAEC,YACD,CAEA,8BACC,cAAe,CACf,OACD,CAEA,4BACC,cAWD,CARE,6DACC,4CACD,CAEA,mEACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form {
	padding: 0 0 var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	& .ck.ck-input-text {
		min-width: 100%;
		width: 0;
	}

	& .ck.ck-dropdown {
		min-width: 100%;

		& .ck-dropdown__button {
			&:not(:focus) {
				border: 1px solid var(--ck-color-base-border);
			}

			& .ck-button__label {
				width: 100%;
			}
		}
	}
}
`],sourceRoot:""}]);const S=v},2655:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-form__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__row>:not(.ck-label){flex-grow:1}.ck.ck-form__row.ck-table-form__action-row .ck-button-cancel,.ck.ck-form__row.ck-table-form__action-row .ck-button-save{justify-content:center}.ck.ck-form__row{padding:var(--ck-spacing-standard) var(--ck-spacing-large) 0}[dir=ltr] .ck.ck-form__row>:not(.ck-label)+*{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-form__row>:not(.ck-label)+*{margin-right:var(--ck-spacing-large)}.ck.ck-form__row>.ck-label{min-width:100%;width:100%}.ck.ck-form__row.ck-table-form__action-row{margin-top:var(--ck-spacing-large)}.ck.ck-form__row.ck-table-form__action-row .ck-button .ck-button__label{color:var(--ck-color-text)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/formrow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/formrow.css"],names:[],mappings:"AAKA,iBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAaD,CAVC,iCACC,WACD,CAGC,wHAEC,sBACD,CCbF,iBACC,4DA2BD,CAvBE,6CAEE,mCAMF,CARA,6CAME,oCAEF,CAGD,2BAEC,cAAe,CADf,UAED,CAEA,2CACC,kCAKD,CAHC,wEACC,0BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		flex-grow: 1;
	}

	&.ck-table-form__action-row {
		& .ck-button-save,
		& .ck-button-cancel {
			justify-content: center;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-form__row {
	padding: var(--ck-spacing-standard) var(--ck-spacing-large) 0;

	/* Ignore labels that work as fieldset legends */
	& > *:not(.ck-label) {
		& + * {
			@mixin ck-dir ltr {
				margin-left: var(--ck-spacing-large);
			}

			@mixin ck-dir rtl {
				margin-right: var(--ck-spacing-large);
			}
		}
	}

	& > .ck-label {
		width: 100%;
		min-width: 100%;
	}

	&.ck-table-form__action-row {
		margin-top: var(--ck-spacing-large);

		& .ck-button .ck-button__label {
			color: var(--ck-color-text);
		}
	}
}
`],sourceRoot:""}]);const S=v},5032:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck .ck-insert-table-dropdown__grid{display:flex;flex-direction:row;flex-wrap:wrap}:root{--ck-insert-table-dropdown-padding:10px;--ck-insert-table-dropdown-box-height:11px;--ck-insert-table-dropdown-box-width:12px;--ck-insert-table-dropdown-box-margin:1px}.ck .ck-insert-table-dropdown__grid{padding:var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;width:calc(var(--ck-insert-table-dropdown-box-width)*10 + var(--ck-insert-table-dropdown-box-margin)*20 + var(--ck-insert-table-dropdown-padding)*2)}.ck .ck-insert-table-dropdown__label,.ck[dir=rtl] .ck-insert-table-dropdown__label{text-align:center}.ck .ck-insert-table-dropdown-grid-box{border:1px solid var(--ck-color-base-border);border-radius:1px;margin:var(--ck-insert-table-dropdown-box-margin);min-height:var(--ck-insert-table-dropdown-box-height);min-width:var(--ck-insert-table-dropdown-box-width);outline:none;transition:none}.ck .ck-insert-table-dropdown-grid-box:focus{box-shadow:none}.ck .ck-insert-table-dropdown-grid-box.ck-on{background:var(--ck-color-focus-outer-shadow);border-color:var(--ck-color-focus-border)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/inserttable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/inserttable.css"],names:[],mappings:"AAKA,oCACC,YAAa,CACb,kBAAmB,CACnB,cACD,CCJA,MACC,uCAAwC,CACxC,0CAA2C,CAC3C,yCAA0C,CAC1C,yCACD,CAEA,oCAGC,yFAA0F,CAD1F,oJAED,CAEA,mFAEC,iBACD,CAEA,uCAIC,4CAA6C,CAC7C,iBAAkB,CAFlB,iDAAkD,CADlD,qDAAsD,CADtD,mDAAoD,CAKpD,YAAa,CACb,eAUD,CARC,6CACC,eACD,CAEA,6CAEC,6CAA8C,CAD9C,yCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-insert-table-dropdown__grid {
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-insert-table-dropdown-padding: 10px;
	--ck-insert-table-dropdown-box-height: 11px;
	--ck-insert-table-dropdown-box-width: 12px;
	--ck-insert-table-dropdown-box-margin: 1px;
}

.ck .ck-insert-table-dropdown__grid {
	/* The width of a container should match 10 items in a row so there will be a 10x10 grid. */
	width: calc(var(--ck-insert-table-dropdown-box-width) * 10 + var(--ck-insert-table-dropdown-box-margin) * 20 + var(--ck-insert-table-dropdown-padding) * 2);
	padding: var(--ck-insert-table-dropdown-padding) var(--ck-insert-table-dropdown-padding) 0;
}

.ck .ck-insert-table-dropdown__label,
.ck[dir=rtl] .ck-insert-table-dropdown__label {
	text-align: center;
}

.ck .ck-insert-table-dropdown-grid-box {
	min-width: var(--ck-insert-table-dropdown-box-width);
	min-height: var(--ck-insert-table-dropdown-box-height);
	margin: var(--ck-insert-table-dropdown-box-margin);
	border: 1px solid var(--ck-color-base-border);
	border-radius: 1px;
	outline: none;
	transition: none;

	&:focus {
		box-shadow: none;
	}

	&.ck-on {
		border-color: var(--ck-color-focus-border);
		background: var(--ck-color-focus-outer-shadow);
	}
}

`],sourceRoot:""}]);const S=v},2329:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck-content .table{display:table;margin:.9em auto}.ck-content .table table{border:1px double #b3b3b3;border-collapse:collapse;border-spacing:0;height:100%;width:100%}.ck-content .table table td,.ck-content .table table th{border:1px solid #bfbfbf;min-width:2em;padding:.4em}.ck-content .table table th{background:rgba(0,0,0,.05);font-weight:700}.ck-content[dir=rtl] .table th{text-align:right}.ck-content[dir=ltr] .table th{text-align:left}.ck-editor__editable .ck-table-bogus-paragraph{display:inline-block;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/table.css"],names:[],mappings:"AAKA,mBAKC,aAAc,CADd,gBAiCD,CA9BC,yBAYC,yBAAkC,CAVlC,wBAAyB,CACzB,gBAAiB,CAKjB,WAAY,CADZ,UAsBD,CAfC,wDAQC,wBAAiC,CANjC,aAAc,CACd,YAMD,CAEA,4BAEC,0BAA+B,CAD/B,eAED,CAMF,+BACC,gBACD,CAEA,+BACC,eACD,CAEA,+CAKC,oBAAqB,CAMrB,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck-content .table {
	/* Give the table widget some air and center it horizontally */
	/* The first value should be equal to --ck-spacing-large variable if used in the editor context
	to avoid the content jumping (See https://github.com/ckeditor/ckeditor5/issues/9825). */
	margin: 0.9em auto;
	display: table;

	& table {
		/* The table cells should have slight borders */
		border-collapse: collapse;
		border-spacing: 0;

		/* Table width and height are set on the parent <figure>. Make sure the table inside stretches
		to the full dimensions of the container (https://github.com/ckeditor/ckeditor5/issues/6186). */
		width: 100%;
		height: 100%;

		/* The outer border of the table should be slightly darker than the inner lines.
		Also see https://github.com/ckeditor/ckeditor5-table/issues/50. */
		border: 1px double hsl(0, 0%, 70%);

		& td,
		& th {
			min-width: 2em;
			padding: .4em;

			/* The border is inherited from .ck-editor__nested-editable styles, so theoretically it's not necessary here.
			However, the border is a content style, so it should use .ck-content (so it works outside the editor).
			Hence, the duplication. See https://github.com/ckeditor/ckeditor5/issues/6314 */
			border: 1px solid hsl(0, 0%, 75%);
		}

		& th {
			font-weight: bold;
			background: hsla(0, 0%, 0%, 5%);
		}
	}
}

/* Text alignment of the table header should match the editor settings and override the native browser styling,
when content is available outside the editor. See https://github.com/ckeditor/ckeditor5/issues/6638 */
.ck-content[dir="rtl"] .table th {
	text-align: right;
}

.ck-content[dir="ltr"] .table th {
	text-align: left;
}

.ck-editor__editable .ck-table-bogus-paragraph {
	/*
	 * Use display:inline-block to force Chrome/Safari to limit text mutations to this element.
	 * See https://github.com/ckeditor/ckeditor5/issues/6062.
	 */
	display: inline-block;

	/*
	 * Inline HTML elements nested in the span should always be dimensioned in relation to the whole cell width.
	 * See https://github.com/ckeditor/ckeditor5/issues/9117.
	 */
	width: 100%;
}
`],sourceRoot:""}]);const S=v},4143:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,":root{--ck-color-selector-caption-background:#f7f7f7;--ck-color-selector-caption-text:#333;--ck-color-selector-caption-highlighted-background:#fd0}.ck-content .table>figcaption{background-color:var(--ck-color-selector-caption-background);caption-side:top;color:var(--ck-color-selector-caption-text);display:table-caption;font-size:.75em;outline-offset:-1px;padding:.6em;text-align:center;word-break:break-word}.ck.ck-editor__editable .table>figcaption.table__caption_highlighted{animation:ck-table-caption-highlight .6s ease-out}.ck.ck-editor__editable .table>figcaption.ck-placeholder:before{overflow:hidden;padding-left:inherit;padding-right:inherit;text-overflow:ellipsis;white-space:nowrap}@keyframes ck-table-caption-highlight{0%{background-color:var(--ck-color-selector-caption-highlighted-background)}to{background-color:var(--ck-color-selector-caption-background)}}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecaption.css"],names:[],mappings:"AAKA,MACC,8CAAuD,CACvD,qCAAiD,CACjD,uDACD,CAGA,8BAMC,4DAA6D,CAJ7D,gBAAiB,CAGjB,2CAA4C,CAJ5C,qBAAsB,CAOtB,eAAgB,CAChB,mBAAoB,CAFpB,YAAa,CAHb,iBAAkB,CADlB,qBAOD,CAIC,qEACC,iDACD,CAEA,gEASC,eAAgB,CARhB,oBAAqB,CACrB,qBAAsB,CAQtB,sBAAuB,CAFvB,kBAGD,CAGD,sCACC,GACC,wEACD,CAEA,GACC,4DACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-caption-background: hsl(0, 0%, 97%);
	--ck-color-selector-caption-text: hsl(0, 0%, 20%);
	--ck-color-selector-caption-highlighted-background: hsl(52deg 100% 50%);
}

/* Content styles */
.ck-content .table > figcaption {
	display: table-caption;
	caption-side: top;
	word-break: break-word;
	text-align: center;
	color: var(--ck-color-selector-caption-text);
	background-color: var(--ck-color-selector-caption-background);
	padding: .6em;
	font-size: .75em;
	outline-offset: -1px;
}

/* Editing styles */
.ck.ck-editor__editable .table > figcaption {
	&.table__caption_highlighted {
		animation: ck-table-caption-highlight .6s ease-out;
	}

	&.ck-placeholder::before {
		padding-left: inherit;
		padding-right: inherit;

		/*
		 * Make sure the table caption placeholder doesn't overflow the placeholder area.
		 * See https://github.com/ckeditor/ckeditor5/issues/9162.
		 */
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
}

@keyframes ck-table-caption-highlight {
	0% {
		background-color: var(--ck-color-selector-caption-highlighted-background);
	}

	100% {
		background-color: var(--ck-color-selector-caption-background);
	}
}
`],sourceRoot:""}]);const S=v},8986:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row{flex-wrap:wrap}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:first-of-type{flex-grow:0.57}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar:last-of-type{flex-grow:0.43}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar .ck-button{flex-grow:1}.ck.ck-table-cell-properties-form{width:320px}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__padding-row{align-self:flex-end;padding:0;width:25%}.ck.ck-table-cell-properties-form .ck-form__row.ck-table-cell-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecellproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tablecellproperties.css"],names:[],mappings:"AAOE,6FACC,cAiBD,CAdE,0HAEC,cACD,CAEA,yHAEC,cACD,CAEA,uHACC,WACD,CClBJ,kCACC,WAkBD,CAfE,2FACC,mBAAoB,CACpB,SAAU,CACV,SACD,CAGC,4GACC,eAAgB,CAGhB,qCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	& .ck-form__row {
		&.ck-table-cell-properties-form__alignment-row {
			flex-wrap: wrap;

			& .ck.ck-toolbar {
				&:first-of-type {
					/* 4 buttons out of 7 (h-alignment + v-alignment) = 0.57 */
					flex-grow: 0.57;
				}

				&:last-of-type {
					/* 3 buttons out of 7 (h-alignment + v-alignment) = 0.43 */
					flex-grow: 0.43;
				}

				& .ck-button {
					flex-grow: 1;
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-cell-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-cell-properties-form__padding-row {
			align-self: flex-end;
			padding: 0;
			width: 25%;
		}

		&.ck-table-cell-properties-form__alignment-row {
			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);
			}
		}
	}
}
`],sourceRoot:""}]);const S=v},8795:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,":root{--ck-color-selector-column-resizer-hover:var(--ck-color-base-active);--ck-table-column-resizer-width:7px;--ck-table-column-resizer-position-offset:calc(var(--ck-table-column-resizer-width)*-0.5 - 0.5px)}.ck-content .table .ck-table-resized{table-layout:fixed}.ck-content .table table{overflow:hidden}.ck-content .table td,.ck-content .table th{overflow-wrap:break-word;position:relative}.ck.ck-editor__editable .table .ck-table-column-resizer{bottom:0;cursor:col-resize;position:absolute;right:var(--ck-table-column-resizer-position-offset);top:0;user-select:none;width:var(--ck-table-column-resizer-width);z-index:var(--ck-z-default)}.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer,.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer{display:none}.ck.ck-editor__editable .table .ck-table-column-resizer:hover,.ck.ck-editor__editable .table .ck-table-column-resizer__active{background-color:var(--ck-color-selector-column-resizer-hover);bottom:-999999px;opacity:.25;top:-999999px}.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer{left:var(--ck-table-column-resizer-position-offset);right:unset}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tablecolumnresize.css"],names:[],mappings:"AAKA,MACC,oEAAqE,CACrE,mCAAoC,CAIpC,iGACD,CAEA,qCACC,kBACD,CAEA,yBACC,eACD,CAEA,4CAIC,wBAAyB,CACzB,iBACD,CAEA,wDAGC,QAAS,CAGT,iBAAkB,CALlB,iBAAkB,CAGlB,oDAAqD,CAFrD,KAAM,CAKN,gBAAiB,CAFjB,0CAA2C,CAG3C,2BACD,CAQA,qJACC,YACD,CAEA,8HAEC,8DAA+D,CAO/D,gBAAiB,CANjB,WAAa,CAKb,aAED,CAEA,iEACC,mDAAoD,CACpD,WACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-column-resizer-hover: var(--ck-color-base-active);
	--ck-table-column-resizer-width: 7px;

	/* The offset used for absolute positioning of the resizer element, so that it is placed exactly above the cell border.
	   The value is: minus half the width of the resizer decreased additionaly by the half the width of the border (0.5px). */
	--ck-table-column-resizer-position-offset: calc(var(--ck-table-column-resizer-width) * -0.5 - 0.5px);
}

.ck-content .table .ck-table-resized {
	table-layout: fixed;
}

.ck-content .table table {
	overflow: hidden;
}

.ck-content .table td,
.ck-content .table th {
	/* To prevent text overflowing beyond its cell when columns are resized by resize handler
	(https://github.com/ckeditor/ckeditor5/pull/14379#issuecomment-1589460978). */
	overflow-wrap: break-word;
	position: relative;
}

.ck.ck-editor__editable .table .ck-table-column-resizer {
	position: absolute;
	top: 0;
	bottom: 0;
	right: var(--ck-table-column-resizer-position-offset);
	width: var(--ck-table-column-resizer-width);
	cursor: col-resize;
	user-select: none;
	z-index: var(--ck-z-default);
}

.ck.ck-editor__editable.ck-column-resize_disabled .table .ck-table-column-resizer {
	display: none;
}

/* The resizer elements, which are extended to an extremely high height, break the drag & drop feature in Chrome. To make it work again,
   all resizers must be hidden while the table is dragged. */
.ck.ck-editor__editable .table[draggable] .ck-table-column-resizer {
	display: none;
}

.ck.ck-editor__editable .table .ck-table-column-resizer:hover,
.ck.ck-editor__editable .table .ck-table-column-resizer__active {
	background-color: var(--ck-color-selector-column-resizer-hover);
	opacity: 0.25;
	/* The resizer element resides in each cell so to occupy the entire height of the table, which is unknown from a CSS point of view,
	   it is extended to an extremely high height. Even for screens with a very high pixel density, the resizer will fulfill its role as
	   it should, i.e. for a screen of 476 ppi the total height of the resizer will take over 350 sheets of A4 format, which is totally
	   unrealistic height for a single table. */
	top: -999999px;
	bottom: -999999px;
}

.ck.ck-editor__editable[dir=rtl] .table .ck-table-column-resizer {
	left: var(--ck-table-column-resizer-position-offset);
	right: unset;
}
`],sourceRoot:""}]);const S=v},8137:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,":root{--ck-color-selector-focused-cell-background:rgba(158,201,250,.3)}.ck-widget.table td.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table td.ck-editor__nested-editable:focus,.ck-widget.table th.ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck-widget.table th.ck-editor__nested-editable:focus{background:var(--ck-color-selector-focused-cell-background);border-style:none;outline:1px solid var(--ck-color-focus-border);outline-offset:-1px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableediting.css"],names:[],mappings:"AAKA,MACC,gEACD,CAKE,8QAGC,2DAA4D,CAK5D,iBAAkB,CAClB,8CAA+C,CAC/C,mBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-selector-focused-cell-background: hsla(212, 90%, 80%, .3);
}

.ck-widget.table {
	& td,
	& th {
		&.ck-editor__nested-editable.ck-editor__nested-editable_focused,
		&.ck-editor__nested-editable:focus {
			/* A very slight background to highlight the focused cell */
			background: var(--ck-color-selector-focused-cell-background);

			/* Fixes the problem where surrounding cells cover the focused cell's border.
			It does not fix the problem in all places but the UX is improved.
			See https://github.com/ckeditor/ckeditor5-table/issues/29. */
			border-style: none;
			outline: 1px solid var(--ck-color-focus-border);
			outline-offset: -1px; /* progressive enhancement - no IE support */
		}
	}
}
`],sourceRoot:""}]);const S=v},1623:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,'.ck.ck-table-form .ck-form__row.ck-table-form__background-row,.ck.ck-table-form .ck-form__row.ck-table-form__border-row{flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{align-items:center;flex-wrap:wrap}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view{align-items:center;display:flex;flex-direction:column-reverse}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-labeled-field-view .ck.ck-dropdown,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{flex-grow:0}.ck.ck-table-form .ck.ck-labeled-field-view{position:relative}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{bottom:calc(var(--ck-table-properties-error-arrow-size)*-1);left:50%;position:absolute;transform:translate(-50%,100%);z-index:1}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{content:"";left:50%;position:absolute;top:calc(var(--ck-table-properties-error-arrow-size)*-1);transform:translateX(-50%)}:root{--ck-table-properties-error-arrow-size:6px;--ck-table-properties-min-error-width:150px}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-labeled-field-view>.ck-label{font-size:var(--ck-font-size-tiny);text-align:center}.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-style,.ck.ck-table-form .ck-form__row.ck-table-form__border-row .ck-table-form__border-width{max-width:80px;min-width:80px;width:80px}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row{padding:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__height,.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimensions-row__width{margin:0}.ck.ck-table-form .ck-form__row.ck-table-form__dimensions-row .ck-table-form__dimension-operator{align-self:flex-end;display:inline-block;height:var(--ck-ui-component-min-height);line-height:var(--ck-ui-component-min-height);margin:0 var(--ck-spacing-small)}.ck.ck-table-form .ck.ck-labeled-field-view{padding-top:var(--ck-spacing-standard)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{border-radius:0}.ck-rounded-corners .ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status,.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{background:var(--ck-color-base-error);color:var(--ck-color-base-background);min-width:var(--ck-table-properties-min-error-width);padding:var(--ck-spacing-small) var(--ck-spacing-medium);text-align:center}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status:after{border-color:transparent transparent var(--ck-color-base-error) transparent;border-style:solid;border-width:0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size)}.ck.ck-table-form .ck.ck-labeled-field-view .ck.ck-labeled-field-view__status{animation:ck-table-form-labeled-view-status-appear .15s ease both}.ck.ck-table-form .ck.ck-labeled-field-view .ck-input.ck-error:not(:focus)+.ck.ck-labeled-field-view__status{display:none}@keyframes ck-table-form-labeled-view-status-appear{0%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableform.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableform.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAWE,wHACC,cACD,CAEA,8DAEC,kBAAmB,CADnB,cAgBD,CAbC,qFAGC,kBAAmB,CAFnB,YAAa,CACb,6BAMD,CAEA,sMACC,WACD,CAIF,4CAEC,iBAoBD,CAlBC,8EAGC,2DAAgE,CADhE,QAAS,CADT,iBAAkB,CAGlB,8BAA+B,CAG/B,SAUD,CAPC,oFACC,UAAW,CAGX,QAAS,CAFT,iBAAkB,CAClB,wDAA6D,CAE7D,0BACD,CChDH,MACC,0CAA2C,CAC3C,2CACD,CAMI,2FACC,kCAAmC,CACnC,iBACD,CAGD,8KAIC,cAAe,CADf,cAAe,CADf,UAGD,CAGD,8DACC,SAcD,CAZC,yMAEC,QACD,CAEA,iGACC,mBAAoB,CACpB,oBAAqB,CACrB,wCAAyC,CACzC,6CAA8C,CAC9C,gCACD,CAIF,4CACC,sCAyBD,CAvBC,8ECxCD,eDyDC,CAjBA,mMCpCA,qCDqDA,CAjBA,8EAGC,qCAAsC,CACtC,qCAAsC,CAEtC,oDAAqD,CADrD,wDAAyD,CAEzD,iBAUD,CAPC,oFACC,2EAA4E,CAE5E,kBAAmB,CADnB,kJAED,CAdD,8EAgBC,iEACD,CAGA,6GACC,YACD,CAIF,oDACC,GACC,SACD,CAEA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__background-row {
			flex-wrap: wrap;
		}

		&.ck-table-form__dimensions-row {
			flex-wrap: wrap;
			align-items: center;

			& .ck-labeled-field-view {
				display: flex;
				flex-direction: column-reverse;
				align-items: center;

				& .ck.ck-dropdown {
					flex-grow: 0;
				}
			}

			& .ck-table-form__dimension-operator {
				flex-grow: 0;
			}
		}
	}

	& .ck.ck-labeled-field-view {
		/* Allow absolute positioning of the status (error) balloons. */
		position: relative;

		& .ck.ck-labeled-field-view__status {
			position: absolute;
			left: 50%;
			bottom: calc( -1 * var(--ck-table-properties-error-arrow-size) );
			transform: translate(-50%,100%);

			/* Make sure the balloon status stays on top of other form elements. */
			z-index: 1;

			/* The arrow pointing towards the field. */
			&::after {
				content: "";
				position: absolute;
				top: calc( -1 * var(--ck-table-properties-error-arrow-size) );
				left: 50%;
				transform: translateX( -50% );
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_rounded.css";

:root {
	--ck-table-properties-error-arrow-size: 6px;
	--ck-table-properties-min-error-width: 150px;
}

.ck.ck-table-form {
	& .ck-form__row {
		&.ck-table-form__border-row {
			& .ck-labeled-field-view {
				& > .ck-label {
					font-size: var(--ck-font-size-tiny);
					text-align: center;
				}
			}

			& .ck-table-form__border-style,
			& .ck-table-form__border-width {
				width: 80px;
				min-width: 80px;
				max-width: 80px;
			}
		}

		&.ck-table-form__dimensions-row {
			padding: 0;

			& .ck-table-form__dimensions-row__width,
			& .ck-table-form__dimensions-row__height {
				margin: 0
			}

			& .ck-table-form__dimension-operator {
				align-self: flex-end;
				display: inline-block;
				height: var(--ck-ui-component-min-height);
				line-height: var(--ck-ui-component-min-height);
				margin: 0 var(--ck-spacing-small);
			}
		}
	}

	& .ck.ck-labeled-field-view {
		padding-top: var(--ck-spacing-standard);

		& .ck.ck-labeled-field-view__status {
			@mixin ck-rounded-corners;

			background: var(--ck-color-base-error);
			color: var(--ck-color-base-background);
			padding: var(--ck-spacing-small) var(--ck-spacing-medium);
			min-width: var(--ck-table-properties-min-error-width);
			text-align: center;

			/* The arrow pointing towards the field. */
			&::after {
				border-color: transparent transparent var(--ck-color-base-error) transparent;
				border-width: 0 var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size) var(--ck-table-properties-error-arrow-size);
				border-style: solid;
			}

			animation: ck-table-form-labeled-view-status-appear .15s ease both;
		}

		/* Hide the error balloon when the field is blurred. Makes the experience much more clear. */
		& .ck-input.ck-error:not(:focus) + .ck.ck-labeled-field-view__status {
			display: none;
		}
	}
}

@keyframes ck-table-form-labeled-view-status-appear {
	0% {
		opacity: 0;
	}

	100% {
		opacity: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=v},5562:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-content:baseline;flex-basis:0;flex-wrap:wrap}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items{flex-wrap:nowrap}.ck.ck-table-properties-form{width:320px}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row{align-self:flex-end;padding:0}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar{background:none;margin-top:var(--ck-spacing-standard)}.ck.ck-table-properties-form .ck-form__row.ck-table-properties-form__alignment-row .ck.ck-toolbar .ck-toolbar__items>*{width:40px}","",{version:3,sources:["webpack://./../ckeditor5-table/theme/tableproperties.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableproperties.css"],names:[],mappings:"AAOE,mFAGC,sBAAuB,CADvB,YAAa,CADb,cAOD,CAHC,qHACC,gBACD,CCTH,6BACC,WAmBD,CAhBE,mFACC,mBAAoB,CACpB,SAYD,CAVC,kGACC,eAAgB,CAGhB,qCAKD,CAHC,uHACC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			flex-wrap: wrap;
			flex-basis: 0;
			align-content: baseline;

			& .ck.ck-toolbar .ck-toolbar__items {
				flex-wrap: nowrap;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-table-properties-form {
	width: 320px;

	& .ck-form__row {
		&.ck-table-properties-form__alignment-row {
			align-self: flex-end;
			padding: 0;

			& .ck.ck-toolbar {
				background: none;

				/* Compensate for missing input label that would push the margin (toolbar has no inputs). */
				margin-top: var(--ck-spacing-standard);

				& .ck-toolbar__items > * {
					width: 40px;
				}
			}
		}
	}
}
`],sourceRoot:""}]);const S=v},8423:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,':root{--ck-table-selected-cell-background:rgba(158,207,250,.3)}.ck.ck-editor__editable .table table td.ck-editor__editable_selected,.ck.ck-editor__editable .table table th.ck-editor__editable_selected{box-shadow:unset;caret-color:transparent;outline:unset;position:relative}.ck.ck-editor__editable .table table td.ck-editor__editable_selected:after,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:after{background-color:var(--ck-table-selected-cell-background);bottom:0;content:"";left:0;pointer-events:none;position:absolute;right:0;top:0}.ck.ck-editor__editable .table table td.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table td.ck-editor__editable_selected:focus,.ck.ck-editor__editable .table table th.ck-editor__editable_selected ::selection,.ck.ck-editor__editable .table table th.ck-editor__editable_selected:focus{background-color:transparent}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget{outline:unset}.ck.ck-editor__editable .table table td.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle,.ck.ck-editor__editable .table table th.ck-editor__editable_selected .ck-widget>.ck-widget__selection-handle{display:none}',"",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-table/tableselection.css"],names:[],mappings:"AAKA,MACC,wDACD,CAGC,0IAKC,gBAAiB,CAFjB,uBAAwB,CACxB,aAAc,CAFd,iBAiCD,CA3BC,sJAGC,yDAA0D,CAK1D,QAAS,CAPT,UAAW,CAKX,MAAO,CAJP,mBAAoB,CAEpB,iBAAkB,CAGlB,OAAQ,CAFR,KAID,CAEA,wTAEC,4BACD,CAMA,gKACC,aAKD,CAHC,0NACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-table-selected-cell-background: hsla(208, 90%, 80%, .3);
}

.ck.ck-editor__editable .table table {
	& td.ck-editor__editable_selected,
	& th.ck-editor__editable_selected {
		position: relative;
		caret-color: transparent;
		outline: unset;
		box-shadow: unset;

		/* https://github.com/ckeditor/ckeditor5/issues/6446 */
		&:after {
			content: '';
			pointer-events: none;
			background-color: var(--ck-table-selected-cell-background);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			bottom: 0;
		}

		& ::selection,
		&:focus {
			background-color: transparent;
		}

		/*
		 * To reduce the amount of noise, all widgets in the table selection have no outline and no selection handle.
		 * See https://github.com/ckeditor/ckeditor5/issues/9491.
		 */
		& .ck-widget {
			outline: unset;

			& > .ck-widget__selection-handle {
				display: none;
			}
		}
	}
}
`],sourceRoot:""}]);const S=v},1801:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-aria-live-announcer{left:-10000px;position:absolute;top:-10000px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/arialiveannouncer/arialiveannouncer.css"],names:[],mappings:"AAKA,2BAEC,aAAc,CADd,iBAAkB,CAElB,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-aria-live-announcer {
	position: absolute;
	left: -10000px;
	top: -10000px;
}
`],sourceRoot:""}]);const S=v},5727:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-autocomplete{position:relative}.ck.ck-autocomplete>.ck-search__results{position:absolute;z-index:var(--ck-z-panel)}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{bottom:100%}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{bottom:auto;top:100%}.ck.ck-autocomplete>.ck-search__results{border-radius:0}.ck-rounded-corners .ck.ck-autocomplete>.ck-search__results,.ck.ck-autocomplete>.ck-search__results.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-autocomplete>.ck-search__results{background:var(--ck-color-base-background);border:1px solid var(--ck-color-dropdown-panel-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:200px;min-width:auto;overflow-y:auto}.ck.ck-autocomplete>.ck-search__results.ck-search__results_n{border-bottom-left-radius:0;border-bottom-right-radius:0;margin-bottom:-1px}.ck.ck-autocomplete>.ck-search__results.ck-search__results_s{border-top-left-radius:0;border-top-right-radius:0;margin-top:-1px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/autocomplete/autocomplete.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,oBACC,iBAeD,CAbC,wCACC,iBAAkB,CAClB,yBAUD,CARC,6DACC,WACD,CAEA,6DAEC,WAAY,CADZ,QAED,CCVD,wCCEA,eDuBA,CAzBA,uHCMC,qCDmBD,CAzBA,wCAMC,0CAA2C,CAC3C,sDAAuD,CEPxD,oCAA8B,CFI7B,gBAAiB,CAIjB,cAAe,CAHf,eAoBD,CAfC,6DACC,2BAA4B,CAC5B,4BAA6B,CAG7B,kBACD,CAEA,6DACC,wBAAyB,CACzB,yBAA0B,CAG1B,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-autocomplete {
	position: relative;

	& > .ck-search__results {
		position: absolute;
		z-index: var(--ck-z-panel);

		&.ck-search__results_n {
			bottom: 100%;
		}

		&.ck-search__results_s {
			top: 100%;
			bottom: auto;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_rounded.css";
@import "@ckeditor/ckeditor5-theme-lark/theme/mixins/_shadow.css";

.ck.ck-autocomplete {
	& > .ck-search__results {
		@mixin ck-rounded-corners;
		@mixin ck-drop-shadow;

		max-height: 200px;
		overflow-y: auto;
		background: var(--ck-color-base-background);
		border: 1px solid var(--ck-color-dropdown-panel-border);
		min-width: auto;

		&.ck-search__results_n {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-bottom: -1px;
		}

		&.ck-search__results_s {
			border-top-left-radius: 0;
			border-top-right-radius: 0;

			/* Prevent duplicated borders between the input and the results pane. */
			margin-top: -1px;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=v},9715:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-button,a.ck.ck-button{align-items:center;display:inline-flex;position:relative;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}[dir=ltr] .ck.ck-button,[dir=ltr] a.ck.ck-button{justify-content:left}[dir=rtl] .ck.ck-button,[dir=rtl] a.ck.ck-button{justify-content:right}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{display:none}.ck.ck-button.ck-button_with-text .ck-button__label,a.ck.ck-button.ck-button_with-text .ck-button__label{display:inline-block}.ck.ck-button:not(.ck-button_with-text),a.ck.ck-button:not(.ck-button_with-text){justify-content:center}.ck.ck-button,a.ck.ck-button{background:var(--ck-color-button-default-background)}.ck.ck-button:not(.ck-disabled):hover,a.ck.ck-button:not(.ck-disabled):hover{background:var(--ck-color-button-default-hover-background)}.ck.ck-button:not(.ck-disabled):active,a.ck.ck-button:not(.ck-disabled):active{background:var(--ck-color-button-default-active-background)}.ck.ck-button.ck-disabled,a.ck.ck-button.ck-disabled{background:var(--ck-color-button-default-disabled-background)}.ck.ck-button,a.ck.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-button,.ck-rounded-corners a.ck.ck-button,.ck.ck-button.ck-rounded-corners,a.ck.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-button,a.ck.ck-button{-webkit-appearance:none;border:1px solid transparent;cursor:default;font-size:inherit;line-height:1;min-height:var(--ck-ui-component-min-height);min-width:var(--ck-ui-component-min-height);padding:var(--ck-spacing-tiny);text-align:center;transition:box-shadow .2s ease-in-out,border .2s ease-in-out;vertical-align:middle;white-space:nowrap}.ck.ck-button:active,.ck.ck-button:focus,a.ck.ck-button:active,a.ck.ck-button:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-button .ck-button__icon use,.ck.ck-button .ck-button__icon use *,a.ck.ck-button .ck-button__icon use,a.ck.ck-button .ck-button__icon use *{color:inherit}.ck.ck-button .ck-button__label,a.ck.ck-button .ck-button__label{color:inherit;cursor:inherit;font-size:inherit;font-weight:inherit;vertical-align:middle}[dir=ltr] .ck.ck-button .ck-button__label,[dir=ltr] a.ck.ck-button .ck-button__label{text-align:left}[dir=rtl] .ck.ck-button .ck-button__label,[dir=rtl] a.ck.ck-button .ck-button__label{text-align:right}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{color:inherit}[dir=ltr] .ck.ck-button .ck-button__keystroke,[dir=ltr] a.ck.ck-button .ck-button__keystroke{margin-left:var(--ck-spacing-large)}[dir=rtl] .ck.ck-button .ck-button__keystroke,[dir=rtl] a.ck.ck-button .ck-button__keystroke{margin-right:var(--ck-spacing-large)}.ck.ck-button .ck-button__keystroke,a.ck.ck-button .ck-button__keystroke{opacity:.5}.ck.ck-button.ck-disabled:active,.ck.ck-button.ck-disabled:focus,a.ck.ck-button.ck-disabled:active,a.ck.ck-button.ck-disabled:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-button.ck-disabled .ck-button__icon,.ck.ck-button.ck-disabled .ck-button__label,a.ck.ck-button.ck-disabled .ck-button__icon,a.ck.ck-button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-disabled .ck-button__keystroke,a.ck.ck-button.ck-disabled .ck-button__keystroke{opacity:.3}.ck.ck-button.ck-button_with-text,a.ck.ck-button.ck-button_with-text{padding:var(--ck-spacing-tiny) var(--ck-spacing-standard)}[dir=ltr] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=ltr] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}[dir=rtl] .ck.ck-button.ck-button_with-text .ck-button__icon,[dir=rtl] a.ck.ck-button.ck-button_with-text .ck-button__icon{margin-left:var(--ck-spacing-small);margin-right:calc(var(--ck-spacing-small)*-1)}.ck.ck-button.ck-button_with-keystroke .ck-button__label,a.ck.ck-button.ck-button_with-keystroke .ck-button__label{flex-grow:1}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{background:var(--ck-color-button-on-background)}.ck.ck-button.ck-on:not(.ck-disabled):hover,a.ck.ck-button.ck-on:not(.ck-disabled):hover{background:var(--ck-color-button-on-hover-background)}.ck.ck-button.ck-on:not(.ck-disabled):active,a.ck.ck-button.ck-on:not(.ck-disabled):active{background:var(--ck-color-button-on-active-background)}.ck.ck-button.ck-on.ck-disabled,a.ck.ck-button.ck-on.ck-disabled{background:var(--ck-color-button-on-disabled-background)}.ck.ck-button.ck-on,a.ck.ck-button.ck-on{color:var(--ck-color-button-on-color)}.ck.ck-button.ck-button-save,a.ck.ck-button.ck-button-save{color:var(--ck-color-button-save)}.ck.ck-button.ck-button-cancel,a.ck.ck-button.ck-button-cancel{color:var(--ck-color-button-cancel)}.ck.ck-button-action,a.ck.ck-button-action{background:var(--ck-color-button-action-background)}.ck.ck-button-action:not(.ck-disabled):hover,a.ck.ck-button-action:not(.ck-disabled):hover{background:var(--ck-color-button-action-hover-background)}.ck.ck-button-action:not(.ck-disabled):active,a.ck.ck-button-action:not(.ck-disabled):active{background:var(--ck-color-button-action-active-background)}.ck.ck-button-action.ck-disabled,a.ck.ck-button-action.ck-disabled{background:var(--ck-color-button-action-disabled-background)}.ck.ck-button-action,a.ck.ck-button-action{color:var(--ck-color-button-action-text)}.ck.ck-button-bold,a.ck.ck-button-bold{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/button.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/button.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/mixins/_button.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAQA,6BAMC,kBAAmB,CADnB,mBAAoB,CADpB,iBAAkB,CCHlB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD0BD,CA9BA,iDASE,oBAqBF,CA9BA,iDAaE,qBAiBF,CAdC,iEACC,YACD,CAGC,yGACC,oBACD,CAID,iFACC,sBACD,CEzBD,6BCAC,oDD2ID,CCxIE,6EACC,0DACD,CAEA,+EACC,2DACD,CAID,qDACC,6DACD,CDfD,6BEDC,eF4ID,CA3IA,wIEGE,qCFwIF,CA3IA,6BA6BC,uBAAwB,CANxB,4BAA6B,CAjB7B,cAAe,CAcf,iBAAkB,CAHlB,aAAc,CAJd,4CAA6C,CAD7C,2CAA4C,CAJ5C,8BAA+B,CAC/B,iBAAkB,CAiBlB,4DAA8D,CAnB9D,qBAAsB,CAFtB,kBAsID,CA5GC,oFGhCA,2BAA2B,CCF3B,2CAA8B,CDC9B,YHqCA,CAIC,kJAEC,aACD,CAGD,iEAIC,aAAc,CACd,cAAe,CAHf,iBAAkB,CAClB,mBAAoB,CAMpB,qBASD,CAlBA,qFAYE,eAMF,CAlBA,qFAgBE,gBAEF,CAEA,yEACC,aAWD,CAZA,6FAIE,mCAQF,CAZA,6FAQE,oCAIF,CAZA,yEAWC,UACD,CAIC,oIIpFD,oDJwFC,CAOA,gLK/FD,kCLiGC,CAEA,iGACC,UACD,CAGD,qEACC,yDAcD,CAXC,2HAEE,4CAA+C,CAC/C,oCAOF,CAVA,2HAQE,mCAAoC,CADpC,6CAGF,CAKA,mHACC,WACD,CAID,yCC9HA,+CDkIA,CC/HC,yFACC,qDACD,CAEA,2FACC,sDACD,CAID,iEACC,wDACD,CD+GA,yCAGC,qCACD,CAEA,2DACC,iCACD,CAEA,+DACC,mCACD,CAID,2CC9IC,mDDmJD,CChJE,2FACC,yDACD,CAEA,6FACC,0DACD,CAID,mEACC,4DACD,CD+HD,2CAIC,wCACD,CAEA,uCAEC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";
@import "../../mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-unselectable;

	position: relative;
	display: inline-flex;
	align-items: center;

	@mixin ck-dir ltr {
		justify-content: left;
	}

	@mixin ck-dir rtl {
		justify-content: right;
	}

	& .ck-button__label {
		display: none;
	}

	&.ck-button_with-text {
		& .ck-button__label {
			display: inline-block;
		}
	}

	/* Center the icon horizontally in a button without text. */
	&:not(.ck-button_with-text)  {
		justify-content: center;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-button,
a.ck.ck-button {
	@mixin ck-button-colors --ck-color-button-default;
	@mixin ck-rounded-corners;

	white-space: nowrap;
	cursor: default;
	vertical-align: middle;
	padding: var(--ck-spacing-tiny);
	text-align: center;

	/* A very important piece of styling. Go to variable declaration to learn more. */
	min-width: var(--ck-ui-component-min-height);
	min-height: var(--ck-ui-component-min-height);

	/* Normalize the height of the line. Removing this will break consistent height
	among text and text-less buttons (with icons). */
	line-height: 1;

	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	/* Avoid flickering when the foucs border shows up. */
	border: 1px solid transparent;

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .2s ease-in-out, border .2s ease-in-out;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/189 */
	-webkit-appearance: none;

	&:active,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	/* Allow icon coloring using the text "color" property. */
	& .ck-button__icon {
		& use,
		& use * {
			color: inherit;
		}
	}

	& .ck-button__label {
		/* Enable font size inheritance, which allows fluid UI scaling. */
		font-size: inherit;
		font-weight: inherit;
		color: inherit;
		cursor: inherit;

		/* Must be consistent with .ck-icon's vertical align. Otherwise, buttons with and
		without labels (but with icons) have different sizes in Chrome */
		vertical-align: middle;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}
	}

	& .ck-button__keystroke {
		color: inherit;

		@mixin ck-dir ltr {
			margin-left: var(--ck-spacing-large);
		}

		@mixin ck-dir rtl {
			margin-right: var(--ck-spacing-large);
		}

		opacity: .5;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
	&.ck-disabled {
		&:active,
		&:focus {
			/* The disabled button should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}

		& .ck-button__icon {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
		& .ck-button__label {
			@mixin ck-disabled;
		}

		& .ck-button__keystroke {
			opacity: .3;
		}
	}

	&.ck-button_with-text {
		padding: var(--ck-spacing-tiny) var(--ck-spacing-standard);

		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__icon {
			@mixin ck-dir ltr {
				margin-left: calc(-1 * var(--ck-spacing-small));
				margin-right: var(--ck-spacing-small);
			}

			@mixin ck-dir rtl {
				margin-right: calc(-1 * var(--ck-spacing-small));
				margin-left: var(--ck-spacing-small);
			}
		}
	}

	&.ck-button_with-keystroke {
		/* stylelint-disable-next-line no-descending-specificity */
		& .ck-button__label {
			flex-grow: 1;
		}
	}

	/* A style of the button which is currently on, e.g. its feature is active. */
	&.ck-on {
		@mixin ck-button-colors --ck-color-button-on;

		color: var(--ck-color-button-on-color);
	}

	&.ck-button-save {
		color: var(--ck-color-button-save);
	}

	&.ck-button-cancel {
		color: var(--ck-color-button-cancel);
	}
}

/* A style of the button which handles the primary action. */
.ck.ck-button-action,
a.ck.ck-button-action {
	@mixin ck-button-colors --ck-color-button-action;

	color: var(--ck-color-button-action-text);
}

.ck.ck-button-bold,
a.ck.ck-button-bold {
	font-weight: bold;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements a button of given background color.
 *
 * @param {String} $background - Background color of the button.
 * @param {String} $border - Border color of the button.
 */
@define-mixin ck-button-colors $prefix {
	background: var($(prefix)-background);

	&:not(.ck-disabled) {
		&:hover {
			background: var($(prefix)-hover-background);
		}

		&:active {
			background: var($(prefix)-active-background);
		}
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/98 */
	&.ck-disabled {
		background: var($(prefix)-disabled-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const S=v},4391:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{display:block}:root{--ck-switch-button-toggle-width:2.6153846154em;--ck-switch-button-toggle-inner-size:calc(1.07692em + 1px);--ck-switch-button-translation:calc(var(--ck-switch-button-toggle-width) - var(--ck-switch-button-toggle-inner-size) - 2px);--ck-switch-button-inner-hover-shadow:0 0 0 5px var(--ck-color-switch-button-inner-shadow)}.ck.ck-button.ck-switchbutton,.ck.ck-button.ck-switchbutton.ck-on:active,.ck.ck-button.ck-switchbutton.ck-on:focus,.ck.ck-button.ck-switchbutton.ck-on:hover,.ck.ck-button.ck-switchbutton:active,.ck.ck-button.ck-switchbutton:focus,.ck.ck-button.ck-switchbutton:hover{background:transparent;color:inherit}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__label{margin-right:calc(var(--ck-spacing-large)*2)}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__label{margin-left:calc(var(--ck-spacing-large)*2)}.ck.ck-button.ck-switchbutton .ck-button__toggle{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle,.ck.ck-button.ck-switchbutton .ck-button__toggle.ck-rounded-corners{border-radius:var(--ck-border-radius)}[dir=ltr] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-left:auto}[dir=rtl] .ck.ck-button.ck-switchbutton .ck-button__toggle{margin-right:auto}.ck.ck-button.ck-switchbutton .ck-button__toggle{background:var(--ck-color-switch-button-off-background);border:1px solid transparent;transition:background .4s ease,box-shadow .2s ease-in-out,outline .2s ease-in-out;width:var(--ck-switch-button-toggle-width)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{border-radius:0}.ck-rounded-corners .ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner,.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner.ck-rounded-corners{border-radius:var(--ck-border-radius);border-radius:calc(var(--ck-border-radius)*.5)}.ck.ck-button.ck-switchbutton .ck-button__toggle .ck-button__toggle__inner{background:var(--ck-color-switch-button-inner-background);height:var(--ck-switch-button-toggle-inner-size);transition:all .3s ease;width:var(--ck-switch-button-toggle-inner-size)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover{background:var(--ck-color-switch-button-off-hover-background)}.ck.ck-button.ck-switchbutton .ck-button__toggle:hover .ck-button__toggle__inner{box-shadow:var(--ck-switch-button-inner-hover-shadow)}.ck.ck-button.ck-switchbutton.ck-disabled .ck-button__toggle{opacity:var(--ck-disabled-opacity)}.ck.ck-button.ck-switchbutton:focus{border-color:transparent;box-shadow:none;outline:none}.ck.ck-button.ck-switchbutton:focus .ck-button__toggle{box-shadow:0 0 0 1px var(--ck-color-base-background),0 0 0 5px var(--ck-color-focus-outer-shadow);outline:var(--ck-focus-ring);outline-offset:1px}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle{background:var(--ck-color-switch-button-on-background)}.ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle:hover{background:var(--ck-color-switch-button-on-hover-background)}[dir=ltr] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(var( --ck-switch-button-translation ))}[dir=rtl] .ck.ck-button.ck-switchbutton.ck-on .ck-button__toggle .ck-button__toggle__inner{transform:translateX(calc(var( --ck-switch-button-translation )*-1))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/button/switchbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AASE,4HACC,aACD,CCCF,MAEC,8CAA+C,CAE/C,0DAAgE,CAChE,2HAIC,CACD,0FACD,CAOC,0QAEC,sBAAuB,CADvB,aAED,CAEA,0DAGE,4CAOF,CAVA,0DAQE,2CAEF,CAEA,iDCpCA,eD4EA,CAxCA,yIChCC,qCDwED,CAxCA,2DAKE,gBAmCF,CAxCA,2DAUE,iBA8BF,CAxCA,iDAkBC,uDAAwD,CAFxD,4BAA6B,CAD7B,iFAAsF,CAEtF,0CAuBD,CApBC,2ECxDD,eDmEC,CAXA,6LCpDA,qCAAsC,CDsDpC,8CASF,CAXA,2EAOC,yDAA0D,CAD1D,gDAAiD,CAIjD,uBAA0B,CAL1B,+CAMD,CAEA,uDACC,6DAKD,CAHC,iFACC,qDACD,CAIF,6DEhFA,kCFkFA,CAGA,oCACC,wBAAyB,CAEzB,eAAgB,CADhB,YAQD,CALC,uDACC,iGAAmG,CAEnG,4BAA6B,CAD7B,kBAED,CAKA,uDACC,sDAkBD,CAhBC,6DACC,4DACD,CAEA,2FAKE,2DAMF,CAXA,2FASE,oEAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-button.ck-switchbutton {
	& .ck-button__toggle {
		display: block;

		& .ck-button__toggle__inner {
			display: block;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

/* Note: To avoid rendering issues (aliasing) but to preserve the responsive nature
of the component, floating–point numbers have been used which, for the default font size
(see: --ck-font-size-base), will generate simple integers. */
:root {
	/* 34px at 13px font-size */
	--ck-switch-button-toggle-width: 2.6153846154em;
	/* 14px at 13px font-size */
	--ck-switch-button-toggle-inner-size: calc(1.0769230769em + 1px);
	--ck-switch-button-translation: calc(
		var(--ck-switch-button-toggle-width) -
		var(--ck-switch-button-toggle-inner-size) -
		2px /* Border */
	);
	--ck-switch-button-inner-hover-shadow: 0 0 0 5px var(--ck-color-switch-button-inner-shadow);
}

.ck.ck-button.ck-switchbutton {
	/* Unlike a regular button, the switch button text color and background should never change.
	 * Changing toggle switch (background, outline) is enough to carry the information about the
	 * state of the entire component (https://github.com/ckeditor/ckeditor5/issues/12519)
	 */
	&, &:hover, &:focus, &:active, &.ck-on:hover, &.ck-on:focus, &.ck-on:active {
		color: inherit;
		background: transparent;
	}

	& .ck-button__label {
		@mixin ck-dir ltr {
			/* Separate the label from the switch */
			margin-right: calc(2 * var(--ck-spacing-large));
		}

		@mixin ck-dir rtl {
			/* Separate the label from the switch */
			margin-left: calc(2 * var(--ck-spacing-large));
		}
	}

	& .ck-button__toggle {
		@mixin ck-rounded-corners;

		@mixin ck-dir ltr {
			/* Make sure the toggle is always to the right as far as possible. */
			margin-left: auto;
		}

		@mixin ck-dir rtl {
			/* Make sure the toggle is always to the left as far as possible. */
			margin-right: auto;
		}

		/* Apply some smooth transition to the box-shadow and border. */
		/* Gently animate the background color of the toggle switch */
		transition: background 400ms ease, box-shadow .2s ease-in-out, outline .2s ease-in-out;
		border: 1px solid transparent;
		width: var(--ck-switch-button-toggle-width);
		background: var(--ck-color-switch-button-off-background);

		& .ck-button__toggle__inner {
			@mixin ck-rounded-corners {
				border-radius: calc(.5 * var(--ck-border-radius));
			}

			width: var(--ck-switch-button-toggle-inner-size);
			height: var(--ck-switch-button-toggle-inner-size);
			background: var(--ck-color-switch-button-inner-background);

			/* Gently animate the inner part of the toggle switch */
			transition: all 300ms ease;
		}

		&:hover {
			background: var(--ck-color-switch-button-off-hover-background);

			& .ck-button__toggle__inner {
				box-shadow: var(--ck-switch-button-inner-hover-shadow);
			}
		}
	}

	&.ck-disabled .ck-button__toggle {
		@mixin ck-disabled;
	}

	/* Overriding default .ck-button:focus styles + an outline around the toogle */
	&:focus {
		border-color: transparent;
		outline: none;
		box-shadow: none;

		& .ck-button__toggle {
			box-shadow: 0 0 0 1px var(--ck-color-base-background), 0 0 0 5px var(--ck-color-focus-outer-shadow);
			outline-offset: 1px;
			outline: var(--ck-focus-ring);
		}
	}

	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-on {
		& .ck-button__toggle {
			background: var(--ck-color-switch-button-on-background);

			&:hover {
				background: var(--ck-color-switch-button-on-hover-background);
			}

			& .ck-button__toggle__inner {
				/*
				* Move the toggle switch to the right. It will be animated.
				*/
				@mixin ck-dir ltr {
					transform: translateX( var( --ck-switch-button-translation ) );
				}

				@mixin ck-dir rtl {
					transform: translateX( calc( -1 * var( --ck-switch-button-translation ) ) );
				}
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const S=v},25:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-collapsible.ck-collapsible_collapsed>.ck-collapsible__children{display:none}:root{--ck-collapsible-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-collapsible>.ck.ck-button{border-radius:0;color:inherit;font-weight:700;padding:var(--ck-list-button-padding);width:100%}.ck.ck-collapsible>.ck.ck-button:focus{background:transparent}.ck.ck-collapsible>.ck.ck-button:active,.ck.ck-collapsible>.ck.ck-button:hover:not(:focus),.ck.ck-collapsible>.ck.ck-button:not(:focus){background:transparent;border-color:transparent;box-shadow:none}.ck.ck-collapsible>.ck.ck-button>.ck-icon{margin-right:var(--ck-spacing-medium);width:var(--ck-collapsible-arrow-size)}.ck.ck-collapsible>.ck-collapsible__children{padding:var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large)}.ck.ck-collapsible.ck-collapsible_collapsed>.ck.ck-button .ck-icon{transform:rotate(-90deg)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/collapsible/collapsible.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/collapsible/collapsible.css"],names:[],mappings:"AAMC,sEACC,YACD,CCHD,MACC,yDACD,CAGC,iCAIC,eAAgB,CAChB,aAAc,CAHd,eAAiB,CACjB,qCAAsC,CAFtC,UAoBD,CAdC,uCACC,sBACD,CAEA,wIACC,sBAAuB,CACvB,wBAAyB,CACzB,eACD,CAEA,0CACC,qCAAsC,CACtC,sCACD,CAGD,6CACC,gFACD,CAGC,mEACC,wBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-collapsible.ck-collapsible_collapsed {
	& > .ck-collapsible__children {
		display: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-collapsible-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-collapsible {
	& > .ck.ck-button {
		width: 100%;
		font-weight: bold;
		padding: var(--ck-list-button-padding);
		border-radius: 0;
		color: inherit;

		&:focus {
			background: transparent;
		}

		&:active, &:not(:focus), &:hover:not(:focus) {
			background: transparent;
			border-color: transparent;
			box-shadow: none;
		}

		& > .ck-icon {
			margin-right: var(--ck-spacing-medium);
			width: var(--ck-collapsible-arrow-size);
		}
	}

	& > .ck-collapsible__children {
		padding: var(--ck-spacing-medium) var(--ck-spacing-large) var(--ck-spacing-large);
	}

	&.ck-collapsible_collapsed {
		& > .ck.ck-button .ck-icon {
			transform: rotate(-90deg);
		}
	}
}
`],sourceRoot:""}]);const S=v},7317:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-color-grid{display:grid}:root{--ck-color-grid-tile-size:24px;--ck-color-color-grid-check-icon:#166fd4}.ck.ck-color-grid{grid-gap:5px;padding:8px}.ck.ck-color-grid__tile{border:0;height:var(--ck-color-grid-tile-size);min-height:var(--ck-color-grid-tile-size);min-width:var(--ck-color-grid-tile-size);padding:0;transition:box-shadow .2s ease;width:var(--ck-color-grid-tile-size)}.ck.ck-color-grid__tile.ck-disabled{cursor:unset;transition:unset}.ck.ck-color-grid__tile.ck-color-selector__color-tile_bordered{box-shadow:0 0 0 1px var(--ck-color-base-border)}.ck.ck-color-grid__tile .ck.ck-icon{color:var(--ck-color-color-grid-check-icon);display:none}.ck.ck-color-grid__tile.ck-on{box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-base-text)}.ck.ck-color-grid__tile.ck-on .ck.ck-icon{display:block}.ck.ck-color-grid__tile.ck-on,.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){border:0}.ck.ck-color-grid__tile:focus:not(.ck-disabled),.ck.ck-color-grid__tile:hover:not(.ck-disabled){box-shadow:inset 0 0 0 1px var(--ck-color-base-background),0 0 0 2px var(--ck-color-focus-border)}.ck.ck-color-grid__label{padding:0 var(--ck-spacing-standard)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorgrid/colorgrid.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorgrid/colorgrid.css"],names:[],mappings:"AAKA,kBACC,YACD,CCAA,MACC,8BAA+B,CAK/B,wCACD,CAEA,kBACC,YAAa,CACb,WACD,CAEA,wBAOC,QAAS,CALT,qCAAsC,CAEtC,yCAA0C,CAD1C,wCAAyC,CAEzC,SAAU,CACV,8BAA+B,CAL/B,oCAyCD,CAjCC,oCACC,YAAa,CACb,gBACD,CAEA,+DACC,gDACD,CAEA,oCAEC,2CAA4C,CAD5C,YAED,CAEA,8BACC,8FAKD,CAHC,0CACC,aACD,CAGD,8HAIC,QACD,CAEA,gGAEC,iGACD,CAGD,yBACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-color-grid {
	display: grid;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-grid-tile-size: 24px;

	/* Not using global colors here because these may change but some colors in a pallette
	 * require special treatment. For instance, this ensures no matter what the UI text color is,
	 * the check icon will look good on the black color tile. */
	--ck-color-color-grid-check-icon: hsl(212, 81%, 46%);
}

.ck.ck-color-grid {
	grid-gap: 5px;
	padding: 8px;
}

.ck.ck-color-grid__tile {
	width: var(--ck-color-grid-tile-size);
	height: var(--ck-color-grid-tile-size);
	min-width: var(--ck-color-grid-tile-size);
	min-height: var(--ck-color-grid-tile-size);
	padding: 0;
	transition: .2s ease box-shadow;
	border: 0;

	&.ck-disabled {
		cursor: unset;
		transition: unset;
	}

	&.ck-color-selector__color-tile_bordered {
		box-shadow: 0 0 0 1px var(--ck-color-base-border);
	}

	& .ck.ck-icon {
		display: none;
		color: var(--ck-color-color-grid-check-icon);
	}

	&.ck-on {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-base-text);

		& .ck.ck-icon {
			display: block;
		}
	}

	&.ck-on,
	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		/* Disable the default .ck-button's border ring. */
		border: 0;
	}

	&:focus:not( .ck-disabled ),
	&:hover:not( .ck-disabled ) {
		box-shadow: inset 0 0 0 1px var(--ck-color-base-background), 0 0 0 2px var(--ck-color-focus-border);
	}
}

.ck.ck-color-grid__label {
	padding: 0 var(--ck-spacing-standard);
}
`],sourceRoot:""}]);const S=v},1905:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".color-picker-hex-input{width:max-content}.color-picker-hex-input .ck.ck-input{min-width:unset}.ck.ck-color-picker__row{display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between;margin:var(--ck-spacing-large) 0 0;width:unset}.ck.ck-color-picker__row .ck.ck-labeled-field-view{padding-top:unset}.ck.ck-color-picker__row .ck.ck-input-text{width:unset}.ck.ck-color-picker__row .ck-color-picker__hash-view{padding-right:var(--ck-spacing-medium);padding-top:var(--ck-spacing-tiny)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorpicker/colorpicker.css"],names:[],mappings:"AAKA,wBACC,iBAKD,CAHC,qCACC,eACD,CAGD,yBACC,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CACjB,6BAA8B,CAC9B,kCAAmC,CACnC,WAcD,CAZC,mDACC,iBACD,CAEA,2CACC,WACD,CAEA,qDAEC,sCAAuC,CADvC,kCAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.color-picker-hex-input {
	width: max-content;

	& .ck.ck-input {
		min-width: unset;
	}
}

.ck.ck-color-picker__row {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	justify-content: space-between;
	margin: var(--ck-spacing-large) 0 0;
	width: unset;

	& .ck.ck-labeled-field-view {
		padding-top: unset;
	}

	& .ck.ck-input-text {
		width: unset;
	}

	& .ck-color-picker__hash-view {
		padding-top: var(--ck-spacing-tiny);
		padding-right: var(--ck-spacing-medium);
	}
}
`],sourceRoot:""}]);const S=v},6309:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{align-items:center;display:flex}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{justify-content:flex-start}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{display:flex;flex-direction:row;justify-content:space-around}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-cancel,.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar .ck-button-save{flex:1}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker,.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__remove-color{width:100%}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker{border-bottom-left-radius:0;border-bottom-right-radius:0;padding:calc(var(--ck-spacing-standard)/2) var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker:not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-color-selector .ck-color-grids-fragment .ck-button.ck-color-selector__color-picker .ck.ck-icon{margin-left:var(--ck-spacing-standard)}.ck.ck-color-selector .ck-color-grids-fragment label.ck.ck-color-grid__label{font-weight:unset}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker{padding:8px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker{height:100px;min-width:180px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation){border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue){border-radius:0 0 var(--ck-border-radius) var(--ck-border-radius)}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(hue-pointer),.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-picker .hex-color-picker::part(saturation-pointer){height:15px;width:15px}.ck.ck-color-selector .ck-color-picker-fragment .ck.ck-color-selector_action-bar{padding:0 8px 8px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/colorselector/colorselector.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/colorselector/colorselector.css"],names:[],mappings:"AAUE,oLAGC,kBAAmB,CADnB,YAMD,CARA,wMAME,0BAEF,CAKA,iFACC,YAAa,CACb,kBAAmB,CACnB,4BAMD,CAJC,oMAEC,MACD,CCrBD,oLAEC,UACD,CAEA,0FAEC,2BAA4B,CAC5B,4BAA6B,CAF7B,qEAiBD,CAbC,sGACC,gDACD,CAEA,gHAEE,uCAMF,CARA,gHAME,sCAEF,CAGD,6EACC,iBACD,CAKA,oEACC,WAoBD,CAlBC,sFACC,YAAa,CACb,eAeD,CAbC,wGACC,iEACD,CAEA,iGACC,iEACD,CAEA,yNAGC,WAAY,CADZ,UAED,CAIF,iFACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			display: flex;
			align-items: center;

			@mixin ck-dir rtl {
				justify-content: flex-start;
			}
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-selector_action-bar {
			display: flex;
			flex-direction: row;
			justify-content: space-around;

			& .ck-button-save,
			& .ck-button-cancel {
				flex: 1
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-color-selector {
	/* View fragment with color grids. */
	& .ck-color-grids-fragment {
		& .ck-button.ck-color-selector__remove-color,
		& .ck-button.ck-color-selector__color-picker {
			width: 100%;
		}

		& .ck-button.ck-color-selector__color-picker {
			padding: calc(var(--ck-spacing-standard) / 2) var(--ck-spacing-standard);
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			& .ck.ck-icon {
				@mixin ck-dir ltr {
					margin-right: var(--ck-spacing-standard);
				}

				@mixin ck-dir rtl {
					margin-left: var(--ck-spacing-standard);
				}
			}
		}

		& label.ck.ck-color-grid__label {
			font-weight: unset;
		}
	}

	/* View fragment with a color picker. */
	& .ck-color-picker-fragment {
		& .ck.ck-color-picker {
			padding: 8px;

			& .hex-color-picker {
				height: 100px;
				min-width: 180px;

				&::part(saturation) {
					border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;
				}

				&::part(hue) {
					border-radius: 0 0 var(--ck-border-radius) var(--ck-border-radius);
				}

				&::part(saturation-pointer),
				&::part(hue-pointer) {
					width: 15px;
					height: 15px;
				}
			}
		}

		& .ck.ck-color-selector_action-bar {
			padding: 0 8px 8px;
		}
	}
}
`],sourceRoot:""}]);const S=v},9819:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-dialog-overlay{bottom:0;left:0;overscroll-behavior:none;position:fixed;right:0;top:0;user-select:none}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent{animation:none;background:none;pointer-events:none}.ck.ck-dialog{overscroll-behavior:none;position:absolute;width:fit-content}.ck.ck-dialog .ck.ck-form__header{flex-shrink:0}.ck.ck-dialog .ck.ck-form__header .ck-form__header__label{cursor:grab}.ck.ck-dialog-overlay.ck-dialog-overlay__transparent .ck.ck-dialog{pointer-events:all}:root{--ck-dialog-overlay-background-color:rgba(0,0,0,.5);--ck-dialog-drop-shadow:0px 0px 6px 2px rgba(0,0,0,.15);--ck-dialog-max-width:100vw;--ck-dialog-max-height:90vh;--ck-color-dialog-background:var(--ck-color-base-background);--ck-color-dialog-form-header-border:var(--ck-color-base-border)}.ck.ck-dialog-overlay{animation:ck-dialog-fade-in .3s;background:var(--ck-dialog-overlay-background-color);z-index:var(--ck-z-dialog)}.ck.ck-dialog{border-radius:0}.ck-rounded-corners .ck.ck-dialog,.ck.ck-dialog.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dialog{--ck-drop-shadow:var(--ck-dialog-drop-shadow);background:var(--ck-color-dialog-background);border:1px solid var(--ck-color-base-border);box-shadow:var(--ck-drop-shadow),0 0;max-height:var(--ck-dialog-max-height);max-width:var(--ck-dialog-max-width)}.ck.ck-dialog .ck.ck-form__header{border-bottom:1px solid var(--ck-color-dialog-form-header-border)}@keyframes ck-dialog-fade-in{0%{background:transparent}to{background:var(--ck-dialog-overlay-background-color)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialog.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,sBAKC,QAAS,CACT,MAAO,CAJP,wBAAyB,CAEzB,cAAe,CAGf,OAAQ,CACR,KAAM,CAPN,gBAcD,CALC,qDAEC,cAAe,CACf,eAAgB,CAFhB,mBAGD,CAGD,cACC,wBAAyB,CAEzB,iBAAkB,CADlB,iBAcD,CAXC,kCACC,aAKD,CAHC,0DACC,WACD,CAVF,mEAcE,kBAEF,CC7BA,MACC,mDAA2D,CAC3D,uDAA8D,CAC9D,2BAA4B,CAC5B,2BAA4B,CAC5B,4DAA6D,CAC7D,gEACD,CAEA,sBACC,+BAAgC,CAChC,oDAAqD,CACrD,0BACD,CAEA,cCbC,eD2BD,CAdA,mECTE,qCDuBF,CAdA,cAIC,6CAA8C,CAE9C,4CAA6C,CAG7C,4CAA6C,CExB7C,oCAA8B,CFsB9B,sCAAuC,CACvC,oCAMD,CAHC,kCACC,iEACD,CAGD,6BACC,GACC,sBACD,CAEA,GACC,oDACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog-overlay {
	user-select: none;
	overscroll-behavior: none;

	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	top: 0;

	&.ck-dialog-overlay__transparent {
		pointer-events: none;
		animation: none;
		background: none;
	}
}

.ck.ck-dialog {
	overscroll-behavior: none;
	width: fit-content;
	position: absolute;

	& .ck.ck-form__header  {
		flex-shrink: 0;

		& .ck-form__header__label {
			cursor: grab;
		}
	}

	@nest .ck.ck-dialog-overlay.ck-dialog-overlay__transparent & {
		pointer-events: all;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

:root {
	--ck-dialog-overlay-background-color: hsla( 0, 0%, 0%, .5 );
	--ck-dialog-drop-shadow: 0px 0px 6px 2px hsl(0deg 0% 0% / 15%);
	--ck-dialog-max-width: 100vw;
	--ck-dialog-max-height: 90vh;
	--ck-color-dialog-background: var(--ck-color-base-background);
	--ck-color-dialog-form-header-border: var(--ck-color-base-border);
}

.ck.ck-dialog-overlay {
	animation: ck-dialog-fade-in .3s;
	background: var(--ck-dialog-overlay-background-color);
	z-index: var(--ck-z-dialog);
}

.ck.ck-dialog {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	--ck-drop-shadow: var(--ck-dialog-drop-shadow);

	background: var(--ck-color-dialog-background);
	max-height: var(--ck-dialog-max-height);
	max-width: var(--ck-dialog-max-width);
	border: 1px solid var(--ck-color-base-border);

	& .ck.ck-form__header {
		border-bottom: 1px solid var(--ck-color-dialog-form-header-border);
	}
}

@keyframes ck-dialog-fade-in {
	0% {
		background: hsla( 0, 0%, 0%, 0 );
	}

	100% {
		background: var(--ck-dialog-overlay-background-color);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=v},9822:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-dialog .ck.ck-dialog__actions{display:flex;justify-content:flex-end;padding:var(--ck-spacing-large)}.ck.ck-dialog .ck.ck-dialog__actions>*+*{margin-left:var(--ck-spacing-large)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dialog/dialogactions.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dialog/dialogactions.css"],names:[],mappings:"AAMC,qCACC,YAAa,CACb,wBAAyB,CCDzB,+BDED,CCAC,yCACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		display: flex;
		justify-content: flex-end;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-dialog {
	& .ck.ck-dialog__actions {
		padding: var(--ck-spacing-large);

		& > * + * {
			margin-left: var(--ck-spacing-large);
		}
	}
}
`],sourceRoot:""}]);const S=v},8149:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,":root{--ck-dropdown-max-width:75vw}.ck.ck-dropdown{display:inline-block;position:relative}.ck.ck-dropdown .ck-dropdown__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-dropdown .ck-button.ck-dropdown__button{width:100%}.ck.ck-dropdown .ck-dropdown__panel{display:none;max-width:var(--ck-dropdown-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel-visible{display:inline-block}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw{bottom:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{bottom:auto;top:100%}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_ne,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_se{left:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sw{right:0}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_n,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_s{left:50%;transform:translateX(-50%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nmw,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_smw{left:75%;transform:translateX(-75%)}.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_nme,.ck.ck-dropdown .ck-dropdown__panel.ck-dropdown__panel_sme{left:25%;transform:translateX(-25%)}.ck.ck-toolbar .ck-dropdown__panel{z-index:calc(var(--ck-z-panel) + 1)}:root{--ck-dropdown-arrow-size:calc(var(--ck-icon-size)*0.5)}.ck.ck-dropdown{font-size:inherit}.ck.ck-dropdown .ck-dropdown__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-dropdown .ck-dropdown__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-dropdown .ck-dropdown__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}.ck.ck-dropdown.ck-disabled .ck-dropdown__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-dropdown .ck-button.ck-dropdown__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-dropdown .ck-button.ck-dropdown__button .ck-button__label{overflow:hidden;text-overflow:ellipsis;width:7em}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-disabled .ck-button__label{opacity:var(--ck-disabled-opacity)}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-dropdown__button_label-width_auto .ck-button__label{width:auto}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active{box-shadow:none}.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-off:active:focus,.ck.ck-dropdown .ck-button.ck-dropdown__button.ck-on:active:focus{box-shadow:var(--ck-focus-outer-shadow),0 0}.ck.ck-dropdown__panel{border-radius:0}.ck-rounded-corners .ck.ck-dropdown__panel,.ck.ck-dropdown__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-dropdown__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;min-width:100%}.ck.ck-dropdown__panel.ck-dropdown__panel_se{border-top-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_sw{border-top-right-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_ne{border-bottom-left-radius:0}.ck.ck-dropdown__panel.ck-dropdown__panel_nw{border-bottom-right-radius:0}.ck.ck-dropdown__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/dropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,MACC,4BACD,CAEA,gBACC,oBAAqB,CACrB,iBA2ED,CAzEC,oCACC,mBAAoB,CACpB,2BACD,CAGA,+CACC,UACD,CAEA,oCACC,YAAa,CAEb,sCAAuC,CAEvC,iBAAkB,CAHlB,yBA4DD,CAvDC,+DACC,oBACD,CAEA,mSAKC,WACD,CAEA,mSAUC,WAAY,CADZ,QAED,CAEA,oHAEC,MACD,CAEA,oHAEC,OACD,CAEA,kHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAEA,sHAGC,QAAS,CACT,0BACD,CAQF,mCACC,mCACD,CCpFA,MACC,sDACD,CAEA,gBAEC,iBA2ED,CAzEC,oCACC,mCACD,CAGC,8CAIC,sCAAuC,CAHvC,gCAID,CAIA,8CACC,+BAAgC,CAGhC,oCACD,CAGD,gDC/BA,kCDiCA,CAIE,mFAEC,oCACD,CAIA,mFAEC,qCACD,CAID,iEAEC,eAAgB,CAChB,sBAAuB,CAFvB,SAGD,CAGA,6EC1DD,kCD4DC,CAGA,qDACC,2BAA4B,CAC5B,4BACD,CAEA,sGACC,UACD,CAGA,yHAEC,eAKD,CAHC,qIE7EF,2CF+EE,CAKH,uBGlFC,eHkHD,CAhCA,qFG9EE,qCH8GF,CAhCA,uBAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CE1FT,oCAA8B,CF6F9B,cAuBD,CAnBC,6CACC,wBACD,CAEA,6CACC,yBACD,CAEA,6CACC,2BACD,CAEA,6CACC,4BACD,CAEA,6BACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-dropdown-max-width: 75vw;
}

.ck.ck-dropdown {
	display: inline-block;
	position: relative;

	& .ck-dropdown__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}

	/* Dropdown button should span horizontally, e.g. in vertical toolbars */
	& .ck-button.ck-dropdown__button {
		width: 100%;
	}

	& .ck-dropdown__panel {
		display: none;
		z-index: var(--ck-z-panel);
		max-width: var(--ck-dropdown-max-width);

		position: absolute;

		&.ck-dropdown__panel-visible {
			display: inline-block;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_n,
		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_nme {
			bottom: 100%;
		}

		&.ck-dropdown__panel_se,
		&.ck-dropdown__panel_sw,
		&.ck-dropdown__panel_smw,
		&.ck-dropdown__panel_sme,
		&.ck-dropdown__panel_s {
			/*
			 * Using transform: translate3d( 0, 100%, 0 ) causes blurry dropdown on Chrome 67-78+ on non-retina displays.
			 * See https://github.com/ckeditor/ckeditor5/issues/1053.
			 */
			top: 100%;
			bottom: auto;
		}

		&.ck-dropdown__panel_ne,
		&.ck-dropdown__panel_se {
			left: 0px;
		}

		&.ck-dropdown__panel_nw,
		&.ck-dropdown__panel_sw {
			right: 0px;
		}

		&.ck-dropdown__panel_s,
		&.ck-dropdown__panel_n {
			/* Positioning panels relative to the center of the button */
			left: 50%;
			transform: translateX(-50%);
		}

		&.ck-dropdown__panel_nmw,
		&.ck-dropdown__panel_smw {
			/* Positioning panels relative to the middle-west of the button */
			left: 75%;
			transform: translateX(-75%);
		}

		&.ck-dropdown__panel_nme,
		&.ck-dropdown__panel_sme {
			/* Positioning panels relative to the middle-east of the button */
			left: 25%;
			transform: translateX(-25%);
		}
	}
}

/*
 * Toolbar dropdown panels should be always above the UI (eg. other dropdown panels) from the editor's content.
 * See https://github.com/ckeditor/ckeditor5/issues/7874
 */
.ck.ck-toolbar .ck-dropdown__panel {
	z-index: calc( var(--ck-z-panel) + 1 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-dropdown-arrow-size: calc(0.5 * var(--ck-icon-size));
}

.ck.ck-dropdown {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-dropdown__arrow {
		width: var(--ck-dropdown-arrow-size);
	}

	@mixin ck-dir ltr {
		& .ck-dropdown__arrow {
			right: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& .ck-dropdown__arrow {
			left: var(--ck-spacing-standard);

			/* A space to accommodate the triangle. */
			margin-right: var(--ck-spacing-small);
		}
	}

	&.ck-disabled .ck-dropdown__arrow {
		@mixin ck-disabled;
	}

	& .ck-button.ck-dropdown__button {
		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				/* Make sure dropdowns with just an icon have the right inner spacing */
				padding-right: var(--ck-spacing-small);
			}
		}

		/* #23 */
		& .ck-button__label {
			width: 7em;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/70 */
		&.ck-disabled .ck-button__label {
			@mixin ck-disabled;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/816 */
		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		&.ck-dropdown__button_label-width_auto .ck-button__label {
			width: auto;
		}

		/* https://github.com/ckeditor/ckeditor5/issues/8699 */
		&.ck-off:active,
		&.ck-on:active {
			box-shadow: none;

			&:focus {
				@mixin ck-box-shadow var(--ck-focus-outer-shadow);
			}
		}
	}
}

.ck.ck-dropdown__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;

	/* Make sure the panel is at least as wide as the drop-down's button. */
	min-width: 100%;

	/* Disabled corner border radius to be consistent with the .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-dropdown__panel_se {
		border-top-left-radius: 0;
	}

	&.ck-dropdown__panel_sw {
		border-top-right-radius: 0;
	}

	&.ck-dropdown__panel_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-dropdown__panel_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=v},3629:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-dropdown>.ck-dropdown__panel>.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:first-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-bottom-left-radius:0;border-bottom-right-radius:0;border-top-left-radius:0}.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button{border-radius:0}.ck-rounded-corners .ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button,.ck.ck-dropdown>.ck-dropdown__panel>.ck-list .ck-list__item:last-child>.ck-button.ck-rounded-corners{border-radius:var(--ck-border-radius);border-top-left-radius:0;border-top-right-radius:0}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/listdropdown.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,6CCIC,eDqBD,CAzBA,iICQE,qCAAsC,CDJtC,wBAqBF,CAfE,mFCND,eDYC,CANA,6MCFA,qCAAsC,CDKpC,2BAA4B,CAC5B,4BAA6B,CAF7B,wBAIF,CAEA,kFCdD,eDmBC,CALA,2MCVA,qCAAsC,CDYpC,wBAAyB,CACzB,yBAEF",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-dropdown > .ck-dropdown__panel > .ck-list {
	/* Disabled radius of top-left border to be consistent with .dropdown__button
	https://github.com/ckeditor/ckeditor5/issues/816 */
	@mixin ck-rounded-corners {
		border-top-left-radius: 0;
	}

	/* Make sure the button belonging to the first/last child of the list goes well with the
	border radius of the entire panel. */
	& .ck-list__item {
		&:first-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-bottom-left-radius: 0;
				border-bottom-right-radius: 0;
			}
		}

		&:last-child > .ck-button {
			@mixin ck-rounded-corners {
				border-top-left-radius: 0;
				border-top-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=v},1792:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,'.ck.ck-splitbutton{font-size:inherit}.ck.ck-splitbutton .ck-splitbutton__action:focus{z-index:calc(var(--ck-z-default) + 1)}:root{--ck-color-split-button-hover-background:#ebebeb;--ck-color-split-button-hover-border:#b3b3b3}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-right-radius:unset;border-top-right-radius:unset}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__action{border-bottom-left-radius:unset;border-top-left-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow{min-width:unset}[dir=ltr] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-left-radius:unset;border-top-left-radius:unset}[dir=rtl] .ck.ck-splitbutton>.ck-splitbutton__arrow{border-bottom-right-radius:unset;border-top-right-radius:unset}.ck.ck-splitbutton>.ck-splitbutton__arrow svg{width:var(--ck-dropdown-arrow-size)}.ck.ck-splitbutton>.ck-splitbutton__arrow:not(:focus){border-bottom-width:0;border-top-width:0}.ck.ck-splitbutton.ck-splitbutton_open>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover),.ck.ck-splitbutton:hover>.ck-button:not(.ck-on):not(.ck-disabled):not(:hover){background:var(--ck-color-split-button-hover-background)}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{background-color:var(--ck-color-split-button-hover-border);content:"";height:100%;position:absolute;width:1px}.ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:focus:after,.ck.ck-splitbutton:hover>.ck-splitbutton__arrow:focus:after{--ck-color-split-button-hover-border:var(--ck-color-focus-border)}[dir=ltr] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=ltr] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{left:-1px}[dir=rtl] .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow:not(.ck-disabled):after,[dir=rtl] .ck.ck-splitbutton:hover>.ck-splitbutton__arrow:not(.ck-disabled):after{right:-1px}.ck.ck-splitbutton.ck-splitbutton_open{border-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__action,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__action{border-bottom-left-radius:0}.ck-rounded-corners .ck.ck-splitbutton.ck-splitbutton_open>.ck-splitbutton__arrow,.ck.ck-splitbutton.ck-splitbutton_open.ck-rounded-corners>.ck-splitbutton__arrow{border-bottom-right-radius:0}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/splitbutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAKA,mBAEC,iBAKD,CAHC,iDACC,qCACD,CCJD,MACC,gDAAyD,CACzD,4CACD,CAMC,oIAKE,gCAAiC,CADjC,6BASF,CAbA,oIAWE,+BAAgC,CADhC,4BAGF,CAEA,0CAGC,eAiBD,CApBA,oDAQE,+BAAgC,CADhC,4BAaF,CApBA,oDAcE,gCAAiC,CADjC,6BAOF,CAHC,8CACC,mCACD,CAKD,sDAEC,qBAAwB,CADxB,kBAED,CAQC,0KACC,wDACD,CAIA,8JAKC,0DAA2D,CAJ3D,UAAW,CAGX,WAAY,CAFZ,iBAAkB,CAClB,SAGD,CAGA,sIACC,iEACD,CAGC,kLACC,SACD,CAIA,kLACC,UACD,CAMF,uCCzFA,eDmGA,CAVA,qHCrFC,qCD+FD,CARE,qKACC,2BACD,CAEA,mKACC,4BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-splitbutton {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	& .ck-splitbutton__action:focus {
		z-index: calc(var(--ck-z-default) + 1);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

:root {
	--ck-color-split-button-hover-background: hsl(0, 0%, 92%);
	--ck-color-split-button-hover-border: hsl(0, 0%, 70%);
}

.ck.ck-splitbutton {
	/*
	 * Note: ck-rounded and ck-dir mixins don't go together (because they both use @nest).
	 */
	&:hover > .ck-splitbutton__action,
	&.ck-splitbutton_open > .ck-splitbutton__action {
		@nest [dir="ltr"] & {
			/* Don't round the action button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the action button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}
	}

	& > .ck-splitbutton__arrow {
		/* It's a text-less button and since the icon is positioned absolutely in such situation,
		it must get some arbitrary min-width. */
		min-width: unset;

		@nest [dir="ltr"] & {
			/* Don't round the arrow button on the left side */
			border-top-left-radius: unset;
			border-bottom-left-radius: unset;
		}

		@nest [dir="rtl"] & {
			/* Don't round the arrow button on the right side */
			border-top-right-radius: unset;
			border-bottom-right-radius: unset;
		}

		& svg {
			width: var(--ck-dropdown-arrow-size);
		}
	}

	/* Make sure the divider stretches 100% height of the button
	https://github.com/ckeditor/ckeditor5/issues/10936 */
	& > .ck-splitbutton__arrow:not(:focus) {
		border-top-width: 0px;
		border-bottom-width: 0px;
	}

	/* When the split button is "open" (the arrow is on) or being hovered, it should get some styling
	as a whole. The background of both buttons should stand out and there should be a visual
	separation between both buttons. */
	&.ck-splitbutton_open,
	&:hover {
		/* When the split button hovered as a whole, not as individual buttons. */
		& > .ck-button:not(.ck-on):not(.ck-disabled):not(:hover) {
			background: var(--ck-color-split-button-hover-background);
		}

		/* Splitbutton separator needs to be set with the ::after pseudoselector
		to display properly the borders on focus */
		& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
			content: '';
			position: absolute;
			width: 1px;
			height: 100%;
			background-color: var(--ck-color-split-button-hover-border);
		}

		/* Make sure the divider between the buttons looks fine when the button is focused */
		& > .ck-splitbutton__arrow:focus::after {
			--ck-color-split-button-hover-border: var(--ck-color-focus-border);
		}

		@nest [dir="ltr"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				left: -1px;
			}
		}

		@nest [dir="rtl"] & {
			& > .ck-splitbutton__arrow:not(.ck-disabled)::after {
				right: -1px;
			}
		}
	}

	/* Don't round the bottom left and right corners of the buttons when "open"
	https://github.com/ckeditor/ckeditor5/issues/816 */
	&.ck-splitbutton_open {
		@mixin ck-rounded-corners {
			& > .ck-splitbutton__action {
				border-bottom-left-radius: 0;
			}

			& > .ck-splitbutton__arrow {
				border-bottom-right-radius: 0;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=v},1666:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,":root{--ck-toolbar-dropdown-max-width:60vw}.ck.ck-toolbar-dropdown>.ck-dropdown__panel{max-width:var(--ck-toolbar-dropdown-max-width);width:max-content}.ck.ck-toolbar-dropdown>.ck-dropdown__panel .ck-button:focus{z-index:calc(var(--ck-z-default) + 1)}.ck.ck-toolbar-dropdown .ck-toolbar{border:0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/dropdown/toolbardropdown.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/dropdown/toolbardropdown.css"],names:[],mappings:"AAKA,MACC,oCACD,CAEA,4CAGC,8CAA+C,CAD/C,iBAQD,CAJE,6DACC,qCACD,CCZF,oCACC,QACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-dropdown-max-width: 60vw;
}

.ck.ck-toolbar-dropdown > .ck-dropdown__panel {
	/* https://github.com/ckeditor/ckeditor5/issues/5586 */
	width: max-content;
	max-width: var(--ck-toolbar-dropdown-max-width);

	& .ck-button {
		&:focus {
			z-index: calc(var(--ck-z-default) + 1);
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-toolbar-dropdown .ck-toolbar {
	border: 0;
}
`],sourceRoot:""}]);const S=v},8527:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,":root{--ck-accessibility-help-dialog-max-width:600px;--ck-accessibility-help-dialog-max-height:400px;--ck-accessibility-help-dialog-border-color:#ccced1;--ck-accessibility-help-dialog-code-background-color:#ededed;--ck-accessibility-help-dialog-kbd-shadow-color:#9c9c9c}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{border:1px solid transparent;max-height:var(--ck-accessibility-help-dialog-max-height);max-width:var(--ck-accessibility-help-dialog-max-width);overflow:auto;padding:var(--ck-spacing-large);user-select:text}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content{*{white-space:normal}}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content .ck-label{display:none}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3{font-size:1.2em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4{font-size:1em;font-weight:700}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h3,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content h4,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content p,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content table{margin:1em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl{border-bottom:none;border-top:1px solid var(--ck-accessibility-help-dialog-border-color);display:grid;grid-template-columns:2fr 1fr}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{border-bottom:1px solid var(--ck-accessibility-help-dialog-border-color);padding:.4em 0}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dt{grid-column-start:1}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content dl dd{grid-column-start:2;text-align:right}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code,.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{background:var(--ck-accessibility-help-dialog-code-background-color);border-radius:2px;display:inline-block;font-size:.9em;line-height:1;padding:.4em;text-align:center;vertical-align:middle}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content code{font-family:monospace}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd{box-shadow:0 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);margin:0 1px;min-width:1.8em}.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content kbd+kbd{margin-left:2px}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/accessibilityhelp.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAQA,MACC,8CAA+C,CAC/C,+CAAgD,CAChD,mDAA8D,CAC9D,4DAAyE,CACzE,uDACD,CAEA,wEAOC,4BAA6B,CAJ7B,yDAA0D,CAD1D,uDAAwD,CAExD,aAAc,CAHd,+BAAgC,CAIhC,gBAgFD,CA5EC,8ECdA,2BAA2B,CCF3B,2CAA8B,CDC9B,YDkBA,CAZD,wEAcC,EACC,kBACD,CAqED,CAlEC,kFACC,YACD,CAEA,2EAEC,eAAgB,CADhB,eAED,CAEA,2EAEC,aAAc,CADd,eAED,CAEA,8SAIC,YACD,CAEA,2EAIC,kBAAmB,CADnB,qEAAsE,CAFtE,YAAa,CACb,6BAiBD,CAbC,4JACC,wEAAyE,CACzE,cACD,CAEA,8EACC,mBACD,CAEA,8EACC,mBAAoB,CACpB,gBACD,CAGD,yJAEC,oEAAqE,CAIrE,iBAAkB,CALlB,oBAAqB,CAOrB,cAAe,CAHf,aAAc,CAFd,YAAa,CAIb,iBAAkB,CAHlB,qBAKD,CAEA,6EACC,qBACD,CAEA,4EAEC,yEAA4E,CAC5E,YAAa,CAFb,eAOD,CAHC,gFACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-accessibility-help-dialog-max-width: 600px;
	--ck-accessibility-help-dialog-max-height: 400px;
	--ck-accessibility-help-dialog-border-color: hsl(220, 6%, 81%);
	--ck-accessibility-help-dialog-code-background-color: hsl(0deg 0% 92.94%);
	--ck-accessibility-help-dialog-kbd-shadow-color: hsl(0deg 0% 61%);
}

.ck.ck-accessibility-help-dialog .ck-accessibility-help-dialog__content {
	padding: var(--ck-spacing-large);
	max-width: var(--ck-accessibility-help-dialog-max-width);
	max-height: var(--ck-accessibility-help-dialog-max-height);
	overflow: auto;
	user-select: text;

	border: 1px solid transparent;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	* {
		white-space: normal;
	}

	/* Hide the main label of the content container. */
	& .ck-label {
		display: none;
	}

	& h3 {
		font-weight: bold;
		font-size: 1.2em;
	}

	& h4 {
		font-weight: bold;
		font-size: 1em;
	}

	& p,
	& h3,
	& h4,
	& table {
		margin: 1em 0;
	}

	& dl {
		display: grid;
		grid-template-columns: 2fr 1fr;
		border-top: 1px solid var(--ck-accessibility-help-dialog-border-color);
		border-bottom: none;

		& dt, & dd {
			border-bottom: 1px solid var(--ck-accessibility-help-dialog-border-color);
			padding: .4em 0;
		}

		& dt {
			grid-column-start: 1;
		}

		& dd {
			grid-column-start: 2;
			text-align: right;
		}
	}

	& kbd, & code {
		display: inline-block;
		background: var(--ck-accessibility-help-dialog-code-background-color);
		padding: .4em;
		vertical-align: middle;
		line-height: 1;
		border-radius: 2px;
		text-align: center;
		font-size: .9em;
	}

	& code {
		font-family: monospace;
	}

	& kbd {
		min-width: 1.8em;
		box-shadow: 0px 1px 1px var(--ck-accessibility-help-dialog-kbd-shadow-color);
		margin: 0 1px;

		& + kbd {
			margin-left: 2px;
		}
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=v},1185:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,":root{--ck-color-editable-blur-selection:#d9d9d9}.ck.ck-editor__editable:not(.ck-editor__nested-editable){border-radius:0}.ck-rounded-corners .ck.ck-editor__editable:not(.ck-editor__nested-editable),.ck.ck-editor__editable.ck-rounded-corners:not(.ck-editor__nested-editable){border-radius:var(--ck-border-radius)}.ck.ck-editor__editable.ck-focused:not(.ck-editor__nested-editable){border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck.ck-editor__editable_inline{border:1px solid transparent;overflow:auto;padding:0 var(--ck-spacing-standard)}.ck.ck-editor__editable_inline[dir=ltr]{text-align:left}.ck.ck-editor__editable_inline[dir=rtl]{text-align:right}.ck.ck-editor__editable_inline>:first-child{margin-top:var(--ck-spacing-large)}.ck.ck-editor__editable_inline>:last-child{margin-bottom:var(--ck-spacing-large)}.ck.ck-editor__editable_inline.ck-blurred ::selection{background:var(--ck-color-editable-blur-selection)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_n]:after{border-bottom-color:var(--ck-color-panel-background)}.ck.ck-balloon-panel.ck-toolbar-container[class*=arrow_s]:after{border-top-color:var(--ck-color-panel-background)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/editorui/editorui.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAWA,MACC,0CACD,CAEA,yDCJC,eDWD,CAPA,yJCAE,qCDOF,CAJC,oEEPA,2BAA2B,CCF3B,qCAA8B,CDC9B,YFWA,CAGD,+BAGC,4BAA6B,CAF7B,aAAc,CACd,oCA6BD,CA1BC,wCACC,eACD,CAEA,wCACC,gBACD,CAGA,4CACC,kCACD,CAGA,2CAKC,qCACD,CAGA,sDACC,kDACD,CAKA,gEACC,oDACD,CAIA,gEACC,iDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_disabled.css";
@import "../../../mixins/_shadow.css";
@import "../../../mixins/_focus.css";
@import "../../mixins/_button.css";

:root {
	--ck-color-editable-blur-selection: hsl(0, 0%, 85%);
}

.ck.ck-editor__editable:not(.ck-editor__nested-editable) {
	@mixin ck-rounded-corners;

	&.ck-focused {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);
	}
}

.ck.ck-editor__editable_inline {
	overflow: auto;
	padding: 0 var(--ck-spacing-standard);
	border: 1px solid transparent;

	&[dir="ltr"] {
		text-align: left;
	}

	&[dir="rtl"] {
		text-align: right;
	}

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/116 */
	& > *:first-child {
		margin-top: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/847 */
	& > *:last-child {
		/*
		 * This value should match with the default margins of the block elements (like .media or .image)
		 * to avoid a content jumping when the fake selection container shows up (See https://github.com/ckeditor/ckeditor5/issues/9825).
		 */
		margin-bottom: var(--ck-spacing-large);
	}

	/* https://github.com/ckeditor/ckeditor5/issues/6517 */
	&.ck-blurred ::selection {
		background: var(--ck-color-editable-blur-selection);
	}
}

/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/111 */
.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_n"] {
	&::after {
		border-bottom-color: var(--ck-color-panel-background);
	}
}

.ck.ck-balloon-panel.ck-toolbar-container[class*="arrow_s"] {
	&::after {
		border-top-color: var(--ck-color-panel-background);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=v},7913:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-form__header{align-items:center;display:flex;flex-direction:row;flex-wrap:nowrap;justify-content:space-between}.ck.ck-form__header h2.ck-form__header__label{flex-grow:1}:root{--ck-form-header-height:44px}.ck.ck-form__header{border-bottom:1px solid var(--ck-color-base-border);height:var(--ck-form-header-height);line-height:var(--ck-form-header-height);padding:var(--ck-spacing-small) var(--ck-spacing-large)}[dir=ltr] .ck.ck-form__header>.ck-icon{margin-right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-form__header>.ck-icon{margin-left:var(--ck-spacing-medium)}.ck.ck-form__header .ck-form__header__label{--ck-font-size-base:15px;font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/formheader/formheader.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/formheader/formheader.css"],names:[],mappings:"AAKA,oBAIC,kBAAmB,CAHnB,YAAa,CACb,kBAAmB,CACnB,gBAAiB,CAEjB,6BAKD,CAHC,8CACC,WACD,CCPD,MACC,4BACD,CAEA,oBAIC,mDAAoD,CAFpD,mCAAoC,CACpC,wCAAyC,CAFzC,uDAmBD,CAdC,uCAEE,qCAMF,CARA,uCAME,oCAEF,CAEA,4CACC,wBAAyB,CACzB,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-form__header {
	display: flex;
	flex-direction: row;
	flex-wrap: nowrap;
	align-items: center;
	justify-content: space-between;

	& h2.ck-form__header__label {
		flex-grow: 1;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-form-header-height: 44px;
}

.ck.ck-form__header {
	padding: var(--ck-spacing-small) var(--ck-spacing-large);
	height: var(--ck-form-header-height);
	line-height: var(--ck-form-header-height);
	border-bottom: 1px solid var(--ck-color-base-border);

	& > .ck-icon {
		@mixin ck-dir ltr {
			margin-right: var(--ck-spacing-medium);
		}

		@mixin ck-dir rtl {
			margin-left: var(--ck-spacing-medium);
		}
	}

	& .ck-form__header__label {
		--ck-font-size-base: 15px;
		font-weight: bold;
	}
}
`],sourceRoot:""}]);const S=v},9529:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-highlighted-text mark{background:var(--ck-color-highlight-background);font-size:inherit;font-weight:inherit;line-height:inherit;vertical-align:initial}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/highlightedtext/highlightedtext.css"],names:[],mappings:"AAKA,6BACC,+CAAgD,CAIhD,iBAAkB,CAFlB,mBAAoB,CACpB,mBAAoB,CAFpB,sBAID",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-highlighted-text mark {
	background: var(--ck-color-highlight-background);
	vertical-align: initial;
	font-weight: inherit;
	line-height: inherit;
	font-size: inherit;
}
`],sourceRoot:""}]);const S=v},7621:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-icon{vertical-align:middle}:root{--ck-icon-size:calc(var(--ck-line-height-base)*var(--ck-font-size-normal))}.ck.ck-icon{font-size:.8333350694em;height:var(--ck-icon-size);width:var(--ck-icon-size);will-change:transform}.ck.ck-icon,.ck.ck-icon *{cursor:inherit}.ck.ck-icon.ck-icon_inherit-color,.ck.ck-icon.ck-icon_inherit-color *{color:inherit}.ck.ck-icon.ck-icon_inherit-color :not([fill]){fill:currentColor}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/icon/icon.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/icon/icon.css"],names:[],mappings:"AAKA,YACC,qBACD,CCFA,MACC,0EACD,CAEA,YAKC,uBAAwB,CAHxB,0BAA2B,CAD3B,yBAA0B,CAU1B,qBAoBD,CAlBC,0BALA,cAQA,CAMC,sEACC,aAMD,CAJC,+CAEC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-icon {
	vertical-align: middle;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-icon-size: calc(var(--ck-line-height-base) * var(--ck-font-size-normal));
}

.ck.ck-icon {
	width: var(--ck-icon-size);
	height: var(--ck-icon-size);

	/* Multiplied by the height of the line in "px" should give SVG "viewport" dimensions */
	font-size: .8333350694em;

	/* Inherit cursor style (#5). */
	cursor: inherit;

	/* This will prevent blurry icons on Firefox. See #340. */
	will-change: transform;

	& * {
		/* Inherit cursor style (#5). */
		cursor: inherit;
	}

	/* Allows dynamic coloring of an icon by inheriting its color from the parent. */
	&.ck-icon_inherit-color {
		color: inherit;

		& * {
			color: inherit;

			&:not([fill]) {
				/* Needed by FF. */
				fill: currentColor;
			}
		}
	}
}
`],sourceRoot:""}]);const S=v},253:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,":root{--ck-input-width:18em;--ck-input-text-width:var(--ck-input-width)}.ck.ck-input{border-radius:0}.ck-rounded-corners .ck.ck-input,.ck.ck-input.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-input{background:var(--ck-color-input-background);border:1px solid var(--ck-color-input-border);min-height:var(--ck-ui-component-min-height);min-width:var(--ck-input-width);padding:var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);transition:box-shadow .1s ease-in-out,border .1s ease-in-out}.ck.ck-input:focus{border:var(--ck-focus-ring);box-shadow:var(--ck-focus-outer-shadow),0 0;outline:none}.ck.ck-input[readonly]{background:var(--ck-color-input-disabled-background);border:1px solid var(--ck-color-input-disabled-border);color:var(--ck-color-input-disabled-text)}.ck.ck-input[readonly]:focus{box-shadow:var(--ck-focus-disabled-outer-shadow),0 0}.ck.ck-input.ck-error{animation:ck-input-shake .3s ease both;border-color:var(--ck-color-input-error-border)}.ck.ck-input.ck-error:focus{box-shadow:var(--ck-focus-error-outer-shadow),0 0}@keyframes ck-input-shake{20%{transform:translateX(-2px)}40%{transform:translateX(2px)}60%{transform:translateX(-1px)}80%{transform:translateX(1px)}}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/input/input.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AASA,MACC,qBAAsB,CAGtB,2CACD,CAEA,aCLC,eD2CD,CAtCA,iECDE,qCDuCF,CAtCA,aAGC,2CAA4C,CAC5C,6CAA8C,CAK9C,4CAA6C,CAH7C,+BAAgC,CADhC,6DAA8D,CAO9D,4DA0BD,CAxBC,mBEnBA,2BAA2B,CCF3B,2CAA8B,CDC9B,YFuBA,CAEA,uBAEC,oDAAqD,CADrD,sDAAuD,CAEvD,yCAMD,CAJC,6BG/BD,oDHkCC,CAGD,sBAEC,sCAAuC,CADvC,+CAMD,CAHC,4BGzCD,iDH2CC,CAIF,0BACC,IACC,0BACD,CAEA,IACC,yBACD,CAEA,IACC,0BACD,CAEA,IACC,yBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_focus.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-input-width: 18em;

	/* Backward compatibility. */
	--ck-input-text-width: var(--ck-input-width);
}

.ck.ck-input {
	@mixin ck-rounded-corners;

	background: var(--ck-color-input-background);
	border: 1px solid var(--ck-color-input-border);
	padding: var(--ck-spacing-extra-tiny) var(--ck-spacing-medium);
	min-width: var(--ck-input-width);

	/* This is important to stay of the same height as surrounding buttons */
	min-height: var(--ck-ui-component-min-height);

	/* Apply some smooth transition to the box-shadow and border. */
	transition: box-shadow .1s ease-in-out, border .1s ease-in-out;

	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-focus-outer-shadow);
	}

	&[readonly] {
		border: 1px solid var(--ck-color-input-disabled-border);
		background: var(--ck-color-input-disabled-background);
		color: var(--ck-color-input-disabled-text);

		&:focus {
			/* The read-only input should have a slightly less visible shadow when focused. */
			@mixin ck-box-shadow var(--ck-focus-disabled-outer-shadow);
		}
	}

	&.ck-error {
		border-color: var(--ck-color-input-error-border);
		animation: ck-input-shake .3s ease both;

		&:focus {
			@mixin ck-box-shadow var(--ck-focus-error-outer-shadow);
		}
	}
}

@keyframes ck-input-shake {
	20% {
		transform: translateX(-2px);
	}

	40% {
		transform: translateX(2px);
	}

	60% {
		transform: translateX(-1px);
	}

	80% {
		transform: translateX(1px);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=v},7801:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-label{display:block}.ck.ck-voice-label{display:none}.ck.ck-label{font-weight:700}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/label/label.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/label/label.css"],names:[],mappings:"AAKA,aACC,aACD,CAEA,mBACC,YACD,CCNA,aACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	display: block;
}

.ck.ck-voice-label {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-label {
	font-weight: bold;
}
`],sourceRoot:""}]);const S=v},4962:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{display:flex;position:relative}.ck.ck-labeled-field-view .ck.ck-label{display:block;position:absolute}:root{--ck-labeled-field-view-transition:.1s cubic-bezier(0,0,0.24,0.95);--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-spacing-medium);--ck-labeled-field-label-default-position-x:var(--ck-spacing-medium);--ck-labeled-field-label-default-position-y:calc(var(--ck-font-size-base)*0.6);--ck-color-labeled-field-label-background:var(--ck-color-base-background)}.ck.ck-labeled-field-view{border-radius:0}.ck-rounded-corners .ck.ck-labeled-field-view,.ck.ck-labeled-field-view.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper{width:100%}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{top:0}[dir=ltr] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{left:0;transform:translate(var(--ck-spacing-medium),-6px) scale(.75);transform-origin:0 0}[dir=rtl] .ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{right:0;transform:translate(calc(var(--ck-spacing-medium)*-1),-6px) scale(.75);transform-origin:100% 0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:var(--ck-color-labeled-field-label-background);font-weight:400;line-height:normal;max-width:100%;overflow:hidden;padding:0 calc(var(--ck-font-size-tiny)*.5);pointer-events:none;text-overflow:ellipsis;transition:transform var(--ck-labeled-field-view-transition),padding var(--ck-labeled-field-view-transition),background var(--ck-labeled-field-view-transition)}.ck.ck-labeled-field-view.ck-error .ck-input:not([readonly])+.ck.ck-label,.ck.ck-labeled-field-view.ck-error>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view .ck-labeled-field-view__status{font-size:var(--ck-font-size-small);margin-top:var(--ck-spacing-small);white-space:normal}.ck.ck-labeled-field-view .ck-labeled-field-view__status.ck-labeled-field-view__status_error{color:var(--ck-color-base-error)}.ck.ck-labeled-field-view.ck-disabled>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{color:var(--ck-color-input-disabled-text)}[dir=ltr] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=ltr] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(var(--ck-labeled-field-label-default-position-x),var(--ck-labeled-field-label-default-position-y)) scale(1)}[dir=rtl] .ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,[dir=rtl] .ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{transform:translate(calc(var(--ck-labeled-field-label-default-position-x)*-1),var(--ck-labeled-field-label-default-position-y)) scale(1)}.ck.ck-labeled-field-view.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label,.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error)>.ck.ck-labeled-field-view__input-wrapper>.ck.ck-label{background:transparent;max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width));padding:0}.ck.ck-labeled-field-view>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck.ck-button{background:transparent}.ck.ck-labeled-field-view.ck-labeled-field-view_empty>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown>.ck-button>.ck-button__label{opacity:0}.ck.ck-labeled-field-view.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder)>.ck.ck-labeled-field-view__input-wrapper>.ck-dropdown+.ck-label{max-width:calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard))}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/labeledfield/labeledfieldview.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAMC,mEACC,YAAa,CACb,iBACD,CAEA,uCACC,aAAc,CACd,iBACD,CCND,MACC,kEAAsE,CACtE,gFAAiF,CACjF,oEAAqE,CACrE,8EAAiF,CACjF,yEACD,CAEA,0BCLC,eD+GD,CA1GA,2FCDE,qCD2GF,CAvGC,mEACC,UAoCD,CAlCC,gFACC,KAgCD,CAjCA,0FAIE,MAAS,CAGT,6DAA+D,CAF/D,oBA4BF,CAjCA,0FAWE,OAAU,CAEV,sEAA0E,CAD1E,uBAqBF,CAjCA,gFAkBC,yDAA0D,CAG1D,eAAmB,CADnB,kBAAoB,CAOpB,cAAe,CAFf,eAAgB,CANhB,2CAA8C,CAH9C,mBAAoB,CAQpB,sBAAuB,CAKvB,+JAID,CAQA,mKACC,gCACD,CAGD,yDACC,mCAAoC,CACpC,kCAAmC,CAInC,kBAKD,CAHC,6FACC,gCACD,CAID,4OAEC,yCACD,CAIA,2XAGE,+HAYF,CAfA,2XAOE,wIAQF,CAfA,uWAaC,sBAAuB,CAFvB,iEAAkE,CAGlE,SACD,CAKA,8FACC,sBACD,CAGA,yIACC,SACD,CAGA,kMACC,8HACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-labeled-field-view {
	& > .ck.ck-labeled-field-view__input-wrapper {
		display: flex;
		position: relative;
	}

	& .ck.ck-label {
		display: block;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";
@import "../../../mixins/_rounded.css";

:root {
	--ck-labeled-field-view-transition: .1s cubic-bezier(0, 0, 0.24, 0.95);
	--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-x: var(--ck-spacing-medium);
	--ck-labeled-field-label-default-position-y: calc(0.6 * var(--ck-font-size-base));
	--ck-color-labeled-field-label-background: var(--ck-color-base-background);
}

.ck.ck-labeled-field-view {
	@mixin ck-rounded-corners;

	& > .ck.ck-labeled-field-view__input-wrapper {
		width: 100%;

		& > .ck.ck-label {
			top: 0px;

			@mixin ck-dir ltr {
				left: 0px;
				transform-origin: 0 0;
				/* By default, display the label scaled down above the field. */
				transform: translate(var(--ck-spacing-medium), -6px) scale(.75);
			}

			@mixin ck-dir rtl {
				right: 0px;
				transform-origin: 100% 0;
				transform: translate(calc(-1 * var(--ck-spacing-medium)), -6px) scale(.75);
			}

			pointer-events: none;

			background: var(--ck-color-labeled-field-label-background);
			padding: 0 calc(.5 * var(--ck-font-size-tiny));
			line-height: initial;
			font-weight: normal;

			/* Prevent overflow when the label is longer than the input */
			text-overflow: ellipsis;
			overflow: hidden;

			max-width: 100%;

			transition:
				transform var(--ck-labeled-field-view-transition),
				padding var(--ck-labeled-field-view-transition),
				background var(--ck-labeled-field-view-transition);
		}
	}

	&.ck-error {
		& > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
			color: var(--ck-color-base-error);
		}

		& .ck-input:not([readonly]) + .ck.ck-label {
			color: var(--ck-color-base-error);
		}
	}

	& .ck-labeled-field-view__status {
		font-size: var(--ck-font-size-small);
		margin-top: var(--ck-spacing-small);

		/* Let the info wrap to the next line to avoid stretching the layout horizontally.
		The status could be very long. */
		white-space: normal;

		&.ck-labeled-field-view__status_error {
			color: var(--ck-color-base-error);
		}
	}

	/* Disabled fields and fields that have no focus should fade out. */
	&.ck-disabled > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		color: var(--ck-color-input-disabled-text);
	}

	/* Fields that are disabled or not focused and without a placeholder should have full-sized labels. */
	/* stylelint-disable-next-line no-descending-specificity */
	&.ck-disabled.ck-labeled-field-view_empty:not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label,
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder):not(.ck-error) > .ck.ck-labeled-field-view__input-wrapper > .ck.ck-label {
		@mixin ck-dir ltr {
			transform: translate(var(--ck-labeled-field-label-default-position-x), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		@mixin ck-dir rtl {
			transform: translate(calc(-1 * var(--ck-labeled-field-label-default-position-x)), var(--ck-labeled-field-label-default-position-y)) scale(1);
		}

		/* Compensate for the default translate position. */
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width));

		background: transparent;
		padding: 0;
	}

	/*------ DropdownView integration ----------------------------------------------------------------------------------- */

	/* Make sure dropdown' background color in any of dropdown's state does not collide with labeled field. */
	& > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck.ck-button {
		background: transparent;
	}

	/* When the dropdown is "empty", the labeled field label replaces its label. */
	&.ck-labeled-field-view_empty > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown > .ck-button > .ck-button__label {
		opacity: 0;
	}

	/* Make sure the label of the empty, unfocused input does not cover the dropdown arrow. */
	&.ck-labeled-field-view_empty:not(.ck-labeled-field-view_focused):not(.ck-labeled-field-view_placeholder) > .ck.ck-labeled-field-view__input-wrapper > .ck-dropdown + .ck-label {
		max-width: calc(var(--ck-labeled-field-empty-unfocused-max-width) - var(--ck-dropdown-arrow-size) - var(--ck-spacing-standard));
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=v},5199:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-list{display:flex;flex-direction:column;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-list .ck-list__item,.ck.ck-list .ck-list__separator{display:block}.ck.ck-list .ck-list__item>:focus{position:relative;z-index:var(--ck-z-default)}:root{--ck-list-button-padding:calc(var(--ck-line-height-base)*0.11*var(--ck-font-size-base)) calc(var(--ck-line-height-base)*0.4*var(--ck-font-size-base))}.ck.ck-list{border-radius:0}.ck-rounded-corners .ck.ck-list,.ck.ck-list.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-list{background:var(--ck-color-list-background);list-style-type:none}.ck.ck-list__item{cursor:default;min-width:12em}.ck.ck-list__item>.ck-button{border-radius:0;min-height:unset;width:100%}[dir=ltr] .ck.ck-list__item>.ck-button{text-align:left}[dir=rtl] .ck.ck-list__item>.ck-button{text-align:right}.ck.ck-list__item>.ck-button{padding:var(--ck-list-button-padding)}.ck.ck-list__item>.ck-button:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on{background:var(--ck-color-list-button-on-background);color:var(--ck-color-list-button-on-text)}.ck.ck-list__item>.ck-button.ck-on:active{box-shadow:none}.ck.ck-list__item>.ck-button.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-on-background-focus)}.ck.ck-list__item>.ck-button.ck-on:focus:not(.ck-switchbutton):not(.ck-disabled){border-color:var(--ck-color-base-background)}.ck.ck-list__item>.ck-button:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background)}.ck.ck-list__item>.ck-switchbutton.ck-on{background:var(--ck-color-list-background);color:inherit}.ck.ck-list__item>.ck-switchbutton.ck-on:hover:not(.ck-disabled){background:var(--ck-color-list-button-hover-background);color:inherit}.ck-list .ck-list__group{padding-top:var(--ck-spacing-medium);:not(.ck-hidden)~&{border-top:1px solid var(--ck-color-base-border)}}.ck-list .ck-list__group>.ck-label{font-size:11px;font-weight:700;padding:var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium)}.ck.ck-list__separator{background:var(--ck-color-base-border);height:1px;width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/list/list.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/list/list.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,YAGC,YAAa,CACb,qBAAsB,CCFtB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBDaD,CAZC,2DAEC,aACD,CAKA,kCACC,iBAAkB,CAClB,2BACD,CEdD,MACC,qJAGD,CAEA,YCLC,eDUD,CALA,+DCDE,qCDMF,CALA,YAIC,0CAA2C,CAD3C,oBAED,CAEA,kBACC,cAAe,CACf,cA2DD,CAzDC,6BAGC,eAAgB,CAFhB,gBAAiB,CACjB,UAwCD,CA1CA,uCAME,eAoCF,CA1CA,uCAUE,gBAgCF,CA1CA,6BAgBC,qCA0BD,CAxBC,oCACC,eACD,CAEA,mCACC,oDAAqD,CACrD,yCAaD,CAXC,0CACC,eACD,CAEA,2DACC,0DACD,CAEA,iFACC,4CACD,CAGD,qDACC,uDACD,CAMA,yCACC,0CAA2C,CAC3C,aAMD,CAJC,iEACC,uDAAwD,CACxD,aACD,CAKH,yBACC,oCAAqC,CAGrC,mBACC,gDACD,CAOD,CALC,mCACC,cAAe,CACf,eAAiB,CACjB,oFACD,CAGD,uBAGC,sCAAuC,CAFvC,UAAW,CACX,UAED",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-list {
	@mixin ck-unselectable;

	display: flex;
	flex-direction: column;

	& .ck-list__item,
	& .ck-list__separator {
		display: block;
	}

	/* Make sure that whatever child of the list item gets focus, it remains on the
	top. Thanks to that, styles like box-shadow, outline, etc. are not masked by
	adjacent list items. */
	& .ck-list__item > *:focus {
		position: relative;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-list-button-padding:
		calc(.11 * var(--ck-line-height-base) * var(--ck-font-size-base))
		calc(.4 * var(--ck-line-height-base) * var(--ck-font-size-base));
}

.ck.ck-list {
	@mixin ck-rounded-corners;

	list-style-type: none;
	background: var(--ck-color-list-background);
}

.ck.ck-list__item {
	cursor: default;
	min-width: 12em;

	& > .ck-button {
		min-height: unset;
		width: 100%;
		border-radius: 0;

		@mixin ck-dir ltr {
			text-align: left;
		}

		@mixin ck-dir rtl {
			text-align: right;
		}

		/* List items should have the same height. Use absolute units to make sure it is so
		   because e.g. different heading styles may have different height
		   https://github.com/ckeditor/ckeditor5-heading/issues/63 */
		padding: var(--ck-list-button-padding);

		&:active {
			box-shadow: none;
		}

		&.ck-on {
			background: var(--ck-color-list-button-on-background);
			color: var(--ck-color-list-button-on-text);

			&:active {
				box-shadow: none;
			}

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-on-background-focus);
			}

			&:focus:not(.ck-switchbutton):not(.ck-disabled) {
				border-color: var(--ck-color-base-background);
			}
		}

		&:hover:not(.ck-disabled) {
			background: var(--ck-color-list-button-hover-background);
		}
	}

	/* It's unnecessary to change the background/text of a switch toggle; it has different ways
	of conveying its state (like the switcher) */
	& > .ck-switchbutton {
		&.ck-on {
			background: var(--ck-color-list-background);
			color: inherit;

			&:hover:not(.ck-disabled) {
				background: var(--ck-color-list-button-hover-background);
				color: inherit;
			}
		}
	}
}

.ck-list .ck-list__group {
	padding-top: var(--ck-spacing-medium);

	/* The group should have a border when it's not the first item. */
	*:not(.ck-hidden) ~ & {
		border-top: 1px solid var(--ck-color-base-border);
	}

	& > .ck-label {
		font-size: 11px;
		font-weight: bold;
		padding: var(--ck-spacing-medium) var(--ck-spacing-medium) 0 var(--ck-spacing-medium);
	}
}

.ck.ck-list__separator {
	height: 1px;
	width: 100%;
	background: var(--ck-color-base-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=v},497:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-menu-bar{background:var(--ck-color-base-background);border:1px solid var(--ck-color-toolbar-border);display:flex;flex-wrap:wrap;gap:var(--ck-spacing-small);justify-content:flex-start;padding:var(--ck-spacing-small);width:100%}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubar.css"],names:[],mappings:"AAKA,gBAIC,0CAA2C,CAG3C,+CAAgD,CANhD,YAAa,CACb,cAAe,CAIf,2BAA4B,CAH5B,0BAA2B,CAE3B,+BAAgC,CAGhC,UACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar {
	display: flex;
	flex-wrap: wrap;
	justify-content: flex-start;
	background: var(--ck-color-base-background);
	padding: var(--ck-spacing-small);
	gap: var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);
	width: 100%;
}
`],sourceRoot:""}]);const S=v},4:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-menu-bar__menu{display:block;font-size:inherit;position:relative}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level{max-width:100%}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenu.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenu.css"],names:[],mappings:"AAKA,sBACC,aAAc,CCCd,iBAAkB,CDAlB,iBACD,CCCC,kDACC,cACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	display: block;
	position: relative;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/* Enable font size inheritance, which allows fluid UI scaling. */
	font-size: inherit;

	&.ck-menu-bar__menu_top-level {
		max-width: 100%;
	}
}
`],sourceRoot:""}]);const S=v},3344:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{pointer-events:none;z-index:var(--ck-z-default)}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button{padding:var(--ck-list-button-padding);width:100%}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button>.ck-button__label{flex-grow:1;overflow:hidden;text-overflow:ellipsis}.ck.ck-menu-bar__menu>.ck-menu-bar__menu__button.ck-disabled>.ck-button__label{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-left:var(--ck-spacing-small)}[dir=rtl] .ck.ck-menu-bar__menu>.ck-menu-bar__menu__button:not(.ck-button_with-text){padding-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button{min-height:unset;padding:var(--ck-spacing-small) var(--ck-spacing-medium)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-button__label{line-height:unset;width:unset}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button.ck-on{border-bottom-left-radius:0;border-bottom-right-radius:0}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__button .ck-icon{display:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button{border-radius:0}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{width:var(--ck-dropdown-arrow-size)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(-90deg)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{transform:rotate(90deg)}.ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button.ck-disabled>.ck-menu-bar__menu__button__arrow{opacity:var(--ck-disabled-opacity)}[dir=ltr] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{margin-left:var(--ck-spacing-standard);right:var(--ck-spacing-standard)}[dir=rtl] .ck.ck-menu-bar__menu:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button>.ck-menu-bar__menu__button__arrow{left:var(--ck-spacing-standard);margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenubutton.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_disabled.css"],names:[],mappings:"AAMC,mFACC,mBAAoB,CACpB,2BACD,CCIA,iDACC,qCAAsC,CACtC,UAuBD,CArBC,mEACC,WAAY,CACZ,eAAgB,CAChB,sBACD,CAEA,+ECdD,kCDgBC,CAGC,qFACC,oCACD,CAIA,qFACC,qCACD,CAOF,6EAEC,gBAAiB,CADjB,wDAgBD,CAbC,+FAEC,iBAAkB,CADlB,WAED,CAEA,mFACC,2BAA4B,CAC5B,4BACD,CAEA,sFACC,YACD,CAMD,mFACC,eAiDD,CA/CC,yFACC,wBAAyB,CACzB,eAKD,CAHC,qGACC,0DACD,CAID,iIACC,+DACD,CAEA,qHACC,mCASD,CAVA,+HAIE,wBAMF,CAVA,+HAQE,uBAEF,CAEA,iICrFD,kCDuFC,CAGC,+HAIC,sCAAuC,CAHvC,gCAID,CAIA,+HACC,+BAAgC,CAGhC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu  {
	& > .ck-menu-bar__menu__button > .ck-menu-bar__menu__button__arrow {
		pointer-events: none;
		z-index: var(--ck-z-default);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_disabled.css";
@import "../../mixins/_button.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-menu-bar__menu {
	/*
	 * All menu buttons.
	 */
	& > .ck-menu-bar__menu__button {
		padding: var(--ck-list-button-padding);
		width: 100%;

		& > .ck-button__label {
			flex-grow: 1;
			overflow: hidden;
			text-overflow: ellipsis;
		}

		&.ck-disabled > .ck-button__label {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			&:not(.ck-button_with-text) {
				padding-left: var(--ck-spacing-small);
			}
		}

		@mixin ck-dir rtl {
			&:not(.ck-button_with-text) {
				padding-right: var(--ck-spacing-small);
			}
		}
	}

	/*
	 * Top-level menu buttons only.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__button {
		padding: var(--ck-spacing-small) var(--ck-spacing-medium);
		min-height: unset;

		& .ck-button__label {
			width: unset;
			line-height: unset;
		}

		&.ck-on {
			border-bottom-left-radius: 0;
			border-bottom-right-radius: 0;
		}

		& .ck-icon {
			display: none;
		}
	}

	/*
	 * Sub-menu buttons.
	 */
	&:not(.ck-menu-bar__menu_top-level) .ck-menu-bar__menu__button {
		border-radius: 0;

		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}

		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}

		& > .ck-menu-bar__menu__button__arrow {
			width: var(--ck-dropdown-arrow-size);

			@mixin ck-dir ltr {
				transform: rotate(-90deg);
			}

			@mixin ck-dir rtl {
				transform: rotate(90deg);
			}
		}

		&.ck-disabled > .ck-menu-bar__menu__button__arrow {
			@mixin ck-disabled;
		}

		@mixin ck-dir ltr {
			& > .ck-menu-bar__menu__button__arrow {
				right: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-left: var(--ck-spacing-standard);
			}
		}

		@mixin ck-dir rtl {
			& > .ck-menu-bar__menu__button__arrow {
				left: var(--ck-spacing-standard);

				/* A space to accommodate the triangle. */
				margin-right: var(--ck-spacing-small);
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which indicates that an element holding it is disabled.
 */
@define-mixin ck-disabled {
	opacity: var(--ck-disabled-opacity);
}
`],sourceRoot:""}]);const S=v},9481:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,":root{--ck-menu-bar-menu-item-min-width:18em}.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item{min-width:var(--ck-menu-bar-menu-item-min-width)}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitem.css"],names:[],mappings:"AAKA,MACC,sCACD,CAEA,kDACC,gDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-item-min-width: 18em;
}

.ck.ck-menu-bar__menu .ck.ck-menu-bar__menu__item {
	min-width: var(--ck-menu-bar-menu-item-min-width);
}
`],sourceRoot:""}]);const S=v},977:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button{border-radius:0}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container,.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container .ck-spinner{--ck-toolbar-spinner-size:20px}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button>.ck-spinner-container{margin-left:calc(var(--ck-spacing-small)*-1);margin-right:var(--ck-spacing-small)}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus{border-color:transparent;box-shadow:none}.ck.ck-menu-bar__menu .ck-button.ck-menu-bar__menu__item__button:focus:not(.ck-on){background:var(--ck-color-button-default-hover-background)}.ck.ck-menu-bar__menu.ck-menu-bar__menu_top-level>.ck-menu-bar__menu__panel>ul>.ck-menu-bar__menu__item>.ck-menu-bar__menu__item__button:not(:has(.ck-button__icon))>.ck-button__label{margin-left:calc(var(--ck-icon-size) - var(--ck-spacing-small))}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenulistitembutton.css"],names:[],mappings:"AASC,iEACC,eA0BD,CAxBC,0LAGC,8BACD,CAEA,uFAEC,4CAA+C,CAC/C,oCACD,CAMA,uEACC,wBAAyB,CACzB,eAKD,CAHC,mFACC,0DACD,CASD,uLACC,+DACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-menu-bar__menu {
	/*
	 * List item buttons.
	 */
	& .ck-button.ck-menu-bar__menu__item__button {
		border-radius: 0;

		& > .ck-spinner-container,
		& > .ck-spinner-container .ck-spinner {
			/* These styles correspond to .ck-icon so that the spinner seamlessly replaces the icon. */
			--ck-toolbar-spinner-size: 20px;
		}

		& > .ck-spinner-container {
			/* These margins are the same as for .ck-icon. */
			margin-left: calc(-1 * var(--ck-spacing-small));
			margin-right: var(--ck-spacing-small);
		}

		/*
		 * Hovered items automatically get focused. Default focus styles look odd
		 * while moving across a huge list of items so let's get rid of them
		 */
		&:focus {
			border-color: transparent;
			box-shadow: none;

			&:not(.ck-on) {
				background: var(--ck-color-button-default-hover-background);
			}
		}
	}

	/*
	 * First-level sub-menu item buttons.
	 */
	&.ck-menu-bar__menu_top-level > .ck-menu-bar__menu__panel > ul > .ck-menu-bar__menu__item > .ck-menu-bar__menu__item__button {
		/* Spacing in buttons that miss the icon. */
		&:not(:has(.ck-button__icon)) > .ck-button__label {
			margin-left: calc(var(--ck-icon-size) - var(--ck-spacing-small));
		}
	}
}


`],sourceRoot:""}]);const S=v},9108:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,":root{--ck-menu-bar-menu-max-width:75vw;--ck-menu-bar-nested-menu-horizontal-offset:5px}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{max-width:var(--ck-menu-bar-menu-max-width);position:absolute;z-index:var(--ck-z-panel)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw{bottom:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{bottom:auto;top:100%}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{left:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw{right:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{left:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en{bottom:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{right:calc(100% - var(--ck-menu-bar-nested-menu-horizontal-offset))}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{top:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{bottom:0}:root{--ck-menu-bar-menu-panel-max-width:75vw}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{border-radius:0}.ck-rounded-corners .ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel{background:var(--ck-color-dropdown-panel-background);border:1px solid var(--ck-color-dropdown-panel-border);bottom:0;box-shadow:var(--ck-drop-shadow),0 0;height:fit-content;max-width:var(--ck-menu-bar-menu-panel-max-width)}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_es,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_se{border-top-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_sw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ws{border-top-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_en,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_ne{border-bottom-left-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_nw,.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel.ck-menu-bar__menu__panel_position_wn{border-bottom-right-radius:0}.ck.ck-menu-bar__menu>.ck.ck-menu-bar__menu__panel:focus{outline:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/menubar/menubarmenupanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,iCAAkC,CAClC,+CACD,CAEA,mDAEC,2CAA4C,CAC5C,iBAAkB,CAFlB,yBAkDD,CA9CC,gLAEC,WACD,CAEA,gLAGC,WAAY,CADZ,QAED,CAEA,gLAEC,MACD,CAEA,gLAEC,OACD,CAEA,gLAEC,kEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CAEA,gLAEC,mEACD,CAEA,wFACC,KACD,CAEA,wFACC,QACD,CCpDD,MACC,uCACD,CAEA,mDCDC,eDmCD,CAlCA,6ICGE,qCD+BF,CAlCA,mDAIC,oDAAqD,CACrD,sDAAuD,CACvD,QAAS,CETT,oCAA8B,CFU9B,kBAAmB,CACnB,iDA0BD,CAvBC,gLAEC,wBACD,CAEA,gLAEC,yBACD,CAEA,gLAEC,2BACD,CAEA,gLAEC,4BACD,CAEA,yDACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-menu-bar-menu-max-width: 75vw;
	--ck-menu-bar-nested-menu-horizontal-offset: 5px;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	z-index: var(--ck-z-panel);
	max-width: var(--ck-menu-bar-menu-max-width);
	position: absolute;

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_nw {
		bottom: 100%;
	}

	&.ck-menu-bar__menu__panel_position_se,
	&.ck-menu-bar__menu__panel_position_sw {
		top: 100%;
		bottom: auto;
	}

	&.ck-menu-bar__menu__panel_position_ne,
	&.ck-menu-bar__menu__panel_position_se {
		left: 0px;
	}

	&.ck-menu-bar__menu__panel_position_nw,
	&.ck-menu-bar__menu__panel_position_sw {
		right: 0px;
	}

	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_en {
		left: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_es {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_en {
		bottom: 0px;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_wn {
		right: calc( 100% - var(--ck-menu-bar-nested-menu-horizontal-offset) );
	}

	&.ck-menu-bar__menu__panel_position_ws {
		top: 0px;
	}

	&.ck-menu-bar__menu__panel_position_wn {
		bottom: 0px;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-menu-bar-menu-panel-max-width: 75vw;
}

.ck.ck-menu-bar__menu > .ck.ck-menu-bar__menu__panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	background: var(--ck-color-dropdown-panel-background);
	border: 1px solid var(--ck-color-dropdown-panel-border);
	bottom: 0;
	height: fit-content;
	max-width: var(--ck-menu-bar-menu-panel-max-width);

	/* Corner border radius consistent with the button. */
	&.ck-menu-bar__menu__panel_position_es,
	&.ck-menu-bar__menu__panel_position_se {
		border-top-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_ws,
	&.ck-menu-bar__menu__panel_position_sw {
		border-top-right-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_en,
	&.ck-menu-bar__menu__panel_position_ne {
		border-bottom-left-radius: 0;
	}

	&.ck-menu-bar__menu__panel_position_wn,
	&.ck-menu-bar__menu__panel_position_nw {
		border-bottom-right-radius: 0;
	}

	&:focus {
		outline: none;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=v},3710:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,':root{--ck-balloon-panel-arrow-z-index:calc(var(--ck-z-default) - 3)}.ck.ck-balloon-panel{display:none;position:absolute;z-index:var(--ck-z-panel)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{content:"";position:absolute}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_n]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_n]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel[class*=arrow_s]:before{z-index:var(--ck-balloon-panel-arrow-z-index)}.ck.ck-balloon-panel[class*=arrow_s]:after{z-index:calc(var(--ck-balloon-panel-arrow-z-index) + 1)}.ck.ck-balloon-panel.ck-balloon-panel_visible{display:block}:root{--ck-balloon-border-width:1px;--ck-balloon-arrow-offset:2px;--ck-balloon-arrow-height:10px;--ck-balloon-arrow-half-width:8px;--ck-balloon-arrow-drop-shadow:0 2px 2px var(--ck-color-shadow-drop)}.ck.ck-balloon-panel{border-radius:0}.ck-rounded-corners .ck.ck-balloon-panel,.ck.ck-balloon-panel.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-balloon-panel{background:var(--ck-color-panel-background);border:var(--ck-balloon-border-width) solid var(--ck-color-panel-border);box-shadow:var(--ck-drop-shadow),0 0;min-height:15px}.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:after,.ck.ck-balloon-panel.ck-balloon-panel_with-arrow:before{border-style:solid;height:0;width:0}.ck.ck-balloon-panel[class*=arrow_n]:after,.ck.ck-balloon-panel[class*=arrow_n]:before{border-width:0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_n]:before{border-color:transparent transparent var(--ck-color-panel-border) transparent;margin-top:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_n]:after{border-color:transparent transparent var(--ck-color-panel-background) transparent;margin-top:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_s]:after,.ck.ck-balloon-panel[class*=arrow_s]:before{border-width:var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width)}.ck.ck-balloon-panel[class*=arrow_s]:before{border-color:var(--ck-color-panel-border) transparent transparent;filter:drop-shadow(var(--ck-balloon-arrow-drop-shadow));margin-bottom:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_s]:after{border-color:var(--ck-color-panel-background) transparent transparent transparent;margin-bottom:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_e]:after,.ck.ck-balloon-panel[class*=arrow_e]:before{border-width:var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height)}.ck.ck-balloon-panel[class*=arrow_e]:before{border-color:transparent transparent transparent var(--ck-color-panel-border);margin-right:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_e]:after{border-color:transparent transparent transparent var(--ck-color-panel-background);margin-right:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel[class*=arrow_w]:after,.ck.ck-balloon-panel[class*=arrow_w]:before{border-width:var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0}.ck.ck-balloon-panel[class*=arrow_w]:before{border-color:transparent var(--ck-color-panel-border) transparent transparent;margin-left:calc(var(--ck-balloon-border-width)*-1)}.ck.ck-balloon-panel[class*=arrow_w]:after{border-color:transparent var(--ck-color-panel-background) transparent transparent;margin-left:calc(var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width))}.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_n:before{left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nw:before{left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_ne:before{right:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_s:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:50%;margin-left:calc(var(--ck-balloon-arrow-half-width)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_se:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);right:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_sme:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_smw:before{bottom:calc(var(--ck-balloon-arrow-height)*-1);left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nme:before{margin-right:calc(var(--ck-balloon-arrow-half-width)*2);right:25%;top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_nmw:before{left:25%;margin-left:calc(var(--ck-balloon-arrow-half-width)*2);top:calc(var(--ck-balloon-arrow-height)*-1)}.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_e:before{margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);right:calc(var(--ck-balloon-arrow-height)*-1);top:50%}.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:after,.ck.ck-balloon-panel.ck-balloon-panel_arrow_w:before{left:calc(var(--ck-balloon-arrow-height)*-1);margin-top:calc(var(--ck-balloon-arrow-half-width)*-1);top:50%}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonpanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MAEC,8DACD,CAEA,qBACC,YAAa,CACb,iBAAkB,CAElB,yBAyCD,CAtCE,+GAEC,UAAW,CACX,iBACD,CAEA,wDACC,6CACD,CAEA,uDACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAIA,4CACC,6CACD,CAEA,2CACC,uDACD,CAGD,8CACC,aACD,CC9CD,MACC,6BAA8B,CAC9B,6BAA8B,CAC9B,8BAA+B,CAC/B,iCAAkC,CAClC,oEACD,CAEA,qBCLC,eDmMD,CA9LA,iFCDE,qCD+LF,CA9LA,qBAMC,2CAA4C,CAC5C,wEAAyE,CEdzE,oCAA8B,CFW9B,eA0LD,CApLE,+GAIC,kBAAmB,CADnB,QAAS,CADT,OAGD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,kDACD,CAEA,2CACC,iFAAkF,CAClF,gFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,iEAAkE,CAClE,uDAAwD,CACxD,qDACD,CAEA,2CACC,iFAAkF,CAClF,mFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,oDACD,CAEA,2CACC,iFAAkF,CAClF,kFACD,CAIA,uFAEC,mHACD,CAEA,4CACC,6EAA8E,CAC9E,mDACD,CAEA,2CACC,iFAAkF,CAClF,iFACD,CAIA,yGAEC,QAAS,CACT,uDAA0D,CAC1D,2CACD,CAIA,2GAEC,+CAAkD,CAClD,2CACD,CAIA,2GAEC,gDAAmD,CACnD,2CACD,CAIA,yGAIC,8CAAiD,CAFjD,QAAS,CACT,uDAED,CAIA,2GAGC,8CAAiD,CADjD,+CAED,CAIA,2GAGC,8CAAiD,CADjD,gDAED,CAIA,6GAIC,8CAAiD,CADjD,uDAA0D,CAD1D,SAGD,CAIA,6GAIC,8CAAiD,CAFjD,QAAS,CACT,sDAED,CAIA,6GAGC,uDAA0D,CAD1D,SAAU,CAEV,2CACD,CAIA,6GAEC,QAAS,CACT,sDAAyD,CACzD,2CACD,CAIA,yGAGC,sDAAyD,CADzD,6CAAgD,CAEhD,OACD,CAIA,yGAEC,4CAA+C,CAC/C,sDAAyD,CACzD,OACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* Make sure the balloon arrow does not float over its children. */
	--ck-balloon-panel-arrow-z-index: calc(var(--ck-z-default) - 3);
}

.ck.ck-balloon-panel {
	display: none;
	position: absolute;

	z-index: var(--ck-z-panel);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			content: "";
			position: absolute;
		}

		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_n"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&[class*="arrow_s"] {
		&::before {
			z-index: var(--ck-balloon-panel-arrow-z-index);
		}

		&::after {
			z-index: calc(var(--ck-balloon-panel-arrow-z-index) + 1);
		}
	}

	&.ck-balloon-panel_visible {
		display: block;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-border-width: 1px;
	--ck-balloon-arrow-offset: 2px;
	--ck-balloon-arrow-height: 10px;
	--ck-balloon-arrow-half-width: 8px;
	--ck-balloon-arrow-drop-shadow: 0 2px 2px var(--ck-color-shadow-drop);
}

.ck.ck-balloon-panel {
	@mixin ck-rounded-corners;
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: var(--ck-balloon-border-width) solid var(--ck-color-panel-border);

	&.ck-balloon-panel_with-arrow {
		&::before,
		&::after {
			width: 0;
			height: 0;
			border-style: solid;
		}
	}

	&[class*="arrow_n"] {
		&::before,
		&::after {
			border-width: 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: transparent transparent var(--ck-color-panel-border) transparent;
			margin-top: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent var(--ck-color-panel-background) transparent;
			margin-top: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_s"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width);
		}

		&::before {
			border-color: var(--ck-color-panel-border) transparent transparent;
			filter: drop-shadow(var(--ck-balloon-arrow-drop-shadow));
			margin-bottom: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: var(--ck-color-panel-background) transparent transparent transparent;
			margin-bottom: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_e"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) 0 var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height);
		}

		&::before {
			border-color: transparent transparent transparent var(--ck-color-panel-border);
			margin-right: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent transparent transparent var(--ck-color-panel-background);
			margin-right: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&[class*="arrow_w"] {
		&::before,
		&::after {
			border-width: var(--ck-balloon-arrow-half-width) var(--ck-balloon-arrow-height) var(--ck-balloon-arrow-half-width) 0;
		}

		&::before {
			border-color: transparent var(--ck-color-panel-border) transparent transparent;
			margin-left: calc( -1 * var(--ck-balloon-border-width) );
		}

		&::after {
			border-color: transparent var(--ck-color-panel-background) transparent transparent;
			margin-left: calc( var(--ck-balloon-arrow-offset) - var(--ck-balloon-border-width) );
		}
	}

	&.ck-balloon-panel_arrow_n {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_ne {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_s {
		&::before,
		&::after {
			left: 50%;
			margin-left: calc(-1 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sw {
		&::before,
		&::after {
			left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_se {
		&::before,
		&::after {
			right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_sme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_smw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			bottom: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nme {
		&::before,
		&::after {
			right: 25%;
			margin-right: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_nmw {
		&::before,
		&::after {
			left: 25%;
			margin-left: calc(2 * var(--ck-balloon-arrow-half-width));
			top: calc(-1 * var(--ck-balloon-arrow-height));
		}
	}

	&.ck-balloon-panel_arrow_e {
		&::before,
		&::after {
			right: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}

	&.ck-balloon-panel_arrow_w {
		&::before,
		&::after {
			left: calc(-1 * var(--ck-balloon-arrow-height));
			margin-top: calc(-1 * var(--ck-balloon-arrow-half-width));
			top: 50%;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=v},991:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck .ck-balloon-rotator__navigation{align-items:center;display:flex;justify-content:center}.ck .ck-balloon-rotator__content .ck-toolbar{justify-content:center}.ck .ck-balloon-rotator__navigation{background:var(--ck-color-toolbar-background);border-bottom:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation>*{margin-bottom:var(--ck-spacing-small);margin-right:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck .ck-balloon-rotator__navigation .ck-balloon-rotator__counter{margin-left:var(--ck-spacing-small);margin-right:var(--ck-spacing-standard)}.ck .ck-balloon-rotator__content .ck.ck-annotation-wrapper{box-shadow:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/balloonrotator.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/balloonrotator.css"],names:[],mappings:"AAKA,oCAEC,kBAAmB,CADnB,YAAa,CAEb,sBACD,CAKA,6CACC,sBACD,CCXA,oCACC,6CAA8C,CAC9C,sDAAuD,CACvD,iCAgBD,CAbC,sCAGC,qCAAsC,CAFtC,oCAAqC,CACrC,kCAED,CAGA,iEAIC,mCAAoC,CAHpC,uCAID,CAMA,2DACC,eACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	display: flex;
	align-items: center;
	justify-content: center;
}

/* Buttons inside a toolbar should be centered when rotator bar is wider.
 * See: https://github.com/ckeditor/ckeditor5-ui/issues/495
 */
.ck .ck-balloon-rotator__content .ck-toolbar {
	justify-content: center;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-balloon-rotator__navigation {
	background: var(--ck-color-toolbar-background);
	border-bottom: 1px solid var(--ck-color-toolbar-border);
	padding: 0 var(--ck-spacing-small);

	/* Let's keep similar appearance to \`ck-toolbar\`. */
	& > * {
		margin-right: var(--ck-spacing-small);
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	/* Gives counter more breath than buttons. */
	& .ck-balloon-rotator__counter {
		margin-right: var(--ck-spacing-standard);

		/* We need to use smaller margin because of previous button's right margin. */
		margin-left: var(--ck-spacing-small);
	}
}

.ck .ck-balloon-rotator__content {

	/* Disable default annotation shadow inside rotator with fake panels. */
	& .ck.ck-annotation-wrapper {
		box-shadow: none;
	}
}
`],sourceRoot:""}]);const S=v},5380:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck .ck-fake-panel{position:absolute;z-index:calc(var(--ck-z-panel) - 1)}.ck .ck-fake-panel div{position:absolute}.ck .ck-fake-panel div:first-child{z-index:2}.ck .ck-fake-panel div:nth-child(2){z-index:1}:root{--ck-balloon-fake-panel-offset-horizontal:6px;--ck-balloon-fake-panel-offset-vertical:6px}.ck .ck-fake-panel div{background:var(--ck-color-panel-background);border:1px solid var(--ck-color-panel-border);border-radius:var(--ck-border-radius);box-shadow:var(--ck-drop-shadow),0 0;height:100%;min-height:15px;width:100%}.ck .ck-fake-panel div:first-child{margin-left:var(--ck-balloon-fake-panel-offset-horizontal);margin-top:var(--ck-balloon-fake-panel-offset-vertical)}.ck .ck-fake-panel div:nth-child(2){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*2);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*2)}.ck .ck-fake-panel div:nth-child(3){margin-left:calc(var(--ck-balloon-fake-panel-offset-horizontal)*3);margin-top:calc(var(--ck-balloon-fake-panel-offset-vertical)*3)}.ck .ck-balloon-panel_arrow_s+.ck-fake-panel,.ck .ck-balloon-panel_arrow_se+.ck-fake-panel,.ck .ck-balloon-panel_arrow_sw+.ck-fake-panel{--ck-balloon-fake-panel-offset-vertical:-6px}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/fakepanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,mBACC,iBAAkB,CAGlB,mCACD,CAEA,uBACC,iBACD,CAEA,mCACC,SACD,CAEA,oCACC,SACD,CCfA,MACC,6CAA8C,CAC9C,2CACD,CAGA,uBAKC,2CAA4C,CAC5C,6CAA8C,CAC9C,qCAAsC,CCXtC,oCAA8B,CDc9B,WAAY,CAPZ,eAAgB,CAMhB,UAED,CAEA,mCACC,0DAA2D,CAC3D,uDACD,CAEA,oCACC,kEAAqE,CACrE,+DACD,CACA,oCACC,kEAAqE,CACrE,+DACD,CAGA,yIAGC,4CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-fake-panel {
	position: absolute;

	/* Fake panels should be placed under main balloon content. */
	z-index: calc(var(--ck-z-panel) - 1);
}

.ck .ck-fake-panel div {
	position: absolute;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	z-index: 2;
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

:root {
	--ck-balloon-fake-panel-offset-horizontal: 6px;
	--ck-balloon-fake-panel-offset-vertical: 6px;
}

/* Let's use \`.ck-balloon-panel\` appearance. See: balloonpanel.css. */
.ck .ck-fake-panel div {
	@mixin ck-drop-shadow;

	min-height: 15px;

	background: var(--ck-color-panel-background);
	border: 1px solid var(--ck-color-panel-border);
	border-radius: var(--ck-border-radius);

	width: 100%;
	height: 100%;
}

.ck .ck-fake-panel div:nth-child( 1 ) {
	margin-left: var(--ck-balloon-fake-panel-offset-horizontal);
	margin-top: var(--ck-balloon-fake-panel-offset-vertical);
}

.ck .ck-fake-panel div:nth-child( 2 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 2);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 2);
}
.ck .ck-fake-panel div:nth-child( 3 ) {
	margin-left: calc(var(--ck-balloon-fake-panel-offset-horizontal) * 3);
	margin-top: calc(var(--ck-balloon-fake-panel-offset-vertical) * 3);
}

/* If balloon is positioned above element, we need to move fake panel to the top. */
.ck .ck-balloon-panel_arrow_s + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_se + .ck-fake-panel,
.ck .ck-balloon-panel_arrow_sw + .ck-fake-panel {
	--ck-balloon-fake-panel-offset-vertical: -6px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=v},8298:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-sticky-panel .ck-sticky-panel__content_sticky{position:fixed;top:0;z-index:var(--ck-z-panel)}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky_bottom-limit{position:absolute;top:auto}.ck.ck-sticky-panel .ck-sticky-panel__content_sticky{border-top-left-radius:0;border-top-right-radius:0;border-width:0 1px 1px;box-shadow:var(--ck-drop-shadow),0 0}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/panel/stickypanel.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAMC,qDAEC,cAAe,CACf,KAAM,CAFN,yBAGD,CAEA,kEAEC,iBAAkB,CADlB,QAED,CCPA,qDAIC,wBAAyB,CACzB,yBAA0B,CAF1B,sBAAuB,CCFxB,oCDKA",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		z-index: var(--ck-z-panel); /* #315 */
		position: fixed;
		top: 0;
	}

	& .ck-sticky-panel__content_sticky_bottom-limit {
		top: auto;
		position: absolute;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_shadow.css";

.ck.ck-sticky-panel {
	& .ck-sticky-panel__content_sticky {
		@mixin ck-drop-shadow;

		border-width: 0 1px 1px;
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=v},2722:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,'.ck-vertical-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck-vertical-form .ck-button:focus:after{display:none}@media screen and (max-width:600px){.ck.ck-responsive-form .ck-button:after{bottom:-1px;content:"";position:absolute;right:-1px;top:-1px;width:0;z-index:1}.ck.ck-responsive-form .ck-button:focus:after{display:none}}.ck-vertical-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form{padding:var(--ck-spacing-large)}.ck.ck-responsive-form:focus{outline:none}[dir=ltr] .ck.ck-responsive-form>:not(:first-child),[dir=rtl] .ck.ck-responsive-form>:not(:last-child){margin-left:var(--ck-spacing-standard)}@media screen and (max-width:600px){.ck.ck-responsive-form{padding:0;width:calc(var(--ck-input-width)*.8)}.ck.ck-responsive-form .ck-labeled-field-view{margin:var(--ck-spacing-large) var(--ck-spacing-large) 0}.ck.ck-responsive-form .ck-labeled-field-view .ck-input-text{min-width:0;width:100%}.ck.ck-responsive-form .ck-labeled-field-view .ck-labeled-field-view__error{white-space:normal}.ck.ck-responsive-form>.ck-button:nth-last-child(2):after{border-right:1px solid var(--ck-color-base-border)}.ck.ck-responsive-form>.ck-button:last-child,.ck.ck-responsive-form>.ck-button:nth-last-child(2){border-radius:0;margin-top:var(--ck-spacing-large);padding:var(--ck-spacing-standard)}.ck.ck-responsive-form>.ck-button:last-child:not(:focus),.ck.ck-responsive-form>.ck-button:nth-last-child(2):not(:focus){border-top:1px solid var(--ck-color-base-border)}[dir=ltr] .ck.ck-responsive-form>.ck-button:last-child,[dir=ltr] .ck.ck-responsive-form>.ck-button:nth-last-child(2),[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2){margin-left:0}[dir=rtl] .ck.ck-responsive-form>.ck-button:last-child:last-of-type,[dir=rtl] .ck.ck-responsive-form>.ck-button:nth-last-child(2):last-of-type{border-right:1px solid var(--ck-color-base-border)}}',"",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/responsive-form/responsiveform.css","webpack://./../ckeditor5-ui/theme/mixins/_rwd.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/responsive-form/responsiveform.css"],names:[],mappings:"AAQC,mCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,yCACC,YACD,CCdA,oCDoBE,wCAMC,WAAY,CALZ,UAAW,CAEX,iBAAkB,CAClB,UAAW,CACX,QAAS,CAHT,OAAQ,CAKR,SACD,CAEA,8CACC,YACD,CC9BF,CCAD,qDACC,kDACD,CAEA,uBACC,+BAmED,CAjEC,6BAEC,YACD,CASC,uGACC,sCACD,CDvBD,oCCMD,uBAqBE,SAAU,CACV,oCA8CF,CA5CE,8CACC,wDAWD,CATC,6DACC,WAAY,CACZ,UACD,CAGA,4EACC,kBACD,CAKA,0DACC,kDACD,CAGD,iGAIC,eAAgB,CADhB,kCAAmC,CADnC,kCAmBD,CAfC,yHACC,gDACD,CARD,0OAeE,aAMF,CAJE,+IACC,kDACD,CDpEH",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";

.ck-vertical-form .ck-button {
	&::after {
		content: "";
		width: 0;
		position: absolute;
		right: -1px;
		top: -1px;
		bottom: -1px;
		z-index: 1;
	}

	&:focus::after {
		display: none;
	}
}

.ck.ck-responsive-form {
	@mixin ck-media-phone {
		& .ck-button {
			&::after {
				content: "";
				width: 0;
				position: absolute;
				right: -1px;
				top: -1px;
				bottom: -1px;
				z-index: 1;
			}

			&:focus::after {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@define-mixin ck-media-phone {
	@media screen and (max-width: 600px) {
		@mixin-content;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_rwd.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck-vertical-form > .ck-button:nth-last-child(2)::after {
	border-right: 1px solid var(--ck-color-base-border);
}

.ck.ck-responsive-form {
	padding: var(--ck-spacing-large);

	&:focus {
		/* See: https://github.com/ckeditor/ckeditor5/issues/4773 */
		outline: none;
	}

	@mixin ck-dir ltr {
		& > :not(:first-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-dir rtl {
		& > :not(:last-child) {
			margin-left: var(--ck-spacing-standard);
		}
	}

	@mixin ck-media-phone {
		padding: 0;
		width: calc(.8 * var(--ck-input-width));

		& .ck-labeled-field-view {
			margin: var(--ck-spacing-large) var(--ck-spacing-large) 0;

			& .ck-input-text {
				min-width: 0;
				width: 100%;
			}

			/* Let the long error messages wrap in the narrow form. */
			& .ck-labeled-field-view__error {
				white-space: normal;
			}
		}

		/* Styles for two last buttons in the form (save&cancel, edit&unlink, etc.). */
		& > .ck-button:nth-last-child(2) {
			&::after {
				border-right: 1px solid var(--ck-color-base-border);
			}
		}

		& > .ck-button:nth-last-child(1),
		& > .ck-button:nth-last-child(2) {
			padding: var(--ck-spacing-standard);
			margin-top: var(--ck-spacing-large);
			border-radius: 0;

			&:not(:focus) {
				border-top: 1px solid var(--ck-color-base-border);
			}

			@mixin ck-dir ltr {
				margin-left: 0;
			}

			@mixin ck-dir rtl {
				margin-left: 0;

				&:last-of-type {
					border-right: 1px solid var(--ck-color-base-border);
				}
			}
		}
	}
}
`],sourceRoot:""}]);const S=v},8107:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{position:absolute;top:50%;transform:translateY(-50%)}[dir=ltr] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{left:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view>.ck-labeled-field-view__input-wrapper>.ck-icon{right:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view .ck-search__reset{position:absolute;top:50%;transform:translateY(-50%)}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{display:block}.ck.ck-search>.ck-search__results>.ck-search__info:not(.ck-hidden)~*{display:none}:root{--ck-search-field-view-horizontal-spacing:calc(var(--ck-icon-size) + var(--ck-spacing-medium))}.ck.ck-search>.ck-labeled-field-view .ck-input{width:100%}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon{--ck-labeled-field-label-default-position-x:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon>.ck-labeled-field-view__input-wrapper>.ck-icon{opacity:.5;pointer-events:none}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input,[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-icon .ck-input:not(.ck-input-text_empty){padding-left:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset{--ck-labeled-field-empty-unfocused-max-width:100% - 2 * var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset.ck-labeled-field-view_empty{--ck-labeled-field-empty-unfocused-max-width:100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{background:none;min-height:auto;min-width:auto;opacity:.5;padding:0}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{right:var(--ck-spacing-medium)}[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset{left:var(--ck-spacing-medium)}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-search__reset:hover{opacity:1}.ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{width:100%}[dir=ltr] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input:not(.ck-input-text_empty),[dir=rtl] .ck.ck-search>.ck-labeled-field-view.ck-search__query_with-reset .ck-input{padding-right:var(--ck-search-field-view-horizontal-spacing)}.ck.ck-search>.ck-search__results{min-width:100%}.ck.ck-search>.ck-search__results>.ck-search__info{padding:var(--ck-spacing-medium) var(--ck-spacing-large);width:100%}.ck.ck-search>.ck-search__results>.ck-search__info *{white-space:normal}.ck.ck-search>.ck-search__results>.ck-search__info>span:first-child{font-weight:700}.ck.ck-search>.ck-search__results>.ck-search__info>span:last-child{margin-top:var(--ck-spacing-medium)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/search/search.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/search/search.css"],names:[],mappings:"AASE,oFACC,iBAAkB,CAClB,OAAQ,CACR,0BASD,CAZA,8FAME,6BAMF,CAZA,8FAUE,8BAEF,CAEA,uDACC,iBAAkB,CAClB,OAAQ,CACR,0BACD,CAKC,oEACC,aACD,CAGA,qEACC,YACD,CChCH,MACC,8FACD,CAIE,+CACC,UACD,CAEA,gEACC,0FAoBD,CAlBC,+GACC,UAAW,CACX,mBACD,CAEA,0EACC,UAWD,CAJE,kMACC,2DACD,CAKH,iEACC,sGAwCD,CAtCC,6FACC,6HACD,CAEA,mFAIC,eAAgB,CAFhB,eAAgB,CADhB,cAAe,CAIf,UAAW,CACX,SAaD,CAnBA,6FASE,8BAUF,CAnBA,6FAaE,6BAMF,CAHC,yFACC,SACD,CAGD,2EACC,UAWD,CAZA,oMAUE,4DAEF,CAIF,kCACC,cAkBD,CAhBC,mDAEC,wDAAyD,CADzD,UAcD,CAXC,qDACC,kBACD,CAEA,oEACC,eACD,CAEA,mEACC,mCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-search {
	& > .ck-labeled-field-view {
		& > .ck-labeled-field-view__input-wrapper > .ck-icon {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);

			@mixin ck-dir ltr {
				left: var(--ck-spacing-medium);
			}

			@mixin ck-dir rtl {
				right: var(--ck-spacing-medium);
			}
		}

		& .ck-search__reset {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
		}
	}

	& > .ck-search__results {
		& > .ck-search__info {
			& > span:first-child {
				display: block;
			}

			/* Hide the filtered view when nothing was found */
			&:not(.ck-hidden) ~ * {
				display: none;
			}
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

:root {
	--ck-search-field-view-horizontal-spacing: calc(var(--ck-icon-size) + var(--ck-spacing-medium));
}

.ck.ck-search {
	& > .ck-labeled-field-view {
		& .ck-input {
			width: 100%;
		}

		&.ck-search__query_with-icon {
			--ck-labeled-field-label-default-position-x: var(--ck-search-field-view-horizontal-spacing);

			& > .ck-labeled-field-view__input-wrapper > .ck-icon {
				opacity: .5;
				pointer-events: none;
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					padding-left: var(--ck-search-field-view-horizontal-spacing);
				}

				@mixin ck-dir rtl {
					&:not(.ck-input-text_empty) {
						padding-left: var(--ck-search-field-view-horizontal-spacing);
					}
				}
			}
		}

		&.ck-search__query_with-reset {
			--ck-labeled-field-empty-unfocused-max-width: 100% - 2 * var(--ck-search-field-view-horizontal-spacing);

			&.ck-labeled-field-view_empty {
				--ck-labeled-field-empty-unfocused-max-width: 100% - var(--ck-search-field-view-horizontal-spacing) - var(--ck-spacing-medium);
			}

			& .ck-search__reset {
				min-width: auto;
				min-height: auto;

				background: none;
				opacity: .5;
				padding: 0;

				@mixin ck-dir ltr {
					right: var(--ck-spacing-medium);
				}

				@mixin ck-dir rtl {
					left: var(--ck-spacing-medium);
				}

				&:hover {
					opacity: 1;
				}
			}

			& .ck-input {
				width: 100%;

				@mixin ck-dir ltr {
					&:not(.ck-input-text_empty) {
						padding-right: var(--ck-search-field-view-horizontal-spacing);
					}
				}

				@mixin ck-dir rtl {
					padding-right: var(--ck-search-field-view-horizontal-spacing);
				}
			}
		}
	}

	& > .ck-search__results {
		min-width: 100%;

		& > .ck-search__info {
			width: 100%;
			padding: var(--ck-spacing-medium) var(--ck-spacing-large);

			& * {
				white-space: normal;
			}

			& > span:first-child {
				font-weight: bold;
			}

			& > span:last-child {
				margin-top: var(--ck-spacing-medium);
			}
		}
	}
}

`],sourceRoot:""}]);const S=v},109:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-spinner-container{display:block;position:relative}.ck.ck-spinner{left:0;margin:0 auto;position:absolute;right:0;top:50%;transform:translateY(-50%);z-index:1}:root{--ck-toolbar-spinner-size:18px}.ck.ck-spinner-container{animation:rotate 1.5s linear infinite}.ck.ck-spinner,.ck.ck-spinner-container{height:var(--ck-toolbar-spinner-size);width:var(--ck-toolbar-spinner-size)}.ck.ck-spinner{border:2px solid var(--ck-color-text);border-radius:50%;border-top:2px solid transparent}@keyframes rotate{to{transform:rotate(1turn)}}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/spinner/spinner.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/spinner/spinner.css"],names:[],mappings:"AASA,yBACC,aAAc,CACd,iBACD,CAEA,eAGC,MAAO,CAEP,aAAc,CAJd,iBAAkB,CAGlB,OAAQ,CAFR,OAAQ,CAIR,0BAA2B,CAC3B,SACD,CCjBA,MACC,8BACD,CAEA,yBAGC,qCACD,CAEA,wCAJC,qCAAsC,CADtC,oCAWD,CANA,eAKC,qCAA6B,CAF7B,iBAAkB,CAElB,gCACD,CAEA,kBACC,GACC,uBACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	display: block;
	position: relative;
}

.ck.ck-spinner {
	position: absolute;
	top: 50%;
	left: 0;
	right: 0;
	margin: 0 auto;
	transform: translateY(-50%);
	z-index: 1;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-toolbar-spinner-size: 18px;
}

.ck.ck-spinner-container {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	animation: 1.5s infinite rotate linear;
}

.ck.ck-spinner {
	width: var(--ck-toolbar-spinner-size);
	height: var(--ck-toolbar-spinner-size);
	border-radius: 50%;
	border: 2px solid var(--ck-color-text);
	border-top-color: transparent;
}

@keyframes rotate {
	to {
		transform: rotate(360deg)
	}
}

`],sourceRoot:""}]);const S=v},1671:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck-textarea{overflow-x:hidden}","",{version:3,sources:["webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/textarea/textarea.css"],names:[],mappings:"AASA,aACC,iBACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/*
 * This fixes a problem in Firefox when the initial height of the complement does not match the number of rows.
 * This bug is especially visible when rows=1.
 */
.ck-textarea {
	overflow-x: hidden
}
`],sourceRoot:""}]);const S=v},2710:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-block-toolbar-button{position:absolute;z-index:var(--ck-z-default)}:root{--ck-color-block-toolbar-button:var(--ck-color-text);--ck-block-toolbar-button-size:var(--ck-font-size-normal)}.ck.ck-block-toolbar-button{color:var(--ck-color-block-toolbar-button);font-size:var(--ck-block-toolbar-size)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/blocktoolbar.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/blocktoolbar.css"],names:[],mappings:"AAKA,4BACC,iBAAkB,CAClB,2BACD,CCHA,MACC,oDAAqD,CACrD,yDACD,CAEA,4BACC,0CAA2C,CAC3C,sCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-block-toolbar-button {
	position: absolute;
	z-index: var(--ck-z-default);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-block-toolbar-button: var(--ck-color-text);
	--ck-block-toolbar-button-size: var(--ck-font-size-normal);
}

.ck.ck-block-toolbar-button {
	color: var(--ck-color-block-toolbar-button);
	font-size: var(--ck-block-toolbar-size);
}
`],sourceRoot:""}]);const S=v},9677:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-toolbar{align-items:center;display:flex;flex-flow:row nowrap;-moz-user-select:none;-webkit-user-select:none;-ms-user-select:none;user-select:none}.ck.ck-toolbar>.ck-toolbar__items{align-items:center;display:flex;flex-flow:row wrap;flex-grow:1}.ck.ck-toolbar .ck.ck-toolbar__separator{display:inline-block}.ck.ck-toolbar .ck.ck-toolbar__separator:first-child,.ck.ck-toolbar .ck.ck-toolbar__separator:last-child{display:none}.ck.ck-toolbar .ck-toolbar__line-break{flex-basis:100%}.ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items{flex-direction:column}.ck.ck-toolbar.ck-toolbar_floating>.ck-toolbar__items{flex-wrap:nowrap}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck-dropdown__button .ck-dropdown__arrow{display:none}.ck.ck-toolbar{border-radius:0}.ck-rounded-corners .ck.ck-toolbar,.ck.ck-toolbar.ck-rounded-corners{border-radius:var(--ck-border-radius)}.ck.ck-toolbar{background:var(--ck-color-toolbar-background);border:1px solid var(--ck-color-toolbar-border);padding:0 var(--ck-spacing-small)}.ck.ck-toolbar .ck.ck-toolbar__separator{align-self:stretch;background:var(--ck-color-toolbar-border);margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small);min-width:1px;width:1px}.ck.ck-toolbar .ck-toolbar__line-break{height:0}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break){margin-right:var(--ck-spacing-small)}.ck.ck-toolbar>.ck-toolbar__items:empty+.ck.ck-toolbar__separator{display:none}.ck.ck-toolbar>.ck-toolbar__items>:not(.ck-toolbar__line-break),.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown{margin-bottom:var(--ck-spacing-small);margin-top:var(--ck-spacing-small)}.ck.ck-toolbar.ck-toolbar_vertical{padding:0}.ck.ck-toolbar.ck-toolbar_vertical>.ck-toolbar__items>.ck{border-radius:0;margin:0;width:100%}.ck.ck-toolbar.ck-toolbar_compact{padding:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>*{margin:0}.ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>:not(:first-child):not(:last-child){border-radius:0}.ck.ck-toolbar>.ck.ck-toolbar__grouped-dropdown>.ck.ck-button.ck-dropdown__button{padding-left:var(--ck-spacing-tiny)}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-dropdown__panel{min-width:auto}.ck.ck-toolbar .ck-toolbar__nested-toolbar-dropdown>.ck-button>.ck-button__label{max-width:7em;width:auto}.ck.ck-toolbar:focus{outline:none}.ck-toolbar-container .ck.ck-toolbar{border:0}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck{margin-right:0}.ck.ck-toolbar[dir=rtl]:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck,[dir=rtl] .ck.ck-toolbar:not(.ck-toolbar_compact)>.ck-toolbar__items>.ck{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-left:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:first-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=rtl]>.ck-toolbar__items>.ck:last-child,[dir=rtl] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=rtl]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=rtl]>.ck.ck-toolbar__separator,[dir=rtl] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=rtl] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-left:var(--ck-spacing-small)}.ck.ck-toolbar[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar>.ck-toolbar__items>.ck:last-child{margin-right:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:first-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:first-child{border-bottom-right-radius:0;border-top-right-radius:0}.ck.ck-toolbar.ck-toolbar_compact[dir=ltr]>.ck-toolbar__items>.ck:last-child,[dir=ltr] .ck.ck-toolbar.ck-toolbar_compact>.ck-toolbar__items>.ck:last-child{border-bottom-left-radius:0;border-top-left-radius:0}.ck.ck-toolbar.ck-toolbar_grouping[dir=ltr]>.ck-toolbar__items:not(:empty):not(:only-child),.ck.ck-toolbar[dir=ltr]>.ck.ck-toolbar__separator,[dir=ltr] .ck.ck-toolbar.ck-toolbar_grouping>.ck-toolbar__items:not(:empty):not(:only-child),[dir=ltr] .ck.ck-toolbar>.ck.ck-toolbar__separator{margin-right:var(--ck-spacing-small)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/toolbar/toolbar.css","webpack://./../ckeditor5-ui/theme/mixins/_unselectable.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/toolbar/toolbar.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_rounded.css"],names:[],mappings:"AAOA,eAKC,kBAAmB,CAFnB,YAAa,CACb,oBAAqB,CCFrB,qBAAsB,CACtB,wBAAyB,CACzB,oBAAqB,CACrB,gBD6CD,CA3CC,kCAGC,kBAAmB,CAFnB,YAAa,CACb,kBAAmB,CAEnB,WAED,CAEA,yCACC,oBAWD,CAJC,yGAEC,YACD,CAGD,uCACC,eACD,CAEA,sDACC,gBACD,CAEA,sDACC,qBACD,CAEA,sDACC,gBACD,CAGC,yFACC,YACD,CE/CF,eCGC,eDwGD,CA3GA,qECOE,qCDoGF,CA3GA,eAGC,6CAA8C,CAE9C,+CAAgD,CADhD,iCAuGD,CApGC,yCACC,kBAAmB,CAGnB,yCAA0C,CAO1C,qCAAsC,CADtC,kCAAmC,CAPnC,aAAc,CADd,SAUD,CAEA,uCACC,QACD,CAGC,gEAEC,oCACD,CAIA,kEACC,YACD,CAGD,gHAIC,qCAAsC,CADtC,kCAED,CAEA,mCAEC,SAaD,CAVC,0DAQC,eAAgB,CAHhB,QAAS,CAHT,UAOD,CAGD,kCAEC,SAWD,CATC,uDAEC,QAMD,CAHC,yFACC,eACD,CASD,kFACC,mCACD,CAMA,wEACC,cACD,CAEA,iFACC,aAAc,CACd,UACD,CAGD,qBACC,YACD,CAtGD,qCAyGE,QAEF,CAYC,+FACC,cACD,CAEA,iJAEC,mCACD,CAEA,qHACC,aACD,CAIC,6JAEC,2BAA4B,CAD5B,wBAED,CAGA,2JAEC,4BAA6B,CAD7B,yBAED,CASD,8RACC,mCACD,CAWA,qHACC,cACD,CAIC,6JAEC,4BAA6B,CAD7B,yBAED,CAGA,2JAEC,2BAA4B,CAD5B,wBAED,CASD,8RACC,oCACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../mixins/_unselectable.css";

.ck.ck-toolbar {
	@mixin ck-unselectable;

	display: flex;
	flex-flow: row nowrap;
	align-items: center;

	& > .ck-toolbar__items {
		display: flex;
		flex-flow: row wrap;
		align-items: center;
		flex-grow: 1;

	}

	& .ck.ck-toolbar__separator {
		display: inline-block;

		/*
		 * A leading or trailing separator makes no sense (separates from nothing on one side).
		 * For instance, it can happen when toolbar items (also separators) are getting grouped one by one and
		 * moved to another toolbar in the dropdown.
		 */
		&:first-child,
		&:last-child {
			display: none;
		}
	}

	& .ck-toolbar__line-break {
		flex-basis: 100%;
	}

	&.ck-toolbar_grouping > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	&.ck-toolbar_vertical > .ck-toolbar__items {
		flex-direction: column;
	}

	&.ck-toolbar_floating > .ck-toolbar__items {
		flex-wrap: nowrap;
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		& > .ck-dropdown__button .ck-dropdown__arrow {
			display: none;
		}
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Makes element unselectable.
 */
@define-mixin ck-unselectable {
	-moz-user-select: none;
	-webkit-user-select: none;
	-ms-user-select: none;
	user-select: none
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";
@import "@ckeditor/ckeditor5-ui/theme/mixins/_dir.css";

.ck.ck-toolbar {
	@mixin ck-rounded-corners;

	background: var(--ck-color-toolbar-background);
	padding: 0 var(--ck-spacing-small);
	border: 1px solid var(--ck-color-toolbar-border);

	& .ck.ck-toolbar__separator {
		align-self: stretch;
		width: 1px;
		min-width: 1px;
		background: var(--ck-color-toolbar-border);

		/*
		 * These margins make the separators look better in balloon toolbars (when aligned with the "tip").
		 * See https://github.com/ckeditor/ckeditor5/issues/7493.
		 */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	& .ck-toolbar__line-break {
		height: 0;
	}

	& > .ck-toolbar__items {
		& > *:not(.ck-toolbar__line-break) {
			/* (#11) Separate toolbar items. */
			margin-right: var(--ck-spacing-small);
		}

		/* Don't display a separator after an empty items container, for instance,
		when all items were grouped */
		&:empty + .ck.ck-toolbar__separator {
			display: none;
		}
	}

	& > .ck-toolbar__items > *:not(.ck-toolbar__line-break),
	& > .ck.ck-toolbar__grouped-dropdown {
		/* Make sure items wrapped to the next line have v-spacing */
		margin-top: var(--ck-spacing-small);
		margin-bottom: var(--ck-spacing-small);
	}

	&.ck-toolbar_vertical {
		/* Items in a vertical toolbar span the entire width. */
		padding: 0;

		/* Specificity matters here. See https://github.com/ckeditor/ckeditor5-theme-lark/issues/168. */
		& > .ck-toolbar__items > .ck {
			/* Items in a vertical toolbar should span the horizontal space. */
			width: 100%;

			/* Items in a vertical toolbar should have no margin. */
			margin: 0;

			/* Items in a vertical toolbar span the entire width so rounded corners are pointless. */
			border-radius: 0;
		}
	}

	&.ck-toolbar_compact {
		/* No spacing around items. */
		padding: 0;

		& > .ck-toolbar__items > * {
			/* Compact toolbar items have no spacing between them. */
			margin: 0;

			/* "Middle" children should have no rounded corners. */
			&:not(:first-child):not(:last-child) {
				border-radius: 0;
			}
		}
	}

	& > .ck.ck-toolbar__grouped-dropdown {
		/*
		 * Dropdown button has asymmetric padding to fit the arrow.
		 * This button has no arrow so let's revert that padding back to normal.
		 */
		& > .ck.ck-button.ck-dropdown__button {
			padding-left: var(--ck-spacing-tiny);
		}
	}

	/* A drop-down containing the nested toolbar with configured items. */
	& .ck-toolbar__nested-toolbar-dropdown {
		/* Prevent empty space in the panel when the dropdown label is visible and long but the toolbar has few items. */
		& > .ck-dropdown__panel {
			min-width: auto;
		}

		& > .ck-button > .ck-button__label {
			max-width: 7em;
			width: auto;
		}
	}

	&:focus {
		outline: none;
	}

	@nest .ck-toolbar-container & {
		border: 0;
	}
}

/* stylelint-disable */

/*
 * Styles for RTL toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="rtl"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="rtl"] {
	& > .ck-toolbar__items > .ck {
		margin-right: 0;
	}

	&:not(.ck-toolbar_compact) > .ck-toolbar__items > .ck {
		/* (#11) Separate toolbar items. */
		margin-left: var(--ck-spacing-small);
	}

	& > .ck-toolbar__items > .ck:last-child {
		margin-left: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-left: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-left: var(--ck-spacing-small);
	}
}

/*
 * Styles for LTR toolbars.
 *
 * Note: In some cases (e.g. a decoupled editor), the toolbar has its own "dir"
 * because its parent is not controlled by the editor framework.
 */
[dir="ltr"] .ck.ck-toolbar,
.ck.ck-toolbar[dir="ltr"] {
	& > .ck-toolbar__items > .ck:last-child {
		margin-right: 0;
	}

	&.ck-toolbar_compact > .ck-toolbar__items > .ck {
		/* No rounded corners on the right side of the first child. */
		&:first-child {
			border-top-right-radius: 0;
			border-bottom-right-radius: 0;
		}

		/* No rounded corners on the left side of the last child. */
		&:last-child {
			border-top-left-radius: 0;
			border-bottom-left-radius: 0;
		}
	}

	/* Separate the the separator form the grouping dropdown when some items are grouped. */
	& > .ck.ck-toolbar__separator {
		margin-right: var(--ck-spacing-small);
	}

	/* Some spacing between the items and the separator before the grouped items dropdown. */
	&.ck-toolbar_grouping > .ck-toolbar__items:not(:empty):not(:only-child) {
		margin-right: var(--ck-spacing-small);
	}
}

/* stylelint-enable */
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Implements rounded corner interface for .ck-rounded-corners class.
 *
 * @see $ck-border-radius
 */
@define-mixin ck-rounded-corners {
	border-radius: 0;

	@nest .ck-rounded-corners &,
	&.ck-rounded-corners {
		border-radius: var(--ck-border-radius);
		@mixin-content;
	}
}
`],sourceRoot:""}]);const S=v},9205:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck.ck-balloon-panel.ck-tooltip{--ck-balloon-border-width:0px;--ck-balloon-arrow-offset:0px;--ck-balloon-arrow-half-width:4px;--ck-balloon-arrow-height:4px;--ck-tooltip-text-padding:4px;--ck-color-panel-background:var(--ck-color-tooltip-background);padding:0 var(--ck-spacing-medium);z-index:calc(var(--ck-z-dialog) + 100)}.ck.ck-balloon-panel.ck-tooltip .ck-tooltip__text{color:var(--ck-color-tooltip-text);font-size:.9em;line-height:1.5}.ck.ck-balloon-panel.ck-tooltip.ck-tooltip_multi-line .ck-tooltip__text{display:inline-block;max-width:200px;padding:var(--ck-tooltip-text-padding) 0;white-space:break-spaces}.ck.ck-balloon-panel.ck-tooltip{box-shadow:none}.ck.ck-balloon-panel.ck-tooltip:before{display:none}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/components/tooltip/tooltip.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/components/tooltip/tooltip.css"],names:[],mappings:"AAKA,gCCGC,6BAA8B,CAC9B,6BAA8B,CAC9B,iCAAkC,CAClC,6BAA8B,CAC9B,6BAA8B,CAC9B,8DAA+D,CAE/D,kCAAmC,CDTnC,sCACD,CCUC,kDAGC,kCAAmC,CAFnC,cAAe,CACf,eAED,CAEA,wEAEC,oBAAqB,CAErB,eAAgB,CADhB,wCAAyC,CAFzC,wBAID,CArBD,gCAwBC,eAMD,CAHC,uCACC,YACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-balloon-panel.ck-tooltip {
	z-index: calc( var(--ck-z-dialog) + 100 );
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../../../mixins/_rounded.css";

.ck.ck-balloon-panel.ck-tooltip {
	--ck-balloon-border-width: 0px;
	--ck-balloon-arrow-offset: 0px;
	--ck-balloon-arrow-half-width: 4px;
	--ck-balloon-arrow-height: 4px;
	--ck-tooltip-text-padding: 4px;
	--ck-color-panel-background: var(--ck-color-tooltip-background);

	padding: 0 var(--ck-spacing-medium);

	& .ck-tooltip__text {
		font-size: .9em;
		line-height: 1.5;
		color: var(--ck-color-tooltip-text);
	}

	&.ck-tooltip_multi-line .ck-tooltip__text {
		white-space: break-spaces;
		display: inline-block;
		padding: var(--ck-tooltip-text-padding) 0;
		max-width: 200px;
	}

	/* Reset balloon panel styles */
	box-shadow: none;

	/* Hide the default shadow of the .ck-balloon-panel tip */
	&::before {
		display: none;
	}
}
`],sourceRoot:""}]);const S=v},7676:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck-hidden{display:none!important}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{box-sizing:border-box;height:auto;position:static;width:auto}:root{--ck-z-default:1;--ck-z-panel:calc(var(--ck-z-default) + 999);--ck-z-dialog:9999}.ck-transitions-disabled,.ck-transitions-disabled *{transition:none!important}:root{--ck-powered-by-line-height:10px;--ck-powered-by-padding-vertical:2px;--ck-powered-by-padding-horizontal:4px;--ck-powered-by-text-color:#4f4f4f;--ck-powered-by-border-radius:var(--ck-border-radius);--ck-powered-by-background:#fff;--ck-powered-by-border-color:var(--ck-color-focus-border)}.ck.ck-balloon-panel.ck-powered-by-balloon{--ck-border-radius:var(--ck-powered-by-border-radius);background:var(--ck-powered-by-background);box-shadow:none;min-height:unset;z-index:calc(var(--ck-z-panel) - 1)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by{line-height:var(--ck-powered-by-line-height)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by a{align-items:center;cursor:pointer;display:flex;filter:grayscale(80%);line-height:var(--ck-powered-by-line-height);opacity:.66;padding:var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal)}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-powered-by__label{color:var(--ck-powered-by-text-color);cursor:pointer;font-size:7.5px;font-weight:700;letter-spacing:-.2px;line-height:normal;margin-right:4px;padding-left:2px;text-transform:uppercase}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by .ck-icon{cursor:pointer;display:block}.ck.ck-balloon-panel.ck-powered-by-balloon .ck.ck-powered-by:hover a{filter:grayscale(0);opacity:1}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_inside]{border-color:transparent}.ck.ck-balloon-panel.ck-powered-by-balloon[class*=position_border]{border:var(--ck-focus-ring);border-color:var(--ck-powered-by-border-color)}:root{--ck-color-base-foreground:#fafafa;--ck-color-base-background:#fff;--ck-color-base-border:#ccced1;--ck-color-base-action:#53a336;--ck-color-base-focus:#6cb5f9;--ck-color-base-text:#333;--ck-color-base-active:#2977ff;--ck-color-base-active-focus:#0d65ff;--ck-color-base-error:#db3700;--ck-color-focus-border-coordinates:218,81.8%,56.9%;--ck-color-focus-border:hsl(var(--ck-color-focus-border-coordinates));--ck-color-focus-outer-shadow:#cae1fc;--ck-color-focus-disabled-shadow:rgba(119,186,248,.3);--ck-color-focus-error-shadow:rgba(255,64,31,.3);--ck-color-text:var(--ck-color-base-text);--ck-color-shadow-drop:rgba(0,0,0,.15);--ck-color-shadow-drop-active:rgba(0,0,0,.2);--ck-color-shadow-inner:rgba(0,0,0,.1);--ck-color-button-default-background:transparent;--ck-color-button-default-hover-background:#f0f0f0;--ck-color-button-default-active-background:#f0f0f0;--ck-color-button-default-disabled-background:transparent;--ck-color-button-on-background:#f0f7ff;--ck-color-button-on-hover-background:#dbecff;--ck-color-button-on-active-background:#dbecff;--ck-color-button-on-disabled-background:#f0f2f4;--ck-color-button-on-color:#2977ff;--ck-color-button-action-background:var(--ck-color-base-action);--ck-color-button-action-hover-background:#4d9d30;--ck-color-button-action-active-background:#4d9d30;--ck-color-button-action-disabled-background:#7ec365;--ck-color-button-action-text:var(--ck-color-base-background);--ck-color-button-save:#008a00;--ck-color-button-cancel:#db3700;--ck-color-switch-button-off-background:#939393;--ck-color-switch-button-off-hover-background:#7d7d7d;--ck-color-switch-button-on-background:var(--ck-color-button-action-background);--ck-color-switch-button-on-hover-background:#4d9d30;--ck-color-switch-button-inner-background:var(--ck-color-base-background);--ck-color-switch-button-inner-shadow:rgba(0,0,0,.1);--ck-color-dropdown-panel-background:var(--ck-color-base-background);--ck-color-dropdown-panel-border:var(--ck-color-base-border);--ck-color-dialog-background:var(--ck-custom-background);--ck-color-dialog-form-header-border:var(--ck-custom-border);--ck-color-input-background:var(--ck-color-base-background);--ck-color-input-border:var(--ck-color-base-border);--ck-color-input-error-border:var(--ck-color-base-error);--ck-color-input-text:var(--ck-color-base-text);--ck-color-input-disabled-background:#f2f2f2;--ck-color-input-disabled-border:var(--ck-color-base-border);--ck-color-input-disabled-text:#757575;--ck-color-list-background:var(--ck-color-base-background);--ck-color-list-button-hover-background:var(--ck-color-button-default-hover-background);--ck-color-list-button-on-background:var(--ck-color-button-on-color);--ck-color-list-button-on-background-focus:var(--ck-color-button-on-color);--ck-color-list-button-on-text:var(--ck-color-base-background);--ck-color-panel-background:var(--ck-color-base-background);--ck-color-panel-border:var(--ck-color-base-border);--ck-color-toolbar-background:var(--ck-color-base-background);--ck-color-toolbar-border:var(--ck-color-base-border);--ck-color-tooltip-background:var(--ck-color-base-text);--ck-color-tooltip-text:var(--ck-color-base-background);--ck-color-engine-placeholder-text:#707070;--ck-color-upload-bar-background:#6cb5f9;--ck-color-link-default:#0000f0;--ck-color-link-selected-background:rgba(31,176,255,.1);--ck-color-link-fake-selection:rgba(31,176,255,.3);--ck-color-highlight-background:#ff0;--ck-color-light-red:#fcc;--ck-disabled-opacity:.5;--ck-focus-outer-shadow-geometry:0 0 0 3px;--ck-focus-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);--ck-focus-disabled-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);--ck-focus-error-outer-shadow:var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);--ck-focus-ring:1px solid var(--ck-color-focus-border);--ck-font-size-base:13px;--ck-line-height-base:1.84615;--ck-font-face:Helvetica,Arial,Tahoma,Verdana,Sans-Serif;--ck-font-size-tiny:0.7em;--ck-font-size-small:0.75em;--ck-font-size-normal:1em;--ck-font-size-big:1.4em;--ck-font-size-large:1.8em;--ck-ui-component-min-height:2.3em}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset,.ck.ck-reset_all{word-wrap:break-word;background:transparent;border:0;margin:0;padding:0;text-decoration:none;transition:none;vertical-align:middle}.ck-reset_all :not(.ck-reset_all-excluded *),.ck.ck-reset_all{border-collapse:collapse;color:var(--ck-color-text);cursor:auto;float:none;font:normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);text-align:left;white-space:nowrap}.ck-reset_all .ck-rtl :not(.ck-reset_all-excluded *){text-align:right}.ck-reset_all iframe:not(.ck-reset_all-excluded *){vertical-align:inherit}.ck-reset_all textarea:not(.ck-reset_all-excluded *){white-space:pre-wrap}.ck-reset_all input[type=password]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text]:not(.ck-reset_all-excluded *),.ck-reset_all textarea:not(.ck-reset_all-excluded *){cursor:text}.ck-reset_all input[type=password][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all input[type=text][disabled]:not(.ck-reset_all-excluded *),.ck-reset_all textarea[disabled]:not(.ck-reset_all-excluded *){cursor:default}.ck-reset_all fieldset:not(.ck-reset_all-excluded *){border:2px groove #dfdee3;padding:10px}.ck-reset_all button:not(.ck-reset_all-excluded *)::-moz-focus-inner{border:0;padding:0}.ck[dir=rtl],.ck[dir=rtl] .ck{text-align:right}:root{--ck-border-radius:2px;--ck-inner-shadow:2px 2px 3px var(--ck-color-shadow-inner) inset;--ck-drop-shadow:0 1px 2px 1px var(--ck-color-shadow-drop);--ck-drop-shadow-active:0 3px 6px 1px var(--ck-color-shadow-drop-active);--ck-spacing-unit:0.6em;--ck-spacing-large:calc(var(--ck-spacing-unit)*1.5);--ck-spacing-standard:var(--ck-spacing-unit);--ck-spacing-medium:calc(var(--ck-spacing-unit)*0.8);--ck-spacing-small:calc(var(--ck-spacing-unit)*0.5);--ck-spacing-tiny:calc(var(--ck-spacing-unit)*0.3);--ck-spacing-extra-tiny:calc(var(--ck-spacing-unit)*0.16)}","",{version:3,sources:["webpack://./../ckeditor5-ui/theme/globals/_hidden.css","webpack://./../ckeditor5-ui/theme/globals/_reset.css","webpack://./../ckeditor5-ui/theme/globals/_zindex.css","webpack://./../ckeditor5-ui/theme/globals/_transition.css","webpack://./../ckeditor5-ui/theme/globals/_poweredby.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_colors.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_disabled.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_focus.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_fonts.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_reset.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_rounded.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_shadow.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-ui/globals/_spacing.css"],names:[],mappings:"AAQA,WAGC,sBACD,CCPA,2EAGC,qBAAsB,CAEtB,WAAY,CACZ,eAAgB,CAFhB,UAGD,CCPA,MACC,gBAAiB,CACjB,4CAA+C,CAC/C,kBACD,CCDA,oDAEC,yBACD,CCNA,MACC,gCAAiC,CACjC,oCAAqC,CACrC,sCAAuC,CACvC,kCAA2C,CAC3C,qDAAsD,CACtD,+BAA4C,CAC5C,yDACD,CAEA,2CACC,qDAAsD,CAGtD,0CAA2C,CAD3C,eAAgB,CAEhB,gBAAiB,CACjB,mCAiDD,CA/CC,6DACC,4CAoCD,CAlCC,+DAGC,kBAAmB,CAFnB,cAAe,CACf,YAAa,CAGb,qBAAsB,CACtB,4CAA6C,CAF7C,WAAY,CAGZ,qFACD,CAEA,mFASC,qCAAsC,CAFtC,cAAe,CANf,eAAgB,CAIhB,eAAiB,CAHjB,oBAAqB,CAMrB,kBAAmB,CAFnB,gBAAiB,CAHjB,gBAAiB,CACjB,wBAOD,CAEA,sEAEC,cAAe,CADf,aAED,CAGC,qEACC,mBAAqB,CACrB,SACD,CAIF,mEACC,wBACD,CAEA,mEACC,2BAA4B,CAC5B,8CACD,CChED,MACC,kCAAmD,CACnD,+BAAoD,CACpD,8BAAkD,CAClD,8BAAuD,CACvD,6BAAmD,CACnD,yBAA+C,CAC/C,8BAAsD,CACtD,oCAA4D,CAC5D,6BAAkD,CAIlD,mDAA4D,CAC5D,qEAA+E,CAC/E,qCAA4D,CAC5D,qDAA8D,CAC9D,gDAAyD,CACzD,yCAAqD,CACrD,sCAAsD,CACtD,4CAA0D,CAC1D,sCAAsD,CAItD,gDAAuD,CACvD,kDAAiE,CACjE,mDAAkE,CAClE,yDAA8D,CAE9D,uCAA6D,CAC7D,6CAAoE,CACpE,8CAAoE,CACpE,gDAAiE,CACjE,kCAAyD,CAGzD,+DAAsE,CACtE,iDAAsE,CACtE,kDAAsE,CACtE,oDAAoE,CACpE,6DAAsE,CAEtE,8BAAoD,CACpD,gCAAqD,CAErD,+CAA8D,CAC9D,qDAAiE,CACjE,+EAAqF,CACrF,oDAAuE,CACvE,yEAA8E,CAC9E,oDAAgE,CAIhE,oEAA2E,CAC3E,4DAAoE,CAIpE,wDAAiE,CACjE,4DAAmE,CAInE,2DAAoE,CACpE,mDAA6D,CAC7D,wDAAgE,CAChE,+CAA0D,CAC1D,4CAA2D,CAC3D,4DAAoE,CACpE,sCAAsD,CAItD,0DAAmE,CACnE,uFAA6F,CAC7F,oEAA2E,CAC3E,0EAA+E,CAC/E,8DAAsE,CAItE,2DAAoE,CACpE,mDAA6D,CAI7D,6DAAsE,CACtE,qDAA+D,CAI/D,uDAAgE,CAChE,uDAAiE,CAIjE,0CAAyD,CAIzD,wCAA2D,CAI3D,+BAAoD,CACpD,uDAAmE,CACnE,kDAAgE,CAIhE,oCAAyD,CAIzD,yBAAgD,CChHhD,wBAAyB,CCAzB,0CAA2C,CAK3C,gGAAiG,CAKjG,4GAA6G,CAK7G,sGAAuG,CAKvG,sDAAuD,CCvBvD,wBAAyB,CACzB,6BAA8B,CAC9B,wDAA6D,CAE7D,yBAA0B,CAC1B,2BAA4B,CAC5B,yBAA0B,CAC1B,wBAAyB,CACzB,0BAA2B,CCJ3B,kCJgHD,CI1GA,2EAaC,oBAAqB,CANrB,sBAAuB,CADvB,QAAS,CAFT,QAAS,CACT,SAAU,CAGV,oBAAqB,CAErB,eAAgB,CADhB,qBAKD,CAKA,8DAGC,wBAAyB,CAEzB,0BAA2B,CAG3B,WAAY,CACZ,UAAW,CALX,iGAAkG,CAElG,eAAgB,CAChB,kBAGD,CAGC,qDACC,gBACD,CAEA,mDAEC,sBACD,CAEA,qDACC,oBACD,CAEA,mLAGC,WACD,CAEA,iNAGC,cACD,CAEA,qDAEC,yBAAoC,CADpC,YAED,CAEA,qEAGC,QAAQ,CADR,SAED,CAMD,8BAEC,gBACD,CCnFA,MACC,sBAAuB,CCAvB,gEAAiE,CAKjE,0DAA2D,CAK3D,wEAAyE,CCbzE,uBAA8B,CAC9B,mDAA2D,CAC3D,4CAAkD,CAClD,oDAA4D,CAC5D,mDAA2D,CAC3D,kDAA2D,CAC3D,yDFFD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class which hides an element in DOM.
 */
.ck-hidden {
	/* Override selector specificity. Otherwise, all elements with some display
	style defined will override this one, which is not a desired result. */
	display: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	box-sizing: border-box;
	width: auto;
	height: auto;
	position: static;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-z-default: 1;
	--ck-z-panel: calc( var(--ck-z-default) + 999 );
	--ck-z-dialog: 9999;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A class that disables all transitions of the element and its children.
 */
.ck-transitions-disabled,
.ck-transitions-disabled * {
	transition: none !important;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-powered-by-line-height: 10px;
	--ck-powered-by-padding-vertical: 2px;
	--ck-powered-by-padding-horizontal: 4px;
	--ck-powered-by-text-color: hsl(0, 0%, 31%);
	--ck-powered-by-border-radius: var(--ck-border-radius);
	--ck-powered-by-background: hsl(0, 0%, 100%);
	--ck-powered-by-border-color: var(--ck-color-focus-border);
}

.ck.ck-balloon-panel.ck-powered-by-balloon {
	--ck-border-radius: var(--ck-powered-by-border-radius);

	box-shadow: none;
	background: var(--ck-powered-by-background);
	min-height: unset;
	z-index: calc( var(--ck-z-panel) - 1 );

	& .ck.ck-powered-by {
		line-height: var(--ck-powered-by-line-height);

		& a {
			cursor: pointer;
			display: flex;
			align-items: center;
			opacity: .66;
			filter: grayscale(80%);
			line-height: var(--ck-powered-by-line-height);
			padding: var(--ck-powered-by-padding-vertical) var(--ck-powered-by-padding-horizontal);
		}

		& .ck-powered-by__label {
			font-size: 7.5px;
			letter-spacing: -.2px;
			padding-left: 2px;
			text-transform: uppercase;
			font-weight: bold;
			margin-right: 4px;
			cursor: pointer;
			line-height: normal;
			color: var(--ck-powered-by-text-color);

		}

		& .ck-icon {
			display: block;
			cursor: pointer;
		}

		&:hover {
			& a {
				filter: grayscale(0%);
				opacity: 1;
			}
		}
	}

	&[class*="position_inside"] {
		border-color: transparent;
	}

	&[class*="position_border"] {
		border: var(--ck-focus-ring);
		border-color: var(--ck-powered-by-border-color);
	}
}

`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-base-foreground: 								hsl(0, 0%, 98%);
	--ck-color-base-background: 								hsl(0, 0%, 100%);
	--ck-color-base-border: 									hsl(220, 6%, 81%);
	--ck-color-base-action: 									hsl(104, 50.2%, 42.5%);
	--ck-color-base-focus: 										hsl(209, 92%, 70%);
	--ck-color-base-text: 										hsl(0, 0%, 20%);
	--ck-color-base-active: 									hsl(218.1, 100%, 58%);
	--ck-color-base-active-focus:								hsl(218.2, 100%, 52.5%);
	--ck-color-base-error:										hsl(15, 100%, 43%);

	/* -- Generic colors ------------------------------------------------------------------------ */

	--ck-color-focus-border-coordinates: 						218, 81.8%, 56.9%;
	--ck-color-focus-border: 									hsl(var(--ck-color-focus-border-coordinates));
	--ck-color-focus-outer-shadow:								hsl(212.4, 89.3%, 89%);
	--ck-color-focus-disabled-shadow:							hsla(209, 90%, 72%,.3);
	--ck-color-focus-error-shadow:								hsla(9,100%,56%,.3);
	--ck-color-text: 											var(--ck-color-base-text);
	--ck-color-shadow-drop: 									hsla(0, 0%, 0%, 0.15);
	--ck-color-shadow-drop-active:								hsla(0, 0%, 0%, 0.2);
	--ck-color-shadow-inner: 									hsla(0, 0%, 0%, 0.1);

	/* -- Buttons ------------------------------------------------------------------------------- */

	--ck-color-button-default-background: 						transparent;
	--ck-color-button-default-hover-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-active-background: 				hsl(0, 0%, 94.1%);
	--ck-color-button-default-disabled-background: 				transparent;

	--ck-color-button-on-background: 							hsl(212, 100%, 97.1%);
	--ck-color-button-on-hover-background: 						hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-active-background: 					hsl(211.7, 100%, 92.9%);
	--ck-color-button-on-disabled-background: 					hsl(211, 15%, 95%);
	--ck-color-button-on-color:									hsl(218.1, 100%, 58%);


	--ck-color-button-action-background: 						var(--ck-color-base-action);
	--ck-color-button-action-hover-background: 					hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-active-background: 				hsl(104, 53.2%, 40.2%);
	--ck-color-button-action-disabled-background: 				hsl(104, 44%, 58%);
	--ck-color-button-action-text: 								var(--ck-color-base-background);

	--ck-color-button-save: 									hsl(120, 100%, 27%);
	--ck-color-button-cancel: 									hsl(15, 100%, 43%);

	--ck-color-switch-button-off-background:					hsl(0, 0%, 57.6%);
	--ck-color-switch-button-off-hover-background:				hsl(0, 0%, 49%);
	--ck-color-switch-button-on-background:						var(--ck-color-button-action-background);
	--ck-color-switch-button-on-hover-background:				hsl(104, 53.2%, 40.2%);
	--ck-color-switch-button-inner-background:					var(--ck-color-base-background);
	--ck-color-switch-button-inner-shadow:						hsla(0, 0%, 0%, 0.1);

	/* -- Dropdown ------------------------------------------------------------------------------ */

	--ck-color-dropdown-panel-background: 						var(--ck-color-base-background);
	--ck-color-dropdown-panel-border: 							var(--ck-color-base-border);

	/* -- Dialog -------------------------------------------------------------------------------- */

	--ck-color-dialog-background: 								var(--ck-custom-background);
	--ck-color-dialog-form-header-border: 						var(--ck-custom-border);

	/* -- Input --------------------------------------------------------------------------------- */

	--ck-color-input-background: 								var(--ck-color-base-background);
	--ck-color-input-border: 									var(--ck-color-base-border);
	--ck-color-input-error-border:								var(--ck-color-base-error);
	--ck-color-input-text: 										var(--ck-color-base-text);
	--ck-color-input-disabled-background: 						hsl(0, 0%, 95%);
	--ck-color-input-disabled-border: 							var(--ck-color-base-border);
	--ck-color-input-disabled-text: 							hsl(0, 0%, 46%);

	/* -- List ---------------------------------------------------------------------------------- */

	--ck-color-list-background: 								var(--ck-color-base-background);
	--ck-color-list-button-hover-background: 					var(--ck-color-button-default-hover-background);
	--ck-color-list-button-on-background: 						var(--ck-color-button-on-color);
	--ck-color-list-button-on-background-focus: 				var(--ck-color-button-on-color);
	--ck-color-list-button-on-text:								var(--ck-color-base-background);

	/* -- Panel --------------------------------------------------------------------------------- */

	--ck-color-panel-background: 								var(--ck-color-base-background);
	--ck-color-panel-border: 									var(--ck-color-base-border);

	/* -- Toolbar ------------------------------------------------------------------------------- */

	--ck-color-toolbar-background: 								var(--ck-color-base-background);
	--ck-color-toolbar-border: 									var(--ck-color-base-border);

	/* -- Tooltip ------------------------------------------------------------------------------- */

	--ck-color-tooltip-background: 								var(--ck-color-base-text);
	--ck-color-tooltip-text: 									var(--ck-color-base-background);

	/* -- Engine -------------------------------------------------------------------------------- */

	--ck-color-engine-placeholder-text: 						hsl(0, 0%, 44%);

	/* -- Upload -------------------------------------------------------------------------------- */

	--ck-color-upload-bar-background:		 					hsl(209, 92%, 70%);

	/* -- Link -------------------------------------------------------------------------------- */

	--ck-color-link-default:									hsl(240, 100%, 47%);
	--ck-color-link-selected-background:						hsla(201, 100%, 56%, 0.1);
	--ck-color-link-fake-selection:								hsla(201, 100%, 56%, 0.3);

	/* -- Search result highlight ---------------------------------------------------------------- */

	--ck-color-highlight-background:							hsl(60, 100%, 50%);

	/* -- Generic colors ------------------------------------------------------------------------- */

	--ck-color-light-red:										hsl(0, 100%, 90%);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * An opacity value of disabled UI item.
	 */
	--ck-disabled-opacity: .5;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * The geometry of the of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow-geometry: 0 0 0 3px;

	/**
	 * A visual style of focused element's outer shadow.
	 */
	--ck-focus-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-outer-shadow);

	/**
	 * A visual style of focused element's outer shadow (when disabled).
	 */
	--ck-focus-disabled-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-disabled-shadow);

	/**
	 * A visual style of focused element's outer shadow (when has errors).
	 */
	--ck-focus-error-outer-shadow: var(--ck-focus-outer-shadow-geometry) var(--ck-color-focus-error-shadow);

	/**
	 * A visual style of focused element's border or outline.
	 */
	--ck-focus-ring: 1px solid var(--ck-color-focus-border);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-font-size-base: 13px;
	--ck-line-height-base: 1.84615;
	--ck-font-face: Helvetica, Arial, Tahoma, Verdana, Sans-Serif;

	--ck-font-size-tiny: 0.7em;
	--ck-font-size-small: 0.75em;
	--ck-font-size-normal: 1em;
	--ck-font-size-big: 1.4em;
	--ck-font-size-large: 1.8em;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/* This is super-important. This is **manually** adjusted so a button without an icon
	is never smaller than a button with icon, additionally making sure that text-less buttons
	are perfect squares. The value is also shared by other components which should stay "in-line"
	with buttons. */
	--ck-ui-component-min-height: 2.3em;
}

/**
 * Resets an element, ignoring its children.
 */
.ck.ck-reset,
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* Do not include inheritable rules here. */
	margin: 0;
	padding: 0;
	border: 0;
	background: transparent;
	text-decoration: none;
	vertical-align: middle;
	transition: none;

	/* https://github.com/ckeditor/ckeditor5-theme-lark/issues/105 */
	word-wrap: break-word;
}

/**
 * Resets an element AND its children.
 */
.ck.ck-reset_all,
.ck-reset_all *:not(.ck-reset_all-excluded *) {
	/* These are rule inherited by all children elements. */
	border-collapse: collapse;
	font: normal normal normal var(--ck-font-size-base)/var(--ck-line-height-base) var(--ck-font-face);
	color: var(--ck-color-text);
	text-align: left;
	white-space: nowrap;
	cursor: auto;
	float: none;
}

.ck-reset_all {
	& .ck-rtl *:not(.ck-reset_all-excluded *) {
		text-align: right;
	}

	& iframe:not(.ck-reset_all-excluded *) {
		/* For IE */
		vertical-align: inherit;
	}

	& textarea:not(.ck-reset_all-excluded *) {
		white-space: pre-wrap;
	}

	& textarea:not(.ck-reset_all-excluded *),
	& input[type="text"]:not(.ck-reset_all-excluded *),
	& input[type="password"]:not(.ck-reset_all-excluded *) {
		cursor: text;
	}

	& textarea[disabled]:not(.ck-reset_all-excluded *),
	& input[type="text"][disabled]:not(.ck-reset_all-excluded *),
	& input[type="password"][disabled]:not(.ck-reset_all-excluded *) {
		cursor: default;
	}

	& fieldset:not(.ck-reset_all-excluded *) {
		padding: 10px;
		border: 2px groove hsl(255, 7%, 88%);
	}

	& button:not(.ck-reset_all-excluded *)::-moz-focus-inner {
		/* See http://stackoverflow.com/questions/5517744/remove-extra-button-spacing-padding-in-firefox */
		padding: 0;
		border: 0
	}
}

/**
 * Default UI rules for RTL languages.
 */
.ck[dir="rtl"],
.ck[dir="rtl"] .ck {
	text-align: right;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * Default border-radius value.
 */
:root{
	--ck-border-radius: 2px;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	/**
	 * A visual style of element's inner shadow (i.e. input).
	 */
	--ck-inner-shadow: 2px 2px 3px var(--ck-color-shadow-inner) inset;

	/**
	 * A visual style of element's drop shadow (i.e. panel).
	 */
	--ck-drop-shadow: 0 1px 2px 1px var(--ck-color-shadow-drop);

	/**
	 * A visual style of element's active shadow (i.e. comment or suggestion).
	 */
	--ck-drop-shadow-active: 0 3px 6px 1px var(--ck-color-shadow-drop-active);
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-spacing-unit: 						0.6em;
	--ck-spacing-large: 					calc(var(--ck-spacing-unit) * 1.5);
	--ck-spacing-standard: 					var(--ck-spacing-unit);
	--ck-spacing-medium: 					calc(var(--ck-spacing-unit) * 0.8);
	--ck-spacing-small: 					calc(var(--ck-spacing-unit) * 0.5);
	--ck-spacing-tiny: 						calc(var(--ck-spacing-unit) * 0.3);
	--ck-spacing-extra-tiny: 				calc(var(--ck-spacing-unit) * 0.16);
}
`],sourceRoot:""}]);const S=v},695:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,":root{--ck-color-resizer:var(--ck-color-focus-border);--ck-color-resizer-tooltip-background:#262626;--ck-color-resizer-tooltip-text:#f2f2f2;--ck-resizer-border-radius:var(--ck-border-radius);--ck-resizer-tooltip-offset:10px;--ck-resizer-tooltip-height:calc(var(--ck-spacing-small)*2 + 10px)}.ck .ck-widget,.ck .ck-widget.ck-widget_with-selection-handle{position:relative}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{position:absolute}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{display:block}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{visibility:visible}.ck .ck-size-view{background:var(--ck-color-resizer-tooltip-background);border:1px solid var(--ck-color-resizer-tooltip-text);border-radius:var(--ck-resizer-border-radius);color:var(--ck-color-resizer-tooltip-text);display:block;font-size:var(--ck-font-size-tiny);height:var(--ck-resizer-tooltip-height);line-height:var(--ck-resizer-tooltip-height);padding:0 var(--ck-spacing-small)}.ck .ck-size-view.ck-orientation-above-center,.ck .ck-size-view.ck-orientation-bottom-left,.ck .ck-size-view.ck-orientation-bottom-right,.ck .ck-size-view.ck-orientation-top-left,.ck .ck-size-view.ck-orientation-top-right{position:absolute}.ck .ck-size-view.ck-orientation-top-left{left:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-top-right{right:var(--ck-resizer-tooltip-offset);top:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-right{bottom:var(--ck-resizer-tooltip-offset);right:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-bottom-left{bottom:var(--ck-resizer-tooltip-offset);left:var(--ck-resizer-tooltip-offset)}.ck .ck-size-view.ck-orientation-above-center{left:50%;top:calc(var(--ck-resizer-tooltip-height)*-1);transform:translate(-50%)}:root{--ck-widget-outline-thickness:3px;--ck-widget-handler-icon-size:16px;--ck-widget-handler-animation-duration:200ms;--ck-widget-handler-animation-curve:ease;--ck-color-widget-blurred-border:#dedede;--ck-color-widget-hover-border:#ffc83d;--ck-color-widget-editable-focus-background:var(--ck-color-base-background);--ck-color-widget-drag-handler-icon-color:var(--ck-color-base-background)}.ck .ck-widget{outline-color:transparent;outline-style:solid;outline-width:var(--ck-widget-outline-thickness);transition:outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_selected,.ck .ck-widget.ck-widget_selected:hover{outline:var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border)}.ck .ck-widget:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-editor__nested-editable{border:1px solid transparent}.ck .ck-editor__nested-editable.ck-editor__nested-editable_focused,.ck .ck-editor__nested-editable:focus{background-color:var(--ck-color-widget-editable-focus-background);border:var(--ck-focus-ring);box-shadow:var(--ck-inner-shadow),0 0;outline:none}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{background-color:transparent;border-radius:var(--ck-border-radius) var(--ck-border-radius) 0 0;box-sizing:border-box;left:calc(0px - var(--ck-widget-outline-thickness));opacity:0;padding:4px;top:0;transform:translateY(-100%);transition:background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon{color:var(--ck-color-widget-drag-handler-icon-color);height:var(--ck-widget-handler-icon-size);width:var(--ck-widget-handler-icon-size)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:0;transition:opacity .3s var(--ck-widget-handler-animation-curve)}.ck .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover .ck-icon .ck-icon__selected-indicator{opacity:1}.ck .ck-widget.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle{background-color:var(--ck-color-widget-hover-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{background-color:var(--ck-color-focus-border);opacity:1}.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator,.ck .ck-widget.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle .ck-icon .ck-icon__selected-indicator{opacity:1}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle{left:auto;right:calc(0px - var(--ck-widget-outline-thickness))}.ck.ck-editor__editable.ck-read-only .ck-widget{transition:none}.ck.ck-editor__editable.ck-read-only .ck-widget:not(.ck-widget_selected){--ck-widget-outline-thickness:0px}.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle,.ck.ck-editor__editable.ck-read-only .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected:hover{outline-color:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle:hover>.ck-widget__selection-handle:hover,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle,.ck.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected.ck-widget_with-selection-handle>.ck-widget__selection-handle:hover{background:var(--ck-color-widget-blurred-border)}.ck.ck-editor__editable blockquote>.ck-widget.ck-widget_with-selection-handle:first-child,.ck.ck-editor__editable>.ck-widget.ck-widget_with-selection-handle:first-child{margin-top:calc(1em + var(--ck-widget-handler-icon-size))}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widget.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widget.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_focus.css","webpack://./../ckeditor5-theme-lark/theme/mixins/_shadow.css"],names:[],mappings:"AAKA,MACC,+CAAgD,CAChD,6CAAsD,CACtD,uCAAgD,CAEhD,kDAAmD,CACnD,gCAAiC,CACjC,kEACD,CAOA,8DAEC,iBAqBD,CAnBC,4EACC,iBAOD,CALC,qFAGC,aACD,CASD,iLACC,kBACD,CAGD,kBACC,qDAAsD,CAEtD,qDAAsD,CACtD,6CAA8C,CAF9C,0CAA2C,CAI3C,aAAc,CADd,kCAAmC,CAGnC,uCAAwC,CACxC,4CAA6C,CAF7C,iCAsCD,CAlCC,8NAKC,iBACD,CAEA,0CAEC,qCAAsC,CADtC,oCAED,CAEA,2CAEC,sCAAuC,CADvC,oCAED,CAEA,8CACC,uCAAwC,CACxC,sCACD,CAEA,6CACC,uCAAwC,CACxC,qCACD,CAGA,8CAEC,QAAS,CADT,6CAAgD,CAEhD,yBACD,CCjFD,MACC,iCAAkC,CAClC,kCAAmC,CACnC,4CAA6C,CAC7C,wCAAyC,CAEzC,wCAAiD,CACjD,sCAAkD,CAClD,2EAA4E,CAC5E,yEACD,CAEA,eAGC,yBAA0B,CAD1B,mBAAoB,CADpB,gDAAiD,CAGjD,6GAUD,CARC,0EAEC,6EACD,CAEA,qBACC,iDACD,CAGD,gCACC,4BAWD,CAPC,yGAKC,iEAAkE,CCnCnE,2BAA2B,CCF3B,qCAA8B,CDC9B,YDqCA,CAIA,4EAKC,4BAA6B,CAa7B,iEAAkE,CAhBlE,qBAAsB,CAoBtB,mDAAoD,CAhBpD,SAAU,CALV,WAAY,CAsBZ,KAAM,CAFN,2BAA4B,CAT5B,6SAgCD,CAnBC,qFAIC,oDAAqD,CADrD,yCAA0C,CAD1C,wCAWD,CANC,kHACC,SAAU,CAGV,+DACD,CAID,wHACC,SACD,CAID,kFAEC,oDAAqD,CADrD,SAED,CAKC,oMAEC,6CAA8C,CAD9C,SAOD,CAHC,gRACC,SACD,CAOH,qFACC,SAAU,CACV,oDACD,CAGA,gDAEC,eAkBD,CAhBC,yEAOC,iCACD,CAGC,gOAEC,gDACD,CAOD,wIAEC,mDAQD,CALE,ghBAEC,gDACD,CAKH,yKAOC,yDACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-color-resizer: var(--ck-color-focus-border);
	--ck-color-resizer-tooltip-background: hsl(0, 0%, 15%);
	--ck-color-resizer-tooltip-text: hsl(0, 0%, 95%);

	--ck-resizer-border-radius: var(--ck-border-radius);
	--ck-resizer-tooltip-offset: 10px;
	--ck-resizer-tooltip-height: calc(var(--ck-spacing-small) * 2 + 10px);
}

.ck .ck-widget {
	/* This is neccessary for type around UI to be positioned properly. */
	position: relative;
}

.ck .ck-widget.ck-widget_with-selection-handle {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;

	& .ck-widget__selection-handle {
		position: absolute;

		& .ck-icon {
			/* Make sure the icon in not a subject to font-size or line-height to avoid
			unnecessary spacing around it. */
			display: block;
		}
	}

	/* Show the selection handle on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		visibility: visible;
	}

	/* Show the selection handle when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected > .ck-widget__selection-handle {
		visibility: visible;
	}
}

.ck .ck-size-view {
	background: var(--ck-color-resizer-tooltip-background);
	color: var(--ck-color-resizer-tooltip-text);
	border: 1px solid var(--ck-color-resizer-tooltip-text);
	border-radius: var(--ck-resizer-border-radius);
	font-size: var(--ck-font-size-tiny);
	display: block;
	padding: 0 var(--ck-spacing-small);
	height: var(--ck-resizer-tooltip-height);
	line-height: var(--ck-resizer-tooltip-height);

	&.ck-orientation-top-left,
	&.ck-orientation-top-right,
	&.ck-orientation-bottom-right,
	&.ck-orientation-bottom-left,
	&.ck-orientation-above-center {
		position: absolute;
	}

	&.ck-orientation-top-left {
		top: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-top-right {
		top: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-right {
		bottom: var(--ck-resizer-tooltip-offset);
		right: var(--ck-resizer-tooltip-offset);
	}

	&.ck-orientation-bottom-left {
		bottom: var(--ck-resizer-tooltip-offset);
		left: var(--ck-resizer-tooltip-offset);
	}

	/* Class applied if the widget is too small to contain the size label */
	&.ck-orientation-above-center {
		top: calc(var(--ck-resizer-tooltip-height) * -1);
		left: 50%;
		transform: translate(-50%);
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

@import "../mixins/_focus.css";
@import "../mixins/_shadow.css";

:root {
	--ck-widget-outline-thickness: 3px;
	--ck-widget-handler-icon-size: 16px;
	--ck-widget-handler-animation-duration: 200ms;
	--ck-widget-handler-animation-curve: ease;

	--ck-color-widget-blurred-border: hsl(0, 0%, 87%);
	--ck-color-widget-hover-border: hsl(43, 100%, 62%);
	--ck-color-widget-editable-focus-background: var(--ck-color-base-background);
	--ck-color-widget-drag-handler-icon-color: var(--ck-color-base-background);
}

.ck .ck-widget {
	outline-width: var(--ck-widget-outline-thickness);
	outline-style: solid;
	outline-color: transparent;
	transition: outline-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline: var(--ck-widget-outline-thickness) solid var(--ck-color-focus-border);
	}

	&:hover {
		outline-color: var(--ck-color-widget-hover-border);
	}
}

.ck .ck-editor__nested-editable {
	border: 1px solid transparent;

	/* The :focus style is applied before .ck-editor__nested-editable_focused class is rendered in the view.
	These styles show a different border for a blink of an eye, so \`:focus\` need to have same styles applied. */
	&.ck-editor__nested-editable_focused,
	&:focus {
		@mixin ck-focus-ring;
		@mixin ck-box-shadow var(--ck-inner-shadow);

		background-color: var(--ck-color-widget-editable-focus-background);
	}
}

.ck .ck-widget.ck-widget_with-selection-handle {
	& .ck-widget__selection-handle {
		padding: 4px;
		box-sizing: border-box;

		/* Background and opacity will be animated as the handler shows up or the widget gets selected. */
		background-color: transparent;
		opacity: 0;

		/* Transition:
		   * background-color for the .ck-widget_selected state change,
		   * visibility for hiding the handler,
		   * opacity for the proper look of the icon when the handler disappears. */
		transition:
			background-color var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			visibility var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),
			opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		/* Make only top corners round. */
		border-radius: var(--ck-border-radius) var(--ck-border-radius) 0 0;

		/* Place the drag handler outside the widget wrapper. */
		transform: translateY(-100%);
		left: calc(0px - var(--ck-widget-outline-thickness));
		top: 0;

		& .ck-icon {
			/* Make sure the dimensions of the icon are independent of the fon-size of the content. */
			width: var(--ck-widget-handler-icon-size);
			height: var(--ck-widget-handler-icon-size);
			color: var(--ck-color-widget-drag-handler-icon-color);

			/* The "selected" part of the icon is invisible by default */
			& .ck-icon__selected-indicator {
				opacity: 0;

				/* Note: The animation is longer on purpose. Simply feels better. */
				transition: opacity 300ms var(--ck-widget-handler-animation-curve);
			}
		}

		/* Advertise using the look of the icon that once clicked the handler, the widget will be selected. */
		&:hover .ck-icon .ck-icon__selected-indicator {
			opacity: 1;
		}
	}

	/* Show the selection handler on mouse hover over the widget, but not for nested widgets. */
	&:hover > .ck-widget__selection-handle {
		opacity: 1;
		background-color: var(--ck-color-widget-hover-border);
	}

	/* Show the selection handler when the widget is selected, but not for nested widgets. */
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		& > .ck-widget__selection-handle {
			opacity: 1;
			background-color: var(--ck-color-focus-border);

			/* When the widget is selected, notify the user using the proper look of the icon. */
			& .ck-icon .ck-icon__selected-indicator {
				opacity: 1;
			}
		}
	}
}

/* In a RTL environment, align the selection handler to the right side of the widget */
/* stylelint-disable-next-line no-descending-specificity */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__selection-handle {
	left: auto;
	right: calc(0px - var(--ck-widget-outline-thickness));
}

/* https://github.com/ckeditor/ckeditor5/issues/6415 */
.ck.ck-editor__editable.ck-read-only .ck-widget {
	/* Prevent the :hover outline from showing up because of the used outline-color transition. */
	transition: none;

	&:not(.ck-widget_selected) {
		/* Disable visual effects of hover/active widget when CKEditor is in readOnly mode.
		 * See: https://github.com/ckeditor/ckeditor5/issues/1261
		 *
		 * Leave the unit because this custom property is used in calc() by other features.
		 * See: https://github.com/ckeditor/ckeditor5/issues/6775
		 */
		--ck-widget-outline-thickness: 0px;
	}

	&.ck-widget_with-selection-handle {
		& .ck-widget__selection-handle,
		& .ck-widget__selection-handle:hover {
			background: var(--ck-color-widget-blurred-border);
		}
	}
}

/* Style the widget when it's selected but the editable it belongs to lost focus. */
/* stylelint-disable-next-line no-descending-specificity */
.ck.ck-editor__editable.ck-blurred .ck-widget {
	&.ck-widget_selected,
	&.ck-widget_selected:hover {
		outline-color: var(--ck-color-widget-blurred-border);

		&.ck-widget_with-selection-handle {
			& > .ck-widget__selection-handle,
			& > .ck-widget__selection-handle:hover {
				background: var(--ck-color-widget-blurred-border);
			}
		}
	}
}

.ck.ck-editor__editable > .ck-widget.ck-widget_with-selection-handle:first-child,
.ck.ck-editor__editable blockquote > .ck-widget.ck-widget_with-selection-handle:first-child {
	/* Do not crop selection handler if a widget is a first-child in the blockquote or in the root editable.
	In fact, anything with overflow: hidden.
	https://github.com/ckeditor/ckeditor5-block-quote/issues/28
	https://github.com/ckeditor/ckeditor5-widget/issues/44
	https://github.com/ckeditor/ckeditor5-widget/issues/66 */
	margin-top: calc(1em + var(--ck-widget-handler-icon-size));
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A visual style of focused element's border.
 */
@define-mixin ck-focus-ring {
	/* Disable native outline. */
	outline: none;
	border: var(--ck-focus-ring)
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

/**
 * A helper to combine multiple shadows.
 */
@define-mixin ck-box-shadow $shadowA, $shadowB: 0 0 {
	box-shadow: $shadowA, $shadowB;
}

/**
 * Gives an element a drop shadow so it looks like a floating panel.
 */
@define-mixin ck-drop-shadow {
	@mixin ck-box-shadow var(--ck-drop-shadow);
}
`],sourceRoot:""}]);const S=v},4095:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,".ck .ck-widget_with-resizer{position:relative}.ck .ck-widget__resizer{display:none;left:0;pointer-events:none;position:absolute;top:0}.ck-focused .ck-widget_with-resizer.ck-widget_selected>.ck-widget__resizer{display:block}.ck .ck-widget__resizer__handle{pointer-events:all;position:absolute}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{cursor:nwse-resize}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left,.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{cursor:nesw-resize}:root{--ck-resizer-size:10px;--ck-resizer-offset:calc(var(--ck-resizer-size)/-2 - 2px);--ck-resizer-border-width:1px}.ck .ck-widget__resizer{outline:1px solid var(--ck-color-resizer)}.ck .ck-widget__resizer__handle{background:var(--ck-color-focus-border);border:var(--ck-resizer-border-width) solid #fff;border-radius:var(--ck-resizer-border-radius);height:var(--ck-resizer-size);width:var(--ck-resizer-size)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-left{left:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-top-right{right:var(--ck-resizer-offset);top:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-right{bottom:var(--ck-resizer-offset);right:var(--ck-resizer-offset)}.ck .ck-widget__resizer__handle.ck-widget__resizer__handle-bottom-left{bottom:var(--ck-resizer-offset);left:var(--ck-resizer-offset)}","",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgetresize.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgetresize.css"],names:[],mappings:"AAKA,4BAEC,iBACD,CAEA,wBACC,YAAa,CAMb,MAAO,CAFP,mBAAoB,CAHpB,iBAAkB,CAMlB,KACD,CAGC,2EACC,aACD,CAGD,gCAIC,kBAAmB,CAHnB,iBAcD,CATC,4IAEC,kBACD,CAEA,4IAEC,kBACD,CCpCD,MACC,sBAAuB,CAGvB,yDAAiE,CACjE,6BACD,CAEA,wBACC,yCACD,CAEA,gCAGC,uCAAwC,CACxC,gDAA6D,CAC7D,6CAA8C,CAH9C,6BAA8B,CAD9B,4BAyBD,CAnBC,oEAEC,6BAA8B,CAD9B,4BAED,CAEA,qEAEC,8BAA+B,CAD/B,4BAED,CAEA,wEACC,+BAAgC,CAChC,8BACD,CAEA,uEACC,+BAAgC,CAChC,6BACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget_with-resizer {
	/* Make the widget wrapper a relative positioning container for the drag handle. */
	position: relative;
}

.ck .ck-widget__resizer {
	display: none;
	position: absolute;

	/* The wrapper itself should not interfere with the pointer device, only the handles should. */
	pointer-events: none;

	left: 0;
	top: 0;
}

.ck-focused .ck-widget_with-resizer.ck-widget_selected {
	& > .ck-widget__resizer {
		display: block;
	}
}

.ck .ck-widget__resizer__handle {
	position: absolute;

	/* Resizers are the only UI elements that should interfere with a pointer device. */
	pointer-events: all;

	&.ck-widget__resizer__handle-top-left,
	&.ck-widget__resizer__handle-bottom-right {
		cursor: nwse-resize;
	}

	&.ck-widget__resizer__handle-top-right,
	&.ck-widget__resizer__handle-bottom-left {
		cursor: nesw-resize;
	}
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-resizer-size: 10px;

	/* Set the resizer with a 50% offset. */
	--ck-resizer-offset: calc( ( var(--ck-resizer-size) / -2 ) - 2px);
	--ck-resizer-border-width: 1px;
}

.ck .ck-widget__resizer {
	outline: 1px solid var(--ck-color-resizer);
}

.ck .ck-widget__resizer__handle {
	width: var(--ck-resizer-size);
	height: var(--ck-resizer-size);
	background: var(--ck-color-focus-border);
	border: var(--ck-resizer-border-width) solid hsl(0, 0%, 100%);
	border-radius: var(--ck-resizer-border-radius);

	&.ck-widget__resizer__handle-top-left {
		top: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-top-right {
		top: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-right {
		bottom: var(--ck-resizer-offset);
		right: var(--ck-resizer-offset);
	}

	&.ck-widget__resizer__handle-bottom-left {
		bottom: var(--ck-resizer-offset);
		left: var(--ck-resizer-offset);
	}
}
`],sourceRoot:""}]);const S=v},8508:(k,A,b)=>{b.d(A,{A:()=>S});var y=b(9372),I=b.n(y),D=b(935),v=b.n(D)()(I());v.push([k.id,'.ck .ck-widget .ck-widget__type-around__button{display:block;overflow:hidden;position:absolute;z-index:var(--ck-z-default)}.ck .ck-widget .ck-widget__type-around__button svg{left:50%;position:absolute;top:50%;z-index:calc(var(--ck-z-default) + 2)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_before{left:min(10%,30px);top:calc(var(--ck-widget-outline-thickness)*-.5);transform:translateY(-50%)}.ck .ck-widget .ck-widget__type-around__button.ck-widget__type-around__button_after{bottom:calc(var(--ck-widget-outline-thickness)*-.5);right:min(10%,30px);transform:translateY(50%)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{content:"";display:block;left:1px;position:absolute;top:1px;z-index:calc(var(--ck-z-default) + 1)}.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:none;left:0;position:absolute;right:0}.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__fake-caret{left:calc(var(--ck-widget-outline-thickness)*-1);right:calc(var(--ck-widget-outline-thickness)*-1)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__fake-caret{display:block;top:calc(var(--ck-widget-outline-thickness)*-1 - 1px)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__fake-caret{bottom:calc(var(--ck-widget-outline-thickness)*-1 - 1px);display:block}.ck.ck-editor__editable.ck-read-only .ck-widget__type-around,.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around,.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around{display:none}:root{--ck-widget-type-around-button-size:20px;--ck-color-widget-type-around-button-active:var(--ck-color-focus-border);--ck-color-widget-type-around-button-hover:var(--ck-color-widget-hover-border);--ck-color-widget-type-around-button-blurred-editable:var(--ck-color-widget-blurred-border);--ck-color-widget-type-around-button-radar-start-alpha:0;--ck-color-widget-type-around-button-radar-end-alpha:.3;--ck-color-widget-type-around-button-icon:var(--ck-color-base-background)}.ck .ck-widget .ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button);border-radius:100px;height:var(--ck-widget-type-around-button-size);opacity:0;pointer-events:none;transition:opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve),background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);width:var(--ck-widget-type-around-button-size)}.ck .ck-widget .ck-widget__type-around__button svg{height:8px;margin-top:1px;transform:translate(-50%,-50%);transition:transform .5s ease;width:10px}.ck .ck-widget .ck-widget__type-around__button svg *{stroke-dasharray:10;stroke-dashoffset:0;fill:none;stroke:var(--ck-color-widget-type-around-button-icon);stroke-width:1.5px;stroke-linecap:round;stroke-linejoin:round}.ck .ck-widget .ck-widget__type-around__button svg line{stroke-dasharray:7}.ck .ck-widget .ck-widget__type-around__button:hover{animation:ck-widget-type-around-button-sonar 1s ease infinite}.ck .ck-widget .ck-widget__type-around__button:hover svg polyline{animation:ck-widget-type-around-arrow-dash 2s linear}.ck .ck-widget .ck-widget__type-around__button:hover svg line{animation:ck-widget-type-around-arrow-tip-dash 2s linear}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:1;pointer-events:auto}.ck .ck-widget:not(.ck-widget_selected)>.ck-widget__type-around>.ck-widget__type-around__button{background:var(--ck-color-widget-type-around-button-hover)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover{background:var(--ck-color-widget-type-around-button-active)}.ck .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:after,.ck .ck-widget>.ck-widget__type-around>.ck-widget__type-around__button:hover:after{background:linear-gradient(135deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.3));border-radius:100px;height:calc(var(--ck-widget-type-around-button-size) - 2px);width:calc(var(--ck-widget-type-around-button-size) - 2px)}.ck .ck-widget.ck-widget_with-selection-handle>.ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:20px}.ck .ck-widget .ck-widget__type-around__fake-caret{animation:ck-widget-type-around-fake-caret-pulse 1s linear infinite normal forwards;background:var(--ck-color-base-text);height:1px;outline:1px solid hsla(0,0%,100%,.5);pointer-events:none}.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_after,.ck .ck-widget.ck-widget_selected.ck-widget_type-around_show-fake-caret_before{outline-color:transparent}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected:hover,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected:hover{outline-color:var(--ck-color-widget-hover-border)}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after>.ck-widget__type-around>.ck-widget__type-around__button,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_after.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_selected.ck-widget_with-resizer>.ck-widget__resizer,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected:hover>.ck-widget__selection-handle,.ck .ck-widget.ck-widget_type-around_show-fake-caret_before.ck-widget_with-selection-handle.ck-widget_selected>.ck-widget__selection-handle{opacity:0}.ck[dir=rtl] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around>.ck-widget__type-around__button_before{margin-left:0;margin-right:20px}.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button,.ck-editor__nested-editable.ck-editor__editable_selected .ck-widget:hover>.ck-widget__type-around>.ck-widget__type-around__button{opacity:0;pointer-events:none}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover){background:var(--ck-color-widget-type-around-button-blurred-editable)}.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected>.ck-widget__type-around>.ck-widget__type-around__button:not(:hover) svg *{stroke:#999}@keyframes ck-widget-type-around-arrow-dash{0%{stroke-dashoffset:10}20%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-arrow-tip-dash{0%,20%{stroke-dashoffset:7}40%,to{stroke-dashoffset:0}}@keyframes ck-widget-type-around-button-sonar{0%{box-shadow:0 0 0 0 hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}50%{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-end-alpha))}to{box-shadow:0 0 0 5px hsla(var(--ck-color-focus-border-coordinates),var(--ck-color-widget-type-around-button-radar-start-alpha))}}@keyframes ck-widget-type-around-fake-caret-pulse{0%{opacity:1}49%{opacity:1}50%{opacity:0}99%{opacity:0}to{opacity:1}}',"",{version:3,sources:["webpack://./../ckeditor5-widget/theme/widgettypearound.css","webpack://./../ckeditor5-theme-lark/theme/ckeditor5-widget/widgettypearound.css"],names:[],mappings:"AASC,+CACC,aAAc,CAEd,eAAgB,CADhB,iBAAkB,CAElB,2BAwBD,CAtBC,mDAGC,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAEA,qFAGC,kBAAoB,CADpB,gDAAoD,CAGpD,0BACD,CAEA,oFAEC,mDAAuD,CACvD,mBAAqB,CAErB,yBACD,CAUA,mLACC,UAAW,CACX,aAAc,CAGd,QAAS,CAFT,iBAAkB,CAClB,OAAQ,CAER,qCACD,CAMD,2EACC,YAAa,CAEb,MAAO,CADP,iBAAkB,CAElB,OACD,CAOA,iFACC,gDAAqD,CACrD,iDACD,CAKA,wHAEC,aAAc,CADd,qDAED,CAKA,uHACC,wDAA6D,CAC7D,aACD,CAoBD,mOACC,YACD,CC3GA,MACC,wCAAyC,CACzC,wEAAyE,CACzE,8EAA+E,CAC/E,2FAA4F,CAC5F,wDAAyD,CACzD,uDAAwD,CACxD,yEACD,CAgBC,+CAGC,oDAAqD,CACrD,mBAAoB,CAFpB,+CAAgD,CAVjD,SAAU,CACV,mBAAoB,CAYnB,uMAAyM,CAJzM,8CAkDD,CA1CC,mDAEC,UAAW,CAGX,cAAe,CAFf,8BAA+B,CAC/B,6BAA8B,CAH9B,UAoBD,CAdC,qDACC,mBAAoB,CACpB,mBAAoB,CAEpB,SAAU,CACV,qDAAsD,CACtD,kBAAmB,CACnB,oBAAqB,CACrB,qBACD,CAEA,wDACC,kBACD,CAGD,qDAIC,6DAcD,CARE,kEACC,oDACD,CAEA,8DACC,wDACD,CAUF,uKAvED,SAAU,CACV,mBAwEC,CAOD,gGACC,0DACD,CAOA,uKAEC,2DAQD,CANC,mLAIC,uEAAkF,CADlF,mBAAoB,CADpB,2DAA4D,CAD5D,0DAID,CAOD,8GACC,gBACD,CAKA,mDAGC,mFAAoF,CAOpF,oCAAqC,CARrC,UAAW,CAOX,oCAAwC,CARxC,mBAUD,CAOC,6JAEC,yBACD,CAUA,yKACC,iDACD,CAMA,uOAlJD,SAAU,CACV,mBAmJC,CAoBA,6yBACC,SACD,CASF,uHACC,aAAc,CACd,iBACD,CAYG,iRAlMF,SAAU,CACV,mBAmME,CAQH,kIACC,qEAKD,CAHC,wIACC,WACD,CAGD,4CACC,GACC,oBACD,CACA,OACC,mBACD,CACD,CAEA,gDACC,OACC,mBACD,CACA,OACC,mBACD,CACD,CAEA,8CACC,GACC,6HACD,CACA,IACC,6HACD,CACA,GACC,+HACD,CACD,CAEA,kDACC,GACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,IACC,SACD,CACA,GACC,SACD,CACD",sourcesContent:[`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		display: block;
		position: absolute;
		overflow: hidden;
		z-index: var(--ck-z-default);

		& svg {
			position: absolute;
			top: 50%;
			left: 50%;
			z-index: calc(var(--ck-z-default) + 2);
		}

		&.ck-widget__type-around__button_before {
			/* Place it in the middle of the outline */
			top: calc(-0.5 * var(--ck-widget-outline-thickness));
			left: min(10%, 30px);

			transform: translateY(-50%);
		}

		&.ck-widget__type-around__button_after {
			/* Place it in the middle of the outline */
			bottom: calc(-0.5 * var(--ck-widget-outline-thickness));
			right: min(10%, 30px);

			transform: translateY(50%);
		}
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		&::after {
			content: "";
			display: block;
			position: absolute;
			top: 1px;
			left: 1px;
			z-index: calc(var(--ck-z-default) + 1);
		}
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		display: none;
		position: absolute;
		left: 0;
		right: 0;
	}

	/*
	 * When the widget is hovered the "fake caret" would normally be narrower than the
	 * extra outline displayed around the widget. Let's extend the "fake caret" to match
	 * the full width of the widget.
	 */
	&:hover > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		left: calc( -1 * var(--ck-widget-outline-thickness) );
		right: calc( -1 * var(--ck-widget-outline-thickness) );
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed before the widget (backward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_before > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		top: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}

	/*
	 * Styles for the horizontal "fake caret" when it should be displayed after the widget (forward keyboard navigation).
	 */
	&.ck-widget_type-around_show-fake-caret_after > .ck-widget__type-around > .ck-widget__type-around__fake-caret {
		bottom: calc( -1 * var(--ck-widget-outline-thickness) - 1px );
		display: block;
	}
}

/*
 * Integration with the read-only mode of the editor.
 */
.ck.ck-editor__editable.ck-read-only .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the restricted editing mode (feature) of the editor.
 */
.ck.ck-editor__editable.ck-restricted-editing_mode_restricted .ck-widget__type-around {
	display: none;
}

/*
 * Integration with the #isEnabled property of the WidgetTypeAround plugin.
 */
.ck.ck-editor__editable.ck-widget__type-around_disabled .ck-widget__type-around {
	display: none;
}
`,`/*
 * Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

:root {
	--ck-widget-type-around-button-size: 20px;
	--ck-color-widget-type-around-button-active: var(--ck-color-focus-border);
	--ck-color-widget-type-around-button-hover: var(--ck-color-widget-hover-border);
	--ck-color-widget-type-around-button-blurred-editable: var(--ck-color-widget-blurred-border);
	--ck-color-widget-type-around-button-radar-start-alpha: 0;
	--ck-color-widget-type-around-button-radar-end-alpha: .3;
	--ck-color-widget-type-around-button-icon: var(--ck-color-base-background);
}

@define-mixin ck-widget-type-around-button-visible {
	opacity: 1;
	pointer-events: auto;
}

@define-mixin ck-widget-type-around-button-hidden {
	opacity: 0;
	pointer-events: none;
}

.ck .ck-widget {
	/*
	 * Styles of the type around buttons
	 */
	& .ck-widget__type-around__button {
		width: var(--ck-widget-type-around-button-size);
		height: var(--ck-widget-type-around-button-size);
		background: var(--ck-color-widget-type-around-button);
		border-radius: 100px;
		transition: opacity var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve), background var(--ck-widget-handler-animation-duration) var(--ck-widget-handler-animation-curve);

		@mixin ck-widget-type-around-button-hidden;

		& svg {
			width: 10px;
			height: 8px;
			transform: translate(-50%,-50%);
			transition: transform .5s ease;
			margin-top: 1px;

			& * {
				stroke-dasharray: 10;
				stroke-dashoffset: 0;

				fill: none;
				stroke: var(--ck-color-widget-type-around-button-icon);
				stroke-width: 1.5px;
				stroke-linecap: round;
				stroke-linejoin: round;
			}

			& line {
				stroke-dasharray: 7;
			}
		}

		&:hover {
			/*
			 * Display the "sonar" around the button when hovered.
			 */
			animation: ck-widget-type-around-button-sonar 1s ease infinite;

			/*
			 * Animate active button's icon.
			 */
			& svg {
				& polyline {
					animation: ck-widget-type-around-arrow-dash 2s linear;
				}

				& line {
					animation: ck-widget-type-around-arrow-tip-dash 2s linear;
				}
			}
		}
	}

	/*
	 * Show type around buttons when the widget gets selected or being hovered.
	 */
	&.ck-widget_selected,
	&:hover {
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-visible;
		}
	}

	/*
	 * Styles for the buttons when the widget is NOT selected (but the buttons are visible
	 * and still can be hovered).
	 */
	&:not(.ck-widget_selected) > .ck-widget__type-around > .ck-widget__type-around__button {
		background: var(--ck-color-widget-type-around-button-hover);
	}

	/*
	 * Styles for the buttons when:
	 * - the widget is selected,
	 * - or the button is being hovered (regardless of the widget state).
	 */
	&.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button,
	& > .ck-widget__type-around > .ck-widget__type-around__button:hover {
		background: var(--ck-color-widget-type-around-button-active);

		&::after {
			width: calc(var(--ck-widget-type-around-button-size) - 2px);
			height: calc(var(--ck-widget-type-around-button-size) - 2px);
			border-radius: 100px;
			background: linear-gradient(135deg, hsla(0,0%,100%,0) 0%, hsla(0,0%,100%,.3) 100%);
		}
	}

	/*
	 * Styles for the "before" button when the widget has a selection handle. Because some space
	 * is consumed by the handle, the button must be moved slightly to the right to let it breathe.
	 */
	&.ck-widget_with-selection-handle > .ck-widget__type-around > .ck-widget__type-around__button_before {
		margin-left: 20px;
	}

	/*
	 * Styles for the horizontal "fake caret" which is displayed when the user navigates using the keyboard.
	 */
	& .ck-widget__type-around__fake-caret {
		pointer-events: none;
		height: 1px;
		animation: ck-widget-type-around-fake-caret-pulse linear 1s infinite normal forwards;

		/*
		 * The semi-transparent-outline+background combo improves the contrast
		 * when the background underneath the fake caret is dark.
		 */
		outline: solid 1px hsla(0, 0%, 100%, .5);
		background: var(--ck-color-base-text);
	}

	/*
	 * Styles of the widget when the "fake caret" is blinking (e.g. upon keyboard navigation).
	 * Despite the widget being physically selected in the model, its outline should disappear.
	 */
	&.ck-widget_selected {
		&.ck-widget_type-around_show-fake-caret_before,
		&.ck-widget_type-around_show-fake-caret_after {
			outline-color: transparent;
		}
	}

	&.ck-widget_type-around_show-fake-caret_before,
	&.ck-widget_type-around_show-fake-caret_after {
		/*
		 * When the "fake caret" is visible we simulate that the widget is not selected
		 * (despite being physically selected), so the outline color should be for the
		 * unselected widget.
		 */
		&.ck-widget_selected:hover {
			outline-color: var(--ck-color-widget-hover-border);
		}

		/*
		 * Styles of the type around buttons when the "fake caret" is blinking (e.g. upon keyboard navigation).
		 * In this state, the type around buttons would collide with the fake carets so they should disappear.
		 */
		& > .ck-widget__type-around > .ck-widget__type-around__button {
			@mixin ck-widget-type-around-button-hidden;
		}

		/*
		 * Fake horizontal caret integration with the selection handle. When the caret is visible, simply
		 * hide the handle because it intersects with the caret (and does not make much sense anyway).
		 */
		&.ck-widget_with-selection-handle {
			&.ck-widget_selected,
			&.ck-widget_selected:hover {
				& > .ck-widget__selection-handle {
					opacity: 0
				}
			}
		}

		/*
		 * Fake horizontal caret integration with the resize UI. When the caret is visible, simply
		 * hide the resize UI because it creates too much noise. It can be visible when the user
		 * hovers the widget, though.
		 */
		&.ck-widget_selected.ck-widget_with-resizer > .ck-widget__resizer {
			opacity: 0
		}
	}
}

/*
 * Styles for the "before" button when the widget has a selection handle in an RTL environment.
 * The selection handler is aligned to the right side of the widget so there is no need to create
 * additional space for it next to the "before" button.
 */
.ck[dir="rtl"] .ck-widget.ck-widget_with-selection-handle .ck-widget__type-around > .ck-widget__type-around__button_before {
	margin-left: 0;
	margin-right: 20px;
}

/*
 * Hide type around buttons when the widget is selected as a child of a selected
 * nested editable (e.g. mulit-cell table selection).
 *
 * See https://github.com/ckeditor/ckeditor5/issues/7263.
 */
.ck-editor__nested-editable.ck-editor__editable_selected {
	& .ck-widget {
		&.ck-widget_selected,
		&:hover {
			& > .ck-widget__type-around > .ck-widget__type-around__button {
				@mixin ck-widget-type-around-button-hidden;
			}
		}
	}
}

/*
 * Styles for the buttons when the widget is selected but the user clicked outside of the editor (blurred the editor).
 */
.ck-editor__editable.ck-blurred .ck-widget.ck-widget_selected > .ck-widget__type-around > .ck-widget__type-around__button:not(:hover) {
	background: var(--ck-color-widget-type-around-button-blurred-editable);

	& svg * {
		stroke: hsl(0,0%,60%);
	}
}

@keyframes ck-widget-type-around-arrow-dash {
	0% {
		stroke-dashoffset: 10;
	}
	20%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-arrow-tip-dash {
	0%, 20% {
		stroke-dashoffset: 7;
	}
	40%, 100% {
		stroke-dashoffset: 0;
	}
}

@keyframes ck-widget-type-around-button-sonar {
	0% {
		box-shadow: 0 0 0 0 hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
	50% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-end-alpha));
	}
	100% {
		box-shadow: 0 0 0 5px hsla(var(--ck-color-focus-border-coordinates), var(--ck-color-widget-type-around-button-radar-start-alpha));
	}
}

@keyframes ck-widget-type-around-fake-caret-pulse {
	0% {
		opacity: 1;
	}
	49% {
		opacity: 1;
	}
	50% {
		opacity: 0;
	}
	99% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}
}
`],sourceRoot:""}]);const S=v},935:k=>{k.exports=function(A){var b=[];return b.toString=function(){return this.map(function(y){var I=A(y);return y[2]?"@media ".concat(y[2]," {").concat(I,"}"):I}).join("")},b.i=function(y,I,D){typeof y=="string"&&(y=[[null,y,""]]);var v={};if(D)for(var S=0;S<this.length;S++){var B=this[S][0];B!=null&&(v[B]=!0)}for(var O=0;O<y.length;O++){var R=[].concat(y[O]);D&&v[R[0]]||(I&&(R[2]?R[2]="".concat(I," and ").concat(R[2]):R[2]=I),b.push(R))}},b}},9372:k=>{function A(y,I){return function(D){if(Array.isArray(D))return D}(y)||function(D,v){var S=D&&(typeof Symbol<"u"&&D[Symbol.iterator]||D["@@iterator"]);if(S!=null){var B,O,R=[],N=!0,P=!1;try{for(S=S.call(D);!(N=(B=S.next()).done)&&(R.push(B.value),!v||R.length!==v);N=!0);}catch(L){P=!0,O=L}finally{try{N||S.return==null||S.return()}finally{if(P)throw O}}return R}}(y,I)||function(D,v){if(D){if(typeof D=="string")return b(D,v);var S=Object.prototype.toString.call(D).slice(8,-1);if(S==="Object"&&D.constructor&&(S=D.constructor.name),S==="Map"||S==="Set")return Array.from(D);if(S==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(S))return b(D,v)}}(y,I)||function(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}()}function b(y,I){(I==null||I>y.length)&&(I=y.length);for(var D=0,v=new Array(I);D<I;D++)v[D]=y[D];return v}k.exports=function(y){var I=A(y,4),D=I[1],v=I[3];if(!v)return D;if(typeof btoa=="function"){var S=btoa(unescape(encodeURIComponent(JSON.stringify(v)))),B="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(S),O="/*# ".concat(B," */"),R=v.sources.map(function(N){return"/*# sourceURL=".concat(v.sourceRoot||"").concat(N," */")});return[D].concat(R).concat([O]).join(`
`)}return[D].join(`
`)}},2591:(k,A,b)=>{var y,I=function(){return y===void 0&&(y=!!(window&&document&&document.all&&!window.atob)),y},D=function(){var H={};return function(U){if(H[U]===void 0){var j=document.querySelector(U);if(window.HTMLIFrameElement&&j instanceof window.HTMLIFrameElement)try{j=j.contentDocument.head}catch{j=null}H[U]=j}return H[U]}}(),v=[];function S(H){for(var U=-1,j=0;j<v.length;j++)if(v[j].identifier===H){U=j;break}return U}function B(H,U){for(var j={},K=[],re=0;re<H.length;re++){var ke=H[re],me=U.base?ke[0]+U.base:ke[0],pt=j[me]||0,rt="".concat(me," ").concat(pt);j[me]=pt+1;var tt=S(rt),An={css:ke[1],media:ke[2],sourceMap:ke[3]};tt!==-1?(v[tt].references++,v[tt].updater(An)):v.push({identifier:rt,updater:Y(An,U),references:1}),K.push(rt)}return K}function O(H){var U=document.createElement("style"),j=H.attributes||{};if(j.nonce===void 0){var K=b.nc;K&&(j.nonce=K)}if(Object.keys(j).forEach(function(ke){U.setAttribute(ke,j[ke])}),typeof H.insert=="function")H.insert(U);else{var re=D(H.insert||"head");if(!re)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");re.appendChild(U)}return U}var R,N=(R=[],function(H,U){return R[H]=U,R.filter(Boolean).join(`
`)});function P(H,U,j,K){var re=j?"":K.media?"@media ".concat(K.media," {").concat(K.css,"}"):K.css;if(H.styleSheet)H.styleSheet.cssText=N(U,re);else{var ke=document.createTextNode(re),me=H.childNodes;me[U]&&H.removeChild(me[U]),me.length?H.insertBefore(ke,me[U]):H.appendChild(ke)}}function L(H,U,j){var K=j.css,re=j.media,ke=j.sourceMap;if(re?H.setAttribute("media",re):H.removeAttribute("media"),ke&&typeof btoa<"u"&&(K+=`
/*# sourceMappingURL=data:application/json;base64,`.concat(btoa(unescape(encodeURIComponent(JSON.stringify(ke))))," */")),H.styleSheet)H.styleSheet.cssText=K;else{for(;H.firstChild;)H.removeChild(H.firstChild);H.appendChild(document.createTextNode(K))}}var V=null,G=0;function Y(H,U){var j,K,re;if(U.singleton){var ke=G++;j=V||(V=O(U)),K=P.bind(null,j,ke,!1),re=P.bind(null,j,ke,!0)}else j=O(U),K=L.bind(null,j,U),re=function(){(function(me){if(me.parentNode===null)return!1;me.parentNode.removeChild(me)})(j)};return K(H),function(me){if(me){if(me.css===H.css&&me.media===H.media&&me.sourceMap===H.sourceMap)return;K(H=me)}else re()}}k.exports=function(H,U){(U=U||{}).singleton||typeof U.singleton=="boolean"||(U.singleton=I());var j=B(H=H||[],U);return function(K){if(K=K||[],Object.prototype.toString.call(K)==="[object Array]"){for(var re=0;re<j.length;re++){var ke=S(j[re]);v[ke].references--}for(var me=B(K,U),pt=0;pt<j.length;pt++){var rt=S(j[pt]);v[rt].references===0&&(v[rt].updater(),v.splice(rt,1))}j=me}}}}},h={};function m(k){var A=h[k];if(A!==void 0)return A.exports;var b=h[k]={id:k,exports:{}};return l[k](b,b.exports,m),b.exports}m.n=k=>{var A=k&&k.__esModule?()=>k.default:()=>k;return m.d(A,{a:A}),A},m.d=(k,A)=>{for(var b in A)m.o(A,b)&&!m.o(k,b)&&Object.defineProperty(k,b,{enumerable:!0,get:A[b]})},m.o=(k,A)=>Object.prototype.hasOwnProperty.call(k,A),m.nc=void 0;var w={};return(()=>{function k({emitter:i,activator:e,callback:t,contextElements:n}){i.listenTo(document,"mousedown",(r,a)=>{if(!e())return;const c=typeof a.composedPath=="function"?a.composedPath():[],d=typeof n=="function"?n():n;for(const u of d)if(u.contains(a.target)||c.includes(u))return;t()})}function A(i){return class extends i{disableCssTransitions(){this._isCssTransitionsDisabled=!0}enableCssTransitions(){this._isCssTransitionsDisabled=!1}constructor(...e){super(...e),this.set("_isCssTransitionsDisabled",!1),this.initializeCssTransitionDisablerMixin()}initializeCssTransitionDisablerMixin(){this.extendTemplate({attributes:{class:[this.bindTemplate.if("_isCssTransitionsDisabled","ck-transitions-disabled")]}})}}}function b({view:i}){i.listenTo(i.element,"submit",(e,t)=>{t.preventDefault(),i.fire("submit")},{useCapture:!0})}function y({keystrokeHandler:i,focusTracker:e,gridItems:t,numberOfColumns:n,uiLanguageDirection:r}){const a=typeof n=="number"?()=>n:n;function c(p){return g=>{const f=t.find(x=>x.element===e.focusedElement),_=t.getIndex(f),C=p(_,t);t.get(C).focus(),g.stopPropagation(),g.preventDefault()}}function d(p,g){return p===g-1?0:p+1}function u(p,g){return p===0?g-1:p-1}i.set("arrowright",c((p,g)=>r==="rtl"?u(p,g.length):d(p,g.length))),i.set("arrowleft",c((p,g)=>r==="rtl"?d(p,g.length):u(p,g.length))),i.set("arrowup",c((p,g)=>{let f=p-a();return f<0&&(f=p+a()*Math.floor(g.length/a()),f>g.length-1&&(f-=a())),f})),i.set("arrowdown",c((p,g)=>{let f=p+a();return f>g.length-1&&(f=p%a()),f}))}m.d(w,{default:()=>Yp});const I=function(){try{return navigator.userAgent.toLowerCase()}catch{return""}}();var D;const v={isMac:S(I),isWindows:(D=I,D.indexOf("windows")>-1),isGecko:function(i){return!!i.match(/gecko\/\d+/)}(I),isSafari:function(i){return i.indexOf(" applewebkit/")>-1&&i.indexOf("chrome")===-1}(I),isiOS:function(i){return!!i.match(/iphone|ipad/i)||S(i)&&navigator.maxTouchPoints>0}(I),isAndroid:function(i){return i.indexOf("android")>-1}(I),isBlink:function(i){return i.indexOf("chrome/")>-1&&i.indexOf("edge/")<0}(I),features:{isRegExpUnicodePropertySupported:function(){let i=!1;try{i="ć".search(new RegExp("[\\p{L}]","u"))===0}catch{}return i}()}};function S(i){return i.indexOf("macintosh")>-1}function B(i,e,t,n){t=t||function(u,p){return u===p};const r=Array.isArray(i)?i:Array.prototype.slice.call(i),a=Array.isArray(e)?e:Array.prototype.slice.call(e),c=function(u,p,g){const f=O(u,p,g);if(f===-1)return{firstIndex:-1,lastIndexOld:-1,lastIndexNew:-1};const _=R(u,f),C=R(p,f),x=O(_,C,g),T=u.length-x,M=p.length-x;return{firstIndex:f,lastIndexOld:T,lastIndexNew:M}}(r,a,t);return n?function(u,p){const{firstIndex:g,lastIndexOld:f,lastIndexNew:_}=u;if(g===-1)return Array(p).fill("equal");let C=[];return g>0&&(C=C.concat(Array(g).fill("equal"))),_-g>0&&(C=C.concat(Array(_-g).fill("insert"))),f-g>0&&(C=C.concat(Array(f-g).fill("delete"))),_<p&&(C=C.concat(Array(p-_).fill("equal"))),C}(c,a.length):function(u,p){const g=[],{firstIndex:f,lastIndexOld:_,lastIndexNew:C}=p;return C-f>0&&g.push({index:f,type:"insert",values:u.slice(f,C)}),_-f>0&&g.push({index:f+(C-f),type:"delete",howMany:_-f}),g}(a,c)}function O(i,e,t){for(let n=0;n<Math.max(i.length,e.length);n++)if(i[n]===void 0||e[n]===void 0||!t(i[n],e[n]))return n;return-1}function R(i,e){return i.slice(e).reverse()}function N(i,e,t){t=t||function(T,M){return T===M};const n=i.length,r=e.length;if(n>200||r>200||n+r>300)return N.fastDiff(i,e,t,!0);let a,c;if(r<n){const T=i;i=e,e=T,a="delete",c="insert"}else a="insert",c="delete";const d=i.length,u=e.length,p=u-d,g={},f={};function _(T){const M=(f[T-1]!==void 0?f[T-1]:-1)+1,z=f[T+1]!==void 0?f[T+1]:-1,F=M>z?-1:1;g[T+F]&&(g[T]=g[T+F].slice(0)),g[T]||(g[T]=[]),g[T].push(M>z?a:c);let W=Math.max(M,z),Q=W-T;for(;Q<d&&W<u&&t(i[Q],e[W]);)Q++,W++,g[T].push("equal");return W}let C,x=0;do{for(C=-x;C<p;C++)f[C]=_(C);for(C=p+x;C>p;C--)f[C]=_(C);f[p]=_(p),x++}while(f[p]!==u);return g[p].slice(1)}N.fastDiff=B;const P=function(){return function i(){i.called=!0}};class L{constructor(e,t){this.source=e,this.name=t,this.path=[],this.stop=P(),this.off=P()}}const V=new Array(256).fill("").map((i,e)=>("0"+e.toString(16)).slice(-2));function G(){const i=4294967296*Math.random()>>>0,e=4294967296*Math.random()>>>0,t=4294967296*Math.random()>>>0,n=4294967296*Math.random()>>>0;return"e"+V[255&i]+V[i>>8&255]+V[i>>16&255]+V[i>>24&255]+V[255&e]+V[e>>8&255]+V[e>>16&255]+V[e>>24&255]+V[255&t]+V[t>>8&255]+V[t>>16&255]+V[t>>24&255]+V[255&n]+V[n>>8&255]+V[n>>16&255]+V[n>>24&255]}const Y={get(i="normal"){return typeof i!="number"?this[i]||this.normal:i},highest:1e5,high:1e3,normal:0,low:-1e3,lowest:-1e5};function H(i,e){const t=Y.get(e.priority);for(let n=0;n<i.length;n++)if(Y.get(i[n].priority)<t)return void i.splice(n,0,e);i.push(e)}const U="https://ckeditor.com/docs/ckeditor5/latest/support/error-codes.html";class j extends Error{constructor(e,t,n){super(function(r,a){const c=new WeakSet,d=(g,f)=>{if(typeof f=="object"&&f!==null){if(c.has(f))return`[object ${f.constructor.name}]`;c.add(f)}return f},u=a?` ${JSON.stringify(a,d)}`:"",p=ke(r);return r+u+p}(e,n)),this.name="CKEditorError",this.context=t,this.data=n}is(e){return e==="CKEditorError"}static rethrowUnexpectedError(e,t){if(e.is&&e.is("CKEditorError"))throw e;const n=new j(e.message,t);throw n.stack=e.stack,n}}function K(i,e){console.warn(...me(i,e))}function re(i,e){console.error(...me(i,e))}function ke(i){return`
Read more: ${U}#error-${i}`}function me(i,e){const t=ke(i);return e?[i,e,t]:[i,t]}const pt="41.3.1",rt=new Date(2024,3,16);if(globalThis.CKEDITOR_VERSION)throw new j("ckeditor-duplicated-modules",null);globalThis.CKEDITOR_VERSION=pt;const tt=Symbol("listeningTo"),An=Symbol("emitterId"),ie=Symbol("delegations"),ue=se(Object);function se(i){return i?class extends i{on(e,t,n){this.listenTo(this,e,t,n)}once(e,t,n){let r=!1;this.listenTo(this,e,(a,...c)=>{r||(r=!0,a.off(),t.call(this,a,...c))},n)}off(e,t){this.stopListening(this,e,t)}listenTo(e,t,n,r={}){let a,c;this[tt]||(this[tt]={});const d=this[tt];qe(e)||Re(e);const u=qe(e);(a=d[u])||(a=d[u]={emitter:e,callbacks:{}}),(c=a.callbacks[t])||(c=a.callbacks[t]=[]),c.push(n),function(p,g,f,_,C){g._addEventListener?g._addEventListener(f,_,C):p._addEventListener.call(g,f,_,C)}(this,e,t,n,r)}stopListening(e,t,n){const r=this[tt];let a=e&&qe(e);const c=r&&a?r[a]:void 0,d=c&&t?c.callbacks[t]:void 0;if(!(!r||e&&!c||t&&!d))if(n)ao(this,e,t,n),d.indexOf(n)!==-1&&(d.length===1?delete c.callbacks[t]:ao(this,e,t,n));else if(d){for(;n=d.pop();)ao(this,e,t,n);delete c.callbacks[t]}else if(c){for(t in c.callbacks)this.stopListening(e,t);delete r[a]}else{for(a in r)this.stopListening(r[a].emitter);delete this[tt]}}fire(e,...t){try{const n=e instanceof L?e:new L(this,e),r=n.name;let a=Go(this,r);if(n.path.push(this),a){const d=[n,...t];a=Array.from(a);for(let u=0;u<a.length&&(a[u].callback.apply(this,d),n.off.called&&(delete n.off.called,this._removeEventListener(r,a[u].callback)),!n.stop.called);u++);}const c=this[ie];if(c){const d=c.get(r),u=c.get("*");d&&vn(d,n,t),u&&vn(u,n,t)}return n.return}catch(n){j.rethrowUnexpectedError(n,this)}}delegate(...e){return{to:(t,n)=>{this[ie]||(this[ie]=new Map),e.forEach(r=>{const a=this[ie].get(r);a?a.set(t,n):this[ie].set(r,new Map([[t,n]]))})}}}stopDelegating(e,t){if(this[ie])if(e)if(t){const n=this[ie].get(e);n&&n.delete(t)}else this[ie].delete(e);else this[ie].clear()}_addEventListener(e,t,n){(function(c,d){const u=Ao(c);if(u[d])return;let p=d,g=null;const f=[];for(;p!==""&&!u[p];)u[p]={callbacks:[],childEvents:[]},f.push(u[p]),g&&u[p].childEvents.push(g),g=p,p=p.substr(0,p.lastIndexOf(":"));if(p!==""){for(const _ of f)_.callbacks=u[p].callbacks.slice();u[p].childEvents.push(g)}})(this,e);const r=Xt(this,e),a={callback:t,priority:Y.get(n.priority)};for(const c of r)H(c,a)}_removeEventListener(e,t){const n=Xt(this,e);for(const r of n)for(let a=0;a<r.length;a++)r[a].callback==t&&(r.splice(a,1),a--)}}:ue}function Re(i,e){i[An]||(i[An]=e||G())}function qe(i){return i[An]}function Ao(i){return i._events||Object.defineProperty(i,"_events",{value:{}}),i._events}function Xt(i,e){const t=Ao(i)[e];if(!t)return[];let n=[t.callbacks];for(let r=0;r<t.childEvents.length;r++){const a=Xt(i,t.childEvents[r]);n=n.concat(a)}return n}function Go(i,e){let t;return i._events&&(t=i._events[e])&&t.callbacks.length?t.callbacks:e.indexOf(":")>-1?Go(i,e.substr(0,e.lastIndexOf(":"))):null}function vn(i,e,t){for(let[n,r]of i){r?typeof r=="function"&&(r=r(e.name)):r=e.name;const a=new L(e.source,r);a.path=[...e.path],n.fire(a,...t)}}function ao(i,e,t,n){e._removeEventListener?e._removeEventListener(t,n):i._removeEventListener.call(e,t,n)}["on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{se[i]=ue.prototype[i]});const Pe=function(i){var e=typeof i;return i!=null&&(e=="object"||e=="function")},_r=Symbol("observableProperties"),Ar=Symbol("boundObservables"),vr=Symbol("boundProperties"),fe=Symbol("decoratedMethods"),je=Symbol("decoratedOriginal"),Ce=be(se());function be(i){return i?class extends i{set(e,t){if(Pe(e))return void Object.keys(e).forEach(r=>{this.set(r,e[r])},this);Cn(this);const n=this[_r];if(e in this&&!n.has(e))throw new j("observable-set-cannot-override",this);Object.defineProperty(this,e,{enumerable:!0,configurable:!0,get:()=>n.get(e),set(r){const a=n.get(e);let c=this.fire(`set:${e}`,e,r,a);c===void 0&&(c=r),a===c&&n.has(e)||(n.set(e,c),this.fire(`change:${e}`,e,c,a))}}),this[e]=t}bind(...e){if(!e.length||!en(e))throw new j("observable-bind-wrong-properties",this);if(new Set(e).size!==e.length)throw new j("observable-bind-duplicate-properties",this);Cn(this);const t=this[vr];e.forEach(r=>{if(t.has(r))throw new j("observable-bind-rebind",this)});const n=new Map;return e.forEach(r=>{const a={property:r,to:[]};t.set(r,a),n.set(r,a)}),{to:Vn,toMany:yn,_observable:this,_bindProperties:e,_to:[],_bindings:n}}unbind(...e){if(!this[_r])return;const t=this[vr],n=this[Ar];if(e.length){if(!en(e))throw new j("observable-unbind-wrong-properties",this);e.forEach(r=>{const a=t.get(r);a&&(a.to.forEach(([c,d])=>{const u=n.get(c),p=u[d];p.delete(a),p.size||delete u[d],Object.keys(u).length||(n.delete(c),this.stopListening(c,"change"))}),t.delete(r))})}else n.forEach((r,a)=>{this.stopListening(a,"change")}),n.clear(),t.clear()}decorate(e){Cn(this);const t=this[e];if(!t)throw new j("observablemixin-cannot-decorate-undefined",this,{object:this,methodName:e});this.on(e,(n,r)=>{n.return=t.apply(this,r)}),this[e]=function(...n){return this.fire(e,n)},this[e][je]=t,this[fe]||(this[fe]=[]),this[fe].push(e)}stopListening(e,t,n){if(!e&&this[fe]){for(const r of this[fe])this[r]=this[r][je];delete this[fe]}super.stopListening(e,t,n)}}:Ce}function Cn(i){i[_r]||(Object.defineProperty(i,_r,{value:new Map}),Object.defineProperty(i,Ar,{value:new Map}),Object.defineProperty(i,vr,{value:new Map}))}function Vn(...i){const e=function(...a){if(!a.length)throw new j("observable-bind-to-parse-error",null);const c={to:[]};let d;return typeof a[a.length-1]=="function"&&(c.callback=a.pop()),a.forEach(u=>{if(typeof u=="string")d.properties.push(u);else{if(typeof u!="object")throw new j("observable-bind-to-parse-error",null);d={observable:u,properties:[]},c.to.push(d)}}),c}(...i),t=Array.from(this._bindings.keys()),n=t.length;if(!e.callback&&e.to.length>1)throw new j("observable-bind-to-no-callback",this);if(n>1&&e.callback)throw new j("observable-bind-to-extra-callback",this);var r;e.to.forEach(a=>{if(a.properties.length&&a.properties.length!==n)throw new j("observable-bind-to-properties-length",this);a.properties.length||(a.properties=this._bindProperties)}),this._to=e.to,e.callback&&(this._bindings.get(t[0]).callback=e.callback),r=this._observable,this._to.forEach(a=>{const c=r[Ar];let d;c.get(a.observable)||r.listenTo(a.observable,"change",(u,p)=>{d=c.get(a.observable)[p],d&&d.forEach(g=>{wt(r,g.property)})})}),function(a){let c;a._bindings.forEach((d,u)=>{a._to.forEach(p=>{c=p.properties[d.callback?0:a._bindProperties.indexOf(u)],d.to.push([p.observable,c]),function(g,f,_,C){const x=g[Ar],T=x.get(_),M=T||{};M[C]||(M[C]=new Set),M[C].add(f),T||x.set(_,M)}(a._observable,d,p.observable,c)})})}(this),this._bindProperties.forEach(a=>{wt(this._observable,a)})}function yn(i,e,t){if(this._bindings.size>1)throw new j("observable-bind-to-many-not-one-binding",this);this.to(...function(n,r){const a=n.map(c=>[c,r]);return Array.prototype.concat.apply([],a)}(i,e),t)}function en(i){return i.every(e=>typeof e=="string")}function wt(i,e){const t=i[vr].get(e);let n;t.callback?n=t.callback.apply(i,t.to.map(r=>r[0][r[1]])):(n=t.to[0],n=n[0][n[1]]),Object.prototype.hasOwnProperty.call(i,e)?i[e]=n:i.set(e,n)}["set","bind","unbind","decorate","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{be[i]=Ce.prototype[i]});class xn{constructor(){this._replacedElements=[]}replace(e,t){this._replacedElements.push({element:e,newElement:t}),e.style.display="none",t&&e.parentNode.insertBefore(t,e.nextSibling)}restore(){this._replacedElements.forEach(({element:e,newElement:t})=>{e.style.display="",t&&t.remove()}),this._replacedElements=[]}}function xt(i){let e=0;for(const t of i)e++;return e}function _e(i,e){const t=Math.min(i.length,e.length);for(let n=0;n<t;n++)if(i[n]!=e[n])return n;return i.length==e.length?"same":i.length<e.length?"prefix":"extension"}function Te(i){return!(!i||!i[Symbol.iterator])}const vo=typeof Jl=="object"&&Jl&&Jl.Object===Object&&Jl;var qS=typeof self=="object"&&self&&self.Object===Object&&self;const Un=vo||qS||Function("return this")(),co=Un.Symbol;var uk=Object.prototype,$S=uk.hasOwnProperty,GS=uk.toString,Rs=co?co.toStringTag:void 0;const KS=function(i){var e=$S.call(i,Rs),t=i[Rs];try{i[Rs]=void 0;var n=!0}catch{}var r=GS.call(i);return n&&(e?i[Rs]=t:delete i[Rs]),r};var QS=Object.prototype.toString;const YS=function(i){return QS.call(i)};var hk=co?co.toStringTag:void 0;const Ko=function(i){return i==null?i===void 0?"[object Undefined]":"[object Null]":hk&&hk in Object(i)?KS(i):YS(i)},tn=Array.isArray,En=function(i){return i!=null&&typeof i=="object"},pk=function(i){return typeof i=="string"||!tn(i)&&En(i)&&Ko(i)=="[object String]"};function Dn(i,e,t={},n=[]){const r=t&&t.xmlns,a=r?i.createElementNS(r,e):i.createElement(e);for(const c in t)a.setAttribute(c,t[c]);!pk(n)&&Te(n)||(n=[n]);for(let c of n)pk(c)&&(c=i.createTextNode(c)),a.appendChild(c);return a}const mk=function(i,e){return function(t){return i(e(t))}},Ru=mk(Object.getPrototypeOf,Object);var ZS=Function.prototype,JS=Object.prototype,gk=ZS.toString,XS=JS.hasOwnProperty,e4=gk.call(Object);const nn=function(i){if(!En(i)||Ko(i)!="[object Object]")return!1;var e=Ru(i);if(e===null)return!0;var t=XS.call(e,"constructor")&&e.constructor;return typeof t=="function"&&t instanceof t&&gk.call(t)==e4},t4=function(){this.__data__=[],this.size=0},Fs=function(i,e){return i===e||i!=i&&e!=e},Bc=function(i,e){for(var t=i.length;t--;)if(Fs(i[t][0],e))return t;return-1};var n4=Array.prototype.splice;const o4=function(i){var e=this.__data__,t=Bc(e,i);return!(t<0)&&(t==e.length-1?e.pop():n4.call(e,t,1),--this.size,!0)},i4=function(i){var e=this.__data__,t=Bc(e,i);return t<0?void 0:e[t][1]},r4=function(i){return Bc(this.__data__,i)>-1},s4=function(i,e){var t=this.__data__,n=Bc(t,i);return n<0?(++this.size,t.push([i,e])):t[n][1]=e,this};function Cr(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}Cr.prototype.clear=t4,Cr.prototype.delete=o4,Cr.prototype.get=i4,Cr.prototype.has=r4,Cr.prototype.set=s4;const Nc=Cr,a4=function(){this.__data__=new Nc,this.size=0},c4=function(i){var e=this.__data__,t=e.delete(i);return this.size=e.size,t},l4=function(i){return this.__data__.get(i)},d4=function(i){return this.__data__.has(i)},Si=function(i){if(!Pe(i))return!1;var e=Ko(i);return e=="[object Function]"||e=="[object GeneratorFunction]"||e=="[object AsyncFunction]"||e=="[object Proxy]"},Fu=Un["__core-js_shared__"];var fk=function(){var i=/[^.]+$/.exec(Fu&&Fu.keys&&Fu.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}();const u4=function(i){return!!fk&&fk in i};var h4=Function.prototype.toString;const Ii=function(i){if(i!=null){try{return h4.call(i)}catch{}try{return i+""}catch{}}return""};var p4=/^\[object .+?Constructor\]$/,m4=Function.prototype,g4=Object.prototype,f4=m4.toString,k4=g4.hasOwnProperty,b4=RegExp("^"+f4.call(k4).replace(/[\\^$.*+?()[\]{}|]/g,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$");const w4=function(i){return!(!Pe(i)||u4(i))&&(Si(i)?b4:p4).test(Ii(i))},_4=function(i,e){return i==null?void 0:i[e]},Ti=function(i,e){var t=_4(i,e);return w4(t)?t:void 0},Vs=Ti(Un,"Map"),Us=Ti(Object,"create"),A4=function(){this.__data__=Us?Us(null):{},this.size=0},v4=function(i){var e=this.has(i)&&delete this.__data__[i];return this.size-=e?1:0,e};var C4=Object.prototype.hasOwnProperty;const y4=function(i){var e=this.__data__;if(Us){var t=e[i];return t==="__lodash_hash_undefined__"?void 0:t}return C4.call(e,i)?e[i]:void 0};var x4=Object.prototype.hasOwnProperty;const E4=function(i){var e=this.__data__;return Us?e[i]!==void 0:x4.call(e,i)},D4=function(i,e){var t=this.__data__;return this.size+=this.has(i)?0:1,t[i]=Us&&e===void 0?"__lodash_hash_undefined__":e,this};function yr(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}yr.prototype.clear=A4,yr.prototype.delete=v4,yr.prototype.get=y4,yr.prototype.has=E4,yr.prototype.set=D4;const kk=yr,S4=function(){this.size=0,this.__data__={hash:new kk,map:new(Vs||Nc),string:new kk}},I4=function(i){var e=typeof i;return e=="string"||e=="number"||e=="symbol"||e=="boolean"?i!=="__proto__":i===null},Pc=function(i,e){var t=i.__data__;return I4(e)?t[typeof e=="string"?"string":"hash"]:t.map},T4=function(i){var e=Pc(this,i).delete(i);return this.size-=e?1:0,e},M4=function(i){return Pc(this,i).get(i)},B4=function(i){return Pc(this,i).has(i)},N4=function(i,e){var t=Pc(this,i),n=t.size;return t.set(i,e),this.size+=t.size==n?0:1,this};function xr(i){var e=-1,t=i==null?0:i.length;for(this.clear();++e<t;){var n=i[e];this.set(n[0],n[1])}}xr.prototype.clear=S4,xr.prototype.delete=T4,xr.prototype.get=M4,xr.prototype.has=B4,xr.prototype.set=N4;const jc=xr,P4=function(i,e){var t=this.__data__;if(t instanceof Nc){var n=t.__data__;if(!Vs||n.length<199)return n.push([i,e]),this.size=++t.size,this;t=this.__data__=new jc(n)}return t.set(i,e),this.size=t.size,this};function Er(i){var e=this.__data__=new Nc(i);this.size=e.size}Er.prototype.clear=a4,Er.prototype.delete=c4,Er.prototype.get=l4,Er.prototype.has=d4,Er.prototype.set=P4;const Dr=Er,j4=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n&&e(i[t],t,i)!==!1;);return i},Oc=function(){try{var i=Ti(Object,"defineProperty");return i({},"",{}),i}catch{}}(),Lc=function(i,e,t){e=="__proto__"&&Oc?Oc(i,e,{configurable:!0,enumerable:!0,value:t,writable:!0}):i[e]=t};var O4=Object.prototype.hasOwnProperty;const Vu=function(i,e,t){var n=i[e];O4.call(i,e)&&Fs(n,t)&&(t!==void 0||e in i)||Lc(i,e,t)},Sr=function(i,e,t,n){var r=!t;t||(t={});for(var a=-1,c=e.length;++a<c;){var d=e[a],u=void 0;u===void 0&&(u=i[d]),r?Lc(t,d,u):Vu(t,d,u)}return t},L4=function(i,e){for(var t=-1,n=Array(i);++t<i;)n[t]=e(t);return n},bk=function(i){return En(i)&&Ko(i)=="[object Arguments]"};var wk=Object.prototype,z4=wk.hasOwnProperty,R4=wk.propertyIsEnumerable;const zc=bk(function(){return arguments}())?bk:function(i){return En(i)&&z4.call(i,"callee")&&!R4.call(i,"callee")},F4=function(){return!1};var _k=s&&!s.nodeType&&s,Ak=_k&&!0&&o&&!o.nodeType&&o,vk=Ak&&Ak.exports===_k?Un.Buffer:void 0;const Hs=(vk?vk.isBuffer:void 0)||F4;var V4=/^(?:0|[1-9]\d*)$/;const Rc=function(i,e){var t=typeof i;return!!(e=e??9007199254740991)&&(t=="number"||t!="symbol"&&V4.test(i))&&i>-1&&i%1==0&&i<e},Uu=function(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=9007199254740991};var $e={};$e["[object Float32Array]"]=$e["[object Float64Array]"]=$e["[object Int8Array]"]=$e["[object Int16Array]"]=$e["[object Int32Array]"]=$e["[object Uint8Array]"]=$e["[object Uint8ClampedArray]"]=$e["[object Uint16Array]"]=$e["[object Uint32Array]"]=!0,$e["[object Arguments]"]=$e["[object Array]"]=$e["[object ArrayBuffer]"]=$e["[object Boolean]"]=$e["[object DataView]"]=$e["[object Date]"]=$e["[object Error]"]=$e["[object Function]"]=$e["[object Map]"]=$e["[object Number]"]=$e["[object Object]"]=$e["[object RegExp]"]=$e["[object Set]"]=$e["[object String]"]=$e["[object WeakMap]"]=!1;const U4=function(i){return En(i)&&Uu(i.length)&&!!$e[Ko(i)]},Hu=function(i){return function(e){return i(e)}};var Ck=s&&!s.nodeType&&s,Ws=Ck&&!0&&o&&!o.nodeType&&o,Wu=Ws&&Ws.exports===Ck&&vo.process;const Ir=function(){try{var i=Ws&&Ws.require&&Ws.require("util").types;return i||Wu&&Wu.binding&&Wu.binding("util")}catch{}}();var yk=Ir&&Ir.isTypedArray;const qu=yk?Hu(yk):U4;var H4=Object.prototype.hasOwnProperty;const xk=function(i,e){var t=tn(i),n=!t&&zc(i),r=!t&&!n&&Hs(i),a=!t&&!n&&!r&&qu(i),c=t||n||r||a,d=c?L4(i.length,String):[],u=d.length;for(var p in i)!e&&!H4.call(i,p)||c&&(p=="length"||r&&(p=="offset"||p=="parent")||a&&(p=="buffer"||p=="byteLength"||p=="byteOffset")||Rc(p,u))||d.push(p);return d};var W4=Object.prototype;const $u=function(i){var e=i&&i.constructor;return i===(typeof e=="function"&&e.prototype||W4)},q4=mk(Object.keys,Object);var $4=Object.prototype.hasOwnProperty;const G4=function(i){if(!$u(i))return q4(i);var e=[];for(var t in Object(i))$4.call(i,t)&&t!="constructor"&&e.push(t);return e},Fc=function(i){return i!=null&&Uu(i.length)&&!Si(i)},qs=function(i){return Fc(i)?xk(i):G4(i)},K4=function(i,e){return i&&Sr(e,qs(e),i)},Q4=function(i){var e=[];if(i!=null)for(var t in Object(i))e.push(t);return e};var Y4=Object.prototype.hasOwnProperty;const Z4=function(i){if(!Pe(i))return Q4(i);var e=$u(i),t=[];for(var n in i)(n!="constructor"||!e&&Y4.call(i,n))&&t.push(n);return t},Tr=function(i){return Fc(i)?xk(i,!0):Z4(i)},J4=function(i,e){return i&&Sr(e,Tr(e),i)};var Ek=s&&!s.nodeType&&s,Dk=Ek&&!0&&o&&!o.nodeType&&o,Sk=Dk&&Dk.exports===Ek?Un.Buffer:void 0,Ik=Sk?Sk.allocUnsafe:void 0;const Tk=function(i,e){if(e)return i.slice();var t=i.length,n=Ik?Ik(t):new i.constructor(t);return i.copy(n),n},Mk=function(i,e){var t=-1,n=i.length;for(e||(e=Array(n));++t<n;)e[t]=i[t];return e},X4=function(i,e){for(var t=-1,n=i==null?0:i.length,r=0,a=[];++t<n;){var c=i[t];e(c,t,i)&&(a[r++]=c)}return a},Bk=function(){return[]};var eI=Object.prototype.propertyIsEnumerable,Nk=Object.getOwnPropertySymbols;const Gu=Nk?function(i){return i==null?[]:(i=Object(i),X4(Nk(i),function(e){return eI.call(i,e)}))}:Bk,tI=function(i,e){return Sr(i,Gu(i),e)},Pk=function(i,e){for(var t=-1,n=e.length,r=i.length;++t<n;)i[r+t]=e[t];return i},jk=Object.getOwnPropertySymbols?function(i){for(var e=[];i;)Pk(e,Gu(i)),i=Ru(i);return e}:Bk,nI=function(i,e){return Sr(i,jk(i),e)},Ok=function(i,e,t){var n=e(i);return tn(i)?n:Pk(n,t(i))},Ku=function(i){return Ok(i,qs,Gu)},oI=function(i){return Ok(i,Tr,jk)},Qu=Ti(Un,"DataView"),Yu=Ti(Un,"Promise"),Zu=Ti(Un,"Set"),Ju=Ti(Un,"WeakMap");var Lk="[object Map]",zk="[object Promise]",Rk="[object Set]",Fk="[object WeakMap]",Vk="[object DataView]",iI=Ii(Qu),rI=Ii(Vs),sI=Ii(Yu),aI=Ii(Zu),cI=Ii(Ju),Mi=Ko;(Qu&&Mi(new Qu(new ArrayBuffer(1)))!=Vk||Vs&&Mi(new Vs)!=Lk||Yu&&Mi(Yu.resolve())!=zk||Zu&&Mi(new Zu)!=Rk||Ju&&Mi(new Ju)!=Fk)&&(Mi=function(i){var e=Ko(i),t=e=="[object Object]"?i.constructor:void 0,n=t?Ii(t):"";if(n)switch(n){case iI:return Vk;case rI:return Lk;case sI:return zk;case aI:return Rk;case cI:return Fk}return e});const $s=Mi;var lI=Object.prototype.hasOwnProperty;const dI=function(i){var e=i.length,t=new i.constructor(e);return e&&typeof i[0]=="string"&&lI.call(i,"index")&&(t.index=i.index,t.input=i.input),t},Vc=Un.Uint8Array,Xu=function(i){var e=new i.constructor(i.byteLength);return new Vc(e).set(new Vc(i)),e},uI=function(i,e){var t=e?Xu(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.byteLength)};var hI=/\w*$/;const pI=function(i){var e=new i.constructor(i.source,hI.exec(i));return e.lastIndex=i.lastIndex,e};var Uk=co?co.prototype:void 0,Hk=Uk?Uk.valueOf:void 0;const mI=function(i){return Hk?Object(Hk.call(i)):{}},Wk=function(i,e){var t=e?Xu(i.buffer):i.buffer;return new i.constructor(t,i.byteOffset,i.length)},gI=function(i,e,t){var n=i.constructor;switch(e){case"[object ArrayBuffer]":return Xu(i);case"[object Boolean]":case"[object Date]":return new n(+i);case"[object DataView]":return uI(i,t);case"[object Float32Array]":case"[object Float64Array]":case"[object Int8Array]":case"[object Int16Array]":case"[object Int32Array]":case"[object Uint8Array]":case"[object Uint8ClampedArray]":case"[object Uint16Array]":case"[object Uint32Array]":return Wk(i,t);case"[object Map]":case"[object Set]":return new n;case"[object Number]":case"[object String]":return new n(i);case"[object RegExp]":return pI(i);case"[object Symbol]":return mI(i)}};var qk=Object.create;const fI=function(){function i(){}return function(e){if(!Pe(e))return{};if(qk)return qk(e);i.prototype=e;var t=new i;return i.prototype=void 0,t}}(),$k=function(i){return typeof i.constructor!="function"||$u(i)?{}:fI(Ru(i))},kI=function(i){return En(i)&&$s(i)=="[object Map]"};var Gk=Ir&&Ir.isMap;const bI=Gk?Hu(Gk):kI,wI=function(i){return En(i)&&$s(i)=="[object Set]"};var Kk=Ir&&Ir.isSet;const _I=Kk?Hu(Kk):wI;var Qk="[object Arguments]",Yk="[object Function]",Zk="[object Object]",Ue={};Ue[Qk]=Ue["[object Array]"]=Ue["[object ArrayBuffer]"]=Ue["[object DataView]"]=Ue["[object Boolean]"]=Ue["[object Date]"]=Ue["[object Float32Array]"]=Ue["[object Float64Array]"]=Ue["[object Int8Array]"]=Ue["[object Int16Array]"]=Ue["[object Int32Array]"]=Ue["[object Map]"]=Ue["[object Number]"]=Ue[Zk]=Ue["[object RegExp]"]=Ue["[object Set]"]=Ue["[object String]"]=Ue["[object Symbol]"]=Ue["[object Uint8Array]"]=Ue["[object Uint8ClampedArray]"]=Ue["[object Uint16Array]"]=Ue["[object Uint32Array]"]=!0,Ue["[object Error]"]=Ue[Yk]=Ue["[object WeakMap]"]=!1;const eh=function i(e,t,n,r,a,c){var d,u=1&t,p=2&t,g=4&t;if(n&&(d=a?n(e,r,a,c):n(e)),d!==void 0)return d;if(!Pe(e))return e;var f=tn(e);if(f){if(d=dI(e),!u)return Mk(e,d)}else{var _=$s(e),C=_==Yk||_=="[object GeneratorFunction]";if(Hs(e))return Tk(e,u);if(_==Zk||_==Qk||C&&!a){if(d=p||C?{}:$k(e),!u)return p?nI(e,J4(d,e)):tI(e,K4(d,e))}else{if(!Ue[_])return a?e:{};d=gI(e,_,u)}}c||(c=new Dr);var x=c.get(e);if(x)return x;c.set(e,d),_I(e)?e.forEach(function(M){d.add(i(M,t,n,M,e,c))}):bI(e)&&e.forEach(function(M,z){d.set(z,i(M,t,n,z,e,c))});var T=f?void 0:(g?p?oI:Ku:p?Tr:qs)(e);return j4(T||e,function(M,z){T&&(M=e[z=M]),Vu(d,z,i(M,t,n,z,e,c))}),d},th=function(i,e){return eh(i,5,e=typeof e=="function"?e:void 0)},Bi=function(i){return En(i)&&i.nodeType===1&&!nn(i)};class Jk{constructor(e,t){this._config={},t&&this.define(Xk(t)),e&&this._setObjectToTarget(this._config,e)}set(e,t){this._setToTarget(this._config,e,t)}define(e,t){this._setToTarget(this._config,e,t,!0)}get(e){return this._getFromSource(this._config,e)}*names(){for(const e of Object.keys(this._config))yield e}_setToTarget(e,t,n,r=!1){if(nn(t))return void this._setObjectToTarget(e,t,r);const a=t.split(".");t=a.pop();for(const c of a)nn(e[c])||(e[c]={}),e=e[c];if(nn(n))return nn(e[t])||(e[t]={}),e=e[t],void this._setObjectToTarget(e,n,r);r&&e[t]!==void 0||(e[t]=n)}_getFromSource(e,t){const n=t.split(".");t=n.pop();for(const r of n){if(!nn(e[r])){e=null;break}e=e[r]}return e?Xk(e[t]):void 0}_setObjectToTarget(e,t,n){Object.keys(t).forEach(r=>{this._setToTarget(e,r,t[r],n)})}}function Xk(i){return th(i,AI)}function AI(i){return Bi(i)||typeof i=="function"?i:void 0}function Qo(i){if(i){if(i.defaultView)return i instanceof i.defaultView.Document;if(i.ownerDocument&&i.ownerDocument.defaultView)return i instanceof i.ownerDocument.defaultView.Node}return!1}function Uc(i){const e=Object.prototype.toString.apply(i);return e=="[object Window]"||e=="[object global]"}const eb=Sn(se());function Sn(i){return i?class extends i{listenTo(e,t,n,r={}){if(Qo(e)||Uc(e)){const a={capture:!!r.useCapture,passive:!!r.usePassive},c=this._getProxyEmitter(e,a)||new vI(e,a);this.listenTo(c,t,n,r)}else super.listenTo(e,t,n,r)}stopListening(e,t,n){if(Qo(e)||Uc(e)){const r=this._getAllProxyEmitters(e);for(const a of r)this.stopListening(a,t,n)}else super.stopListening(e,t,n)}_getProxyEmitter(e,t){return function(n,r){const a=n[tt];return a&&a[r]?a[r].emitter:null}(this,tb(e,t))}_getAllProxyEmitters(e){return[{capture:!1,passive:!1},{capture:!1,passive:!0},{capture:!0,passive:!1},{capture:!0,passive:!0}].map(t=>this._getProxyEmitter(e,t)).filter(t=>!!t)}}:eb}["_getProxyEmitter","_getAllProxyEmitters","on","once","off","listenTo","stopListening","fire","delegate","stopDelegating","_addEventListener","_removeEventListener"].forEach(i=>{Sn[i]=eb.prototype[i]});class vI extends se(){constructor(e,t){super(),Re(this,tb(e,t)),this._domNode=e,this._options=t}attach(e){if(this._domListeners&&this._domListeners[e])return;const t=this._createDomListener(e);this._domNode.addEventListener(e,t,this._options),this._domListeners||(this._domListeners={}),this._domListeners[e]=t}detach(e){let t;!this._domListeners[e]||(t=this._events[e])&&t.callbacks.length||this._domListeners[e].removeListener()}_addEventListener(e,t,n){this.attach(e),se().prototype._addEventListener.call(this,e,t,n)}_removeEventListener(e,t){se().prototype._removeEventListener.call(this,e,t),this.detach(e)}_createDomListener(e){const t=n=>{this.fire(e,n)};return t.removeListener=()=>{this._domNode.removeEventListener(e,t,this._options),delete this._domListeners[e]},t}}function tb(i,e){let t=function(n){return n["data-ck-expando"]||(n["data-ck-expando"]=G())}(i);for(const n of Object.keys(e).sort())e[n]&&(t+="-"+n);return t}let nh;try{nh={window,document}}catch{nh={window:{},document:{}}}const ce=nh;function nb(i){const e=i.ownerDocument.defaultView.getComputedStyle(i);return{top:parseInt(e.borderTopWidth,10),right:parseInt(e.borderRightWidth,10),bottom:parseInt(e.borderBottomWidth,10),left:parseInt(e.borderLeftWidth,10)}}function dt(i){return Object.prototype.toString.call(i)=="[object Text]"}function Hc(i){return Object.prototype.toString.apply(i)=="[object Range]"}function ob(i){return i&&i.parentNode?i.offsetParent===ce.document.body?null:i.offsetParent:null}const ib=["top","right","bottom","left","width","height"];class Ae{constructor(e){const t=Hc(e);if(Object.defineProperty(this,"_source",{value:e._source||e,writable:!0,enumerable:!1}),oh(e)||t)if(t){const n=Ae.getDomRangeRects(e);Wc(this,Ae.getBoundingRect(n))}else Wc(this,e.getBoundingClientRect());else if(Uc(e)){const{innerWidth:n,innerHeight:r}=e;Wc(this,{top:0,right:n,bottom:r,left:0,width:n,height:r})}else Wc(this,e)}clone(){return new Ae(this)}moveTo(e,t){return this.top=t,this.right=e+this.width,this.bottom=t+this.height,this.left=e,this}moveBy(e,t){return this.top+=t,this.right+=e,this.left+=e,this.bottom+=t,this}getIntersection(e){const t={top:Math.max(this.top,e.top),right:Math.min(this.right,e.right),bottom:Math.min(this.bottom,e.bottom),left:Math.max(this.left,e.left),width:0,height:0};if(t.width=t.right-t.left,t.height=t.bottom-t.top,t.width<0||t.height<0)return null;{const n=new Ae(t);return n._source=this._source,n}}getIntersectionArea(e){const t=this.getIntersection(e);return t?t.getArea():0}getArea(){return this.width*this.height}getVisible(){const e=this._source;let t=this.clone();if(rb(e))return t;let n,r=e,a=e.parentNode||e.commonAncestorContainer;for(;a&&!rb(a);){const d=((c=a)instanceof HTMLElement?c.ownerDocument.defaultView.getComputedStyle(c).overflow:"visible")==="visible";r instanceof HTMLElement&&sb(r)==="absolute"&&(n=r);const u=sb(a);if(d||n&&(u==="relative"&&d||u!=="relative")){r=a,a=a.parentNode;continue}const p=new Ae(a),g=t.getIntersection(p);if(!g)return null;g.getArea()<t.getArea()&&(t=g),r=a,a=a.parentNode}var c;return t}isEqual(e){for(const t of ib)if(this[t]!==e[t])return!1;return!0}contains(e){const t=this.getIntersection(e);return!(!t||!t.isEqual(e))}toAbsoluteRect(){const{scrollX:e,scrollY:t}=ce.window,n=this.clone().moveBy(e,t);if(oh(n._source)){const r=ob(n._source);r&&function(a,c){const d=new Ae(c),u=nb(c);let p=0,g=0;p-=d.left,g-=d.top,p+=c.scrollLeft,g+=c.scrollTop,p-=u.left,g-=u.top,a.moveBy(p,g)}(n,r)}return n}excludeScrollbarsAndBorders(){const e=this._source;let t,n,r;if(Uc(e))t=e.innerWidth-e.document.documentElement.clientWidth,n=e.innerHeight-e.document.documentElement.clientHeight,r=e.getComputedStyle(e.document.documentElement).direction;else{const a=nb(e);t=e.offsetWidth-e.clientWidth-a.left-a.right,n=e.offsetHeight-e.clientHeight-a.top-a.bottom,r=e.ownerDocument.defaultView.getComputedStyle(e).direction,this.left+=a.left,this.top+=a.top,this.right-=a.right,this.bottom-=a.bottom,this.width=this.right-this.left,this.height=this.bottom-this.top}return this.width-=t,r==="ltr"?this.right-=t:this.left+=t,this.height-=n,this.bottom-=n,this}static getDomRangeRects(e){const t=[],n=Array.from(e.getClientRects());if(n.length)for(const r of n)t.push(new Ae(r));else{let r=e.startContainer;dt(r)&&(r=r.parentNode);const a=new Ae(r.getBoundingClientRect());a.right=a.left,a.width=0,t.push(a)}return t}static getBoundingRect(e){const t={left:Number.POSITIVE_INFINITY,top:Number.POSITIVE_INFINITY,right:Number.NEGATIVE_INFINITY,bottom:Number.NEGATIVE_INFINITY,width:0,height:0};let n=0;for(const r of e)n++,t.left=Math.min(t.left,r.left),t.top=Math.min(t.top,r.top),t.right=Math.max(t.right,r.right),t.bottom=Math.max(t.bottom,r.bottom);return n==0?null:(t.width=t.right-t.left,t.height=t.bottom-t.top,new Ae(t))}}function Wc(i,e){for(const t of ib)i[t]=e[t]}function rb(i){return!!oh(i)&&i===i.ownerDocument.body}function oh(i){return i!==null&&typeof i=="object"&&i.nodeType===1&&typeof i.getBoundingClientRect=="function"}function sb(i){return i instanceof HTMLElement?i.ownerDocument.defaultView.getComputedStyle(i).position:"static"}const st=class{constructor(i,e){st._observerInstance||st._createObserver(),this._element=i,this._callback=e,st._addElementCallback(i,e),st._observerInstance.observe(i)}get element(){return this._element}destroy(){st._deleteElementCallback(this._element,this._callback)}static _addElementCallback(i,e){st._elementCallbacks||(st._elementCallbacks=new Map);let t=st._elementCallbacks.get(i);t||(t=new Set,st._elementCallbacks.set(i,t)),t.add(e)}static _deleteElementCallback(i,e){const t=st._getElementCallbacks(i);t&&(t.delete(e),t.size||(st._elementCallbacks.delete(i),st._observerInstance.unobserve(i))),st._elementCallbacks&&!st._elementCallbacks.size&&(st._observerInstance=null,st._elementCallbacks=null)}static _getElementCallbacks(i){return st._elementCallbacks?st._elementCallbacks.get(i):null}static _createObserver(){st._observerInstance=new ce.window.ResizeObserver(i=>{for(const e of i){const t=st._getElementCallbacks(e.target);if(t)for(const n of t)n(e)}})}};let Gs=st;function ab(i,e){i instanceof HTMLTextAreaElement&&(i.value=e),i.innerHTML=e}function Mr(i){return e=>e+i}function qc(i){let e=0;for(;i.previousSibling;)i=i.previousSibling,e++;return e}function cb(i,e,t){i.insertBefore(t,i.childNodes[e]||null)}function Ks(i){return i&&i.nodeType===Node.COMMENT_NODE}function Ni(i){return!!(i&&i.getClientRects&&i.getClientRects().length)}Gs._observerInstance=null,Gs._elementCallbacks=null;var lb=Math.pow;function $c({element:i,target:e,positions:t,limiter:n,fitInViewport:r,viewportOffsetConfig:a}){Si(e)&&(e=e()),Si(n)&&(n=n());const c=ob(i),d=function(_){_=Object.assign({top:0,bottom:0,left:0,right:0},_);const C=new Ae(ce.window);return C.top+=_.top,C.height-=_.top,C.bottom-=_.bottom,C.height-=_.bottom,C}(a),u=new Ae(i),p=db(e,d);let g;if(!p||!d.getIntersection(p))return null;const f={targetRect:p,elementRect:u,positionedElementAncestor:c,viewportRect:d};if(n||r){if(n){const _=db(n,d);_&&(f.limiterRect=_)}g=function(_,C){const{elementRect:x}=C,T=x.getArea(),M=_.map(W=>new ub(W,C)).filter(W=>!!W.name);let z=0,F=null;for(const W of M){const{limiterIntersectionArea:Q,viewportIntersectionArea:oe}=W;if(Q===T)return W;const de=lb(oe,2)+lb(Q,2);de>z&&(z=de,F=W)}return F}(t,f)}else g=new ub(t[0],f);return g}function db(i,e){const t=new Ae(i).getVisible();return t?t.getIntersection(e):null}class ub{constructor(e,t){const n=e(t.targetRect,t.elementRect,t.viewportRect,t.limiterRect);if(!n)return;const{left:r,top:a,name:c,config:d}=n;this.name=c,this.config=d,this._positioningFunctionCoordinates={left:r,top:a},this._options=t}get left(){return this._absoluteRect.left}get top(){return this._absoluteRect.top}get limiterIntersectionArea(){const e=this._options.limiterRect;return e?e.getIntersectionArea(this._rect):0}get viewportIntersectionArea(){return this._options.viewportRect.getIntersectionArea(this._rect)}get _rect(){return this._cachedRect||(this._cachedRect=this._options.elementRect.clone().moveTo(this._positioningFunctionCoordinates.left,this._positioningFunctionCoordinates.top)),this._cachedRect}get _absoluteRect(){return this._cachedAbsoluteRect||(this._cachedAbsoluteRect=this._rect.toAbsoluteRect()),this._cachedAbsoluteRect}}function hb(i){const e=i.parentNode;e&&e.removeChild(i)}function CI({window:i,rect:e,alignToTop:t,forceScroll:n,viewportOffset:r}){const a=e.clone().moveBy(0,r.bottom),c=e.clone().moveBy(0,-r.top),d=new Ae(i).excludeScrollbarsAndBorders(),u=t&&n,p=[c,a].every(x=>d.contains(x));let{scrollX:g,scrollY:f}=i;const _=g,C=f;u?f-=d.top-e.top+r.top:p||(mb(c,d)?f-=d.top-e.top+r.top:pb(a,d)&&(f+=t?e.top-d.top-r.top:e.bottom-d.bottom+r.bottom)),p||(gb(e,d)?g-=d.left-e.left+r.left:fb(e,d)&&(g+=e.right-d.right+r.right)),g==_&&f===C||i.scrollTo(g,f)}function yI({parent:i,getRect:e,alignToTop:t,forceScroll:n,ancestorOffset:r=0,limiterElement:a}){const c=ih(i),d=t&&n;let u,p,g;const f=a||c.document.body;for(;i!=f;)p=e(),u=new Ae(i).excludeScrollbarsAndBorders(),g=u.contains(p),d?i.scrollTop-=u.top-p.top+r:g||(mb(p,u)?i.scrollTop-=u.top-p.top+r:pb(p,u)&&(i.scrollTop+=t?p.top-u.top-r:p.bottom-u.bottom+r)),g||(gb(p,u)?i.scrollLeft-=u.left-p.left+r:fb(p,u)&&(i.scrollLeft+=p.right-u.right+r)),i=i.parentNode}function pb(i,e){return i.bottom>e.bottom}function mb(i,e){return i.top<e.top}function gb(i,e){return i.left<e.left}function fb(i,e){return i.right>e.right}function ih(i){return Hc(i)?i.startContainer.ownerDocument.defaultView:i.ownerDocument.defaultView}function xI(i){if(Hc(i)){let e=i.commonAncestorContainer;return dt(e)&&(e=e.parentNode),e}return i.parentNode}function kb(i,e){const t=ih(i),n=new Ae(i);if(t===e)return n;{let r=t;for(;r!=e;){const a=r.frameElement,c=new Ae(a).excludeScrollbarsAndBorders();n.moveBy(c.left,c.top),r=r.parent}}return n}const EI={ctrl:"⌃",cmd:"⌘",alt:"⌥",shift:"⇧"},DI={ctrl:"Ctrl+",alt:"Alt+",shift:"Shift+"},bb={37:"←",38:"↑",39:"→",40:"↓",9:"⇥",33:"Page Up",34:"Page Down"},ye=function(){const i={pageup:33,pagedown:34,arrowleft:37,arrowup:38,arrowright:39,arrowdown:40,backspace:8,delete:46,enter:13,space:32,esc:27,tab:9,ctrl:1114112,shift:2228224,alt:4456448,cmd:8912896};for(let e=65;e<=90;e++)i[String.fromCharCode(e).toLowerCase()]=e;for(let e=48;e<=57;e++)i[e-48]=e;for(let e=112;e<=123;e++)i["f"+(e-111)]=e;return Object.assign(i,{"'":222,",":108,"-":109,".":110,"/":111,";":186,"=":187,"[":219,"\\":220,"]":221,"`":223}),i}(),SI=Object.fromEntries(Object.entries(ye).map(([i,e])=>{let t;return t=e in bb?bb[e]:i.charAt(0).toUpperCase()+i.slice(1),[e,t]}));function Br(i){let e;if(typeof i=="string"){if(e=ye[i.toLowerCase()],!e)throw new j("keyboard-unknown-key",null,{key:i})}else e=i.keyCode+(i.altKey?ye.alt:0)+(i.ctrlKey?ye.ctrl:0)+(i.shiftKey?ye.shift:0)+(i.metaKey?ye.cmd:0);return e}function Qs(i){return typeof i=="string"&&(i=function(e){return e.split("+").map(t=>t.trim())}(i)),i.map(e=>typeof e=="string"?function(t){if(t.endsWith("!"))return Br(t.slice(0,-1));const n=Br(t);return(v.isMac||v.isiOS)&&n==ye.ctrl?ye.cmd:n}(e):e).reduce((e,t)=>t+e,0)}function Gc(i){let e=Qs(i);return Object.entries(v.isMac||v.isiOS?EI:DI).reduce((t,[n,r])=>(e&ye[n]&&(e&=~ye[n],t+=r),t),"")+(e?SI[e]:"")}function rh(i,e){const t=e==="ltr";switch(i){case ye.arrowleft:return t?"left":"right";case ye.arrowright:return t?"right":"left";case ye.arrowup:return"up";case ye.arrowdown:return"down"}}function Fe(i){return Array.isArray(i)?i:[i]}const sh=function(i,e,t){(t!==void 0&&!Fs(i[e],t)||t===void 0&&!(e in i))&&Lc(i,e,t)},wb=function(i){return function(e,t,n){for(var r=-1,a=Object(e),c=n(e),d=c.length;d--;){var u=c[++r];if(t(a[u],u,a)===!1)break}return e}}(),II=function(i){return En(i)&&Fc(i)},_b=function(i,e){if((e!=="constructor"||typeof i[e]!="function")&&e!="__proto__")return i[e]},TI=function(i){return Sr(i,Tr(i))},MI=function(i,e,t,n,r,a,c){var d=_b(i,t),u=_b(e,t),p=c.get(u);if(p)sh(i,t,p);else{var g=void 0,f=g===void 0;if(f){var _=tn(u),C=!_&&Hs(u),x=!_&&!C&&qu(u);g=u,_||C||x?tn(d)?g=d:II(d)?g=Mk(d):C?(f=!1,g=Tk(u,!0)):x?(f=!1,g=Wk(u,!0)):g=[]:nn(u)||zc(u)?(g=d,zc(d)?g=TI(d):Pe(d)&&!Si(d)||(g=$k(u))):f=!1}f&&(c.set(u,g),r(g,u,n,a,c),c.delete(u)),sh(i,t,g)}},BI=function i(e,t,n,r,a){e!==t&&wb(t,function(c,d){if(a||(a=new Dr),Pe(c))MI(e,t,d,n,i,r,a);else{var u=void 0;u===void 0&&(u=c),sh(e,d,u)}},Tr)},Yo=function(i){return i},NI=function(i,e,t){switch(t.length){case 0:return i.call(e);case 1:return i.call(e,t[0]);case 2:return i.call(e,t[0],t[1]);case 3:return i.call(e,t[0],t[1],t[2])}return i.apply(e,t)};var Ab=Math.max;const PI=function(i,e,t){return e=Ab(e===void 0?i.length-1:e,0),function(){for(var n=arguments,r=-1,a=Ab(n.length-e,0),c=Array(a);++r<a;)c[r]=n[e+r];r=-1;for(var d=Array(e+1);++r<e;)d[r]=n[r];return d[e]=t(c),NI(i,this,d)}},jI=function(i){return function(){return i}},OI=Oc?function(i,e){return Oc(i,"toString",{configurable:!0,enumerable:!1,value:jI(e),writable:!0})}:Yo;var LI=Date.now;const zI=function(i){var e=0,t=0;return function(){var n=LI(),r=16-(n-t);if(t=n,r>0){if(++e>=800)return arguments[0]}else e=0;return i.apply(void 0,arguments)}}(OI),RI=function(i,e){return zI(PI(i,e,Yo),i+"")},FI=function(i,e,t){if(!Pe(t))return!1;var n=typeof e;return!!(n=="number"?Fc(t)&&Rc(e,t.length):n=="string"&&e in t)&&Fs(t[e],i)},vb=function(i){return RI(function(e,t){var n=-1,r=t.length,a=r>1?t[r-1]:void 0,c=r>2?t[2]:void 0;for(a=i.length>3&&typeof a=="function"?(r--,a):void 0,c&&FI(t[0],t[1],c)&&(a=r<3?void 0:a,r=1),e=Object(e);++n<r;){var d=t[n];d&&i(e,d,n,a)}return e})},ah=vb(function(i,e,t){BI(i,e,t)});function VI(i,e,t=1,n){if(typeof t!="number")throw new j("translation-service-quantity-not-a-number",null,{quantity:t});const r=n||ce.window.CKEDITOR_TRANSLATIONS,a=function(g){return Object.keys(g).length}(r);a===1&&(i=Object.keys(r)[0]);const c=e.id||e.string;if(a===0||!function(g,f,_){return!!_[g]&&!!_[g].dictionary[f]}(i,c,r))return t!==1?e.plural:e.string;const d=r[i].dictionary,u=r[i].getPluralForm||(g=>g===1?0:1),p=d[c];return typeof p=="string"?p:p[Number(u(t))]}ce.window.CKEDITOR_TRANSLATIONS||(ce.window.CKEDITOR_TRANSLATIONS={});const UI=["ar","ara","dv","div","fa","per","fas","he","heb","ku","kur","ug","uig"];function Cb(i){return UI.includes(i)?"rtl":"ltr"}class HI{constructor({uiLanguage:e="en",contentLanguage:t,translations:n}={}){this.uiLanguage=e,this.contentLanguage=t||this.uiLanguage,this.uiLanguageDirection=Cb(this.uiLanguage),this.contentLanguageDirection=Cb(this.contentLanguage),this.translations=function(r){return Array.isArray(r)?r.reduce((a,c)=>ah(a,c)):r}(n),this.t=(r,a)=>this._t(r,a)}get language(){return console.warn("locale-deprecated-language-property: The Locale#language property has been deprecated and will be removed in the near future. Please use #uiLanguage and #contentLanguage properties instead."),this.uiLanguage}_t(e,t=[]){t=Fe(t),typeof e=="string"&&(e={string:e});const n=e.plural?t[0]:1;return function(r,a){return r.replace(/%(\d+)/g,(c,d)=>d<a.length?a[d]:c)}(VI(this.uiLanguage,e,n,this.translations),t)}}class Hn extends se(){constructor(e={},t={}){super();const n=Te(e);if(n||(t=e),this._items=[],this._itemMap=new Map,this._idProperty=t.idProperty||"id",this._bindToExternalToInternalMap=new WeakMap,this._bindToInternalToExternalMap=new WeakMap,this._skippedIndexesFromExternal=[],n)for(const r of e)this._items.push(r),this._itemMap.set(this._getItemIdBeforeAdding(r),r)}get length(){return this._items.length}get first(){return this._items[0]||null}get last(){return this._items[this.length-1]||null}add(e,t){return this.addMany([e],t)}addMany(e,t){if(t===void 0)t=this._items.length;else if(t>this._items.length||t<0)throw new j("collection-add-item-invalid-index",this);let n=0;for(const r of e){const a=this._getItemIdBeforeAdding(r),c=t+n;this._items.splice(c,0,r),this._itemMap.set(a,r),this.fire("add",r,c),n++}return this.fire("change",{added:e,removed:[],index:t}),this}get(e){let t;if(typeof e=="string")t=this._itemMap.get(e);else{if(typeof e!="number")throw new j("collection-get-invalid-arg",this);t=this._items[e]}return t||null}has(e){if(typeof e=="string")return this._itemMap.has(e);{const t=e[this._idProperty];return t&&this._itemMap.has(t)}}getIndex(e){let t;return t=typeof e=="string"?this._itemMap.get(e):e,t?this._items.indexOf(t):-1}remove(e){const[t,n]=this._remove(e);return this.fire("change",{added:[],removed:[t],index:n}),t}map(e,t){return this._items.map(e,t)}forEach(e,t){this._items.forEach(e,t)}find(e,t){return this._items.find(e,t)}filter(e,t){return this._items.filter(e,t)}clear(){this._bindToCollection&&(this.stopListening(this._bindToCollection),this._bindToCollection=null);const e=Array.from(this._items);for(;this.length;)this._remove(0);this.fire("change",{added:[],removed:e,index:0})}bindTo(e){if(this._bindToCollection)throw new j("collection-bind-to-rebind",this);return this._bindToCollection=e,{as:t=>{this._setUpBindToBinding(n=>new t(n))},using:t=>{typeof t=="function"?this._setUpBindToBinding(t):this._setUpBindToBinding(n=>n[t])}}}_setUpBindToBinding(e){const t=this._bindToCollection,n=(r,a,c)=>{const d=t._bindToCollection==this,u=t._bindToInternalToExternalMap.get(a);if(d&&u)this._bindToExternalToInternalMap.set(a,u),this._bindToInternalToExternalMap.set(u,a);else{const p=e(a);if(!p)return void this._skippedIndexesFromExternal.push(c);let g=c;for(const f of this._skippedIndexesFromExternal)c>f&&g--;for(const f of t._skippedIndexesFromExternal)g>=f&&g++;this._bindToExternalToInternalMap.set(a,p),this._bindToInternalToExternalMap.set(p,a),this.add(p,g);for(let f=0;f<t._skippedIndexesFromExternal.length;f++)g<=t._skippedIndexesFromExternal[f]&&t._skippedIndexesFromExternal[f]++}};for(const r of t)n(0,r,t.getIndex(r));this.listenTo(t,"add",n),this.listenTo(t,"remove",(r,a,c)=>{const d=this._bindToExternalToInternalMap.get(a);d&&this.remove(d),this._skippedIndexesFromExternal=this._skippedIndexesFromExternal.reduce((u,p)=>(c<p&&u.push(p-1),c>p&&u.push(p),u),[])})}_getItemIdBeforeAdding(e){const t=this._idProperty;let n;if(t in e){if(n=e[t],typeof n!="string")throw new j("collection-add-invalid-id",this);if(this.get(n))throw new j("collection-add-item-already-exists",this)}else e[t]=n=G();return n}_remove(e){let t,n,r,a=!1;const c=this._idProperty;if(typeof e=="string"?(n=e,r=this._itemMap.get(n),a=!r,r&&(t=this._items.indexOf(r))):typeof e=="number"?(t=e,r=this._items[t],a=!r,r&&(n=r[c])):(r=e,n=r[c],t=this._items.indexOf(r),a=t==-1||!this._itemMap.get(n)),a)throw new j("collection-remove-404",this);this._items.splice(t,1),this._itemMap.delete(n);const d=this._bindToInternalToExternalMap.get(r);return this._bindToInternalToExternalMap.delete(r),this._bindToExternalToInternalMap.delete(d),this.fire("remove",r,t),[r,t]}[Symbol.iterator](){return this._items[Symbol.iterator]()}}function _t(i){const e=i.next();return e.done?null:e.value}class At extends Sn(be()){constructor(){super(),this._elements=new Set,this._nextEventLoopTimeout=null,this.set("isFocused",!1),this.set("focusedElement",null)}add(e){if(this._elements.has(e))throw new j("focustracker-add-element-already-exist",this);this.listenTo(e,"focus",()=>this._focus(e),{useCapture:!0}),this.listenTo(e,"blur",()=>this._blur(),{useCapture:!0}),this._elements.add(e)}remove(e){e===this.focusedElement&&this._blur(),this._elements.has(e)&&(this.stopListening(e),this._elements.delete(e))}destroy(){this.stopListening()}_focus(e){clearTimeout(this._nextEventLoopTimeout),this.focusedElement=e,this.isFocused=!0}_blur(){clearTimeout(this._nextEventLoopTimeout),this._nextEventLoopTimeout=setTimeout(()=>{this.focusedElement=null,this.isFocused=!1},0)}}class Lt{constructor(){this._listener=new(Sn())}listenTo(e){this._listener.listenTo(e,"keydown",(t,n)=>{this._listener.fire("_keydown:"+Br(n),n)})}set(e,t,n={}){const r=Qs(e),a=n.priority;this._listener.listenTo(this._listener,"_keydown:"+r,(c,d)=>{t(d,()=>{d.preventDefault(),d.stopPropagation(),c.stop()}),c.return=!0},{priority:a})}press(e){return!!this._listener.fire("_keydown:"+Br(e),e)}stopListening(e){this._listener.stopListening(e)}destroy(){this.stopListening()}}function lo(i){return Te(i)?new Map(i):function(e){const t=new Map;for(const n in e)t.set(n,e[n]);return t}(i)}function ch(i,e){let t;function n(...r){n.cancel(),t=setTimeout(()=>i(...r),e)}return n.cancel=()=>{clearTimeout(t)},n}function lh(i,e){return!!(t=i.charAt(e-1))&&t.length==1&&/[\ud800-\udbff]/.test(t)&&function(n){return!!n&&n.length==1&&/[\udc00-\udfff]/.test(n)}(i.charAt(e));var t}function dh(i,e){return!!(t=i.charAt(e))&&t.length==1&&/[\u0300-\u036f\u1ab0-\u1aff\u1dc0-\u1dff\u20d0-\u20ff\ufe20-\ufe2f]/.test(t);var t}const WI=function(){const i=[new RegExp("\\p{Emoji}[\\u{E0020}-\\u{E007E}]+\\u{E007F}","u"),new RegExp("\\p{Emoji}\\u{FE0F}?\\u{20E3}","u"),new RegExp("\\p{Emoji}\\u{FE0F}","u"),new RegExp("(?=\\p{General_Category=Other_Symbol})\\p{Emoji}\\p{Emoji_Modifier}*","u")],e=new RegExp("\\p{Regional_Indicator}{2}","u").source,t="(?:"+i.map(n=>n.source).join("|")+")";return new RegExp(`${e}|${t}(?:‍${t})*`,"ug")}();function yb(i,e){const t=String(i).matchAll(WI);return Array.from(t).some(n=>n.index<e&&e<n.index+n[0].length)}class X extends be(){constructor(e){super(),this._disableStack=new Set,this.editor=e,this.set("isEnabled",!0)}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",xb,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",xb),this.isEnabled=!0)}destroy(){this.stopListening()}static get isContextPlugin(){return!1}}function xb(i){i.return=!1,i.stop()}class we extends be(){constructor(e){super(),this.editor=e,this.set("value",void 0),this.set("isEnabled",!1),this._affectsData=!0,this._isEnabledBasedOnSelection=!0,this._disableStack=new Set,this.decorate("execute"),this.listenTo(this.editor.model.document,"change",()=>{this.refresh()}),this.listenTo(e,"change:isReadOnly",()=>{this.refresh()}),this.on("set:isEnabled",t=>{if(!this.affectsData)return;const n=e.model.document.selection,r=n.getFirstPosition().root.rootName!="$graveyard"&&e.model.canEditAt(n);(e.isReadOnly||this._isEnabledBasedOnSelection&&!r)&&(t.return=!1,t.stop())},{priority:"highest"}),this.on("execute",t=>{this.isEnabled||t.stop()},{priority:"high"})}get affectsData(){return this._affectsData}set affectsData(e){this._affectsData=e}refresh(){this.isEnabled=!0}forceDisabled(e){this._disableStack.add(e),this._disableStack.size==1&&(this.on("set:isEnabled",Eb,{priority:"highest"}),this.isEnabled=!1)}clearForceDisabled(e){this._disableStack.delete(e),this._disableStack.size==0&&(this.off("set:isEnabled",Eb),this.refresh())}execute(...e){}destroy(){this.stopListening()}}function Eb(i){i.return=!1,i.stop()}class Db extends we{constructor(){super(...arguments),this._childCommandsDefinitions=[]}refresh(){}execute(...e){const t=this._getFirstEnabledCommand();return!!t&&t.execute(e)}registerChildCommand(e,t={}){H(this._childCommandsDefinitions,{command:e,priority:t.priority||"normal"}),e.on("change:isEnabled",()=>this._checkEnabled()),this._checkEnabled()}_checkEnabled(){this.isEnabled=!!this._getFirstEnabledCommand()}_getFirstEnabledCommand(){const e=this._childCommandsDefinitions.find(({command:t})=>t.isEnabled);return e&&e.command}}class Sb extends se(){constructor(e,t=[],n=[]){super(),this._plugins=new Map,this._context=e,this._availablePlugins=new Map;for(const r of t)r.pluginName&&this._availablePlugins.set(r.pluginName,r);this._contextPlugins=new Map;for(const[r,a]of n)this._contextPlugins.set(r,a),this._contextPlugins.set(a,r),r.pluginName&&this._availablePlugins.set(r.pluginName,r)}*[Symbol.iterator](){for(const e of this._plugins)typeof e[0]=="function"&&(yield e)}get(e){const t=this._plugins.get(e);if(!t){let n=e;throw typeof e=="function"&&(n=e.pluginName||e.name),new j("plugincollection-plugin-not-loaded",this._context,{plugin:n})}return t}has(e){return this._plugins.has(e)}init(e,t=[],n=[]){const r=this,a=this._context;(function x(T,M=new Set){T.forEach(z=>{u(z)&&(M.has(z)||(M.add(z),z.pluginName&&!r._availablePlugins.has(z.pluginName)&&r._availablePlugins.set(z.pluginName,z),z.requires&&x(z.requires,M)))})})(e),_(e);const c=[...function x(T,M=new Set){return T.map(z=>u(z)?z:r._availablePlugins.get(z)).reduce((z,F)=>M.has(F)?z:(M.add(F),F.requires&&(_(F.requires,F),x(F.requires,M).forEach(W=>z.add(W))),z.add(F)),new Set)}(e.filter(x=>!g(x,t)))];(function(x,T){for(const M of T){if(typeof M!="function")throw new j("plugincollection-replace-plugin-invalid-type",null,{pluginItem:M});const z=M.pluginName;if(!z)throw new j("plugincollection-replace-plugin-missing-name",null,{pluginItem:M});if(M.requires&&M.requires.length)throw new j("plugincollection-plugin-for-replacing-cannot-have-dependencies",null,{pluginName:z});const F=r._availablePlugins.get(z);if(!F)throw new j("plugincollection-plugin-for-replacing-not-exist",null,{pluginName:z});const W=x.indexOf(F);if(W===-1){if(r._contextPlugins.has(F))return;throw new j("plugincollection-plugin-for-replacing-not-loaded",null,{pluginName:z})}if(F.requires&&F.requires.length)throw new j("plugincollection-replaced-plugin-cannot-have-dependencies",null,{pluginName:z});x.splice(W,1,M),r._availablePlugins.set(z,M)}})(c,n);const d=c.map(x=>{let T=r._contextPlugins.get(x);return T=T||new x(a),r._add(x,T),T});return C(d,"init").then(()=>C(d,"afterInit")).then(()=>d);function u(x){return typeof x=="function"}function p(x){return u(x)&&!!x.isContextPlugin}function g(x,T){return T.some(M=>M===x||f(x)===M||f(M)===x)}function f(x){return u(x)?x.pluginName||x.name:x}function _(x,T=null){x.map(M=>u(M)?M:r._availablePlugins.get(M)||M).forEach(M=>{(function(z,F){if(!u(z))throw F?new j("plugincollection-soft-required",a,{missingPlugin:z,requiredBy:f(F)}):new j("plugincollection-plugin-not-found",a,{plugin:z})})(M,T),function(z,F){if(p(F)&&!p(z))throw new j("plugincollection-context-required",a,{plugin:f(z),requiredBy:f(F)})}(M,T),function(z,F){if(F&&g(z,t))throw new j("plugincollection-required",a,{plugin:f(z),requiredBy:f(F)})}(M,T)})}function C(x,T){return x.reduce((M,z)=>z[T]?r._contextPlugins.has(z)?M:M.then(z[T].bind(z)):M,Promise.resolve())}}destroy(){const e=[];for(const[,t]of this)typeof t.destroy!="function"||this._contextPlugins.has(t)||e.push(t.destroy());return Promise.all(e)}_add(e,t){this._plugins.set(e,t);const n=e.pluginName;if(n){if(this._plugins.has(n))throw new j("plugincollection-plugin-name-conflict",null,{pluginName:n,plugin1:this._plugins.get(n).constructor,plugin2:e});this._plugins.set(n,t)}}}var Ib=Object.getOwnPropertySymbols,qI=Object.prototype.hasOwnProperty,$I=Object.prototype.propertyIsEnumerable;class Tb{constructor(e){this._contextOwner=null;const t=e||{},{translations:n}=t,r=((d,u)=>{var p={};for(var g in d)qI.call(d,g)&&u.indexOf(g)<0&&(p[g]=d[g]);if(d!=null&&Ib)for(var g of Ib(d))u.indexOf(g)<0&&$I.call(d,g)&&(p[g]=d[g]);return p})(t,["translations"]);this.config=new Jk(r,this.constructor.defaultConfig);const a=this.constructor.builtinPlugins;this.config.define("plugins",a),this.plugins=new Sb(this,a);const c=this.config.get("language")||{};this.locale=new HI({uiLanguage:typeof c=="string"?c:c.ui,contentLanguage:this.config.get("language.content"),translations:n}),this.t=this.locale.t,this.editors=new Hn}initPlugins(){const e=this.config.get("plugins")||[],t=this.config.get("substitutePlugins")||[];for(const n of e.concat(t)){if(typeof n!="function")throw new j("context-initplugins-constructor-only",null,{Plugin:n});if(n.isContextPlugin!==!0)throw new j("context-initplugins-invalid-plugin",null,{Plugin:n})}return this.plugins.init(e,[],t)}destroy(){return Promise.all(Array.from(this.editors,e=>e.destroy())).then(()=>this.plugins.destroy())}_addEditor(e,t){if(this._contextOwner)throw new j("context-addeditor-private-context");this.editors.add(e),t&&(this._contextOwner=e)}_removeEditor(e){return this.editors.has(e)&&this.editors.remove(e),this._contextOwner===e?this.destroy():Promise.resolve()}_getEditorConfig(){const e={};for(const t of this.config.names())["plugins","removePlugins","extraPlugins"].includes(t)||(e[t]=this.config.get(t));return e}static create(e){return new Promise(t=>{const n=new this(e);t(n.initPlugins().then(()=>n))})}}class Kc extends be(){constructor(e){super(),this.context=e}destroy(){this.stopListening()}static get isContextPlugin(){return!0}}class GI extends Lt{constructor(e){super(),this.editor=e}set(e,t,n={}){if(typeof t=="string"){const r=t;t=(a,c)=>{this.editor.execute(r),c()}}super.set(e,t,n)}}var KI=m(2591),te=m.n(KI),Mb=m(4098),QI={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};te()(Mb.A,QI),Mb.A.locals;const Qc=new WeakMap;let Bb=!1;function Nb({view:i,element:e,text:t,isDirectHost:n=!0,keepOnFocus:r=!1}){const a=i.document;function c(d){Qc.get(a).set(e,{text:d,isDirectHost:n,keepOnFocus:r,hostElement:n?e:null}),i.change(u=>uh(a,u))}Qc.has(a)||(Qc.set(a,new Map),a.registerPostFixer(d=>uh(a,d)),a.on("change:isComposing",()=>{i.change(d=>uh(a,d))},{priority:"high"})),e.is("editableElement")&&e.on("change:placeholder",(d,u,p)=>{c(p)}),e.placeholder?c(e.placeholder):t&&c(t),t&&function(){Bb||K("enableplaceholder-deprecated-text-option"),Bb=!0}()}function YI(i,e){return!e.hasClass("ck-placeholder")&&(i.addClass("ck-placeholder",e),!0)}function ZI(i,e){return!!e.hasClass("ck-placeholder")&&(i.removeClass("ck-placeholder",e),!0)}function JI(i,e){if(!i.isAttached()||Array.from(i.getChildren()).some(r=>!r.is("uiElement")))return!1;const t=i.document,n=t.selection.anchor;return(!t.isComposing||!n||n.parent!==i)&&(!!e||!t.isFocused||!!n&&n.parent!==i)}function uh(i,e){const t=Qc.get(i),n=[];let r=!1;for(const[a,c]of t)c.isDirectHost&&(n.push(a),Pb(e,a,c)&&(r=!0));for(const[a,c]of t){if(c.isDirectHost)continue;const d=XI(a);d&&(n.includes(d)||(c.hostElement=d,Pb(e,a,c)&&(r=!0)))}return r}function Pb(i,e,t){const{text:n,isDirectHost:r,hostElement:a}=t;let c=!1;return a.getAttribute("data-placeholder")!==n&&(i.setAttribute("data-placeholder",n,a),c=!0),(r||e.childCount==1)&&JI(a,t.keepOnFocus)?YI(i,a)&&(c=!0):ZI(i,a)&&(c=!0),c}function XI(i){if(i.childCount){const e=i.getChild(0);if(e.is("element")&&!e.is("uiElement")&&!e.is("attributeElement"))return e}return null}class Pi{is(){throw new Error("is() method is abstract")}}const jb=function(i){return eh(i,4)};class ji extends se(Pi){constructor(e){super(),this.document=e,this.parent=null}get index(){let e;if(!this.parent)return null;if((e=this.parent.getChildIndex(this))==-1)throw new j("view-node-not-found-in-parent",this);return e}get nextSibling(){const e=this.index;return e!==null&&this.parent.getChild(e+1)||null}get previousSibling(){const e=this.index;return e!==null&&this.parent.getChild(e-1)||null}get root(){let e=this;for(;e.parent;)e=e.parent;return e}isAttached(){return this.root.is("rootElement")}getPath(){const e=[];let t=this;for(;t.parent;)e.unshift(t.index),t=t.parent;return e}getAncestors(e={}){const t=[];let n=e.includeSelf?this:this.parent;for(;n;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}getCommonAncestor(e,t={}){const n=this.getAncestors(t),r=e.getAncestors(t);let a=0;for(;n[a]==r[a]&&n[a];)a++;return a===0?null:n[a-1]}isBefore(e){if(this==e||this.root!==e.root)return!1;const t=this.getPath(),n=e.getPath(),r=_e(t,n);switch(r){case"prefix":return!0;case"extension":return!1;default:return t[r]<n[r]}}isAfter(e){return this!=e&&this.root===e.root&&!this.isBefore(e)}_remove(){this.parent._removeChildren(this.index)}_fireChange(e,t){this.fire(`change:${e}`,t),this.parent&&this.parent._fireChange(e,t)}toJSON(){const e=jb(this);return delete e.parent,e}}ji.prototype.is=function(i){return i==="node"||i==="view:node"};class Oe extends ji{constructor(e,t){super(e),this._textData=t}get data(){return this._textData}get _data(){return this.data}set _data(e){this._fireChange("text",this),this._textData=e}isSimilar(e){return e instanceof Oe&&(this===e||this.data===e.data)}_clone(){return new Oe(this.document,this.data)}}Oe.prototype.is=function(i){return i==="$text"||i==="view:$text"||i==="text"||i==="view:text"||i==="node"||i==="view:node"};class uo extends Pi{constructor(e,t,n){if(super(),this.textNode=e,t<0||t>e.data.length)throw new j("view-textproxy-wrong-offsetintext",this);if(n<0||t+n>e.data.length)throw new j("view-textproxy-wrong-length",this);this.data=e.data.substring(t,t+n),this.offsetInText=t}get offsetSize(){return this.data.length}get isPartial(){return this.data.length!==this.textNode.data.length}get parent(){return this.textNode.parent}get root(){return this.textNode.root}get document(){return this.textNode.document}getAncestors(e={}){const t=[];let n=e.includeSelf?this.textNode:this.parent;for(;n!==null;)t[e.parentFirst?"push":"unshift"](n),n=n.parent;return t}}uo.prototype.is=function(i){return i==="$textProxy"||i==="view:$textProxy"||i==="textProxy"||i==="view:textProxy"};class ho{constructor(...e){this._patterns=[],this.add(...e)}add(...e){for(let t of e)(typeof t=="string"||t instanceof RegExp)&&(t={name:t}),this._patterns.push(t)}match(...e){for(const t of e)for(const n of this._patterns){const r=Ob(t,n);if(r)return{element:t,pattern:n,match:r}}return null}matchAll(...e){const t=[];for(const n of e)for(const r of this._patterns){const a=Ob(n,r);a&&t.push({element:n,pattern:r,match:a})}return t.length>0?t:null}getElementName(){if(this._patterns.length!==1)return null;const e=this._patterns[0],t=e.name;return typeof e=="function"||!t||t instanceof RegExp?null:t}}function Ob(i,e){if(typeof e=="function")return e(i);const t={};return e.name&&(t.name=function(n,r){return n instanceof RegExp?!!r.match(n):n===r}(e.name,i.name),!t.name)||e.attributes&&(t.attributes=function(n,r){const a=new Set(r.getAttributeKeys());return nn(n)?(n.style!==void 0&&K("matcher-pattern-deprecated-attributes-style-key",n),n.class!==void 0&&K("matcher-pattern-deprecated-attributes-class-key",n)):(a.delete("style"),a.delete("class")),hh(n,a,c=>r.getAttribute(c))}(e.attributes,i),!t.attributes)||e.classes&&(t.classes=function(n,r){return hh(n,r.getClassNames(),()=>{})}(e.classes,i),!t.classes)||e.styles&&(t.styles=function(n,r){return hh(n,r.getStyleNames(!0),a=>r.getStyle(a))}(e.styles,i),!t.styles)?null:t}function hh(i,e,t){const n=function(c){return Array.isArray(c)?c.map(d=>nn(d)?(d.key!==void 0&&d.value!==void 0||K("matcher-pattern-missing-key-or-value",d),[d.key,d.value]):[d,!0]):nn(c)?Object.entries(c):[[c,!0]]}(i),r=Array.from(e),a=[];if(n.forEach(([c,d])=>{r.forEach(u=>{(function(p,g){return p===!0||p===g||p instanceof RegExp&&g.match(p)})(c,u)&&function(p,g,f){if(p===!0)return!0;const _=f(g);return p===_||p instanceof RegExp&&!!String(_).match(p)}(d,u,t)&&a.push(u)})}),n.length&&!(a.length<n.length))return a}const Yc=function(i){return typeof i=="symbol"||En(i)&&Ko(i)=="[object Symbol]"};var eT=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,tT=/^\w*$/;const ph=function(i,e){if(tn(i))return!1;var t=typeof i;return!(t!="number"&&t!="symbol"&&t!="boolean"&&i!=null&&!Yc(i))||tT.test(i)||!eT.test(i)||e!=null&&i in Object(e)};function mh(i,e){if(typeof i!="function"||e!=null&&typeof e!="function")throw new TypeError("Expected a function");var t=function(){var n=arguments,r=e?e.apply(this,n):n[0],a=t.cache;if(a.has(r))return a.get(r);var c=i.apply(this,n);return t.cache=a.set(r,c)||a,c};return t.cache=new(mh.Cache||jc),t}mh.Cache=jc;const nT=mh,oT=function(i){var e=nT(i,function(n){return t.size===500&&t.clear(),n}),t=e.cache;return e};var iT=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,rT=/\\(\\)?/g,sT=oT(function(i){var e=[];return i.charCodeAt(0)===46&&e.push(""),i.replace(iT,function(t,n,r,a){e.push(r?a.replace(rT,"$1"):n||t)}),e});const aT=sT,cT=function(i,e){for(var t=-1,n=i==null?0:i.length,r=Array(n);++t<n;)r[t]=e(i[t],t,i);return r};var Lb=co?co.prototype:void 0,zb=Lb?Lb.toString:void 0;const lT=function i(e){if(typeof e=="string")return e;if(tn(e))return cT(e,i)+"";if(Yc(e))return zb?zb.call(e):"";var t=e+"";return t=="0"&&1/e==-1/0?"-0":t},gh=function(i){return i==null?"":lT(i)},Zc=function(i,e){return tn(i)?i:ph(i,e)?[i]:aT(gh(i))},dT=function(i){var e=i==null?0:i.length;return e?i[e-1]:void 0},Nr=function(i){if(typeof i=="string"||Yc(i))return i;var e=i+"";return e=="0"&&1/i==-1/0?"-0":e},fh=function(i,e){for(var t=0,n=(e=Zc(e,i)).length;i!=null&&t<n;)i=i[Nr(e[t++])];return t&&t==n?i:void 0},Rb=function(i,e,t){var n=-1,r=i.length;e<0&&(e=-e>r?0:r+e),(t=t>r?r:t)<0&&(t+=r),r=e>t?0:t-e>>>0,e>>>=0;for(var a=Array(r);++n<r;)a[n]=i[n+e];return a},uT=function(i,e){return e.length<2?i:fh(i,Rb(e,0,-1))},hT=function(i,e){return e=Zc(e,i),(i=uT(i,e))==null||delete i[Nr(dT(e))]},pT=function(i,e){return i==null||hT(i,e)},Ys=function(i,e,t){var n=i==null?void 0:fh(i,e);return n===void 0?t:n},mT=function(i,e,t,n){if(!Pe(i))return i;for(var r=-1,a=(e=Zc(e,i)).length,c=a-1,d=i;d!=null&&++r<a;){var u=Nr(e[r]),p=t;if(u==="__proto__"||u==="constructor"||u==="prototype")return i;if(r!=c){var g=d[u];(p=void 0)==void 0&&(p=Pe(g)?g:Rc(e[r+1])?[]:{})}Vu(d,u,p),d=d[u]}return i},gT=function(i,e,t){return i==null?i:mT(i,e,t)};class kh{constructor(e){this._styles={},this._styleProcessor=e}get isEmpty(){return!Object.entries(this._styles).length}get size(){return this.isEmpty?0:this.getStyleNames().length}setTo(e){this.clear();const t=function(n){let r=null,a=0,c=0,d=null;const u=new Map;if(n==="")return u;n.charAt(n.length-1)!=";"&&(n+=";");for(let p=0;p<n.length;p++){const g=n.charAt(p);if(r===null)switch(g){case":":d||(d=n.substr(a,p-a),c=p+1);break;case'"':case"'":r=g;break;case";":{const f=n.substr(c,p-c);d&&u.set(d.trim(),f.trim()),d=null,a=p+1;break}}else g===r&&(r=null)}return u}(e);for(const[n,r]of t)this._styleProcessor.toNormalizedForm(n,r,this._styles)}has(e){if(this.isEmpty)return!1;const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)}set(e,t){if(Pe(e))for(const[n,r]of Object.entries(e))this._styleProcessor.toNormalizedForm(n,r,this._styles);else this._styleProcessor.toNormalizedForm(e,t,this._styles)}remove(e){const t=bh(e);pT(this._styles,t),delete this._styles[e],this._cleanEmptyObjectsOnPath(t)}getNormalized(e){return this._styleProcessor.getNormalized(e,this._styles)}toString(){return this.isEmpty?"":this.getStylesEntries().map(e=>e.join(":")).sort().join(";")+";"}getAsString(e){if(this.isEmpty)return;if(this._styles[e]&&!Pe(this._styles[e]))return this._styles[e];const t=this._styleProcessor.getReducedForm(e,this._styles).find(([n])=>n===e);return Array.isArray(t)?t[1]:void 0}getStyleNames(e=!1){return this.isEmpty?[]:e?this._styleProcessor.getStyleNames(this._styles):this.getStylesEntries().map(([t])=>t)}clear(){this._styles={}}getStylesEntries(){const e=[],t=Object.keys(this._styles);for(const n of t)e.push(...this._styleProcessor.getReducedForm(n,this._styles));return e}_cleanEmptyObjectsOnPath(e){const t=e.split(".");if(!(t.length>1))return;const n=t.splice(0,t.length-1).join("."),r=Ys(this._styles,n);r&&!Object.keys(r).length&&this.remove(n)}}class fT{constructor(){this._normalizers=new Map,this._extractors=new Map,this._reducers=new Map,this._consumables=new Map}toNormalizedForm(e,t,n){if(Pe(t))wh(n,bh(e),t);else if(this._normalizers.has(e)){const r=this._normalizers.get(e),{path:a,value:c}=r(t);wh(n,a,c)}else wh(n,e,t)}getNormalized(e,t){if(!e)return ah({},t);if(t[e]!==void 0)return t[e];if(this._extractors.has(e)){const n=this._extractors.get(e);if(typeof n=="string")return Ys(t,n);const r=n(e,t);if(r)return r}return Ys(t,bh(e))}getReducedForm(e,t){const n=this.getNormalized(e,t);return n===void 0?[]:this._reducers.has(e)?this._reducers.get(e)(n):[[e,n]]}getStyleNames(e){const t=Array.from(this._consumables.keys()).filter(r=>{const a=this.getNormalized(r,e);return a&&typeof a=="object"?Object.keys(a).length:a}),n=new Set([...t,...Object.keys(e)]);return Array.from(n)}getRelatedStyles(e){return this._consumables.get(e)||[]}setNormalizer(e,t){this._normalizers.set(e,t)}setExtractor(e,t){this._extractors.set(e,t)}setReducer(e,t){this._reducers.set(e,t)}setStyleRelation(e,t){this._mapStyleNames(e,t);for(const n of t)this._mapStyleNames(n,[e])}_mapStyleNames(e,t){this._consumables.has(e)||this._consumables.set(e,[]),this._consumables.get(e).push(...t)}}function bh(i){return i.replace("-",".")}function wh(i,e,t){let n=t;Pe(t)&&(n=ah({},Ys(i,e),t)),gT(i,e,n)}class on extends ji{constructor(e,t,n,r){if(super(e),this._unsafeAttributesToRender=[],this._customProperties=new Map,this.name=t,this._attrs=function(a){const c=lo(a);for(const[d,u]of c)u===null?c.delete(d):typeof u!="string"&&c.set(d,String(u));return c}(n),this._children=[],r&&this._insertChild(0,r),this._classes=new Set,this._attrs.has("class")){const a=this._attrs.get("class");Fb(this._classes,a),this._attrs.delete("class")}this._styles=new kh(this.document.stylesProcessor),this._attrs.has("style")&&(this._styles.setTo(this._attrs.get("style")),this._attrs.delete("style"))}get childCount(){return this._children.length}get isEmpty(){return this._children.length===0}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}*getAttributeKeys(){this._classes.size>0&&(yield"class"),this._styles.isEmpty||(yield"style"),yield*this._attrs.keys()}*getAttributes(){yield*this._attrs.entries(),this._classes.size>0&&(yield["class",this.getAttribute("class")]),this._styles.isEmpty||(yield["style",this.getAttribute("style")])}getAttribute(e){if(e=="class")return this._classes.size>0?[...this._classes].join(" "):void 0;if(e=="style"){const t=this._styles.toString();return t==""?void 0:t}return this._attrs.get(e)}hasAttribute(e){return e=="class"?this._classes.size>0:e=="style"?!this._styles.isEmpty:this._attrs.has(e)}isSimilar(e){if(!(e instanceof on))return!1;if(this===e)return!0;if(this.name!=e.name||this._attrs.size!==e._attrs.size||this._classes.size!==e._classes.size||this._styles.size!==e._styles.size)return!1;for(const[t,n]of this._attrs)if(!e._attrs.has(t)||e._attrs.get(t)!==n)return!1;for(const t of this._classes)if(!e._classes.has(t))return!1;for(const t of this._styles.getStyleNames())if(!e._styles.has(t)||e._styles.getAsString(t)!==this._styles.getAsString(t))return!1;return!0}hasClass(...e){for(const t of e)if(!this._classes.has(t))return!1;return!0}getClassNames(){return this._classes.keys()}getStyle(e){return this._styles.getAsString(e)}getNormalizedStyle(e){return this._styles.getNormalized(e)}getStyleNames(e){return this._styles.getStyleNames(e)}hasStyle(...e){for(const t of e)if(!this._styles.has(t))return!1;return!0}findAncestor(...e){const t=new ho(...e);let n=this.parent;for(;n&&!n.is("documentFragment");){if(t.match(n))return n;n=n.parent}return null}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}getIdentity(){const e=Array.from(this._classes).sort().join(","),t=this._styles.toString(),n=Array.from(this._attrs).map(r=>`${r[0]}="${r[1]}"`).sort().join(" ");return this.name+(e==""?"":` class="${e}"`)+(t?` style="${t}"`:"")+(n==""?"":` ${n}`)}shouldRenderUnsafeAttribute(e){return this._unsafeAttributesToRender.includes(e)}_clone(e=!1){const t=[];if(e)for(const r of this.getChildren())t.push(r._clone(e));const n=new this.constructor(this.document,this.name,this._attrs,t);return n._classes=new Set(this._classes),n._styles.set(this._styles.getNormalized()),n._customProperties=new Map(this._customProperties),n.getFillerOffset=this.getFillerOffset,n._unsafeAttributesToRender=this._unsafeAttributesToRender,n}_appendChild(e){return this._insertChild(this.childCount,e)}_insertChild(e,t){this._fireChange("children",this);let n=0;const r=function(a,c){return typeof c=="string"?[new Oe(a,c)]:(Te(c)||(c=[c]),Array.from(c).map(d=>typeof d=="string"?new Oe(a,d):d instanceof uo?new Oe(a,d.data):d))}(this.document,t);for(const a of r)a.parent!==null&&a._remove(),a.parent=this,a.document=this.document,this._children.splice(e,0,a),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_setAttribute(e,t){const n=String(t);this._fireChange("attributes",this),e=="class"?Fb(this._classes,n):e=="style"?this._styles.setTo(n):this._attrs.set(e,n)}_removeAttribute(e){return this._fireChange("attributes",this),e=="class"?this._classes.size>0&&(this._classes.clear(),!0):e=="style"?!this._styles.isEmpty&&(this._styles.clear(),!0):this._attrs.delete(e)}_addClass(e){this._fireChange("attributes",this);for(const t of Fe(e))this._classes.add(t)}_removeClass(e){this._fireChange("attributes",this);for(const t of Fe(e))this._classes.delete(t)}_setStyle(e,t){this._fireChange("attributes",this),typeof e!="string"?this._styles.set(e):this._styles.set(e,t)}_removeStyle(e){this._fireChange("attributes",this);for(const t of Fe(e))this._styles.remove(t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}function Fb(i,e){const t=e.split(/\s+/);i.clear(),t.forEach(n=>i.add(n))}on.prototype.is=function(i,e){return e?e===this.name&&(i==="element"||i==="view:element"):i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Zs extends on{constructor(e,t,n,r){super(e,t,n,r),this.getFillerOffset=kT}}function kT(){const i=[...this.getChildren()],e=i[this.childCount-1];if(e&&e.is("element","br"))return this.childCount;for(const t of i)if(!t.is("uiElement"))return null;return this.childCount}Zs.prototype.is=function(i,e){return e?e===this.name&&(i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Jc extends be(Zs){constructor(e,t,n,r){super(e,t,n,r),this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("placeholder",void 0),this.bind("isReadOnly").to(e),this.bind("isFocused").to(e,"isFocused",a=>a&&e.selection.editableElement==this),this.listenTo(e.selection,"change",()=>{this.isFocused=e.isFocused&&e.selection.editableElement==this})}destroy(){this.stopListening()}}Jc.prototype.is=function(i,e){return e?e===this.name&&(i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};const Vb=Symbol("rootName");class Ub extends Jc{constructor(e,t){super(e,t),this.rootName="main"}get rootName(){return this.getCustomProperty(Vb)}set rootName(e){this._setCustomProperty(Vb,e)}set _name(e){this.name=e}}Ub.prototype.is=function(i,e){return e?e===this.name&&(i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"):i==="rootElement"||i==="view:rootElement"||i==="editableElement"||i==="view:editableElement"||i==="containerElement"||i==="view:containerElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Oi{constructor(e={}){if(!e.boundaries&&!e.startPosition)throw new j("view-tree-walker-no-start-position",null);if(e.direction&&e.direction!="forward"&&e.direction!="backward")throw new j("view-tree-walker-unknown-direction",e.startPosition,{direction:e.direction});this.boundaries=e.boundaries||null,e.startPosition?this._position=ne._createAt(e.startPosition):this._position=ne._createAt(e.boundaries[e.direction=="backward"?"end":"start"]),this.direction=e.direction||"forward",this.singleCharacters=!!e.singleCharacters,this.shallow=!!e.shallow,this.ignoreElementEnd=!!e.ignoreElementEnd,this._boundaryStartParent=this.boundaries?this.boundaries.start.parent:null,this._boundaryEndParent=this.boundaries?this.boundaries.end.parent:null}[Symbol.iterator](){return this}get position(){return this._position}skip(e){let t,n;do n=this.position,t=this.next();while(!t.done&&e(t.value));t.done||(this._position=n)}next(){return this.direction=="forward"?this._next():this._previous()}_next(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===n.childCount)return{done:!0,value:void 0};if(n===this._boundaryEndParent&&e.offset==this.boundaries.end.offset)return{done:!0,value:void 0};let r;if(n instanceof Oe){if(e.isAtEnd)return this._position=ne._createAfter(n),this._next();r=n.data[e.offset]}else r=n.getChild(e.offset);if(r instanceof on){if(this.shallow){if(this.boundaries&&this.boundaries.end.isBefore(e))return{done:!0,value:void 0};e.offset++}else e=new ne(r,0);return this._position=e,this._formatReturnValue("elementStart",r,t,e,1)}if(r instanceof Oe){if(this.singleCharacters)return e=new ne(r,0),this._position=e,this._next();let a,c=r.data.length;return r==this._boundaryEndParent?(c=this.boundaries.end.offset,a=new uo(r,0,c),e=ne._createAfter(a)):(a=new uo(r,0,r.data.length),e.offset++),this._position=e,this._formatReturnValue("text",a,t,e,c)}if(typeof r=="string"){let a;this.singleCharacters?a=1:a=(n===this._boundaryEndParent?this.boundaries.end.offset:n.data.length)-e.offset;const c=new uo(n,e.offset,a);return e.offset+=a,this._position=e,this._formatReturnValue("text",c,t,e,a)}return e=ne._createAfter(n),this._position=e,this.ignoreElementEnd?this._next():this._formatReturnValue("elementEnd",n,t,e)}_previous(){let e=this.position.clone();const t=this.position,n=e.parent;if(n.parent===null&&e.offset===0)return{done:!0,value:void 0};if(n==this._boundaryStartParent&&e.offset==this.boundaries.start.offset)return{done:!0,value:void 0};let r;if(n instanceof Oe){if(e.isAtStart)return this._position=ne._createBefore(n),this._previous();r=n.data[e.offset-1]}else r=n.getChild(e.offset-1);if(r instanceof on)return this.shallow?(e.offset--,this._position=e,this._formatReturnValue("elementStart",r,t,e,1)):(e=new ne(r,r.childCount),this._position=e,this.ignoreElementEnd?this._previous():this._formatReturnValue("elementEnd",r,t,e));if(r instanceof Oe){if(this.singleCharacters)return e=new ne(r,r.data.length),this._position=e,this._previous();let a,c=r.data.length;if(r==this._boundaryStartParent){const d=this.boundaries.start.offset;a=new uo(r,d,r.data.length-d),c=a.data.length,e=ne._createBefore(a)}else a=new uo(r,0,r.data.length),e.offset--;return this._position=e,this._formatReturnValue("text",a,t,e,c)}if(typeof r=="string"){let a;if(this.singleCharacters)a=1;else{const d=n===this._boundaryStartParent?this.boundaries.start.offset:0;a=e.offset-d}e.offset-=a;const c=new uo(n,e.offset,a);return this._position=e,this._formatReturnValue("text",c,t,e,a)}return e=ne._createBefore(n),this._position=e,this._formatReturnValue("elementStart",n,t,e,1)}_formatReturnValue(e,t,n,r,a){return t instanceof uo&&(t.offsetInText+t.data.length==t.textNode.data.length&&(this.direction!="forward"||this.boundaries&&this.boundaries.end.isEqual(this.position)?n=ne._createAfter(t.textNode):(r=ne._createAfter(t.textNode),this._position=r)),t.offsetInText===0&&(this.direction!="backward"||this.boundaries&&this.boundaries.start.isEqual(this.position)?n=ne._createBefore(t.textNode):(r=ne._createBefore(t.textNode),this._position=r))),{done:!1,value:{type:e,item:t,previousPosition:n,nextPosition:r,length:a}}}}class ne extends Pi{constructor(e,t){super(),this.parent=e,this.offset=t}get nodeAfter(){return this.parent.is("$text")?null:this.parent.getChild(this.offset)||null}get nodeBefore(){return this.parent.is("$text")?null:this.parent.getChild(this.offset-1)||null}get isAtStart(){return this.offset===0}get isAtEnd(){const e=this.parent.is("$text")?this.parent.data.length:this.parent.childCount;return this.offset===e}get root(){return this.parent.root}get editableElement(){let e=this.parent;for(;!(e instanceof Jc);){if(!e.parent)return null;e=e.parent}return e}getShiftedBy(e){const t=ne._createAt(this),n=t.offset+e;return t.offset=n<0?0:n,t}getLastMatchingPosition(e,t={}){t.startPosition=this;const n=new Oi(t);return n.skip(e),n.position}getAncestors(){return this.parent.is("documentFragment")?[this.parent]:this.parent.getAncestors({includeSelf:!0})}getCommonAncestor(e){const t=this.getAncestors(),n=e.getAncestors();let r=0;for(;t[r]==n[r]&&t[r];)r++;return r===0?null:t[r-1]}isEqual(e){return this.parent==e.parent&&this.offset==e.offset}isBefore(e){return this.compareWith(e)=="before"}isAfter(e){return this.compareWith(e)=="after"}compareWith(e){if(this.root!==e.root)return"different";if(this.isEqual(e))return"same";const t=this.parent.is("node")?this.parent.getPath():[],n=e.parent.is("node")?e.parent.getPath():[];t.push(this.offset),n.push(e.offset);const r=_e(t,n);switch(r){case"prefix":return"before";case"extension":return"after";default:return t[r]<n[r]?"before":"after"}}getWalker(e={}){return e.startPosition=this,new Oi(e)}clone(){return new ne(this.parent,this.offset)}static _createAt(e,t){if(e instanceof ne)return new this(e.parent,e.offset);{const n=e;if(t=="end")t=n.is("$text")?n.data.length:n.childCount;else{if(t=="before")return this._createBefore(n);if(t=="after")return this._createAfter(n);if(t!==0&&!t)throw new j("view-createpositionat-offset-required",n)}return new ne(n,t)}}static _createAfter(e){if(e.is("$textProxy"))return new ne(e.textNode,e.offsetInText+e.data.length);if(!e.parent)throw new j("view-position-after-root",e,{root:e});return new ne(e.parent,e.index+1)}static _createBefore(e){if(e.is("$textProxy"))return new ne(e.textNode,e.offsetInText);if(!e.parent)throw new j("view-position-before-root",e,{root:e});return new ne(e.parent,e.index)}}ne.prototype.is=function(i){return i==="position"||i==="view:position"};class he extends Pi{constructor(e,t=null){super(),this.start=e.clone(),this.end=t?t.clone():e.clone()}*[Symbol.iterator](){yield*new Oi({boundaries:this,ignoreElementEnd:!0})}get isCollapsed(){return this.start.isEqual(this.end)}get isFlat(){return this.start.parent===this.end.parent}get root(){return this.start.root}getEnlarged(){let e=this.start.getLastMatchingPosition(Xc,{direction:"backward"}),t=this.end.getLastMatchingPosition(Xc);return e.parent.is("$text")&&e.isAtStart&&(e=ne._createBefore(e.parent)),t.parent.is("$text")&&t.isAtEnd&&(t=ne._createAfter(t.parent)),new he(e,t)}getTrimmed(){let e=this.start.getLastMatchingPosition(Xc);if(e.isAfter(this.end)||e.isEqual(this.end))return new he(e,e);let t=this.end.getLastMatchingPosition(Xc,{direction:"backward"});const n=e.nodeAfter,r=t.nodeBefore;return n&&n.is("$text")&&(e=new ne(n,0)),r&&r.is("$text")&&(t=new ne(r,r.data.length)),new he(e,t)}isEqual(e){return this==e||this.start.isEqual(e.start)&&this.end.isEqual(e.end)}containsPosition(e){return e.isAfter(this.start)&&e.isBefore(this.end)}containsRange(e,t=!1){e.isCollapsed&&(t=!1);const n=this.containsPosition(e.start)||t&&this.start.isEqual(e.start),r=this.containsPosition(e.end)||t&&this.end.isEqual(e.end);return n&&r}getDifference(e){const t=[];return this.isIntersecting(e)?(this.containsPosition(e.start)&&t.push(new he(this.start,e.start)),this.containsPosition(e.end)&&t.push(new he(e.end,this.end))):t.push(this.clone()),t}getIntersection(e){if(this.isIntersecting(e)){let t=this.start,n=this.end;return this.containsPosition(e.start)&&(t=e.start),this.containsPosition(e.end)&&(n=e.end),new he(t,n)}return null}getWalker(e={}){return e.boundaries=this,new Oi(e)}getCommonAncestor(){return this.start.getCommonAncestor(this.end)}getContainedElement(){if(this.isCollapsed)return null;let e=this.start.nodeAfter,t=this.end.nodeBefore;return this.start.parent.is("$text")&&this.start.isAtEnd&&this.start.parent.nextSibling&&(e=this.start.parent.nextSibling),this.end.parent.is("$text")&&this.end.isAtStart&&this.end.parent.previousSibling&&(t=this.end.parent.previousSibling),e&&e.is("element")&&e===t?e:null}clone(){return new he(this.start,this.end)}*getItems(e={}){e.boundaries=this,e.ignoreElementEnd=!0;const t=new Oi(e);for(const n of t)yield n.item}*getPositions(e={}){e.boundaries=this;const t=new Oi(e);yield t.position;for(const n of t)yield n.nextPosition}isIntersecting(e){return this.start.isBefore(e.end)&&this.end.isAfter(e.start)}static _createFromParentsAndOffsets(e,t,n,r){return new this(new ne(e,t),new ne(n,r))}static _createFromPositionAndShift(e,t){const n=e,r=e.getShiftedBy(t);return t>0?new this(n,r):new this(r,n)}static _createIn(e){return this._createFromParentsAndOffsets(e,0,e,e.childCount)}static _createOn(e){const t=e.is("$textProxy")?e.offsetSize:1;return this._createFromPositionAndShift(ne._createBefore(e),t)}}function Xc(i){return!(!i.item.is("attributeElement")&&!i.item.is("uiElement"))}he.prototype.is=function(i){return i==="range"||i==="view:range"};class Wn extends se(Pi){constructor(...e){super(),this._ranges=[],this._lastRangeBackward=!1,this._isFake=!1,this._fakeSelectionLabel="",e.length&&this.setTo(...e)}get isFake(){return this._isFake}get fakeSelectionLabel(){return this._fakeSelectionLabel}get anchor(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.end:e.start).clone()}get focus(){if(!this._ranges.length)return null;const e=this._ranges[this._ranges.length-1];return(this._lastRangeBackward?e.start:e.end).clone()}get isCollapsed(){return this.rangeCount===1&&this._ranges[0].isCollapsed}get rangeCount(){return this._ranges.length}get isBackward(){return!this.isCollapsed&&this._lastRangeBackward}get editableElement(){return this.anchor?this.anchor.editableElement:null}*getRanges(){for(const e of this._ranges)yield e.clone()}getFirstRange(){let e=null;for(const t of this._ranges)e&&!t.start.isBefore(e.start)||(e=t);return e?e.clone():null}getLastRange(){let e=null;for(const t of this._ranges)e&&!t.end.isAfter(e.end)||(e=t);return e?e.clone():null}getFirstPosition(){const e=this.getFirstRange();return e?e.start.clone():null}getLastPosition(){const e=this.getLastRange();return e?e.end.clone():null}isEqual(e){if(this.isFake!=e.isFake||this.isFake&&this.fakeSelectionLabel!=e.fakeSelectionLabel||this.rangeCount!=e.rangeCount)return!1;if(this.rangeCount===0)return!0;if(!this.anchor.isEqual(e.anchor)||!this.focus.isEqual(e.focus))return!1;for(const t of this._ranges){let n=!1;for(const r of e._ranges)if(t.isEqual(r)){n=!0;break}if(!n)return!1}return!0}isSimilar(e){if(this.isBackward!=e.isBackward)return!1;const t=xt(this.getRanges());if(t!=xt(e.getRanges()))return!1;if(t==0)return!0;for(let n of this.getRanges()){n=n.getTrimmed();let r=!1;for(let a of e.getRanges())if(a=a.getTrimmed(),n.start.isEqual(a.start)&&n.end.isEqual(a.end)){r=!0;break}if(!r)return!1}return!0}getSelectedElement(){return this.rangeCount!==1?null:this.getFirstRange().getContainedElement()}setTo(...e){let[t,n,r]=e;if(typeof n=="object"&&(r=n,n=void 0),t===null)this._setRanges([]),this._setFakeOptions(r);else if(t instanceof Wn||t instanceof _h)this._setRanges(t.getRanges(),t.isBackward),this._setFakeOptions({fake:t.isFake,label:t.fakeSelectionLabel});else if(t instanceof he)this._setRanges([t],r&&r.backward),this._setFakeOptions(r);else if(t instanceof ne)this._setRanges([new he(t)]),this._setFakeOptions(r);else if(t instanceof ji){const a=!!r&&!!r.backward;let c;if(n===void 0)throw new j("view-selection-setto-required-second-parameter",this);c=n=="in"?he._createIn(t):n=="on"?he._createOn(t):new he(ne._createAt(t,n)),this._setRanges([c],a),this._setFakeOptions(r)}else{if(!Te(t))throw new j("view-selection-setto-not-selectable",this);this._setRanges(t,r&&r.backward),this._setFakeOptions(r)}this.fire("change")}setFocus(e,t){if(this.anchor===null)throw new j("view-selection-setfocus-no-ranges",this);const n=ne._createAt(e,t);if(n.compareWith(this.focus)=="same")return;const r=this.anchor;this._ranges.pop(),n.compareWith(r)=="before"?this._addRange(new he(n,r),!0):this._addRange(new he(r,n)),this.fire("change")}_setRanges(e,t=!1){e=Array.from(e),this._ranges=[];for(const n of e)this._addRange(n);this._lastRangeBackward=!!t}_setFakeOptions(e={}){this._isFake=!!e.fake,this._fakeSelectionLabel=e.fake&&e.label||""}_addRange(e,t=!1){if(!(e instanceof he))throw new j("view-selection-add-range-not-range",this);this._pushRange(e),this._lastRangeBackward=!!t}_pushRange(e){for(const t of this._ranges)if(e.isIntersecting(t))throw new j("view-selection-range-intersects",this,{addedRange:e,intersectingRange:t});this._ranges.push(new he(e.start,e.end))}}Wn.prototype.is=function(i){return i==="selection"||i==="view:selection"};class _h extends se(Pi){constructor(...e){super(),this._selection=new Wn,this._selection.delegate("change").to(this),e.length&&this._selection.setTo(...e)}get isFake(){return this._selection.isFake}get fakeSelectionLabel(){return this._selection.fakeSelectionLabel}get anchor(){return this._selection.anchor}get focus(){return this._selection.focus}get isCollapsed(){return this._selection.isCollapsed}get rangeCount(){return this._selection.rangeCount}get isBackward(){return this._selection.isBackward}get editableElement(){return this._selection.editableElement}get _ranges(){return this._selection._ranges}*getRanges(){yield*this._selection.getRanges()}getFirstRange(){return this._selection.getFirstRange()}getLastRange(){return this._selection.getLastRange()}getFirstPosition(){return this._selection.getFirstPosition()}getLastPosition(){return this._selection.getLastPosition()}getSelectedElement(){return this._selection.getSelectedElement()}isEqual(e){return this._selection.isEqual(e)}isSimilar(e){return this._selection.isSimilar(e)}_setTo(...e){this._selection.setTo(...e)}_setFocus(e,t){this._selection.setFocus(e,t)}}_h.prototype.is=function(i){return i==="selection"||i=="documentSelection"||i=="view:selection"||i=="view:documentSelection"};class Pr extends L{constructor(e,t,n){super(e,t),this.startRange=n,this._eventPhase="none",this._currentTarget=null}get eventPhase(){return this._eventPhase}get currentTarget(){return this._currentTarget}}const Ah=Symbol("bubbling contexts");function vh(i){return class extends i{fire(e,...t){try{const n=e instanceof L?e:new L(this,e),r=Ch(this);if(!r.size)return;if(Js(n,"capturing",this),jr(r,"$capture",n,...t))return n.return;const a=n.startRange||this.selection.getFirstRange(),c=a?a.getContainedElement():null,d=!!c&&!!Hb(r,c);let u=c||function(p){if(!p)return null;const g=p.start.parent,f=p.end.parent,_=g.getPath(),C=f.getPath();return _.length>C.length?g:f}(a);if(Js(n,"atTarget",u),!d){if(jr(r,"$text",n,...t))return n.return;Js(n,"bubbling",u)}for(;u;){if(u.is("rootElement")){if(jr(r,"$root",n,...t))return n.return}else if(u.is("element")&&jr(r,u.name,n,...t))return n.return;if(jr(r,u,n,...t))return n.return;u=u.parent,Js(n,"bubbling",u)}return Js(n,"bubbling",this),jr(r,"$document",n,...t),n.return}catch(n){j.rethrowUnexpectedError(n,this)}}_addEventListener(e,t,n){const r=Fe(n.context||"$document"),a=Ch(this);for(const c of r){let d=a.get(c);d||(d=new(se()),a.set(c,d)),this.listenTo(d,e,t,n)}}_removeEventListener(e,t){const n=Ch(this);for(const r of n.values())this.stopListening(r,e,t)}}}{const i=vh(Object);["fire","_addEventListener","_removeEventListener"].forEach(e=>{vh[e]=i.prototype[e]})}function Js(i,e,t){i instanceof Pr&&(i._eventPhase=e,i._currentTarget=t)}function jr(i,e,t,...n){const r=typeof e=="string"?i.get(e):Hb(i,e);return!!r&&(r.fire(t,...n),t.stop.called)}function Hb(i,e){for(const[t,n]of i)if(typeof t=="function"&&t(e))return n;return null}function Ch(i){return i[Ah]||(i[Ah]=new Map),i[Ah]}class el extends vh(be()){constructor(e){super(),this._postFixers=new Set,this.selection=new _h,this.roots=new Hn({idProperty:"rootName"}),this.stylesProcessor=e,this.set("isReadOnly",!1),this.set("isFocused",!1),this.set("isSelecting",!1),this.set("isComposing",!1)}getRoot(e="main"){return this.roots.get(e)}registerPostFixer(e){this._postFixers.add(e)}destroy(){this.roots.forEach(e=>e.destroy()),this.stopListening()}_callPostFixers(e){let t=!1;do for(const n of this._postFixers)if(t=n(e),t)break;while(t)}}class Li extends on{constructor(e,t,n,r){super(e,t,n,r),this._priority=10,this._id=null,this._clonesGroup=null,this.getFillerOffset=bT}get priority(){return this._priority}get id(){return this._id}getElementsWithSameId(){if(this.id===null)throw new j("attribute-element-get-elements-with-same-id-no-id",this);return new Set(this._clonesGroup)}isSimilar(e){return this.id!==null||e.id!==null?this.id===e.id:super.isSimilar(e)&&this.priority==e.priority}_clone(e=!1){const t=super._clone(e);return t._priority=this._priority,t._id=this._id,t}}function bT(){if(yh(this))return null;let i=this.parent;for(;i&&i.is("attributeElement");){if(yh(i)>1)return null;i=i.parent}return!i||yh(i)>1?null:this.childCount}function yh(i){return Array.from(i.getChildren()).filter(e=>!e.is("uiElement")).length}Li.DEFAULT_PRIORITY=10,Li.prototype.is=function(i,e){return e?e===this.name&&(i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"):i==="attributeElement"||i==="view:attributeElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class xh extends on{constructor(e,t,n,r){super(e,t,n,r),this.getFillerOffset=wT}_insertChild(e,t){if(t&&(t instanceof ji||Array.from(t).length>0))throw new j("view-emptyelement-cannot-add",[this,t]);return 0}}function wT(){return null}xh.prototype.is=function(i,e){return e?e===this.name&&(i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"):i==="emptyElement"||i==="view:emptyElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class tl extends on{constructor(e,t,n,r){super(e,t,n,r),this.getFillerOffset=AT}_insertChild(e,t){if(t&&(t instanceof ji||Array.from(t).length>0))throw new j("view-uielement-cannot-add",[this,t]);return 0}render(e,t){return this.toDomElement(e)}toDomElement(e){const t=e.createElement(this.name);for(const n of this.getAttributeKeys())t.setAttribute(n,this.getAttribute(n));return t}}function _T(i){i.document.on("arrowKey",(e,t)=>function(n,r,a){if(r.keyCode==ye.arrowright){const c=r.domTarget.ownerDocument.defaultView.getSelection(),d=c.rangeCount==1&&c.getRangeAt(0).collapsed;if(d||r.shiftKey){const u=c.focusNode,p=c.focusOffset,g=a.domPositionToView(u,p);if(g===null)return;let f=!1;const _=g.getLastMatchingPosition(C=>(C.item.is("uiElement")&&(f=!0),!(!C.item.is("uiElement")&&!C.item.is("attributeElement"))));if(f){const C=a.viewPositionToDom(_);d?c.collapse(C.parent,C.offset):c.extend(C.parent,C.offset)}}}}(0,t,i.domConverter),{priority:"low"})}function AT(){return null}tl.prototype.is=function(i,e){return e?e===this.name&&(i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"):i==="uiElement"||i==="view:uiElement"||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class Eh extends on{constructor(e,t,n,r){super(e,t,n,r),this.getFillerOffset=vT}_insertChild(e,t){if(t&&(t instanceof ji||Array.from(t).length>0))throw new j("view-rawelement-cannot-add",[this,t]);return 0}render(e,t){}}function vT(){return null}Eh.prototype.is=function(i,e){return e?e===this.name&&(i==="rawElement"||i==="view:rawElement"||i==="element"||i==="view:element"):i==="rawElement"||i==="view:rawElement"||i===this.name||i==="view:"+this.name||i==="element"||i==="view:element"||i==="node"||i==="view:node"};class zi extends se(Pi){constructor(e,t){super(),this._children=[],this._customProperties=new Map,this.document=e,t&&this._insertChild(0,t)}[Symbol.iterator](){return this._children[Symbol.iterator]()}get childCount(){return this._children.length}get isEmpty(){return this.childCount===0}get root(){return this}get parent(){return null}get name(){}get getFillerOffset(){}getCustomProperty(e){return this._customProperties.get(e)}*getCustomProperties(){yield*this._customProperties.entries()}_appendChild(e){return this._insertChild(this.childCount,e)}getChild(e){return this._children[e]}getChildIndex(e){return this._children.indexOf(e)}getChildren(){return this._children[Symbol.iterator]()}_insertChild(e,t){this._fireChange("children",this);let n=0;const r=function(a,c){return typeof c=="string"?[new Oe(a,c)]:(Te(c)||(c=[c]),Array.from(c).map(d=>typeof d=="string"?new Oe(a,d):d instanceof uo?new Oe(a,d.data):d))}(this.document,t);for(const a of r)a.parent!==null&&a._remove(),a.parent=this,this._children.splice(e,0,a),e++,n++;return n}_removeChildren(e,t=1){this._fireChange("children",this);for(let n=e;n<e+t;n++)this._children[n].parent=null;return this._children.splice(e,t)}_fireChange(e,t){this.fire("change:"+e,t)}_setCustomProperty(e,t){this._customProperties.set(e,t)}_removeCustomProperty(e){return this._customProperties.delete(e)}}zi.prototype.is=function(i){return i==="documentFragment"||i==="view:documentFragment"};class Wb{constructor(e){this._cloneGroups=new Map,this._slotFactory=null,this.document=e}setSelection(...e){this.document.selection._setTo(...e)}setSelectionFocus(e,t){this.document.selection._setFocus(e,t)}createDocumentFragment(e){return new zi(this.document,e)}createText(e){return new Oe(this.document,e)}createAttributeElement(e,t,n={}){const r=new Li(this.document,e,t);return typeof n.priority=="number"&&(r._priority=n.priority),n.id&&(r._id=n.id),n.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),r}createContainerElement(e,t,n={},r={}){let a=null;nn(n)?r=n:a=n;const c=new Zs(this.document,e,t,a);return r.renderUnsafeAttributes&&c._unsafeAttributesToRender.push(...r.renderUnsafeAttributes),c}createEditableElement(e,t,n={}){const r=new Jc(this.document,e,t);return n.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),r}createEmptyElement(e,t,n={}){const r=new xh(this.document,e,t);return n.renderUnsafeAttributes&&r._unsafeAttributesToRender.push(...n.renderUnsafeAttributes),r}createUIElement(e,t,n){const r=new tl(this.document,e,t);return n&&(r.render=n),r}createRawElement(e,t,n,r={}){const a=new Eh(this.document,e,t);return n&&(a.render=n),r.renderUnsafeAttributes&&a._unsafeAttributesToRender.push(...r.renderUnsafeAttributes),a}setAttribute(e,t,n){n._setAttribute(e,t)}removeAttribute(e,t){t._removeAttribute(e)}addClass(e,t){t._addClass(e)}removeClass(e,t){t._removeClass(e)}setStyle(e,t,n){nn(e)&&n===void 0?t._setStyle(e):n._setStyle(e,t)}removeStyle(e,t){t._removeStyle(e)}setCustomProperty(e,t,n){n._setCustomProperty(e,t)}removeCustomProperty(e,t){return t._removeCustomProperty(e)}breakAttributes(e){return e instanceof ne?this._breakAttributes(e):this._breakAttributesRange(e)}breakContainer(e){const t=e.parent;if(!t.is("containerElement"))throw new j("view-writer-break-non-container-element",this.document);if(!t.parent)throw new j("view-writer-break-root",this.document);if(e.isAtStart)return ne._createBefore(t);if(!e.isAtEnd){const n=t._clone(!1);this.insert(ne._createAfter(t),n);const r=new he(e,ne._createAt(t,"end")),a=new ne(n,0);this.move(r,a)}return ne._createAfter(t)}mergeAttributes(e){const t=e.offset,n=e.parent;if(n.is("$text"))return e;if(n.is("attributeElement")&&n.childCount===0){const c=n.parent,d=n.index;return n._remove(),this._removeFromClonedElementsGroup(n),this.mergeAttributes(new ne(c,d))}const r=n.getChild(t-1),a=n.getChild(t);if(!r||!a)return e;if(r.is("$text")&&a.is("$text"))return $b(r,a);if(r.is("attributeElement")&&a.is("attributeElement")&&r.isSimilar(a)){const c=r.childCount;return r._appendChild(a.getChildren()),a._remove(),this._removeFromClonedElementsGroup(a),this.mergeAttributes(new ne(r,c))}return e}mergeContainers(e){const t=e.nodeBefore,n=e.nodeAfter;if(!(t&&n&&t.is("containerElement")&&n.is("containerElement")))throw new j("view-writer-merge-containers-invalid-position",this.document);const r=t.getChild(t.childCount-1),a=r instanceof Oe?ne._createAt(r,"end"):ne._createAt(t,"end");return this.move(he._createIn(n),ne._createAt(t,"end")),this.remove(he._createOn(n)),a}insert(e,t){Gb(t=Te(t)?[...t]:[t],this.document);const n=t.reduce((c,d)=>{const u=c[c.length-1],p=!d.is("uiElement");return u&&u.breakAttributes==p?u.nodes.push(d):c.push({breakAttributes:p,nodes:[d]}),c},[]);let r=null,a=e;for(const{nodes:c,breakAttributes:d}of n){const u=this._insertNodes(a,c,d);r||(r=u.start),a=u.end}return r?new he(r,a):new he(e)}remove(e){const t=e instanceof he?e:he._createOn(e);if(Xs(t,this.document),t.isCollapsed)return new zi(this.document);const{start:n,end:r}=this._breakAttributesRange(t,!0),a=n.parent,c=r.offset-n.offset,d=a._removeChildren(n.offset,c);for(const p of d)this._removeFromClonedElementsGroup(p);const u=this.mergeAttributes(n);return t.start=u,t.end=u.clone(),new zi(this.document,d)}clear(e,t){Xs(e,this.document);const n=e.getWalker({direction:"backward",ignoreElementEnd:!0});for(const r of n){const a=r.item;let c;if(a.is("element")&&t.isSimilar(a))c=he._createOn(a);else if(!r.nextPosition.isAfter(e.start)&&a.is("$textProxy")){const d=a.getAncestors().find(u=>u.is("element")&&t.isSimilar(u));d&&(c=he._createIn(d))}c&&(c.end.isAfter(e.end)&&(c.end=e.end),c.start.isBefore(e.start)&&(c.start=e.start),this.remove(c))}}move(e,t){let n;if(t.isAfter(e.end)){const r=(t=this._breakAttributes(t,!0)).parent,a=r.childCount;e=this._breakAttributesRange(e,!0),n=this.remove(e),t.offset+=r.childCount-a}else n=this.remove(e);return this.insert(t,n)}wrap(e,t){if(!(t instanceof Li))throw new j("view-writer-wrap-invalid-attribute",this.document);if(Xs(e,this.document),e.isCollapsed){let r=e.start;r.parent.is("element")&&(n=r.parent,!Array.from(n.getChildren()).some(c=>!c.is("uiElement")))&&(r=r.getLastMatchingPosition(c=>c.item.is("uiElement"))),r=this._wrapPosition(r,t);const a=this.document.selection;return a.isCollapsed&&a.getFirstPosition().isEqual(e.start)&&this.setSelection(r),new he(r)}return this._wrapRange(e,t);var n}unwrap(e,t){if(!(t instanceof Li))throw new j("view-writer-unwrap-invalid-attribute",this.document);if(Xs(e,this.document),e.isCollapsed)return e;const{start:n,end:r}=this._breakAttributesRange(e,!0),a=n.parent,c=this._unwrapChildren(a,n.offset,r.offset,t),d=this.mergeAttributes(c.start);d.isEqual(c.start)||c.end.offset--;const u=this.mergeAttributes(c.end);return new he(d,u)}rename(e,t){const n=new Zs(this.document,e,t.getAttributes());return this.insert(ne._createAfter(t),n),this.move(he._createIn(t),ne._createAt(n,0)),this.remove(he._createOn(t)),n}clearClonedElementsGroup(e){this._cloneGroups.delete(e)}createPositionAt(e,t){return ne._createAt(e,t)}createPositionAfter(e){return ne._createAfter(e)}createPositionBefore(e){return ne._createBefore(e)}createRange(e,t){return new he(e,t)}createRangeOn(e){return he._createOn(e)}createRangeIn(e){return he._createIn(e)}createSelection(...e){return new Wn(...e)}createSlot(e="children"){if(!this._slotFactory)throw new j("view-writer-invalid-create-slot-context",this.document);return this._slotFactory(this,e)}_registerSlotFactory(e){this._slotFactory=e}_clearSlotFactory(){this._slotFactory=null}_insertNodes(e,t,n){let r,a;if(r=n?Dh(e):e.parent.is("$text")?e.parent.parent:e.parent,!r)throw new j("view-writer-invalid-position-container",this.document);a=n?this._breakAttributes(e,!0):e.parent.is("$text")?Sh(e):e;const c=r._insertChild(a.offset,t);for(const g of t)this._addToClonedElementsGroup(g);const d=a.getShiftedBy(c),u=this.mergeAttributes(a);u.isEqual(a)||d.offset--;const p=this.mergeAttributes(d);return new he(u,p)}_wrapChildren(e,t,n,r){let a=t;const c=[];for(;a<n;){const u=e.getChild(a),p=u.is("$text"),g=u.is("attributeElement");if(g&&this._wrapAttributeElement(r,u))c.push(new ne(e,a));else if(p||!g||CT(r,u)){const f=r._clone();u._remove(),f._appendChild(u),e._insertChild(a,f),this._addToClonedElementsGroup(f),c.push(new ne(e,a))}else this._wrapChildren(u,0,u.childCount,r);a++}let d=0;for(const u of c)u.offset-=d,u.offset!=t&&(this.mergeAttributes(u).isEqual(u)||(d++,n--));return he._createFromParentsAndOffsets(e,t,e,n)}_unwrapChildren(e,t,n,r){let a=t;const c=[];for(;a<n;){const u=e.getChild(a);if(u.is("attributeElement"))if(u.isSimilar(r)){const p=u.getChildren(),g=u.childCount;u._remove(),e._insertChild(a,p),this._removeFromClonedElementsGroup(u),c.push(new ne(e,a),new ne(e,a+g)),a+=g,n+=g-1}else this._unwrapAttributeElement(r,u)?(c.push(new ne(e,a),new ne(e,a+1)),a++):(this._unwrapChildren(u,0,u.childCount,r),a++);else a++}let d=0;for(const u of c)u.offset-=d,!(u.offset==t||u.offset==n)&&(this.mergeAttributes(u).isEqual(u)||(d++,n--));return he._createFromParentsAndOffsets(e,t,e,n)}_wrapRange(e,t){const{start:n,end:r}=this._breakAttributesRange(e,!0),a=n.parent,c=this._wrapChildren(a,n.offset,r.offset,t),d=this.mergeAttributes(c.start);d.isEqual(c.start)||c.end.offset--;const u=this.mergeAttributes(c.end);return new he(d,u)}_wrapPosition(e,t){if(t.isSimilar(e.parent))return qb(e.clone());e.parent.is("$text")&&(e=Sh(e));const n=this.createAttributeElement("_wrapPosition-fake-element");n._priority=Number.POSITIVE_INFINITY,n.isSimilar=()=>!1,e.parent._insertChild(e.offset,n);const r=new he(e,e.getShiftedBy(1));this.wrap(r,t);const a=new ne(n.parent,n.index);n._remove();const c=a.nodeBefore,d=a.nodeAfter;return c instanceof Oe&&d instanceof Oe?$b(c,d):qb(a)}_wrapAttributeElement(e,t){if(!Kb(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&t.hasAttribute(n)&&t.getAttribute(n)!==e.getAttribute(n))return!1;for(const n of e.getStyleNames())if(t.hasStyle(n)&&t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&(t.hasAttribute(n)||this.setAttribute(n,e.getAttribute(n),t));for(const n of e.getStyleNames())t.hasStyle(n)||this.setStyle(n,e.getStyle(n),t);for(const n of e.getClassNames())t.hasClass(n)||this.addClass(n,t);return!0}_unwrapAttributeElement(e,t){if(!Kb(e,t)||e.name!==t.name||e.priority!==t.priority)return!1;for(const n of e.getAttributeKeys())if(n!=="class"&&n!=="style"&&(!t.hasAttribute(n)||t.getAttribute(n)!==e.getAttribute(n)))return!1;if(!t.hasClass(...e.getClassNames()))return!1;for(const n of e.getStyleNames())if(!t.hasStyle(n)||t.getStyle(n)!==e.getStyle(n))return!1;for(const n of e.getAttributeKeys())n!=="class"&&n!=="style"&&this.removeAttribute(n,t);return this.removeClass(Array.from(e.getClassNames()),t),this.removeStyle(Array.from(e.getStyleNames()),t),!0}_breakAttributesRange(e,t=!1){const n=e.start,r=e.end;if(Xs(e,this.document),e.isCollapsed){const u=this._breakAttributes(e.start,t);return new he(u,u)}const a=this._breakAttributes(r,t),c=a.parent.childCount,d=this._breakAttributes(n,t);return a.offset+=a.parent.childCount-c,new he(d,a)}_breakAttributes(e,t=!1){const n=e.offset,r=e.parent;if(e.parent.is("emptyElement"))throw new j("view-writer-cannot-break-empty-element",this.document);if(e.parent.is("uiElement"))throw new j("view-writer-cannot-break-ui-element",this.document);if(e.parent.is("rawElement"))throw new j("view-writer-cannot-break-raw-element",this.document);if(!t&&r.is("$text")&&Ih(r.parent)||Ih(r))return e.clone();if(r.is("$text"))return this._breakAttributes(Sh(e),t);if(n==r.childCount){const a=new ne(r.parent,r.index+1);return this._breakAttributes(a,t)}if(n===0){const a=new ne(r.parent,r.index);return this._breakAttributes(a,t)}{const a=r.index+1,c=r._clone();r.parent._insertChild(a,c),this._addToClonedElementsGroup(c);const d=r.childCount-n,u=r._removeChildren(n,d);c._appendChild(u);const p=new ne(r.parent,a);return this._breakAttributes(p,t)}}_addToClonedElementsGroup(e){if(!e.root.is("rootElement"))return;if(e.is("element"))for(const r of e.getChildren())this._addToClonedElementsGroup(r);const t=e.id;if(!t)return;let n=this._cloneGroups.get(t);n||(n=new Set,this._cloneGroups.set(t,n)),n.add(e),e._clonesGroup=n}_removeFromClonedElementsGroup(e){if(e.is("element"))for(const r of e.getChildren())this._removeFromClonedElementsGroup(r);const t=e.id;if(!t)return;const n=this._cloneGroups.get(t);n&&n.delete(e)}}function Dh(i){let e=i.parent;for(;!Ih(e);){if(!e)return;e=e.parent}return e}function CT(i,e){return i.priority<e.priority||!(i.priority>e.priority)&&i.getIdentity()<e.getIdentity()}function qb(i){const e=i.nodeBefore;if(e&&e.is("$text"))return new ne(e,e.data.length);const t=i.nodeAfter;return t&&t.is("$text")?new ne(t,0):i}function Sh(i){if(i.offset==i.parent.data.length)return new ne(i.parent.parent,i.parent.index+1);if(i.offset===0)return new ne(i.parent.parent,i.parent.index);const e=i.parent.data.slice(i.offset);return i.parent._data=i.parent.data.slice(0,i.offset),i.parent.parent._insertChild(i.parent.index+1,new Oe(i.root.document,e)),new ne(i.parent.parent,i.parent.index+1)}function $b(i,e){const t=i.data.length;return i._data+=e.data,e._remove(),new ne(i,t)}const yT=[Oe,Li,Zs,xh,Eh,tl];function Gb(i,e){for(const t of i){if(!yT.some(n=>t instanceof n))throw new j("view-writer-insert-invalid-node-type",e);t.is("$text")||Gb(t.getChildren(),e)}}function Ih(i){return i&&(i.is("containerElement")||i.is("documentFragment"))}function Xs(i,e){const t=Dh(i.start),n=Dh(i.end);if(!t||!n||t!==n)throw new j("view-writer-invalid-range-container",e)}function Kb(i,e){return i.id===null&&e.id===null}const Qb=i=>i.createTextNode(" "),Yb=i=>{const e=i.createElement("span");return e.dataset.ckeFiller="true",e.innerText=" ",e},Zb=i=>{const e=i.createElement("br");return e.dataset.ckeFiller="true",e},qn=7,ea="⁠".repeat(qn);function rn(i){return typeof i=="string"?i.substr(0,qn)===ea:dt(i)&&i.data.substr(0,qn)===ea}function ta(i){return i.data.length==qn&&rn(i)}function Jb(i){const e=typeof i=="string"?i:i.data;return rn(i)?e.slice(qn):e}function xT(i,e){if(e.keyCode==ye.arrowleft){const t=e.domTarget.ownerDocument.defaultView.getSelection();if(t.rangeCount==1&&t.getRangeAt(0).collapsed){const n=t.getRangeAt(0).startContainer,r=t.getRangeAt(0).startOffset;rn(n)&&r<=qn&&t.collapse(n,0)}}}var Xb=m(8264),ET={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};te()(Xb.A,ET),Xb.A.locals;class DT extends be(){constructor(e,t){super(),this.domDocuments=new Set,this.markedAttributes=new Set,this.markedChildren=new Set,this.markedTexts=new Set,this._inlineFiller=null,this._fakeSelectionContainer=null,this.domConverter=e,this.selection=t,this.set("isFocused",!1),this.set("isSelecting",!1),v.isBlink&&!v.isAndroid&&this.on("change:isSelecting",()=>{this.isSelecting||this.render()}),this.set("isComposing",!1),this.on("change:isComposing",()=>{this.isComposing||this.render()})}markToSync(e,t){if(e==="text")this.domConverter.mapViewToDom(t.parent)&&this.markedTexts.add(t);else{if(!this.domConverter.mapViewToDom(t))return;if(e==="attributes")this.markedAttributes.add(t);else{if(e!=="children")throw new j("view-renderer-unknown-type",this);this.markedChildren.add(t)}}}render(){if(this.isComposing&&!v.isAndroid)return;let e=null;const t=!(v.isBlink&&!v.isAndroid)||!this.isSelecting;for(const n of this.markedChildren)this._updateChildrenMappings(n);t?(this._inlineFiller&&!this._isSelectionInInlineFiller()&&this._removeInlineFiller(),this._inlineFiller?e=this._getInlineFillerPosition():this._needsInlineFillerAtSelection()&&(e=this.selection.getFirstPosition(),this.markedChildren.add(e.parent))):this._inlineFiller&&this._inlineFiller.parentNode&&(e=this.domConverter.domPositionToView(this._inlineFiller),e&&e.parent.is("$text")&&(e=ne._createBefore(e.parent)));for(const n of this.markedAttributes)this._updateAttrs(n);for(const n of this.markedChildren)this._updateChildren(n,{inlineFillerPosition:e});for(const n of this.markedTexts)!this.markedChildren.has(n.parent)&&this.domConverter.mapViewToDom(n.parent)&&this._updateText(n,{inlineFillerPosition:e});if(t)if(e){const n=this.domConverter.viewPositionToDom(e),r=n.parent.ownerDocument;rn(n.parent)?this._inlineFiller=n.parent:this._inlineFiller=e0(r,n.parent,n.offset)}else this._inlineFiller=null;this._updateFocus(),this._updateSelection(),this.domConverter._clearTemporaryCustomProperties(),this.markedTexts.clear(),this.markedAttributes.clear(),this.markedChildren.clear()}_updateChildrenMappings(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.childNodes),r=Array.from(this.domConverter.viewChildrenToDom(e,{withChildren:!1})),a=this._diffNodeLists(n,r),c=this._findUpdateActions(a,n,r,ST);if(c.indexOf("update")!==-1){const d={equal:0,insert:0,delete:0};for(const u of c)if(u==="update"){const p=d.equal+d.insert,g=d.equal+d.delete,f=e.getChild(p);!f||f.is("uiElement")||f.is("rawElement")||this._updateElementMappings(f,n[g]),hb(r[p]),d.equal++}else d[u]++}}_updateElementMappings(e,t){this.domConverter.unbindDomElement(t),this.domConverter.bindElements(t,e),this.markedChildren.add(e),this.markedAttributes.add(e)}_getInlineFillerPosition(){const e=this.selection.getFirstPosition();return e.parent.is("$text")?ne._createBefore(e.parent):e}_isSelectionInInlineFiller(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=this.domConverter.viewPositionToDom(e);return!!(t&&dt(t.parent)&&rn(t.parent))}_removeInlineFiller(){const e=this._inlineFiller;if(!rn(e))throw new j("view-renderer-filler-was-lost",this);ta(e)?e.remove():e.data=e.data.substr(qn),this._inlineFiller=null}_needsInlineFillerAtSelection(){if(this.selection.rangeCount!=1||!this.selection.isCollapsed)return!1;const e=this.selection.getFirstPosition(),t=e.parent,n=e.offset;if(!this.domConverter.mapViewToDom(t.root)||!t.is("element")||!function(c){if(c.getAttribute("contenteditable")=="false")return!1;const d=c.findAncestor(u=>u.hasAttribute("contenteditable"));return!d||d.getAttribute("contenteditable")=="true"}(t)||n===t.getFillerOffset())return!1;const r=e.nodeBefore,a=e.nodeAfter;return!(r instanceof Oe||a instanceof Oe)&&(!v.isAndroid||!r&&!a)}_updateText(e,t){const n=this.domConverter.findCorrespondingDomText(e);let r=this.domConverter.viewToDom(e).data;const a=t.inlineFillerPosition;a&&a.parent==e.parent&&a.offset==e.index&&(r=ea+r),t0(n,r)}_updateAttrs(e){const t=this.domConverter.mapViewToDom(e);if(!t)return;const n=Array.from(t.attributes).map(a=>a.name),r=e.getAttributeKeys();for(const a of r)this.domConverter.setDomElementAttribute(t,a,e.getAttribute(a),e);for(const a of n)e.hasAttribute(a)||this.domConverter.removeDomElementAttribute(t,a)}_updateChildren(e,t){const n=this.domConverter.mapViewToDom(e);if(!n)return;if(v.isAndroid){let f=null;for(const _ of Array.from(n.childNodes)){if(f&&dt(f)&&dt(_)){n.normalize();break}f=_}}const r=t.inlineFillerPosition,a=n.childNodes,c=Array.from(this.domConverter.viewChildrenToDom(e,{bind:!0}));r&&r.parent===e&&e0(n.ownerDocument,c,r.offset);const d=this._diffNodeLists(a,c),u=this._findUpdateActions(d,a,c,IT);let p=0;const g=new Set;for(const f of u)f==="delete"?(g.add(a[p]),hb(a[p])):f!=="equal"&&f!=="update"||p++;p=0;for(const f of u)f==="insert"?(cb(n,p,c[p]),p++):f==="update"?(t0(a[p],c[p].data),p++):f==="equal"&&(this._markDescendantTextToSync(this.domConverter.domToView(c[p])),p++);for(const f of g)f.parentNode||this.domConverter.unbindDomElement(f)}_diffNodeLists(e,t){return e=function(n,r){const a=Array.from(n);return a.length==0||!r||a[a.length-1]==r&&a.pop(),a}(e,this._fakeSelectionContainer),N(e,t,TT.bind(null,this.domConverter))}_findUpdateActions(e,t,n,r){if(e.indexOf("insert")===-1||e.indexOf("delete")===-1)return e;let a=[],c=[],d=[];const u={equal:0,insert:0,delete:0};for(const p of e)p==="insert"?d.push(n[u.equal+u.insert]):p==="delete"?c.push(t[u.equal+u.delete]):(a=a.concat(N(c,d,r).map(g=>g==="equal"?"update":g)),a.push("equal"),c=[],d=[]),u[p]++;return a.concat(N(c,d,r).map(p=>p==="equal"?"update":p))}_markDescendantTextToSync(e){if(e){if(e.is("$text"))this.markedTexts.add(e);else if(e.is("element"))for(const t of e.getChildren())this._markDescendantTextToSync(t)}}_updateSelection(){if(v.isBlink&&!v.isAndroid&&this.isSelecting&&!this.markedChildren.size)return;if(this.selection.rangeCount===0)return this._removeDomSelection(),void this._removeFakeSelection();const e=this.domConverter.mapViewToDom(this.selection.editableElement);this.isFocused&&e&&(this.selection.isFake?this._updateFakeSelection(e):this._fakeSelectionContainer&&this._fakeSelectionContainer.isConnected?(this._removeFakeSelection(),this._updateDomSelection(e)):this.isComposing&&v.isAndroid||this._updateDomSelection(e))}_updateFakeSelection(e){const t=e.ownerDocument;this._fakeSelectionContainer||(this._fakeSelectionContainer=function(c){const d=c.createElement("div");return d.className="ck-fake-selection-container",Object.assign(d.style,{position:"fixed",top:0,left:"-9999px",width:"42px"}),d.textContent=" ",d}(t));const n=this._fakeSelectionContainer;if(this.domConverter.bindFakeSelection(n,this.selection),!this._fakeSelectionNeedsUpdate(e))return;n.parentElement&&n.parentElement==e||e.appendChild(n),n.textContent=this.selection.fakeSelectionLabel||" ";const r=t.getSelection(),a=t.createRange();r.removeAllRanges(),a.selectNodeContents(n),r.addRange(a)}_updateDomSelection(e){const t=e.ownerDocument.defaultView.getSelection();if(!this._domSelectionNeedsUpdate(t))return;const n=this.domConverter.viewPositionToDom(this.selection.anchor),r=this.domConverter.viewPositionToDom(this.selection.focus);t.setBaseAndExtent(n.parent,n.offset,r.parent,r.offset),v.isGecko&&function(a,c){const d=a.parent;if(d.nodeType!=Node.ELEMENT_NODE||a.offset!=d.childNodes.length-1)return;const u=d.childNodes[a.offset];u&&u.tagName=="BR"&&c.addRange(c.getRangeAt(0))}(r,t)}_domSelectionNeedsUpdate(e){if(!this.domConverter.isDomSelectionCorrect(e))return!0;const t=e&&this.domConverter.domSelectionToView(e);return(!t||!this.selection.isEqual(t))&&!(!this.selection.isCollapsed&&this.selection.isSimilar(t))}_fakeSelectionNeedsUpdate(e){const t=this._fakeSelectionContainer,n=e.ownerDocument.getSelection();return!t||t.parentElement!==e||n.anchorNode!==t&&!t.contains(n.anchorNode)||t.textContent!==this.selection.fakeSelectionLabel}_removeDomSelection(){for(const e of this.domDocuments){const t=e.getSelection();if(t.rangeCount){const n=e.activeElement,r=this.domConverter.mapDomToView(n);n&&r&&t.removeAllRanges()}}}_removeFakeSelection(){const e=this._fakeSelectionContainer;e&&e.remove()}_updateFocus(){if(this.isFocused){const e=this.selection.editableElement;e&&this.domConverter.focus(e)}}}function e0(i,e,t){const n=e instanceof Array?e:e.childNodes,r=n[t];if(dt(r))return r.data=ea+r.data,r;{const a=i.createTextNode(ea);return Array.isArray(e)?n.splice(t,0,a):cb(e,t,a),a}}function ST(i,e){return Qo(i)&&Qo(e)&&!dt(i)&&!dt(e)&&!Ks(i)&&!Ks(e)&&i.tagName.toLowerCase()===e.tagName.toLowerCase()}function IT(i,e){return Qo(i)&&Qo(e)&&dt(i)&&dt(e)}function TT(i,e,t){return e===t||(dt(e)&&dt(t)?e.data===t.data:!(!i.isBlockFiller(e)||!i.isBlockFiller(t)))}function t0(i,e){const t=i.data;if(t==e)return;const n=B(t,e);for(const r of n)r.type==="insert"?i.insertData(r.index,r.values.join("")):i.deleteData(r.index,r.howMany)}const MT=Zb(ce.document),BT=Qb(ce.document),NT=Yb(ce.document),nl="data-ck-unsafe-attribute-",n0="data-ck-unsafe-element";class ol{constructor(e,{blockFillerMode:t,renderingMode:n="editing"}={}){this._domToViewMapping=new WeakMap,this._viewToDomMapping=new WeakMap,this._fakeSelectionMapping=new WeakMap,this._rawContentElementMatcher=new ho,this._inlineObjectElementMatcher=new ho,this._elementsWithTemporaryCustomProperties=new Set,this.document=e,this.renderingMode=n,this.blockFillerMode=t||(n==="editing"?"br":"nbsp"),this.preElements=["pre"],this.blockElements=["address","article","aside","blockquote","caption","center","dd","details","dir","div","dl","dt","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","legend","li","main","menu","nav","ol","p","pre","section","summary","table","tbody","td","tfoot","th","thead","tr","ul"],this.inlineObjectElements=["object","iframe","input","button","textarea","select","option","video","embed","audio","img","canvas"],this.unsafeElements=["script","style"],this._domDocument=this.renderingMode==="editing"?ce.document:ce.document.implementation.createHTMLDocument("")}bindFakeSelection(e,t){this._fakeSelectionMapping.set(e,new Wn(t))}fakeSelectionToView(e){return this._fakeSelectionMapping.get(e)}bindElements(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}unbindDomElement(e){const t=this._domToViewMapping.get(e);if(t){this._domToViewMapping.delete(e),this._viewToDomMapping.delete(t);for(const n of Array.from(e.children))this.unbindDomElement(n)}}bindDocumentFragments(e,t){this._domToViewMapping.set(e,t),this._viewToDomMapping.set(t,e)}shouldRenderAttribute(e,t,n){return this.renderingMode==="data"||!(e=e.toLowerCase()).startsWith("on")&&(e!=="srcdoc"||!t.match(/\bon\S+\s*=|javascript:|<\s*\/*script/i))&&(n==="img"&&(e==="src"||e==="srcset")||n==="source"&&e==="srcset"||!t.match(/^\s*(javascript:|data:(image\/svg|text\/x?html))/i))}setContentOf(e,t){if(this.renderingMode==="data")return void(e.innerHTML=t);const n=new DOMParser().parseFromString(t,"text/html"),r=n.createDocumentFragment(),a=n.body.childNodes;for(;a.length>0;)r.appendChild(a[0]);const c=n.createTreeWalker(r,NodeFilter.SHOW_ELEMENT),d=[];let u;for(;u=c.nextNode();)d.push(u);for(const p of d){for(const f of p.getAttributeNames())this.setDomElementAttribute(p,f,p.getAttribute(f));const g=p.tagName.toLowerCase();this._shouldRenameElement(g)&&(r0(g),p.replaceWith(this._createReplacementDomElement(g,p)))}for(;e.firstChild;)e.firstChild.remove();e.append(r)}viewToDom(e,t={}){if(e.is("$text")){const n=this._processDataFromViewText(e);return this._domDocument.createTextNode(n)}{const n=e;if(this.mapViewToDom(n)){if(!n.getCustomProperty("editingPipeline:doNotReuseOnce"))return this.mapViewToDom(n);this._elementsWithTemporaryCustomProperties.add(n)}let r;if(n.is("documentFragment"))r=this._domDocument.createDocumentFragment(),t.bind&&this.bindDocumentFragments(r,n);else{if(n.is("uiElement"))return r=n.name==="$comment"?this._domDocument.createComment(n.getCustomProperty("$rawContent")):n.render(this._domDocument,this),t.bind&&this.bindElements(r,n),r;this._shouldRenameElement(n.name)?(r0(n.name),r=this._createReplacementDomElement(n.name)):r=n.hasAttribute("xmlns")?this._domDocument.createElementNS(n.getAttribute("xmlns"),n.name):this._domDocument.createElement(n.name),n.is("rawElement")&&n.render(r,this),t.bind&&this.bindElements(r,n);for(const a of n.getAttributeKeys())this.setDomElementAttribute(r,a,n.getAttribute(a),n)}if(t.withChildren!==!1)for(const a of this.viewChildrenToDom(n,t))r.appendChild(a);return r}}setDomElementAttribute(e,t,n,r){const a=this.shouldRenderAttribute(t,n,e.tagName.toLowerCase())||r&&r.shouldRenderUnsafeAttribute(t);a||K("domconverter-unsafe-attribute-detected",{domElement:e,key:t,value:n}),function(c){try{ce.document.createAttribute(c)}catch{return!1}return!0}(t)?(e.hasAttribute(t)&&!a?e.removeAttribute(t):e.hasAttribute(nl+t)&&a&&e.removeAttribute(nl+t),e.setAttribute(a?t:nl+t,n)):K("domconverter-invalid-attribute-detected",{domElement:e,key:t,value:n})}removeDomElementAttribute(e,t){t!=n0&&(e.removeAttribute(t),e.removeAttribute(nl+t))}*viewChildrenToDom(e,t={}){const n=e.getFillerOffset&&e.getFillerOffset();let r=0;for(const a of e.getChildren()){n===r&&(yield this._getBlockFiller());const c=a.is("element")&&!!a.getCustomProperty("dataPipeline:transparentRendering")&&!_t(a.getAttributes());c&&this.renderingMode=="data"?yield*this.viewChildrenToDom(a,t):(c&&K("domconverter-transparent-rendering-unsupported-in-editing-pipeline",{viewElement:a}),yield this.viewToDom(a,t)),r++}n===r&&(yield this._getBlockFiller())}viewRangeToDom(e){const t=this.viewPositionToDom(e.start),n=this.viewPositionToDom(e.end),r=this._domDocument.createRange();return r.setStart(t.parent,t.offset),r.setEnd(n.parent,n.offset),r}viewPositionToDom(e){const t=e.parent;if(t.is("$text")){const n=this.findCorrespondingDomText(t);if(!n)return null;let r=e.offset;return rn(n)&&(r+=qn),{parent:n,offset:r}}{let n,r,a;if(e.offset===0){if(n=this.mapViewToDom(t),!n)return null;a=n.childNodes[0]}else{const c=e.nodeBefore;if(r=c.is("$text")?this.findCorrespondingDomText(c):this.mapViewToDom(c),!r)return null;n=r.parentNode,a=r.nextSibling}return dt(a)&&rn(a)?{parent:a,offset:qn}:{parent:n,offset:r?qc(r)+1:0}}}domToView(e,t={}){const n=[],r=this._domToView(e,t,n),a=r.next().value;return a?(r.next(),this._processDomInlineNodes(null,n,t),a.is("$text")&&a.data.length==0?null:a):null}*domChildrenToView(e,t={},n=[]){for(let r=0;r<e.childNodes.length;r++){const a=e.childNodes[r],c=this._domToView(a,t,n),d=c.next().value;d!==null&&(this._isBlockViewElement(d)&&this._processDomInlineNodes(e,n,t),yield d,c.next())}this._processDomInlineNodes(e,n,t)}domSelectionToView(e){if(function(r){if(!v.isGecko||!r.rangeCount)return!1;const a=r.getRangeAt(0).startContainer;try{Object.prototype.toString.call(a)}catch{return!0}return!1}(e))return new Wn([]);if(e.rangeCount===1){let r=e.getRangeAt(0).startContainer;dt(r)&&(r=r.parentNode);const a=this.fakeSelectionToView(r);if(a)return a}const t=this.isDomSelectionBackward(e),n=[];for(let r=0;r<e.rangeCount;r++){const a=e.getRangeAt(r),c=this.domRangeToView(a);c&&n.push(c)}return new Wn(n,{backward:t})}domRangeToView(e){const t=this.domPositionToView(e.startContainer,e.startOffset),n=this.domPositionToView(e.endContainer,e.endOffset);return t&&n?new he(t,n):null}domPositionToView(e,t=0){if(this.isBlockFiller(e))return this.domPositionToView(e.parentNode,qc(e));const n=this.mapDomToView(e);if(n&&(n.is("uiElement")||n.is("rawElement")))return ne._createBefore(n);if(dt(e)){if(ta(e))return this.domPositionToView(e.parentNode,qc(e));const r=this.findCorrespondingViewText(e);let a=t;return r?(rn(e)&&(a-=qn,a=a<0?0:a),new ne(r,a)):null}if(t===0){const r=this.mapDomToView(e);if(r)return new ne(r,0)}else{const r=e.childNodes[t-1];if(dt(r)&&ta(r)||r&&this.isBlockFiller(r))return this.domPositionToView(r.parentNode,qc(r));const a=dt(r)?this.findCorrespondingViewText(r):this.mapDomToView(r);if(a&&a.parent)return new ne(a.parent,a.index+1)}return null}mapDomToView(e){return this.getHostViewElement(e)||this._domToViewMapping.get(e)}findCorrespondingViewText(e){if(ta(e))return null;const t=this.getHostViewElement(e);if(t)return t;const n=e.previousSibling;if(n){if(!this.isElement(n))return null;const r=this.mapDomToView(n);if(r){const a=r.nextSibling;return a instanceof Oe?a:null}}else{const r=this.mapDomToView(e.parentNode);if(r){const a=r.getChild(0);return a instanceof Oe?a:null}}return null}mapViewToDom(e){return this._viewToDomMapping.get(e)}findCorrespondingDomText(e){const t=e.previousSibling;return t&&this.mapViewToDom(t)?this.mapViewToDom(t).nextSibling:!t&&e.parent&&this.mapViewToDom(e.parent)?this.mapViewToDom(e.parent).childNodes[0]:null}focus(e){const t=this.mapViewToDom(e);if(t&&t.ownerDocument.activeElement!==t){const{scrollX:n,scrollY:r}=ce.window,a=[];o0(t,c=>{const{scrollLeft:d,scrollTop:u}=c;a.push([d,u])}),t.focus(),o0(t,c=>{const[d,u]=a.shift();c.scrollLeft=d,c.scrollTop=u}),ce.window.scrollTo(n,r)}}_clearDomSelection(){const e=this.mapViewToDom(this.document.selection.editableElement);if(!e)return;const t=e.ownerDocument.defaultView.getSelection(),n=this.domSelectionToView(t);n&&n.rangeCount>0&&t.removeAllRanges()}isElement(e){return e&&e.nodeType==Node.ELEMENT_NODE}isDocumentFragment(e){return e&&e.nodeType==Node.DOCUMENT_FRAGMENT_NODE}isBlockFiller(e){return this.blockFillerMode=="br"?e.isEqualNode(MT):!(e.tagName!=="BR"||!i0(e,this.blockElements)||e.parentNode.childNodes.length!==1)||e.isEqualNode(NT)||function(t,n){return t.isEqualNode(BT)&&i0(t,n)&&t.parentNode.childNodes.length===1}(e,this.blockElements)}isDomSelectionBackward(e){if(e.isCollapsed)return!1;const t=this._domDocument.createRange();try{t.setStart(e.anchorNode,e.anchorOffset),t.setEnd(e.focusNode,e.focusOffset)}catch{return!1}const n=t.collapsed;return t.detach(),n}getHostViewElement(e){const t=function(n){const r=[];let a=n;for(;a&&a.nodeType!=Node.DOCUMENT_NODE;)r.unshift(a),a=a.parentNode;return r}(e);for(t.pop();t.length;){const n=t.pop(),r=this._domToViewMapping.get(n);if(r&&(r.is("uiElement")||r.is("rawElement")))return r}return null}isDomSelectionCorrect(e){return this._isDomSelectionPositionCorrect(e.anchorNode,e.anchorOffset)&&this._isDomSelectionPositionCorrect(e.focusNode,e.focusOffset)}registerRawContentMatcher(e){this._rawContentElementMatcher.add(e)}registerInlineObjectMatcher(e){this._inlineObjectElementMatcher.add(e)}_clearTemporaryCustomProperties(){for(const e of this._elementsWithTemporaryCustomProperties)e._removeCustomProperty("editingPipeline:doNotReuseOnce");this._elementsWithTemporaryCustomProperties.clear()}_getBlockFiller(){switch(this.blockFillerMode){case"nbsp":return Qb(this._domDocument);case"markedNbsp":return Yb(this._domDocument);case"br":return Zb(this._domDocument)}}_isDomSelectionPositionCorrect(e,t){if(dt(e)&&rn(e)&&t<qn||this.isElement(e)&&rn(e.childNodes[t]))return!1;const n=this.mapDomToView(e);return!n||!n.is("uiElement")&&!n.is("rawElement")}*_domToView(e,t,n){if(this.isBlockFiller(e))return null;const r=this.getHostViewElement(e);if(r)return r;if(Ks(e)&&t.skipComments)return null;if(dt(e)){if(ta(e))return null;{const a=e.data;if(a==="")return null;const c=new Oe(this.document,a);return n.push(c),c}}{let a=this.mapDomToView(e);if(a)return this._isInlineObjectElement(a)&&n.push(a),a;if(this.isDocumentFragment(e))a=new zi(this.document),t.bind&&this.bindDocumentFragments(e,a);else{a=this._createViewElement(e,t),t.bind&&this.bindElements(e,a);const d=e.attributes;if(d)for(let u=d.length,p=0;p<u;p++)a._setAttribute(d[p].name,d[p].value);if(this._isViewElementWithRawContent(a,t))return a._setCustomProperty("$rawContent",e.innerHTML),this._isBlockViewElement(a)||n.push(a),a;if(Ks(e))return a._setCustomProperty("$rawContent",e.data),a}yield a;const c=[];if(t.withChildren!==!1)for(const d of this.domChildrenToView(e,t,c))a._appendChild(d);if(this._isInlineObjectElement(a))n.push(a);else for(const d of c)n.push(d)}}_processDomInlineNodes(e,t,n){if(!t.length||e&&!this.isDocumentFragment(e)&&!this._isBlockDomElement(e))return;let r=!1;for(let a=0;a<t.length;a++){const c=t[a];if(!c.is("$text")){r=!1;continue}let d,u=!1;if(PT(c,this.preElements))d=Jb(c.data);else{d=c.data.replace(/[ \n\t\r]{1,}/g," "),u=/[^\S\u00A0]/.test(d.charAt(d.length-1));const p=a>0?t[a-1]:null,g=a+1<t.length?t[a+1]:null,f=!p||p.is("element")&&p.name=="br"||r,_=!g&&!rn(c.data);n.withChildren!==!1&&(f&&(d=d.replace(/^ /,"")),_&&(d=d.replace(/ $/,""))),d=Jb(d),d=d.replace(/ \u00A0/g,"  ");const C=g&&g.is("element")&&g.name!="br",x=g&&g.is("$text")&&g.data.charAt(0)==" ";(/[ \u00A0]\u00A0$/.test(d)||!g||C||x)&&(d=d.replace(/\u00A0$/," ")),(f||p&&p.is("element")&&p.name!="br")&&(d=d.replace(/^\u00A0/," "))}d.length==0&&c.parent?(c._remove(),t.splice(a,1),a--):(c._data=d,r=u)}t.length=0}_processDataFromViewText(e){let t=e.data;if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return t;if(t.charAt(0)==" "){const n=this._getTouchingInlineViewNode(e,!1);!(n&&n.is("$textProxy")&&this._nodeEndsWithSpace(n))&&n||(t=" "+t.substr(1))}if(t.charAt(t.length-1)==" "){const n=this._getTouchingInlineViewNode(e,!0),r=n&&n.is("$textProxy")&&n.data.charAt(0)==" ";t.charAt(t.length-2)!=" "&&n&&!r||(t=t.substr(0,t.length-1)+" ")}return t.replace(/ {2}/g,"  ")}_nodeEndsWithSpace(e){if(e.getAncestors().some(n=>this.preElements.includes(n.name)))return!1;const t=this._processDataFromViewText(e);return t.charAt(t.length-1)==" "}_getTouchingInlineViewNode(e,t){const n=new Oi({startPosition:t?ne._createAfter(e):ne._createBefore(e),direction:t?"forward":"backward"});for(const r of n){if(r.item.is("element","br"))return null;if(this._isInlineObjectElement(r.item))return r.item;if(r.item.is("containerElement"))return null;if(r.item.is("$textProxy"))return r.item}return null}_isBlockDomElement(e){return this.isElement(e)&&this.blockElements.includes(e.tagName.toLowerCase())}_isBlockViewElement(e){return e.is("element")&&this.blockElements.includes(e.name)}_isInlineObjectElement(e){return!!e.is("element")&&(e.name=="br"||this.inlineObjectElements.includes(e.name)||!!this._inlineObjectElementMatcher.match(e))}_createViewElement(e,t){if(Ks(e))return new tl(this.document,"$comment");const n=t.keepOriginalCase?e.tagName:e.tagName.toLowerCase();return new on(this.document,n)}_isViewElementWithRawContent(e,t){return t.withChildren!==!1&&e.is("element")&&!!this._rawContentElementMatcher.match(e)}_shouldRenameElement(e){const t=e.toLowerCase();return this.renderingMode==="editing"&&this.unsafeElements.includes(t)}_createReplacementDomElement(e,t){const n=this._domDocument.createElement("span");if(n.setAttribute(n0,e),t){for(;t.firstChild;)n.appendChild(t.firstChild);for(const r of t.getAttributeNames())n.setAttribute(r,t.getAttribute(r))}return n}}function PT(i,e){return i.getAncestors().some(t=>t.is("element")&&e.includes(t.name))}function o0(i,e){let t=i;for(;t;)e(t),t=t.parentElement}function i0(i,e){const t=i.parentNode;return!!t&&!!t.tagName&&e.includes(t.tagName.toLowerCase())}function r0(i){i==="script"&&K("domconverter-unsafe-script-element-detected"),i==="style"&&K("domconverter-unsafe-style-element-detected")}class po extends Sn(){constructor(e){super(),this._isEnabled=!1,this.view=e,this.document=e.document}get isEnabled(){return this._isEnabled}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}destroy(){this.disable(),this.stopListening()}checkShouldIgnoreEventFromTarget(e){return e&&e.nodeType===3&&(e=e.parentNode),!(!e||e.nodeType!==1)&&e.matches("[data-cke-ignore-events], [data-cke-ignore-events] *")}}const s0=vb(function(i,e){Sr(e,Tr(e),i)});class Or{constructor(e,t,n){this.view=e,this.document=e.document,this.domEvent=t,this.domTarget=t.target,s0(this,n)}get target(){return this.view.domConverter.mapDomToView(this.domTarget)}preventDefault(){this.domEvent.preventDefault()}stopPropagation(){this.domEvent.stopPropagation()}}class Zo extends po{constructor(){super(...arguments),this.useCapture=!1}observe(e){(typeof this.domEventType=="string"?[this.domEventType]:this.domEventType).forEach(t=>{this.listenTo(e,t,(n,r)=>{this.isEnabled&&!this.checkShouldIgnoreEventFromTarget(r.target)&&this.onDomEvent(r)},{useCapture:this.useCapture})})}stopObserving(e){this.stopListening(e)}fire(e,t,n){this.isEnabled&&this.document.fire(e,new Or(this.view,t,n))}}class jT extends Zo{constructor(){super(...arguments),this.domEventType=["keydown","keyup"]}onDomEvent(e){const t={keyCode:e.keyCode,altKey:e.altKey,ctrlKey:e.ctrlKey,shiftKey:e.shiftKey,metaKey:e.metaKey,get keystroke(){return Br(this)}};this.fire(e.type,e,t)}}const Th=function(){return Un.Date.now()};var OT=/\s/;const LT=function(i){for(var e=i.length;e--&&OT.test(i.charAt(e)););return e};var zT=/^\s+/;const RT=function(i){return i&&i.slice(0,LT(i)+1).replace(zT,"")};var FT=/^[-+]0x[0-9a-f]+$/i,VT=/^0b[01]+$/i,UT=/^0o[0-7]+$/i,HT=parseInt;const a0=function(i){if(typeof i=="number")return i;if(Yc(i))return NaN;if(Pe(i)){var e=typeof i.valueOf=="function"?i.valueOf():i;i=Pe(e)?e+"":e}if(typeof i!="string")return i===0?i:+i;i=RT(i);var t=VT.test(i);return t||UT.test(i)?HT(i.slice(2),t?2:8):FT.test(i)?NaN:+i};var WT=Math.max,qT=Math.min;const Lr=function(i,e,t){var n,r,a,c,d,u,p=0,g=!1,f=!1,_=!0;if(typeof i!="function")throw new TypeError("Expected a function");function C(F){var W=n,Q=r;return n=r=void 0,p=F,c=i.apply(Q,W)}function x(F){var W=F-u;return u===void 0||W>=e||W<0||f&&F-p>=a}function T(){var F=Th();if(x(F))return M(F);d=setTimeout(T,function(W){var Q=e-(W-u);return f?qT(Q,a-(W-p)):Q}(F))}function M(F){return d=void 0,_&&n?C(F):(n=r=void 0,c)}function z(){var F=Th(),W=x(F);if(n=arguments,r=this,u=F,W){if(d===void 0)return function(Q){return p=Q,d=setTimeout(T,e),g?C(Q):c}(u);if(f)return clearTimeout(d),d=setTimeout(T,e),C(u)}return d===void 0&&(d=setTimeout(T,e)),c}return e=a0(e)||0,Pe(t)&&(g=!!t.leading,a=(f="maxWait"in t)?WT(a0(t.maxWait)||0,e):a,_="trailing"in t?!!t.trailing:_),z.cancel=function(){d!==void 0&&clearTimeout(d),p=0,n=u=r=d=void 0},z.flush=function(){return d===void 0?c:M(Th())},z};class $T extends po{constructor(e){super(e),this._fireSelectionChangeDoneDebounced=Lr(t=>{this.document.fire("selectionChangeDone",t)},200)}observe(){const e=this.document;e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&n.preventDefault()},{context:"$capture"}),e.on("arrowKey",(t,n)=>{e.selection.isFake&&this.isEnabled&&this._handleSelectionMove(n.keyCode)},{priority:"lowest"})}stopObserving(){}destroy(){super.destroy(),this._fireSelectionChangeDoneDebounced.cancel()}_handleSelectionMove(e){const t=this.document.selection,n=new Wn(t.getRanges(),{backward:t.isBackward,fake:!1});e!=ye.arrowleft&&e!=ye.arrowup||n.setTo(n.getFirstPosition()),e!=ye.arrowright&&e!=ye.arrowdown||n.setTo(n.getLastPosition());const r={oldSelection:t,newSelection:n,domSelection:null};this.document.fire("selectionChange",r),this._fireSelectionChangeDoneDebounced(r)}}const GT=function(i){return this.__data__.set(i,"__lodash_hash_undefined__"),this},KT=function(i){return this.__data__.has(i)};function il(i){var e=-1,t=i==null?0:i.length;for(this.__data__=new jc;++e<t;)this.add(i[e])}il.prototype.add=il.prototype.push=GT,il.prototype.has=KT;const QT=il,YT=function(i,e){for(var t=-1,n=i==null?0:i.length;++t<n;)if(e(i[t],t,i))return!0;return!1},ZT=function(i,e){return i.has(e)},c0=function(i,e,t,n,r,a){var c=1&t,d=i.length,u=e.length;if(d!=u&&!(c&&u>d))return!1;var p=a.get(i),g=a.get(e);if(p&&g)return p==e&&g==i;var f=-1,_=!0,C=2&t?new QT:void 0;for(a.set(i,e),a.set(e,i);++f<d;){var x=i[f],T=e[f];if(n)var M=c?n(T,x,f,e,i,a):n(x,T,f,i,e,a);if(M!==void 0){if(M)continue;_=!1;break}if(C){if(!YT(e,function(z,F){if(!ZT(C,F)&&(x===z||r(x,z,t,n,a)))return C.push(F)})){_=!1;break}}else if(x!==T&&!r(x,T,t,n,a)){_=!1;break}}return a.delete(i),a.delete(e),_},JT=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n,r){t[++e]=[r,n]}),t},XT=function(i){var e=-1,t=Array(i.size);return i.forEach(function(n){t[++e]=n}),t};var l0=co?co.prototype:void 0,Mh=l0?l0.valueOf:void 0;const eM=function(i,e,t,n,r,a,c){switch(t){case"[object DataView]":if(i.byteLength!=e.byteLength||i.byteOffset!=e.byteOffset)return!1;i=i.buffer,e=e.buffer;case"[object ArrayBuffer]":return!(i.byteLength!=e.byteLength||!a(new Vc(i),new Vc(e)));case"[object Boolean]":case"[object Date]":case"[object Number]":return Fs(+i,+e);case"[object Error]":return i.name==e.name&&i.message==e.message;case"[object RegExp]":case"[object String]":return i==e+"";case"[object Map]":var d=JT;case"[object Set]":var u=1&n;if(d||(d=XT),i.size!=e.size&&!u)return!1;var p=c.get(i);if(p)return p==e;n|=2,c.set(i,e);var g=c0(d(i),d(e),n,r,a,c);return c.delete(i),g;case"[object Symbol]":if(Mh)return Mh.call(i)==Mh.call(e)}return!1};var tM=Object.prototype.hasOwnProperty;const nM=function(i,e,t,n,r,a){var c=1&t,d=Ku(i),u=d.length;if(u!=Ku(e).length&&!c)return!1;for(var p=u;p--;){var g=d[p];if(!(c?g in e:tM.call(e,g)))return!1}var f=a.get(i),_=a.get(e);if(f&&_)return f==e&&_==i;var C=!0;a.set(i,e),a.set(e,i);for(var x=c;++p<u;){var T=i[g=d[p]],M=e[g];if(n)var z=c?n(M,T,g,e,i,a):n(T,M,g,i,e,a);if(!(z===void 0?T===M||r(T,M,t,n,a):z)){C=!1;break}x||(x=g=="constructor")}if(C&&!x){var F=i.constructor,W=e.constructor;F==W||!("constructor"in i)||!("constructor"in e)||typeof F=="function"&&F instanceof F&&typeof W=="function"&&W instanceof W||(C=!1)}return a.delete(i),a.delete(e),C};var d0="[object Arguments]",u0="[object Array]",rl="[object Object]",h0=Object.prototype.hasOwnProperty;const oM=function(i,e,t,n,r,a){var c=tn(i),d=tn(e),u=c?u0:$s(i),p=d?u0:$s(e),g=(u=u==d0?rl:u)==rl,f=(p=p==d0?rl:p)==rl,_=u==p;if(_&&Hs(i)){if(!Hs(e))return!1;c=!0,g=!1}if(_&&!g)return a||(a=new Dr),c||qu(i)?c0(i,e,t,n,r,a):eM(i,e,u,t,n,r,a);if(!(1&t)){var C=g&&h0.call(i,"__wrapped__"),x=f&&h0.call(e,"__wrapped__");if(C||x){var T=C?i.value():i,M=x?e.value():e;return a||(a=new Dr),r(T,M,t,n,a)}}return!!_&&(a||(a=new Dr),nM(i,e,t,n,r,a))},sl=function i(e,t,n,r,a){return e===t||(e==null||t==null||!En(e)&&!En(t)?e!=e&&t!=t:oM(e,t,n,r,i,a))},iM=function(i,e,t){var n=(t=typeof t=="function"?t:void 0)?t(i,e):void 0;return n===void 0?sl(i,e,void 0,t):!!n};class p0 extends po{constructor(e){super(e),this._config={childList:!0,characterData:!0,subtree:!0},this.domConverter=e.domConverter,this.renderer=e._renderer,this._domElements=new Set,this._mutationObserver=new window.MutationObserver(this._onMutations.bind(this))}flush(){this._onMutations(this._mutationObserver.takeRecords())}observe(e){this._domElements.add(e),this.isEnabled&&this._mutationObserver.observe(e,this._config)}stopObserving(e){if(this._domElements.delete(e),this.isEnabled){this._mutationObserver.disconnect();for(const t of this._domElements)this._mutationObserver.observe(t,this._config)}}enable(){super.enable();for(const e of this._domElements)this._mutationObserver.observe(e,this._config)}disable(){super.disable(),this._mutationObserver.disconnect()}destroy(){super.destroy(),this._mutationObserver.disconnect()}_onMutations(e){if(e.length===0)return;const t=this.domConverter,n=new Set,r=new Set;for(const c of e){const d=t.mapDomToView(c.target);d&&(d.is("uiElement")||d.is("rawElement")||c.type!=="childList"||this._isBogusBrMutation(c)||r.add(d))}for(const c of e){const d=t.mapDomToView(c.target);if((!d||!d.is("uiElement")&&!d.is("rawElement"))&&c.type==="characterData"){const u=t.findCorrespondingViewText(c.target);u&&!r.has(u.parent)?n.add(u):!u&&rn(c.target)&&r.add(t.mapDomToView(c.target.parentNode))}}let a=!1;for(const c of n)a=!0,this.renderer.markToSync("text",c);for(const c of r){const d=t.mapViewToDom(c),u=Array.from(c.getChildren()),p=Array.from(t.domChildrenToView(d,{withChildren:!1}));iM(u,p,rM)||(a=!0,this.renderer.markToSync("children",c))}a&&this.view.forceRender()}_isBogusBrMutation(e){let t=null;return e.nextSibling===null&&e.removedNodes.length===0&&e.addedNodes.length==1&&(t=this.domConverter.domToView(e.addedNodes[0],{withChildren:!1})),t&&t.is("element","br")}}function rM(i,e){if(!Array.isArray(i))return i===e||!(!i.is("$text")||!e.is("$text"))&&i.data===e.data}class al extends Zo{constructor(e){super(e),this._isFocusChanging=!1,this.domEventType=["focus","blur"],this.useCapture=!0;const t=this.document;t.on("focus",()=>{this._isFocusChanging=!0,this._renderTimeoutId=setTimeout(()=>{this.flush(),e.change(()=>{})},50)}),t.on("blur",(n,r)=>{const a=t.selection.editableElement;a!==null&&a!==r.target||(t.isFocused=!1,this._isFocusChanging=!1,e.change(()=>{}))})}flush(){this._isFocusChanging&&(this._isFocusChanging=!1,this.document.isFocused=!0)}onDomEvent(e){this.fire(e.type,e)}destroy(){this._renderTimeoutId&&clearTimeout(this._renderTimeoutId),super.destroy()}}class sM extends po{constructor(e){super(e),this.mutationObserver=e.getObserver(p0),this.focusObserver=e.getObserver(al),this.selection=this.document.selection,this.domConverter=e.domConverter,this._documents=new WeakSet,this._fireSelectionChangeDoneDebounced=Lr(t=>{this.document.fire("selectionChangeDone",t)},200),this._clearInfiniteLoopInterval=setInterval(()=>this._clearInfiniteLoop(),1e3),this._documentIsSelectingInactivityTimeoutDebounced=Lr(()=>this.document.isSelecting=!1,5e3),this._loopbackCounter=0}observe(e){const t=e.ownerDocument,n=()=>{this.document.isSelecting&&(this._handleSelectionChange(null,t),this.document.isSelecting=!1,this._documentIsSelectingInactivityTimeoutDebounced.cancel())};this.listenTo(e,"selectstart",()=>{this.document.isSelecting=!0,this._documentIsSelectingInactivityTimeoutDebounced()},{priority:"highest"}),this.listenTo(e,"keydown",n,{priority:"highest",useCapture:!0}),this.listenTo(e,"keyup",n,{priority:"highest",useCapture:!0}),this._documents.has(t)||(this.listenTo(t,"mouseup",n,{priority:"highest",useCapture:!0}),this.listenTo(t,"selectionchange",(r,a)=>{this.document.isComposing&&!v.isAndroid||(this._handleSelectionChange(a,t),this._documentIsSelectingInactivityTimeoutDebounced())}),this._documents.add(t))}stopObserving(e){this.stopListening(e)}destroy(){super.destroy(),clearInterval(this._clearInfiniteLoopInterval),this._fireSelectionChangeDoneDebounced.cancel(),this._documentIsSelectingInactivityTimeoutDebounced.cancel()}_reportInfiniteLoop(){}_handleSelectionChange(e,t){if(!this.isEnabled)return;const n=t.defaultView.getSelection();if(this.checkShouldIgnoreEventFromTarget(n.anchorNode))return;this.mutationObserver.flush();const r=this.domConverter.domSelectionToView(n);if(r.rangeCount!=0){if(this.view.hasDomSelection=!0,this.focusObserver.flush(),!this.selection.isEqual(r)||!this.domConverter.isDomSelectionCorrect(n))if(++this._loopbackCounter>60)this._reportInfiniteLoop();else if(this.selection.isSimilar(r))this.view.forceRender();else{const a={oldSelection:this.selection,newSelection:r,domSelection:n};this.document.fire("selectionChange",a),this._fireSelectionChangeDoneDebounced(a)}}else this.view.hasDomSelection=!1}_clearInfiniteLoop(){this._loopbackCounter=0}}class aM extends Zo{constructor(e){super(e),this.domEventType=["compositionstart","compositionupdate","compositionend"];const t=this.document;t.on("compositionstart",()=>{t.isComposing=!0},{priority:"low"}),t.on("compositionend",()=>{t.isComposing=!1},{priority:"low"})}onDomEvent(e){this.fire(e.type,e,{data:e.data})}}class m0{constructor(e,t={}){this._files=t.cacheFiles?g0(e):null,this._native=e}get files(){return this._files||(this._files=g0(this._native)),this._files}get types(){return this._native.types}getData(e){return this._native.getData(e)}setData(e,t){this._native.setData(e,t)}set effectAllowed(e){this._native.effectAllowed=e}get effectAllowed(){return this._native.effectAllowed}set dropEffect(e){this._native.dropEffect=e}get dropEffect(){return this._native.dropEffect}setDragImage(e,t,n){this._native.setDragImage(e,t,n)}get isCanceled(){return this._native.dropEffect=="none"||!!this._native.mozUserCancelled}}function g0(i){const e=Array.from(i.files||[]),t=Array.from(i.items||[]);return e.length?e:t.filter(n=>n.kind==="file").map(n=>n.getAsFile())}class cM extends Zo{constructor(){super(...arguments),this.domEventType="beforeinput"}onDomEvent(e){const t=e.getTargetRanges(),n=this.view,r=n.document;let a=null,c=null,d=[];if(e.dataTransfer&&(a=new m0(e.dataTransfer)),e.data!==null?c=e.data:a&&(c=a.getData("text/plain")),r.selection.isFake)d=Array.from(r.selection.getRanges());else if(t.length)d=t.map(u=>{const p=n.domConverter.domPositionToView(u.startContainer,u.startOffset),g=n.domConverter.domPositionToView(u.endContainer,u.endOffset);return p?n.createRange(p,g):g?n.createRange(g):void 0}).filter(u=>!!u);else if(v.isAndroid){const u=e.target.ownerDocument.defaultView.getSelection();d=Array.from(n.domConverter.domSelectionToView(u).getRanges())}if(v.isAndroid&&e.inputType=="insertCompositionText"&&c&&c.endsWith(`
`))this.fire(e.type,e,{inputType:"insertParagraph",targetRanges:[n.createRange(d[0].end)]});else if(e.inputType=="insertText"&&c&&c.includes(`
`,isColorInherited:!1}),n.extendTemplate({attributes:{style:{width:"53px",height:"10px"}}}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-powered-by"],"aria-hidden":!0},children:[{tag:"a",attributes:{href:"https://ckeditor.com/?utm_source=ckeditor&utm_medium=referral&utm_campaign=701Dn000000hVgmIAE_powered_by_ckeditor_logo",target:"_blank",tabindex:"-1"},children:[...t?[{tag:"span",attributes:{class:["ck","ck-powered-by__label"]},children:[t]}]:[],n],on:{dragstart:r.to(a=>a.preventDefault())}}]})}}function z_(i,e,t){return(n,r)=>{const a=new Ae(i);if(a.width<uN||a.height<dN)return null;let c;c=e.position==="inside"?a.bottom-r.height:a.bottom-r.height/2,c-=e.verticalOffset;const d=t(a,r),u=n.clone().moveTo(d,c).getIntersection(r.clone().moveTo(d,c)).getVisible();return!u||u.getArea()<r.getArea()?null:{top:c,left:d,name:`position_${e.position}-side_${e.side}`,config:{withArrow:!1}}}}function R_(i){const e=i.config.get("ui.poweredBy"),t=e&&e.position||"border";return lN({position:t,label:hN,verticalOffset:t==="inside"?5:0,horizontalOffset:5,side:i.locale.contentLanguageDirection==="ltr"?"right":"left"},e)}var F_=m(1801),gN={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};te()(F_.A,gN),F_.A.locals;const V_="polite";class fN{constructor(e){this.editor=e}announce(e,t,n=V_){const r=this.editor;this.view||(this.view=new kN(r.locale),r.ui.view.body.add(this.view));let a=this.view.regionViews.find(c=>c.regionName===e);a||(a=new bN(this.view.locale),this.view.regionViews.add(a)),a.set({regionName:e,text:t,politeness:n})}}class kN extends le{constructor(e){super(e),this.regionViews=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-aria-live-announcer"]},children:this.regionViews})}}class bN extends le{constructor(e){super(e);const t=this.bindTemplate;this.set("regionName",""),this.set("text",""),this.set("politeness",V_),this.setTemplate({tag:"div",attributes:{role:"region","data-region":t.to("regionName"),"aria-live":t.to("politeness")},children:[{text:t.to("text")}]})}}var wN=Object.defineProperty,U_=Object.getOwnPropertySymbols,_N=Object.prototype.hasOwnProperty,AN=Object.prototype.propertyIsEnumerable,H_=(i,e,t)=>e in i?wN(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;class vN extends be(){constructor(e){super(),this.isReady=!1,this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[];const t=e.editing.view;this.editor=e,this.componentFactory=new UB(e),this.focusTracker=new At,this.tooltipManager=new Cl(e),this.poweredBy=new pN(e),this.ariaLiveAnnouncer=new fN(e),this.set("viewportOffset",this._readViewportOffsetFromConfig()),this.once("ready",()=>{this.isReady=!0}),this.listenTo(t.document,"layoutChanged",this.update.bind(this)),this.listenTo(t,"scrollToTheSelection",this._handleScrollToTheSelection.bind(this)),this._initFocusTracking()}get element(){return null}update(){this.fire("update")}destroy(){this.stopListening(),this.focusTracker.destroy(),this.tooltipManager.destroy(this.editor),this.poweredBy.destroy();for(const e of this._editableElementsMap.values())e.ckeditorInstance=null,this.editor.keystrokes.stopListening(e);this._editableElementsMap=new Map,this._focusableToolbarDefinitions=[]}setEditableElement(e,t){this._editableElementsMap.set(e,t),t.ckeditorInstance||(t.ckeditorInstance=this.editor),this.focusTracker.add(t);const n=()=>{this.editor.editing.view.getDomRoot(e)||this.editor.keystrokes.listenTo(t)};this.isReady?n():this.once("ready",n)}removeEditableElement(e){const t=this._editableElementsMap.get(e);t&&(this._editableElementsMap.delete(e),this.editor.keystrokes.stopListening(t),this.focusTracker.remove(t),t.ckeditorInstance=null)}getEditableElement(e="main"){return this._editableElementsMap.get(e)}getEditableElementsNames(){return this._editableElementsMap.keys()}addToolbar(e,t={}){e.isRendered?(this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)):e.once("render",()=>{this.focusTracker.add(e.element),this.editor.keystrokes.listenTo(e.element)}),this._focusableToolbarDefinitions.push({toolbarView:e,options:t})}get _editableElements(){return console.warn("editor-ui-deprecated-editable-elements: The EditorUI#_editableElements property has been deprecated and will be removed in the near future.",{editorUI:this}),this._editableElementsMap}_readViewportOffsetFromConfig(){const e=this.editor,t=e.config.get("ui.viewportOffset");if(t)return t;const n=e.config.get("toolbar.viewportTopOffset");return n?(console.warn("editor-ui-deprecated-viewport-offset-config: The `toolbar.vieportTopOffset` configuration option is deprecated. It will be removed from future CKEditor versions. Use `ui.viewportOffset.top` instead."),{top:n}):{top:0}}_initFocusTracking(){const e=this.editor,t=e.editing.view;let n,r;e.keystrokes.set("Alt+F10",(a,c)=>{const d=this.focusTracker.focusedElement;Array.from(this._editableElementsMap.values()).includes(d)&&!Array.from(t.domRoots.values()).includes(d)&&(n=d);const u=this._getCurrentFocusedToolbarDefinition();u&&r||(r=this._getFocusableCandidateToolbarDefinitions());for(let p=0;p<r.length;p++){const g=r.shift();if(r.push(g),g!==u&&this._focusFocusableCandidateToolbar(g)){u&&u.options.afterBlur&&u.options.afterBlur();break}}c()}),e.keystrokes.set("Esc",(a,c)=>{const d=this._getCurrentFocusedToolbarDefinition();d&&(n?(n.focus(),n=null):e.editing.view.focus(),d.options.afterBlur&&d.options.afterBlur(),c())})}_getFocusableCandidateToolbarDefinitions(){const e=[];for(const t of this._focusableToolbarDefinitions){const{toolbarView:n,options:r}=t;(Ni(n.element)||r.beforeFocus)&&e.push(t)}return e.sort((t,n)=>W_(t)-W_(n)),e}_getCurrentFocusedToolbarDefinition(){for(const e of this._focusableToolbarDefinitions)if(e.toolbarView.element&&e.toolbarView.element.contains(this.focusTracker.focusedElement))return e;return null}_focusFocusableCandidateToolbar(e){const{toolbarView:t,options:{beforeFocus:n}}=e;return n&&n(),!!Ni(t.element)&&(t.focus(),!0)}_handleScrollToTheSelection(e,t){const n=((r,a)=>{for(var c in a||(a={}))_N.call(a,c)&&H_(r,c,a[c]);if(U_)for(var c of U_(a))AN.call(a,c)&&H_(r,c,a[c]);return r})({top:0,bottom:0,left:0,right:0},this.viewportOffset);t.viewportOffset.top+=n.top,t.viewportOffset.bottom+=n.bottom,t.viewportOffset.left+=n.left,t.viewportOffset.right+=n.right}}function W_(i){const{toolbarView:e,options:t}=i;let n=10;return Ni(e.element)&&n--,t.isContextual&&n--,n}var q_=m(1185),CN={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};te()(q_.A,CN),q_.A.locals;class yN extends le{constructor(e){super(e),this.body=new lB(e)}render(){super.render(),this.body.attachToDom()}destroy(){return this.body.detachFromDom(),super.destroy()}}class xN extends yN{constructor(e){super(e),this.top=this.createCollection(),this.main=this.createCollection(),this._voiceLabelView=this._createVoiceLabel(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-editor","ck-rounded-corners"],role:"application",dir:e.uiLanguageDirection,lang:e.uiLanguage,"aria-labelledby":this._voiceLabelView.id},children:[this._voiceLabelView,{tag:"div",attributes:{class:["ck","ck-editor__top","ck-reset_all"],role:"presentation"},children:this.top},{tag:"div",attributes:{class:["ck","ck-editor__main"],role:"presentation"},children:this.main}]})}_createVoiceLabel(){const e=this.t,t=new ml;return t.text=e("Rich Text Editor"),t.extendTemplate({attributes:{class:"ck-voice-label"}}),t}}class EN extends le{constructor(e,t,n){super(e),this.name=null,this.setTemplate({tag:"div",attributes:{class:["ck","ck-content","ck-editor__editable","ck-rounded-corners"],lang:e.contentLanguage,dir:e.contentLanguageDirection}}),this.set("isFocused",!1),this._editableElement=n,this._hasExternalElement=!!this._editableElement,this._editingView=t}render(){super.render(),this._hasExternalElement?this.template.apply(this.element=this._editableElement):this._editableElement=this.element,this.on("change:isFocused",()=>this._updateIsFocusedClasses()),this._updateIsFocusedClasses()}destroy(){this._hasExternalElement&&this.template.revert(this._editableElement),super.destroy()}get hasExternalElement(){return this._hasExternalElement}_updateIsFocusedClasses(){const e=this._editingView;function t(n){e.change(r=>{const a=e.document.getRoot(n.name);r.addClass(n.isFocused?"ck-focused":"ck-blurred",a),r.removeClass(n.isFocused?"ck-blurred":"ck-focused",a)})}e.isRenderingInProgress?function n(r){e.once("change:isRenderingInProgress",(a,c,d)=>{d?n(r):t(r)})}(this):t(this)}}class DN extends EN{constructor(e,t,n,r={}){super(e,t,n);const a=e.t;this.extendTemplate({attributes:{role:"textbox",class:"ck-editor__editable_inline"}}),this._generateLabel=r.label||(()=>a("Editor editing area: %0",this.name))}render(){super.render();const e=this._editingView;e.change(t=>{const n=e.document.getRoot(this.name);t.setAttribute("aria-label",this._generateLabel(this),n)})}}class rp extends Kc{static get pluginName(){return"Notification"}init(){this.on("show:warning",(e,t)=>{window.alert(t.message)},{priority:"lowest"})}showSuccess(e,t={}){this._showNotification({message:e,type:"success",namespace:t.namespace,title:t.title})}showInfo(e,t={}){this._showNotification({message:e,type:"info",namespace:t.namespace,title:t.title})}showWarning(e,t={}){this._showNotification({message:e,type:"warning",namespace:t.namespace,title:t.title})}_showNotification(e){const t=e.namespace?`show:${e.type}:${e.namespace}`:`show:${e.type}`;this.fire(t,{message:e.message,type:e.type,title:e.title||""})}}class $_ extends be(){constructor(e,t){super(),t&&s0(this,t),e&&this.set(e)}}var G_=m(991),SN={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};te()(G_.A,SN),G_.A.locals;var K_=m(5380),IN={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};te()(K_.A,IN),K_.A.locals;const xl=Mr("px");class El extends X{constructor(e){super(e),this._viewToStack=new Map,this._idToStack=new Map,this._view=null,this._rotatorView=null,this._fakePanelsView=null,this.positionLimiter=()=>{const t=this.editor.editing.view,n=t.document.selection.editableElement;return n?t.domConverter.mapViewToDom(n.root):null},this.set("visibleView",null),this.set("_numberOfStacks",0),this.set("_singleViewMode",!1)}static get pluginName(){return"ContextualBalloon"}destroy(){super.destroy(),this._view&&this._view.destroy(),this._rotatorView&&this._rotatorView.destroy(),this._fakePanelsView&&this._fakePanelsView.destroy()}get view(){return this._view||this._createPanelView(),this._view}hasView(e){return Array.from(this._viewToStack.keys()).includes(e)}add(e){if(this._view||this._createPanelView(),this.hasView(e.view))throw new j("contextualballoon-add-view-exist",[this,e]);const t=e.stackId||"main";if(!this._idToStack.has(t))return this._idToStack.set(t,new Map([[e.view,e]])),this._viewToStack.set(e.view,this._idToStack.get(t)),this._numberOfStacks=this._idToStack.size,void(this._visibleStack&&!e.singleViewMode||this.showStack(t));const n=this._idToStack.get(t);e.singleViewMode&&this.showStack(t),n.set(e.view,e),this._viewToStack.set(e.view,n),n===this._visibleStack&&this._showView(e)}remove(e){if(!this.hasView(e))throw new j("contextualballoon-remove-view-not-exist",[this,e]);const t=this._viewToStack.get(e);this._singleViewMode&&this.visibleView===e&&(this._singleViewMode=!1),this.visibleView===e&&(t.size===1?this._idToStack.size>1?this._showNextStack():(this.view.hide(),this.visibleView=null,this._rotatorView.hideView()):this._showView(Array.from(t.values())[t.size-2])),t.size===1?(this._idToStack.delete(this._getStackId(t)),this._numberOfStacks=this._idToStack.size):t.delete(e),this._viewToStack.delete(e)}updatePosition(e){e&&(this._visibleStack.get(this.visibleView).position=e),this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition()}showStack(e){this.visibleStack=e;const t=this._idToStack.get(e);if(!t)throw new j("contextualballoon-showstack-stack-not-exist",this);this._visibleStack!==t&&this._showView(Array.from(t.values()).pop())}_createPanelView(){this._view=new Wt(this.editor.locale),this.editor.ui.view.body.add(this._view),this.editor.ui.focusTracker.add(this._view.element),this._rotatorView=this._createRotatorView(),this._fakePanelsView=this._createFakePanelsView()}get _visibleStack(){return this._viewToStack.get(this.visibleView)}_getStackId(e){return Array.from(this._idToStack.entries()).find(t=>t[1]===e)[0]}_showNextStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)+1;e[t]||(t=0),this.showStack(this._getStackId(e[t]))}_showPrevStack(){const e=Array.from(this._idToStack.values());let t=e.indexOf(this._visibleStack)-1;e[t]||(t=e.length-1),this.showStack(this._getStackId(e[t]))}_createRotatorView(){const e=new TN(this.editor.locale),t=this.editor.locale.t;return this.view.content.add(e),e.bind("isNavigationVisible").to(this,"_numberOfStacks",this,"_singleViewMode",(n,r)=>!r&&n>1),e.on("change:isNavigationVisible",()=>this.updatePosition(),{priority:"low"}),e.bind("counter").to(this,"visibleView",this,"_numberOfStacks",(n,r)=>{if(r<2)return"";const a=Array.from(this._idToStack.values()).indexOf(this._visibleStack)+1;return t("%0 of %1",[a,r])}),e.buttonNextView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showNextStack()}),e.buttonPrevView.on("execute",()=>{e.focusTracker.isFocused&&this.editor.editing.view.focus(),this._showPrevStack()}),e}_createFakePanelsView(){const e=new MN(this.editor.locale,this.view);return e.bind("numberOfPanels").to(this,"_numberOfStacks",this,"_singleViewMode",(t,n)=>!n&&t>=2?Math.min(t-1,2):0),e.listenTo(this.view,"change:top",()=>e.updatePosition()),e.listenTo(this.view,"change:left",()=>e.updatePosition()),this.editor.ui.view.body.add(e),e}_showView({view:e,balloonClassName:t="",withArrow:n=!0,singleViewMode:r=!1}){this.view.class=t,this.view.withArrow=n,this._rotatorView.showView(e),this.visibleView=e,this.view.pin(this._getBalloonPosition()),this._fakePanelsView.updatePosition(),r&&(this._singleViewMode=!0)}_getBalloonPosition(){let e=Array.from(this._visibleStack.values()).pop().position;return e&&(e.limiter||(e=Object.assign({},e,{limiter:this.positionLimiter})),e=Object.assign({},e,{viewportOffsetConfig:this.editor.ui.viewportOffset})),e}}class TN extends le{constructor(e){super(e);const t=e.t,n=this.bindTemplate;this.set("isNavigationVisible",!0),this.focusTracker=new At,this.buttonPrevView=this._createButtonView(t("Previous"),pe.previousArrow),this.buttonNextView=this._createButtonView(t("Next"),pe.nextArrow),this.content=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-balloon-rotator"],"z-index":"-1"},children:[{tag:"div",attributes:{class:["ck-balloon-rotator__navigation",n.to("isNavigationVisible",r=>r?"":"ck-hidden")]},children:[this.buttonPrevView,{tag:"span",attributes:{class:["ck-balloon-rotator__counter"]},children:[{text:n.to("counter")}]},this.buttonNextView]},{tag:"div",attributes:{class:"ck-balloon-rotator__content"},children:this.content}]})}render(){super.render(),this.focusTracker.add(this.element)}destroy(){super.destroy(),this.focusTracker.destroy()}showView(e){this.hideView(),this.content.add(e)}hideView(){this.content.clear()}_createButtonView(e,t){const n=new De(this.locale);return n.set({label:e,icon:t,tooltip:!0}),n}}class MN extends le{constructor(e,t){super(e);const n=this.bindTemplate;this.set("top",0),this.set("left",0),this.set("height",0),this.set("width",0),this.set("numberOfPanels",0),this.content=this.createCollection(),this._balloonPanelView=t,this.setTemplate({tag:"div",attributes:{class:["ck-fake-panel",n.to("numberOfPanels",r=>r?"":"ck-hidden")],style:{top:n.to("top",xl),left:n.to("left",xl),width:n.to("width",xl),height:n.to("height",xl)}},children:this.content}),this.on("change:numberOfPanels",(r,a,c,d)=>{c>d?this._addPanels(c-d):this._removePanels(d-c),this.updatePosition()})}_addPanels(e){for(;e--;){const t=new le;t.setTemplate({tag:"div"}),this.content.add(t),this.registerChild(t)}}_removePanels(e){for(;e--;){const t=this.content.last;this.content.remove(t),this.deregisterChild(t),t.destroy()}}updatePosition(){if(this.numberOfPanels){const{top:e,left:t}=this._balloonPanelView,{width:n,height:r}=new Ae(this._balloonPanelView.element);Object.assign(this,{top:e,left:t,width:n,height:r})}}}var Q_=m(8298),BN={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};te()(Q_.A,BN),Q_.A.locals;const Hr=Mr("px");class NN extends le{constructor(e){super(e);const t=this.bindTemplate;this.set("isActive",!1),this.set("isSticky",!1),this.set("limiterElement",null),this.set("limiterBottomOffset",50),this.set("viewportTopOffset",0),this.set("_marginLeft",null),this.set("_isStickyToTheBottomOfLimiter",!1),this.set("_stickyTopOffset",null),this.set("_stickyBottomOffset",null),this.content=this.createCollection(),this._contentPanelPlaceholder=new Qn({tag:"div",attributes:{class:["ck","ck-sticky-panel__placeholder"],style:{display:t.to("isSticky",n=>n?"block":"none"),height:t.to("isSticky",n=>n?Hr(this._contentPanelRect.height):null)}}}).render(),this.contentPanelElement=new Qn({tag:"div",attributes:{class:["ck","ck-sticky-panel__content",t.if("isSticky","ck-sticky-panel__content_sticky"),t.if("_isStickyToTheBottomOfLimiter","ck-sticky-panel__content_sticky_bottom-limit")],style:{width:t.to("isSticky",n=>n?Hr(this._contentPanelPlaceholder.getBoundingClientRect().width):null),top:t.to("_stickyTopOffset",n=>n&&Hr(n)),bottom:t.to("_stickyBottomOffset",n=>n&&Hr(n)),marginLeft:t.to("_marginLeft")}},children:this.content}).render(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-sticky-panel"]},children:[this._contentPanelPlaceholder,this.contentPanelElement]})}render(){super.render(),this.checkIfShouldBeSticky(),this.listenTo(ce.document,"scroll",()=>{this.checkIfShouldBeSticky()},{useCapture:!0}),this.listenTo(this,"change:isActive",()=>{this.checkIfShouldBeSticky()})}checkIfShouldBeSticky(){if(!this.limiterElement||!this.isActive)return void this._unstick();const e=new Ae(this.limiterElement);let t=e.getVisible();if(t){const n=new Ae(ce.window);n.top+=this.viewportTopOffset,n.height-=this.viewportTopOffset,t=t.getIntersection(n)}if(t&&e.top<t.top){const n=t.top;if(n+this._contentPanelRect.height+this.limiterBottomOffset>t.bottom){const r=Math.max(e.bottom-t.bottom,0)+this.limiterBottomOffset;e.bottom-r>e.top+this._contentPanelRect.height?this._stickToBottomOfLimiter(r):this._unstick()}else this._contentPanelRect.height+this.limiterBottomOffset<e.height?this._stickToTopOfAncestors(n):this._unstick()}else this._unstick()}_stickToTopOfAncestors(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=e,this._stickyBottomOffset=null,this._marginLeft=Hr(-ce.window.scrollX)}_stickToBottomOfLimiter(e){this.isSticky=!0,this._isStickyToTheBottomOfLimiter=!0,this._stickyTopOffset=null,this._stickyBottomOffset=e,this._marginLeft=Hr(-ce.window.scrollX)}_unstick(){this.isSticky=!1,this._isStickyToTheBottomOfLimiter=!1,this._stickyTopOffset=null,this._stickyBottomOffset=null,this._marginLeft=null}get _contentPanelRect(){return new Ae(this.contentPanelElement)}}class PN extends kl{constructor(e,t){const n=e.t,r=Object.assign({},{showResetButton:!0,showIcon:!0,creator:_l},t);super(e,r.creator),this.label=t.label,this._viewConfig=r,this._viewConfig.showIcon&&(this.iconView=new Do,this.iconView.content=pe.loupe,this.fieldWrapperChildren.add(this.iconView,0),this.extendTemplate({attributes:{class:"ck-search__query_with-icon"}})),this._viewConfig.showResetButton&&(this.resetButtonView=new De(e),this.resetButtonView.set({label:n("Clear"),icon:pe.cancel,class:"ck-search__reset",isVisible:!1,tooltip:!0}),this.resetButtonView.on("execute",()=>{this.reset(),this.focus(),this.fire("reset")}),this.resetButtonView.bind("isVisible").to(this.fieldView,"isEmpty",a=>!a),this.fieldWrapperChildren.add(this.resetButtonView),this.extendTemplate({attributes:{class:"ck-search__query_with-reset"}}))}reset(){this.fieldView.reset(),this._viewConfig.showResetButton&&(this.resetButtonView.isVisible=!1)}}class jN extends le{constructor(){super();const e=this.bindTemplate;this.set({isVisible:!1,primaryText:"",secondaryText:""}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__info",e.if("isVisible","ck-hidden",t=>!t)],tabindex:-1},children:[{tag:"span",children:[{text:[e.to("primaryText")]}]},{tag:"span",children:[{text:[e.to("secondaryText")]}]}]})}focus(){this.element.focus()}}class ON extends le{constructor(e){super(e),this.children=this.createCollection(),this.focusTracker=new At,this.setTemplate({tag:"div",attributes:{class:["ck","ck-search__results"],tabindex:-1},children:this.children}),this._focusCycler=new Mn({focusables:this.children,focusTracker:this.focusTracker})}render(){super.render();for(const e of this.children)this.focusTracker.add(e.element)}focus(){this._focusCycler.focusFirst()}focusFirst(){this._focusCycler.focusFirst()}focusLast(){this._focusCycler.focusLast()}}var Y_=/[\\^$.*+?()[\]{}|]/g,LN=RegExp(Y_.source);const Z_=function(i){return(i=gh(i))&&LN.test(i)?i.replace(Y_,"\\$&"):i};var J_=m(8107),zN={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};te()(J_.A,zN),J_.A.locals;var RN=Object.defineProperty,X_=Object.getOwnPropertySymbols,FN=Object.prototype.hasOwnProperty,VN=Object.prototype.propertyIsEnumerable,eA=(i,e,t)=>e in i?RN(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;class UN extends le{constructor(e,t){super(e),this._config=t,this.filteredView=t.filteredView,this.queryView=this._createSearchTextQueryView(),this.focusTracker=new At,this.keystrokes=new Lt,this.resultsView=new ON(e),this.children=this.createCollection(),this.focusableChildren=this.createCollection([this.queryView,this.resultsView]),this.set("isEnabled",!0),this.set("resultsCount",0),this.set("totalItemsCount",0),t.infoView&&t.infoView.instance?this.infoView=t.infoView.instance:(this.infoView=new jN,this._enableDefaultInfoViewBehavior(),this.on("render",()=>{this.search("")})),this.resultsView.children.addMany([this.infoView,this.filteredView]),this.focusCycler=new Mn({focusables:this.focusableChildren,focusTracker:this.focusTracker,keystrokeHandler:this.keystrokes,actions:{focusPrevious:"shift + tab",focusNext:"tab"}}),this.on("search",(n,{resultsCount:r,totalItemsCount:a})=>{this.resultsCount=r,this.totalItemsCount=a}),this.setTemplate({tag:"div",attributes:{class:["ck","ck-search",t.class||null],tabindex:"-1"},children:this.children})}render(){super.render(),this.children.addMany([this.queryView,this.resultsView]);const e=t=>t.stopPropagation();for(const t of this.focusableChildren)this.focusTracker.add(t.element);this.keystrokes.listenTo(this.element),this.keystrokes.set("arrowright",e),this.keystrokes.set("arrowleft",e),this.keystrokes.set("arrowup",e),this.keystrokes.set("arrowdown",e)}focus(){this.queryView.focus()}reset(){this.queryView.reset(),this.search("")}search(e){const t=e?new RegExp(Z_(e),"ig"):null,n=this.filteredView.filter(t);this.fire("search",((r,a)=>{for(var c in a||(a={}))FN.call(a,c)&&eA(r,c,a[c]);if(X_)for(var c of X_(a))VN.call(a,c)&&eA(r,c,a[c]);return r})({query:e},n))}_createSearchTextQueryView(){const e=new PN(this.locale,this._config.queryView);return this.listenTo(e.fieldView,"input",()=>{this.search(e.fieldView.element.value)}),e.on("reset",()=>this.reset()),e.bind("isEnabled").to(this),e}_enableDefaultInfoViewBehavior(){const e=this.locale.t,t=this.infoView;function n(r,{query:a,resultsCount:c,totalItemsCount:d}){return typeof r=="function"?r(a,c,d):r}this.on("search",(r,a)=>{if(a.resultsCount)t.set({isVisible:!1});else{const c=this._config.infoView&&this._config.infoView.text;let d,u;a.totalItemsCount?c&&c.notFound?(d=c.notFound.primary,u=c.notFound.secondary):(d=e("No results found"),u=""):c&&c.noSearchableItems?(d=c.noSearchableItems.primary,u=c.noSearchableItems.secondary):(d=e("No searchable items"),u=""),t.set({primaryText:n(d,a),secondaryText:n(u,a),isVisible:!0})}})}}var tA=m(5727),HN={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};te()(tA.A,HN),tA.A.locals;const sp=class extends UN{constructor(i,e){super(i,e),this._config=e;const t=Mr("px");this.extendTemplate({attributes:{class:["ck-autocomplete"]}});const n=this.resultsView.bindTemplate;this.resultsView.set("isVisible",!1),this.resultsView.set("_position","s"),this.resultsView.set("_width",0),this.resultsView.extendTemplate({attributes:{class:[n.if("isVisible","ck-hidden",r=>!r),n.to("_position",r=>`ck-search__results_${r}`)],style:{width:n.to("_width",t)}}}),this.focusTracker.on("change:isFocused",(r,a,c)=>{this._updateResultsVisibility(),c?this.resultsView.element.scrollTop=0:e.resetOnBlur&&this.queryView.reset()}),this.on("search",()=>{this._updateResultsVisibility(),this._updateResultsViewWidthAndPosition()}),this.keystrokes.set("esc",(r,a)=>{this.resultsView.isVisible&&(this.queryView.focus(),this.resultsView.isVisible=!1,a())}),this.listenTo(ce.document,"scroll",()=>{this._updateResultsViewWidthAndPosition()}),this.on("change:isEnabled",()=>{this._updateResultsVisibility()}),this.filteredView.on("execute",(r,{value:a})=>{this.focus(),this.reset(),this.queryView.fieldView.value=this.queryView.fieldView.element.value=a,this.resultsView.isVisible=!1}),this.resultsView.on("change:isVisible",()=>{this._updateResultsViewWidthAndPosition()})}_updateResultsViewWidthAndPosition(){if(!this.resultsView.isVisible)return;this.resultsView._width=new Ae(this.queryView.fieldView.element).width;const i=sp._getOptimalPosition({element:this.resultsView.element,target:this.queryView.element,fitInViewport:!0,positions:sp.defaultResultsPositions});this.resultsView._position=i?i.name:"s"}_updateResultsVisibility(){const i=this._config.queryMinChars===void 0?0:this._config.queryMinChars,e=this.queryView.fieldView.element.value.length;this.resultsView.isVisible=this.focusTracker.isFocused&&this.isEnabled&&e>=i}};let nA=sp;nA.defaultResultsPositions=[i=>({top:i.bottom,left:i.left,name:"s"}),(i,e)=>({top:i.top-e.height,left:i.left,name:"n"})],nA._getOptimalPosition=$c;var oA=m(9529),WN={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};te()(oA.A,WN),oA.A.locals;var iA=m(109),qN={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};te()(iA.A,qN),iA.A.locals;var rA=m(2710),$N={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};te()(rA.A,$N),rA.A.locals;var sA=m(3344),GN={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};te()(sA.A,GN),sA.A.locals;class KN extends De{constructor(e){super(e);const t=this.bindTemplate;this.set({withText:!0,role:"menuitem"}),this.arrowView=this._createArrowView(),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__button"],"aria-haspopup":!0,"aria-expanded":this.bindTemplate.to("isOn",n=>String(n)),"data-cke-tooltip-disabled":t.to("isOn")},on:{mouseenter:t.to("mouseenter")}})}render(){super.render(),this.children.add(this.arrowView)}_createArrowView(){const e=new Do;return e.content=fl,e.extendTemplate({attributes:{class:"ck-menu-bar__menu__button__arrow"}}),e}}var aA=m(9481),QN={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};te()(aA.A,QN),aA.A.locals;class ap extends Ur{constructor(e,t){super(e);const n=this.bindTemplate;this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item"]},on:{mouseenter:n.to("mouseenter")}}),this.delegate("mouseenter").to(t)}}var YN=Object.defineProperty,cA=Object.getOwnPropertySymbols,ZN=Object.prototype.hasOwnProperty,JN=Object.prototype.propertyIsEnumerable,lA=(i,e,t)=>e in i?YN(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,dA=(i,e)=>{for(var t in e||(e={}))ZN.call(e,t)&&lA(i,t,e[t]);if(cA)for(var t of cA(e))JN.call(e,t)&&lA(i,t,e[t]);return i};const pa={toggleMenusAndFocusItemsOnHover(i){i.on("menu:mouseenter",e=>{if(i.isOpen){for(const t of i.menus){const n=e.path[0],r=n instanceof ap&&n.children.first===t;t.isOpen=(e.path.includes(t)||r)&&t.isEnabled}e.source.focus()}})},focusCycleMenusOnArrows(i){const e=i.locale.uiLanguageDirection==="rtl";function t(n,r){const a=i.children.getIndex(n),c=n.isOpen,d=i.children.length,u=i.children.get((a+d+r)%d);n.isOpen=!1,c&&(u.isOpen=!0),u.buttonView.focus()}i.on("menu:arrowright",n=>{t(n.source,e?-1:1)}),i.on("menu:arrowleft",n=>{t(n.source,e?1:-1)})},closeMenusWhenTheBarCloses(i){i.on("change:isOpen",()=>{i.isOpen||i.menus.forEach(e=>{e.isOpen=!1})})},closeMenuWhenAnotherOnTheSameLevelOpens(i){i.on("menu:change:isOpen",(e,t,n)=>{n&&i.menus.filter(r=>e.source.parentMenuView===r.parentMenuView&&e.source!==r&&r.isOpen).forEach(r=>{r.isOpen=!1})})},closeOnClickOutside(i){k({emitter:i,activator:()=>i.isOpen,callback:()=>i.close(),contextElements:()=>i.children.map(e=>e.element)})}},Hi={openAndFocusPanelOnArrowDownKey(i){i.keystrokes.set("arrowdown",(e,t)=>{i.focusTracker.focusedElement===i.buttonView.element&&(i.isOpen||(i.isOpen=!0),i.panelView.focus(),t())})},openOnArrowRightKey(i){const e=i.locale.uiLanguageDirection==="rtl"?"arrowleft":"arrowright";i.keystrokes.set(e,(t,n)=>{i.focusTracker.focusedElement===i.buttonView.element&&i.isEnabled&&(i.isOpen||(i.isOpen=!0),i.panelView.focus(),n())})},openOnButtonClick(i){i.buttonView.on("execute",()=>{i.isOpen=!0,i.panelView.focus()})},toggleOnButtonClick(i){i.buttonView.on("execute",()=>{i.isOpen=!i.isOpen,i.isOpen&&i.panelView.focus()})},closeOnArrowLeftKey(i){const e=i.locale.uiLanguageDirection==="rtl"?"arrowright":"arrowleft";i.keystrokes.set(e,(t,n)=>{i.isOpen&&(i.isOpen=!1,i.focus(),n())})},closeOnEscKey(i){i.keystrokes.set("esc",(e,t)=>{i.isOpen&&(i.isOpen=!1,i.focus(),t())})},closeOnParentClose(i){i.parentMenuView.on("change:isOpen",(e,t,n)=>{n||e.source!==i.parentMenuView||(i.isOpen=!1)})}},XN={southEast:i=>({top:i.bottom,left:i.left,name:"se"}),southWest:(i,e)=>({top:i.bottom,left:i.left-e.width+i.width,name:"sw"}),northEast:(i,e)=>({top:i.top-e.height,left:i.left,name:"ne"}),northWest:(i,e)=>({top:i.top-e.height,left:i.left-e.width+i.width,name:"nw"}),eastSouth:i=>({top:i.top,left:i.right-5,name:"es"}),eastNorth:(i,e)=>({top:i.top-e.height,left:i.right-5,name:"en"}),westSouth:(i,e)=>({top:i.top,left:i.left-e.width+5,name:"ws"}),westNorth:(i,e)=>({top:i.top-e.height,left:i.left-e.width+5,name:"wn"})},eP=[{menuId:"file",label:"File",groups:[{groupId:"export",items:["menuBar:exportPdf","menuBar:exportWord"]},{groupId:"import",items:["menuBar:importWord"]},{groupId:"revisionHistory",items:["menuBar:revisionHistory"]}]},{menuId:"edit",label:"Edit",groups:[{groupId:"undo",items:["menuBar:undo","menuBar:redo"]},{groupId:"selectAll",items:["menuBar:selectAll"]},{groupId:"findAndReplace",items:["menuBar:findAndReplace"]}]},{menuId:"view",label:"View",groups:[{groupId:"sourceEditing",items:["menuBar:sourceEditing"]},{groupId:"showBlocks",items:["menuBar:showBlocks"]},{groupId:"restrictedEditingException",items:["menuBar:restrictedEditingException"]}]},{menuId:"insert",label:"Insert",groups:[{groupId:"insertMainWidgets",items:["menuBar:uploadImage","menuBar:ckbox","menuBar:ckfinder","menuBar:insertTable"]},{groupId:"insertInline",items:["menuBar:link","menuBar:comment"]},{groupId:"insertMinorWidgets",items:["menuBar:insertTemplate","menuBar:blockQuote","menuBar:codeBlock","menuBar:htmlEmbed"]},{groupId:"insertStructureWidgets",items:["menuBar:horizontalLine","menuBar:pageBreak","menuBar:tableOfContents"]},{groupId:"restrictedEditing",items:["menuBar:restrictedEditing"]}]},{menuId:"format",label:"Format",groups:[{groupId:"textAndFont",items:[{menuId:"text",label:"Text",groups:[{groupId:"basicStyles",items:["menuBar:bold","menuBar:italic","menuBar:underline","menuBar:strikethrough","menuBar:superscript","menuBar:subscript","menuBar:code"]},{groupId:"textPartLanguage",items:["menuBar:textPartLanguage"]}]},{menuId:"font",label:"Font",groups:[{groupId:"fontProperties",items:["menuBar:fontSize","menuBar:fontFamily"]},{groupId:"fontColors",items:["menuBar:fontColor","menuBar:fontBackgroundColor"]},{groupId:"highlight",items:["menuBar:highlight"]}]},"menuBar:heading"]},{groupId:"list",items:["menuBar:bulletedList","menuBar:numberedList","menuBar:todoList"]},{groupId:"indent",items:["menuBar:alignment","menuBar:indent","menuBar:outdent"]},{groupId:"caseChange",items:["menuBar:caseChange"]},{groupId:"removeFormat",items:["menuBar:removeFormat"]}]},{menuId:"tools",label:"Tools",groups:[{groupId:"aiTools",items:["menuBar:aiAssistant","menuBar:aiCommands"]},{groupId:"tools",items:["menuBar:trackChanges","menuBar:commentsArchive"]}]},{menuId:"help",label:"Help",groups:[{groupId:"help",items:["menuBar:accessibilityHelp"]}]}];function tP({normalizedConfig:i,locale:e,componentFactory:t}){const n=$n(i);return function(r,a){const c=a.removeItems,d=[];a.items=a.items.filter(({menuId:u})=>!c.includes(u)||(d.push(u),!1)),Wr(a.items,u=>{u.groups=u.groups.filter(({groupId:p})=>!c.includes(p)||(d.push(p),!1));for(const p of u.groups)p.items=p.items.filter(g=>{const f=pA(g);return!c.includes(f)||(d.push(f),!1)})});for(const u of c)d.includes(u)||K("menu-bar-item-could-not-be-removed",{menuBarConfig:r,itemName:u})}(i,n),function(r,a){const c=a.addItems,d=[];for(const u of c){const p=iP(u.position),g=rP(u.position);if(nP(u))if(g){const f=a.items.findIndex(_=>_.menuId===g);f!=-1?p==="before"?(a.items.splice(f,0,u.menu),d.push(u)):p==="after"&&(a.items.splice(f+1,0,u.menu),d.push(u)):uA(a,u.menu,g,p)&&d.push(u)}else p==="start"?(a.items.unshift(u.menu),d.push(u)):p==="end"&&(a.items.push(u.menu),d.push(u));else oP(u)?Wr(a.items,f=>{if(f.menuId===g)p==="start"?(f.groups.unshift(u.group),d.push(u)):p==="end"&&(f.groups.push(u.group),d.push(u));else{const _=f.groups.findIndex(C=>C.groupId===g);_!==-1&&(p==="before"?(f.groups.splice(_,0,u.group),d.push(u)):p==="after"&&(f.groups.splice(_+1,0,u.group),d.push(u)))}}):uA(a,u.item,g,p)&&d.push(u)}for(const u of c)d.includes(u)||K("menu-bar-item-could-not-be-added",{menuBarConfig:r,addedItemConfig:u})}(i,n),function(r,a,c){Wr(a.items,d=>{for(const u of d.groups)u.items=u.items.filter(p=>{const g=typeof p=="string"&&!c.has(p);return g&&!a.isUsingDefaultConfig&&K("menu-bar-item-unavailable",{menuBarConfig:r,parentMenuConfig:$n(d),componentName:p}),!g})})}(i,n,t),hA(i,n),function(r,a){const c=a.t,d={File:c({string:"File",id:"MENU_BAR_MENU_FILE"}),Edit:c({string:"Edit",id:"MENU_BAR_MENU_EDIT"}),View:c({string:"View",id:"MENU_BAR_MENU_VIEW"}),Insert:c({string:"Insert",id:"MENU_BAR_MENU_INSERT"}),Format:c({string:"Format",id:"MENU_BAR_MENU_FORMAT"}),Tools:c({string:"Tools",id:"MENU_BAR_MENU_TOOLS"}),Help:c({string:"Help",id:"MENU_BAR_MENU_HELP"}),Text:c({string:"Text",id:"MENU_BAR_MENU_TEXT"}),Font:c({string:"Font",id:"MENU_BAR_MENU_FONT"})};Wr(r.items,u=>{u.label in d&&(u.label=d[u.label])})}(n,e),n}function uA(i,e,t,n){let r=!1;return Wr(i.items,a=>{for(const{groupId:c,items:d}of a.groups){if(r)return;if(c===t)n==="start"?(d.unshift(e),r=!0):n==="end"&&(d.push(e),r=!0);else{const u=d.findIndex(p=>pA(p)===t);u!==-1&&(n==="before"?(d.splice(u,0,e),r=!0):n==="after"&&(d.splice(u+1,0,e),r=!0))}}}),r}function hA(i,e){const t=e.isUsingDefaultConfig;let n=!1;e.items=e.items.filter(r=>!!r.groups.length||(cp(i,r,t),!1)),e.items.length?(Wr(e.items,r=>{r.groups=r.groups.filter(a=>!!a.items.length||(n=!0,!1));for(const a of r.groups)a.items=a.items.filter(c=>!(mA(c)&&!c.groups.length)||(cp(i,c,t),n=!0,!1))}),n&&hA(i,e)):cp(i,i,t)}function cp(i,e,t){t||K("menu-bar-menu-empty",{menuBarConfig:i,emptyMenuConfig:e})}function Wr(i,e){if(Array.isArray(i))for(const n of i)t(n);function t(n){e(n);for(const r of n.groups)for(const a of r.items)mA(a)&&t(a)}}function nP(i){return typeof i=="object"&&"menu"in i}function oP(i){return typeof i=="object"&&"group"in i}function iP(i){return i.startsWith("start")?"start":i.startsWith("end")?"end":i.startsWith("after")?"after":"before"}function rP(i){const e=i.match(/^[^:]+:(.+)/);return e?e[1]:null}function pA(i){return typeof i=="string"?i:i.menuId}function mA(i){return typeof i=="object"&&"menuId"in i}var gA=m(9108),sP={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};te()(gA.A,sP),gA.A.locals;class aP extends le{constructor(e){super(e);const t=this.bindTemplate;this.set("isVisible",!1),this.set("position","se"),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-reset","ck-menu-bar__menu__panel",t.to("position",n=>`ck-menu-bar__menu__panel_position_${n}`),t.if("isVisible","ck-hidden",n=>!n)],tabindex:"-1"},children:this.children,on:{selectstart:t.to(n=>{n.target.tagName.toLocaleLowerCase()!=="input"&&n.preventDefault()})}})}focus(e=1){this.children.length&&(e===1?this.children.first.focus():this.children.last.focus())}}var fA=m(4),cP={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};te()(fA.A,cP),fA.A.locals;const kA=class extends le{constructor(i){super(i);const e=this.bindTemplate;this.buttonView=new KN(i),this.buttonView.delegate("mouseenter").to(this),this.buttonView.bind("isOn","isEnabled").to(this,"isOpen","isEnabled"),this.panelView=new aP(i),this.panelView.bind("isVisible").to(this,"isOpen"),this.keystrokes=new Lt,this.focusTracker=new At,this.set("isOpen",!1),this.set("isEnabled",!0),this.set("panelPosition","w"),this.set("class",void 0),this.set("parentMenuView",null),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar__menu",e.to("class"),e.if("isEnabled","ck-disabled",t=>!t),e.if("parentMenuView","ck-menu-bar__menu_top-level",t=>!t)]},children:[this.buttonView,this.panelView]})}render(){super.render(),this.focusTracker.add(this.buttonView.element),this.focusTracker.add(this.panelView.element),this.keystrokes.listenTo(this.element),Hi.closeOnEscKey(this),this._repositionPanelOnOpen()}_attachBehaviors(){this.parentMenuView?(Hi.openOnButtonClick(this),Hi.openOnArrowRightKey(this),Hi.closeOnArrowLeftKey(this),Hi.closeOnParentClose(this)):(this._propagateArrowKeystrokeEvents(),Hi.openAndFocusPanelOnArrowDownKey(this),Hi.toggleOnButtonClick(this))}_propagateArrowKeystrokeEvents(){this.keystrokes.set("arrowright",(i,e)=>{this.fire("arrowright"),e()}),this.keystrokes.set("arrowleft",(i,e)=>{this.fire("arrowleft"),e()})}_repositionPanelOnOpen(){this.on("change:isOpen",(i,e,t)=>{if(!t)return;const n=kA._getOptimalPosition({element:this.panelView.element,target:this.buttonView.element,fitInViewport:!0,positions:this._panelPositions});this.panelView.position=n?n.name:this._panelPositions[0].name})}focus(){this.buttonView.focus()}get _panelPositions(){const{southEast:i,southWest:e,northEast:t,northWest:n,westSouth:r,eastSouth:a,westNorth:c,eastNorth:d}=XN;return this.locale.uiLanguageDirection==="ltr"?this.parentMenuView?[a,d,r,c]:[i,e,t,n]:this.parentMenuView?[r,c,a,d]:[e,i,n,t]}};let qr=kA;qr._getOptimalPosition=$c;class lp extends Xh{constructor(e){super(e),this.role="menu"}}var bA=m(977),lP={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};te()(bA.A,lP),bA.A.locals;class ln extends De{constructor(e){super(e),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}class wA extends Yw{constructor(e){super(e),this.set({withText:!0,withKeystroke:!0,tooltip:!1,role:"menuitem"}),this.extendTemplate({attributes:{class:["ck-menu-bar__menu__item__button"]}})}}var _A=m(497),dP={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};te()(_A.A,dP),_A.A.locals;const AA=["mouseenter","arrowleft","arrowright","change:isOpen"];class uP extends le{constructor(e){super(e),this.menus=[];const t=e.t;this.set("isOpen",!1),this._setupIsOpenUpdater(),this.children=this.createCollection(),this.setTemplate({tag:"div",attributes:{class:["ck","ck-menu-bar"],"aria-label":t("Editor menu bar"),role:"menubar"},children:this.children})}fillFromConfig(e,t){const n=tP({normalizedConfig:e,locale:this.locale,componentFactory:t}).items.map(r=>this._createMenu({componentFactory:t,menuDefinition:r}));this.children.addMany(n)}render(){super.render(),pa.toggleMenusAndFocusItemsOnHover(this),pa.closeMenusWhenTheBarCloses(this),pa.closeMenuWhenAnotherOnTheSameLevelOpens(this),pa.focusCycleMenusOnArrows(this),pa.closeOnClickOutside(this)}focus(){this.children.first&&this.children.first.focus()}close(){for(const e of this.children)e.isOpen=!1}registerMenu(e,t=null){t?(e.delegate(...AA).to(t),e.parentMenuView=t):e.delegate(...AA).to(this,n=>"menu:"+n),e._attachBehaviors(),this.menus.push(e)}_createMenu({componentFactory:e,menuDefinition:t,parentMenuView:n}){const r=this.locale,a=new qr(r);return this.registerMenu(a,n),a.buttonView.set({label:t.label}),a.once("change:isOpen",()=>{const c=new lp(r);c.ariaLabel=t.label,a.panelView.children.add(c),c.items.addMany(this._createMenuItems({menuDefinition:t,parentMenuView:a,componentFactory:e}))}),a}_createMenuItems({menuDefinition:e,parentMenuView:t,componentFactory:n}){const r=this.locale,a=[];for(const c of e.groups){for(const d of c.items){const u=new ap(r,t);if(Pe(d))u.children.add(this._createMenu({componentFactory:n,menuDefinition:d,parentMenuView:t}));else{const p=this._createMenuItemContentFromFactory({componentName:d,componentFactory:n,parentMenuView:t});if(!p)continue;u.children.add(p)}a.push(u)}c!==e.groups[e.groups.length-1]&&a.push(new Jh(r))}return a}_createMenuItemContentFromFactory({componentName:e,parentMenuView:t,componentFactory:n}){const r=n.create(e);return r instanceof qr||r instanceof ln||r instanceof wA?(this._registerMenuTree(r,t),r.on("execute",()=>{this.close()}),r):(K("menu-bar-component-unsupported",{componentName:e,componentView:r}),null)}_registerMenuTree(e,t){if(!(e instanceof qr))return void e.delegate("mouseenter").to(t);this.registerMenu(e,t);const n=e.panelView.children.filter(a=>a instanceof lp)[0];if(!n)return void e.delegate("mouseenter").to(t);const r=n.items.filter(a=>a instanceof Ur);for(const a of r)this._registerMenuTree(a.children.get(0),e)}_setupIsOpenUpdater(){let e;this.on("menu:change:isOpen",(t,n,r)=>{clearTimeout(e),r?this.isOpen=!0:e=setTimeout(()=>{this.isOpen=Array.from(this.children).some(a=>a.isOpen)},0)})}}class hP extends vN{constructor(e,t){super(e),this.view=t,this._toolbarConfig=a_(e.config.get("toolbar")),this._menuBarConfig=function(n){let r;return r="items"in n&&n.items?dA({items:n.items,removeItems:[],addItems:[],isVisible:!0,isUsingDefaultConfig:!1},n):dA({items:$n(eP),addItems:[],removeItems:[],isVisible:!0,isUsingDefaultConfig:!0},n),r}(e.config.get("menuBar")||{}),this._elementReplacer=new xn,this.listenTo(e.editing.view,"scrollToTheSelection",this._handleScrollToTheSelectionWithStickyPanel.bind(this))}get element(){return this.view.element}init(e){const t=this.editor,n=this.view,r=t.editing.view,a=n.editable,c=r.document.getRoot();a.name=c.rootName,n.render();const d=a.element;this.setEditableElement(a.name,d),n.editable.bind("isFocused").to(this.focusTracker),r.attachDomRoot(d),e&&this._elementReplacer.replace(e,this.element),this._initPlaceholder(),this._initToolbar(),this._initMenuBar(),this._initDialogPluginIntegration(),this.fire("ready")}destroy(){super.destroy();const e=this.view,t=this.editor.editing.view;this._elementReplacer.restore(),t.detachDomRoot(e.editable.name),e.destroy()}_initToolbar(){const e=this.view;e.stickyPanel.bind("isActive").to(this.focusTracker,"isFocused"),e.stickyPanel.limiterElement=e.element,e.stickyPanel.bind("viewportTopOffset").to(this,"viewportOffset",({top:t})=>t||0),e.toolbar.fillFromConfig(this._toolbarConfig,this.componentFactory),this.addToolbar(e.toolbar)}_initMenuBar(){const e=this.view;e.menuBarView&&(this._setupMenuBarBehaviors(e.menuBarView.element),e.menuBarView.fillFromConfig(this._menuBarConfig,this.componentFactory))}_initPlaceholder(){const e=this.editor,t=e.editing.view,n=t.document.getRoot(),r=e.sourceElement;let a;const c=e.config.get("placeholder");c&&(a=typeof c=="string"?c:c[this.view.editable.name]),!a&&r&&r.tagName.toLowerCase()==="textarea"&&(a=r.getAttribute("placeholder")),a&&(n.placeholder=a),Nb({view:t,element:n,isDirectHost:!1,keepOnFocus:!0})}_handleScrollToTheSelectionWithStickyPanel(e,t,n){const r=this.view.stickyPanel;if(r.isSticky){const a=new Ae(r.element).height;t.viewportOffset.top+=a}else{const a=()=>{this.editor.editing.view.scrollToTheSelection(n)};this.listenTo(r,"change:isSticky",a),setTimeout(()=>{this.stopListening(r,"change:isSticky",a)},20)}}_initDialogPluginIntegration(){if(!this.editor.plugins.has("Dialog"))return;const e=this.view.stickyPanel,t=this.editor.plugins.get("Dialog");t.on("show",()=>{const n=t.view;n.on("moveTo",(r,a)=>{if(!e.isSticky||n.wasMoved)return;const c=new Ae(e.contentPanelElement);a[1]<c.bottom+vl.defaultOffset&&(a[1]=c.bottom+vl.defaultOffset)},{priority:"high"})},{priority:"low"})}_setupMenuBarBehaviors(e){const t=this.editor;this.focusTracker.add(e),t.keystrokes.listenTo(e),t.keystrokes.set("Esc",(n,r)=>{e.contains(this.focusTracker.focusedElement)&&(t.editing.view.focus(),r())}),t.keystrokes.set("Alt+F9",(n,r)=>{e.contains(this.focusTracker.focusedElement)||(this.view.menuBarView.focus(),r())})}}var vA=m(7388),pP={injectType:"singletonStyleTag",attributes:{"data-cke":!0},insert:"head",singleton:!0};te()(vA.A,pP),vA.A.locals;class mP extends xN{constructor(e,t,n={}){super(e),this.stickyPanel=new NN(e),this.toolbar=new Zh(e,{shouldGroupWhenFull:n.shouldToolbarGroupWhenFull}),n.useMenuBar&&(this.menuBarView=new uP(e)),this.editable=new DN(e,t)}render(){super.render(),this.menuBarView?this.stickyPanel.content.addMany([this.menuBarView,this.toolbar]):this.stickyPanel.content.add(this.toolbar),this.top.add(this.stickyPanel),this.main.add(this.editable)}}class CA{constructor(e){if(this.crashes=[],this.state="initializing",this._now=Date.now,this.crashes=[],this._crashNumberLimit=typeof e.crashNumberLimit=="number"?e.crashNumberLimit:3,this._minimumNonErrorTimePeriod=typeof e.minimumNonErrorTimePeriod=="number"?e.minimumNonErrorTimePeriod:5e3,this._boundErrorHandler=t=>{const n="error"in t?t.error:t.reason;n instanceof Error&&this._handleError(n,t)},this._listeners={},!this._restart)throw new Error("The Watchdog class was split into the abstract `Watchdog` class and the `EditorWatchdog` class. Please, use `EditorWatchdog` if you have used the `Watchdog` class previously.")}destroy(){this._stopErrorHandling(),this._listeners={}}on(e,t){this._listeners[e]||(this._listeners[e]=[]),this._listeners[e].push(t)}off(e,t){this._listeners[e]=this._listeners[e].filter(n=>n!==t)}_fire(e,...t){const n=this._listeners[e]||[];for(const r of n)r.apply(this,[null,...t])}_startErrorHandling(){window.addEventListener("error",this._boundErrorHandler),window.addEventListener("unhandledrejection",this._boundErrorHandler)}_stopErrorHandling(){window.removeEventListener("error",this._boundErrorHandler),window.removeEventListener("unhandledrejection",this._boundErrorHandler)}_handleError(e,t){if(this._shouldReactToError(e)){this.crashes.push({message:e.message,stack:e.stack,filename:t instanceof ErrorEvent?t.filename:void 0,lineno:t instanceof ErrorEvent?t.lineno:void 0,colno:t instanceof ErrorEvent?t.colno:void 0,date:this._now()});const n=this._shouldRestart();this.state="crashed",this._fire("stateChange"),this._fire("error",{error:e,causesRestart:n}),n?this._restart():(this.state="crashedPermanently",this._fire("stateChange"))}}_shouldReactToError(e){return e.is&&e.is("CKEditorError")&&e.context!==void 0&&e.context!==null&&this.state==="ready"&&this._isErrorComingFromThisItem(e)}_shouldRestart(){return this.crashes.length<=this._crashNumberLimit?!0:(this.crashes[this.crashes.length-1].date-this.crashes[this.crashes.length-1-this._crashNumberLimit].date)/this._crashNumberLimit>this._minimumNonErrorTimePeriod}}function dp(i,e=new Set){const t=[i],n=new Set;let r=0;for(;t.length>r;){const a=t[r++];if(!n.has(a)&&gP(a)&&!e.has(a))if(n.add(a),Symbol.iterator in a)try{for(const c of a)t.push(c)}catch{}else for(const c in a)c!=="defaultValue"&&t.push(a[c])}return n}function gP(i){const e=Object.prototype.toString.call(i),t=typeof i;return!(t==="number"||t==="boolean"||t==="string"||t==="symbol"||t==="function"||e==="[object Date]"||e==="[object RegExp]"||e==="[object Module]"||i==null||i._watchdogExcluded||i instanceof EventTarget||i instanceof Event)}function yA(i,e,t=new Set){if(i===e&&typeof(n=i)=="object"&&n!==null)return!0;var n;const r=dp(i,t),a=dp(e,t);for(const c of r)if(a.has(c))return!0;return!1}var fP=Object.defineProperty,kP=Object.defineProperties,bP=Object.getOwnPropertyDescriptors,Dl=Object.getOwnPropertySymbols,xA=Object.prototype.hasOwnProperty,EA=Object.prototype.propertyIsEnumerable,DA=(i,e,t)=>e in i?fP(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t,up=(i,e)=>{for(var t in e||(e={}))xA.call(e,t)&&DA(i,t,e[t]);if(Dl)for(var t of Dl(e))EA.call(e,t)&&DA(i,t,e[t]);return i};class SA extends CA{constructor(e,t={}){super(t),this._editor=null,this._lifecyclePromise=null,this._initUsingData=!0,this._editables={},this._throttledSave=yl(this._save.bind(this),typeof t.saveInterval=="number"?t.saveInterval:5e3),e&&(this._creator=(n,r)=>e.create(n,r)),this._destructor=n=>n.destroy()}get editor(){return this._editor}get _item(){return this._editor}setCreator(e){this._creator=e}setDestructor(e){this._destructor=e}_restart(){return Promise.resolve().then(()=>(this.state="initializing",this._fire("stateChange"),this._destroy())).catch(e=>{console.error("An error happened during the editor destroying.",e)}).then(()=>{const e={},t=[],n=this._config.rootsAttributes||{},r={};for(const[u,p]of Object.entries(this._data.roots))p.isLoaded?(e[u]="",r[u]=n[u]||{}):t.push(u);const a=(c=up({},this._config),d={extraPlugins:this._config.extraPlugins||[],lazyRoots:t,rootsAttributes:r,_watchdogInitialData:this._data},kP(c,bP(d)));var c,d;return delete a.initialData,a.extraPlugins.push(wP),this._initUsingData?this.create(e,a,a.context):Bi(this._elementOrData)?this.create(this._elementOrData,a,a.context):this.create(this._editables,a,a.context)}).then(()=>{this._fire("restart")})}create(e=this._elementOrData,t=this._config,n){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(super._startErrorHandling(),this._elementOrData=e,this._initUsingData=typeof e=="string"||Object.keys(e).length>0&&typeof Object.values(e)[0]=="string",this._config=this._cloneEditorConfiguration(t)||{},this._config.context=n,this._creator(e,this._config))).then(r=>{this._editor=r,r.model.document.on("change:data",this._throttledSave),this._lastDocumentVersion=r.model.document.version,this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this.state="ready",this._fire("stateChange")}).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}destroy(){return this._lifecyclePromise=Promise.resolve(this._lifecyclePromise).then(()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy())).finally(()=>{this._lifecyclePromise=null}),this._lifecyclePromise}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling(),this._throttledSave.cancel();const e=this._editor;return this._editor=null,e.model.document.off("change:data",this._throttledSave),this._destructor(e)})}_save(){const e=this._editor.model.document.version;try{this._data=this._getData(),this._initUsingData||(this._editables=this._getEditables()),this._lastDocumentVersion=e}catch(t){console.error(t,"An error happened during restoring editor data. Editor will be restored from the previously saved data.")}}_setExcludedProperties(e){this._excludedProps=e}_getData(){const e=this._editor,t=e.model.document.roots.filter(d=>d.isAttached()&&d.rootName!="$graveyard"),{plugins:n}=e,r=n.has("CommentsRepository")&&n.get("CommentsRepository"),a=n.has("TrackChanges")&&n.get("TrackChanges"),c={roots:{},markers:{},commentThreads:JSON.stringify([]),suggestions:JSON.stringify([])};t.forEach(d=>{c.roots[d.rootName]={content:JSON.stringify(Array.from(d.getChildren())),attributes:JSON.stringify(Array.from(d.getAttributes())),isLoaded:d._isLoaded}});for(const d of e.model.markers)d._affectsData&&(c.markers[d.name]={rangeJSON:d.getRange().toJSON(),usingOperation:d._managedUsingOperations,affectsData:d._affectsData});return r&&(c.commentThreads=JSON.stringify(r.getCommentThreads({toJSON:!0,skipNotAttached:!0}))),a&&(c.suggestions=JSON.stringify(a.getSuggestions({toJSON:!0,skipNotAttached:!0}))),c}_getEditables(){const e={};for(const t of this.editor.model.document.getRootNames()){const n=this.editor.ui.getEditableElement(t);n&&(e[t]=n)}return e}_isErrorComingFromThisItem(e){return yA(this._editor,e.context,this._excludedProps)}_cloneEditorConfiguration(e){return th(e,(t,n)=>Bi(t)||n==="context"?t:void 0)}}class wP{constructor(e){this.editor=e,this._data=e.config.get("_watchdogInitialData")}init(){this.editor.data.on("init",e=>{e.stop(),this.editor.model.enqueueChange({isUndoable:!1},t=>{this._restoreCollaborationData(),this._restoreEditorData(t)}),this.editor.data.fire("ready")},{priority:999})}_createNode(e,t){if("name"in t){const n=e.createElement(t.name,t.attributes);if(t.children)for(const r of t.children)n._appendChild(this._createNode(e,r));return n}return e.createText(t.data,t.attributes)}_restoreEditorData(e){const t=this.editor;Object.entries(this._data.roots).forEach(([n,{content:r,attributes:a}])=>{const c=JSON.parse(r),d=JSON.parse(a),u=t.model.document.getRoot(n);for(const[p,g]of d)e.setAttribute(p,g,u);for(const p of c){const g=this._createNode(e,p);e.insert(g,u,"end")}}),Object.entries(this._data.markers).forEach(([n,r])=>{const{document:a}=t.model,c=r,{rangeJSON:{start:d,end:u}}=c,p=((x,T)=>{var M={};for(var z in x)xA.call(x,z)&&T.indexOf(z)<0&&(M[z]=x[z]);if(x!=null&&Dl)for(var z of Dl(x))T.indexOf(z)<0&&EA.call(x,z)&&(M[z]=x[z]);return M})(c,["rangeJSON"]),g=a.getRoot(d.root),f=e.createPositionFromPath(g,d.path,d.stickiness),_=e.createPositionFromPath(g,u.path,u.stickiness),C=e.createRange(f,_);e.addMarker(n,up({range:C},p))})}_restoreCollaborationData(){const e=JSON.parse(this._data.commentThreads),t=JSON.parse(this._data.suggestions);e.forEach(n=>{const r=this.editor.config.get("collaboration.channelId"),a=this.editor.plugins.get("CommentsRepository");a.hasCommentThread(n.threadId)&&a.getCommentThread(n.threadId).remove(),a.addCommentThread(up({channelId:r},n))}),t.forEach(n=>{const r=this.editor.plugins.get("TrackChangesEditing");r.hasSuggestion(n.id)?r.getSuggestion(n.id).attributes=n.attributes:r.addSuggestionData(n)})}}const ma=Symbol("MainQueueId");class _P{constructor(){this._onEmptyCallbacks=[],this._queues=new Map,this._activeActions=0}onEmpty(e){this._onEmptyCallbacks.push(e)}enqueue(e,t){const n=e===ma;this._activeActions++,this._queues.get(e)||this._queues.set(e,Promise.resolve());const r=(n?Promise.all(this._queues.values()):Promise.all([this._queues.get(ma),this._queues.get(e)])).then(t),a=r.catch(()=>{});return this._queues.set(e,a),r.finally(()=>{this._activeActions--,this._queues.get(e)===a&&this._activeActions===0&&this._onEmptyCallbacks.forEach(c=>c())})}}function IA(i){return Array.isArray(i)?i:[i]}class Sl extends qh(J3){constructor(e,t={}){if(!Il(e)&&t.initialData!==void 0)throw new j("editor-create-initial-data",null);super(t),this.config.define("menuBar.isVisible",!1),this.config.get("initialData")===void 0&&this.config.set("initialData",function(c){return Il(c)?(d=c,d instanceof HTMLTextAreaElement?d.value:d.innerHTML):c;var d}(e)),Il(e)&&(this.sourceElement=e),this.model.document.createRoot();const n=!this.config.get("toolbar.shouldNotGroupWhenFull"),r=this.config.get("menuBar"),a=new mP(this.locale,this.editing.view,{shouldToolbarGroupWhenFull:n,useMenuBar:r.isVisible});this.ui=new hP(this,a),function(c){if(!Si(c.updateSourceElement))throw new j("attachtoform-missing-elementapi-interface",c);const d=c.sourceElement;if(function(u){return!!u&&u.tagName.toLowerCase()==="textarea"}(d)&&d.form){let u;const p=d.form,g=()=>c.updateSourceElement();Si(p.submit)&&(u=p.submit,p.submit=()=>{g(),u.apply(p)}),p.addEventListener("submit",g),c.on("destroy",()=>{p.removeEventListener("submit",g),u&&(p.submit=u)})}}(this)}destroy(){return this.sourceElement&&this.updateSourceElement(),this.ui.destroy(),super.destroy()}static create(e,t={}){return new Promise(n=>{const r=new this(e,t);n(r.initPlugins().then(()=>r.ui.init(Il(e)?e:null)).then(()=>r.data.init(r.config.get("initialData"))).then(()=>r.fire("ready")).then(()=>r))})}}function Il(i){return Bi(i)}Sl.Context=Tb,Sl.EditorWatchdog=SA,Sl.ContextWatchdog=class extends CA{constructor(i,e={}){super(e),this._watchdogs=new Map,this._context=null,this._contextProps=new Set,this._actionQueues=new _P,this._watchdogConfig=e,this._creator=t=>i.create(t),this._destructor=t=>t.destroy(),this._actionQueues.onEmpty(()=>{this.state==="initializing"&&(this.state="ready",this._fire("stateChange"))})}setCreator(i){this._creator=i}setDestructor(i){this._destructor=i}get context(){return this._context}create(i={}){return this._actionQueues.enqueue(ma,()=>(this._contextConfig=i,this._create()))}getItem(i){return this._getWatchdog(i)._item}getItemState(i){return this._getWatchdog(i).state}add(i){const e=IA(i);return Promise.all(e.map(t=>this._actionQueues.enqueue(t.id,()=>{if(this.state==="destroyed")throw new Error("Cannot add items to destroyed watchdog.");if(!this._context)throw new Error("Context was not created yet. You should call the `ContextWatchdog#create()` method first.");let n;if(this._watchdogs.has(t.id))throw new Error(`Item with the given id is already added: '${t.id}'.`);if(t.type==="editor")return n=new SA(null,this._watchdogConfig),n.setCreator(t.creator),n._setExcludedProperties(this._contextProps),t.destructor&&n.setDestructor(t.destructor),this._watchdogs.set(t.id,n),n.on("error",(r,{error:a,causesRestart:c})=>{this._fire("itemError",{itemId:t.id,error:a}),c&&this._actionQueues.enqueue(t.id,()=>new Promise(d=>{const u=()=>{n.off("restart",u),this._fire("itemRestart",{itemId:t.id}),d()};n.on("restart",u)}))}),n.create(t.sourceElementOrData,t.config,this._context);throw new Error(`Not supported item type: '${t.type}'.`)})))}remove(i){const e=IA(i);return Promise.all(e.map(t=>this._actionQueues.enqueue(t,()=>{const n=this._getWatchdog(t);return this._watchdogs.delete(t),n.destroy()})))}destroy(){return this._actionQueues.enqueue(ma,()=>(this.state="destroyed",this._fire("stateChange"),super.destroy(),this._destroy()))}_restart(){return this._actionQueues.enqueue(ma,()=>(this.state="initializing",this._fire("stateChange"),this._destroy().catch(i=>{console.error("An error happened during destroying the context or items.",i)}).then(()=>this._create()).then(()=>this._fire("restart"))))}_create(){return Promise.resolve().then(()=>(this._startErrorHandling(),this._creator(this._contextConfig))).then(i=>(this._context=i,this._contextProps=dp(this._context),Promise.all(Array.from(this._watchdogs.values()).map(e=>(e._setExcludedProperties(this._contextProps),e.create(void 0,void 0,this._context))))))}_destroy(){return Promise.resolve().then(()=>{this._stopErrorHandling();const i=this._context;return this._context=null,this._contextProps=new Set,Promise.all(Array.from(this._watchdogs.values()).map(e=>e.destroy())).then(()=>this._destructor(i))})}_getWatchdog(i){const e=this._watchdogs.get(i);if(!e)throw new Error(`Item with the given id was not registered: ${i}.`);return e}_isErrorComingFromThisItem(i){for(const e of this._watchdogs.values())if(e._isErrorComingFromThisItem(i))return!1;return yA(this._context,i.context)}};class ga extends Zo{constructor(e){super(e),this.domEventType=["paste","copy","cut","drop","dragover","dragstart","dragend","dragenter","dragleave"];const t=this.document;function n(r){return(a,c)=>{c.preventDefault();const d=c.dropRange?[c.dropRange]:null,u=new L(t,r);t.fire(u,{dataTransfer:c.dataTransfer,method:a.name,targetRanges:d,target:c.target,domEvent:c.domEvent}),u.stop.called&&c.stopPropagation()}}this.listenTo(t,"paste",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"drop",n("clipboardInput"),{priority:"low"}),this.listenTo(t,"dragover",n("dragging"),{priority:"low"})}onDomEvent(e){const t="clipboardData"in e?e.clipboardData:e.dataTransfer,n=e.type=="drop"||e.type=="paste",r={dataTransfer:new m0(t,{cacheFiles:n})};e.type!="drop"&&e.type!="dragover"||(r.dropRange=function(a,c){const d=c.target.ownerDocument,u=c.clientX,p=c.clientY;let g;return d.caretRangeFromPoint&&d.caretRangeFromPoint(u,p)?g=d.caretRangeFromPoint(u,p):c.rangeParent&&(g=d.createRange(),g.setStart(c.rangeParent,c.rangeOffset),g.collapse(!0)),g?a.domConverter.domRangeToView(g):null}(this.view,e)),this.fire(e.type,e,r)}}const TA=["figcaption","li"],MA=["ol","ul"];function BA(i){if(i.is("$text")||i.is("$textProxy"))return i.data;if(i.is("element","img")&&i.hasAttribute("alt"))return i.getAttribute("alt");if(i.is("element","br"))return`
`;let e="",t=null;for(const n of i.getChildren())e+=AP(n,t)+BA(n),t=n;return e}function AP(i,e){return e?i.is("element","li")&&!i.isEmpty&&i.getChild(0).is("containerElement")||MA.includes(i.name)&&MA.includes(e.name)?`

`:i.is("containerElement")||e.is("containerElement")?TA.includes(i.name)||TA.includes(e.name)?`
`:`
