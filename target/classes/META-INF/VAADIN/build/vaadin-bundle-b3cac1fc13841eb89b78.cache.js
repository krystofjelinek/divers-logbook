!function(e){function t(t){for(var a,i,o=t[0],r=t[1],s=0,h=[];s<o.length;s++)i=o[s],Object.prototype.hasOwnProperty.call(n,i)&&n[i]&&h.push(n[i][0]),n[i]=0;for(a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a]);for(l&&l(t);h.length;)h.shift()()}var a={},n={1:0};function i(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],a=n[e];if(0!==a)if(a)t.push(a[2]);else{var o=new Promise((function(t,i){a=n[e]=[t,i]}));t.push(a[2]=o);var r,s=document.createElement("script");s.charset="utf-8",s.timeout=120,i.nc&&s.setAttribute("nonce",i.nc),s.src=function(e){return i.p+"build/vaadin-"+({}[e]||e)+"-"+{0:"2993100c3c732d734191",4:"e2299033f2548260127a",6:"e6e92cae32898214fbc9"}[e]+".cache.js"}(e);var l=new Error;r=function(t){s.onerror=s.onload=null,clearTimeout(h);var a=n[e];if(0!==a){if(a){var i=t&&("load"===t.type?"missing":t.type),o=t&&t.target&&t.target.src;l.message="Loading chunk "+e+" failed.\n("+i+": "+o+")",l.name="ChunkLoadError",l.type=i,l.request=o,a[1](l)}n[e]=void 0}};var h=setTimeout((function(){r({type:"timeout",target:s})}),12e4);s.onerror=s.onload=r,document.head.appendChild(s)}return Promise.all(t)},i.m=e,i.c=a,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="VAADIN/",i.oe=function(e){throw console.error(e),e};var o=window.webpackJsonp=window.webpackJsonp||[],r=o.push.bind(o);o.push=t,o=o.slice();for(var s=0;s<o.length;s++)t(o[s]);var l=r;i(i.s=316)}([,,,,,,function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a(37);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class n{constructor(e){this.value=e.toString()}toString(){return this.value}}function i(e){if(e instanceof n)return e.value;throw new Error("non-literal value passed to Polymer's htmlLiteral function: "+e)}var o=function(e,...t){var a=document.createElement("template");return a.innerHTML=t.reduce((t,a,o)=>t+function(e){if(e instanceof HTMLTemplateElement)return e.innerHTML;if(e instanceof n)return i(e);throw new Error("non-template value passed to Polymer's html function: "+e)}(a)+e[o+1],e[0]),a}},,,function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(100),i=a(6);a.d(t,"b",(function(){return i.a}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var o=Object(n.a)(HTMLElement)},,function(e,t,a){"use strict";a.d(t,"d",(function(){return l})),a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return c})),a.d(t,"c",(function(){return d}));a(37);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var n=0,i=0,o=[],r=0,s=document.createTextNode("");new window.MutationObserver((function(){for(var e=o.length,t=0;t<e;t++){var a=o[t];if(a)try{a()}catch(e){setTimeout(()=>{throw e})}}o.splice(0,e),i+=e})).observe(s,{characterData:!0});var l={after:e=>({run:t=>window.setTimeout(t,e),cancel(e){window.clearTimeout(e)}}),run:(e,t)=>window.setTimeout(e,t),cancel(e){window.clearTimeout(e)}},h={run:e=>window.requestAnimationFrame(e),cancel(e){window.cancelAnimationFrame(e)}},c={run:e=>window.requestIdleCallback?window.requestIdleCallback(e):window.setTimeout(e,16),cancel(e){window.cancelIdleCallback?window.cancelIdleCallback(e):window.clearTimeout(e)}},d={run:e=>(s.textContent=r++,o.push(e),n++),cancel(e){var t=e-i;if(t>=0){if(!o[t])throw new Error("invalid async handle: "+e);o[t]=null}}}},,function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return r}));a(37),a(35),a(11);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class n{constructor(){this._asyncModule=null,this._callback=null,this._timer=null}setConfig(e,t){this._asyncModule=e,this._callback=t,this._timer=this._asyncModule.run(()=>{this._timer=null,i.delete(this),this._callback()})}cancel(){this.isActive()&&(this._cancelAsync(),i.delete(this))}_cancelAsync(){this.isActive()&&(this._asyncModule.cancel(this._timer),this._timer=null)}flush(){this.isActive()&&(this.cancel(),this._callback())}isActive(){return null!=this._timer}static debounce(e,t,a){return e instanceof n?e._cancelAsync():e=new n,e.setConfig(t,a),e}}var i=new Set,o=function(e){i.add(e)},r=function(){var e=Boolean(i.size);return i.forEach(e=>{try{e.flush()}catch(e){setTimeout(()=>{throw e})}}),e}},,function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var n=window.ShadyDOM&&window.ShadyDOM.noPatch&&window.ShadyDOM.wrap?window.ShadyDOM.wrap:e=>e},,function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(55),i=a(112),o=e=>class extends(Object(i.a)(e)){static finalize(){super.finalize();var e=this.prototype._template,t=this.template&&this.template.parentElement&&this.template.parentElement.id===this.is,a=Object.getPrototypeOf(this.prototype)._template;a&&!t&&Array.from(a.content.querySelectorAll("style[include]")).forEach(t=>{this._includeStyle(t.getAttribute("include"),e)}),this._includeMatchingThemes(e)}static _includeMatchingThemes(e){var t=n.a.prototype.modules,a=!1,i=this.is+"-default-theme";Object.keys(t).sort((e,t)=>{var a=0===e.indexOf("vaadin-"),n=0===t.indexOf("vaadin-"),i=["lumo-","material-"],o=i.filter(t=>0===e.indexOf(t)).length>0,r=i.filter(e=>0===t.indexOf(e)).length>0;return a!==n?a?-1:1:o!==r?o?-1:1:0}).forEach(n=>{if(n!==i){var o=t[n].getAttribute("theme-for");o&&o.split(" ").forEach(t=>{new RegExp("^"+t.split("*").join(".*")+"$").test(this.is)&&(a=!0,this._includeStyle(n,e))})}}),!a&&t[i]&&this._includeStyle(i,e)}static _includeStyle(e,t){if(t&&!t.content.querySelector(`style[include="${e}"]`)){var a=document.createElement("style");a.setAttribute("include",e),t.content.appendChild(a)}}}},,function(e,t,a){"use strict";a.d(t,"d",(function(){return n})),a.d(t,"g",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"c",(function(){return r})),a.d(t,"i",(function(){return s})),a.d(t,"e",(function(){return l})),a.d(t,"f",(function(){return h})),a.d(t,"a",(function(){return d})),a.d(t,"h",(function(){return p}));a(37);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(e){return e.indexOf(".")>=0}function i(e){var t=e.indexOf(".");return-1===t?e:e.slice(0,t)}function o(e,t){return 0===e.indexOf(t+".")}function r(e,t){return 0===t.indexOf(e+".")}function s(e,t,a){return t+a.slice(e.length)}function l(e,t){return e===t||o(e,t)||r(e,t)}function h(e){if(Array.isArray(e)){for(var t=[],a=0;a<e.length;a++)for(var n=e[a].toString().split("."),i=0;i<n.length;i++)t.push(n[i]);return t.join(".")}return e}function c(e){return Array.isArray(e)?h(e).split("."):e.toString().split(".")}function d(e,t,a){for(var n=e,i=c(t),o=0;o<i.length;o++){if(!n)return;n=n[i[o]]}return a&&(a.path=i.join(".")),n}function p(e,t,a){var n=e,i=c(t),o=i[i.length-1];if(i.length>1){for(var r=0;r<i.length-1;r++){if(!(n=n[i[r]]))return}n[o]=a}else n[t]=a;return i.join(".")}},,,function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(11),i=a(13),o=a(26),r=a(65),s=a(192);function l(){}var h,c=function(){if("function"==typeof s.a)return Object(s.a)(l)};window.Vaadin||(window.Vaadin={}),window.Vaadin.registrations=window.Vaadin.registrations||[],window.Vaadin.developmentModeCallback=window.Vaadin.developmentModeCallback||{},window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]=function(){c&&c()};var d=new Set,p=e=>class extends(Object(r.a)(e)){static finalize(){super.finalize();var{is:e}=this;e&&!d.has(e)&&(window.Vaadin.registrations.push(this),d.add(e),window.Vaadin.developmentModeCallback&&(h=i.a.debounce(h,n.b,()=>{window.Vaadin.developmentModeCallback["vaadin-usage-statistics"]()}),Object(o.a)(h)))}constructor(){super(),null===document.doctype&&console.warn('Vaadin components require the "standards mode" declaration. Please add <!DOCTYPE html> to the HTML document.')}}},,function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a(37);var n=a(149),i=a(11),o=a(15);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function r(e){return"slot"===e.localName}var s=class{static getFlattenedNodes(e){var t=Object(o.a)(e);return r(e)?(e=e,t.assignedNodes({flatten:!0})):Array.from(t.childNodes).map(e=>r(e)?(e=e,Object(o.a)(e).assignedNodes({flatten:!0})):[e]).reduce((e,t)=>e.concat(t),[])}constructor(e,t){this._shadyChildrenObserver=null,this._nativeChildrenObserver=null,this._connected=!1,this._target=e,this.callback=t,this._effectiveNodes=[],this._observer=null,this._scheduled=!1,this._boundSchedule=()=>{this._schedule()},this.connect(),this._schedule()}connect(){r(this._target)?this._listenSlots([this._target]):Object(o.a)(this._target).children&&(this._listenSlots(Object(o.a)(this._target).children),window.ShadyDOM?this._shadyChildrenObserver=ShadyDOM.observeChildren(this._target,e=>{this._processMutations(e)}):(this._nativeChildrenObserver=new MutationObserver(e=>{this._processMutations(e)}),this._nativeChildrenObserver.observe(this._target,{childList:!0}))),this._connected=!0}disconnect(){r(this._target)?this._unlistenSlots([this._target]):Object(o.a)(this._target).children&&(this._unlistenSlots(Object(o.a)(this._target).children),window.ShadyDOM&&this._shadyChildrenObserver?(ShadyDOM.unobserveChildren(this._shadyChildrenObserver),this._shadyChildrenObserver=null):this._nativeChildrenObserver&&(this._nativeChildrenObserver.disconnect(),this._nativeChildrenObserver=null)),this._connected=!1}_schedule(){this._scheduled||(this._scheduled=!0,i.c.run(()=>this.flush()))}_processMutations(e){this._processSlotMutations(e),this.flush()}_processSlotMutations(e){if(e)for(var t=0;t<e.length;t++){var a=e[t];a.addedNodes&&this._listenSlots(a.addedNodes),a.removedNodes&&this._unlistenSlots(a.removedNodes)}}flush(){if(!this._connected)return!1;window.ShadyDOM&&ShadyDOM.flush(),this._nativeChildrenObserver?this._processSlotMutations(this._nativeChildrenObserver.takeRecords()):this._shadyChildrenObserver&&this._processSlotMutations(this._shadyChildrenObserver.takeRecords()),this._scheduled=!1;for(var e,t={target:this._target,addedNodes:[],removedNodes:[]},a=this.constructor.getFlattenedNodes(this._target),i=Object(n.a)(a,this._effectiveNodes),o=0;o<i.length&&(e=i[o]);o++)for(var r,s=0;s<e.removed.length&&(r=e.removed[s]);s++)t.removedNodes.push(r);for(var l,h=0;h<i.length&&(l=i[h]);h++)for(var c=l.index;c<l.index+l.addedCount;c++)t.addedNodes.push(a[c]);this._effectiveNodes=a;var d=!1;return(t.addedNodes.length||t.removedNodes.length)&&(d=!0,this.callback.call(this._target,t)),d}_listenSlots(e){for(var t=0;t<e.length;t++){var a=e[t];r(a)&&a.addEventListener("slotchange",this._boundSchedule)}}_unlistenSlots(e){for(var t=0;t<e.length;t++){var a=e[t];r(a)&&a.removeEventListener("slotchange",this._boundSchedule)}}}},,function(e,t,a){"use strict";a.d(t,"b",(function(){return i}));a(37);var n=a(13);a.d(t,"a",(function(){return n.b}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var i=function(){var e,t;do{e=window.ShadyDOM&&ShadyDOM.flush(),window.ShadyCSS&&window.ShadyCSS.ScopingShim&&window.ShadyCSS.ScopingShim.flush(),t=Object(n.c)()}while(e||t)}},,function(e,t,a){"use strict";a.d(t,"h",(function(){return i})),a.d(t,"d",(function(){return o})),a.d(t,"e",(function(){return r})),a.d(t,"c",(function(){return s})),a.d(t,"f",(function(){return l})),a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return c})),a.d(t,"g",(function(){return d}));a(37);var n=a(73),i=!window.ShadyDOM,o=(Boolean(!window.ShadyCSS||window.ShadyCSS.nativeCss),window.customElements.polyfillWrapFlushCallback,Object(n.a)(document.baseURI||window.location.href)),r=window.Polymer&&window.Polymer.sanitizeDOMValue||void 0,s=!1,l=!1,h=!1,c=!1,d=!1},,function(e,t,a){"use strict";a.r(t),a.d(t,"gestures",(function(){return k})),a.d(t,"recognizers",(function(){return E})),a.d(t,"deepTargetFind",(function(){return I})),a.d(t,"addListener",(function(){return L})),a.d(t,"removeListener",(function(){return P})),a.d(t,"register",(function(){return D})),a.d(t,"setTouchAction",(function(){return F})),a.d(t,"prevent",(function(){return R})),a.d(t,"resetMouseCanceller",(function(){return N})),a.d(t,"findOriginalTarget",(function(){return q})),a.d(t,"add",(function(){return W})),a.d(t,"remove",(function(){return Y}));a(37);var n=a(11),i=a(13),o=a(28),r=a(15),s="string"==typeof document.head.style.touchAction,l="__polymerGesturesHandled",h="__polymerGesturesTouchAction",c=["mousedown","mousemove","mouseup","click"],d=[0,1,4,2],p=function(){try{return 1===new MouseEvent("test",{buttons:1}).buttons}catch(e){return!1}}();function u(e){return c.indexOf(e)>-1}var f=!1;function v(e){if(!u(e)&&"touchend"!==e)return s&&f&&o.c?{passive:!0}:void 0}!function(){try{var e=Object.defineProperty({},"passive",{get(){f=!0}});window.addEventListener("test",null,e),window.removeEventListener("test",null,e)}catch(e){}}();var m=navigator.userAgent.match(/iP(?:[oa]d|hone)|Android/),g=[],b={button:!0,input:!0,keygen:!0,meter:!0,output:!0,textarea:!0,progress:!0,select:!0},_={button:!0,command:!0,fieldset:!0,input:!0,keygen:!0,optgroup:!0,option:!0,select:!0,textarea:!0};function y(e){var t=Array.prototype.slice.call(e.labels||[]);if(!t.length){t=[];var a=e.getRootNode();if(e.id)for(var n=a.querySelectorAll(`label[for = ${e.id}]`),i=0;i<n.length;i++)t.push(n[i])}return t}var w=function(e){var t,a=e.sourceCapabilities;if((!a||a.firesTouchEvents)&&(e[l]={skip:!0},"click"===e.type)){for(var n=!1,i=S(e),o=0;o<i.length;o++){if(i[o].nodeType===Node.ELEMENT_NODE)if("label"===i[o].localName)g.push(i[o]);else if(t=i[o],b[t.localName])for(var r=y(i[o]),s=0;s<r.length;s++)n=n||g.indexOf(r[s])>-1;if(i[o]===x.mouse.target)return}if(n)return;e.preventDefault(),e.stopPropagation()}};function z(e){for(var t,a=m?["click"]:c,n=0;n<a.length;n++)t=a[n],e?(g.length=0,document.addEventListener(t,w,!0)):document.removeEventListener(t,w,!0)}function M(e){var t=e.type;if(!u(t))return!1;if("mousemove"===t){var a=void 0===e.buttons?1:e.buttons;return e instanceof window.MouseEvent&&!p&&(a=d[e.which]||0),Boolean(1&a)}return 0===(void 0===e.button?0:e.button)}var x={mouse:{target:null,mouseIgnoreJob:null},touch:{x:0,y:0,id:-1,scrollDecided:!1}};function A(e,t,a){e.movefn=t,e.upfn=a,document.addEventListener("mousemove",t),document.addEventListener("mouseup",a)}function C(e){document.removeEventListener("mousemove",e.movefn),document.removeEventListener("mouseup",e.upfn),e.movefn=null,e.upfn=null}document.addEventListener("touchend",(function(e){x.mouse.mouseIgnoreJob||z(!0),x.mouse.target=S(e)[0],x.mouse.mouseIgnoreJob=i.a.debounce(x.mouse.mouseIgnoreJob,n.d.after(2500),(function(){z(),x.mouse.target=null,x.mouse.mouseIgnoreJob=null}))}),!!f&&{passive:!0});var S=window.ShadyDOM&&window.ShadyDOM.noPatch?window.ShadyDOM.composedPath:e=>e.composedPath&&e.composedPath()||[],k={},E=[];function I(e,t){for(var a=document.elementFromPoint(e,t),n=a;n&&n.shadowRoot&&!window.ShadyDOM;){if(n===(n=n.shadowRoot.elementFromPoint(e,t)))break;n&&(a=n)}return a}function O(e){var t=S(e);return t.length>0?t[0]:e.target}function T(e){var t,a=e.type,n=e.currentTarget.__polymerGestures;if(n){var i=n[a];if(i){if(!e[l]&&(e[l]={},"touch"===a.slice(0,5))){var o=(e=e).changedTouches[0];if("touchstart"===a&&1===e.touches.length&&(x.touch.id=o.identifier),x.touch.id!==o.identifier)return;s||"touchstart"!==a&&"touchmove"!==a||function(e){var t=e.changedTouches[0],a=e.type;if("touchstart"===a)x.touch.x=t.clientX,x.touch.y=t.clientY,x.touch.scrollDecided=!1;else if("touchmove"===a){if(x.touch.scrollDecided)return;x.touch.scrollDecided=!0;var n=function(e){for(var t,a="auto",n=S(e),i=0;i<n.length;i++)if((t=n[i])[h]){a=t[h];break}return a}(e),i=!1,o=Math.abs(x.touch.x-t.clientX),r=Math.abs(x.touch.y-t.clientY);e.cancelable&&("none"===n?i=!0:"pan-x"===n?i=r>o:"pan-y"===n&&(i=o>r)),i?e.preventDefault():R("track")}}(e)}if(!(t=e[l]).skip){for(var r,c=0;c<E.length;c++)i[(r=E[c]).name]&&!t[r.name]&&r.flow&&r.flow.start.indexOf(e.type)>-1&&r.reset&&r.reset();for(var d,p=0;p<E.length;p++)i[(d=E[p]).name]&&!t[d.name]&&(t[d.name]=!0,d[a](e))}}}}function L(e,t,a){return!!k[t]&&(function(e,t,a){var n=k[t],i=n.deps,o=n.name,r=e.__polymerGestures;r||(e.__polymerGestures=r={});for(var s,l,h=0;h<i.length;h++)s=i[h],m&&u(s)&&"click"!==s||((l=r[s])||(r[s]=l={_count:0}),0===l._count&&e.addEventListener(s,T,v(s)),l[o]=(l[o]||0)+1,l._count=(l._count||0)+1);e.addEventListener(t,a),n.touchAction&&F(e,n.touchAction)}(e,t,a),!0)}function P(e,t,a){return!!k[t]&&(function(e,t,a){var n=k[t],i=n.deps,o=n.name,r=e.__polymerGestures;if(r)for(var s,l,h=0;h<i.length;h++)s=i[h],(l=r[s])&&l[o]&&(l[o]=(l[o]||1)-1,l._count=(l._count||1)-1,0===l._count&&e.removeEventListener(s,T,v(s)));e.removeEventListener(t,a)}(e,t,a),!0)}function D(e){E.push(e);for(var t=0;t<e.emits.length;t++)k[e.emits[t]]=e}function F(e,t){s&&e instanceof HTMLElement&&n.c.run(()=>{e.style.touchAction=t}),e[h]=t}function B(e,t,a){var n=new Event(t,{bubbles:!0,cancelable:!0,composed:!0});if(n.detail=a,Object(r.a)(e).dispatchEvent(n),n.defaultPrevented){var i=a.preventer||a.sourceEvent;i&&i.preventDefault&&i.preventDefault()}}function R(e){var t=function(e){for(var t,a=0;a<E.length;a++){t=E[a];for(var n=0;n<t.emits.length;n++)if(t.emits[n]===e)return t}return null}(e);t.info&&(t.info.prevent=!0)}function N(){x.mouse.mouseIgnoreJob&&x.mouse.mouseIgnoreJob.flush()}function V(e,t,a,n){t&&B(t,e,{x:a.clientX,y:a.clientY,sourceEvent:a,preventer:n,prevent:function(e){return R(e)}})}function $(e,t,a){if(e.prevent)return!1;if(e.started)return!0;var n=Math.abs(e.x-t),i=Math.abs(e.y-a);return n>=5||i>=5}function j(e,t,a){if(t){var n,i=e.moves[e.moves.length-2],o=e.moves[e.moves.length-1],r=o.x-e.x,s=o.y-e.y,l=0;i&&(n=o.x-i.x,l=o.y-i.y),B(t,"track",{state:e.state,x:a.clientX,y:a.clientY,dx:r,dy:s,ddx:n,ddy:l,sourceEvent:a,hover:function(){return I(a.clientX,a.clientY)}})}}function H(e,t,a){var n=Math.abs(t.clientX-e.x),i=Math.abs(t.clientY-e.y),o=O(a||t);!o||_[o.localName]&&o.hasAttribute("disabled")||(isNaN(n)||isNaN(i)||n<=25&&i<=25||function(e){if("click"===e.type){if(0===e.detail)return!0;var t=O(e);if(!t.nodeType||t.nodeType!==Node.ELEMENT_NODE)return!0;var a=t.getBoundingClientRect(),n=e.pageX,i=e.pageY;return!(n>=a.left&&n<=a.right&&i>=a.top&&i<=a.bottom)}return!1}(t))&&(e.prevent||B(o,"tap",{x:t.clientX,y:t.clientY,sourceEvent:t,preventer:a}))}D({name:"downup",deps:["mousedown","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["down","up"],info:{movefn:null,upfn:null},reset:function(){C(this.info)},mousedown:function(e){if(M(e)){var t=O(e),a=this;A(this.info,(function(e){M(e)||(V("up",t,e),C(a.info))}),(function(e){M(e)&&V("up",t,e),C(a.info)})),V("down",t,e)}},touchstart:function(e){V("down",O(e),e.changedTouches[0],e)},touchend:function(e){V("up",O(e),e.changedTouches[0],e)}}),D({name:"track",touchAction:"none",deps:["mousedown","touchstart","touchmove","touchend"],flow:{start:["mousedown","touchstart"],end:["mouseup","touchend"]},emits:["track"],info:{x:0,y:0,state:"start",started:!1,moves:[],addMove:function(e){this.moves.length>2&&this.moves.shift(),this.moves.push(e)},movefn:null,upfn:null,prevent:!1},reset:function(){this.info.state="start",this.info.started=!1,this.info.moves=[],this.info.x=0,this.info.y=0,this.info.prevent=!1,C(this.info)},mousedown:function(e){if(M(e)){var t=O(e),a=this,n=function(e){var n=e.clientX,i=e.clientY;$(a.info,n,i)&&(a.info.state=a.info.started?"mouseup"===e.type?"end":"track":"start","start"===a.info.state&&R("tap"),a.info.addMove({x:n,y:i}),M(e)||(a.info.state="end",C(a.info)),t&&j(a.info,t,e),a.info.started=!0)};A(this.info,n,(function(e){a.info.started&&n(e),C(a.info)})),this.info.x=e.clientX,this.info.y=e.clientY}},touchstart:function(e){var t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchmove:function(e){var t=O(e),a=e.changedTouches[0],n=a.clientX,i=a.clientY;$(this.info,n,i)&&("start"===this.info.state&&R("tap"),this.info.addMove({x:n,y:i}),j(this.info,t,a),this.info.state="track",this.info.started=!0)},touchend:function(e){var t=O(e),a=e.changedTouches[0];this.info.started&&(this.info.state="end",this.info.addMove({x:a.clientX,y:a.clientY}),j(this.info,t,a))}}),D({name:"tap",deps:["mousedown","click","touchstart","touchend"],flow:{start:["mousedown","touchstart"],end:["click","touchend"]},emits:["tap"],info:{x:NaN,y:NaN,prevent:!1},reset:function(){this.info.x=NaN,this.info.y=NaN,this.info.prevent=!1},mousedown:function(e){M(e)&&(this.info.x=e.clientX,this.info.y=e.clientY)},click:function(e){M(e)&&H(this.info,e)},touchstart:function(e){var t=e.changedTouches[0];this.info.x=t.clientX,this.info.y=t.clientY},touchend:function(e){H(this.info,e.changedTouches[0],e)}});var q=O,W=L,Y=P},,function(e,t,a){"use strict";a(110),a(75);var n=document.createElement("template");n.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Square */\n      --lumo-space-xs: 0.25rem;\n      --lumo-space-s: 0.5rem;\n      --lumo-space-m: 1rem;\n      --lumo-space-l: 1.5rem;\n      --lumo-space-xl: 2.5rem;\n\n      /* Wide */\n      --lumo-space-wide-xs: calc(var(--lumo-space-xs) / 2) var(--lumo-space-xs);\n      --lumo-space-wide-s: calc(var(--lumo-space-s) / 2) var(--lumo-space-s);\n      --lumo-space-wide-m: calc(var(--lumo-space-m) / 2) var(--lumo-space-m);\n      --lumo-space-wide-l: calc(var(--lumo-space-l) / 2) var(--lumo-space-l);\n      --lumo-space-wide-xl: calc(var(--lumo-space-xl) / 2) var(--lumo-space-xl);\n\n      /* Tall */\n      --lumo-space-tall-xs: var(--lumo-space-xs) calc(var(--lumo-space-xs) / 2);\n      --lumo-space-tall-s: var(--lumo-space-s) calc(var(--lumo-space-s) / 2);\n      --lumo-space-tall-m: var(--lumo-space-m) calc(var(--lumo-space-m) / 2);\n      --lumo-space-tall-l: var(--lumo-space-l) calc(var(--lumo-space-l) / 2);\n      --lumo-space-tall-xl: var(--lumo-space-xl) calc(var(--lumo-space-xl) / 2);\n    }\n  </style>\n</custom-style>",document.head.appendChild(n.content)},,function(e,t,a){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a(37);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var n=0;function i(){}i.prototype.__mixinApplications,i.prototype.__mixinSet;var o=function(e){var t=e.__mixinApplications;t||(t=new WeakMap,e.__mixinApplications=t);var a=n++;return function(n){var i=n.__mixinSet;if(i&&i[a])return n;var o=t,r=o.get(n);r||(r=e(n),o.set(n,r));var s=Object.create(r.__mixinSet||i||null);return s[a]=!0,r.__mixinSet=s,r}}},,function(e,t,a){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/window.JSCompiler_renameProperty=function(e,t){return e}},,function(e,t,a){"use strict";a.d(t,"b",(function(){return s})),a.d(t,"a",(function(){return p}));a(37);var n=a(15),i=(a(28),a(24)),o=(a(26),a(13),Element.prototype),r=o.matches||o.matchesSelector||o.mozMatchesSelector||o.msMatchesSelector||o.oMatchesSelector||o.webkitMatchesSelector,s=function(e,t){return r.call(e,t)};class l{constructor(e){this.node=e}observeNodes(e){return new i.a(this.node,e)}unobserveNodes(e){e.disconnect()}notifyObserver(){}deepContains(e){if(Object(n.a)(this.node).contains(e))return!0;for(var t=e,a=e.ownerDocument;t&&t!==a&&t!==this.node;)t=Object(n.a)(t).parentNode||Object(n.a)(t).host;return t===this.node}getOwnerRoot(){return Object(n.a)(this.node).getRootNode()}getDistributedNodes(){return"slot"===this.node.localName?Object(n.a)(this.node).assignedNodes({flatten:!0}):[]}getDestinationInsertionPoints(){for(var e=[],t=Object(n.a)(this.node).assignedSlot;t;)e.push(t),t=Object(n.a)(t).assignedSlot;return e}importNode(e,t){var a=this.node instanceof Document?this.node:this.node.ownerDocument;return Object(n.a)(a).importNode(e,t)}getEffectiveChildNodes(){return i.a.getFlattenedNodes(this.node)}queryDistributedElements(e){for(var t,a=this.getEffectiveChildNodes(),n=[],i=0,o=a.length;i<o&&(t=a[i]);i++)t.nodeType===Node.ELEMENT_NODE&&s(t,e)&&n.push(t);return n}get activeElement(){var e=this.node;return void 0!==e._activeElement?e._activeElement:e.activeElement}}function h(e,t){for(var a=function(a){var n=t[a];Object.defineProperty(e,n,{get:function(){return this.node[n]},configurable:!0})},n=0;n<t.length;n++)a(n)}class c{constructor(e){this.event=e}get rootTarget(){return this.path[0]}get localTarget(){return this.event.target}get path(){return this.event.composedPath()}}l.prototype.cloneNode,l.prototype.appendChild,l.prototype.insertBefore,l.prototype.removeChild,l.prototype.replaceChild,l.prototype.setAttribute,l.prototype.removeAttribute,l.prototype.querySelector,l.prototype.querySelectorAll,l.prototype.parentNode,l.prototype.firstChild,l.prototype.lastChild,l.prototype.nextSibling,l.prototype.previousSibling,l.prototype.firstElementChild,l.prototype.lastElementChild,l.prototype.nextElementSibling,l.prototype.previousElementSibling,l.prototype.childNodes,l.prototype.children,l.prototype.classList,l.prototype.textContent,l.prototype.innerHTML;var d=l;if(window.ShadyDOM&&window.ShadyDOM.inUse&&window.ShadyDOM.noPatch&&window.ShadyDOM.Wrapper){class e extends window.ShadyDOM.Wrapper{}Object.getOwnPropertyNames(l.prototype).forEach(t=>{"activeElement"!=t&&(e.prototype[t]=l.prototype[t])}),h(e.prototype,["classList"]),d=e,Object.defineProperties(c.prototype,{localTarget:{get(){return this.event.currentTarget},configurable:!0},path:{get(){return window.ShadyDOM.composedPath(this.event)},configurable:!0}})}else!function(e,t){for(var a=function(a){var n=t[a];e[n]=function(){return this.node[n].apply(this.node,arguments)}},n=0;n<t.length;n++)a(n)}(l.prototype,["cloneNode","appendChild","insertBefore","removeChild","replaceChild","setAttribute","removeAttribute","querySelector","querySelectorAll"]),h(l.prototype,["parentNode","firstChild","lastChild","nextSibling","previousSibling","firstElementChild","lastElementChild","nextElementSibling","previousElementSibling","childNodes","children","classList"]),function(e,t){for(var a=function(a){var n=t[a];Object.defineProperty(e,n,{get:function(){return this.node[n]},set:function(e){this.node[n]=e},configurable:!0})},n=0;n<t.length;n++)a(n)}(l.prototype,["textContent","innerHTML"]);var p=function(e){if((e=e||document)instanceof d)return e;if(e instanceof c)return e;var t=e.__domApi;return t||(t=e instanceof Event?new c(e):new d(e),e.__domApi=t),t}},,function(e,t,a){"use strict";a(110),a(75),a(55);var n=document.createElement("template");n.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Base (background) */\n      --lumo-base-color: #FFF;\n\n      /* Tint */\n      --lumo-tint-5pct: hsla(0, 0%, 100%, 0.3);\n      --lumo-tint-10pct: hsla(0, 0%, 100%, 0.37);\n      --lumo-tint-20pct: hsla(0, 0%, 100%, 0.44);\n      --lumo-tint-30pct: hsla(0, 0%, 100%, 0.5);\n      --lumo-tint-40pct: hsla(0, 0%, 100%, 0.57);\n      --lumo-tint-50pct: hsla(0, 0%, 100%, 0.64);\n      --lumo-tint-60pct: hsla(0, 0%, 100%, 0.7);\n      --lumo-tint-70pct: hsla(0, 0%, 100%, 0.77);\n      --lumo-tint-80pct: hsla(0, 0%, 100%, 0.84);\n      --lumo-tint-90pct: hsla(0, 0%, 100%, 0.9);\n      --lumo-tint: #FFF;\n\n      /* Shade */\n      --lumo-shade-5pct: hsla(214, 61%, 25%, 0.05);\n      --lumo-shade-10pct: hsla(214, 57%, 24%, 0.1);\n      --lumo-shade-20pct: hsla(214, 53%, 23%, 0.16);\n      --lumo-shade-30pct: hsla(214, 50%, 22%, 0.26);\n      --lumo-shade-40pct: hsla(214, 47%, 21%, 0.38);\n      --lumo-shade-50pct: hsla(214, 45%, 20%, 0.5);\n      --lumo-shade-60pct: hsla(214, 43%, 19%, 0.61);\n      --lumo-shade-70pct: hsla(214, 42%, 18%, 0.72);\n      --lumo-shade-80pct: hsla(214, 41%, 17%, 0.83);\n      --lumo-shade-90pct: hsla(214, 40%, 16%, 0.94);\n      --lumo-shade: hsl(214, 35%, 15%);\n\n      /* Contrast */\n      --lumo-contrast-5pct: var(--lumo-shade-5pct);\n      --lumo-contrast-10pct: var(--lumo-shade-10pct);\n      --lumo-contrast-20pct: var(--lumo-shade-20pct);\n      --lumo-contrast-30pct: var(--lumo-shade-30pct);\n      --lumo-contrast-40pct: var(--lumo-shade-40pct);\n      --lumo-contrast-50pct: var(--lumo-shade-50pct);\n      --lumo-contrast-60pct: var(--lumo-shade-60pct);\n      --lumo-contrast-70pct: var(--lumo-shade-70pct);\n      --lumo-contrast-80pct: var(--lumo-shade-80pct);\n      --lumo-contrast-90pct: var(--lumo-shade-90pct);\n      --lumo-contrast: var(--lumo-shade);\n\n      /* Text */\n      --lumo-header-text-color: var(--lumo-contrast);\n      --lumo-body-text-color: var(--lumo-contrast-90pct);\n      --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n      --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n      --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n      /* Primary */\n      --lumo-primary-color: hsl(214, 90%, 52%);\n      --lumo-primary-color-50pct: hsla(214, 90%, 52%, 0.5);\n      --lumo-primary-color-10pct: hsla(214, 90%, 52%, 0.1);\n      --lumo-primary-text-color: var(--lumo-primary-color);\n      --lumo-primary-contrast-color: #FFF;\n\n      /* Error */\n      --lumo-error-color: hsl(3, 100%, 61%);\n      --lumo-error-color-50pct: hsla(3, 100%, 60%, 0.5);\n      --lumo-error-color-10pct: hsla(3, 100%, 60%, 0.1);\n      --lumo-error-text-color: hsl(3, 92%, 53%);\n      --lumo-error-contrast-color: #FFF;\n\n      /* Success */\n      --lumo-success-color: hsl(145, 80%, 42%); /* hsl(144,82%,37%); */\n      --lumo-success-color-50pct: hsla(145, 76%, 44%, 0.55);\n      --lumo-success-color-10pct: hsla(145, 76%, 44%, 0.12);\n      --lumo-success-text-color: hsl(145, 100%, 32%);\n      --lumo-success-contrast-color: #FFF;\n    }\n  </style>\n</custom-style><dom-module id="lumo-color">\n  <template>\n    <style>\n      [theme~="dark"] {\n        /* Base (background) */\n        --lumo-base-color: hsl(214, 35%, 21%);\n\n        /* Tint */\n        --lumo-tint-5pct: hsla(214, 65%, 85%, 0.06);\n        --lumo-tint-10pct: hsla(214, 60%, 80%, 0.14);\n        --lumo-tint-20pct: hsla(214, 64%, 82%, 0.23);\n        --lumo-tint-30pct: hsla(214, 69%, 84%, 0.32);\n        --lumo-tint-40pct: hsla(214, 73%, 86%, 0.41);\n        --lumo-tint-50pct: hsla(214, 78%, 88%, 0.5);\n        --lumo-tint-60pct: hsla(214, 82%, 90%, 0.6);\n        --lumo-tint-70pct: hsla(214, 87%, 92%, 0.7);\n        --lumo-tint-80pct: hsla(214, 91%, 94%, 0.8);\n        --lumo-tint-90pct: hsla(214, 96%, 96%, 0.9);\n        --lumo-tint: hsl(214, 100%, 98%);\n\n        /* Shade */\n        --lumo-shade-5pct: hsla(214, 0%, 0%, 0.07);\n        --lumo-shade-10pct: hsla(214, 4%, 2%, 0.15);\n        --lumo-shade-20pct: hsla(214, 8%, 4%, 0.23);\n        --lumo-shade-30pct: hsla(214, 12%, 6%, 0.32);\n        --lumo-shade-40pct: hsla(214, 16%, 8%, 0.41);\n        --lumo-shade-50pct: hsla(214, 20%, 10%, 0.5);\n        --lumo-shade-60pct: hsla(214, 24%, 12%, 0.6);\n        --lumo-shade-70pct: hsla(214, 28%, 13%, 0.7);\n        --lumo-shade-80pct: hsla(214, 32%, 13%, 0.8);\n        --lumo-shade-90pct: hsla(214, 33%, 13%, 0.9);\n        --lumo-shade: hsl(214, 33%, 13%);\n\n        /* Contrast */\n        --lumo-contrast-5pct: var(--lumo-tint-5pct);\n        --lumo-contrast-10pct: var(--lumo-tint-10pct);\n        --lumo-contrast-20pct: var(--lumo-tint-20pct);\n        --lumo-contrast-30pct: var(--lumo-tint-30pct);\n        --lumo-contrast-40pct: var(--lumo-tint-40pct);\n        --lumo-contrast-50pct: var(--lumo-tint-50pct);\n        --lumo-contrast-60pct: var(--lumo-tint-60pct);\n        --lumo-contrast-70pct: var(--lumo-tint-70pct);\n        --lumo-contrast-80pct: var(--lumo-tint-80pct);\n        --lumo-contrast-90pct: var(--lumo-tint-90pct);\n        --lumo-contrast: var(--lumo-tint);\n\n        /* Text */\n        --lumo-header-text-color: var(--lumo-contrast);\n        --lumo-body-text-color: var(--lumo-contrast-90pct);\n        --lumo-secondary-text-color: var(--lumo-contrast-70pct);\n        --lumo-tertiary-text-color: var(--lumo-contrast-50pct);\n        --lumo-disabled-text-color: var(--lumo-contrast-30pct);\n\n        /* Primary */\n        --lumo-primary-color: hsl(214, 86%, 55%);\n        --lumo-primary-color-50pct: hsla(214, 86%, 55%, 0.5);\n        --lumo-primary-color-10pct: hsla(214, 90%, 63%, 0.1);\n        --lumo-primary-text-color: hsl(214, 100%, 70%);\n        --lumo-primary-contrast-color: #FFF;\n\n        /* Error */\n        --lumo-error-color: hsl(3, 90%, 63%);\n        --lumo-error-color-50pct: hsla(3, 90%, 63%, 0.5);\n        --lumo-error-color-10pct: hsla(3, 90%, 63%, 0.1);\n        --lumo-error-text-color: hsl(3, 100%, 67%);\n\n        /* Success */\n        --lumo-success-color: hsl(145, 65%, 42%);\n        --lumo-success-color-50pct: hsla(145, 65%, 42%, 0.5);\n        --lumo-success-color-10pct: hsla(145, 65%, 42%, 0.1);\n        --lumo-success-text-color: hsl(145, 85%, 47%);\n      }\n\n      html {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      [theme~="dark"] {\n        color: var(--lumo-body-text-color);\n        background-color: var(--lumo-base-color);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        color: var(--lumo-header-text-color);\n      }\n\n      a {\n        color: var(--lumo-primary-text-color);\n      }\n\n      blockquote {\n        color: var(--lumo-secondary-text-color);\n      }\n\n      code,\n      pre {\n        background-color: var(--lumo-contrast-10pct);\n        border-radius: var(--lumo-border-radius-m);\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-color-legacy">\n  <template>\n    <style include="lumo-color">\n      :host {\n        color: var(--lumo-body-text-color) !important;\n        background-color: var(--lumo-base-color) !important;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(n.content)},,function(e,t,a){"use strict";a.d(t,"a",(function(){return m}));var n=a(121),i=(a(71),a(190),a(37),a(119)),o=a(103),r=a(45),s=a(28),l=a(15),h=Object(r.a)(Object(o.b)(Object(i.a)(HTMLElement)));customElements.define("dom-bind",class extends h{static get observedAttributes(){return["mutable-data"]}constructor(){if(super(),s.f)throw new Error("strictTemplatePolicy: dom-bind not allowed");this.root=null,this.$=null,this.__children=null}attributeChangedCallback(){this.mutableData=!0}connectedCallback(){this.style.display="none",this.render()}disconnectedCallback(){this.__removeChildren()}__insertChildren(){Object(l.a)(Object(l.a)(this).parentNode).insertBefore(this.root,this)}__removeChildren(){if(this.__children)for(var e=0;e<this.__children.length;e++)this.root.appendChild(this.__children[e])}render(){var e;if(!this.__children){if(!(e=e||this.querySelector("template"))){var t=new MutationObserver(()=>{if(!(e=this.querySelector("template")))throw new Error("dom-bind requires a <template> child");t.disconnect(),this.render()});return void t.observe(this,{childList:!0})}this.root=this._stampTemplate(e),this.$=this.root.$,this.__children=[];for(var a=this.root.firstChild;a;a=a.nextSibling)this.__children[this.__children.length]=a;this._enableProperties()}this.__insertChildren(),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0}))}});a(201),a(248);var c=a(9),d=a(35),p=a(149),u=a(100),f=Object(d.a)(e=>{var t=Object(u.a)(e);return class extends t{static get properties(){return{items:{type:Array},multi:{type:Boolean,value:!1},selected:{type:Object,notify:!0},selectedItem:{type:Object,notify:!0},toggle:{type:Boolean,value:!1}}}static get observers(){return["__updateSelection(multi, items.*)"]}constructor(){super(),this.__lastItems=null,this.__lastMulti=null,this.__selectedMap=null}__updateSelection(e,t){var a=t.path;if(a==JSCompiler_renameProperty("items",this)){var n=t.base||[],i=this.__lastItems;if(e!==this.__lastMulti&&this.clearSelection(),i){var o=Object(p.a)(n,i);this.__applySplices(o)}this.__lastItems=n,this.__lastMulti=e}else if(t.path==JSCompiler_renameProperty("items",this)+".splices")this.__applySplices(t.value.indexSplices);else{var r=a.slice((JSCompiler_renameProperty("items",this)+".").length),s=parseInt(r,10);r.indexOf(".")<0&&r==s&&this.__deselectChangedIdx(s)}}__applySplices(e){for(var t=this,a=this.__selectedMap,n=function(n){var i=e[n];a.forEach((e,t)=>{e<i.index||(e>=i.index+i.removed.length?a.set(t,e+i.addedCount-i.removed.length):a.set(t,-1))});for(var o=0;o<i.addedCount;o++){var r=i.index+o;a.has(t.items[r])&&a.set(t.items[r],r)}},i=0;i<e.length;i++)n(i);this.__updateLinks();var o=0;a.forEach((e,t)=>{e<0?(this.multi?this.splice(JSCompiler_renameProperty("selected",this),o,1):this.selected=this.selectedItem=null,a.delete(t)):o++})}__updateLinks(){if(this.__dataLinkedPaths={},this.multi){var e=0;this.__selectedMap.forEach(t=>{t>=0&&this.linkPaths(`${JSCompiler_renameProperty("items",this)}.${t}`,`${JSCompiler_renameProperty("selected",this)}.${e++}`)})}else this.__selectedMap.forEach(e=>{this.linkPaths(JSCompiler_renameProperty("selected",this),`${JSCompiler_renameProperty("items",this)}.${e}`),this.linkPaths(JSCompiler_renameProperty("selectedItem",this),`${JSCompiler_renameProperty("items",this)}.${e}`)})}clearSelection(){this.__dataLinkedPaths={},this.__selectedMap=new Map,this.selected=this.multi?[]:null,this.selectedItem=null}isSelected(e){return this.__selectedMap.has(e)}isIndexSelected(e){return this.isSelected(this.items[e])}__deselectChangedIdx(e){var t=this.__selectedIndexForItemIndex(e);if(t>=0){var a=0;this.__selectedMap.forEach((e,n)=>{t==a++&&this.deselect(n)})}}__selectedIndexForItemIndex(e){var t=this.__dataLinkedPaths[`${JSCompiler_renameProperty("items",this)}.${e}`];if(t)return parseInt(t.slice((JSCompiler_renameProperty("selected",this)+".").length),10)}deselect(e){var t,a=this.__selectedMap.get(e);a>=0&&(this.__selectedMap.delete(e),this.multi&&(t=this.__selectedIndexForItemIndex(a)),this.__updateLinks(),this.multi?this.splice(JSCompiler_renameProperty("selected",this),t,1):this.selected=this.selectedItem=null)}deselectIndex(e){this.deselect(this.items[e])}select(e){this.selectIndex(this.items.indexOf(e))}selectIndex(e){var t=this.items[e];this.isSelected(t)?this.toggle&&this.deselectIndex(e):(this.multi||this.__selectedMap.clear(),this.__selectedMap.set(t,e),this.__updateLinks(),this.multi?this.push(JSCompiler_renameProperty("selected",this),t):this.selected=this.selectedItem=t)}}})(c.a);class v extends f{static get is(){return"array-selector"}static get template(){return null}}customElements.define(v.is,v);a(75),a(191),a(6);var m=Object(n.a)(HTMLElement).prototype},,function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a(37);var n=a(35),i=a(30),o=Object(n.a)(e=>class extends e{_addEventListenerToNode(e,t,a){Object(i.addListener)(e,t,a)||super._addEventListenerToNode(e,t,a)}_removeEventListenerFromNode(e,t,a){Object(i.removeListener)(e,t,a)||super._removeEventListenerFromNode(e,t,a)}})},,function(e,t,a){"use strict";a(110),a(75);var n=document.createElement("template");n.innerHTML="<custom-style>\n  <style>\n    html {\n      /* Border radius */\n      --lumo-border-radius-s: 0.25em; /* Checkbox, badge, date-picker year indicator, etc */\n      --lumo-border-radius-m: var(--lumo-border-radius, 0.25em); /* Button, text field, menu overlay, etc */\n      --lumo-border-radius-l: 0.5em; /* Dialog, notification, etc */\n      --lumo-border-radius: 0.25em; /* Deprecated */\n\n      /* Shadow */\n      --lumo-box-shadow-xs: 0 1px 4px -1px var(--lumo-shade-50pct);\n      --lumo-box-shadow-s: 0 2px 4px -1px var(--lumo-shade-20pct), 0 3px 12px -1px var(--lumo-shade-30pct);\n      --lumo-box-shadow-m: 0 2px 6px -1px var(--lumo-shade-20pct), 0 8px 24px -4px var(--lumo-shade-40pct);\n      --lumo-box-shadow-l: 0 3px 18px -2px var(--lumo-shade-20pct), 0 12px 48px -6px var(--lumo-shade-40pct);\n      --lumo-box-shadow-xl: 0 4px 24px -3px var(--lumo-shade-20pct), 0 18px 64px -8px var(--lumo-shade-40pct);\n\n      /* Clickable element cursor */\n      --lumo-clickable-cursor: default;\n    }\n  </style>\n</custom-style>",document.head.appendChild(n.content)},,function(e,t,a){"use strict";a.d(t,"b",(function(){return _})),a.d(t,"a",(function(){return y}));a(37);var n=a(119),i=a(103),o=a(28),r=a(15),s=null;function l(){return s}l.prototype=Object.create(HTMLTemplateElement.prototype,{constructor:{value:l,writable:!0}});var h=Object(n.a)(l),c=Object(i.a)(h);var d=Object(n.a)(class{});class p extends d{constructor(e){super(),this._configureProperties(e),this.root=this._stampTemplate(this.__dataHost);for(var t=this.children=[],a=this.root.firstChild;a;a=a.nextSibling)t.push(a),a.__templatizeInstance=this;this.__templatizeOwner&&this.__templatizeOwner.__hideTemplateChildren__&&this._showHideChildren(!0);var n=this.__templatizeOptions;(e&&n.instanceProps||!n.instanceProps)&&this._enableProperties()}_configureProperties(e){if(this.__templatizeOptions.forwardHostProp)for(var t in this.__hostProps)this._setPendingProperty(t,this.__dataHost["_host_"+t]);for(var a in e)this._setPendingProperty(a,e[a])}forwardHostProp(e,t){this._setPendingPropertyOrPath(e,t,!1,!0)&&this.__dataHost._enqueueClient(this)}_addEventListenerToNode(e,t,a){if(this._methodHost&&this.__templatizeOptions.parentModel)this._methodHost._addEventListenerToNode(e,t,e=>{e.model=this,a(e)});else{var n=this.__dataHost.__dataHost;n&&n._addEventListenerToNode(e,t,a)}}_showHideChildren(e){for(var t=this.children,a=0;a<t.length;a++){var n=t[a];if(Boolean(e)!=Boolean(n.__hideTemplateChildren__))if(n.nodeType===Node.TEXT_NODE)e?(n.__polymerTextContent__=n.textContent,n.textContent=""):n.textContent=n.__polymerTextContent__;else if("slot"===n.localName)if(e)n.__polymerReplaced__=document.createComment("hidden-slot"),Object(r.a)(Object(r.a)(n).parentNode).replaceChild(n.__polymerReplaced__,n);else{var i=n.__polymerReplaced__;i&&Object(r.a)(Object(r.a)(i).parentNode).replaceChild(n,i)}else n.style&&(e?(n.__polymerDisplay__=n.style.display,n.style.display="none"):n.style.display=n.__polymerDisplay__);n.__hideTemplateChildren__=e,n._showHideChildren&&n._showHideChildren(e)}}_setUnmanagedPropertyToNode(e,t,a){e.__hideTemplateChildren__&&e.nodeType==Node.TEXT_NODE&&"textContent"==t?e.__polymerTextContent__=a:super._setUnmanagedPropertyToNode(e,t,a)}get parentModel(){var e=this.__parentModel;if(!e){var t;e=this;do{e=e.__dataHost.__dataHost}while((t=e.__templatizeOptions)&&!t.parentModel);this.__parentModel=e}return e}dispatchEvent(e){return!0}}p.prototype.__dataHost,p.prototype.__templatizeOptions,p.prototype._methodHost,p.prototype.__templatizeOwner,p.prototype.__hostProps;var u=Object(i.a)(p);function f(e){var t=e.__dataHost;return t&&t._methodHost||t}function v(e,t,a){var n=a.mutableData?u:p;_.mixin&&(n=_.mixin(n));var i=class extends n{};return i.prototype.__templatizeOptions=a,i.prototype._bindTemplate(e),function(e,t,a,n){var i=a.hostProps||{};for(var o in n.instanceProps){delete i[o];var r=n.notifyInstanceProp;r&&e.prototype._addPropertyEffect(o,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:b(o,r)})}if(n.forwardHostProp&&t.__dataHost)for(var s in i)e.prototype._addPropertyEffect(s,e.prototype.PROPERTY_EFFECT_TYPES.NOTIFY,{fn:function(e,t,a){e.__dataHost._setPendingPropertyOrPath("_host_"+t,a[t],!0,!0)}})}(i,e,t,a),i}function m(e,t,a){var n=a.forwardHostProp;if(n){var i=t.templatizeTemplateClass;if(!i){var o=a.mutableData?c:h;i=t.templatizeTemplateClass=class extends o{};var r=t.hostProps;for(var l in r)i.prototype._addPropertyEffect("_host_"+l,i.prototype.PROPERTY_EFFECT_TYPES.PROPAGATE,{fn:g(l,n)}),i.prototype._createNotifyingProperty("_host_"+l)}!function(e,t){s=e,Object.setPrototypeOf(e,t.prototype),new t,s=null}(e,i),e.__dataProto&&Object.assign(e.__data,e.__dataProto),e.__dataTemp={},e.__dataPending=null,e.__dataOld=null,e._enableProperties()}}function g(e,t){return function(e,a,n){t.call(e.__templatizeOwner,a.substring("_host_".length),n[a])}}function b(e,t){return function(e,a,n){t.call(e.__templatizeOwner,e,a,n[a])}}function _(e,t,a){if(o.f&&!f(e))throw new Error("strictTemplatePolicy: template owner not trusted");if(a=a||{},e.__templatizeOwner)throw new Error("A <template> can only be templatized once");e.__templatizeOwner=t;var n=(t?t.constructor:p)._parseTemplate(e),i=n.templatizeInstanceClass;i||(i=v(e,n,a),n.templatizeInstanceClass=i),m(e,n,a);var r=class extends i{};return r.prototype._methodHost=f(e),r.prototype.__dataHost=e,r.prototype.__templatizeOwner=t,r.prototype.__hostProps=n.hostProps,r=r}function y(e,t){for(var a;t;)if(a=t.__templatizeInstance){if(a.__dataHost==e)return a;t=a.__dataHost}else t=Object(r.a)(t).parentNode;return null}},,function(e,t,a){"use strict";a(110),a(75),a(55);var n=document.createElement("template");n.innerHTML='<custom-style>\n  <style>\n    html {\n      /* Font families */\n      --lumo-font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n\n      /* Font sizes */\n      --lumo-font-size-xxs: .75rem;\n      --lumo-font-size-xs: .8125rem;\n      --lumo-font-size-s: .875rem;\n      --lumo-font-size-m: 1rem;\n      --lumo-font-size-l: 1.125rem;\n      --lumo-font-size-xl: 1.375rem;\n      --lumo-font-size-xxl: 1.75rem;\n      --lumo-font-size-xxxl: 2.5rem;\n\n      /* Line heights */\n      --lumo-line-height-xs: 1.25;\n      --lumo-line-height-s: 1.375;\n      --lumo-line-height-m: 1.625;\n    }\n\n  </style>\n</custom-style><dom-module id="lumo-typography">\n  <template>\n    <style>\n      html {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      /* Can’t combine with the above selector because that doesn’t work in browsers without native shadow dom */\n      :host {\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size, var(--lumo-font-size-m));\n        line-height: var(--lumo-line-height-m);\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      small,\n      [theme~="font-size-s"] {\n        font-size: var(--lumo-font-size-s);\n        line-height: var(--lumo-line-height-s);\n      }\n\n      [theme~="font-size-xs"] {\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n      }\n\n      h1,\n      h2,\n      h3,\n      h4,\n      h5,\n      h6 {\n        font-weight: 600;\n        line-height: var(--lumo-line-height-xs);\n        margin-top: 1.25em;\n      }\n\n      h1 {\n        font-size: var(--lumo-font-size-xxxl);\n        margin-bottom: 0.75em;\n      }\n\n      h2 {\n        font-size: var(--lumo-font-size-xxl);\n        margin-bottom: 0.5em;\n      }\n\n      h3 {\n        font-size: var(--lumo-font-size-xl);\n        margin-bottom: 0.5em;\n      }\n\n      h4 {\n        font-size: var(--lumo-font-size-l);\n        margin-bottom: 0.5em;\n      }\n\n      h5 {\n        font-size: var(--lumo-font-size-m);\n        margin-bottom: 0.25em;\n      }\n\n      h6 {\n        font-size: var(--lumo-font-size-xs);\n        margin-bottom: 0;\n        text-transform: uppercase;\n        letter-spacing: 0.03em;\n      }\n\n      p,\n      blockquote {\n        margin-top: 0.5em;\n        margin-bottom: 0.75em;\n      }\n\n      a {\n        text-decoration: none;\n      }\n\n      a:hover {\n        text-decoration: underline;\n      }\n\n      hr {\n        display: block;\n        align-self: stretch;\n        height: 1px;\n        border: 0;\n        padding: 0;\n        margin: var(--lumo-space-s) calc(var(--lumo-border-radius-m) / 2);\n        background-color: var(--lumo-contrast-10pct);\n      }\n\n      blockquote {\n        border-left: 2px solid var(--lumo-contrast-30pct);\n      }\n\n      b,\n      strong {\n        font-weight: 600;\n      }\n\n      /* RTL specific styles */\n\n      blockquote[dir="rtl"] {\n        border-left: none;\n        border-right: 2px solid var(--lumo-contrast-30pct);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(n.content)},,function(e,t,a){"use strict";a.d(t,"b",(function(){return h})),a.d(t,"a",(function(){return c}));a(37);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var n=!1,i=[],o=[];function r(){n=!0,requestAnimationFrame((function(){n=!1,s(i),setTimeout((function(){!function(e){for(var t=0,a=e.length;t<a;t++)l(e.shift())}(o)}))}))}function s(e){for(;e.length;)l(e.shift())}function l(e){var t=e[0],a=e[1],n=e[2];try{a.apply(t,n)}catch(e){setTimeout(()=>{throw e})}}function h(e,t,a){n||r(),i.push([e,t,a])}function c(e,t,a){n||r(),o.push([e,t,a])}},,function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));a(37);var n=a(73),i=a(28),o={},r={};function s(e,t){o[e]=r[e.toLowerCase()]=t}function l(e){return o[e]||r[e.toLowerCase()]}class h extends HTMLElement{static get observedAttributes(){return["id"]}static import(e,t){if(e){var a=l(e);return a&&t?a.querySelector(t):a}return null}attributeChangedCallback(e,t,a,n){t!==a&&this.register()}get assetpath(){if(!this.__assetpath){var e=window.HTMLImports&&HTMLImports.importForElement?HTMLImports.importForElement(this)||document:this.ownerDocument,t=Object(n.c)(this.getAttribute("assetpath")||"",e.baseURI);this.__assetpath=Object(n.a)(t)}return this.__assetpath}register(e){if(e=e||this.id){if(i.f&&void 0!==l(e))throw s(e,null),new Error(`strictTemplatePolicy: dom-module ${e} re-registered`);this.id=e,s(e,this),(t=this).querySelector("style")&&console.warn("dom-module %s has style outside template",t.id)}var t}}h.prototype.modules=o,customElements.define("dom-module",h)},,function(e,t,a){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a=function(e,t){var a=e[1]||"",n=e[3];if(!n)return a;if(t&&"function"==typeof btoa){var i=(r=n,s=btoa(unescape(encodeURIComponent(JSON.stringify(r)))),l="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),"/*# ".concat(l," */")),o=n.sources.map((function(e){return"/*# sourceURL=".concat(n.sourceRoot||"").concat(e," */")}));return[a].concat(o).concat([i]).join("\n")}var r,s,l;return[a].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(a,"}"):a})).join("")},t.i=function(e,a,n){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(n)for(var o=0;o<this.length;o++){var r=this[o][0];null!=r&&(i[r]=!0)}for(var s=0;s<e.length;s++){var l=[].concat(e[s]);n&&i[l[0]]||(a&&(l[2]?l[2]="".concat(a," and ").concat(l[2]):l[2]=a),t.push(l))}},t}},function(e,t,a){"use strict";a.d(t,"c",(function(){return o})),a.d(t,"a",(function(){return i})),a.d(t,"b",(function(){return s}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var n,i,o=!(window.ShadyDOM&&window.ShadyDOM.inUse);function r(e){n=(!e||!e.shimcssproperties)&&(o||Boolean(!navigator.userAgent.match(/AppleWebKit\/601|Edge\/15/)&&window.CSS&&CSS.supports&&CSS.supports("box-shadow","0 0 0 var(--foo)")))}window.ShadyCSS&&void 0!==window.ShadyCSS.cssBuild&&(i=window.ShadyCSS.cssBuild),window.ShadyCSS&&void 0!==window.ShadyCSS.nativeCss?n=window.ShadyCSS.nativeCss:window.ShadyCSS?(r(window.ShadyCSS),window.ShadyCSS=void 0):r(window.WebComponents&&window.WebComponents.flags);var s=n},,function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var n=class{static _getISOWeekNumber(e){var t=e.getDay();0===t&&(t=7);var a=4-t,n=new Date(e.getTime()+24*a*3600*1e3),i=new Date(0,0);i.setFullYear(n.getFullYear());var o=n.getTime()-i.getTime(),r=Math.round(o/864e5);return Math.floor(r/7+1)}static _dateEquals(e,t){return e instanceof Date&&t instanceof Date&&e.getFullYear()===t.getFullYear()&&e.getMonth()===t.getMonth()&&e.getDate()===t.getDate()}static _dateAllowed(e,t,a){return(!t||e>=t)&&(!a||e<=a)}static _getClosestDate(e,t){return t.filter(e=>void 0!==e).reduce((t,a)=>a?t?Math.abs(e.getTime()-a.getTime())<Math.abs(t.getTime()-e.getTime())?a:t:a:t)}static _extractDateParts(e){return{day:e.getDate(),month:e.getMonth(),year:e.getFullYear()}}}},,,function(e,t,a){"use strict";a(110),a(75);var n=document.createElement("template");n.innerHTML="<custom-style>\n  <style>\n    html {\n      --lumo-size-xs: 1.625rem;\n      --lumo-size-s: 1.875rem;\n      --lumo-size-m: 2.25rem;\n      --lumo-size-l: 2.75rem;\n      --lumo-size-xl: 3.5rem;\n\n      /* Icons */\n      --lumo-icon-size-s: 1.25em;\n      --lumo-icon-size-m: 1.5em;\n      --lumo-icon-size-l: 2.25em;\n      /* For backwards compatibility */\n      --lumo-icon-size: var(--lumo-icon-size-m);\n    }\n  </style>\n</custom-style>",document.head.appendChild(n.content)},,function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n,i=a(115),o=[];new MutationObserver((function(){var e=s();o.forEach(t=>{r(t,e)})})).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]});var r=function(e,t){t?e.setAttribute("dir",t):e.removeAttribute("dir")},s=function(){return document.documentElement.getAttribute("dir")},l=e=>class extends e{static get properties(){return{dir:{type:String,readOnly:!0}}}static finalize(){super.finalize(),n||(n=i.a.detectScrollType())}connectedCallback(){super.connectedCallback(),this.hasAttribute("dir")||(this.__subscribe(),r(this,s()))}attributeChangedCallback(e,t,a){if(super.attributeChangedCallback(e,t,a),"dir"===e){var n=a===s()&&-1===o.indexOf(this),i=!a&&t&&-1===o.indexOf(this),l=a!==s()&&t===s();n||i?(this.__subscribe(),r(this,s())):l&&this.__subscribe(!1)}}disconnectedCallback(){super.disconnectedCallback(),this.__subscribe(!1),this.removeAttribute("dir")}__subscribe(e=!0){e?-1===o.indexOf(this)&&o.push(this):o.indexOf(this)>-1&&o.splice(o.indexOf(this),1)}__getNormalizedScrollLeft(e){return i.a.getNormalizedScrollLeft(n,this.getAttribute("dir")||"ltr",e)}__setNormalizedScrollLeft(e,t){return i.a.setNormalizedScrollLeft(n,this.getAttribute("dir")||"ltr",e,t)}}},,function(e,t,a){"use strict";a.d(t,"p",(function(){return h})),a.d(t,"m",(function(){return c})),a.d(t,"j",(function(){return d})),a.d(t,"f",(function(){return p})),a.d(t,"a",(function(){return u})),a.d(t,"c",(function(){return v})),a.d(t,"b",(function(){return m})),a.d(t,"e",(function(){return g})),a.d(t,"l",(function(){return b})),a.d(t,"n",(function(){return _})),a.d(t,"q",(function(){return y})),a.d(t,"i",(function(){return w})),a.d(t,"g",(function(){return z})),a.d(t,"o",(function(){return M})),a.d(t,"h",(function(){return x})),a.d(t,"d",(function(){return A})),a.d(t,"k",(function(){return C}));var n=a(58),i=a(86),o=a(88),r=new Set;function s(e){var t=e.textContent;if(!r.has(t)){r.add(t);var a=e.cloneNode(!0);document.head.appendChild(a)}}function l(e){return e.hasAttribute("shady-unscoped")}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function h(e,t){return e?("string"==typeof e&&(e=Object(i.b)(e)),t&&p(e,t),Object(i.d)(e,n.b)):""}function c(e){return!e.__cssRules&&e.textContent&&(e.__cssRules=Object(i.b)(e.textContent)),e.__cssRules||null}function d(e){return Boolean(e.parent)&&e.parent.type===i.e.KEYFRAMES_RULE}function p(e,t,a,n){if(e){var r=!1,s=e.type;if(n&&s===i.e.MEDIA_RULE){var l=e.selector.match(o.e);l&&(window.matchMedia(l[1]).matches||(r=!0))}s===i.e.STYLE_RULE?t(e):a&&s===i.e.KEYFRAMES_RULE?a(e):s===i.e.MIXIN_RULE&&(r=!0);var h=e.rules;if(h&&!r)for(var c,d=0,u=h.length;d<u&&(c=h[d]);d++)p(c,t,a,n)}}function u(e,t,a,n){var i=function(e,t){var a=document.createElement("style");t&&a.setAttribute("scope",t);return a.textContent=e,a}(e,t);return m(i,a,n),i}var f=null;function v(e){var t=document.createComment(" Shady DOM styles for "+e+" "),a=f?f.nextSibling:null,n=document.head;return n.insertBefore(t,a||n.firstChild),f=t,t}function m(e,t,a){t=t||document.head;var n=a&&a.nextSibling||t.firstChild;(t.insertBefore(e,n),f)?e.compareDocumentPosition(f)===Node.DOCUMENT_POSITION_PRECEDING&&(f=e):f=e}function g(e,t){for(var a=0,n=t,i=e.length;n<i;n++)if("("===e[n])a++;else if(")"===e[n]&&0==--a)return n;return-1}function b(e,t){var a=e.indexOf("var(");if(-1===a)return t(e,"","","");var n=g(e,a+3),i=e.substring(a+4,n),o=e.substring(0,a),r=b(e.substring(n+1),t),s=i.indexOf(",");return-1===s?t(o,i.trim(),"",r):t(o,i.substring(0,s).trim(),i.substring(s+1).trim(),r)}function _(e,t){n.c?e.setAttribute("class",t):window.ShadyDOM.nativeMethods.setAttribute.call(e,"class",t)}var y=window.ShadyDOM&&window.ShadyDOM.wrap||(e=>e);function w(e){var t=e.localName,a="",n="";return t?t.indexOf("-")>-1?a=t:(n=t,a=e.getAttribute&&e.getAttribute("is")||""):(a=e.is,n=e.extends),{is:a,typeExtension:n}}function z(e){for(var t=[],a=e.querySelectorAll("style"),i=0;i<a.length;i++){var o=a[i];l(o)?n.c||(s(o),o.parentNode.removeChild(o)):(t.push(o.textContent),o.parentNode.removeChild(o))}return t.join("").trim()}function M(e){for(var t=[],a="",n=0;n>=0&&n<e.length;n++)if("("===e[n]){var i=g(e,n);a+=e.slice(n,i+1),n=i}else","===e[n]?(t.push(a),a=""):a+=e[n];return a&&t.push(a),t}function x(e){if(void 0!==n.a)return n.a;if(void 0===e.__cssBuild){var t=e.getAttribute("css-build");if(t)e.__cssBuild=t;else{var a=function(e){var t="template"===e.localName?e.content.firstChild:e.firstChild;if(t instanceof Comment){var a=t.textContent.trim().split(":");if("css-build"===a[0])return a[1]}return""}(e);""!==a&&function(e){var t="template"===e.localName?e.content.firstChild:e.firstChild;t.parentNode.removeChild(t)}(e),e.__cssBuild=a}}return e.__cssBuild||""}function A(e){return""!==x(e)}function C(e=""){return!(""===e||!n.b)&&(n.c?"shadow"===e:"shady"===e)}},,function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var n=!1;window.addEventListener("keydown",()=>{n=!0},{capture:!0}),window.addEventListener("mousedown",()=>{n=!1},{capture:!0});var i=e=>class extends((e=>class extends e{static get properties(){var e={tabindex:{type:Number,value:0,reflectToAttribute:!0,observer:"_tabindexChanged"}};return window.ShadyDOM&&(e.tabIndex=e.tabindex),e}})(e)){static get properties(){return{autofocus:{type:Boolean},_previousTabIndex:{type:Number},disabled:{type:Boolean,observer:"_disabledChanged",reflectToAttribute:!0},_isShiftTabbing:{type:Boolean}}}ready(){this.addEventListener("focusin",e=>{e.composedPath()[0]===this?this.contains(e.relatedTarget)||this._focus():-1===e.composedPath().indexOf(this.focusElement)||this.disabled||this._setFocused(!0)}),this.addEventListener("focusout",e=>this._setFocused(!1)),super.ready();var e=e=>{e.composed||e.target.dispatchEvent(new CustomEvent(e.type,{bubbles:!0,composed:!0,cancelable:!1}))};this.shadowRoot.addEventListener("focusin",e),this.shadowRoot.addEventListener("focusout",e),this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&9===e.keyCode)if(e.shiftKey)this._isShiftTabbing=!0,HTMLElement.prototype.focus.apply(this),this._setFocused(!1),setTimeout(()=>this._isShiftTabbing=!1,0);else{var t=window.navigator.userAgent.match(/Firefox\/(\d\d\.\d)/);if(t&&parseFloat(t[1])>=63&&parseFloat(t[1])<66&&this.parentNode&&this.nextSibling){var a=document.createElement("input");a.style.position="absolute",a.style.opacity="0",a.tabIndex=this.tabIndex,this.parentNode.insertBefore(a,this.nextSibling),a.focus(),a.addEventListener("focusout",()=>this.parentNode.removeChild(a))}}}),this.autofocus&&!this.disabled&&window.requestAnimationFrame(()=>{this._focus(),this._setFocused(!0),this.setAttribute("focus-ring","")})}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("focused")&&this._setFocused(!1)}_setFocused(e){e?this.setAttribute("focused",""):this.removeAttribute("focused"),e&&n?this.setAttribute("focus-ring",""):this.removeAttribute("focus-ring")}get focusElement(){return window.console.warn(`Please implement the 'focusElement' property in <${this.localName}>`),this}_focus(){this.focusElement&&!this._isShiftTabbing&&(this.focusElement.focus(),this._setFocused(!0))}focus(){this.focusElement&&!this.disabled&&(this.focusElement.focus(),this._setFocused(!0))}blur(){this.focusElement&&(this.focusElement.blur(),this._setFocused(!1))}_disabledChanged(e){this.focusElement.disabled=e,e?(this.blur(),this._previousTabIndex=this.tabindex,this.tabindex=-1,this.setAttribute("aria-disabled","true")):(void 0!==this._previousTabIndex&&(this.tabindex=this._previousTabIndex),this.removeAttribute("aria-disabled"))}_tabindexChanged(e){void 0!==e&&(this.focusElement.tabIndex=e),this.disabled&&this.tabindex&&(-1!==this.tabindex&&(this._previousTabIndex=this.tabindex),this.tabindex=e=void 0),window.ShadyDOM&&this.setProperties({tabIndex:e,tabindex:e})}click(){this.disabled||super.click()}}},,function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(80),i=(a(37),function(e){var t;return t="function"==typeof e?e:i.Class(e),customElements.define(t.is,t),t});i.Class=n.a},,function(e,t,a){"use strict";a.d(t,"c",(function(){return s})),a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return h}));a(37);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var n,i,o=/(url\()([^)]*)(\))/g,r=/(^\/)|(^#)|(^[\w-\d]*:)/;function s(e,t){if(e&&r.test(e))return e;if(void 0===n){n=!1;try{var a=new URL("b","http://a");a.pathname="c%20d",n="http://a/c%20d"===a.href}catch(e){}}return t||(t=document.baseURI||window.location.href),n?new URL(e,t).href:(i||((i=document.implementation.createHTMLDocument("temp")).base=i.createElement("base"),i.head.appendChild(i.base),i.anchor=i.createElement("a"),i.body.appendChild(i.anchor)),i.base.href=t,i.anchor.href=e,i.anchor.href||e)}function l(e,t){return e.replace(o,(function(e,a,n,i){return a+"'"+s(n.replace(/["']/g,""),t)+"'"+i}))}function h(e){return e.substring(0,e.lastIndexOf("/")+1)}},,function(e,t,a){"use strict";var n=a(188),i=a(102),o=a(58),r=new n.a;window.ShadyCSS||(window.ShadyCSS={prepareTemplate(e,t,a){},prepareTemplateDom(e,t){},prepareTemplateStyles(e,t,a){},styleSubtree(e,t){r.processStyles(),Object(i.c)(e,t)},styleElement(e){r.processStyles()},styleDocument(e){r.processStyles(),Object(i.c)(document.body,e)},getComputedStyleValue:(e,t)=>Object(i.b)(e,t),flushCustomStyles(){},nativeCss:o.b,nativeShadow:o.c,cssBuild:o.a}),window.ShadyCSS.CustomStyleInterface=r;var s=a(117),l=window.ShadyCSS.CustomStyleInterface;
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/class h extends HTMLElement{constructor(){super(),this._style=null,l.addCustomStyle(this)}getStyle(){if(this._style)return this._style;var e=this.querySelector("style");if(!e)return null;this._style=e;var t=e.getAttribute("include");return t&&(e.removeAttribute("include"),e.textContent=Object(s.a)(t)+e.textContent),this.ownerDocument!==window.document&&window.document.head.appendChild(this),this._style}}window.customElements.define("custom-style",h)},,,function(e,t,a){"use strict";a(75),a(110);var n=document.createElement("template");n.innerHTML='<custom-style>\n  <style>\n    @font-face {\n      font-family: \'lumo-icons\';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAABEcAAsAAAAAIiwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABHU1VCAAABCAAAADsAAABUIIslek9TLzIAAAFEAAAAQwAAAFZAIUuKY21hcAAAAYgAAAD4AAADrsCU8d5nbHlmAAACgAAAC2MAABd4h9To2WhlYWQAAA3kAAAAMAAAADZa/6SsaGhlYQAADhQAAAAdAAAAJAbpA35obXR4AAAONAAAABAAAACspBAAAGxvY2EAAA5EAAAAWAAAAFh55IAsbWF4cAAADpwAAAAfAAAAIAFKAXBuYW1lAAAOvAAAATEAAAIuUUJZCHBvc3QAAA/wAAABKwAAAelm8SzVeJxjYGRgYOBiMGCwY2BycfMJYeDLSSzJY5BiYGGAAJA8MpsxJzM9kYEDxgPKsYBpDiBmg4gCACY7BUgAeJxjYGS+yDiBgZWBgamKaQ8DA0MPhGZ8wGDIyAQUZWBlZsAKAtJcUxgcXjG+0mIO+p/FEMUcxDANKMwIkgMABn8MLQB4nO3SWW6DMABF0UtwCEnIPM/zhLK8LqhfXRybSP14XUYtHV9hGYQwQBNIo3cUIPkhQeM7rib1ekqnXg981XuC1qvy84lzojleh3puxL0hPjGjRU473teloEefAUNGjJkwZcacBUtWrNmwZceeA0dOnLlw5cadB09elPGhGf+j0NTI/65KfXerT6JhqKnpRKtgOpuqaTrtKjPUlqHmhto21I7pL6i6hlqY3q7qGWrfUAeGOjTUkaGODXViqFNDnRnq3FAXhro01JWhrg11Y6hbQ90Z6t5QD4Z6NNSToZ4N9WKoV0O9GerdUB+G+jTUl6GWRvkL24BkEXictVh9bFvVFb/nxvbz+7Rf/N6zHcd2bCfP+Wgc1Z9N0jpNnEL6kbRVS6HA2hQYGh9TGR1CbCqa2rXrWOkQE/sHNJgmtZvoVNZqE1B1DNHxzTQxCehUTYiJTQyENui0qSLezr3PduyQfgmRWOfde8+9551z7rnn/O4jLoJ/bRP0UaKQMLFJjpBAvphLZC3Dk0ok7WBzR2/upJs7Ryw/nfFbln/uuN/apCvwrKLrSvUqRufbm5pn0fs0w4gYxnGVP6qHnO4bWiDQGQgwtS6lm3lB3QoX1M2vwEmuzirF39y+Es2+DJ8d1pkyqBIqoze3D1+Zz4DrFoazxI8dWwMrDlZ2DMqQAR9AROsJU+2cmlTPazTco52F1xTa2a2+K8vvq92dVHmtLoPeQX/AZPRYGthDYOeZjBjKoFsVGulR3lWU95WeCK44qHU7MhWUGUKZDT3oKUcG2GWuh+EDDfUYA/jhAhl0TOsJNYSEu7mQmi3UzfXwZKA4BsVsHLXQYGgRW95uEtpJ1Vfn9XiLriRBlFEqxsDjA09yCNUoQxxwd7KWSTt2y3GTKiflqHRSoWZc3m11Wa/fJdFgXD4sSYfleJBKd8GMz7J8dZn/cGRCcKGDnA2Ge3fKzcvlnTDNthGWLXzX/WaXtUAmRgeLlHSr30r0G9UTXMb0AtmwzOoy73fkSlHZkduw/TYuU9cAD4YutPoxTTsA3797wVr4Z/1NC5zARHr4vtxJjxIfiZMhMkbWk+14BnJZKwqGZwDfswLyxWDSg11rFLJF7Nopxjd1h1/QOT+oezgfu3Yq+Hk+duf5x+40o1GTkaIgikK/IEnC6aYxCUBaZJSN4XTYFjU/YMNIKqJwhDGOCCI8FDXnXmXjtGhGJyShqjAOnBOkW2JG9S7GgYeMWAU5JzhnWmBOaOM+CKEPoqSfFDC2Unq+DLlUgUVUFFLZGJg6jtlojsdsa8kPObPuJdi5dnBdBsLJMGTWDa4t2JvtwuPo9s+Y86suv/W33QG1rAaOAUV+vx4K6f2D04PVKlC7WLSrZzAi45ZV6lIC7WoXqmRyvUqoVwrzUoVsIjeTXWQv+RH5GTlBXiB/In8ln0IbBCAFOajAJrgZYyOHWqOfUe/aHjI12R6OQo1jCgt215l+4f6XPb+0MNou0V+43n2F77tSfRb24d7zitgnKmvYHs69zugaPvBwv6ioXkb2LdL65Atw51uLkXlu1bhMMRcXSPcYoqKIRlh34lQP8/5JbuUFye4vxD6/6MxFF11C0uVLr9Ulgw44tS3pMViNLUExbycFgLIct+QDMibRimx1ydUz8FXZiuOIDBOMVX2nUZc+huNE5XUJ81uiJoiabwqaVF0uacKbau/pl4R2VW0XXlJra6boVrYG646TF5NYzwy4vjENVrDlcNpZPl8DH6XX8XWCx0mvWVZY6KFLrvsY66/zPict5FnxaNUR/juvZCM3TvD60E2W1tZizbXTPDuabcm0nbbzpWKpmA1ayBQ8giedLUM+A0kNjBjQjmuYz7YrgIXYvmF63ZLBwSXrpn9Tb9wwdd/U1H0PMQK3XcO8ul3WT7PyPPdpy0TemKxNRcJNauiXJnnUDpUppQWs4SnUIy0EESGYqJYQLGHxzaGWwVIaS6Y7mQFM8ZjYDQ3axjf61SWjU33JwOZA1pwaG1L9mzf71aHRdX1JHw6Fp0aXhNwbqyeGNg4NbdzGCBxoz4ZXjy4Nu69Zr6sDY6vMrLU5nA1P8JkbdWXJ6ERfMryvNh1JfQ9+T4dIhGvK9w3dxjBBzatsQ/MlOHVIDnYpDz6odAXlQ01t2Pa5Iafd8MMpxAeDKP0C6CjgVLT5osB6icUx01lWjXxzT/GyRF2welEM5Z/7jG3VjQ1SrNn5IbyzOG5dobB3/QHxyZvsXcoz8IoEwS7plCg+zxHQk424q9BfEpkESJbFHQusDBSWFkuBkoPO0kLKwRVYjxGXlHTcTDQMJ/H6TX9afkO7mnraTO1feTnZAXLu4cp7HAXMmNG1yeFk9TgS/NHhZR/4QoBTr/ZB+6hCgyl15Nq1UbN6nE1/ZnP1U2cizCBpvs8cJQZJ4LkYx5N/yZPAUZNQQ0V4f3BQllWrK3YRzl30dOT6RVn2upNur6woSa8CqpdT/aKnBM4o3jNur9d9xqtUT6veBEt9Ca9at+ERzEEhUkR8sa5mQ4aVvJoVeEA8zI4ei5mULXFGyU7z/6TAeYLVcpzSWZY8PYYF5yrTV60sT0+XV141vX++Wf16V2bFeGVPZXxFpkvyeKTWLlzfW0mnKxsY6Y3294/0998SCfX1blm5pbcvFGlq/r07MRAMhYIDiW5JFKWW3vdrEpCsZSJG+om7Zu/PSScZJhNkLbmW5Wsr12pWqW5zKtlwRS4bFOxUw17mCzy6lskCDl1WYOGWDYrADrMA7BDDweWWNd5koiJnR1dz+ytLP2q0SqPB1lnK2ccB7RYe4FSoPks3iB3t4txTSHctb2sy1ivk0pvHuCNm6w1f6wxv3+OCgN78LqdQnUVh7R0oTAp0zOf2rbW770Vu5C2dIyGdTnHo8zSji7dppj0USoVCz+lhRMTh53Teq9VbGfbjuSbAooSdXayY4PYHg374C6f7gl1B/DXuJ4/QXxOBdJFJspFsI3egpoWUUCjlTIFnNYNl+ZyZKmBeYKGHkD1QyDlhaKbKwKcIJqJ4TLJ2OmdY/JWXae4DdGBw8HZ7eXcgFF2zr2SoalDry5iKqoa0Puhe3hPQ2s3elTYM+MI+n3rK0KgL7/La3GeMLt6m7u912vGnvtORiIa0qBmhqVi+XW9XNBmqb8eVgKzIHfGI5bNoG7X0UCzeISmqIcO/nY8FH7U8avX9fx/ST+hx0sezPw9Qy8Mum3GWf2N4Uy/yIYGVBXbJHWIZp7dfTcptdMTr9Qmq7DaiK/ukqCL4kt4RUfS5XPnMtmT22/mQFqF7emSqtrlu8SVElxDRJrZODkpuwe0VfTfjdEp1f7A7v+fozNBXUJ/6WTuK2TtFlpFVZAZ3LcFvUi1Z2p2YT+EMAkGJVStOzLTAPg4IqWIAlzRSjOBkl2zxj3TKycpzT/MnvX3uaSMWM+gU0rkXjohhefVRMaps3/kLMSKv23lT23uxQrkQjyOJleMDsdhAnD6ZGElWZ5MjCXzCE/hkWX+WF4knzGhVOyK2eQZekV3eyo0zL8kuYWCnDCvjjhAkcTPOBDXVdoav3HVcFnQjLvtV9S2p0zA6JegPwMQxt+yFb3ll9zGlq/5dRKb3cEyQYoaNYpharJ7xCB7AWxsLY3jjZXY0XsZj0Wjwc9I6PP/dKABnCZaqHpaZEACxk4ZeLZSKNgZABl+lYQX1sJQOSX3n6r410evcoud5JeAGUXVP9H1tZOKejTq4Ono0z0erro1FrnOpohva1d/hTdtVsQdKN5W9RlT3NjD0nznyKNTgKAMfWNWcyodV0IGLPIHOF0o4JyqufaK4z6WIIzuGh3d8c8cwQg8ER+OVxyrjdm8vNuhts4LoOihGxIMuUdgzwiYN7xhh1+oZnJNuTG7gQZvu4XWZ9GAZZjGEubwePqYhtKDTH+9VQkl17/iGybsnJ+8+sKtyPrcll9ty65Zsdst/9iqpEKh7M5VdBxh3csOdNc6tW3I1uyM1PzOXegSOrLFsFNI2O27M+TF2ApnN9MUv5ud6LjxIvEQnHRzxIu4IsA9MLFkJn2tcZoZ7ON7dXe7ujrc8HrusPKamlqXwd77lQUuLpilau4PUMapueBb7irU4RoUXEYXuVuIGlRGmOp+2lNkaRPVziOqmlaZvaqG4dFgSj0jxEJWrv12IUWntmw+rfQarRE0Aph4ocI6nlUlGqs+u3/+T/ethW62PpHp2eHbZstnh/wOO95yDAHicY2BkYGAA4pmJ6QHx/DZfGbiZXwBFGGpUNzQi6P+vmacy3QJyORiYQKIANoULVXicY2BkYGAO+p8FJF8wAAHzVAZGBlSgDQBW9gNvAAAAeJxjYGBgYH4xNDAAzwQmjwAAAAAATgCaAOgBCgEsAU4BcAGaAcQB7gIaApwC6ASaBLwE1gTyBQ4FKgV6BdAF/gZEBmYGtgcYB5AIGAhSCGoI/glGCb4J2goECjwKggq4CvALUAuWC7x4nGNgZGBg0GZMYRBlAAEmIOYCQgaG/2A+AwAYlAG8AHicbZE9TsMwGIbf9A/RSggEYmHxAgtq+jN2ZGj3Dt3T1GlTOXHkuBW9AyfgEByCgTNwCA7BW/NJlVBtyd/jx+8XKwmAa3whwnFE6Ib1OBq44O6Pm6Qb4Rb5QbiNHh6FO/RD4S6eMRHu4RaaT4halzR3eBVu4Apvwk36d+EW+UO4jXt8Cnfov4W7WOBHuIen6MXsCtvPU1vWc73emcSdxIkW2tW5LdUoHp7kTJfaJV6v1PKg6v167H2mMmcLNbWl18ZYVTm71amPN95Xk8EgEx+ntoDBDgUs+siRspaoMef7rukNEriziXNuwS7Hmoe9wggxv+e55IzJMqQTeNYV00scuNbY8+YxrUfGfcaMZb/CNPQe04bT0lThbEuT0sfYhK6K/23Amf3Lx+H24hcj4GScAAAAeJxtjtlugzAQRbkJUEJIuu/7vqR8lGNPAcWx0YAb5e/LklR96EgenSufGY038PqKvf9rhgGG8BEgxA4ijBBjjAQTTLGLPezjAIc4wjFOcIoznOMCl7jCNW5wizvc4wGPeMIzXvCKN7zjAzN8eonQRWZSSaYmjvug6ase98hFltexMJmmVNmV2WBvdNgZUc+ujAWzXW3UDnu1w43asStHc8GpzAXX/py0jqTQZJTgkcxJLpaCF0lD32xNt+43tAsn29Dft02uDKS2cjGUNgsk26qK2lFthYoU27INPqmiDqg5goe0pqR5qSoqMdek/CUZFywL46rEsiImleqiqoMyt4baXlu/1GLdNFf5zbcNmdr1YUWCZe47o+zUmb/DoStbw3cVsef9ALjjiPQA) format(\'woff\');\n      font-weight: normal;\n      font-style: normal;\n    }\n\n    html {\n      --lumo-icons-align-center: "\\ea01";\n      --lumo-icons-align-left: "\\ea02";\n      --lumo-icons-align-right: "\\ea03";\n      --lumo-icons-angle-down: "\\ea04";\n      --lumo-icons-angle-left: "\\ea05";\n      --lumo-icons-angle-right: "\\ea06";\n      --lumo-icons-angle-up: "\\ea07";\n      --lumo-icons-arrow-down: "\\ea08";\n      --lumo-icons-arrow-left: "\\ea09";\n      --lumo-icons-arrow-right: "\\ea0a";\n      --lumo-icons-arrow-up: "\\ea0b";\n      --lumo-icons-bar-chart: "\\ea0c";\n      --lumo-icons-bell: "\\ea0d";\n      --lumo-icons-calendar: "\\ea0e";\n      --lumo-icons-checkmark: "\\ea0f";\n      --lumo-icons-chevron-down: "\\ea10";\n      --lumo-icons-chevron-left: "\\ea11";\n      --lumo-icons-chevron-right: "\\ea12";\n      --lumo-icons-chevron-up: "\\ea13";\n      --lumo-icons-clock: "\\ea14";\n      --lumo-icons-cog: "\\ea15";\n      --lumo-icons-cross: "\\ea16";\n      --lumo-icons-download: "\\ea17";\n      --lumo-icons-dropdown: "\\ea18";\n      --lumo-icons-edit: "\\ea19";\n      --lumo-icons-error: "\\ea1a";\n      --lumo-icons-eye: "\\ea1b";\n      --lumo-icons-eye-disabled: "\\ea1c";\n      --lumo-icons-menu: "\\ea1d";\n      --lumo-icons-minus: "\\ea1e";\n      --lumo-icons-ordered-list: "\\ea1f";\n      --lumo-icons-phone: "\\ea20";\n      --lumo-icons-photo: "\\ea21";\n      --lumo-icons-play: "\\ea22";\n      --lumo-icons-plus: "\\ea23";\n      --lumo-icons-redo: "\\ea24";\n      --lumo-icons-reload: "\\ea25";\n      --lumo-icons-search: "\\ea26";\n      --lumo-icons-undo: "\\ea27";\n      --lumo-icons-unordered-list: "\\ea28";\n      --lumo-icons-upload: "\\ea29";\n      --lumo-icons-user: "\\ea2a";\n    }\n  </style>\n</custom-style>',document.head.appendChild(n.content)},,function(e,t,a){"use strict";a.d(t,"b",(function(){return l})),a.d(t,"a",(function(){return p}));var n=a(121),i=a(28),o={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,listeners:!0,hostAttributes:!0},r={attached:!0,detached:!0,ready:!0,created:!0,beforeRegister:!0,registered:!0,attributeChanged:!0,behaviors:!0,_noAccessors:!0},s=Object.assign({listeners:!0,hostAttributes:!0,properties:!0,observers:!0},r);function l(e,t){return d({},Object(n.a)(t),e)}function h(e,t,a,n){for(var i in function(e,t,a){for(var n=e._noAccessors,i=Object.getOwnPropertyNames(e),o=0;o<i.length;o++){var r=i[o];if(!(r in a))if(n)t[r]=e[r];else{var s=Object.getOwnPropertyDescriptor(e,r);s&&(s.configurable=!0,Object.defineProperty(t,r,s))}}}(t,e,n),o)t[i]&&(a[i]=a[i]||[],a[i].push(t[i]))}function c(e,t){for(var a in t){var n=e[a],i=t[a];e[a]=!("value"in i)&&n&&"value"in n?Object.assign({value:n.value},i):i}}function d(e,t,a){var n,o={};class l extends t{static _finalizeClass(){if(this.hasOwnProperty(JSCompiler_renameProperty("generatedFrom",this))){if(n)for(var t,a=0;a<n.length;a++)(t=n[a]).properties&&this.createProperties(t.properties),t.observers&&this.createObservers(t.observers,t.properties);e.properties&&this.createProperties(e.properties),e.observers&&this.createObservers(e.observers,e.properties),this._prepareTemplate()}else super._finalizeClass()}static get properties(){var t={};if(n)for(var a=0;a<n.length;a++)c(t,n[a].properties);return c(t,e.properties),t}static get observers(){var t=[];if(n)for(var a,i=0;i<n.length;i++)(a=n[i]).observers&&(t=t.concat(a.observers));return e.observers&&(t=t.concat(e.observers)),t}created(){super.created();var e=o.created;if(e)for(var t=0;t<e.length;t++)e[t].call(this)}_registered(){var e=l.prototype;if(!e.hasOwnProperty("__hasRegisterFinished")){e.__hasRegisterFinished=!0,super._registered(),i.b&&p(e);var t=Object.getPrototypeOf(this),a=o.beforeRegister;if(a)for(var n=0;n<a.length;n++)a[n].call(t);if(a=o.registered)for(var r=0;r<a.length;r++)a[r].call(t)}}_applyListeners(){super._applyListeners();var e=o.listeners;if(e)for(var t=0;t<e.length;t++){var a=e[t];if(a)for(var n in a)this._addMethodEventListenerToNode(this,n,a[n])}}_ensureAttributes(){var e=o.hostAttributes;if(e)for(var t=e.length-1;t>=0;t--){var a=e[t];for(var n in a)this._ensureAttribute(n,a[n])}super._ensureAttributes()}ready(){super.ready();var e=o.ready;if(e)for(var t=0;t<e.length;t++)e[t].call(this)}attached(){super.attached();var e=o.attached;if(e)for(var t=0;t<e.length;t++)e[t].call(this)}detached(){super.detached();var e=o.detached;if(e)for(var t=0;t<e.length;t++)e[t].call(this)}attributeChanged(e,t,a){super.attributeChanged();var n=o.attributeChanged;if(n)for(var i=0;i<n.length;i++)n[i].call(this,e,t,a)}}if(a){Array.isArray(a)||(a=[a]);var d=t.prototype.behaviors;n=function e(t,a,n){a=a||[];for(var i=t.length-1;i>=0;i--){var o=t[i];o?Array.isArray(o)?e(o,a):a.indexOf(o)<0&&(!n||n.indexOf(o)<0)&&a.unshift(o):console.warn("behavior is null, check for missing or 404 import")}return a}(a,null,d),l.prototype.behaviors=d?d.concat(a):n}var p=t=>{n&&function(e,t,a){for(var n=0;n<t.length;n++)h(e,t[n],a,s)}(t,n,o),h(t,e,o,r)};return i.b||p(l.prototype),l.generatedFrom=e,l}var p=function(e,t){e||console.warn("Polymer.Class requires `info` argument");var a=t?t(Object(n.a)(HTMLElement)):Object(n.a)(HTMLElement);return(a=d(e,a,e.behaviors)).is=a.prototype.is=e.is,a}},function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a(43);var n=a(39),i=a(28),o=new Set,r={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(o.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach((function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)}),this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():i.h||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=Object(n.a)(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",(function t(){document.removeEventListener("readystatechange",t),e()}))}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach((function(e){e!==this&&e._findParent()}),this):(o.forEach((function(e){e!==this&&e._findParent()}),this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?o.delete(this):o.add(this)}}},,,function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(9),i=a(159),o=a(69),r=a(17),s=a(22),l=a(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class h extends(Object(s.a)(Object(i.a)(Object(o.a)(Object(r.a)(n.a))))){static get template(){return l.a`
    <style include="vaadin-text-field-shared-styles">
      /* polymer-cli linter breaks with empty line */
    </style>

    <div class="vaadin-text-field-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="input">
          <input part="value">
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="helper-text" id="[[_helperTextId]]">
        <slot name="helper">[[helperText]]</slot>
      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-field"}static get version(){return"2.8.6"}static get properties(){return{list:{type:String},pattern:{type:String},title:{type:String}}}}customElements.define(h.is,h)},,function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i})),a.d(t,"d",(function(){return o})),a.d(t,"c",(function(){return r})),a.d(t,"e",(function(){return s}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class n{constructor(){this.start=0,this.end=0,this.previous=null,this.parent=null,this.rules=null,this.parsedCssText="",this.cssText="",this.atRule=!1,this.type=0,this.keyframesName="",this.selector="",this.parsedSelector=""}}function i(e){return function e(t,a){var n=a.substring(t.start,t.end-1);if(t.parsedCssText=t.cssText=n.trim(),t.parent){var i=t.previous?t.previous.end:t.parent.start;n=(n=(n=function(e){return e.replace(/\\([0-9a-f]{1,6})\s/gi,(function(){for(var e=arguments[1],t=6-e.length;t--;)e="0"+e;return"\\"+e}))}(n=a.substring(i,t.start-1))).replace(c.multipleSpaces," ")).substring(n.lastIndexOf(";")+1);var o=t.parsedSelector=t.selector=n.trim();t.atRule=0===o.indexOf(u),t.atRule?0===o.indexOf(p)?t.type=s.MEDIA_RULE:o.match(c.keyframesRule)&&(t.type=s.KEYFRAMES_RULE,t.keyframesName=t.selector.split(c.multipleSpaces).pop()):0===o.indexOf(d)?t.type=s.MIXIN_RULE:t.type=s.STYLE_RULE}var r=t.rules;if(r)for(var l,h=0,f=r.length;h<f&&(l=r[h]);h++)e(l,a);return t}(function(e){var t=new n;t.start=0,t.end=e.length;for(var a=t,i=0,o=e.length;i<o;i++)if(e[i]===l){a.rules||(a.rules=[]);var r=a,s=r.rules[r.rules.length-1]||null;(a=new n).start=i+1,a.parent=r,a.previous=s,r.rules.push(a)}else e[i]===h&&(a.end=i+1,a=a.parent||t);return t}(e=e.replace(c.comments,"").replace(c.port,"")),e)}function o(e,t,a=""){var n="";if(e.cssText||e.rules){var i=e.rules;if(i&&!function(e){var t=e[0];return Boolean(t)&&Boolean(t.selector)&&0===t.selector.indexOf(d)}(i))for(var s,p=0,u=i.length;p<u&&(s=i[p]);p++)n=o(s,t,n);else(n=(n=t?e.cssText:function(e){return function(e){return e.replace(c.mixinApply,"").replace(c.varApply,"")}(e=r(e))}(e.cssText)).trim())&&(n="  "+n+"\n")}return n&&(e.selector&&(a+=e.selector+" "+l+"\n"),a+=n,e.selector&&(a+=h+"\n\n")),a}function r(e){return e.replace(c.customProp,"").replace(c.mixinProp,"")}var s={STYLE_RULE:1,KEYFRAMES_RULE:7,MEDIA_RULE:4,MIXIN_RULE:1e3},l="{",h="}",c={comments:/\/\*[^*]*\*+([^/*][^*]*\*+)*\//gim,port:/@import[^;]*;/gim,customProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?(?:[;\n]|$)/gim,mixinProp:/(?:^[^;\-\s}]+)?--[^;{}]*?:[^{};]*?{[^}]*?}(?:[;\n]|$)?/gim,mixinApply:/@apply\s*\(?[^);]*\)?\s*(?:[;\n]|$)?/gim,varApply:/[^;:]*?:[^;]*?var\([^;]*\)(?:[;\n]|$)?/gim,keyframesRule:/^@[^\s]*keyframes/,multipleSpaces:/\s+/g},d="--",p="@media",u="@"},,function(e,t,a){"use strict";a.d(t,"g",(function(){return n})),a.d(t,"f",(function(){return i})),a.d(t,"h",(function(){return o})),a.d(t,"a",(function(){return r})),a.d(t,"e",(function(){return s})),a.d(t,"b",(function(){return l})),a.d(t,"c",(function(){return h})),a.d(t,"d",(function(){return c}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var n=/(?:^|[;\s{]\s*)(--[\w-]*?)\s*:\s*(?:((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};{])+)|\{([^}]*)\}(?:(?=[;\s}])|$))/gi,i=/(?:^|\W+)@apply\s*\(?([^);\n]*)\)?/gi,o=/(--[\w-]+)\s*([:,;)]|$)/gi,r=/(animation\s*:)|(animation-name\s*:)/,s=/@media\s(.*)/,l=/\{[^}]*\}/g,h="(?:^|[^.#[:])",c="($|[.:[\\s>+~])"},,function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));a(43);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/var n={"U+0008":"backspace","U+0009":"tab","U+001B":"esc","U+0020":"space","U+007F":"del"},i={8:"backspace",9:"tab",13:"enter",27:"esc",33:"pageup",34:"pagedown",35:"end",36:"home",32:"space",37:"left",38:"up",39:"right",40:"down",46:"del",106:"*"},o={shift:"shiftKey",ctrl:"ctrlKey",alt:"altKey",meta:"metaKey"},r=/[a-z0-9*]/,s=/U\+/,l=/^arrow/,h=/^space(bar)?/,c=/^escape$/;function d(e,t){var a="";if(e){var n=e.toLowerCase();" "===n||h.test(n)?a="space":c.test(n)?a="esc":1==n.length?t&&!r.test(n)||(a=n):a=l.test(n)?n.replace("arrow",""):"multiply"==n?"*":n}return a}function p(e,t){return e.key?d(e.key,t):e.detail&&e.detail.key?d(e.detail.key,t):(a=e.keyIdentifier,o="",a&&(a in n?o=n[a]:s.test(a)?(a=parseInt(a.replace("U+","0x"),16),o=String.fromCharCode(a).toLowerCase()):o=a.toLowerCase()),o||function(e){var t="";return Number(e)&&(t=e>=65&&e<=90?String.fromCharCode(32+e):e>=112&&e<=123?"f"+(e-112+1):e>=48&&e<=57?String(e-48):e>=96&&e<=105?String(e-96):i[e]),t}(e.keyCode)||"");var a,o}function u(e,t){return p(t,e.hasModifiers)===e.key&&(!e.hasModifiers||!!t.shiftKey==!!e.shiftKey&&!!t.ctrlKey==!!e.ctrlKey&&!!t.altKey==!!e.altKey&&!!t.metaKey==!!e.metaKey)}function f(e){return e.trim().split(" ").map((function(e){return function(e){return 1===e.length?{combo:e,key:e,event:"keydown"}:e.split("+").reduce((function(e,t){var a=t.split(":"),n=a[0],i=a[1];return n in o?(e[o[n]]=!0,e.hasModifiers=!0):(e.key=n,e.event=i||"keydown"),e}),{combo:e.split(":").shift()})}(e)}))}var v={properties:{keyEventTarget:{type:Object,value:function(){return this}},stopKeyboardEventPropagation:{type:Boolean,value:!1},_boundKeyHandlers:{type:Array,value:function(){return[]}},_imperativeKeyBindings:{type:Object,value:function(){return{}}}},observers:["_resetKeyEventListeners(keyEventTarget, _boundKeyHandlers)"],keyBindings:{},registered:function(){this._prepKeyBindings()},attached:function(){this._listenKeyEventListeners()},detached:function(){this._unlistenKeyEventListeners()},addOwnKeyBinding:function(e,t){this._imperativeKeyBindings[e]=t,this._prepKeyBindings(),this._resetKeyEventListeners()},removeOwnKeyBindings:function(){this._imperativeKeyBindings={},this._prepKeyBindings(),this._resetKeyEventListeners()},keyboardEventMatchesKeys:function(e,t){for(var a=f(t),n=0;n<a.length;++n)if(u(a[n],e))return!0;return!1},_collectKeyBindings:function(){var e=this.behaviors.map((function(e){return e.keyBindings}));return-1===e.indexOf(this.keyBindings)&&e.push(this.keyBindings),e},_prepKeyBindings:function(){for(var e in this._keyBindings={},this._collectKeyBindings().forEach((function(e){for(var t in e)this._addKeyBinding(t,e[t])}),this),this._imperativeKeyBindings)this._addKeyBinding(e,this._imperativeKeyBindings[e]);for(var t in this._keyBindings)this._keyBindings[t].sort((function(e,t){var a=e[0].hasModifiers;return a===t[0].hasModifiers?0:a?-1:1}))},_addKeyBinding:function(e,t){f(e).forEach((function(e){this._keyBindings[e.event]=this._keyBindings[e.event]||[],this._keyBindings[e.event].push([e,t])}),this)},_resetKeyEventListeners:function(){this._unlistenKeyEventListeners(),this.isAttached&&this._listenKeyEventListeners()},_listenKeyEventListeners:function(){this.keyEventTarget&&Object.keys(this._keyBindings).forEach((function(e){var t=this._keyBindings[e],a=this._onKeyBindingEvent.bind(this,t);this._boundKeyHandlers.push([this.keyEventTarget,e,a]),this.keyEventTarget.addEventListener(e,a)}),this)},_unlistenKeyEventListeners:function(){for(var e,t,a,n;this._boundKeyHandlers.length;)t=(e=this._boundKeyHandlers.pop())[0],a=e[1],n=e[2],t.removeEventListener(a,n)},_onKeyBindingEvent:function(e,t){if(this.stopKeyboardEventPropagation&&t.stopPropagation(),!t.defaultPrevented)for(var a=0;a<e.length;a++){var n=e[a][0],i=e[a][1];if(u(n,t)&&(this._triggerKeyHandler(n,i,t),t.defaultPrevented))return}},_triggerKeyHandler:function(e,t,a){var n=Object.create(e);n.keyboardEvent=a;var i=new CustomEvent(e.event,{detail:n,cancelable:!0});this[t].call(this,i),i.defaultPrevented&&a.preventDefault()}}},,function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var n=class{toString(){return""}}},,function(e,t,a){"use strict";
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/t.a={}},function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return s}));a(37);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var n={},i=/-[a-z]/g,o=/([A-Z])/g;function r(e){return n[e]||(n[e]=e.indexOf("-")<0?e:e.replace(i,e=>e[1].toUpperCase()))}function s(e){return n[e]||(n[e]=e.replace(o,"-$1").toLowerCase())}},,,function(e,t,a){"use strict";a.d(t,"a",(function(){return v}));var n=a(9),i=a(49),o=a(53),r=a(24),s=a(17),l=a(65),h=Element.prototype,c=h.matches||h.matchesSelector||h.mozMatchesSelector||h.msMatchesSelector||h.oMatchesSelector||h.webkitMatchesSelector;var d=a(6),p=0,u={},f=e=>{var t="vaadin-overlay-content-"+ ++p,a=document.createElement("template"),n=document.createElement("style");n.textContent=":host { display: block; }"+e,a.content.appendChild(n),window.ShadyCSS&&window.ShadyCSS.prepareTemplate(a,t);var i=class extends HTMLElement{static get is(){return t}constructor(){super(),this.shadowRoot||(this.attachShadow({mode:"open"}),this.shadowRoot.appendChild(document.importNode(a.content,!0)))}connectedCallback(){window.ShadyCSS&&window.ShadyCSS.styleElement(this)}};return customElements.define(i.is,i),u[e]=t,t};
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class v extends(Object(s.a)(Object(l.a)(n.a))){static get template(){return d.a`
    <style>
      :host {
        z-index: 200;
        position: fixed;

        /*
          Despite of what the names say, <vaadin-overlay> is just a container
          for position/sizing/alignment. The actual overlay is the overlay part.
        */

        /*
          Default position constraints: the entire viewport. Note: themes can
          override this to introduce gaps between the overlay and the viewport.
        */
        top: 0;
        right: 0;
        bottom: var(--vaadin-overlay-viewport-bottom);
        left: 0;

        /* Use flexbox alignment for the overlay part. */
        display: flex;
        flex-direction: column; /* makes dropdowns sizing easier */
        /* Align to center by default. */
        align-items: center;
        justify-content: center;

        /* Allow centering when max-width/max-height applies. */
        margin: auto;

        /* The host is not clickable, only the overlay part is. */
        pointer-events: none;

        /* Remove tap highlight on touch devices. */
        -webkit-tap-highlight-color: transparent;

        /* CSS API for host */
        --vaadin-overlay-viewport-bottom: 0;
      }

      :host([hidden]),
      :host(:not([opened]):not([closing])) {
        display: none !important;
      }

      [part="overlay"] {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
        pointer-events: auto;

        /* Prevent overflowing the host in MSIE 11 */
        max-width: 100%;
        box-sizing: border-box;

        -webkit-tap-highlight-color: initial; /* reenable tap highlight inside */
      }

      [part="backdrop"] {
        z-index: -1;
        content: "";
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        pointer-events: auto;
      }
    </style>

    <div id="backdrop" part="backdrop" hidden\$="{{!withBackdrop}}"></div>
    <div part="overlay" id="overlay" tabindex="0">
      <div part="content" id="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-overlay"}static get properties(){return{opened:{type:Boolean,notify:!0,observer:"_openedChanged",reflectToAttribute:!0},owner:Element,renderer:Function,template:{type:Object,notify:!0},instanceProps:{type:Object},content:{type:Object,notify:!0},withBackdrop:{type:Boolean,value:!1,reflectToAttribute:!0},model:Object,modeless:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_modelessChanged"},hidden:{type:Boolean,reflectToAttribute:!0,observer:"_hiddenChanged"},focusTrap:{type:Boolean,value:!1},restoreFocusOnClose:{type:Boolean,value:!1},_mouseDownInside:{type:Boolean},_mouseUpInside:{type:Boolean},_instance:{type:Object},_originalContentPart:Object,_contentNodes:Array,_oldOwner:Element,_oldModel:Object,_oldTemplate:Object,_oldInstanceProps:Object,_oldRenderer:Object,_oldOpened:Boolean}}static get observers(){return["_templateOrRendererChanged(template, renderer, owner, model, instanceProps, opened)"]}constructor(){super(),this._boundMouseDownListener=this._mouseDownListener.bind(this),this._boundMouseUpListener=this._mouseUpListener.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this),this._boundKeydownListener=this._keydownListener.bind(this),this._observer=new r.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)}),this._boundIronOverlayCanceledListener=this._ironOverlayCanceled.bind(this),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}ready(){super.ready(),this._observer.flush(),this.addEventListener("click",()=>{}),this.$.backdrop.addEventListener("click",()=>{})}_detectIosNavbar(){if(this.opened){var e=window.innerHeight,t=window.innerWidth>e,a=document.documentElement.clientHeight;t&&a>e?this.style.setProperty("--vaadin-overlay-viewport-bottom",a-e+"px"):this.style.setProperty("--vaadin-overlay-viewport-bottom","0")}}_setTemplateFromNodes(e){this.template=e.filter(e=>e.localName&&"template"===e.localName)[0]||this.template}close(e){var t=new CustomEvent("vaadin-overlay-close",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),t.defaultPrevented||(this.opened=!1)}connectedCallback(){super.connectedCallback(),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))}disconnectedCallback(){super.disconnectedCallback(),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener)}_ironOverlayCanceled(e){e.preventDefault()}_mouseDownListener(e){this._mouseDownInside=e.composedPath().indexOf(this.$.overlay)>=0}_mouseUpListener(e){this._mouseUpInside=e.composedPath().indexOf(this.$.overlay)>=0}_outsideClickListener(e){if(-1!==e.composedPath().indexOf(this.$.overlay)||this._mouseDownInside||this._mouseUpInside)return this._mouseDownInside=!1,void(this._mouseUpInside=!1);if(this._last){var t=new CustomEvent("vaadin-overlay-outside-click",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_keydownListener(e){if(this._last)if("Tab"===e.key&&this.focusTrap&&!e.defaultPrevented)this._cycleTab(e.shiftKey?-1:1),e.preventDefault();else if("Escape"===e.key||"Esc"===e.key){var t=new CustomEvent("vaadin-overlay-escape-press",{bubbles:!0,cancelable:!0,detail:{sourceEvent:e}});this.dispatchEvent(t),this.opened&&!t.defaultPrevented&&this.close(e)}}_ensureTemplatized(){this._setTemplateFromNodes(Array.from(this.children))}_openedChanged(e,t){this._instance||this._ensureTemplatized(),e?(this.__restoreFocusNode=this._getActiveElement(),this._animatedOpening(),Object(o.a)(this,()=>{this.focusTrap&&!this.contains(document._activeElement||document.activeElement)&&this._cycleTab(0,0);var e=new CustomEvent("vaadin-overlay-open",{bubbles:!0});this.dispatchEvent(e)}),this.modeless||this._addGlobalListeners()):t&&(this._animatedClosing(),this.modeless||this._removeGlobalListeners())}_hiddenChanged(e){e&&this.hasAttribute("closing")&&this._flushAnimation("closing")}_shouldAnimate(){var e=getComputedStyle(this).getPropertyValue("animation-name");return!("none"===getComputedStyle(this).getPropertyValue("display"))&&e&&"none"!=e}_enqueueAnimation(e,t){var a=`__${e}Handler`,n=e=>{e&&e.target!==this||(t(),this.removeEventListener("animationend",n),delete this[a])};this[a]=n,this.addEventListener("animationend",n)}_flushAnimation(e){var t=`__${e}Handler`;"function"==typeof this[t]&&this[t]()}_animatedOpening(){this.parentNode===document.body&&this.hasAttribute("closing")&&this._flushAnimation("closing"),this._attachOverlay(),this.modeless||this._enterModalState(),this.setAttribute("opening","");var e=()=>{document.addEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this.removeAttribute("opening")};this._shouldAnimate()?this._enqueueAnimation("opening",e):e()}_attachOverlay(){this._placeholder=document.createComment("vaadin-overlay-placeholder"),this.parentNode.insertBefore(this._placeholder,this),document.body.appendChild(this),this.bringToFront()}_animatedClosing(){if(this.hasAttribute("opening")&&this._flushAnimation("opening"),this._placeholder){if(this._exitModalState(),this.restoreFocusOnClose&&this.__restoreFocusNode){var e=this._getActiveElement();(e===document.body||this._deepContains(e))&&this.__restoreFocusNode.focus(),this.__restoreFocusNode=null}this.setAttribute("closing","");var t=()=>{document.removeEventListener("iron-overlay-canceled",this._boundIronOverlayCanceledListener),this._detachOverlay(),this.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),this.removeAttribute("closing")};this._shouldAnimate()?this._enqueueAnimation("closing",t):t()}}_detachOverlay(){this._placeholder.parentNode.insertBefore(this,this._placeholder),this._placeholder.parentNode.removeChild(this._placeholder)}static get __attachedInstances(){return Array.from(document.body.children).filter(e=>e instanceof v&&!e.hasAttribute("closing")).sort((e,t)=>e.__zIndex-t.__zIndex||0)}get _last(){return this===v.__attachedInstances.pop()}_modelessChanged(e){e?(this._removeGlobalListeners(),this._exitModalState()):this.opened&&(this._addGlobalListeners(),this._enterModalState())}_addGlobalListeners(){document.addEventListener("mousedown",this._boundMouseDownListener),document.addEventListener("mouseup",this._boundMouseUpListener),document.documentElement.addEventListener("click",this._boundOutsideClickListener,!0),document.addEventListener("keydown",this._boundKeydownListener)}_enterModalState(){"none"!==document.body.style.pointerEvents&&(this._previousDocumentPointerEvents=document.body.style.pointerEvents,document.body.style.pointerEvents="none"),v.__attachedInstances.forEach(e=>{e!==this&&(e.shadowRoot.querySelector('[part="overlay"]').style.pointerEvents="none")})}_removeGlobalListeners(){document.removeEventListener("mousedown",this._boundMouseDownListener),document.removeEventListener("mouseup",this._boundMouseUpListener),document.documentElement.removeEventListener("click",this._boundOutsideClickListener,!0),document.removeEventListener("keydown",this._boundKeydownListener)}_exitModalState(){void 0!==this._previousDocumentPointerEvents&&(document.body.style.pointerEvents=this._previousDocumentPointerEvents,delete this._previousDocumentPointerEvents);for(var e,t=v.__attachedInstances;(e=t.pop())&&(e===this||(e.shadowRoot.querySelector('[part="overlay"]').style.removeProperty("pointer-events"),e.modeless)););}_removeOldContent(){this.content&&this._contentNodes&&(this._observer.disconnect(),this._contentNodes.forEach(e=>{e.parentNode===this.content&&this.content.removeChild(e)}),this._originalContentPart&&(this.$.content.parentNode.replaceChild(this._originalContentPart,this.$.content),this.$.content=this._originalContentPart,this._originalContentPart=void 0),this._observer.connect(),this._contentNodes=void 0,this.content=void 0)}_stampOverlayTemplate(e,t){this._removeOldContent(),e._Templatizer||(e._Templatizer=Object(i.b)(e,this,{instanceProps:t,forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new e._Templatizer({}),this._contentNodes=Array.from(this._instance.root.childNodes);var a,n,o=e._templateRoot||(e._templateRoot=e.getRootNode());if(o!==document){var r=window.ShadyCSS&&!window.ShadyCSS.nativeShadow;this.$.content.shadowRoot||this.$.content.attachShadow({mode:"open"});var s=Array.from(o.querySelectorAll("style")).reduce((e,t)=>e+t.textContent,"");if(r){var l=window.ShadyCSS.ScopingShim._styleInfoForNode(o.host);l&&(s+=l._getStyleRules().parsedCssText,s+="}")}if(s=s.replace(/:host/g,":host-nomatch"))if(r){var h=(n=u[a=s]||f(a),document.createElement(n));h.id="content",h.setAttribute("part","content"),this.$.content.parentNode.replaceChild(h,this.$.content),h.className=this.$.content.className,this._originalContentPart=this.$.content,this.$.content=h}else{var c=document.createElement("style");c.textContent=s,this.$.content.shadowRoot.appendChild(c),this._contentNodes.unshift(c)}this.$.content.shadowRoot.appendChild(this._instance.root),this.content=this.$.content.shadowRoot}else this.appendChild(this._instance.root),this.content=this}_removeNewRendererOrTemplate(e,t,a,n){e!==t?this.template=void 0:a!==n&&(this.renderer=void 0)}render(){this.renderer&&this.renderer.call(this.owner,this.content,this.owner,this.model)}_templateOrRendererChanged(e,t,a,n,i,o){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for overlay content");var r=this._oldOwner!==a||this._oldModel!==n;this._oldModel=n,this._oldOwner=a;var s=this._oldInstanceProps!==i||this._oldTemplate!==e;this._oldInstanceProps=i,this._oldTemplate=e;var l=this._oldRenderer!==t;this._oldRenderer=t;var h=this._oldOpened!==o;if(this._oldOpened=o,e&&s)this._stampOverlayTemplate(e,i);else if(t&&(l||h||r)){if(this.content=this,l)for(;this.content.firstChild;)this.content.removeChild(this.content.firstChild);o&&this.render()}}_isFocused(e){return e&&e.getRootNode().activeElement===e}_focusedIndex(e){return(e=e||this._getFocusableElements()).indexOf(e.filter(this._isFocused).pop())}_cycleTab(e,t){var a=this._getFocusableElements();void 0===t&&(t=this._focusedIndex(a)),(t+=e)>=a.length?t=0:t<0&&(t=a.length-1),a[t].focus()}_getFocusableElements(){return class{static getTabbableNodes(e){var t=[];return this._collectTabbableNodes(e,t)?this._sortByTabIndex(t):t}static isFocusable(e){return c.call(e,"input, select, textarea, button, object")?c.call(e,":not([disabled])"):c.call(e,"a[href], area[href], iframe, [tabindex], [contentEditable]")}static isTabbable(e){return this.isFocusable(e)&&c.call(e,':not([tabindex="-1"])')&&this._isVisible(e)}static _normalizedTabIndex(e){if(this.isFocusable(e)){var t=e.getAttribute("tabindex")||0;return Number(t)}return-1}static _collectTabbableNodes(e,t){if(e.nodeType!==Node.ELEMENT_NODE||!this._isVisible(e))return!1;var a,n=e,i=this._normalizedTabIndex(n),o=i>0;if(i>=0&&t.push(n),a="slot"===n.localName?n.assignedNodes({flatten:!0}):(n.shadowRoot||n).children)for(var r=0;r<a.length;r++)o=this._collectTabbableNodes(a[r],t)||o;return o}static _isVisible(e){var t=e.style;return"hidden"!==t.visibility&&"none"!==t.display&&("hidden"!==(t=window.getComputedStyle(e)).visibility&&"none"!==t.display)}static _sortByTabIndex(e){var t=e.length;if(t<2)return e;var a=Math.ceil(t/2),n=this._sortByTabIndex(e.slice(0,a)),i=this._sortByTabIndex(e.slice(a));return this._mergeSortByTabIndex(n,i)}static _mergeSortByTabIndex(e,t){for(var a=[];e.length>0&&t.length>0;)this._hasLowerTabOrder(e[0],t[0])?a.push(t.shift()):a.push(e.shift());return a.concat(e,t)}static _hasLowerTabOrder(e,t){var a=Math.max(e.tabIndex,0),n=Math.max(t.tabIndex,0);return 0===a||0===n?n>a:a>n}}.getTabbableNodes(this.$.overlay)}_getActiveElement(){var e=document._activeElement||document.activeElement;for(e&&e!==document.documentElement&&e instanceof Element!=!1||(e=document.body);e.shadowRoot&&e.shadowRoot.activeElement;)e=e.shadowRoot.activeElement;return e}_deepContains(e){if(this.contains(e))return!0;for(var t=e,a=e.ownerDocument;t&&t!==a&&t!==this;)t=t.parentNode||t.host;return t===this}bringToFront(){var e="",t=v.__attachedInstances.filter(e=>e!==this).pop();t&&(e=t.__zIndex+1);this.style.zIndex=e,this.__zIndex=e||parseFloat(getComputedStyle(this).zIndex)}}customElements.define(v.is,v)},,function(e,t,a){"use strict";a.d(t,"a",(function(){return f}));a(37);var n=a(28),i=a(35),o=a(117),r=a(73),s=a(55),l=a(119);var h=[];var c=a(154);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var d=Object(i.a)(e=>{var t=Object(c.a)(e);function a(e){var t=Object.getPrototypeOf(e);return t.prototype instanceof i?t:null}function n(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__ownProperties",e))){var t=null;if(e.hasOwnProperty(JSCompiler_renameProperty("properties",e))){var a=e.properties;a&&(t=function(e){var t={};for(var a in e){var n=e[a];t[a]="function"==typeof n?{type:n}:n}return t}(a))}e.__ownProperties=t}return e.__ownProperties}class i extends t{static get observedAttributes(){if(!this.hasOwnProperty("__observedAttributes")){t=this.prototype,h.push(t);var e=this._properties;this.__observedAttributes=e?Object.keys(e).map(e=>this.attributeNameForProperty(e)):[]}var t;return this.__observedAttributes}static finalize(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__finalized",this))){var e=a(this);e&&e.finalize(),this.__finalized=!0,this._finalizeClass()}}static _finalizeClass(){var e=n(this);e&&this.createProperties(e)}static get _properties(){if(!this.hasOwnProperty(JSCompiler_renameProperty("__properties",this))){var e=a(this);this.__properties=Object.assign({},e&&e._properties,n(this))}return this.__properties}static typeForProperty(e){var t=this._properties[e];return t&&t.type}_initializeProperties(){this.constructor.finalize(),super._initializeProperties()}connectedCallback(){super.connectedCallback&&super.connectedCallback(),this._enableProperties()}disconnectedCallback(){super.disconnectedCallback&&super.disconnectedCallback()}}return i}),p=a(15),u=window.ShadyCSS&&window.ShadyCSS.cssBuild,f=Object(i.a)(e=>{var t=d(Object(l.a)(e));return class extends t{static get polymerElementVersion(){return"3.2.0"}static _finalizeClass(){super._finalizeClass();var e,t=((e=this).hasOwnProperty(JSCompiler_renameProperty("__ownObservers",e))||(e.__ownObservers=e.hasOwnProperty(JSCompiler_renameProperty("observers",e))?e.observers:null),e.__ownObservers);t&&this.createObservers(t,this._properties),this._prepareTemplate()}static _prepareTemplate(){var e=this.template;e&&("string"==typeof e?(console.error("template getter must return HTMLTemplateElement"),e=null):n.b||(e=e.cloneNode(!0))),this.prototype._template=e}static createProperties(e){for(var t in e)a=this.prototype,n=t,i=e[t],o=e,i.computed&&(i.readOnly=!0),i.computed&&(a._hasReadOnlyEffect(n)?console.warn(`Cannot redefine computed property '${n}'.`):a._createComputedProperty(n,i.computed,o)),i.readOnly&&!a._hasReadOnlyEffect(n)?a._createReadOnlyProperty(n,!i.computed):!1===i.readOnly&&a._hasReadOnlyEffect(n)&&console.warn(`Cannot make readOnly property '${n}' non-readOnly.`),i.reflectToAttribute&&!a._hasReflectEffect(n)?a._createReflectedProperty(n):!1===i.reflectToAttribute&&a._hasReflectEffect(n)&&console.warn(`Cannot make reflected property '${n}' non-reflected.`),i.notify&&!a._hasNotifyEffect(n)?a._createNotifyingProperty(n):!1===i.notify&&a._hasNotifyEffect(n)&&console.warn(`Cannot make notify property '${n}' non-notify.`),i.observer&&a._createPropertyObserver(n,i.observer,o[i.observer]),a._addPropertyToAttributeMap(n);var a,n,i,o}static createObservers(e,t){for(var a=this.prototype,n=0;n<e.length;n++)a._createMethodObserver(e[n],t)}static get template(){return this.hasOwnProperty(JSCompiler_renameProperty("_template",this))||(this._template=this.prototype.hasOwnProperty(JSCompiler_renameProperty("_template",this.prototype))?this.prototype._template:function(e){var t=null;if(e&&(!n.f||n.a)&&(t=s.a.import(e,"template"),n.f&&!t))throw new Error("strictTemplatePolicy: expecting dom-module or null template for "+e);return t}(this.is)||Object.getPrototypeOf(this.prototype).constructor.template),this._template}static set template(e){this._template=e}static get importPath(){if(!this.hasOwnProperty(JSCompiler_renameProperty("_importPath",this))){var e=this.importMeta;if(e)this._importPath=Object(r.a)(e.url);else{var t=s.a.import(this.is);this._importPath=t&&t.assetpath||Object.getPrototypeOf(this.prototype).constructor.importPath}}return this._importPath}constructor(){super(),this._template,this._importPath,this.rootPath,this.importPath,this.root,this.$}_initializeProperties(){this.constructor.finalize(),this.constructor._finalizeTemplate(this.localName),super._initializeProperties(),this.rootPath=n.d,this.importPath=this.constructor.importPath;var e=function(e){if(!e.hasOwnProperty(JSCompiler_renameProperty("__propertyDefaults",e))){e.__propertyDefaults=null;var t=e._properties;for(var a in t){var n=t[a];"value"in n&&(e.__propertyDefaults=e.__propertyDefaults||{},e.__propertyDefaults[a]=n)}}return e.__propertyDefaults}(this.constructor);if(e)for(var t in e){var a=e[t];if(!this.hasOwnProperty(t)){var i="function"==typeof a.value?a.value.call(this):a.value;this._hasAccessor(t)?this._setPendingProperty(t,i,!0):this[t]=i}}}static _processStyleText(e,t){return Object(r.b)(e,t)}static _finalizeTemplate(e){var t=this.prototype._template;if(t&&!t.__polymerFinalized){t.__polymerFinalized=!0;var a=this.importPath;!function(e,t,a,n){if(!u){for(var i=t.content.querySelectorAll("style"),r=Object(o.c)(t),s=Object(o.b)(a),l=t.content.firstElementChild,h=0;h<s.length;h++){var c=s[h];c.textContent=e._processStyleText(c.textContent,n),t.content.insertBefore(c,l)}for(var d=0,p=0;p<r.length;p++){var f=r[p],v=i[d];v!==f?(f=f.cloneNode(!0),v.parentNode.insertBefore(f,v)):d++,f.textContent=e._processStyleText(f.textContent,n)}}window.ShadyCSS&&window.ShadyCSS.prepareTemplate(t,a)}(this,t,e,a?Object(r.c)(a):""),this.prototype._bindTemplate(t)}}connectedCallback(){window.ShadyCSS&&this._template&&window.ShadyCSS.styleElement(this),super.connectedCallback()}ready(){this._template&&(this.root=this._stampTemplate(this._template),this.$=this.root.$),super.ready()}_readyClients(){this._template&&(this.root=this._attachDom(this.root)),super._readyClients()}_attachDom(e){var t=Object(p.a)(this);if(t.attachShadow)return e?(t.shadowRoot||t.attachShadow({mode:"open"}),t.shadowRoot.appendChild(e),n.g&&window.ShadyDOM&&ShadyDOM.flushInitial(t.shadowRoot),t.shadowRoot):null;throw new Error("ShadowDOM not available. PolymerElement can create dom as children instead of in ShadowDOM by setting `this.root = this;` before `ready`.")}updateStyles(e){window.ShadyCSS&&window.ShadyCSS.styleSubtree(this,e)}resolveUrl(e,t){return!t&&this.importPath&&(t=Object(r.c)(this.importPath)),Object(r.c)(e,t)}static _parseTemplateContent(e,t,a){return t.dynamicFns=t.dynamicFns||this._properties,super._parseTemplateContent(e,t,a)}static _addTemplatePropertyEffect(e,t,a){return n.b&&!(t in this._properties)&&console.warn(`Property '${t}' used in template but not declared in 'properties'; attribute will not be observed.`),super._addTemplatePropertyEffect(e,t,a)}}})},,function(e,t,a){"use strict";a.d(t,"c",(function(){return i})),a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return r}));var n=a(88);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function i(e,t){for(var a in t)null===a?e.style.removeProperty(a):e.style.setProperty(a,t[a])}function o(e,t){var a=window.getComputedStyle(e).getPropertyValue(t);return a?a.trim():""}function r(e){var t=n.f.test(e)||n.g.test(e);return n.f.lastIndex=0,n.g.lastIndex=0,t}},function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return r}));var n=a(35);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function i(e,t,a,n,i){var o;i&&(o="object"==typeof a&&null!==a)&&(n=e.__dataTemp[t]);var r=n!==a&&(n==n||a==a);return o&&r&&(e.__dataTemp[t]=a),r}var o=Object(n.a)(e=>class extends e{_shouldPropertyChange(e,t,a){return i(this,e,t,a,!0)}}),r=Object(n.a)(e=>class extends e{static get properties(){return{mutableData:Boolean}}_shouldPropertyChange(e,t,a){return i(this,e,t,a,this.mutableData)}});o._mutablePropertyChange=i},,,function(e,t,a){"use strict";a(250),a(84)},,function(e,t,a){"use strict";a.d(t,"a",(function(){return h})),a.d(t,"b",(function(){return c}));var n=a(9),i=a(24),o=a(65),r=a(157),s=a(13),l=a(11),h=e=>class extends e{static get properties(){return{resizable:{type:Boolean,value:function(){if("vaadin-grid-column-group"!==this.localName){var e=this.parentNode;return e&&"vaadin-grid-column-group"===e.localName&&e.resizable||!1}}},_headerTemplate:{type:Object},_footerTemplate:{type:Object},frozen:{type:Boolean,value:!1},hidden:{type:Boolean},header:{type:String},textAlign:{type:String},_lastFrozen:{type:Boolean,value:!1},_order:Number,_reorderStatus:Boolean,_emptyCells:Array,_headerCell:Object,_footerCell:Object,_grid:Object,headerRenderer:Function,footerRenderer:Function}}static get observers(){return["_widthChanged(width, _headerCell, _footerCell, _cells.*)","_frozenChanged(frozen, _headerCell, _footerCell, _cells.*)","_flexGrowChanged(flexGrow, _headerCell, _footerCell, _cells.*)","_pathOrHeaderChanged(path, header, _headerCell, _footerCell, _cells.*, renderer, headerRenderer, _bodyTemplate, _headerTemplate)","_textAlignChanged(textAlign, _cells.*, _headerCell, _footerCell)","_orderChanged(_order, _headerCell, _footerCell, _cells.*)","_lastFrozenChanged(_lastFrozen)","_setBodyTemplateOrRenderer(_bodyTemplate, renderer, _cells, _cells.*)","_setHeaderTemplateOrRenderer(_headerTemplate, headerRenderer, _headerCell)","_setFooterTemplateOrRenderer(_footerTemplate, footerRenderer, _footerCell)","_resizableChanged(resizable, _headerCell)","_reorderStatusChanged(_reorderStatus, _headerCell, _footerCell, _cells.*)","_hiddenChanged(hidden, _headerCell, _footerCell, _cells.*)"]}connectedCallback(){super.connectedCallback(),this._bodyTemplate&&(this._bodyTemplate.templatizer._grid=this._grid),this._headerTemplate&&(this._headerTemplate.templatizer._grid=this._grid),this._footerTemplate&&(this._footerTemplate.templatizer._grid=this._grid),this._templateObserver.flush(),this._bodyTemplate||this._templateObserver.callback(),requestAnimationFrame(()=>{this._allCells.forEach(e=>{e._content.parentNode||this._grid&&this._grid.appendChild(e._content)})})}disconnectedCallback(){super.disconnectedCallback(),requestAnimationFrame(()=>{this._findHostGrid()||this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)})}),this._gridValue=void 0}_findHostGrid(){for(var e=this;e&&!/^vaadin.*grid(-pro)?$/.test(e.localName);)e=e.assignedSlot?e.assignedSlot.parentNode:e.parentNode;return e||void 0}get _grid(){return this._gridValue||(this._gridValue=this._findHostGrid()),this._gridValue}get _allCells(){return[].concat(this._cells||[]).concat(this._emptyCells||[]).concat(this._headerCell).concat(this._footerCell).filter(e=>e)}constructor(){super(),this._templateObserver=new i.a(this,e=>{this._headerTemplate=this._prepareHeaderTemplate(),this._footerTemplate=this._prepareFooterTemplate(),this._bodyTemplate=this._prepareBodyTemplate()})}_prepareHeaderTemplate(){return this._prepareTemplatizer(this._findTemplate(!0)||null,{})}_prepareFooterTemplate(){return this._prepareTemplatizer(this._findTemplate(!1,!0)||null,{})}_prepareBodyTemplate(){return this._prepareTemplatizer(this._findTemplate()||null)}_prepareTemplatizer(e,t){if(e&&!e.templatizer){var a=new r.a;a._grid=this._grid,a.dataHost=this.dataHost,a._instanceProps=t||a._instanceProps,a.template=e,e.templatizer=a}return e}_renderHeaderAndFooter(){this.headerRenderer&&this._headerCell&&this.__runRenderer(this.headerRenderer,this._headerCell),this.footerRenderer&&this._footerCell&&this.__runRenderer(this.footerRenderer,this._footerCell)}__runRenderer(e,t,a){var n=[t._content,this];a&&a.item&&n.push(a),e.apply(this,n)}__setColumnTemplateOrRenderer(e,t,a){if(!this.hidden){if(e&&t)throw new Error("You should only use either a renderer or a template");a.forEach(a=>{var n=this._grid.__getRowModel(a.parentElement);if(t)a._renderer=t,(n.item||t===this.headerRenderer||t===this.footerRenderer)&&this.__runRenderer(t,a,n);else if(a._template!==e){a._template=e,a._content.innerHTML="",e.templatizer._grid=e.templatizer._grid||this._grid;var i=e.templatizer.createInstance();a._content.appendChild(i.root),a._instance=i,n.item&&a._instance.setProperties(n)}})}}_setBodyTemplateOrRenderer(e,t,a,n){(e||t)&&a&&this.__setColumnTemplateOrRenderer(e,t,a)}_setHeaderTemplateOrRenderer(e,t,a){(e||t)&&a&&this.__setColumnTemplateOrRenderer(e,t,[a])}_setFooterTemplateOrRenderer(e,t,a){(e||t)&&a&&(this.__setColumnTemplateOrRenderer(e,t,[a]),this._grid.__updateHeaderFooterRowVisibility(a.parentElement))}_selectFirstTemplate(e=!1,t=!1){return i.a.getFlattenedNodes(this).filter(a=>"template"===a.localName&&a.classList.contains("header")===e&&a.classList.contains("footer")===t)[0]}_findTemplate(e,t){var a=this._selectFirstTemplate(e,t);return a&&this.dataHost&&(a._rootDataHost=this.dataHost._rootDataHost||this.dataHost),a}_flexGrowChanged(e,t,a,n){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("flexGrow"),this._allCells.forEach(t=>t.style.flexGrow=e)}_orderChanged(e,t,a,n){this._allCells.forEach(t=>t.style.order=e)}_widthChanged(e,t,a,n){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("width"),this._allCells.forEach(t=>t.style.width=e),this._grid&&this._grid.__forceReflow&&this._grid.__forceReflow()}_frozenChanged(e,t,a,n){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("frozen",e),this._allCells.forEach(t=>this._toggleAttribute("frozen",e,t)),this._grid&&this._grid._frozenCellsChanged&&this._grid._frozenCellsChanged()}_lastFrozenChanged(e){this._allCells.forEach(t=>this._toggleAttribute("last-frozen",e,t)),this.parentElement&&this.parentElement._columnPropChanged&&(this.parentElement._lastFrozen=e)}_pathOrHeaderChanged(e,t,a,n,i,o,r,s,l){var h=void 0!==t;if(!r&&!l&&h&&a&&this.__setTextContent(a._content,t),e&&i.value){if(!o&&!s){this.__setColumnTemplateOrRenderer(void 0,(t,a,{item:n})=>this.__setTextContent(t,this.get(e,n)),i.value)}r||l||h||!a||null===t||this.__setTextContent(a._content,this._generateHeader(e))}a&&this._grid.__updateHeaderFooterRowVisibility(a.parentElement)}__setTextContent(e,t){e.textContent!==t&&(e.textContent=t)}_generateHeader(e){return e.substr(e.lastIndexOf(".")+1).replace(/([A-Z])/g,"-$1").toLowerCase().replace(/-/g," ").replace(/^./,e=>e.toUpperCase())}_toggleAttribute(e,t,a){a.hasAttribute(e)===!t&&(t?a.setAttribute(e,""):a.removeAttribute(e))}_reorderStatusChanged(e,t,a,n){this._allCells.forEach(t=>t.setAttribute("reorder-status",e))}_resizableChanged(e,t){void 0!==e&&void 0!==t&&t&&[t].concat(this._emptyCells).forEach(t=>{if(t){var a=t.querySelector('[part~="resize-handle"]');if(a&&t.removeChild(a),e){var n=document.createElement("div");n.setAttribute("part","resize-handle"),t.appendChild(n)}}})}_textAlignChanged(e,t,a,n){var i;void 0!==e&&(-1!==["start","end","center"].indexOf(e)?("ltr"===getComputedStyle(this._grid).direction?"start"===e?i="left":"end"===e&&(i="right"):"start"===e?i="right":"end"===e&&(i="left"),this._allCells.forEach(t=>{t._content.style.textAlign=e,getComputedStyle(t._content).textAlign!==e&&(t._content.style.textAlign=i)})):console.warn('textAlign can only be set as "start", "end" or "center"'))}_hiddenChanged(e,t,a,n){this.parentElement&&this.parentElement._columnPropChanged&&this.parentElement._columnPropChanged("hidden",e),!!e!=!!this._previousHidden&&this._grid&&(!0===e&&this._allCells.forEach(e=>{e._content.parentNode&&e._content.parentNode.removeChild(e._content)}),this._grid._debouncerHiddenChanged=s.a.debounce(this._grid._debouncerHiddenChanged,l.a,()=>{this._grid&&this._grid._renderColumnTree&&this._grid._renderColumnTree(this._grid._columnTree)}),this._grid._updateLastFrozen&&this._grid._updateLastFrozen(),this._grid.notifyResize&&this._grid.notifyResize(),this._grid._resetKeyboardNavigation&&this._grid._resetKeyboardNavigation()),this._previousHidden=e}};class c extends(h(Object(o.a)(n.a))){static get is(){return"vaadin-grid-column"}static get properties(){return{width:{type:String,value:"100px"},flexGrow:{type:Number,value:1},renderer:Function,path:{type:String},autoWidth:{type:Boolean,value:!1},_bodyTemplate:{type:Object},_cells:Array}}}customElements.define(c.is,c)},,function(e,t,a){"use strict";class n extends HTMLElement{static get version(){return"1.6.1"}}customElements.define("vaadin-lumo-styles",n)},,function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var n=e=>class extends e{static get properties(){return{theme:{type:String,readOnly:!0}}}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),"theme"===e&&this._setTheme(a)}}},,,function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));
/**
@license
Copyright (c) 2020 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class n{static detectScrollType(){var e=document.createElement("div");e.textContent="ABCD",e.dir="rtl",e.style.fontSize="14px",e.style.width="4px",e.style.height="1px",e.style.position="absolute",e.style.top="-1000px",e.style.overflow="scroll",document.body.appendChild(e);var t="reverse";return e.scrollLeft>0?t="default":(e.scrollLeft=2,e.scrollLeft<2&&(t="negative")),document.body.removeChild(e),t}static getNormalizedScrollLeft(e,t,a){var{scrollLeft:n}=a;if("rtl"!==t||!e)return n;switch(e){case"negative":return a.scrollWidth-a.clientWidth+n;case"reverse":return a.scrollWidth-a.clientWidth-n}return n}static setNormalizedScrollLeft(e,t,a,n){if("rtl"===t&&e)switch(e){case"negative":a.scrollLeft=a.clientWidth-a.scrollWidth+n;break;case"reverse":a.scrollLeft=a.scrollWidth-a.clientWidth-n;break;default:a.scrollLeft=n}else a.scrollLeft=n}}},,function(e,t,a){"use strict";a.d(t,"c",(function(){return h})),a.d(t,"b",(function(){return c})),a.d(t,"a",(function(){return p}));var n=a(55),i=a(73);function o(e){return n.a.import(e)}function r(e){var t=e.body?e.body:e,a=Object(i.b)(t.textContent,e.baseURI),n=document.createElement("style");return n.textContent=a,n}function s(e){for(var t=e.trim().split(/\s+/),a=[],n=0;n<t.length;n++)a.push(...l(t[n]));return a}function l(e){var t=o(e);if(!t)return console.warn("Could not find style data in module named",e),[];if(void 0===t._styles){var a=[];a.push(...d(t));var n=t.querySelector("template");n&&a.push(...h(n,t.assetpath)),t._styles=a}return t._styles}function h(e,t){if(!e._styles){for(var a=[],n=e.content.querySelectorAll("style"),o=0;o<n.length;o++){var r=n[o],l=r.getAttribute("include");l&&a.push(...s(l).filter((function(e,t,a){return a.indexOf(e)===t}))),t&&(r.textContent=Object(i.b)(r.textContent,t)),a.push(r)}e._styles=a}return e._styles}function c(e){var t=o(e);return t?d(t):[]}function d(e){for(var t=[],a=e.querySelectorAll("link[rel=import][type~=css]"),n=0;n<a.length;n++){var i=a[n];if(i.import){var o=i.import,s=i.hasAttribute("shady-unscoped");if(s&&!o._unscopedStyle){var l=r(o);l.setAttribute("shady-unscoped",""),o._unscopedStyle=l}else o._style||(o._style=r(o));t.push(s?o._unscopedStyle:o._style)}}return t}function p(e){for(var t=e.trim().split(/\s+/),a="",n=0;n<t.length;n++)a+=u(t[n]);return a}function u(e){var t=o(e);if(t&&void 0===t._cssText){var a=f(t),n=t.querySelector("template");n&&(a+=function(e,t){for(var a="",n=h(e,t),i=0;i<n.length;i++){var o=n[i];o.parentNode&&o.parentNode.removeChild(o),a+=o.textContent}return a}(n,t.assetpath)),t._cssText=a||null}return t||console.warn("Could not find style data in module named",e),t&&t._cssText||""}function f(e){for(var t="",a=d(e),n=0;n<a.length;n++)t+=a[n].textContent;return t}},,function(e,t,a){"use strict";a.d(t,"a",(function(){return W}));a(37);var n=a(15),i=a(35),o=a(19),r=a(95),s=a(153),l=document.createTreeWalker(document,NodeFilter.SHOW_ALL,null,!1),h={"dom-if":!0,"dom-repeat":!0};function c(e){var t=e.getAttribute("is");if(t&&h[t]){var a=e;for(a.removeAttribute("is"),e=a.ownerDocument.createElement(t),a.parentNode.replaceChild(e,a),e.appendChild(a);a.attributes.length;)e.setAttribute(a.attributes[0].name,a.attributes[0].value),a.removeAttribute(a.attributes[0].name)}return e}function d(e,t){var a=t.parentInfo&&d(e,t.parentInfo);if(!a)return e;l.currentNode=a;for(var n=l.firstChild(),i=0;n;n=l.nextSibling())if(t.parentIndex===i++)return n}function p(e,t,a,n){n.id&&(t[n.id]=a)}function u(e,t,a){if(a.events&&a.events.length)for(var n,i=0,o=a.events;i<o.length&&(n=o[i]);i++)e._addMethodEventListenerToNode(t,n.name,n.value,e)}function f(e,t,a){a.templateInfo&&(t._templateInfo=a.templateInfo)}var v=Object(i.a)(e=>class extends e{static _parseTemplate(e,t){if(!e._templateInfo){var a=e._templateInfo={};a.nodeInfoList=[],a.stripWhiteSpace=t&&t.stripWhiteSpace||e.hasAttribute("strip-whitespace"),this._parseTemplateContent(e,a,{parent:null})}return e._templateInfo}static _parseTemplateContent(e,t,a){return this._parseTemplateNode(e.content,t,a)}static _parseTemplateNode(e,t,a){var n,i=e;return"template"!=i.localName||i.hasAttribute("preserve-content")?"slot"===i.localName&&(t.hasInsertionPoint=!0):n=this._parseTemplateNestedTemplate(i,t,a)||n,l.currentNode=i,l.firstChild()&&(n=this._parseTemplateChildNodes(i,t,a)||n),i.hasAttributes&&i.hasAttributes()&&(n=this._parseTemplateNodeAttributes(i,t,a)||n),n}static _parseTemplateChildNodes(e,t,a){if("script"!==e.localName&&"style"!==e.localName){l.currentNode=e;for(var n,i=l.firstChild(),o=0;i;i=n){if("template"==i.localName&&(i=c(i)),l.currentNode=i,n=l.nextSibling(),i.nodeType===Node.TEXT_NODE){for(var r=n;r&&r.nodeType===Node.TEXT_NODE;)i.textContent+=r.textContent,n=l.nextSibling(),e.removeChild(r),r=n;if(t.stripWhiteSpace&&!i.textContent.trim()){e.removeChild(i);continue}}var s={parentIndex:o,parentInfo:a};this._parseTemplateNode(i,t,s)&&(s.infoIndex=t.nodeInfoList.push(s)-1),l.currentNode=i,l.parentNode()&&o++}}}static _parseTemplateNestedTemplate(e,t,a){var n=this._parseTemplate(e,t);return(n.content=e.content.ownerDocument.createDocumentFragment()).appendChild(e.content),a.templateInfo=n,!0}static _parseTemplateNodeAttributes(e,t,a){for(var n,i=!1,o=Array.from(e.attributes),r=o.length-1;n=o[r];r--)i=this._parseTemplateNodeAttribute(e,t,a,n.name,n.value)||i;return i}static _parseTemplateNodeAttribute(e,t,a,n,i){return"on-"===n.slice(0,3)?(e.removeAttribute(n),a.events=a.events||[],a.events.push({name:n.slice(3),value:i}),!0):"id"===n&&(a.id=i,!0)}static _contentForTemplate(e){var t=e._templateInfo;return t&&t.content||e.content}_stampTemplate(e){e&&!e.content&&window.HTMLTemplateElement&&HTMLTemplateElement.decorate&&HTMLTemplateElement.decorate(e);var t=this.constructor._parseTemplate(e),a=t.nodeInfoList,n=t.content||e.content,i=document.importNode(n,!0);i.__noInsertionPoint=!t.hasInsertionPoint;var o=i.nodeList=new Array(a.length);i.$={};for(var r,s=0,l=a.length;s<l&&(r=a[s]);s++){var h=o[s]=d(i,r);p(0,i.$,h,r),f(0,h,r),u(this,h,r)}return i=i}_addMethodEventListenerToNode(e,t,a,n){var i=function(e,t,a){return e=e._methodHost||e,function(t){e[a]?e[a](t,t.detail):console.warn("listener method `"+a+"` not defined")}}(n=n||e,0,a);return this._addEventListenerToNode(e,t,i),i}_addEventListenerToNode(e,t,a){e.addEventListener(t,a)}_removeEventListenerFromNode(e,t,a){e.removeEventListener(t,a)}}),m=a(28),g=0,b={COMPUTE:"__computeEffects",REFLECT:"__reflectEffects",NOTIFY:"__notifyEffects",PROPAGATE:"__propagateEffects",OBSERVE:"__observeEffects",READ_ONLY:"__readOnly"},_=/[A-Z]/;function y(e,t){var a=e[t];if(a){if(!e.hasOwnProperty(t))for(var n in a=e[t]=Object.create(e[t]))for(var i=a[n],o=a[n]=Array(i.length),r=0;r<i.length;r++)o[r]=i[r]}else a=e[t]={};return a}function w(e,t,a,n,i,o){if(t){var r=!1,s=g++;for(var l in a)z(e,t,s,l,a,n,i,o)&&(r=!0);return r}return!1}function z(e,t,a,n,i,r,s,l){var h=!1,c=t[s?Object(o.g)(n):n];if(c)for(var d,p=0,u=c.length;p<u&&(d=c[p]);p++)d.info&&d.info.lastRun===a||s&&!M(n,d.trigger)||(d.info&&(d.info.lastRun=a),d.fn(e,n,i,r,d.info,s,l),h=!0);return h}function M(e,t){if(t){var a=t.name;return a==e||!(!t.structured||!Object(o.b)(a,e))||!(!t.wildcard||!Object(o.c)(a,e))}return!0}function x(e,t,a,n,i){var o="string"==typeof i.method?e[i.method]:i.method,r=i.property;o?o.call(e,e.__data[r],n[r]):i.dynamicFn||console.warn("observer method `"+i.method+"` not defined")}function A(e,t,a){var n=Object(o.g)(t);return n!==t&&(C(e,Object(r.a)(n)+"-changed",a[t],t),!0)}function C(e,t,a,i){var o={value:a,queueProperty:!0};i&&(o.path=i),Object(n.a)(e).dispatchEvent(new CustomEvent(t,{detail:o}))}function S(e,t,a,n,i,r){var s=(r?Object(o.g)(t):t)!=t?t:null,l=s?Object(o.a)(e,s):e.__data[t];s&&void 0===l&&(l=a[t]),C(e,i.eventName,l,s)}function k(e,t,a,n,i){var o=e.__data[t];m.e&&(o=Object(m.e)(o,i.attrName,"attribute",e)),e._propertyToAttribute(t,i.attrName,o)}function E(e,t,a,n,i){var o=F(e,t,a,n,i),r=i.methodInfo;e.__dataHasAccessor&&e.__dataHasAccessor[r]?e._setPendingProperty(r,o,!0):e[r]=o}function I(e,t,a,n,i,o,s){a.bindings=a.bindings||[];var l={kind:n,target:i,parts:o,literal:s,isCompound:1!==o.length};if(a.bindings.push(l),function(e){return Boolean(e.target)&&"attribute"!=e.kind&&"text"!=e.kind&&!e.isCompound&&"{"===e.parts[0].mode}(l)){var{event:h,negate:c}=l.parts[0];l.listenerEvent=h||Object(r.a)(i)+"-changed",l.listenerNegate=c}for(var d=t.nodeInfoList.length,p=0;p<l.parts.length;p++){var u=l.parts[p];u.compoundIndex=p,O(e,t,l,u,d)}}function O(e,t,a,n,i){if(!n.literal)if("attribute"===a.kind&&"-"===a.target[0])console.warn("Cannot set attribute "+a.target+' because "-" is not a valid attribute starting character');else for(var o=n.dependencies,r={index:i,binding:a,part:n,evaluator:e},s=0;s<o.length;s++){var l=o[s];"string"==typeof l&&((l=$(l)).wildcard=!0),e._addTemplatePropertyEffect(t,l.rootProperty,{fn:T,info:r,trigger:l})}}function T(e,t,a,n,i,r,s){var l=s[i.index],h=i.binding,c=i.part;if(r&&c.source&&t.length>c.source.length&&"property"==h.kind&&!h.isCompound&&l.__isPropertyEffectsClient&&l.__dataHasAccessor&&l.__dataHasAccessor[h.target]){var d=a[t];t=Object(o.i)(c.source,h.target,t),l._setPendingPropertyOrPath(t,d,!1,!0)&&e._enqueueClient(l)}else{!function(e,t,a,n,i){i=function(e,t,a,n){if(a.isCompound){var i=e.__dataCompoundStorage[a.target];i[n.compoundIndex]=t,t=i.join("")}"attribute"!==a.kind&&("textContent"!==a.target&&("value"!==a.target||"input"!==e.localName&&"textarea"!==e.localName)||(t=null==t?"":t));return t}(t,i,a,n),m.e&&(i=Object(m.e)(i,a.target,a.kind,t));if("attribute"==a.kind)e._valueToNodeAttribute(t,i,a.target);else{var o=a.target;t.__isPropertyEffectsClient&&t.__dataHasAccessor&&t.__dataHasAccessor[o]?t[b.READ_ONLY]&&t[b.READ_ONLY][o]||t._setPendingProperty(o,i)&&e._enqueueClient(t):e._setUnmanagedPropertyToNode(t,o,i)}}(e,l,h,c,i.evaluator._evaluateBinding(e,c,t,a,n,r))}}function L(e,t){if(t.isCompound){for(var a=e.__dataCompoundStorage||(e.__dataCompoundStorage={}),n=t.parts,i=new Array(n.length),o=0;o<n.length;o++)i[o]=n[o].literal;var r=t.target;a[r]=i,t.literal&&"property"==t.kind&&(e[r]=t.literal)}}function P(e,t,a){if(a.listenerEvent){var n=a.parts[0];e.addEventListener(a.listenerEvent,(function(e){!function(e,t,a,n,i){var r,s=e.detail,l=s&&s.path;l?(n=Object(o.i)(a,n,l),r=s&&s.value):r=e.currentTarget[a],r=i?!r:r,t[b.READ_ONLY]&&t[b.READ_ONLY][n]||!t._setPendingPropertyOrPath(n,r,!0,Boolean(l))||s&&s.queueProperty||t._invalidateProperties()}(e,t,a.target,n.source,n.negate)}))}}function D(e,t,a,n,i,o){o=t.static||o&&("object"!=typeof o||o[t.methodName]);for(var r,s={methodName:t.methodName,args:t.args,methodInfo:i,dynamicFn:o},l=0;l<t.args.length&&(r=t.args[l]);l++)r.literal||e._addPropertyEffect(r.rootProperty,a,{fn:n,info:s,trigger:r});o&&e._addPropertyEffect(t.methodName,a,{fn:n,info:s})}function F(e,t,a,n,i){var o=e._methodHost||e,r=o[i.methodName];if(r){var s=e._marshalArgs(i.args,t,a);return r.apply(o,s)}i.dynamicFn||console.warn("method `"+i.methodName+"` not defined")}var B=[],R=new RegExp("(\\[\\[|{{)\\s*(?:(!)\\s*)?((?:[a-zA-Z_$][\\w.:$\\-*]*)\\s*(?:\\(\\s*(?:(?:(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*)(?:,\\s*(?:((?:[a-zA-Z_$][\\w.:$\\-*]*)|(?:[-+]?[0-9]*\\.?[0-9]+(?:[eE][-+]?[0-9]+)?)|(?:(?:'(?:[^'\\\\]|\\\\.)*')|(?:\"(?:[^\"\\\\]|\\\\.)*\")))\\s*))*)?)\\)\\s*)?)(?:]]|}})","g");function N(e){for(var t="",a=0;a<e.length;a++){t+=e[a].literal||""}return t}function V(e){var t=e.match(/([^\s]+?)\(([\s\S]*)\)/);if(t){var a={methodName:t[1],static:!0,args:B};return t[2].trim()?function(e,t){return t.args=e.map((function(e){var a=$(e);return a.literal||(t.static=!1),a}),this),t}(t[2].replace(/\\,/g,"&comma;").split(","),a):a}return null}function $(e){var t=e.trim().replace(/&comma;/g,",").replace(/\\(.)/g,"$1"),a={name:t,value:"",literal:!1},n=t[0];switch("-"===n&&(n=t[1]),n>="0"&&n<="9"&&(n="#"),n){case"'":case'"':a.value=t.slice(1,-1),a.literal=!0;break;case"#":a.value=Number(t),a.literal=!0}return a.literal||(a.rootProperty=Object(o.g)(t),a.structured=Object(o.d)(t),a.structured&&(a.wildcard=".*"==t.slice(-2),a.wildcard&&(a.name=t.slice(0,-2)))),a}function j(e,t,a){var n=Object(o.a)(e,a);return void 0===n&&(n=t[a]),n}function H(e,t,a,n){e.notifyPath(a+".splices",{indexSplices:n}),e.notifyPath(a+".length",t.length)}function q(e,t,a,n,i,o){H(e,t,a,[{index:n,addedCount:i,removed:o,object:t,type:"splice"}])}var W=Object(i.a)(e=>{var t=v(Object(s.a)(e));return class extends t{constructor(){super(),this.__isPropertyEffectsClient=!0,this.__dataCounter=0,this.__dataClientsReady,this.__dataPendingClients,this.__dataToNotify,this.__dataLinkedPaths,this.__dataHasPaths,this.__dataCompoundStorage,this.__dataHost,this.__dataTemp,this.__dataClientsInitialized,this.__data,this.__dataPending,this.__dataOld,this.__computeEffects,this.__reflectEffects,this.__notifyEffects,this.__propagateEffects,this.__observeEffects,this.__readOnly,this.__templateInfo}get PROPERTY_EFFECT_TYPES(){return b}_initializeProperties(){super._initializeProperties(),Y.registerHost(this),this.__dataClientsReady=!1,this.__dataPendingClients=null,this.__dataToNotify=null,this.__dataLinkedPaths=null,this.__dataHasPaths=!1,this.__dataCompoundStorage=this.__dataCompoundStorage||null,this.__dataHost=this.__dataHost||null,this.__dataTemp={},this.__dataClientsInitialized=!1}_initializeProtoProperties(e){this.__data=Object.create(e),this.__dataPending=Object.create(e),this.__dataOld={}}_initializeInstanceProperties(e){var t=this[b.READ_ONLY];for(var a in e)t&&t[a]||(this.__dataPending=this.__dataPending||{},this.__dataOld=this.__dataOld||{},this.__data[a]=this.__dataPending[a]=e[a])}_addPropertyEffect(e,t,a){this._createPropertyAccessor(e,t==b.READ_ONLY);var n=y(this,t)[e];n||(n=this[t][e]=[]),n.push(a)}_removePropertyEffect(e,t,a){var n=y(this,t)[e],i=n.indexOf(a);i>=0&&n.splice(i,1)}_hasPropertyEffect(e,t){var a=this[t];return Boolean(a&&a[e])}_hasReadOnlyEffect(e){return this._hasPropertyEffect(e,b.READ_ONLY)}_hasNotifyEffect(e){return this._hasPropertyEffect(e,b.NOTIFY)}_hasReflectEffect(e){return this._hasPropertyEffect(e,b.REFLECT)}_hasComputedEffect(e){return this._hasPropertyEffect(e,b.COMPUTE)}_setPendingPropertyOrPath(e,t,a,n){if(n||Object(o.g)(Array.isArray(e)?e[0]:e)!==e){if(!n){var i=Object(o.a)(this,e);if(!(e=Object(o.h)(this,e,t))||!super._shouldPropertyChange(e,t,i))return!1}if(this.__dataHasPaths=!0,this._setPendingProperty(e,t,a))return function(e,t,a){var n,i=e.__dataLinkedPaths;if(i)for(var r in i){var s=i[r];Object(o.c)(r,t)?(n=Object(o.i)(r,s,t),e._setPendingPropertyOrPath(n,a,!0,!0)):Object(o.c)(s,t)&&(n=Object(o.i)(s,r,t),e._setPendingPropertyOrPath(n,a,!0,!0))}}(this,e,t),!0}else{if(this.__dataHasAccessor&&this.__dataHasAccessor[e])return this._setPendingProperty(e,t,a);this[e]=t}return!1}_setUnmanagedPropertyToNode(e,t,a){a===e[t]&&"object"!=typeof a||(e[t]=a)}_setPendingProperty(e,t,a){var n=this.__dataHasPaths&&Object(o.d)(e),i=n?this.__dataTemp:this.__data;return!!this._shouldPropertyChange(e,t,i[e])&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),e in this.__dataOld||(this.__dataOld[e]=this.__data[e]),n?this.__dataTemp[e]=t:this.__data[e]=t,this.__dataPending[e]=t,(n||this[b.NOTIFY]&&this[b.NOTIFY][e])&&(this.__dataToNotify=this.__dataToNotify||{},this.__dataToNotify[e]=a),!0)}_setProperty(e,t){this._setPendingProperty(e,t,!0)&&this._invalidateProperties()}_invalidateProperties(){this.__dataReady&&this._flushProperties()}_enqueueClient(e){this.__dataPendingClients=this.__dataPendingClients||[],e!==this&&this.__dataPendingClients.push(e)}_flushProperties(){this.__dataCounter++,super._flushProperties(),this.__dataCounter--}_flushClients(){this.__dataClientsReady?this.__enableOrFlushClients():(this.__dataClientsReady=!0,this._readyClients(),this.__dataReady=!0)}__enableOrFlushClients(){var e=this.__dataPendingClients;if(e){this.__dataPendingClients=null;for(var t=0;t<e.length;t++){var a=e[t];a.__dataEnabled?a.__dataPending&&a._flushProperties():a._enableProperties()}}}_readyClients(){this.__enableOrFlushClients()}setProperties(e,t){for(var a in e)!t&&this[b.READ_ONLY]&&this[b.READ_ONLY][a]||this._setPendingPropertyOrPath(a,e[a],!0);this._invalidateProperties()}ready(){this._flushProperties(),this.__dataClientsReady||this._flushClients(),this.__dataPending&&this._flushProperties()}_propertiesChanged(e,t,a){var n=this.__dataHasPaths;this.__dataHasPaths=!1,function(e,t,a,n){var i=e[b.COMPUTE];if(i)for(var o=t;w(e,i,o,a,n);)Object.assign(a,e.__dataOld),Object.assign(t,e.__dataPending),o=e.__dataPending,e.__dataPending=null}(this,t,a,n);var i=this.__dataToNotify;this.__dataToNotify=null,this._propagatePropertyChanges(t,a,n),this._flushClients(),w(this,this[b.REFLECT],t,a,n),w(this,this[b.OBSERVE],t,a,n),i&&function(e,t,a,n,i){var o,r,s=e[b.NOTIFY],l=g++;for(var h in t)t[h]&&(s&&z(e,s,l,h,a,n,i)||i&&A(e,h,a))&&(o=!0);o&&(r=e.__dataHost)&&r._invalidateProperties&&r._invalidateProperties()}(this,i,t,a,n),1==this.__dataCounter&&(this.__dataTemp={})}_propagatePropertyChanges(e,t,a){this[b.PROPAGATE]&&w(this,this[b.PROPAGATE],e,t,a);for(var n=this.__templateInfo;n;)w(this,n.propertyEffects,e,t,a,n.nodeList),n=n.nextTemplateInfo}linkPaths(e,t){e=Object(o.f)(e),t=Object(o.f)(t),this.__dataLinkedPaths=this.__dataLinkedPaths||{},this.__dataLinkedPaths[e]=t}unlinkPaths(e){e=Object(o.f)(e),this.__dataLinkedPaths&&delete this.__dataLinkedPaths[e]}notifySplices(e,t){var a={path:""};H(this,Object(o.a)(this,e,a),a.path,t)}get(e,t){return Object(o.a)(t||this,e)}set(e,t,a){a?Object(o.h)(a,e,t):this[b.READ_ONLY]&&this[b.READ_ONLY][e]||this._setPendingPropertyOrPath(e,t,!0)&&this._invalidateProperties()}push(e,...t){var a={path:""},n=Object(o.a)(this,e,a),i=n.length,r=n.push(...t);return t.length&&q(this,n,a.path,i,t.length,[]),r}pop(e){var t={path:""},a=Object(o.a)(this,e,t),n=Boolean(a.length),i=a.pop();return n&&q(this,a,t.path,a.length,0,[i]),i}splice(e,t,a,...n){var i,r={path:""},s=Object(o.a)(this,e,r);return t<0?t=s.length-Math.floor(-t):t&&(t=Math.floor(t)),i=2===arguments.length?s.splice(t):s.splice(t,a,...n),(n.length||i.length)&&q(this,s,r.path,t,n.length,i),i}shift(e){var t={path:""},a=Object(o.a)(this,e,t),n=Boolean(a.length),i=a.shift();return n&&q(this,a,t.path,0,0,[i]),i}unshift(e,...t){var a={path:""},n=Object(o.a)(this,e,a),i=n.unshift(...t);return t.length&&q(this,n,a.path,0,t.length,[]),i}notifyPath(e,t){var a;if(1==arguments.length){var n={path:""};t=Object(o.a)(this,e,n),a=n.path}else a=Array.isArray(e)?Object(o.f)(e):e;this._setPendingPropertyOrPath(a,t,!0,!0)&&this._invalidateProperties()}_createReadOnlyProperty(e,t){var a;this._addPropertyEffect(e,b.READ_ONLY),t&&(this["_set"+(a=e,a[0].toUpperCase()+a.substring(1))]=function(t){this._setProperty(e,t)})}_createPropertyObserver(e,t,a){var n={property:e,method:t,dynamicFn:Boolean(a)};this._addPropertyEffect(e,b.OBSERVE,{fn:x,info:n,trigger:{name:e}}),a&&this._addPropertyEffect(t,b.OBSERVE,{fn:x,info:n,trigger:{name:t}})}_createMethodObserver(e,t){var a=V(e);if(!a)throw new Error("Malformed observer expression '"+e+"'");D(this,a,b.OBSERVE,F,null,t)}_createNotifyingProperty(e){this._addPropertyEffect(e,b.NOTIFY,{fn:S,info:{eventName:Object(r.a)(e)+"-changed",property:e}})}_createReflectedProperty(e){var t=this.constructor.attributeNameForProperty(e);"-"===t[0]?console.warn("Property "+e+" cannot be reflected to attribute "+t+' because "-" is not a valid starting attribute name. Use a lowercase first letter for the property instead.'):this._addPropertyEffect(e,b.REFLECT,{fn:k,info:{attrName:t}})}_createComputedProperty(e,t,a){var n=V(t);if(!n)throw new Error("Malformed computed expression '"+t+"'");D(this,n,b.COMPUTE,E,e,a)}_marshalArgs(e,t,a){for(var n=this.__data,i=[],r=0,s=e.length;r<s;r++){var{name:l,structured:h,wildcard:c,value:d,literal:p}=e[r];if(!p)if(c){var u=Object(o.c)(l,t),f=j(n,a,u?t:l);d={path:u?t:l,value:f,base:u?Object(o.a)(n,l):f}}else d=h?j(n,a,l):n[l];i[r]=d}return i}static addPropertyEffect(e,t,a){this.prototype._addPropertyEffect(e,t,a)}static createPropertyObserver(e,t,a){this.prototype._createPropertyObserver(e,t,a)}static createMethodObserver(e,t){this.prototype._createMethodObserver(e,t)}static createNotifyingProperty(e){this.prototype._createNotifyingProperty(e)}static createReadOnlyProperty(e,t){this.prototype._createReadOnlyProperty(e,t)}static createReflectedProperty(e){this.prototype._createReflectedProperty(e)}static createComputedProperty(e,t,a){this.prototype._createComputedProperty(e,t,a)}static bindTemplate(e){return this.prototype._bindTemplate(e)}_bindTemplate(e,t){var a=this.constructor._parseTemplate(e),n=this.__templateInfo==a;if(!n)for(var i in a.propertyEffects)this._createPropertyAccessor(i);if(t&&((a=Object.create(a)).wasPreBound=n,!n&&this.__templateInfo)){var o=this.__templateInfoLast||this.__templateInfo;return this.__templateInfoLast=o.nextTemplateInfo=a,a.previousTemplateInfo=o,a}return this.__templateInfo=a}static _addTemplatePropertyEffect(e,t,a){(e.hostProps=e.hostProps||{})[t]=!0;var n=e.propertyEffects=e.propertyEffects||{};(n[t]=n[t]||[]).push(a)}_stampTemplate(e){Y.beginHosting(this);var t=super._stampTemplate(e);Y.endHosting(this);var a=this._bindTemplate(e,!0);if(a.nodeList=t.nodeList,!a.wasPreBound)for(var n=a.childNodes=[],i=t.firstChild;i;i=i.nextSibling)n.push(i);return t.templateInfo=a,function(e,t){var{nodeList:a,nodeInfoList:n}=t;if(n.length)for(var i=0;i<n.length;i++){var o=n[i],r=a[i],s=o.bindings;if(s)for(var l=0;l<s.length;l++){var h=s[l];L(r,h),P(r,e,h)}r.__dataHost=e}}(this,a),this.__dataReady&&w(this,a.propertyEffects,this.__data,null,!1,a.nodeList),t}_removeBoundDom(e){var t=e.templateInfo;t.previousTemplateInfo&&(t.previousTemplateInfo.nextTemplateInfo=t.nextTemplateInfo),t.nextTemplateInfo&&(t.nextTemplateInfo.previousTemplateInfo=t.previousTemplateInfo),this.__templateInfoLast==t&&(this.__templateInfoLast=t.previousTemplateInfo),t.previousTemplateInfo=t.nextTemplateInfo=null;for(var a=t.childNodes,n=0;n<a.length;n++){var i=a[n];i.parentNode.removeChild(i)}}static _parseTemplateNode(e,t,a){var n=super._parseTemplateNode(e,t,a);if(e.nodeType===Node.TEXT_NODE){var i=this._parseBindings(e.textContent,t);i&&(e.textContent=N(i)||" ",I(this,t,a,"text","textContent",i),n=!0)}return n}static _parseTemplateNodeAttribute(e,t,a,n,i){var o=this._parseBindings(i,t);if(o){var s=n,l="property";_.test(n)?l="attribute":"$"==n[n.length-1]&&(n=n.slice(0,-1),l="attribute");var h=N(o);return h&&"attribute"==l&&("class"==n&&e.hasAttribute("class")&&(h+=" "+e.getAttribute(n)),e.setAttribute(n,h)),"input"===e.localName&&"value"===s&&e.setAttribute(s,""),e.removeAttribute(s),"property"===l&&(n=Object(r.b)(n)),I(this,t,a,l,n,o,h),!0}return super._parseTemplateNodeAttribute(e,t,a,n,i)}static _parseTemplateNestedTemplate(e,t,a){var n=super._parseTemplateNestedTemplate(e,t,a),i=a.templateInfo.hostProps;for(var o in i){I(this,t,a,"property","_host_"+o,[{mode:"{",source:o,dependencies:[o]}])}return n}static _parseBindings(e,t){for(var a,n=[],i=0;null!==(a=R.exec(e));){a.index>i&&n.push({literal:e.slice(i,a.index)});var o=a[1][0],r=Boolean(a[2]),s=a[3].trim(),l=!1,h="",c=-1;"{"==o&&(c=s.indexOf("::"))>0&&(h=s.substring(c+2),s=s.substring(0,c),l=!0);var d=V(s),p=[];if(d){for(var{args:u,methodName:f}=d,v=0;v<u.length;v++){var m=u[v];m.literal||p.push(m)}var g=t.dynamicFns;(g&&g[f]||d.static)&&(p.push(f),d.dynamicFn=!0)}else p.push(s);n.push({source:s,mode:o,negate:r,customEvent:l,signature:d,dependencies:p,event:h}),i=R.lastIndex}if(i&&i<e.length){var b=e.substring(i);b&&n.push({literal:b})}return n.length?n:null}static _evaluateBinding(e,t,a,n,i,r){var s;return s=t.signature?F(e,a,n,0,t.signature):a!=t.source?Object(o.a)(e,t.source):r&&Object(o.d)(a)?Object(o.a)(e,a):e.__data[a],t.negate&&(s=!s),s}}});var Y=new class{constructor(){this.stack=[]}registerHost(e){this.stack.length&&this.stack[this.stack.length-1]._enqueueClient(e)}beginHosting(e){this.stack.push(e)}endHosting(e){var t=this.stack.length;t&&this.stack[t-1]==e&&this.stack.pop()}}},,function(e,t,a){"use strict";a.d(t,"a",(function(){return H}));var n=a(67),i=a(88),o=a(102),r=(a(86),/;\s*/m),s=/^\s*(initial)|(inherit)\s*$/,l=/\s*!important/;class h{constructor(){this._map={}}set(e,t){e=e.trim(),this._map[e]={properties:t,dependants:{}}}get(e){return e=e.trim(),this._map[e]||null}}var c=null;class d{constructor(){this._currentElement=null,this._measureElement=null,this._map=new h}detectMixin(e){return Object(o.a)(e)}gatherStyles(e){var t=Object(n.g)(e.content);if(t){var a=document.createElement("style");return a.textContent=t,e.content.insertBefore(a,e.content.firstChild),a}return null}transformTemplate(e,t){void 0===e._gatheredStyle&&(e._gatheredStyle=this.gatherStyles(e));var a=e._gatheredStyle;return a?this.transformStyle(a,t):null}transformStyle(e,t=""){var a=Object(n.m)(e);return this.transformRules(a,t),e.textContent=Object(n.p)(a),a}transformCustomStyle(e){var t=Object(n.m)(e);return Object(n.f)(t,e=>{":root"===e.selector&&(e.selector="html"),this.transformRule(e)}),e.textContent=Object(n.p)(t),t}transformRules(e,t){this._currentElement=t,Object(n.f)(e,e=>{this.transformRule(e)}),this._currentElement=null}transformRule(e){e.cssText=this.transformCssText(e.parsedCssText,e),":root"===e.selector&&(e.selector=":host > *")}transformCssText(e,t){return e=e.replace(i.g,(e,a,n,i)=>this._produceCssProperties(e,a,n,i,t)),this._consumeCssProperties(e,t)}_getInitialValueForProperty(e){return this._measureElement||(this._measureElement=document.createElement("meta"),this._measureElement.setAttribute("apply-shim-measure",""),this._measureElement.style.all="initial",document.head.appendChild(this._measureElement)),window.getComputedStyle(this._measureElement).getPropertyValue(e)}_fallbacksFromPreviousRules(e){for(var t=e;t.parent;)t=t.parent;var a={},i=!1;return Object(n.f)(t,t=>{(i=i||t===e)||t.selector===e.selector&&Object.assign(a,this._cssTextToMap(t.parsedCssText))}),a}_consumeCssProperties(e,t){for(var a=null;a=i.f.exec(e);){var n=a[0],o=a[1],r=a.index,s=r+n.indexOf("@apply"),l=r+n.length,h=e.slice(0,s),c=e.slice(l),d=t?this._fallbacksFromPreviousRules(t):{};Object.assign(d,this._cssTextToMap(h));var p=this._atApplyToCssProperties(o,d);e=`${h}${p}${c}`,i.f.lastIndex=r+p.length}return e}_atApplyToCssProperties(e,t){e=e.replace(r,"");var a=[],n=this._map.get(e);if(n||(this._map.set(e,{}),n=this._map.get(e)),n){var i,o,s;this._currentElement&&(n.dependants[this._currentElement]=!0);var h=n.properties;for(i in h)o=[i,": var(",e,"_-_",i],(s=t&&t[i])&&o.push(",",s.replace(l,"")),o.push(")"),l.test(h[i])&&o.push(" !important"),a.push(o.join(""))}return a.join("; ")}_replaceInitialOrInherit(e,t){var a=s.exec(t);return a&&(t=a[1]?this._getInitialValueForProperty(e):"apply-shim-inherit"),t}_cssTextToMap(e,t=!1){for(var a,n,i,o,r=e.split(";"),s={},l=0;l<r.length;l++)(i=r[l])&&(o=i.split(":")).length>1&&(a=o[0].trim(),n=o.slice(1).join(":"),t&&(n=this._replaceInitialOrInherit(a,n)),s[a]=n);return s}_invalidateMixinEntry(e){if(c)for(var t in e.dependants)t!==this._currentElement&&c(t)}_produceCssProperties(e,t,a,i,o){if(a&&Object(n.l)(a,(e,t)=>{t&&this._map.get(t)&&(i=`@apply ${t};`)}),!i)return e;var r=this._consumeCssProperties(""+i,o),s=e.slice(0,e.indexOf("--")),l=this._cssTextToMap(r,!0),h=l,c=this._map.get(t),d=c&&c.properties;d?h=Object.assign(Object.create(d),l):this._map.set(t,h);var p,u,f=[],v=!1;for(p in h)void 0===(u=l[p])&&(u="initial"),d&&!(p in d)&&(v=!0),f.push(`${t}_-_${p}: ${u}`);return v&&this._invalidateMixinEntry(c),c&&(c.properties=h),a&&(s=`${e};${s}`),`${s}${f.join("; ")};`}}d.prototype.detectMixin=d.prototype.detectMixin,d.prototype.transformStyle=d.prototype.transformStyle,d.prototype.transformCustomStyle=d.prototype.transformCustomStyle,d.prototype.transformRules=d.prototype.transformRules,d.prototype.transformRule=d.prototype.transformRule,d.prototype.transformTemplate=d.prototype.transformTemplate,d.prototype._separator="_-_",Object.defineProperty(d.prototype,"invalidCallback",{get:()=>c,set(e){c=e}});var p=d,u=a(94),f=a(143),v=(a(188),a(58)),m=new p;class g{constructor(){this.customStyleInterface=null,m.invalidCallback=f.a}ensure(){this.customStyleInterface||window.ShadyCSS.CustomStyleInterface&&(this.customStyleInterface=window.ShadyCSS.CustomStyleInterface,this.customStyleInterface.transformCallback=e=>{m.transformCustomStyle(e)},this.customStyleInterface.validateCallback=()=>{requestAnimationFrame(()=>{this.customStyleInterface.enqueued&&this.flushCustomStyles()})})}prepareTemplate(e,t){if(this.ensure(),!Object(n.d)(e)){u.a[t]=e;var a=m.transformTemplate(e,t);e._styleAst=a}}flushCustomStyles(){if(this.ensure(),this.customStyleInterface){var e=this.customStyleInterface.processStyles();if(this.customStyleInterface.enqueued){for(var t=0;t<e.length;t++){var a=e[t],n=this.customStyleInterface.getStyleForCustomStyle(a);n&&m.transformCustomStyle(n)}this.customStyleInterface.enqueued=!1}}}styleSubtree(e,t){if(this.ensure(),t&&Object(o.c)(e,t),e.shadowRoot){this.styleElement(e);for(var a=e.shadowRoot.children||e.shadowRoot.childNodes,n=0;n<a.length;n++)this.styleSubtree(a[n])}else for(var i=e.children||e.childNodes,r=0;r<i.length;r++)this.styleSubtree(i[r])}styleElement(e){this.ensure();var{is:t}=Object(n.i)(e),a=u.a[t];if((!a||!Object(n.d)(a))&&a&&!f.c(a)){f.d(a)||(this.prepareTemplate(a,t),f.b(a));var i=e.shadowRoot;if(i){var o=i.querySelector("style");o&&(o.__cssRules=a._styleAst,o.textContent=Object(n.p)(a._styleAst))}}}styleDocument(e){this.ensure(),this.styleSubtree(document.body,e)}}if(!window.ShadyCSS||!window.ShadyCSS.ScopingShim){var b=new g,_=window.ShadyCSS&&window.ShadyCSS.CustomStyleInterface;window.ShadyCSS={prepareTemplate(e,t,a){b.flushCustomStyles(),b.prepareTemplate(e,t)},prepareTemplateStyles(e,t,a){window.ShadyCSS.prepareTemplate(e,t,a)},prepareTemplateDom(e,t){},styleSubtree(e,t){b.flushCustomStyles(),b.styleSubtree(e,t)},styleElement(e){b.flushCustomStyles(),b.styleElement(e)},styleDocument(e){b.flushCustomStyles(),b.styleDocument(e)},getComputedStyleValue:(e,t)=>Object(o.b)(e,t),flushCustomStyles(){b.flushCustomStyles()},nativeCss:v.b,nativeShadow:v.c,cssBuild:v.a},_&&(window.ShadyCSS.CustomStyleInterface=_)}window.ShadyCSS.ApplyShim=m;var y=a(100),w=a(45),z=a(153),M=a(35),x=/:host\(:dir\((ltr|rtl)\)\)/g,A=/([\s\w-#\.\[\]\*]*):dir\((ltr|rtl)\)/g,C=/:dir\((?:ltr|rtl)\)/,S=Boolean(window.ShadyDOM&&window.ShadyDOM.inUse),k=[],E=null,I="";function O(){I=document.documentElement.getAttribute("dir")}function T(e){e.__autoDirOptOut||e.setAttribute("dir",I)}function L(){O(),I=document.documentElement.getAttribute("dir");for(var e=0;e<k.length;e++)T(k[e])}var P=Object(M.a)(e=>{S||E||(O(),(E=new MutationObserver(L)).observe(document.documentElement,{attributes:!0,attributeFilter:["dir"]}));var t=Object(z.a)(e);class a extends t{static _processStyleText(e,t){return e=super._processStyleText(e,t),!S&&C.test(e)&&(e=this._replaceDirInCssText(e),this.__activateDir=!0),e}static _replaceDirInCssText(e){var t=e;return t=(t=t.replace(x,':host([dir="$1"])')).replace(A,':host([dir="$2"]) $1')}constructor(){super(),this.__autoDirOptOut=!1}ready(){super.ready(),this.__autoDirOptOut=this.hasAttribute("dir")}connectedCallback(){t.prototype.connectedCallback&&super.connectedCallback(),this.constructor.__activateDir&&(E&&E.takeRecords().length&&L(),k.push(this),T(this))}disconnectedCallback(){if(t.prototype.disconnectedCallback&&super.disconnectedCallback(),this.constructor.__activateDir){var e=k.indexOf(this);e>-1&&k.splice(e,1)}}}return a.__activateDir=!1,a});a(53);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
function D(){document.body.removeAttribute("unresolved")}"interactive"===document.readyState||"complete"===document.readyState?D():window.addEventListener("DOMContentLoaded",D);var F=a(39),B=a(30),R=a(13),N=a(11),V=a(19),$=a(15),j=window.ShadyCSS,H=Object(M.a)(e=>{var t=P(Object(w.a)(Object(y.a)(e))),a={x:"pan-x",y:"pan-y",none:"none",all:"auto"};class n extends t{constructor(){super(),this.isAttached,this.__boundListeners,this._debouncers}static get importMeta(){return this.prototype.importMeta}created(){}connectedCallback(){super.connectedCallback(),this.isAttached=!0,this.attached()}attached(){}disconnectedCallback(){super.disconnectedCallback(),this.isAttached=!1,this.detached()}detached(){}attributeChangedCallback(e,t,a,n){t!==a&&(super.attributeChangedCallback(e,t,a,n),this.attributeChanged(e,t,a))}attributeChanged(e,t,a){}_initializeProperties(){var e=Object.getPrototypeOf(this);e.hasOwnProperty("__hasRegisterFinished")||(this._registered(),e.__hasRegisterFinished=!0),super._initializeProperties(),this.root=this,this.created(),this._applyListeners()}_registered(){}ready(){this._ensureAttributes(),super.ready()}_ensureAttributes(){}_applyListeners(){}serialize(e){return this._serializeValue(e)}deserialize(e,t){return this._deserializeValue(e,t)}reflectPropertyToAttribute(e,t,a){this._propertyToAttribute(e,t,a)}serializeValueToAttribute(e,t,a){this._valueToNodeAttribute(a||this,e,t)}extend(e,t){if(!e||!t)return e||t;for(var a,n=Object.getOwnPropertyNames(t),i=0;i<n.length&&(a=n[i]);i++){var o=Object.getOwnPropertyDescriptor(t,a);o&&Object.defineProperty(e,a,o)}return e}mixin(e,t){for(var a in t)e[a]=t[a];return e}chainObject(e,t){return e&&t&&e!==t&&(e.__proto__=t),e}instanceTemplate(e){var t=this.constructor._contentForTemplate(e);return document.importNode(t,!0)}fire(e,t,a){a=a||{},t=null==t?{}:t;var n=new Event(e,{bubbles:void 0===a.bubbles||a.bubbles,cancelable:Boolean(a.cancelable),composed:void 0===a.composed||a.composed});n.detail=t;var i=a.node||this;return Object($.a)(i).dispatchEvent(n),n}listen(e,t,a){e=e||this;var n=this.__boundListeners||(this.__boundListeners=new WeakMap),i=n.get(e);i||(i={},n.set(e,i));var o=t+a;i[o]||(i[o]=this._addMethodEventListenerToNode(e,t,a,this))}unlisten(e,t,a){e=e||this;var n=this.__boundListeners&&this.__boundListeners.get(e),i=t+a,o=n&&n[i];o&&(this._removeEventListenerFromNode(e,t,o),n[i]=null)}setScrollDirection(e,t){Object(B.setTouchAction)(t||this,a[e]||"auto")}$$(e){return this.root.querySelector(e)}get domHost(){var e=Object($.a)(this).getRootNode();return e instanceof DocumentFragment?e.host:e}distributeContent(){var e=Object(F.a)(this);window.ShadyDOM&&e.shadowRoot&&ShadyDOM.flush()}getEffectiveChildNodes(){return Object(F.a)(this).getEffectiveChildNodes()}queryDistributedElements(e){return Object(F.a)(this).queryDistributedElements(e)}getEffectiveChildren(){return this.getEffectiveChildNodes().filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}getEffectiveTextContent(){for(var e,t=this.getEffectiveChildNodes(),a=[],n=0;e=t[n];n++)e.nodeType!==Node.COMMENT_NODE&&a.push(e.textContent);return a.join("")}queryEffectiveChildren(e){var t=this.queryDistributedElements(e);return t&&t[0]}queryAllEffectiveChildren(e){return this.queryDistributedElements(e)}getContentChildNodes(e){var t=this.root.querySelector(e||"slot");return t?Object(F.a)(t).getDistributedNodes():[]}getContentChildren(e){return this.getContentChildNodes(e).filter((function(e){return e.nodeType===Node.ELEMENT_NODE}))}isLightDescendant(e){return this!==e&&Object($.a)(this).contains(e)&&Object($.a)(this).getRootNode()===Object($.a)(e).getRootNode()}isLocalDescendant(e){return this.root===Object($.a)(e).getRootNode()}scopeSubtree(e,t){}getComputedStyleValue(e){return j.getComputedStyleValue(this,e)}debounce(e,t,a){return this._debouncers=this._debouncers||{},this._debouncers[e]=R.a.debounce(this._debouncers[e],a>0?N.d.after(a):N.c,t.bind(this))}isDebouncerActive(e){this._debouncers=this._debouncers||{};var t=this._debouncers[e];return!(!t||!t.isActive())}flushDebouncer(e){this._debouncers=this._debouncers||{};var t=this._debouncers[e];t&&t.flush()}cancelDebouncer(e){this._debouncers=this._debouncers||{};var t=this._debouncers[e];t&&t.cancel()}async(e,t){return t>0?N.d.run(e.bind(this),t):~N.c.run(e.bind(this))}cancelAsync(e){e<0?N.c.cancel(~e):N.d.cancel(e)}create(e,t){var a=document.createElement(e);if(t)if(a.setProperties)a.setProperties(t);else for(var n in t)a[n]=t[n];return a}elementMatches(e,t){return Object(F.b)(t||this,e)}toggleAttribute(e,t){var a=this;return 3===arguments.length&&(a=arguments[2]),1==arguments.length&&(t=!a.hasAttribute(e)),t?(Object($.a)(a).setAttribute(e,""),!0):(Object($.a)(a).removeAttribute(e),!1)}toggleClass(e,t,a){a=a||this,1==arguments.length&&(t=!a.classList.contains(e)),t?a.classList.add(e):a.classList.remove(e)}transform(e,t){(t=t||this).style.webkitTransform=e,t.style.transform=e}translate3d(e,t,a,n){n=n||this,this.transform("translate3d("+e+","+t+","+a+")",n)}arrayDelete(e,t){var a;if(Array.isArray(e)){if((a=e.indexOf(t))>=0)return e.splice(a,1)}else if((a=Object(V.a)(this,e).indexOf(t))>=0)return this.splice(e,a,1);return null}_logger(e,t){switch(Array.isArray(t)&&1===t.length&&Array.isArray(t[0])&&(t=t[0]),e){case"log":case"warn":case"error":console[e](...t)}}_log(...e){this._logger("log",e)}_warn(...e){this._logger("warn",e)}_error(...e){this._logger("error",e)}_logf(e,...t){return["[%s::%s]",this.is,e,...t]}}return n.prototype.is="",n})},,function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(9),i=a(45),o=a(17),r=a(69),s=a(22),l=a(6),h=a(30);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class c extends(Object(s.a)(Object(r.a)(Object(o.a)(Object(i.a)(n.a))))){static get template(){return l.a`
    <style>
      :host {
        display: inline-block;
        position: relative;
        outline: none;
        white-space: nowrap;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Ensure the button is always aligned on the baseline */
      .vaadin-button-container::before {
        content: "\\2003";
        display: inline-block;
        width: 0;
      }

      .vaadin-button-container {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        text-align: center;
        width: 100%;
        height: 100%;
        min-height: inherit;
        text-shadow: inherit;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="prefix"],
      [part="suffix"] {
        flex: none;
      }

      [part="label"] {
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }
    </style>
    <div class="vaadin-button-container">
      <div part="prefix">
        <slot name="prefix"></slot>
      </div>
      <div part="label">
        <slot></slot>
      </div>
      <div part="suffix">
        <slot name="suffix"></slot>
      </div>
    </div>
    <button id="button" type="button"></button>
`}static get is(){return"vaadin-button"}static get version(){return"2.4.0"}ready(){super.ready(),this.setAttribute("role","button"),this.$.button.setAttribute("role","presentation"),this._addActiveListeners(),window.ShadyDOM&&window.ShadyDOM.flush()}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this.removeAttribute("active")}_addActiveListeners(){Object(h.addListener)(this,"down",()=>!this.disabled&&this.setAttribute("active","")),Object(h.addListener)(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",e=>!this.disabled&&[13,32].indexOf(e.keyCode)>=0&&this.setAttribute("active","")),this.addEventListener("keyup",()=>this.removeAttribute("active")),this.addEventListener("blur",()=>this.removeAttribute("active"))}get focusElement(){return this.$.button}}customElements.define(c.is,c)},,function(e,t,a){"use strict";a(41),a(78),a(63),a(47);var n=document.createElement("template");n.innerHTML='<dom-module id="lumo-field-button">\n  <template>\n    <style>\n      [part$="button"] {\n        flex: none;\n        width: 1em;\n        height: 1em;\n        line-height: 1;\n        font-size: var(--lumo-icon-size-m);\n        text-align: center;\n        color: var(--lumo-contrast-60pct);\n        transition: 0.2s color;\n        cursor: var(--lumo-clickable-cursor);\n      }\n\n      :host(:not([readonly])) [part$="button"]:hover {\n        color: var(--lumo-contrast-90pct);\n      }\n\n      :host([disabled]) [part$="button"],\n      :host([readonly]) [part$="button"] {\n        color: var(--lumo-contrast-20pct);\n      }\n\n      [part$="button"]::before {\n        font-family: "lumo-icons";\n        display: block;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(n.content)},,function(e,t,a){"use strict";var n=a(57),i=a.n(n),o=a(128),r=a(129),s=a(130),l=i()(!1);l.i(o.a),l.i(r.a),l.i(s.a),l.push([e.i,".header2 {\n    margin-top: 100px;\n}\n\n.add-button{\n    width: 300px;\n    height: 300px;\n    border-radius: 150px;\n}\n\n.add-button:hover{\n    background-color: rgb(7,104,252);\n    color: white;\n    opacity: 90%;\n    transition-duration: 0.75s;\n    transition-fill-mode: linear;\n}\n\n.import-button{\n    width: 150px;\n    height: 150px;\n    margin-bottom: 200px;\n    border-radius: 75px;\n}\n\n.import-button:hover{\n    background-color: rgb(7,104,252);\n    color: white;\n    opacity: 90%;\n    transition-duration: 0.75s;\n    transition-fill-mode: linear;\n}\n\n.logout{\n    margin-left: 900px;\n}\n\n.next-button:hover{\n    opacity: 90%;\n    color: white;\n    background-color: rgb(7,104,252);\n    transition-duration: 0.75s;\n    transition-fill-mode: linear;\n}\n\n.save-button:hover{\n    opacity: 90%;\n    color: white;\n    background-color: rgb(7,104,252);\n    transition-duration: 0.75s;\n    transition-fill-mode: linear;\n}\n\n.ok-button:hover{\n    color: #48d6ff;\n    opacity: 90%;\n}\n\n.ok-button-clicked{\n    color: #48d6ff;\n}\n\n.good-button:hover{\n    color: #4fff41;\n    opacity: 90%;\n}\n\n.good-button-clicked{\n    color: #4fff41;\n}\n\n.bad-button:hover{\n    color: #ff6069;\n    opacity: 90%;\n}\n\n.bad-button-clicked{\n    color: #ff6069;\n}\n\n.delete-button{\n    color: #ff6069;\n}\n\n.text{\n    color: black;\n    font-weight: bold;\n}\n",""]),t.a=l},function(e,t,a){"use strict";var n=a(57),i=a.n(n)()(!1);i.push([e.i,"[slot='drawer'] {\n  background-image: linear-gradient(0deg, var(--lumo-shade-5pct), var(--lumo-shade-5pct));\n}\n\n[slot='drawer'] nav a {\n  text-decoration: none;\n  transition: color 140ms;\n}\n\n[slot='drawer'] nav a .la {\n  margin-top: calc(var(--lumo-space-xs) * 0.5);\n}\n\n[slot='drawer'] nav a::before {\n  border-radius: var(--lumo-border-radius);\n  bottom: calc(var(--lumo-space-xs) * 0.5);\n  content: '';\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: calc(var(--lumo-space-xs) * 0.5);\n  transition: background-color 140ms;\n}\n\n[slot='drawer'] nav a[highlight] {\n  color: var(--lumo-primary-text-color);\n}\n\n[slot='drawer'] nav a[highlight]::before {\n  background-color: var(--lumo-primary-color-10pct);\n}\n\n[slot='drawer'] footer vaadin-context-menu {\n  align-items: center;\n  display: flex;\n}\n",""]),t.a=i},function(e,t,a){"use strict";var n=a(57),i=a.n(n)()(!1);i.push([e.i,"/* === Screen readers === */\n.sr-only {\n  border-width: 0;\n  clip: rect(0, 0, 0, 0);\n  height: 1px;\n  margin: -1px;\n  overflow: hidden;\n  padding: 0;\n  position: absolute;\n  white-space: nowrap;\n  width: 1px;\n}\n\n/* === Background color === */\n.bg-base {\n  background-color: var(--lumo-base-color);\n}\n\n.bg-transparent {\n  background-color: transparent;\n}\n\n.bg-contrast-5 {\n  background-color: var(--lumo-contrast-5pct);\n}\n.bg-contrast-10 {\n  background-color: var(--lumo-contrast-10pct);\n}\n.bg-contrast-20 {\n  background-color: var(--lumo-contrast-20pct);\n}\n.bg-contrast-30 {\n  background-color: var(--lumo-contrast-30pct);\n}\n.bg-contrast-40 {\n  background-color: var(--lumo-contrast-40pct);\n}\n.bg-contrast-50 {\n  background-color: var(--lumo-contrast-50pct);\n}\n.bg-contrast-60 {\n  background-color: var(--lumo-contrast-60pct);\n}\n.bg-contrast-70 {\n  background-color: var(--lumo-contrast-70pct);\n}\n.bg-contrast-80 {\n  background-color: var(--lumo-contrast-80pct);\n}\n.bg-contrast-90 {\n  background-color: var(--lumo-contrast-90pct);\n}\n.bg-contrast {\n  background-color: var(--lumo-contrast);\n}\n\n.bg-primary {\n  background-color: var(--lumo-primary-color);\n}\n.bg-primary-50 {\n  background-color: var(--lumo-primary-color-50pct);\n}\n.bg-primary-10 {\n  background-color: var(--lumo-primary-color-10pct);\n}\n\n.bg-error {\n  background-color: var(--lumo-error-color);\n}\n.bg-error-50 {\n  background-color: var(--lumo-error-color-50pct);\n}\n.bg-error-10 {\n  background-color: var(--lumo-error-color-10pct);\n}\n\n.bg-success {\n  background-color: var(--lumo-success-color);\n}\n.bg-success-50 {\n  background-color: var(--lumo-success-color-50pct);\n}\n.bg-success-10 {\n  background-color: var(--lumo-success-color-10pct);\n}\n\n/* === Border === */\n.border-0 {\n  border: none;\n}\n.border {\n  border: 1px solid;\n}\n.border-b {\n  border-bottom: 1px solid;\n}\n.border-l {\n  border-left: 1px solid;\n}\n.border-r {\n  border-right: 1px solid;\n}\n.border-t {\n  border-top: 1px solid;\n}\n\n/* === Border color === */\n.border-contrast-5 {\n  border-color: var(--lumo-contrast-5pct);\n}\n.border-contrast-10 {\n  border-color: var(--lumo-contrast-10pct);\n}\n.border-contrast-20 {\n  border-color: var(--lumo-contrast-20pct);\n}\n.border-contrast-30 {\n  border-color: var(--lumo-contrast-30pct);\n}\n.border-contrast-40 {\n  border-color: var(--lumo-contrast-40pct);\n}\n.border-contrast-50 {\n  border-color: var(--lumo-contrast-50pct);\n}\n.border-contrast-60 {\n  border-color: var(--lumo-contrast-60pct);\n}\n.border-contrast-70 {\n  border-color: var(--lumo-contrast-70pct);\n}\n.border-contrast-80 {\n  border-color: var(--lumo-contrast-80pct);\n}\n.border-contrast-90 {\n  border-color: var(--lumo-contrast-90pct);\n}\n.border-contrast {\n  border-color: var(--lumo-contrast);\n}\n\n.border-primary {\n  border-color: var(--lumo-primary-color);\n}\n.border-primary-50 {\n  border-color: var(--lumo-primary-color-50pct);\n}\n.border-primary-10 {\n  border-color: var(--lumo-primary-color-10pct);\n}\n\n.border-error {\n  border-color: var(--lumo-error-color);\n}\n.border-error-50 {\n  border-color: var(--lumo-error-color-50pct);\n}\n.border-error-10 {\n  border-color: var(--lumo-error-color-10pct);\n}\n\n.border-success {\n  border-color: var(--lumo-success-color);\n}\n.border-success-50 {\n  border-color: var(--lumo-success-color-50pct);\n}\n.border-success-10 {\n  border-color: var(--lumo-success-color-10pct);\n}\n\n/* === Border radius === */\n.rounded-none {\n  border-radius: 0;\n}\n.rounded-s {\n  border-radius: var(--lumo-border-radius-s);\n}\n.rounded-m {\n  border-radius: var(--lumo-border-radius-m);\n}\n.rounded-l {\n  border-radius: var(--lumo-border-radius-l);\n}\n\n/* === Align content === */\n.content-center {\n  align-content: center;\n}\n.content-end {\n  align-content: flex-end;\n}\n.content-start {\n  align-content: flex-start;\n}\n.content-around {\n  align-content: space-around;\n}\n.content-between {\n  align-content: space-between;\n}\n.content-evenly {\n  align-content: space-evenly;\n}\n.content-stretch {\n  align-content: stretch;\n}\n\n/* === Align items === */\n.items-baseline {\n  align-items: baseline;\n}\n.items-center {\n  align-items: center;\n}\n.items-end {\n  align-items: flex-end;\n}\n.items-start {\n  align-items: flex-start;\n}\n.items-stretch   {\n  align-items: stretch;\n}\n\n/* === Align self === */\n.self-auto {\n  align-self: auto;\n}\n.self-baseline {\n  align-self: baseline;\n}\n.self-center {\n  align-self: center;\n}\n.self-end {\n  align-self: flex-end;\n}\n.self-start {\n  align-self: flex-start;\n}\n.self-stretch   {\n  align-self: stretch;\n}\n\n/* === Justify content === */\n.justify-center {\n  justify-content: center;\n}\n.justify-end {\n  justify-content: flex-end;\n}\n.justify-start {\n  justify-content: flex-start;\n}\n.justify-around {\n  justify-content: space-around;\n}\n.justify-between {\n  justify-content: space-between;\n}\n.justify-evenly {\n  justify-content: space-evenly;\n}\n\n/* === Box shadows === */\n.shadow-xs {\n  box-shadow: var(--lumo-box-shadow-xs);\n}\n.shadow-s {\n  box-shadow: var(--lumo-box-shadow-s);\n}\n.shadow-m {\n  box-shadow: var(--lumo-box-shadow-m);\n}\n.shadow-l {\n  box-shadow: var(--lumo-box-shadow-l);\n}\n.shadow-xl {\n  box-shadow: var(--lumo-box-shadow-xl);\n}\n\n/* === Flex === */\n.flex-auto {\n  flex: auto;\n}\n.flex-none {\n  flex: none;\n}\n\n/* === Flex direction === */\n.flex-col {\n  flex-direction: column;\n}\n.flex-col-reverse {\n  flex-direction: column-reverse;\n}\n.flex-row {\n  flex-direction: row;\n}\n.flex-row-reverse {\n  flex-direction: row-reverse;\n}\n\n/* === Flex grow === */\n.flex-grow-0 {\n  flex-grow: 0;\n}\n.flex-grow {\n  flex-grow: 1;\n}\n\n/* === Flex shrink === */\n.flex-shrink-0 {\n  flex-shrink: 0;\n}\n.flex-shrink {\n  flex-shrink: 1;\n}\n\n/* === Flex wrap === */\n.flex-nowrap {\n  flex-wrap: nowrap;\n}\n.flex-wrap {\n  flex-wrap: wrap;\n}\n.flex-wrap-reverse {\n  flex-wrap: wrap-reverse;\n}\n\n/* === Responsive design === */\n@media (min-width: 640px) {\n  .sm\\:flex-col {\n    flex-direction: column;\n  }\n  .sm\\:flex-row {\n    flex-direction: row;\n  }\n}\n\n@media (min-width: 768px) {\n  .md\\:flex-col {\n    flex-direction: column;\n  }\n  .md\\:flex-row {\n    flex-direction: row;\n  }\n}\n@media (min-width: 1024px) {\n  .lg\\:flex-col {\n    flex-direction: column;\n  }\n  .lg\\:flex-row {\n    flex-direction: row;\n  }\n}\n@media (min-width: 1280px) {\n  .xl\\:flex-col {\n    flex-direction: column;\n  }\n  .xl\\:flex-row {\n    flex-direction: row;\n  }\n}\n@media (min-width: 1536px) {\n  .\\32xl\\:flex-col {\n    flex-direction: column;\n  }\n  .\\32xl\\:flex-row {\n    flex-direction: row;\n  }\n}\n\n/* === Gap === */\n.gap-xs {\n  gap: var(--lumo-space-xs);\n}\n.gap-s {\n  gap: var(--lumo-space-s);\n}\n.gap-m {\n  gap: var(--lumo-space-m);\n}\n.gap-l {\n  gap: var(--lumo-space-l);\n}\n.gap-xl {\n  gap: var(--lumo-space-xl);\n}\n\n/* === Gap (column) === */\n.gap-x-xs {\n  column-gap: var(--lumo-space-xs);\n}\n.gap-x-s {\n  column-gap: var(--lumo-space-s);\n}\n.gap-x-m {\n  column-gap: var(--lumo-space-m);\n}\n.gap-x-l {\n  column-gap: var(--lumo-space-l);\n}\n.gap-x-xl {\n  column-gap: var(--lumo-space-xl);\n}\n\n/* === Gap (row) === */\n.gap-y-xs {\n  row-gap: var(--lumo-space-xs);\n}\n.gap-y-s {\n  row-gap: var(--lumo-space-s);\n}\n.gap-y-m {\n  row-gap: var(--lumo-space-m);\n}\n.gap-y-l {\n  row-gap: var(--lumo-space-l);\n}\n.gap-y-xl {\n  row-gap: var(--lumo-space-xl);\n}\n\n/* === Grid auto flow === */\n.grid-flow-col {\n  grid-auto-flow: column;\n}\n.grid-flow-row {\n  grid-auto-flow: row;\n}\n\n/* === Grid columns === */\n.grid-cols-1 {\n  grid-template-columns: repeat(1, minmax(0, 1fr));\n}\n.grid-cols-2 {\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n}\n.grid-cols-3 {\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n}\n.grid-cols-4 {\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n}\n.grid-cols-5 {\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n}\n.grid-cols-6 {\n  grid-template-columns: repeat(6, minmax(0, 1fr));\n}\n.grid-cols-7 {\n  grid-template-columns: repeat(7, minmax(0, 1fr));\n}\n.grid-cols-8 {\n  grid-template-columns: repeat(8, minmax(0, 1fr));\n}\n.grid-cols-9 {\n  grid-template-columns: repeat(9, minmax(0, 1fr));\n}\n.grid-cols-10 {\n  grid-template-columns: repeat(10, minmax(0, 1fr));\n}\n.grid-cols-11 {\n  grid-template-columns: repeat(11, minmax(0, 1fr));\n}\n.grid-cols-12 {\n  grid-template-columns: repeat(12, minmax(0, 1fr));\n}\n\n/* === Grid rows === */\n.grid-rows-1 {\n  grid-template-rows: repeat(1, minmax(0, 1fr));\n}\n.grid-rows-2 {\n  grid-template-rows: repeat(2, minmax(0, 1fr));\n}\n.grid-rows-3 {\n  grid-template-rows: repeat(3, minmax(0, 1fr));\n}\n.grid-rows-4 {\n  grid-template-rows: repeat(4, minmax(0, 1fr));\n}\n.grid-rows-5 {\n  grid-template-rows: repeat(5, minmax(0, 1fr));\n}\n.grid-rows-6 {\n  grid-template-rows: repeat(6, minmax(0, 1fr));\n}\n\n/* === Span (column) === */\n.col-span-1 {\n  grid-column: span 1 / span 1;\n}\n.col-span-2 {\n  grid-column: span 2 / span 2;\n}\n.col-span-3 {\n  grid-column: span 3 / span 3;\n}\n.col-span-4 {\n  grid-column: span 4 / span 4;\n}\n.col-span-5 {\n  grid-column: span 5 / span 5;\n}\n.col-span-6 {\n  grid-column: span 6 / span 6;\n}\n.col-span-7 {\n  grid-column: span 7 / span 7;\n}\n.col-span-8 {\n  grid-column: span 8 / span 8;\n}\n.col-span-9 {\n  grid-column: span 9 / span 9;\n}\n.col-span-10 {\n  grid-column: span 10 / span 10;\n}\n.col-span-11 {\n  grid-column: span 11 / span 11;\n}\n.col-span-12 {\n  grid-column: span 12 / span 12;\n}\n\n/* === Span (row) === */\n.row-span-1 {\n  grid-row: span 1 / span 1;\n}\n.row-span-2 {\n  grid-row: span 2 / span 2;\n}\n.row-span-3 {\n  grid-row: span 3 / span 3;\n}\n.row-span-4 {\n  grid-row: span 4 / span 4;\n}\n.row-span-5 {\n  grid-row: span 5 / span 5;\n}\n.row-span-6 {\n  grid-row: span 6 / span 6;\n}\n\n/* === Responsive design === */\n@media (min-width: 640px) {\n  .sm\\:grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-6 {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-7 {\n    grid-template-columns: repeat(7, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-8 {\n    grid-template-columns: repeat(8, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-9 {\n    grid-template-columns: repeat(9, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-10 {\n    grid-template-columns: repeat(10, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-11 {\n    grid-template-columns: repeat(11, minmax(0, 1fr));\n  }\n  .sm\\:grid-cols-12 {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n}\n\n@media (min-width: 768px) {\n  .md\\:grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-6 {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-7 {\n    grid-template-columns: repeat(7, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-8 {\n    grid-template-columns: repeat(8, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-9 {\n    grid-template-columns: repeat(9, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-10 {\n    grid-template-columns: repeat(10, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-11 {\n    grid-template-columns: repeat(11, minmax(0, 1fr));\n  }\n  .md\\:grid-cols-12 {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n}\n@media (min-width: 1024px) {\n  .lg\\:grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-6 {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-7 {\n    grid-template-columns: repeat(7, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-8 {\n    grid-template-columns: repeat(8, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-9 {\n    grid-template-columns: repeat(9, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-10 {\n    grid-template-columns: repeat(10, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-11 {\n    grid-template-columns: repeat(11, minmax(0, 1fr));\n  }\n  .lg\\:grid-cols-12 {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n}\n@media (min-width: 1280px) {\n  .xl\\:grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-6 {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-7 {\n    grid-template-columns: repeat(7, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-8 {\n    grid-template-columns: repeat(8, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-9 {\n    grid-template-columns: repeat(9, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-10 {\n    grid-template-columns: repeat(10, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-11 {\n    grid-template-columns: repeat(11, minmax(0, 1fr));\n  }\n  .xl\\:grid-cols-12 {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n}\n@media (min-width: 1536px) {\n  .\\32xl\\:grid-cols-1 {\n    grid-template-columns: repeat(1, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-2 {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-3 {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-4 {\n    grid-template-columns: repeat(4, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-5 {\n    grid-template-columns: repeat(5, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-6 {\n    grid-template-columns: repeat(6, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-7 {\n    grid-template-columns: repeat(7, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-8 {\n    grid-template-columns: repeat(8, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-9 {\n    grid-template-columns: repeat(9, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-10 {\n    grid-template-columns: repeat(10, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-11 {\n    grid-template-columns: repeat(11, minmax(0, 1fr));\n  }\n  .\\32xl\\:grid-cols-12 {\n    grid-template-columns: repeat(12, minmax(0, 1fr));\n  }\n}\n\n/* === Box sizing === */\n.box-border {\n  box-sizing: border-box;\n}\n.box-content {\n  box-sizing: content-box;\n}\n\n/* === Display === */\n.block {\n  display: block;\n}\n.flex {\n  display: flex;\n}\n.hidden {\n  display: none;\n}\n.inline {\n  display: inline;\n}\n.inline-block {\n  display: inline-block;\n}\n.inline-flex {\n  display: inline-flex;\n}\n.inline-grid {\n  display: inline-grid;\n}\n.grid {\n  display: grid;\n}\n\n/* === Overflow === */\n.overflow-auto {\n  overflow: auto;\n}\n.overflow-hidden {\n  overflow: hidden;\n}\n.overflow-scroll {\n  overflow: scroll;\n}\n\n/* === Position === */\n.absolute {\n  position: absolute;\n}\n.fixed {\n  position: fixed;\n}\n.static {\n  position: static;\n}\n.sticky {\n  position: sticky;\n}\n.relative {\n  position: relative;\n}\n\n/* === Responsive design === */\n@media (min-width: 640px) {\n  .sm\\:flex {\n    display: flex;\n  }\n  .sm\\:hidden {\n    display: none;\n  }\n}\n@media (min-width: 768px) {\n  .md\\:flex {\n    display: flex;\n  }\n  .md\\:hidden {\n    display: none;\n  }\n}\n@media (min-width: 1024px) {\n  .lg\\:flex {\n    display: flex;\n  }\n  .lg\\:hidden {\n    display: none;\n  }\n}\n@media (min-width: 1280px) {\n  .xl\\:flex {\n    display: flex;\n  }\n  .xl\\:hidden {\n    display: none;\n  }\n}\n@media (min-width: 1536px) {\n  .\\32xl\\:flex {\n    display: flex;\n  }\n  .\\32xl\\:hidden {\n    display: none;\n  }\n}\n\n/* === Height === */\n.h-0 {\n  height: 0;\n}\n.h-xs {\n  height: var(--lumo-size-xs);\n}\n.h-s {\n  height: var(--lumo-size-s);\n}\n.h-m {\n  height: var(--lumo-size-m);\n}\n.h-l {\n  height: var(--lumo-size-l);\n}\n.h-xl {\n  height: var(--lumo-size-xl);\n}\n.h-auto {\n  height: auto;\n}\n.h-full {\n  height: 100%;\n}\n.h-screen {\n  height: 100vh;\n}\n\n/* === Height (max) === */\n.max-h-full {\n  max-height: 100%;\n}\n.max-h-screen {\n  max-height: 100vh;\n}\n\n/* === Height (min) === */\n.min-h-0 {\n  min-height: 0;\n}\n.min-h-full {\n  min-height: 100%;\n}\n.min-h-screen {\n  min-height: 100vh;\n}\n\n/* === Icon sizing === */\n.icon-s {\n  height: var(--lumo-icon-size-s);\n  width: var(--lumo-icon-size-s);\n}\n.icon-m {\n  height: var(--lumo-icon-size-m);\n  width: var(--lumo-icon-size-m);\n}\n.icon-l {\n  height: var(--lumo-icon-size-l);\n  width: var(--lumo-icon-size-l);\n}\n\n/* === Width === */\n.w-xs {\n  width: var(--lumo-size-xs);\n}\n.w-s {\n  width: var(--lumo-size-s);\n}\n.w-m {\n  width: var(--lumo-size-m);\n}\n.w-l {\n  width: var(--lumo-size-l);\n}\n.w-xl {\n  width: var(--lumo-size-xl);\n}\n.w-auto {\n  width: auto;\n}\n.w-full {\n  width: 100%;\n}\n\n/* === Width (max) === */\n.max-w-full {\n  max-width: 100%;\n}\n.max-w-max {\n  max-width: max-content;\n}\n.max-w-min {\n  max-width: min-content;\n}\n.max-w-screen-sm {\n  max-width: 640px;\n}\n.max-w-screen-md {\n  max-width: 768px;\n}\n.max-w-screen-lg {\n  max-width: 1024px;\n}\n.max-w-screen-xl {\n  max-width: 1280px;\n}\n.max-w-screen-2xl {\n  max-width: 1536px;\n}\n\n/* === Width (min) === */\n.min-w-0 {\n  min-width: 0;\n}\n.min-w-full {\n  min-width: 100%;\n}\n.min-w-max {\n  min-width: max-content;\n}\n.min-w-min {\n  min-width: min-content;\n}\n\n/* === Margin === */\n.m-auto {\n  margin: auto;\n}\n.m-0 {\n  margin: 0;\n}\n.m-xs {\n  margin: var(--lumo-space-xs);\n}\n.m-s {\n  margin: var(--lumo-space-s);\n}\n.m-m {\n  margin: var(--lumo-space-m);\n}\n.m-l {\n  margin: var(--lumo-space-l);\n}\n.m-xl {\n  margin: var(--lumo-space-xl);\n}\n\n/* === Margin (bottom) === */\n.mb-auto {\n  margin-bottom: auto;\n}\n.mb-0 {\n  margin-bottom: 0;\n}\n.mb-xs {\n  margin-bottom: var(--lumo-space-xs);\n}\n.mb-s {\n  margin-bottom: var(--lumo-space-s);\n}\n.mb-m {\n  margin-bottom: var(--lumo-space-m);\n}\n.mb-l {\n  margin-bottom: var(--lumo-space-l);\n}\n.mb-xl {\n  margin-bottom: var(--lumo-space-xl);\n}\n\n/* === Margin (end) === */\n.me-auto {\n  margin-inline-end: auto;\n}\n.me-0 {\n  margin-inline-end: 0;\n}\n.me-xs {\n  margin-inline-end: var(--lumo-space-xs);\n}\n.me-s {\n  margin-inline-end: var(--lumo-space-s);\n}\n.me-m {\n  margin-inline-end: var(--lumo-space-m);\n}\n.me-l {\n  margin-inline-end: var(--lumo-space-l);\n}\n.me-xl {\n  margin-inline-end: var(--lumo-space-xl);\n}\n\n/* === Margin (horizontal) === */\n.mx-auto {\n  margin-left: auto;\n  margin-right: auto;\n}\n.mx-0 {\n  margin-left: 0;\n  margin-right: 0;\n}\n.mx-xs {\n  margin-left: var(--lumo-space-xs);\n  margin-right: var(--lumo-space-xs);\n}\n.mx-s {\n  margin-left: var(--lumo-space-s);\n  margin-right: var(--lumo-space-s);\n}\n.mx-m {\n  margin-left: var(--lumo-space-m);\n  margin-right: var(--lumo-space-m);\n}\n.mx-l {\n  margin-left: var(--lumo-space-l);\n  margin-right: var(--lumo-space-l);\n}\n.mx-xl {\n  margin-left: var(--lumo-space-xl);\n  margin-right: var(--lumo-space-xl);\n}\n\n/* === Margin (left) === */\n.ml-auto {\n  margin-left: auto;\n}\n.ml-0 {\n  margin-left: 0;\n}\n.ml-xs {\n  margin-left: var(--lumo-space-xs);\n}\n.ml-s {\n  margin-left: var(--lumo-space-s);\n}\n.ml-m {\n  margin-left: var(--lumo-space-m);\n}\n.ml-l {\n  margin-left: var(--lumo-space-l);\n}\n.ml-xl {\n  margin-left: var(--lumo-space-xl);\n}\n\n/* === Margin (right) === */\n.mr-auto {\n  margin-right: auto;\n}\n.mr-0 {\n  margin-right: 0;\n}\n.mr-xs {\n  margin-right: var(--lumo-space-xs);\n}\n.mr-s {\n  margin-right: var(--lumo-space-s);\n}\n.mr-m {\n  margin-right: var(--lumo-space-m);\n}\n.mr-l {\n  margin-right: var(--lumo-space-l);\n}\n.mr-xl {\n  margin-right: var(--lumo-space-xl);\n}\n\n/* === Margin (start) === */\n.ms-auto {\n  margin-inline-start: auto;\n}\n.ms-0 {\n  margin-inline-start: 0;\n}\n.ms-xs {\n  margin-inline-start: var(--lumo-space-xs);\n}\n.ms-s {\n  margin-inline-start: var(--lumo-space-s);\n}\n.ms-m {\n  margin-inline-start: var(--lumo-space-m);\n}\n.ms-l {\n  margin-inline-start: var(--lumo-space-l);\n}\n.ms-xl {\n  margin-inline-start: var(--lumo-space-xl);\n}\n\n/* === Margin (top) === */\n.mt-auto {\n  margin-top: auto;\n}\n.mt-0 {\n  margin-top: 0;\n}\n.mt-xs {\n  margin-top: var(--lumo-space-xs);\n}\n.mt-s {\n  margin-top: var(--lumo-space-s);\n}\n.mt-m {\n  margin-top: var(--lumo-space-m);\n}\n.mt-l {\n  margin-top: var(--lumo-space-l);\n}\n.mt-xl {\n  margin-top: var(--lumo-space-xl);\n}\n\n/* === Margin (vertical) === */\n.my-auto {\n  margin-bottom: auto;\n  margin-top: auto;\n}\n.my-0 {\n  margin-bottom: 0;\n  margin-top: 0;\n}\n.my-xs {\n  margin-bottom: var(--lumo-space-xs);\n  margin-top: var(--lumo-space-xs);\n}\n.my-s {\n  margin-bottom: var(--lumo-space-s);\n  margin-top: var(--lumo-space-s);\n}\n.my-m {\n  margin-bottom: var(--lumo-space-m);\n  margin-top: var(--lumo-space-m);\n}\n.my-l {\n  margin-bottom: var(--lumo-space-l);\n  margin-top: var(--lumo-space-l);\n}\n.my-xl {\n  margin-bottom: var(--lumo-space-xl);\n  margin-top: var(--lumo-space-xl);\n}\n\n/* === Padding === */\n.p-0 {\n  padding: 0;\n}\n.p-xs {\n  padding: var(--lumo-space-xs);\n}\n.p-s {\n  padding: var(--lumo-space-s);\n}\n.p-m {\n  padding: var(--lumo-space-m);\n}\n.p-l {\n  padding: var(--lumo-space-l);\n}\n.p-xl {\n  padding: var(--lumo-space-xl);\n}\n\n/* === Padding (bottom) === */\n.pb-0 {\n  padding-bottom: 0;\n}\n.pb-xs {\n  padding-bottom: var(--lumo-space-xs);\n}\n.pb-s {\n  padding-bottom: var(--lumo-space-s);\n}\n.pb-m {\n  padding-bottom: var(--lumo-space-m);\n}\n.pb-l {\n  padding-bottom: var(--lumo-space-l);\n}\n.pb-xl {\n  padding-bottom: var(--lumo-space-xl);\n}\n\n/* === Padding (end) === */\n.pe-0 {\n  padding-inline-end: 0;\n}\n.pe-xs {\n  padding-inline-end: var(--lumo-space-xs);\n}\n.pe-s {\n  padding-inline-end: var(--lumo-space-s);\n}\n.pe-m {\n  padding-inline-end: var(--lumo-space-m);\n}\n.pe-l {\n  padding-inline-end: var(--lumo-space-l);\n}\n.pe-xl {\n  padding-inline-end: var(--lumo-space-xl);\n}\n\n/* === Padding (horizontal) === */\n.px-0 {\n  padding-left: 0;\n  padding-right: 0;\n}\n.px-xs {\n  padding-left: var(--lumo-space-xs);\n  padding-right: var(--lumo-space-xs);\n}\n.px-s {\n  padding-left: var(--lumo-space-s);\n  padding-right: var(--lumo-space-s);\n}\n.px-m {\n  padding-left: var(--lumo-space-m);\n  padding-right: var(--lumo-space-m);\n}\n.px-l {\n  padding-left: var(--lumo-space-l);\n  padding-right: var(--lumo-space-l);\n}\n.px-xl {\n  padding-left: var(--lumo-space-xl);\n  padding-right: var(--lumo-space-xl);\n}\n\n/* === Padding (left) === */\n.pl-0 {\n  padding-left: 0;\n}\n.pl-xs {\n  padding-left: var(--lumo-space-xs);\n}\n.pl-s {\n  padding-left: var(--lumo-space-s);\n}\n.pl-m {\n  padding-left: var(--lumo-space-m);\n}\n.pl-l {\n  padding-left: var(--lumo-space-l);\n}\n.pl-xl {\n  padding-left: var(--lumo-space-xl);\n}\n\n/* === Padding (right) === */\n.pr-0 {\n  padding-right: 0;\n}\n.pr-xs {\n  padding-right: var(--lumo-space-xs);\n}\n.pr-s {\n  padding-right: var(--lumo-space-s);\n}\n.pr-m {\n  padding-right: var(--lumo-space-m);\n}\n.pr-l {\n  padding-right: var(--lumo-space-l);\n}\n.pr-xl {\n  padding-right: var(--lumo-space-xl);\n}\n\n/* === Padding (start) === */\n.ps-0 {\n  padding-inline-start: 0;\n}\n.ps-xs {\n  padding-inline-start: var(--lumo-space-xs);\n}\n.ps-s {\n  padding-inline-start: var(--lumo-space-s);\n}\n.ps-m {\n  padding-inline-start: var(--lumo-space-m);\n}\n.ps-l {\n  padding-inline-start: var(--lumo-space-l);\n}\n.ps-xl {\n  padding-inline-start: var(--lumo-space-xl);\n}\n\n/* === Padding (top) === */\n.pt-0 {\n  padding-top: 0;\n}\n.pt-xs {\n  padding-top: var(--lumo-space-xs);\n}\n.pt-s {\n  padding-top: var(--lumo-space-s);\n}\n.pt-m {\n  padding-top: var(--lumo-space-m);\n}\n.pt-l {\n  padding-top: var(--lumo-space-l);\n}\n.pt-xl {\n  padding-top: var(--lumo-space-xl);\n}\n\n/* === Padding (vertical) === */\n.py-0 {\n  padding-bottom: 0;\n  padding-top: 0;\n}\n.py-xs {\n  padding-bottom: var(--lumo-space-xs);\n  padding-top: var(--lumo-space-xs);\n}\n.py-s {\n  padding-bottom: var(--lumo-space-s);\n  padding-top: var(--lumo-space-s);\n}\n.py-m {\n  padding-bottom: var(--lumo-space-m);\n  padding-top: var(--lumo-space-m);\n}\n.py-l {\n  padding-bottom: var(--lumo-space-l);\n  padding-top: var(--lumo-space-l);\n}\n.py-xl {\n  padding-bottom: var(--lumo-space-xl);\n  padding-top: var(--lumo-space-xl);\n}\n\n/* === Spacing === */\n.space-xs > *:not(:last-child) {\n  margin: var(--lumo-space-xs);\n}\n.space-s > *:not(:last-child) {\n  margin: var(--lumo-space-s);\n}\n.space-m > *:not(:last-child) {\n  margin: var(--lumo-space-m);\n}\n.space-l > *:not(:last-child) {\n  margin: var(--lumo-space-l);\n}\n.space-xl > *:not(:last-child) {\n  margin: var(--lumo-space-xl);\n}\n\n/* === Spacing (bottom) === */\n.spacing-b-xs > *:not(:last-child) {\n  margin-bottom: var(--lumo-space-xs);\n}\n.spacing-b-s > *:not(:last-child) {\n  margin-bottom: var(--lumo-space-s);\n}\n.spacing-b-m > *:not(:last-child) {\n  margin-bottom: var(--lumo-space-m);\n}\n.spacing-b-l > *:not(:last-child) {\n  margin-bottom: var(--lumo-space-l);\n}\n.spacing-b-xl > *:not(:last-child) {\n  margin-bottom: var(--lumo-space-xl);\n}\n\n/* === Spacing (end) === */\n.spacing-e-xs > *:not(:last-child) {\n  margin-inline-end: var(--lumo-space-xs);\n}\n.spacing-e-s > *:not(:last-child) {\n  margin-inline-end: var(--lumo-space-s);\n}\n.spacing-e-m > *:not(:last-child) {\n  margin-inline-end: var(--lumo-space-m);\n}\n.spacing-e-l > *:not(:last-child) {\n  margin-inline-end: var(--lumo-space-l);\n}\n.spacing-e-xl > *:not(:last-child) {\n  margin-inline-end: var(--lumo-space-xl);\n}\n\n/* === Spacing (horizontal) === */\n.spacing-x-xs > *:not(:last-child) {\n  margin-left: var(--lumo-space-xs);\n  margin-right: var(--lumo-space-xs);\n}\n.spacing-x-s > *:not(:last-child) {\n  margin-left: var(--lumo-space-s);\n  margin-right: var(--lumo-space-s);\n}\n.spacing-x-m > *:not(:last-child) {\n  margin-left: var(--lumo-space-m);\n  margin-right: var(--lumo-space-m);\n}\n.spacing-x-l > *:not(:last-child) {\n  margin-left: var(--lumo-space-l);\n  margin-right: var(--lumo-space-l);\n}\n.spacing-x-xl > *:not(:last-child) {\n  margin-left: var(--lumo-space-xl);\n  margin-right: var(--lumo-space-xl);\n}\n\n/* === Spacing (left) === */\n.spacing-l-xs > *:not(:last-child) {\n  margin-left: var(--lumo-space-xs);\n}\n.spacing-l-s > *:not(:last-child) {\n  margin-left: var(--lumo-space-s);\n}\n.spacing-l-m > *:not(:last-child) {\n  margin-left: var(--lumo-space-m);\n}\n.spacing-l-l > *:not(:last-child) {\n  margin-left: var(--lumo-space-l);\n}\n.spacing-l-xl > *:not(:last-child) {\n  margin-left: var(--lumo-space-xl);\n}\n\n/* === Spacing (right) === */\n.spacing-r-xs > *:not(:last-child) {\n  margin-right: var(--lumo-space-xs);\n}\n.spacing-r-s > *:not(:last-child) {\n  margin-right: var(--lumo-space-s);\n}\n.spacing-r-m > *:not(:last-child) {\n  margin-right: var(--lumo-space-m);\n}\n.spacing-r-l > *:not(:last-child) {\n  margin-right: var(--lumo-space-l);\n}\n.spacing-r-xl > *:not(:last-child) {\n  margin-right: var(--lumo-space-xl);\n}\n\n/* === Spacing (start) === */\n.spacing-s-xs > *:not(:last-child) {\n  margin-inline-start: var(--lumo-space-xs);\n}\n.spacing-s-s > *:not(:last-child) {\n  margin-inline-start: var(--lumo-space-s);\n}\n.spacing-s-m > *:not(:last-child) {\n  margin-inline-start: var(--lumo-space-m);\n}\n.spacing-s-l > *:not(:last-child) {\n  margin-inline-start: var(--lumo-space-l);\n}\n.spacing-s-xl > *:not(:last-child) {\n  margin-inline-start: var(--lumo-space-xl);\n}\n\n/* === Spacing (top) === */\n.spacing-t-xs > *:not(:last-child) {\n  margin-top: var(--lumo-space-xs);\n}\n.spacing-t-s > *:not(:last-child) {\n  margin-top: var(--lumo-space-s);\n}\n.spacing-t-m > *:not(:last-child) {\n  margin-top: var(--lumo-space-m);\n}\n.spacing-t-l > *:not(:last-child) {\n  margin-top: var(--lumo-space-l);\n}\n.spacing-t-xl > *:not(:last-child) {\n  margin-top: var(--lumo-space-xl);\n}\n\n/* === Spacing (vertical) === */\n.spacing-y-xs > *:not(:last-child) {\n  margin-bottom: var(--lumo-space-xs);\n  margin-top: var(--lumo-space-xs);\n}\n.spacing-y-s > *:not(:last-child) {\n  margin-bottom: var(--lumo-space-s);\n  margin-top: var(--lumo-space-s);\n}\n.spacing-y-m > *:not(:last-child) {\n  margin-bottom: var(--lumo-space-m);\n  margin-top: var(--lumo-space-m);\n}\n.spacing-y-l > *:not(:last-child) {\n  margin-bottom: var(--lumo-space-l);\n  margin-top: var(--lumo-space-l);\n}\n.spacing-y-xl > *:not(:last-child) {\n  margin-bottom: var(--lumo-space-xl);\n  margin-top: var(--lumo-space-xl);\n}\n\n/* === Font size === */\n.text-2xs {\n  font-size: var(--lumo-font-size-xxs);\n}\n.text-xs {\n  font-size: var(--lumo-font-size-xs);\n}\n.text-s {\n  font-size: var(--lumo-font-size-s);\n}\n.text-m {\n  font-size: var(--lumo-font-size-m);\n}\n.text-l {\n  font-size: var(--lumo-font-size-l);\n}\n.text-xl {\n  font-size: var(--lumo-font-size-xl);\n}\n.text-2xl {\n  font-size: var(--lumo-font-size-xxl);\n}\n.text-3xl {\n  font-size: var(--lumo-font-size-xxxl);\n}\n\n/* === Font weight === */\n.font-thin {\n  font-weight: 100; \n}\n.font-extralight {\n  font-weight: 200; \n}\n.font-light {\n  font-weight: 300; \n}\n.font-normal {\n  font-weight: 400; \n}\n.font-medium {\n  font-weight: 500; \n}\n.font-semibold {\n  font-weight: 600; \n}\n.font-bold {\n  font-weight: 700; \n}\n.font-extrabold {\n  font-weight: 800; \n}\n.font-black {\n  font-weight: 900; \n}\n\n/* === Line height === */\n.leading-none {\n  line-height: 1;\n}\n.leading-xs {\n  line-height: var(--lumo-line-height-xs);\n}\n.leading-s {\n  line-height: var(--lumo-line-height-s);\n}\n.leading-m {\n  line-height: var(--lumo-line-height-m);\n}\n\n/* === List style type === */\n.list-none {\n  list-style-type: none;\n}\n\n/* === Text alignment === */\n.text-left {\n  text-align: left;\n}\n.text-center {\n  text-align: center;\n}\n.text-right {\n  text-align: right;\n}\n.text-justify {\n  text-align: justify;\n}\n\n/* === Text color === */\n.text-header {\n  color: var(--lumo-header-text-color);\n}\n.text-body {\n  color: var(--lumo-body-text-color);\n}\n.text-secondary {\n  color: var(--lumo-secondary-text-color);\n}\n.text-tertiary {\n  color: var(--lumo-tertiary-text-color);\n}\n.text-disabled {\n  color: var(--lumo-disabled-text-color);\n}\n.text-primary {\n  color: var(--lumo-primary-text-color);\n}\n.text-primary-contrast {\n  color: var(--lumo-primary-contrast-color);\n}\n.text-error {\n  color: var(--lumo-error-text-color);\n}\n.text-error-contrast {\n  color: var(--lumo-error-contrast-color);\n}\n.text-success {\n  color: var(--lumo-success-text-color);\n}\n.text-success-contrast {\n  color: var(--lumo-success-contrast-color);\n}\n\n/* === Text overflow === */\n.overflow-clip {\n  text-overflow: clip;\n}\n.overflow-ellipsis {\n  text-overflow: ellipsis;\n}\n\n/* === Text transform === */\n.capitalize {\n  text-transform: capitalize;\n}\n.lowercase {\n  text-transform: lowercase;\n}\n.uppercase {\n  text-transform: uppercase;\n}\n\n/* === Whitespace === */\n.whitespace-normal {\n  white-space: normal;\n}\n.whitespace-nowrap {\n  white-space: nowrap;\n}\n.whitespace-pre {\n  white-space: pre;\n}\n.whitespace-pre-line {\n  white-space: pre-line;\n}\n.whitespace-pre-wrap {\n  white-space: pre-wrap;\n}\n\n/* === Responsive design === */\n@media (min-width: 640px) {\n  .sm\\:text-2xs {\n    font-size: var(--lumo-font-size-xxs);\n  }\n  .sm\\:text-xs {\n    font-size: var(--lumo-font-size-xs);\n  }\n  .sm\\:text-s {\n    font-size: var(--lumo-font-size-s);\n  }\n  .sm\\:text-m {\n    font-size: var(--lumo-font-size-m);\n  }\n  .sm\\:text-l {\n    font-size: var(--lumo-font-size-l);\n  }\n  .sm\\:text-xl {\n    font-size: var(--lumo-font-size-xl);\n  }\n  .sm\\:text-2xl {\n    font-size: var(--lumo-font-size-xxl);\n  }\n  .sm\\:text-3xl {\n    font-size: var(--lumo-font-size-xxxl);\n  }\n}\n@media (min-width: 768px) {\n  .md\\:text-2xs {\n    font-size: var(--lumo-font-size-xxs);\n  }\n  .md\\:text-xs {\n    font-size: var(--lumo-font-size-xs);\n  }\n  .md\\:text-s {\n    font-size: var(--lumo-font-size-s);\n  }\n  .md\\:text-m {\n    font-size: var(--lumo-font-size-m);\n  }\n  .md\\:text-l {\n    font-size: var(--lumo-font-size-l);\n  }\n  .md\\:text-xl {\n    font-size: var(--lumo-font-size-xl);\n  }\n  .md\\:text-2xl {\n    font-size: var(--lumo-font-size-xxl);\n  }\n  .md\\:text-3xl {\n    font-size: var(--lumo-font-size-xxxl);\n  }\n}\n@media (min-width: 1024px) {\n  .lg\\:text-2xs {\n    font-size: var(--lumo-font-size-xxs);\n  }\n  .lg\\:text-xs {\n    font-size: var(--lumo-font-size-xs);\n  }\n  .lg\\:text-s {\n    font-size: var(--lumo-font-size-s);\n  }\n  .lg\\:text-m {\n    font-size: var(--lumo-font-size-m);\n  }\n  .lg\\:text-l {\n    font-size: var(--lumo-font-size-l);\n  }\n  .lg\\:text-xl {\n    font-size: var(--lumo-font-size-xl);\n  }\n  .lg\\:text-2xl {\n    font-size: var(--lumo-font-size-xxl);\n  }\n  .lg\\:text-3xl {\n    font-size: var(--lumo-font-size-xxxl);\n  }\n}\n@media (min-width: 1280px) {\n  .xl\\:text-2xs {\n    font-size: var(--lumo-font-size-xxs);\n  }\n  .xl\\:text-xs {\n    font-size: var(--lumo-font-size-xs);\n  }\n  .xl\\:text-s {\n    font-size: var(--lumo-font-size-s);\n  }\n  .xl\\:text-m {\n    font-size: var(--lumo-font-size-m);\n  }\n  .xl\\:text-l {\n    font-size: var(--lumo-font-size-l);\n  }\n  .xl\\:text-xl {\n    font-size: var(--lumo-font-size-xl);\n  }\n  .xl\\:text-2xl {\n    font-size: var(--lumo-font-size-xxl);\n  }\n  .xl\\:text-3xl {\n    font-size: var(--lumo-font-size-xxxl);\n  }\n}\n@media (min-width: 1536px) {\n  .\\32xl\\:text-2xs {\n    font-size: var(--lumo-font-size-xxs);\n  }\n  .\\32xl\\:text-xs {\n    font-size: var(--lumo-font-size-xs);\n  }\n  .\\32xl\\:text-s {\n    font-size: var(--lumo-font-size-s);\n  }\n  .\\32xl\\:text-m {\n    font-size: var(--lumo-font-size-m);\n  }\n  .\\32xl\\:text-l {\n    font-size: var(--lumo-font-size-l);\n  }\n  .\\32xl\\:text-xl {\n    font-size: var(--lumo-font-size-xl);\n  }\n  .\\32xl\\:text-2xl {\n    font-size: var(--lumo-font-size-xxl);\n  }\n  .\\32xl\\:text-3xl {\n    font-size: var(--lumo-font-size-xxxl);\n  }\n}\n",""]),t.a=i},function(e,t,a){"use strict";var n=a(57),i=a.n(n),o=a(34),r=a.n(o),s=a(131),l=a(132),h=a(133),c=a(134),d=a(135),p=a(136),u=a(137),f=a(138),v=a(139),m=a(140),g=a(141),b=a(142),_=i()(!1),y=r()(s.a),w=r()(l.a),z=r()(h.a),M=r()(c.a),x=r()(d.a),A=r()(p.a),C=r()(u.a),S=r()(f.a),k=r()(v.a),E=r()(m.a),I=r()(g.a),O=r()(b.a);_.push([e.i,'.la,.lab,.lad,.lal,.lar,.las{-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased;display:inline-block;font-style:normal;font-variant:normal;text-rendering:auto;line-height:1}.la-lg{font-size:1.33333em;line-height:.75em;vertical-align:-.0667em}.la-xs{font-size:.75em}.la-sm{font-size:.875em}.la-1x{font-size:1em}.la-2x{font-size:2em}.la-3x{font-size:3em}.la-4x{font-size:4em}.la-5x{font-size:5em}.la-6x{font-size:6em}.la-7x{font-size:7em}.la-8x{font-size:8em}.la-9x{font-size:9em}.la-10x{font-size:10em}.la-fw{text-align:center;width:1.25em}.la-ul{list-style-type:none;margin-left:2.5em;padding-left:0}.la-ul>li{position:relative}.la-li{left:-2em;position:absolute;text-align:center;width:2em;line-height:inherit}.la-border{border:solid .08em #eee;border-radius:.1em;padding:.2em .25em .15em}.la-pull-left{float:left}.la-pull-right{float:right}.la.la-pull-left,.lab.la-pull-left,.lal.la-pull-left,.lar.la-pull-left,.las.la-pull-left{margin-right:.3em}.la.la-pull-right,.lab.la-pull-right,.lal.la-pull-right,.lar.la-pull-right,.las.la-pull-right{margin-left:.3em}.la-spin{-webkit-animation:la-spin 2s infinite linear;animation:la-spin 2s infinite linear}.la-pulse{-webkit-animation:la-spin 1s infinite steps(8);animation:la-spin 1s infinite steps(8)}@-webkit-keyframes la-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}@keyframes la-spin{0%{-webkit-transform:rotate(0);transform:rotate(0)}100%{-webkit-transform:rotate(360deg);transform:rotate(360deg)}}.la-rotate-90{-webkit-transform:rotate(90deg);transform:rotate(90deg)}.la-rotate-180{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.la-rotate-270{-webkit-transform:rotate(270deg);transform:rotate(270deg)}.la-flip-horizontal{-webkit-transform:scale(-1,1);transform:scale(-1,1)}.la-flip-vertical{-webkit-transform:scale(1,-1);transform:scale(1,-1)}.la-flip-both,.la-flip-horizontal.la-flip-vertical{-webkit-transform:scale(-1,-1);transform:scale(-1,-1)}:root .la-flip-both,:root .la-flip-horizontal,:root .la-flip-vertical,:root .la-rotate-180,:root .la-rotate-270,:root .la-rotate-90{-webkit-filter:none;filter:none}.la-stack{display:inline-block;height:2em;line-height:2em;position:relative;vertical-align:middle;width:2.5em}.la-stack-1x,.la-stack-2x{left:0;position:absolute;text-align:center;width:100%}.la-stack-1x{line-height:inherit}.la-stack-2x{font-size:2em}.la-inverse{color:#fff}.la-500px:before{content:"\\f26e"}.la-accessible-icon:before{content:"\\f368"}.la-accusoft:before{content:"\\f369"}.la-acquisitions-incorporated:before{content:"\\f6af"}.la-ad:before{content:"\\f641"}.la-address-book:before{content:"\\f2b9"}.la-address-card:before{content:"\\f2bb"}.la-adjust:before{content:"\\f042"}.la-adn:before{content:"\\f170"}.la-adobe:before{content:"\\f778"}.la-adversal:before{content:"\\f36a"}.la-affiliatetheme:before{content:"\\f36b"}.la-air-freshener:before{content:"\\f5d0"}.la-airbnb:before{content:"\\f834"}.la-algolia:before{content:"\\f36c"}.la-align-center:before{content:"\\f037"}.la-align-justify:before{content:"\\f039"}.la-align-left:before{content:"\\f036"}.la-align-right:before{content:"\\f038"}.la-alipay:before{content:"\\f642"}.la-allergies:before{content:"\\f461"}.la-amazon:before{content:"\\f270"}.la-amazon-pay:before{content:"\\f42c"}.la-ambulance:before{content:"\\f0f9"}.la-american-sign-language-interpreting:before{content:"\\f2a3"}.la-amilia:before{content:"\\f36d"}.la-anchor:before{content:"\\f13d"}.la-android:before{content:"\\f17b"}.la-angellist:before{content:"\\f209"}.la-angle-double-down:before{content:"\\f103"}.la-angle-double-left:before{content:"\\f100"}.la-angle-double-right:before{content:"\\f101"}.la-angle-double-up:before{content:"\\f102"}.la-angle-down:before{content:"\\f107"}.la-angle-left:before{content:"\\f104"}.la-angle-right:before{content:"\\f105"}.la-angle-up:before{content:"\\f106"}.la-angry:before{content:"\\f556"}.la-angrycreative:before{content:"\\f36e"}.la-angular:before{content:"\\f420"}.la-ankh:before{content:"\\f644"}.la-app-store:before{content:"\\f36f"}.la-app-store-ios:before{content:"\\f370"}.la-apper:before{content:"\\f371"}.la-apple:before{content:"\\f179"}.la-apple-alt:before{content:"\\f5d1"}.la-apple-pay:before{content:"\\f415"}.la-archive:before{content:"\\f187"}.la-archway:before{content:"\\f557"}.la-arrow-alt-circle-down:before{content:"\\f358"}.la-arrow-alt-circle-left:before{content:"\\f359"}.la-arrow-alt-circle-right:before{content:"\\f35a"}.la-arrow-alt-circle-up:before{content:"\\f35b"}.la-arrow-circle-down:before{content:"\\f0ab"}.la-arrow-circle-left:before{content:"\\f0a8"}.la-arrow-circle-right:before{content:"\\f0a9"}.la-arrow-circle-up:before{content:"\\f0aa"}.la-arrow-down:before{content:"\\f063"}.la-arrow-left:before{content:"\\f060"}.la-arrow-right:before{content:"\\f061"}.la-arrow-up:before{content:"\\f062"}.la-arrows-alt:before{content:"\\f0b2"}.la-arrows-alt-h:before{content:"\\f337"}.la-arrows-alt-v:before{content:"\\f338"}.la-artstation:before{content:"\\f77a"}.la-assistive-listening-systems:before{content:"\\f2a2"}.la-asterisk:before{content:"\\f069"}.la-asymmetrik:before{content:"\\f372"}.la-at:before{content:"\\f1fa"}.la-atlas:before{content:"\\f558"}.la-atlassian:before{content:"\\f77b"}.la-atom:before{content:"\\f5d2"}.la-audible:before{content:"\\f373"}.la-audio-description:before{content:"\\f29e"}.la-autoprefixer:before{content:"\\f41c"}.la-avianex:before{content:"\\f374"}.la-aviato:before{content:"\\f421"}.la-award:before{content:"\\f559"}.la-aws:before{content:"\\f375"}.la-baby:before{content:"\\f77c"}.la-baby-carriage:before{content:"\\f77d"}.la-backspace:before{content:"\\f55a"}.la-backward:before{content:"\\f04a"}.la-bacon:before{content:"\\f7e5"}.la-balance-scale:before{content:"\\f24e"}.la-balance-scale-left:before{content:"\\f515"}.la-balance-scale-right:before{content:"\\f516"}.la-ban:before{content:"\\f05e"}.la-band-aid:before{content:"\\f462"}.la-bandcamp:before{content:"\\f2d5"}.la-barcode:before{content:"\\f02a"}.la-bars:before{content:"\\f0c9"}.la-baseball-ball:before{content:"\\f433"}.la-basketball-ball:before{content:"\\f434"}.la-bath:before{content:"\\f2cd"}.la-battery-empty:before{content:"\\f244"}.la-battery-full:before{content:"\\f240"}.la-battery-half:before{content:"\\f242"}.la-battery-quarter:before{content:"\\f243"}.la-battery-three-quarters:before{content:"\\f241"}.la-battle-net:before{content:"\\f835"}.la-bed:before{content:"\\f236"}.la-beer:before{content:"\\f0fc"}.la-behance:before{content:"\\f1b4"}.la-behance-square:before{content:"\\f1b5"}.la-bell:before{content:"\\f0f3"}.la-bell-slash:before{content:"\\f1f6"}.la-bezier-curve:before{content:"\\f55b"}.la-bible:before{content:"\\f647"}.la-bicycle:before{content:"\\f206"}.la-biking:before{content:"\\f84a"}.la-bimobject:before{content:"\\f378"}.la-binoculars:before{content:"\\f1e5"}.la-biohazard:before{content:"\\f780"}.la-birthday-cake:before{content:"\\f1fd"}.la-bitbucket:before{content:"\\f171"}.la-bitcoin:before{content:"\\f379"}.la-bity:before{content:"\\f37a"}.la-black-tie:before{content:"\\f27e"}.la-blackberry:before{content:"\\f37b"}.la-blender:before{content:"\\f517"}.la-blender-phone:before{content:"\\f6b6"}.la-blind:before{content:"\\f29d"}.la-blog:before{content:"\\f781"}.la-blogger:before{content:"\\f37c"}.la-blogger-b:before{content:"\\f37d"}.la-bluetooth:before{content:"\\f293"}.la-bluetooth-b:before{content:"\\f294"}.la-bold:before{content:"\\f032"}.la-bolt:before{content:"\\f0e7"}.la-bomb:before{content:"\\f1e2"}.la-bone:before{content:"\\f5d7"}.la-bong:before{content:"\\f55c"}.la-book:before{content:"\\f02d"}.la-book-dead:before{content:"\\f6b7"}.la-book-medical:before{content:"\\f7e6"}.la-book-open:before{content:"\\f518"}.la-book-reader:before{content:"\\f5da"}.la-bookmark:before{content:"\\f02e"}.la-bootstrap:before{content:"\\f836"}.la-border-all:before{content:"\\f84c"}.la-border-none:before{content:"\\f850"}.la-border-style:before{content:"\\f853"}.la-bowling-ball:before{content:"\\f436"}.la-box:before{content:"\\f466"}.la-box-open:before{content:"\\f49e"}.la-boxes:before{content:"\\f468"}.la-braille:before{content:"\\f2a1"}.la-brain:before{content:"\\f5dc"}.la-bread-slice:before{content:"\\f7ec"}.la-briefcase:before{content:"\\f0b1"}.la-briefcase-medical:before{content:"\\f469"}.la-broadcast-tower:before{content:"\\f519"}.la-broom:before{content:"\\f51a"}.la-brush:before{content:"\\f55d"}.la-btc:before{content:"\\f15a"}.la-buffer:before{content:"\\f837"}.la-bug:before{content:"\\f188"}.la-building:before{content:"\\f1ad"}.la-bullhorn:before{content:"\\f0a1"}.la-bullseye:before{content:"\\f140"}.la-burn:before{content:"\\f46a"}.la-buromobelexperte:before{content:"\\f37f"}.la-bus:before{content:"\\f207"}.la-bus-alt:before{content:"\\f55e"}.la-business-time:before{content:"\\f64a"}.la-buy-n-large:before{content:"\\f8a6"}.la-buysellads:before{content:"\\f20d"}.la-calculator:before{content:"\\f1ec"}.la-calendar:before{content:"\\f133"}.la-calendar-alt:before{content:"\\f073"}.la-calendar-check:before{content:"\\f274"}.la-calendar-day:before{content:"\\f783"}.la-calendar-minus:before{content:"\\f272"}.la-calendar-plus:before{content:"\\f271"}.la-calendar-times:before{content:"\\f273"}.la-calendar-week:before{content:"\\f784"}.la-camera:before{content:"\\f030"}.la-camera-retro:before{content:"\\f083"}.la-campground:before{content:"\\f6bb"}.la-canadian-maple-leaf:before{content:"\\f785"}.la-candy-cane:before{content:"\\f786"}.la-cannabis:before{content:"\\f55f"}.la-capsules:before{content:"\\f46b"}.la-car:before{content:"\\f1b9"}.la-car-alt:before{content:"\\f5de"}.la-car-battery:before{content:"\\f5df"}.la-car-crash:before{content:"\\f5e1"}.la-car-side:before{content:"\\f5e4"}.la-caret-down:before{content:"\\f0d7"}.la-caret-left:before{content:"\\f0d9"}.la-caret-right:before{content:"\\f0da"}.la-caret-square-down:before{content:"\\f150"}.la-caret-square-left:before{content:"\\f191"}.la-caret-square-right:before{content:"\\f152"}.la-caret-square-up:before{content:"\\f151"}.la-caret-up:before{content:"\\f0d8"}.la-carrot:before{content:"\\f787"}.la-cart-arrow-down:before{content:"\\f218"}.la-cart-plus:before{content:"\\f217"}.la-cash-register:before{content:"\\f788"}.la-cat:before{content:"\\f6be"}.la-cc-amazon-pay:before{content:"\\f42d"}.la-cc-amex:before{content:"\\f1f3"}.la-cc-apple-pay:before{content:"\\f416"}.la-cc-diners-club:before{content:"\\f24c"}.la-cc-discover:before{content:"\\f1f2"}.la-cc-jcb:before{content:"\\f24b"}.la-cc-mastercard:before{content:"\\f1f1"}.la-cc-paypal:before{content:"\\f1f4"}.la-cc-stripe:before{content:"\\f1f5"}.la-cc-visa:before{content:"\\f1f0"}.la-centercode:before{content:"\\f380"}.la-centos:before{content:"\\f789"}.la-certificate:before{content:"\\f0a3"}.la-chair:before{content:"\\f6c0"}.la-chalkboard:before{content:"\\f51b"}.la-chalkboard-teacher:before{content:"\\f51c"}.la-charging-station:before{content:"\\f5e7"}.la-chart-area:before{content:"\\f1fe"}.la-chart-bar:before{content:"\\f080"}.la-chart-line:before{content:"\\f201"}.la-chart-pie:before{content:"\\f200"}.la-check:before{content:"\\f00c"}.la-check-circle:before{content:"\\f058"}.la-check-double:before{content:"\\f560"}.la-check-square:before{content:"\\f14a"}.la-cheese:before{content:"\\f7ef"}.la-chess:before{content:"\\f439"}.la-chess-bishop:before{content:"\\f43a"}.la-chess-board:before{content:"\\f43c"}.la-chess-king:before{content:"\\f43f"}.la-chess-knight:before{content:"\\f441"}.la-chess-pawn:before{content:"\\f443"}.la-chess-queen:before{content:"\\f445"}.la-chess-rook:before{content:"\\f447"}.la-chevron-circle-down:before{content:"\\f13a"}.la-chevron-circle-left:before{content:"\\f137"}.la-chevron-circle-right:before{content:"\\f138"}.la-chevron-circle-up:before{content:"\\f139"}.la-chevron-down:before{content:"\\f078"}.la-chevron-left:before{content:"\\f053"}.la-chevron-right:before{content:"\\f054"}.la-chevron-up:before{content:"\\f077"}.la-child:before{content:"\\f1ae"}.la-chrome:before{content:"\\f268"}.la-chromecast:before{content:"\\f838"}.la-church:before{content:"\\f51d"}.la-circle:before{content:"\\f111"}.la-circle-notch:before{content:"\\f1ce"}.la-city:before{content:"\\f64f"}.la-clinic-medical:before{content:"\\f7f2"}.la-clipboard:before{content:"\\f328"}.la-clipboard-check:before{content:"\\f46c"}.la-clipboard-list:before{content:"\\f46d"}.la-clock:before{content:"\\f017"}.la-clone:before{content:"\\f24d"}.la-closed-captioning:before{content:"\\f20a"}.la-cloud:before{content:"\\f0c2"}.la-cloud-download-alt:before{content:"\\f381"}.la-cloud-meatball:before{content:"\\f73b"}.la-cloud-moon:before{content:"\\f6c3"}.la-cloud-moon-rain:before{content:"\\f73c"}.la-cloud-rain:before{content:"\\f73d"}.la-cloud-showers-heavy:before{content:"\\f740"}.la-cloud-sun:before{content:"\\f6c4"}.la-cloud-sun-rain:before{content:"\\f743"}.la-cloud-upload-alt:before{content:"\\f382"}.la-cloudscale:before{content:"\\f383"}.la-cloudsmith:before{content:"\\f384"}.la-cloudversify:before{content:"\\f385"}.la-cocktail:before{content:"\\f561"}.la-code:before{content:"\\f121"}.la-code-branch:before{content:"\\f126"}.la-codepen:before{content:"\\f1cb"}.la-codiepie:before{content:"\\f284"}.la-coffee:before{content:"\\f0f4"}.la-cog:before{content:"\\f013"}.la-cogs:before{content:"\\f085"}.la-coins:before{content:"\\f51e"}.la-columns:before{content:"\\f0db"}.la-comment:before{content:"\\f075"}.la-comment-alt:before{content:"\\f27a"}.la-comment-dollar:before{content:"\\f651"}.la-comment-dots:before{content:"\\f4ad"}.la-comment-medical:before{content:"\\f7f5"}.la-comment-slash:before{content:"\\f4b3"}.la-comments:before{content:"\\f086"}.la-comments-dollar:before{content:"\\f653"}.la-compact-disc:before{content:"\\f51f"}.la-compass:before{content:"\\f14e"}.la-compress:before{content:"\\f066"}.la-compress-arrows-alt:before{content:"\\f78c"}.la-concierge-bell:before{content:"\\f562"}.la-confluence:before{content:"\\f78d"}.la-connectdevelop:before{content:"\\f20e"}.la-contao:before{content:"\\f26d"}.la-cookie:before{content:"\\f563"}.la-cookie-bite:before{content:"\\f564"}.la-copy:before{content:"\\f0c5"}.la-copyright:before{content:"\\f1f9"}.la-cotton-bureau:before{content:"\\f89e"}.la-couch:before{content:"\\f4b8"}.la-cpanel:before{content:"\\f388"}.la-creative-commons:before{content:"\\f25e"}.la-creative-commons-by:before{content:"\\f4e7"}.la-creative-commons-nc:before{content:"\\f4e8"}.la-creative-commons-nc-eu:before{content:"\\f4e9"}.la-creative-commons-nc-jp:before{content:"\\f4ea"}.la-creative-commons-nd:before{content:"\\f4eb"}.la-creative-commons-pd:before{content:"\\f4ec"}.la-creative-commons-pd-alt:before{content:"\\f4ed"}.la-creative-commons-remix:before{content:"\\f4ee"}.la-creative-commons-sa:before{content:"\\f4ef"}.la-creative-commons-sampling:before{content:"\\f4f0"}.la-creative-commons-sampling-plus:before{content:"\\f4f1"}.la-creative-commons-share:before{content:"\\f4f2"}.la-creative-commons-zero:before{content:"\\f4f3"}.la-credit-card:before{content:"\\f09d"}.la-critical-role:before{content:"\\f6c9"}.la-crop:before{content:"\\f125"}.la-crop-alt:before{content:"\\f565"}.la-cross:before{content:"\\f654"}.la-crosshairs:before{content:"\\f05b"}.la-crow:before{content:"\\f520"}.la-crown:before{content:"\\f521"}.la-crutch:before{content:"\\f7f7"}.la-css3:before{content:"\\f13c"}.la-css3-alt:before{content:"\\f38b"}.la-cube:before{content:"\\f1b2"}.la-cubes:before{content:"\\f1b3"}.la-cut:before{content:"\\f0c4"}.la-cuttlefish:before{content:"\\f38c"}.la-d-and-d:before{content:"\\f38d"}.la-d-and-d-beyond:before{content:"\\f6ca"}.la-dashcube:before{content:"\\f210"}.la-database:before{content:"\\f1c0"}.la-deaf:before{content:"\\f2a4"}.la-delicious:before{content:"\\f1a5"}.la-democrat:before{content:"\\f747"}.la-deploydog:before{content:"\\f38e"}.la-deskpro:before{content:"\\f38f"}.la-desktop:before{content:"\\f108"}.la-dev:before{content:"\\f6cc"}.la-deviantart:before{content:"\\f1bd"}.la-dharmachakra:before{content:"\\f655"}.la-dhl:before{content:"\\f790"}.la-diagnoses:before{content:"\\f470"}.la-diaspora:before{content:"\\f791"}.la-dice:before{content:"\\f522"}.la-dice-d20:before{content:"\\f6cf"}.la-dice-d6:before{content:"\\f6d1"}.la-dice-five:before{content:"\\f523"}.la-dice-four:before{content:"\\f524"}.la-dice-one:before{content:"\\f525"}.la-dice-six:before{content:"\\f526"}.la-dice-three:before{content:"\\f527"}.la-dice-two:before{content:"\\f528"}.la-digg:before{content:"\\f1a6"}.la-digital-ocean:before{content:"\\f391"}.la-digital-tachograph:before{content:"\\f566"}.la-directions:before{content:"\\f5eb"}.la-discord:before{content:"\\f392"}.la-discourse:before{content:"\\f393"}.la-divide:before{content:"\\f529"}.la-dizzy:before{content:"\\f567"}.la-dna:before{content:"\\f471"}.la-dochub:before{content:"\\f394"}.la-docker:before{content:"\\f395"}.la-dog:before{content:"\\f6d3"}.la-dollar-sign:before{content:"\\f155"}.la-dolly:before{content:"\\f472"}.la-dolly-flatbed:before{content:"\\f474"}.la-donate:before{content:"\\f4b9"}.la-door-closed:before{content:"\\f52a"}.la-door-open:before{content:"\\f52b"}.la-dot-circle:before{content:"\\f192"}.la-dove:before{content:"\\f4ba"}.la-download:before{content:"\\f019"}.la-draft2digital:before{content:"\\f396"}.la-drafting-compass:before{content:"\\f568"}.la-dragon:before{content:"\\f6d5"}.la-draw-polygon:before{content:"\\f5ee"}.la-dribbble:before{content:"\\f17d"}.la-dribbble-square:before{content:"\\f397"}.la-dropbox:before{content:"\\f16b"}.la-drum:before{content:"\\f569"}.la-drum-steelpan:before{content:"\\f56a"}.la-drumstick-bite:before{content:"\\f6d7"}.la-drupal:before{content:"\\f1a9"}.la-dumbbell:before{content:"\\f44b"}.la-dumpster:before{content:"\\f793"}.la-dumpster-fire:before{content:"\\f794"}.la-dungeon:before{content:"\\f6d9"}.la-dyalog:before{content:"\\f399"}.la-earlybirds:before{content:"\\f39a"}.la-ebay:before{content:"\\f4f4"}.la-edge:before{content:"\\f282"}.la-edit:before{content:"\\f044"}.la-egg:before{content:"\\f7fb"}.la-eject:before{content:"\\f052"}.la-elementor:before{content:"\\f430"}.la-ellipsis-h:before{content:"\\f141"}.la-ellipsis-v:before{content:"\\f142"}.la-ello:before{content:"\\f5f1"}.la-ember:before{content:"\\f423"}.la-empire:before{content:"\\f1d1"}.la-envelope:before{content:"\\f0e0"}.la-envelope-open:before{content:"\\f2b6"}.la-envelope-open-text:before{content:"\\f658"}.la-envelope-square:before{content:"\\f199"}.la-envira:before{content:"\\f299"}.la-equals:before{content:"\\f52c"}.la-eraser:before{content:"\\f12d"}.la-erlang:before{content:"\\f39d"}.la-ethereum:before{content:"\\f42e"}.la-ethernet:before{content:"\\f796"}.la-etsy:before{content:"\\f2d7"}.la-euro-sign:before{content:"\\f153"}.la-evernote:before{content:"\\f839"}.la-exchange-alt:before{content:"\\f362"}.la-exclamation:before{content:"\\f12a"}.la-exclamation-circle:before{content:"\\f06a"}.la-exclamation-triangle:before{content:"\\f071"}.la-expand:before{content:"\\f065"}.la-expand-arrows-alt:before{content:"\\f31e"}.la-expeditedssl:before{content:"\\f23e"}.la-external-link-alt:before{content:"\\f35d"}.la-external-link-square-alt:before{content:"\\f360"}.la-eye:before{content:"\\f06e"}.la-eye-dropper:before{content:"\\f1fb"}.la-eye-slash:before{content:"\\f070"}.la-facebook:before{content:"\\f09a"}.la-facebook-f:before{content:"\\f39e"}.la-facebook-messenger:before{content:"\\f39f"}.la-facebook-square:before{content:"\\f082"}.la-fan:before{content:"\\f863"}.la-fantasy-flight-games:before{content:"\\f6dc"}.la-fast-backward:before{content:"\\f049"}.la-fast-forward:before{content:"\\f050"}.la-fax:before{content:"\\f1ac"}.la-feather:before{content:"\\f52d"}.la-feather-alt:before{content:"\\f56b"}.la-fedex:before{content:"\\f797"}.la-fedora:before{content:"\\f798"}.la-female:before{content:"\\f182"}.la-fighter-jet:before{content:"\\f0fb"}.la-figma:before{content:"\\f799"}.la-file:before{content:"\\f15b"}.la-file-alt:before{content:"\\f15c"}.la-file-archive:before{content:"\\f1c6"}.la-file-audio:before{content:"\\f1c7"}.la-file-code:before{content:"\\f1c9"}.la-file-contract:before{content:"\\f56c"}.la-file-csv:before{content:"\\f6dd"}.la-file-download:before{content:"\\f56d"}.la-file-excel:before{content:"\\f1c3"}.la-file-export:before{content:"\\f56e"}.la-file-image:before{content:"\\f1c5"}.la-file-import:before{content:"\\f56f"}.la-file-invoice:before{content:"\\f570"}.la-file-invoice-dollar:before{content:"\\f571"}.la-file-medical:before{content:"\\f477"}.la-file-medical-alt:before{content:"\\f478"}.la-file-pdf:before{content:"\\f1c1"}.la-file-powerpoint:before{content:"\\f1c4"}.la-file-prescription:before{content:"\\f572"}.la-file-signature:before{content:"\\f573"}.la-file-upload:before{content:"\\f574"}.la-file-video:before{content:"\\f1c8"}.la-file-word:before{content:"\\f1c2"}.la-fill:before{content:"\\f575"}.la-fill-drip:before{content:"\\f576"}.la-film:before{content:"\\f008"}.la-filter:before{content:"\\f0b0"}.la-fingerprint:before{content:"\\f577"}.la-fire:before{content:"\\f06d"}.la-fire-alt:before{content:"\\f7e4"}.la-fire-extinguisher:before{content:"\\f134"}.la-firefox:before{content:"\\f269"}.la-first-aid:before{content:"\\f479"}.la-first-order:before{content:"\\f2b0"}.la-first-order-alt:before{content:"\\f50a"}.la-firstdraft:before{content:"\\f3a1"}.la-fish:before{content:"\\f578"}.la-fist-raised:before{content:"\\f6de"}.la-flag:before{content:"\\f024"}.la-flag-checkered:before{content:"\\f11e"}.la-flag-usa:before{content:"\\f74d"}.la-flask:before{content:"\\f0c3"}.la-flickr:before{content:"\\f16e"}.la-flipboard:before{content:"\\f44d"}.la-flushed:before{content:"\\f579"}.la-fly:before{content:"\\f417"}.la-folder:before{content:"\\f07b"}.la-folder-minus:before{content:"\\f65d"}.la-folder-open:before{content:"\\f07c"}.la-folder-plus:before{content:"\\f65e"}.la-font:before{content:"\\f031"}.la-font-awesome:before{content:"\\f2b4"}.la-font-awesome-alt:before{content:"\\f35c"}.la-font-awesome-flag:before{content:"\\f425"}.la-font-awesome-logo-full:before{content:"\\f4e6"}.la-fonticons:before{content:"\\f280"}.la-fonticons-fi:before{content:"\\f3a2"}.la-football-ball:before{content:"\\f44e"}.la-fort-awesome:before{content:"\\f286"}.la-fort-awesome-alt:before{content:"\\f3a3"}.la-forumbee:before{content:"\\f211"}.la-forward:before{content:"\\f04e"}.la-foursquare:before{content:"\\f180"}.la-free-code-camp:before{content:"\\f2c5"}.la-freebsd:before{content:"\\f3a4"}.la-frog:before{content:"\\f52e"}.la-frown:before{content:"\\f119"}.la-frown-open:before{content:"\\f57a"}.la-fulcrum:before{content:"\\f50b"}.la-funnel-dollar:before{content:"\\f662"}.la-futbol:before{content:"\\f1e3"}.la-galactic-republic:before{content:"\\f50c"}.la-galactic-senate:before{content:"\\f50d"}.la-gamepad:before{content:"\\f11b"}.la-gas-pump:before{content:"\\f52f"}.la-gavel:before{content:"\\f0e3"}.la-gem:before{content:"\\f3a5"}.la-genderless:before{content:"\\f22d"}.la-get-pocket:before{content:"\\f265"}.la-gg:before{content:"\\f260"}.la-gg-circle:before{content:"\\f261"}.la-ghost:before{content:"\\f6e2"}.la-gift:before{content:"\\f06b"}.la-gifts:before{content:"\\f79c"}.la-git:before{content:"\\f1d3"}.la-git-alt:before{content:"\\f841"}.la-git-square:before{content:"\\f1d2"}.la-github:before{content:"\\f09b"}.la-github-alt:before{content:"\\f113"}.la-github-square:before{content:"\\f092"}.la-gitkraken:before{content:"\\f3a6"}.la-gitlab:before{content:"\\f296"}.la-gitter:before{content:"\\f426"}.la-glass-cheers:before{content:"\\f79f"}.la-glass-martini:before{content:"\\f000"}.la-glass-martini-alt:before{content:"\\f57b"}.la-glass-whiskey:before{content:"\\f7a0"}.la-glasses:before{content:"\\f530"}.la-glide:before{content:"\\f2a5"}.la-glide-g:before{content:"\\f2a6"}.la-globe:before{content:"\\f0ac"}.la-globe-africa:before{content:"\\f57c"}.la-globe-americas:before{content:"\\f57d"}.la-globe-asia:before{content:"\\f57e"}.la-globe-europe:before{content:"\\f7a2"}.la-gofore:before{content:"\\f3a7"}.la-golf-ball:before{content:"\\f450"}.la-goodreads:before{content:"\\f3a8"}.la-goodreads-g:before{content:"\\f3a9"}.la-google:before{content:"\\f1a0"}.la-google-drive:before{content:"\\f3aa"}.la-google-play:before{content:"\\f3ab"}.la-google-plus:before{content:"\\f2b3"}.la-google-plus-g:before{content:"\\f0d5"}.la-google-plus-square:before{content:"\\f0d4"}.la-google-wallet:before{content:"\\f1ee"}.la-gopuram:before{content:"\\f664"}.la-graduation-cap:before{content:"\\f19d"}.la-gratipay:before{content:"\\f184"}.la-grav:before{content:"\\f2d6"}.la-greater-than:before{content:"\\f531"}.la-greater-than-equal:before{content:"\\f532"}.la-grimace:before{content:"\\f57f"}.la-grin:before{content:"\\f580"}.la-grin-alt:before{content:"\\f581"}.la-grin-beam:before{content:"\\f582"}.la-grin-beam-sweat:before{content:"\\f583"}.la-grin-hearts:before{content:"\\f584"}.la-grin-squint:before{content:"\\f585"}.la-grin-squint-tears:before{content:"\\f586"}.la-grin-stars:before{content:"\\f587"}.la-grin-tears:before{content:"\\f588"}.la-grin-tongue:before{content:"\\f589"}.la-grin-tongue-squint:before{content:"\\f58a"}.la-grin-tongue-wink:before{content:"\\f58b"}.la-grin-wink:before{content:"\\f58c"}.la-grip-horizontal:before{content:"\\f58d"}.la-grip-lines:before{content:"\\f7a4"}.la-grip-lines-vertical:before{content:"\\f7a5"}.la-grip-vertical:before{content:"\\f58e"}.la-gripfire:before{content:"\\f3ac"}.la-grunt:before{content:"\\f3ad"}.la-guitar:before{content:"\\f7a6"}.la-gulp:before{content:"\\f3ae"}.la-h-square:before{content:"\\f0fd"}.la-hacker-news:before{content:"\\f1d4"}.la-hacker-news-square:before{content:"\\f3af"}.la-hackerrank:before{content:"\\f5f7"}.la-hamburger:before{content:"\\f805"}.la-hammer:before{content:"\\f6e3"}.la-hamsa:before{content:"\\f665"}.la-hand-holding:before{content:"\\f4bd"}.la-hand-holding-heart:before{content:"\\f4be"}.la-hand-holding-usd:before{content:"\\f4c0"}.la-hand-lizard:before{content:"\\f258"}.la-hand-middle-finger:before{content:"\\f806"}.la-hand-paper:before{content:"\\f256"}.la-hand-peace:before{content:"\\f25b"}.la-hand-point-down:before{content:"\\f0a7"}.la-hand-point-left:before{content:"\\f0a5"}.la-hand-point-right:before{content:"\\f0a4"}.la-hand-point-up:before{content:"\\f0a6"}.la-hand-pointer:before{content:"\\f25a"}.la-hand-rock:before{content:"\\f255"}.la-hand-scissors:before{content:"\\f257"}.la-hand-spock:before{content:"\\f259"}.la-hands:before{content:"\\f4c2"}.la-hands-helping:before{content:"\\f4c4"}.la-handshake:before{content:"\\f2b5"}.la-hanukiah:before{content:"\\f6e6"}.la-hard-hat:before{content:"\\f807"}.la-hashtag:before{content:"\\f292"}.la-hat-cowboy:before{content:"\\f8c0"}.la-hat-cowboy-side:before{content:"\\f8c1"}.la-hat-wizard:before{content:"\\f6e8"}.la-haykal:before{content:"\\f666"}.la-hdd:before{content:"\\f0a0"}.la-heading:before{content:"\\f1dc"}.la-headphones:before{content:"\\f025"}.la-headphones-alt:before{content:"\\f58f"}.la-headset:before{content:"\\f590"}.la-heart:before{content:"\\f004"}.la-heart-broken:before{content:"\\f7a9"}.la-heartbeat:before{content:"\\f21e"}.la-helicopter:before{content:"\\f533"}.la-highlighter:before{content:"\\f591"}.la-hiking:before{content:"\\f6ec"}.la-hippo:before{content:"\\f6ed"}.la-hips:before{content:"\\f452"}.la-hire-a-helper:before{content:"\\f3b0"}.la-history:before{content:"\\f1da"}.la-hockey-puck:before{content:"\\f453"}.la-holly-berry:before{content:"\\f7aa"}.la-home:before{content:"\\f015"}.la-hooli:before{content:"\\f427"}.la-hornbill:before{content:"\\f592"}.la-horse:before{content:"\\f6f0"}.la-horse-head:before{content:"\\f7ab"}.la-hospital:before{content:"\\f0f8"}.la-hospital-alt:before{content:"\\f47d"}.la-hospital-symbol:before{content:"\\f47e"}.la-hot-tub:before{content:"\\f593"}.la-hotdog:before{content:"\\f80f"}.la-hotel:before{content:"\\f594"}.la-hotjar:before{content:"\\f3b1"}.la-hourglass:before{content:"\\f254"}.la-hourglass-end:before{content:"\\f253"}.la-hourglass-half:before{content:"\\f252"}.la-hourglass-start:before{content:"\\f251"}.la-house-damage:before{content:"\\f6f1"}.la-houzz:before{content:"\\f27c"}.la-hryvnia:before{content:"\\f6f2"}.la-html5:before{content:"\\f13b"}.la-hubspot:before{content:"\\f3b2"}.la-i-cursor:before{content:"\\f246"}.la-ice-cream:before{content:"\\f810"}.la-icicles:before{content:"\\f7ad"}.la-icons:before{content:"\\f86d"}.la-id-badge:before{content:"\\f2c1"}.la-id-card:before{content:"\\f2c2"}.la-id-card-alt:before{content:"\\f47f"}.la-igloo:before{content:"\\f7ae"}.la-image:before{content:"\\f03e"}.la-images:before{content:"\\f302"}.la-imdb:before{content:"\\f2d8"}.la-inbox:before{content:"\\f01c"}.la-indent:before{content:"\\f03c"}.la-industry:before{content:"\\f275"}.la-infinity:before{content:"\\f534"}.la-info:before{content:"\\f129"}.la-info-circle:before{content:"\\f05a"}.la-instagram:before{content:"\\f16d"}.la-intercom:before{content:"\\f7af"}.la-internet-explorer:before{content:"\\f26b"}.la-invision:before{content:"\\f7b0"}.la-ioxhost:before{content:"\\f208"}.la-italic:before{content:"\\f033"}.la-itch-io:before{content:"\\f83a"}.la-itunes:before{content:"\\f3b4"}.la-itunes-note:before{content:"\\f3b5"}.la-java:before{content:"\\f4e4"}.la-jedi:before{content:"\\f669"}.la-jedi-order:before{content:"\\f50e"}.la-jenkins:before{content:"\\f3b6"}.la-jira:before{content:"\\f7b1"}.la-joget:before{content:"\\f3b7"}.la-joint:before{content:"\\f595"}.la-joomla:before{content:"\\f1aa"}.la-journal-whills:before{content:"\\f66a"}.la-js:before{content:"\\f3b8"}.la-js-square:before{content:"\\f3b9"}.la-jsfiddle:before{content:"\\f1cc"}.la-kaaba:before{content:"\\f66b"}.la-kaggle:before{content:"\\f5fa"}.la-key:before{content:"\\f084"}.la-keybase:before{content:"\\f4f5"}.la-keyboard:before{content:"\\f11c"}.la-keycdn:before{content:"\\f3ba"}.la-khanda:before{content:"\\f66d"}.la-kickstarter:before{content:"\\f3bb"}.la-kickstarter-k:before{content:"\\f3bc"}.la-kiss:before{content:"\\f596"}.la-kiss-beam:before{content:"\\f597"}.la-kiss-wink-heart:before{content:"\\f598"}.la-kiwi-bird:before{content:"\\f535"}.la-korvue:before{content:"\\f42f"}.la-landmark:before{content:"\\f66f"}.la-language:before{content:"\\f1ab"}.la-laptop:before{content:"\\f109"}.la-laptop-code:before{content:"\\f5fc"}.la-laptop-medical:before{content:"\\f812"}.la-laravel:before{content:"\\f3bd"}.la-lastfm:before{content:"\\f202"}.la-lastfm-square:before{content:"\\f203"}.la-laugh:before{content:"\\f599"}.la-laugh-beam:before{content:"\\f59a"}.la-laugh-squint:before{content:"\\f59b"}.la-laugh-wink:before{content:"\\f59c"}.la-layer-group:before{content:"\\f5fd"}.la-leaf:before{content:"\\f06c"}.la-leanpub:before{content:"\\f212"}.la-lemon:before{content:"\\f094"}.la-less:before{content:"\\f41d"}.la-less-than:before{content:"\\f536"}.la-less-than-equal:before{content:"\\f537"}.la-level-down-alt:before{content:"\\f3be"}.la-level-up-alt:before{content:"\\f3bf"}.la-life-ring:before{content:"\\f1cd"}.la-lightbulb:before{content:"\\f0eb"}.la-line:before{content:"\\f3c0"}.la-link:before{content:"\\f0c1"}.la-linkedin:before{content:"\\f08c"}.la-linkedin-in:before{content:"\\f0e1"}.la-linode:before{content:"\\f2b8"}.la-linux:before{content:"\\f17c"}.la-lira-sign:before{content:"\\f195"}.la-list:before{content:"\\f03a"}.la-list-alt:before{content:"\\f022"}.la-list-ol:before{content:"\\f0cb"}.la-list-ul:before{content:"\\f0ca"}.la-location-arrow:before{content:"\\f124"}.la-lock:before{content:"\\f023"}.la-lock-open:before{content:"\\f3c1"}.la-long-arrow-alt-down:before{content:"\\f309"}.la-long-arrow-alt-left:before{content:"\\f30a"}.la-long-arrow-alt-right:before{content:"\\f30b"}.la-long-arrow-alt-up:before{content:"\\f30c"}.la-low-vision:before{content:"\\f2a8"}.la-luggage-cart:before{content:"\\f59d"}.la-lyft:before{content:"\\f3c3"}.la-magento:before{content:"\\f3c4"}.la-magic:before{content:"\\f0d0"}.la-magnet:before{content:"\\f076"}.la-mail-bulk:before{content:"\\f674"}.la-mailchimp:before{content:"\\f59e"}.la-male:before{content:"\\f183"}.la-mandalorian:before{content:"\\f50f"}.la-map:before{content:"\\f279"}.la-map-marked:before{content:"\\f59f"}.la-map-marked-alt:before{content:"\\f5a0"}.la-map-marker:before{content:"\\f041"}.la-map-marker-alt:before{content:"\\f3c5"}.la-map-pin:before{content:"\\f276"}.la-map-signs:before{content:"\\f277"}.la-markdown:before{content:"\\f60f"}.la-marker:before{content:"\\f5a1"}.la-mars:before{content:"\\f222"}.la-mars-double:before{content:"\\f227"}.la-mars-stroke:before{content:"\\f229"}.la-mars-stroke-h:before{content:"\\f22b"}.la-mars-stroke-v:before{content:"\\f22a"}.la-mask:before{content:"\\f6fa"}.la-mastodon:before{content:"\\f4f6"}.la-maxcdn:before{content:"\\f136"}.la-mdb:before{content:"\\f8ca"}.la-medal:before{content:"\\f5a2"}.la-medapps:before{content:"\\f3c6"}.la-medium:before{content:"\\f23a"}.la-medium-m:before{content:"\\f3c7"}.la-medkit:before{content:"\\f0fa"}.la-medrt:before{content:"\\f3c8"}.la-meetup:before{content:"\\f2e0"}.la-megaport:before{content:"\\f5a3"}.la-meh:before{content:"\\f11a"}.la-meh-blank:before{content:"\\f5a4"}.la-meh-rolling-eyes:before{content:"\\f5a5"}.la-memory:before{content:"\\f538"}.la-mendeley:before{content:"\\f7b3"}.la-menorah:before{content:"\\f676"}.la-mercury:before{content:"\\f223"}.la-meteor:before{content:"\\f753"}.la-microchip:before{content:"\\f2db"}.la-microphone:before{content:"\\f130"}.la-microphone-alt:before{content:"\\f3c9"}.la-microphone-alt-slash:before{content:"\\f539"}.la-microphone-slash:before{content:"\\f131"}.la-microscope:before{content:"\\f610"}.la-microsoft:before{content:"\\f3ca"}.la-minus:before{content:"\\f068"}.la-minus-circle:before{content:"\\f056"}.la-minus-square:before{content:"\\f146"}.la-mitten:before{content:"\\f7b5"}.la-mix:before{content:"\\f3cb"}.la-mixcloud:before{content:"\\f289"}.la-mizuni:before{content:"\\f3cc"}.la-mobile:before{content:"\\f10b"}.la-mobile-alt:before{content:"\\f3cd"}.la-modx:before{content:"\\f285"}.la-monero:before{content:"\\f3d0"}.la-money-bill:before{content:"\\f0d6"}.la-money-bill-alt:before{content:"\\f3d1"}.la-money-bill-wave:before{content:"\\f53a"}.la-money-bill-wave-alt:before{content:"\\f53b"}.la-money-check:before{content:"\\f53c"}.la-money-check-alt:before{content:"\\f53d"}.la-monument:before{content:"\\f5a6"}.la-moon:before{content:"\\f186"}.la-mortar-pestle:before{content:"\\f5a7"}.la-mosque:before{content:"\\f678"}.la-motorcycle:before{content:"\\f21c"}.la-mountain:before{content:"\\f6fc"}.la-mouse:before{content:"\\f8cc"}.la-mouse-pointer:before{content:"\\f245"}.la-mug-hot:before{content:"\\f7b6"}.la-music:before{content:"\\f001"}.la-napster:before{content:"\\f3d2"}.la-neos:before{content:"\\f612"}.la-network-wired:before{content:"\\f6ff"}.la-neuter:before{content:"\\f22c"}.la-newspaper:before{content:"\\f1ea"}.la-nimblr:before{content:"\\f5a8"}.la-node:before{content:"\\f419"}.la-node-js:before{content:"\\f3d3"}.la-not-equal:before{content:"\\f53e"}.la-notes-medical:before{content:"\\f481"}.la-npm:before{content:"\\f3d4"}.la-ns8:before{content:"\\f3d5"}.la-nutritionix:before{content:"\\f3d6"}.la-object-group:before{content:"\\f247"}.la-object-ungroup:before{content:"\\f248"}.la-odnoklassniki:before{content:"\\f263"}.la-odnoklassniki-square:before{content:"\\f264"}.la-oil-can:before{content:"\\f613"}.la-old-republic:before{content:"\\f510"}.la-om:before{content:"\\f679"}.la-opencart:before{content:"\\f23d"}.la-openid:before{content:"\\f19b"}.la-opera:before{content:"\\f26a"}.la-optin-monster:before{content:"\\f23c"}.la-orcid:before{content:"\\f8d2"}.la-osi:before{content:"\\f41a"}.la-otter:before{content:"\\f700"}.la-outdent:before{content:"\\f03b"}.la-page4:before{content:"\\f3d7"}.la-pagelines:before{content:"\\f18c"}.la-pager:before{content:"\\f815"}.la-paint-brush:before{content:"\\f1fc"}.la-paint-roller:before{content:"\\f5aa"}.la-palette:before{content:"\\f53f"}.la-palfed:before{content:"\\f3d8"}.la-pallet:before{content:"\\f482"}.la-paper-plane:before{content:"\\f1d8"}.la-paperclip:before{content:"\\f0c6"}.la-parachute-box:before{content:"\\f4cd"}.la-paragraph:before{content:"\\f1dd"}.la-parking:before{content:"\\f540"}.la-passport:before{content:"\\f5ab"}.la-pastafarianism:before{content:"\\f67b"}.la-paste:before{content:"\\f0ea"}.la-patreon:before{content:"\\f3d9"}.la-pause:before{content:"\\f04c"}.la-pause-circle:before{content:"\\f28b"}.la-paw:before{content:"\\f1b0"}.la-paypal:before{content:"\\f1ed"}.la-peace:before{content:"\\f67c"}.la-pen:before{content:"\\f304"}.la-pen-alt:before{content:"\\f305"}.la-pen-fancy:before{content:"\\f5ac"}.la-pen-nib:before{content:"\\f5ad"}.la-pen-square:before{content:"\\f14b"}.la-pencil-alt:before{content:"\\f303"}.la-pencil-ruler:before{content:"\\f5ae"}.la-penny-arcade:before{content:"\\f704"}.la-people-carry:before{content:"\\f4ce"}.la-pepper-hot:before{content:"\\f816"}.la-percent:before{content:"\\f295"}.la-percentage:before{content:"\\f541"}.la-periscope:before{content:"\\f3da"}.la-person-booth:before{content:"\\f756"}.la-phabricator:before{content:"\\f3db"}.la-phoenix-framework:before{content:"\\f3dc"}.la-phoenix-squadron:before{content:"\\f511"}.la-phone:before{content:"\\f095"}.la-phone-alt:before{content:"\\f879"}.la-phone-slash:before{content:"\\f3dd"}.la-phone-square:before{content:"\\f098"}.la-phone-square-alt:before{content:"\\f87b"}.la-phone-volume:before{content:"\\f2a0"}.la-photo-video:before{content:"\\f87c"}.la-php:before{content:"\\f457"}.la-pied-piper:before{content:"\\f2ae"}.la-pied-piper-alt:before{content:"\\f1a8"}.la-pied-piper-hat:before{content:"\\f4e5"}.la-pied-piper-pp:before{content:"\\f1a7"}.la-piggy-bank:before{content:"\\f4d3"}.la-pills:before{content:"\\f484"}.la-pinterest:before{content:"\\f0d2"}.la-pinterest-p:before{content:"\\f231"}.la-pinterest-square:before{content:"\\f0d3"}.la-pizza-slice:before{content:"\\f818"}.la-place-of-worship:before{content:"\\f67f"}.la-plane:before{content:"\\f072"}.la-plane-arrival:before{content:"\\f5af"}.la-plane-departure:before{content:"\\f5b0"}.la-play:before{content:"\\f04b"}.la-play-circle:before{content:"\\f144"}.la-playstation:before{content:"\\f3df"}.la-plug:before{content:"\\f1e6"}.la-plus:before{content:"\\f067"}.la-plus-circle:before{content:"\\f055"}.la-plus-square:before{content:"\\f0fe"}.la-podcast:before{content:"\\f2ce"}.la-poll:before{content:"\\f681"}.la-poll-h:before{content:"\\f682"}.la-poo:before{content:"\\f2fe"}.la-poo-storm:before{content:"\\f75a"}.la-poop:before{content:"\\f619"}.la-portrait:before{content:"\\f3e0"}.la-pound-sign:before{content:"\\f154"}.la-power-off:before{content:"\\f011"}.la-pray:before{content:"\\f683"}.la-praying-hands:before{content:"\\f684"}.la-prescription:before{content:"\\f5b1"}.la-prescription-bottle:before{content:"\\f485"}.la-prescription-bottle-alt:before{content:"\\f486"}.la-print:before{content:"\\f02f"}.la-procedures:before{content:"\\f487"}.la-product-hunt:before{content:"\\f288"}.la-project-diagram:before{content:"\\f542"}.la-pushed:before{content:"\\f3e1"}.la-puzzle-piece:before{content:"\\f12e"}.la-python:before{content:"\\f3e2"}.la-qq:before{content:"\\f1d6"}.la-qrcode:before{content:"\\f029"}.la-question:before{content:"\\f128"}.la-question-circle:before{content:"\\f059"}.la-quidditch:before{content:"\\f458"}.la-quinscape:before{content:"\\f459"}.la-quora:before{content:"\\f2c4"}.la-quote-left:before{content:"\\f10d"}.la-quote-right:before{content:"\\f10e"}.la-quran:before{content:"\\f687"}.la-r-project:before{content:"\\f4f7"}.la-radiation:before{content:"\\f7b9"}.la-radiation-alt:before{content:"\\f7ba"}.la-rainbow:before{content:"\\f75b"}.la-random:before{content:"\\f074"}.la-raspberry-pi:before{content:"\\f7bb"}.la-ravelry:before{content:"\\f2d9"}.la-react:before{content:"\\f41b"}.la-reacteurope:before{content:"\\f75d"}.la-readme:before{content:"\\f4d5"}.la-rebel:before{content:"\\f1d0"}.la-receipt:before{content:"\\f543"}.la-record-vinyl:before{content:"\\f8d9"}.la-recycle:before{content:"\\f1b8"}.la-red-river:before{content:"\\f3e3"}.la-reddit:before{content:"\\f1a1"}.la-reddit-alien:before{content:"\\f281"}.la-reddit-square:before{content:"\\f1a2"}.la-redhat:before{content:"\\f7bc"}.la-redo:before{content:"\\f01e"}.la-redo-alt:before{content:"\\f2f9"}.la-registered:before{content:"\\f25d"}.la-remove-format:before{content:"\\f87d"}.la-renren:before{content:"\\f18b"}.la-reply:before{content:"\\f3e5"}.la-reply-all:before{content:"\\f122"}.la-replyd:before{content:"\\f3e6"}.la-republican:before{content:"\\f75e"}.la-researchgate:before{content:"\\f4f8"}.la-resolving:before{content:"\\f3e7"}.la-restroom:before{content:"\\f7bd"}.la-retweet:before{content:"\\f079"}.la-rev:before{content:"\\f5b2"}.la-ribbon:before{content:"\\f4d6"}.la-ring:before{content:"\\f70b"}.la-road:before{content:"\\f018"}.la-robot:before{content:"\\f544"}.la-rocket:before{content:"\\f135"}.la-rocketchat:before{content:"\\f3e8"}.la-rockrms:before{content:"\\f3e9"}.la-route:before{content:"\\f4d7"}.la-rss:before{content:"\\f09e"}.la-rss-square:before{content:"\\f143"}.la-ruble-sign:before{content:"\\f158"}.la-ruler:before{content:"\\f545"}.la-ruler-combined:before{content:"\\f546"}.la-ruler-horizontal:before{content:"\\f547"}.la-ruler-vertical:before{content:"\\f548"}.la-running:before{content:"\\f70c"}.la-rupee-sign:before{content:"\\f156"}.la-sad-cry:before{content:"\\f5b3"}.la-sad-tear:before{content:"\\f5b4"}.la-safari:before{content:"\\f267"}.la-salesforce:before{content:"\\f83b"}.la-sass:before{content:"\\f41e"}.la-satellite:before{content:"\\f7bf"}.la-satellite-dish:before{content:"\\f7c0"}.la-save:before{content:"\\f0c7"}.la-schlix:before{content:"\\f3ea"}.la-school:before{content:"\\f549"}.la-screwdriver:before{content:"\\f54a"}.la-scribd:before{content:"\\f28a"}.la-scroll:before{content:"\\f70e"}.la-sd-card:before{content:"\\f7c2"}.la-search:before{content:"\\f002"}.la-search-dollar:before{content:"\\f688"}.la-search-location:before{content:"\\f689"}.la-search-minus:before{content:"\\f010"}.la-search-plus:before{content:"\\f00e"}.la-searchengin:before{content:"\\f3eb"}.la-seedling:before{content:"\\f4d8"}.la-sellcast:before{content:"\\f2da"}.la-sellsy:before{content:"\\f213"}.la-server:before{content:"\\f233"}.la-servicestack:before{content:"\\f3ec"}.la-shapes:before{content:"\\f61f"}.la-share:before{content:"\\f064"}.la-share-alt:before{content:"\\f1e0"}.la-share-alt-square:before{content:"\\f1e1"}.la-share-square:before{content:"\\f14d"}.la-shekel-sign:before{content:"\\f20b"}.la-shield-alt:before{content:"\\f3ed"}.la-ship:before{content:"\\f21a"}.la-shipping-fast:before{content:"\\f48b"}.la-shirtsinbulk:before{content:"\\f214"}.la-shoe-prints:before{content:"\\f54b"}.la-shopping-bag:before{content:"\\f290"}.la-shopping-basket:before{content:"\\f291"}.la-shopping-cart:before{content:"\\f07a"}.la-shopware:before{content:"\\f5b5"}.la-shower:before{content:"\\f2cc"}.la-shuttle-van:before{content:"\\f5b6"}.la-sign:before{content:"\\f4d9"}.la-sign-in-alt:before{content:"\\f2f6"}.la-sign-language:before{content:"\\f2a7"}.la-sign-out-alt:before{content:"\\f2f5"}.la-signal:before{content:"\\f012"}.la-signature:before{content:"\\f5b7"}.la-sim-card:before{content:"\\f7c4"}.la-simplybuilt:before{content:"\\f215"}.la-sistrix:before{content:"\\f3ee"}.la-sitemap:before{content:"\\f0e8"}.la-sith:before{content:"\\f512"}.la-skating:before{content:"\\f7c5"}.la-sketch:before{content:"\\f7c6"}.la-skiing:before{content:"\\f7c9"}.la-skiing-nordic:before{content:"\\f7ca"}.la-skull:before{content:"\\f54c"}.la-skull-crossbones:before{content:"\\f714"}.la-skyatlas:before{content:"\\f216"}.la-skype:before{content:"\\f17e"}.la-slack:before{content:"\\f198"}.la-slack-hash:before{content:"\\f3ef"}.la-slash:before{content:"\\f715"}.la-sleigh:before{content:"\\f7cc"}.la-sliders-h:before{content:"\\f1de"}.la-slideshare:before{content:"\\f1e7"}.la-smile:before{content:"\\f118"}.la-smile-beam:before{content:"\\f5b8"}.la-smile-wink:before{content:"\\f4da"}.la-smog:before{content:"\\f75f"}.la-smoking:before{content:"\\f48d"}.la-smoking-ban:before{content:"\\f54d"}.la-sms:before{content:"\\f7cd"}.la-snapchat:before{content:"\\f2ab"}.la-snapchat-ghost:before{content:"\\f2ac"}.la-snapchat-square:before{content:"\\f2ad"}.la-snowboarding:before{content:"\\f7ce"}.la-snowflake:before{content:"\\f2dc"}.la-snowman:before{content:"\\f7d0"}.la-snowplow:before{content:"\\f7d2"}.la-socks:before{content:"\\f696"}.la-solar-panel:before{content:"\\f5ba"}.la-sort:before{content:"\\f0dc"}.la-sort-alpha-down:before{content:"\\f15d"}.la-sort-alpha-down-alt:before{content:"\\f881"}.la-sort-alpha-up:before{content:"\\f15e"}.la-sort-alpha-up-alt:before{content:"\\f882"}.la-sort-amount-down:before{content:"\\f160"}.la-sort-amount-down-alt:before{content:"\\f884"}.la-sort-amount-up:before{content:"\\f161"}.la-sort-amount-up-alt:before{content:"\\f885"}.la-sort-down:before{content:"\\f0dd"}.la-sort-numeric-down:before{content:"\\f162"}.la-sort-numeric-down-alt:before{content:"\\f886"}.la-sort-numeric-up:before{content:"\\f163"}.la-sort-numeric-up-alt:before{content:"\\f887"}.la-sort-up:before{content:"\\f0de"}.la-soundcloud:before{content:"\\f1be"}.la-sourcetree:before{content:"\\f7d3"}.la-spa:before{content:"\\f5bb"}.la-space-shuttle:before{content:"\\f197"}.la-speakap:before{content:"\\f3f3"}.la-speaker-deck:before{content:"\\f83c"}.la-spell-check:before{content:"\\f891"}.la-spider:before{content:"\\f717"}.la-spinner:before{content:"\\f110"}.la-splotch:before{content:"\\f5bc"}.la-spotify:before{content:"\\f1bc"}.la-spray-can:before{content:"\\f5bd"}.la-square:before{content:"\\f0c8"}.la-square-full:before{content:"\\f45c"}.la-square-root-alt:before{content:"\\f698"}.la-squarespace:before{content:"\\f5be"}.la-stack-exchange:before{content:"\\f18d"}.la-stack-overflow:before{content:"\\f16c"}.la-stackpath:before{content:"\\f842"}.la-stamp:before{content:"\\f5bf"}.la-star:before{content:"\\f005"}.la-star-and-crescent:before{content:"\\f699"}.la-star-half:before{content:"\\f089"}.la-star-half-alt:before{content:"\\f5c0"}.la-star-of-david:before{content:"\\f69a"}.la-star-of-life:before{content:"\\f621"}.la-staylinked:before{content:"\\f3f5"}.la-steam:before{content:"\\f1b6"}.la-steam-square:before{content:"\\f1b7"}.la-steam-symbol:before{content:"\\f3f6"}.la-step-backward:before{content:"\\f048"}.la-step-forward:before{content:"\\f051"}.la-stethoscope:before{content:"\\f0f1"}.la-sticker-mule:before{content:"\\f3f7"}.la-sticky-note:before{content:"\\f249"}.la-stop:before{content:"\\f04d"}.la-stop-circle:before{content:"\\f28d"}.la-stopwatch:before{content:"\\f2f2"}.la-store:before{content:"\\f54e"}.la-store-alt:before{content:"\\f54f"}.la-strava:before{content:"\\f428"}.la-stream:before{content:"\\f550"}.la-street-view:before{content:"\\f21d"}.la-strikethrough:before{content:"\\f0cc"}.la-stripe:before{content:"\\f429"}.la-stripe-s:before{content:"\\f42a"}.la-stroopwafel:before{content:"\\f551"}.la-studiovinari:before{content:"\\f3f8"}.la-stumbleupon:before{content:"\\f1a4"}.la-stumbleupon-circle:before{content:"\\f1a3"}.la-subscript:before{content:"\\f12c"}.la-subway:before{content:"\\f239"}.la-suitcase:before{content:"\\f0f2"}.la-suitcase-rolling:before{content:"\\f5c1"}.la-sun:before{content:"\\f185"}.la-superpowers:before{content:"\\f2dd"}.la-superscript:before{content:"\\f12b"}.la-supple:before{content:"\\f3f9"}.la-surprise:before{content:"\\f5c2"}.la-suse:before{content:"\\f7d6"}.la-swatchbook:before{content:"\\f5c3"}.la-swift:before{content:"\\f8e1"}.la-swimmer:before{content:"\\f5c4"}.la-swimming-pool:before{content:"\\f5c5"}.la-symfony:before{content:"\\f83d"}.la-synagogue:before{content:"\\f69b"}.la-sync:before{content:"\\f021"}.la-sync-alt:before{content:"\\f2f1"}.la-syringe:before{content:"\\f48e"}.la-table:before{content:"\\f0ce"}.la-table-tennis:before{content:"\\f45d"}.la-tablet:before{content:"\\f10a"}.la-tablet-alt:before{content:"\\f3fa"}.la-tablets:before{content:"\\f490"}.la-tachometer-alt:before{content:"\\f3fd"}.la-tag:before{content:"\\f02b"}.la-tags:before{content:"\\f02c"}.la-tape:before{content:"\\f4db"}.la-tasks:before{content:"\\f0ae"}.la-taxi:before{content:"\\f1ba"}.la-teamspeak:before{content:"\\f4f9"}.la-teeth:before{content:"\\f62e"}.la-teeth-open:before{content:"\\f62f"}.la-telegram:before{content:"\\f2c6"}.la-telegram-plane:before{content:"\\f3fe"}.la-temperature-high:before{content:"\\f769"}.la-temperature-low:before{content:"\\f76b"}.la-tencent-weibo:before{content:"\\f1d5"}.la-tenge:before{content:"\\f7d7"}.la-terminal:before{content:"\\f120"}.la-text-height:before{content:"\\f034"}.la-text-width:before{content:"\\f035"}.la-th:before{content:"\\f00a"}.la-th-large:before{content:"\\f009"}.la-th-list:before{content:"\\f00b"}.la-the-red-yeti:before{content:"\\f69d"}.la-theater-masks:before{content:"\\f630"}.la-themeco:before{content:"\\f5c6"}.la-themeisle:before{content:"\\f2b2"}.la-thermometer:before{content:"\\f491"}.la-thermometer-empty:before{content:"\\f2cb"}.la-thermometer-full:before{content:"\\f2c7"}.la-thermometer-half:before{content:"\\f2c9"}.la-thermometer-quarter:before{content:"\\f2ca"}.la-thermometer-three-quarters:before{content:"\\f2c8"}.la-think-peaks:before{content:"\\f731"}.la-thumbs-down:before{content:"\\f165"}.la-thumbs-up:before{content:"\\f164"}.la-thumbtack:before{content:"\\f08d"}.la-ticket-alt:before{content:"\\f3ff"}.la-times:before{content:"\\f00d"}.la-times-circle:before{content:"\\f057"}.la-tint:before{content:"\\f043"}.la-tint-slash:before{content:"\\f5c7"}.la-tired:before{content:"\\f5c8"}.la-toggle-off:before{content:"\\f204"}.la-toggle-on:before{content:"\\f205"}.la-toilet:before{content:"\\f7d8"}.la-toilet-paper:before{content:"\\f71e"}.la-toolbox:before{content:"\\f552"}.la-tools:before{content:"\\f7d9"}.la-tooth:before{content:"\\f5c9"}.la-torah:before{content:"\\f6a0"}.la-torii-gate:before{content:"\\f6a1"}.la-tractor:before{content:"\\f722"}.la-trade-federation:before{content:"\\f513"}.la-trademark:before{content:"\\f25c"}.la-traffic-light:before{content:"\\f637"}.la-train:before{content:"\\f238"}.la-tram:before{content:"\\f7da"}.la-transgender:before{content:"\\f224"}.la-transgender-alt:before{content:"\\f225"}.la-trash:before{content:"\\f1f8"}.la-trash-alt:before{content:"\\f2ed"}.la-trash-restore:before{content:"\\f829"}.la-trash-restore-alt:before{content:"\\f82a"}.la-tree:before{content:"\\f1bb"}.la-trello:before{content:"\\f181"}.la-tripadvisor:before{content:"\\f262"}.la-trophy:before{content:"\\f091"}.la-truck:before{content:"\\f0d1"}.la-truck-loading:before{content:"\\f4de"}.la-truck-monster:before{content:"\\f63b"}.la-truck-moving:before{content:"\\f4df"}.la-truck-pickup:before{content:"\\f63c"}.la-tshirt:before{content:"\\f553"}.la-tty:before{content:"\\f1e4"}.la-tumblr:before{content:"\\f173"}.la-tumblr-square:before{content:"\\f174"}.la-tv:before{content:"\\f26c"}.la-twitch:before{content:"\\f1e8"}.la-twitter:before{content:"\\f099"}.la-twitter-square:before{content:"\\f081"}.la-typo3:before{content:"\\f42b"}.la-uber:before{content:"\\f402"}.la-ubuntu:before{content:"\\f7df"}.la-uikit:before{content:"\\f403"}.la-umbraco:before{content:"\\f8e8"}.la-umbrella:before{content:"\\f0e9"}.la-umbrella-beach:before{content:"\\f5ca"}.la-underline:before{content:"\\f0cd"}.la-undo:before{content:"\\f0e2"}.la-undo-alt:before{content:"\\f2ea"}.la-uniregistry:before{content:"\\f404"}.la-universal-access:before{content:"\\f29a"}.la-university:before{content:"\\f19c"}.la-unlink:before{content:"\\f127"}.la-unlock:before{content:"\\f09c"}.la-unlock-alt:before{content:"\\f13e"}.la-untappd:before{content:"\\f405"}.la-upload:before{content:"\\f093"}.la-ups:before{content:"\\f7e0"}.la-usb:before{content:"\\f287"}.la-user:before{content:"\\f007"}.la-user-alt:before{content:"\\f406"}.la-user-alt-slash:before{content:"\\f4fa"}.la-user-astronaut:before{content:"\\f4fb"}.la-user-check:before{content:"\\f4fc"}.la-user-circle:before{content:"\\f2bd"}.la-user-clock:before{content:"\\f4fd"}.la-user-cog:before{content:"\\f4fe"}.la-user-edit:before{content:"\\f4ff"}.la-user-friends:before{content:"\\f500"}.la-user-graduate:before{content:"\\f501"}.la-user-injured:before{content:"\\f728"}.la-user-lock:before{content:"\\f502"}.la-user-md:before{content:"\\f0f0"}.la-user-minus:before{content:"\\f503"}.la-user-ninja:before{content:"\\f504"}.la-user-nurse:before{content:"\\f82f"}.la-user-plus:before{content:"\\f234"}.la-user-secret:before{content:"\\f21b"}.la-user-shield:before{content:"\\f505"}.la-user-slash:before{content:"\\f506"}.la-user-tag:before{content:"\\f507"}.la-user-tie:before{content:"\\f508"}.la-user-times:before{content:"\\f235"}.la-users:before{content:"\\f0c0"}.la-users-cog:before{content:"\\f509"}.la-usps:before{content:"\\f7e1"}.la-ussunnah:before{content:"\\f407"}.la-utensil-spoon:before{content:"\\f2e5"}.la-utensils:before{content:"\\f2e7"}.la-vaadin:before{content:"\\f408"}.la-vector-square:before{content:"\\f5cb"}.la-venus:before{content:"\\f221"}.la-venus-double:before{content:"\\f226"}.la-venus-mars:before{content:"\\f228"}.la-viacoin:before{content:"\\f237"}.la-viadeo:before{content:"\\f2a9"}.la-viadeo-square:before{content:"\\f2aa"}.la-vial:before{content:"\\f492"}.la-vials:before{content:"\\f493"}.la-viber:before{content:"\\f409"}.la-video:before{content:"\\f03d"}.la-video-slash:before{content:"\\f4e2"}.la-vihara:before{content:"\\f6a7"}.la-vimeo:before{content:"\\f40a"}.la-vimeo-square:before{content:"\\f194"}.la-vimeo-v:before{content:"\\f27d"}.la-vine:before{content:"\\f1ca"}.la-vk:before{content:"\\f189"}.la-vnv:before{content:"\\f40b"}.la-voicemail:before{content:"\\f897"}.la-volleyball-ball:before{content:"\\f45f"}.la-volume-down:before{content:"\\f027"}.la-volume-mute:before{content:"\\f6a9"}.la-volume-off:before{content:"\\f026"}.la-volume-up:before{content:"\\f028"}.la-vote-yea:before{content:"\\f772"}.la-vr-cardboard:before{content:"\\f729"}.la-vuejs:before{content:"\\f41f"}.la-walking:before{content:"\\f554"}.la-wallet:before{content:"\\f555"}.la-warehouse:before{content:"\\f494"}.la-water:before{content:"\\f773"}.la-wave-square:before{content:"\\f83e"}.la-waze:before{content:"\\f83f"}.la-weebly:before{content:"\\f5cc"}.la-weibo:before{content:"\\f18a"}.la-weight:before{content:"\\f496"}.la-weight-hanging:before{content:"\\f5cd"}.la-weixin:before{content:"\\f1d7"}.la-whatsapp:before{content:"\\f232"}.la-whatsapp-square:before{content:"\\f40c"}.la-wheelchair:before{content:"\\f193"}.la-whmcs:before{content:"\\f40d"}.la-wifi:before{content:"\\f1eb"}.la-wikipedia-w:before{content:"\\f266"}.la-wind:before{content:"\\f72e"}.la-window-close:before{content:"\\f410"}.la-window-maximize:before{content:"\\f2d0"}.la-window-minimize:before{content:"\\f2d1"}.la-window-restore:before{content:"\\f2d2"}.la-windows:before{content:"\\f17a"}.la-wine-bottle:before{content:"\\f72f"}.la-wine-glass:before{content:"\\f4e3"}.la-wine-glass-alt:before{content:"\\f5ce"}.la-wix:before{content:"\\f5cf"}.la-wizards-of-the-coast:before{content:"\\f730"}.la-wolf-pack-battalion:before{content:"\\f514"}.la-won-sign:before{content:"\\f159"}.la-wordpress:before{content:"\\f19a"}.la-wordpress-simple:before{content:"\\f411"}.la-wpbeginner:before{content:"\\f297"}.la-wpexplorer:before{content:"\\f2de"}.la-wpforms:before{content:"\\f298"}.la-wpressr:before{content:"\\f3e4"}.la-wrench:before{content:"\\f0ad"}.la-x-ray:before{content:"\\f497"}.la-xbox:before{content:"\\f412"}.la-xing:before{content:"\\f168"}.la-xing-square:before{content:"\\f169"}.la-y-combinator:before{content:"\\f23b"}.la-yahoo:before{content:"\\f19e"}.la-yammer:before{content:"\\f840"}.la-yandex:before{content:"\\f413"}.la-yandex-international:before{content:"\\f414"}.la-yarn:before{content:"\\f7e3"}.la-yelp:before{content:"\\f1e9"}.la-yen-sign:before{content:"\\f157"}.la-yin-yang:before{content:"\\f6ad"}.la-yoast:before{content:"\\f2b1"}.la-youtube:before{content:"\\f167"}.la-youtube-square:before{content:"\\f431"}.la-zhihu:before{content:"\\f63f"}.sr-only{border:0;clip:rect(0,0,0,0);height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px}.sr-only-focusable:active,.sr-only-focusable:focus{clip:auto;height:auto;margin:0;overflow:visible;position:static;width:auto}@font-face{font-family:\'Line Awesome Brands\';font-style:normal;font-weight:400;font-display:auto;src:url('+y+');src:url(../fonts/la-brands-400.eot?#iefix) format("embedded-opentype"),url('+w+') format("woff2"),url('+z+') format("woff"),url('+M+") format(\"truetype\"),url(../fonts/la-brands-400.svg#lineawesome) format(\"svg\")}.lab{font-family:'Line Awesome Brands'}@font-face{font-family:'Line Awesome Free';font-style:normal;font-weight:400;font-display:auto;src:url("+x+');src:url(../fonts/la-regular-400.eot?#iefix) format("embedded-opentype"),url('+A+') format("woff2"),url('+C+') format("woff"),url('+S+") format(\"truetype\"),url(../fonts/la-regular-400.svg#lineawesome) format(\"svg\")}.lar{font-family:'Line Awesome Free';font-weight:400}@font-face{font-family:'Line Awesome Free';font-style:normal;font-weight:900;font-display:auto;src:url("+k+');src:url(../fonts/la-solid-900.eot?#iefix) format("embedded-opentype"),url('+E+') format("woff2"),url('+I+') format("woff"),url('+O+") format(\"truetype\"),url(../fonts/la-solid-900.svg#lineawesome) format(\"svg\")}.la,.las{font-family:'Line Awesome Free';font-weight:900}.la.la-glass:before{content:\"\\f000\"}.la.la-meetup{font-family:'Line Awesome Brands';font-weight:400}.la.la-star-o{font-family:'Line Awesome Free';font-weight:400}.la.la-star-o:before{content:\"\\f005\"}.la.la-remove:before{content:\"\\f00d\"}.la.la-close:before{content:\"\\f00d\"}.la.la-gear:before{content:\"\\f013\"}.la.la-trash-o{font-family:'Line Awesome Free';font-weight:400}.la.la-trash-o:before{content:\"\\f2ed\"}.la.la-file-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-o:before{content:\"\\f15b\"}.la.la-clock-o{font-family:'Line Awesome Free';font-weight:400}.la.la-clock-o:before{content:\"\\f017\"}.la.la-arrow-circle-o-down{font-family:'Line Awesome Free';font-weight:400}.la.la-arrow-circle-o-down:before{content:\"\\f358\"}.la.la-arrow-circle-o-up{font-family:'Line Awesome Free';font-weight:400}.la.la-arrow-circle-o-up:before{content:\"\\f35b\"}.la.la-play-circle-o{font-family:'Line Awesome Free';font-weight:400}.la.la-play-circle-o:before{content:\"\\f144\"}.la.la-repeat:before{content:\"\\f01e\"}.la.la-rotate-right:before{content:\"\\f01e\"}.la.la-refresh:before{content:\"\\f021\"}.la.la-list-alt{font-family:'Line Awesome Free';font-weight:400}.la.la-dedent:before{content:\"\\f03b\"}.la.la-video-camera:before{content:\"\\f03d\"}.la.la-picture-o{font-family:'Line Awesome Free';font-weight:400}.la.la-picture-o:before{content:\"\\f03e\"}.la.la-photo{font-family:'Line Awesome Free';font-weight:400}.la.la-photo:before{content:\"\\f03e\"}.la.la-image{font-family:'Line Awesome Free';font-weight:400}.la.la-image:before{content:\"\\f03e\"}.la.la-pencil:before{content:\"\\f303\"}.la.la-map-marker:before{content:\"\\f3c5\"}.la.la-pencil-square-o{font-family:'Line Awesome Free';font-weight:400}.la.la-pencil-square-o:before{content:\"\\f044\"}.la.la-share-square-o{font-family:'Line Awesome Free';font-weight:400}.la.la-share-square-o:before{content:\"\\f14d\"}.la.la-check-square-o{font-family:'Line Awesome Free';font-weight:400}.la.la-check-square-o:before{content:\"\\f14a\"}.la.la-arrows:before{content:\"\\f0b2\"}.la.la-times-circle-o{font-family:'Line Awesome Free';font-weight:400}.la.la-times-circle-o:before{content:\"\\f057\"}.la.la-check-circle-o{font-family:'Line Awesome Free';font-weight:400}.la.la-check-circle-o:before{content:\"\\f058\"}.la.la-mail-forward:before{content:\"\\f064\"}.la.la-eye{font-family:'Line Awesome Free';font-weight:400}.la.la-eye-slash{font-family:'Line Awesome Free';font-weight:400}.la.la-warning:before{content:\"\\f071\"}.la.la-calendar:before{content:\"\\f073\"}.la.la-arrows-v:before{content:\"\\f338\"}.la.la-arrows-h:before{content:\"\\f337\"}.la.la-bar-chart{font-family:'Line Awesome Free';font-weight:400}.la.la-bar-chart:before{content:\"\\f080\"}.la.la-bar-chart-o{font-family:'Line Awesome Free';font-weight:400}.la.la-bar-chart-o:before{content:\"\\f080\"}.la.la-twitter-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-facebook-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-gears:before{content:\"\\f085\"}.la.la-thumbs-o-up{font-family:'Line Awesome Free';font-weight:400}.la.la-thumbs-o-up:before{content:\"\\f164\"}.la.la-thumbs-o-down{font-family:'Line Awesome Free';font-weight:400}.la.la-thumbs-o-down:before{content:\"\\f165\"}.la.la-heart-o{font-family:'Line Awesome Free';font-weight:400}.la.la-heart-o:before{content:\"\\f004\"}.la.la-sign-out:before{content:\"\\f2f5\"}.la.la-linkedin-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-linkedin-square:before{content:\"\\f08c\"}.la.la-thumb-tack:before{content:\"\\f08d\"}.la.la-external-link:before{content:\"\\f35d\"}.la.la-sign-in:before{content:\"\\f2f6\"}.la.la-github-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-lemon-o{font-family:'Line Awesome Free';font-weight:400}.la.la-lemon-o:before{content:\"\\f094\"}.la.la-square-o{font-family:'Line Awesome Free';font-weight:400}.la.la-square-o:before{content:\"\\f0c8\"}.la.la-bookmark-o{font-family:'Line Awesome Free';font-weight:400}.la.la-bookmark-o:before{content:\"\\f02e\"}.la.la-twitter{font-family:'Line Awesome Brands';font-weight:400}.la.la-facebook{font-family:'Line Awesome Brands';font-weight:400}.la.la-facebook:before{content:\"\\f39e\"}.la.la-facebook-f{font-family:'Line Awesome Brands';font-weight:400}.la.la-facebook-f:before{content:\"\\f39e\"}.la.la-github{font-family:'Line Awesome Brands';font-weight:400}.la.la-credit-card{font-family:'Line Awesome Free';font-weight:400}.la.la-feed:before{content:\"\\f09e\"}.la.la-hdd-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hdd-o:before{content:\"\\f0a0\"}.la.la-hand-o-right{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-o-right:before{content:\"\\f0a4\"}.la.la-hand-o-left{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-o-left:before{content:\"\\f0a5\"}.la.la-hand-o-up{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-o-up:before{content:\"\\f0a6\"}.la.la-hand-o-down{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-o-down:before{content:\"\\f0a7\"}.la.la-arrows-alt:before{content:\"\\f31e\"}.la.la-group:before{content:\"\\f0c0\"}.la.la-chain:before{content:\"\\f0c1\"}.la.la-scissors:before{content:\"\\f0c4\"}.la.la-files-o{font-family:'Line Awesome Free';font-weight:400}.la.la-files-o:before{content:\"\\f0c5\"}.la.la-floppy-o{font-family:'Line Awesome Free';font-weight:400}.la.la-floppy-o:before{content:\"\\f0c7\"}.la.la-navicon:before{content:\"\\f0c9\"}.la.la-reorder:before{content:\"\\f0c9\"}.la.la-pinterest{font-family:'Line Awesome Brands';font-weight:400}.la.la-pinterest-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-google-plus-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-google-plus{font-family:'Line Awesome Brands';font-weight:400}.la.la-google-plus:before{content:\"\\f0d5\"}.la.la-money{font-family:'Line Awesome Free';font-weight:400}.la.la-money:before{content:\"\\f3d1\"}.la.la-unsorted:before{content:\"\\f0dc\"}.la.la-sort-desc:before{content:\"\\f0dd\"}.la.la-sort-asc:before{content:\"\\f0de\"}.la.la-linkedin{font-family:'Line Awesome Brands';font-weight:400}.la.la-linkedin:before{content:\"\\f0e1\"}.la.la-rotate-left:before{content:\"\\f0e2\"}.la.la-legal:before{content:\"\\f0e3\"}.la.la-tachometer:before{content:\"\\f3fd\"}.la.la-dashboard:before{content:\"\\f3fd\"}.la.la-comment-o{font-family:'Line Awesome Free';font-weight:400}.la.la-comment-o:before{content:\"\\f075\"}.la.la-comments-o{font-family:'Line Awesome Free';font-weight:400}.la.la-comments-o:before{content:\"\\f086\"}.la.la-flash:before{content:\"\\f0e7\"}.la.la-clipboard{font-family:'Line Awesome Free';font-weight:400}.la.la-paste{font-family:'Line Awesome Free';font-weight:400}.la.la-paste:before{content:\"\\f328\"}.la.la-lightbulb-o{font-family:'Line Awesome Free';font-weight:400}.la.la-lightbulb-o:before{content:\"\\f0eb\"}.la.la-exchange:before{content:\"\\f362\"}.la.la-cloud-download:before{content:\"\\f381\"}.la.la-cloud-upload:before{content:\"\\f382\"}.la.la-bell-o{font-family:'Line Awesome Free';font-weight:400}.la.la-bell-o:before{content:\"\\f0f3\"}.la.la-cutlery:before{content:\"\\f2e7\"}.la.la-file-text-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-text-o:before{content:\"\\f15c\"}.la.la-building-o{font-family:'Line Awesome Free';font-weight:400}.la.la-building-o:before{content:\"\\f1ad\"}.la.la-hospital-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hospital-o:before{content:\"\\f0f8\"}.la.la-tablet:before{content:\"\\f3fa\"}.la.la-mobile:before{content:\"\\f3cd\"}.la.la-mobile-phone:before{content:\"\\f3cd\"}.la.la-circle-o{font-family:'Line Awesome Free';font-weight:400}.la.la-circle-o:before{content:\"\\f111\"}.la.la-mail-reply:before{content:\"\\f3e5\"}.la.la-github-alt{font-family:'Line Awesome Brands';font-weight:400}.la.la-folder-o{font-family:'Line Awesome Free';font-weight:400}.la.la-folder-o:before{content:\"\\f07b\"}.la.la-folder-open-o{font-family:'Line Awesome Free';font-weight:400}.la.la-folder-open-o:before{content:\"\\f07c\"}.la.la-smile-o{font-family:'Line Awesome Free';font-weight:400}.la.la-smile-o:before{content:\"\\f118\"}.la.la-frown-o{font-family:'Line Awesome Free';font-weight:400}.la.la-frown-o:before{content:\"\\f119\"}.la.la-meh-o{font-family:'Line Awesome Free';font-weight:400}.la.la-meh-o:before{content:\"\\f11a\"}.la.la-keyboard-o{font-family:'Line Awesome Free';font-weight:400}.la.la-keyboard-o:before{content:\"\\f11c\"}.la.la-flag-o{font-family:'Line Awesome Free';font-weight:400}.la.la-flag-o:before{content:\"\\f024\"}.la.la-mail-reply-all:before{content:\"\\f122\"}.la.la-star-half-o{font-family:'Line Awesome Free';font-weight:400}.la.la-star-half-o:before{content:\"\\f089\"}.la.la-star-half-empty{font-family:'Line Awesome Free';font-weight:400}.la.la-star-half-empty:before{content:\"\\f089\"}.la.la-star-half-full{font-family:'Line Awesome Free';font-weight:400}.la.la-star-half-full:before{content:\"\\f089\"}.la.la-code-fork:before{content:\"\\f126\"}.la.la-chain-broken:before{content:\"\\f127\"}.la.la-shield:before{content:\"\\f3ed\"}.la.la-calendar-o{font-family:'Line Awesome Free';font-weight:400}.la.la-calendar-o:before{content:\"\\f133\"}.la.la-maxcdn{font-family:'Line Awesome Brands';font-weight:400}.la.la-html5{font-family:'Line Awesome Brands';font-weight:400}.la.la-css3{font-family:'Line Awesome Brands';font-weight:400}.la.la-ticket:before{content:\"\\f3ff\"}.la.la-minus-square-o{font-family:'Line Awesome Free';font-weight:400}.la.la-minus-square-o:before{content:\"\\f146\"}.la.la-level-up:before{content:\"\\f3bf\"}.la.la-level-down:before{content:\"\\f3be\"}.la.la-pencil-square:before{content:\"\\f14b\"}.la.la-external-link-square:before{content:\"\\f360\"}.la.la-compass{font-family:'Line Awesome Free';font-weight:400}.la.la-caret-square-o-down{font-family:'Line Awesome Free';font-weight:400}.la.la-caret-square-o-down:before{content:\"\\f150\"}.la.la-toggle-down{font-family:'Line Awesome Free';font-weight:400}.la.la-toggle-down:before{content:\"\\f150\"}.la.la-caret-square-o-up{font-family:'Line Awesome Free';font-weight:400}.la.la-caret-square-o-up:before{content:\"\\f151\"}.la.la-toggle-up{font-family:'Line Awesome Free';font-weight:400}.la.la-toggle-up:before{content:\"\\f151\"}.la.la-caret-square-o-right{font-family:'Line Awesome Free';font-weight:400}.la.la-caret-square-o-right:before{content:\"\\f152\"}.la.la-toggle-right{font-family:'Line Awesome Free';font-weight:400}.la.la-toggle-right:before{content:\"\\f152\"}.la.la-eur:before{content:\"\\f153\"}.la.la-euro:before{content:\"\\f153\"}.la.la-gbp:before{content:\"\\f154\"}.la.la-usd:before{content:\"\\f155\"}.la.la-dollar:before{content:\"\\f155\"}.la.la-inr:before{content:\"\\f156\"}.la.la-rupee:before{content:\"\\f156\"}.la.la-jpy:before{content:\"\\f157\"}.la.la-cny:before{content:\"\\f157\"}.la.la-rmb:before{content:\"\\f157\"}.la.la-yen:before{content:\"\\f157\"}.la.la-rub:before{content:\"\\f158\"}.la.la-ruble:before{content:\"\\f158\"}.la.la-rouble:before{content:\"\\f158\"}.la.la-krw:before{content:\"\\f159\"}.la.la-won:before{content:\"\\f159\"}.la.la-btc{font-family:'Line Awesome Brands';font-weight:400}.la.la-bitcoin{font-family:'Line Awesome Brands';font-weight:400}.la.la-bitcoin:before{content:\"\\f15a\"}.la.la-file-text:before{content:\"\\f15c\"}.la.la-sort-alpha-asc:before{content:\"\\f15d\"}.la.la-sort-alpha-desc:before{content:\"\\f881\"}.la.la-sort-amount-asc:before{content:\"\\f160\"}.la.la-sort-amount-desc:before{content:\"\\f884\"}.la.la-sort-numeric-asc:before{content:\"\\f162\"}.la.la-sort-numeric-desc:before{content:\"\\f886\"}.la.la-youtube-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-youtube{font-family:'Line Awesome Brands';font-weight:400}.la.la-xing{font-family:'Line Awesome Brands';font-weight:400}.la.la-xing-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-youtube-play{font-family:'Line Awesome Brands';font-weight:400}.la.la-youtube-play:before{content:\"\\f167\"}.la.la-dropbox{font-family:'Line Awesome Brands';font-weight:400}.la.la-stack-overflow{font-family:'Line Awesome Brands';font-weight:400}.la.la-instagram{font-family:'Line Awesome Brands';font-weight:400}.la.la-flickr{font-family:'Line Awesome Brands';font-weight:400}.la.la-adn{font-family:'Line Awesome Brands';font-weight:400}.la.la-bitbucket{font-family:'Line Awesome Brands';font-weight:400}.la.la-bitbucket-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-bitbucket-square:before{content:\"\\f171\"}.la.la-tumblr{font-family:'Line Awesome Brands';font-weight:400}.la.la-tumblr-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-long-arrow-down:before{content:\"\\f309\"}.la.la-long-arrow-up:before{content:\"\\f30c\"}.la.la-long-arrow-left:before{content:\"\\f30a\"}.la.la-long-arrow-right:before{content:\"\\f30b\"}.la.la-apple{font-family:'Line Awesome Brands';font-weight:400}.la.la-windows{font-family:'Line Awesome Brands';font-weight:400}.la.la-android{font-family:'Line Awesome Brands';font-weight:400}.la.la-linux{font-family:'Line Awesome Brands';font-weight:400}.la.la-dribbble{font-family:'Line Awesome Brands';font-weight:400}.la.la-skype{font-family:'Line Awesome Brands';font-weight:400}.la.la-foursquare{font-family:'Line Awesome Brands';font-weight:400}.la.la-trello{font-family:'Line Awesome Brands';font-weight:400}.la.la-gratipay{font-family:'Line Awesome Brands';font-weight:400}.la.la-gittip{font-family:'Line Awesome Brands';font-weight:400}.la.la-gittip:before{content:\"\\f184\"}.la.la-sun-o{font-family:'Line Awesome Free';font-weight:400}.la.la-sun-o:before{content:\"\\f185\"}.la.la-moon-o{font-family:'Line Awesome Free';font-weight:400}.la.la-moon-o:before{content:\"\\f186\"}.la.la-vk{font-family:'Line Awesome Brands';font-weight:400}.la.la-weibo{font-family:'Line Awesome Brands';font-weight:400}.la.la-renren{font-family:'Line Awesome Brands';font-weight:400}.la.la-pagelines{font-family:'Line Awesome Brands';font-weight:400}.la.la-stack-exchange{font-family:'Line Awesome Brands';font-weight:400}.la.la-arrow-circle-o-right{font-family:'Line Awesome Free';font-weight:400}.la.la-arrow-circle-o-right:before{content:\"\\f35a\"}.la.la-arrow-circle-o-left{font-family:'Line Awesome Free';font-weight:400}.la.la-arrow-circle-o-left:before{content:\"\\f359\"}.la.la-caret-square-o-left{font-family:'Line Awesome Free';font-weight:400}.la.la-caret-square-o-left:before{content:\"\\f191\"}.la.la-toggle-left{font-family:'Line Awesome Free';font-weight:400}.la.la-toggle-left:before{content:\"\\f191\"}.la.la-dot-circle-o{font-family:'Line Awesome Free';font-weight:400}.la.la-dot-circle-o:before{content:\"\\f192\"}.la.la-vimeo-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-try:before{content:\"\\f195\"}.la.la-turkish-lira:before{content:\"\\f195\"}.la.la-plus-square-o{font-family:'Line Awesome Free';font-weight:400}.la.la-plus-square-o:before{content:\"\\f0fe\"}.la.la-slack{font-family:'Line Awesome Brands';font-weight:400}.la.la-wordpress{font-family:'Line Awesome Brands';font-weight:400}.la.la-openid{font-family:'Line Awesome Brands';font-weight:400}.la.la-institution:before{content:\"\\f19c\"}.la.la-bank:before{content:\"\\f19c\"}.la.la-mortar-board:before{content:\"\\f19d\"}.la.la-yahoo{font-family:'Line Awesome Brands';font-weight:400}.la.la-google{font-family:'Line Awesome Brands';font-weight:400}.la.la-reddit{font-family:'Line Awesome Brands';font-weight:400}.la.la-reddit-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-stumbleupon-circle{font-family:'Line Awesome Brands';font-weight:400}.la.la-stumbleupon{font-family:'Line Awesome Brands';font-weight:400}.la.la-delicious{font-family:'Line Awesome Brands';font-weight:400}.la.la-digg{font-family:'Line Awesome Brands';font-weight:400}.la.la-pied-piper-pp{font-family:'Line Awesome Brands';font-weight:400}.la.la-pied-piper-alt{font-family:'Line Awesome Brands';font-weight:400}.la.la-drupal{font-family:'Line Awesome Brands';font-weight:400}.la.la-joomla{font-family:'Line Awesome Brands';font-weight:400}.la.la-spoon:before{content:\"\\f2e5\"}.la.la-behance{font-family:'Line Awesome Brands';font-weight:400}.la.la-behance-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-steam{font-family:'Line Awesome Brands';font-weight:400}.la.la-steam-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-automobile:before{content:\"\\f1b9\"}.la.la-cab:before{content:\"\\f1ba\"}.la.la-envelope-o{font-family:'Line Awesome Free';font-weight:400}.la.la-envelope-o:before{content:\"\\f0e0\"}.la.la-deviantart{font-family:'Line Awesome Brands';font-weight:400}.la.la-soundcloud{font-family:'Line Awesome Brands';font-weight:400}.la.la-file-pdf-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-pdf-o:before{content:\"\\f1c1\"}.la.la-file-word-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-word-o:before{content:\"\\f1c2\"}.la.la-file-excel-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-excel-o:before{content:\"\\f1c3\"}.la.la-file-powerpoint-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-powerpoint-o:before{content:\"\\f1c4\"}.la.la-file-image-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-image-o:before{content:\"\\f1c5\"}.la.la-file-photo-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-photo-o:before{content:\"\\f1c5\"}.la.la-file-picture-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-picture-o:before{content:\"\\f1c5\"}.la.la-file-archive-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-archive-o:before{content:\"\\f1c6\"}.la.la-file-zip-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-zip-o:before{content:\"\\f1c6\"}.la.la-file-audio-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-audio-o:before{content:\"\\f1c7\"}.la.la-file-sound-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-sound-o:before{content:\"\\f1c7\"}.la.la-file-video-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-video-o:before{content:\"\\f1c8\"}.la.la-file-movie-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-movie-o:before{content:\"\\f1c8\"}.la.la-file-code-o{font-family:'Line Awesome Free';font-weight:400}.la.la-file-code-o:before{content:\"\\f1c9\"}.la.la-vine{font-family:'Line Awesome Brands';font-weight:400}.la.la-codepen{font-family:'Line Awesome Brands';font-weight:400}.la.la-jsfiddle{font-family:'Line Awesome Brands';font-weight:400}.la.la-life-ring{font-family:'Line Awesome Free';font-weight:400}.la.la-life-bouy{font-family:'Line Awesome Free';font-weight:400}.la.la-life-bouy:before{content:\"\\f1cd\"}.la.la-life-buoy{font-family:'Line Awesome Free';font-weight:400}.la.la-life-buoy:before{content:\"\\f1cd\"}.la.la-life-saver{font-family:'Line Awesome Free';font-weight:400}.la.la-life-saver:before{content:\"\\f1cd\"}.la.la-support{font-family:'Line Awesome Free';font-weight:400}.la.la-support:before{content:\"\\f1cd\"}.la.la-circle-o-notch:before{content:\"\\f1ce\"}.la.la-rebel{font-family:'Line Awesome Brands';font-weight:400}.la.la-ra{font-family:'Line Awesome Brands';font-weight:400}.la.la-ra:before{content:\"\\f1d0\"}.la.la-resistance{font-family:'Line Awesome Brands';font-weight:400}.la.la-resistance:before{content:\"\\f1d0\"}.la.la-empire{font-family:'Line Awesome Brands';font-weight:400}.la.la-ge{font-family:'Line Awesome Brands';font-weight:400}.la.la-ge:before{content:\"\\f1d1\"}.la.la-git-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-git{font-family:'Line Awesome Brands';font-weight:400}.la.la-hacker-news{font-family:'Line Awesome Brands';font-weight:400}.la.la-y-combinator-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-y-combinator-square:before{content:\"\\f1d4\"}.la.la-yc-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-yc-square:before{content:\"\\f1d4\"}.la.la-tencent-weibo{font-family:'Line Awesome Brands';font-weight:400}.la.la-qq{font-family:'Line Awesome Brands';font-weight:400}.la.la-weixin{font-family:'Line Awesome Brands';font-weight:400}.la.la-wechat{font-family:'Line Awesome Brands';font-weight:400}.la.la-wechat:before{content:\"\\f1d7\"}.la.la-send:before{content:\"\\f1d8\"}.la.la-paper-plane-o{font-family:'Line Awesome Free';font-weight:400}.la.la-paper-plane-o:before{content:\"\\f1d8\"}.la.la-send-o{font-family:'Line Awesome Free';font-weight:400}.la.la-send-o:before{content:\"\\f1d8\"}.la.la-circle-thin{font-family:'Line Awesome Free';font-weight:400}.la.la-circle-thin:before{content:\"\\f111\"}.la.la-header:before{content:\"\\f1dc\"}.la.la-sliders:before{content:\"\\f1de\"}.la.la-futbol-o{font-family:'Line Awesome Free';font-weight:400}.la.la-futbol-o:before{content:\"\\f1e3\"}.la.la-soccer-ball-o{font-family:'Line Awesome Free';font-weight:400}.la.la-soccer-ball-o:before{content:\"\\f1e3\"}.la.la-slideshare{font-family:'Line Awesome Brands';font-weight:400}.la.la-twitch{font-family:'Line Awesome Brands';font-weight:400}.la.la-yelp{font-family:'Line Awesome Brands';font-weight:400}.la.la-newspaper-o{font-family:'Line Awesome Free';font-weight:400}.la.la-newspaper-o:before{content:\"\\f1ea\"}.la.la-paypal{font-family:'Line Awesome Brands';font-weight:400}.la.la-google-wallet{font-family:'Line Awesome Brands';font-weight:400}.la.la-cc-visa{font-family:'Line Awesome Brands';font-weight:400}.la.la-cc-mastercard{font-family:'Line Awesome Brands';font-weight:400}.la.la-cc-discover{font-family:'Line Awesome Brands';font-weight:400}.la.la-cc-amex{font-family:'Line Awesome Brands';font-weight:400}.la.la-cc-paypal{font-family:'Line Awesome Brands';font-weight:400}.la.la-cc-stripe{font-family:'Line Awesome Brands';font-weight:400}.la.la-bell-slash-o{font-family:'Line Awesome Free';font-weight:400}.la.la-bell-slash-o:before{content:\"\\f1f6\"}.la.la-trash:before{content:\"\\f2ed\"}.la.la-copyright{font-family:'Line Awesome Free';font-weight:400}.la.la-eyedropper:before{content:\"\\f1fb\"}.la.la-area-chart:before{content:\"\\f1fe\"}.la.la-pie-chart:before{content:\"\\f200\"}.la.la-line-chart:before{content:\"\\f201\"}.la.la-lastfm{font-family:'Line Awesome Brands';font-weight:400}.la.la-lastfm-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-ioxhost{font-family:'Line Awesome Brands';font-weight:400}.la.la-angellist{font-family:'Line Awesome Brands';font-weight:400}.la.la-cc{font-family:'Line Awesome Free';font-weight:400}.la.la-cc:before{content:\"\\f20a\"}.la.la-ils:before{content:\"\\f20b\"}.la.la-shekel:before{content:\"\\f20b\"}.la.la-sheqel:before{content:\"\\f20b\"}.la.la-meanpath{font-family:'Line Awesome Brands';font-weight:400}.la.la-meanpath:before{content:\"\\f2b4\"}.la.la-buysellads{font-family:'Line Awesome Brands';font-weight:400}.la.la-connectdevelop{font-family:'Line Awesome Brands';font-weight:400}.la.la-dashcube{font-family:'Line Awesome Brands';font-weight:400}.la.la-forumbee{font-family:'Line Awesome Brands';font-weight:400}.la.la-leanpub{font-family:'Line Awesome Brands';font-weight:400}.la.la-sellsy{font-family:'Line Awesome Brands';font-weight:400}.la.la-shirtsinbulk{font-family:'Line Awesome Brands';font-weight:400}.la.la-simplybuilt{font-family:'Line Awesome Brands';font-weight:400}.la.la-skyatlas{font-family:'Line Awesome Brands';font-weight:400}.la.la-diamond{font-family:'Line Awesome Free';font-weight:400}.la.la-diamond:before{content:\"\\f3a5\"}.la.la-intersex:before{content:\"\\f224\"}.la.la-facebook-official{font-family:'Line Awesome Brands';font-weight:400}.la.la-facebook-official:before{content:\"\\f09a\"}.la.la-pinterest-p{font-family:'Line Awesome Brands';font-weight:400}.la.la-whatsapp{font-family:'Line Awesome Brands';font-weight:400}.la.la-hotel:before{content:\"\\f236\"}.la.la-viacoin{font-family:'Line Awesome Brands';font-weight:400}.la.la-medium{font-family:'Line Awesome Brands';font-weight:400}.la.la-y-combinator{font-family:'Line Awesome Brands';font-weight:400}.la.la-yc{font-family:'Line Awesome Brands';font-weight:400}.la.la-yc:before{content:\"\\f23b\"}.la.la-optin-monster{font-family:'Line Awesome Brands';font-weight:400}.la.la-opencart{font-family:'Line Awesome Brands';font-weight:400}.la.la-expeditedssl{font-family:'Line Awesome Brands';font-weight:400}.la.la-battery-4:before{content:\"\\f240\"}.la.la-battery:before{content:\"\\f240\"}.la.la-battery-3:before{content:\"\\f241\"}.la.la-battery-2:before{content:\"\\f242\"}.la.la-battery-1:before{content:\"\\f243\"}.la.la-battery-0:before{content:\"\\f244\"}.la.la-object-group{font-family:'Line Awesome Free';font-weight:400}.la.la-object-ungroup{font-family:'Line Awesome Free';font-weight:400}.la.la-sticky-note-o{font-family:'Line Awesome Free';font-weight:400}.la.la-sticky-note-o:before{content:\"\\f249\"}.la.la-cc-jcb{font-family:'Line Awesome Brands';font-weight:400}.la.la-cc-diners-club{font-family:'Line Awesome Brands';font-weight:400}.la.la-clone{font-family:'Line Awesome Free';font-weight:400}.la.la-hourglass-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hourglass-o:before{content:\"\\f254\"}.la.la-hourglass-1:before{content:\"\\f251\"}.la.la-hourglass-2:before{content:\"\\f252\"}.la.la-hourglass-3:before{content:\"\\f253\"}.la.la-hand-rock-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-rock-o:before{content:\"\\f255\"}.la.la-hand-grab-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-grab-o:before{content:\"\\f255\"}.la.la-hand-paper-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-paper-o:before{content:\"\\f256\"}.la.la-hand-stop-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-stop-o:before{content:\"\\f256\"}.la.la-hand-scissors-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-scissors-o:before{content:\"\\f257\"}.la.la-hand-lizard-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-lizard-o:before{content:\"\\f258\"}.la.la-hand-spock-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-spock-o:before{content:\"\\f259\"}.la.la-hand-pointer-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-pointer-o:before{content:\"\\f25a\"}.la.la-hand-peace-o{font-family:'Line Awesome Free';font-weight:400}.la.la-hand-peace-o:before{content:\"\\f25b\"}.la.la-registered{font-family:'Line Awesome Free';font-weight:400}.la.la-creative-commons{font-family:'Line Awesome Brands';font-weight:400}.la.la-gg{font-family:'Line Awesome Brands';font-weight:400}.la.la-gg-circle{font-family:'Line Awesome Brands';font-weight:400}.la.la-tripadvisor{font-family:'Line Awesome Brands';font-weight:400}.la.la-odnoklassniki{font-family:'Line Awesome Brands';font-weight:400}.la.la-odnoklassniki-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-get-pocket{font-family:'Line Awesome Brands';font-weight:400}.la.la-wikipedia-w{font-family:'Line Awesome Brands';font-weight:400}.la.la-safari{font-family:'Line Awesome Brands';font-weight:400}.la.la-chrome{font-family:'Line Awesome Brands';font-weight:400}.la.la-firefox{font-family:'Line Awesome Brands';font-weight:400}.la.la-opera{font-family:'Line Awesome Brands';font-weight:400}.la.la-internet-explorer{font-family:'Line Awesome Brands';font-weight:400}.la.la-television:before{content:\"\\f26c\"}.la.la-contao{font-family:'Line Awesome Brands';font-weight:400}.la.la-500px{font-family:'Line Awesome Brands';font-weight:400}.la.la-amazon{font-family:'Line Awesome Brands';font-weight:400}.la.la-calendar-plus-o{font-family:'Line Awesome Free';font-weight:400}.la.la-calendar-plus-o:before{content:\"\\f271\"}.la.la-calendar-minus-o{font-family:'Line Awesome Free';font-weight:400}.la.la-calendar-minus-o:before{content:\"\\f272\"}.la.la-calendar-times-o{font-family:'Line Awesome Free';font-weight:400}.la.la-calendar-times-o:before{content:\"\\f273\"}.la.la-calendar-check-o{font-family:'Line Awesome Free';font-weight:400}.la.la-calendar-check-o:before{content:\"\\f274\"}.la.la-map-o{font-family:'Line Awesome Free';font-weight:400}.la.la-map-o:before{content:\"\\f279\"}.la.la-commenting:before{content:\"\\f4ad\"}.la.la-commenting-o{font-family:'Line Awesome Free';font-weight:400}.la.la-commenting-o:before{content:\"\\f4ad\"}.la.la-houzz{font-family:'Line Awesome Brands';font-weight:400}.la.la-vimeo{font-family:'Line Awesome Brands';font-weight:400}.la.la-vimeo:before{content:\"\\f27d\"}.la.la-black-tie{font-family:'Line Awesome Brands';font-weight:400}.la.la-fonticons{font-family:'Line Awesome Brands';font-weight:400}.la.la-reddit-alien{font-family:'Line Awesome Brands';font-weight:400}.la.la-edge{font-family:'Line Awesome Brands';font-weight:400}.la.la-credit-card-alt:before{content:\"\\f09d\"}.la.la-codiepie{font-family:'Line Awesome Brands';font-weight:400}.la.la-modx{font-family:'Line Awesome Brands';font-weight:400}.la.la-fort-awesome{font-family:'Line Awesome Brands';font-weight:400}.la.la-usb{font-family:'Line Awesome Brands';font-weight:400}.la.la-product-hunt{font-family:'Line Awesome Brands';font-weight:400}.la.la-mixcloud{font-family:'Line Awesome Brands';font-weight:400}.la.la-scribd{font-family:'Line Awesome Brands';font-weight:400}.la.la-pause-circle-o{font-family:'Line Awesome Free';font-weight:400}.la.la-pause-circle-o:before{content:\"\\f28b\"}.la.la-stop-circle-o{font-family:'Line Awesome Free';font-weight:400}.la.la-stop-circle-o:before{content:\"\\f28d\"}.la.la-bluetooth{font-family:'Line Awesome Brands';font-weight:400}.la.la-bluetooth-b{font-family:'Line Awesome Brands';font-weight:400}.la.la-gitlab{font-family:'Line Awesome Brands';font-weight:400}.la.la-wpbeginner{font-family:'Line Awesome Brands';font-weight:400}.la.la-wpforms{font-family:'Line Awesome Brands';font-weight:400}.la.la-envira{font-family:'Line Awesome Brands';font-weight:400}.la.la-wheelchair-alt{font-family:'Line Awesome Brands';font-weight:400}.la.la-wheelchair-alt:before{content:\"\\f368\"}.la.la-question-circle-o{font-family:'Line Awesome Free';font-weight:400}.la.la-question-circle-o:before{content:\"\\f059\"}.la.la-volume-control-phone:before{content:\"\\f2a0\"}.la.la-asl-interpreting:before{content:\"\\f2a3\"}.la.la-deafness:before{content:\"\\f2a4\"}.la.la-hard-of-hearing:before{content:\"\\f2a4\"}.la.la-glide{font-family:'Line Awesome Brands';font-weight:400}.la.la-glide-g{font-family:'Line Awesome Brands';font-weight:400}.la.la-signing:before{content:\"\\f2a7\"}.la.la-viadeo{font-family:'Line Awesome Brands';font-weight:400}.la.la-viadeo-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-snapchat{font-family:'Line Awesome Brands';font-weight:400}.la.la-snapchat-ghost{font-family:'Line Awesome Brands';font-weight:400}.la.la-snapchat-square{font-family:'Line Awesome Brands';font-weight:400}.la.la-pied-piper{font-family:'Line Awesome Brands';font-weight:400}.la.la-first-order{font-family:'Line Awesome Brands';font-weight:400}.la.la-yoast{font-family:'Line Awesome Brands';font-weight:400}.la.la-themeisle{font-family:'Line Awesome Brands';font-weight:400}.la.la-google-plus-official{font-family:'Line Awesome Brands';font-weight:400}.la.la-google-plus-official:before{content:\"\\f2b3\"}.la.la-google-plus-circle{font-family:'Line Awesome Brands';font-weight:400}.la.la-google-plus-circle:before{content:\"\\f2b3\"}.la.la-font-awesome{font-family:'Line Awesome Brands';font-weight:400}.la.la-fa{font-family:'Line Awesome Brands';font-weight:400}.la.la-fa:before{content:\"\\f2b4\"}.la.la-handshake-o{font-family:'Line Awesome Free';font-weight:400}.la.la-handshake-o:before{content:\"\\f2b5\"}.la.la-envelope-open-o{font-family:'Line Awesome Free';font-weight:400}.la.la-envelope-open-o:before{content:\"\\f2b6\"}.la.la-linode{font-family:'Line Awesome Brands';font-weight:400}.la.la-address-book-o{font-family:'Line Awesome Free';font-weight:400}.la.la-address-book-o:before{content:\"\\f2b9\"}.la.la-vcard:before{content:\"\\f2bb\"}.la.la-address-card-o{font-family:'Line Awesome Free';font-weight:400}.la.la-address-card-o:before{content:\"\\f2bb\"}.la.la-vcard-o{font-family:'Line Awesome Free';font-weight:400}.la.la-vcard-o:before{content:\"\\f2bb\"}.la.la-user-circle-o{font-family:'Line Awesome Free';font-weight:400}.la.la-user-circle-o:before{content:\"\\f2bd\"}.la.la-user-o{font-family:'Line Awesome Free';font-weight:400}.la.la-user-o:before{content:\"\\f007\"}.la.la-id-badge{font-family:'Line Awesome Free';font-weight:400}.la.la-drivers-license:before{content:\"\\f2c2\"}.la.la-id-card-o{font-family:'Line Awesome Free';font-weight:400}.la.la-id-card-o:before{content:\"\\f2c2\"}.la.la-drivers-license-o{font-family:'Line Awesome Free';font-weight:400}.la.la-drivers-license-o:before{content:\"\\f2c2\"}.la.la-quora{font-family:'Line Awesome Brands';font-weight:400}.la.la-free-code-camp{font-family:'Line Awesome Brands';font-weight:400}.la.la-telegram{font-family:'Line Awesome Brands';font-weight:400}.la.la-thermometer-4:before{content:\"\\f2c7\"}.la.la-thermometer:before{content:\"\\f2c7\"}.la.la-thermometer-3:before{content:\"\\f2c8\"}.la.la-thermometer-2:before{content:\"\\f2c9\"}.la.la-thermometer-1:before{content:\"\\f2ca\"}.la.la-thermometer-0:before{content:\"\\f2cb\"}.la.la-bathtub:before{content:\"\\f2cd\"}.la.la-s15:before{content:\"\\f2cd\"}.la.la-window-maximize{font-family:'Line Awesome Free';font-weight:400}.la.la-window-restore{font-family:'Line Awesome Free';font-weight:400}.la.la-times-rectangle:before{content:\"\\f410\"}.la.la-window-close-o{font-family:'Line Awesome Free';font-weight:400}.la.la-window-close-o:before{content:\"\\f410\"}.la.la-times-rectangle-o{font-family:'Line Awesome Free';font-weight:400}.la.la-times-rectangle-o:before{content:\"\\f410\"}.la.la-bandcamp{font-family:'Line Awesome Brands';font-weight:400}.la.la-grav{font-family:'Line Awesome Brands';font-weight:400}.la.la-etsy{font-family:'Line Awesome Brands';font-weight:400}.la.la-imdb{font-family:'Line Awesome Brands';font-weight:400}.la.la-ravelry{font-family:'Line Awesome Brands';font-weight:400}.la.la-eercast{font-family:'Line Awesome Brands';font-weight:400}.la.la-eercast:before{content:\"\\f2da\"}.la.la-snowflake-o{font-family:'Line Awesome Free';font-weight:400}.la.la-snowflake-o:before{content:\"\\f2dc\"}.la.la-superpowers{font-family:'Line Awesome Brands';font-weight:400}.la.la-wpexplorer{font-family:'Line Awesome Brands';font-weight:400}.la.la-spotify{font-family:'Line Awesome Brands';font-weight:400}\n",""]),t.a=_},function(e,t,a){"use strict";t.a=a.p+"static/line-awesome/dist/line-awesome/fonts/la-brands-400.eot"},function(e,t,a){"use strict";t.a=a.p+"static/line-awesome/dist/line-awesome/fonts/la-brands-400.woff2"},function(e,t,a){"use strict";t.a=a.p+"static/line-awesome/dist/line-awesome/fonts/la-brands-400.woff"},function(e,t,a){"use strict";t.a=a.p+"static/line-awesome/dist/line-awesome/fonts/la-brands-400.ttf"},function(e,t,a){"use strict";t.a=a.p+"static/line-awesome/dist/line-awesome/fonts/la-regular-400.eot"},function(e,t,a){"use strict";t.a=a.p+"static/line-awesome/dist/line-awesome/fonts/la-regular-400.woff2"},function(e,t,a){"use strict";t.a=a.p+"static/line-awesome/dist/line-awesome/fonts/la-regular-400.woff"},function(e,t,a){"use strict";t.a=a.p+"static/line-awesome/dist/line-awesome/fonts/la-regular-400.ttf"},function(e,t,a){"use strict";t.a=a.p+"static/line-awesome/dist/line-awesome/fonts/la-solid-900.eot"},function(e,t,a){"use strict";t.a=a.p+"static/line-awesome/dist/line-awesome/fonts/la-solid-900.woff2"},function(e,t,a){"use strict";t.a=a.p+"static/line-awesome/dist/line-awesome/fonts/la-solid-900.woff"},function(e,t,a){"use strict";t.a=a.p+"static/line-awesome/dist/line-awesome/fonts/la-solid-900.ttf"},function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"c",(function(){return l})),a.d(t,"d",(function(){return h})),a.d(t,"b",(function(){return c}));var n=a(94),i=(a(86),"_applyShimCurrentVersion"),o="_applyShimNextVersion",r=Promise.resolve();function s(e){var t=n.a[e];t&&function(e){e[i]=e[i]||0,e._applyShimValidatingVersion=e._applyShimValidatingVersion||0,e[o]=(e[o]||0)+1}(t)}function l(e){return e[i]===e[o]}function h(e){return!l(e)&&e._applyShimValidatingVersion===e[o]}function c(e){e._applyShimValidatingVersion=e[o],e._validating||(e._validating=!0,r.then((function(){e[i]=e[o],e._validating=!1})))}},,function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(9),i=a(17),o=a(65),r=a(216),s=a(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class l extends(Object(r.a)(Object(i.a)(Object(o.a)(n.a)))){static get template(){return s.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>
    <div part="content">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-item"}static get version(){return"2.3.0"}constructor(){super(),this.value}}customElements.define(l.is,l)},function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a(43);var n=a(71),i=a(6),o=Object(n.a)({_template:i.a`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){o.instance||(o.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async((function(){this._text=e}),100)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});o.instance=null,o.requestAvailability=function(){o.instance||(o.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(o.instance)}},,,function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));a(37);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/function n(e,t,a){return{index:e,removed:t,addedCount:a}}function i(e,t,a,i,o,s){var l,h=0,c=0,d=Math.min(a-t,s-o);if(0==t&&0==o&&(h=function(e,t,a){for(var n=0;n<a;n++)if(!r(e[n],t[n]))return n;return a}(e,i,d)),a==e.length&&s==i.length&&(c=function(e,t,a){var n=e.length,i=t.length,o=0;for(;o<a&&r(e[--n],t[--i]);)o++;return o}(e,i,d-h)),o+=h,s-=c,(a-=c)-(t+=h)==0&&s-o==0)return[];if(t==a){for(l=n(t,[],0);o<s;)l.removed.push(i[o++]);return[l]}if(o==s)return[n(t,[],a-t)];var p=function(e){for(var t=e.length-1,a=e[0].length-1,n=e[t][a],i=[];t>0||a>0;)if(0!=t)if(0!=a){var o=e[t-1][a-1],r=e[t-1][a],s=e[t][a-1],l=void 0;(l=r<s?r<o?r:o:s<o?s:o)==o?(o==n?i.push(0):(i.push(1),n=o),t--,a--):l==r?(i.push(3),t--,n=r):(i.push(2),a--,n=s)}else i.push(3),t--;else i.push(2),a--;return i.reverse(),i}(function(e,t,a,n,i,o){for(var s=o-i+1,l=a-t+1,h=new Array(s),c=0;c<s;c++)h[c]=new Array(l),h[c][0]=c;for(var d=0;d<l;d++)h[0][d]=d;for(var p=1;p<s;p++)for(var u=1;u<l;u++)if(r(e[t+u-1],n[i+p-1]))h[p][u]=h[p-1][u-1];else{var f=h[p-1][u]+1,v=h[p][u-1]+1;h[p][u]=f<v?f:v}return h}(e,t,a,i,o,s));l=void 0;for(var u=[],f=t,v=o,m=0;m<p.length;m++)switch(p[m]){case 0:l&&(u.push(l),l=void 0),f++,v++;break;case 1:l||(l=n(f,[],0)),l.addedCount++,f++,l.removed.push(i[v]),v++;break;case 2:l||(l=n(f,[],0)),l.addedCount++,f++;break;case 3:l||(l=n(f,[],0)),l.removed.push(i[v]),v++}return l&&u.push(l),u}function o(e,t){return i(e,0,e.length,t,0,t.length)}function r(e,t){return e===t}},function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));
/**
@license
Vaadin Login
Copyright (C) 2018 Vaadin Ltd
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var n=e=>class extends e{static get properties(){return{action:{type:String,value:null,notify:!0},disabled:{type:Boolean,value:!1,notify:!0},error:{type:Boolean,value:!1,reflectToAttribute:!0,notify:!0},noForgotPassword:{type:Boolean,value:!1,notify:!0},i18n:{type:Object,value:function(){return{form:{title:"Log in",username:"Username",password:"Password",submit:"Log in",forgotPassword:"Forgot password"},errorMessage:{title:"Incorrect username or password",message:"Check that you have entered the correct username and password and try again."}}},notify:!0},_preventAutoEnable:{type:Boolean,value:!1}}}_retargetEvent(e){e.stopPropagation();var{detail:t,composed:a,cancelable:n,bubbles:i}=e;this.dispatchEvent(new CustomEvent(e.type,{bubbles:i,cancelable:n,composed:a,detail:t}))||e.preventDefault()}}},,,function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));a(37);for(var n=a(35),i=a(95),o=a(154),r={},s=HTMLElement.prototype;s;){for(var l=Object.getOwnPropertyNames(s),h=0;h<l.length;h++)r[l[h]]=!0;s=Object.getPrototypeOf(s)}var c=Object(n.a)(e=>{var t=Object(o.a)(e);return class extends t{static createPropertiesForAttributes(){for(var e=this.observedAttributes,t=0;t<e.length;t++)this.prototype._createPropertyAccessor(Object(i.b)(e[t]))}static attributeNameForProperty(e){return Object(i.a)(e)}_initializeProperties(){this.__dataProto&&(this._initializeProtoProperties(this.__dataProto),this.__dataProto=null),super._initializeProperties()}_initializeProtoProperties(e){for(var t in e)this._setProperty(t,e[t])}_ensureAttribute(e,t){this.hasAttribute(e)||this._valueToNodeAttribute(this,t,e)}_serializeValue(e){switch(typeof e){case"object":if(e instanceof Date)return e.toString();if(e)try{return JSON.stringify(e)}catch(e){return""}default:return super._serializeValue(e)}}_deserializeValue(e,t){var a;switch(t){case Object:try{a=JSON.parse(e)}catch(t){a=e}break;case Array:try{a=JSON.parse(e)}catch(t){a=null,console.warn("Polymer::Attributes: couldn't decode Array as JSON: "+e)}break;case Date:a=isNaN(e)?String(e):Number(e),a=new Date(a);break;default:a=super._deserializeValue(e,t)}return a}_definePropertyAccessor(e,t){!function(e,t){if(!r[t]){var a=e[t];void 0!==a&&(e.__data?e._setPendingProperty(t,a):(e.__dataProto?e.hasOwnProperty(JSCompiler_renameProperty("__dataProto",e))||(e.__dataProto=Object.create(e.__dataProto)):e.__dataProto={},e.__dataProto[t]=a))}}(this,e),super._definePropertyAccessor(e,t)}_hasAccessor(e){return this.__dataHasAccessor&&this.__dataHasAccessor[e]}_isPropertyPending(e){return Boolean(this.__dataPending&&e in this.__dataPending)}}})},function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a(37);var n=a(35),i=a(11),o=a(15),r=i.c,s=Object(n.a)(e=>class extends e{static createProperties(e){var t=this.prototype;for(var a in e)a in t||t._createPropertyAccessor(a)}static attributeNameForProperty(e){return e.toLowerCase()}static typeForProperty(e){}_createPropertyAccessor(e,t){this._addPropertyToAttributeMap(e),this.hasOwnProperty("__dataHasAccessor")||(this.__dataHasAccessor=Object.assign({},this.__dataHasAccessor)),this.__dataHasAccessor[e]||(this.__dataHasAccessor[e]=!0,this._definePropertyAccessor(e,t))}_addPropertyToAttributeMap(e){if(this.hasOwnProperty("__dataAttributes")||(this.__dataAttributes=Object.assign({},this.__dataAttributes)),!this.__dataAttributes[e]){var t=this.constructor.attributeNameForProperty(e);this.__dataAttributes[t]=e}}_definePropertyAccessor(e,t){Object.defineProperty(this,e,{get(){return this._getProperty(e)},set:t?function(){}:function(t){this._setProperty(e,t)}})}constructor(){super(),this.__dataEnabled=!1,this.__dataReady=!1,this.__dataInvalid=!1,this.__data={},this.__dataPending=null,this.__dataOld=null,this.__dataInstanceProps=null,this.__serializing=!1,this._initializeProperties()}ready(){this.__dataReady=!0,this._flushProperties()}_initializeProperties(){for(var e in this.__dataHasAccessor)this.hasOwnProperty(e)&&(this.__dataInstanceProps=this.__dataInstanceProps||{},this.__dataInstanceProps[e]=this[e],delete this[e])}_initializeInstanceProperties(e){Object.assign(this,e)}_setProperty(e,t){this._setPendingProperty(e,t)&&this._invalidateProperties()}_getProperty(e){return this.__data[e]}_setPendingProperty(e,t,a){var n=this.__data[e],i=this._shouldPropertyChange(e,t,n);return i&&(this.__dataPending||(this.__dataPending={},this.__dataOld={}),this.__dataOld&&!(e in this.__dataOld)&&(this.__dataOld[e]=n),this.__data[e]=t,this.__dataPending[e]=t),i}_invalidateProperties(){!this.__dataInvalid&&this.__dataReady&&(this.__dataInvalid=!0,r.run(()=>{this.__dataInvalid&&(this.__dataInvalid=!1,this._flushProperties())}))}_enableProperties(){this.__dataEnabled||(this.__dataEnabled=!0,this.__dataInstanceProps&&(this._initializeInstanceProperties(this.__dataInstanceProps),this.__dataInstanceProps=null),this.ready())}_flushProperties(){var e=this.__data,t=this.__dataPending,a=this.__dataOld;this._shouldPropertiesChange(e,t,a)&&(this.__dataPending=null,this.__dataOld=null,this._propertiesChanged(e,t,a))}_shouldPropertiesChange(e,t,a){return Boolean(t)}_propertiesChanged(e,t,a){}_shouldPropertyChange(e,t,a){return a!==t&&(a==a||t==t)}attributeChangedCallback(e,t,a,n){t!==a&&this._attributeToProperty(e,a),super.attributeChangedCallback&&super.attributeChangedCallback(e,t,a,n)}_attributeToProperty(e,t,a){if(!this.__serializing){var n=this.__dataAttributes,i=n&&n[e]||e;this[i]=this._deserializeValue(t,a||this.constructor.typeForProperty(i))}}_propertyToAttribute(e,t,a){this.__serializing=!0,a=arguments.length<3?this[e]:a,this._valueToNodeAttribute(this,a,t||this.constructor.attributeNameForProperty(e)),this.__serializing=!1}_valueToNodeAttribute(e,t,a){var n=this._serializeValue(t);void 0===n?e.removeAttribute(a):("class"!==a&&"name"!==a&&"slot"!==a||(e=Object(o.a)(e)),e.setAttribute(a,n))}_serializeValue(e){switch(typeof e){case"boolean":return e?"":void 0;default:return null!=e?e.toString():void 0}}_deserializeValue(e,t){switch(t){case Boolean:return null!==e;case Number:return Number(e);default:return e}}})},function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(43);var n=a(39),i={properties:{scrollTarget:{type:HTMLElement,value:function(){return this._defaultScrollTarget}}},observers:["_scrollTargetChanged(scrollTarget, isAttached)"],_shouldHaveListener:!0,_scrollTargetChanged:function(e,t){if(this._oldScrollTarget&&(this._toggleScrollListener(!1,this._oldScrollTarget),this._oldScrollTarget=null),t)if("document"===e)this.scrollTarget=this._doc;else if("string"==typeof e){var a=this.domHost;this.scrollTarget=a&&a.$?a.$[e]:Object(n.a)(this.ownerDocument).querySelector("#"+e)}else this._isValidScrollTarget()&&(this._oldScrollTarget=e,this._toggleScrollListener(this._shouldHaveListener,e))},_scrollHandler:function(){},get _defaultScrollTarget(){return this._doc},get _doc(){return this.ownerDocument.documentElement},get _scrollTop(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageYOffset:this.scrollTarget.scrollTop:0},get _scrollLeft(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.pageXOffset:this.scrollTarget.scrollLeft:0},set _scrollTop(e){this.scrollTarget===this._doc?window.scrollTo(window.pageXOffset,e):this._isValidScrollTarget()&&(this.scrollTarget.scrollTop=e)},set _scrollLeft(e){this.scrollTarget===this._doc?window.scrollTo(e,window.pageYOffset):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=e)},scroll:function(e,t){var a;"object"==typeof e?(a=e.left,t=e.top):a=e,a=a||0,t=t||0,this.scrollTarget===this._doc?window.scrollTo(a,t):this._isValidScrollTarget()&&(this.scrollTarget.scrollLeft=a,this.scrollTarget.scrollTop=t)},get _scrollTargetWidth(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerWidth:this.scrollTarget.offsetWidth:0},get _scrollTargetHeight(){return this._isValidScrollTarget()?this.scrollTarget===this._doc?window.innerHeight:this.scrollTarget.offsetHeight:0},_isValidScrollTarget:function(){return this.scrollTarget instanceof HTMLElement},_toggleScrollListener:function(e,t){var a=t===this._doc?window:t;e?this._boundScrollHandler||(this._boundScrollHandler=this._scrollHandler.bind(this),a.addEventListener("scroll",this._boundScrollHandler)):this._boundScrollHandler&&(a.removeEventListener("scroll",this._boundScrollHandler),this._boundScrollHandler=null)},toggleScrollListener:function(e){this._shouldHaveListener=e,this._toggleScrollListener(e,this.scrollTarget)}}},function(e,t,a){"use strict";a.d(t,"b",(function(){return o})),a.d(t,"a",(function(){return r}));var n=a(13),i=a(11),o=class e{constructor(e,t,a){this.grid=e,this.parentCache=t,this.parentItem=a,this.itemCaches={},this.items={},this.effectiveSize=0,this.size=0,this.pendingRequests={}}isLoading(){return Boolean(Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(e=>this.itemCaches[e].isLoading())[0])}getItemForIndex(e){var{cache:t,scaledIndex:a}=this.getCacheAndIndex(e);return t.items[a]}updateSize(){this.effectiveSize=!this.parentItem||this.grid._isExpanded(this.parentItem)?this.size+Object.keys(this.itemCaches).reduce((e,t)=>{var a=this.itemCaches[t];return a.updateSize(),e+a.effectiveSize},0):0}ensureSubCacheForScaledIndex(t){if(!this.itemCaches[t]){var a=new e(this.grid,this,this.items[t]);this.itemCaches[t]=a,this.grid._loadPage(0,a)}}getCacheAndIndex(e){for(var t=e,a=Object.keys(this.itemCaches),n=0;n<a.length;n++){var i=Number(a[n]),o=this.itemCaches[i];if(t<=i)return{cache:this,scaledIndex:t};if(t<=i+o.effectiveSize)return o.getCacheAndIndex(t-i-1);t-=o.effectiveSize}return{cache:this,scaledIndex:t}}},r=e=>class extends e{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},dataProvider:{type:Object,notify:!0,observer:"_dataProviderChanged"},loading:{type:Boolean,notify:!0,readOnly:!0,reflectToAttribute:!0},_cache:{type:Object,value:function(){return new o(this)}},itemIdPath:{type:String,value:null},expandedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_sizeChanged(size)","_itemIdPathChanged(itemIdPath)","_expandedItemsChanged(expandedItems.*)"]}_sizeChanged(e){var t=e-this._cache.size;this._cache.size+=t,this._cache.effectiveSize+=t,this._effectiveSize=this._cache.effectiveSize,this._increasePoolIfNeeded(0),this._debounceIncreasePool&&this._debounceIncreasePool.flush()}_getItem(e,t){if(!(e>=this._effectiveSize)){t.index=e;var{cache:a,scaledIndex:n}=this._cache.getCacheAndIndex(e),i=a.items[n];i?(this._toggleAttribute("loading",!1,t),this._updateItem(t,i),this._isExpanded(i)&&a.ensureSubCacheForScaledIndex(n)):(this._toggleAttribute("loading",!0,t),this._loadPage(this._getPageForIndex(n),a))}}_expandedInstanceChangedCallback(e,t){void 0!==e.item&&(t?this.expandItem(e.item):this.collapseItem(e.item))}getItemId(e){return this.itemIdPath?this.get(this.itemIdPath,e):e}_isExpanded(e){return this.__expandedKeys.has(this.getItemId(e))}_expandedItemsChanged(e){this.__cacheExpandedKeys(),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,this._assignModels()}_itemIdPathChanged(e){this.__cacheExpandedKeys()}__cacheExpandedKeys(){this.expandedItems&&(this.__expandedKeys=new Set,this.expandedItems.forEach(e=>{this.__expandedKeys.add(this.getItemId(e))}))}expandItem(e){this._isExpanded(e)||this.push("expandedItems",e)}collapseItem(e){this._isExpanded(e)&&this.splice("expandedItems",this._getItemIndexInArray(e,this.expandedItems),1)}_getIndexLevel(e){for(var{cache:t}=this._cache.getCacheAndIndex(e),a=0;t.parentCache;)t=t.parentCache,a++;return a}_canPopulate(){return Boolean(this._hasData&&this._columnTree)}_loadPage(e,t){if(!t.pendingRequests[e]&&this.dataProvider){this._setLoading(!0),t.pendingRequests[e]=!0;var a={page:e,pageSize:this.pageSize,sortOrders:this._mapSorters(),filters:this._mapFilters(),parentItem:t.parentItem};this._debounceIncreasePool&&this._debounceIncreasePool.flush(),this.dataProvider(a,(o,r)=>{void 0!==r?t.size=r:a.parentItem&&(t.size=o.length);var s=Array.from(this.$.items.children).map(e=>e._item);o.forEach((a,n)=>{var i=e*this.pageSize+n;t.items[i]=a,this._isExpanded(a)&&s.indexOf(a)>-1&&t.ensureSubCacheForScaledIndex(i)}),this._hasData=!0,delete t.pendingRequests[e],this._debouncerApplyCachedData=n.a.debounce(this._debouncerApplyCachedData,i.d.after(0),()=>{this._setLoading(!1),this._cache.updateSize(),this._effectiveSize=this._cache.effectiveSize,Array.from(this.$.items.children).filter(e=>!e.hidden).forEach(e=>{this._cache.getItemForIndex(e.index)&&this._getItem(e.index,e)}),this._increasePoolIfNeeded(0),this.__scrollToPendingIndex()}),this._cache.isLoading()||this._debouncerApplyCachedData.flush(),this.__flushPendingRecalculateColumnWidths()})}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){this._cache=new o(this),Array.from(this.$.items.children).forEach(e=>{Array.from(e.children).forEach(e=>{e._instance&&e._instance._setPendingProperty("item",{},!1)})}),this._cache.size=this.size||0,this._cache.updateSize(),this._hasData=!1,this._assignModels(),this._effectiveSize&&this._initialPoolCreated||this._loadPage(0,this._cache)}_pageSizeChanged(e,t){void 0!==t&&e!==t&&this.clearCache()}_checkSize(){void 0===this.size&&0===this._effectiveSize&&console.warn("The <vaadin-grid> needs the total number of items in order to display rows. Set the total number of items to the `size` property, or provide the total number of items in the second argument of the `dataProvider`’s `callback` call.")}_dataProviderChanged(e,t){void 0!==t&&this.clearCache(),e&&this.items&&this.items.length&&this._scrollToIndex(this._firstVisibleIndex),this._ensureFirstPageLoaded(),this._debouncerCheckSize=n.a.debounce(this._debouncerCheckSize,i.d.after(2e3),this._checkSize.bind(this)),this._scrollHandler()}_ensureFirstPageLoaded(){this._hasData||this._loadPage(0,this._cache)}_itemsEqual(e,t){return this.getItemId(e)===this.getItemId(t)}_getItemIndexInArray(e,t){var a=-1;return t.forEach((t,n)=>{this._itemsEqual(t,e)&&(a=n)}),a}scrollToIndex(e){super.scrollToIndex(e),isNaN(e)||!this._cache.isLoading()&&this.clientHeight||(this.__pendingScrollToIndex=e)}__scrollToPendingIndex(){if(this.__pendingScrollToIndex&&this.$.items.children.length){var e=this.__pendingScrollToIndex;delete this.__pendingScrollToIndex,this._debounceIncreasePool&&this._debounceIncreasePool.flush(),this.scrollToIndex(e)}}}},function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(9),i=a(49);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class o extends class extends n.a{}{static get is(){return"vaadin-grid-templatizer"}static get properties(){return{dataHost:Object,template:Object,_templateInstances:{type:Array,value:function(){return[]}},_parentPathValues:{value:function(){return{}}},_grid:Object}}static get observers(){return["_templateInstancesChanged(_templateInstances.*, _parentPathValues.*)"]}constructor(){super(),this._instanceProps={detailsOpened:!0,index:!0,item:!0,selected:!0,expanded:!0,level:!0}}createInstance(){this._ensureTemplatized();var e=new this._TemplateClass({});return this.addInstance(e),e}addInstance(e){-1===this._templateInstances.indexOf(e)&&(this._templateInstances.push(e),requestAnimationFrame(()=>this.notifyPath("_templateInstances.*",this._templateInstances)))}removeInstance(e){var t=this._templateInstances.indexOf(e);this.splice("_templateInstances",t,1)}_ensureTemplatized(){this._TemplateClass||(this._TemplateClass=Object(i.b)(this.template,this,{instanceProps:this._instanceProps,parentModel:!0,forwardHostProp:function(e,t){this._forwardParentProp(e,t),this._templateInstances&&this._templateInstances.forEach(a=>a.notifyPath(e,t))},notifyInstanceProp:function(e,t,a){if("index"!==t&&"item"!==t){var n=`__${t}__`;if(e[n]!==a){e[n]=a;var i=Array.from(this._grid.$.items.children).filter(t=>this._grid._itemsEqual(t._item,e.item))[0];i&&Array.from(i.children).forEach(e=>{e._instance&&(e._instance[n]=a,e._instance.notifyPath(t,a))});if(Array.isArray(this._grid.items)&&0===t.indexOf("item.")){var o=this._grid.items.indexOf(e.item),r=t.slice("item.".length);this._grid.notifyPath(`items.${o}.${r}`,a)}var s=`_${t}InstanceChangedCallback`;this._grid&&this._grid[s]&&this._grid[s](e,a)}}}}))}_forwardParentProp(e,t){this._parentPathValues[e]=t,this._templateInstances.forEach(a=>a.notifyPath(e,t))}_templateInstancesChanged(e,t){var a,n;if("_templateInstances"===e.path)a=0,n=this._templateInstances.length;else{if("_templateInstances.splices"!==e.path)return;a=e.value.index,n=e.value.addedCount}Object.keys(this._parentPathValues||{}).forEach(e=>{for(var t=a;t<a+n;t++)this._templateInstances[t].set(e,this._parentPathValues[e])})}}customElements.define(o.is,o)},function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var n=class{static _updateColumnOrders(e,t,a){var n=1;e.forEach(e=>{n%10==0&&n++,e._order=a+n*t,n++})}}},function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var n=a(11),i=a(13),o=a(6).a`<dom-module id="vaadin-text-field-shared-styles">
  <template>
    <style>
      :host {
        display: inline-flex;
        outline: none;
      }

      :host::before {
        content: "\\2003";
        width: 0;
        display: inline-block;
        /* Size and position this element on the same vertical position as the input-field element
           to make vertical align for the host element work as expected */
      }

      :host([hidden]) {
        display: none !important;
      }

      .vaadin-text-field-container,
      .vaadin-text-area-container {
        display: flex;
        flex-direction: column;
        min-width: 100%;
        max-width: 100%;
        width: var(--vaadin-text-field-default-width, 12em);
      }

      [part="label"]:empty {
        display: none;
      }

      [part="input-field"] {
        display: flex;
        align-items: center;
        flex: auto;
      }

      .vaadin-text-field-container [part="input-field"] {
        flex-grow: 0;
      }

      /* Reset the native input styles */
      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea) {
        -webkit-appearance: none;
        -moz-appearance: none;
        outline: none;
        margin: 0;
        padding: 0;
        border: 0;
        border-radius: 0;
        min-width: 0;
        font: inherit;
        font-size: 1em;
        line-height: normal;
        color: inherit;
        background-color: transparent;
        /* Disable default invalid style in Firefox */
        box-shadow: none;
      }

      [part="input-field"] ::slotted(*) {
        flex: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        flex: auto;
        white-space: nowrap;
        overflow: hidden;
        width: 100%;
        height: 100%;
      }

      [part="input-field"] ::slotted(textarea) {
        resize: none;
      }

      [part="value"]::-ms-clear,
      [part="input-field"] ::slotted(input)::-ms-clear {
        display: none;
      }

      [part="clear-button"] {
        cursor: default;
      }

      [part="clear-button"]::before {
        content: "✕";
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);var r={default:["list","autofocus","pattern","autocapitalize","autocorrect","maxlength","minlength","name","placeholder","autocomplete","title","disabled","readonly","required"],accessible:["invalid"]},s={DEFAULT:"default",ACCESSIBLE:"accessible"},l=e=>class extends e{static get properties(){return{autocomplete:{type:String},autocorrect:{type:String},autocapitalize:{type:String},autoselect:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1},errorMessage:{type:String,value:"",observer:"_errorMessageChanged"},i18n:{type:Object,value:()=>({clear:"Clear"})},label:{type:String,value:"",observer:"_labelChanged"},helperText:{type:String,value:"",observer:"_helperTextChanged"},maxlength:{type:Number},minlength:{type:Number},name:{type:String},placeholder:{type:String},readonly:{type:Boolean,reflectToAttribute:!0},required:{type:Boolean,reflectToAttribute:!0},value:{type:String,value:"",observer:"_valueChanged",notify:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},hasValue:{type:Boolean,reflectToAttribute:!0},preventInvalidInput:{type:Boolean},_enabledCharPattern:String,_labelId:String,_helperTextId:String,_errorId:String,_inputId:String,_hasSlottedHelper:Boolean}}static get observers(){return["_stateChanged(disabled, readonly, clearButtonVisible, hasValue)","_hostPropsChanged("+r.default.join(", ")+")","_hostAccessiblePropsChanged("+r.accessible.join(", ")+")","_getActiveErrorId(invalid, errorMessage, _errorId, helperText, _helperTextId, _hasSlottedHelper)","_getActiveLabelId(label, _labelId, _inputId)","__observeOffsetHeight(errorMessage, invalid, label, helperText)","__enabledCharPatternChanged(_enabledCharPattern)"]}get focusElement(){if(this.shadowRoot){var e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);return e||this.shadowRoot.querySelector('[part="value"]')}}get inputElement(){return this.focusElement}get _slottedTagName(){return"input"}_createConstraintsObserver(){this._createMethodObserver("_constraintsChanged(required, minlength, maxlength, pattern)")}_onInput(e){if(this.__preventInput)return e.stopImmediatePropagation(),void(this.__preventInput=!1);if(this.preventInvalidInput){var t=this.inputElement;if(t.value.length>0&&!this.checkValidity())return t.value=this.value||"",this.setAttribute("input-prevented",""),void(this._inputDebouncer=i.a.debounce(this._inputDebouncer,n.d.after(200),()=>{this.removeAttribute("input-prevented")}))}e.__fromClearButton||(this.__userInput=!0),this.value=e.target.value,this.__userInput=!1}_stateChanged(e,t,a,n){!e&&!t&&a&&n?this.$.clearButton.removeAttribute("hidden"):this.$.clearButton.setAttribute("hidden",!0)}_onChange(e){if(!this._valueClearing){var t=new CustomEvent("change",{detail:{sourceEvent:e},bubbles:e.bubbles,cancelable:e.cancelable});this.dispatchEvent(t)}}_valueChanged(e,t){""===e&&void 0===t||(this.hasValue=""!==e&&null!=e,this.__userInput||(void 0!==e?this.inputElement.value=e:this.value=this.inputElement.value="",this.invalid&&this.validate()))}_labelChanged(e){this._setOrToggleAttribute("has-label",!!e,this)}_helperTextChanged(e){this._setOrToggleAttribute("has-helper",!!e,this)}_errorMessageChanged(e){this._setOrToggleAttribute("has-error-message",!!e,this)}_onHelperSlotChange(){var e=this.shadowRoot.querySelector('[name="helper"]').assignedNodes({flatten:!0});this._hasSlottedHelper=e.filter(e=>3!==e.nodeType).length,this._hasSlottedHelper?this.setAttribute("has-helper","slotted"):""!==this.helperText&&null!==this.helperText||this.removeAttribute("has-helper")}_onSlotChange(){var e=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`);this.value&&(this.inputElement.value=this.value,this.validate()),e&&!this._slottedInput?(this._validateSlottedValue(e),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput=e):!e&&this._slottedInput&&(this._removeInputListeners(this._slottedInput),this._removeIEListeners(this._slottedInput),this._slottedInput=void 0),Object.keys(s).map(e=>s[e]).forEach(e=>this._propagateHostAttributes(r[e].map(e=>this[e]),e))}_hostPropsChanged(...e){this._propagateHostAttributes(e,s.DEFAULT)}_hostAccessiblePropsChanged(...e){this._propagateHostAttributes(e,s.ACCESSIBLE)}_validateSlottedValue(e){e.value!==this.value&&(console.warn("Please define value on the vaadin-text-field component!"),e.value="")}_propagateHostAttributes(e,t){var a=this.inputElement,n=r[t];t===s.ACCESSIBLE?n.forEach((t,n)=>{this._setOrToggleAttribute(t,e[n],a),this._setOrToggleAttribute("aria-"+t,!!e[n]&&"true",a)}):n.forEach((t,n)=>{this._setOrToggleAttribute(t,e[n],a)})}_setOrToggleAttribute(e,t,a){e&&a&&(t?a.setAttribute(e,"boolean"==typeof t?"":t):a.removeAttribute(e))}_constraintsChanged(e,t,a,n){this.invalid&&(e||t||a||n?this.validate():this.invalid=!1)}checkValidity(){return this.required||this.pattern||this.maxlength||this.minlength||this.__forceCheckValidity?this.inputElement.checkValidity():!this.invalid}_addInputListeners(e){e.addEventListener("input",this._boundOnInput),e.addEventListener("change",this._boundOnChange),e.addEventListener("blur",this._boundOnBlur),e.addEventListener("focus",this._boundOnFocus),e.addEventListener("paste",this._boundOnPaste),e.addEventListener("drop",this._boundOnDrop),e.addEventListener("beforeinput",this._boundOnBeforeInput)}_removeInputListeners(e){e.removeEventListener("input",this._boundOnInput),e.removeEventListener("change",this._boundOnChange),e.removeEventListener("blur",this._boundOnBlur),e.removeEventListener("focus",this._boundOnFocus),e.removeEventListener("paste",this._boundOnPaste),e.removeEventListener("drop",this._boundOnDrop),e.removeEventListener("beforeinput",this._boundOnBeforeInput)}ready(){super.ready(),this._createConstraintsObserver(),this._boundOnInput=this._onInput.bind(this),this._boundOnChange=this._onChange.bind(this),this._boundOnBlur=this._onBlur.bind(this),this._boundOnFocus=this._onFocus.bind(this),this._boundOnPaste=this._onPaste.bind(this),this._boundOnDrop=this._onDrop.bind(this),this._boundOnBeforeInput=this._onBeforeInput.bind(this);var e=this.shadowRoot.querySelector('[part="value"]');this._slottedInput=this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`),this._addInputListeners(e),this._addIEListeners(e),this._slottedInput&&(this._addIEListeners(this._slottedInput),this._addInputListeners(this._slottedInput)),this.shadowRoot.querySelector('[name="input"], [name="textarea"]').addEventListener("slotchange",this._onSlotChange.bind(this)),this._onHelperSlotChange(),this.shadowRoot.querySelector('[name="helper"]').addEventListener("slotchange",this._onHelperSlotChange.bind(this)),window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles(),this.$.clearButton.addEventListener("mousedown",()=>this._valueClearing=!0),this.$.clearButton.addEventListener("mouseleave",()=>this._valueClearing=!1),this.$.clearButton.addEventListener("click",this._onClearButtonClick.bind(this)),this.addEventListener("keydown",this._onKeyDown.bind(this));var t=l._uniqueId=1+l._uniqueId||0;this._errorId=`${this.constructor.is}-error-${t}`,this._labelId=`${this.constructor.is}-label-${t}`,this._helperTextId=`${this.constructor.is}-helper-${t}`,this._inputId=`${this.constructor.is}-input-${t}`,this.shadowRoot.querySelector('[part="error-message"]').addEventListener("transitionend",()=>{this.__observeOffsetHeight()})}validate(){return!(this.invalid=!this.checkValidity())}clear(){this.value=""}_onBlur(){this.validate()}_onFocus(){this.autoselect&&(this.inputElement.select(),setTimeout(()=>{try{this.inputElement.setSelectionRange(0,9999)}catch(e){}}))}_onClearButtonClick(e){e.preventDefault(),this.inputElement.focus(),this.clear(),this._valueClearing=!1,navigator.userAgent.match(/Trident/)&&(this.__preventInput=!1);var t=new Event("input",{bubbles:!0,composed:!0});t.__fromClearButton=!0;var a=new Event("change",{bubbles:!this._slottedInput});a.__fromClearButton=!0,this.inputElement.dispatchEvent(t),this.inputElement.dispatchEvent(a)}_onKeyDown(e){if(27===e.keyCode&&this.clearButtonVisible){var t=!!this.value;this.clear(),t&&this.inputElement.dispatchEvent(new Event("change",{bubbles:!this._slottedInput}))}this._enabledCharPattern&&!this.__shouldAcceptKey(e)&&e.preventDefault()}__shouldAcceptKey(e){return e.metaKey||e.ctrlKey||!e.key||1!==e.key.length||this.__enabledCharRegExp.test(e.key)}_onPaste(e){if(this._enabledCharPattern){var t=(e.clipboardData||window.clipboardData).getData("text");this.__enabledTextRegExp.test(t)||e.preventDefault()}}_onDrop(e){if(this._enabledCharPattern){var t=e.dataTransfer.getData("text");this.__enabledTextRegExp.test(t)||e.preventDefault()}}_onBeforeInput(e){this._enabledCharPattern&&e.data&&!this.__enabledTextRegExp.test(e.data)&&e.preventDefault()}__enabledCharPatternChanged(e){this.__enabledCharRegExp=e&&new RegExp("^"+e+"$"),this.__enabledTextRegExp=e&&new RegExp("^"+e+"*$")}_addIEListeners(e){navigator.userAgent.match(/Trident/)&&(this._shouldPreventInput=()=>{this.__preventInput=!0,requestAnimationFrame(()=>{this.__preventInput=!1})},e.addEventListener("focusin",this._shouldPreventInput),e.addEventListener("focusout",this._shouldPreventInput),this._createPropertyObserver("placeholder",this._shouldPreventInput))}_removeIEListeners(e){navigator.userAgent.match(/Trident/)&&(e.removeEventListener("focusin",this._shouldPreventInput),e.removeEventListener("focusout",this._shouldPreventInput))}_getActiveErrorId(e,t,a,n,i,o){var r=[];(n||o)&&r.push(i),t&&e&&r.push(a),this._setOrToggleAttribute("aria-describedby",r.join(" "),this.focusElement)}_getActiveLabelId(e,t,a){var n=a;e&&(n=`${t} ${a}`),this.focusElement.setAttribute("aria-labelledby",n)}_getErrorMessageAriaHidden(e,t,a){return(!(t&&e?a:void 0)).toString()}_dispatchIronResizeEventIfNeeded(e,t){var a="__previous"+e;void 0!==this[a]&&this[a]!==t&&this.dispatchEvent(new CustomEvent("iron-resize",{bubbles:!0,composed:!0})),this[a]=t}__observeOffsetHeight(){this.__observeOffsetHeightDebouncer=i.a.debounce(this.__observeOffsetHeightDebouncer,n.a,()=>{this._dispatchIronResizeEventIfNeeded("Height",this.offsetHeight)})}attributeChangedCallback(e,t,a){if(super.attributeChangedCallback(e,t,a),window.ShadyCSS&&window.ShadyCSS.nativeCss||!/^(focused|focus-ring|invalid|disabled|placeholder|has-value)$/.test(e)||this.updateStyles(),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root){this.root.querySelectorAll("*").forEach(e=>{e.style["-webkit-backface-visibility"]="visible",e.style["-webkit-backface-visibility"]=""})}}get __data(){return this.__dataValue||{}}set __data(e){this.__dataValue=e}}},function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(11),i=a(13),o=a(26),r=a(49),s=a(146),l=a(90),h=a(24),c=a(92),d=e=>class extends e{static get properties(){return{opened:{type:Boolean,notify:!0,value:!1,reflectToAttribute:!0,observer:"_openedChanged"},autoOpenDisabled:Boolean,disabled:{type:Boolean,value:!1,reflectToAttribute:!0},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},renderer:Function,items:{type:Array,observer:"_itemsChanged"},allowCustomValue:{type:Boolean,value:!1},filteredItems:{type:Array},value:{type:String,observer:"_valueChanged",notify:!0,value:""},_lastCommittedValue:String,loading:{type:Boolean,value:!1,reflectToAttribute:!0},_focusedIndex:{type:Number,value:-1},filter:{type:String,value:"",notify:!0},selectedItem:{type:Object,notify:!0},itemLabelPath:{type:String,value:"label",observer:"_itemLabelPathChanged"},itemValuePath:{type:String,value:"value"},itemIdPath:String,name:{type:String},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_toggleElement:Object,_clearElement:Object,_inputElementValue:String,_closeOnBlurIsPrevented:Boolean,_previousDocumentPointerEvents:String,_itemTemplate:Object}}static get observers(){return["_filterChanged(filter, itemValuePath, itemLabelPath)","_itemsOrPathsChanged(items.*, itemValuePath, itemLabelPath)","_filteredItemsChanged(filteredItems.*, itemValuePath, itemLabelPath)","_templateOrRendererChanged(_itemTemplate, renderer)","_loadingChanged(loading)","_selectedItemChanged(selectedItem, itemValuePath, itemLabelPath)","_toggleElementChanged(_toggleElement)"]}constructor(){super(),this._boundOnFocusout=this._onFocusout.bind(this),this._boundOverlaySelectedItemChanged=this._overlaySelectedItemChanged.bind(this),this._boundClose=this.close.bind(this),this._boundOnOpened=this._onOpened.bind(this),this._boundOnKeyDown=this._onKeyDown.bind(this),this._boundOnClick=this._onClick.bind(this),this._boundOnOverlayTouchAction=this._onOverlayTouchAction.bind(this),this._boundOnTouchend=this._onTouchend.bind(this)}ready(){super.ready(),this.addEventListener("focusout",this._boundOnFocusout),this._lastCommittedValue=this.value,s.a.requestAvailability(),this.$.overlay.addEventListener("selection-changed",this._boundOverlaySelectedItemChanged),this.addEventListener("vaadin-combo-box-dropdown-closed",this._boundClose),this.addEventListener("vaadin-combo-box-dropdown-opened",this._boundOnOpened),this.addEventListener("keydown",this._boundOnKeyDown),this.addEventListener("click",this._boundOnClick),this.$.overlay.addEventListener("vaadin-overlay-touch-action",this._boundOnOverlayTouchAction),this.addEventListener("touchend",this._boundOnTouchend),this._observer=new h.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)});var e=e=>{var t=this.$.overlay,a=t&&t.$.dropdown;a&&a.$&&this.$.overlay.$.dropdown.$.overlay.bringToFront&&requestAnimationFrame(()=>{a.$.overlay.bringToFront()})};this.addEventListener("mousedown",e),this.addEventListener("touchstart",e)}render(){this.$.overlay._selector&&this.$.overlay._selector.querySelectorAll("vaadin-combo-box-item").forEach(e=>e._render())}_setTemplateFromNodes(e){this._itemTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._itemTemplate}_removeNewRendererOrTemplate(e,t,a,n){e!==t?this._itemTemplate=void 0:a!==n&&(this.renderer=void 0)}_templateOrRendererChanged(e,t){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for combo box items");this._oldTemplate=e,this._oldRenderer=t}open(){this.disabled||this.readonly||(this.opened=!0)}close(){this.opened=!1}_openedChanged(e,t){void 0!==t&&(this.opened?(this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring"),this.hasAttribute("focused")||this.$.overlay.touchDevice||this.focus()):(this._onClosed(),this._openedWithFocusRing&&this.hasAttribute("focused")&&this.focusElement.setAttribute("focus-ring","")))}_onOverlayTouchAction(e){this._closeOnBlurIsPrevented=!0,this.inputElement.blur(),this._closeOnBlurIsPrevented=!1}_onClick(e){this._closeOnBlurIsPrevented=!0;var t=e.composedPath();-1!==t.indexOf(this._clearElement)||"clear-button"===t[0].getAttribute("part")?(this._clear(),this.focus()):-1!==t.indexOf(this.inputElement)&&(t.indexOf(this._toggleElement)>-1&&this.opened?this.close():(t.indexOf(this._toggleElement)>-1||!this.autoOpenDisabled)&&this.open()),this._closeOnBlurIsPrevented=!1}_onKeyDown(e){this._isEventKey(e,"down")?(this._closeOnBlurIsPrevented=!0,this._onArrowDown(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):this._isEventKey(e,"up")?(this._closeOnBlurIsPrevented=!0,this._onArrowUp(),this._closeOnBlurIsPrevented=!1,e.preventDefault()):this._isEventKey(e,"enter")?this._onEnter(e):this._isEventKey(e,"esc")&&this._onEscape(e)}_isEventKey(e,t){return l.a.keyboardEventMatchesKeys(e,t)}_getItemLabel(e){return this.$.overlay.getItemLabel(e)}_getItemValue(e){var t=e&&this.itemValuePath?this.get(this.itemValuePath,e):void 0;return void 0===t&&(t=e?e.toString():""),t}_onArrowDown(){this.opened?this.$.overlay._items&&(this._focusedIndex=Math.min(this.$.overlay._items.length-1,this._focusedIndex+1),this._prefillFocusedItemLabel()):this.open()}_onArrowUp(){this.opened?(this._focusedIndex>-1?this._focusedIndex=Math.max(0,this._focusedIndex-1):this.$.overlay._items&&(this._focusedIndex=this.$.overlay._items.length-1),this._prefillFocusedItemLabel()):this.open()}_prefillFocusedItemLabel(){this._focusedIndex>-1&&(this._inputElementValue="",setTimeout(()=>{this._inputElementValue=this._getItemLabel(this.$.overlay._focusedItem),this._markAllSelectionRange()},1))}_setSelectionRange(e,t){var a=this._nativeInput||this.inputElement;if(this.hasAttribute("focused")&&a&&a.setSelectionRange)try{a.setSelectionRange(e,t)}catch(e){}}_markAllSelectionRange(){void 0!==this._inputElementValue&&this._setSelectionRange(0,this._inputElementValue.length)}_clearSelectionRange(){if(void 0!==this._inputElementValue){var e=this._inputElementValue?this._inputElementValue.length:0;this._setSelectionRange(e,e)}}_closeOrCommit(){this.opened||this.loading?this.close():this._commitValue()}_onEnter(e){(this.opened||this.autoOpenDisabled)&&(this.allowCustomValue||""===this._inputElementValue||this._focusedIndex>-1)&&(this._closeOrCommit(),e.preventDefault(),e.stopPropagation())}_onEscape(e){this.autoOpenDisabled?(this._focusedIndex=-1,this.cancel()):this.opened&&(this._stopPropagation(e),this._focusedIndex>-1?(this._focusedIndex=-1,this._revertInputValue()):this.cancel())}_toggleElementChanged(e){e&&(e.addEventListener("mousedown",e=>e.preventDefault()),e.addEventListener("click",e=>{this.$.overlay.touchDevice&&!this.hasAttribute("focused")&&document.activeElement.blur()}))}_clear(){this.selectedItem=null,this.allowCustomValue&&(this.value=""),this._detectAndDispatchChange()}cancel(){this._revertInputValueToValue(),this._lastCommittedValue=this.value,this._closeOrCommit()}_onOpened(){Object(o.b)(),this.$.overlay.ensureItemsRendered(),this.$.overlay._selector.toggleScrollListener(!0),this.$.overlay.updateViewportBoundaries(),this.$.overlay._selector._increasePoolIfNeeded(),setTimeout(()=>this._resizeDropdown(),1),window.requestAnimationFrame(()=>this.$.overlay.adjustScrollPosition()),this._lastCommittedValue=this.value}_onClosed(){this.opened&&this.close(),this.loading&&!this.allowCustomValue||this._commitValue()}_commitValue(){if(this.$.overlay._items&&this._focusedIndex>-1){var e=this.$.overlay._items[this._focusedIndex];this.selectedItem!==e&&(this.selectedItem=e),this._inputElementValue=this._getItemLabel(this.selectedItem)}else if(""===this._inputElementValue||void 0===this._inputElementValue)this.selectedItem=null,this.allowCustomValue&&(this.value="");else{var t=e=>e&&e.toLowerCase&&e.toLowerCase(),a=this.filteredItems&&this.filteredItems.filter(e=>t(this._getItemLabel(e))===t(this._inputElementValue))||[];if(this.allowCustomValue&&!a.length){var n=new CustomEvent("custom-value-set",{detail:this._inputElementValue,composed:!0,cancelable:!0,bubbles:!0});if(this.dispatchEvent(n),!n.defaultPrevented){var i=this._inputElementValue;this._selectItemForValue(i),this.value=i}}else!this.allowCustomValue&&!this.opened&&a.length>0?this.value=this._getItemValue(a[0]):this._inputElementValue=this.selectedItem?this._getItemLabel(this.selectedItem):this.value||""}this._detectAndDispatchChange(),this._clearSelectionRange(),this.dataProvider||(this.filter="")}get _propertyForValue(){return"value"}_inputValueChanged(e){-1!==e.composedPath().indexOf(this.inputElement)&&(this._inputElementValue=this.inputElement[this._propertyForValue],this._filterFromInput(e))}_filterFromInput(e){this.opened||e.__fromClearButton||this.autoOpenDisabled||this.open(),this.filter===this._inputElementValue?this._filterChanged(this.filter,this.itemValuePath,this.itemLabelPath):this.filter=this._inputElementValue}_itemLabelPathChanged(e,t){"string"!=typeof e&&console.error("You should set itemLabelPath to a valid string")}_filterChanged(e,t,a){void 0!==e&&(this.$.overlay.filterChanged=!0,this.items?this.filteredItems=this._filterItems(this.items,e):this._filteredItemsChanged({path:"filteredItems",value:this.filteredItems},t,a))}_loadingChanged(e){e&&(this._focusedIndex=-1)}_revertInputValue(){""!==this.filter?this._inputElementValue=this.filter:this._revertInputValueToValue(),this._clearSelectionRange()}_revertInputValueToValue(){this.allowCustomValue&&!this.selectedItem?this._inputElementValue=this.value:this._inputElementValue=this._getItemLabel(this.selectedItem)}_resizeDropdown(){this.$.overlay.$.dropdown.notifyResize()}_updateHasValue(e){e?this.setAttribute("has-value",""):this.removeAttribute("has-value")}_selectedItemChanged(e,t){if(null==e)this.filteredItems&&(this.allowCustomValue||(this.value=""),this._updateHasValue(""!==this.value),this._inputElementValue=this.value);else{var a=this._getItemValue(e);if(this.value!==a&&(this.value=a,this.value!==a))return;this._updateHasValue(!0),this._inputElementValue=this._getItemLabel(e),this.inputElement&&(this.inputElement[this._propertyForValue]=this._inputElementValue)}this.$.overlay._selectedItem=e,this.filteredItems&&this.$.overlay._items&&(this._focusedIndex=this.filteredItems.indexOf(e))}_valueChanged(e,t){if(""!==e||void 0!==t){var a;if(this._isValidValue(e))this._getItemValue(this.selectedItem)!==e?this._selectItemForValue(e):a=this.selectedItem,!a&&this.allowCustomValue&&(this._inputElementValue=e),this._updateHasValue(""!==this.value);else this.selectedItem=null;this._lastCommittedValue=void 0}}_detectAndDispatchChange(){this.value!==this._lastCommittedValue&&(this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._lastCommittedValue=this.value)}_itemsChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.items=t})}_itemsOrPathsChanged(e,t,a){if("items"===e.path||"items.splices"===e.path){this.items?this.filteredItems=this.items.slice(0):this.__previousItems&&(this.filteredItems=null);var n=this._indexOfValue(this.value,this.items);this._focusedIndex=n;var i=n>-1&&this.items[n];i&&(this.selectedItem=i)}this.__previousItems=e.value}_filteredItemsChanged(e,t,a){"filteredItems"!==e.path&&"filteredItems.splices"!==e.path||(this._setOverlayItems(this.filteredItems),this._focusedIndex=this.opened||this.autoOpenDisabled?this.$.overlay.indexOfLabel(this.filter):this._indexOfValue(this.value,this.filteredItems),this.opened&&this._repositionOverlay())}_filterItems(e,t){return e?e.filter(e=>(t=t?t.toString().toLowerCase():"",this._getItemLabel(e).toString().toLowerCase().indexOf(t)>-1)):e}_selectItemForValue(e){var t=this._indexOfValue(e,this.filteredItems),a=this.selectedItem;this.selectedItem=t>=0?this.filteredItems[t]:this.dataProvider&&void 0===this.selectedItem?void 0:null,null===this.selectedItem&&null===a&&this._selectedItemChanged(this.selectedItem)}_setOverlayItems(e){this.$.overlay.set("_items",e)}_repositionOverlay(){this.__repositionOverlayDebouncer=i.a.debounce(this.__repositionOverlayDebouncer,n.d.after(500),()=>{var e=this.$.overlay._selector;e._isClientFull()||e._resetScrollPosition(e._physicalTop),this._resizeDropdown(),this.$.overlay.updateViewportBoundaries(),this.$.overlay.ensureItemsRendered(),e.notifyResize(),Object(o.b)()})}_indexOfValue(e,t){if(t&&this._isValidValue(e))for(var a=0;a<t.length;a++)if(this._getItemValue(t[a])===e)return a;return-1}_isValidValue(e){return null!=e}_overlaySelectedItemChanged(e){e.stopPropagation(),e.detail.item instanceof c.a||(this.opened?(this._focusedIndex=this.filteredItems.indexOf(e.detail.item),this.close()):this.selectedItem!==e.detail.item&&(this.selectedItem=e.detail.item,this._detectAndDispatchChange()))}_onFocusout(e){var t=this.$.overlay.$.dropdown;t&&t.$&&e.relatedTarget===t.$.overlay?e.composedPath()[0].focus():this.readonly||this._closeOnBlurIsPrevented||this._closeOrCommit()}_onTouchend(e){this._clearElement&&e.composedPath()[0]===this._clearElement&&(e.preventDefault(),this._clear())}validate(){return!(this.invalid=!this.checkValidity())}checkValidity(){if(this.inputElement.validate)return this.inputElement.validate()}get _instanceProps(){return{item:!0,index:!0,selected:!0,focused:!0}}_ensureTemplatized(){if(!this._TemplateClass){var e=this._itemTemplate||this._getRootTemplate();e&&(this._TemplateClass=Object(r.b)(e,this,{instanceProps:this._instanceProps,forwardHostProp:function(e,t){var a=this.$.overlay._selector.querySelectorAll("vaadin-combo-box-item");Array.prototype.forEach.call(a,a=>{a._itemTemplateInstance&&(a._itemTemplateInstance.set(e,t),a._itemTemplateInstance.notifyPath(e,t,!0))})}}))}}_getRootTemplate(){return Array.prototype.filter.call(this.children,e=>"TEMPLATE"===e.tagName)[0]}_preventInputBlur(){this._toggleElement&&this._toggleElement.addEventListener("click",this._preventDefault),this._clearElement&&this._clearElement.addEventListener("click",this._preventDefault)}_restoreInputBlur(){this._toggleElement&&this._toggleElement.removeEventListener("click",this._preventDefault),this._clearElement&&this._clearElement.removeEventListener("click",this._preventDefault)}_preventDefault(e){e.preventDefault()}_stopPropagation(e){e.stopPropagation()}}},function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a(100),i=a(35),o=Object(i.a)(e=>{var t=Object(n.a)(e);return class extends t{static get observedAttributes(){return super.observedAttributes.concat("disable-upgrade")}attributeChangedCallback(e,t,a,n){"disable-upgrade"==e?!this.__dataEnabled&&null==a&&this.isConnected&&super.connectedCallback():super.attributeChangedCallback(e,t,a,n)}_initializeProperties(){}connectedCallback(){!this.__dataEnabled&&this.hasAttribute("disable-upgrade")||super.connectedCallback()}_enableProperties(){this.hasAttribute("disable-upgrade")||(this.__dataEnabled||super._initializeProperties(),super._enableProperties())}disconnectedCallback(){this.__dataEnabled&&super.disconnectedCallback()}}})},function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(92),i=e=>class extends e{static get properties(){return{pageSize:{type:Number,value:50,observer:"_pageSizeChanged"},size:{type:Number,observer:"_sizeChanged"},dataProvider:{type:Object,observer:"_dataProviderChanged"},_pendingRequests:{value:()=>({})},__placeHolder:{value:new n.a}}}static get observers(){return["_dataProviderFilterChanged(filter, dataProvider)","_dataProviderClearFilter(dataProvider, opened, value)","_warnDataProviderValue(dataProvider, value)","_ensureFirstPage(opened)"]}_dataProviderClearFilter(e,t,a){e&&!this.loading&&this.filter&&(this.size=void 0,this._pendingRequests={},this.filter="",this.clearCache())}ready(){super.ready(),this.clearCache(),this.$.overlay.addEventListener("index-requested",e=>{var t=e.detail.index,a=e.detail.currentScrollerPos,n=Math.floor(1.5*this.pageSize);if(!this._shouldSkipIndex(t,n,a)&&void 0!==t){var i=this._getPageForIndex(t);this._shouldLoadPage(i)&&this._loadPage(i)}})}_dataProviderFilterChanged(){this._shouldFetchData()&&(this.size=void 0,this._pendingRequests={},this.clearCache())}_shouldFetchData(){return!!this.dataProvider&&(this.opened||this.filter&&this.filter.length)}_ensureFirstPage(e){e&&this._shouldLoadPage(0)&&this._loadPage(0)}_shouldSkipIndex(e,t,a){return 0!==a&&e>=a-t&&e<=a+t}_shouldLoadPage(e){if(!this.filteredItems||this._forceNextRequest)return this._forceNextRequest=!1,!0;var t=this.filteredItems[e*this.pageSize];return void 0!==t?t instanceof n.a:void 0===this.size}_loadPage(e){if(!this._pendingRequests[e]&&this.dataProvider){this.loading=!0;var t={page:e,pageSize:this.pageSize,filter:this.filter},a=(n,i)=>{if(this._pendingRequests[e]===a){if(this.filteredItems)this.splice("filteredItems",t.page*t.pageSize,n.length,...n);else{var o=[];o.splice(t.page*t.pageSize,n.length,...n),this.filteredItems=o}this._isValidValue(this.value)&&this._getItemValue(this.selectedItem)!==this.value&&this._selectItemForValue(this.value),this.opened||this.hasAttribute("focused")||this._commitValue(),this.size=i,delete this._pendingRequests[e],0===Object.keys(this._pendingRequests).length&&(this.loading=!1),0===e&&this.__repositionOverlayDebouncer&&n.length>(this.__maxRenderedItems||0)&&(setTimeout(()=>this.__repositionOverlayDebouncer.flush()),this.__maxRenderedItems=n.length)}};this._pendingRequests[e]||(this._pendingRequests[e]=a,this.dataProvider(t,a))}}_getPageForIndex(e){return Math.floor(e/this.pageSize)}clearCache(){if(this.dataProvider){this._pendingRequests={};for(var e=[],t=0;t<(this.size||0);t++)e.push(this.__placeHolder);this.filteredItems=e,this._shouldFetchData()?this._loadPage(0):this._forceNextRequest=!0}}_sizeChanged(e=0){for(var t=(this.filteredItems||[]).slice(0,e),a=0;a<e;a++)t[a]=void 0!==t[a]?t[a]:this.__placeHolder;this.filteredItems=t,this._flushPendingRequests(e)}_pageSizeChanged(e,t){if(Math.floor(e)!==e||e<1)throw this.pageSize=t,new Error("`pageSize` value must be an integer > 0");this.clearCache()}_dataProviderChanged(e,t){this._ensureItemsOrDataProvider(()=>{this.dataProvider=t})}_ensureItemsOrDataProvider(e){if(void 0!==this.items&&void 0!==this.dataProvider)throw e(),new Error("Using `items` and `dataProvider` together is not supported");this.dataProvider&&!this.filteredItems&&(this.filteredItems=[])}_warnDataProviderValue(e,t){if(e&&""!==t&&(void 0===this.selectedItem||null===this.selectedItem)){var a=this._indexOfValue(t,this.filteredItems);(a<0||!this._getItemLabel(this.filteredItems[a]))&&console.warn("Warning: unable to determine the label for the provided `value`. Nothing to display in the text field. This usually happens when setting an initial `value` before any items are returned from the `dataProvider` callback. Consider setting `selectedItem` instead of `value`")}}_flushPendingRequests(e){if(this._pendingRequests)for(var t=Math.ceil(e/this.pageSize),a=Object.keys(this._pendingRequests),n=0;n<a.length;n++){var i=parseInt(a[n]);i>=t&&this._pendingRequests[i]([],e)}}};
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/},,,,,,,,,,,function(e,t,a){"use strict";a(202),a(123)},,function(e,t,a){"use strict";a(249),a(244)},function(e,t,a){"use strict";a(32),a(47),a(185);var n=document.createElement("template");n.innerHTML='<dom-module id="lumo-menu-overlay-core">\n  <template>\n    <style>\n      :host([opening]),\n      :host([closing]) {\n        animation: 0.14s lumo-overlay-dummy-animation;\n      }\n\n      [part="overlay"] {\n        will-change: opacity, transform;\n      }\n\n      :host([opening]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-enter ease-out both;\n      }\n\n      @keyframes lumo-menu-overlay-enter {\n        0% {\n          opacity: 0;\n          transform: translateY(-4px);\n        }\n      }\n\n      :host([closing]) [part="overlay"] {\n        animation: 0.1s lumo-menu-overlay-exit both;\n      }\n\n      @keyframes lumo-menu-overlay-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n    </style>\n  </template>\n</dom-module><dom-module id="lumo-menu-overlay">\n  <template>\n    <style include="lumo-overlay lumo-menu-overlay-core">\n      /* Small viewport (bottom sheet) styles */\n      /* Use direct media queries instead of the state attributes (`[phone]` and `[fullscreen]`) provided by the elements */\n      @media (max-width: 420px), (max-height: 420px) {\n        :host {\n          top: 0 !important;\n          right: 0 !important;\n          bottom: var(--vaadin-overlay-viewport-bottom, 0) !important;\n          left: 0 !important;\n          align-items: stretch !important;\n          justify-content: flex-end !important;\n        }\n\n        [part="overlay"] {\n          max-height: 50vh;\n          width: 100vw;\n          border-radius: 0;\n          box-shadow: var(--lumo-box-shadow-xl);\n        }\n\n        /* The content part scrolls instead of the overlay part, because of the gradient fade-out */\n        [part="content"] {\n          padding: 30px var(--lumo-space-m);\n          max-height: inherit;\n          box-sizing: border-box;\n          -webkit-overflow-scrolling: touch;\n          overflow: auto;\n          -webkit-mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n          mask-image: linear-gradient(transparent, #000 40px, #000 calc(100% - 40px), transparent);\n        }\n\n        [part="backdrop"] {\n          display: block;\n        }\n\n        /* Animations */\n\n        :host([opening]) [part="overlay"] {\n          animation: 0.2s lumo-mobile-menu-overlay-enter cubic-bezier(.215, .61, .355, 1) both;\n        }\n\n        :host([closing]),\n        :host([closing]) [part="backdrop"] {\n          animation-delay: 0.14s;\n        }\n\n        :host([closing]) [part="overlay"] {\n          animation: 0.14s 0.14s lumo-mobile-menu-overlay-exit cubic-bezier(.55, .055, .675, .19) both;\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-enter {\n        0% {\n          transform: translateY(150%);\n        }\n      }\n\n      @keyframes lumo-mobile-menu-overlay-exit {\n        100% {\n          transform: translateY(150%);\n        }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(n.content)},function(e,t,a){"use strict";a(43);var n=a(71);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(n.a)({is:"iron-media-query",properties:{queryMatches:{type:Boolean,value:!1,readOnly:!0,notify:!0},query:{type:String,observer:"queryChanged"},full:{type:Boolean,value:!1},_boundMQHandler:{value:function(){return this.queryHandler.bind(this)}},_mq:{value:null}},attached:function(){this.style.display="none",this.queryChanged()},detached:function(){this._remove()},_add:function(){this._mq&&this._mq.addListener(this._boundMQHandler)},_remove:function(){this._mq&&this._mq.removeListener(this._boundMQHandler),this._mq=null},queryChanged:function(){this._remove();var e=this.query;e&&(this.full||"("===e[0]||(e="("+e+")"),this._mq=window.matchMedia(e),this._add(),this.queryHandler(this._mq))},queryHandler:function(e){this._setQueryMatches(e.matches)}})},,,,function(e,t,a){"use strict";a.d(t,"a",(function(){return ee}));var n=a(43),i=a(17),o=a(53),r=a(11),s=a(26),l=a(81),h=a(155),c=a(80),d=a(13),p=navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/),u=p&&p[1]>=8,f=r.a,v=r.b,m=r.c,g=Object(c.a)({behaviors:[l.a,h.a],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_collection:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedVirtualIndex:-1,_itemsPerRow:1,_rowHeight:0,_templateCost:0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return(this.grid?this._physicalRows*this._rowHeight:this._physicalSize)-this._viewportHeight},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var e=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,e-this._physicalCount)},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this.grid&&(e-=e%this._itemsPerRow),this._virtualStartVal=e},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this.grid&&(e-=e%this._itemsPerRow),this._physicalStartVal=e},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(e){this._physicalCountVal=e},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var e=this._firstVisibleIndexVal;if(null==e){var t=this._physicalTop+this._scrollOffset;e=this._iterateItems((function(e,a){return(t+=this._getPhysicalSizeIncrement(e))>this._scrollPosition?this.grid?a-a%this._itemsPerRow:a:this.grid&&this._virtualCount-1===a?a-a%this._itemsPerRow:void 0}))||0,this._firstVisibleIndexVal=e}return e},get lastVisibleIndex(){var e=this._lastVisibleIndexVal;if(null==e){if(this.grid)e=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var t=this._physicalTop+this._scrollOffset;this._iterateItems((function(a,n){t<this._scrollBottom&&(e=n),t+=this._getPhysicalSizeIncrement(a)}))}this._lastVisibleIndexVal=e}return e},get _scrollOffset(){return this._scrollerPaddingTop},attached:function(){this._debounce("_render",this._render,f),this.listen(this,"iron-resize","_resizeHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler")},updateViewportBoundaries:function(){var e=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),t=e-this._scrollPosition,a=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;var n=Math.round(t/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+n,this._physicalStart=this._physicalStart+n,this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._update()}else if(this._physicalCount>0){var i=this._getReusables(a);a?(this._physicalTop=i.physicalTop,this._virtualStart=this._virtualStart+i.indexes.length,this._physicalStart=this._physicalStart+i.indexes.length):(this._virtualStart=this._virtualStart-i.indexes.length,this._physicalStart=this._physicalStart-i.indexes.length),this._update(i.indexes,a?null:i.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),m)}},_getReusables:function(e){var t,a,n,i=[],o=this._hiddenContentSize*this._ratio,r=this._virtualStart,s=this._virtualEnd,l=this._physicalCount,h=this._physicalTop+this._scrollOffset,c=this._physicalBottom+this._scrollOffset,d=this._scrollTop,p=this._scrollBottom;for(e?(t=this._physicalStart,a=d-h):(t=this._physicalEnd,a=c-p);a-=n=this._getPhysicalSizeIncrement(t),!(i.length>=l||a<=o);)if(e){if(s+i.length+1>=this._virtualCount)break;if(h+n>=d-this._scrollOffset)break;i.push(t),h+=n,t=(t+1)%l}else{if(r-i.length<=0)break;if(h+this._physicalSize-n<=p)break;i.push(t),h-=n,t=0===t?l-1:t-1}return{indexes:i,physicalTop:h-this._scrollOffset}},_update:function(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._manageFocus(),this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){var a=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(a)}this._positionItems(),this._updateScrollerSize()}},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(e){var t=this._clamp(this._physicalCount+e,3,this._virtualCount-this._virtualStart),a=(t=this._convertIndexToCompleteRow(t))-this._physicalCount,n=Math.round(.5*this._physicalCount);if(!(a<0)){if(a>0){var i=window.performance.now();[].push.apply(this._physicalItems,this._createPool(a));for(var o=0;o<a;o++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+a,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+a),this._update(),this._templateCost=(window.performance.now()-i)/a,n=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===n||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,n)),v):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,n),m))}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){var e=this._getReusables(!0);this._physicalTop=e.physicalTop,this._virtualStart=this._virtualStart+e.indexes.length,this._physicalStart=this._physicalStart+e.indexes.length,this._update(e.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_itemsChanged:function(e){"items"===e.path&&(this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._collection=(this.items,null),this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,f))},_iterateItems:function(e,t){var a,n,i,o;if(2===arguments.length&&t){for(o=0;o<t.length;o++)if(a=t[o],n=this._computeVidx(a),null!=(i=e.call(this,a,n)))return i}else{for(a=this._physicalStart,n=this._virtualStart;a<this._physicalCount;a++,n++)if(null!=(i=e.call(this,a,n)))return i;for(a=0;a<this._physicalStart;a++,n++)if(null!=(i=e.call(this,a,n)))return i}},_computeVidx:function(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_updateMetrics:function(e){if(this._isVisible){Object(s.b)();var t=0,a=0,n=this._physicalAverageCount,i=this._physicalAverage;this._iterateItems((function(e,n){a+=this._physicalSizes[e],this._physicalSizes[e]=this._physicalItems[e].offsetHeight,t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0}),e),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(a=1===this._itemsPerRow?a:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+t-a,this._itemsPerRow=1),this._physicalAverageCount!==n&&(this._physicalAverage=Math.round((i*n+t)/this._physicalAverageCount))}},_positionItems:function(){this._adjustScrollPosition();var e=this._physicalTop;this._iterateItems((function(t,a){this.translate3d(0,e+"px",0,this._physicalItems[t]),e+=this._physicalSizes[t]}))},_getPhysicalSizeIncrement:function(e){return this.grid?this._computeVidx(e)%this._itemsPerRow!=this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[e]},_adjustScrollPosition:function(){var e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop=this._physicalTop-e;var t=this._scrollTop;!u&&t>0&&this._resetScrollPosition(t-e)}},_resetScrollPosition:function(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(e){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((e=(e=(e=e||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||this.grid&&this.$.items.style.height<this._estScrollHeight)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToIndex:function(e){if(!("number"!=typeof e||e<0||e>this.items.length-1)&&(Object(s.b)(),0!==this._physicalCount)){e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=this.grid?e-2*this._itemsPerRow:e-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var t=this._physicalStart,a=this._virtualStart,n=0,i=this._hiddenContentSize;a<e&&n<=i;)n+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,a++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+n),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",(function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this.updateViewportBoundaries(),this._isVisible?(this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),f)},_convertIndexToCompleteRow:function(e){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(e/this._itemsPerRow)*this._itemsPerRow:e},_isIndexRendered:function(e){return e>=this._virtualStart&&e<=this._virtualEnd},_getPhysicalIndex:function(e){return(this._physicalStart+(e-this._virtualStart))%this._physicalCount},_clamp:function(e,t,a){return Math.min(a,Math.max(t,e))},_debounce:function(e,t,a){this._debouncers=this._debouncers||{},this._debouncers[e]=d.a.debounce(this._debouncers[e],a,t.bind(this)),Object(d.b)(this._debouncers[e])}});
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class b extends g{static get is(){return"vaadin-grid-scroller"}static get properties(){return{size:{type:Number,notify:!0},_vidxOffset:{value:0}}}static get observers(){return["_effectiveSizeChanged(_effectiveSize)"]}connectedCallback(){super.connectedCallback(),this._scrollHandler()}_updateScrollerItem(e,t){}_afterScroll(){}_getRowTarget(){}_createScrollerRows(){}_canPopulate(){}scrollToIndex(e){this._warnPrivateAPIAccess("scrollToIndex"),this._scrollingToIndex=!0,e=Math.min(Math.max(e,0),this._effectiveSize-1),this.$.table.scrollTop=e/this._effectiveSize*(this.$.table.scrollHeight-this.$.table.offsetHeight),this._scrollHandler(),this._accessIronListAPI(()=>this._maxScrollTop)&&this._virtualCount<this._effectiveSize&&this._adjustVirtualIndexOffset(1e6),this._accessIronListAPI(()=>super.scrollToIndex(e-this._vidxOffset)),this._scrollHandler();var t=Array.from(this.$.items.children).filter(t=>t.index===e)[0];if(t){var a=t.getBoundingClientRect().top-this.$.header.getBoundingClientRect().bottom;Math.abs(a)>1&&(this.$.table.scrollTop+=a,this._scrollHandler())}this._scrollingToIndex=!1}_effectiveSizeChanged(e){var t,a=0;if(this._iterateItems((e,n)=>{if(n===this._firstVisibleIndex){var i=this._physicalItems[e];t=i.index,a=i.getBoundingClientRect().top}}),this.items&&e<this.items.length&&(this._scrollTop=0),!Array.isArray(this.items)){var n=this._edge||this._ie?3e4:1e5;this.items={length:Math.min(e,n)}}this._accessIronListAPI(()=>super._itemsChanged({path:"items"})),this._virtualCount=Math.min(this.items.length,e)||0,0===this._scrollTop&&(this._accessIronListAPI(()=>this._scrollToIndex(Math.min(e-1,t))),this._iterateItems((e,n)=>{var i=this._physicalItems[e];if(i.index===t&&(this.$.table.scrollTop+=Math.round(i.getBoundingClientRect().top-a)),i.index===this._focusedItemIndex&&this._itemsFocusable&&this.$.items.contains(this.shadowRoot.activeElement)){var o=Array.from(this._itemsFocusable.parentElement.children).indexOf(this._itemsFocusable);i.children[o].focus()}})),this._assignModels(),requestAnimationFrame(()=>this._update()),this.__updateFooterPositioning(),this._ie&&(this.$.table.style.display="block",setTimeout(()=>{this.$.table.style.display="flex",this._translateStationaryElements()}))}_positionItems(){var e;this._adjustScrollPosition(),isNaN(this._physicalTop)&&(e=!0,this._physicalTop=0);var t=this._physicalTop;this._iterateItems((e,a)=>{this._physicalItems[e].style.transform=`translateY(${t}px)`,t+=this._physicalSizes[e]}),e&&this._scrollToIndex(0)}_increasePoolIfNeeded(e){0===e&&this._scrollingToIndex||!this._canPopulate()||!this._effectiveSize||(this._initialPoolCreated?this._optPhysicalSize!==1/0&&(this._debounceIncreasePool=d.a.debounce(this._debounceIncreasePool,r.a,()=>{this._updateMetrics();var e=this._optPhysicalSize-this._physicalSize,t=Math.ceil(e/this._physicalAverage);this._physicalCount+t>this._effectiveSize&&(t=Math.max(0,this._effectiveSize-this._physicalCount)),this._physicalSize&&t>0&&this._optPhysicalSize!==1/0&&(super._increasePoolIfNeeded(t),this.__reorderChildNodes()),this.__flushPendingRecalculateColumnWidths()})):(this._initialPoolCreated=!0,super._increasePoolIfNeeded(25)))}__reorderChildNodes(){var e=Array.from(this.$.items.childNodes);!!e.reduce((e,t,a,n)=>{if(0===a||n[a-1].index===t.index-1)return e},!0)||e.sort((e,t)=>e.index-t.index).forEach(e=>this.$.items.appendChild(e))}_createPool(e){var t=document.createDocumentFragment(),a=this._createScrollerRows(e);a.forEach(e=>t.appendChild(e)),this._getRowTarget().appendChild(t);var n=this.querySelector("[slot]");if(n){var i=n.getAttribute("slot");n.setAttribute("slot","foo-bar"),n.setAttribute("slot",i)}return Object(o.a)(this,()=>this.notifyResize()),a}_assignModels(e){this._iterateItems((e,t)=>{var a=this._physicalItems[e];this._toggleAttribute("hidden",t>=this._effectiveSize,a),this._updateScrollerItem(a,t+(this._vidxOffset||0))},e)}_scrollHandler(){var e=this.$.table.scrollTop-this._scrollPosition;this._accessIronListAPI(super._scrollHandler);var t=this._vidxOffset;this._accessIronListAPI(()=>this._maxScrollTop)&&this._virtualCount<this._effectiveSize?this._adjustVirtualIndexOffset(e):this._vidxOffset=0,this._vidxOffset!==t&&this._update(),this._afterScroll()}_adjustVirtualIndexOffset(e){if(Math.abs(e)>1e4){if(this._noScale)return void(this._noScale=!1);var t=this.$.table.scrollTop/(this.$.table.scrollHeight-this.$.table.offsetHeight),a=t*this._effectiveSize;this._vidxOffset=Math.round(a-t*this._virtualCount)}else{var n=this._vidxOffset||0;0===this._scrollTop?(this._vidxOffset=0,n!==this._vidxOffset&&super.scrollToIndex(0)):this.firstVisibleIndex<1e3&&this._vidxOffset>0&&(this._vidxOffset-=Math.min(this._vidxOffset,100),n!==this._vidxOffset&&super.scrollToIndex(this.firstVisibleIndex+(n-this._vidxOffset)),this._noScale=!0);var i=this._effectiveSize-this._virtualCount;this._scrollTop>=this._maxScrollTop&&this._maxScrollTop>0?(this._vidxOffset=i,n!==this._vidxOffset&&super.scrollToIndex(this._virtualCount)):this.firstVisibleIndex>this._virtualCount-1e3&&this._vidxOffset<i&&(this._vidxOffset+=Math.min(i-this._vidxOffset,100),n!==this._vidxOffset&&super.scrollToIndex(this.firstVisibleIndex-(this._vidxOffset-n)),this._noScale=!0)}}_accessIronListAPI(e){this._warnPrivateAPIAccessAsyncEnabled=!1;var t=e.apply(this);return this._debouncerWarnPrivateAPIAccess=d.a.debounce(this._debouncerWarnPrivateAPIAccess,r.a,()=>this._warnPrivateAPIAccessAsyncEnabled=!0),t}_debounceRender(e,t){super._debounceRender(()=>this._accessIronListAPI(e),t)}_warnPrivateAPIAccess(e){this._warnPrivateAPIAccessAsyncEnabled&&console.warn(`Accessing private API (${e})!`)}_render(){this._accessIronListAPI(super._render)}_createFocusBackfillItem(){}_multiSelectionChanged(){}clearSelection(){}_itemsChanged(){}_manageFocus(){}_removeFocusedItem(){}get _firstVisibleIndex(){return this._accessIronListAPI(()=>super.firstVisibleIndex)}get _lastVisibleIndex(){return this._accessIronListAPI(()=>super.lastVisibleIndex)}_scrollToIndex(e){this._accessIronListAPI(()=>this.scrollToIndex(e))}get firstVisibleIndex(){return this._warnPrivateAPIAccess("firstVisibleIndex"),super.firstVisibleIndex}set firstVisibleIndex(e){this._warnPrivateAPIAccess("firstVisibleIndex"),super.firstVisibleIndex=e}get lastVisibleIndex(){return this._warnPrivateAPIAccess("lastVisibleIndex"),super.lastVisibleIndex}set lastVisibleIndex(e){this._warnPrivateAPIAccess("lastVisibleIndex"),super.lastVisibleIndex=e}updateViewportBoundaries(){this._warnPrivateAPIAccess("updateViewportBoundaries"),super.updateViewportBoundaries.apply(this,arguments)}_resizeHandler(){super._resizeHandler(),Object(s.b)()}__isCreatingRows(){var e=this._debouncers&&this._debouncers._increasePoolIfNeeded&&this._debouncers._increasePoolIfNeeded.isActive(),t=this._debounceIncreasePool&&this._debounceIncreasePool.isActive();return e||t}}customElements.define(b.is,b);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var _=e=>class extends e{static get observers(){return["_a11yUpdateGridSize(size, _columnTree, _columnTree.*)"]}_a11yGetHeaderRowCount(e){return e.filter(e=>e.some(e=>e._headerTemplate||e.headerRenderer||e.path||e.header)).length}_a11yGetFooterRowCount(e){return e.filter(e=>e.some(e=>e._headerTemplate||e.headerRenderer)).length}_a11yUpdateGridSize(e,t){if(void 0!==e&&void 0!==t){var a=t[t.length-1];this.$.table.setAttribute("aria-rowcount",e+this._a11yGetHeaderRowCount(t)+this._a11yGetFooterRowCount(t)),this.$.table.setAttribute("aria-colcount",a&&a.length||0),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows()}}_a11yUpdateHeaderRows(){Array.from(this.$.header.children).forEach((e,t)=>e.setAttribute("aria-rowindex",t+1))}_a11yUpdateFooterRows(){Array.from(this.$.footer.children).forEach((e,t)=>e.setAttribute("aria-rowindex",this._a11yGetHeaderRowCount(this._columnTree)+this.size+t+1))}_a11yUpdateRowRowindex(e,t){e.setAttribute("aria-rowindex",t+this._a11yGetHeaderRowCount(this._columnTree)+1)}_a11yUpdateRowSelected(e,t){e.setAttribute("aria-selected",Boolean(t)),Array.from(e.children).forEach(e=>e.setAttribute("aria-selected",Boolean(t)))}_a11yUpdateRowLevel(e,t){e.setAttribute("aria-level",t+1)}_a11yUpdateRowDetailsOpened(e,t){Array.from(e.children).forEach(e=>{"boolean"==typeof t?e.setAttribute("aria-expanded",t):e.hasAttribute("aria-expanded")&&e.removeAttribute("aria-expanded")})}_a11ySetRowDetailsCell(e,t){Array.from(e.children).forEach(e=>{e!==t&&e.setAttribute("aria-controls",t.id)})}_a11yUpdateCellColspan(e,t){e.setAttribute("aria-colspan",Number(t))}_a11yUpdateSorters(){Array.from(this.querySelectorAll("vaadin-grid-sorter")).forEach(e=>{for(var t=e.parentNode;t&&"vaadin-grid-cell-content"!==t.localName;)t=t.parentNode;t&&t.assignedSlot&&t.assignedSlot.parentNode.setAttribute("aria-sort",{asc:"ascending",desc:"descending"}[String(e.direction)]||"none")})}},y=a(212),w=e=>class extends e{static get properties(){return{items:Array}}static get observers(){return["_itemsChanged(items, items.*, isAttached)"]}_itemsChanged(e,t,a){if(a){if(!Array.isArray(e))return null==e&&(this.size=0),void(this.dataProvider===this._arrayDataProvider&&(this.dataProvider=void 0));this.size=e.length,this.dataProvider=this.dataProvider||this._arrayDataProvider,this.clearCache(),this._ensureFirstPageLoaded()}}_arrayDataProvider(e,t){var a=(Array.isArray(this.items)?this.items:[]).slice(0);this._filters&&this._checkPaths(this._filters,"filtering",a)&&(a=this._filter(a)),this.size=a.length,e.sortOrders.length&&this._checkPaths(this._sorters,"sorting",a)&&(a=a.sort(this._multiSort.bind(this)));var n=e.page*e.pageSize,i=n+e.pageSize;t(a.slice(n,i),a.length)}_checkPaths(e,t,a){if(!a.length)return!1;var i=!0;for(var o in e){var r=e[o].path;if(r&&-1!==r.indexOf(".")){var s=r.replace(/\.[^\.]*$/,"");void 0===n.a.get(s,a[0])&&(console.warn(`Path "${r}" used for ${t} does not exist in all of the items, ${t} is disabled.`),i=!1)}}return i}_multiSort(e,t){return this._sorters.map(a=>"asc"===a.direction?this._compare(n.a.get(a.path,e),n.a.get(a.path,t)):"desc"===a.direction?this._compare(n.a.get(a.path,t),n.a.get(a.path,e)):0).reduce((e,t)=>e||t,0)}_normalizeEmptyValue(e){return[void 0,null].indexOf(e)>=0?"":isNaN(e)?e.toString():e}_compare(e,t){return(e=this._normalizeEmptyValue(e))<(t=this._normalizeEmptyValue(t))?-1:e>t?1:0}_filter(e){return e.filter((e,t)=>0===this._filters.filter(t=>{var a=this._normalizeEmptyValue(n.a.get(t.path,e)),i=this._normalizeEmptyValue(t.value).toString().toLowerCase();return-1===a.toString().toLowerCase().indexOf(i)}).length)}},z=a(45),M=a(30),x=e=>class extends(Object(z.a)(e)){ready(){super.ready();var e=this.$.scroller;Object(M.addListener)(e,"track",this._onHeaderTrack.bind(this)),e.addEventListener("touchmove",t=>e.hasAttribute("column-resizing")&&t.preventDefault()),e.addEventListener("contextmenu",e=>"resize-handle"==e.target.getAttribute("part")&&e.preventDefault()),e.addEventListener("mousedown",e=>"resize-handle"===e.target.getAttribute("part")&&e.preventDefault())}_onHeaderTrack(e){var t=e.target;if("resize-handle"===t.getAttribute("part")){var a=t.parentElement._column;for(this._toggleAttribute("column-resizing",!0,this.$.scroller);"vaadin-grid-column-group"===a.localName;)a=Array.prototype.slice.call(a._childColumns,0).sort((function(e,t){return e._order-t._order})).filter((function(e){return!e.hidden})).pop();var n=Array.from(this.$.header.querySelectorAll('[part~="row"]:last-child [part~="cell"]')),i=n.filter(e=>e._column===a)[0];if(i.offsetWidth){var o=window.getComputedStyle(i),r=10+parseInt(o.paddingLeft)+parseInt(o.paddingRight)+parseInt(o.borderLeftWidth)+parseInt(o.borderRightWidth)+parseInt(o.marginLeft)+parseInt(o.marginRight),s=i.offsetWidth+(this.__isRTL?i.getBoundingClientRect().left-e.detail.x:e.detail.x-i.getBoundingClientRect().right);a.width=Math.max(r,s)+"px",a.flexGrow=0}n.sort((function(e,t){return e._column._order-t._column._order})).forEach((function(e,t,a){t<a.indexOf(i)&&(e._column.width=e.offsetWidth+"px",e._column.flexGrow=0)})),"end"===e.detail.state&&(this._toggleAttribute("column-resizing",!1,this.$.scroller),this.dispatchEvent(new CustomEvent("column-resize",{detail:{resizedColumn:a}}))),this._resizeHandler()}}},A=a(156),C=a(24),S=a(9),k=e=>class extends e{ready(){super.ready(),this._addNodeObserver()}_hasColumnGroups(e){for(var t=0;t<e.length;t++)if("vaadin-grid-column-group"===e[t].localName)return!0;return!1}_getChildColumns(e){return C.a.getFlattenedNodes(e).filter(this._isColumnElement)}_flattenColumnGroups(e){return e.map(e=>"vaadin-grid-column-group"===e.localName?this._getChildColumns(e):[e]).reduce((e,t)=>e.concat(t),[])}_getColumnTree(){for(var e=[],t=C.a.getFlattenedNodes(this).filter(this._isColumnElement);e.push(t),this._hasColumnGroups(t);)t=this._flattenColumnGroups(t);return e}_updateColumnTree(){var e=this._getColumnTree();this._arrayEquals(e,this._columnTree)||(this._columnTree=e)}_addNodeObserver(){this._observer=new C.a(this,e=>{var t=e.addedNodes.filter(e=>"template"===e.localName&&e.classList.contains("row-details"))[0];t&&this._rowDetailsTemplate!==t&&(this._rowDetailsTemplate=t);var a=e=>e.filter(this._isColumnElement).length>0;if(a(e.addedNodes)||a(e.removedNodes)){var n=e.removedNodes.reduce((e,t)=>e.concat(t._allCells),[]),i=e=>n.filter(t=>t._content.contains(e)).length;this.__removeSorters(this._sorters.filter(i)),this.__removeFilters(this._filters.filter(i)),this._updateColumnTree()}this._debouncerCheckImports=d.a.debounce(this._debouncerCheckImports,r.d.after(2e3),this._checkImports.bind(this)),this._ensureFirstPageLoaded()})}_arrayEquals(e,t){if(!e||!t||e.length!=t.length)return!1;for(var a=0,n=e.length;a<n;a++)if(e[a]instanceof Array&&t[a]instanceof Array){if(!this._arrayEquals(e[a],t[a]))return!1}else if(e[a]!=t[a])return!1;return!0}_checkImports(){["vaadin-grid-column-group","vaadin-grid-filter","vaadin-grid-filter-column","vaadin-grid-tree-toggle","vaadin-grid-selection-column","vaadin-grid-sort-column","vaadin-grid-sorter"].forEach(e=>{var t=this.querySelector(e);!t||t instanceof S.a||console.warn(`Make sure you have imported the required module for <${e}> element.`)})}_updateFirstAndLastColumn(){Array.from(this.shadowRoot.querySelectorAll("tr")).forEach(e=>this._updateFirstAndLastColumnForRow(e))}_updateFirstAndLastColumnForRow(e){Array.from(e.querySelectorAll('[part~="cell"]:not([part~="details-cell"])')).sort((e,t)=>e._column._order-t._column._order).forEach((e,t,a)=>{this._toggleAttribute("first-column",0===t,e),this._toggleAttribute("last-column",t===a.length-1,e)})}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(e.localName)}}
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,E=e=>class extends e{getEventContext(e){var t={},a=e.composedPath(),n=a[a.indexOf(this.$.table)-3];return n?(t.section=["body","header","footer","details"].filter(e=>n.getAttribute("part").indexOf(e)>-1)[0],n._column&&(t.column=n._column),"body"!==t.section&&"details"!==t.section||Object.assign(t,this.__getRowModel(n.parentElement)),t):t}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,I=e=>class extends e{static get properties(){return{_filters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("filter-changed",this._filterChanged.bind(this))}_filterChanged(e){e.stopPropagation(),this.__addFilter(e.target),this.__applyFilters()}__removeFilters(e){0!=e.length&&(this._filters=this._filters.filter(t=>e.indexOf(t)<0),this.__applyFilters())}__addFilter(e){-1===this._filters.indexOf(e)&&this._filters.push(e)}__applyFilters(){this.dataProvider&&this.isAttached&&this.clearCache()}_mapFilters(){return this._filters.map(e=>({path:e.path,value:e.value}))}},O=a(157),T=e=>class extends e{static get properties(){return{detailsOpenedItems:{type:Array,value:function(){return[]}},_rowDetailsTemplate:Object,rowDetailsRenderer:Function,_detailsCells:{type:Array}}}static get observers(){return["_detailsOpenedItemsChanged(detailsOpenedItems.*, _rowDetailsTemplate, rowDetailsRenderer)","_rowDetailsTemplateOrRendererChanged(_rowDetailsTemplate, rowDetailsRenderer)"]}_rowDetailsTemplateOrRendererChanged(e,t){if(e&&t)throw new Error("You should only use either a renderer or a template for row details");if(e||t){if(e&&!e.templatizer){var a=new O.a;a._grid=this,a.dataHost=this.dataHost,a.template=e,e.templatizer=a}this._columnTree&&Array.from(this.$.items.children).forEach(e=>{e.querySelector("[part~=details-cell]")||(this._updateRow(e,this._columnTree[this._columnTree.length-1]),this._a11yUpdateRowDetailsOpened(e,!1)),delete e.querySelector("[part~=details-cell]")._instance}),this.detailsOpenedItems.length&&(Array.from(this.$.items.children).forEach(this._toggleDetailsCell,this),this._update())}}_detailsOpenedItemsChanged(e,t,a){"detailsOpenedItems.length"!==e.path&&e.value&&Array.from(this.$.items.children).forEach(e=>{this._toggleDetailsCell(e,e._item),this._a11yUpdateRowDetailsOpened(e,this._isDetailsOpened(e._item)),this._toggleAttribute("details-opened",this._isDetailsOpened(e._item),e)})}_configureDetailsCell(e){e.setAttribute("part","cell details-cell"),this._toggleAttribute("frozen",!0,e)}_toggleDetailsCell(e,t){var a=e.querySelector('[part~="details-cell"]');if(a){var n=!this._isDetailsOpened(t),i=!!a.hidden!==n;(a._instance||a._renderer)&&a.hidden===n||(a.hidden=n,n?e.style.removeProperty("padding-bottom"):(this.rowDetailsRenderer?(a._renderer=this.rowDetailsRenderer,a._renderer.call(this,a._content,this,{index:e.index,item:t})):this._rowDetailsTemplate&&!a._instance&&(a._instance=this._rowDetailsTemplate.templatizer.createInstance(),a._content.innerHTML="",a._content.appendChild(a._instance.root),this._updateItem(e,t)),Object(s.b)(),e.style.setProperty("padding-bottom",a.offsetHeight+"px"),requestAnimationFrame(()=>this.notifyResize()))),i&&(this._updateMetrics(),this._positionItems())}}_updateDetailsCellHeights(){Array.from(this.$.items.querySelectorAll('[part~="details-cell"]:not([hidden])')).forEach(e=>{e.parentElement.style.setProperty("padding-bottom",e.offsetHeight+"px")})}_isDetailsOpened(e){return this.detailsOpenedItems&&-1!==this._getItemIndexInArray(e,this.detailsOpenedItems)}openItemDetails(e){this._isDetailsOpened(e)||this.push("detailsOpenedItems",e)}closeItemDetails(e){this._isDetailsOpened(e)&&this.splice("detailsOpenedItems",this._getItemIndexInArray(e,this.detailsOpenedItems),1)}_detailsOpenedInstanceChangedCallback(e,t){super._detailsOpenedInstanceChangedCallback&&super._detailsOpenedInstanceChangedCallback(e,t),t?this.openItemDetails(e.item):this.closeItemDetails(e.item)}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,L=e=>class extends e{get _timeouts(){return{SCROLLING:500,IGNORE_WHEEL:500}}static get properties(){return{_frozenCells:{type:Array,value:()=>[]},_rowWithFocusedElement:Element,_deltaYAcc:{type:Number,value:0},_useSticky:{type:Boolean,value:window.CSS&&window.CSS.supports&&(window.CSS.supports("position","sticky")||window.CSS.supports("position","-webkit-sticky"))}}}static get observers(){return["_scrollViewportHeightUpdated(_viewportHeight)"]}set _scrollTop(e){this.$.table.scrollTop=e}get _scrollTop(){return this.$.table.scrollTop}constructor(){super(),this._scrollLineHeight=this._getScrollLineHeight()}_getScrollLineHeight(){var e=document.createElement("div");e.style.fontSize="initial",e.style.display="none",document.body.appendChild(e);var t=window.getComputedStyle(e).fontSize;return document.body.removeChild(e),t?window.parseInt(t):void 0}_scrollViewportHeightUpdated(e){this._scrollPageHeight=e-this.$.header.clientHeight-this.$.footer.clientHeight-this._scrollLineHeight}ready(){super.ready(),this.$.outerscroller=document.createElement("div"),this.scrollTarget=this.$.table,this.addEventListener("wheel",this._onWheel),this.$.items.addEventListener("focusin",e=>{var t=e.composedPath().indexOf(this.$.items);this._rowWithFocusedElement=e.composedPath()[t-1]}),this.$.items.addEventListener("focusout",()=>this._rowWithFocusedElement=void 0),this.scrollTarget.addEventListener("mousedown",()=>this.__mouseDown=!0),this.scrollTarget.addEventListener("mouseup",()=>{this.__mouseDown=!1,this.__pendingReorder&&(this.__pendingReorder=!1,setTimeout(()=>this._reorderRows(),this._timeouts.SCROLLING))})}scrollToIndex(e){this._accessIronListAPI(()=>super.scrollToIndex(e))}_onWheel(e){if(!e.ctrlKey&&!this._hasScrolledAncestor(e.target,e.deltaX,e.deltaY)){var t=this.$.table,a=e.deltaY;if(e.deltaMode===WheelEvent.DOM_DELTA_LINE?a*=this._scrollLineHeight:e.deltaMode===WheelEvent.DOM_DELTA_PAGE&&(a*=this._scrollPageHeight),this._wheelAnimationFrame)return this._deltaYAcc+=a,void e.preventDefault();a+=this._deltaYAcc,this._deltaYAcc=0,this._wheelAnimationFrame=!0,this._debouncerWheelAnimationFrame=d.a.debounce(this._debouncerWheelAnimationFrame,r.a,()=>this._wheelAnimationFrame=!1);var n=Math.abs(e.deltaX)+Math.abs(a);this._canScroll(t,e.deltaX,a)?(e.preventDefault(),t.scrollTop+=a,t.scrollLeft+=e.deltaX,this._scrollHandler(),this._hasResidualMomentum=!0,this._ignoreNewWheel=!0,this._debouncerIgnoreNewWheel=d.a.debounce(this._debouncerIgnoreNewWheel,r.d.after(this._timeouts.IGNORE_WHEEL),()=>this._ignoreNewWheel=!1)):this._hasResidualMomentum&&n<=this._previousMomentum||this._ignoreNewWheel?e.preventDefault():n>this._previousMomentum&&(this._hasResidualMomentum=!1),this._previousMomentum=n}}_hasScrolledAncestor(e,t,a){return"vaadin-grid-cell-content"!==e.localName&&(!(!this._canScroll(e,t,a)||-1===["auto","scroll"].indexOf(getComputedStyle(e).overflow))||(e!==this&&e.parentElement?this._hasScrolledAncestor(e.parentElement,t,a):void 0))}_canScroll(e,t,a){return a>0&&e.scrollTop<e.scrollHeight-e.offsetHeight||a<0&&e.scrollTop>0||t>0&&e.scrollLeft<e.scrollWidth-e.offsetWidth||t<0&&e.scrollLeft>0}_scheduleScrolling(){this._scrollingFrame||(this._scrollingFrame=requestAnimationFrame(()=>this._toggleAttribute("scrolling",!0,this.$.scroller))),this._debounceScrolling=d.a.debounce(this._debounceScrolling,r.d.after(this._timeouts.SCROLLING),()=>{cancelAnimationFrame(this._scrollingFrame),delete this._scrollingFrame,this._toggleAttribute("scrolling",!1,this.$.scroller),this._reorderRows()})}_afterScroll(){this._translateStationaryElements(),this.hasAttribute("reordering")||this._scheduleScrolling(),this._updateOverflow()}_updateOverflow(){var e="",t=this.$.table;t.scrollTop<t.scrollHeight-t.clientHeight&&(e+=" bottom"),t.scrollTop>0&&(e+=" top"),t.scrollLeft<t.scrollWidth-t.clientWidth&&(e+=" right"),t.scrollLeft>0&&(e+=" left"),this._debounceOverflow=d.a.debounce(this._debounceOverflow,r.a,()=>{var t=e.trim();t.length>0&&this.getAttribute("overflow")!==t?this.setAttribute("overflow",t):0==t.length&&this.hasAttribute("overflow")&&this.removeAttribute("overflow")})}_reorderRows(){if(this.__mouseDown)this.__pendingReorder=!0;else{var e=this.$.items,t=e.querySelectorAll("tr");if(t.length){var a=this._virtualStart+this._vidxOffset,n=this._rowWithFocusedElement||Array.from(t).filter(e=>!e.hidden)[0];if(n){var i=n.index-a,o=Array.from(t).indexOf(n)-i;if(o>0)for(var r=0;r<o;r++)e.appendChild(t[r]);else if(o<0)for(var s=t.length+o;s<t.length;s++)e.insertBefore(t[s],t[0]);if(this._safari){var{transform:l}=this.$.header.style;this.$.header.style.transform="",setTimeout(()=>this.$.header.style.transform=l)}}}}}_frozenCellsChanged(){this._debouncerCacheElements=d.a.debounce(this._debouncerCacheElements,r.c,()=>{Array.from(this.shadowRoot.querySelectorAll('[part~="cell"]')).forEach((function(e){e.style.transform=""})),this._frozenCells=Array.prototype.slice.call(this.$.table.querySelectorAll("[frozen]")),this._updateScrollerMeasurements(),this._translateStationaryElements()}),this._updateLastFrozen()}_updateScrollerMeasurements(){this._frozenCells.length>0&&this.__isRTL&&(this.__scrollerMetrics={scrollWidth:this.$.table.scrollWidth,clientWidth:this.$.table.clientWidth})}_updateLastFrozen(){if(this._columnTree){var e=this._columnTree[this._columnTree.length-1].slice(0);e.sort((e,t)=>e._order-t._order);var t=e.reduce((e,t,a)=>(t._lastFrozen=!1,t.frozen&&!t.hidden?a:e),void 0);void 0!==t&&(e[t]._lastFrozen=!0)}}_translateStationaryElements(){var e=Math.max(0,this._scrollLeft),t=Math.max(0,this._scrollTop),a=0,n=0,i=0;if(this._useSticky||(a=e,n=t,i=this.$.table.clientHeight-this.$.footer.offsetHeight-this.$.footer.offsetTop),this.$.header.style.transform=this._getTranslate(-e+a,n),this.$.footer.style.transform=this._getTranslate(-e+a,n+i),this.$.items.style.transform=this._getTranslate(-e+a,0),this._frozenCells.length>0)for(var o=this.__isRTL?this.__getNormalizedScrollLeft(this.$.table)+this.__scrollerMetrics.clientWidth-this.__scrollerMetrics.scrollWidth:this._scrollLeft,r=this._getTranslate(o,0),s=0;s<this._frozenCells.length;s++)this._frozenCells[s].style.transform=r}_getTranslate(e,t){return`translate(${e}px, ${t}px)`}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,P=e=>class extends e{static get properties(){return{selectedItems:{type:Object,notify:!0,value:()=>[]}}}static get observers(){return["_selectedItemsChanged(selectedItems.*)"]}_isSelected(e){return this.selectedItems&&this._getItemIndexInArray(e,this.selectedItems)>-1}selectItem(e){this._isSelected(e)||this.push("selectedItems",e)}deselectItem(e){var t=this._getItemIndexInArray(e,this.selectedItems);t>-1&&this.splice("selectedItems",t,1)}_toggleItem(e){-1===this._getItemIndexInArray(e,this.selectedItems)?this.selectItem(e):this.deselectItem(e)}_selectedItemsChanged(e){!this.$.items.children.length||"selectedItems"!==e.path&&"selectedItems.splices"!==e.path||Array.from(this.$.items.children).forEach(e=>{this._updateItem(e,e._item)})}_selectedInstanceChangedCallback(e,t){super._selectedInstanceChangedCallback&&super._selectedInstanceChangedCallback(e,t),t?this.selectItem(e.item):this.deselectItem(e.item)}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,D=e=>class extends e{static get properties(){return{multiSort:{type:Boolean,value:!1},_sorters:{type:Array,value:function(){return[]}},_previousSorters:{type:Array,value:function(){return[]}}}}ready(){super.ready(),this.addEventListener("sorter-changed",this._onSorterChanged),window.ShadyDOM&&r.c.run(()=>{var e=this.querySelectorAll("vaadin-grid-sorter");Array.from(e).forEach(e=>{e instanceof S.a&&e.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))})})}_onSorterChanged(e){var t=e.target;e.stopPropagation(),this.__updateSorter(t),this.__applySorters()}__removeSorters(e){0!=e.length&&(this._sorters=this._sorters.filter(t=>e.indexOf(t)<0),this.multiSort&&this.__updateSortOrders(),this.__applySorters())}__updateSortOrders(){this._sorters.forEach((e,t)=>e._order=this._sorters.length>1?t:null,this)}__updateSorter(e){if(e.direction||-1!==this._sorters.indexOf(e))if(e._order=null,this.multiSort)this._removeArrayItem(this._sorters,e),e.direction&&this._sorters.unshift(e),this.__updateSortOrders(),this._sorters.forEach((e,t)=>e._order=this._sorters.length>1?t:null,this);else if(e.direction){var t=this._sorters.filter(t=>t!=e);this._sorters=[e],t.forEach(e=>{e._order=null,e.direction=null})}}__applySorters(){this.dataProvider&&this.isAttached&&JSON.stringify(this._previousSorters)!==JSON.stringify(this._mapSorters())&&this.clearCache(),this._a11yUpdateSorters(),this._previousSorters=this._mapSorters()}_mapSorters(){return this._sorters.map(e=>({path:e.path,direction:e.direction}))}_removeArrayItem(e,t){var a=e.indexOf(t);a>-1&&e.splice(a,1)}}
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,F=e=>class extends e{static get properties(){return{cellClassNameGenerator:Function}}static get observers(){return["__cellClassNameGeneratorChanged(cellClassNameGenerator)"]}__cellClassNameGeneratorChanged(e){this.generateCellClassNames()}generateCellClassNames(){Array.from(this.$.items.children).filter(e=>!e.hidden).forEach(e=>this._generateCellClassNames(e,this.__getRowModel(e)))}_generateCellClassNames(e,t){Array.from(e.children).forEach(e=>{if(e.__generatedClasses&&e.__generatedClasses.forEach(t=>e.classList.remove(t)),this.cellClassNameGenerator){var a=this.cellClassNameGenerator(e._column,t);e.__generatedClasses=a&&a.split(" ").filter(e=>e.length>0),e.__generatedClasses&&e.__generatedClasses.forEach(t=>e.classList.add(t))}})}}
/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,B="between",R="on-top-or-between",N="on-grid",V="on-top",$="above",j="below",H="empty",q=e=>class extends e{static get properties(){return{dropMode:String,rowsDraggable:Boolean,dragFilter:Function,dropFilter:Function,__dndAutoScrollThreshold:{value:50}}}static get observers(){return["_dragDropAccessChanged(rowsDraggable, dropMode, dragFilter, dropFilter)"]}ready(){super.ready(),this.$.table.addEventListener("dragstart",this._onDragStart.bind(this)),this.$.table.addEventListener("dragend",this._onDragEnd.bind(this)),this.$.table.addEventListener("dragover",this._onDragOver.bind(this)),this.$.table.addEventListener("dragleave",this._onDragLeave.bind(this)),this.$.table.addEventListener("drop",this._onDrop.bind(this)),this.$.table.addEventListener("dragenter",e=>{this.dropMode&&(e.preventDefault(),e.stopPropagation())})}_onDragStart(e){if(this.rowsDraggable){var t=e.target;if("vaadin-grid-cell-content"===t.localName&&(t=t.assignedSlot.parentNode.parentNode),t.parentNode!==this.$.items)return;if(e.stopPropagation(),this._toggleAttribute("dragging-rows",!0,this),this._safari){var a=t.style.transform;t.style.top=/translateY\((.*)\)/.exec(a)[1],t.style.transform="none",requestAnimationFrame(()=>{t.style.top="",t.style.transform=a})}var n=t.getBoundingClientRect();window.ShadyDOM||(this._ios?e.dataTransfer.setDragImage(t):e.dataTransfer.setDragImage(t,e.clientX-n.left,e.clientY-n.top));var i=[t];this._isSelected(t._item)&&(i=this.__getViewportRows().filter(e=>this._isSelected(e._item)).filter(e=>!this.dragFilter||this.dragFilter(this.__getRowModel(e)))),e.dataTransfer.setData("text",this.__formatDefaultTransferData(i)),t.setAttribute("dragstart",i.length>1?i.length:""),this.updateStyles({"--_grid-drag-start-x":e.clientX-n.left+20+"px","--_grid-drag-start-y":e.clientY-n.top+10+"px"}),requestAnimationFrame(()=>{t.removeAttribute("dragstart"),this.updateStyles({"--_grid-drag-start-x":"","--_grid-drag-start-y":""})});var o=new CustomEvent("grid-dragstart",{detail:{draggedItems:i.map(e=>e._item),setDragData:(t,a)=>e.dataTransfer.setData(t,a),setDraggedItemsCount:e=>t.setAttribute("dragstart",e)}});o.originalEvent=e,this.dispatchEvent(o)}}_onDragEnd(e){this._toggleAttribute("dragging-rows",!1,this),e.stopPropagation();var t=new CustomEvent("grid-dragend");t.originalEvent=e,this.dispatchEvent(t)}_onDragLeave(e){e.stopPropagation(),this._clearDragStyles()}_onDragOver(e){if(this.dropMode){if(this._dropLocation=void 0,this._dragOverItem=void 0,this.__dndAutoScroll(e.clientY))return void this._clearDragStyles();var t=e.composedPath().filter(e=>"tr"===e.localName)[0];if(this._effectiveSize&&this.dropMode!==N)if(t&&t.parentNode===this.$.items){var a=t.getBoundingClientRect();if(this._dropLocation=V,this.dropMode===B){var n=e.clientY-a.top<a.bottom-e.clientY;this._dropLocation=n?$:j}else this.dropMode===R&&(e.clientY-a.top<a.height/3?this._dropLocation=$:e.clientY-a.top>a.height/3*2&&(this._dropLocation=j))}else{if(t)return;if(this.dropMode!==B&&this.dropMode!==R)return;t=Array.from(this.$.items.children).filter(e=>!e.hidden).pop(),this._dropLocation=j}else this._dropLocation=H;if(t&&t.hasAttribute("drop-disabled"))return void(this._dropLocation=void 0);e.stopPropagation(),e.preventDefault(),this._dropLocation===H?this._toggleAttribute("dragover",!0,this):t?(this._dragOverItem=t._item,t.getAttribute("dragover")!==this._dropLocation&&t.setAttribute("dragover",this._dropLocation)):this._clearDragStyles()}}__dndAutoScroll(e){if(this.__dndAutoScrolling)return!0;var t=this.$.header.getBoundingClientRect().bottom,a=this.$.footer.getBoundingClientRect().top,n=t-e+this.__dndAutoScrollThreshold,i=e-a+this.__dndAutoScrollThreshold,o=0;if(i>0?o=2*i:n>0&&(o=2*-n),o){var r=this.$.table.scrollTop;if(this.$.table.scrollTop+=o,r!==this.$.table.scrollTop)return this.__dndAutoScrolling=!0,setTimeout(()=>this.__dndAutoScrolling=!1,20),this._scrollHandler(),!0}}__getViewportRows(){var e=this.$.header.getBoundingClientRect().bottom,t=this.$.footer.getBoundingClientRect().top;return Array.from(this.$.items.children).filter(a=>{var n=a.getBoundingClientRect();return n.bottom>e&&n.top<t})}_clearDragStyles(){this.removeAttribute("dragover"),Array.from(this.$.items.children).forEach(e=>e.removeAttribute("dragover"))}_onDrop(e){if(this.dropMode){e.stopPropagation(),e.preventDefault();var t=e.dataTransfer.types&&Array.from(e.dataTransfer.types).map(t=>({type:t,data:e.dataTransfer.getData(t)}));this._clearDragStyles();var a=new CustomEvent("grid-drop",{bubbles:e.bubbles,cancelable:e.cancelable,detail:{dropTargetItem:this._dragOverItem,dropLocation:this._dropLocation,dragData:t}});a.originalEvent=e,this.dispatchEvent(a)}}__formatDefaultTransferData(e){return e.map(e=>Array.from(e.children).filter(e=>!e.hidden&&-1===e.getAttribute("part").indexOf("details-cell")).sort((e,t)=>e._column._order>t._column._order?1:-1).map(e=>e._content.textContent.trim()).filter(e=>e).join("\t")).join("\n")}_dragDropAccessChanged(e,t,a,n){this.filterDragAndDrop()}filterDragAndDrop(){Array.from(this.$.items.children).filter(e=>!e.hidden).forEach(e=>{this._filterDragAndDrop(e,this.__getRowModel(e))})}_filterDragAndDrop(e,t){var a=!this.rowsDraggable||this.dragFilter&&!this.dragFilter(t),n=!this.dropMode||this.dropFilter&&!this.dropFilter(t);(window.ShadyDOM?[e]:Array.from(e.children).map(e=>e._content)).forEach(e=>{a?e.removeAttribute("draggable"):e.setAttribute("draggable",!0)}),this._toggleAttribute("drag-disabled",a,e),this._toggleAttribute("drop-disabled",n,e)}}
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/,W=e=>class extends e{static get properties(){return{_headerFocusable:{type:Object,observer:"_focusableChanged"},_itemsFocusable:{type:Object,observer:"_focusableChanged"},_footerFocusable:{type:Object,observer:"_focusableChanged"},_navigatingIsHidden:Boolean,_focusedItemIndex:{type:Number,value:0},_focusedColumnOrder:Number,interacting:{type:Boolean,value:!1,reflectToAttribute:!0,readOnly:!0,observer:"_interactingChanged"}}}ready(){super.ready(),this._ios||this._android||(this.addEventListener("keydown",this._onKeyDown),this.addEventListener("keyup",this._onKeyUp),this.addEventListener("focusin",this._onFocusIn),this.addEventListener("focusout",this._onFocusOut),this.$.table.addEventListener("focusin",this._onCellFocusIn.bind(this)),this.$.table.addEventListener("focusout",this._onCellFocusOut.bind(this)),this.addEventListener("mousedown",()=>{this._toggleAttribute("navigating",!1,this),this._isMousedown=!0}),this.addEventListener("mouseup",()=>this._isMousedown=!1))}_focusableChanged(e,t){t&&t.setAttribute("tabindex","-1"),e&&this._updateGridSectionFocusTarget(e)}_interactingChanged(){this._updateGridSectionFocusTarget(this._headerFocusable),this._updateGridSectionFocusTarget(this._itemsFocusable),this._updateGridSectionFocusTarget(this._footerFocusable)}_onKeyDown(e){var t,a=e.key;switch("Up"!==a&&"Down"!==a&&"Left"!==a&&"Right"!==a||(a="Arrow"+a),"Esc"===a&&(a="Escape"),"Spacebar"===a&&(a=" "),a){case"ArrowUp":case"ArrowDown":case"ArrowLeft":case"ArrowRight":case"PageUp":case"PageDown":case"Home":case"End":t="Navigation";break;case"Enter":case"Escape":case"F2":t="Interaction";break;case"Tab":t="Tab";break;case" ":t="Space"}this._detectInteracting(e),this.interacting&&"Interaction"!==t&&(t=void 0),t&&this[`_on${t}KeyDown`](e,a)}_ensureScrolledToIndex(e){Array.from(this.$.items.children).filter(t=>t.index===e)[0]||this._scrollToIndex(e)}_onNavigationKeyDown(e,t){function a(e){return Array.prototype.indexOf.call(e.parentNode.children,e)}this._scrollHandler(),e.preventDefault();var n=this._lastVisibleIndex-this._firstVisibleIndex-1,i=0,o=0;switch(t){case"ArrowRight":i=this.__isRTL?-1:1;break;case"ArrowLeft":i=this.__isRTL?1:-1;break;case"Home":i=-1/0,e.ctrlKey&&(o=-1/0);break;case"End":i=1/0,e.ctrlKey&&(o=1/0);break;case"ArrowDown":o=1;break;case"ArrowUp":o=-1;break;case"PageDown":o=n;break;case"PageUp":o=-n}var r=e.composedPath()[0],s=a(r),l=this._elementMatches(r,'[part~="details-cell"]'),h=r.parentNode,c=h.parentNode,d=(c===this.$.items?this._effectiveSize:c.children.length)-1,p=c===this.$.items?void 0!==this._focusedItemIndex?this._focusedItemIndex:h.index:a(h),u=Math.max(0,Math.min(p+o,d)),f=!1;if(c===this.$.items){var v=h._item,m=this._cache.getItemForIndex(u);(f=l?0===o:1===o&&this._isDetailsOpened(v)||-1===o&&u!==p&&this._isDetailsOpened(m))!==l&&(1===o&&f||-1===o&&!f)&&(u=p)}if(c!==this.$.items)if(u>p)for(;u<d&&c.children[u].hidden;)u++;else if(u<p)for(;u>0&&c.children[u].hidden;)u--;void 0===this._focusedColumnOrder&&(this._focusedColumnOrder=l?0:this._getColumns(c,p).filter(e=>!e.hidden)[s]._order);var g=this._getColumns(c,u).filter(e=>!e.hidden),b=g.map(e=>e._order).sort((e,t)=>e-t),_=b.length-1,y=b.indexOf(b.slice(0).sort((e,t)=>Math.abs(e-this._focusedColumnOrder)-Math.abs(t-this._focusedColumnOrder))[0]),w=0===o&&l?y:Math.max(0,Math.min(y+i,_));w!==y&&(this._focusedColumnOrder=void 0),c===this.$.items&&this._ensureScrolledToIndex(u),this._toggleAttribute("navigating",!0,this);var z=g.reduce((e,t,a)=>(e[t._order]=a,e),{})[b[w]],M=c===this.$.items?Array.from(c.children).filter(e=>e.index===u)[0]:c.children[u];if(M){var x=f?Array.from(M.children).filter(e=>this._elementMatches(e,'[part~="details-cell"]'))[0]:M.children[z];if(this._scrollHorizontallyToCell(x),c===this.$.items&&(this._focusedItemIndex=u),c===this.$.items){var A=x.getBoundingClientRect(),C=this.$.footer.getBoundingClientRect().top,S=this.$.header.getBoundingClientRect().bottom;A.bottom>C?(this.$.table.scrollTop+=A.bottom-C,this._scrollHandler()):A.top<S&&(this.$.table.scrollTop-=S-A.top,this._scrollHandler())}x.focus()}}_onInteractionKeyDown(e,t){var a,n=e.composedPath()[0],i="input"===n.localName&&!/^(button|checkbox|color|file|image|radio|range|reset|submit)$/i.test(n.type);switch(t){case"Enter":a=!this.interacting||!i;break;case"Escape":a=!1;break;case"F2":a=!this.interacting}var{cell:o}=this._getGridEventLocation(e);if(this.interacting!==a&&null!==o)if(a){var r=o._content.querySelector("[focus-target]")||o._content.firstElementChild;r&&(e.preventDefault(),r.focus(),this._setInteracting(!0),this._toggleAttribute("navigating",!1,this))}else e.preventDefault(),this._focusedColumnOrder=void 0,o.focus(),this._setInteracting(!1),this._toggleAttribute("navigating",!0,this)}_predictFocusStepTarget(e,t){var a=[this.$.table,this._headerFocusable,this._itemsFocusable,this._footerFocusable,this.$.focusexit],n=a.indexOf(e);for(n+=t;n>=0&&n<=a.length-1&&(!a[n]||a[n].parentNode.hidden);)n+=t;return a[n]}_onTabKeyDown(e){var t=this._predictFocusStepTarget(e.composedPath()[0],e.shiftKey?-1:1);if(t===this.$.table)this.$.table.focus();else if(t===this.$.focusexit)this.$.focusexit.focus();else if(t===this._itemsFocusable){var a=t,n=this._itemsFocusable.parentNode;if(this._ensureScrolledToIndex(this._focusedItemIndex),n.index!==this._focusedItemIndex){var i=Array.from(n.children).indexOf(this._itemsFocusable),o=Array.from(this.$.items.children).filter(e=>e.index===this._focusedItemIndex)[0];o&&(a=o.children[i])}e.preventDefault(),a.focus()}else e.preventDefault(),t.focus();this._toggleAttribute("navigating",!0,this)}_onSpaceKeyDown(e){e.preventDefault();var t=e.composedPath()[0];t._content&&t._content.firstElementChild||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(t.parentElement)}}))}_onKeyUp(e){if(/^( |SpaceBar)$/.test(e.key)){e.preventDefault();var t=e.composedPath()[0];if(t._content&&t._content.firstElementChild){var a=this.hasAttribute("navigating");t._content.firstElementChild.click(),this._toggleAttribute("navigating",a,this)}}}_onFocusIn(e){this._isMousedown||this._toggleAttribute("navigating",!0,this);var t=e.composedPath()[0];t===this.$.table||t===this.$.focusexit?(this._predictFocusStepTarget(t,t===this.$.table?1:-1).focus(),this._setInteracting(!1)):this._detectInteracting(e)}_onFocusOut(e){this._toggleAttribute("navigating",!1,this),this._detectInteracting(e)}_onCellFocusIn(e){var{section:t,cell:a}=this._getGridEventLocation(e);this._detectInteracting(e),t&&a&&(this._activeRowGroup=t,this.$.header===t?this._headerFocusable=a:this.$.items===t?this._itemsFocusable=a:this.$.footer===t&&(this._footerFocusable=a),a._content.dispatchEvent(new CustomEvent("cell-focusin",{bubbles:!1}))),this._detectFocusedItemIndex(e)}_onCellFocusOut(e){3===e.composedPath().indexOf(this.$.table)&&e.composedPath()[0]._content.dispatchEvent(new CustomEvent("cell-focusout",{bubbles:!1}))}_detectInteracting(e){var t=e.composedPath().some(e=>"vaadin-grid-cell-content"===e.localName);this._setInteracting(t)}_detectFocusedItemIndex(e){var{section:t,row:a}=this._getGridEventLocation(e);t===this.$.items&&(this._focusedItemIndex=a.index)}_updateGridSectionFocusTarget(e){if(e){var t=this._getGridSectionFromFocusTarget(e),a=this.interacting&&t===this._activeRowGroup;e.tabIndex=a?-1:0}}_preventScrollerRotatingCellFocus(e,t){e.index===this._focusedItemIndex&&this.hasAttribute("navigating")&&this._activeRowGroup===this.$.items&&(this._navigatingIsHidden=!0,this._toggleAttribute("navigating",!1,this)),t===this._focusedItemIndex&&this._navigatingIsHidden&&(this._navigatingIsHidden=!1,this._toggleAttribute("navigating",!0,this))}_getColumns(e,t){var a=this._columnTree.length-1;return e===this.$.header?a=t:e===this.$.footer&&(a=this._columnTree.length-1-t),this._columnTree[a]}_resetKeyboardNavigation(){if(this.$.header.firstElementChild&&(this._headerFocusable=Array.from(this.$.header.firstElementChild.children).filter(e=>!e.hidden)[0]),this.$.items.firstElementChild){var e=this._iterateItems((e,t)=>{if(this._firstVisibleIndex===t)return this.$.items.children[e]});e&&(this._itemsFocusable=Array.from(e.children).filter(e=>!e.hidden)[0])}this.$.footer.firstElementChild&&(this._footerFocusable=Array.from(this.$.footer.firstElementChild.children).filter(e=>!e.hidden)[0])}_scrollHorizontallyToCell(e){if(!e.hasAttribute("frozen")&&!this._elementMatches(e,'[part~="details-cell"]')){for(var t=e.getBoundingClientRect(),a=e.parentNode,n=Array.from(a.children).indexOf(e),i=this.$.table.getBoundingClientRect(),o=i.left,r=i.right,s=n-1;s>=0;s--){var l=a.children[s];if(!l.hasAttribute("hidden")&&!this._elementMatches(l,'[part~="details-cell"]')&&l.hasAttribute("frozen")){o=l.getBoundingClientRect().right;break}}for(var h=n+1;h<a.children.length;h++){var c=a.children[h];if(!c.hasAttribute("hidden")&&!this._elementMatches(c,'[part~="details-cell"]')&&c.hasAttribute("frozen")){r=c.getBoundingClientRect().left;break}}t.left<o&&(this.$.table.scrollLeft+=Math.round(t.left-o)),t.right>r&&(this.$.table.scrollLeft+=Math.round(t.right-r))}}_elementMatches(e,t){return e.matches?e.matches(t):-1!==Array.from(e.parentNode.querySelectorAll(t)).indexOf(e)}_getGridEventLocation(e){var t=e.composedPath(),a=t.indexOf(this.$.table);return{section:a>=1?t[a-1]:null,row:a>=2?t[a-2]:null,cell:a>=3?t[a-3]:null}}_getGridSectionFromFocusTarget(e){return e===this._headerFocusable?this.$.header:e===this._itemsFocusable?this.$.items:e===this._footerFocusable?this.$.footer:null}},Y=a(158),G=a(39),U=a(28),K=e=>class extends(Object(z.a)(e)){static get properties(){return{columnReorderingAllowed:{type:Boolean,value:!1},_orderBaseScope:{type:Number,value:1e7}}}static get observers(){return["_updateOrders(_columnTree, _columnTree.*)"]}ready(){super.ready(),Object(M.addListener)(this,"track",this._onTrackEvent),this._reorderGhost=this.shadowRoot.querySelector('[part="reorder-ghost"]'),this.addEventListener("touchstart",this._onTouchStart.bind(this)),this.addEventListener("touchmove",this._onTouchMove.bind(this)),this.addEventListener("touchend",this._onTouchEnd.bind(this)),this.addEventListener("contextmenu",this._onContextMenu.bind(this))}_onContextMenu(e){this.hasAttribute("reordering")&&e.preventDefault()}_onTouchStart(e){this._startTouchReorderTimeout=setTimeout(()=>{this._onTrackStart({detail:{x:e.touches[0].clientX,y:e.touches[0].clientY}})},100)}_onTouchMove(e){this._draggedColumn&&e.preventDefault(),clearTimeout(this._startTouchReorderTimeout)}_onTouchEnd(){clearTimeout(this._startTouchReorderTimeout),this._onTrackEnd()}_onTrackEvent(e){if("start"===e.detail.state){var t=e.composedPath(),a=t[t.indexOf(this.$.header)-2];if(!a||!a._content)return;var n=this.getRootNode().activeElement;if(a._content.contains(this.getRootNode().activeElement)&&(!this._ie||!this._isFocusable(n)))return;if(this.$.scroller.hasAttribute("column-resizing"))return;this._touchDevice||this._onTrackStart(e)}else"track"===e.detail.state?this._onTrack(e):"end"===e.detail.state&&this._onTrackEnd(e)}_onTrackStart(e){if(this.columnReorderingAllowed){var t=e.path||Object(G.a)(e).path;if(!t||!t.filter(e=>e.hasAttribute&&e.hasAttribute("draggable"))[0]){var a=this._cellFromPoint(e.detail.x,e.detail.y);if(a&&-1!==a.getAttribute("part").indexOf("header-cell")){for(this._toggleAttribute("reordering",!0,this),this._draggedColumn=a._column;1===this._draggedColumn.parentElement.childElementCount;)this._draggedColumn=this._draggedColumn.parentElement;this._setSiblingsReorderStatus(this._draggedColumn,"allowed"),this._draggedColumn._reorderStatus="dragging",this._updateGhost(a),this._reorderGhost.style.visibility="visible",this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._autoScroller()}}}}_onTrack(e){if(this._draggedColumn){var t=this._cellFromPoint(e.detail.x,e.detail.y);if(t){var a=this._getTargetColumn(t,this._draggedColumn);this._isSwapAllowed(this._draggedColumn,a)&&this._isSwappableByPosition(a,e.detail.x)&&this._swapColumnOrders(this._draggedColumn,a),this._updateGhostPosition(e.detail.x,this._touchDevice?e.detail.y-50:e.detail.y),this._lastDragClientX=e.detail.x}}}_onTrackEnd(){this._draggedColumn&&(this._toggleAttribute("reordering",!1,this),this._draggedColumn._reorderStatus="",this._setSiblingsReorderStatus(this._draggedColumn,""),this._draggedColumn=null,this._lastDragClientX=null,this._reorderGhost.style.visibility="hidden",this.dispatchEvent(new CustomEvent("column-reorder",{detail:{columns:this._getColumnsInOrder()}})))}_getColumnsInOrder(){return this._columnTree.slice(0).pop().filter(e=>!e.hidden).sort((e,t)=>e._order-t._order)}_cellFromPoint(e,t){var a;if(e=e||0,t=t||0,this._draggedColumn||this._toggleAttribute("no-content-pointer-events",!0,this.$.scroller),U.h?a=this.shadowRoot.elementFromPoint(e,t):"vaadin-grid-cell-content"===(a=document.elementFromPoint(e,t)).localName&&(a=a.assignedSlot.parentNode),this._toggleAttribute("no-content-pointer-events",!1,this.$.scroller),a&&a._column)return a}_updateGhostPosition(e,t){var a=this._reorderGhost.getBoundingClientRect(),n=e-a.width/2,i=t-a.height/2,o=parseInt(this._reorderGhost._left||0),r=parseInt(this._reorderGhost._top||0);this._reorderGhost._left=o-(a.left-n),this._reorderGhost._top=r-(a.top-i),this._reorderGhost.style.transform=`translate(${this._reorderGhost._left}px, ${this._reorderGhost._top}px)`}_getInnerText(e){return e.localName?"none"===getComputedStyle(e).display?"":Array.from(e.childNodes).map(e=>this._getInnerText(e)).join(""):e.textContent}_updateGhost(e){var t=this._reorderGhost;t.textContent=this._getInnerText(e._content);var a=window.getComputedStyle(e);return["boxSizing","display","width","height","background","alignItems","padding","border","flex-direction","overflow"].forEach(e=>t.style[e]=a[e]),t}_updateOrders(e,t){void 0!==e&&void 0!==t&&(e[0].forEach((e,t)=>e._order=0),Y.a._updateColumnOrders(e[0],this._orderBaseScope,0))}_setSiblingsReorderStatus(e,t){Array.from(e.parentNode.children).filter(t=>/column/.test(t.localName)&&this._isSwapAllowed(t,e)).forEach(e=>e._reorderStatus=t)}_autoScroller(){if(this._lastDragClientX){var e=this._lastDragClientX-this.getBoundingClientRect().right+50,t=this.getBoundingClientRect().left-this._lastDragClientX+50;e>0?this.$.table.scrollLeft+=e/10:t>0&&(this.$.table.scrollLeft-=t/10),this._scrollHandler()}this._draggedColumn&&this.async(this._autoScroller,10)}_isSwapAllowed(e,t){if(e&&t){var a=e!==t,n=e.parentElement===t.parentElement,i=e.frozen===t.frozen;return a&&n&&i}}_isSwappableByPosition(e,t){var a=Array.from(this.$.header.querySelectorAll('tr:not([hidden]) [part~="cell"]')).filter(t=>e.contains(t._column))[0],n=this.$.header.querySelector("tr:not([hidden]) [reorder-status=dragging]").getBoundingClientRect(),i=a.getBoundingClientRect();return i.left>n.left?t>i.right-n.width:t<i.left+n.width}_swapColumnOrders(e,t){var a=e._order;e._order=t._order,t._order=a,this._updateLastFrozen(),this._updateFirstAndLastColumn()}_getTargetColumn(e,t){if(e&&t){for(var a=e._column;a.parentElement!==t.parentElement&&a!==this;)a=a.parentElement;return a.parentElement===t.parentElement?a:e._column}}},X=(a(108),a(55),a(6)),Q=document.createElement("dom-module");Q.appendChild(X.a`
  <style>
    @keyframes vaadin-grid-appear {
      to {
        opacity: 1;
      }
    }

    :host {
      display: block;
      animation: 1ms vaadin-grid-appear;
      height: 400px;
      flex: 1 1 auto;
      align-self: stretch;
      position: relative;
    }

    :host([hidden]) {
      display: none !important;
    }

    #scroller {
      display: block;
      transform: translateY(0);
      width: auto;
      height: auto;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
    }

    :host([height-by-rows]),
    :host([all-rows-visible]) {
      height: auto;
      align-self: flex-start;
      flex-grow: 0;
      width: 100%;
    }

    :host([height-by-rows]) #scroller,
    :host([all-rows-visible]) #scroller {
      width: 100%;
      height: 100%;
      position: relative;
    }

    #table {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 100%;
      overflow: auto;
      position: relative;
      outline: none;
      /* Workaround for a Desktop Safari bug: new stacking context here prevents the scrollbar from getting hidden */
      z-index: 0;
    }

    #header,
    #footer {
      display: block;
      position: -webkit-sticky;
      position: sticky;
      left: 0;
      overflow: visible;
      width: 100%;
      z-index: 1;
    }

    #header {
      top: 0;
    }

    th {
      text-align: inherit;
    }

    /* Safari doesn't work with "inherit" */
    [safari] th {
      text-align: initial;
    }

    #footer {
      bottom: 0;
    }

    #items {
      flex-grow: 1;
      flex-shrink: 0;
      display: block;
      position: -webkit-sticky;
      position: sticky;
      width: 100%;
      left: 0;
      overflow: visible;
    }

    [part~="row"] {
      display: flex;
      width: 100%;
      box-sizing: border-box;
      margin: 0;
    }

    [part~="row"][loading] [part~="body-cell"] ::slotted(vaadin-grid-cell-content) {
      opacity: 0;
    }

    #items [part~="row"] {
      position: absolute;
    }

    #items [part~="row"]:empty {
      height: 1em;
    }

    [part~="cell"]:not([part~="details-cell"]) {
      flex-shrink: 0;
      flex-grow: 1;
      box-sizing: border-box;
      display: flex;
      width: 100%;
      position: relative;
      align-items: center;
      padding: 0;
      white-space: nowrap;
    }

    [part~="details-cell"] {
      position: absolute;
      bottom: 0;
      width: 100%;
      box-sizing: border-box;
      padding: 0;
    }

    [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: block;
      width: 100%;
      box-sizing: border-box;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    [hidden] {
      display: none !important;
    }

    [frozen] {
      z-index: 2;
      will-change: transform;
    }

    [no-scrollbars][safari] #table,
    [no-scrollbars][firefox] #table {
      overflow: hidden;
    }

    /* Reordering styles */
    :host([reordering]) [part~="cell"] ::slotted(vaadin-grid-cell-content),
    :host([reordering]) [part~="resize-handle"],
    #scroller[no-content-pointer-events] [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      pointer-events: none;
    }

    [part~="reorder-ghost"] {
      visibility: hidden;
      position: fixed;
      pointer-events: none;
      opacity: 0.5;

      /* Prevent overflowing the grid in Firefox */
      top: 0;
      left: 0;
    }

    :host([reordering]) {
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    #scroller[ie][column-reordering-allowed] [part~="header-cell"] {
      -ms-user-select: none;
    }

    /* Resizing styles */
    [part~="resize-handle"] {
      position: absolute;
      top: 0;
      right: 0;
      height: 100%;
      cursor: col-resize;
      z-index: 1;
    }

    [part~="resize-handle"]::before {
      position: absolute;
      content: "";
      height: 100%;
      width: 35px;
      transform: translateX(-50%);
    }

    [last-column] [part~="resize-handle"]::before,
    [last-frozen] [part~="resize-handle"]::before {
      width: 18px;
      transform: none;
      right: 0;
    }

    #scroller[column-resizing] {
      -ms-user-select: none;
      -moz-user-select: none;
      -webkit-user-select: none;
      user-select: none;
    }

    /* Sizer styles */
    #sizer {
      display: flex;
      position: absolute;
      visibility: hidden;
    }

    #sizer [part~="details-cell"] {
      display: none !important;
    }

    #sizer [part~="cell"][hidden] {
      display: none !important;
    }

    #sizer [part~="cell"] {
      display: block;
      flex-shrink: 0;
      line-height: 0;
      height: 0 !important;
      min-height: 0 !important;
      max-height: 0 !important;
      padding: 0 !important;
      border: none !important;
    }

    #sizer [part~="cell"]::before {
      content: "-";
    }

    #sizer [part~="cell"] ::slotted(vaadin-grid-cell-content) {
      display: none !important;
    }

    /* RTL specific styles */

    :host([dir="rtl"]) #items,
    :host([dir="rtl"]) #header,
    :host([dir="rtl"]) #footer {
      left: auto;
    }

    :host([dir="rtl"]) [part~="reorder-ghost"] {
      left: auto;
      right: 0;
    }

    :host([dir="rtl"]) [part~="resize-handle"] {
      left: 0;
      right: auto;
    }

    :host([dir="rtl"]) [part~="resize-handle"]::before {
      transform: translateX(50%);
    }

    :host([dir="rtl"]) [last-column] [part~="resize-handle"]::before,
    :host([dir="rtl"]) [last-frozen] [part~="resize-handle"]::before {
      left: 0;
      right: auto;
    }
  </style>
`),Q.register("vaadin-grid-styles");var J=a(22),Z=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})();
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class ee extends(Object(J.a)(Object(i.a)(Object(A.a)(w(k(Object(y.a)(L(P(D(T(W(_(I(K(x(E(q(F(b))))))))))))))))))){static get template(){return X.a`
    <style include="vaadin-grid-styles"></style>

    <div id="scroller" safari\$="[[_safari]]" ios\$="[[_ios]]" ie\$="[[_ie]]" loading\$="[[loading]]" column-reordering-allowed\$="[[columnReorderingAllowed]]">

      <table id="table" role="grid" aria-multiselectable="true" tabindex="0">
        <caption id="sizer" part="row"></caption>
        <thead id="header" role="rowgroup"></thead>
        <tbody id="items" role="rowgroup"></tbody>
        <tfoot id="footer" role="rowgroup"></tfoot>
      </table>

      <div part="reorder-ghost"></div>
    </div>

    <!-- The template needs at least one slot or else shady doesn't distribute -->
    <slot name="nodistribute"></slot>

    <div id="focusexit" tabindex="0"></div>
`}static get is(){return"vaadin-grid"}static get version(){return"5.8.4"}static get observers(){return["_columnTreeChanged(_columnTree, _columnTree.*)"]}static get properties(){return{_safari:{type:Boolean,value:/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},_ios:{type:Boolean,value:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1},_edge:{type:Boolean,value:"undefined"!=typeof CSS&&CSS.supports("(-ms-ime-align:auto)")},_ie:{type:Boolean,value:!(!navigator.userAgent.match(/Trident/)||navigator.userAgent.match(/MSIE/))},_firefox:{type:Boolean,value:navigator.userAgent.toLowerCase().indexOf("firefox")>-1},_android:{type:Boolean,value:/android/i.test(navigator.userAgent)},_touchDevice:{type:Boolean,value:Z},heightByRows:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_allRowsVisibleChanged"},allRowsVisible:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_allRowsVisibleChanged"},_recalculateColumnWidthOnceLoadingFinished:{type:Boolean,value:!0}}}constructor(){super(),this.addEventListener("animationend",this._onAnimationEnd)}connectedCallback(){super.connectedCallback(),this.recalculateColumnWidths()}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),"dir"===e&&(this.__isRTL="rtl"===a,this._updateScrollerMeasurements())}__hasRowsWithClientHeight(){return!!Array.from(this.$.items.children).filter(e=>e.clientHeight).length}__flushPendingRecalculateColumnWidths(){this._recalculateColumnWidthOnceLoadingFinished&&!this._cache.isLoading()&&this.__hasRowsWithClientHeight()&&!this.__isCreatingRows()&&(this._recalculateColumnWidthOnceLoadingFinished=!1,this.recalculateColumnWidths())}_recalculateColumnWidths(e){e.forEach(e=>{e.width="auto",e._origFlexGrow=e.flexGrow,e.flexGrow=0}),e.forEach(e=>{e._currentWidth=0,e._allCells.forEach(t=>{var a=t.offsetWidth+1;e._currentWidth=Math.max(e._currentWidth,a)})}),e.forEach(e=>{e.width=e._currentWidth+"px",e.flexGrow=e._origFlexGrow,e._currentWidth=void 0,e._origFlexGrow=void 0})}recalculateColumnWidths(){if(this._columnTree)if(this._cache.isLoading()||this.__isCreatingRows())this._recalculateColumnWidthOnceLoadingFinished=!0;else{var e=this._getColumns().filter(e=>!e.hidden&&e.autoWidth);this._recalculateColumnWidths(e)}}_createScrollerRows(e){for(var t=[],a=0;a<e;a++){var n=document.createElement("tr");n.setAttribute("part","row"),n.setAttribute("role","row"),this._columnTree&&this._updateRow(n,this._columnTree[this._columnTree.length-1],"body",!1,!0),t.push(n)}return this._columnTree&&this._columnTree[this._columnTree.length-1].forEach(e=>e.isConnected&&e.notifyPath&&e.notifyPath("_cells.*",e._cells)),Object(o.b)(this,()=>{this._updateFirstAndLastColumn(),this._resetKeyboardNavigation()}),t}_getRowTarget(){return this.$.items}_createCell(e){var t="vaadin-grid-cell-content-"+(this._contentIndex=this._contentIndex+1||0),a=document.createElement("vaadin-grid-cell-content");a.setAttribute("slot",t);var n=document.createElement(e);n.id=t.replace("-content-","-"),n.setAttribute("tabindex","-1"),n.setAttribute("role","td"===e?"gridcell":"columnheader");var i=document.createElement("slot");return i.setAttribute("name",t),n.appendChild(i),n._content=a,a.addEventListener("mousedown",()=>{if(window.chrome){var e=()=>{a.contains(this.getRootNode().activeElement)||n.focus(),document.removeEventListener("mouseup",e,!0)};document.addEventListener("mouseup",e,!0)}else setTimeout(()=>{a.contains(this.getRootNode().activeElement)||n.focus()})}),n}_updateRow(e,t,a,n,i){a=a||"body";var o=document.createDocumentFragment();Array.from(e.children).forEach(e=>e._vacant=!0),e.innerHTML="","sizer"!==e.id&&(e.hidden=!0),t.filter(e=>!e.hidden).forEach((t,r,s)=>{var l;if("body"===a){if(t._cells=t._cells||[],(l=t._cells.filter(e=>e._vacant)[0])||(l=this._createCell("td"),t._cells.push(l)),l.setAttribute("part","cell body-cell"),e.appendChild(l),r===s.length-1&&(this._rowDetailsTemplate||this.rowDetailsRenderer)){this._detailsCells=this._detailsCells||[];var h=this._detailsCells.filter(e=>e._vacant)[0]||this._createCell("td");-1===this._detailsCells.indexOf(h)&&this._detailsCells.push(h),h._content.parentElement||o.appendChild(h._content),this._configureDetailsCell(h),e.appendChild(h),this._a11ySetRowDetailsCell(e,h),h._vacant=!1}t.notifyPath&&!i&&t.notifyPath("_cells.*",t._cells)}else{var c="header"===a?"th":"td";n||"vaadin-grid-column-group"===t.localName?((l=t[`_${a}Cell`]||this._createCell(c))._column=t,e.appendChild(l),t[`_${a}Cell`]=l):(t._emptyCells=t._emptyCells||[],(l=t._emptyCells.filter(e=>e._vacant)[0]||this._createCell(c))._column=t,e.appendChild(l),-1===t._emptyCells.indexOf(l)&&t._emptyCells.push(l)),l.setAttribute("part",`cell ${a}-cell`),this.__updateHeaderFooterRowVisibility(e)}l._content.parentElement||o.appendChild(l._content),l._vacant=!1,l._column=t}),this.appendChild(o),this._frozenCellsChanged(),this._updateFirstAndLastColumnForRow(e)}__updateHeaderFooterRowVisibility(e){if(e){var t=Array.from(e.children).filter(t=>{var a=t._column;if(a._emptyCells&&a._emptyCells.indexOf(t)>-1)return!1;if(e.parentElement===this.$.header){if(a.headerRenderer||a._headerTemplate)return!0;if(null===a.header)return!1;if(a.path||void 0!==a.header)return!0}else if(a.footerRenderer||a._footerTemplate)return!0});e.hidden!==!t.length&&(e.hidden=!t.length,this.notifyResize())}}_updateScrollerItem(e,t){this._preventScrollerRotatingCellFocus(e,t),this._columnTree&&(this._toggleAttribute("first",0===t,e),this._toggleAttribute("odd",t%2,e),this._a11yUpdateRowRowindex(e,t),this._getItem(t,e))}_columnTreeChanged(e,t){this._renderColumnTree(e),this.recalculateColumnWidths()}_renderColumnTree(e){for(Array.from(this.$.items.children).forEach(t=>this._updateRow(t,e[e.length-1],null,!1,!0));this.$.header.children.length<e.length;){var t=document.createElement("tr");t.setAttribute("part","row"),t.setAttribute("role","row"),this.$.header.appendChild(t);var a=document.createElement("tr");a.setAttribute("part","row"),a.setAttribute("role","row"),this.$.footer.appendChild(a)}for(;this.$.header.children.length>e.length;)this.$.header.removeChild(this.$.header.firstElementChild),this.$.footer.removeChild(this.$.footer.firstElementChild);Array.from(this.$.header.children).forEach((t,a)=>this._updateRow(t,e[a],"header",a===e.length-1)),Array.from(this.$.footer.children).forEach((t,a)=>this._updateRow(t,e[e.length-1-a],"footer",0===a)),this._updateRow(this.$.sizer,e[e.length-1]),this._resizeHandler(),this._frozenCellsChanged(),this._updateFirstAndLastColumn(),this._resetKeyboardNavigation(),this._a11yUpdateHeaderRows(),this._a11yUpdateFooterRows(),this.__updateFooterPositioning()}__updateFooterPositioning(){(this._firefox&&(this.$.items.style.paddingBottom=0,this.heightByRows||this.allRowsVisible||(this.$.items.style.paddingBottom=this.$.footer.offsetHeight+"px")),this._ios)&&(!window.CSS.supports("position","sticky")&&(this.$.table.style.height="",this.$.table.style.minHeight="100%",this.$.table.style.maxHeight="100%",setTimeout(()=>this.$.table.style.height=this.$.scroller.offsetHeight+"px")))}_updateItem(e,t){e._item=t;var a=this.__getRowModel(e);this._toggleAttribute("selected",a.selected,e),this._a11yUpdateRowSelected(e,a.selected),this._a11yUpdateRowLevel(e,a.level),this._toggleAttribute("expanded",a.expanded,e),this._toggleAttribute("details-opened",this._isDetailsOpened(t),e),(this._rowDetailsTemplate||this.rowDetailsRenderer)&&this._toggleDetailsCell(e,t),this._generateCellClassNames(e,a),this._filterDragAndDrop(e,a),Array.from(e.children).forEach(e=>{if(e._renderer){var t=e._column||this;e._renderer.call(t,e._content,t,a)}else e._instance&&(e._instance.__detailsOpened__=a.detailsOpened,e._instance.__selected__=a.selected,e._instance.__level__=a.level,e._instance.__expanded__=a.expanded,e._instance.setProperties(a))}),this._debouncerUpdateHeights=d.a.debounce(this._debouncerUpdateHeights,r.d.after(1),()=>{this._updateMetrics(),this._positionItems(),this._updateScrollerSize()})}_resizeHandler(){this._updateDetailsCellHeights(),this._accessIronListAPI(super._resizeHandler,!0),this._updateScrollerMeasurements(),this.__updateFooterPositioning()}_onAnimationEnd(e){0===e.animationName.indexOf("vaadin-grid-appear")&&(this._render(),e.stopPropagation(),this.notifyResize(),this.__flushPendingRecalculateColumnWidths(),requestAnimationFrame(()=>{this.__scrollToPendingIndex(),this.$.table.style.webkitOverflowScrolling="touch"}))}_toggleAttribute(e,t,a){a.hasAttribute(e)===!t&&(t?a.setAttribute(e,""):a.removeAttribute(e))}__getRowModel(e){return{index:e.index,item:e._item,level:this._getIndexLevel(e.index),expanded:this._isExpanded(e._item),selected:this._isSelected(e._item),detailsOpened:!(!this._rowDetailsTemplate&&!this.rowDetailsRenderer)&&this._isDetailsOpened(e._item)}}render(){this._columnTree&&(this._columnTree.forEach(e=>{e.forEach(e=>e._renderHeaderAndFooter())}),this._update())}notifyResize(){super.notifyResize()}_allRowsVisibleChanged(e,t){(e||t)&&this.notifyResize()}__forceReflow(){this._debouncerForceReflow=d.a.debounce(this._debouncerForceReflow,r.a,()=>{this.$.scroller.style.overflow="hidden",setTimeout(()=>this.$.scroller.style.overflow="")})}}customElements.define(ee.is,ee)},,function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(9),i=a(17),o=a(217),r=e=>class extends(Object(o.a)(e)){static get properties(){return{multiple:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_multipleChanged"},selectedValues:{type:Array,notify:!0,value:function(){return[]}}}}static get observers(){return["_enhanceMultipleItems(items, multiple, selected, selectedValues, selectedValues.*)"]}ready(){this.addEventListener("click",e=>this._onMultipleClick(e)),super.ready()}_enhanceMultipleItems(e,t,a,n){if(e&&t){if(n){var i=n.map(t=>e[t]);e.forEach(e=>e.selected=-1!==i.indexOf(e))}this._scrollToLastSelectedItem()}}_scrollToLastSelectedItem(){var e=this.selectedValues.slice(-1)[0];e&&!e.disabled&&this._scrollToItem(e)}_onMultipleClick(e){var t=this._filterItems(e.composedPath())[0],a=t&&!t.disabled?this.items.indexOf(t):-1;a<0||!this.multiple||(e.preventDefault(),-1!==this.selectedValues.indexOf(a)?this.selectedValues=this.selectedValues.filter(e=>e!==a):this.selectedValues=this.selectedValues.concat(a))}_multipleChanged(e,t){!e&&t&&(this.selectedValues=[],this.items.forEach(e=>e.selected=!1)),e&&!t&&void 0!==this.selected&&(this.push("selectedValues",this.selected),this.selected=void 0)}},s=a(22),l=a(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class h extends(Object(s.a)(r(Object(i.a)(n.a)))){static get template(){return l.a`
    <style>
      :host {
        display: flex;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="items"] {
        height: 100%;
        width: 100%;
        overflow-y: auto;
        -webkit-overflow-scrolling: touch;
      }
    </style>
    <div part="items">
      <slot></slot>
    </div>
`}static get is(){return"vaadin-list-box"}static get version(){return"1.4.0"}static get properties(){return{orientation:{readOnly:!0}}}constructor(){super(),this.focused}ready(){super.ready(),this.setAttribute("role","list"),setTimeout(this._checkImport.bind(this),2e3)}get _scrollerElement(){return this.shadowRoot.querySelector('[part="items"]')}_checkImport(){var e=this.querySelector("vaadin-item");!e||e instanceof n.a||console.warn("Make sure you have imported the vaadin-item element.")}}customElements.define(h.is,h)},,function(e,t,a){"use strict";a(41),a(32),a(47),a(51);var n=document.createElement("template");n.innerHTML='<dom-module id="lumo-overlay">\n  <template>\n    <style>\n      :host {\n        top: var(--lumo-space-m);\n        right: var(--lumo-space-m);\n        bottom: var(--lumo-space-m);\n        left: var(--lumo-space-m);\n        /* Workaround for Edge issue (only on Surface), where an overflowing vaadin-list-box inside vaadin-select-overlay makes the overlay transparent */\n        /* stylelint-disable-next-line */\n        outline: 0px solid transparent;\n      }\n\n      [part="overlay"] {\n        background-color: var(--lumo-base-color);\n        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));\n        border-radius: var(--lumo-border-radius-m);\n        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-m);\n        color: var(--lumo-body-text-color);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-m);\n        font-weight: 400;\n        line-height: var(--lumo-line-height-m);\n        letter-spacing: 0;\n        text-transform: none;\n        -webkit-text-size-adjust: 100%;\n        -webkit-font-smoothing: antialiased;\n        -moz-osx-font-smoothing: grayscale;\n      }\n\n      [part="content"] {\n        padding: var(--lumo-space-xs);\n      }\n\n      [part="backdrop"] {\n        background-color: var(--lumo-shade-20pct);\n        animation: 0.2s lumo-overlay-backdrop-enter both;\n        will-change: opacity;\n      }\n\n      @keyframes lumo-overlay-backdrop-enter {\n        0% {\n          opacity: 0;\n        }\n      }\n\n      :host([closing]) [part="backdrop"] {\n        animation: 0.2s lumo-overlay-backdrop-exit both;\n      }\n\n      @keyframes lumo-overlay-backdrop-exit {\n        100% {\n          opacity: 0;\n        }\n      }\n\n      @keyframes lumo-overlay-dummy-animation {\n        0% { opacity: 1; }\n        100% { opacity: 1; }\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(n.content)},,,function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
var n,i=null,o=window.HTMLImports&&window.HTMLImports.whenReady||null;function r(e){requestAnimationFrame((function(){o?o(e):(i||(i=new Promise(e=>{n=e}),"complete"===document.readyState?n():document.addEventListener("readystatechange",()=>{"complete"===document.readyState&&n()})),i.then((function(){e&&e()})))}))}
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/var s="__shadyCSSCachedStyle",l=null,h=null;class c{constructor(){this.customStyles=[],this.enqueued=!1,r(()=>{window.ShadyCSS.flushCustomStyles&&window.ShadyCSS.flushCustomStyles()})}enqueueDocumentValidation(){!this.enqueued&&h&&(this.enqueued=!0,r(h))}addCustomStyle(e){e.__seenByShadyCSS||(e.__seenByShadyCSS=!0,this.customStyles.push(e),this.enqueueDocumentValidation())}getStyleForCustomStyle(e){return e[s]?e[s]:e.getStyle?e.getStyle():e}processStyles(){for(var e=this.customStyles,t=0;t<e.length;t++){var a=e[t];if(!a[s]){var n=this.getStyleForCustomStyle(a);if(n){var i=n.__appliedElement||n;l&&l(i),a[s]=i}}}return e}}c.prototype.addCustomStyle=c.prototype.addCustomStyle,c.prototype.getStyleForCustomStyle=c.prototype.getStyleForCustomStyle,c.prototype.processStyles=c.prototype.processStyles,Object.defineProperties(c.prototype,{transformCallback:{get:()=>l,set(e){l=e}},validateCallback:{get:()=>h,set(e){var t=!1;h||(t=!0),h=e,t&&this.enqueueDocumentValidation()}}})},,function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));var n=a(49),i={templatize(e,t){this._templatizerTemplate=e,this.ctor=Object(n.b)(e,this,{mutableData:Boolean(t),parentModel:this._parentModel,instanceProps:this._instanceProps,forwardHostProp:this._forwardHostPropV2,notifyInstanceProp:this._notifyInstancePropV2})},stamp(e){return new this.ctor(e)},modelForElement(e){return Object(n.a)(this._templatizerTemplate,e)}};
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/},function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n,i=a(103);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/n=i.a._mutablePropertyChange;var o={properties:{mutableData:Boolean},_shouldPropertyChange(e,t,a){return n(this,e,t,a,this.mutableData)}}},function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=/\/\*\*\s+vaadin-dev-mode:start([\s\S]*)vaadin-dev-mode:end\s+\*\*\//i,i=window.Vaadin&&window.Vaadin.Flow&&window.Vaadin.Flow.clients;function o(e,t){if("function"==typeof e){var a=n.exec(e.toString());if(a)try{e=new Function(a[1])}catch(e){console.log("vaadin-development-mode-detector: uncommentAndRun() failed",e)}return e(t)}}window.Vaadin=window.Vaadin||{};var r=function(e,t){if(window.Vaadin.developmentMode)return o(e,t)};void 0===window.Vaadin.developmentMode&&(window.Vaadin.developmentMode=function(){try{return!!localStorage.getItem("vaadin.developmentmode.force")||["localhost","127.0.0.1"].indexOf(window.location.hostname)>=0&&(i?!function(){if(i){if(Object.keys(i).map(e=>i[e]).filter(e=>e.productionMode).length>0)return!0}return!1}():!o((function(){return!0})))}catch(e){return!1}}())},function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a(43);var n=a(71);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
class i{constructor(e){i[" "](e),this.type=e&&e.type||"default",this.key=e&&e.key,e&&"value"in e&&(this.value=e.value)}get value(){var e=this.type,t=this.key;if(e&&t)return i.types[e]&&i.types[e][t]}set value(e){var t=this.type,a=this.key;t&&a&&(t=i.types[t]=i.types[t]||{},null==e?delete t[a]:t[a]=e)}get list(){if(this.type){var e=i.types[this.type];return e?Object.keys(e).map((function(e){return o[this.type][e]}),this):[]}}byKey(e){return this.key=e,this.value}}i[" "]=function(){},i.types={};var o=i.types;Object(n.a)({is:"iron-meta",properties:{type:{type:String,value:"default"},key:{type:String},value:{type:String,notify:!0},self:{type:Boolean,observer:"_selfChanged"},__meta:{type:Boolean,computed:"__computeMeta(type, key, value)"}},hostAttributes:{hidden:!0},__computeMeta:function(e,t,a){var n=new i({type:e,key:t});return void 0!==a&&a!==n.value?n.value=a:this.value!==n.value&&(this.value=n.value),n},get list(){return this.__meta&&this.__meta.list},_selfChanged:function(e){e&&(this.value=this)},byKey:function(e){return new i({type:this.type,key:e}).value}})},,,,,,function(e,t,a){"use strict";a(78),a(63),a(32),a(47),a(51);var n=a(6).a`<dom-module id="lumo-item" theme-for="vaadin-item">
  <template>
    <style>
      :host {
        display: flex;
        align-items: center;
        box-sizing: border-box;
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-xs);
        padding: 0.5em 1em;
        min-height: var(--lumo-size-m);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
      }

      /* Selectable items have a checkmark icon */
      :host([tabindex])::before {
        display: var(--_lumo-item-selected-icon-display, none);
        content: var(--lumo-icons-checkmark);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        line-height: 1;
        font-weight: normal;
        width: 1em;
        height: 1em;
        margin: calc((1 - var(--lumo-line-height-xs)) * var(--lumo-font-size-m) / 2) 0;
        color: var(--lumo-primary-text-color);
        flex: none;
        opacity: 0;
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), opacity 0.1s;
      }

      :host([selected])::before {
        opacity: 1;
      }

      :host([active]:not([selected]))::before {
        transform: scale(0.8);
        opacity: 0;
        transition-duration: 0s;
      }

      [part="content"] {
        flex: auto;
      }

      /* Disabled item */

      :host([disabled]) {
        color: var(--lumo-disabled-text-color);
        cursor: default;
        pointer-events: none;
      }

      /* Slotted icons */

      :host ::slotted(iron-icon) {
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);a(145)},,function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(9),i=a(49),o=a(13),r=a(26),s=a(103),l=a(19),h=a(11),c=a(15),d=Object(s.b)(n.a);class p extends d{static get is(){return"dom-repeat"}static get template(){return null}static get properties(){return{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},itemsIndexAs:{type:String,value:"itemsIndex"},sort:{type:Function,observer:"__sortChanged"},filter:{type:Function,observer:"__filterChanged"},observe:{type:String,observer:"__observeChanged"},delay:Number,renderedItemCount:{type:Number,notify:!0,readOnly:!0},initialCount:{type:Number,observer:"__initializeChunking"},targetFramerate:{type:Number,value:20},_targetFrameTime:{type:Number,computed:"__computeFrameTime(targetFramerate)"}}}static get observers(){return["__itemsChanged(items.*)"]}constructor(){super(),this.__instances=[],this.__limit=1/0,this.__pool=[],this.__renderDebouncer=null,this.__itemsIdxToInstIdx={},this.__chunkCount=null,this.__lastChunkTime=null,this.__sortFn=null,this.__filterFn=null,this.__observePaths=null,this.__ctor=null,this.__isDetached=!0,this.template=null}disconnectedCallback(){super.disconnectedCallback(),this.__isDetached=!0;for(var e=0;e<this.__instances.length;e++)this.__detachInstance(e)}connectedCallback(){if(super.connectedCallback(),this.style.display="none",this.__isDetached){this.__isDetached=!1;for(var e=Object(c.a)(Object(c.a)(this).parentNode),t=0;t<this.__instances.length;t++)this.__attachInstance(t,e)}}__ensureTemplatized(){if(!this.__ctor){var e=this.template=this.querySelector("template");if(!e){var t=new MutationObserver(()=>{if(!this.querySelector("template"))throw new Error("dom-repeat requires a <template> child");t.disconnect(),this.__render()});return t.observe(this,{childList:!0}),!1}var a={};a[this.as]=!0,a[this.indexAs]=!0,a[this.itemsIndexAs]=!0,this.__ctor=Object(i.b)(e,this,{mutableData:this.mutableData,parentModel:!0,instanceProps:a,forwardHostProp:function(e,t){for(var a,n=this.__instances,i=0;i<n.length&&(a=n[i]);i++)a.forwardHostProp(e,t)},notifyInstanceProp:function(e,t,a){if(Object(l.e)(this.as,t)){var n=e[this.itemsIndexAs];t==this.as&&(this.items[n]=a);var i=Object(l.i)(this.as,`${JSCompiler_renameProperty("items",this)}.${n}`,t);this.notifyPath(i,a)}}})}return!0}__getMethodHost(){return this.__dataHost._methodHost||this.__dataHost}__functionFromPropertyValue(e){if("string"==typeof e){var t=e,a=this.__getMethodHost();return function(){return a[t].apply(a,arguments)}}return e}__sortChanged(e){this.__sortFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__filterChanged(e){this.__filterFn=this.__functionFromPropertyValue(e),this.items&&this.__debounceRender(this.__render)}__computeFrameTime(e){return Math.ceil(1e3/e)}__initializeChunking(){this.initialCount&&(this.__limit=this.initialCount,this.__chunkCount=this.initialCount,this.__lastChunkTime=performance.now())}__tryRenderChunk(){this.items&&this.__limit<this.items.length&&this.__debounceRender(this.__requestRenderChunk)}__requestRenderChunk(){requestAnimationFrame(()=>this.__renderChunk())}__renderChunk(){var e=performance.now(),t=this._targetFrameTime/(e-this.__lastChunkTime);this.__chunkCount=Math.round(this.__chunkCount*t)||1,this.__limit+=this.__chunkCount,this.__lastChunkTime=e,this.__debounceRender(this.__render)}__observeChanged(){this.__observePaths=this.observe&&this.observe.replace(".*",".").split(" ")}__itemsChanged(e){this.items&&!Array.isArray(this.items)&&console.warn("dom-repeat expected array for `items`, found",this.items),this.__handleItemPath(e.path,e.value)||(this.__initializeChunking(),this.__debounceRender(this.__render))}__handleObservedPaths(e){if(this.__sortFn||this.__filterFn)if(e){if(this.__observePaths)for(var t=this.__observePaths,a=0;a<t.length;a++)0===e.indexOf(t[a])&&this.__debounceRender(this.__render,this.delay)}else this.__debounceRender(this.__render,this.delay)}__debounceRender(e,t=0){this.__renderDebouncer=o.a.debounce(this.__renderDebouncer,t>0?h.d.after(t):h.c,e.bind(this)),Object(r.a)(this.__renderDebouncer)}render(){this.__debounceRender(this.__render),Object(r.b)()}__render(){this.__ensureTemplatized()&&(this.__applyFullRefresh(),this.__pool.length=0,this._setRenderedItemCount(this.__instances.length),this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this.__tryRenderChunk())}__applyFullRefresh(){for(var e=this.items||[],t=new Array(e.length),a=0;a<e.length;a++)t[a]=a;this.__filterFn&&(t=t.filter((t,a,n)=>this.__filterFn(e[t],a,n))),this.__sortFn&&t.sort((t,a)=>this.__sortFn(e[t],e[a]));for(var n=this.__itemsIdxToInstIdx={},i=0,o=Math.min(t.length,this.__limit);i<o;i++){var r=this.__instances[i],s=t[i],l=e[s];n[s]=i,r?(r._setPendingProperty(this.as,l),r._setPendingProperty(this.indexAs,i),r._setPendingProperty(this.itemsIndexAs,s),r._flushProperties()):this.__insertInstance(l,i,s)}for(var h=this.__instances.length-1;h>=i;h--)this.__detachAndRemoveInstance(h)}__detachInstance(e){for(var t=this.__instances[e],a=Object(c.a)(t.root),n=0;n<t.children.length;n++){var i=t.children[n];a.appendChild(i)}return t}__attachInstance(e,t){var a=this.__instances[e];t.insertBefore(a.root,this)}__detachAndRemoveInstance(e){var t=this.__detachInstance(e);t&&this.__pool.push(t),this.__instances.splice(e,1)}__stampInstance(e,t,a){var n={};return n[this.as]=e,n[this.indexAs]=t,n[this.itemsIndexAs]=a,new this.__ctor(n)}__insertInstance(e,t,a){var n=this.__pool.pop();n?(n._setPendingProperty(this.as,e),n._setPendingProperty(this.indexAs,t),n._setPendingProperty(this.itemsIndexAs,a),n._flushProperties()):n=this.__stampInstance(e,t,a);var i=this.__instances[t+1],o=i?i.children[0]:this;return Object(c.a)(Object(c.a)(this).parentNode).insertBefore(n.root,o),this.__instances[t]=n,n}_showHideChildren(e){for(var t=0;t<this.__instances.length;t++)this.__instances[t]._showHideChildren(e)}__handleItemPath(e,t){var a=e.slice(6),n=a.indexOf("."),i=n<0?a:a.substring(0,n);if(i==parseInt(i,10)){var o=n<0?"":a.substring(n+1);this.__handleObservedPaths(o);var r=this.__itemsIdxToInstIdx[i],s=this.__instances[r];if(s){var l=this.as+(o?"."+o:"");s._setPendingPropertyOrPath(l,t,!1,!0),s._flushProperties()}return!0}}itemForElement(e){var t=this.modelForElement(e);return t&&t[this.as]}indexForElement(e){var t=this.modelForElement(e);return t&&t[this.indexAs]}modelForElement(e){return Object(i.a)(this.template,e)}}customElements.define(p.is,p)},function(e,t,a){"use strict";a(41),a(63),a(32),a(47),a(51);var n=a(6).a`<dom-module id="lumo-button" theme-for="vaadin-button">
  <template>
    <style>
      :host {
        /* Sizing */
        --lumo-button-size: var(--lumo-size-m);
        min-width: calc(var(--lumo-button-size) * 2);
        height: var(--lumo-button-size);
        padding: 0 calc(var(--lumo-button-size) / 3 + var(--lumo-border-radius) / 2);
        margin: var(--lumo-space-xs) 0;
        box-sizing: border-box;
        /* Style */
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 500;
        color: var(--_lumo-button-color, var(--lumo-primary-text-color));
        background-color: var(--_lumo-button-background-color, var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        cursor: default;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      /* Set only for the internal parts so we don’t affect the host vertical alignment */
      [part="label"],
      [part="prefix"],
      [part="suffix"] {
        line-height: var(--lumo-line-height-xs);
      }

      [part="label"] {
        padding: calc(var(--lumo-button-size) / 6) 0;
      }

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-button-size: var(--lumo-size-s);
      }

      :host([theme~="large"]) {
        font-size: var(--lumo-font-size-l);
        --lumo-button-size: var(--lumo-size-l);
      }

      /* This needs to be the last selector for it to take priority */
      :host([disabled][disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
        background-color: var(--lumo-contrast-5pct);
      }

      /* For interaction states */
      :host::before,
      :host::after {
        content: "";
        /* We rely on the host always being relative */
        position: absolute;
        z-index: 1;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: currentColor;
        border-radius: inherit;
        opacity: 0;
        transition: opacity 0.2s;
        pointer-events: none;
      }

      /* Hover */

      :host(:hover)::before {
        opacity: 0.05;
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([active]):hover)::before {
          opacity: 0;
        }
      }

      /* Active */

      :host::after {
        transition: opacity 1.4s, transform 0.1s;
        filter: blur(8px);
      }

      :host([active])::before {
        opacity: 0.1;
        transition-duration: 0s;
      }

      :host([active])::after {
        opacity: 0.1;
        transition-duration: 0s, 0s;
        transform: scale(0);
      }

      /* Keyboard focus */

      :host([focus-ring]) {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Types (primary, tertiary, tertiary-inline */

      :host([theme~="tertiary"]),
      :host([theme~="tertiary-inline"]) {
        background-color: transparent !important;
        transition: opacity 0.2s;
        min-width: 0;
      }

      :host([theme~="tertiary"])::before,
      :host([theme~="tertiary-inline"])::before {
        display: none;
      }

      :host([theme~="tertiary"]) {
        padding: 0 calc(var(--lumo-button-size) / 6);
      }

      @media (hover: hover) {
        :host([theme*="tertiary"]:not([active]):hover) {
          opacity: 0.8;
        }
      }

      :host([theme~="tertiary"][active]),
      :host([theme~="tertiary-inline"][active]) {
        opacity: 0.5;
        transition-duration: 0s;
      }

      :host([theme~="tertiary-inline"]) {
        margin: 0;
        height: auto;
        padding: 0;
        line-height: inherit;
        font-size: inherit;
      }

      :host([theme~="tertiary-inline"]) [part="label"] {
        padding: 0;
        overflow: visible;
        line-height: inherit;
      }

      :host([theme~="primary"]) {
        background-color: var(--_lumo-button-primary-background-color, var(--lumo-primary-color));
        color: var(--_lumo-button-primary-color, var(--lumo-primary-contrast-color));
        font-weight: 600;
        min-width: calc(var(--lumo-button-size) * 2.5);
      }

      :host([theme~="primary"][disabled]) {
        background-color: var(--lumo-primary-color-50pct);
        color: var(--lumo-primary-contrast-color);
      }

      :host([theme~="primary"]:hover)::before {
        opacity: 0.1;
      }

      :host([theme~="primary"][active])::before {
        background-color: var(--lumo-shade-20pct);
      }

      @media (pointer: coarse) {
        :host([theme~="primary"][active])::before {
          background-color: var(--lumo-shade-60pct);
        }

        :host([theme~="primary"]:not([active]):hover)::before {
          opacity: 0;
        }
      }

      :host([theme~="primary"][active])::after {
        opacity: 0.2;
      }

      /* Colors (success, error, contrast) */

      :host([theme~="success"]) {
        color: var(--lumo-success-text-color);
      }

      :host([theme~="success"][theme~="primary"]) {
        background-color: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
      }

      :host([theme~="success"][theme~="primary"][disabled]) {
        background-color: var(--lumo-success-color-50pct);
      }

      :host([theme~="error"]) {
        color: var(--lumo-error-text-color);
      }

      :host([theme~="error"][theme~="primary"]) {
        background-color: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
      }

      :host([theme~="error"][theme~="primary"][disabled]) {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([theme~="contrast"]) {
        color: var(--lumo-contrast);
      }

      :host([theme~="contrast"][theme~="primary"]) {
        background-color: var(--lumo-contrast);
        color: var(--lumo-base-color);
      }

      :host([theme~="contrast"][theme~="primary"][disabled]) {
        background-color: var(--lumo-contrast-50pct);
      }

      /* Icons */

      [part] ::slotted(iron-icon) {
        display: inline-block;
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="prefix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      [part="suffix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      /* Icon-only */

      :host([theme~="icon"]:not([theme~="tertiary-inline"])) {
        min-width: var(--lumo-button-size);
        padding-left: calc(var(--lumo-button-size) / 4);
        padding-right: calc(var(--lumo-button-size) / 4);
      }

      :host([theme~="icon"]) [part="prefix"],
      :host([theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="prefix"] {
        margin-left: 0.25em;
        margin-right: -0.25em;
      }

      :host([dir="rtl"]) [part="suffix"] {
        margin-left: -0.25em;
        margin-right: 0.25em;
      }

      :host([dir="rtl"][theme~="icon"]) [part="prefix"],
      :host([dir="rtl"][theme~="icon"]) [part="suffix"] {
        margin-left: 0;
        margin-right: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content)},,,function(e,t,a){"use strict";a(78),a(63);var n=a(6).a`<dom-module id="lumo-password-field" theme-for="vaadin-password-field">
  <template>
    <style>
      [part="reveal-button"]::before {
        content: var(--lumo-icons-eye);
      }

      :host([password-visible]) [part="reveal-button"]::before {
        content: var(--lumo-icons-eye-disabled);
      }

      /* Make it easy to hide the button across the whole app */
      [part="reveal-button"] {
        display: var(--lumo-password-field-reveal-button-display, block);
      }

      /* FIXME: ShadyCSS workaround for slotted input in Edge */
      [part="input-field"] ::slotted(input)::-ms-reveal {
        display: none;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);a(106),a(219)},,function(e,t,a){"use strict";var n=a(43),i=a(6),o=i.a`
<custom-style>
  <style is="custom-style">
    [hidden] {
      display: none !important;
    }
  </style>
</custom-style>
<custom-style>
  <style is="custom-style">
    html {

      --layout: {
        display: -ms-flexbox;
        display: -webkit-flex;
        display: flex;
      };

      --layout-inline: {
        display: -ms-inline-flexbox;
        display: -webkit-inline-flex;
        display: inline-flex;
      };

      --layout-horizontal: {
        @apply --layout;

        -ms-flex-direction: row;
        -webkit-flex-direction: row;
        flex-direction: row;
      };

      --layout-horizontal-reverse: {
        @apply --layout;

        -ms-flex-direction: row-reverse;
        -webkit-flex-direction: row-reverse;
        flex-direction: row-reverse;
      };

      --layout-vertical: {
        @apply --layout;

        -ms-flex-direction: column;
        -webkit-flex-direction: column;
        flex-direction: column;
      };

      --layout-vertical-reverse: {
        @apply --layout;

        -ms-flex-direction: column-reverse;
        -webkit-flex-direction: column-reverse;
        flex-direction: column-reverse;
      };

      --layout-wrap: {
        -ms-flex-wrap: wrap;
        -webkit-flex-wrap: wrap;
        flex-wrap: wrap;
      };

      --layout-wrap-reverse: {
        -ms-flex-wrap: wrap-reverse;
        -webkit-flex-wrap: wrap-reverse;
        flex-wrap: wrap-reverse;
      };

      --layout-flex-auto: {
        -ms-flex: 1 1 auto;
        -webkit-flex: 1 1 auto;
        flex: 1 1 auto;
      };

      --layout-flex-none: {
        -ms-flex: none;
        -webkit-flex: none;
        flex: none;
      };

      --layout-flex: {
        -ms-flex: 1 1 0.000000001px;
        -webkit-flex: 1;
        flex: 1;
        -webkit-flex-basis: 0.000000001px;
        flex-basis: 0.000000001px;
      };

      --layout-flex-2: {
        -ms-flex: 2;
        -webkit-flex: 2;
        flex: 2;
      };

      --layout-flex-3: {
        -ms-flex: 3;
        -webkit-flex: 3;
        flex: 3;
      };

      --layout-flex-4: {
        -ms-flex: 4;
        -webkit-flex: 4;
        flex: 4;
      };

      --layout-flex-5: {
        -ms-flex: 5;
        -webkit-flex: 5;
        flex: 5;
      };

      --layout-flex-6: {
        -ms-flex: 6;
        -webkit-flex: 6;
        flex: 6;
      };

      --layout-flex-7: {
        -ms-flex: 7;
        -webkit-flex: 7;
        flex: 7;
      };

      --layout-flex-8: {
        -ms-flex: 8;
        -webkit-flex: 8;
        flex: 8;
      };

      --layout-flex-9: {
        -ms-flex: 9;
        -webkit-flex: 9;
        flex: 9;
      };

      --layout-flex-10: {
        -ms-flex: 10;
        -webkit-flex: 10;
        flex: 10;
      };

      --layout-flex-11: {
        -ms-flex: 11;
        -webkit-flex: 11;
        flex: 11;
      };

      --layout-flex-12: {
        -ms-flex: 12;
        -webkit-flex: 12;
        flex: 12;
      };

      /* alignment in cross axis */

      --layout-start: {
        -ms-flex-align: start;
        -webkit-align-items: flex-start;
        align-items: flex-start;
      };

      --layout-center: {
        -ms-flex-align: center;
        -webkit-align-items: center;
        align-items: center;
      };

      --layout-end: {
        -ms-flex-align: end;
        -webkit-align-items: flex-end;
        align-items: flex-end;
      };

      --layout-baseline: {
        -ms-flex-align: baseline;
        -webkit-align-items: baseline;
        align-items: baseline;
      };

      /* alignment in main axis */

      --layout-start-justified: {
        -ms-flex-pack: start;
        -webkit-justify-content: flex-start;
        justify-content: flex-start;
      };

      --layout-center-justified: {
        -ms-flex-pack: center;
        -webkit-justify-content: center;
        justify-content: center;
      };

      --layout-end-justified: {
        -ms-flex-pack: end;
        -webkit-justify-content: flex-end;
        justify-content: flex-end;
      };

      --layout-around-justified: {
        -ms-flex-pack: distribute;
        -webkit-justify-content: space-around;
        justify-content: space-around;
      };

      --layout-justified: {
        -ms-flex-pack: justify;
        -webkit-justify-content: space-between;
        justify-content: space-between;
      };

      --layout-center-center: {
        @apply --layout-center;
        @apply --layout-center-justified;
      };

      /* self alignment */

      --layout-self-start: {
        -ms-align-self: flex-start;
        -webkit-align-self: flex-start;
        align-self: flex-start;
      };

      --layout-self-center: {
        -ms-align-self: center;
        -webkit-align-self: center;
        align-self: center;
      };

      --layout-self-end: {
        -ms-align-self: flex-end;
        -webkit-align-self: flex-end;
        align-self: flex-end;
      };

      --layout-self-stretch: {
        -ms-align-self: stretch;
        -webkit-align-self: stretch;
        align-self: stretch;
      };

      --layout-self-baseline: {
        -ms-align-self: baseline;
        -webkit-align-self: baseline;
        align-self: baseline;
      };

      /* multi-line alignment in main axis */

      --layout-start-aligned: {
        -ms-flex-line-pack: start;  /* IE10 */
        -ms-align-content: flex-start;
        -webkit-align-content: flex-start;
        align-content: flex-start;
      };

      --layout-end-aligned: {
        -ms-flex-line-pack: end;  /* IE10 */
        -ms-align-content: flex-end;
        -webkit-align-content: flex-end;
        align-content: flex-end;
      };

      --layout-center-aligned: {
        -ms-flex-line-pack: center;  /* IE10 */
        -ms-align-content: center;
        -webkit-align-content: center;
        align-content: center;
      };

      --layout-between-aligned: {
        -ms-flex-line-pack: justify;  /* IE10 */
        -ms-align-content: space-between;
        -webkit-align-content: space-between;
        align-content: space-between;
      };

      --layout-around-aligned: {
        -ms-flex-line-pack: distribute;  /* IE10 */
        -ms-align-content: space-around;
        -webkit-align-content: space-around;
        align-content: space-around;
      };

      /*******************************
                Other Layout
      *******************************/

      --layout-block: {
        display: block;
      };

      --layout-invisible: {
        visibility: hidden !important;
      };

      --layout-relative: {
        position: relative;
      };

      --layout-fit: {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-scroll: {
        -webkit-overflow-scrolling: touch;
        overflow: auto;
      };

      --layout-fullbleed: {
        margin: 0;
        height: 100vh;
      };

      /* fixed position */

      --layout-fixed-top: {
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
      };

      --layout-fixed-right: {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
      };

      --layout-fixed-bottom: {
        position: fixed;
        right: 0;
        bottom: 0;
        left: 0;
      };

      --layout-fixed-left: {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
      };

    }
  </style>
</custom-style>`;o.setAttribute("style","display: none;"),document.head.appendChild(o.content);var r=document.createElement("style");r.textContent="[hidden] { display: none !important; }",document.head.appendChild(r);a(193);var s=a(71),l=a(39);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
Object(s.a)({_template:i.a`
    <style>
      :host {
        @apply --layout-inline;
        @apply --layout-center-center;
        position: relative;

        vertical-align: middle;

        fill: var(--iron-icon-fill-color, currentcolor);
        stroke: var(--iron-icon-stroke-color, none);

        width: var(--iron-icon-width, 24px);
        height: var(--iron-icon-height, 24px);
        @apply --iron-icon;
      }

      :host([hidden]) {
        display: none;
      }
    </style>
`,is:"iron-icon",properties:{icon:{type:String},theme:{type:String},src:{type:String},_meta:{value:n.a.create("iron-meta",{type:"iconset"})}},observers:["_updateIcon(_meta, isAttached)","_updateIcon(theme, isAttached)","_srcChanged(src, isAttached)","_iconChanged(icon, isAttached)"],_DEFAULT_ICONSET:"icons",_iconChanged:function(e){var t=(e||"").split(":");this._iconName=t.pop(),this._iconsetName=t.pop()||this._DEFAULT_ICONSET,this._updateIcon()},_srcChanged:function(e){this._updateIcon()},_usesIconset:function(){return this.icon||!this.src},_updateIcon:function(){this._usesIconset()?(this._img&&this._img.parentNode&&Object(l.a)(this.root).removeChild(this._img),""===this._iconName?this._iconset&&this._iconset.removeIcon(this):this._iconsetName&&this._meta&&(this._iconset=this._meta.byKey(this._iconsetName),this._iconset?(this._iconset.applyIcon(this,this._iconName,this.theme),this.unlisten(window,"iron-iconset-added","_updateIcon")):this.listen(window,"iron-iconset-added","_updateIcon"))):(this._iconset&&this._iconset.removeIcon(this),this._img||(this._img=document.createElement("img"),this._img.style.width="100%",this._img.style.height="100%",this._img.draggable=!1),this._img.src=this.src,Object(l.a)(this.root).appendChild(this._img))}})},,function(e,t){var a;a=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Combo Box","vaadin-combo-box-flow")},window.Vaadin.Flow.Legacy=window.Vaadin.Flow.Legacy||{},window.Vaadin.Flow.comboBoxConnector={initLazy:e=>a((function(e){if(!e.$connector){if(window.Polymer)window.Vaadin.Flow.Legacy.Debouncer=window.Vaadin.Flow.Legacy.Debouncer||Polymer.Debouncer,window.Vaadin.Flow.Legacy.timeOut=window.Vaadin.Flow.Legacy.timeOut||Polymer.Async.timeOut;else if(!window.Vaadin.Flow.Legacy.Debouncer)return void console.log("ComboBox is unable to load Polymer helpers.");var t=window.Vaadin.Flow.Legacy.Debouncer,n=window.Vaadin.Flow.Legacy.timeOut;e.$connector={};var i,o,r={},s={},l="",h=new Vaadin.ComboBoxPlaceholder,c=Math.max(2*e.pageSize,500),d=(i="",o=!1,{needsDataCommunicatorReset:()=>o=!0,getLastFilterSentToServer:()=>i,requestData:(t,a,n)=>{var r=a-t,s=n.filter;e.$server.setRequestedRange(t,r,s),i=s,o&&(e.$server.resetDataCommunicator(),o=!1)}}),p=(t=Object.keys(r))=>{t.forEach(t=>{r[t]([],e.size),delete r[t];for(var a=parseInt(t)*e.pageSize,n=a+e.pageSize,i=Math.min(n,e.filteredItems.length),o=a;o<i;o++)e.filteredItems[o]=h})};e.dataProvider=function(a,i){if(a.pageSize!=e.pageSize)throw"Invalid pageSize";if(e._clientSideFilter){if(s[0])return void b(s[0],i);a.filter=""}if(a.filter!==l)return s={},l=a.filter,void(this._debouncer=t.debounce(this._debouncer,n.after(500),()=>{if(d.getLastFilterSentToServer()===a.filter&&d.needsDataCommunicatorReset(),a.filter!==l)throw new Error("Expected params.filter to be '"+l+"' but was '"+a.filter+"'");p(),e.dataProvider(a,i)}));if(s[a.page])g(a.page,i);else{r[a.page]=i;var o=Object.keys(r).map(e=>parseInt(e)),h=Math.min(...o),u=Math.max(...o);if(o.length*a.pageSize>c)a.page===h?p([String(u)]):p([String(h)]),e.dataProvider(a,i);else if(u-h+1!==o.length)p();else{var f=a.pageSize*h,v=a.pageSize*(u+1);this._debouncer&&this._debouncer.isActive()?this._debouncer=t.debounce(this._debouncer,n.after(200),()=>d.requestData(f,v,a)):d.requestData(f,v,a)}}},e.$connector.filter=a((function(t,a){return a=a?a.toString().toLowerCase():"",e._getItemLabel(t).toString().toLowerCase().indexOf(a)>-1})),e.$connector.set=a((function(t,a,n){if(n==d.getLastFilterSentToServer()){if(t%e.pageSize!=0)throw"Got new data to index "+t+" which is not aligned with the page size of "+e.pageSize;if(0===t&&0===a.length&&r[0])s[0]=[];else for(var i=t/e.pageSize,o=Math.ceil(a.length/e.pageSize),l=0;l<o;l++){var h=i+l,c=a.slice(l*e.pageSize,(l+1)*e.pageSize);s[h]=c}}})),e.$connector.updateData=a((function(t){for(var a=0;a<t.length;a++)for(var n=t[a],i=0;i<e.filteredItems.length;i++)if(e.filteredItems[i].key===n.key){e.set("filteredItems."+i,n);break}})),e.$connector.updateSize=a((function(t){e._clientSideFilter||(e.size=t)})),e.$connector.reset=a((function(){p(),s={},e.clearCache()})),e.$connector.confirm=a((function(t,a){if(a==d.getLastFilterSentToServer()){for(var n=Object.getOwnPropertyNames(r),i=0;i<n.length;i++){var o=n[i];s[o]&&g(o,r[o])}e.$server.confirmUpdate(t)}})),customElements.whenDefined("vaadin-combo-box").then(a(()=>{var t=e.$.overlay._isItemSelected;e.$.overlay._isItemSelected=(a,n,i)=>{var o=t.call(e,a,n,i);return e._selectedKey&&(e.filteredItems.indexOf(n)>-1?delete e._selectedKey:o=o||a.key===e._selectedKey),o}})),e.$connector.enableClientValidation=a((function(t){var a=null;e.$&&(a=e.$.input),a?(t?(m(e),v(a)):(u(e),f(a,e)),e.validate()):setTimeout((function(){e.$connector.enableClientValidation(t)}),10)}));var u=a((function(t){void 0===t.$checkValidity&&(t.$checkValidity=t.checkValidity,t.checkValidity=function(){return!e.invalid}),void 0===t.$validate&&(t.$validate=t.validate,t.validate=function(){return!(e.focusElement.invalid=e.invalid)})})),f=a((function(e,t){void 0===e.$checkValidity&&(e.$checkValidity=e.checkValidity,e.checkValidity=function(){return!t.invalid})})),v=a((function(e){e.$checkValidity&&(e.checkValidity=e.$checkValidity,delete e.$checkValidity)})),m=a((function(e){e.$checkValidity&&(e.checkValidity=e.$checkValidity,delete e.$checkValidity),e.$validate&&(e.validate=e.$validate,delete e.$validate)})),g=a((function(t,a){var n=s[t];e._clientSideFilter?b(n,a):(delete s[t],a(n,e.size))})),b=a((function(t,a){var n=t;e.filter&&(n=t.filter(t=>e.$connector.filter(t,e.filter))),a(n,n.length)}));e.addEventListener("opened-changed",a(t=>{t.detail.value&&(e.$.overlay._selector._manageFocus=()=>{})})),e.addEventListener("custom-value-set",a(e=>e.preventDefault()))}}))(e)}},function(e,t){var a;a=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Context Menu","vaadin-context-menu-flow")},window.Vaadin.Flow.Legacy=window.Vaadin.Flow.Legacy||{},window.Vaadin.Flow.contextMenuConnector={init:e=>a((function(e){if(!e.$contextMenuConnector){if(window.Polymer)window.Vaadin.Flow.Legacy.GestureEventListeners=window.Vaadin.Flow.Legacy.GestureEventListeners||Polymer.GestureEventListeners,window.Vaadin.Flow.Legacy.Gestures=window.Vaadin.Flow.Legacy.Gestures||Polymer.Gestures;else if(!window.Vaadin.Flow.Legacy.Gestures)return void console.log("ContextMenu is unable to load Polymer helpers.");window.Vaadin.Flow.Legacy.GestureEventListeners;var t=window.Vaadin.Flow.Legacy.Gestures;e.$contextMenuConnector={openOnHandler:a((function(t){t.preventDefault(),t.stopPropagation(),this.$contextMenuConnector.openEvent=t;var a={};e.getContextMenuBeforeOpenDetail&&(a=e.getContextMenuBeforeOpenDetail(t)),e.dispatchEvent(new CustomEvent("vaadin-context-menu-before-open",{detail:a}))})),updateOpenOn:a((function(n){this.removeListener(),this.openOnEventType=n,customElements.whenDefined("vaadin-context-menu").then(a(()=>{t.gestures[n]?t.addListener(e,n,this.openOnHandler):e.addEventListener(n,this.openOnHandler)}))})),removeListener:a((function(){this.openOnEventType&&(t.gestures[this.openOnEventType]?t.removeListener(e,this.openOnEventType,this.openOnHandler):e.removeEventListener(this.openOnEventType,this.openOnHandler))})),openMenu:a((function(e){e.open(this.openEvent)})),removeConnector:a((function(){this.removeListener(),e.$contextMenuConnector=void 0}))}}}))(e),generateItems:(e,t,n)=>a((function(e,t,a){e._containerNodeId=a;var n=function(e){var a=function(e){try{return window.Vaadin.Flow.clients[t].getByNodeId(e)}catch(a){console.error("Could not get node %s from app %s",e,t),console.error(a)}}(e._containerNodeId);return a&&Array.from(a.children).map(e=>{var t={component:e,checked:e._checked};return"VAADIN-CONTEXT-MENU-ITEM"==e.tagName&&e._containerNodeId&&(t.children=n(e)),e._item=t,t})},i=n(e);e.items=i}))(e,t,n),setChecked:(e,t)=>a((function(e,t){e._item&&(e._item.checked=t)}))(e,t)}},function(e,t){window.Vaadin=window.Vaadin||{},window.Vaadin.Flow=window.Vaadin.Flow||{},window.Vaadin.Flow.dndConnector={__ondragenterListener:function(e){var t=e.currentTarget.__dropEffect;e.currentTarget.hasAttribute("disabled")||(t&&(e.dataTransfer.dropEffect=t),t&&"none"!==t&&(e.currentTarget.classList.contains("v-drag-over-target")?e.currentTarget["__skip-leave"]=!0:e.currentTarget.classList.add("v-drag-over-target"),e.preventDefault(),e.stopPropagation()))},__ondragoverListener:function(e){if(!e.currentTarget.hasAttribute("disabled")){var t=e.currentTarget.__dropEffect;t&&(e.dataTransfer.dropEffect=t),e.preventDefault(),e.stopPropagation()}},__ondragleaveListener:function(e){e.currentTarget["__skip-leave"]?e.currentTarget["__skip-leave"]=!1:e.currentTarget.classList.remove("v-drag-over-target"),e.stopPropagation()},__ondropListener:function(e){var t=e.currentTarget.__dropEffect;t&&(e.dataTransfer.dropEffect=t),e.currentTarget.classList.remove("v-drag-over-target"),e.preventDefault(),e.stopPropagation()},updateDropTarget:function(e){e.__active?(e.addEventListener("dragenter",this.__ondragenterListener,!1),e.addEventListener("dragover",this.__ondragoverListener,!1),e.addEventListener("dragleave",this.__ondragleaveListener,!1),e.addEventListener("drop",this.__ondropListener,!1)):(e.removeEventListener("dragenter",this.__ondragenterListener,!1),e.removeEventListener("dragover",this.__ondragoverListener,!1),e.removeEventListener("dragleave",this.__ondragleaveListener,!1),e.removeEventListener("drop",this.__ondropListener,!1),e.classList.remove("v-drag-over-target"))},__dragstartListener:function(e){e.stopPropagation(),e.dataTransfer.setData("text/plain",""),e.currentTarget.hasAttribute("disabled")?e.preventDefault():(e.currentTarget.__effectAllowed&&(e.dataTransfer.effectAllowed=e.currentTarget.__effectAllowed),e.currentTarget.classList.add("v-dragged"))},__dragendListener:function(e){e.currentTarget.classList.remove("v-dragged")},updateDragSource:function(e){e.draggable?(e.addEventListener("dragstart",this.__dragstartListener,!1),e.addEventListener("dragend",this.__dragendListener,!1)):(e.removeEventListener("dragstart",this.__dragstartListener,!1),e.removeEventListener("dragend",this.__dragendListener,!1))}}},function(e,t,a){"use strict";a.d(t,"a",(function(){return n})),a.d(t,"b",(function(){return i}));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var n=e=>class extends e{static get properties(){return{activeItem:{type:Object,notify:!0,value:null}}}ready(){super.ready(),this.$.scroller.addEventListener("click",this._onClick.bind(this)),this.addEventListener("cell-activate",this._activateItem.bind(this))}_activateItem(e){var t=e.detail.model,a=t?t.item:null;a&&(this.activeItem=this._itemsEqual(this.activeItem,a)?null:a)}_onClick(e){if(!e.defaultPrevented){var t=e.composedPath(),a=t[t.indexOf(this.$.table)-3];if(a&&!(a.getAttribute("part").indexOf("details-cell")>-1)){var n=a._content,i=this.getRootNode().activeElement;n.contains(i)&&(!this._ie||this._isFocusable(i))||this._isFocusable(e.target)||this.dispatchEvent(new CustomEvent("cell-activate",{detail:{model:this.__getRowModel(a.parentElement)}}))}}}_isFocusable(e){return i(e)}},i=e=>{if(!e.parentNode)return!1;var t=-1!==Array.from(e.parentNode.querySelectorAll("[tabindex], button, input, select, textarea, object, iframe, label, a[href], area[href]")).filter(e=>"cell body-cell"!==e.getAttribute("part")).indexOf(e);return!e.disabled&&t}},function(e,t){!function(){var e=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Grid","vaadin-grid-flow")};window.Vaadin.Flow.Legacy=window.Vaadin.Flow.Legacy||{};var t=!1;window.Vaadin.Flow.gridConnector={initLazy:a=>e((function(a){if(!a.$connector){if(window.Polymer)window.Vaadin.Flow.Legacy.Debouncer=Polymer.Debouncer,window.Vaadin.Flow.Legacy.timeOut=Polymer.Async.timeOut,window.Vaadin.Flow.Legacy.animationFrame=Polymer.Async.animationFrame,window.Vaadin.Flow.Legacy.GridElement=Vaadin.GridElement,window.Vaadin.Flow.Legacy.ItemCache=Vaadin.Grid.ItemCache;else if(!window.Vaadin.Flow.Legacy.Debouncer)return void console.log("Grid is unable to load Polymer helpers.");var n=window.Vaadin.Flow.Legacy.Debouncer,i=window.Vaadin.Flow.Legacy.timeOut,o=window.Vaadin.Flow.Legacy.animationFrame,r=window.Vaadin.Flow.Legacy.GridElement,s=window.Vaadin.Flow.Legacy.ItemCache;t||(t=!0,s.prototype.ensureSubCacheForScaledIndexOriginal=s.prototype.ensureSubCacheForScaledIndex,s.prototype.ensureSubCacheForScaledIndex=e((function(e){this.grid.$connector?this.itemCaches[e]||this.grid.$connector.beforeEnsureSubCacheForScaledIndex(this,e):this.ensureSubCacheForScaledIndexOriginal(e)})),s.prototype.isLoading=e((function(){return Boolean(v.length||Object.keys(this.pendingRequests).length||Object.keys(this.itemCaches).filter(e=>this.itemCaches[e].isLoading())[0])})),s.prototype.doEnsureSubCacheForScaledIndex=e((function(e){if(!this.itemCaches[e]){var t=new s.prototype.constructor(this.grid,this,this.items[e]);t.itemkeyCaches={},this.itemkeyCaches||(this.itemkeyCaches={}),this.itemCaches[e]=t,this.itemkeyCaches[this.grid.getItemId(t.parentItem)]=t,this.grid._loadPage(0,t)}})),s.prototype.getCacheAndIndexByKey=e((function(e){for(var t in this.items)if(this.grid.getItemId(this.items[t])===e)return{cache:this,scaledIndex:t};for(var a=Object.keys(this.itemkeyCaches),n=0;n<a.length;n++){var i=a[n],o=this.itemkeyCaches[i].getCacheAndIndexByKey(e);if(o)return o}})),s.prototype.getLevel=e((function(){for(var e=this,t=0;e.parentCache;)e=e.parentCache,t++;return t})));var l,h,c,d={},p={},u={},f=[],v=[],m={},g="null";m[g]=[0,0];var b=["SINGLE","NONE","MULTI"],_={},y="SINGLE",w=!0,z=!1;a.size=0,a.itemIdPath="key",a.$connector={},a.$connector.hasEnsureSubCacheQueue=e(()=>v.length>0),a.$connector.hasParentRequestQueue=e(()=>f.length>0),a.$connector.hasRootRequestQueue=e(()=>Object.keys(d).length>0||c&&c.isActive()),a.$connector.beforeEnsureSubCacheForScaledIndex=e((function(e,t){v.push({cache:e,scaledIndex:t,itemkey:a.getItemId(e.items[t]),level:e.getLevel()}),v.sort((function(e,t){return e.scaledIndex-t.scaledIndex||e.level-t.level})),h=n.debounce(h,o,()=>{for(;v.length;)a.$connector.flushEnsureSubCache()})})),a.$connector.doSelection=e((function(e,t){"NONE"===y||!e.length||t&&a.hasAttribute("disabled")||("SINGLE"===y&&(a.selectedItems=[],_={}),a.selectedItems=a.selectedItems.concat(e),e.forEach(e=>{e&&(_[e.key]=e,t&&(e.selected=!0,a.$server.select(e.key)));var n=!a.activeItem||!e||e.key!=a.activeItem.key;!t&&"SINGLE"===y&&n&&(a.activeItem=e,a.$connector.activeItem=e)}))})),a.$connector.doDeselection=e((function(e,t){if(!("NONE"===y||!e.length||t&&a.hasAttribute("disabled"))){for(var n=a.selectedItems.slice();e.length;){for(var i=e.shift(),o=0;o<n.length;o++){var r=n[o];if(i&&i.key===r.key){n.splice(o,1);break}}i&&(delete _[i.key],t&&(delete i.selected,a.$server.deselect(i.key)))}a.selectedItems=n}})),a.__activeItemChanged=e((function(e,t){"SINGLE"==y&&(e?_[e.key]||a.$connector.doSelection([e],!0):t&&_[t.key]&&(a.$connector.deselectAllowed?a.$connector.doDeselection([t],!0):a.activeItem=t))})),a._createPropertyObserver("activeItem","__activeItemChanged",!0),a.__activeItemChangedDetails=e((function(e,t){w&&(null==e&&void 0===t||(e&&!e.detailsOpened?a.$server.setDetailsVisible(e.key):a.$server.setDetailsVisible(null)))})),a._createPropertyObserver("activeItem","__activeItemChangedDetails",!0),a.$connector.setDetailsVisibleOnClick=e((function(e){w=e})),a.$connector._getPageIfSameLevel=e((function(e,t,n){var i=a._cache.getCacheAndIndex(t),o=i.cache.parentItem;return e!==(o?a.getItemId(o):g)?n:a._getPageForIndex(i.scaledIndex)})),a.$connector.getCacheByKey=e((function(e){var t=a._cache.getCacheAndIndexByKey(e);if(t)return t.cache})),a.$connector.flushEnsureSubCache=e((function(){for(var e=v.splice(0,1)[0],t=e.itemkey,n=a._virtualStart,i=a._virtualEnd,o=i-n,r=Math.max(0,n+a._vidxOffset-o),s=Math.min(i+a._vidxOffset+o,a._effectiveSize),l=r;l<=s;l++){var h=a._cache.getItemForIndex(l);if(a.getItemId(h)===t){if(a._isExpanded(h))return e.cache.doEnsureSubCacheForScaledIndex(e.scaledIndex),!0;break}}return!1})),a.$connector.flushParentRequests=e((function(){var e=f.splice(0,20);return!!e.length&&(a.$server.setParentRequestedRanges(e),!0)})),a.$connector.beforeParentRequest=e((function(e,t,o){f.push({firstIndex:e,size:t,parentKey:o}),l=n.debounce(l,i.after(50),()=>{for(;f.length;)a.$connector.flushParentRequests()})})),a.$connector.fetchPage=e((function(e,t,n){for(var i=a._virtualStart,o=a._virtualEnd,r=o-i,s=Math.max(0,i+a._vidxOffset-r),l=Math.min(o+a._vidxOffset+r,a._effectiveSize),h=t,c=t,d=s;d<=l;d++)h=Math.min(h,a.$connector._getPageIfSameLevel(n,d,h)),c=Math.max(c,a.$connector._getPageIfSameLevel(n,d,c));var p=Math.max(0,h),u=n!==g?c:Math.min(c,Math.floor(a.size/a.pageSize)),f=m[n];if(f||(f=[-1,-1]),f[0]!=p||f[1]!=u){f=[p,u],m[n]=f;var v=u-p+1;e(p*a.pageSize,v*a.pageSize)}})),a.dataProvider=e((function(e,t){if(e.pageSize!=a.pageSize)throw"Invalid pageSize";var o=e.page;if(e.parentItem){var r=a.getItemId(e.parentItem);p[r]||(p[r]={});var s=a.$connector.getCacheByKey(r),l=s&&s.itemkeyCaches?s.itemkeyCaches[r]:void 0;u[r]&&u[r][o]&&l?(o=Math.min(o,Math.floor(u[r].size/a.pageSize)),t(u[r][o],u[r].size)):p[r][o]=t,a.$connector.fetchPage((t,n)=>a.$connector.beforeParentRequest(t,n,e.parentItem.key),o,r)}else o=Math.min(o,Math.floor(a.size/a.pageSize)),u[g]&&u[g][o]?t(u[g][o]):d[o]=t,c=n.debounce(c,i.after(a._hasData?150:0),()=>{a.$connector.fetchPage((e,t)=>a.$server.setRequestedRange(e,t),o,g)})}));var M=e((function(e,t){void 0===t||z||a.$server.sortersChanged(a._sorters.map((function(e){return{path:e.path,direction:e.direction}})))}));a.$connector.setSorterDirections=e((function(t){z=!0,setTimeout(e(()=>{try{var e=Array.from(a.querySelectorAll("vaadin-grid-sorter"));e.forEach(e=>{t.filter(t=>t.column===e.getAttribute("path"))[0]||(e.direction=null)}),t.reverse().forEach(({column:t,direction:a})=>{e.forEach(e=>{e.getAttribute("path")===t&&e.direction!==a&&(e.direction=a)})})}finally{z=!1}}))})),a._createPropertyObserver("_previousSorters",M),a._updateItem=e((function(e,t){r.prototype._updateItem.call(a,e,t),e.hidden||Array.from(e.children).forEach(e=>{e._instance&&e._instance.children&&Array.from(e._instance.children).forEach(e=>{e._attachRenderedComponentIfAble&&e._attachRenderedComponentIfAble(),e.children&&Array.from(e.children).forEach(e=>{e._attachRenderedComponentIfAble&&e._attachRenderedComponentIfAble()})})})})),a._expandedInstanceChangedCallback=e((function(e,t){if(null!=e.item&&null!=a.$server.updateExpandedState){var n=a.getItemId(e.item);if(a.$server.updateExpandedState(n,t),t)this.expandItem(e.item);else{delete u[n];var i=a.$connector.getCacheByKey(n);i&&i.itemkeyCaches&&i.itemkeyCaches[n]&&delete i.itemkeyCaches[n],i&&i.itemkeyCaches&&Object.keys(i.itemCaches).filter(e=>i.items[e].key===n).forEach(e=>delete i.itemCaches[e]),delete m[n],this.collapseItem(e.item)}}}));var x=function(e){if(!e||!Array.isArray(e))throw"Attempted to call itemsUpdated with an invalid value: "+JSON.stringify(e);for(var t=Array.from(a.detailsOpenedItems),n=!1,i=0;i<e.length;++i){var o=e[i];o&&(o.detailsOpened?a._getItemIndexInArray(o,t)<0&&t.push(o):a._getItemIndexInArray(o,t)>=0&&t.splice(a._getItemIndexInArray(o,t),1),_[o.key]&&(_[o.key]=o,o.selected=!0,n=!0))}a.detailsOpenedItems=t,n&&(a.selectedItems=Object.keys(_).map((function(e){return _[e]})))},A=function(e,t){var n;if((t||g)!==g){n=u[t][e];var i=a.$connector.getCacheByKey(t);if(i&&i.itemkeyCaches){var o=i.itemkeyCaches[t],r=p[t],s=r&&r[e];C(e,n,s,o)}}else n=u[g][e],C(e,n,d[e],a._cache);return n},C=function(e,t,n,i){if(!n){var o=e*a.pageSize,r=o+a.pageSize;if(t){if(i&&i.items)for(var s=o;s<r;s++)i.items[s]&&(i.items[s]=t[s-o])}else if(i&&i.items)for(var l=o;l<r;l++)delete i.items[l]}},S=function(){a._cache.updateSize(),a._effectiveSize=a._cache.effectiveSize,a._assignModels()},k=function(e){if(e&&a._physicalItems){var t=e.map(e=>e.key),n=a._physicalItems.map((e,a)=>e._item&&e._item.key&&t.indexOf(e._item.key)>-1?a:null).filter(e=>null!==e);n.length>0&&a._assignModels(n)}};a.$connector.set=e((function(e,t,n){if(e%a.pageSize!=0)throw"Got new data to index "+e+" which is not aligned with the page size of "+a.pageSize;for(var i=n||g,o=e/a.pageSize,r=Math.ceil(t.length/a.pageSize),s=0;s<r;s++){var l=o+s,h=t.slice(s*a.pageSize,(s+1)*a.pageSize);u[i]||(u[i]={}),u[i][l]=h,a.$connector.doSelection(h.filter(e=>e.selected&&!I(e))),a.$connector.doDeselection(h.filter(e=>!e.selected&&(_[e.key]||I(e))));var c=A(l,i);c&&(x(c),k(c))}}));var E=function(e){var t=e.parentUniqueKey||g;if(u[t])for(var n in u[t])for(var i in u[t][n])if(a.getItemId(u[t][n][i])===a.getItemId(e))return{page:n,index:i,parentKey:t};return null};a.$connector.updateHierarchicalData=e((function(e){for(var t=[],a=0;a<e.length;a++){var n=E(e[a]);if(n){u[n.parentKey][n.page][n.index]=e[a];var i=n.parentKey+":"+n.page;t[i]||(t[i]={parentKey:n.parentKey,page:n.page})}}for(var o=Object.keys(t),r=0;r<o.length;r++){var s=t[o[r]],l=A(s.page,s.parentKey);l&&(x(l),k(l))}})),a.$connector.updateFlatData=e((function(e){for(var t=0;t<e.length;t++){var n=E(e[t]);if(n){u[n.parentKey][n.page][n.index]=e[t];var i=parseInt(n.page)*a.pageSize+parseInt(n.index);a._cache.items[i]&&(a._cache.items[i]=e[t])}}x(e),k(e)})),a.$connector.clearExpanded=e((function(){a.expandedItems=[],v=[],f=[]})),a.$connector.clear=e((function(e,t,n){var i=n||g;if(u[i]&&0!==Object.keys(u[i]).length){if(e%a.pageSize!=0)throw"Got cleared data for index "+e+" which is not aligned with the page size of "+a.pageSize;for(var o=Math.floor(e/a.pageSize),r=Math.ceil(t/a.pageSize),s=0;s<r;s++){var l=o+s,h=u[i][l];a.$connector.doDeselection(h.filter(e=>_[e.key])),delete u[i][l];var c=A(l,n);c&&x(c),k(h)}var d=a._cache;if(n){var p=a._cache.getCacheAndIndexByKey(i);d=p.cache.itemCaches[p.scaledIndex]}for(var f=e+r*a.pageSize,v=e;v<f;v++){delete d.items[v];var m=d.itemCaches[v];delete d.itemCaches[v];var b=m&&m.parentItem.key;b&&delete d.itemkeyCaches[b]}a._cache.updateSize()}}));var I=function(e){for(var t=a.selectedItems,n=0;n<t;n++){if(t[n].key===e.key)return!0}return!1};a.$connector.reset=e((function(){a.size=0,O(u),O(a._cache.items),O(m),h&&h.cancel(),l&&l.cancel(),c&&c.cancel(),h=void 0,l=void 0,v=[],f=[],S()}));var O=e=>Object.keys(e).forEach(t=>delete e[t]);a.$connector.updateSize=e=>a.size=e,a.$connector.updateUniqueItemIdPath=e=>a.itemIdPath=e,a.$connector.expandItems=e((function(e){var t=Array.from(a.expandedItems);e.filter(e=>!a._isExpanded(e)).forEach(e=>t.push(e)),a.expandedItems=t})),a.$connector.collapseItems=e((function(e){var t=Array.from(a.expandedItems);e.forEach(e=>{var n=a._getItemIndexInArray(e,t);n>=0&&t.splice(n,1)}),a.expandedItems=t,e.forEach(e=>a.$connector.removeFromQueue(e))})),a.$connector.removeFromQueue=e((function(e){var t=a.getItemId(e);delete p[t],a.$connector.removeFromArray(v,e=>e.itemkey===t),a.$connector.removeFromArray(f,e=>e.parentKey===t)})),a.$connector.removeFromArray=e((function(e,t){if(e.length)for(var a=e.length-1;a--;)t(e[a])&&e.splice(a,1)})),a.$connector.confirmParent=e((function(e,t,n){if(p[t]){u[t]&&(u[t].size=n);for(var i=Object.getOwnPropertyNames(p[t]),o=0;o<i.length;o++){var r=i[o],s=m[t]||[0,0],l=p[t][r];if(u[t]&&u[t][r]||r<s[0]||r>s[1])delete p[t][r],l(u[t][r]||new Array(n),n);else l&&0===n&&(delete p[t][r],l([],n))}a.$server.confirmParentUpdate(e,t),a.loading||a._assignModels()}})),a.$connector.confirm=e((function(e){for(var t=Object.getOwnPropertyNames(d),n=0;n<t.length;n++){var i=t[n],o=m[g]||[0,0],r=a.size?Math.ceil(a.size/a.pageSize)-1:0,s=Math.min(o[1],r),l=d[i];u[g]&&u[g][i]||i<o[0]||+i>s?(delete d[i],l(u[g][i]||new Array(a.pageSize)),a._debounceIncreasePool&&a._debounceIncreasePool.flush()):l&&0===a.size&&(delete d[i],l([]))}a.$server.confirmUpdate(e)})),a.$connector.ensureHierarchy=e((function(){for(var e in u)e!==g&&delete u[e];O(m),a._cache.itemCaches={},a._cache.itemkeyCaches={},S()})),a.$connector.setSelectionMode=e((function(e){if(!(("string"==typeof e||e instanceof String)&&b.indexOf(e)>=0))throw"Attempted to set an invalid selection mode";y=e,_={}})),a.$connector.deselectAllowed=!0,a.$connector.setVerticalScrollingEnabled=e((function(e){T(a.$.table,e),a.notifyResize()}));var T=function(t,a){t.style.overflowY=a?"":"hidden",t.removeEventListener("wheel",t.__wheelListener),!a&&t.addEventListener("wheel",t.__wheelListener=e(e=>{e.deltaX?Object.defineProperty(e,"deltaY",{value:0}):e.stopImmediatePropagation()}))};a.addEventListener("vaadin-context-menu-before-open",e((function(e){!function(e){var t=a.getEventContext(e),n=t.item&&t.item.key,i=t.column&&t.column.id;a.$server.updateContextMenuTargetItem(n,i)}(a.$contextMenuConnector.openEvent)}))),a.getContextMenuBeforeOpenDetail=e((function(e){var t=a.getEventContext(e);return{key:t.item&&t.item.key||""}})),a.addEventListener("cell-activate",e(e=>{a.$connector.activeItem=e.detail.model.item,setTimeout(()=>a.$connector.activeItem=void 0)})),a.addEventListener("click",e(e=>L(e,"item-click"))),a.addEventListener("dblclick",e(e=>L(e,"item-double-click"))),a.addEventListener("column-resize",e(e=>{a._getColumnsInOrder().filter(e=>!e.hidden).forEach(e=>{e.dispatchEvent(new CustomEvent("column-drag-resize"))}),a.dispatchEvent(new CustomEvent("column-drag-resize",{detail:{resizedColumnKey:e.detail.resizedColumn._flowId}}))})),a.addEventListener("column-reorder",e(e=>{var t=a._columnTree.slice(0).pop().filter(e=>e._flowId).sort((e,t)=>e._order-t._order).map(e=>e._flowId);a.dispatchEvent(new CustomEvent("column-reorder-all-columns",{detail:{columns:t}}))})),a.cellClassNameGenerator=e((function(e,t){var a=t.item.style;if(a)return(a.row||"")+" "+(e&&a[e._flowId]||"")})),a.dropFilter=e(e=>!e.item.dropDisabled),a.dragFilter=e(e=>!e.item.dragDisabled),a.addEventListener("grid-dragstart",e(e=>{a._isSelected(e.detail.draggedItems[0])?(a.__selectionDragData?Object.keys(a.__selectionDragData).forEach(t=>{e.detail.setDragData(t,a.__selectionDragData[t])}):(a.__dragDataTypes||[]).forEach(t=>{e.detail.setDragData(t,e.detail.draggedItems.map(e=>e.dragData[t]).join("\n"))}),a.__selectionDraggedItemsCount>1&&e.detail.setDraggedItemsCount(a.__selectionDraggedItemsCount)):(a.__dragDataTypes||[]).forEach(t=>{e.detail.setDragData(t,e.detail.draggedItems[0].dragData[t])})}))}function L(e,t){if(a.$connector.activeItem){e.itemKey=a.$connector.activeItem.key;var n=a.getEventContext(e);n.column&&(e.internalColumnId=n.column._flowId),a.dispatchEvent(new CustomEvent(t,{detail:e}))}}}))(a)}}()},function(e,t,a){"use strict";a(41),a(32),a(47),a(302),a(176);var n=a(6).a`<dom-module id="lumo-combo-box-overlay" theme-for="vaadin-combo-box-overlay">
  <template>
    <style include="lumo-overlay lumo-menu-overlay-core">
      [part="content"] {
        padding: 0;
      }

      :host {
        /* TODO: using a legacy mixin (unsupported) */
        --iron-list-items-container: {
          border-width: var(--lumo-space-xs);
          border-style: solid;
          border-color: transparent;
        };
      }

      /* TODO: workaround ShadyCSS issue when using inside of the dom-if */
      :host([opened]) {
        --iron-list-items-container_-_border-width: var(--lumo-space-xs);
        --iron-list-items-container_-_border-style: solid;
        --iron-list-items-container_-_border-color: transparent;
      }

      /* Loading state */

      /* When items are empty, the sinner needs some room */
      :host(:not([closing])) [part~="content"] {
        min-height: calc(2 * var(--lumo-space-s) + var(--lumo-icon-size-s));
      }

      [part~="overlay"] {
        position: relative;
      }

      :host([loading]) [part~="loader"] {
        box-sizing: border-box;
        width: var(--lumo-icon-size-s);
        height: var(--lumo-icon-size-s);
        position: absolute;
        z-index: 1;
        left: var(--lumo-space-s);
        right: var(--lumo-space-s);
        top: var(--lumo-space-s);
        margin-left: auto;
        margin-inline-start: auto;
        margin-inline-end: 0;
        border: 2px solid transparent;
        border-color:
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color-50pct)
          var(--lumo-primary-color)
          var(--lumo-primary-color);
        border-radius: calc(0.5 * var(--lumo-icon-size-s));
        opacity: 0;
        animation:
          1s linear infinite lumo-combo-box-loader-rotate,
          .3s .1s lumo-combo-box-loader-fade-in both;
        pointer-events: none;
      }

      @keyframes lumo-combo-box-loader-fade-in {
        0% {
          opacity: 0;
        }

        100% {
          opacity: 1;
        }
      }

      @keyframes lumo-combo-box-loader-rotate {
        0% {
          transform: rotate(0deg);
        }

        100% {
          transform: rotate(360deg);
        }
      }

      /* RTL specific styles */

      :host([loading][dir="rtl"]) [part~="loader"] {
        left: auto;
        margin-left: 0;
        margin-right: auto;
        margin-inline-start: 0;
        margin-inline-end: auto;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content)},function(e,t,a){"use strict";a(41),a(32),a(47),a(199);var n=a(6).a`<dom-module id="lumo-combo-box-item" theme-for="vaadin-combo-box-item">
  <template>
    <style include="lumo-item">
      /* TODO partly duplicated from vaadin-list-box styles. Should find a way to make it DRY */

      :host {
        cursor: default;
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        padding-left: calc(var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        transition: background-color 100ms;
        border-radius: var(--lumo-border-radius);
        overflow: hidden;
        --_lumo-item-selected-icon-display: block;
      }

      /* ShadyCSS workaround (show the selected item checkmark) */
      :host::before {
        display: block;
      }

      :host(:hover) {
        background-color: var(--lumo-primary-color-10pct);
      }

      :host([focused]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        :host(:hover) {
          background-color: transparent;
        }

        :host([focused]:not([disabled])) {
          box-shadow: none;
        }
      }

      /* RTL specific styles */
      :host([dir="rtl"]) {
        padding-right: calc(var(--lumo-border-radius) / 4);
        padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content)},function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
var n=e=>class extends e{static get properties(){return{_hasVaadinItemMixin:{value:!0},disabled:{type:Boolean,value:!1,observer:"_disabledChanged",reflectToAttribute:!0},selected:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_selectedChanged"},_value:String}}get value(){return void 0!==this._value?this._value:this.textContent.trim()}set value(e){this._value=e}ready(){super.ready();var e=this.getAttribute("value");null!==e&&(this.value=e),this.addEventListener("focus",e=>this._setFocused(!0),!0),this.addEventListener("blur",e=>this._setFocused(!1),!0),this.addEventListener("mousedown",e=>{this._setActive(this._mousedown=!0);var t=()=>{this._setActive(this._mousedown=!1),document.removeEventListener("mouseup",t)};document.addEventListener("mouseup",t)}),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("keyup",e=>this._onKeyup(e))}disconnectedCallback(){super.disconnectedCallback(),this.hasAttribute("active")&&this._setFocused(!1)}_selectedChanged(e){this.setAttribute("aria-selected",e)}_disabledChanged(e){e?(this.selected=!1,this.setAttribute("aria-disabled","true"),this.blur()):this.removeAttribute("aria-disabled")}_setFocused(e){e?(this.setAttribute("focused",""),this._mousedown||this.setAttribute("focus-ring","")):(this.removeAttribute("focused"),this.removeAttribute("focus-ring"),this._setActive(!1))}_setActive(e){e?this.setAttribute("active",""):this.removeAttribute("active")}_onKeydown(e){/^( |SpaceBar|Enter)$/.test(e.key)&&!e.defaultPrevented&&(e.preventDefault(),this._setActive(!0))}_onKeyup(e){this.hasAttribute("active")&&(this._setActive(!1),this.click())}}},function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));var n=a(24),i=a(115),o=a(13),r=a(11),s=e=>class extends e{static get properties(){return{_hasVaadinListMixin:{value:!0},selected:{type:Number,reflectToAttribute:!0,notify:!0},orientation:{type:String,reflectToAttribute:!0,value:""},items:{type:Array,readOnly:!0,notify:!0},_searchBuf:{type:String,value:""}}}static get observers(){return["_enhanceItems(items, orientation, selected, disabled)"]}ready(){super.ready(),this.addEventListener("keydown",e=>this._onKeydown(e)),this.addEventListener("click",e=>this._onClick(e)),this._observer=new n.a(this,e=>{this._setItems(this._filterItems(Array.from(this.children)))})}_enhanceItems(e,t,a,n){if(!n&&e){this.setAttribute("aria-orientation",t||"vertical"),this.items.forEach(e=>{t?e.setAttribute("orientation",t):e.removeAttribute("orientation"),e.updateStyles()}),this._setFocusable(a);var i=e[a];e.forEach(e=>e.selected=e===i),i&&!i.disabled&&this._scrollToItem(a)}}get focused(){return this.getRootNode().activeElement}_filterItems(e){return e.filter(e=>e._hasVaadinItemMixin)}_onClick(e){if(!(e.metaKey||e.shiftKey||e.ctrlKey||e.defaultPrevented)){var t,a=this._filterItems(e.composedPath())[0];a&&!a.disabled&&(t=this.items.indexOf(a))>=0&&(this.selected=t)}}_searchKey(e,t){this._searchReset=o.a.debounce(this._searchReset,r.d.after(500),()=>this._searchBuf=""),this._searchBuf+=t.toLowerCase();this.items.some(e=>0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))||(this._searchBuf=t.toLowerCase());var a=1===this._searchBuf.length?e+1:e;return this._getAvailableIndex(a,1,e=>!(e.disabled||this._isItemHidden(e))&&0===e.textContent.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().indexOf(this._searchBuf))}get _isRTL(){return!this._vertical&&"rtl"===this.getAttribute("dir")}_onKeydown(e){if(!e.metaKey&&!e.ctrlKey){var t=e.key.replace(/^Arrow/,""),a=this.items.indexOf(this.focused);if(/[a-zA-Z0-9]/.test(t)&&1===t.length){var n=this._searchKey(a,t);n>=0&&this._focus(n)}else{var i,o,r=this._isRTL?-1:1;this._vertical&&"Up"===t||!this._vertical&&"Left"===t?(o=-r,i=a-r):this._vertical&&"Down"===t||!this._vertical&&"Right"===t?(o=r,i=a+r):"Home"===t?(o=1,i=0):"End"===t&&(o=-1,i=this.items.length-1),(i=this._getAvailableIndex(i,o,e=>!(e.disabled||this._isItemHidden(e))))>=0&&(this._focus(i),e.preventDefault())}}}_getAvailableIndex(e,t,a){for(var n=this.items.length,i=0;"number"==typeof e&&i<n;i++,e+=t||1){if(e<0?e=n-1:e>=n&&(e=0),a(this.items[e]))return e}return-1}_isItemHidden(e){return"none"===getComputedStyle(e).display}_setFocusable(e){e=this._getAvailableIndex(e,1,e=>!e.disabled);var t=this.items[e]||this.items[0];this.items.forEach(e=>e.tabIndex=e===t?0:-1)}_focus(e){var t=this.items[e];this.items.forEach(e=>e.focused=e===t),this._setFocusable(e),this._scrollToItem(e),t.focus()}focus(){this._observer&&this._observer.flush();var e=this.querySelector('[tabindex="0"]')||(this.items?this.items[0]:null);e&&e.focus()}get _scrollerElement(){}_scrollToItem(e){var t=this.items[e];if(t){var a=this._vertical?["top","bottom"]:this._isRTL?["right","left"]:["left","right"],n=this._scrollerElement.getBoundingClientRect(),i=(this.items[e+1]||t).getBoundingClientRect(),o=(this.items[e-1]||t).getBoundingClientRect(),r=0;!this._isRTL&&i[a[1]]>=n[a[1]]||this._isRTL&&i[a[1]]<=n[a[1]]?r=i[a[1]]-n[a[1]]:(!this._isRTL&&o[a[0]]<=n[a[0]]||this._isRTL&&o[a[0]]>=n[a[0]])&&(r=o[a[0]]-n[a[0]]),this._scroll(r)}}get _vertical(){return"horizontal"!==this.orientation}_scroll(e){if(this._vertical)this._scrollerElement.scrollTop+=e;else{var t=i.a.detectScrollType(),a=i.a.getNormalizedScrollLeft(t,this.getAttribute("dir")||"ltr",this._scrollerElement)+e;i.a.setNormalizedScrollLeft(t,this.getAttribute("dir")||"ltr",this._scrollerElement,a)}}}},function(e,t,a){"use strict";var n=a(84),i=document.createElement("template");
/**
@license
Copyright (c) 2019 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/i.innerHTML='<dom-module id="vaadin-date-picker-text-field-styles" theme-for="vaadin-date-picker-text-field">\n  <template>\n    <style>\n      :host([dir="rtl"]) [part="input-field"] {\n        direction: ltr;\n      }\n\n      :host([dir="rtl"]) [part="value"]::placeholder {\n        direction: rtl;\n        text-align: left;\n      }\n\n      :host([dir="rtl"]) [part="input-field"] ::slotted(input)::placeholder {\n        direction: rtl;\n        text-align: left;\n      }\n\n      :host([dir="rtl"]) [part="value"]:-ms-input-placeholder,\n      :host([dir="rtl"]) [part="input-field"] ::slotted(input):-ms-input-placeholder {\n        direction: rtl;\n        text-align: left;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(i.content);class o extends n.a{static get is(){return"vaadin-date-picker-text-field"}}customElements.define(o.is,o)},function(e,t,a){"use strict";a(9),a(75);var n,i=a(84),o=a(55),r=a(6).a`<custom-style>
  <style>
    @font-face {
      font-family: 'vaadin-password-field-icons';
      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAYMAAsAAAAABcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABPUy8yAAABCAAAAGAAAABgDxIFgGNtYXAAAAFoAAAAVAAAAFQXVtKIZ2FzcAAAAbwAAAAIAAAACAAAABBnbHlmAAABxAAAAfwAAAH8yBLEP2hlYWQAAAPAAAAANgAAADYN+RfTaGhlYQAAA/gAAAAkAAAAJAfCA8dobXR4AAAEHAAAABgAAAAYDgAAAGxvY2EAAAQ0AAAADgAAAA4BJgCSbWF4cAAABEQAAAAgAAAAIAAMAFpuYW1lAAAEZAAAAYYAAAGGmUoJ+3Bvc3QAAAXsAAAAIAAAACAAAwAAAAMDVQGQAAUAAAKZAswAAACPApkCzAAAAesAMwEJAAAAAAAAAAAAAAAAAAAAARAAAAAAAAAAAAAAAAAAAAAAQAAA6QEDwP/AAEADwABAAAAAAQAAAAAAAAAAAAAAIAAAAAAAAwAAAAMAAAAcAAEAAwAAABwAAwABAAAAHAAEADgAAAAKAAgAAgACAAEAIOkB//3//wAAAAAAIOkA//3//wAB/+MXBAADAAEAAAAAAAAAAAAAAAEAAf//AA8AAQAAAAAAAAAAAAIAADc5AQAAAAABAAAAAAAAAAAAAgAANzkBAAAAAAEAAAAAAAAAAAACAAA3OQEAAAAAAwAAAHoEAALGABQAJABFAAABIg4CMTAeAjMyPgIxMC4CIwc+ATEwBhUUFjEHMCY1NDYTIi4CJz4BNw4BFRQeAjMyPgI1NCYnHgEXDgMjAgChyHAnN3rAiYjFfjsncMihrRg7IA1GExmnY5ZqQg8PWGAFCChGXTU1XUYoCAVgWA8RRW2ZZALGZnpmUmJSUGBQaHxoYA8FRSIhJQ0rIiYz/lQvQkYVInswEygYNV1GKChGXTUYKBMrgCIVRkIvAAAABQAA/8AEAAPAABoAJgA6AEcAVwAAAQceARcOAyMiJicHHgEzMj4CMTAuAicHNCYnATIWMzI+AhMBLgEjIg4CMTAeAhcHFTMBNQEuASc+ATcOARUUFhc3BzAmNTQ2MT4BMTAGFQYWAzo0UlMPEUVtmWQiNR0zJ1QsiMV+OxEsTTw6AgT+zA8dDjVdRijT/ucnXjWhyHAnGTNQN9MtA9P9AE1ZFA9YYAUILSY6QBMZGDsgBAsCczMrcyIWQ0AtCAQzDgtQYFAzS1ckeQ4bCv7TBihGXQH7/uYKEGZ6Zic5RBzNLQPTLf0tIVoYInswEygYNWMihgwrISc5DwVHJiIlAAEAAAAAAADkyo21Xw889QALBAAAAAAA1W1pqwAAAADVbWmrAAD/wAQAA8AAAAAIAAIAAAAAAAAAAQAAA8D/wAAABAAAAAAABAAAAQAAAAAAAAAAAAAAAAAAAAYEAAAAAAAAAAAAAAACAAAABAAAAAQAAAAAAAAAAAoAFAAeAH4A/gAAAAEAAAAGAFgABQAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAOAK4AAQAAAAAAAQAHAAAAAQAAAAAAAgAHAGAAAQAAAAAAAwAHADYAAQAAAAAABAAHAHUAAQAAAAAABQALABUAAQAAAAAABgAHAEsAAQAAAAAACgAaAIoAAwABBAkAAQAOAAcAAwABBAkAAgAOAGcAAwABBAkAAwAOAD0AAwABBAkABAAOAHwAAwABBAkABQAWACAAAwABBAkABgAOAFIAAwABBAkACgA0AKRpY29tb29uAGkAYwBvAG0AbwBvAG5WZXJzaW9uIDEuMABWAGUAcgBzAGkAbwBuACAAMQAuADBpY29tb29uAGkAYwBvAG0AbwBvAG5pY29tb29uAGkAYwBvAG0AbwBvAG5SZWd1bGFyAFIAZQBnAHUAbABhAHJpY29tb29uAGkAYwBvAG0AbwBvAG5Gb250IGdlbmVyYXRlZCBieSBJY29Nb29uLgBGAG8AbgB0ACAAZwBlAG4AZQByAGEAdABlAGQAIABiAHkAIABJAGMAbwBNAG8AbwBuAC4AAAADAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA) format('woff');
      font-weight: normal;
      font-style: normal;
    }
  </style>
</custom-style><dom-module id="vaadin-password-field-template">
  <template>
    <style>
      /* Hide the native eye icon for IE/Edge */
      ::-ms-reveal {
        display: none;
      }

      [part="reveal-button"][hidden] {
        display: none !important;
      }
    </style>

    <div part="reveal-button" on-mousedown="_revealButtonMouseDown" on-touchend="_togglePasswordVisibilityTouchend" on-click="_togglePasswordVisibility" hidden\$="[[revealButtonHidden]]">
    </div>
  </template>
  
</dom-module>`;document.head.appendChild(r.content);class s extends i.a{static get is(){return"vaadin-password-field"}static get version(){return"2.8.6"}static get properties(){return{revealButtonHidden:{type:Boolean,value:!1},passwordVisible:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_passwordVisibleChange",readOnly:!0}}}static get template(){if(!n){n=super.template.cloneNode(!0);var e=o.a.import(this.is+"-template","template"),t=e.content.querySelector('[part="reveal-button"]'),a=e.content.querySelector("style");n.content.querySelector('[part="input-field"]').appendChild(t),n.content.appendChild(a)}return n}ready(){super.ready(),this.inputElement.type="password",this.inputElement.autocapitalize="off",this.addEventListener("focusout",()=>{this._passwordVisibilityChanging||(this._setPasswordVisible(!1),this._cachedChangeEvent&&this._onChange(this._cachedChangeEvent))})}_onChange(e){this.querySelector(`${this._slottedTagName}[slot="${this._slottedTagName}"]`)&&e.stopPropagation(),this._passwordVisibilityChanging?this._cachedChangeEvent=e:(this._cachedChangeEvent=null,super._onChange(e))}_revealButtonMouseDown(e){this.hasAttribute("focused")&&e.preventDefault()}_togglePasswordVisibilityTouchend(e){e.preventDefault(),this._togglePasswordVisibility(),this.inputElement.focus()}_togglePasswordVisibility(){this._passwordVisibilityChanging=!0,this.inputElement.blur(),this._setPasswordVisible(!this.passwordVisible),this.inputElement.focus(),this._passwordVisibilityChanging=!1}_passwordVisibleChange(e){this.inputElement.type=e?"text":"password"}}customElements.define(s.is,s)},function(e,t,a){"use strict";var n=a(9),i=a(17),o=a(22),r=a(150),s=(a(123),a(6));
/**
@license
Vaadin Login
Copyright (C) 2018 Vaadin Ltd
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class l extends(Object(r.a)(Object(o.a)(Object(i.a)(n.a)))){static get template(){return s.a`
    <style>
      :host {
        overflow: hidden;
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="form"] {
        flex: 1;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;
      }

      [part="form-title"] {
        margin: 0;
      }

      [part="error-message"] {
        position: relative;
      }
    </style>
      <section part="form">
        <h2 part="form-title">[[i18n.form.title]]</h2>
        <div part="error-message" hidden\$="[[!error]]">
          <h5 part="error-message-title">[[i18n.errorMessage.title]]</h5>
          <p part="error-message-description">[[i18n.errorMessage.message]]</p>
        </div>

        <slot name="form">
        </slot>

        <vaadin-button id="forgotPasswordButton" theme="tertiary small forgot-password" on-click="_forgotPassword" hidden\$="[[noForgotPassword]]">[[i18n.form.forgotPassword]]</vaadin-button>

        <div part="footer">
          <p>[[i18n.additionalInformation]]</p>
        </div>
      </section>
`}static get is(){return"vaadin-login-form-wrapper"}_forgotPassword(){this.dispatchEvent(new CustomEvent("forgot-password"))}}customElements.define(l.is,l)},function(e,t,a){"use strict";var n=a(9),i=a(17),o=a(160),r=a(162),s=(a(236),a(6)),l=a(95);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class h extends(Object(i.a)(Object(r.a)(Object(o.a)(n.a)))){static get template(){return s.a`
    <style>
      :host([opened]) {
        pointer-events: auto;
      }
    </style>

    <slot></slot>

    <vaadin-combo-box-dropdown-wrapper id="overlay" opened="[[opened]]" position-target="[[inputElement]]" renderer="[[renderer]]" _focused-index="[[_focusedIndex]]" _item-id-path="[[itemIdPath]]" _item-label-path="[[itemLabelPath]]" loading="[[loading]]" theme="[[theme]]">
    </vaadin-combo-box-dropdown-wrapper>
`}static get is(){return"vaadin-combo-box-light"}static get properties(){return{attrForValue:{type:String,value:"value"},inputElement:{type:Element,readOnly:!0}}}constructor(){super(),this._boundInputValueChanged=this._inputValueChanged.bind(this),this.__boundInputValueCommitted=this.__inputValueCommitted.bind(this)}ready(){super.ready(),this._toggleElement=this.querySelector(".toggle-button"),this._clearElement=this.querySelector(".clear-button"),this._clearElement&&this._clearElement.addEventListener("mousedown",e=>{e.preventDefault(),(this.inputElement._focusableElement||this.inputElement).focus()})}get focused(){return this.getRootNode().activeElement===this.inputElement}connectedCallback(){super.connectedCallback();this._setInputElement(this.querySelector("vaadin-text-field,iron-input,paper-input,.paper-input-input,.input")),this._revertInputValue(),this.inputElement.addEventListener("input",this._boundInputValueChanged),this.inputElement.addEventListener("change",this.__boundInputValueCommitted),this._preventInputBlur()}disconnectedCallback(){super.disconnectedCallback(),this.inputElement.removeEventListener("input",this._boundInputValueChanged),this.inputElement.removeEventListener("change",this.__boundInputValueCommitted),this._restoreInputBlur()}__inputValueCommitted(e){e.__fromClearButton&&this._clear()}get _propertyForValue(){return Object(l.b)(this.attrForValue)}get _inputElementValue(){return this.inputElement&&this.inputElement[this._propertyForValue]}set _inputElementValue(e){this.inputElement&&(this.inputElement[this._propertyForValue]=e)}}customElements.define(h.is,h)},,,,,,,,,,,,,,,function(e,t,a){"use strict";var n=a(9),i=(a(251),a(17)),o=a(65),r=a(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class s extends(Object(i.a)(Object(o.a)(n.a))){static get template(){return r.a`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
         display: none;
      }
    </style>
    <div part="content" id="content"></div>
`}static get is(){return"vaadin-combo-box-item"}static get properties(){return{index:Number,item:Object,label:String,selected:{type:Boolean,value:!1,reflectToAttribute:!0},focused:{type:Boolean,value:!1,reflectToAttribute:!0},_itemTemplateInstance:Object,renderer:Function,_oldRenderer:Function}}static get observers(){return["_rendererOrItemChanged(renderer, index, item.*)","_updateLabel(label, _itemTemplateInstance)",'_updateTemplateInstanceVariable("index", index, _itemTemplateInstance)','_updateTemplateInstanceVariable("item", item, _itemTemplateInstance)','_updateTemplateInstanceVariable("selected", selected, _itemTemplateInstance)','_updateTemplateInstanceVariable("focused", focused, _itemTemplateInstance)']}connectedCallback(){if(super.connectedCallback(),!this._itemTemplateInstance){var e=this.getRootNode().host.getRootNode().host.__dataHost.getRootNode().host;this._comboBox=e.getRootNode().host,this._comboBox._ensureTemplatized(),this._comboBox._TemplateClass&&(this._itemTemplateInstance=new this._comboBox._TemplateClass({}),this.$.content.textContent="",this.$.content.appendChild(this._itemTemplateInstance.root))}var t=this._comboBox.getAttribute("dir");t&&this.setAttribute("dir",t)}_render(){if(this.renderer){var e={index:this.index,item:this.item};this.renderer(this.$.content,this._comboBox,e)}}_rendererOrItemChanged(e,t,a){void 0!==a&&void 0!==t&&(this._oldRenderer!==e&&(this.$.content.innerHTML=""),e&&(this._oldRenderer=e,this._render()))}_updateLabel(e,t){void 0===t&&this.$.content&&!this.renderer&&(this.$.content.textContent=e)}_updateTemplateInstanceVariable(e,t,a){void 0!==e&&void 0!==t&&void 0!==a&&(a[e]=t)}}customElements.define(s.is,s);var l=a(161),h=a(98),c=a(81),d=a(80),p=document.createElement("template");p.innerHTML='<dom-module id="vaadin-combo-box-overlay-styles" theme-for="vaadin-combo-box-overlay">\n  <template>\n    <style>\n      :host {\n        width: var(--vaadin-combo-box-overlay-width, var(--_vaadin-combo-box-overlay-default-width, auto));\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(p.content);class u extends h.a{static get is(){return"vaadin-combo-box-overlay"}connectedCallback(){super.connectedCallback();var e=this.__dataHost.getRootNode().host,t=e&&e.getRootNode().host,a=t&&t.getAttribute("dir");a&&this.setAttribute("dir",a)}ready(){super.ready();var e=document.createElement("div");e.setAttribute("part","loader");var t=this.shadowRoot.querySelector('[part~="content"]');t.parentNode.insertBefore(e,t)}}customElements.define(u.is,u);class f extends(Object(l.a)(Object(d.b)(c.a,n.a))){static get template(){return r.a`
    <style>
      :host {
        display: block;
      }

      :host > #overlay {
        display: none;
      }
    </style>
    <vaadin-combo-box-overlay id="overlay" hidden\$="[[hidden]]" opened="[[opened]]" template="{{template}}" style="align-items: stretch; margin: 0;" theme\$="[[theme]]">
      <slot></slot>
    </vaadin-combo-box-overlay>
`}static get is(){return"vaadin-combo-box-dropdown"}static get properties(){return{opened:{type:Boolean,observer:"_openedChanged"},template:{type:Object,notify:!0},positionTarget:{type:Object},alignedAbove:{type:Boolean,value:!1},theme:String}}constructor(){super(),this._boundSetPosition=this._setPosition.bind(this),this._boundOutsideClickListener=this._outsideClickListener.bind(this)}connectedCallback(){super.connectedCallback(),this.addEventListener("iron-resize",this._boundSetPosition)}ready(){super.ready(),this.$.overlay.addEventListener("vaadin-overlay-outside-click",e=>{e.preventDefault()})}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("iron-resize",this._boundSetPosition),this.opened=!1}notifyResize(){super.notifyResize(),this.positionTarget&&this.opened&&(this._setPosition(),requestAnimationFrame(this._setPosition.bind(this)))}_openedChanged(e,t){!!e!=!!t&&(e?(this.$.overlay.style.position=this._isPositionFixed(this.positionTarget)?"fixed":"absolute",this._setPosition(),window.addEventListener("scroll",this._boundSetPosition,!0),document.addEventListener("click",this._boundOutsideClickListener,!0),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-opened",{bubbles:!0,composed:!0}))):this.__emptyItems||(window.removeEventListener("scroll",this._boundSetPosition,!0),document.removeEventListener("click",this._boundOutsideClickListener,!0),this.dispatchEvent(new CustomEvent("vaadin-combo-box-dropdown-closed",{bubbles:!0,composed:!0}))))}_outsideClickListener(e){var t=e.composedPath();t.indexOf(this.positionTarget)<0&&t.indexOf(this.$.overlay)<0&&(this.opened=!1)}_isPositionFixed(e){var t=this._getOffsetParent(e);return"fixed"===window.getComputedStyle(e).position||t&&this._isPositionFixed(t)}_getOffsetParent(e){if(e.assignedSlot)return e.assignedSlot.parentElement;if(e.parentElement)return e.offsetParent;var t=e.parentNode;return t&&11===t.nodeType&&t.host?t.host:void 0}_verticalOffset(e,t){return this.alignedAbove?-e.height:t.height}_shouldAlignAbove(e){return(window.innerHeight-e.bottom-Math.min(document.body.scrollTop,0))/window.innerHeight<.3}_getCustomWidth(){return window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-combo-box-overlay-width"):getComputedStyle(this).getPropertyValue("--vaadin-combo-box-overlay-width")}_setOverlayWidth(){var e=this.positionTarget.clientWidth+"px",t=this._getCustomWidth();window.ShadyCSS&&!window.ShadyCSS.nativeCss?window.ShadyCSS.styleSubtree(this.$.overlay,{"--vaadin-combo-box-overlay-width":t,"--_vaadin-combo-box-overlay-default-width":e}):(this.$.overlay.style.setProperty("--_vaadin-combo-box-overlay-default-width",e),""===t?this.$.overlay.style.removeProperty("--vaadin-combo-box-overlay-width"):this.$.overlay.style.setProperty("--vaadin-combo-box-overlay-width",t))}_setPosition(e){if(!this.hidden){if(e&&e.target){var t=e.target===document?document.body:e.target,a=this.$.overlay.parentElement;if(!t.contains(this.$.overlay)&&!t.contains(this.positionTarget)||a!==document.body)return}var n=this.positionTarget.getBoundingClientRect();this.alignedAbove=this._shouldAlignAbove(n);var i=this.$.overlay.getBoundingClientRect();this._translateX=n.left-i.left+(this._translateX||0),this._translateY=n.top-i.top+(this._translateY||0)+this._verticalOffset(i,n);var o=window.devicePixelRatio||1;this._translateX=Math.round(this._translateX*o)/o,this._translateY=Math.round(this._translateY*o)/o,this.$.overlay.style.transform=`translate3d(${this._translateX}px, ${this._translateY}px, 0)`,this.$.overlay.style.justifyContent=this.alignedAbove?"flex-end":"flex-start",this._setOverlayWidth(),this.dispatchEvent(new CustomEvent("position-changed"))}}}customElements.define(f.is,f);var v=a(92),m=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})();
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class g extends class extends n.a{}{static get template(){return r.a`
    <vaadin-combo-box-dropdown id="dropdown" hidden="[[_hidden(_items.*, loading)]]" position-target="[[positionTarget]]" on-template-changed="_templateChanged" on-position-changed="_setOverlayHeight" disable-upgrade="" theme="[[theme]]">
      <template>
        <style>
          #scroller {
            overflow: auto;

            /* Fixes item background from getting on top of scrollbars on Safari */
            transform: translate3d(0, 0, 0);

            /* Enable momentum scrolling on iOS (iron-list v1.2+ no longer does it for us) */
            -webkit-overflow-scrolling: touch;

            /* Fixes scrollbar disappearing when 'Show scroll bars: Always' enabled in Safari */
            box-shadow: 0 0 0 white;
          }
        </style>
        <div id="scroller" on-click="_stopPropagation">
          <iron-list id="selector" role="listbox" items="[[_getItems(opened, _items)]]" scroll-target="[[_scroller]]">
            <template>
              <vaadin-combo-box-item on-click="_onItemClick" index="[[__requestItemByIndex(item, index, _resetScrolling)]]" item="[[item]]" label="[[getItemLabel(item, _itemLabelPath)]]" selected="[[_isItemSelected(item, _selectedItem, _itemIdPath)]]" renderer="[[renderer]]" role\$="[[_getAriaRole(index)]]" aria-selected\$="[[_getAriaSelected(_focusedIndex,index)]]" focused="[[_isItemFocused(_focusedIndex,index)]]" tabindex="-1" theme\$="[[theme]]">
              </vaadin-combo-box-item>
            </template>
          </iron-list>
        </div>
      </template>
    </vaadin-combo-box-dropdown>
`}static get is(){return"vaadin-combo-box-dropdown-wrapper"}static get properties(){return{touchDevice:{type:Boolean,value:m},opened:Boolean,positionTarget:{type:Object},renderer:Function,loading:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_setOverlayHeight"},theme:String,filterChanged:{type:Boolean,value:!1},_resetScrolling:{type:Boolean,value:!1},_selectedItem:{type:Object},_items:{type:Object},_focusedIndex:{type:Number,value:-1,observer:"_focusedIndexChanged"},_focusedItem:{type:String,computed:"_getFocusedItem(_focusedIndex)"},_itemLabelPath:{type:String,value:"label"},_itemValuePath:{type:String,value:"value"},_selector:Object,_itemIdPath:String,_oldScrollerPosition:{type:Number,value:0}}}static get observers(){return["_selectorChanged(_selector)","_loadingChanged(loading)","_openedChanged(opened, _items, loading)","_restoreScrollerPosition(_items)"]}_fireTouchAction(e){this.dispatchEvent(new CustomEvent("vaadin-overlay-touch-action",{detail:{sourceEvent:e}}))}_getItems(e,t){if(e){if(this._isNotEmpty(t)&&this._selector&&!this.filterChanged){var a=this._selector.firstVisibleIndex;0!==a&&(this._oldScrollerPosition=a,this._resetScrolling=!0)}return this.filterChanged=!1,t}return[]}_restoreScrollerPosition(e){this._isNotEmpty(e)&&this._selector&&0!==this._oldScrollerPosition&&(this._scrollIntoView(Math.min(e.length-1,this._oldScrollerPosition)),this._resetScrolling=!1,this._oldScrollerPosition=0)}_isNotEmpty(e){return!this._isEmpty(e)}_isEmpty(e){return!e||!e.length}_openedChanged(e,t,a){if(this.$.dropdown.hasAttribute("disable-upgrade")){if(!e)return;this._initDropdown()}this._isEmpty(t)&&(this.$.dropdown.__emptyItems=!0),this.$.dropdown.opened=!(!e||!a&&!this._isNotEmpty(t)),this.$.dropdown.__emptyItems=!1}_initDropdown(){this.$.dropdown.removeAttribute("disable-upgrade"),this._templateChanged(),this._loadingChanged(this.loading),this.$.dropdown.$.overlay.addEventListener("touchend",e=>this._fireTouchAction(e)),this.$.dropdown.$.overlay.addEventListener("touchmove",e=>this._fireTouchAction(e)),this.$.dropdown.$.overlay.addEventListener("mousedown",e=>e.preventDefault()),/Trident/.test(navigator.userAgent)&&this._scroller.setAttribute("unselectable","on")}_templateChanged(e){this.$.dropdown.hasAttribute("disable-upgrade")||(this._selector=this.$.dropdown.$.overlay.content.querySelector("#selector"),this._scroller=this.$.dropdown.$.overlay.content.querySelector("#scroller"))}_loadingChanged(e){this.$.dropdown.hasAttribute("disable-upgrade")||(e?this.$.dropdown.$.overlay.setAttribute("loading",""):this.$.dropdown.$.overlay.removeAttribute("loading"))}_selectorChanged(e){this._patchWheelOverScrolling()}_setOverlayHeight(){if(this.opened&&this.positionTarget&&this._selector){var e=this.positionTarget.getBoundingClientRect();this._scroller.style.maxHeight=(window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-combo-box-overlay-max-height"):getComputedStyle(this).getPropertyValue("--vaadin-combo-box-overlay-max-height"))||"65vh";var t=this._maxOverlayHeight(e);this.$.dropdown.$.overlay.style.maxHeight=t,this._selector.style.maxHeight=t,this.updateViewportBoundaries()}}_maxOverlayHeight(e){return this.$.dropdown.alignedAbove?Math.max(e.top-8+Math.min(document.body.scrollTop,0),116)+"px":Math.max(document.documentElement.clientHeight-e.bottom-8,116)+"px"}_getFocusedItem(e){if(e>=0)return this._items[e]}_isItemSelected(e,t,a){return!(e instanceof v.a)&&(a&&void 0!==e&&void 0!==t?this.get(a,e)===this.get(a,t):e===t)}_onItemClick(e){e.detail&&e.detail.sourceEvent&&e.detail.sourceEvent.stopPropagation&&this._stopPropagation(e.detail.sourceEvent),this.dispatchEvent(new CustomEvent("selection-changed",{detail:{item:e.model.item}}))}indexOfLabel(e){if(this._items&&e)for(var t=0;t<this._items.length;t++)if(this.getItemLabel(this._items[t]).toString().toLowerCase()===e.toString().toLowerCase())return t;return-1}__requestItemByIndex(e,t,a){return e instanceof v.a&&void 0!==t&&!a&&this.dispatchEvent(new CustomEvent("index-requested",{detail:{index:t,currentScrollerPos:this._oldScrollerPosition}})),t}getItemLabel(e,t){t=t||this._itemLabelPath;var a=e&&t?this.get(t,e):void 0;return null==a&&(a=e?e.toString():""),a}_isItemFocused(e,t){return e==t}_getAriaSelected(e,t){return this._isItemFocused(e,t).toString()}_getAriaRole(e){return void 0!==e&&"option"}_focusedIndexChanged(e){e>=0&&this._scrollIntoView(e)}_scrollIntoView(e){if(this.opened&&e>=0){var t=this._visibleItemsCount();if(void 0!==t){var a=e;e>this._selector.lastVisibleIndex-1?(this._selector.scrollToIndex(e),a=e-t+1):e>this._selector.firstVisibleIndex&&(a=this._selector.firstVisibleIndex),this._selector.scrollToIndex(Math.max(0,a));var n=this._selector._getPhysicalIndex(e),i=this._selector._physicalItems[n];if(i){var o=i.getBoundingClientRect(),r=this._scroller.getBoundingClientRect(),s=o.bottom-r.bottom+this._viewportTotalPaddingBottom;s>0&&(this._scroller.scrollTop+=s)}}}}ensureItemsRendered(){this._selector._render()}adjustScrollPosition(){this.opened&&this._items&&this._scrollIntoView(this._focusedIndex)}_patchWheelOverScrolling(){var e=this._selector;e.addEventListener("wheel",t=>{var a=e._scroller||e.scrollTarget,n=0===a.scrollTop,i=a.scrollHeight-a.scrollTop-a.clientHeight<=1;(n&&t.deltaY<0||i&&t.deltaY>0)&&t.preventDefault()})}updateViewportBoundaries(){this._cachedViewportTotalPaddingBottom=void 0,this._selector.updateViewportBoundaries()}get _viewportTotalPaddingBottom(){if(void 0===this._cachedViewportTotalPaddingBottom){var e=window.getComputedStyle(this._selector.$.items);this._cachedViewportTotalPaddingBottom=[e.paddingBottom,e.borderBottomWidth].map(e=>parseInt(e,10)).reduce((e,t)=>e+t)}return this._cachedViewportTotalPaddingBottom}_visibleItemsCount(){if(this._selector)return this._selector.flushDebouncer("_debounceTemplate"),this._selector.scrollToIndex(this._selector.firstVisibleIndex),this.updateViewportBoundaries(),this._selector.lastVisibleIndex-this._selector.firstVisibleIndex+1}_selectItem(e){e="number"==typeof e?this._items[e]:e,this._selector.selectedItem!==e&&this._selector.selectItem(e)}_preventDefault(e){e.cancelable&&e.preventDefault()}_stopPropagation(e){e.stopPropagation()}_hidden(e){return!this.loading&&this._isEmpty(this._items)}}customElements.define(g.is,g)},,function(e,t,a){"use strict";a(41),a(32),a(47);var n=a(6).a`<dom-module id="lumo-list-box" theme-for="vaadin-list-box">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        --_lumo-item-selected-icon-display: var(--_lumo-list-box-item-selected-icon-display, block);
      }

      /* IE11 flexbox issue workaround (vaadin-items are flex containers with min-height) */
      [part="items"] {
        display: flex;
        flex-direction: column;
      }

      [part="items"] ::slotted(*) {
        flex: none;
      }

      /* Normal item */

      [part="items"] ::slotted(vaadin-item) {
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        cursor: default;
      }

      [part="items"] ::slotted(vaadin-item) {
        outline: none;
        border-radius: var(--lumo-border-radius);
        padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
      [part="items"] ::slotted(vaadin-item)::before {
        display: var(--_lumo-item-selected-icon-display);
      }

      /* Hovered item */
      /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */

      [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* Focused item */

      [part="items"] ::slotted([focus-ring]:not([disabled])) {
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      @media (pointer: coarse) {
        [part="items"] ::slotted(vaadin-item:hover:not([disabled])) {
          background-color: transparent;
        }

        [part="items"] ::slotted([focus-ring]:not([disabled])) {
          box-shadow: none;
        }
      }

      /* Easily add section dividers */

      [part="items"] ::slotted(hr) {
        height: 1px;
        border: 0;
        padding: 0;
        margin: var(--lumo-space-s) var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="items"] ::slotted(vaadin-item) {
        padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);a(183)},,function(e,t,a){"use strict";a(41),a(32),a(47),a(51);var n=document.createElement("template");n.innerHTML='<dom-module id="lumo-required-field">\n  <template>\n    <style>\n      [part="label"] {\n        align-self: flex-start;\n        color: var(--lumo-secondary-text-color);\n        font-weight: 500;\n        font-size: var(--lumo-font-size-s);\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        transition: color 0.2s;\n        line-height: 1;\n        padding-bottom: 0.5em;\n        overflow: hidden;\n        white-space: nowrap;\n        text-overflow: ellipsis;\n        position: relative;\n        max-width: 100%;\n        box-sizing: border-box;\n      }\n\n      :host([has-label])::before {\n        margin-top: calc(var(--lumo-font-size-s) * 1.5);\n      }\n\n      :host([has-label]) {\n        padding-top: var(--lumo-space-m);\n      }\n\n      :host([required]) [part="label"] {\n        padding-right: 1em;\n      }\n\n      [part="label"]::after {\n        content: var(--lumo-required-field-indicator, "•");\n        transition: opacity 0.2s;\n        opacity: 0;\n        color: var(--lumo-primary-text-color);\n        position: absolute;\n        right: 0;\n        width: 1em;\n        text-align: center;\n      }\n\n      :host([required]:not([has-value])) [part="label"]::after {\n        opacity: 1;\n      }\n\n      :host([invalid]) [part="label"]::after {\n        color: var(--lumo-error-text-color);\n      }\n\n      [part="error-message"] {\n        margin-left: calc(var(--lumo-border-radius-m) / 4);\n        font-size: var(--lumo-font-size-xs);\n        line-height: var(--lumo-line-height-xs);\n        color: var(--lumo-error-text-color);\n        will-change: max-height;\n        transition: 0.4s max-height;\n        max-height: 5em;\n      }\n\n      /* Margin that doesn’t reserve space when there’s no error message */\n      [part="error-message"]:not(:empty)::before,\n      [part="error-message"]:not(:empty)::after {\n        content: "";\n        display: block;\n        height: 0.4em;\n      }\n\n      :host(:not([invalid])) [part="error-message"] {\n        max-height: 0;\n        overflow: hidden;\n      }\n\n      /* RTL specific styles */\n\n      :host([dir="rtl"]) [part="label"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n      :host([required][dir="rtl"]) [part="label"] {\n        padding-left: 1em;\n        padding-right: 0;\n      }\n\n      :host([dir="rtl"]) [part="label"]::after {\n        right: auto;\n        left: 0;\n      }\n\n      :host([dir="rtl"]) [part="error-message"] {\n        margin-left: 0;\n        margin-right: calc(var(--lumo-border-radius-m) / 4);\n      }\n\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(n.content)},,function(e,t,a){"use strict";var n=a(9),i=(a(49),a(98)),o=a(22),r=a(24),s=a(112),l=(()=>{try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}})(),h=e=>class extends e{static get properties(){return{_touchDevice:{type:Boolean,value:l},__dragHandleClassName:{type:String}}}ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._startDrag=this._startDrag.bind(this),this._drag=this._drag.bind(this),this._stopDrag=this._stopDrag.bind(this),this.$.overlay.$.overlay.addEventListener("mousedown",this._startDrag),this.$.overlay.$.overlay.addEventListener("touchstart",this._startDrag)}_startDrag(e){if(!("touchstart"===e.type&&e.touches.length>1)&&this.draggable&&(0===e.button||e.touches)){var t=this.$.overlay.$.resizerContainer,a=e.target===t,n=e.offsetX>t.clientWidth||e.offsetY>t.clientHeight,i=e.target===this.$.overlay.$.content,o=e.composedPath().some((e,t)=>{if(e.classList){var a=e.classList.contains(this.__dragHandleClassName||"draggable"),n=e.classList.contains("draggable-leaf-only"),i=0===t;return n&&i||a&&(!n||i)}});if(a&&!n||i||o){!o&&e.preventDefault(),this._originalBounds=this._getOverlayBounds();var r=this.__getMouseOrFirstTouchEvent(e);this._originalMouseCoords={top:r.pageY,left:r.pageX},window.addEventListener("mouseup",this._stopDrag),window.addEventListener("touchend",this._stopDrag),window.addEventListener("mousemove",this._drag),window.addEventListener("touchmove",this._drag),"absolute"!==this.$.overlay.$.overlay.style.position&&this._setBounds(this._originalBounds)}}}_drag(e){var t=this.__getMouseOrFirstTouchEvent(e);if(this._eventInWindow(t)){var a=this._originalBounds.top+(t.pageY-this._originalMouseCoords.top),n=this._originalBounds.left+(t.pageX-this._originalMouseCoords.left);this._setBounds({top:a,left:n})}}_stopDrag(){window.removeEventListener("mouseup",this._stopDrag),window.removeEventListener("touchend",this._stopDrag),window.removeEventListener("mousemove",this._drag),window.removeEventListener("touchmove",this._drag)}},c=document.createElement("template");c.innerHTML="<dom-module id=\"vaadin-dialog-resizable-overlay-styles\" theme-for=\"vaadin-dialog-overlay\">\n  <template>\n    <style>\n      [part='overlay'] {\n        position: relative;\n        overflow: visible;\n        max-height: 100%;\n        display: flex;\n      }\n\n      [part='content'] {\n        box-sizing: border-box;\n        height: 100%;\n      }\n\n      .resizer-container {\n        overflow: auto;\n        flex-grow: 1;\n      }\n\n      [part='overlay'][style] .resizer-container {\n        min-height: 100%;\n        width: 100%;\n      }\n\n      :host(:not([resizable])) .resizer {\n        display: none;\n      }\n\n      .resizer {\n        position: absolute;\n        height: 16px;\n        width: 16px;\n      }\n\n      .resizer.edge {\n        height: 8px;\n        width: 8px;\n        top: -4px;\n        right: -4px;\n        bottom: -4px;\n        left: -4px;\n      }\n\n      .resizer.edge.n {\n        width: auto;\n        bottom: auto;\n        cursor: ns-resize;\n      }\n\n      .resizer.ne {\n        top: -4px;\n        right: -4px;\n        cursor: nesw-resize;\n      }\n\n      .resizer.edge.e {\n        height: auto;\n        left: auto;\n        cursor: ew-resize;\n      }\n\n      .resizer.se {\n        bottom: -4px;\n        right: -4px;\n        cursor: nwse-resize;\n      }\n\n      .resizer.edge.s {\n        width: auto;\n        top: auto;\n        cursor: ns-resize;\n      }\n\n      .resizer.sw {\n        bottom: -4px;\n        left: -4px;\n        cursor: nesw-resize;\n      }\n\n      .resizer.edge.w {\n        height: auto;\n        right: auto;\n        cursor: ew-resize;\n      }\n\n      .resizer.nw {\n        top: -4px;\n        left: -4px;\n        cursor: nwse-resize;\n      }\n\n      /* IE11 -only CSS */\n      _:-ms-fullscreen,\n      [part='overlay'] {\n        max-height: none;\n      }\n    </style>\n  </template>\n</dom-module>",document.head.appendChild(c.content);var d,p=e=>class extends e{ready(){super.ready(),this._originalBounds={},this._originalMouseCoords={},this._resizeListeners={start:{},resize:{},stop:{}},this._addResizeListeners()}_addResizeListeners(){["n","e","s","w","nw","ne","se","sw"].forEach(e=>{var t=document.createElement("div");this._resizeListeners.start[e]=t=>this._startResize(t,e),this._resizeListeners.resize[e]=t=>this._resize(t,e),this._resizeListeners.stop[e]=()=>this._stopResize(e),1===e.length&&t.classList.add("edge"),t.classList.add("resizer"),t.classList.add(e),t.addEventListener("mousedown",this._resizeListeners.start[e]),t.addEventListener("touchstart",this._resizeListeners.start[e]),this.$.overlay.$.resizerContainer.appendChild(t)})}_startResize(e,t){if(!("touchstart"===e.type&&e.touches.length>1)&&(0===e.button||e.touches)){e.preventDefault(),this._originalBounds=this._getOverlayBounds();var a=this.__getMouseOrFirstTouchEvent(e);this._originalMouseCoords={top:a.pageY,left:a.pageX},window.addEventListener("mousemove",this._resizeListeners.resize[t]),window.addEventListener("touchmove",this._resizeListeners.resize[t]),window.addEventListener("mouseup",this._resizeListeners.stop[t]),window.addEventListener("touchend",this._resizeListeners.stop[t]),"absolute"!==this.$.overlay.$.overlay.style.position&&this._setBounds(this._originalBounds)}}_resize(e,t){var a=this.__getMouseOrFirstTouchEvent(e);if(this._eventInWindow(a)){t.split("").forEach(e=>{switch(e){case"n":var t=this._originalBounds.height-(a.pageY-this._originalMouseCoords.top),n=this._originalBounds.top+(a.pageY-this._originalMouseCoords.top);t>40&&this._setBounds({top:n,height:t});break;case"e":var i=this._originalBounds.width+(a.pageX-this._originalMouseCoords.left);i>40&&this._setBounds({width:i});break;case"s":var o=this._originalBounds.height+(a.pageY-this._originalMouseCoords.top);o>40&&this._setBounds({height:o});break;case"w":var r=this._originalBounds.width-(a.pageX-this._originalMouseCoords.left),s=this._originalBounds.left+(a.pageX-this._originalMouseCoords.left);r>40&&this._setBounds({left:s,width:r})}}),this.$.overlay.notifyResize()}}_stopResize(e){window.removeEventListener("mousemove",this._resizeListeners.resize[e]),window.removeEventListener("touchmove",this._resizeListeners.resize[e]),window.removeEventListener("mouseup",this._resizeListeners.stop[e]),window.removeEventListener("touchend",this._resizeListeners.stop[e]),this.dispatchEvent(new CustomEvent("resize",{detail:this._getResizeDimensions()}))}_getResizeDimensions(){var e=this.$.overlay.$.resizerContainer.scrollTop,{width:t,height:a}=getComputedStyle(this.$.overlay.$.overlay),n=this.$.overlay.$.content;n.setAttribute("style","position: absolute; top: 0; right: 0; bottom: 0; left: 0; box-sizing: content-box; height: auto;");var{width:i,height:o}=getComputedStyle(n);return n.removeAttribute("style"),this.$.overlay.$.resizerContainer.scrollTop=e,{width:t,height:a,contentWidth:i,contentHeight:o}}},u=a(81),f=a(80),v=a(6),m=document.createElement("template");m.innerHTML='<dom-module id="vaadin-dialog-overlay-styles" theme-for="vaadin-dialog-overlay">\n  <template>\n    <style>\n      /*\n        NOTE(platosha): Make some min-width to prevent collapsing of the content\n        taking the parent width, e. g., <vaadin-grid> and such.\n      */\n      [part="content"] {\n        min-width: 12em; /* matches the default <vaadin-text-field> width */\n      }\n\n      :host([has-bounds-set]) [part="overlay"] {\n        max-width: none;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(m.content);class g extends(Object(f.b)(u.a,i.a)){static get is(){return"vaadin-dialog-overlay"}static get template(){if(!d){var e=(d=super.template.cloneNode(!0)).content.querySelector('[part="content"]'),t=d.content.querySelector('[part="overlay"]'),a=document.createElement("div");a.id="resizerContainer",a.classList.add("resizer-container"),a.appendChild(e),t.appendChild(a)}return d}static get properties(){return{modeless:Boolean,withBackdrop:Boolean}}}customElements.define(g.is,g);class b extends(Object(s.a)(Object(o.a)(h(p(n.a))))){static get template(){return v.a`
    <style>
      :host {
        display: none;
      }
    </style>

    <vaadin-dialog-overlay id="overlay" on-opened-changed="_onOverlayOpened" on-mousedown="_bringOverlayToFront" on-touchstart="_bringOverlayToFront" theme\$="[[theme]]" modeless="[[modeless]]" with-backdrop="[[!modeless]]" resizable\$="[[resizable]]" focus-trap="">
    </vaadin-dialog-overlay>
`}static get is(){return"vaadin-dialog"}static get version(){return"2.5.2"}static get properties(){return{opened:{type:Boolean,value:!1,notify:!0},noCloseOnOutsideClick:{type:Boolean,value:!1},noCloseOnEsc:{type:Boolean,value:!1},ariaLabel:{type:String},_contentTemplate:Object,renderer:Function,modeless:{type:Boolean,value:!1},draggable:{type:Boolean,value:!1,reflectToAttribute:!0},resizable:{type:Boolean,value:!1,reflectToAttribute:!0},_oldTemplate:Object,_oldRenderer:Object}}static get observers(){return["_openedChanged(opened)","_ariaLabelChanged(ariaLabel)","_templateOrRendererChanged(_contentTemplate, renderer)"]}ready(){super.ready(),this.$.overlay.setAttribute("role","dialog"),this.$.overlay.addEventListener("vaadin-overlay-outside-click",this._handleOutsideClick.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._handleEscPress.bind(this)),this._observer=new r.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)})}_setTemplateFromNodes(e){this._contentTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._contentTemplate}_removeNewRendererOrTemplate(e,t,a,n){e!==t?this._contentTemplate=void 0:a!==n&&(this.renderer=void 0)}render(){this.$.overlay.render()}_templateOrRendererChanged(e,t){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for dialog content");this._oldTemplate=e,this._oldRenderer=t,t&&this.$.overlay.setProperties({owner:this,renderer:t})}disconnectedCallback(){super.disconnectedCallback(),this.opened=!1}_openedChanged(e){e&&(this.$.overlay.template=this.querySelector("template")),this.$.overlay.opened=e}_ariaLabelChanged(e){null!=e?this.$.overlay.setAttribute("aria-label",e):this.$.overlay.removeAttribute("aria-label")}_onOverlayOpened(e){!1===e.detail.value&&(this.opened=!1)}_handleOutsideClick(e){this.noCloseOnOutsideClick&&e.preventDefault()}_handleEscPress(e){this.noCloseOnEsc&&e.preventDefault()}_setBounds(e){var t=this.$.overlay.$.overlay,a=Object.assign({},e);for(var n in"absolute"!==t.style.position&&(t.style.position="absolute",this.$.overlay.setAttribute("has-bounds-set",""),this.__forceSafariReflow()),a)"number"==typeof a[n]&&(a[n]=a[n]+"px");Object.assign(t.style,a)}_bringOverlayToFront(){this.modeless&&this.$.overlay.bringToFront()}_getOverlayBounds(){var e=this.$.overlay.$.overlay.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect();return{top:e.top-t.top,left:e.left-t.left,width:e.width,height:e.height}}_eventInWindow(e){return e.clientX>=0&&e.clientX<=window.innerWidth&&e.clientY>=0&&e.clientY<=window.innerHeight}__getMouseOrFirstTouchEvent(e){return e.touches?e.touches[0]:e}__forceSafariReflow(){var e=this.$.overlay.$.resizerContainer.scrollTop,t=this.$.overlay.$.overlay;t.style.display="block",window.requestAnimationFrame(()=>{t.style.display="",this.$.overlay.$.resizerContainer.scrollTop=e})}}customElements.define(b.is,b)},,function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(9),i=a(45),o=a(17),r=a(69),s=a(22),l=a(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class h extends(Object(s.a)(Object(r.a)(Object(o.a)(Object(i.a)(n.a))))){static get template(){return l.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      label {
        display: inline-flex;
        align-items: baseline;
        outline: none;
      }

      [part="checkbox"] {
        position: relative;
        display: inline-block;
        flex: none;
      }

      input[type="checkbox"] {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
        margin: 0;
      }

      :host([disabled]) {
        -webkit-tap-highlight-color: transparent;
      }
    </style>

    <label>
      <span part="checkbox">
        <input type="checkbox" checked="{{checked::change}}" disabled\$="[[disabled]]" indeterminate="{{indeterminate::change}}" role="presentation" tabindex="-1">
      </span>

      <span part="label">
        <slot></slot>
      </span>
    </label>
`}static get is(){return"vaadin-checkbox"}static get version(){return"2.5.0"}static get properties(){return{checked:{type:Boolean,value:!1,notify:!0,observer:"_checkedChanged",reflectToAttribute:!0},indeterminate:{type:Boolean,notify:!0,observer:"_indeterminateChanged",reflectToAttribute:!0,value:!1},value:{type:String,value:"on"},_nativeCheckbox:{type:Object}}}constructor(){super(),this.name}get name(){return this.checked?this._storedName:""}set name(e){this._storedName=e}ready(){super.ready(),this.setAttribute("role","checkbox"),this._nativeCheckbox=this.shadowRoot.querySelector('input[type="checkbox"]'),this.addEventListener("click",this._handleClick.bind(this)),this._addActiveListeners();var e=this.getAttribute("name");e&&(this.name=e),this.shadowRoot.querySelector('[part~="label"]').querySelector("slot").addEventListener("slotchange",this._updateLabelAttribute.bind(this)),this._updateLabelAttribute()}_updateLabelAttribute(){var e=this.shadowRoot.querySelector('[part~="label"]'),t=e.firstElementChild.assignedNodes();this._isAssignedNodesEmpty(t)?e.setAttribute("empty",""):e.removeAttribute("empty")}_isAssignedNodesEmpty(e){return 0===e.length||1==e.length&&e[0].nodeType==Node.TEXT_NODE&&""===e[0].textContent.trim()}_checkedChanged(e){this.indeterminate?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",Boolean(e))}_indeterminateChanged(e){e?this.setAttribute("aria-checked","mixed"):this.setAttribute("aria-checked",this.checked)}_addActiveListeners(){this._addEventListenerToNode(this,"down",e=>{this.__interactionsAllowed(e)&&this.setAttribute("active","")}),this._addEventListenerToNode(this,"up",()=>this.removeAttribute("active")),this.addEventListener("keydown",e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this.setAttribute("active",""))}),this.addEventListener("keyup",e=>{this.__interactionsAllowed(e)&&32===e.keyCode&&(e.preventDefault(),this._toggleChecked(),this.removeAttribute("active"),this.indeterminate&&(this.indeterminate=!1))})}get focusElement(){return this.shadowRoot.querySelector("input")}__interactionsAllowed(e){return!this.disabled&&"a"!==e.target.localName}_handleClick(e){this.__interactionsAllowed(e)&&(this.indeterminate?(this.indeterminate=!1,e.preventDefault(),this._toggleChecked()):e.composedPath()[0]!==this._nativeCheckbox&&(e.preventDefault(),this._toggleChecked()))}_toggleChecked(){this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{composed:!1,bubbles:!0}))}}customElements.define(h.is,h)},,function(e,t,a){"use strict";a(32),a(185);var n=a(6).a`<dom-module id="lumo-dialog" theme-for="vaadin-dialog-overlay">
  <template>
    <style include="lumo-overlay">
      /* Optical centering */
      :host::before,
      :host::after {
        content: "";
        flex-basis: 0;
        flex-grow: 1;
      }

      :host::after {
        flex-grow: 1.1;
      }

      [part="overlay"] {
        box-shadow: 0 0 0 1px var(--lumo-shade-5pct), var(--lumo-box-shadow-xl);
        background-image: none;
        outline: none;
        -webkit-tap-highlight-color: transparent;
      }

      [part="content"] {
        padding: var(--lumo-space-l);
      }

      /* Animations */

      :host([opening]),
      :host([closing]) {
        animation: 0.25s lumo-overlay-dummy-animation;
      }

      :host([opening]) [part="overlay"] {
        animation: 0.12s 0.05s vaadin-dialog-enter cubic-bezier(.215, .61, .355, 1) both;
      }

      @keyframes vaadin-dialog-enter {
        0% {
          opacity: 0;
          transform: scale(0.95);
        }
      }

      :host([closing]) [part="overlay"] {
        animation: 0.1s 0.03s vaadin-dialog-exit cubic-bezier(.55, .055, .675, .19) both;
      }

      :host([closing]) [part="backdrop"] {
        animation-delay: 0.05s;
      }

      @keyframes vaadin-dialog-exit {
        100% {
          opacity: 0;
          transform: scale(1.02);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);a(242)},,function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a(9),i=a(49),o=a(13),r=a(26),s=a(11),l=a(19),h=a(15);
/**
@license
Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at http://polymer.github.io/LICENSE.txt
The complete set of authors may be found at http://polymer.github.io/AUTHORS.txt
The complete set of contributors may be found at http://polymer.github.io/CONTRIBUTORS.txt
Code distributed by Google as part of the polymer project is also
subject to an additional IP rights grant found at http://polymer.github.io/PATENTS.txt
*/
class c extends n.a{static get is(){return"dom-if"}static get template(){return null}static get properties(){return{if:{type:Boolean,observer:"__debounceRender"},restamp:{type:Boolean,observer:"__debounceRender"}}}constructor(){super(),this.__renderDebouncer=null,this.__invalidProps=null,this.__instance=null,this._lastIf=!1,this.__ctor=null,this.__hideTemplateChildren__=!1}__debounceRender(){this.__renderDebouncer=o.a.debounce(this.__renderDebouncer,s.c,()=>this.__render()),Object(r.a)(this.__renderDebouncer)}disconnectedCallback(){super.disconnectedCallback();var e=Object(h.a)(this).parentNode;e&&(e.nodeType!=Node.DOCUMENT_FRAGMENT_NODE||Object(h.a)(e).host)||this.__teardownInstance()}connectedCallback(){super.connectedCallback(),this.style.display="none",this.if&&this.__debounceRender()}render(){Object(r.b)()}__render(){if(this.if){if(!this.__ensureInstance())return;this._showHideChildren()}else this.restamp&&this.__teardownInstance();!this.restamp&&this.__instance&&this._showHideChildren(),this.if!=this._lastIf&&(this.dispatchEvent(new CustomEvent("dom-change",{bubbles:!0,composed:!0})),this._lastIf=this.if)}__ensureInstance(){var e=Object(h.a)(this).parentNode;if(e){if(!this.__ctor){var t=Object(h.a)(this).querySelector("template");if(!t){var a=new MutationObserver(()=>{if(!Object(h.a)(this).querySelector("template"))throw new Error("dom-if requires a <template> child");a.disconnect(),this.__render()});return a.observe(this,{childList:!0}),!1}this.__ctor=Object(i.b)(t,this,{mutableData:!0,forwardHostProp:function(e,t){this.__instance&&(this.if?this.__instance.forwardHostProp(e,t):(this.__invalidProps=this.__invalidProps||Object.create(null),this.__invalidProps[Object(l.g)(e)]=!0))}})}if(this.__instance){this.__syncHostProperties();var n=this.__instance.children;if(n&&n.length)if(Object(h.a)(this).previousSibling!==n[n.length-1])for(var o,r=0;r<n.length&&(o=n[r]);r++)Object(h.a)(e).insertBefore(o,this)}else this.__instance=new this.__ctor,Object(h.a)(e).insertBefore(this.__instance.root,this)}return!0}__syncHostProperties(){var e=this.__invalidProps;if(e){for(var t in e)this.__instance._setPendingProperty(t,this.__dataHost[t]);this.__invalidProps=null,this.__instance._flushProperties()}}__teardownInstance(){if(this.__instance){var e=this.__instance.children;if(e&&e.length){var t=Object(h.a)(e[0]).parentNode;if(t){t=Object(h.a)(t);for(var a,n=0;n<e.length&&(a=e[n]);n++)t.removeChild(a)}}this.__instance=null,this.__invalidProps=null}}_showHideChildren(){var e=this.__hideTemplateChildren__||!this.if;this.__instance&&this.__instance._showHideChildren(e)}}customElements.define(c.is,c)},function(e,t,a){"use strict";a(41),a(47);var n=a(6).a`<dom-module id="lumo-checkbox" theme-for="vaadin-checkbox">
  <template>
    <style include="lumo-checkbox-style lumo-checkbox-effects">
      /* IE11 only */
      ::-ms-backdrop,
      [part="checkbox"] {
        line-height: 1;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-style">
  <template>
    <style>
      :host {
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        cursor: default;
        outline: none;
      }

      [part="label"]:not([empty]) {
        margin: 0.1875em 0.875em 0.1875em 0.375em;
      }

      [part="checkbox"] {
        width: calc(1em + 2px);
        height: calc(1em + 2px);
        margin: 0.1875em;
        position: relative;
        border-radius: var(--lumo-border-radius-s);
        background-color: var(--lumo-contrast-20pct);
        transition: transform 0.2s cubic-bezier(.12, .32, .54, 2), background-color 0.15s;
        pointer-events: none;
        line-height: 1.2;
      }

      :host([indeterminate]) [part="checkbox"],
      :host([checked]) [part="checkbox"] {
        background-color: var(--lumo-primary-color);
      }

      /* Needed to align the checkbox nicely on the baseline */
      [part="checkbox"]::before {
        content: "\\2003";
      }

      /* Checkmark */
      [part="checkbox"]::after {
        content: "";
        display: inline-block;
        width: 0;
        height: 0;
        border: 0 solid var(--lumo-primary-contrast-color);
        border-width: 0.1875em 0 0 0.1875em;
        box-sizing: border-box;
        transform-origin: 0 0;
        position: absolute;
        top: 0.8125em;
        left: 0.5em;
        transform: scale(0.55) rotate(-135deg);
        opacity: 0;
      }

      :host([checked]) [part="checkbox"]::after {
        opacity: 1;
        width: 0.625em;
        height: 1.0625em;
      }

      /* Indeterminate checkmark */

      :host([indeterminate]) [part="checkbox"]::after {
        transform: none;
        opacity: 1;
        top: 45%;
        height: 10%;
        left: 22%;
        right: 22%;
        width: auto;
        border: 0;
        background-color: var(--lumo-primary-contrast-color);
        transition: opacity 0.25s;
      }

      /* Focus ring */

      :host([focus-ring]) [part="checkbox"] {
        box-shadow: 0 0 0 3px var(--lumo-primary-color-50pct);
      }

      /* Disabled */

      :host([disabled]) {
        pointer-events: none;
        color: var(--lumo-disabled-text-color);
      }

      :host([disabled]) [part="label"] ::slotted(*) {
        color: inherit;
      }

      :host([disabled]) [part="checkbox"] {
        background-color: var(--lumo-contrast-10pct);
      }

      :host([disabled]) [part="checkbox"]::after {
        border-color: var(--lumo-contrast-30pct);
      }

      :host([indeterminate][disabled]) [part="checkbox"]::after {
        background-color: var(--lumo-contrast-30pct);
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="label"]:not([empty]) {
        margin: 0.1875em 0.375em 0.1875em 0.875em;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-checkbox-effects">
  <template>
    <style>
      /* Transition the checkmark if activated with the mouse (disabled for grid select-all this way) */
      :host(:hover) [part="checkbox"]::after {
        transition: width 0.1s, height 0.25s;
      }

      /* Used for activation "halo" */
      [part="checkbox"]::before {
        color: transparent;
        display: inline-block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: inherit;
        transform: scale(1.4);
        opacity: 0;
        transition: transform 0.1s, opacity 0.8s;
      }

      /* Hover */

      :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
        background-color: var(--lumo-contrast-30pct);
      }

      /* Disable hover for touch devices */
      @media (pointer: coarse) {
        :host(:not([checked]):not([indeterminate]):not([disabled]):hover) [part="checkbox"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      /* Active */

      :host([active]) [part="checkbox"] {
        transform: scale(0.9);
        transition-duration: 0.05s;
      }

      :host([active][checked]) [part="checkbox"] {
        transform: scale(1.1);
      }

      :host([active]:not([checked])) [part="checkbox"]::before {
        transition-duration: 0.01s, 0.01s;
        transform: scale(0);
        opacity: 0.4;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content)},function(e,t,a){"use strict";a(41),a(63),a(32),a(47),a(51),a(240),a(78),a(125);var n=a(6).a`<dom-module id="lumo-text-field" theme-for="vaadin-text-field">
  <template>
    <style include="lumo-required-field lumo-field-button">
      :host {
        --lumo-text-field-size: var(--lumo-size-m);
        color: var(--lumo-body-text-color);
        font-size: var(--lumo-font-size-m);
        font-family: var(--lumo-font-family);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        -webkit-tap-highlight-color: transparent;
        padding: var(--lumo-space-xs) 0;
      }

      :host::before {
        height: var(--lumo-text-field-size);
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
      }

      :host([focused]:not([readonly])) [part="label"] {
        color: var(--lumo-primary-text-color);
      }

      :host([has-helper]) [part="helper-text"]::before {
        content: "";
        display: block;
        height: 0.4em;
      }

      [part="helper-text"],
      [part="helper-text"] ::slotted(*) {
        display: block;
        color: var(--lumo-secondary-text-color);
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-xs);
        margin-left: calc(var(--lumo-border-radius-m) / 4);
        transition: color 0.2s;
      }

      [part="value"],
      [part="input-field"] ::slotted(input),
      [part="input-field"] ::slotted(textarea),
      /* Slotted by vaadin-select-text-field */
      [part="input-field"] ::slotted([part="value"]) {
        cursor: inherit;
        min-height: var(--lumo-text-field-size);
        padding: 0 0.25em;
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
        -webkit-mask-image: var(--_lumo-text-field-overflow-mask-image);
      }

      [part="value"]:focus,
      :host([focused]) [part="input-field"] ::slotted(input),
      :host([focused]) [part="input-field"] ::slotted(textarea) {
        -webkit-mask-image: none;
        mask-image: none;
      }

      /*
        TODO: CSS custom property in \`mask-image\` causes crash in Edge
        see https://developer.microsoft.com/en-us/microsoft-edge/platform/issues/15415089/
      */
      @-moz-document url-prefix() {
        [part="value"],
        [part="input-field"] ::slotted(input),
        [part="input-field"] ::slotted(textarea),
        [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      [part="value"]::-webkit-input-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]:-ms-input-placeholder {
        color: inherit;
        opacity: 0.5;
      }

      [part="value"]::-moz-placeholder {
        color: inherit;
        transition: opacity 0.175s 0.05s;
        opacity: 0.5;
      }

      [part="value"]::placeholder {
        color: inherit;
        transition: opacity 0.175s 0.1s;
        opacity: 0.5;
      }

      [part="input-field"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
        padding: 0 calc(0.375em + var(--lumo-border-radius) / 4 - 1px);
        font-weight: 500;
        line-height: 1;
        position: relative;
        cursor: text;
        box-sizing: border-box;
      }

      /* Used for hover and activation effects */
      [part="input-field"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        border-radius: inherit;
        pointer-events: none;
        background-color: var(--lumo-contrast-50pct);
        opacity: 0;
        transition: transform 0.15s, opacity 0.2s;
        transform-origin: 100% 0;
      }

      /* Hover */

      :host(:hover:not([readonly]):not([focused])) [part="label"],
      :host(:hover:not([readonly])) [part="helper-text"],
      :host(:hover:not([readonly])) [part="helper-text"] ::slotted(*) {
        color: var(--lumo-body-text-color);
      }

      :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
        opacity: 0.1;
      }

      /* Touch device adjustment */
      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused])) [part="label"] {
          color: var(--lumo-secondary-text-color);
        }

        :host(:hover:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0;
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"]::after {
          opacity: 0.2;
        }
      }

      /* Trigger when not focusing using the keyboard */
      :host([focused]:not([focus-ring]):not([readonly])) [part="input-field"]::after {
        transform: scaleX(0);
        transition-duration: 0.15s, 1s;
      }

      /* Focus-ring */

      :host([focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Read-only and disabled */
      :host([readonly]) [part="value"]::-webkit-input-placeholder,
      :host([disabled]) [part="value"]::-webkit-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]:-ms-input-placeholder,
      :host([disabled]) [part="value"]:-ms-input-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::-moz-placeholder,
      :host([disabled]) [part="value"]::-moz-placeholder {
        opacity: 0;
      }

      :host([readonly]) [part="value"]::placeholder,
      :host([disabled]) [part="value"]::placeholder {
        opacity: 0;
      }

      /* Read-only */

      :host([readonly]) [part="input-field"] {
        color: var(--lumo-secondary-text-color);
        background-color: transparent;
        cursor: default;
      }

      :host([readonly]) [part="input-field"]::after {
        background-color: transparent;
        opacity: 1;
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      /* Disabled style */

      :host([disabled]) {
        pointer-events: none;
      }

      :host([disabled]) [part="input-field"] {
        background-color: var(--lumo-contrast-5pct);
      }

      :host([disabled]) [part="label"],
      :host([disabled]) [part="helper-text"],
      :host([disabled]) [part="value"],
      :host([disabled]) [part="input-field"] ::slotted(*) {
        color: var(--lumo-disabled-text-color);
        -webkit-text-fill-color: var(--lumo-disabled-text-color);
      }

      /* Invalid style */

      :host([invalid]) [part="input-field"] {
        background-color: var(--lumo-error-color-10pct);
      }

      :host([invalid]) [part="input-field"]::after {
        background-color: var(--lumo-error-color-50pct);
      }

      :host([invalid][focus-ring]) [part="input-field"] {
        box-shadow: 0 0 0 2px var(--lumo-error-color-50pct);
      }

      :host([input-prevented]) [part="input-field"] {
        color: var(--lumo-error-text-color);
      }

      /* Small theme */

      :host([theme~="small"]) {
        font-size: var(--lumo-font-size-s);
        --lumo-text-field-size: var(--lumo-size-s);
      }

      :host([theme~="small"][has-label]) [part="label"] {
        font-size: var(--lumo-font-size-xs);
      }

      :host([theme~="small"][has-label]) [part="error-message"] {
        font-size: var(--lumo-font-size-xxs);
      }

      /* Text align */

      :host([theme~="align-left"]) [part="value"] {
        text-align: left;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-center"]) [part="value"] {
        text-align: center;
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"]) [part="value"] {
        text-align: right;
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-left"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
        }
      }
      /* helper-text position */

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::before {
        display: none;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"]::after {
        content: "";
        display: block;
        height: 0.4em;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="label"] {
        order: 0;
        padding-bottom: 0.4em;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="helper-text"] {
        order: 1;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="input-field"] {
        order: 2;
      }

      :host([has-helper][theme~="helper-above-field"]) [part="error-message"] {
        order: 3;
      }

      /* Slotted content */

      [part="input-field"] ::slotted(:not([part]):not(iron-icon):not(input):not(textarea)) {
        color: var(--lumo-secondary-text-color);
        font-weight: 400;
      }

      /* Slotted icons */

      [part="input-field"] ::slotted(iron-icon) {
        color: var(--lumo-contrast-60pct);
        width: var(--lumo-icon-size-m);
        height: var(--lumo-icon-size-m);
      }

      /* Vaadin icons are based on a 16x16 grid (unlike Lumo and Material icons with 24x24), so they look too big by default */
      [part="input-field"] ::slotted(iron-icon[icon^="vaadin:"]) {
        padding: 0.25em;
        box-sizing: border-box !important;
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="input-field"]::after {
        transform-origin: 0% 0;
      }

      :host([dir="rtl"]) [part="value"],
      :host([dir="rtl"]) [part="input-field"] ::slotted(input),
      :host([dir="rtl"]) [part="input-field"] ::slotted(textarea) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent, #000 1.25em);
      }

      :host([dir="rtl"]) [part="value"]:focus,
      :host([focused][dir="rtl"]) [part="input-field"] ::slotted(input),
      :host([focused][dir="rtl"]) [part="input-field"] ::slotted(textarea) {
        -webkit-mask-image: none;
        mask-image: none;
      }

      @-moz-document url-prefix() {
        :host([dir="rtl"]) [part="value"],
        :host([dir="rtl"]) [part="input-field"] ::slotted(input),
        :host([dir="rtl"]) [part="input-field"] ::slotted(textarea),
        :host([dir="rtl"]) [part="input-field"] ::slotted([part="value"]) {
          mask-image: var(--_lumo-text-field-overflow-mask-image);
        }
      }

      :host([theme~="align-left"][dir="rtl"]) [part="value"] {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-center"][dir="rtl"]) [part="value"] {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([theme~="align-right"][dir="rtl"]) [part="value"] {
        --_lumo-text-field-overflow-mask-image: none;
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-right"][dir="rtl"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to right, transparent 0.25em, #000 1.5em);
        }
      }

      @-moz-document url-prefix() {
        /* Firefox is smart enough to align overflowing text to right */
        :host([theme~="align-left"][dir="rtl"]) [part="value"] {
          --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent 0.25em, #000 1.5em);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content)},function(e,t,a){"use strict";a(43),a(90);var n=a(81),i=a(155),o=a(191),r=a(71),s=a(39),l=a(190),h=a(11),c=a(13),d=a(26),p=a(6),u=a(19),f=(a(49),navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)),v=f&&f[1]>=8;Object(r.a)({_template:p.a`
    <style>
      :host {
        display: block;
      }

      @media only screen and (-webkit-max-device-pixel-ratio: 1) {
        :host {
          will-change: transform;
        }
      }

      #items {
        @apply --iron-list-items-container;
        position: relative;
      }

      :host(:not([grid])) #items > ::slotted(*) {
        width: 100%;
      }

      #items > ::slotted(*) {
        box-sizing: border-box;
        margin: 0;
        position: absolute;
        top: 0;
        will-change: transform;
      }
    </style>

    <array-selector id="selector" items="{{items}}" selected="{{selectedItems}}" selected-item="{{selectedItem}}"></array-selector>

    <div id="items">
      <slot></slot>
    </div>
`,is:"iron-list",properties:{items:{type:Array},as:{type:String,value:"item"},indexAs:{type:String,value:"index"},selectedAs:{type:String,value:"selected"},grid:{type:Boolean,value:!1,reflectToAttribute:!0,observer:"_gridChanged"},selectionEnabled:{type:Boolean,value:!1},selectedItem:{type:Object,notify:!0},selectedItems:{type:Object,notify:!0},multiSelection:{type:Boolean,value:!1},scrollOffset:{type:Number,value:0}},observers:["_itemsChanged(items.*)","_selectionEnabledChanged(selectionEnabled)","_multiSelectionChanged(multiSelection)","_setOverflow(scrollTarget, scrollOffset)"],behaviors:[l.a,n.a,i.a,o.a],_ratio:.5,_scrollerPaddingTop:0,_scrollPosition:0,_physicalSize:0,_physicalAverage:0,_physicalAverageCount:0,_physicalTop:0,_virtualCount:0,_estScrollHeight:0,_scrollHeight:0,_viewportHeight:0,_viewportWidth:0,_physicalItems:null,_physicalSizes:null,_firstVisibleIndexVal:null,_lastVisibleIndexVal:null,_maxPages:2,_focusedItem:null,_focusedVirtualIndex:-1,_focusedPhysicalIndex:-1,_offscreenFocusedItem:null,_focusBackfillItem:null,_itemsPerRow:1,_itemWidth:0,_rowHeight:0,_templateCost:0,_parentModel:!0,get _physicalBottom(){return this._physicalTop+this._physicalSize},get _scrollBottom(){return this._scrollPosition+this._viewportHeight},get _virtualEnd(){return this._virtualStart+this._physicalCount-1},get _hiddenContentSize(){return(this.grid?this._physicalRows*this._rowHeight:this._physicalSize)-this._viewportHeight},get _itemsParent(){return Object(s.a)(Object(s.a)(this._userTemplate).parentNode)},get _maxScrollTop(){return this._estScrollHeight-this._viewportHeight+this._scrollOffset},get _maxVirtualStart(){var e=this._convertIndexToCompleteRow(this._virtualCount);return Math.max(0,e-this._physicalCount)},set _virtualStart(e){e=this._clamp(e,0,this._maxVirtualStart),this.grid&&(e-=e%this._itemsPerRow),this._virtualStartVal=e},get _virtualStart(){return this._virtualStartVal||0},set _physicalStart(e){(e%=this._physicalCount)<0&&(e=this._physicalCount+e),this.grid&&(e-=e%this._itemsPerRow),this._physicalStartVal=e},get _physicalStart(){return this._physicalStartVal||0},get _physicalEnd(){return(this._physicalStart+this._physicalCount-1)%this._physicalCount},set _physicalCount(e){this._physicalCountVal=e},get _physicalCount(){return this._physicalCountVal||0},get _optPhysicalSize(){return 0===this._viewportHeight?1/0:this._viewportHeight*this._maxPages},get _isVisible(){return Boolean(this.offsetWidth||this.offsetHeight)},get firstVisibleIndex(){var e=this._firstVisibleIndexVal;if(null==e){var t=this._physicalTop+this._scrollOffset;e=this._iterateItems((function(e,a){return(t+=this._getPhysicalSizeIncrement(e))>this._scrollPosition?this.grid?a-a%this._itemsPerRow:a:this.grid&&this._virtualCount-1===a?a-a%this._itemsPerRow:void 0}))||0,this._firstVisibleIndexVal=e}return e},get lastVisibleIndex(){var e=this._lastVisibleIndexVal;if(null==e){if(this.grid)e=Math.min(this._virtualCount,this.firstVisibleIndex+this._estRowsInView*this._itemsPerRow-1);else{var t=this._physicalTop+this._scrollOffset;this._iterateItems((function(a,n){t<this._scrollBottom&&(e=n),t+=this._getPhysicalSizeIncrement(a)}))}this._lastVisibleIndexVal=e}return e},get _defaultScrollTarget(){return this},get _virtualRowCount(){return Math.ceil(this._virtualCount/this._itemsPerRow)},get _estRowsInView(){return Math.ceil(this._viewportHeight/this._rowHeight)},get _physicalRows(){return Math.ceil(this._physicalCount/this._itemsPerRow)},get _scrollOffset(){return this._scrollerPaddingTop+this.scrollOffset},ready:function(){this.addEventListener("focus",this._didFocus.bind(this),!0)},attached:function(){this._debounce("_render",this._render,h.a),this.listen(this,"iron-resize","_resizeHandler"),this.listen(this,"keydown","_keydownHandler")},detached:function(){this.unlisten(this,"iron-resize","_resizeHandler"),this.unlisten(this,"keydown","_keydownHandler")},_setOverflow:function(e){this.style.webkitOverflowScrolling=e===this?"touch":"",this.style.overflowY=e===this?"auto":"",this._lastVisibleIndexVal=null,this._firstVisibleIndexVal=null,this._debounce("_render",this._render,h.a)},updateViewportBoundaries:function(){var e=window.getComputedStyle(this);this._scrollerPaddingTop=this.scrollTarget===this?0:parseInt(e["padding-top"],10),this._isRTL=Boolean("rtl"===e.direction),this._viewportWidth=this.$.items.offsetWidth,this._viewportHeight=this._scrollTargetHeight,this.grid&&this._updateGridMetrics()},_scrollHandler:function(){var e=Math.max(0,Math.min(this._maxScrollTop,this._scrollTop)),t=e-this._scrollPosition,a=t>=0;if(this._scrollPosition=e,this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,Math.abs(t)>this._physicalSize&&this._physicalSize>0){t-=this._scrollOffset;var n=Math.round(t/this._physicalAverage)*this._itemsPerRow;this._virtualStart=this._virtualStart+n,this._physicalStart=this._physicalStart+n,this._physicalTop=Math.min(Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage,this._scrollPosition),this._update()}else if(this._physicalCount>0){var i=this._getReusables(a);a?(this._physicalTop=i.physicalTop,this._virtualStart=this._virtualStart+i.indexes.length,this._physicalStart=this._physicalStart+i.indexes.length):(this._virtualStart=this._virtualStart-i.indexes.length,this._physicalStart=this._physicalStart-i.indexes.length),this._update(i.indexes,a?null:i.indexes),this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,0),h.c)}},_getReusables:function(e){var t,a,n,i=[],o=this._hiddenContentSize*this._ratio,r=this._virtualStart,s=this._virtualEnd,l=this._physicalCount,h=this._physicalTop+this._scrollOffset,c=this._physicalBottom+this._scrollOffset,d=this._scrollPosition,p=this._scrollBottom;for(e?(t=this._physicalStart,this._physicalEnd,a=d-h):(t=this._physicalEnd,this._physicalStart,a=c-p);a-=n=this._getPhysicalSizeIncrement(t),!(i.length>=l||a<=o);)if(e){if(s+i.length+1>=this._virtualCount)break;if(h+n>=d-this._scrollOffset)break;i.push(t),h+=n,t=(t+1)%l}else{if(r-i.length<=0)break;if(h+this._physicalSize-n<=p)break;i.push(t),h-=n,t=0===t?l-1:t-1}return{indexes:i,physicalTop:h-this._scrollOffset}},_update:function(e,t){if(!(e&&0===e.length||0===this._physicalCount)){if(this._manageFocus(),this._assignModels(e),this._updateMetrics(e),t)for(;t.length;){var a=t.pop();this._physicalTop-=this._getPhysicalSizeIncrement(a)}this._positionItems(),this._updateScrollerSize()}},_createPool:function(e){var t,a;this._ensureTemplatized();var n=new Array(e);for(t=0;t<e;t++)a=this.stamp(null),n[t]=a.root.querySelector("*"),this._itemsParent.appendChild(a.root);return n},_isClientFull:function(){return 0!=this._scrollBottom&&this._physicalBottom-1>=this._scrollBottom&&this._physicalTop<=this._scrollPosition},_increasePoolIfNeeded:function(e){var t=this._clamp(this._physicalCount+e,3,this._virtualCount-this._virtualStart);if(t=this._convertIndexToCompleteRow(t),this.grid){var a=t%this._itemsPerRow;a&&t-a<=this._physicalCount&&(t+=this._itemsPerRow),t-=a}var n=t-this._physicalCount,i=Math.round(.5*this._physicalCount);if(!(n<0)){if(n>0){var o=window.performance.now();[].push.apply(this._physicalItems,this._createPool(n));for(var r=0;r<n;r++)this._physicalSizes.push(0);this._physicalCount=this._physicalCount+n,this._physicalStart>this._physicalEnd&&this._isIndexRendered(this._focusedVirtualIndex)&&this._getPhysicalIndex(this._focusedVirtualIndex)<this._physicalEnd&&(this._physicalStart=this._physicalStart+n),this._update(),this._templateCost=(window.performance.now()-o)/n,i=Math.round(.5*this._physicalCount)}this._virtualEnd>=this._virtualCount-1||0===i||(this._isClientFull()?this._physicalSize<this._optPhysicalSize&&this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,this._clamp(Math.round(50/this._templateCost),1,i)),h.b):this._debounce("_increasePoolIfNeeded",this._increasePoolIfNeeded.bind(this,i),h.c))}},_render:function(){if(this.isAttached&&this._isVisible)if(0!==this._physicalCount){var e=this._getReusables(!0);this._physicalTop=e.physicalTop,this._virtualStart=this._virtualStart+e.indexes.length,this._physicalStart=this._physicalStart+e.indexes.length,this._update(e.indexes),this._update(),this._increasePoolIfNeeded(0)}else this._virtualCount>0&&(this.updateViewportBoundaries(),this._increasePoolIfNeeded(3))},_ensureTemplatized:function(){if(!this.ctor){this._userTemplate=this.queryEffectiveChildren("template"),this._userTemplate||console.warn("iron-list requires a template to be provided in light-dom");var e={__key__:!0};e[this.as]=!0,e[this.indexAs]=!0,e[this.selectedAs]=!0,e.tabIndex=!0,this._instanceProps=e,this.templatize(this._userTemplate,this.mutableData)}},_gridChanged:function(e,t){void 0!==t&&(this.notifyResize(),Object(d.b)(),e&&this._updateGridMetrics())},_itemsChanged:function(e){if("items"===e.path)this._virtualStart=0,this._physicalTop=0,this._virtualCount=this.items?this.items.length:0,this._physicalIndexForKey={},this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._physicalCount=this._physicalCount||0,this._physicalItems=this._physicalItems||[],this._physicalSizes=this._physicalSizes||[],this._physicalStart=0,this._scrollTop>this._scrollOffset&&this._resetScrollPosition(0),this._removeFocusedItem(),this._debounce("_render",this._render,h.a);else if("items.splices"===e.path){if(this._adjustVirtualIndex(e.value.indexSplices),this._virtualCount=this.items?this.items.length:0,e.value.indexSplices.some((function(e){return e.addedCount>0||e.removed.length>0}))){var t=this._getActiveElement();this.contains(t)&&t.blur()}var a=e.value.indexSplices.some((function(e){return e.index+e.addedCount>=this._virtualStart&&e.index<=this._virtualEnd}),this);this._isClientFull()&&!a||this._debounce("_render",this._render,h.a)}else"items.length"!==e.path&&this._forwardItemPath(e.path,e.value)},_forwardItemPath:function(e,t){var a,n,i,o=(e=e.slice(6)).indexOf(".");-1===o&&(o=e.length);var r=this.modelForElement(this._offscreenFocusedItem),s=parseInt(e.substring(0,o),10);(a=this._isIndexRendered(s))?(n=this._getPhysicalIndex(s),i=this.modelForElement(this._physicalItems[n])):r&&(i=r),i&&i[this.indexAs]===s&&(e=e.substring(o+1),e=this.as+(e?"."+e:""),i._setPendingPropertyOrPath(e,t,!1,!0),i._flushProperties&&i._flushProperties(),a&&(this._updateMetrics([n]),this._positionItems(),this._updateScrollerSize()))},_adjustVirtualIndex:function(e){e.forEach((function(e){if(e.removed.forEach(this._removeItem,this),e.index<this._virtualStart){var t=Math.max(e.addedCount-e.removed.length,e.index-this._virtualStart);this._virtualStart=this._virtualStart+t,this._focusedVirtualIndex>=0&&(this._focusedVirtualIndex=this._focusedVirtualIndex+t)}}),this)},_removeItem:function(e){this.$.selector.deselect(e),this._focusedItem&&this.modelForElement(this._focusedItem)[this.as]===e&&this._removeFocusedItem()},_iterateItems:function(e,t){var a,n,i,o;if(2===arguments.length&&t){for(o=0;o<t.length;o++)if(a=t[o],n=this._computeVidx(a),null!=(i=e.call(this,a,n)))return i}else{for(a=this._physicalStart,n=this._virtualStart;a<this._physicalCount;a++,n++)if(null!=(i=e.call(this,a,n)))return i;for(a=0;a<this._physicalStart;a++,n++)if(null!=(i=e.call(this,a,n)))return i}},_computeVidx:function(e){return e>=this._physicalStart?this._virtualStart+(e-this._physicalStart):this._virtualStart+(this._physicalCount-this._physicalStart)+e},_assignModels:function(e){this._iterateItems((function(e,t){var a=this._physicalItems[e],n=this.items&&this.items[t];if(null!=n){var i=this.modelForElement(a);i.__key__=null,this._forwardProperty(i,this.as,n),this._forwardProperty(i,this.selectedAs,this.$.selector.isSelected(n)),this._forwardProperty(i,this.indexAs,t),this._forwardProperty(i,"tabIndex",this._focusedVirtualIndex===t?0:-1),this._physicalIndexForKey[i.__key__]=e,i._flushProperties&&i._flushProperties(!0),a.removeAttribute("hidden")}else a.setAttribute("hidden","")}),e)},_updateMetrics:function(e){Object(d.b)();var t=0,a=0,n=this._physicalAverageCount,i=this._physicalAverage;this._iterateItems((function(e,n){a+=this._physicalSizes[e],this._physicalSizes[e]=this._physicalItems[e].offsetHeight,t+=this._physicalSizes[e],this._physicalAverageCount+=this._physicalSizes[e]?1:0}),e),this.grid?(this._updateGridMetrics(),this._physicalSize=Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight):(a=1===this._itemsPerRow?a:Math.ceil(this._physicalCount/this._itemsPerRow)*this._rowHeight,this._physicalSize=this._physicalSize+t-a,this._itemsPerRow=1),this._physicalAverageCount!==n&&(this._physicalAverage=Math.round((i*n+t)/this._physicalAverageCount))},_updateGridMetrics:function(){this._itemWidth=this._physicalCount>0?this._physicalItems[0].getBoundingClientRect().width:200,this._rowHeight=this._physicalCount>0?this._physicalItems[0].offsetHeight:200,this._itemsPerRow=this._itemWidth?Math.floor(this._viewportWidth/this._itemWidth):this._itemsPerRow},_positionItems:function(){this._adjustScrollPosition();var e=this._physicalTop;if(this.grid){var t=this._itemsPerRow*this._itemWidth,a=(this._viewportWidth-t)/2;this._iterateItems((function(t,n){var i=n%this._itemsPerRow,o=Math.floor(i*this._itemWidth+a);this._isRTL&&(o*=-1),this.translate3d(o+"px",e+"px",0,this._physicalItems[t]),this._shouldRenderNextRow(n)&&(e+=this._rowHeight)}))}else{var n=[];this._iterateItems((function(t,a){var i=this._physicalItems[t];this.translate3d(0,e+"px",0,i),e+=this._physicalSizes[t];var o=i.id;o&&n.push(o)})),n.length&&this.setAttribute("aria-owns",n.join(" "))}},_getPhysicalSizeIncrement:function(e){return this.grid?this._computeVidx(e)%this._itemsPerRow!=this._itemsPerRow-1?0:this._rowHeight:this._physicalSizes[e]},_shouldRenderNextRow:function(e){return e%this._itemsPerRow==this._itemsPerRow-1},_adjustScrollPosition:function(){var e=0===this._virtualStart?this._physicalTop:Math.min(this._scrollPosition+this._physicalTop,0);if(0!==e){this._physicalTop=this._physicalTop-e;var t=this._scrollPosition;!v&&t>0&&this._resetScrollPosition(t-e)}},_resetScrollPosition:function(e){this.scrollTarget&&e>=0&&(this._scrollTop=e,this._scrollPosition=this._scrollTop)},_updateScrollerSize:function(e){this.grid?this._estScrollHeight=this._virtualRowCount*this._rowHeight:this._estScrollHeight=this._physicalBottom+Math.max(this._virtualCount-this._physicalCount-this._virtualStart,0)*this._physicalAverage,((e=(e=(e=e||0===this._scrollHeight)||this._scrollPosition>=this._estScrollHeight-this._physicalSize)||this.grid&&this.$.items.style.height<this._estScrollHeight)||Math.abs(this._estScrollHeight-this._scrollHeight)>=this._viewportHeight)&&(this.$.items.style.height=this._estScrollHeight+"px",this._scrollHeight=this._estScrollHeight)},scrollToItem:function(e){return this.scrollToIndex(this.items.indexOf(e))},scrollToIndex:function(e){if(!("number"!=typeof e||e<0||e>this.items.length-1)&&(Object(d.b)(),0!==this._physicalCount)){e=this._clamp(e,0,this._virtualCount-1),(!this._isIndexRendered(e)||e>=this._maxVirtualStart)&&(this._virtualStart=this.grid?e-2*this._itemsPerRow:e-1),this._manageFocus(),this._assignModels(),this._updateMetrics(),this._physicalTop=Math.floor(this._virtualStart/this._itemsPerRow)*this._physicalAverage;for(var t=this._physicalStart,a=this._virtualStart,n=0,i=this._hiddenContentSize;a<e&&n<=i;)n+=this._getPhysicalSizeIncrement(t),t=(t+1)%this._physicalCount,a++;this._updateScrollerSize(!0),this._positionItems(),this._resetScrollPosition(this._physicalTop+this._scrollOffset+n),this._increasePoolIfNeeded(0),this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null}},_resetAverage:function(){this._physicalAverage=0,this._physicalAverageCount=0},_resizeHandler:function(){this._debounce("_render",(function(){this._firstVisibleIndexVal=null,this._lastVisibleIndexVal=null,this._isVisible?(this.updateViewportBoundaries(),this.toggleScrollListener(!0),this._resetAverage(),this._render()):this.toggleScrollListener(!1)}),h.a)},selectItem:function(e){return this.selectIndex(this.items.indexOf(e))},selectIndex:function(e){if(!(e<0||e>=this._virtualCount)){if(!this.multiSelection&&this.selectedItem&&this.clearSelection(),this._isIndexRendered(e)){var t=this.modelForElement(this._physicalItems[this._getPhysicalIndex(e)]);t&&(t[this.selectedAs]=!0),this.updateSizeForIndex(e)}this.$.selector.selectIndex(e)}},deselectItem:function(e){return this.deselectIndex(this.items.indexOf(e))},deselectIndex:function(e){if(!(e<0||e>=this._virtualCount)){if(this._isIndexRendered(e))this.modelForElement(this._physicalItems[this._getPhysicalIndex(e)])[this.selectedAs]=!1,this.updateSizeForIndex(e);this.$.selector.deselectIndex(e)}},toggleSelectionForItem:function(e){return this.toggleSelectionForIndex(this.items.indexOf(e))},toggleSelectionForIndex:function(e){(this.$.selector.isIndexSelected?this.$.selector.isIndexSelected(e):this.$.selector.isSelected(this.items[e]))?this.deselectIndex(e):this.selectIndex(e)},clearSelection:function(){this._iterateItems((function(e,t){this.modelForElement(this._physicalItems[e])[this.selectedAs]=!1})),this.$.selector.clearSelection()},_selectionEnabledChanged:function(e){(e?this.listen:this.unlisten).call(this,this,"tap","_selectionHandler")},_selectionHandler:function(e){var t=this.modelForElement(e.target);if(t){var a,n,i=Object(s.a)(e).path[0],o=this._getActiveElement(),r=this._physicalItems[this._getPhysicalIndex(t[this.indexAs])];"input"!==i.localName&&"button"!==i.localName&&"select"!==i.localName&&(a=t.tabIndex,t.tabIndex=-100,n=o?o.tabIndex:-1,t.tabIndex=a,o&&r!==o&&r.contains(o)&&-100!==n||this.toggleSelectionForItem(t[this.as]))}},_multiSelectionChanged:function(e){this.clearSelection(),this.$.selector.multi=e},updateSizeForItem:function(e){return this.updateSizeForIndex(this.items.indexOf(e))},updateSizeForIndex:function(e){return this._isIndexRendered(e)?(this._updateMetrics([this._getPhysicalIndex(e)]),this._positionItems(),null):null},_manageFocus:function(){var e=this._focusedVirtualIndex;e>=0&&e<this._virtualCount?this._isIndexRendered(e)?this._restoreFocusedItem():this._createFocusBackfillItem():this._virtualCount>0&&this._physicalCount>0&&(this._focusedPhysicalIndex=this._physicalStart,this._focusedVirtualIndex=this._virtualStart,this._focusedItem=this._physicalItems[this._physicalStart])},_convertIndexToCompleteRow:function(e){return this._itemsPerRow=this._itemsPerRow||1,this.grid?Math.ceil(e/this._itemsPerRow)*this._itemsPerRow:e},_isIndexRendered:function(e){return e>=this._virtualStart&&e<=this._virtualEnd},_isIndexVisible:function(e){return e>=this.firstVisibleIndex&&e<=this.lastVisibleIndex},_getPhysicalIndex:function(e){return(this._physicalStart+(e-this._virtualStart))%this._physicalCount},focusItem:function(e){this._focusPhysicalItem(e)},_focusPhysicalItem:function(e){if(!(e<0||e>=this._virtualCount)){this._restoreFocusedItem(),this._isIndexRendered(e)||this.scrollToIndex(e);var t,a=this._physicalItems[this._getPhysicalIndex(e)],n=this.modelForElement(a);n.tabIndex=-100,-100===a.tabIndex&&(t=a),t||(t=Object(s.a)(a).querySelector('[tabindex="-100"]')),n.tabIndex=0,this._focusedVirtualIndex=e,t&&t.focus()}},_removeFocusedItem:function(){this._offscreenFocusedItem&&this._itemsParent.removeChild(this._offscreenFocusedItem),this._offscreenFocusedItem=null,this._focusBackfillItem=null,this._focusedItem=null,this._focusedVirtualIndex=-1,this._focusedPhysicalIndex=-1},_createFocusBackfillItem:function(){var e=this._focusedPhysicalIndex;if(!(this._offscreenFocusedItem||this._focusedVirtualIndex<0)){if(!this._focusBackfillItem){var t=this.stamp(null);this._focusBackfillItem=t.root.querySelector("*"),this._itemsParent.appendChild(t.root)}this._offscreenFocusedItem=this._physicalItems[e],this.modelForElement(this._offscreenFocusedItem).tabIndex=0,this._physicalItems[e]=this._focusBackfillItem,this._focusedPhysicalIndex=e,this.translate3d(0,"-10000px",0,this._offscreenFocusedItem)}},_restoreFocusedItem:function(){if(this._offscreenFocusedItem&&!(this._focusedVirtualIndex<0)){this._assignModels();var e=this._focusedPhysicalIndex=this._getPhysicalIndex(this._focusedVirtualIndex),t=this._physicalItems[e];if(t){var a=this.modelForElement(t),n=this.modelForElement(this._offscreenFocusedItem);a[this.as]===n[this.as]?(this._focusBackfillItem=t,a.tabIndex=-1,this._physicalItems[e]=this._offscreenFocusedItem,this.translate3d(0,"-10000px",0,this._focusBackfillItem)):(this._removeFocusedItem(),this._focusBackfillItem=null),this._offscreenFocusedItem=null}}},_didFocus:function(e){var t=this.modelForElement(e.target),a=this.modelForElement(this._focusedItem),n=null!==this._offscreenFocusedItem,i=this._focusedVirtualIndex;t&&(a===t?this._isIndexVisible(i)||this.scrollToIndex(i):(this._restoreFocusedItem(),a&&(a.tabIndex=-1),t.tabIndex=0,i=t[this.indexAs],this._focusedVirtualIndex=i,this._focusedPhysicalIndex=this._getPhysicalIndex(i),this._focusedItem=this._physicalItems[this._focusedPhysicalIndex],n&&!this._offscreenFocusedItem&&this._update()))},_keydownHandler:function(e){switch(e.keyCode){case 40:this._focusedVirtualIndex<this._virtualCount-1&&e.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex+(this.grid?this._itemsPerRow:1));break;case 39:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?-1:1));break;case 38:this._focusedVirtualIndex>0&&e.preventDefault(),this._focusPhysicalItem(this._focusedVirtualIndex-(this.grid?this._itemsPerRow:1));break;case 37:this.grid&&this._focusPhysicalItem(this._focusedVirtualIndex+(this._isRTL?1:-1));break;case 13:this._focusPhysicalItem(this._focusedVirtualIndex),this.selectionEnabled&&this._selectionHandler(e)}},_clamp:function(e,t,a){return Math.min(a,Math.max(t,e))},_debounce:function(e,t,a){this._debouncers=this._debouncers||{},this._debouncers[e]=c.a.debounce(this._debouncers[e],a,t.bind(this)),Object(d.a)(this._debouncers[e])},_forwardProperty:function(e,t,a){e._setPendingProperty(t,a)},_forwardHostPropV2:function(e,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(a){a&&this.modelForElement(a).forwardHostProp(e,t)}),this)},_notifyInstancePropV2:function(e,t,a){if(Object(u.e)(this.as,t)){var n=e[this.indexAs];t==this.as&&(this.items[n]=a),this.notifyPath(Object(u.i)(this.as,"items."+n,t),a)}},_getStampedChildren:function(){return this._physicalItems},_forwardInstancePath:function(e,t,a){0===t.indexOf(this.as+".")&&this.notifyPath("items."+e.__key__+"."+t.slice(this.as.length+1),a)},_forwardParentPath:function(e,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(a){a&&this.modelForElement(a).notifyPath(e,t)}),this)},_forwardParentProp:function(e,t){(this._physicalItems||[]).concat([this._offscreenFocusedItem,this._focusBackfillItem]).forEach((function(a){a&&(this.modelForElement(a)[e]=t)}),this)},_getActiveElement:function(){var e=this._itemsParent.node.domHost;return Object(s.a)(e?e.root:document).activeElement}})},function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var n=a(9),i=a(24),o=a(81),r=a(17),s=a(22),l=a(6),h=a(53),c=a(80);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class d extends(Object(s.a)(Object(r.a)(Object(c.b)([o.a],n.a)))){static get template(){return l.a`
    <style>
      :host {
        display: block;
        max-width: 100%;
        animation: 1ms vaadin-form-layout-appear;
        /* CSS API for host */
        --vaadin-form-layout-column-spacing: 2em; /* (default) */
        align-self: stretch;
      }

      @keyframes vaadin-form-layout-appear {
        to {
          opacity: 1 !important; /* stylelint-disable-line keyframe-declaration-no-important */
        }
      }

      :host([hidden]) {
        display: none !important;
      }

      #layout {
        display: flex;

        align-items: baseline; /* default \`stretch\` is not appropriate */

        flex-wrap: wrap; /* the items should wrap */
      }

      #layout ::slotted(*) {
        /* Items should neither grow nor shrink. */
        flex-grow: 0;
        flex-shrink: 0;

        /* Margins make spacing between the columns */
        margin-left: calc(0.5 * var(--vaadin-form-layout-column-spacing));
        margin-right: calc(0.5 * var(--vaadin-form-layout-column-spacing));
      }

      #layout ::slotted(br) {
        display: none;
      }
    </style>
    <div id="layout">
      <slot id="slot"></slot>
    </div>
`}static get is(){return"vaadin-form-layout"}static get version(){return"2.3.0"}static get properties(){return{responsiveSteps:{type:Array,value:function(){return[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}]},observer:"_responsiveStepsChanged"},_columnCount:{type:Number},_labelsOnTop:{type:Boolean}}}static get observers(){return["_invokeUpdateStyles(_columnCount, _labelsOnTop)"]}ready(){this._styleElement=document.createElement("style"),this.root.appendChild(this._styleElement),this._styleElement.textContent=" ",window.ShadyDOM&&window.ShadyDOM.flush(),super.ready(),this.addEventListener("iron-resize",this._selectResponsiveStep),this.addEventListener("animationend",this.__onAnimationEnd)}connectedCallback(){super.connectedCallback(),Object(h.b)(this,this._selectResponsiveStep),Object(h.b)(this,this.updateStyles),this._observeChildrenColspanChange()}disconnectedCallback(){super.disconnectedCallback(),this.__mutationObserver.disconnect(),this.__childObserver.disconnect()}_observeChildrenColspanChange(){var e={attributes:!0};this.__mutationObserver=new MutationObserver(e=>{e.forEach(e=>{"attributes"!==e.type||"colspan"!==e.attributeName&&"hidden"!==e.attributeName||this._invokeUpdateStyles()})}),this.__childObserver=new i.a(this,t=>{var a=this._getObservableNodes(t.addedNodes),n=this._getObservableNodes(t.removedNodes);a.forEach(t=>{this.__mutationObserver.observe(t,e)}),(a.length>0||n.length>0)&&this._invokeUpdateStyles()})}_getObservableNodes(e){var t=["template","style","dom-repeat","dom-if"];return Array.from(e).filter(e=>e.nodeType===Node.ELEMENT_NODE&&-1===t.indexOf(e.localName.toLowerCase()))}_naturalNumberOrOne(e){return"number"==typeof e&&e>=1&&e<1/0?Math.floor(e):1}_isValidCSSLength(e){return"inherit"!==e&&"normal"!==e&&(this._styleElement.firstChild.nodeValue=`#styleElement { word-spacing: ${e}; }`,!this._styleElement.sheet||["",null].indexOf(this._styleElement.sheet.cssRules[0].style.getPropertyValue("word-spacing"))<0)}_responsiveStepsChanged(e,t){try{if(!Array.isArray(e))throw new Error('Invalid "responsiveSteps" type, an Array is required.');if(e.length<1)throw new Error('Invalid empty "responsiveSteps" array, at least one item is required.');e.forEach(e=>{if(this._naturalNumberOrOne(e.columns)!==e.columns)throw new Error(`Invalid 'columns' value of ${e.columns}, a natural number is required.`);if(void 0!==e.minWidth&&!this._isValidCSSLength(e.minWidth))throw new Error(`Invalid 'minWidth' value of ${e.minWidth}, a valid CSS length required.`);if(void 0!==e.labelsPosition&&-1===["aside","top"].indexOf(e.labelsPosition))throw new Error(`Invalid 'labelsPosition' value of ${e.labelsPosition}, 'aside' or 'top' string is required.`)})}catch(a){t&&t!==e?(console.warn(a.message+" Using previously set 'responsiveSteps' instead."),this.responsiveSteps=t):(console.warn(a.message+" Using default 'responsiveSteps' instead."),this.responsiveSteps=[{minWidth:0,columns:1,labelsPosition:"top"},{minWidth:"20em",columns:1},{minWidth:"40em",columns:2}])}this._selectResponsiveStep()}__onAnimationEnd(e){0===e.animationName.indexOf("vaadin-form-layout-appear")&&this._selectResponsiveStep()}_selectResponsiveStep(){var e;this.responsiveSteps.forEach(t=>{this.$.layout.style.setProperty("background-position",t.minWidth),parseFloat(getComputedStyle(this.$.layout).getPropertyValue("background-position"))<=this.offsetWidth&&(e=t)}),this.$.layout.style.removeProperty("background-position"),e&&(this._columnCount=e.columns,this._labelsOnTop="top"===e.labelsPosition),/\b(Edge|Trident)\//.test(navigator.userAgent)&&this.offsetWidth!==this._lastOffsetWidth&&(this.updateStyles(),this._lastOffsetWidth=this.offsetWidth)}_invokeUpdateStyles(){this.updateStyles()}updateStyles(e){super.updateStyles(e);var t=window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-form-layout-column-spacing"):getComputedStyle(this).getPropertyValue("--vaadin-form-layout-column-spacing"),a=getComputedStyle(this).direction,n="margin-"+("ltr"===a?"left":"right"),i="margin-"+("ltr"===a?"right":"left"),o=this.offsetWidth;window.ShadyDOM&&window.ShadyDOM.flush();var r=0;Array.from(this.children).filter(e=>"br"===e.localName||"none"!==getComputedStyle(e).display).forEach((e,a,s)=>{if("br"!==e.localName){var l;l=this._naturalNumberOrOne(parseFloat(e.getAttribute("colspan")));var h=(l=Math.min(l,this._columnCount))/this._columnCount;e.style.width=`calc(${99.9*h}% - ${1-h} * ${t})`,r+l>this._columnCount&&(r=0),0===r?e.style.setProperty(n,"0px"):e.style.removeProperty(n);var c=a+1,d=c<s.length&&"br"===s[c].localName;if(r+l===this._columnCount)e.style.setProperty(i,"0px");else if(d){var p=(this._columnCount-r-l)/this._columnCount;e.style.setProperty(i,`calc(${p*o}px + ${p} * ${t})`)}else e.style.removeProperty(i);r=(r+l)%this._columnCount,"vaadin-form-item"===e.localName&&(this._labelsOnTop?e.setAttribute("label-position","top"):e.removeAttribute("label-position"))}else r=0})}}customElements.define(d.is,d)},function(e,t,a){"use strict";a(43);var n=a(11),i=a(24),o=a(108),r=a(158),s=a(9);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class l extends(Object(o.a)(s.a)){static get is(){return"vaadin-grid-column-group"}static get properties(){return{_childColumns:{value:function(){return this._getChildColumns(this)}},flexGrow:{type:Number,readOnly:!0},width:{type:String,readOnly:!0},_visibleChildColumns:Array,_colSpan:Number,_rootColumns:Array}}static get observers(){return["_updateVisibleChildColumns(_childColumns)","_childColumnsChanged(_childColumns)","_groupFrozenChanged(frozen, _rootColumns)","_groupHiddenChanged(hidden, _rootColumns)","_visibleChildColumnsChanged(_visibleChildColumns)","_colSpanChanged(_colSpan, _headerCell, _footerCell)","_groupOrderChanged(_order, _rootColumns)","_groupReorderStatusChanged(_reorderStatus, _rootColumns)","_groupResizableChanged(resizable, _rootColumns)"]}connectedCallback(){super.connectedCallback(),this._addNodeObserver(),this._updateFlexAndWidth()}disconnectedCallback(){super.disconnectedCallback(),this._observer&&this._observer.disconnect()}_columnPropChanged(e,t){"hidden"===e&&(this._preventHiddenCascade=!0,this._updateVisibleChildColumns(this._childColumns),this._preventHiddenCascade=!1),/flexGrow|width|hidden|_childColumns/.test(e)&&this._updateFlexAndWidth(),"frozen"===e&&(this.frozen=this.frozen||t),"lastFrozen"===e&&(this._lastFrozen=this._lastFrozen||t)}_groupOrderChanged(e,t){if(t){var a=t.slice(0);if(!e)return void a.forEach(e=>e._order=0);var n=/(0+)$/.exec(e).pop().length,i=1+~~(Math.log(t.length)/Math.LN10),o=Math.pow(10,n-i);a[0]&&a[0]._order&&a.sort((e,t)=>e._order-t._order),r.a._updateColumnOrders(a,o,e)}}_groupReorderStatusChanged(e,t){void 0!==e&&void 0!==t&&t.forEach(t=>t._reorderStatus=e)}_groupResizableChanged(e,t){void 0!==e&&void 0!==t&&t.forEach(t=>t.resizable=e)}_updateVisibleChildColumns(e){this._visibleChildColumns=Array.prototype.filter.call(e,e=>!e.hidden)}_childColumnsChanged(e){!this._autoHidden&&this.hidden&&(Array.prototype.forEach.call(e,e=>e.hidden=!0),this._updateVisibleChildColumns(e))}_updateFlexAndWidth(){this._visibleChildColumns&&(this._visibleChildColumns.length?this._setWidth("calc("+Array.prototype.reduce.call(this._visibleChildColumns,(e,t)=>e+" + "+(t.width||"0px").replace("calc",""),"").substring(3)+")"):this._setWidth("0px"),this._setFlexGrow(Array.prototype.reduce.call(this._visibleChildColumns,(e,t)=>e+t.flexGrow,0)))}_groupFrozenChanged(e,t){void 0!==t&&void 0!==e&&!1!==e&&Array.from(t).forEach(t=>t.frozen=e)}_groupHiddenChanged(e,t){t&&!this._preventHiddenCascade&&(this._ignoreVisibleChildColumns=!0,t.forEach(t=>t.hidden=e),this._ignoreVisibleChildColumns=!1),this._columnPropChanged("hidden")}_visibleChildColumnsChanged(e){this._colSpan=e.length,this._ignoreVisibleChildColumns||(0===e.length?this._autoHidden=this.hidden=!0:this.hidden&&this._autoHidden&&(this._autoHidden=this.hidden=!1))}_colSpanChanged(e,t,a){t&&(t.setAttribute("colspan",e),this._grid&&this._grid._a11yUpdateCellColspan(t,e)),a&&(a.setAttribute("colspan",e),this._grid&&this._grid._a11yUpdateCellColspan(a,e))}_getChildColumns(e){return i.a.getFlattenedNodes(e).filter(this._isColumnElement)}_addNodeObserver(){this._observer=new i.a(this,e=>{(e.addedNodes.filter(this._isColumnElement).length>0||e.removedNodes.filter(this._isColumnElement).length>0)&&(this._preventHiddenCascade=!0,this._rootColumns=this._getChildColumns(this),this._childColumns=this._rootColumns,this._preventHiddenCascade=!1,n.c.run(()=>{this._grid&&this._grid._updateColumnTree&&this._grid._updateColumnTree()}))}),this._observer.flush()}_isColumnElement(e){return e.nodeType===Node.ELEMENT_NODE&&/\bcolumn\b/.test(e.localName)}}customElements.define(l.is,l)},function(e,t,a){"use strict";a(43),a(75);var n=a(17),i=a(65),o=a(6),r=a(9),s=document.createElement("template");s.innerHTML="<custom-style>\n  <style>\n    @font-face {\n      font-family: 'vaadin-grid-sorter-icons';\n      src: url(data:application/font-woff;charset=utf-8;base64,d09GRgABAAAAAAQwAA0AAAAABuwAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAABGRlRNAAAEFAAAABkAAAAcfep+mUdERUYAAAP4AAAAHAAAAB4AJwAOT1MvMgAAAZgAAAA/AAAAYA8TBPpjbWFwAAAB7AAAAFUAAAFeF1fZ4mdhc3AAAAPwAAAACAAAAAgAAAAQZ2x5ZgAAAlgAAABcAAAAnMvguMloZWFkAAABMAAAAC8AAAA2C5Ap72hoZWEAAAFgAAAAHQAAACQGbQPHaG10eAAAAdgAAAAUAAAAHAoAAABsb2NhAAACRAAAABIAAAASAIwAYG1heHAAAAGAAAAAFgAAACAACwAKbmFtZQAAArQAAAECAAACZxWCgKhwb3N0AAADuAAAADUAAABZCrApUXicY2BkYGAA4rDECVrx/DZfGbhZGEDgyqNPOxH0/wNMq5kPALkcDEwgUQBWRA0dAHicY2BkYGA+8P8AAwMLAwgwrWZgZEAFbABY4QM8AAAAeJxjYGRgYOAAQiYGEICQSAAAAi8AFgAAeJxjYGY6yziBgZWBgWkm0xkGBoZ+CM34msGYkZMBFTAKoAkwODAwvmRiPvD/AIMDMxCD1CDJKjAwAgBktQsXAHicY2GAAMZQCM0EwqshbAALxAEKeJxjYGBgZoBgGQZGBhCIAPIYwXwWBhsgzcXAwcAEhIwMCi+Z/v/9/x+sSuElA4T9/4k4K1gHFwMMMILMY2QDYmaoABOQYGJABUA7WBiGNwAAJd4NIQAAAAAAAAAACAAIABAAGAAmAEAATgAAeJyNjLENgDAMBP9tIURJwQCMQccSZgk2i5fIYBDAidJjycXr7x5EPwE2wY8si7jmyBNXGo/bNBerxJNrpxhbO3/fEFpx8ZICpV+ghxJ74fAMe+h7Ox14AbrsHB14nK2QQWrDMBRER4mTkhQK3ZRQKOgCNk7oGQqhhEIX2WSlWEI1BAlkJ5CDdNsj5Ey9Rncdi38ES+jzNJo/HwTgATcoDEthhY3wBHc4CE+pfwsX5F/hGe7Vo/AcK/UhvMSz+mGXKhZU6pww8ISz3oWn1BvhgnwTnuEJf8Jz1OpFeIlX9YULDLdFi4ASHolkSR0iuYdjLak1vAequBhj21D61Nqyi6l3qWybGPjySbPHGScGJl6dP58MYcQRI0bts7mjebBqrFENH7t3qWtj0OuqHnXcW7b0HOTZFnKryRGW2hFX1m0O2vEM3opNMfTau+CS6Z3Vx6veNnEXY6jwDxhsc2gAAHicY2BiwA84GBgYmRiYGJkZmBlZGFkZ2djScyoLMgzZS/MyDQwMwLSrpYEBlIbxjQDrzgsuAAAAAAEAAf//AA94nGNgZGBg4AFiMSBmYmAEQnYgZgHzGAAD6wA2eJxjYGBgZACCKyoz1cD0o087YTQATOcIewAAAA==) format('woff');\n      font-weight: normal;\n      font-style: normal;\n    }\n  </style>\n</custom-style>",document.head.appendChild(s.content);class l extends(Object(n.a)(Object(i.a)(r.a))){static get template(){return o.a`
    <style>
      :host {
        display: inline-flex;
        cursor: pointer;
        max-width: 100%;
      }

      [part="content"] {
        flex: 1 1 auto;
      }

      [part="indicators"] {
        position: relative;
        align-self: center;
        flex: none;
      }

      [part="order"] {
        display: inline;
        vertical-align: super;
      }

      [part="indicators"]::before {
        font-family: 'vaadin-grid-sorter-icons';
        display: inline-block;
      }

      :host(:not([direction])) [part="indicators"]::before {
        content: "\\e901";
      }

      :host([direction=asc]) [part="indicators"]::before {
        content: "\\e900";
      }

      :host([direction=desc]) [part="indicators"]::before {
        content: "\\e902";
      }
    </style>

    <div part="content">
      <slot></slot>
    </div>
    <div part="indicators">
      <span part="order">[[_getDisplayOrder(_order)]]</span>
    </div>
`}static get is(){return"vaadin-grid-sorter"}static get properties(){return{path:String,direction:{type:String,reflectToAttribute:!0,notify:!0,value:null},_order:{type:Number,value:null},_isConnected:{type:Boolean,observer:"__isConnectedChanged"}}}static get observers(){return["_pathOrDirectionChanged(path, direction)","_directionOrOrderChanged(direction, _order)"]}ready(){super.ready(),this.addEventListener("click",this._onClick.bind(this))}connectedCallback(){super.connectedCallback(),this._isConnected=!0}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1}_pathOrDirectionChanged(){this.__dispatchSorterChangedEvenIfPossible()}__isConnectedChanged(e,t){!1!==t&&this.__dispatchSorterChangedEvenIfPossible()}__dispatchSorterChangedEvenIfPossible(){void 0!==this.path&&void 0!==this.direction&&this._isConnected&&this.dispatchEvent(new CustomEvent("sorter-changed",{bubbles:!0,composed:!0}))}_getDisplayOrder(e){return null===e?"":e+1}_onClick(e){var t=this.getRootNode().activeElement;this!==t&&this.contains(t)||(e.preventDefault(),"asc"===this.direction?this.direction="desc":"desc"===this.direction?this.direction=null:this.direction="asc")}_directionOrOrderChanged(e,t){void 0!==e&&void 0!==t&&(/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root&&this.root.querySelectorAll("*").forEach((function(e){e.style["-webkit-backface-visibility"]="visible",e.style["-webkit-backface-visibility"]=""})))}}customElements.define(l.is,l)},function(e,t,a){"use strict";a(41),a(78),a(63),a(32),a(47),a(51),a(175),a(256),a(181)},function(e,t,a){"use strict";a(41),a(78),a(63),a(32),a(47),a(51),a(175);var n=a(6).a`<dom-module id="lumo-grid" theme-for="vaadin-grid">
  <template>
    <style>
      :host {
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-body-text-color);
        background-color: var(--lumo-base-color);
        box-sizing: border-box;
        -webkit-text-size-adjust: 100%;
        -webkit-tap-highlight-color: transparent;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

        /* For internal use only */
        --_lumo-grid-border-color: var(--lumo-contrast-20pct);
        --_lumo-grid-secondary-border-color: var(--lumo-contrast-10pct);
        --_lumo-grid-border-width: 1px;
        --_lumo-grid-selected-row-color: var(--lumo-primary-color-10pct);
      }

      /* No (outer) border */

      :host(:not([theme~="no-border"])) {
        border: var(--_lumo-grid-border-width) solid var(--_lumo-grid-border-color);
      }

      /* Cell styles */

      [part~="cell"] {
        min-height: var(--lumo-size-m);
        background-color: var(--lumo-base-color);
      }

      [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        cursor: default;
        padding: var(--lumo-space-xs) var(--lumo-space-m);
      }

      /* Apply row borders by default and introduce the "no-row-borders" variant */
      :host(:not([theme~="no-row-borders"])) [part~="cell"]:not([part~="details-cell"]) {
        border-top: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Hide first body row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        border-top: 0;
        min-height: calc(var(--lumo-size-m) - var(--_lumo-grid-border-width));
      }

      /* Focus-ring */

      [part~="cell"]:focus {
        outline: none;
      }

      :host([navigating]) [part~="cell"]:focus::before {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      /* Drag and Drop styles */
      :host([dragover])::after {
        content: "";
        position: absolute;
        z-index: 100;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-shadow: inset 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      [part~="row"][dragover] {
        z-index: 100 !important;
      }

      [part~="row"][dragover] [part~="cell"] {
        overflow: visible;
      }

      [part~="row"][dragover] [part~="cell"]::after {
        content: "";
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        height: calc(var(--_lumo-grid-border-width) + 2px);
        pointer-events: none;
        background: var(--lumo-primary-color-50pct);
      }

      :host([theme~="no-row-borders"]) [dragover] [part~="cell"]::after {
        height: 2px;
      }

      [part~="row"][dragover="below"] [part~="cell"]::after {
        top: 100%;
        bottom: auto;
        margin-top: -1px;
      }

      [part~="row"][dragover="above"] [part~="cell"]::after {
        top: auto;
        bottom: 100%;
        margin-bottom: -1px;
      }

      [part~="row"][details-opened][dragover="below"] [part~="cell"]:not([part~="details-cell"])::after,
      [part~="row"][details-opened][dragover="above"] [part~="details-cell"]::after {
        display: none;
      }

      [part~="row"][dragover][dragover="on-top"] [part~="cell"]::after {
        height: 100%;
      }

      [part~="row"][dragstart] {
        /* Add bottom-space to the row so the drag number doesn't get clipped. Needed for IE/Edge */
        border-bottom: 100px solid transparent;
        z-index: 100 !important;
        opacity: 0.9;
      }

      [part~="row"][dragstart] [part~="cell"] {
        border: none !important;
        box-shadow: none !important;
      }

      [part~="row"][dragstart] [part~="cell"][last-column] {
        border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      }

      [part~="row"][dragstart] [part~="cell"][first-column] {
        border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      }

      [ios] [part~="row"][dragstart] [part~="cell"] {
        background: var(--lumo-primary-color-50pct);
      }

      #scroller:not([ios]) [part~="row"][dragstart]:not([dragstart=""])::after {
        display: block;
        position: absolute;
        left: var(--_grid-drag-start-x);
        top: var(--_grid-drag-start-y);
        z-index: 100;
        content: attr(dragstart);
        align-items: center;
        justify-content: center;
        box-sizing: border-box;
        padding: calc(var(--lumo-space-xs) * 0.8);
        color: var(--lumo-error-contrast-color);
        background-color: var(--lumo-error-color);
        border-radius: var(--lumo-border-radius-m);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-xxs);
        line-height: 1;
        font-weight: 500;
        text-transform: initial;
        letter-spacing: initial;
        min-width: calc(var(--lumo-size-s) * 0.7);
        text-align: center;
      }

      /* Headers and footers */

      [part~="header-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content),
      [part~="reorder-ghost"] {
        font-size: var(--lumo-font-size-s);
        font-weight: 500;
      }

      [part~="footer-cell"] ::slotted(vaadin-grid-cell-content) {
        font-weight: 400;
      }

      [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-xl);
      }

      /* Header borders */

      /* Hide first header row top border */
      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="header-cell"] {
        border-top: 0;
      }

      [part="row"]:last-child [part~="header-cell"] {
        border-bottom: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="top"]) [part="row"]:last-child [part~="header-cell"] {
        border-bottom-color: var(--_lumo-grid-border-color);
      }

      /* Footer borders */

      [part="row"]:first-child [part~="footer-cell"] {
        border-top: var(--_lumo-grid-border-width) solid transparent;
      }

      :host(:not([theme~="no-row-borders"])) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-secondary-border-color);
      }

      /* Overflow uses a stronger border color */
      :host([overflow~="bottom"]) [part="row"]:first-child [part~="footer-cell"] {
        border-top-color: var(--_lumo-grid-border-color);
      }

      /* Column reordering */

      :host([reordering]) [part~="cell"] {
        background: linear-gradient(var(--lumo-shade-20pct), var(--lumo-shade-20pct)) var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="allowed"] {
        background: var(--lumo-base-color);
      }

      :host([reordering]) [part~="cell"][reorder-status="dragging"] {
        background: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct)) var(--lumo-base-color);
      }

      [part~="reorder-ghost"] {
        opacity: 0.85;
        box-shadow: var(--lumo-box-shadow-s);
        /* TODO Use the same styles as for the cell element (reorder-ghost copies styles from the cell element) */
        padding: var(--lumo-space-s) var(--lumo-space-m) !important;
      }

      /* Column resizing */

      [part="resize-handle"] {
        width: 3px;
        background-color: var(--lumo-primary-color-50pct);
        opacity: 0;
        transition: opacity 0.2s;
      }

      :host(:not([reordering])) *:not([column-resizing]) [part~="cell"]:hover [part="resize-handle"],
      [part="resize-handle"]:active {
        opacity: 1;
        transition-delay: 0.15s;
      }

      /* Column borders */

      :host([theme~="column-borders"]) [part~="cell"]:not([last-column]):not([part~="details-cell"]) {
        border-right: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      /* Frozen columns */

      [last-frozen] {
        border-right: var(--_lumo-grid-border-width) solid transparent;
        overflow: hidden;
      }

      :host([overflow~="left"]) [part~="cell"][last-frozen]:not([part~="details-cell"]) {
        border-right-color: var(--_lumo-grid-border-color);
      }

      /* Row stripes */

      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="body-cell"],
      :host([theme~="row-stripes"]) [part~="row"]:not([odd]) [part~="details-cell"] {
        background-image: linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
        background-repeat: repeat-x;
      }

      /* Selected row */

      /* Raise the selected rows above unselected rows (so that box-shadow can cover unselected rows) */
      :host(:not([reordering])) [part~="row"][selected] {
        z-index: 1;
      }

      :host(:not([reordering])) [part~="row"][selected] [part~="body-cell"]:not([part~="details-cell"]) {
        background-image: linear-gradient(var(--_lumo-grid-selected-row-color), var(--_lumo-grid-selected-row-color));
        background-repeat: repeat;
      }

      /* Cover the border of an unselected row */
      :host(:not([theme~="no-row-borders"])) [part~="row"][selected] [part~="cell"]:not([part~="details-cell"]) {
        box-shadow: 0 var(--_lumo-grid-border-width) 0 0 var(--_lumo-grid-selected-row-color);
      }

      /* Compact */

      :host([theme~="compact"]) [part="row"]:only-child [part~="header-cell"] {
        min-height: var(--lumo-size-m);
      }

      :host([theme~="compact"]) [part~="cell"] {
        min-height: var(--lumo-size-s);
      }

      :host([theme~="compact"]) [part="row"][first] [part~="cell"]:not([part~="details-cell"]) {
        min-height: calc(var(--lumo-size-s) - var(--_lumo-grid-border-width));
      }

      :host([theme~="compact"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        padding: var(--lumo-space-xs) var(--lumo-space-s);
      }

      /* Wrap cell contents */

      :host([theme~="wrap-cell-content"]) [part~="cell"] ::slotted(vaadin-grid-cell-content) {
        white-space: normal;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part~="row"][dragstart] [part~="cell"][last-column] {
        border-radius: var(--lumo-border-radius-s) 0 0 var(--lumo-border-radius-s);
      }

      :host([dir="rtl"]) [part~="row"][dragstart] [part~="cell"][first-column] {
        border-radius: 0 var(--lumo-border-radius-s) var(--lumo-border-radius-s) 0;
      }

      :host([dir="rtl"][theme~="column-borders"]) [part~="cell"]:not([last-column]):not([part~="details-cell"]) {
        border-right: none;
        border-left: var(--_lumo-grid-border-width) solid var(--_lumo-grid-secondary-border-color);
      }

      :host([dir="rtl"]) [last-frozen] {
        border-right: none;
        border-left: var(--_lumo-grid-border-width) solid transparent;
      }

      :host([dir="rtl"][overflow~="right"]) [part~="cell"][last-frozen]:not([part~="details-cell"]) {
        border-left-color: var(--_lumo-grid-border-color);
      }
    </style>
  </template>
</dom-module><dom-module theme-for="vaadin-checkbox" id="vaadin-grid-select-all-checkbox-lumo">
  <template>
    <style>
      :host(.vaadin-grid-select-all-checkbox) {
        font-size: var(--lumo-font-size-m);
      }
   </style>
  </template>
</dom-module>`;document.head.appendChild(n.content)},function(e,t,a){"use strict";a(41),a(32),a(51);var n=a(6).a`<dom-module id="lumo-login-form-wrapper" theme-for="vaadin-login-form-wrapper">
  <template>
    <style include="lumo-color lumo-typography">
      :host {
        max-width: calc(var(--lumo-size-m) * 10);
        background: var(--lumo-base-color) linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
      }

      [part="form"] {
        padding: var(--lumo-space-l);
      }

      [part="form-title"] {
        margin-top: calc(var(--lumo-font-size-xxxl) - var(--lumo-font-size-xxl));
      }

      #forgotPasswordButton {
        margin: var(--lumo-space-s) auto;
      }

      [part="error-message"] {
        background-color: var(--lumo-error-color-10pct);
        padding: var(--lumo-space-m);
        border-radius: var(--lumo-border-radius);
        margin-top: var(--lumo-space-m);
        margin-bottom: var(--lumo-space-s);
        color: var(--lumo-error-text-color);
      }

      :host(:not([dir="rtl"])) [part="error-message"] {
        padding-left: var(--lumo-size-m);
      }

      :host([dir="rtl"]) [part="error-message"] {
        padding-right: var(--lumo-size-m);
      }

      [part="error-message"]::before {
        content: var(--lumo-icons-error);
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        position: absolute;
        width: var(--lumo-size-m);
        height: 1em;
        line-height: 1;
        text-align: center;
      }

      :host(:not([dir="rtl"])) [part="error-message"]::before {
        /* Visual centering */
        margin-left: calc(var(--lumo-size-m) * -0.95);
      }

      :host([dir="rtl"]) [part="error-message"]::before {
        /* Visual centering */
        margin-right: calc(var(--lumo-size-m) * -0.95);
      }

      [part="error-message-title"] {
        margin: 0 0 0.25em;
        color: inherit;
      }

      [part="error-message-description"] {
        font-size: var(--lumo-font-size-s);
        line-height: var(--lumo-line-height-s);
        margin: 0;
        opacity: 0.9;
      }

      [part="footer"] {
        font-size: var(--lumo-font-size-xs);
        line-height: var(--lumo-line-height-s);
        color: var(--lumo-secondary-text-color);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content)},function(e,t,a){"use strict";a(220),a(84),a(219);var n=a(6),i=a(150),o=a(22),r=a(17),s=a(9);class l extends(Object(i.a)(Object(o.a)(Object(r.a)(s.a)))){static get template(){return n.a`
    <style>
      [part="vaadin-login-native-form"] * {
        width: 100%;
      }
    </style>
    <vaadin-login-form-wrapper theme\$="[[theme]]" part="vaadin-login-native-form-wrapper" action="{{action}}" disabled="{{disabled}}" error="{{error}}" no-forgot-password="{{noForgotPassword}}" i18n="{{i18n}}" on-login="_retargetEvent" on-forgot-password="_retargetEvent">

      <form part="vaadin-login-native-form" method="POST" action\$="[[action]]" slot="form">
        <vaadin-text-field name="username" label="[[i18n.form.username]]" id="vaadinLoginUsername" required="" on-keydown="_handleInputKeydown" autocapitalize="none" autocorrect="off" spellcheck="false">
          <input type="text" slot="input" on-keyup="_handleInputKeyup">
        </vaadin-text-field>

        <vaadin-password-field name="password" label="[[i18n.form.password]]" id="vaadinLoginPassword" required="" on-keydown="_handleInputKeydown" spellcheck="false">
          <input type="password" slot="input" on-keyup="_handleInputKeyup">
        </vaadin-password-field>

        <vaadin-button part="vaadin-login-submit" theme="primary contained" on-click="submit" disabled\$="[[disabled]]">[[i18n.form.submit]]</vaadin-button>
      </form>
    </vaadin-login-form-wrapper>
`}static get is(){return"vaadin-login-form"}static get version(){return"1.2.0"}connectedCallback(){super.connectedCallback(),this._handleInputKeydown=this._handleInputKeydown.bind(this)}_attachDom(e){this.appendChild(e)}static get observers(){return["_errorChanged(error)"]}_errorChanged(){this.error&&!this._preventAutoEnable&&(this.disabled=!1)}submit(){if(!this.disabled&&this.__isValid(this.$.vaadinLoginUsername)&&this.__isValid(this.$.vaadinLoginPassword)){this.error=!1,this.disabled=!0;var e={bubbles:!0,cancelable:!0,detail:{username:this.$.vaadinLoginUsername.value,password:this.$.vaadinLoginPassword.value}},t=this.dispatchEvent(new CustomEvent("login",e));this.action&&t&&this.querySelector('[part="vaadin-login-native-form"]').submit()}}__isValid(e){return e.validate&&e.validate()||e.checkValidity&&e.checkValidity()}_isEnterKey(e){return"Enter"===e.key||13===e.keyCode}_handleInputKeydown(e){if(this._isEnterKey(e)){var{currentTarget:t}=e,a="vaadinLoginUsername"===t.id?this.$.vaadinLoginPassword:this.$.vaadinLoginUsername;this.__isValid(t)&&(this.__isValid(a)?this.submit():a.focus())}}_handleInputKeyup(e){var t="Tab"===e.key||9===e.keyCode,a=e.currentTarget;t&&a&&a.select&&(a.select(),setTimeout(()=>a.setSelectionRange(0,9999)))}}customElements.define(l.is,l)},function(e,t,a){"use strict";a.d(t,"a",(function(){return s}));a(9),a(75);var n,i=a(84),o=a(55),r=a(6).a`<dom-module id="vaadin-number-field-template">
  <template>
    <style>
      :host([readonly]) [part\$="button"] {
        pointer-events: none;
      }

      [part="decrease-button"]::before {
        content: "−";
      }

      [part="increase-button"]::before {
        content: "+";
      }

      [part="decrease-button"],
      [part="increase-button"] {
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      /* Hide the native arrow icons */
      [part="value"]::-webkit-outer-spin-button,
      [part="value"]::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
      }

      [part="value"] {
        /* Older Firefox versions (v47.0) requires !important */
        -moz-appearance: textfield !important;
      }

      :host([dir="rtl"]) [part="input-field"] {
        direction: ltr;
      }

      :host([dir="rtl"]) [part="value"]::placeholder {
        direction: rtl;
      }

      :host([dir="rtl"]) [part="input-field"] ::slotted(input)::placeholder {
        direction: rtl;
      }

      :host([dir="rtl"]) [part="value"]:-ms-input-placeholder,
      :host([dir="rtl"]) [part="input-field"] ::slotted(input):-ms-input-placeholder {
        direction: rtl;
      }

      :host([dir="rtl"]:not([has-controls])) [part="value"]::placeholder {
        text-align: left;
      }

      :host([dir="rtl"]:not([has-controls])) [part="input-field"] ::slotted(input)::placeholder {
        text-align: left;
      }

      :host([dir="rtl"]:not([has-controls])) [part="value"]:-ms-input-placeholder,
      :host([dir="rtl"]:not([has-controls])) [part="input-field"] ::slotted(input):-ms-input-placeholder {
        text-align: left;
      }
    </style>

    <div disabled\$="[[!_allowed(-1, value, min, max, step)]]" part="decrease-button" on-click="_decreaseValue" on-touchend="_decreaseButtonTouchend" hidden\$="[[!hasControls]]">
    </div>

    <div disabled\$="[[!_allowed(1, value, min, max, step)]]" part="increase-button" on-click="_increaseValue" on-touchend="_increaseButtonTouchend" hidden\$="[[!hasControls]]">
    </div>
  </template>

  
</dom-module>`;document.head.appendChild(r.content);class s extends i.a{static get is(){return"vaadin-number-field"}static get version(){return"2.8.6"}static get properties(){return{hasControls:{type:Boolean,value:!1,reflectToAttribute:!0},min:{type:Number,reflectToAttribute:!0,observer:"_minChanged"},max:{type:Number,reflectToAttribute:!0,observer:"_maxChanged"},step:{type:Number,value:1,observer:"_stepChanged"}}}ready(){super.ready(),this.__previousValidInput=this.value||"",this.inputElement.type="number",this.inputElement.addEventListener("change",this.__onInputChange.bind(this))}_decreaseButtonTouchend(e){e.preventDefault(),this._decreaseValue()}_increaseButtonTouchend(e){e.preventDefault(),this._increaseValue()}static get template(){if(!n){n=super.template.cloneNode(!0);var e=o.a.import(this.is+"-template","template"),t=e.content.querySelector('[part="decrease-button"]'),a=e.content.querySelector('[part="increase-button"]'),i=e.content.querySelector("style"),r=n.content.querySelector('[part="input-field"]'),s=n.content.querySelector('[name="prefix"]');r.insertBefore(t,s),r.appendChild(a),n.content.appendChild(i)}return n}_createConstraintsObserver(){this._createMethodObserver("_constraintsChanged(required, minlength, maxlength, pattern, min, max, step)")}_constraintsChanged(e,t,a,n,i,o,r){if(this.invalid){var s=e=>!e&&0!==e;s(i)&&s(o)?super._constraintsChanged(e,t,a,n):this.validate()}}_decreaseValue(){this._incrementValue(-1)}_increaseValue(){this._incrementValue(1)}_incrementValue(e){if(!this.disabled&&!this.readonly){var t=parseFloat(this.value);this.value?t<this.min?(e=0,t=this.min):t>this.max&&(e=0,t=this.max):0==this.min&&e<0||0==this.max&&e>0||0==this.max&&0==this.min?(e=0,t=0):(null==this.max||this.max>=0)&&(null==this.min||this.min<=0)?t=0:this.min>0?(t=this.min,this.max<0&&e<0&&(t=this.max),e=0):this.max<0&&(t=this.max,e<0?e=0:this._getIncrement(1,t-this.step)>this.max?t-=2*this.step:t-=this.step);var a=this._getIncrement(e,t);this.value&&0!=e&&!this._incrementIsInsideTheLimits(e,t)||this._setValue(a)}}_setValue(e){this.value=this.inputElement.value=String(parseFloat(e)),this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}_getIncrement(e,t){var a=this.step||1,n=this.min||0,i=Math.max(this._getMultiplier(t),this._getMultiplier(a),this._getMultiplier(n));a*=i;var o=((t=Math.round(t*i))-(n*=i))%a;return e>0?(t-o+a)/i:e<0?(t-(o||a))/i:t/i}_getDecimalCount(e){var t=String(e),a=t.indexOf(".");return-1===a?1:t.length-a-1}_getMultiplier(e){if(!isNaN(e))return Math.pow(10,this._getDecimalCount(e))}_incrementIsInsideTheLimits(e,t){return e<0?null==this.min||this._getIncrement(e,t)>=this.min:e>0?null==this.max||this._getIncrement(e,t)<=this.max:this._getIncrement(e,t)<=this.max&&this._getIncrement(e,t)>=this.min}_allowed(e){var t=e*(this.step||1),a=parseFloat(this.value);return!this.value||!this.disabled&&this._incrementIsInsideTheLimits(t,a)}_stepChanged(e,t){this.__validateByStep=this.__stepChangedCalled||null!==this.getAttribute("step"),this.inputElement.step=this.__validateByStep?e:"any",this.__stepChangedCalled=!0,this.setAttribute("step",e)}_minChanged(e){this.inputElement.min=e}_maxChanged(e){this.inputElement.max=e}_valueChanged(e,t){e&&isNaN(parseFloat(e))?this.value="":"string"!=typeof this.value&&(this.value=String(this.value)),super._valueChanged(this.value,t)}_onKeyDown(e){38==e.keyCode?(e.preventDefault(),this._increaseValue()):40==e.keyCode&&(e.preventDefault(),this._decreaseValue()),super._onKeyDown(e)}__onInputChange(){this.validate()}checkValidity(){return void 0!==this.min||void 0!==this.max||this.__validateByStep?this.inputElement.checkValidity():super.checkValidity()}}window.customElements.define(s.is,s)},function(e,t,a){"use strict";a(41),a(63),a(51);var n=a(6).a`<dom-module id="lumo-text-area" theme-for="vaadin-text-area">
  <template>
    <style include="lumo-text-field">
      [part="input-field"],
      [part="input-field"] ::slotted(textarea) {
        /* Equal to the implicit padding in vaadin-text-field */
        padding-top: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
        padding-bottom: calc((var(--lumo-text-field-size) - 1em * var(--lumo-line-height-s)) / 2);
        height: auto;
        box-sizing: border-box;
        transition: background-color 0.1s;
        line-height: var(--lumo-line-height-s);
      }

      :host(:not([readonly])) [part="input-field"]::after {
        display: none;
      }

      :host([readonly]) [part="input-field"] {
        border: 1px dashed var(--lumo-contrast-30pct);
      }

      :host([readonly]) [part="input-field"]::after {
        border: none;
      }

      :host(:hover:not([readonly]):not([focused]):not([invalid])) [part="input-field"] {
        background-color: var(--lumo-contrast-20pct);
      }

      @media (pointer: coarse) {
        :host(:hover:not([readonly]):not([focused]):not([invalid])) [part="input-field"] {
          background-color: var(--lumo-contrast-10pct);
        }

        :host(:active:not([readonly]):not([focused])) [part="input-field"] {
          background-color: var(--lumo-contrast-20pct);
        }
      }

      [part="value"],
      [part="input-field"] ::slotted(textarea) {
        line-height: inherit;
        --_lumo-text-field-overflow-mask-image: none;
      }

      /* Vertically align icon prefix/suffix with the first line of text */
      [part="input-field"] ::slotted(iron-icon) {
        margin-top: calc((var(--lumo-icon-size-m) - 1em * var(--lumo-line-height-s)) / -2);
      }

      [part="input-field"] [part="value"],
      [part="input-field"] ::slotted(textarea) {
        white-space: pre-wrap; /* override \`nowrap\` from <vaadin-text-field> */
        align-self: stretch; /* override \`baseline\` from <vaadin-text-field> */
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content)},function(e,t,a){"use strict";a.d(t,"a",(function(){return h}));var n=a(9),i=a(159),o=a(69),r=a(17),s=a(22),l=a(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class h extends(Object(s.a)(Object(i.a)(Object(o.a)(Object(r.a)(n.a))))){static get template(){return l.a`
    <style include="vaadin-text-field-shared-styles">
      .vaadin-text-area-container {
        flex: auto;
        max-height: inherit; /* MSIE 11 */
        min-height: inherit; /* MSIE 11 */
      }

      /* The label, helper text and the error message should neither grow nor shrink. */
      [part="label"],
      [part="helper-text"],
      [part="error-message"] {
        flex: none;
      }

      [part="input-field"] {
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      [part="value"] {
        resize: none;
      }

      [part="value"],
      [part="input-field"] ::slotted(*) {
        align-self: flex-start;
      }

      @keyframes vaadin-text-area-appear {
        to {
          opacity: 1;
        }
      }

      :host {
        animation: 1ms vaadin-text-area-appear;
      }
    </style>

    <div class="vaadin-text-area-container">

      <label part="label" on-click="focus" id="[[_labelId]]">[[label]]</label>

      <div part="input-field" id="[[_inputId]]">

        <slot name="prefix"></slot>

        <slot name="textarea">
          <textarea part="value"></textarea>
        </slot>

        <div part="clear-button" id="clearButton" role="button" aria-label\$="[[i18n.clear]]"></div>
        <slot name="suffix"></slot>

      </div>

      <div part="helper-text" id="[[_helperTextId]]">
        <slot name="helper">[[helperText]]</slot>
      </div>

      <div part="error-message" id="[[_errorId]]" aria-live="assertive" aria-hidden\$="[[_getErrorMessageAriaHidden(invalid, errorMessage, _errorId)]]">[[errorMessage]]</div>

    </div>
`}static get is(){return"vaadin-text-area"}static get version(){return"2.8.6"}static get observers(){return["_textAreaValueChanged(value)"]}ready(){super.ready(),this._updateHeight(),this.addEventListener("animationend",this._onAnimationEnd)}_onAnimationEnd(e){0===e.animationName.indexOf("vaadin-text-area-appear")&&this._updateHeight()}get _slottedTagName(){return"textarea"}_textAreaValueChanged(e){this._updateHeight()}_updateHeight(){var e=this.root.querySelector("[part=input-field]"),t=e.scrollTop,a=this.inputElement,n=this.value?this.value.length:0;if(this._oldValueLength>=n){var i=getComputedStyle(e).height,o=getComputedStyle(a).width;e.style.display="block",e.style.height=i,a.style.maxWidth=o,a.style.height="auto"}this._oldValueLength=n;var r=a.scrollHeight;r>a.clientHeight&&(a.style.height=r+"px"),a.style.removeProperty("max-width"),e.style.removeProperty("display"),e.style.removeProperty("height"),e.scrollTop=t,this._dispatchIronResizeEventIfNeeded("InputHeight",r)}}customElements.define(h.is,h)},,,,,,,,,,,,,,,,,function(e,t,a){"use strict";a(63),a(32),a(176);var n=a(6),i=n.a`<dom-module id="lumo-date-picker-overlay" theme-for="vaadin-date-picker-overlay">
  <template>
    <style include="lumo-menu-overlay">
      [part="overlay"] {
        /*
        Width:
            date cell widths
          + month calendar side padding
          + year scroller width
        */
        width:
          calc(
              var(--lumo-size-m) * 7
            + var(--lumo-space-xs) * 2
            + 57px
          );
        height: 100%;
        max-height: calc(var(--lumo-size-m) * 14);
        overflow: hidden;
        -webkit-tap-highlight-color: transparent;
      }

      [part="overlay"] {
        flex-direction: column;
      }

      [part="content"] {
        padding: 0;
        height: 100%;
        overflow: hidden;
        -webkit-mask-image: none;
        mask-image: none;
      }

      @media (max-width: 420px), (max-height: 420px) {
        [part="overlay"] {
          width: 100vw;
          height: 70vh;
          max-height: 70vh;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(i.content);a(41),a(47),a(51),a(173);var o=n.a`<dom-module id="lumo-date-picker-overlay-content" theme-for="vaadin-date-picker-overlay-content">
  <template>
    <style>
      :host {
        position: relative;
        background-color: transparent;
        /* Background for the year scroller, placed here as we are using a mask image on the actual years part */
        background-image: linear-gradient(var(--lumo-shade-5pct), var(--lumo-shade-5pct));
        background-size: 57px 100%;
        background-position: top right;
        background-repeat: no-repeat;
        cursor: default;
      }

      /* Month scroller */

      [part="months"] {
        /* Month calendar height:
              header height + margin-bottom
            + weekdays height + margin-bottom
            + date cell heights
            + small margin between month calendars
        */
        --vaadin-infinite-scroller-item-height:
          calc(
              var(--lumo-font-size-l) + var(--lumo-space-m)
            + var(--lumo-font-size-xs) + var(--lumo-space-s)
            + var(--lumo-size-m) * 6
            + var(--lumo-space-s)
          );
        --vaadin-infinite-scroller-buffer-offset: 20%;
        -webkit-mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
        mask-image: linear-gradient(transparent, #000 10%, #000 85%, transparent);
        position: relative;
        margin-right: 57px;
      }

      /* Year scroller */

      [part="years"] {
        /* TODO get rid of fixed magic number */
        --vaadin-infinite-scroller-buffer-width: 97px;
        width: 57px;
        height: auto;
        top: 0;
        bottom: 0;
        font-size: var(--lumo-font-size-s);
        box-shadow: inset 2px 0 4px 0 var(--lumo-shade-5pct);
        -webkit-mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
        mask-image: linear-gradient(transparent, #000 35%, #000 65%, transparent);
      }

      [part="year-number"],
      [part="year-separator"] {
        opacity: 0.5;
        transition: 0.2s opacity;
      }

      [part="years"]:hover [part="year-number"],
      [part="years"]:hover [part="year-separator"] {
        opacity: 1;
      }

      /* TODO unsupported selector */
      #scrollers {
        position: static;
        display: block;
      }

      /* TODO unsupported selector, should fix this in vaadin-date-picker that it adapts to the
       * width of the year scroller */
      #scrollers[desktop] [part="months"] {
        right: auto;
      }

      /* Year scroller position indicator */
      [part="years"]::before {
        border: none;
        width: 1em;
        height: 1em;
        background-color: var(--lumo-base-color);
        background-image: linear-gradient(var(--lumo-tint-5pct), var(--lumo-tint-5pct));
        transform: translate(-75%, -50%) rotate(45deg);
        border-top-right-radius: calc(var(--lumo-border-radius) / 2);
        box-shadow: 2px -2px 6px 0 var(--lumo-shade-5pct);
        z-index: 1;
      }

      [part="year-number"],
      [part="year-separator"] {
        display: flex;
        align-items: center;
        justify-content: center;
        height: 50%;
        transform: translateY(-50%);
      }

      [part="years"] [part="year-separator"]::after {
        color: var(--lumo-disabled-text-color);
        content: "•";
      }

      /* Current year */

      [part="years"] [part="year-number"][current] {
        color: var(--lumo-primary-text-color);
      }

      /* Toolbar (footer) */

      [part="toolbar"] {
        padding: var(--lumo-space-s);
        box-shadow: 0 -1px 0 0 var(--lumo-contrast-10pct);
        border-bottom-left-radius: var(--lumo-border-radius);
        margin-right: 57px;
      }

      @supports (mask-image: linear-gradient(#000, #000)) or (-webkit-mask-image: linear-gradient(#000, #000)) {
        [part="toolbar"] {
          box-shadow: none;
        }
      }

      [part="toolbar"] [part\$="button"] {
        margin: 0;
      }

      /* Narrow viewport mode (fullscreen) */

      :host([fullscreen]) [part="toolbar"] {
        order: -1;
        background-color: var(--lumo-base-color);
      }

      :host([fullscreen]) [part="overlay-header"] {
        order: -2;
        height: var(--lumo-size-m);
        padding: var(--lumo-space-s);
        position: absolute;
        left: 0;
        right: 0;
        justify-content: center;
      }

      :host([fullscreen]) [part="toggle-button"],
      :host([fullscreen]) [part="clear-button"],
      [part="overlay-header"] [part="label"] {
        display: none;
      }

      /* Very narrow screen (year scroller initially hidden) */

      [part="years-toggle-button"] {
        position: relative;
        right: auto;
        display: flex;
        align-items: center;
        height: var(--lumo-size-s);
        padding: 0 0.5em;
        border-radius: var(--lumo-border-radius);
        z-index: 3;
        color: var(--lumo-primary-text-color);
        font-weight: 500;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      :host([years-visible]) [part="years-toggle-button"] {
        background-color: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
      }

      [part="years-toggle-button"]::before {
        content: none;
      }

      /* TODO magic number (same as used for iron-media-query in vaadin-date-picker-overlay-content) */
      @media screen and (max-width: 374px) {
        :host {
          background-image: none;
        }

        [part="years"] {
          background-color: var(--lumo-shade-5pct);
        }

        [part="toolbar"],
        [part="months"] {
          margin-right: 0;
        }

        /* TODO make date-picker adapt to the width of the years part */
        [part="years"] {
          --vaadin-infinite-scroller-buffer-width: 90px;
          width: 50px;
        }

        :host([years-visible]) [part="months"] {
          padding-left: 50px;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);var r=n.a`<dom-module id="lumo-month-calendar" theme-for="vaadin-month-calendar">
  <template>
    <style>
      :host {
        -moz-user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
        -webkit-tap-highlight-color: transparent;
        user-select: none;
        font-size: var(--lumo-font-size-m);
        color: var(--lumo-body-text-color);
        text-align: center;
        padding: 0 var(--lumo-space-xs);
      }

      /* Month header */

      [part="month-header"] {
        color: var(--lumo-header-text-color);
        font-size: var(--lumo-font-size-l);
        line-height: 1;
        font-weight: 500;
        margin-bottom: var(--lumo-space-m);
      }

      /* Week days and numbers */

      [part="weekdays"],
      [part="weekday"],
      [part="week-numbers"] {
        font-size: var(--lumo-font-size-xs);
        line-height: 1;
        color: var(--lumo-tertiary-text-color);
      }

      [part="weekdays"] {
        margin-bottom: var(--lumo-space-s);
      }

      /* TODO should have part="week-number" for the cell in weekdays-container */
      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: var(--lumo-size-xs);
      }

      /* Date and week number cells */

      [part="date"],
      [part="week-number"] {
        box-sizing: border-box;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        height: var(--lumo-size-m);
        position: relative;
      }

      [part="date"] {
        transition: color 0.1s;
      }

      /* Today date */

      [part="date"][today] {
        color: var(--lumo-primary-text-color);
      }

      /* Focused date */

      [part="date"]::before {
        content: "";
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        min-width: 2em;
        min-height: 2em;
        width: 80%;
        height: 80%;
        max-height: 100%;
        max-width: 100%;
        border-radius: var(--lumo-border-radius);
      }

      [part="date"][focused]::before {
        box-shadow: 0 0 0 2px var(--lumo-primary-color-50pct);
      }

      :host(:not([focused])) [part="date"][focused]::before {
        animation: vaadin-date-picker-month-calendar-focus-date 1.4s infinite;
      }

      @keyframes vaadin-date-picker-month-calendar-focus-date {
        50% {
          box-shadow: 0 0 0 2px transparent;
        }
      }

      /* TODO should not rely on the role attribute */
      [part="date"][role="button"]:not([disabled]):not([selected]):hover::before {
        background-color: var(--lumo-primary-color-10pct);
      }

      [part="date"][selected] {
        color: var(--lumo-primary-contrast-color);
      }

      [part="date"][selected]::before {
        background-color: var(--lumo-primary-color);
      }

      [part="date"][disabled] {
        color: var(--lumo-disabled-text-color);
      }

      @media (pointer: coarse) {
        [part="date"]:hover:not([selected])::before,
        [part="date"][focused]:not([selected])::before {
          display: none;
        }

        [part="date"][role="button"]:not([disabled]):active::before {
          display: block;
        }

        [part="date"][selected]::before {
          box-shadow: none;
        }
      }

      /* Disabled */

      :host([disabled]) * {
        color: var(--lumo-disabled-text-color) !important;
      }
    </style>
  </template>
</dom-module><custom-style>
  <style>
    @keyframes vaadin-date-picker-month-calendar-focus-date {
      50% {
        box-shadow: 0 0 0 2px transparent;
      }
    }
  </style>
</custom-style>`;document.head.appendChild(r.content);a(78),a(125);var s=n.a`<dom-module id="lumo-date-picker" theme-for="vaadin-date-picker">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-calendar);
      }

      [part="clear-button"]::before {
        content: var(--lumo-icons-cross);
      }

      @media (max-width: 420px), (max-height: 420px) {
        [part="overlay-content"] {
          height: 70vh;
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(s.content);a(106);var l=n.a`<dom-module id="lumo-date-picker-text-field" theme-for="vaadin-date-picker-text-field">
  <template>
    <style>
      :not(*):placeholder-shown, /* to prevent broken styles on IE */
      :host([dir="rtl"]) [part="value"]:placeholder-shown,
      :host([dir="rtl"]) [part="input-field"] ::slotted(input:placeholder-shown) {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([dir="rtl"]) [part="value"],
      :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(l.content);a(218),a(280)},,function(e,t,a){"use strict";a.d(t,"a",(function(){return E}));var n=a(9),i=a(45),o=(a(177),a(17)),r=a(69),s=a(98),l=a(161);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class h extends(Object(l.a)(s.a)){static get is(){return"vaadin-date-picker-overlay"}}customElements.define(h.is,h);var c=a(90),d=a(146),p=(a(123),a(65)),u=(a(201),a(60)),f=a(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class v extends(Object(o.a)(Object(i.a)(n.a))){static get template(){return f.a`
    <style>
      :host {
        display: block;
      }

      [part="weekdays"],
      #days {
        display: flex;
        flex-wrap: wrap;
        flex-grow: 1;
      }

      #days-container,
      #weekdays-container {
        display: flex;
      }

      [part="week-numbers"] {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex-shrink: 0;
      }

      [part="week-numbers"][hidden],
      [part="weekday"][hidden] {
        display: none;
      }

      [part="weekday"],
      [part="date"] {
        /* Would use calc(100% / 7) but it doesn't work nice on IE */
        width: 14.285714286%;
      }

      [part="weekday"]:empty,
      [part="week-numbers"] {
        width: 12.5%;
        flex-shrink: 0;
      }
    </style>

    <div part="month-header" role="heading">[[_getTitle(month, i18n.monthNames)]]</div>
    <div id="monthGrid" on-tap="_handleTap" on-touchend="_preventDefault" on-touchstart="_onMonthGridTouchStart">
      <div id="weekdays-container">
        <div hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]" part="weekday"></div>
        <div part="weekdays">
          <template is="dom-repeat" items="[[_getWeekDayNames(i18n.weekdays, i18n.weekdaysShort, showWeekNumbers, i18n.firstDayOfWeek)]]">
            <div part="weekday" role="heading" aria-label\$="[[item.weekDay]]">[[item.weekDayShort]]</div>
          </template>
        </div>
      </div>
      <div id="days-container">
        <div part="week-numbers" hidden="[[!_showWeekSeparator(showWeekNumbers, i18n.firstDayOfWeek)]]">
          <template is="dom-repeat" items="[[_getWeekNumbers(_days)]]">
            <div part="week-number" role="heading" aria-label\$="[[i18n.week]] [[item]]">[[item]]</div>
          </template>
        </div>
        <div id="days">
          <template is="dom-repeat" items="[[_days]]">
            <div part="date" today\$="[[_isToday(item)]]" selected\$="[[_dateEquals(item, selectedDate)]]" focused\$="[[_dateEquals(item, focusedDate)]]" date="[[item]]" disabled\$="[[!_dateAllowed(item, minDate, maxDate)]]" role\$="[[_getRole(item)]]" aria-label\$="[[_getAriaLabel(item)]]" aria-disabled\$="[[_getAriaDisabled(item, minDate, maxDate)]]">[[_getDate(item)]]</div>
          </template>
        </div>
      </div>
    </div>
`}static get is(){return"vaadin-month-calendar"}static get properties(){return{month:{type:Date,value:new Date},selectedDate:{type:Date,notify:!0},focusedDate:Date,showWeekNumbers:{type:Boolean,value:!1},i18n:{type:Object},ignoreTaps:Boolean,_notTapping:Boolean,minDate:{type:Date,value:null},maxDate:{type:Date,value:null},_days:{type:Array,computed:"_getDays(month, i18n.firstDayOfWeek, minDate, maxDate)"},disabled:{type:Boolean,reflectToAttribute:!0,computed:"_isDisabled(month, minDate, maxDate)"}}}static get observers(){return["_showWeekNumbersChanged(showWeekNumbers, i18n.firstDayOfWeek)"]}_dateEquals(e,t){return u.a._dateEquals(e,t)}_dateAllowed(e,t,a){return u.a._dateAllowed(e,t,a)}_isDisabled(e,t,a){var n=new Date(0,0);n.setFullYear(e.getFullYear()),n.setMonth(e.getMonth()),n.setDate(1);var i=new Date(0,0);return i.setFullYear(e.getFullYear()),i.setMonth(e.getMonth()+1),i.setDate(0),!(t&&a&&t.getMonth()===a.getMonth()&&t.getMonth()===e.getMonth()&&a.getDate()-t.getDate()>=0)&&(!this._dateAllowed(n,t,a)&&!this._dateAllowed(i,t,a))}_getTitle(e,t){if(void 0!==e&&void 0!==t)return this.i18n.formatTitle(t[e.getMonth()],e.getFullYear())}_onMonthGridTouchStart(){this._notTapping=!1,setTimeout(()=>this._notTapping=!0,300)}_dateAdd(e,t){e.setDate(e.getDate()+t)}_applyFirstDayOfWeek(e,t){if(void 0!==e&&void 0!==t)return e.slice(t).concat(e.slice(0,t))}_getWeekDayNames(e,t,a,n){if(void 0!==e&&void 0!==t&&void 0!==a&&void 0!==n)return e=this._applyFirstDayOfWeek(e,n),t=this._applyFirstDayOfWeek(t,n),e=e.map((e,a)=>({weekDay:e,weekDayShort:t[a]}))}_getDate(e){return e?e.getDate():""}_showWeekNumbersChanged(e,t){e&&1===t?this.setAttribute("week-numbers",""):this.removeAttribute("week-numbers")}_showWeekSeparator(e,t){return e&&1===t}_isToday(e){return this._dateEquals(new Date,e)}_getDays(e,t){if(void 0!==e&&void 0!==t){var a=new Date(0,0);for(a.setFullYear(e.getFullYear()),a.setMonth(e.getMonth()),a.setDate(1);a.getDay()!==t;)this._dateAdd(a,-1);for(var n=[],i=a.getMonth(),o=e.getMonth();a.getMonth()===o||a.getMonth()===i;)n.push(a.getMonth()===o?new Date(a.getTime()):null),this._dateAdd(a,1);return n}}_getWeekNumber(e,t){if(void 0!==e&&void 0!==t)return e||(e=t.reduce((e,t)=>!e&&t?t:e)),u.a._getISOWeekNumber(e)}_getWeekNumbers(e){return e.map(t=>this._getWeekNumber(t,e)).filter((e,t,a)=>a.indexOf(e)===t)}_handleTap(e){this.ignoreTaps||this._notTapping||!e.target.date||e.target.hasAttribute("disabled")||(this.selectedDate=e.target.date,this.dispatchEvent(new CustomEvent("date-tap",{bubbles:!0,composed:!0})))}_preventDefault(e){e.preventDefault()}_getRole(e){return e?"button":"presentation"}_getAriaLabel(e){if(!e)return"";var t=this._getDate(e)+" "+this.i18n.monthNames[e.getMonth()]+" "+e.getFullYear()+", "+this.i18n.weekdays[e.getDay()];return this._isToday(e)&&(t+=", "+this.i18n.today),t}_getAriaDisabled(e,t,a){if(void 0!==e&&void 0!==t&&void 0!==a)return this._dateAllowed(e,t,a)?"false":"true"}}customElements.define(v.is,v);var m=a(11),g=a(13),b=a(26),_=a(49),y=a(53);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class w extends n.a{static get template(){return f.a`
    <style>
      :host {
        display: block;
        overflow: hidden;
        height: 500px;
      }

      #scroller {
        position: relative;
        height: 100%;
        overflow: auto;
        outline: none;
        margin-right: -40px;
        -webkit-overflow-scrolling: touch;
        -ms-overflow-style: none;
        overflow-x: hidden;
      }

      #scroller.notouchscroll {
        -webkit-overflow-scrolling: auto;
      }

      #scroller::-webkit-scrollbar {
        display: none;
      }

      .buffer {
        position: absolute;
        width: var(--vaadin-infinite-scroller-buffer-width, 100%);
        box-sizing: border-box;
        padding-right: 40px;
        top: var(--vaadin-infinite-scroller-buffer-offset, 0);
        animation: fadein 0.2s;
      }

      @keyframes fadein {
        from { opacity: 0; }
        to { opacity: 1; }
      }
    </style>

    <div id="scroller" on-scroll="_scroll">
      <div class="buffer"></div>
      <div class="buffer"></div>
      <div id="fullHeight"></div>
    </div>
`}static get is(){return"vaadin-infinite-scroller"}static get properties(){return{bufferSize:{type:Number,value:20},_initialScroll:{value:5e5},_initialIndex:{value:0},_buffers:Array,_preventScrollEvent:Boolean,_mayHaveMomentum:Boolean,_initialized:Boolean,active:{type:Boolean,observer:"_activated"}}}ready(){super.ready(),this._buffers=Array.prototype.slice.call(this.root.querySelectorAll(".buffer")),this.$.fullHeight.style.height=2*this._initialScroll+"px";var e=this.querySelector("template");this._TemplateClass=Object(_.b)(e,this,{forwardHostProp:function(e,t){"index"!==e&&this._buffers.forEach(a=>{[].forEach.call(a.children,a=>{a._itemWrapper.instance[e]=t})})}}),navigator.userAgent.toLowerCase().indexOf("firefox")>-1&&(this.$.scroller.tabIndex=-1)}_activated(e){e&&!this._initialized&&(this._createPool(),this._initialized=!0)}_finishInit(){this._initDone||(this._buffers.forEach(e=>{[].forEach.call(e.children,e=>this._ensureStampedInstance(e._itemWrapper))},this),this._buffers[0].translateY||this._reset(),this._initDone=!0)}_translateBuffer(e){var t=e?1:0;this._buffers[t].translateY=this._buffers[t?0:1].translateY+this._bufferHeight*(t?-1:1),this._buffers[t].style.transform="translate3d(0, "+this._buffers[t].translateY+"px, 0)",this._buffers[t].updated=!1,this._buffers.reverse()}_scroll(){if(!this._scrollDisabled){var e=this.$.scroller.scrollTop;(e<this._bufferHeight||e>2*this._initialScroll-this._bufferHeight)&&(this._initialIndex=~~this.position,this._reset());var t=this.root.querySelector(".buffer").offsetTop,a=e>this._buffers[1].translateY+this.itemHeight+t,n=e<this._buffers[0].translateY+this.itemHeight+t;(a||n)&&(this._translateBuffer(n),this._updateClones()),this._preventScrollEvent||(this.dispatchEvent(new CustomEvent("custom-scroll",{bubbles:!1,composed:!0})),this._mayHaveMomentum=!0),this._preventScrollEvent=!1,this._debouncerScrollFinish=g.a.debounce(this._debouncerScrollFinish,m.d.after(200),()=>{var e=this.$.scroller.getBoundingClientRect();this._isVisible(this._buffers[0],e)||this._isVisible(this._buffers[1],e)||(this.position=this.position)})}}set position(e){this._preventScrollEvent=!0,e>this._firstIndex&&e<this._firstIndex+2*this.bufferSize?this.$.scroller.scrollTop=this.itemHeight*(e-this._firstIndex)+this._buffers[0].translateY:(this._initialIndex=~~e,this._reset(),this._scrollDisabled=!0,this.$.scroller.scrollTop+=e%1*this.itemHeight,this._scrollDisabled=!1),this._mayHaveMomentum&&(this.$.scroller.classList.add("notouchscroll"),this._mayHaveMomentum=!1,setTimeout(()=>{this.$.scroller.classList.remove("notouchscroll")},10))}get position(){return(this.$.scroller.scrollTop-this._buffers[0].translateY)/this.itemHeight+this._firstIndex}get itemHeight(){if(!this._itemHeightVal){window.ShadyCSS&&window.ShadyCSS.nativeCss||this.updateStyles();var e=window.ShadyCSS?window.ShadyCSS.getComputedStyleValue(this,"--vaadin-infinite-scroller-item-height"):getComputedStyle(this).getPropertyValue("--vaadin-infinite-scroller-item-height");this.$.fullHeight.style.setProperty("background-position",e);var t=getComputedStyle(this.$.fullHeight).getPropertyValue("background-position");this.$.fullHeight.style.removeProperty("background-position"),this._itemHeightVal=parseFloat(t)}return this._itemHeightVal}get _bufferHeight(){return this.itemHeight*this.bufferSize}_reset(){this._scrollDisabled=!0,this.$.scroller.scrollTop=this._initialScroll,this._buffers[0].translateY=this._initialScroll-this._bufferHeight,this._buffers[1].translateY=this._initialScroll,this._buffers.forEach(e=>{e.style.transform="translate3d(0, "+e.translateY+"px, 0)"}),this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones(!0),this._debouncerUpdateClones=g.a.debounce(this._debouncerUpdateClones,m.d.after(200),()=>{this._buffers[0].updated=this._buffers[1].updated=!1,this._updateClones()}),this._scrollDisabled=!1}_createPool(){var e=this,t=this.getBoundingClientRect();this._buffers.forEach(a=>{for(var n=function(){var n=document.createElement("div");n.style.height=e.itemHeight+"px",n.instance={};var i="vaadin-infinite-scroller-item-content-"+(w._contentIndex=w._contentIndex+1||0),o=document.createElement("slot");o.setAttribute("name",i),o._itemWrapper=n,a.appendChild(o),n.setAttribute("slot",i),e.appendChild(n),Object(b.b)(),setTimeout(()=>{e._isVisible(n,t)&&e._ensureStampedInstance(n)},1)},i=0;i<this.bufferSize;i++)n()},this),setTimeout(()=>{Object(y.a)(this,this._finishInit.bind(this))},1)}_ensureStampedInstance(e){if(!e.firstElementChild){var t=e.instance;e.instance=new this._TemplateClass({}),e.appendChild(e.instance.root),Object.keys(t).forEach(a=>{e.instance.set(a,t[a])})}}_updateClones(e){this._firstIndex=~~((this._buffers[0].translateY-this._initialScroll)/this.itemHeight)+this._initialIndex;var t=e?this.$.scroller.getBoundingClientRect():void 0;this._buffers.forEach((a,n)=>{if(!a.updated){var i=this._firstIndex+this.bufferSize*n;[].forEach.call(a.children,(a,n)=>{var o=a._itemWrapper;e&&!this._isVisible(o,t)||(o.instance.index=i+n)}),a.updated=!0}},this)}_isVisible(e,t){var a=e.getBoundingClientRect();return a.bottom>t.top&&a.top<t.bottom}}customElements.define(w.is,w);a(75);var z=document.createElement("template");z.innerHTML='<dom-module id="vaadin-date-picker-overlay-styles" theme-for="vaadin-date-picker-overlay">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n\n      :host([right-aligned]) {\n        align-items: flex-end;\n      }\n\n      :host([dir="rtl"]) {\n        align-items: flex-end;\n      }\n\n      :host([dir="rtl"][right-aligned]) {\n        align-items: flex-start;\n      }\n\n      [part="overlay"] {\n        display: flex;\n        flex: auto;\n      }\n\n      [part~="content"] {\n        flex: auto;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(z.content);var M=a(30);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class x extends(Object(o.a)(Object(p.a)(Object(i.a)(n.a)))){static get template(){return f.a`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        outline: none;
        background: #fff;
      }

      [part="overlay-header"] {
        display: flex;
        flex-shrink: 0;
        flex-wrap: nowrap;
        align-items: center;
      }

      :host(:not([fullscreen])) [part="overlay-header"] {
        display: none;
      }

      [part="label"] {
        flex-grow: 1;
      }

      [part="clear-button"]:not([showclear]) {
        display: none;
      }

      [part="years-toggle-button"] {
        display: flex;
      }

      [part="years-toggle-button"][desktop] {
        display: none;
      }

      :host(:not([years-visible])) [part="years-toggle-button"]::before {
        transform: rotate(180deg);
      }

      #scrollers {
        display: flex;
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
      }

      [part="months"],
      [part="years"] {
        height: 100%;
      }

      [part="months"] {
        --vaadin-infinite-scroller-item-height: 270px;
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
      }

      #scrollers[desktop] [part="months"] {
        right: 50px;
        transform: none !important;
      }

      [part="years"] {
        --vaadin-infinite-scroller-item-height: 80px;
        width: 50px;
        position: absolute;
        right: 0;
        transform: translateX(100%);
        -webkit-tap-highlight-color: transparent;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
        /* Center the year scroller position. */
        --vaadin-infinite-scroller-buffer-offset: 50%;
      }

      #scrollers[desktop] [part="years"] {
        position: absolute;
        transform: none !important;
      }

      [part="years"]::before {
        content: '';
        display: block;
        background: transparent;
        width: 0;
        height: 0;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        border-width: 6px;
        border-style: solid;
        border-color: transparent;
        border-left-color: #000;
      }

      :host(.animate) [part="months"],
      :host(.animate) [part="years"] {
        transition: all 200ms;
      }

      [part="toolbar"] {
        display: flex;
        justify-content: space-between;
        z-index: 2;
        flex-shrink: 0;
      }

      [part~="overlay-header"]:not([desktop]) {
        padding-bottom: 40px;
      }

      [part~="years-toggle-button"] {
        position: absolute;
        top: auto;
        right: 8px;
        bottom: 0;
        z-index: 1;
        padding: 8px;
      }

      #announcer {
        display: inline-block;
        position: fixed;
        clip: rect(0, 0, 0, 0);
        clip-path: inset(100%);
      }
    </style>

    <div id="announcer" role="alert" aria-live="polite">
      [[i18n.calendar]]
    </div>

    <div part="overlay-header" on-touchend="_preventDefault" desktop\$="[[_desktopMode]]" aria-hidden="true">
      <div part="label">[[_formatDisplayed(selectedDate, i18n.formatDate, label)]]</div>
      <div part="clear-button" on-tap="_clear" showclear\$="[[_showClear(selectedDate)]]"></div>
      <div part="toggle-button" on-tap="_cancel"></div>

      <div part="years-toggle-button" desktop\$="[[_desktopMode]]" on-tap="_toggleYearScroller" aria-hidden="true">
        [[_yearAfterXMonths(_visibleMonthIndex)]]
      </div>
    </div>

    <div id="scrollers" desktop\$="[[_desktopMode]]" on-track="_track">
      <vaadin-infinite-scroller id="monthScroller" on-custom-scroll="_onMonthScroll" on-touchstart="_onMonthScrollTouchStart" buffer-size="3" active="[[initialPosition]]" part="months">
        <template>
          <vaadin-month-calendar i18n="[[i18n]]" month="[[_dateAfterXMonths(index)]]" selected-date="{{selectedDate}}" focused-date="[[focusedDate]]" ignore-taps="[[_ignoreTaps]]" show-week-numbers="[[showWeekNumbers]]" min-date="[[minDate]]" max-date="[[maxDate]]" focused\$="[[_focused]]" part="month" theme\$="[[theme]]">
          </vaadin-month-calendar>
        </template>
      </vaadin-infinite-scroller>
      <vaadin-infinite-scroller id="yearScroller" on-tap="_onYearTap" on-custom-scroll="_onYearScroll" on-touchstart="_onYearScrollTouchStart" buffer-size="12" active="[[initialPosition]]" part="years">
        <template>
          <div part="year-number" role="button" current\$="[[_isCurrentYear(index)]]" selected\$="[[_isSelectedYear(index, selectedDate)]]">
            [[_yearAfterXYears(index)]]
          </div>
          <div part="year-separator" aria-hidden="true"></div>
        </template>
      </vaadin-infinite-scroller>
    </div>

    <div on-touchend="_preventDefault" role="toolbar" part="toolbar">
      <vaadin-button id="todayButton" theme="tertiary" part="today-button" disabled="[[!_isTodayAllowed(minDate, maxDate)]]" on-tap="_onTodayTap">
        [[i18n.today]]
      </vaadin-button>
      <vaadin-button id="cancelButton" theme="tertiary" part="cancel-button" on-tap="_cancel">
        [[i18n.cancel]]
      </vaadin-button>
    </div>

    <iron-media-query query="(min-width: 375px)" query-matches="{{_desktopMode}}"></iron-media-query>
`}static get is(){return"vaadin-date-picker-overlay-content"}static get properties(){return{selectedDate:{type:Date,notify:!0},focusedDate:{type:Date,notify:!0,observer:"_focusedDateChanged"},_focusedMonthDate:Number,initialPosition:{type:Date,observer:"_initialPositionChanged"},_originDate:{value:new Date},_visibleMonthIndex:Number,_desktopMode:Boolean,_translateX:{observer:"_translateXChanged"},_yearScrollerWidth:{value:50},i18n:{type:Object},showWeekNumbers:{type:Boolean},_ignoreTaps:Boolean,_notTapping:Boolean,minDate:Date,maxDate:Date,_focused:Boolean,label:String}}get __isRTL(){return"rtl"===this.getAttribute("dir")}ready(){super.ready(),this.setAttribute("tabindex",0),this.addEventListener("keydown",this._onKeydown.bind(this)),Object(M.addListener)(this,"tap",this._stopPropagation),this.addEventListener("focus",this._onOverlayFocus.bind(this)),this.addEventListener("blur",this._onOverlayBlur.bind(this))}connectedCallback(){super.connectedCallback(),this._closeYearScroller(),this._toggleAnimateClass(!0),Object(M.setTouchAction)(this.$.scrollers,"pan-y"),d.a.requestAvailability()}announceFocusedDate(){var e=this._currentlyFocusedDate(),t=[];u.a._dateEquals(e,new Date)&&t.push(this.i18n.today),t=t.concat([this.i18n.weekdays[e.getDay()],e.getDate(),this.i18n.monthNames[e.getMonth()],e.getFullYear()]),this.showWeekNumbers&&1===this.i18n.firstDayOfWeek&&(t.push(this.i18n.week),t.push(u.a._getISOWeekNumber(e))),this.dispatchEvent(new CustomEvent("iron-announce",{bubbles:!0,composed:!0,detail:{text:t.join(" ")}}))}focusCancel(){this.$.cancelButton.focus()}scrollToDate(e,t){this._scrollToPosition(this._differenceInMonths(e,this._originDate),t)}_focusedDateChanged(e){this.revealDate(e)}_isCurrentYear(e){return 0===e}_isSelectedYear(e,t){if(t)return t.getFullYear()===this._originDate.getFullYear()+e}revealDate(e){if(e){var t=this._differenceInMonths(e,this._originDate),a=this.$.monthScroller.position>t,n=this.$.monthScroller.clientHeight/this.$.monthScroller.itemHeight,i=this.$.monthScroller.position+n-1<t;a?this._scrollToPosition(t,!0):i&&this._scrollToPosition(t-n+1,!0)}}_onOverlayFocus(){this._focused=!0}_onOverlayBlur(){this._focused=!1}_initialPositionChanged(e){this.scrollToDate(e)}_repositionYearScroller(){this._visibleMonthIndex=Math.floor(this.$.monthScroller.position),this.$.yearScroller.position=(this.$.monthScroller.position+this._originDate.getMonth())/12}_repositionMonthScroller(){this.$.monthScroller.position=12*this.$.yearScroller.position-this._originDate.getMonth(),this._visibleMonthIndex=Math.floor(this.$.monthScroller.position)}_onMonthScroll(){this._repositionYearScroller(),this._doIgnoreTaps()}_onYearScroll(){this._repositionMonthScroller(),this._doIgnoreTaps()}_onYearScrollTouchStart(){this._notTapping=!1,setTimeout(()=>this._notTapping=!0,300),this._repositionMonthScroller()}_onMonthScrollTouchStart(){this._repositionYearScroller()}_doIgnoreTaps(){this._ignoreTaps=!0,this._debouncer=g.a.debounce(this._debouncer,m.d.after(300),()=>this._ignoreTaps=!1)}_formatDisplayed(e,t,a){return e?t(u.a._extractDateParts(e)):a}_onTodayTap(){var e=new Date;Math.abs(this.$.monthScroller.position-this._differenceInMonths(e,this._originDate))<.001?(this.selectedDate=e,this._close()):this._scrollToCurrentMonth()}_scrollToCurrentMonth(){this.focusedDate&&(this.focusedDate=new Date),this.scrollToDate(new Date,!0)}_showClear(e){return!!e}_onYearTap(e){if(!this._ignoreTaps&&!this._notTapping){var t=(e.detail.y-(this.$.yearScroller.getBoundingClientRect().top+this.$.yearScroller.clientHeight/2))/this.$.yearScroller.itemHeight;this._scrollToPosition(this.$.monthScroller.position+12*t,!0)}}_scrollToPosition(e,t){if(void 0===this._targetPosition){if(!t)return this.$.monthScroller.position=e,this._targetPosition=void 0,void this._repositionYearScroller();this._targetPosition=e;var a=t?300:0,n=0,i=this.$.monthScroller.position,o=e=>{var t,r,s,l=e-(n=n||e);if(l<a){var h=(t=l,r=i,s=this._targetPosition-i,(t/=a/2)<1?s/2*t*t+r:-s/2*(--t*(t-2)-1)+r);this.$.monthScroller.position=h,window.requestAnimationFrame(o)}else this.dispatchEvent(new CustomEvent("scroll-animation-finished",{bubbles:!0,composed:!0,detail:{position:this._targetPosition,oldPosition:i}})),this.$.monthScroller.position=this._targetPosition,this._targetPosition=void 0;setTimeout(this._repositionYearScroller.bind(this),1)};window.requestAnimationFrame(o)}else this._targetPosition=e}_limit(e,t){return Math.min(t.max,Math.max(t.min,e))}_handleTrack(e){if(!(Math.abs(e.detail.dx)<10||Math.abs(e.detail.ddy)>10)){Math.abs(e.detail.ddx)>this._yearScrollerWidth/3&&this._toggleAnimateClass(!0);var t=this._translateX+e.detail.ddx;this._translateX=this._limit(t,{min:0,max:this._yearScrollerWidth})}}_track(e){if(!this._desktopMode)switch(e.detail.state){case"start":this._toggleAnimateClass(!1);break;case"track":this._handleTrack(e);break;case"end":this._toggleAnimateClass(!0),this._translateX>=this._yearScrollerWidth/2?this._closeYearScroller():this._openYearScroller()}}_toggleAnimateClass(e){e?this.classList.add("animate"):this.classList.remove("animate")}_toggleYearScroller(){this._isYearScrollerVisible()?this._closeYearScroller():this._openYearScroller()}_openYearScroller(){this._translateX=0,this.setAttribute("years-visible","")}_closeYearScroller(){this.removeAttribute("years-visible"),this._translateX=this._yearScrollerWidth}_isYearScrollerVisible(){return this._translateX<this._yearScrollerWidth/2}_translateXChanged(e){this._desktopMode||(this.$.monthScroller.style.transform="translateX("+(e-this._yearScrollerWidth)+"px)",this.$.yearScroller.style.transform="translateX("+e+"px)")}_yearAfterXYears(e){var t=new Date(this._originDate);return t.setFullYear(parseInt(e)+this._originDate.getFullYear()),t.getFullYear()}_yearAfterXMonths(e){return this._dateAfterXMonths(e).getFullYear()}_dateAfterXMonths(e){var t=new Date(this._originDate);return t.setDate(1),t.setMonth(parseInt(e)+this._originDate.getMonth()),t}_differenceInMonths(e,t){return 12*(e.getFullYear()-t.getFullYear())-t.getMonth()+e.getMonth()}_differenceInYears(e,t){return this._differenceInMonths(e,t)/12}_clear(){this.selectedDate=""}_close(){var e=this.getRootNode().host,t=e?e.getRootNode().host:null;t&&(t.opened=!1),this.dispatchEvent(new CustomEvent("close",{bubbles:!0,composed:!0}))}_cancel(){this.focusedDate=this.selectedDate,this._close()}_preventDefault(e){e.preventDefault()}_eventKey(e){for(var t=["down","up","right","left","enter","space","home","end","pageup","pagedown","tab","esc"],a=0;a<t.length;a++){var n=t[a];if(c.a.keyboardEventMatchesKeys(e,n))return n}}_onKeydown(e){var t=this._currentlyFocusedDate(),a=e.composedPath().indexOf(this.$.todayButton)>=0,n=e.composedPath().indexOf(this.$.cancelButton)>=0,i=!a&&!n,o=this._eventKey(e);if("tab"===o){e.stopPropagation();var r=this.hasAttribute("fullscreen"),s=e.shiftKey;r?e.preventDefault():s&&i||!s&&n?(e.preventDefault(),this.dispatchEvent(new CustomEvent("focus-input",{bubbles:!0,composed:!0}))):s&&a?(this._focused=!0,setTimeout(()=>this.revealDate(this.focusedDate),1)):this._focused=!1}else if(o)switch(e.preventDefault(),e.stopPropagation(),o){case"down":this._moveFocusByDays(7),this.focus();break;case"up":this._moveFocusByDays(-7),this.focus();break;case"right":i&&this._moveFocusByDays(this.__isRTL?-1:1);break;case"left":i&&this._moveFocusByDays(this.__isRTL?1:-1);break;case"enter":i||n?this._close():a&&this._onTodayTap();break;case"space":if(n)this._close();else if(a)this._onTodayTap();else{var l=this.focusedDate;u.a._dateEquals(l,this.selectedDate)?(this.selectedDate="",this.focusedDate=l):this.selectedDate=l}break;case"home":this._moveFocusInsideMonth(t,"minDate");break;case"end":this._moveFocusInsideMonth(t,"maxDate");break;case"pagedown":this._moveFocusByMonths(e.shiftKey?12:1);break;case"pageup":this._moveFocusByMonths(e.shiftKey?-12:-1);break;case"esc":this._cancel()}}_currentlyFocusedDate(){return this.focusedDate||this.selectedDate||this.initialPosition||new Date}_focusDate(e){this.focusedDate=e,this._focusedMonthDate=e.getDate()}_focusClosestDate(e){this._focusDate(u.a._getClosestDate(e,[this.minDate,this.maxDate]))}_moveFocusByDays(e){var t=this._currentlyFocusedDate(),a=new Date(0,0);a.setFullYear(t.getFullYear()),a.setMonth(t.getMonth()),a.setDate(t.getDate()+e),this._dateAllowed(a,this.minDate,this.maxDate)?this._focusDate(a):this._dateAllowed(t,this.minDate,this.maxDate)?e>0?this._focusDate(this.maxDate):this._focusDate(this.minDate):this._focusClosestDate(t)}_moveFocusByMonths(e){var t=this._currentlyFocusedDate(),a=new Date(0,0);a.setFullYear(t.getFullYear()),a.setMonth(t.getMonth()+e);var n=a.getMonth();a.setDate(this._focusedMonthDate||(this._focusedMonthDate=t.getDate())),a.getMonth()!==n&&a.setDate(0),this._dateAllowed(a,this.minDate,this.maxDate)?this.focusedDate=a:this._dateAllowed(t,this.minDate,this.maxDate)?e>0?this._focusDate(this.maxDate):this._focusDate(this.minDate):this._focusClosestDate(t)}_moveFocusInsideMonth(e,t){var a=new Date(0,0);a.setFullYear(e.getFullYear()),"minDate"===t?(a.setMonth(e.getMonth()),a.setDate(1)):(a.setMonth(e.getMonth()+1),a.setDate(0)),this._dateAllowed(a,this.minDate,this.maxDate)?this._focusDate(a):this._dateAllowed(e,this.minDate,this.maxDate)?this._focusDate(this[t]):this._focusClosestDate(e)}_dateAllowed(e,t,a){return(!t||e>=t)&&(!a||e<=a)}_isTodayAllowed(e,t){var a=new Date,n=new Date(0,0);return n.setFullYear(a.getFullYear()),n.setMonth(a.getMonth()),n.setDate(a.getDate()),this._dateAllowed(n,e,t)}_stopPropagation(e){e.stopPropagation()}}customElements.define(x.is,x);var A=a(81),C=a(80),S=e=>class extends(Object(C.b)([A.a],e)){static get properties(){return{_selectedDate:{type:Date},_focusedDate:Date,value:{type:String,observer:"_valueChanged",notify:!0,value:""},required:{type:Boolean,value:!1},name:{type:String},initialPosition:String,label:String,opened:{type:Boolean,reflectToAttribute:!0,notify:!0,observer:"_openedChanged"},autoOpenDisabled:Boolean,showWeekNumbers:{type:Boolean},_fullscreen:{value:!1,observer:"_fullscreenChanged"},_fullscreenMediaQuery:{value:"(max-width: 420px), (max-height: 420px)"},_touchPrevented:Array,i18n:{type:Object,value:()=>({monthNames:["January","February","March","April","May","June","July","August","September","October","November","December"],weekdays:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],weekdaysShort:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],firstDayOfWeek:0,week:"Week",calendar:"Calendar",clear:"Clear",today:"Today",cancel:"Cancel",formatDate:e=>{var t=String(e.year).replace(/\d+/,e=>"0000".substr(e.length)+e);return[e.month+1,e.day,t].join("/")},parseDate:e=>{var t,a=e.split("/"),n=new Date,i=n.getMonth(),o=n.getFullYear();if(3===a.length?(o=parseInt(a[2]),a[2].length<3&&o>=0&&(o+=o<50?2e3:1900),i=parseInt(a[0])-1,t=parseInt(a[1])):2===a.length?(i=parseInt(a[0])-1,t=parseInt(a[1])):1===a.length&&(t=parseInt(a[0])),void 0!==t)return{day:t,month:i,year:o}},formatTitle:(e,t)=>e+" "+t})},min:{type:String,observer:"_minChanged"},max:{type:String,observer:"_maxChanged"},_minDate:{type:Date,value:""},_maxDate:{type:Date,value:""},_noInput:{type:Boolean,computed:"_isNoInput(_fullscreen, _ios, i18n, i18n.*)"},_ios:{type:Boolean,value:navigator.userAgent.match(/iP(?:hone|ad;(?: U;)? CPU) OS (\d+)/)},_webkitOverflowScroll:{type:Boolean,value:""===document.createElement("div").style.webkitOverflowScrolling},_ignoreAnnounce:{value:!0},_focusOverlayOnOpen:Boolean,_overlayInitialized:Boolean}}static get observers(){return["_updateHasValue(value)","_selectedDateChanged(_selectedDate, i18n.formatDate)","_focusedDateChanged(_focusedDate, i18n.formatDate)","_announceFocusedDate(_focusedDate, opened, _ignoreAnnounce)"]}ready(){super.ready(),this._boundOnScroll=this._onScroll.bind(this),this._boundFocus=this._focus.bind(this),this._boundUpdateAlignmentAndPosition=this._updateAlignmentAndPosition.bind(this);var e=e=>{var t=e.composedPath(),a=t.indexOf(this._inputElement);return 1===t.slice(0,a).filter(e=>e.getAttribute&&"clear-button"===e.getAttribute("part")).length};Object(M.addListener)(this,"tap",t=>{e(t)||this.autoOpenDisabled&&!this._noInput||this.open()}),this.addEventListener("touchend",t=>{e(t)||t.preventDefault()}),this.addEventListener("keydown",this._onKeydown.bind(this)),this.addEventListener("input",this._onUserInput.bind(this)),this.addEventListener("focus",e=>this._noInput&&e.target.blur()),this.addEventListener("blur",e=>{if(!this.opened){if(this.autoOpenDisabled){var t=this._getParsedDate();this._isValidDate(t)&&(this._selectedDate=t)}""===this._inputElement.value&&this.__dispatchChange?(this.validate(),this.value="",this.__dispatchChange=!1):this.validate()}})}_initOverlay(){this.$.overlay.removeAttribute("disable-upgrade"),this._overlayInitialized=!0,this.$.overlay.addEventListener("opened-changed",e=>this.opened=e.detail.value),this._overlayContent.addEventListener("close",this._close.bind(this)),this._overlayContent.addEventListener("focus-input",this._focusAndSelect.bind(this)),this.$.overlay.addEventListener("vaadin-overlay-escape-press",this._boundFocus),this._overlayContent.addEventListener("focus",()=>this.focusElement._setFocused(!0)),this.$.overlay.addEventListener("vaadin-overlay-close",this._onVaadinOverlayClose.bind(this));var e=e=>{this.$.overlay.bringToFront&&requestAnimationFrame(()=>{this.$.overlay.bringToFront()})};this.addEventListener("mousedown",e),this.addEventListener("touchstart",e)}disconnectedCallback(){super.disconnectedCallback(),this._overlayInitialized&&this.$.overlay.removeEventListener("vaadin-overlay-escape-press",this._boundFocus),this.opened=!1}open(){this.disabled||this.readonly||(this.opened=!0)}_close(e){e&&e.stopPropagation(),this._focus(),this.close()}close(){(this._overlayInitialized||this.autoOpenDisabled)&&this.$.overlay.close()}get _inputElement(){return this._input()}get _nativeInput(){if(this._inputElement)return this._inputElement.focusElement?this._inputElement.focusElement:this._inputElement.inputElement?this._inputElement.inputElement:window.unwrap?window.unwrap(this._inputElement):this._inputElement}_parseDate(e){var t=/^([-+]\d{1}|\d{2,4}|[-+]\d{6})-(\d{1,2})-(\d{1,2})$/.exec(e);if(t){var a=new Date(0,0);return a.setFullYear(parseInt(t[1],10)),a.setMonth(parseInt(t[2],10)-1),a.setDate(parseInt(t[3],10)),a}}_isNoInput(e,t,a){return!this._inputElement||e||t||!a.parseDate}_formatISO(e){if(!(e instanceof Date))return"";var t=(e,t="00")=>(t+e).substr((t+e).length-t.length),a="",n="0000",i=e.getFullYear();return i<0?(i=-i,a="-",n="000000"):e.getFullYear()>=1e4&&(a="+",n="000000"),[a+t(i,n),t(e.getMonth()+1),t(e.getDate())].join("-")}_openedChanged(e){e&&!this._overlayInitialized&&this._initOverlay(),this._overlayInitialized&&(this.$.overlay.opened=e),e&&this._updateAlignmentAndPosition()}_selectedDateChanged(e,t){if(void 0!==e&&void 0!==t){this.__userInputOccurred&&(this.__dispatchChange=!0);var a=this._formatISO(e);this.__keepInputValue||this._applyInputValue(e),a!==this.value&&(this.validate(),this.value=a),this.__userInputOccurred=!1,this.__dispatchChange=!1,this._ignoreFocusedDateChange=!0,this._focusedDate=e,this._ignoreFocusedDateChange=!1}}_focusedDateChanged(e,t){void 0!==e&&void 0!==t&&(this.__userInputOccurred=!0,this._ignoreFocusedDateChange||this._noInput||this._applyInputValue(e))}_updateHasValue(e){e?this.setAttribute("has-value",""):this.removeAttribute("has-value")}__getOverlayTheme(e,t){if(t)return e}_handleDateChange(e,t,a){if(t){var n=this._parseDate(t);n?u.a._dateEquals(this[e],n)||(this[e]=n,this.value&&this.validate()):this.value=a}else this[e]=""}_valueChanged(e,t){this.__dispatchChange&&this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),this._handleDateChange("_selectedDate",e,t)}_minChanged(e,t){this._handleDateChange("_minDate",e,t)}_maxChanged(e,t){this._handleDateChange("_maxDate",e,t)}_updateAlignmentAndPosition(){if(this._overlayInitialized){if(!this._fullscreen){var e=this._inputElement.getBoundingClientRect(),t=e.top>window.innerHeight/2;if(e.left+this.clientWidth/2>window.innerWidth/2){var a=Math.min(window.innerWidth,document.documentElement.clientWidth);this.$.overlay.setAttribute("right-aligned",""),this.$.overlay.style.removeProperty("left"),this.$.overlay.style.right=a-e.right+"px"}else this.$.overlay.removeAttribute("right-aligned"),this.$.overlay.style.removeProperty("right"),this.$.overlay.style.left=e.left+"px";if(t){var n=Math.min(window.innerHeight,document.documentElement.clientHeight);this.$.overlay.setAttribute("bottom-aligned",""),this.$.overlay.style.removeProperty("top"),this.$.overlay.style.bottom=n-e.top+"px"}else this.$.overlay.removeAttribute("bottom-aligned"),this.$.overlay.style.removeProperty("bottom"),this.$.overlay.style.top=e.bottom+"px"}this.$.overlay.setAttribute("dir",getComputedStyle(this._inputElement).getPropertyValue("direction")),this._overlayContent._repositionYearScroller()}}_fullscreenChanged(){this._overlayInitialized&&this.$.overlay.opened&&this._updateAlignmentAndPosition()}_onOverlayOpened(){this._openedWithFocusRing=this.hasAttribute("focus-ring")||this.focusElement&&this.focusElement.hasAttribute("focus-ring");var e=this._parseDate(this.initialPosition),t=this._selectedDate||this._overlayContent.initialPosition||e||new Date;e||u.a._dateAllowed(t,this._minDate,this._maxDate)?this._overlayContent.initialPosition=t:this._overlayContent.initialPosition=u.a._getClosestDate(t,[this._minDate,this._maxDate]),this._overlayContent.scrollToDate(this._overlayContent.focusedDate||this._overlayContent.initialPosition),this._ignoreFocusedDateChange=!0,this._overlayContent.focusedDate=this._overlayContent.focusedDate||this._overlayContent.initialPosition,this._ignoreFocusedDateChange=!1,window.addEventListener("scroll",this._boundOnScroll,!0),this.addEventListener("iron-resize",this._boundUpdateAlignmentAndPosition),this._webkitOverflowScroll&&(this._touchPrevented=this._preventWebkitOverflowScrollingTouch(this.parentElement)),this._focusOverlayOnOpen?(this._overlayContent.focus(),this._focusOverlayOnOpen=!1):this._focus(),this._noInput&&this.focusElement&&this.focusElement.blur(),this.updateStyles(),this._ignoreAnnounce=!1}_preventWebkitOverflowScrollingTouch(e){for(var t=[];e;){if("touch"===window.getComputedStyle(e).webkitOverflowScrolling){var a=e.style.webkitOverflowScrolling;e.style.webkitOverflowScrolling="auto",t.push({element:e,oldInlineValue:a})}e=e.parentElement}return t}_selectParsedOrFocusedDate(){if(this._ignoreFocusedDateChange=!0,this.i18n.parseDate){var e=this._inputValue||"",t=this._getParsedDate(e);this._isValidDate(t)?this._selectedDate=t:(this.__keepInputValue=!0,this._selectedDate=null,this.__keepInputValue=!1)}else this._focusedDate&&(this._selectedDate=this._focusedDate);this._ignoreFocusedDateChange=!1}_onOverlayClosed(){this._ignoreAnnounce=!0,window.removeEventListener("scroll",this._boundOnScroll,!0),this.removeEventListener("iron-resize",this._boundUpdateAlignmentAndPosition),this._touchPrevented&&(this._touchPrevented.forEach(e=>e.element.style.webkitOverflowScrolling=e.oldInlineValue),this._touchPrevented=[]),this.updateStyles(),this._selectParsedOrFocusedDate(),this._nativeInput&&this._nativeInput.selectionStart&&(this._nativeInput.selectionStart=this._nativeInput.selectionEnd),this.value||this.validate()}validate(){return!(this.invalid=!this.checkValidity(this._inputValue))}checkValidity(){var e=!this._inputValue||this._selectedDate&&this._inputValue===this._getFormattedDate(this.i18n.formatDate,this._selectedDate),t=!this._selectedDate||u.a._dateAllowed(this._selectedDate,this._minDate,this._maxDate),a=!0;return this._inputElement&&(this._inputElement.checkValidity?(this._inputElement.__forceCheckValidity=!0,a=this._inputElement.checkValidity(),this._inputElement.__forceCheckValidity=!1):this._inputElement.validate&&(a=this._inputElement.validate())),e&&t&&a}_onScroll(e){e.target!==window&&this._overlayContent.contains(e.target)||this._updateAlignmentAndPosition()}_focus(){this._noInput?this._overlayInitialized&&this._overlayContent.focus():this._inputElement.focus()}_focusAndSelect(){this._focus(),this._setSelectionRange(0,this._inputValue.length)}_applyInputValue(e){this._inputValue=e?this._getFormattedDate(this.i18n.formatDate,e):""}_getFormattedDate(e,t){return e(u.a._extractDateParts(t))}_setSelectionRange(e,t){this._nativeInput&&this._nativeInput.setSelectionRange&&this._nativeInput.setSelectionRange(e,t)}_eventKey(e){for(var t=["down","up","enter","esc","tab"],a=0;a<t.length;a++){var n=t[a];if(c.a.keyboardEventMatchesKeys(e,n))return n}}_isValidDate(e){return e&&!isNaN(e.getTime())}_onKeydown(e){if(this._noInput){-1===[9].indexOf(e.keyCode)&&e.preventDefault()}switch(this._eventKey(e)){case"down":case"up":e.preventDefault(),this.opened?(this._overlayContent.focus(),this._overlayContent._onKeydown(e)):(this._focusOverlayOnOpen=!0,this.open());break;case"enter":var t=this._getParsedDate(),a=this._isValidDate(t);if(this.opened)this._overlayInitialized&&this._overlayContent.focusedDate&&a&&(this._selectedDate=this._overlayContent.focusedDate),this.close();else if(a||""===this._inputElement.value){var n=this.value;this._selectParsedOrFocusedDate(),n===this.value&&this.validate()}else this.validate();break;case"esc":this.opened?(this._focusedDate=this._selectedDate,this._close()):this.autoOpenDisabled?(""===this._inputElement.value&&(this._selectedDate=null),this._applyInputValue(this._selectedDate)):(this._focusedDate=this._selectedDate,this._selectParsedOrFocusedDate());break;case"tab":this.opened&&(e.preventDefault(),this._setSelectionRange(0,0),e.shiftKey?this._overlayContent.focusCancel():(this._overlayContent.focus(),this._overlayContent.revealDate(this._focusedDate)))}}_getParsedDate(e=this._inputValue){var t=this.i18n.parseDate&&this.i18n.parseDate(e);return t&&this._parseDate(t.year+"-"+(t.month+1)+"-"+t.day)}_onUserInput(e){this.opened||!this._inputElement.value||this.autoOpenDisabled||this.open(),this._userInputValueChanged(),e.__fromClearButton&&(this.validate(),this.__dispatchChange=!0,this.value="",this.__dispatchChange=!1)}_userInputValueChanged(e){if(this.opened&&this._inputValue){var t=this._getParsedDate();this._isValidDate(t)&&(this._ignoreFocusedDateChange=!0,u.a._dateEquals(t,this._focusedDate)||(this._focusedDate=t),this._ignoreFocusedDateChange=!1)}}_announceFocusedDate(e,t,a){t&&!a&&this._overlayContent.announceFocusedDate()}get _overlayContent(){return this.$.overlay.content.querySelector("#overlay-content")}},k=(a(218),a(22));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class E extends(Object(k.a)(Object(r.a)(Object(o.a)(S(Object(i.a)(n.a)))))){static get template(){return f.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([opened]) {
        pointer-events: auto;
      }

      [part="text-field"] {
        width: 100%;
        min-width: 0;
      }
    </style>


    <vaadin-date-picker-text-field id="input" role="application" autocomplete="off" on-focus="_focus" value="{{_userInputValue}}" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" error-message="[[errorMessage]]" clear-button-visible="[[clearButtonVisible]]" aria-label\$="[[label]]" part="text-field" helper-text="[[helperText]]" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <slot name="helper" slot="helper">[[helperText]]</slot>
      <div part="toggle-button" slot="suffix" on-tap="_toggle" role="button" aria-label\$="[[i18n.calendar]]" aria-expanded\$="[[_getAriaExpanded(opened)]]"></div>
    </vaadin-date-picker-text-field>

    <vaadin-date-picker-overlay id="overlay" fullscreen\$="[[_fullscreen]]" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]" on-vaadin-overlay-open="_onOverlayOpened" on-vaadin-overlay-close="_onOverlayClosed" disable-upgrade="">
      <template>
        <vaadin-date-picker-overlay-content id="overlay-content" i18n="[[i18n]]" fullscreen\$="[[_fullscreen]]" label="[[label]]" selected-date="{{_selectedDate}}" slot="dropdown-content" focused-date="{{_focusedDate}}" show-week-numbers="[[showWeekNumbers]]" min-date="[[_minDate]]" max-date="[[_maxDate]]" role="dialog" on-date-tap="_close" part="overlay-content" theme\$="[[__getOverlayTheme(theme, _overlayInitialized)]]">
        </vaadin-date-picker-overlay-content>
      </template>
    </vaadin-date-picker-overlay>

    <iron-media-query query="[[_fullscreenMediaQuery]]" query-matches="{{_fullscreen}}">
    </iron-media-query>
`}static get is(){return"vaadin-date-picker"}static get version(){return"4.4.1"}static get properties(){return{clearButtonVisible:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1,reflectToAttribute:!0},errorMessage:String,placeholder:String,helperText:{type:String,value:""},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},_userInputValue:String}}static get observers(){return["_userInputValueChanged(_userInputValue)","_setClearButtonLabel(i18n.clear)"]}ready(){super.ready(),Object(y.a)(this,()=>this._inputElement.validate=()=>{}),this._inputElement.addEventListener("change",e=>{""!==this._inputElement.value||e.__fromClearButton||(this.__dispatchChange=!0)})}_onVaadinOverlayClose(e){this._openedWithFocusRing&&this.hasAttribute("focused")?this.focusElement.setAttribute("focus-ring",""):this.hasAttribute("focused")||this.focusElement.blur(),e.detail.sourceEvent&&-1!==e.detail.sourceEvent.composedPath().indexOf(this)&&e.preventDefault()}_toggle(e){e.stopPropagation(),this[this._overlayInitialized&&this.$.overlay.opened?"close":"open"]()}_input(){return this.$.input}set _inputValue(e){this._inputElement.value=e}get _inputValue(){return this._inputElement.value}_getAriaExpanded(e){return Boolean(e).toString()}get focusElement(){return this._input()||this}_setClearButtonLabel(e){this._inputElement.shadowRoot.querySelector('[part="clear-button"]').setAttribute("aria-label",e)}}customElements.define(E.is,E)},,function(e,t,a){"use strict";a.d(t,"a",(function(){return y}));var n=a(9),i=a(45),o=a(24),r=a(30);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
Object(r.register)({name:"vaadin-contextmenu",deps:["touchstart","touchmove","touchend","contextmenu"],flow:{start:["touchstart","contextmenu"],end:["contextmenu"]},emits:["vaadin-contextmenu"],info:{sourceEvent:null,_ios:/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&navigator.maxTouchPoints>1},reset:function(){this.info.sourceEvent=null,this._cancelTimer(),this.info.touchJob=null,this.info.touchStartCoords=null},_cancelTimer:function(){this._timerId&&(clearTimeout(this._timerId),delete this._fired)},touchstart:function(e){this.info.sourceEvent=e,this.info.touchStartCoords={x:e.changedTouches[0].clientX,y:e.changedTouches[0].clientY};var t=e.composedPath()[0]||e.target;this._timerId=setTimeout(()=>{var a=e.changedTouches[0];e.shiftKey||(this.info._ios&&(this._fired=!0,this.fire(t,a.clientX,a.clientY)),Object(r.prevent)("tap"))},500)},touchmove:function(e){var t=this.info.touchStartCoords;(Math.abs(t.x-e.changedTouches[0].clientX)>15||Math.abs(t.y-e.changedTouches[0].clientY)>15)&&this._cancelTimer()},touchend:function(e){this._fired&&e.preventDefault(),this._cancelTimer()},contextmenu:function(e){e.shiftKey||(this.info.sourceEvent=e,this.fire(e.target,e.clientX,e.clientY),Object(r.prevent)("tap"))},fire:function(e,t,a){var n=this.info.sourceEvent,i=new Event("vaadin-contextmenu",{bubbles:!0,cancelable:!0,composed:!0});i.detail={x:t,y:a,sourceEvent:n},e.dispatchEvent(i),i.defaultPrevented&&n&&n.preventDefault&&n.preventDefault()}});a(177);var s=a(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class l extends class extends n.a{}{static get template(){return s.a`
    <iron-media-query query="min-device-width: 750px" query-matches="{{wide}}"></iron-media-query>
`}static get is(){return"vaadin-device-detector"}static get properties(){return{phone:{type:Boolean,computed:"_phone(wide, touch)",notify:!0},touch:{type:Boolean,notify:!0,value:()=>this._touch()},wide:{type:Boolean,notify:!0}}}static _touch(){try{return document.createEvent("TouchEvent"),!0}catch(e){return!1}}_phone(e,t){return!e&&t}}customElements.define(l.is,l);var h=a(145),c=a(183),d=(a(65),a(26));class p extends h.a{static get is(){return"vaadin-context-menu-item"}}class u extends c.a{static get is(){return"vaadin-context-menu-list-box"}}customElements.define(p.is,p),customElements.define(u.is,u);var f=e=>class extends e{static get properties(){return{items:Array}}ready(){super.ready(),this.__itemsOutsideClickListener=e=>{e.composedPath().filter(e=>"vaadin-context-menu-overlay"===e.localName)[0]||this.dispatchEvent(new CustomEvent("items-outside-click"))},this.addEventListener("items-outside-click",e=>this.items&&this.close())}connectedCallback(){super.connectedCallback(),document.documentElement.addEventListener("click",this.__itemsOutsideClickListener)}disconnectedCallback(){super.disconnectedCallback(),document.documentElement.removeEventListener("click",this.__itemsOutsideClickListener)}get __isRTL(){return"rtl"===this.getAttribute("dir")}__forwardFocus(){var e=this.$.overlay,t=e.getFirstChild();if(e.parentOverlay){var a=e.parentOverlay.querySelector("[expanded]");a&&a.hasAttribute("focused")&&t?t.focus():e.$.overlay.focus()}else t&&t.focus()}__openSubMenu(e,t){e.items=t._item.children,e.listenOn=t;var a,n=t.getBoundingClientRect(),i=e.$.overlay.$.content,o=getComputedStyle(i),r=this.$.overlay,s=r.hasAttribute("bottom-aligned")?n.bottom+parseFloat(o.paddingBottom):n.top-parseFloat(o.paddingTop);e.$.overlay._setParentOverlay(r),r.theme?e.setAttribute("theme",r.theme):e.removeAttribute("theme"),i.style.minWidth="",document.documentElement.clientWidth-n.right>n.width?a=n.right:(a=n.left-n.width,i.style.minWidth=r.$.content.clientWidth+"px"),a=Math.max(a,0),t.dispatchEvent(new CustomEvent("opensubmenu",{detail:{x:a,y:s,children:t._item.children}}))}__itemsRenderer(e,t,a){this.__initMenu(e,t),e.querySelector(this.constructor.is).closeOn=t.closeOn;var n=e.querySelector("vaadin-context-menu-list-box");n.innerHTML="",Array.from(a.detail.children||t.items).forEach(e=>{var t;(t=e.component instanceof HTMLElement?e.component:document.createElement(e.component||"vaadin-context-menu-item"))instanceof h.a?(t.setAttribute("role","menuitem"),t.classList.add("vaadin-menu-item")):"hr"===t.localName&&t.setAttribute("role","separator"),this.theme&&t.setAttribute("theme",this.theme),t._item=e,e.text&&(t.textContent=e.text),this.__toggleMenuComponentAttribute(t,"menu-item-checked",e.checked),this.__toggleMenuComponentAttribute(t,"disabled",e.disabled),t.setAttribute("aria-haspopup","false"),t.classList.remove("vaadin-context-menu-parent-item"),e.children&&e.children.length&&(t.classList.add("vaadin-context-menu-parent-item"),t.setAttribute("aria-haspopup","true"),t.setAttribute("aria-expanded","false"),t.removeAttribute("expanded")),n.appendChild(t)})}__toggleMenuComponentAttribute(e,t,a){a?(e.setAttribute(t,""),e["__has-"+t]=!0):e["__has-"+t]&&(e.removeAttribute(t),e["__has-"+t]=!1)}__initMenu(e,t){if(e.firstElementChild){var a=e.querySelector("vaadin-context-menu-list-box");this.theme?a.setAttribute("theme",this.theme):a.removeAttribute("theme")}else{var n=this.constructor.is;e.innerHTML=`\n        <vaadin-context-menu-list-box></vaadin-context-menu-list-box>\n        <${n} hidden></${n}>\n      `,Object(d.b)();var i=e.querySelector("vaadin-context-menu-list-box");this.theme&&i.setAttribute("theme",this.theme),i.classList.add("vaadin-menu-list-box"),requestAnimationFrame(()=>i.setAttribute("role","menu"));var o=e.querySelector(n);o.$.overlay.modeless=!0,o.openOn="opensubmenu",t.addEventListener("opened-changed",e=>!e.detail.value&&o.close()),o.addEventListener("opened-changed",e=>{if(!e.detail.value){var t=i.querySelector("[expanded]");t&&(t.setAttribute("aria-expanded","false"),t.removeAttribute("expanded"))}}),i.addEventListener("selected-changed",e=>{if("number"==typeof e.detail.value){var a=e.target.items[e.detail.value]._item;if(!a.children){var n={value:a};t.dispatchEvent(new CustomEvent("item-selected",{detail:n}))}i.selected=null}}),o.addEventListener("item-selected",e=>{t.dispatchEvent(new CustomEvent("item-selected",{detail:e.detail}))}),o.addEventListener("close-all-menus",()=>{t.dispatchEvent(new CustomEvent("close-all-menus"))}),t.addEventListener("close-all-menus",t.close),t.addEventListener("item-selected",t.close),t.$.overlay.$.backdrop.addEventListener("click",()=>t.close()),t.$.overlay.addEventListener("keydown",e=>{var a=this.__isRTL;!a&&37===e.keyCode||a&&39===e.keyCode?(t.close(),t.listenOn.focus()):27===e.keyCode&&t.dispatchEvent(new CustomEvent("close-all-menus"))}),requestAnimationFrame(()=>this.__openListenerActive=!0);var r=(e,a=e.composedPath().filter(e=>"vaadin-context-menu-item"===e.localName)[0])=>{if(this.__openListenerActive)if(t.$.overlay.hasAttribute("opening"))requestAnimationFrame(()=>r(e,a));else if(a){if(o.items!==a._item.children&&o.close(),!t.opened)return;a._item.children&&a._item.children.length?(a.setAttribute("aria-expanded","true"),a.setAttribute("expanded",""),this.__openSubMenu(o,a)):o.listenOn.focus()}};t.$.overlay.addEventListener("mouseover",r),t.$.overlay.addEventListener("keydown",e=>{var t=this.__isRTL;(!t&&39===e.keyCode||t&&37===e.keyCode||13===e.keyCode||32===e.keyCode)&&r(e)})}}},v=a(22),m=a(112),g=(a(55),a(98)),b=document.createElement("template");b.innerHTML='<dom-module id="vaadin-context-menu-overlay-styles" theme-for="vaadin-context-menu-overlay">\n  <template>\n    <style>\n      :host {\n        align-items: flex-start;\n        justify-content: flex-start;\n      }\n\n      :host([right-aligned]),\n      :host([end-aligned]) {\n        align-items: flex-end;\n      }\n\n      :host([bottom-aligned]) {\n        justify-content: flex-end;\n      }\n\n      [part="overlay"] {\n        background-color: #fff;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(b.content);class _ extends g.a{static get is(){return"vaadin-context-menu-overlay"}static get properties(){return{instanceProps:{type:Object,value:()=>({detail:!0,target:!0})},parentOverlay:{type:Object,readOnly:!0}}}static get observers(){return["_themeChanged(theme)"]}ready(){super.ready(),this.addEventListener("keydown",e=>{if(!e.defaultPrevented&&e.composedPath()[0]===this.$.overlay&&[38,40].indexOf(e.keyCode)>-1){var t=this.getFirstChild();t&&Array.isArray(t.items)&&t.items.length&&(e.preventDefault(),38===e.keyCode?t.items[t.items.length-1].focus():t.focus())}})}getFirstChild(){return this.content.querySelector(":not(style):not(slot)")}_themeChanged(e){this.close()}getBoundaries(){var e=this.getBoundingClientRect(),t=this.$.overlay.getBoundingClientRect(),a=e.bottom-t.height,n=this.parentOverlay;if(n&&n.hasAttribute("bottom-aligned")){var i=getComputedStyle(n);a=a-parseFloat(i.bottom)-parseFloat(i.height)}return{xMax:e.right-t.width,xMin:e.left+t.width,yMax:a,left:e.left,right:e.right,top:e.top,width:t.width}}}customElements.define(_.is,_);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class y extends(Object(v.a)(Object(m.a)(f(Object(i.a)(n.a))))){static get template(){return s.a`
    <style>
      :host {
        display: block;
      }

      :host([hidden]) {
        display: none !important;
      }
    </style>

    <slot id="slot"></slot>

    <vaadin-device-detector phone="{{_phone}}" touch="{{_touch}}"></vaadin-device-detector>

    <vaadin-context-menu-overlay id="overlay" on-opened-changed="_onOverlayOpened" on-vaadin-overlay-open="_onVaadinOverlayOpen" with-backdrop="[[_phone]]" phone\$="[[_phone]]" model="[[_context]]" theme\$="[[theme]]">
    </vaadin-context-menu-overlay>
`}static get is(){return"vaadin-context-menu"}static get version(){return"4.5.0"}static get properties(){return{selector:{type:String},opened:{type:Boolean,value:!1,notify:!0,readOnly:!0},openOn:{type:String,value:"vaadin-contextmenu"},listenOn:{type:Object,value:function(){return this}},closeOn:{type:String,value:"click",observer:"_closeOnChanged"},renderer:{type:Function},_context:Object,_boundClose:Object,_boundOpen:Object,_contentTemplate:Object,_oldTemplate:Object,_oldRenderer:Object,_touch:Boolean}}static get observers(){return["_openedChanged(opened)","_contextChanged(_context, _instance)","_targetOrOpenOnChanged(listenOn, openOn)","_templateOrRendererChanged(_contentTemplate, renderer, _context, items)"]}constructor(){super(),this._boundOpen=this.open.bind(this),this._boundClose=this.close.bind(this),this._boundOnGlobalContextMenu=this._onGlobalContextMenu.bind(this)}connectedCallback(){super.connectedCallback(),this.__boundOnScroll=this.__onScroll.bind(this),window.addEventListener("scroll",this.__boundOnScroll,!0)}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("scroll",this.__boundOnScroll,!0),this.close()}ready(){super.ready(),this._observer=new o.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)})}_setTemplateFromNodes(e){this._contentTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._contentTemplate}_onOverlayOpened(e){this._setOpened(e.detail.value),this.__alignOverlayPosition()}_onVaadinOverlayOpen(e){this.__alignOverlayPosition(),this.$.overlay.style.opacity="",this.__forwardFocus()}_targetOrOpenOnChanged(e,t){this._oldListenOn&&this._oldOpenOn&&(this._unlisten(this._oldListenOn,this._oldOpenOn,this._boundOpen),this._oldListenOn.style.webkitTouchCallout="",this._oldListenOn.style.webkitUserSelect="",this._oldListenOn.style.msUserSelect="",this._oldListenOn.style.userSelect="",this._oldListenOn=null,this._oldOpenOn=null),e&&t&&(this._listen(e,t,this._boundOpen),this._oldListenOn=e,this._oldOpenOn=t)}_setListenOnUserSelect(e){this.listenOn.style.webkitTouchCallout=e,this.listenOn.style.webkitUserSelect=e,this.listenOn.style.msUserSelect=e,this.listenOn.style.userSelect=e,document.getSelection().removeAllRanges()}_closeOnChanged(e,t){t&&(this._unlisten(this.$.overlay,t,this._boundClose),this._unlisten(this.$.overlay.root,t,this._boundClose)),e?(this._listen(this.$.overlay,e,this._boundClose),this._listen(this.$.overlay.root,e,this._boundClose),this._unlisten(this.$.overlay,"vaadin-overlay-outside-click",this._preventDefault)):this._listen(this.$.overlay,"vaadin-overlay-outside-click",this._preventDefault)}_preventDefault(e){e.preventDefault()}_openedChanged(e){e?(this._instance||(this.$.overlay.template=this.querySelector("template"),this._instance=this.$.overlay._instance),document.documentElement.addEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("none")):(document.documentElement.removeEventListener("contextmenu",this._boundOnGlobalContextMenu,!0),this._setListenOnUserSelect("")),this.$.overlay.opened=e}render(){this.$.overlay.render()}_removeNewRendererOrTemplate(e,t,a,n){e!==t?this._contentTemplate=void 0:a!==n&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,a,n){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for context-menu content");if(this._oldTemplate=e,this._oldRenderer=t,n){if(e||t)throw new Error("The items API cannot be used together with a template/renderer");"click"===this.closeOn&&(this.closeOn=""),t=this.__itemsRenderer}t&&a&&this.$.overlay.setProperties({owner:this,renderer:t})}_contextChanged(e,t){void 0!==e&&void 0!==t&&(t.detail=e.detail,t.target=e.target)}close(){this._setOpened(!1)}_contextTarget(e){if(this.selector){var t=this.listenOn.querySelectorAll(this.selector);return Array.prototype.filter.call(t,t=>e.composedPath().indexOf(t)>-1)[0]}return e.target}open(e){e&&!this.opened&&(this._context={detail:e.detail,target:this._contextTarget(e)},this._context.target&&(this._preventDefault(e),e.stopPropagation(),this.__x=this._getEventCoordinate(e,"x"),this.__pageXOffset=window.pageXOffset,this.__y=this._getEventCoordinate(e,"y"),this.__pageYOffset=window.pageYOffset,this.$.overlay.style.opacity="0",this._setOpened(!0)))}__onScroll(){if(this.opened){var e=window.pageYOffset-this.__pageYOffset,t=window.pageXOffset-this.__pageXOffset;this.__adjustPosition("left",-t),this.__adjustPosition("right",t),this.__adjustPosition("top",-e),this.__adjustPosition("bottom",e),this.__pageYOffset+=e,this.__pageXOffset+=t}}__adjustPosition(e,t){var a=this.$.overlay.style;a[e]=(parseInt(a[e])||0)+t+"px"}__alignOverlayPosition(){var e=this.$.overlay,t=e.style;["top","right","bottom","left"].forEach(e=>t.removeProperty(e)),["right-aligned","end-aligned","bottom-aligned"].forEach(t=>e.removeAttribute(t));var a,{xMax:n,xMin:i,yMax:o,left:r,right:s,top:l,width:h}=e.getBoundaries(),c=this.__x||(this.__isRTL?s:r),d=this.__y||l,p=document.documentElement.clientWidth,u=document.documentElement.clientHeight,f=e.parentOverlay,v=!1;if(f)if(a=f.$.overlay.getBoundingClientRect(),f.hasAttribute("right-aligned")||f.hasAttribute("end-aligned")){var m=getComputedStyle(f),g=(e,t)=>parseFloat(getComputedStyle(e.$.content)["padding"+t]),b=parseFloat(m[this.__isRTL?"left":"right"])+a.width;p-(b-(g(f,"Left")+g(e,"Right")))>h&&(this._setEndAligned(e),t[this.__isRTL?"left":"right"]=b+"px",v=!0)}else c<a.x&&(c-=h-a.width);v||(this.__isRTL?(c>p/2||c>i)&&!f?t.right=Math.max(0,p-c)+"px":f&&a.left>=a.width?t.right=p-a.right+a.width+"px":f?(t.right="auto",t.left=Math.max(e.getBoundingClientRect().left-e.getBoundingClientRect().width,a.right)+"px",this._setEndAligned(e)):(t.left=c+"px",this._setEndAligned(e)):(c<p/2||c<n)&&!f?t.left=c+"px":f&&p-a.width-a.left>=a.width?t.left=a.left+a.width+"px":f?(t.right="auto",t.left=Math.max(e.getBoundingClientRect().left,a.left-e.getBoundingClientRect().width)+"px",this._setEndAligned(e)):(t.right=Math.max(0,p-c)+"px",this._setEndAligned(e))),d<u/2||d<o?t.top=d+"px":(t.bottom=Math.max(0,u-d)+"px",e.setAttribute("bottom-aligned",""))}_setEndAligned(e){e.setAttribute("end-aligned",""),this.__isRTL||e.setAttribute("right-aligned","")}_getEventCoordinate(e,t){if(!(e.detail instanceof Object)){var a="client"+t.toUpperCase(),n=e.changedTouches?e.changedTouches[0][a]:e[a];if(0===n){var i=e.target.getBoundingClientRect();return"x"===t?i.left:i.top+i.height}return n}return e.detail[t]?e.detail[t]:e.detail.sourceEvent?this._getEventCoordinate(e.detail.sourceEvent,t):void 0}_listen(e,t,a){r.gestures[t]?Object(r.addListener)(e,t,a):e.addEventListener(t,a)}_unlisten(e,t,a){r.gestures[t]?Object(r.removeListener)(e,t,a):e.removeEventListener(t,a)}_onGlobalContextMenu(e){e.shiftKey||(e.preventDefault(),this.close())}}customElements.define(y.is,y)},,function(e,t,a){"use strict";a(214),a(215),a(221),a(125),a(78);var n=a(6),i=n.a`<dom-module id="lumo-time-picker" theme-for="vaadin-time-picker">
  <template>
    <style include="lumo-field-button">
      [part~="toggle-button"]::before {
        content: var(--lumo-icons-clock);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(i.content);a(106);var o=n.a`<dom-module id="lumo-time-picker-text-field" theme-for="vaadin-time-picker-text-field">
  <template>
    <style>
      :not(*):placeholder-shown, /* to prevent broken styles on IE */
      :host([dir="rtl"]) [part="value"]:placeholder-shown,
      :host([dir="rtl"]) [part="input-field"] ::slotted(input:placeholder-shown) {
        --_lumo-text-field-overflow-mask-image: none;
      }

      :host([dir="rtl"]) [part="value"],
      :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(o.content);a(299)},,function(e,t,a){"use strict";a(106),a(205),a(173),a(257),a(220);var n=a(6).a`<dom-module id="lumo-login-form" theme-for="vaadin-login-form">
  <template>
    <style>
      vaadin-button[part="vaadin-login-submit"] {
        margin-top: var(--lumo-space-l);
        margin-bottom: var(--lumo-space-s);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);a(258)},,function(e,t,a){"use strict";a(32),a(47),a(176),a(78),a(41),a(63),a(51);var n=a(6).a`<dom-module id="lumo-context-menu-overlay" theme-for="vaadin-context-menu-overlay">
  <template>
    <style include="lumo-menu-overlay">
      :host([phone]) {
        top: 0 !important;
        right: 0 !important;
        bottom: var(--vaadin-overlay-viewport-bottom) !important;
        left: 0 !important;
        align-items: stretch;
        justify-content: flex-end;
      }

    /* TODO These style overrides should not be needed.
       We should instead offer a way to have non-selectable items inside the context menu. */

      :host {
        --_lumo-list-box-item-selected-icon-display: none;
        --_lumo-list-box-item-padding-left: calc(var(--lumo-space-m) + var(--lumo-border-radius) / 4);
      }

      [part="overlay"] {
        outline: none;
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-context-menu-list-box" theme-for="vaadin-context-menu-list-box">
  <template>
    <style>
      :host(.vaadin-menu-list-box) {
        --_lumo-list-box-item-selected-icon-display: block;
      }

      /* Normal item */

      [part="items"] ::slotted(.vaadin-menu-item) {
        -webkit-tap-highlight-color: var(--lumo-primary-color-10pct);
        cursor: default;
      }

      [part="items"] ::slotted(.vaadin-menu-item) {
        outline: none;
        border-radius: var(--lumo-border-radius);
        padding-left: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      :host(.vaadin-menu-list-box) [part="items"] ::slotted(.vaadin-menu-item) {
        padding-left: calc(var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
      }

      /* Workaround to display checkmark in IE11 when list-box is not used in dropdown-menu */
      [part="items"] ::slotted(.vaadin-menu-item)::before {
        display: var(--_lumo-item-selected-icon-display);
      }

      /* Hovered item */
      /* TODO a workaround until we have "focus-follows-mouse". After that, use the hover style for focus-ring as well */

      [part="items"] ::slotted(.vaadin-menu-item:hover:not([disabled])),
      [part="items"] ::slotted(.vaadin-menu-item[expanded]:not([disabled])) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* RTL styles */
      :host([dir="rtl"])[part="items"] ::slotted(.vaadin-menu-item) {
        padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        padding-right: var(--_lumo-list-box-item-padding-left, calc(var(--lumo-border-radius) / 4));
      }

      :host([dir="rtl"].vaadin-menu-list-box) [part="items"] ::slotted(.vaadin-menu-item) {
        padding-left: calc(var(--lumo-space-l) + var(--lumo-border-radius) / 4);
        padding-right: calc(var(--lumo-border-radius) / 4);
      }

      /* Focused item */

      @media (pointer: coarse) {
        [part="items"] ::slotted(.vaadin-menu-item:hover:not([expanded]):not([disabled])) {
          background-color: transparent;
        }
      }
    </style>
  </template>
</dom-module><dom-module id="lumo-context-menu-item" theme-for="vaadin-context-menu-item">
  <template>
    <style>
      :host {
        user-select: none;
        -ms-user-select: none;
        -webkit-user-select: none;
      }

      :host(.vaadin-menu-item[menu-item-checked])::before {
        opacity: 1;
      }

      :host(.vaadin-menu-item.vaadin-context-menu-parent-item)::after {
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-xs);
        content: var(--lumo-icons-angle-right);
        color: var(--lumo-tertiary-text-color);
      }

      :host(:not([dir="rtl"]).vaadin-menu-item.vaadin-context-menu-parent-item)::after {
        margin-right: calc(var(--lumo-space-m) * -1);
        padding-left: var(--lumo-space-m);
      }

      :host([expanded]) {
        background-color: var(--lumo-primary-color-10pct);
      }

      /* RTL styles */
      :host([dir="rtl"].vaadin-menu-item.vaadin-context-menu-parent-item)::after {
        content: var(--lumo-icons-angle-left);
        margin-left: calc(var(--lumo-space-m) * -1);
        padding-right: var(--lumo-space-m);
      }

    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);a(199),a(238),a(282)},function(e,t,a){"use strict";a(32);var n=a(6).a`<dom-module id="lumo-form-layout" theme-for="vaadin-form-layout">
  <template>
    <style>
      :host {
        --vaadin-form-layout-column-spacing: var(--lumo-space-l);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);a(252)},function(e,t,a){"use strict";a(41);var n=a(6).a`<dom-module id="lumo-grid-sorter" theme-for="vaadin-grid-sorter">
  <template>
    <style>
      :host {
        justify-content: flex-start;
        align-items: baseline;
        -webkit-user-select: none;
        -moz-user-select: none;
        user-select: none;
      }

      [part="content"] {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
      }

      [part="indicators"] {
        margin-left: var(--lumo-space-s);
      }

      :host(:not([direction])) [part="indicators"]::before {
        opacity: 0.2;
      }

      :host([direction]) {
        color: var(--lumo-primary-text-color);
      }

      [part="order"] {
        font-size: var(--lumo-font-size-xxs);
        line-height: 1;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="indicators"] {
        margin-right: var(--lumo-space-s);
        margin-left: 0;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);a(254)},function(e,t,a){"use strict";a(75),a(41),a(63),a(32),a(47);var n=a(6).a`<dom-module id="lumo-progress-bar" theme-for="vaadin-progress-bar">
  <template>
    <style>
      :host {
        height: calc(var(--lumo-size-l) / 10);
        margin: var(--lumo-space-s) 0;
      }

      [part="bar"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-contrast-10pct);
      }

      [part="value"] {
        border-radius: var(--lumo-border-radius);
        background-color: var(--lumo-primary-color);
        /* Use width instead of transform to preserve border radius */
        transform: none;
        width: calc(var(--vaadin-progress-value) * 100%);
        will-change: width;
        transition: 0.1s width linear;
      }

      /* Indeterminate mode */

      :host([indeterminate]) [part="value"] {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        width: 100%;
        background-color: transparent !important;
        background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        opacity: 0.75;
        will-change: transform;
        animation: vaadin-progress-indeterminate 1.6s infinite cubic-bezier(.645, .045, .355, 1);
      }

      @keyframes vaadin-progress-indeterminate {
        0% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
        }

        25% {
          transform: scaleX(0.4);
        }

        50% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        }

        50.1% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }

        75% {
          transform: scaleX(0.4);
        }

        100% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }
      }

      :host(:not([aria-valuenow])) [part="value"]::before,
      :host([indeterminate]) [part="value"]::before {
        content: "";
        display: block;
        width: 100%;
        height: 100%;
        border-radius: inherit;
        background-color: var(--lumo-primary-color);
        will-change: opacity;
        animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(.645, .045, .355, 1);
      }

      @keyframes vaadin-progress-pulse3 {
        0% { opacity: 1; }
        10% { opacity: 0; }
        40% { opacity: 0; }
        50% { opacity: 1; }
        50.1% { opacity: 1; }
        60% { opacity: 0; }
        90% { opacity: 0; }
        100% { opacity: 1; }
      }

      /* Contrast color */

      :host([theme~="contrast"]) [part="value"],
      :host([theme~="contrast"]) [part="value"]::before {
        background-color: var(--lumo-contrast-80pct);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-80pct));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-60pct));
      }

      /* Error color */

      :host([theme~="error"]) [part="value"],
      :host([theme~="error"]) [part="value"]::before {
        background-color: var(--lumo-error-color);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
      }

      /* Primary color */

      :host([theme~="success"]) [part="value"],
      :host([theme~="success"]) [part="value"]::before {
        background-color: var(--lumo-success-color);
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to right, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to left, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
      }

      /* RTL specific styles */

      :host([indeterminate][dir="rtl"]) [part="value"] {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-primary-color-10pct) 10%, var(--lumo-primary-color));
        animation: vaadin-progress-indeterminate-rtl 1.6s infinite cubic-bezier(.355, .045, .645, 1);
      }

      :host(:not([aria-valuenow])[dir="rtl"]) [part="value"]::before,
      :host([indeterminate][dir="rtl"]) [part="value"]::before {
        animation: vaadin-progress-pulse3 1.6s infinite cubic-bezier(.355, .045, .645, 1);
      }

      @keyframes vaadin-progress-indeterminate-rtl {
        0% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
        }

        25% {
          transform: scaleX(0.4);
        }

        50% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background);
        }

        50.1% {
          transform: scaleX(0.015);
          transform-origin: 0% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }

        75% {
          transform: scaleX(0.4);
        }

        100% {
          transform: scaleX(0.015);
          transform-origin: 100% 0%;
          background-image: var(--lumo-progress-indeterminate-progress-bar-background-reverse);
        }
      }

      /* Contrast color */

      :host([theme~="contrast"][dir="rtl"]) [part="value"],
      :host([theme~="contrast"][dir="rtl"]) [part="value"]::before {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-80pct));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-contrast-5pct) 10%, var(--lumo-contrast-60pct));
      }

      /* Error color */

      :host([theme~="error"][dir="rtl"]) [part="value"],
      :host([theme~="error"][dir="rtl"]) [part="value"]::before {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-error-color-10pct) 10%, var(--lumo-error-color));
      }

      /* Primary color */

      :host([theme~="success"][dir="rtl"]) [part="value"],
      :host([theme~="success"][dir="rtl"]) [part="value"]::before {
        --lumo-progress-indeterminate-progress-bar-background: linear-gradient(to left, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
        --lumo-progress-indeterminate-progress-bar-background-reverse: linear-gradient(to right, var(--lumo-success-color-10pct) 10%, var(--lumo-success-color));
      }
    </style>
  </template>
</dom-module><custom-style>
  <style>
    @keyframes vaadin-progress-pulse3 {
      0% { opacity: 1; }
      10% { opacity: 0; }
      40% { opacity: 0; }
      50% { opacity: 1; }
      50.1% { opacity: 1; }
      60% { opacity: 0; }
      90% { opacity: 0; }
      100% { opacity: 1; }
    }
  </style>
</custom-style>`;document.head.appendChild(n.content);a(298)},function(e,t,a){"use strict";a(78),a(63),a(125);var n=a(6).a`<dom-module id="lumo-number-field" theme-for="vaadin-number-field">
  <template>
    <style include="lumo-field-button">
      :host {
        width: 8em;
      }

      :host([has-controls]:not([theme~="align-right"])) [part="value"] {
        text-align: center;
      }

      [part="decrease-button"][disabled],
      [part="increase-button"][disabled] {
        opacity: 0.2;
      }

      :host([has-controls]) [part="input-field"] {
        padding: 0;
      }

      [part="decrease-button"],
      [part="increase-button"] {
        cursor: pointer;
        font-size: var(--lumo-icon-size-s);
        width: 1.6em;
        height: 1.6em;
      }

      [part="decrease-button"]::before,
      [part="increase-button"]::before {
        margin-top: 0.2em;
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="value"],
      :host([dir="rtl"]) [part="input-field"] ::slotted(input) {
        --_lumo-text-field-overflow-mask-image: linear-gradient(to left, transparent, #000 1.25em);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);a(106),a(259)},,,,,,function(e,t,a){"use strict";var n=a(9),i=e=>class extends e{static get properties(){return{value:{type:Number,observer:"_valueChanged"},min:{type:Number,value:0,observer:"_minChanged"},max:{type:Number,value:1,observer:"_maxChanged"},indeterminate:{type:Boolean,value:!1,reflectToAttribute:!0}}}static get observers(){return["_normalizedValueChanged(value, min, max)"]}ready(){super.ready(),this.setAttribute("role","progressbar")}_normalizedValueChanged(e,t,a){var n=this._normalizeValue(e,t,a);this.style.setProperty("--vaadin-progress-value",n),this.updateStyles({"--vaadin-progress-value":String(n)})}_valueChanged(e,t){this.setAttribute("aria-valuenow",e)}_minChanged(e,t){this.setAttribute("aria-valuemin",e)}_maxChanged(e,t){this.setAttribute("aria-valuemax",e)}_normalizeValue(e,t,a){var n;return e||0==e?t>=a?n=1:(n=(e-t)/(a-t),n=Math.min(Math.max(n,0),1)):n=0,n}},o=a(17),r=a(22),s=a(6);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class l extends(Object(r.a)(Object(o.a)(i(n.a)))){static get template(){return s.a`
    <style>
      :host {
        display: block;
        width: 100%; /* prevent collapsing inside non-stretching column flex */
        height: 8px;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part="bar"] {
        height: 100%;
      }

      [part="value"] {
        height: 100%;
        transform-origin: 0 50%;
        transform: scaleX(var(--vaadin-progress-value));
      }

      /* RTL specific styles */

      :host([dir="rtl"]) [part="value"] {
        transform-origin: 100% 50%;
      }
    </style>

    <div part="bar">
      <div part="value"></div>
    </div>
`}static get is(){return"vaadin-progress-bar"}static get version(){return"1.3.0"}}customElements.define(l.is,l)},function(e,t,a){"use strict";a.d(t,"a",(function(){return p}));var n=a(9),i=a(17),o=a(22),r=(a(221),a(90)),s=a(84),l=document.createElement("template");l.innerHTML='<dom-module id="vaadin-time-picker-text-field-styles" theme-for="vaadin-time-picker-text-field">\n  <template>\n    <style>\n      :host([dir="rtl"]) [part="input-field"] {\n        direction: ltr;\n      }\n\n      :host([dir="rtl"]) [part="value"]::placeholder {\n        direction: rtl;\n        text-align: left;\n      }\n\n      :host([dir="rtl"]) [part="input-field"] ::slotted(input)::placeholder {\n        direction: rtl;\n        text-align: left;\n      }\n\n      :host([dir="rtl"]) [part="value"]:-ms-input-placeholder,\n      :host([dir="rtl"]) [part="input-field"] ::slotted(input):-ms-input-placeholder {\n        direction: rtl;\n        text-align: left;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(l.content);class h extends s.a{static get is(){return"vaadin-time-picker-text-field"}}customElements.define(h.is,h);var c=a(6),d=a(69);
/**
@license
Copyright (c) 2018 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class p extends(Object(o.a)(Object(d.a)(Object(i.a)(n.a)))){static get template(){return c.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      [part~="toggle-button"] {
        cursor: pointer;
      }

      .input {
        width: 100%;
        min-width: 0;
      }
    </style>
    <vaadin-combo-box-light allow-custom-value="" item-label-path="value" filtered-items="[[__dropdownItems]]" disabled="[[disabled]]" readonly="[[readonly]]" auto-open-disabled="[[autoOpenDisabled]]" dir="ltr" theme\$="[[theme]]">
      <template>
        [[item.label]]
      </template>
      <vaadin-time-picker-text-field class="input" name="[[name]]" invalid="[[invalid]]" autocomplete="off" label="[[label]]" required="[[required]]" disabled="[[disabled]]" prevent-invalid-input="[[preventInvalidInput]]" pattern="[[pattern]]" error-message="[[errorMessage]]" autofocus="[[autofocus]]" placeholder="[[placeholder]]" readonly="[[readonly]]" role="application" aria-live="assertive" min\$="[[min]]" max\$="[[max]]" aria-label\$="[[label]]" clear-button-visible="[[clearButtonVisible]]" i18n="[[i18n]]" helper-text="[[helperText]]" theme\$="[[theme]]">
        <slot name="helper" slot="helper">[[helperText]]</slot>
        <span slot="suffix" part="toggle-button" class="toggle-button" role="button" aria-label\$="[[i18n.selector]]"></span>
      </vaadin-time-picker-text-field>
    </vaadin-combo-box-light>
`}static get is(){return"vaadin-time-picker"}static get version(){return"2.4.0"}static get properties(){return{name:{type:String},value:{type:String,observer:"__valueChanged",notify:!0,value:""},label:{type:String,reflectToAttribute:!0},required:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1},preventInvalidInput:{type:Boolean},pattern:{type:String},errorMessage:{type:String},helperText:{type:String,value:""},placeholder:{type:String,value:""},readonly:{type:Boolean,value:!1,reflectToAttribute:!0},invalid:{type:Boolean,reflectToAttribute:!0,notify:!0,value:!1},min:{type:String,value:"00:00:00.000"},max:{type:String,value:"23:59:59.999"},step:{type:Number},clearButtonVisible:{type:Boolean,value:!1},autoOpenDisabled:Boolean,__dropdownItems:{type:Array},i18n:{type:Object,value:()=>({formatTime:e=>{if(e){var t=(e=0,t="00")=>(t+e).substr((t+e).length-t.length),a=`${t(e.hours)}:${t(e.minutes)}`;return void 0!==e.seconds&&(a+=":"+t(e.seconds)),void 0!==e.milliseconds&&(a+="."+t(e.milliseconds,"000")),a}},parseTime:e=>{var t=new RegExp("^(\\d|[0-1]\\d|2[0-3])(?::(\\d|[0-5]\\d)(?::(\\d|[0-5]\\d)(?:\\.(\\d{1,3}))?)?)?$").exec(e);if(t){if(t[4])for(;t[4].length<3;)t[4]+="0";return{hours:t[1],minutes:t[2],seconds:t[3],milliseconds:t[4]}}},selector:"Time selector",clear:"Clear"})}}}static get observers(){return["__updateDropdownItems(i18n.*, min, max, step)"]}ready(){super.ready(),this.__inputElement.validate=()=>{},this.__dropdownElement.addEventListener("value-changed",e=>this.__onInputChange(e)),this.__inputElement.addEventListener("keydown",this.__onKeyDown.bind(this)),this.__dropdownElement.addEventListener("change",e=>this.validate()),this.__inputElement.addEventListener("blur",e=>this.validate()),this.__dropdownElement.addEventListener("change",e=>{e.composedPath()[0]!==this.__inputElement&&this.__dispatchChange()})}__validDayDivisor(e){return!e||86400%e==0||e<1&&e%1*1e3%1==0}__onKeyDown(e){if(!(this.readonly||this.disabled||this.__dropdownItems.length)){var t=this.__validDayDivisor(this.step)&&this.step||60;r.a.keyboardEventMatchesKeys(e,"down")?this.__onArrowPressWithStep(-t):r.a.keyboardEventMatchesKeys(e,"up")&&this.__onArrowPressWithStep(t)}}__onArrowPressWithStep(e){var t=this.__addStep(this.__getMsec(this.__memoValue),e,!0);this.__memoValue=t,this.__inputElement.value=this.i18n.formatTime(this.__validateTime(t)),this.__dispatchChange()}__dispatchChange(){this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))}__getMsec(e){var t=60*(e&&e.hours||0)*60*1e3;return t+=60*(e&&e.minutes||0)*1e3,t+=1e3*(e&&e.seconds||0),t+=e&&parseInt(e.milliseconds)||0}__getSec(e){var t=60*(e&&e.hours||0)*60;return t+=60*(e&&e.minutes||0),t+=e&&e.seconds||0,t+=e&&e.milliseconds/1e3||0}__addStep(e,t,a){0===e&&t<0&&(e=864e5);var n=1e3*t,i=e%n;n<0&&i&&a?e-=i:n>0&&i&&a?e-=i-n:e+=n;var o=Math.floor(e/1e3/60/60);e-=1e3*o*60*60;var r=Math.floor(e/1e3/60);e-=1e3*r*60;var s=Math.floor(e/1e3);return{hours:o<24?o:0,minutes:r,seconds:s,milliseconds:e-=1e3*s}}__updateDropdownItems(e,t,a,n){var i=this.__validateTime(this.__parseISO(t)),o=this.__getSec(i),r=this.__validateTime(this.__parseISO(a)),s=this.__getSec(r);if(this.__adjustValue(o,s,i,r),this.__dropdownItems=this.__generateDropdownList(o,s,n),n!==this.__oldStep){this.__oldStep=n;var l=this.__validateTime(this.__parseISO(this.value));this.__updateValue(l)}this.value&&(this.__dropdownElement.value=this.i18n.formatTime(this.i18n.parseTime(this.value)))}__generateDropdownList(e,t,a){if(a<900||!this.__validDayDivisor(a))return[];for(var n=[],i=-(a=a||3600)+e;i+a>=e&&i+a<=t;){var o=this.__validateTime(this.__addStep(1e3*i,a));i+=a;var r=this.i18n.formatTime(o);n.push({label:r,value:r})}return n}__adjustValue(e,t,a,n){if(this.__memoValue){var i=this.__getSec(this.__memoValue);i<e?this.__updateValue(a):i>t&&this.__updateValue(n)}}__valueChanged(e,t){var a=this.__memoValue=this.__parseISO(e),n=this.__formatISO(a)||"";""===this.value||null===this.value||a?this.value!==n?this.value=n:this.__updateInputValue(a):this.value=t}__onInputChange(e){var t=this.i18n.parseTime(this.__dropdownElement.value),a=this.i18n.formatTime(t)||"";t?this.__dropdownElement.value!==a?this.__dropdownElement.value=a:this.__updateValue(t):this.value=""}__updateValue(e){var t=this.__formatISO(this.__validateTime(e))||"";this.value=t}__updateInputValue(e){var t=this.i18n.formatTime(this.__validateTime(e))||"";this.__dropdownElement.value=t}__validateTime(e){return e&&(e.hours=parseInt(e.hours),e.minutes=parseInt(e.minutes||0),e.seconds=this.__stepSegment<3?void 0:parseInt(e.seconds||0),e.milliseconds=this.__stepSegment<4?void 0:parseInt(e.milliseconds||0)),e}get __stepSegment(){return this.step%3600==0?1:this.step%60!=0&&this.step?this.step%1==0?3:this.step<1?4:void 0:2}__formatISO(e){return p.properties.i18n.value().formatTime(e)}__parseISO(e){return p.properties.i18n.value().parseTime(e)}_getInputElement(){return this.shadowRoot.querySelector("vaadin-time-picker-text-field")}get __inputElement(){return this.__memoInput||(this.__memoInput=this._getInputElement())}get __dropdownElement(){return this.__memoDropdown||(this.__memoDropdown=this.shadowRoot.querySelector("vaadin-combo-box-light"))}get focusElement(){return this.__inputElement}validate(){return!(this.invalid=!this.checkValidity())}_timeAllowed(e){var t=this.i18n.parseTime(this.min),a=this.i18n.parseTime(this.max);return(!this.__getMsec(t)||this.__getMsec(e)>=this.__getMsec(t))&&(!this.__getMsec(a)||this.__getMsec(e)<=this.__getMsec(a))}checkValidity(){return!(!this.__inputElement.focusElement.checkValidity()||this.value&&!this._timeAllowed(this.i18n.parseTime(this.value))||this.__dropdownElement.value&&!this.i18n.parseTime(this.__dropdownElement.value))}}customElements.define(p.is,p)},,,function(e,t,a){"use strict";a(185);var n=a(6).a`<dom-module id="lumo-vaadin-overlay" theme-for="vaadin-overlay">
  <template>
    <style include="lumo-overlay">
      /* stylelint-disable no-empty-source */
    </style>
  </template>
</dom-module>`;document.head.appendChild(n.content);a(98)},,function(e,t){!function(){"use strict";if(!("adoptedStyleSheets"in document)){var e="ShadyCSS"in window&&!window.ShadyCSS.nativeShadow,t=[],a=[],n=[],i=new WeakMap,o=new WeakMap,r=new WeakMap,s=new WeakMap,l=new WeakMap,h=new WeakMap,c={loaded:!1},d={body:null,CSSStyleSheet:null},p=CSSStyleSheet,u=/@import/,f=function(){function e(){var e=document.createElement("style");c.loaded?d.body.appendChild(e):(document.head.appendChild(e),e.disabled=!0,t.push(e)),o.set(this,{adopters:new Map,actions:[],basicStyleElement:e})}var a,n,i,r=e.prototype;return r.replace=function(e){var t=b(e);try{if(!o.has(this))throw new TypeError("Illegal invocation");return o.get(this).basicStyleElement.innerHTML=t,y(this),Promise.resolve(this)}catch(e){return Promise.reject(e)}},r.replaceSync=function(e){var t=b(e);if(!o.has(this))throw new TypeError("Illegal invocation");return o.get(this).basicStyleElement.innerHTML=t,y(this),this},a=e,(n=[{key:"cssRules",get:function(){if(!o.has(this))throw new TypeError("Illegal invocation");return o.get(this).basicStyleElement.sheet.cssRules}}])&&v(a.prototype,n),i&&v(a,i),e}();["addImport","addPageRule","addRule","deleteRule","insertRule","removeImport","removeRule"].forEach((function(e){f.prototype[e]=function(){if(!o.has(this))throw new TypeError("Illegal invocation");var t=arguments,a=o.get(this),n=a.adopters,i=a.actions,r=a.basicStyleElement,s=r.sheet[e].apply(r.sheet,t);return n.forEach((function(a){a.sheet&&a.sheet[e].apply(a.sheet,t)})),i.push([e,t]),s}})),Object.defineProperty(f,Symbol.hasInstance,{configurable:!0,value:w}),_(p.prototype),window.CSSStyleSheet=f,function(){var t={configurable:!0,get:function(){return i.get(this)||[]},set:function(e){var t=i.get(this)||[];!function(e,t){var a=t===document?"Document":"ShadowRoot";if(!Array.isArray(e))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+a+": Iterator getter is not callable.");if(!e.every(w))throw new TypeError("Failed to set the 'adoptedStyleSheets' property on "+a+": Failed to convert value to 'CSSStyleSheet'");var n=e.filter((function(t,a){return e.indexOf(t)===a}));i.set(t,n)}(e,this);var a=this===document?m()?this.head:this.body:this;("isConnected"in a?a.isConnected:document.body.contains(a))?window.requestAnimationFrame((function(){z(a),function(e,t){for(var a=g(e),n=0,i=t.length;n<i;n++)if(!(a.indexOf(t[n])>-1)){var r=o.get(t[n]).adopters,s=l.get(e),h=r.get(e);h||(h=r.get(document.head)),s.disconnect(),h.parentNode.removeChild(h),s.observe()}}(a,t)})):n.push(a)}};if(Object.defineProperty(Document.prototype,"adoptedStyleSheets",t),"undefined"!=typeof ShadowRoot){var a=Element.prototype.attachShadow;Element.prototype.attachShadow=function(){var t=e?this:a.apply(this,arguments);return s.set(this,t),x(t),t},Object.defineProperty(ShadowRoot.prototype,"adoptedStyleSheets",t)}}(),m()?document.addEventListener("DOMContentLoaded",A):A()}function v(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(){return"loading"===document.readyState}function g(e){return i.get(e.parentNode===document.documentElement?document:e)}function b(e){void 0===e&&(e="");var t=e.match(u)||[],a=e;return t.length&&(console.warn("@import rules are not allowed here. See https://github.com/WICG/construct-stylesheets/issues/119#issuecomment-588352418"),t.forEach((function(e){a=a.replace(e,"")}))),a}function _(e){e.replace=function(){return Promise.reject(new DOMException("Can't call replace on non-constructed CSSStyleSheets."))},e.replaceSync=function(){throw new DOMException("Failed to execute 'replaceSync' on 'CSSStyleSheet': Can't call replaceSync on non-constructed CSSStyleSheets.")}}function y(e){var t=o.get(e),a=t.adopters,n=t.basicStyleElement;a.forEach((function(e){e.innerHTML=n.innerHTML}))}function w(e){return e&&e.constructor===f||e instanceof p||e instanceof d.CSSStyleSheet}function z(e){for(var t=document.createDocumentFragment(),n=g(e),i=l.get(e),s=0,c=n.length;s<c;s++){var d=o.get(n[s]),p=d.adopters,u=d.basicStyleElement,f=p.get(e);f?(i.disconnect(),t.appendChild(f),(!f.innerHTML||f.sheet&&!f.sheet.cssText)&&(f.innerHTML=u.innerHTML),i.observe()):((f=document.createElement("style")).innerHTML=u.innerHTML,r.set(f,e),h.set(f,0),p.set(e,f),t.appendChild(f)),e===document.head&&a.push(f)}e.insertBefore(t,e.lastChild);for(var v=0,m=n.length;v<m;v++){var b=o.get(n[v]),_=b.adopters,y=b.actions,w=_.get(e),z=h.get(w);if(y.length>0){for(var M=z,x=y.length;M<x;M++){var A=y[M],C=A[0],S=A[1];w.sheet[C].apply(w.sheet,S)}h.set(w,y.length-1)}}}function M(t){if(document)for(var a=0,n=t.length;a<n;a++){for(var i=t[a],o=i.addedNodes,l=i.removedNodes,h=0,c=l.length;h<c;h++){var d=r.get(l[h]);d&&z(d)}if(!e)for(var p=0,u=o.length;p<u;p++)for(var f=document.createNodeIterator(o[p],NodeFilter.SHOW_ELEMENT,(function(e){var t=s.get(e);return t&&t.adoptedStyleSheets.length>0?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT}),null,!1),v=void 0;v=f.nextNode();)z(s.get(v))}}function x(e){var t=new MutationObserver(M),a={observe:function(){t.observe(e,{childList:!0,subtree:!0})},disconnect:function(){t.disconnect()}};l.set(e,a),a.observe()}function A(){var e=document.createElement("iframe");e.hidden=!0,document.body.appendChild(e),d.body=e.contentWindow.document.body,d.CSSStyleSheet=e.contentWindow.CSSStyleSheet,_(e.contentWindow.CSSStyleSheet.prototype),x(document.body),c.loaded=!0;for(var i=document.createDocumentFragment(),o=0,r=t.length;o<r;o++)t[o].disabled=!1,i.appendChild(t[o]);d.body.appendChild(i);for(var s=0,l=a.length;s<l;s++)i.appendChild(a[s]);document.body.insertBefore(i,document.body.firstChild);for(var h=0,p=n.length;h<p;h++)z(n[h]);n.length=0,t.length=0,a.length=0}}()},function(e,t){!function(){var e=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Date Picker","vaadin-date-picker-flow")};class t{constructor(e){this.initial=e,this.index=0,this.value=0}static compare(e,t){return e.index<t.index?-1:e.index>t.index?1:0}}window.Vaadin.Flow.datepickerConnector={initLazy:a=>e((function(a){if(!a.$connector){a.$connector={},a.$connector.dayPart=new t("22"),a.$connector.monthPart=new t("11"),a.$connector.yearPart=new t("1987"),a.$connector.parts=[a.$connector.dayPart,a.$connector.monthPart,a.$connector.yearPart];a.addEventListener("blur",e(e=>{!e.target.value&&e.target.invalid&&console.warn("Invalid value in the DatePicker.")}));var n=e((function(e){return e.replace(/[^\x00-\x7F]/g,"")})),i=e((function(){var e="";try{e=a._inputValue}catch(t){e=a.value||""}return e}));a.$connector.setLocale=e((function(o){try{(new Date).toLocaleDateString(o)}catch(e){o="en-US",console.warn("The locale is not supported, using default locale setting(en-US).")}var r=!1,s=i();"undefined"!==a.i18n.parseDate&&s&&(r=a.i18n.parseDate(s));var l=new Date(Date.UTC(a.$connector.yearPart.initial,a.$connector.monthPart.initial-1,a.$connector.dayPart.initial)),h=n(l.toLocaleDateString(o,{timeZone:"UTC"}));a.$connector.parts.forEach((function(e){e.index=h.indexOf(e.initial)})),a.$connector.parts.sort(t.compare),a.$connector.regex=h.replace(/[-[\]{}()*+?.,\\^$|#\s]/g,"\\$&").replace(a.$connector.dayPart.initial,"(\\d{1,2})").replace(a.$connector.monthPart.initial,"(\\d{1,2})").replace(a.$connector.yearPart.initial,"(\\d{4})"),a.i18n.formatDate=e((function(e){var t=new Date(Date.UTC(e.year,e.month,e.day));return n(t.toLocaleDateString(o,{timeZone:"UTC"}))})),a.i18n.parseDate=e((function(e){if(0!=(e=n(e)).length){var t=e.match(a.$connector.regex);if(t&&4==t.length){for(var i=1;i<4;i++)a.$connector.parts[i-1].value=parseInt(t[i]);return{day:a.$connector.dayPart.value,month:a.$connector.monthPart.value-1,year:a.$connector.yearPart.value}}return!1}})),""===s?o:r&&(a._selectedDate=new Date(r.year,r.month,r.day))}))}}))(a)}}()},function(e,t){var a;a=function(e){return window.Vaadin.Flow.tryCatchWrapper(e,"Vaadin Time Picker","vaadin-time-picker-flow")},window.Vaadin.Flow.timepickerConnector={initLazy:e=>a((function(e){if(!e.$connector){e.$connector={};var t=function(e,t){var a=t.toLocaleTimeString(e),n=a.match(/[^\d\u0660-\u0669]+$/g);return n||(n=a.match(/^[^\d\u0660-\u0669]+/g)),n&&(n=n[0].trim()),n},n=new Date("August 19, 1975 23:15:30"),i=new Date("August 19, 1975 05:15:30"),o={"\\u0660":"0","\\u0661":"1","\\u0662":"2","\\u0663":"3","\\u0664":"4","\\u0665":"5","\\u0666":"6","\\u0667":"7","\\u0668":"8","\\u0669":"9"},r=function(e){return e.replace(/[\u0660-\u0669]/g,(function(e){var t="\\u0"+e.charCodeAt(0).toString(16);return o[t]}))},s=function(e){return parseInt(r(e))},l=/[[\.][\d\u0660-\u0669]{1,3}$/;e.$connector.setLocale=a((function(o){var h;e.value&&""!==e.value&&(h=e.i18n.parseTime(e.value));try{n.toLocaleTimeString(o)}catch(e){throw o="en-US",new Error("vaadin-time-picker: The locale "+o+" is not supported, falling back to default locale setting(en-US).")}var c=function(e){return t(e,n)}(o),d=function(e){return t(e,i)}(o),p=n.toLocaleTimeString(o);c&&p.startsWith(c)&&(p=p.replace(c,""));var u,f,v,m,g=p.match(/[^\u0660-\u0669\s\d]/),b=new RegExp("([\\d\\u0660-\\u0669]){1,2}(?:"+g+")?","g"),_=function(){return e.step&&e.step<1};e.i18n={formatTime:a((function(t){if(t){var a=new Date;a.setHours(t.hours),a.setMinutes(t.minutes),a.setSeconds(void 0!==t.seconds?t.seconds:0);var n=a.toLocaleTimeString(o,(f&&u===e.step||(f={hour:"numeric",minute:"numeric",second:e.step&&e.step<60?"numeric":void 0},u=e.step),f));return n=function(e,t){if(_()){var a=e;if(e.endsWith(d)?a=e.replace(" "+d,""):e.endsWith(c)&&(a=e.replace(" "+c,"")),t){var n=t<10?"0":"";n+=t<100?"0":"",a+="."+(n+=t)}else a+=".000";return e.endsWith(d)?a=a+" "+d:e.endsWith(c)&&(a=a+" "+c),a}return e}(n,t.milliseconds)}})),parseTime:a((function(e){if(e&&e===v&&m)return m;if(e){var t=e.search(c),a=e.search(d),n=e.replace(d,"").replace(c,"").trim();b.lastIndex=0;var i=b.exec(n);if(i){i=s(i[0].replace(g,"")),t!==a&&(12===i&&-1!==a?i=0:i+=-1!==t&&12!==i?12:0);var o=b.exec(n),h=o&&b.exec(n),p=h&&_()&&l.exec(n);return p&&p.index<=h.index&&(p=void 0),m=void 0!==i&&{hours:i,minutes:o?s(o[0].replace(g,"")):0,seconds:h?s(h[0].replace(g,"")):0,milliseconds:o&&h&&p?(u=p[0].replace(".",""),1===(u=r(u)).length?u+="00":2===u.length&&(u+="0"),parseInt(u)):0},v=e,m}}var u}))},h&&function e(t,a,n=0){t()?a():setTimeout(()=>e(t,a,200),n)}(()=>e.shadowRoot,()=>{var t=e.i18n.formatTime(h);e.__inputElement.value!==t&&(e.__inputElement.value=t,e.__dropdownElement.value=t,e.__onInputChange())})}))}}))(e)}},,,,,,,,,,function(e,t,a){"use strict";a.r(t);a(304);var n=a(55),i=a(117),o=a(127),r=(a(51),a(41),a(32),a(47),document.createElement("template"));r.innerHTML='<dom-module id="lumo-badge">\n  <template>\n    <style>\n      [theme~="badge"] {\n        display: inline-flex;\n        align-items: center;\n        justify-content: center;\n        box-sizing: border-box;\n        padding: 0.4em calc(0.5em + var(--lumo-border-radius-s) / 4);\n        color: var(--lumo-primary-text-color);\n        background-color: var(--lumo-primary-color-10pct);\n        border-radius: var(--lumo-border-radius-s);\n        font-family: var(--lumo-font-family);\n        font-size: var(--lumo-font-size-s);\n        line-height: 1;\n        font-weight: 500;\n        text-transform: initial;\n        letter-spacing: initial;\n        min-width: calc(var(--lumo-line-height-xs) * 1em + 0.45em);\n      }\n\n      /* Ensure proper vertical alignment */\n      [theme~="badge"]::before {\n        display: inline-block;\n        content: "\\2003";\n        width: 0;\n      }\n\n      [theme~="badge"][theme~="small"] {\n        font-size: var(--lumo-font-size-xxs);\n        line-height: 1;\n      }\n\n      /* Colors */\n\n      [theme~="badge"][theme~="success"] {\n        color: var(--lumo-success-text-color);\n        background-color: var(--lumo-success-color-10pct);\n      }\n\n      [theme~="badge"][theme~="error"] {\n        color: var(--lumo-error-text-color);\n        background-color: var(--lumo-error-color-10pct);\n      }\n\n      [theme~="badge"][theme~="contrast"] {\n        color: var(--lumo-contrast-80pct);\n        background-color: var(--lumo-contrast-5pct);\n      }\n\n      /* Primary */\n\n      [theme~="badge"][theme~="primary"] {\n        color: var(--lumo-primary-contrast-color);\n        background-color: var(--lumo-primary-color);\n      }\n\n      [theme~="badge"][theme~="success"][theme~="primary"] {\n        color: var(--lumo-success-contrast-color);\n        background-color: var(--lumo-success-color);\n      }\n\n      [theme~="badge"][theme~="error"][theme~="primary"] {\n        color: var(--lumo-error-contrast-color);\n        background-color: var(--lumo-error-color);\n      }\n\n      [theme~="badge"][theme~="contrast"][theme~="primary"] {\n        color: var(--lumo-base-color);\n        background-color: var(--lumo-contrast);\n      }\n\n      /* Links */\n\n      [theme~="badge"][href]:hover {\n        text-decoration: none;\n      }\n\n      /* Icon */\n\n      [theme~="badge"] iron-icon {\n        margin: -0.25em 0;\n        --iron-icon-width: 1.5em;\n        --iron-icon-height: 1.5em;\n      }\n\n      [theme~="badge"] iron-icon:first-child {\n        margin-left: -0.375em;\n      }\n\n      [theme~="badge"] iron-icon:last-child {\n        margin-right: -0.375em;\n      }\n\n      [theme~="badge"][icon] {\n        min-width: 0;\n        padding: 0;\n        font-size: 1rem;\n        --iron-icon-width: var(--lumo-icon-size-m);\n        --iron-icon-height: var(--lumo-icon-size-m);\n      }\n\n      [theme~="badge"][icon][theme~="small"] {\n        --iron-icon-width: var(--lumo-icon-size-s);\n        --iron-icon-height: var(--lumo-icon-size-s);\n      }\n\n      /* Empty */\n\n      [theme~="badge"]:not([icon]):empty {\n        min-width: 0;\n        width: 1em;\n        height: 1em;\n        padding: 0;\n        border-radius: 50%;\n        background-color: var(--lumo-primary-color);\n      }\n\n      [theme~="badge"][theme~="small"]:not([icon]):empty {\n        width: 0.75em;\n        height: 0.75em;\n      }\n\n      [theme~="badge"][theme~="contrast"]:not([icon]):empty {\n        background-color: var(--lumo-contrast);\n      }\n\n      [theme~="badge"][theme~="success"]:not([icon]):empty {\n        background-color: var(--lumo-success-color);\n      }\n\n      [theme~="badge"][theme~="error"]:not([icon]):empty {\n        background-color: var(--lumo-error-color);\n      }\n\n      /* Pill */\n\n      [theme~="badge"][theme~="pill"] {\n        --lumo-border-radius-s: 1em;\n      }\n\n      /* RTL specific styles */\n\n      [dir="rtl"][theme~="badge"] iron-icon:first-child {\n        margin-right: -0.375em;\n        margin-left: 0;\n      }\n\n      [dir="rtl"][theme~="badge"] iron-icon:last-child {\n        margin-left: -0.375em;\n        margin-right: 0;\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(r.content);var s=(e,t,a)=>{if(t===document){var n=(o=c(i=e))+c(o+i);if(-1!==window.Vaadin.theme.injectedGlobalCss.indexOf(n))return;window.Vaadin.theme.injectedGlobalCss.push(n)}var i,o,r=new CSSStyleSheet;r.replaceSync(((e,t)=>{for(var a,n=/(?:@media\s(.+?))?(?:\s{)?\@import\surl\((.+?)\);(?:})?/g,i=e;null!==(a=n.exec(e));){i=i.replace(a[0],"");var o=document.createElement("link");o.rel="stylesheet",o.href=a[2],a[1]&&(o.media=a[1]),t===document?document.head.appendChild(o):t.appendChild(o)}return i})(e,t)),t.adoptedStyleSheets=a?[r,...t.adoptedStyleSheets]:[...t.adoptedStyleSheets,r]},l=(e,t)=>{!function(e,t=!1){var a=document.createElement("template");a.innerHTML=e,document.head[t?"insertBefore":"appendChild"](a.content,document.head.firstChild)}(`<custom-style><style include="${e}"></style></custom-style>`,!0)},h=e=>{var t=n.a.import(e,"template");return t&&Object(i.c)(t,"").map(e=>e.textContent).join(" ")};function c(e){var t,a,n=2166136261;for(t=0,a=e.length;t<a;t++)n^=e.charCodeAt(t),n+=(n<<1)+(n<<4)+(n<<7)+(n<<8)+(n<<24);return("0000000"+(n>>>0).toString(16)).substr(-8)}window.Vaadin=window.Vaadin||{},window.Vaadin.theme=window.Vaadin.theme||{},window.Vaadin.theme.injectedGlobalCss=[];var d=e=>{s(o.a.toString(),e),document["_vaadintheme_divers-logbook_componentCss"]||(document["_vaadintheme_divers-logbook_componentCss"]=!0),e instanceof ShadowRoot?(s(h("lumo-typography"),e,!0),s(h("lumo-color"),e,!0),s(h("lumo-spacing"),e,!0),s(h("lumo-badge"),e,!0)):document._vaadinthemelumoimports_||(l("lumo-typography"),l("lumo-color"),l("lumo-spacing"),l("lumo-badge"),document._vaadinthemelumoimports_=!0)},p=a(13),u=a(11),f=(a(209),a(92));window.Vaadin.Flow.Legacy.Debouncer=p.a,window.Vaadin.Flow.Legacy.timeOut=u.d,window.Vaadin.ComboBoxPlaceholder=f.a;var v=a(45),m=a(30);a(210);window.Vaadin.Flow.Legacy.GestureEventListeners=v.a,window.Vaadin.Flow.Legacy.Gestures=m;a(305),a(211),a(43);var g=a(6),b=a(9);class _ extends b.a{static get template(){return g.a`
    <style>
      @keyframes flow-component-renderer-appear {
        to {
          opacity: 1;
        }
      }
      :host {
        animation: 1ms flow-component-renderer-appear;
      }
    </style>
    <slot></slot>
`}static get is(){return"flow-component-renderer"}static get properties(){return{nodeid:Number,appid:String}}static get observers(){return["_attachRenderedComponentIfAble(appid, nodeid)"]}connectedCallback(){super.connectedCallback(),this._runChrome72ShadowDomBugWorkaround()}_runChrome72ShadowDomBugWorkaround(){var e=navigator.userAgent;if(e&&e.match("Chrome/")){var t=e.split("Chrome/")[1].split(".")[0];if(t&&parseInt(t)>71){var a=this._getDebouncedNotifyResizeFunction();a&&(this.style.visibility="hidden",requestAnimationFrame(()=>{this.style.visibility="",a()}))}}}_getDebouncedNotifyResizeFunction(){for(var e=this.parentElement;;){if(!e)return;if(e.notifyResize)break;e=e.parentElement}return e._debouncedNotifyResize||(e._debouncedNotifyResize=function(){e.__debouncedNotifyResize=p.a.debounce(e.__debouncedNotifyResize,u.a,e.notifyResize)}),e._debouncedNotifyResize}ready(){super.ready(),this.addEventListener("click",(function(e){this.firstChild&&"function"==typeof this.firstChild.click&&e.target===this&&(e.stopPropagation(),this.firstChild.click())})),this.addEventListener("animationend",this._onAnimationEnd)}_asyncAttachRenderedComponentIfAble(){this._debouncer=p.a.debounce(this._debouncer,u.b,()=>this._attachRenderedComponentIfAble())}_attachRenderedComponentIfAble(){if(this.nodeid&&this.appid){var e=this._getRenderedComponent();this.firstChild?e?this.firstChild!==e?(this.replaceChild(e,this.firstChild),this._defineFocusTarget(),this.onComponentRendered()):(this._defineFocusTarget(),this.onComponentRendered()):(this._clear(),this._asyncAttachRenderedComponentIfAble()):e?(this.appendChild(e),this._defineFocusTarget(),this.onComponentRendered()):this._asyncAttachRenderedComponentIfAble()}}_getRenderedComponent(){try{return window.Vaadin.Flow.clients[this.appid].getByNodeId(this.nodeid)}catch(e){console.error("Could not get node %s from app %s",this.nodeid,this.appid),console.error(e)}return null}_clear(){for(;this.firstChild;)this.removeChild(this.firstChild)}onComponentRendered(){}_defineFocusTarget(){var e=this._getFirstFocusableDescendant(this.firstChild);null!==e&&e.setAttribute("focus-target","true")}_getFirstFocusableDescendant(e){if(this._isFocusable(e))return e;if(!e.children)return null;for(var t=0;t<e.children.length;t++){var a=this._getFirstFocusableDescendant(e.children[t]);if(null!==a)return a}return null}_isFocusable(e){return(!e.hasAttribute||"function"!=typeof e.hasAttribute||!e.hasAttribute("disabled")&&!e.hasAttribute("hidden"))&&0===e.tabIndex}_onAnimationEnd(e){0===e.animationName.indexOf("flow-component-renderer-appear")&&this._attachRenderedComponentIfAble()}}window.customElements.define(_.is,_);var y=a(181),w=a(156);a(213);window.Vaadin.Flow.Legacy.Debouncer=p.a,window.Vaadin.Flow.Legacy.timeOut=u.d,window.Vaadin.Flow.Legacy.animationFrame=u.a,window.Vaadin.Flow.Legacy.GridElement=y.a,window.Vaadin.Flow.Legacy.ItemCache=w.b;a(306);var z=a(108);{class e extends z.b{static get template(){return g.a`
    <template class="header" id="defaultHeaderTemplate">
      <vaadin-checkbox id="selectAllCheckbox" aria-label="Select All" hidden\$="[[selectAllHidden]]" on-click="_onSelectAllClick" checked="[[selectAll]]">
      </vaadin-checkbox>
    </template>
    <template id="defaultBodyTemplate">
      <vaadin-checkbox aria-label="Select Row" checked="[[selected]]" on-click="_onSelectClick">
      </vaadin-checkbox>
    </template>
`}static get is(){return"vaadin-grid-flow-selection-column"}static get properties(){return{autoWidth:{type:Boolean,value:!0},width:{type:String,value:"56px"},flexGrow:{type:Number,value:0},selectAll:{type:Boolean,value:!1,notify:!0},selectAllHidden:Boolean}}constructor(){super(),this._boundOnSelectEvent=this._onSelectEvent.bind(this),this._boundOnDeselectEvent=this._onDeselectEvent.bind(this)}_prepareHeaderTemplate(){return this._prepareTemplatizer(this.$.defaultHeaderTemplate)}_prepareBodyTemplate(){return this._prepareTemplatizer(this.$.defaultBodyTemplate)}connectedCallback(){super.connectedCallback(),this._grid&&(this._grid.addEventListener("select",this._boundOnSelectEvent),this._grid.addEventListener("deselect",this._boundOnDeselectEvent))}disconnectedCallback(){if((super.disconnectedCallback(),this._grid)&&(this._grid.removeEventListener("select",this._boundOnSelectEvent),this._grid.removeEventListener("deselect",this._boundOnDeselectEvent),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&window.ShadyDOM&&this.parentElement)){var e=this.parentElement,t=this.nextElementSibling;e.removeChild(this),t?e.insertBefore(this,t):e.appendChild(this)}}_onSelectClick(e){e.target.checked?this._grid.$connector.doDeselection([e.model.item],!0):this._grid.$connector.doSelection([e.model.item],!0),e.target.checked=!e.target.checked}_onSelectAllClick(e){e.preventDefault(),this._grid.hasAttribute("disabled")?e.target.checked=!e.target.checked:this.selectAll?this.$server.deselectAll():this.$server.selectAll()}_onSelectEvent(e){}_onDeselectEvent(e){e.detail.userOriginated&&(this.selectAll=!1)}}customElements.define(e.is,e),Vaadin.GridFlowSelectionColumnElement=e}var M=g.a`<dom-module id="lumo-app-layout" theme-for="vaadin-app-layout">
  <template>
    <style>
      [part="navbar"]::before {
        background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
      }

      :host(:not([dir='rtl']):not([overlay])) [part='drawer'] {
        border-right: 1px solid var(--lumo-contrast-10pct);
      }

      :host([dir='rtl']:not([overlay])) [part='drawer'] {
        border-left: 1px solid var(--lumo-contrast-10pct);
      }

      :host([overlay]) [part="drawer"]::before {
        background: var(--lumo-base-color);
      }

      [part="navbar"]::before,
      :host([overlay]) [part="drawer"]::before {
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        z-index: -1;
      }

      :host([overlay]) [part='drawer']::before {
        background: var(--lumo-base-color);
        height: var(--_vaadin-app-layout-drawer-scroll-size, 100%);
      }

      [part="backdrop"] {
        background-color: var(--lumo-shade-20pct);
        opacity: 1;
      }

      [part] ::slotted(h2),
      [part] ::slotted(h3),
      [part] ::slotted(h4) {
        margin-top: var(--lumo-space-xs) !important;
        margin-bottom: var(--lumo-space-xs) !important;
      }

      @supports (-webkit-backdrop-filter: blur(1px)) or (backdrop-filter: blur(1px)) {
        [part="navbar"]::before {
          opacity: 0.8;
        }

        [part="navbar"] {
          -webkit-backdrop-filter: blur(24px);
          backdrop-filter: blur(24px);
        }

        :host([overlay]) [part="drawer"]::before {
          opacity: 0.9;
        }

        :host([overlay]) [part="drawer"] {
          -webkit-backdrop-filter: blur(24px);
          backdrop-filter: blur(24px);
        }
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(M.content);a(75);var x=document.createElement("template");x.innerHTML="<custom-style>\n  <style>\n    /* stylelint-disable length-zero-no-unit */\n    /* Use units so that the values can be used in calc() */\n    html {\n      --safe-area-inset-top: constant(safe-area-inset-top, 0px);\n      --safe-area-inset-right: constant(safe-area-inset-right, 0px);\n      --safe-area-inset-bottom: constant(safe-area-inset-bottom, 0px);\n      --safe-area-inset-left: constant(safe-area-inset-left, 0px);\n    }\n\n    @supports (padding-left: env(safe-area-inset-left)) {\n      html {\n        --safe-area-inset-top: env(safe-area-inset-top, 0px);\n        --safe-area-inset-right: env(safe-area-inset-right, 0px);\n        --safe-area-inset-bottom: env(safe-area-inset-bottom, 0px);\n        --safe-area-inset-left: env(safe-area-inset-left, 0px);\n      }\n    }\n    /* stylelint-enable */\n  </style>\n</custom-style>",document.head.appendChild(x.content);var A=function(){if(window.navigator.userAgent.match(/iPhone|iPad/i)){var e=window.innerHeight,t=window.innerWidth>e,a=document.documentElement.clientHeight;t&&a>e?document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom",a-e+"px"):document.documentElement.style.setProperty("--vaadin-viewport-offset-bottom","")}};A(),window.addEventListener("resize",A);var C=a(53),S=a(17),k=a(22),E=a(24);
/**
@license
Vaadin App Layout
Copyright (C) 2019 Vaadin Ltd
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class I extends(Object(k.a)(Object(S.a)(b.a))){static get template(){return g.a`
    <style>
      :host {
        display: block;
        box-sizing: border-box;
        height: 100%;
        --vaadin-app-layout-transition: 200ms;
        transition: padding var(--vaadin-app-layout-transition);
        --vaadin-app-layout-touch-optimized: false;
        --vaadin-app-layout-navbar-offset-top: var(--_vaadin-app-layout-navbar-offset-size);
        --vaadin-app-layout-navbar-offset-bottom: var(--_vaadin-app-layout-navbar-offset-size-bottom);
        padding-top: var(--vaadin-app-layout-navbar-offset-top);
        padding-bottom: var(--vaadin-app-layout-navbar-offset-bottom);
        padding-left: var(--vaadin-app-layout-navbar-offset-left);
      }

      :host([dir="rtl"]) {
        padding-left: 0;
        padding-right: var(--vaadin-app-layout-navbar-offset-left);
      }

      :host([hidden]),
      [hidden] {
        display: none !important;
      }

      :host([no-anim]) {
        --vaadin-app-layout-transition: none !important;
      }

      :host([drawer-opened]) {
        --vaadin-app-layout-drawer-offset-left: var(--_vaadin-app-layout-drawer-offset-size);
      }

      :host([overlay]) {
        --vaadin-app-layout-drawer-offset-left: 0;
        --vaadin-app-layout-navbar-offset-left: 0;
      }

      :host(:not([no-scroll])) [content] {
        overflow: auto;
        -webkit-overflow-scrolling: touch;
      }

      [content] {
        height: 100%;
      }

      @media (pointer: coarse) and (max-width: 800px) and (min-height: 500px) {
        :host {
          --vaadin-app-layout-touch-optimized: true;
        }
      }

      [part="navbar"],
      [part="navbar"]::before {
        position: fixed;
        display: flex;
        align-items: center;
        top: 0;
        right: 0;
        left: 0;
        transition: left var(--vaadin-app-layout-transition);
        padding-top: var(--safe-area-inset-top);
        padding-left: var(--safe-area-inset-left);
        padding-right: var(--safe-area-inset-right);
        z-index: 1;
      }

      :host(:not([dir="rtl"])[primary-section="drawer"][drawer-opened]:not([overlay])) [part="navbar"] {
        left: var(--vaadin-app-layout-drawer-offset-left, 0);
      }

      :host([dir="rtl"][primary-section="drawer"][drawer-opened]:not([overlay])) [part="navbar"] {
        right: var(--vaadin-app-layout-drawer-offset-left, 0);
      }

      :host([primary-section="drawer"]) [part="drawer"] {
        top: 0;
      }

      [part="navbar"][bottom] {
        top: auto;
        bottom: 0;
        padding-bottom: var(--safe-area-inset-bottom);
      }

      [part="drawer"] {
        overflow: auto;
        position: fixed;
        top: var(--vaadin-app-layout-navbar-offset-top, 0);
        right: auto;
        bottom: var(--vaadin-app-layout-navbar-offset-bottom, var(--vaadin-viewport-offset-bottom, 0));
        left: var(--vaadin-app-layout-navbar-offset-left, 0);
        transition: transform var(--vaadin-app-layout-transition);
        transform: translateX(-100%);
        max-width: 90%;
        width: 16em;
        box-sizing: border-box;
        padding: var(--safe-area-inset-top) 0 var(--safe-area-inset-bottom) var(--safe-area-inset-left);
        outline: none;
      }

      :host([drawer-opened]) [part="drawer"] {
        transform: translateX(0%);
        touch-action: manipulation;
      }

      [part="backdrop"] {
        background-color: #000;
        opacity: 0.3;
      }

      :host(:not([drawer-opened])) [part="backdrop"] {
        opacity: 0;
      }

      :host([overlay]) [part="backdrop"] {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        pointer-events: none;
        transition: opacity var(--vaadin-app-layout-transition);
        -webkit-tap-highlight-color: transparent;
      }

      :host([overlay]) [part="drawer"] {
        top: 0;
        bottom: 0;
      }

      :host([overlay]) [part="drawer"],
      :host([overlay]) [part="backdrop"] {
        z-index: 2;
      }

      :host([drawer-opened][overlay]) [part="backdrop"] {
        pointer-events: auto;
        touch-action: manipulation;
      }

      :host([dir="rtl"]) [part="drawer"] {
        left: auto;
        right: var(--vaadin-app-layout-navbar-offset-start, 0);
        transform: translateX(100%);
      }

      :host([dir="rtl"]) [part="navbar"],
      :host([dir="rtl"]) [part="navbar"]::before {
        transition: right var(--vaadin-app-layout-transition);
      }

      :host([dir="rtl"][drawer-opened]) [part='drawer'] {
        transform: translateX(0%);
      }

      :host(:not([dir="rtl"])[drawer-opened]:not([overlay])) {
        padding-left: var(--vaadin-app-layout-drawer-offset-left);
      }

      :host([dir="rtl"][drawer-opened]:not([overlay])) {
        padding-right: var(--vaadin-app-layout-drawer-offset-left);
      }

      @media (max-width: 800px),
      (max-height: 600px) {
        :host {
          --vaadin-app-layout-drawer-overlay: true;
        }

        [part="drawer"] {
          width: 20em;
        }
      }
    </style>
    <div part="navbar" id="navbarTop">
      <slot name="navbar"></slot>
    </div>
    <div part="backdrop" on-click="_close" on-touchstart="_close"></div>
    <div part="drawer" id="drawer">
      <slot name="drawer" id="drawerSlot"></slot>
    </div>
    <div content="">
      <slot></slot>
    </div>
    <div part="navbar" id="navbarBottom" bottom="" hidden="">
      <slot name="navbar-bottom"></slot>
    </div>
    <div hidden=""><slot id="touchSlot" name="navbar touch-optimized"></slot></div>
`}static get is(){return"vaadin-app-layout"}static get version(){return"2.2.0"}static get properties(){return{primarySection:{type:String,value:"navbar",notify:!0,reflectToAttribute:!0,observer:"_primarySectionObserver"},drawerOpened:{type:Boolean,notify:!0,value:!0,reflectToAttribute:!0,observer:"_drawerOpenedObserver"},overlay:{type:Boolean,notify:!0,readOnly:!0,value:!1,reflectToAttribute:!0}}}constructor(){super(),this.__boundResizeListener=this._resize.bind(this),this.__drawerToggleClickListener=this._drawerToggleClick.bind(this),this.__closeOverlayDrawerListener=this.__closeOverlayDrawer.bind(this)}connectedCallback(){super.connectedCallback(),this._blockAnimationUntilAfterNextRender(),window.addEventListener("resize",this.__boundResizeListener),this.addEventListener("drawer-toggle-click",this.__drawerToggleClickListener),window.HTMLImports&&!window.HTMLImports.useNative?Array.from(this.querySelectorAll("*")).forEach(e=>{e.localName.indexOf("-")>-1&&window.customElements.whenDefined(e.localName).then(()=>{Object(C.b)(this,this._afterFirstRender)})}):Object(C.b)(this,this._afterFirstRender),this._updateTouchOptimizedMode();var e=this.$.navbarTop.firstElementChild;this._navbarChildObserver=new E.a(e,e=>{this._updateTouchOptimizedMode()}),this._touchChildObserver=new E.a(this.$.touchSlot,e=>{this._updateTouchOptimizedMode()}),this._drawerChildObserver=new E.a(this.$.drawerSlot,e=>{this._updateDrawerSize()}),this._updateDrawerSize(),this._updateOverlayMode(),window.addEventListener("close-overlay-drawer",this.__closeOverlayDrawerListener)}disconnectedCallback(){super.disconnectedCallback(),this._navbarChildObserver&&this._navbarChildObserver.disconnect(),this._drawerChildObserver&&this._drawerChildObserver.disconnect(),this._touchChildObserver&&this._touchChildObserver.disconnect(),window.removeEventListener("resize",this.__boundResizeListener),this.removeEventListener("drawer-toggle-click",this.__drawerToggleClickListener),this.removeEventListener("close-overlay-drawer",this.__drawerToggleClickListener)}static dispatchCloseOverlayDrawerEvent(){window.dispatchEvent(new CustomEvent("close-overlay-drawer"))}_primarySectionObserver(e){-1!==["navbar","drawer"].indexOf(e)||this.set("primarySection","navbar")}_drawerOpenedObserver(){var e=this.$.drawer;e.removeAttribute("tabindex"),this.overlay&&this.drawerOpened&&(e.setAttribute("tabindex",0),e.focus(),this._updateDrawerHeight())}_isShadyCSS(){return window.ShadyCSS&&!window.ShadyCSS.nativeCss}_afterFirstRender(){this._blockAnimationUntilAfterNextRender(),this._updateOffsetSize()}_drawerToggleClick(e){e.stopPropagation(),this.drawerOpened=!this.drawerOpened}__closeOverlayDrawer(){this.overlay&&(this.drawerOpened=!1)}_updateDrawerSize(){var e=this.querySelectorAll("[slot=drawer]").length,t=this.$.drawer;0===e?t.setAttribute("hidden",""):t.removeAttribute("hidden"),this._updateOffsetSize()}_resize(){this._blockAnimationUntilAfterNextRender(),this._updateTouchOptimizedMode(),this._updateOverlayMode()}_updateOffsetSize(){var e=this.shadowRoot.querySelector('[part="navbar"]').getBoundingClientRect(),t=this.shadowRoot.querySelector('[part="navbar"][bottom]').getBoundingClientRect();this._isShadyCSS()?window.ShadyCSS.styleSubtree(this,{"--_vaadin-app-layout-navbar-offset-size":e.height+"px","--_vaadin-app-layout-navbar-offset-size-bottom":t.height+"px"}):(this.style.setProperty("--_vaadin-app-layout-navbar-offset-size",e.height+"px"),this.style.setProperty("--_vaadin-app-layout-navbar-offset-size-bottom",t.height+"px"));var a=this.$.drawer.getBoundingClientRect();this._isShadyCSS()?window.ShadyCSS.styleSubtree(this,{"--_vaadin-app-layout-drawer-offset-size":a.width+"px","--vaadin-app-layout-drawer-offset-left":"var(--_vaadin-app-layout-drawer-offset-size)"}):this.style.setProperty("--_vaadin-app-layout-drawer-offset-size",a.width+"px")}_updateDrawerHeight(){var{scrollHeight:e,offsetHeight:t}=this.$.drawer,a=e>t?e+"px":"100%";this._isShadyCSS()?window.ShadyCSS.styleSubtree(this,{"--_vaadin-app-layout-drawer-scroll-size":a}):this.style.setProperty("--_vaadin-app-layout-drawer-scroll-size",a)}_updateOverlayMode(){var e="true"==this._getCustomPropertyValue("--vaadin-app-layout-drawer-overlay"),t=this.$.drawer;!this.overlay&&e&&(this._drawerStateSaved=this.drawerOpened,this.drawerOpened=!1),this._setOverlay(e),this.overlay?(t.setAttribute("role","dialog"),t.setAttribute("aria-modal","true"),t.setAttribute("aria-label","drawer")):(this._drawerStateSaved&&(this.drawerOpened=this._drawerStateSaved,this._drawerStateSaved=null),t.removeAttribute("role"),t.removeAttribute("aria-modal"),t.removeAttribute("aria-label")),this._updateDrawerHeight()}_close(){this.drawerOpened=!1}_getCustomPropertyValue(e){var t;return this._isShadyCSS()?(window.ShadyCSS.styleSubtree(this),t=window.ShadyCSS.getComputedStyleValue(this,e)):t=getComputedStyle(this).getPropertyValue(e),(t||"").trim().toLowerCase()}_updateTouchOptimizedMode(){var e="true"==this._getCustomPropertyValue("--vaadin-app-layout-touch-optimized"),t=this.querySelectorAll('[slot*="navbar"]');t.length>0&&Array.from(t).forEach(t=>{t.getAttribute("slot").indexOf("touch-optimized")>-1&&(t.__touchOptimized=!0),e&&t.__touchOptimized?t.setAttribute("slot","navbar-bottom"):t.setAttribute("slot","navbar")}),0===this.$.navbarTop.querySelector("[name=navbar]").assignedNodes().length?this.$.navbarTop.setAttribute("hidden",""):this.$.navbarTop.removeAttribute("hidden"),e?this.$.navbarBottom.removeAttribute("hidden"):this.$.navbarBottom.setAttribute("hidden",""),this._updateOffsetSize()}_blockAnimationUntilAfterNextRender(){this.setAttribute("no-anim",""),Object(C.a)(this,()=>{this.removeAttribute("no-anim"),this._isShadyCSS()&&window.ShadyCSS.styleSubtree(this)})}}customElements.define(I.is,I);a(202),a(78);var O=g.a`<dom-module id="lumo-drawer-toggle" theme-for="vaadin-drawer-toggle">
  <template>
    <style include="lumo-button">
      :host {
        width: var(--lumo-size-l);
        height: var(--lumo-size-l);
        min-width: auto;
        margin: 0 var(--lumo-space-s);
        padding: 0;
        background: transparent;
      }

      [part="icon"],
      [part="icon"]::after,
      [part="icon"]::before {
        position: inherit;
        height: auto;
        width: auto;
        background: transparent;
        top: auto;
      }

      [part=icon]::before {
        font-family: lumo-icons;
        font-size: var(--lumo-icon-size-m);
        content: var(--lumo-icons-menu);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(O.content);var T=a(123);
/**
@license
Vaadin Drawer Toggle
Copyright (C) 2018 Vaadin Ltd
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/class L extends T.a{static get template(){return g.a`
    <style>
      :host {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        cursor: default;
        position: relative;
        outline: none;
        height: 24px;
        width: 24px;
        padding: 4px;
      }

      #button {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        opacity: 0;
        cursor: inherit;
      }

      [part="icon"],
      [part="icon"]::after,
      [part="icon"]::before {
        position: absolute;
        top: 8px;
        height: 3px;
        width: 24px;
        background-color: #000;
      }

      [part="icon"]::after,
      [part="icon"]::before {
        content: "";
      }

      [part="icon"]::after {
        top: 6px;
      }

      [part="icon"]::before {
        top: 12px;
      }
    </style>
    <slot>
      <div part="icon"></div>
    </slot>
    <button id="button" type="button" aria-label\$="[[ariaLabel]]"></button>
`}static get is(){return"vaadin-drawer-toggle"}static get properties(){return{ariaLabel:String}}constructor(){super(),this.addEventListener("click",e=>{this.dispatchEvent(new CustomEvent("drawer-toggle-click",{bubbles:!0,composed:!0}))})}}customElements.define(L.is,L);a(173),a(175),a(214),a(215),a(125),a(106);var P=g.a`<dom-module id="lumo-combo-box" theme-for="vaadin-combo-box">
  <template>
    <style include="lumo-field-button">
      :host {
        outline: none;
      }

      [part="toggle-button"]::before {
        content: var(--lumo-icons-dropdown);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(P.content);a(84);var D=a(69),F=a(160),B=(a(236),a(162));
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class R extends(Object(k.a)(Object(D.a)(Object(S.a)(Object(B.a)(Object(F.a)(b.a)))))){static get template(){return g.a`
    <style>
      :host {
        display: inline-block;
      }

      :host([hidden]) {
        display: none !important;
      }

      :host([opened]) {
        pointer-events: auto;
      }

      [part="text-field"] {
        width: 100%;
        min-width: 0;
      }
    </style>

    <vaadin-text-field part="text-field" id="input" pattern="[[pattern]]" prevent-invalid-input="[[preventInvalidInput]]" value="{{_inputElementValue}}" autocomplete="off" invalid="[[invalid]]" label="[[label]]" name="[[name]]" placeholder="[[placeholder]]" required="[[required]]" disabled="[[disabled]]" readonly="[[readonly]]" helper-text="[[helperText]]" error-message="[[errorMessage]]" autocapitalize="none" autofocus="[[autofocus]]" on-change="_stopPropagation" on-input="_inputValueChanged" clear-button-visible="[[clearButtonVisible]]" theme\$="[[theme]]">
      <slot name="prefix" slot="prefix"></slot>
      <slot name="helper" slot="helper">[[helperText]]</slot>

      <div part="toggle-button" id="toggleButton" slot="suffix" role="button" aria-label="Toggle"></div>

    </vaadin-text-field>

    <vaadin-combo-box-dropdown-wrapper id="overlay" opened="[[opened]]" renderer="[[renderer]]" position-target="[[_getPositionTarget()]]" _focused-index="[[_focusedIndex]]" _item-id-path="[[itemIdPath]]" _item-label-path="[[itemLabelPath]]" loading="[[loading]]" theme="[[theme]]">
    </vaadin-combo-box-dropdown-wrapper>
`}constructor(){super(),this.theme}static get is(){return"vaadin-combo-box"}static get version(){return"5.4.8"}static get properties(){return{label:{type:String,reflectToAttribute:!0},required:{type:Boolean,value:!1},disabled:{type:Boolean,value:!1},preventInvalidInput:{type:Boolean},pattern:{type:String},errorMessage:{type:String},autofocus:{type:Boolean},placeholder:{type:String,value:""},helperText:{type:String,value:""},readonly:{type:Boolean,value:!1},clearButtonVisible:{type:Boolean,value:!1}}}static get observers(){return["_updateAriaExpanded(opened)"]}attributeChangedCallback(e,t,a){super.attributeChangedCallback(e,t,a),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)&&this.root&&Array.prototype.forEach.call(this.root.querySelectorAll("*"),e=>{e.style["-webkit-backface-visibility"]="visible",e.style["-webkit-backface-visibility"]=""})}ready(){super.ready(),this._nativeInput=this.inputElement.focusElement,this._toggleElement=this.$.toggleButton,this._clearElement=this.inputElement.shadowRoot.querySelector('[part="clear-button"]'),this.inputElement.addEventListener("keydown",e=>{this._isEventKey(e,"esc")&&(this._stopPropagation(e),this._onEscape(e))},!0),this._nativeInput.setAttribute("role","combobox"),this._nativeInput.setAttribute("aria-autocomplete","list"),this._updateAriaExpanded()}connectedCallback(){super.connectedCallback(),this._preventInputBlur()}disconnectedCallback(){super.disconnectedCallback(),this._restoreInputBlur()}_getPositionTarget(){return this.$.input}_updateAriaExpanded(){this._nativeInput&&(this._nativeInput.setAttribute("aria-expanded",this.opened),this._toggleElement.setAttribute("aria-expanded",this.opened))}get inputElement(){return this.$.input}get focusElement(){return this.inputElement||this}}customElements.define(R.is,R);a(288),a(278),a(246);var N=g.a`<dom-module id="lumo-form-item" theme-for="vaadin-form-item">
  <template>
    <style>
      :host {
        --vaadin-form-item-row-spacing: 0;
      }

      /* font-weight, margin-bottom, transition and line-height same values as for part label in text-field */
      [part="label"] {
        color: var(--lumo-secondary-text-color);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-s);
        font-weight: 500;
        margin-top: var(--lumo-space-m);
        margin-left: calc(var(--lumo-border-radius) / 4);
        margin-bottom: var(--lumo-space-xs);
        transition: color 0.4s;
        line-height: 1.333;
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(N.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class V extends(Object(S.a)(b.a)){static get template(){return g.a`
    <style>
      :host {
        display: inline-flex;
        flex-direction: row;
        align-items: baseline;

        /* CSS API for host */
        --vaadin-form-item-label-width: 8em;
        --vaadin-form-item-label-spacing: 1em;
        --vaadin-form-item-row-spacing: 1em;

        margin: calc(0.5 * var(--vaadin-form-item-row-spacing)) 0;
      }

      :host([label-position="top"]) {
        flex-direction: column;
        align-items: stretch;
      }

      :host([hidden]) {
        display: none !important;
      }

      #label {
        width: var(--vaadin-form-item-label-width);
        flex: 0 0 auto;
      }

      :host([label-position="top"]) #label {
        width: auto;
      }

      #spacing {
        width: var(--vaadin-form-item-label-spacing);
        flex: 0 0 auto;
      }

      #content {
        flex: 1 1 auto;
      }

      #content ::slotted(.full-width) {
        box-sizing: border-box;
        width: 100%;
        min-width: 0;
      }
    </style>
    <div id="label" part="label" on-click="_onLabelClick">
      <slot name="label" id="labelSlot"></slot>
    </div>
    <div id="spacing"></div>
    <div id="content">
      <slot id="contentSlot"></slot>
    </div>
`}static get is(){return"vaadin-form-item"}static get properties(){return{}}_onLabelClick(e){var t=Array.prototype.filter.call(this.$.contentSlot.assignedNodes(),e=>e.nodeType===Node.ELEMENT_NODE)[0];t&&(t.focus(),t.click())}}customElements.define(V.is,V);a(289),a(253),a(290),a(255),a(207);var $=a(193),j=a(71),H=a(39);
/**
@license
Copyright (c) 2015 The Polymer Project Authors. All rights reserved.
This code may only be used under the BSD style license found at
http://polymer.github.io/LICENSE.txt The complete set of authors may be found at
http://polymer.github.io/AUTHORS.txt The complete set of contributors may be
found at http://polymer.github.io/CONTRIBUTORS.txt Code distributed by Google as
part of the polymer project is also subject to an additional IP rights grant
found at http://polymer.github.io/PATENTS.txt
*/
  <template>
    <style>
      :host {
        position: relative;
        margin: var(--lumo-space-s);
      }

      [part="overlay"] {
        background: var(--lumo-base-color) linear-gradient(var(--lumo-contrast-5pct), var(--lumo-contrast-5pct));
        border-radius: var(--lumo-border-radius);
        box-shadow: 0 0 0 1px var(--lumo-contrast-10pct), var(--lumo-box-shadow-l);
        font-family: var(--lumo-font-family);
        font-size: var(--lumo-font-size-m);
        font-weight: 400;
        line-height: var(--lumo-line-height-s);
        letter-spacing: 0;
        text-transform: none;
        -webkit-text-size-adjust: 100%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      }

      [part="content"] {
        padding: var(--lumo-space-wide-l);
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      [part="content"] ::slotted(vaadin-button) {
        flex: none;
        margin: 0 calc(var(--lumo-space-s) * -1) 0 var(--lumo-space-m);
      }

      :host([slot^="middle"]) {
        width: 20em;
        max-width: 80vw;
        margin: var(--lumo-space-s) auto;
      }

      :host([slot\$="stretch"]) {
        margin: 0;
      }

      :host([slot\$="stretch"]) [part="overlay"] {
        border-radius: 0;
      }

      @media (min-width: 421px) {
        :host(:not([slot\$="stretch"])) {
          display: flex;
        }

        :host([slot\$="end"]) {
          justify-content: flex-end;
        }

        :host([slot^="middle"]),
        :host([slot\$="center"]) {
          display: flex;
          justify-content: center;
        }
      }

      @keyframes lumo-notification-exit-fade-out {
        100% {
          opacity: 0;
        }
      }

      @keyframes lumo-notification-enter-fade-in {
        0% {
          opacity: 0;
        }
      }

      @keyframes lumo-notification-enter-slide-down {
        0% {
          transform: translateY(-200%);
          opacity: 0;
        }
      }

      @keyframes lumo-notification-exit-slide-up {
        100% {
          transform: translateY(-200%);
          opacity: 0;
        }
      }

      @keyframes lumo-notification-enter-slide-up {
        0% {
          transform: translateY(200%);
          opacity: 0;
        }
      }

      @keyframes lumo-notification-exit-slide-down {
        100% {
          transform: translateY(200%);
          opacity: 0;
        }
      }

      :host([slot="middle"][opening]) {
        animation: lumo-notification-enter-fade-in 300ms;
      }

      :host([slot="middle"][closing]) {
        animation: lumo-notification-exit-fade-out 300ms;
      }

      :host([slot^="top"][opening]) {
        animation: lumo-notification-enter-slide-down 300ms;
      }

      :host([slot^="top"][closing]) {
        animation: lumo-notification-exit-slide-up 300ms;
      }

      :host([slot^="bottom"][opening]) {
        animation: lumo-notification-enter-slide-up 300ms;
      }

      :host([slot^="bottom"][closing]) {
        animation: lumo-notification-exit-slide-down 300ms;
      }

      :host([theme~="primary"]) [part="overlay"] {
        background: var(--lumo-primary-color);
        color: var(--lumo-primary-contrast-color);
        box-shadow: var(--lumo-box-shadow-l);
      }

      :host([theme~="primary"]) {
        --_lumo-button-background-color: var(--lumo-shade-20pct);
        --_lumo-button-color: var(--lumo-primary-contrast-color);
        --_lumo-button-primary-background-color: var(--lumo-primary-contrast-color);
        --_lumo-button-primary-color: var(--lumo-primary-text-color);
      }

      :host([theme~="contrast"]) [part="overlay"] {
        background: var(--lumo-contrast);
        color: var(--lumo-base-color);
        box-shadow: var(--lumo-box-shadow-l);
      }

      :host([theme~="contrast"]) {
        --_lumo-button-background-color: var(--lumo-contrast-20pct);
        --_lumo-button-color: var(--lumo-base-color);
        --_lumo-button-primary-background-color: var(--lumo-base-color);
        --_lumo-button-primary-color: var(--lumo-contrast);
      }

      :host([theme~="success"]) [part="overlay"] {
        background: var(--lumo-success-color);
        color: var(--lumo-success-contrast-color);
        box-shadow: var(--lumo-box-shadow-l);
      }

      :host([theme~="success"]) {
        --_lumo-button-background-color: var(--lumo-shade-20pct);
        --_lumo-button-color: var(--lumo-success-contrast-color);
        --_lumo-button-primary-background-color: var(--lumo-success-contrast-color);
        --_lumo-button-primary-color: var(--lumo-success-text-color);
      }

      :host([theme~="error"]) [part="overlay"] {
        background: var(--lumo-error-color);
        color: var(--lumo-error-contrast-color);
        box-shadow: var(--lumo-box-shadow-l);
      }

      :host([theme~="error"]) {
        --_lumo-button-background-color: var(--lumo-shade-20pct);
        --_lumo-button-color: var(--lumo-error-contrast-color);
        --_lumo-button-primary-background-color: var(--lumo-error-contrast-color);
        --_lumo-button-primary-color: var(--lumo-error-text-color);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Y.content);var G=a(49),U=a(112);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class K extends(Object(S.a)(Object(k.a)(b.a))){static get template(){return g.a`
    <style>
      :host {
        position: fixed;
        z-index: 1000;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        box-sizing: border-box;

        display: flex;
        flex-direction: column;
        align-items: stretch;
        pointer-events: none;
      }

      [region-group] {
        flex: 1 1 0%;
        display: flex;
      }

      [region-group="top"] {
        align-items: flex-start;
      }

      [region-group="bottom"] {
        align-items: flex-end;
      }

      [region-group] > [region] {
        flex: 1 1 0%;
      }

      @media (max-width: 420px) {
        [region-group] {
          flex-direction: column;
          align-items: stretch;
        }

        [region-group="top"] {
          justify-content: flex-start;
        }

        [region-group="bottom"] {
          justify-content: flex-end;
        }

        [region-group] > [region] {
          flex: initial;
        }
      }
    </style>

    <div region="top-stretch"><slot name="top-stretch"></slot></div>
    <div region-group="top">
      <div region="top-start"><slot name="top-start"></slot></div>
      <div region="top-center"><slot name="top-center"></slot></div>
      <div region="top-end"><slot name="top-end"></slot></div>
    </div>
    <div region="middle"><slot name="middle"></slot></div>
    <div region-group="bottom">
      <div region="bottom-start"><slot name="bottom-start"></slot></div>
      <div region="bottom-center"><slot name="bottom-center"></slot></div>
      <div region="bottom-end"><slot name="bottom-end"></slot></div>
    </div>
    <div region="bottom-stretch"><slot name="bottom-stretch"></slot></div>
`}static get is(){return"vaadin-notification-container"}static get properties(){return{opened:{type:Boolean,value:!1,observer:"_openedChanged"}}}_openedChanged(e){e?(document.body.appendChild(this),this._boundIosResizeListener&&(this._detectIosNavbar(),window.addEventListener("resize",this._boundIosResizeListener))):(document.body.removeChild(this),this._boundIosResizeListener&&window.removeEventListener("resize",this._boundIosResizeListener))}constructor(){super(),/iPad|iPhone|iPod/.test(navigator.userAgent)&&(this._boundIosResizeListener=()=>this._detectIosNavbar())}_detectIosNavbar(){var e=window.innerHeight,t=window.innerWidth>e,a=document.documentElement.clientHeight;this.style.bottom=t&&a>e?a-e+"px":"0"}}class X extends(Object(S.a)(b.a)){static get template(){return g.a`
    <style>
      :host {
        display: block;
      }

      [part="overlay"] {
        pointer-events: auto;
      }
    </style>

    <div part="overlay">
      <div part="content">
        <slot></slot>
      </div>
    </div>
`}static get is(){return"vaadin-notification-card"}ready(){super.ready(),this.setAttribute("role","alert"),this.setAttribute("aria-live","polite")}}class Q extends(Object(U.a)(Object(k.a)(b.a))){static get template(){return g.a`
    <style>
      :host {
        display: none;
      }
    </style>
    <vaadin-notification-card id="vaadin-notification-card" theme\$="[[theme]]">
    </vaadin-notification-card>
`}static get is(){return"vaadin-notification"}static get version(){return"1.6.1"}static get properties(){return{duration:{type:Number,value:5e3},opened:{type:Boolean,value:!1,notify:!0,observer:"_openedChanged"},position:{type:String,value:"bottom-start",observer:"_positionChanged"},renderer:Function,_notificationTemplate:Object}}static get observers(){return["_durationChanged(duration, opened)","_templateOrRendererChanged(_notificationTemplate, renderer, opened)"]}ready(){super.ready(),this._observer=new E.a(this,e=>{this._setTemplateFromNodes(e.addedNodes)})}_setTemplateFromNodes(e){this._notificationTemplate=e.filter(e=>e.localName&&"template"===e.localName)[0]||this._notificationTemplate}render(){"function"==typeof this.renderer&&this.renderer(this._card,this)}_removeNewRendererOrTemplate(e,t,a,n){e!==t?this._notificationTemplate=void 0:a!==n&&(this.renderer=void 0)}_templateOrRendererChanged(e,t,a){if(e&&t)throw this._removeNewRendererOrTemplate(e,this._oldTemplate,t,this._oldRenderer),new Error("You should only use either a renderer or a template for notification content");this._oldTemplate=e;var n=this._oldRenderer!==t;if(this._oldRenderer=t,t){if(this._card=this.$["vaadin-notification-card"],n)for(;this._card.firstChild;)this._card.removeChild(this._card.firstChild);a&&(this._didAnimateNotificationAppend||this._animatedAppendNotificationCard(),this.render())}}open(){this.opened=!0}close(){this.opened=!1}get _container(){return Q._container||(Q._container=document.createElement("vaadin-notification-container"),document.body.appendChild(Q._container)),Q._container}_openedChanged(e){e?(this._container.opened=!0,this._instance||this.renderer||this._ensureTemplatized(),this._animatedAppendNotificationCard(),setTimeout(()=>this._updateShadyButtonStyles())):this._card&&this._closeNotificationCard()}_ensureTemplatized(){if(this._notificationTemplate=this.querySelector("template")||this._notificationTemplate,this._notificationTemplate){this._notificationTemplate._Templatizer||(this._notificationTemplate._Templatizer=Object(G.b)(this._notificationTemplate,this,{forwardHostProp:function(e,t){this._instance&&this._instance.forwardHostProp(e,t)}})),this._instance=new this._notificationTemplate._Templatizer({});var e=this._notificationTemplate.getRootNode(),t=e!==document;if(this._card=this.$["vaadin-notification-card"],this._cardContent=this._card.shadowRoot.querySelector('[part~="content"]'),t){if(this._cardContent.shadowRoot||this._cardContent.attachShadow({mode:"open"}),window.ShadyCSS&&!window.ShadyCSS.nativeShadow){var a=e.host&&e.host.localName;a&&-1===a.indexOf("-")&&(a=e.host.getAttribute("is")),a&&this._cardContent.setAttribute("is",a)}else{var n=Array.from(e.querySelectorAll("style")).reduce((e,t)=>e+t.textContent,"").replace(/:host/g,":host-nomatch");if(n){var i=document.createElement("style");i.textContent=n,this._cardContent.shadowRoot.appendChild(i)}}this._cardContent.shadowRoot.appendChild(this._instance.root)}else this._card.appendChild(this._instance.root);this._card.setAttribute("aria-label",this._card.textContent.trim())}}_animatedAppendNotificationCard(){if(this._card){this._card.setAttribute("opening",""),this._appendNotificationCard();var e=()=>{this._card.removeEventListener("animationend",e),this._card.removeAttribute("opening")};this._card.addEventListener("animationend",e),this._didAnimateNotificationAppend=!0}else this._didAnimateNotificationAppend=!1}_appendNotificationCard(){this._card&&(this._container.shadowRoot.querySelector(`slot[name="${this.position}"]`)?(this._card.slot=this.position,this._container.firstElementChild&&/top/.test(this.position)?this._container.insertBefore(this._card,this._container.firstElementChild):this._container.appendChild(this._card)):window.console.warn("Invalid alignment parameter provided: position="+this.position))}_removeNotificationCard(){this._card.parentNode&&this._card.parentNode.removeChild(this._card),this._card.removeAttribute("closing"),this._container.opened=Boolean(this._container.firstElementChild)}_closeNotificationCard(){this._durationTimeoutId&&clearTimeout(this._durationTimeoutId),this._animatedRemoveNotificationCard()}_animatedRemoveNotificationCard(){this._card.setAttribute("closing","");var e=getComputedStyle(this._card).getPropertyValue("animation-name");if(e&&"none"!=e){var t=()=>{this._removeNotificationCard(),this._card.removeEventListener("animationend",t)};this._card.addEventListener("animationend",t)}else this._removeNotificationCard()}_positionChanged(e){this.opened&&this._animatedAppendNotificationCard()}_durationChanged(e,t){t&&(clearTimeout(this._durationTimeoutId),e>0&&(this._durationTimeoutId=setTimeout(()=>this.close(),e)))}_updateShadyButtonStyles(){window.ShadyCSS&&!this.__buttonStylesPending&&(customElements.whenDefined("vaadin-button").then(()=>{Array.from(this._card.querySelectorAll("*")).filter(e=>e instanceof customElements.get("vaadin-button")).forEach(e=>{var t=["--_lumo-button-color","--_lumo-button-background-color","--_lumo-button-primary-color","--_lumo-button-primary-background-color"].reduce((e,t)=>{var a=window.ShadyCSS.getComputedStyleValue(this._card,t);return a&&(e[t]=a),e},{});e.updateStyles(t)}),this.__buttonStylesPending=!1}),this.__buttonStylesPending=!0)}}customElements.define(K.is,K),customElements.define(X.is,X),customElements.define(Q.is,Q);var J=document.createElement("template");J.innerHTML='<dom-module id="lumo-ordered-layout">\n  <template>\n    <style>\n      :host([theme~="margin"]) {\n        margin: var(--lumo-space-m);\n      }\n\n      :host([theme~="padding"]) {\n        padding: var(--lumo-space-m);\n      }\n    </style>\n  </template>\n</dom-module>',document.head.appendChild(J.content);var Z=g.a`<dom-module id="lumo-horizontal-layout" theme-for="vaadin-horizontal-layout">
  <template>
    <style include="lumo-ordered-layout">
      :host([theme~="spacing-xs"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-xs);
      }

      :host([theme~="spacing-s"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-s);
      }

      :host([theme~="spacing"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-m);
      }

      :host([theme~="spacing-l"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-l);
      }

      :host([theme~="spacing-xl"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: var(--lumo-space-xl);
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([theme~="spacing-xs"])::before,
      :host([theme~="spacing-s"])::before,
      :host([theme~="spacing"])::before,
      :host([theme~="spacing-l"])::before,
      :host([theme~="spacing-xl"])::before {
        content: "";
      }

      :host([theme~="spacing-xs"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-xs) * -1);
      }

      :host([theme~="spacing-s"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-s) * -1);
      }

      :host([theme~="spacing"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-m) * -1);
      }

      :host([theme~="spacing-l"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-l) * -1);
      }

      :host([theme~="spacing-xl"]:not([dir="rtl"]))::before {
        margin-left: calc(var(--lumo-space-xl) * -1);
      }

      /* RTL styles */
      :host([dir="rtl"][theme~="spacing-xs"]) ::slotted(*) {
        margin-right: var(--lumo-space-xs);
      }

      :host([dir="rtl"][theme~="spacing-s"]) ::slotted(*) {
        margin-right: var(--lumo-space-s);
      }

      :host([dir="rtl"][theme~="spacing"]) ::slotted(*) {
        margin-right: var(--lumo-space-m);
      }

      :host([dir="rtl"][theme~="spacing-l"]) ::slotted(*) {
        margin-right: var(--lumo-space-l);
      }

      :host([dir="rtl"][theme~="spacing-xl"]) ::slotted(*) {
        margin-right: var(--lumo-space-xl);
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([dir="rtl"][theme~="spacing-xs"])::before {
        margin-right: calc(var(--lumo-space-xs) * -1);
      }

      :host([dir="rtl"][theme~="spacing-s"])::before {
        margin-right: calc(var(--lumo-space-s) * -1);
      }

      :host([dir="rtl"][theme~="spacing"])::before {
        margin-right: calc(var(--lumo-space-m) * -1);
      }

      :host([dir="rtl"][theme~="spacing-l"])::before {
        margin-right: calc(var(--lumo-space-l) * -1);
      }

      :host([dir="rtl"][theme~="spacing-xl"])::before {
        margin-right: calc(var(--lumo-space-xl) * -1);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(Z.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class ee extends(Object(k.a)(Object(S.a)(b.a))){static get template(){return g.a`
    <style>
      :host {
        display: flex;
        box-sizing: border-box;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Theme variations */
      :host([theme~="margin"]) {
        margin: 1em;
      }

      :host([theme~="padding"]) {
        padding: 1em;
      }

      :host([theme~="spacing"]:not([dir="rtl"])) ::slotted(*) {
        margin-left: 1em;
      }

      :host([theme~="spacing"][dir="rtl"]) ::slotted(*) {
        margin-right: 1em;
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([theme~="spacing"])::before {
        content: "";
      }

      :host([theme~="spacing"]:not([dir="rtl"]))::before {
        margin-left: -1em;
      }

      :host([theme~="spacing"][dir="rtl"])::before {
        margin-right: -1em;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-horizontal-layout"}static get version(){return"1.4.0"}}customElements.define(ee.is,ee);var te=g.a`<dom-module id="lumo-vertical-layout" theme-for="vaadin-vertical-layout">
  <template>
    <style include="lumo-ordered-layout">
      :host([theme~="spacing-xs"]) ::slotted(*) {
        margin-top: var(--lumo-space-xs);
      }

      :host([theme~="spacing-s"]) ::slotted(*) {
        margin-top: var(--lumo-space-s);
      }

      :host([theme~="spacing"]) ::slotted(*) {
        margin-top: var(--lumo-space-m);
      }

      :host([theme~="spacing-l"]) ::slotted(*) {
        margin-top: var(--lumo-space-l);
      }

      :host([theme~="spacing-xl"]) ::slotted(*) {
        margin-top: var(--lumo-space-xl);
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
       :host([theme~="spacing-xs"])::before {
         content: "";
         margin-top: calc(var(--lumo-space-xs) * -1);
       }

       :host([theme~="spacing-s"])::before {
         content: "";
         margin-top: calc(var(--lumo-space-s) * -1);
       }

      :host([theme~="spacing"])::before {
        content: "";
        margin-top: calc(var(--lumo-space-m) * -1);
      }

      :host([theme~="spacing-l"])::before {
        content: "";
        margin-top: calc(var(--lumo-space-l) * -1);
      }

      :host([theme~="spacing-xl"])::before {
        content: "";
        margin-top: calc(var(--lumo-space-xl) * -1);
      }
    </style>
  </template>
</dom-module>`;document.head.appendChild(te.content);
/**
@license
Copyright (c) 2017 Vaadin Ltd.
This program is available under Apache License Version 2.0, available at https://vaadin.com/license/
*/
class ae extends(Object(k.a)(Object(S.a)(b.a))){static get template(){return g.a`
    <style>
      :host {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        box-sizing: border-box;
      }

      :host([hidden]) {
        display: none !important;
      }

      /* Theme variations */
      :host([theme~="margin"]) {
        margin: 1em;
      }

      :host([theme~="padding"]) {
        padding: 1em;
      }

      :host([theme~="spacing"]) ::slotted(*) {
        margin-top: 1em;
      }

      /*
        Compensate for the first item margin, so that there is no gap around
        the layout itself.
       */
      :host([theme~="spacing"])::before {
        content: "";
        margin-top: -1em;
      }
    </style>

    <slot></slot>
`}static get is(){return"vaadin-vertical-layout"}static get version(){return"1.4.0"}}customElements.define(ae.is,ae);a(291),a(292),a(205),a(260),a(261),a(284);window.Vaadin.theme.flowBootstrap&&d(document);document.getElementsByTagName("script");for(var ne,ie=document.getElementsByTagName("script"),oe=0;oe<ie.length;oe++){var re=ie[oe];if("module"==re.getAttribute("type")&&re.getAttribute("data-app-id")&&!re["vaadin-bundle"]){ne=re;break}}if(!ne)throw new Error("Could not find the bundle script to identify the application id");ne["vaadin-bundle"]=!0,window.Vaadin.Flow.fallbacks||(window.Vaadin.Flow.fallbacks={});var se=window.Vaadin.Flow.fallbacks;se[ne.getAttribute("data-app-id")]={},se[ne.getAttribute("data-app-id")].loadFallback=function(){return Promise.all([a.e(0),a.e(4),a.e(6)]).then(a.bind(null,510))}}]);