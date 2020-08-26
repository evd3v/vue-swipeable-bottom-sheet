module.exports=function(t){var e={};function n(i){if(e[i])return e[i].exports;var r=e[i]={i:i,l:!1,exports:{}};return t[i].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=t,n.c=e,n.d=function(t,e,i){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)n.d(i,r,function(e){return t[e]}.bind(null,r));return i},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=4)}([function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,r=n(10),o=(i=r)&&i.__esModule?i:{default:i};e.default={props:{openY:{type:Number,default:.5},value:{type:Boolean,default:!1}},data:function(){return{mc:null,y:0,startY:0,isMove:!1,rect:{},height:0,topOffset:document.documentElement.clientHeight}},computed:{getStateName:function(){return this.value?"open":"close"},getTopOffset:function(){return(this.isMove?this.y:this.topOffset)+"px"}},mounted:function(){var t=this;this.calcY(),window.onresize=function(){t.rect=t.$refs.card.getBoundingClientRect()},this.rect=this.$refs.card.getBoundingClientRect(),this.mc=new o.default(this.$refs.pan),this.mc.get("pan").set({direction:o.default.DIRECTION_ALL}),this.mc.on("panup pandown",function(e){t.value&&e.deltaY<0||(t.y=e.center.y-16)}),this.mc.on("panstart",function(e){t.value&&e.deltaY<0||(t.startY=e.center.y,t.isMove=!0)}),this.mc.on("panend",function(e){t.isMove=!1,t.startY-e.center.y>120&&t.setState(!0),t.startY-e.center.y<-50&&t.setState(!1)})},beforeDestroy:function(){this.mc.destroy(),window.onresize=null},updated:function(){this.calcY()},methods:{getResultHeight:function(){var t=this.$refs.content.scrollHeight>this.$refs.card.clientHeight?this.$refs.content.scrollHeight:this.$refs.card.clientHeight,e=document.documentElement.clientHeight-t,n=.6*document.documentElement.clientHeight;this.topOffset=t>n?document.documentElement.clientHeight-n:e},calcY:function(){this.value?(this.getResultHeight(),document.body.style.overflow="hidden",this.$refs.content.style.maxHeight=document.documentElement.clientHeight-this.topOffset-44+"px"):(document.body.style.overflow="initial",this.topOffset=document.documentElement.clientHeight)},setState:function(t){this.$emit("input",t)}}}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t,e){for(var n=[],i={},r=0;r<e.length;r++){var o=e[r],s=o[0],a=o[1],u=o[2],c=o[3],h={id:t+":"+r,css:a,media:u,sourceMap:c};i[s]?i[s].parts.push(h):n.push(i[s]={id:s,parts:[h]})}return n}},function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"b",function(){return r});var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"wrapper",attrs:{"data-open":t.value}},[n("div",{ref:"background",staticClass:"bg",on:{click:function(){return t.setState(!1)}}}),t._v(" "),n("div",{ref:"card",staticClass:"card",style:{top:t.getTopOffset},attrs:{"data-state":t.isMove?"move":t.getStateName}},[n("div",{ref:"pan",staticClass:"pan-area"},[n("div",{ref:"bar",staticClass:"bar"})]),t._v(" "),n("div",{ref:"content",staticClass:"contents"},[t._t("default")],2)])])},r=[];i._withStripped=!0},function(t,e,n){"use strict";function i(t,e,n,i,r,o,s,a){var u=typeof(t=t||{}).default;"object"!==u&&"function"!==u||(t=t.default);var c,h="function"==typeof t?t.options:t;if(e&&(h.render=e,h.staticRenderFns=n,h._compiled=!0),i&&(h.functional=!0),o&&(h._scopeId=o),s?(c=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),r&&r.call(this,t),t&&t._registeredComponents&&t._registeredComponents.add(s)},h._ssrRegister=c):r&&(c=a?function(){r.call(this,this.$root.$options.shadowRoot)}:r),c)if(h.functional){h._injectStyles=c;var l=h.render;h.render=function(t,e){return c.call(e),l(t,e)}}else{var p=h.beforeCreate;h.beforeCreate=p?[].concat(p,c):[c]}return{exports:t,options:h}}n.d(e,"a",function(){return i})},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.SwipeableBottomSheet=void 0;var i,r=n(5),o=(i=r)&&i.__esModule?i:{default:i};e.SwipeableBottomSheet=o.default},function(t,e,n){"use strict";n.r(e);var i=n(0),r=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);var s=n(2),a=n(3),u=!1;var c=function(t){u||n(6)},h=Object(a.a)(r.a,s.a,s.b,!1,c,"data-v-5d6b6420",null);h.options.__file="src/components/SwipeableBottomSheet.vue",e.default=h.exports},function(t,e,n){var i=n(7);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);(0,n(9).default)("5435b06f",i,!1,{})},function(t,e,n){(t.exports=n(8)(!1)).push([t.i,'\n.wrapper[data-open="true"][data-v-5d6b6420] {\n  position: fixed;\n  top: 0;\n  left: 0;\n}\n.wrapper[data-open="true"] > .bg > .bg[data-v-5d6b6420] {\n  display: block;\n  transition: all .3s;\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background: rgba(0, 0, 0, 0.3);\n}\n.card[data-v-5d6b6420] {\n  width: 100%;\n  position: fixed;\n  background: white;\n  border-radius: 10px 10px 0 0;\n  box-shadow: 0 -3px 4px rgba(0, 0, 0, 0.1);\n  left: 0;\n}\n.card[data-state="open"][data-v-5d6b6420], .card[data-state="close"][data-v-5d6b6420] {\n  transition: top .3s ease-out;\n}\n.card[data-state="close"][data-v-5d6b6420] {\n  box-shadow: none;\n}\n.bar[data-v-5d6b6420] {\n  background: rgba(0, 0, 0, 0.3);\n  margin: 0 auto;\n  cursor: pointer;\n  display: block;\n  width: 50px;\n  height: 4px;\n  background: #F2F2F2;\n  border-radius: 50px;\n}\n.pan-area[data-v-5d6b6420] {\n  padding: 20px 0;\n}\n.contents[data-v-5d6b6420] {\n  overflow-y: scroll;\n  box-sizing: border-box;\n}\n.contents[data-v-5d6b6420]::-webkit-scrollbar {\n    width: 3px;\n    border-radius: 100%;\n}\n.contents[data-v-5d6b6420]::-webkit-scrollbar-track {\n    background-color: #f5f5f5;\n}\n.contents[data-v-5d6b6420]::-webkit-scrollbar-thumb {\n    background-color: #d0d0d0;\n}\n',""])},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map(function(e){var n=function(t,e){var n=t[1]||"",i=t[3];if(!i)return n;if(e&&"function"==typeof btoa){var r=(s=i,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(s))))+" */"),o=i.sources.map(function(t){return"/*# sourceURL="+i.sourceRoot+t+" */"});return[n].concat(o).concat([r]).join("\n")}var s;return[n].join("\n")}(e,t);return e[2]?"@media "+e[2]+"{"+n+"}":n}).join("")},e.i=function(t,n){"string"==typeof t&&(t=[[null,t,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<t.length;r++){var s=t[r];"number"==typeof s[0]&&i[s[0]]||(n&&!s[2]?s[2]=n:n&&(s[2]="("+s[2]+") and ("+n+")"),e.push(s))}},e}},function(t,e,n){"use strict";n.r(e),n.d(e,"default",function(){return v});var i=n(1),r=n.n(i),o="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!o)throw new Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},a=o&&(document.head||document.getElementsByTagName("head")[0]),u=null,c=0,h=!1,l=function(){},p=null,f="data-vue-ssr-id",d="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function v(t,e,n,i){h=n,p=i||{};var o=r()(t,e);return m(o),function(e){for(var n=[],i=0;i<o.length;i++){var a=o[i];(u=s[a.id]).refs--,n.push(u)}e?m(o=r()(t,e)):o=[];for(i=0;i<n.length;i++){var u;if(0===(u=n[i]).refs){for(var c=0;c<u.parts.length;c++)u.parts[c]();delete s[u.id]}}}}function m(t){for(var e=0;e<t.length;e++){var n=t[e],i=s[n.id];if(i){i.refs++;for(var r=0;r<i.parts.length;r++)i.parts[r](n.parts[r]);for(;r<n.parts.length;r++)i.parts.push(y(n.parts[r]));i.parts.length>n.parts.length&&(i.parts.length=n.parts.length)}else{var o=[];for(r=0;r<n.parts.length;r++)o.push(y(n.parts[r]));s[n.id]={id:n.id,refs:1,parts:o}}}}function g(){var t=document.createElement("style");return t.type="text/css",a.appendChild(t),t}function y(t){var e,n,i=document.querySelector("style["+f+'~="'+t.id+'"]');if(i){if(h)return l;i.parentNode.removeChild(i)}if(d){var r=c++;i=u||(u=g()),e=E.bind(null,i,r,!1),n=E.bind(null,i,r,!0)}else i=g(),e=function(t,e){var n=e.css,i=e.media,r=e.sourceMap;i&&t.setAttribute("media",i);p.ssrId&&t.setAttribute(f,e.id);r&&(n+="\n/*# sourceURL="+r.sources[0]+" */",n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");if(t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}.bind(null,i),n=function(){i.parentNode.removeChild(i)};return e(t),function(i){if(i){if(i.css===t.css&&i.media===t.media&&i.sourceMap===t.sourceMap)return;e(t=i)}else n()}}var b,T=(b=[],function(t,e){return b[t]=e,b.filter(Boolean).join("\n")});function E(t,e,n,i){var r=n?"":i.css;if(t.styleSheet)t.styleSheet.cssText=T(e,r);else{var o=document.createTextNode(r),s=t.childNodes;s[e]&&t.removeChild(s[e]),s.length?t.insertBefore(o,s[e]):t.appendChild(o)}}},function(t,e,n){"use strict";var i,r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};
/*! Hammer.JS - v2.0.7 - 2016-04-22
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2016 Jorik Tangelder;
 * Licensed under the MIT license */
!function(o,s,a,u){var c,h=["","webkit","Moz","MS","ms","o"],l=s.createElement("div"),p="function",f=Math.round,d=Math.abs,v=Date.now;function m(t,e,n){return setTimeout(S(t,n),e)}function g(t,e,n){return!!Array.isArray(t)&&(y(t,n[e],n),!0)}function y(t,e,n){var i;if(t)if(t.forEach)t.forEach(e,n);else if(t.length!==u)for(i=0;i<t.length;)e.call(n,t[i],i,t),i++;else for(i in t)t.hasOwnProperty(i)&&e.call(n,t[i],i,t)}function b(t,e,n){var i="DEPRECATED METHOD: "+e+"\n"+n+" AT \n";return function(){var e=new Error("get-stack-trace"),n=e&&e.stack?e.stack.replace(/^[^\(]+?[\n$]/gm,"").replace(/^\s+at\s+/gm,"").replace(/^Object.<anonymous>\s*\(/gm,"{anonymous}()@"):"Unknown Stack Trace",r=o.console&&(o.console.warn||o.console.log);return r&&r.call(o.console,i,n),t.apply(this,arguments)}}c="function"!=typeof Object.assign?function(t){if(t===u||null===t)throw new TypeError("Cannot convert undefined or null to object");for(var e=Object(t),n=1;n<arguments.length;n++){var i=arguments[n];if(i!==u&&null!==i)for(var r in i)i.hasOwnProperty(r)&&(e[r]=i[r])}return e}:Object.assign;var T=b(function(t,e,n){for(var i=Object.keys(e),r=0;r<i.length;)(!n||n&&t[i[r]]===u)&&(t[i[r]]=e[i[r]]),r++;return t},"extend","Use `assign`."),E=b(function(t,e){return T(t,e,!0)},"merge","Use `assign`.");function _(t,e,n){var i,r=e.prototype;(i=t.prototype=Object.create(r)).constructor=t,i._super=r,n&&c(i,n)}function S(t,e){return function(){return t.apply(e,arguments)}}function x(t,e){return(void 0===t?"undefined":r(t))==p?t.apply(e&&e[0]||u,e):t}function C(t,e){return t===u?e:t}function w(t,e,n){y(M(e),function(e){t.addEventListener(e,n,!1)})}function I(t,e,n){y(M(e),function(e){t.removeEventListener(e,n,!1)})}function O(t,e){for(;t;){if(t==e)return!0;t=t.parentNode}return!1}function A(t,e){return t.indexOf(e)>-1}function M(t){return t.trim().split(/\s+/g)}function P(t,e,n){if(t.indexOf&&!n)return t.indexOf(e);for(var i=0;i<t.length;){if(n&&t[i][n]==e||!n&&t[i]===e)return i;i++}return-1}function R(t){return Array.prototype.slice.call(t,0)}function D(t,e,n){for(var i=[],r=[],o=0;o<t.length;){var s=e?t[o][e]:t[o];P(r,s)<0&&i.push(t[o]),r[o]=s,o++}return n&&(i=e?i.sort(function(t,n){return t[e]>n[e]}):i.sort()),i}function N(t,e){for(var n,i,r=e[0].toUpperCase()+e.slice(1),o=0;o<h.length;){if((i=(n=h[o])?n+r:e)in t)return i;o++}return u}var Y=1;function z(t){var e=t.ownerDocument||t;return e.defaultView||e.parentWindow||o}var k="ontouchstart"in o,j=N(o,"PointerEvent")!==u,X=k&&/mobile|tablet|ip(ad|hone|od)|android/i.test(navigator.userAgent),H=25,F=1,L=2,U=4,W=8,q=1,$=2,B=4,V=8,G=16,Z=$|B,J=V|G,K=Z|J,Q=["x","y"],tt=["clientX","clientY"];function et(t,e){var n=this;this.manager=t,this.callback=e,this.element=t.element,this.target=t.options.inputTarget,this.domHandler=function(e){x(t.options.enable,[t])&&n.handler(e)},this.init()}function nt(t,e,n){var i=n.pointers.length,r=n.changedPointers.length,o=e&F&&i-r==0,s=e&(U|W)&&i-r==0;n.isFirst=!!o,n.isFinal=!!s,o&&(t.session={}),n.eventType=e,function(t,e){var n=t.session,i=e.pointers,r=i.length;n.firstInput||(n.firstInput=it(e));r>1&&!n.firstMultiple?n.firstMultiple=it(e):1===r&&(n.firstMultiple=!1);var o=n.firstInput,s=n.firstMultiple,a=s?s.center:o.center,c=e.center=rt(i);e.timeStamp=v(),e.deltaTime=e.timeStamp-o.timeStamp,e.angle=ut(a,c),e.distance=at(a,c),function(t,e){var n=e.center,i=t.offsetDelta||{},r=t.prevDelta||{},o=t.prevInput||{};e.eventType!==F&&o.eventType!==U||(r=t.prevDelta={x:o.deltaX||0,y:o.deltaY||0},i=t.offsetDelta={x:n.x,y:n.y});e.deltaX=r.x+(n.x-i.x),e.deltaY=r.y+(n.y-i.y)}(n,e),e.offsetDirection=st(e.deltaX,e.deltaY);var h=ot(e.deltaTime,e.deltaX,e.deltaY);e.overallVelocityX=h.x,e.overallVelocityY=h.y,e.overallVelocity=d(h.x)>d(h.y)?h.x:h.y,e.scale=s?(l=s.pointers,p=i,at(p[0],p[1],tt)/at(l[0],l[1],tt)):1,e.rotation=s?function(t,e){return ut(e[1],e[0],tt)+ut(t[1],t[0],tt)}(s.pointers,i):0,e.maxPointers=n.prevInput?e.pointers.length>n.prevInput.maxPointers?e.pointers.length:n.prevInput.maxPointers:e.pointers.length,function(t,e){var n,i,r,o,s=t.lastInterval||e,a=e.timeStamp-s.timeStamp;if(e.eventType!=W&&(a>H||s.velocity===u)){var c=e.deltaX-s.deltaX,h=e.deltaY-s.deltaY,l=ot(a,c,h);i=l.x,r=l.y,n=d(l.x)>d(l.y)?l.x:l.y,o=st(c,h),t.lastInterval=e}else n=s.velocity,i=s.velocityX,r=s.velocityY,o=s.direction;e.velocity=n,e.velocityX=i,e.velocityY=r,e.direction=o}(n,e);var l,p;var f=t.element;O(e.srcEvent.target,f)&&(f=e.srcEvent.target);e.target=f}(t,n),t.emit("hammer.input",n),t.recognize(n),t.session.prevInput=n}function it(t){for(var e=[],n=0;n<t.pointers.length;)e[n]={clientX:f(t.pointers[n].clientX),clientY:f(t.pointers[n].clientY)},n++;return{timeStamp:v(),pointers:e,center:rt(e),deltaX:t.deltaX,deltaY:t.deltaY}}function rt(t){var e=t.length;if(1===e)return{x:f(t[0].clientX),y:f(t[0].clientY)};for(var n=0,i=0,r=0;r<e;)n+=t[r].clientX,i+=t[r].clientY,r++;return{x:f(n/e),y:f(i/e)}}function ot(t,e,n){return{x:e/t||0,y:n/t||0}}function st(t,e){return t===e?q:d(t)>=d(e)?t<0?$:B:e<0?V:G}function at(t,e,n){n||(n=Q);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return Math.sqrt(i*i+r*r)}function ut(t,e,n){n||(n=Q);var i=e[n[0]]-t[n[0]],r=e[n[1]]-t[n[1]];return 180*Math.atan2(r,i)/Math.PI}et.prototype={handler:function(){},init:function(){this.evEl&&w(this.element,this.evEl,this.domHandler),this.evTarget&&w(this.target,this.evTarget,this.domHandler),this.evWin&&w(z(this.element),this.evWin,this.domHandler)},destroy:function(){this.evEl&&I(this.element,this.evEl,this.domHandler),this.evTarget&&I(this.target,this.evTarget,this.domHandler),this.evWin&&I(z(this.element),this.evWin,this.domHandler)}};var ct={mousedown:F,mousemove:L,mouseup:U},ht="mousedown",lt="mousemove mouseup";function pt(){this.evEl=ht,this.evWin=lt,this.pressed=!1,et.apply(this,arguments)}_(pt,et,{handler:function(t){var e=ct[t.type];e&F&&0===t.button&&(this.pressed=!0),e&L&&1!==t.which&&(e=U),this.pressed&&(e&U&&(this.pressed=!1),this.callback(this.manager,e,{pointers:[t],changedPointers:[t],pointerType:"mouse",srcEvent:t}))}});var ft={pointerdown:F,pointermove:L,pointerup:U,pointercancel:W,pointerout:W},dt={2:"touch",3:"pen",4:"mouse",5:"kinect"},vt="pointerdown",mt="pointermove pointerup pointercancel";function gt(){this.evEl=vt,this.evWin=mt,et.apply(this,arguments),this.store=this.manager.session.pointerEvents=[]}o.MSPointerEvent&&!o.PointerEvent&&(vt="MSPointerDown",mt="MSPointerMove MSPointerUp MSPointerCancel"),_(gt,et,{handler:function(t){var e=this.store,n=!1,i=t.type.toLowerCase().replace("ms",""),r=ft[i],o=dt[t.pointerType]||t.pointerType,s="touch"==o,a=P(e,t.pointerId,"pointerId");r&F&&(0===t.button||s)?a<0&&(e.push(t),a=e.length-1):r&(U|W)&&(n=!0),a<0||(e[a]=t,this.callback(this.manager,r,{pointers:e,changedPointers:[t],pointerType:o,srcEvent:t}),n&&e.splice(a,1))}});var yt={touchstart:F,touchmove:L,touchend:U,touchcancel:W},bt="touchstart",Tt="touchstart touchmove touchend touchcancel";function Et(){this.evTarget=bt,this.evWin=Tt,this.started=!1,et.apply(this,arguments)}_(Et,et,{handler:function(t){var e=yt[t.type];if(e===F&&(this.started=!0),this.started){var n=function(t,e){var n=R(t.touches),i=R(t.changedTouches);e&(U|W)&&(n=D(n.concat(i),"identifier",!0));return[n,i]}.call(this,t,e);e&(U|W)&&n[0].length-n[1].length==0&&(this.started=!1),this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}}});var _t={touchstart:F,touchmove:L,touchend:U,touchcancel:W},St="touchstart touchmove touchend touchcancel";function xt(){this.evTarget=St,this.targetIds={},et.apply(this,arguments)}_(xt,et,{handler:function(t){var e=_t[t.type],n=function(t,e){var n=R(t.touches),i=this.targetIds;if(e&(F|L)&&1===n.length)return i[n[0].identifier]=!0,[n,n];var r,o,s=R(t.changedTouches),a=[],u=this.target;if(o=n.filter(function(t){return O(t.target,u)}),e===F)for(r=0;r<o.length;)i[o[r].identifier]=!0,r++;r=0;for(;r<s.length;)i[s[r].identifier]&&a.push(s[r]),e&(U|W)&&delete i[s[r].identifier],r++;if(!a.length)return;return[D(o.concat(a),"identifier",!0),a]}.call(this,t,e);n&&this.callback(this.manager,e,{pointers:n[0],changedPointers:n[1],pointerType:"touch",srcEvent:t})}});var Ct=2500,wt=25;function It(){et.apply(this,arguments);var t=S(this.handler,this);this.touch=new xt(this.manager,t),this.mouse=new pt(this.manager,t),this.primaryTouch=null,this.lastTouches=[]}function Ot(t){var e=t.changedPointers[0];if(e.identifier===this.primaryTouch){var n={x:e.clientX,y:e.clientY};this.lastTouches.push(n);var i=this.lastTouches;setTimeout(function(){var t=i.indexOf(n);t>-1&&i.splice(t,1)},Ct)}}_(It,et,{handler:function(t,e,n){var i="touch"==n.pointerType,r="mouse"==n.pointerType;if(!(r&&n.sourceCapabilities&&n.sourceCapabilities.firesTouchEvents)){if(i)(function(t,e){t&F?(this.primaryTouch=e.changedPointers[0].identifier,Ot.call(this,e)):t&(U|W)&&Ot.call(this,e)}).call(this,e,n);else if(r&&function(t){for(var e=t.srcEvent.clientX,n=t.srcEvent.clientY,i=0;i<this.lastTouches.length;i++){var r=this.lastTouches[i],o=Math.abs(e-r.x),s=Math.abs(n-r.y);if(o<=wt&&s<=wt)return!0}return!1}.call(this,n))return;this.callback(t,e,n)}},destroy:function(){this.touch.destroy(),this.mouse.destroy()}});var At=N(l.style,"touchAction"),Mt=At!==u,Pt="auto",Rt="manipulation",Dt="none",Nt="pan-x",Yt="pan-y",zt=function(){if(!Mt)return!1;var t={},e=o.CSS&&o.CSS.supports;return["auto","manipulation","pan-y","pan-x","pan-x pan-y","none"].forEach(function(n){t[n]=!e||o.CSS.supports("touch-action",n)}),t}();function kt(t,e){this.manager=t,this.set(e)}kt.prototype={set:function(t){"compute"==t&&(t=this.compute()),Mt&&this.manager.element.style&&zt[t]&&(this.manager.element.style[At]=t),this.actions=t.toLowerCase().trim()},update:function(){this.set(this.manager.options.touchAction)},compute:function(){var t=[];return y(this.manager.recognizers,function(e){x(e.options.enable,[e])&&(t=t.concat(e.getTouchAction()))}),function(t){if(A(t,Dt))return Dt;var e=A(t,Nt),n=A(t,Yt);if(e&&n)return Dt;if(e||n)return e?Nt:Yt;if(A(t,Rt))return Rt;return Pt}(t.join(" "))},preventDefaults:function(t){var e=t.srcEvent,n=t.offsetDirection;if(this.manager.session.prevented)e.preventDefault();else{var i=this.actions,r=A(i,Dt)&&!zt[Dt],o=A(i,Yt)&&!zt[Yt],s=A(i,Nt)&&!zt[Nt];if(r){var a=1===t.pointers.length,u=t.distance<2,c=t.deltaTime<250;if(a&&u&&c)return}if(!s||!o)return r||o&&n&Z||s&&n&J?this.preventSrc(e):void 0}},preventSrc:function(t){this.manager.session.prevented=!0,t.preventDefault()}};var jt=1,Xt=2,Ht=4,Ft=8,Lt=Ft,Ut=16;function Wt(t){this.options=c({},this.defaults,t||{}),this.id=Y++,this.manager=null,this.options.enable=C(this.options.enable,!0),this.state=jt,this.simultaneous={},this.requireFail=[]}function qt(t){return t&Ut?"cancel":t&Ft?"end":t&Ht?"move":t&Xt?"start":""}function $t(t){return t==G?"down":t==V?"up":t==$?"left":t==B?"right":""}function Bt(t,e){var n=e.manager;return n?n.get(t):t}function Vt(){Wt.apply(this,arguments)}function Gt(){Vt.apply(this,arguments),this.pX=null,this.pY=null}function Zt(){Vt.apply(this,arguments)}function Jt(){Wt.apply(this,arguments),this._timer=null,this._input=null}function Kt(){Vt.apply(this,arguments)}function Qt(){Vt.apply(this,arguments)}function te(){Wt.apply(this,arguments),this.pTime=!1,this.pCenter=!1,this._timer=null,this._input=null,this.count=0}function ee(t,e){return(e=e||{}).recognizers=C(e.recognizers,ee.defaults.preset),new ne(t,e)}Wt.prototype={defaults:{},set:function(t){return c(this.options,t),this.manager&&this.manager.touchAction.update(),this},recognizeWith:function(t){if(g(t,"recognizeWith",this))return this;var e=this.simultaneous;return e[(t=Bt(t,this)).id]||(e[t.id]=t,t.recognizeWith(this)),this},dropRecognizeWith:function(t){return g(t,"dropRecognizeWith",this)?this:(t=Bt(t,this),delete this.simultaneous[t.id],this)},requireFailure:function(t){if(g(t,"requireFailure",this))return this;var e=this.requireFail;return-1===P(e,t=Bt(t,this))&&(e.push(t),t.requireFailure(this)),this},dropRequireFailure:function(t){if(g(t,"dropRequireFailure",this))return this;t=Bt(t,this);var e=P(this.requireFail,t);return e>-1&&this.requireFail.splice(e,1),this},hasRequireFailures:function(){return this.requireFail.length>0},canRecognizeWith:function(t){return!!this.simultaneous[t.id]},emit:function(t){var e=this,n=this.state;function i(n){e.manager.emit(n,t)}n<Ft&&i(e.options.event+qt(n)),i(e.options.event),t.additionalEvent&&i(t.additionalEvent),n>=Ft&&i(e.options.event+qt(n))},tryEmit:function(t){if(this.canEmit())return this.emit(t);this.state=32},canEmit:function(){for(var t=0;t<this.requireFail.length;){if(!(this.requireFail[t].state&(32|jt)))return!1;t++}return!0},recognize:function(t){var e=c({},t);if(!x(this.options.enable,[this,e]))return this.reset(),void(this.state=32);this.state&(Lt|Ut|32)&&(this.state=jt),this.state=this.process(e),this.state&(Xt|Ht|Ft|Ut)&&this.tryEmit(e)},process:function(t){},getTouchAction:function(){},reset:function(){}},_(Vt,Wt,{defaults:{pointers:1},attrTest:function(t){var e=this.options.pointers;return 0===e||t.pointers.length===e},process:function(t){var e=this.state,n=t.eventType,i=e&(Xt|Ht),r=this.attrTest(t);return i&&(n&W||!r)?e|Ut:i||r?n&U?e|Ft:e&Xt?e|Ht:Xt:32}}),_(Gt,Vt,{defaults:{event:"pan",threshold:10,pointers:1,direction:K},getTouchAction:function(){var t=this.options.direction,e=[];return t&Z&&e.push(Yt),t&J&&e.push(Nt),e},directionTest:function(t){var e=this.options,n=!0,i=t.distance,r=t.direction,o=t.deltaX,s=t.deltaY;return r&e.direction||(e.direction&Z?(r=0===o?q:o<0?$:B,n=o!=this.pX,i=Math.abs(t.deltaX)):(r=0===s?q:s<0?V:G,n=s!=this.pY,i=Math.abs(t.deltaY))),t.direction=r,n&&i>e.threshold&&r&e.direction},attrTest:function(t){return Vt.prototype.attrTest.call(this,t)&&(this.state&Xt||!(this.state&Xt)&&this.directionTest(t))},emit:function(t){this.pX=t.deltaX,this.pY=t.deltaY;var e=$t(t.direction);e&&(t.additionalEvent=this.options.event+e),this._super.emit.call(this,t)}}),_(Zt,Vt,{defaults:{event:"pinch",threshold:0,pointers:2},getTouchAction:function(){return[Dt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.scale-1)>this.options.threshold||this.state&Xt)},emit:function(t){if(1!==t.scale){var e=t.scale<1?"in":"out";t.additionalEvent=this.options.event+e}this._super.emit.call(this,t)}}),_(Jt,Wt,{defaults:{event:"press",pointers:1,time:251,threshold:9},getTouchAction:function(){return[Pt]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime>e.time;if(this._input=t,!i||!n||t.eventType&(U|W)&&!r)this.reset();else if(t.eventType&F)this.reset(),this._timer=m(function(){this.state=Lt,this.tryEmit()},e.time,this);else if(t.eventType&U)return Lt;return 32},reset:function(){clearTimeout(this._timer)},emit:function(t){this.state===Lt&&(t&&t.eventType&U?this.manager.emit(this.options.event+"up",t):(this._input.timeStamp=v(),this.manager.emit(this.options.event,this._input)))}}),_(Kt,Vt,{defaults:{event:"rotate",threshold:0,pointers:2},getTouchAction:function(){return[Dt]},attrTest:function(t){return this._super.attrTest.call(this,t)&&(Math.abs(t.rotation)>this.options.threshold||this.state&Xt)}}),_(Qt,Vt,{defaults:{event:"swipe",threshold:10,velocity:.3,direction:Z|J,pointers:1},getTouchAction:function(){return Gt.prototype.getTouchAction.call(this)},attrTest:function(t){var e,n=this.options.direction;return n&(Z|J)?e=t.overallVelocity:n&Z?e=t.overallVelocityX:n&J&&(e=t.overallVelocityY),this._super.attrTest.call(this,t)&&n&t.offsetDirection&&t.distance>this.options.threshold&&t.maxPointers==this.options.pointers&&d(e)>this.options.velocity&&t.eventType&U},emit:function(t){var e=$t(t.offsetDirection);e&&this.manager.emit(this.options.event+e,t),this.manager.emit(this.options.event,t)}}),_(te,Wt,{defaults:{event:"tap",pointers:1,taps:1,interval:300,time:250,threshold:9,posThreshold:10},getTouchAction:function(){return[Rt]},process:function(t){var e=this.options,n=t.pointers.length===e.pointers,i=t.distance<e.threshold,r=t.deltaTime<e.time;if(this.reset(),t.eventType&F&&0===this.count)return this.failTimeout();if(i&&r&&n){if(t.eventType!=U)return this.failTimeout();var o=!this.pTime||t.timeStamp-this.pTime<e.interval,s=!this.pCenter||at(this.pCenter,t.center)<e.posThreshold;if(this.pTime=t.timeStamp,this.pCenter=t.center,s&&o?this.count+=1:this.count=1,this._input=t,0===this.count%e.taps)return this.hasRequireFailures()?(this._timer=m(function(){this.state=Lt,this.tryEmit()},e.interval,this),Xt):Lt}return 32},failTimeout:function(){return this._timer=m(function(){this.state=32},this.options.interval,this),32},reset:function(){clearTimeout(this._timer)},emit:function(){this.state==Lt&&(this._input.tapCount=this.count,this.manager.emit(this.options.event,this._input))}}),ee.VERSION="2.0.7",ee.defaults={domEvents:!1,touchAction:"compute",enable:!0,inputTarget:null,inputClass:null,preset:[[Kt,{enable:!1}],[Zt,{enable:!1},["rotate"]],[Qt,{direction:Z}],[Gt,{direction:Z},["swipe"]],[te],[te,{event:"doubletap",taps:2},["tap"]],[Jt]],cssProps:{userSelect:"none",touchSelect:"none",touchCallout:"none",contentZooming:"none",userDrag:"none",tapHighlightColor:"rgba(0,0,0,0)"}};function ne(t,e){var n;this.options=c({},ee.defaults,e||{}),this.options.inputTarget=this.options.inputTarget||t,this.handlers={},this.session={},this.recognizers=[],this.oldCssProps={},this.element=t,this.input=new((n=this).options.inputClass||(j?gt:X?xt:k?It:pt))(n,nt),this.touchAction=new kt(this,this.options.touchAction),ie(this,!0),y(this.options.recognizers,function(t){var e=this.add(new t[0](t[1]));t[2]&&e.recognizeWith(t[2]),t[3]&&e.requireFailure(t[3])},this)}function ie(t,e){var n,i=t.element;i.style&&(y(t.options.cssProps,function(r,o){n=N(i.style,o),e?(t.oldCssProps[n]=i.style[n],i.style[n]=r):i.style[n]=t.oldCssProps[n]||""}),e||(t.oldCssProps={}))}ne.prototype={set:function(t){return c(this.options,t),t.touchAction&&this.touchAction.update(),t.inputTarget&&(this.input.destroy(),this.input.target=t.inputTarget,this.input.init()),this},stop:function(t){this.session.stopped=t?2:1},recognize:function(t){var e=this.session;if(!e.stopped){var n;this.touchAction.preventDefaults(t);var i=this.recognizers,r=e.curRecognizer;(!r||r&&r.state&Lt)&&(r=e.curRecognizer=null);for(var o=0;o<i.length;)n=i[o],2===e.stopped||r&&n!=r&&!n.canRecognizeWith(r)?n.reset():n.recognize(t),!r&&n.state&(Xt|Ht|Ft)&&(r=e.curRecognizer=n),o++}},get:function(t){if(t instanceof Wt)return t;for(var e=this.recognizers,n=0;n<e.length;n++)if(e[n].options.event==t)return e[n];return null},add:function(t){if(g(t,"add",this))return this;var e=this.get(t.options.event);return e&&this.remove(e),this.recognizers.push(t),t.manager=this,this.touchAction.update(),t},remove:function(t){if(g(t,"remove",this))return this;if(t=this.get(t)){var e=this.recognizers,n=P(e,t);-1!==n&&(e.splice(n,1),this.touchAction.update())}return this},on:function(t,e){if(t!==u&&e!==u){var n=this.handlers;return y(M(t),function(t){n[t]=n[t]||[],n[t].push(e)}),this}},off:function(t,e){if(t!==u){var n=this.handlers;return y(M(t),function(t){e?n[t]&&n[t].splice(P(n[t],e),1):delete n[t]}),this}},emit:function(t,e){this.options.domEvents&&function(t,e){var n=s.createEvent("Event");n.initEvent(t,!0,!0),n.gesture=e,e.target.dispatchEvent(n)}(t,e);var n=this.handlers[t]&&this.handlers[t].slice();if(n&&n.length){e.type=t,e.preventDefault=function(){e.srcEvent.preventDefault()};for(var i=0;i<n.length;)n[i](e),i++}},destroy:function(){this.element&&ie(this,!1),this.handlers={},this.session={},this.input.destroy(),this.element=null}},c(ee,{INPUT_START:F,INPUT_MOVE:L,INPUT_END:U,INPUT_CANCEL:W,STATE_POSSIBLE:jt,STATE_BEGAN:Xt,STATE_CHANGED:Ht,STATE_ENDED:Ft,STATE_RECOGNIZED:Lt,STATE_CANCELLED:Ut,STATE_FAILED:32,DIRECTION_NONE:q,DIRECTION_LEFT:$,DIRECTION_RIGHT:B,DIRECTION_UP:V,DIRECTION_DOWN:G,DIRECTION_HORIZONTAL:Z,DIRECTION_VERTICAL:J,DIRECTION_ALL:K,Manager:ne,Input:et,TouchAction:kt,TouchInput:xt,MouseInput:pt,PointerEventInput:gt,TouchMouseInput:It,SingleTouchInput:Et,Recognizer:Wt,AttrRecognizer:Vt,Tap:te,Pan:Gt,Swipe:Qt,Pinch:Zt,Rotate:Kt,Press:Jt,on:w,off:I,each:y,merge:E,extend:T,assign:c,inherit:_,bindFn:S,prefixed:N}),(void 0!==o?o:"undefined"!=typeof self?self:{}).Hammer=ee,(i=function(){return ee}.call(e,n,e,t))===u||(t.exports=i)}(window,document)}]);