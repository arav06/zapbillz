(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["dashboard~invoice~invoices"],{dd9a:function(t,e,n){"use strict";n.d(e,"a",(function(){return q}));var i=n("2b0e"),o=n("c637"),r=n("a723"),s=n("9b76"),a=n("2326"),c=n("8690"),f=n("cf75"),l=n("fa73"),u=n("f0bd"),p=n("e863"),d=n("0056"),h=n("9bfa"),m="top-start",b="top-end",g="bottom-start",v="bottom-end",O="right-start",w="left-start",y=n("ca88"),j=n("6d40"),E=n("906c"),x=n("6b77"),k=n("7b1e"),C=n("d82f"),T=n("686b"),P=i["default"].extend({data:function(){return{listenForClickOut:!1}},watch:{listenForClickOut:function(t,e){t!==e&&(Object(x["a"])(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,d["z"]),t&&Object(x["b"])(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,d["z"]))}},beforeCreate:function(){this.clickOutElement=null,this.clickOutEventName=null},mounted:function(){this.clickOutElement||(this.clickOutElement=document),this.clickOutEventName||(this.clickOutEventName="click"),this.listenForClickOut&&Object(x["b"])(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,d["z"])},beforeDestroy:function(){Object(x["a"])(this.clickOutElement,this.clickOutEventName,this._clickOutHandler,d["z"])},methods:{isClickOut:function(t){return!Object(E["f"])(this.$el,t.target)},_clickOutHandler:function(t){this.clickOutHandler&&this.isClickOut(t)&&this.clickOutHandler(t)}}}),L=i["default"].extend({data:function(){return{listenForFocusIn:!1}},watch:{listenForFocusIn:function(t,e){t!==e&&(Object(x["a"])(this.focusInElement,"focusin",this._focusInHandler,d["z"]),t&&Object(x["b"])(this.focusInElement,"focusin",this._focusInHandler,d["z"]))}},beforeCreate:function(){this.focusInElement=null},mounted:function(){this.focusInElement||(this.focusInElement=document),this.listenForFocusIn&&Object(x["b"])(this.focusInElement,"focusin",this._focusInHandler,d["z"])},beforeDestroy:function(){Object(x["a"])(this.focusInElement,"focusin",this._focusInHandler,d["z"])},methods:{_focusInHandler:function(t){this.focusInHandler&&this.focusInHandler(t)}}}),N=n("90ef"),H=n("602d");function I(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function D(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?I(Object(n),!0).forEach((function(e){F(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function F(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var M=Object(x["e"])(o["c"],d["x"]),S=Object(x["e"])(o["c"],d["n"]),$=".dropdown form",_=[".dropdown-item",".b-dropdown-form"].map((function(t){return"".concat(t,":not(.disabled):not([disabled])")})).join(", "),B=function(t){return(t||[]).filter(E["s"])},W=Object(f["b"])(Object(C["l"])(D(D({},N["b"]),{},{boundary:Object(f["a"])([y["c"],r["j"]],"scrollParent"),disabled:Object(f["a"])(r["e"],!1),dropleft:Object(f["a"])(r["e"],!1),dropright:Object(f["a"])(r["e"],!1),dropup:Object(f["a"])(r["e"],!1),noFlip:Object(f["a"])(r["e"],!1),offset:Object(f["a"])(r["g"],0),popperOpts:Object(f["a"])(r["h"],{}),right:Object(f["a"])(r["e"],!1)})),o["c"]),A=i["default"].extend({mixins:[N["a"],H["a"],P,L],provide:function(){return{bvDropdown:this}},inject:{bvNavbar:{default:null}},props:W,data:function(){return{visible:!1,visibleChangePrevented:!1}},computed:{inNavbar:function(){return!Object(k["f"])(this.bvNavbar)},toggler:function(){var t=this.$refs.toggle;return t?t.$el||t:null},directionClass:function(){return this.dropup?"dropup":this.dropright?"dropright":this.dropleft?"dropleft":""},boundaryClass:function(){return"scrollParent"===this.boundary||this.inNavbar?"":"position-static"},hideDelay:function(){return this.inNavbar?p["e"]?300:50:0}},watch:{visible:function(t,e){if(this.visibleChangePrevented)this.visibleChangePrevented=!1;else if(t!==e){var n=t?d["w"]:d["o"],i=new j["a"](n,{cancelable:!0,vueTarget:this,target:this.$refs.menu,relatedTarget:null,componentId:this.safeId?this.safeId():this.id||null});if(this.emitEvent(i),i.defaultPrevented)return this.visibleChangePrevented=!0,this.visible=e,void this.$off(d["n"],this.focusToggler);t?this.showMenu():this.hideMenu()}},disabled:function(t,e){t!==e&&t&&this.visible&&(this.visible=!1)}},created:function(){this.$_popper=null,this.$_hideTimeout=null},deactivated:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper()},beforeDestroy:function(){this.visible=!1,this.whileOpenListen(!1),this.destroyPopper(),this.clearHideTimeout()},methods:{emitEvent:function(t){var e=t.type;this.emitOnRoot(Object(x["e"])(o["c"],e),t),this.$emit(e,t)},showMenu:function(){var t=this;if(!this.disabled){if(!this.inNavbar)if("undefined"===typeof u["a"])Object(T["a"])("Popper.js not found. Falling back to CSS positioning",o["c"]);else{var e=this.dropup&&this.right||this.split?this.$el:this.$refs.toggle;e=e.$el||e,this.createPopper(e)}this.emitOnRoot(M,this),this.whileOpenListen(!0),this.$nextTick((function(){t.focusMenu(),t.$emit(d["x"])}))}},hideMenu:function(){this.whileOpenListen(!1),this.emitOnRoot(S,this),this.$emit(d["n"]),this.destroyPopper()},createPopper:function(t){this.destroyPopper(),this.$_popper=new u["a"](t,this.$refs.menu,this.getPopperConfig())},destroyPopper:function(){this.$_popper&&this.$_popper.destroy(),this.$_popper=null},updatePopper:function(){try{this.$_popper.scheduleUpdate()}catch(t){}},clearHideTimeout:function(){clearTimeout(this.$_hideTimeout),this.$_hideTimeout=null},getPopperConfig:function(){var t=g;this.dropup?t=this.right?b:m:this.dropright?t=O:this.dropleft?t=w:this.right&&(t=v);var e={placement:t,modifiers:{offset:{offset:this.offset||0},flip:{enabled:!this.noFlip}}},n=this.boundary;return n&&(e.modifiers.preventOverflow={boundariesElement:n}),Object(C["i"])(e,this.popperOpts||{})},whileOpenListen:function(t){this.listenForClickOut=t,this.listenForFocusIn=t;var e=t?"$on":"$off";this.$root[e](M,this.rootCloseListener)},rootCloseListener:function(t){t!==this&&(this.visible=!1)},show:function(){var t=this;this.disabled||Object(E["x"])((function(){t.visible=!0}))},hide:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.disabled||(this.visible=!1,t&&this.$once(d["n"],this.focusToggler))},toggle:function(t){t=t||{};var e=t,n=e.type,i=e.keyCode;("click"===n||"keydown"===n&&-1!==[h["c"],h["h"],h["a"]].indexOf(i))&&(this.disabled?this.visible=!1:(this.$emit(d["y"],t),Object(x["f"])(t),this.visible?this.hide(!0):this.show()))},onMousedown:function(t){Object(x["f"])(t,{propagation:!1})},onKeydown:function(t){var e=t.keyCode;e===h["d"]?this.onEsc(t):e===h["a"]?this.focusNext(t,!1):e===h["i"]&&this.focusNext(t,!0)},onEsc:function(t){this.visible&&(this.visible=!1,Object(x["f"])(t),this.$once(d["n"],this.focusToggler))},onSplitClick:function(t){this.disabled?this.visible=!1:this.$emit(d["e"],t)},hideHandler:function(t){var e=this,n=t.target;!this.visible||Object(E["f"])(this.$refs.menu,n)||Object(E["f"])(this.toggler,n)||(this.clearHideTimeout(),this.$_hideTimeout=setTimeout((function(){return e.hide()}),this.hideDelay))},clickOutHandler:function(t){this.hideHandler(t)},focusInHandler:function(t){this.hideHandler(t)},focusNext:function(t,e){var n=this,i=t.target;!this.visible||t&&Object(E["e"])($,i)||(Object(x["f"])(t),this.$nextTick((function(){var t=n.getItems();if(!(t.length<1)){var o=t.indexOf(i);e&&o>0?o--:!e&&o<t.length-1&&o++,o<0&&(o=0),n.focusItem(o,t)}})))},focusItem:function(t,e){var n=e.find((function(e,n){return n===t}));Object(E["d"])(n)},getItems:function(){return B(Object(E["z"])(_,this.$refs.menu))},focusMenu:function(){Object(E["d"])(this.$refs.menu)},focusToggler:function(){var t=this;this.$nextTick((function(){Object(E["d"])(t.toggler)}))}}}),z=n("8c18"),R=n("1947");function V(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function U(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?V(Object(n),!0).forEach((function(e){Y(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):V(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function Y(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var K=Object(f["b"])(Object(C["l"])(U(U(U({},N["b"]),W),{},{block:Object(f["a"])(r["e"],!1),html:Object(f["a"])(r["j"]),lazy:Object(f["a"])(r["e"],!1),menuClass:Object(f["a"])(r["c"]),noCaret:Object(f["a"])(r["e"],!1),role:Object(f["a"])(r["j"],"menu"),size:Object(f["a"])(r["j"]),split:Object(f["a"])(r["e"],!1),splitButtonType:Object(f["a"])(r["j"],"button",(function(t){return Object(a["a"])(["button","submit","reset"],t)})),splitClass:Object(f["a"])(r["c"]),splitHref:Object(f["a"])(r["j"]),splitTo:Object(f["a"])(r["i"]),splitVariant:Object(f["a"])(r["j"]),text:Object(f["a"])(r["j"]),toggleAttrs:Object(f["a"])(r["h"],{}),toggleClass:Object(f["a"])(r["c"]),toggleTag:Object(f["a"])(r["j"],"button"),toggleText:Object(f["a"])(r["j"],"Toggle dropdown"),variant:Object(f["a"])(r["j"],"secondary")})),o["c"]),q=i["default"].extend({name:o["c"],mixins:[N["a"],A,z["a"]],props:K,computed:{dropdownClasses:function(){var t=this.block,e=this.split;return[this.directionClass,this.boundaryClass,{show:this.visible,"btn-group":e||!t,"d-flex":t&&e}]},menuClasses:function(){return[this.menuClass,{"dropdown-menu-right":this.right,show:this.visible}]},toggleClasses:function(){var t=this.split;return[this.toggleClass,{"dropdown-toggle-split":t,"dropdown-toggle-no-caret":this.noCaret&&!t}]}},render:function(t){var e=this.visible,n=this.variant,i=this.size,o=this.block,r=this.disabled,a=this.split,f=this.role,u=this.hide,p=this.toggle,d={variant:n,size:i,block:o,disabled:r},h=this.normalizeSlot(s["a"]),m=this.hasNormalizedSlot(s["a"])?{}:Object(c["a"])(this.html,this.text),b=t();if(a){var g=this.splitTo,v=this.splitHref,O=this.splitButtonType,w=U(U({},d),{},{variant:this.splitVariant||n});g?w.to=g:v?w.href=v:O&&(w.type=O),b=t(R["a"],{class:this.splitClass,attrs:{id:this.safeId("_BV_button_")},props:w,domProps:m,on:{click:this.onSplitClick},ref:"button"},h),h=[t("span",{class:["sr-only"]},[this.toggleText])],m={}}var y=["menu","listbox","tree","grid","dialog"],j=t(R["a"],{staticClass:"dropdown-toggle",class:this.toggleClasses,attrs:U(U({},this.toggleAttrs),{},{id:this.safeId("_BV_toggle_"),"aria-haspopup":y.includes(f)?f:"false","aria-expanded":Object(l["c"])(e)}),props:U(U({},d),{},{tag:this.toggleTag,block:o&&!a}),domProps:m,on:{mousedown:this.onMousedown,click:p,keydown:p},ref:"toggle"},h),E=t("ul",{staticClass:"dropdown-menu",class:this.menuClasses,attrs:{role:f,tabindex:"-1","aria-labelledby":this.safeId(a?"_BV_button_":"_BV_toggle_")},on:{keydown:this.onKeydown},ref:"menu"},[!this.lazy||e?this.normalizeSlot(s["b"],{hide:u}):t()]);return t("div",{staticClass:"dropdown b-dropdown",class:this.dropdownClasses,attrs:{id:this.safeId()}},[b,j,E])}})},f0bd:function(t,e,n){"use strict";(function(t){
/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.16.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var n="undefined"!==typeof window&&"undefined"!==typeof document&&"undefined"!==typeof navigator,i=function(){for(var t=["Edge","Trident","Firefox"],e=0;e<t.length;e+=1)if(n&&navigator.userAgent.indexOf(t[e])>=0)return 1;return 0}();function o(t){var e=!1;return function(){e||(e=!0,window.Promise.resolve().then((function(){e=!1,t()})))}}function r(t){var e=!1;return function(){e||(e=!0,setTimeout((function(){e=!1,t()}),i))}}var s=n&&window.Promise,a=s?o:r;function c(t){var e={};return t&&"[object Function]"===e.toString.call(t)}function f(t,e){if(1!==t.nodeType)return[];var n=t.ownerDocument.defaultView,i=n.getComputedStyle(t,null);return e?i[e]:i}function l(t){return"HTML"===t.nodeName?t:t.parentNode||t.host}function u(t){if(!t)return document.body;switch(t.nodeName){case"HTML":case"BODY":return t.ownerDocument.body;case"#document":return t.body}var e=f(t),n=e.overflow,i=e.overflowX,o=e.overflowY;return/(auto|scroll|overlay)/.test(n+o+i)?t:u(l(t))}function p(t){return t&&t.referenceNode?t.referenceNode:t}var d=n&&!(!window.MSInputMethodContext||!document.documentMode),h=n&&/MSIE 10/.test(navigator.userAgent);function m(t){return 11===t?d:10===t?h:d||h}function b(t){if(!t)return document.documentElement;var e=m(10)?document.body:null,n=t.offsetParent||null;while(n===e&&t.nextElementSibling)n=(t=t.nextElementSibling).offsetParent;var i=n&&n.nodeName;return i&&"BODY"!==i&&"HTML"!==i?-1!==["TH","TD","TABLE"].indexOf(n.nodeName)&&"static"===f(n,"position")?b(n):n:t?t.ownerDocument.documentElement:document.documentElement}function g(t){var e=t.nodeName;return"BODY"!==e&&("HTML"===e||b(t.firstElementChild)===t)}function v(t){return null!==t.parentNode?v(t.parentNode):t}function O(t,e){if(!t||!t.nodeType||!e||!e.nodeType)return document.documentElement;var n=t.compareDocumentPosition(e)&Node.DOCUMENT_POSITION_FOLLOWING,i=n?t:e,o=n?e:t,r=document.createRange();r.setStart(i,0),r.setEnd(o,0);var s=r.commonAncestorContainer;if(t!==s&&e!==s||i.contains(o))return g(s)?s:b(s);var a=v(t);return a.host?O(a.host,e):O(t,v(e).host)}function w(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"top",n="top"===e?"scrollTop":"scrollLeft",i=t.nodeName;if("BODY"===i||"HTML"===i){var o=t.ownerDocument.documentElement,r=t.ownerDocument.scrollingElement||o;return r[n]}return t[n]}function y(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=w(e,"top"),o=w(e,"left"),r=n?-1:1;return t.top+=i*r,t.bottom+=i*r,t.left+=o*r,t.right+=o*r,t}function j(t,e){var n="x"===e?"Left":"Top",i="Left"===n?"Right":"Bottom";return parseFloat(t["border"+n+"Width"])+parseFloat(t["border"+i+"Width"])}function E(t,e,n,i){return Math.max(e["offset"+t],e["scroll"+t],n["client"+t],n["offset"+t],n["scroll"+t],m(10)?parseInt(n["offset"+t])+parseInt(i["margin"+("Height"===t?"Top":"Left")])+parseInt(i["margin"+("Height"===t?"Bottom":"Right")]):0)}function x(t){var e=t.body,n=t.documentElement,i=m(10)&&getComputedStyle(n);return{height:E("Height",e,n,i),width:E("Width",e,n,i)}}var k=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},C=function(){function t(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}return function(e,n,i){return n&&t(e.prototype,n),i&&t(e,i),e}}(),T=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t},P=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(t[i]=n[i])}return t};function L(t){return P({},t,{right:t.left+t.width,bottom:t.top+t.height})}function N(t){var e={};try{if(m(10)){e=t.getBoundingClientRect();var n=w(t,"top"),i=w(t,"left");e.top+=n,e.left+=i,e.bottom+=n,e.right+=i}else e=t.getBoundingClientRect()}catch(p){}var o={left:e.left,top:e.top,width:e.right-e.left,height:e.bottom-e.top},r="HTML"===t.nodeName?x(t.ownerDocument):{},s=r.width||t.clientWidth||o.width,a=r.height||t.clientHeight||o.height,c=t.offsetWidth-s,l=t.offsetHeight-a;if(c||l){var u=f(t);c-=j(u,"x"),l-=j(u,"y"),o.width-=c,o.height-=l}return L(o)}function H(t,e){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2],i=m(10),o="HTML"===e.nodeName,r=N(t),s=N(e),a=u(t),c=f(e),l=parseFloat(c.borderTopWidth),p=parseFloat(c.borderLeftWidth);n&&o&&(s.top=Math.max(s.top,0),s.left=Math.max(s.left,0));var d=L({top:r.top-s.top-l,left:r.left-s.left-p,width:r.width,height:r.height});if(d.marginTop=0,d.marginLeft=0,!i&&o){var h=parseFloat(c.marginTop),b=parseFloat(c.marginLeft);d.top-=l-h,d.bottom-=l-h,d.left-=p-b,d.right-=p-b,d.marginTop=h,d.marginLeft=b}return(i&&!n?e.contains(a):e===a&&"BODY"!==a.nodeName)&&(d=y(d,e)),d}function I(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=t.ownerDocument.documentElement,i=H(t,n),o=Math.max(n.clientWidth,window.innerWidth||0),r=Math.max(n.clientHeight,window.innerHeight||0),s=e?0:w(n),a=e?0:w(n,"left"),c={top:s-i.top+i.marginTop,left:a-i.left+i.marginLeft,width:o,height:r};return L(c)}function D(t){var e=t.nodeName;if("BODY"===e||"HTML"===e)return!1;if("fixed"===f(t,"position"))return!0;var n=l(t);return!!n&&D(n)}function F(t){if(!t||!t.parentElement||m())return document.documentElement;var e=t.parentElement;while(e&&"none"===f(e,"transform"))e=e.parentElement;return e||document.documentElement}function M(t,e,n,i){var o=arguments.length>4&&void 0!==arguments[4]&&arguments[4],r={top:0,left:0},s=o?F(t):O(t,p(e));if("viewport"===i)r=I(s,o);else{var a=void 0;"scrollParent"===i?(a=u(l(e)),"BODY"===a.nodeName&&(a=t.ownerDocument.documentElement)):a="window"===i?t.ownerDocument.documentElement:i;var c=H(a,s,o);if("HTML"!==a.nodeName||D(s))r=c;else{var f=x(t.ownerDocument),d=f.height,h=f.width;r.top+=c.top-c.marginTop,r.bottom=d+c.top,r.left+=c.left-c.marginLeft,r.right=h+c.left}}n=n||0;var m="number"===typeof n;return r.left+=m?n:n.left||0,r.top+=m?n:n.top||0,r.right-=m?n:n.right||0,r.bottom-=m?n:n.bottom||0,r}function S(t){var e=t.width,n=t.height;return e*n}function $(t,e,n,i,o){var r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;if(-1===t.indexOf("auto"))return t;var s=M(n,i,r,o),a={top:{width:s.width,height:e.top-s.top},right:{width:s.right-e.right,height:s.height},bottom:{width:s.width,height:s.bottom-e.bottom},left:{width:e.left-s.left,height:s.height}},c=Object.keys(a).map((function(t){return P({key:t},a[t],{area:S(a[t])})})).sort((function(t,e){return e.area-t.area})),f=c.filter((function(t){var e=t.width,i=t.height;return e>=n.clientWidth&&i>=n.clientHeight})),l=f.length>0?f[0].key:c[0].key,u=t.split("-")[1];return l+(u?"-"+u:"")}function _(t,e,n){var i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:null,o=i?F(e):O(e,p(n));return H(n,o,i)}function B(t){var e=t.ownerDocument.defaultView,n=e.getComputedStyle(t),i=parseFloat(n.marginTop||0)+parseFloat(n.marginBottom||0),o=parseFloat(n.marginLeft||0)+parseFloat(n.marginRight||0),r={width:t.offsetWidth+o,height:t.offsetHeight+i};return r}function W(t){var e={left:"right",right:"left",bottom:"top",top:"bottom"};return t.replace(/left|right|bottom|top/g,(function(t){return e[t]}))}function A(t,e,n){n=n.split("-")[0];var i=B(t),o={width:i.width,height:i.height},r=-1!==["right","left"].indexOf(n),s=r?"top":"left",a=r?"left":"top",c=r?"height":"width",f=r?"width":"height";return o[s]=e[s]+e[c]/2-i[c]/2,o[a]=n===a?e[a]-i[f]:e[W(a)],o}function z(t,e){return Array.prototype.find?t.find(e):t.filter(e)[0]}function R(t,e,n){if(Array.prototype.findIndex)return t.findIndex((function(t){return t[e]===n}));var i=z(t,(function(t){return t[e]===n}));return t.indexOf(i)}function V(t,e,n){var i=void 0===n?t:t.slice(0,R(t,"name",n));return i.forEach((function(t){t["function"]&&console.warn("`modifier.function` is deprecated, use `modifier.fn`!");var n=t["function"]||t.fn;t.enabled&&c(n)&&(e.offsets.popper=L(e.offsets.popper),e.offsets.reference=L(e.offsets.reference),e=n(e,t))})),e}function U(){if(!this.state.isDestroyed){var t={instance:this,styles:{},arrowStyles:{},attributes:{},flipped:!1,offsets:{}};t.offsets.reference=_(this.state,this.popper,this.reference,this.options.positionFixed),t.placement=$(this.options.placement,t.offsets.reference,this.popper,this.reference,this.options.modifiers.flip.boundariesElement,this.options.modifiers.flip.padding),t.originalPlacement=t.placement,t.positionFixed=this.options.positionFixed,t.offsets.popper=A(this.popper,t.offsets.reference,t.placement),t.offsets.popper.position=this.options.positionFixed?"fixed":"absolute",t=V(this.modifiers,t),this.state.isCreated?this.options.onUpdate(t):(this.state.isCreated=!0,this.options.onCreate(t))}}function Y(t,e){return t.some((function(t){var n=t.name,i=t.enabled;return i&&n===e}))}function K(t){for(var e=[!1,"ms","Webkit","Moz","O"],n=t.charAt(0).toUpperCase()+t.slice(1),i=0;i<e.length;i++){var o=e[i],r=o?""+o+n:t;if("undefined"!==typeof document.body.style[r])return r}return null}function q(){return this.state.isDestroyed=!0,Y(this.modifiers,"applyStyle")&&(this.popper.removeAttribute("x-placement"),this.popper.style.position="",this.popper.style.top="",this.popper.style.left="",this.popper.style.right="",this.popper.style.bottom="",this.popper.style.willChange="",this.popper.style[K("transform")]=""),this.disableEventListeners(),this.options.removeOnDestroy&&this.popper.parentNode.removeChild(this.popper),this}function G(t){var e=t.ownerDocument;return e?e.defaultView:window}function J(t,e,n,i){var o="BODY"===t.nodeName,r=o?t.ownerDocument.defaultView:t;r.addEventListener(e,n,{passive:!0}),o||J(u(r.parentNode),e,n,i),i.push(r)}function X(t,e,n,i){n.updateBound=i,G(t).addEventListener("resize",n.updateBound,{passive:!0});var o=u(t);return J(o,"scroll",n.updateBound,n.scrollParents),n.scrollElement=o,n.eventsEnabled=!0,n}function Q(){this.state.eventsEnabled||(this.state=X(this.reference,this.options,this.state,this.scheduleUpdate))}function Z(t,e){return G(t).removeEventListener("resize",e.updateBound),e.scrollParents.forEach((function(t){t.removeEventListener("scroll",e.updateBound)})),e.updateBound=null,e.scrollParents=[],e.scrollElement=null,e.eventsEnabled=!1,e}function tt(){this.state.eventsEnabled&&(cancelAnimationFrame(this.scheduleUpdate),this.state=Z(this.reference,this.state))}function et(t){return""!==t&&!isNaN(parseFloat(t))&&isFinite(t)}function nt(t,e){Object.keys(e).forEach((function(n){var i="";-1!==["width","height","top","right","bottom","left"].indexOf(n)&&et(e[n])&&(i="px"),t.style[n]=e[n]+i}))}function it(t,e){Object.keys(e).forEach((function(n){var i=e[n];!1!==i?t.setAttribute(n,e[n]):t.removeAttribute(n)}))}function ot(t){return nt(t.instance.popper,t.styles),it(t.instance.popper,t.attributes),t.arrowElement&&Object.keys(t.arrowStyles).length&&nt(t.arrowElement,t.arrowStyles),t}function rt(t,e,n,i,o){var r=_(o,e,t,n.positionFixed),s=$(n.placement,r,e,t,n.modifiers.flip.boundariesElement,n.modifiers.flip.padding);return e.setAttribute("x-placement",s),nt(e,{position:n.positionFixed?"fixed":"absolute"}),n}function st(t,e){var n=t.offsets,i=n.popper,o=n.reference,r=Math.round,s=Math.floor,a=function(t){return t},c=r(o.width),f=r(i.width),l=-1!==["left","right"].indexOf(t.placement),u=-1!==t.placement.indexOf("-"),p=c%2===f%2,d=c%2===1&&f%2===1,h=e?l||u||p?r:s:a,m=e?r:a;return{left:h(d&&!u&&e?i.left-1:i.left),top:m(i.top),bottom:m(i.bottom),right:h(i.right)}}var at=n&&/Firefox/i.test(navigator.userAgent);function ct(t,e){var n=e.x,i=e.y,o=t.offsets.popper,r=z(t.instance.modifiers,(function(t){return"applyStyle"===t.name})).gpuAcceleration;void 0!==r&&console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");var s=void 0!==r?r:e.gpuAcceleration,a=b(t.instance.popper),c=N(a),f={position:o.position},l=st(t,window.devicePixelRatio<2||!at),u="bottom"===n?"top":"bottom",p="right"===i?"left":"right",d=K("transform"),h=void 0,m=void 0;if(m="bottom"===u?"HTML"===a.nodeName?-a.clientHeight+l.bottom:-c.height+l.bottom:l.top,h="right"===p?"HTML"===a.nodeName?-a.clientWidth+l.right:-c.width+l.right:l.left,s&&d)f[d]="translate3d("+h+"px, "+m+"px, 0)",f[u]=0,f[p]=0,f.willChange="transform";else{var g="bottom"===u?-1:1,v="right"===p?-1:1;f[u]=m*g,f[p]=h*v,f.willChange=u+", "+p}var O={"x-placement":t.placement};return t.attributes=P({},O,t.attributes),t.styles=P({},f,t.styles),t.arrowStyles=P({},t.offsets.arrow,t.arrowStyles),t}function ft(t,e,n){var i=z(t,(function(t){var n=t.name;return n===e})),o=!!i&&t.some((function(t){return t.name===n&&t.enabled&&t.order<i.order}));if(!o){var r="`"+e+"`",s="`"+n+"`";console.warn(s+" modifier is required by "+r+" modifier in order to work, be sure to include it before "+r+"!")}return o}function lt(t,e){var n;if(!ft(t.instance.modifiers,"arrow","keepTogether"))return t;var i=e.element;if("string"===typeof i){if(i=t.instance.popper.querySelector(i),!i)return t}else if(!t.instance.popper.contains(i))return console.warn("WARNING: `arrow.element` must be child of its popper element!"),t;var o=t.placement.split("-")[0],r=t.offsets,s=r.popper,a=r.reference,c=-1!==["left","right"].indexOf(o),l=c?"height":"width",u=c?"Top":"Left",p=u.toLowerCase(),d=c?"left":"top",h=c?"bottom":"right",m=B(i)[l];a[h]-m<s[p]&&(t.offsets.popper[p]-=s[p]-(a[h]-m)),a[p]+m>s[h]&&(t.offsets.popper[p]+=a[p]+m-s[h]),t.offsets.popper=L(t.offsets.popper);var b=a[p]+a[l]/2-m/2,g=f(t.instance.popper),v=parseFloat(g["margin"+u]),O=parseFloat(g["border"+u+"Width"]),w=b-t.offsets.popper[p]-v-O;return w=Math.max(Math.min(s[l]-m,w),0),t.arrowElement=i,t.offsets.arrow=(n={},T(n,p,Math.round(w)),T(n,d,""),n),t}function ut(t){return"end"===t?"start":"start"===t?"end":t}var pt=["auto-start","auto","auto-end","top-start","top","top-end","right-start","right","right-end","bottom-end","bottom","bottom-start","left-end","left","left-start"],dt=pt.slice(3);function ht(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1],n=dt.indexOf(t),i=dt.slice(n+1).concat(dt.slice(0,n));return e?i.reverse():i}var mt={FLIP:"flip",CLOCKWISE:"clockwise",COUNTERCLOCKWISE:"counterclockwise"};function bt(t,e){if(Y(t.instance.modifiers,"inner"))return t;if(t.flipped&&t.placement===t.originalPlacement)return t;var n=M(t.instance.popper,t.instance.reference,e.padding,e.boundariesElement,t.positionFixed),i=t.placement.split("-")[0],o=W(i),r=t.placement.split("-")[1]||"",s=[];switch(e.behavior){case mt.FLIP:s=[i,o];break;case mt.CLOCKWISE:s=ht(i);break;case mt.COUNTERCLOCKWISE:s=ht(i,!0);break;default:s=e.behavior}return s.forEach((function(a,c){if(i!==a||s.length===c+1)return t;i=t.placement.split("-")[0],o=W(i);var f=t.offsets.popper,l=t.offsets.reference,u=Math.floor,p="left"===i&&u(f.right)>u(l.left)||"right"===i&&u(f.left)<u(l.right)||"top"===i&&u(f.bottom)>u(l.top)||"bottom"===i&&u(f.top)<u(l.bottom),d=u(f.left)<u(n.left),h=u(f.right)>u(n.right),m=u(f.top)<u(n.top),b=u(f.bottom)>u(n.bottom),g="left"===i&&d||"right"===i&&h||"top"===i&&m||"bottom"===i&&b,v=-1!==["top","bottom"].indexOf(i),O=!!e.flipVariations&&(v&&"start"===r&&d||v&&"end"===r&&h||!v&&"start"===r&&m||!v&&"end"===r&&b),w=!!e.flipVariationsByContent&&(v&&"start"===r&&h||v&&"end"===r&&d||!v&&"start"===r&&b||!v&&"end"===r&&m),y=O||w;(p||g||y)&&(t.flipped=!0,(p||g)&&(i=s[c+1]),y&&(r=ut(r)),t.placement=i+(r?"-"+r:""),t.offsets.popper=P({},t.offsets.popper,A(t.instance.popper,t.offsets.reference,t.placement)),t=V(t.instance.modifiers,t,"flip"))})),t}function gt(t){var e=t.offsets,n=e.popper,i=e.reference,o=t.placement.split("-")[0],r=Math.floor,s=-1!==["top","bottom"].indexOf(o),a=s?"right":"bottom",c=s?"left":"top",f=s?"width":"height";return n[a]<r(i[c])&&(t.offsets.popper[c]=r(i[c])-n[f]),n[c]>r(i[a])&&(t.offsets.popper[c]=r(i[a])),t}function vt(t,e,n,i){var o=t.match(/((?:\-|\+)?\d*\.?\d*)(.*)/),r=+o[1],s=o[2];if(!r)return t;if(0===s.indexOf("%")){var a=void 0;switch(s){case"%p":a=n;break;case"%":case"%r":default:a=i}var c=L(a);return c[e]/100*r}if("vh"===s||"vw"===s){var f=void 0;return f="vh"===s?Math.max(document.documentElement.clientHeight,window.innerHeight||0):Math.max(document.documentElement.clientWidth,window.innerWidth||0),f/100*r}return r}function Ot(t,e,n,i){var o=[0,0],r=-1!==["right","left"].indexOf(i),s=t.split(/(\+|\-)/).map((function(t){return t.trim()})),a=s.indexOf(z(s,(function(t){return-1!==t.search(/,|\s/)})));s[a]&&-1===s[a].indexOf(",")&&console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");var c=/\s*,\s*|\s+/,f=-1!==a?[s.slice(0,a).concat([s[a].split(c)[0]]),[s[a].split(c)[1]].concat(s.slice(a+1))]:[s];return f=f.map((function(t,i){var o=(1===i?!r:r)?"height":"width",s=!1;return t.reduce((function(t,e){return""===t[t.length-1]&&-1!==["+","-"].indexOf(e)?(t[t.length-1]=e,s=!0,t):s?(t[t.length-1]+=e,s=!1,t):t.concat(e)}),[]).map((function(t){return vt(t,o,e,n)}))})),f.forEach((function(t,e){t.forEach((function(n,i){et(n)&&(o[e]+=n*("-"===t[i-1]?-1:1))}))})),o}function wt(t,e){var n=e.offset,i=t.placement,o=t.offsets,r=o.popper,s=o.reference,a=i.split("-")[0],c=void 0;return c=et(+n)?[+n,0]:Ot(n,r,s,a),"left"===a?(r.top+=c[0],r.left-=c[1]):"right"===a?(r.top+=c[0],r.left+=c[1]):"top"===a?(r.left+=c[0],r.top-=c[1]):"bottom"===a&&(r.left+=c[0],r.top+=c[1]),t.popper=r,t}function yt(t,e){var n=e.boundariesElement||b(t.instance.popper);t.instance.reference===n&&(n=b(n));var i=K("transform"),o=t.instance.popper.style,r=o.top,s=o.left,a=o[i];o.top="",o.left="",o[i]="";var c=M(t.instance.popper,t.instance.reference,e.padding,n,t.positionFixed);o.top=r,o.left=s,o[i]=a,e.boundaries=c;var f=e.priority,l=t.offsets.popper,u={primary:function(t){var n=l[t];return l[t]<c[t]&&!e.escapeWithReference&&(n=Math.max(l[t],c[t])),T({},t,n)},secondary:function(t){var n="right"===t?"left":"top",i=l[n];return l[t]>c[t]&&!e.escapeWithReference&&(i=Math.min(l[n],c[t]-("right"===t?l.width:l.height))),T({},n,i)}};return f.forEach((function(t){var e=-1!==["left","top"].indexOf(t)?"primary":"secondary";l=P({},l,u[e](t))})),t.offsets.popper=l,t}function jt(t){var e=t.placement,n=e.split("-")[0],i=e.split("-")[1];if(i){var o=t.offsets,r=o.reference,s=o.popper,a=-1!==["bottom","top"].indexOf(n),c=a?"left":"top",f=a?"width":"height",l={start:T({},c,r[c]),end:T({},c,r[c]+r[f]-s[f])};t.offsets.popper=P({},s,l[i])}return t}function Et(t){if(!ft(t.instance.modifiers,"hide","preventOverflow"))return t;var e=t.offsets.reference,n=z(t.instance.modifiers,(function(t){return"preventOverflow"===t.name})).boundaries;if(e.bottom<n.top||e.left>n.right||e.top>n.bottom||e.right<n.left){if(!0===t.hide)return t;t.hide=!0,t.attributes["x-out-of-boundaries"]=""}else{if(!1===t.hide)return t;t.hide=!1,t.attributes["x-out-of-boundaries"]=!1}return t}function xt(t){var e=t.placement,n=e.split("-")[0],i=t.offsets,o=i.popper,r=i.reference,s=-1!==["left","right"].indexOf(n),a=-1===["top","left"].indexOf(n);return o[s?"left":"top"]=r[n]-(a?o[s?"width":"height"]:0),t.placement=W(e),t.offsets.popper=L(o),t}var kt={shift:{order:100,enabled:!0,fn:jt},offset:{order:200,enabled:!0,fn:wt,offset:0},preventOverflow:{order:300,enabled:!0,fn:yt,priority:["left","right","top","bottom"],padding:5,boundariesElement:"scrollParent"},keepTogether:{order:400,enabled:!0,fn:gt},arrow:{order:500,enabled:!0,fn:lt,element:"[x-arrow]"},flip:{order:600,enabled:!0,fn:bt,behavior:"flip",padding:5,boundariesElement:"viewport",flipVariations:!1,flipVariationsByContent:!1},inner:{order:700,enabled:!1,fn:xt},hide:{order:800,enabled:!0,fn:Et},computeStyle:{order:850,enabled:!0,fn:ct,gpuAcceleration:!0,x:"bottom",y:"right"},applyStyle:{order:900,enabled:!0,fn:ot,onLoad:rt,gpuAcceleration:void 0}},Ct={placement:"bottom",positionFixed:!1,eventsEnabled:!0,removeOnDestroy:!1,onCreate:function(){},onUpdate:function(){},modifiers:kt},Tt=function(){function t(e,n){var i=this,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};k(this,t),this.scheduleUpdate=function(){return requestAnimationFrame(i.update)},this.update=a(this.update.bind(this)),this.options=P({},t.Defaults,o),this.state={isDestroyed:!1,isCreated:!1,scrollParents:[]},this.reference=e&&e.jquery?e[0]:e,this.popper=n&&n.jquery?n[0]:n,this.options.modifiers={},Object.keys(P({},t.Defaults.modifiers,o.modifiers)).forEach((function(e){i.options.modifiers[e]=P({},t.Defaults.modifiers[e]||{},o.modifiers?o.modifiers[e]:{})})),this.modifiers=Object.keys(this.options.modifiers).map((function(t){return P({name:t},i.options.modifiers[t])})).sort((function(t,e){return t.order-e.order})),this.modifiers.forEach((function(t){t.enabled&&c(t.onLoad)&&t.onLoad(i.reference,i.popper,i.options,t,i.state)})),this.update();var r=this.options.eventsEnabled;r&&this.enableEventListeners(),this.state.eventsEnabled=r}return C(t,[{key:"update",value:function(){return U.call(this)}},{key:"destroy",value:function(){return q.call(this)}},{key:"enableEventListeners",value:function(){return Q.call(this)}},{key:"disableEventListeners",value:function(){return tt.call(this)}}]),t}();Tt.Utils=("undefined"!==typeof window?window:t).PopperUtils,Tt.placements=pt,Tt.Defaults=Ct,e["a"]=Tt}).call(this,n("c8ba"))}}]);
//# sourceMappingURL=dashboard~invoice~invoices.cbe98785.js.map