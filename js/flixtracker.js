/*redis*/
if (typeof FlixjQ == 'undefined') {  
	(function(e,t){function _(e){var t=M[e]={};v.each(e.split(y),function(e,n){t[n]=true});return t}function H(e,n,r){if(r===t&&e.nodeType===1){var i="data-"+n.replace(P,"-$1").toLowerCase();r=e.getAttribute(i);if(typeof r==="string"){try{r=r==="true"?true:r==="false"?false:r==="null"?null:+r+""===r?+r:D.test(r)?v.parseJSON(r):r}catch(s){}v.data(e,n,r)}else{r=t}}return r}function B(e){var t;for(t in e){if(t==="data"&&v.isEmptyObject(e[t])){continue}if(t!=="toJSON"){return false}}return true}function et(){return false}function tt(){return true}function ut(e){return!e||!e.parentNode||e.parentNode.nodeType===11}function at(e,t){do{e=e[t]}while(e&&e.nodeType!==1);return e}function ft(e,t,n){t=t||0;if(v.isFunction(t)){return v.grep(e,function(e,r){var i=!!t.call(e,r,e);return i===n})}else if(t.nodeType){return v.grep(e,function(e,r){return e===t===n})}else if(typeof t==="string"){var r=v.grep(e,function(e){return e.nodeType===1});if(it.test(t)){return v.filter(t,r,!n)}else{t=v.filter(t,r)}}return v.grep(e,function(e,r){return v.inArray(e,t)>=0===n})}function lt(e){var t=ct.split("|"),n=e.createDocumentFragment();if(n.createElement){while(t.length){n.createElement(t.pop())}}return n}function Lt(e,t){return e.getElementsByTagName(t)[0]||e.appendChild(e.ownerDocument.createElement(t))}function At(e,t){if(t.nodeType!==1||!v.hasData(e)){return}var n,r,i,s=v._data(e),o=v._data(t,s),u=s.events;if(u){delete o.handle;o.events={};for(n in u){for(r=0,i=u[n].length;r<i;r++){v.event.add(t,n,u[n][r])}}}if(o.data){o.data=v.extend({},o.data)}}function Ot(e,t){var n;if(t.nodeType!==1){return}if(t.clearAttributes){t.clearAttributes()}if(t.mergeAttributes){t.mergeAttributes(e)}n=t.nodeName.toLowerCase();if(n==="object"){if(t.parentNode){t.outerHTML=e.outerHTML}if(v.support.html5Clone&&e.innerHTML&&!v.trim(t.innerHTML)){t.innerHTML=e.innerHTML}}else if(n==="input"&&Et.test(e.type)){t.defaultChecked=t.checked=e.checked;if(t.value!==e.value){t.value=e.value}}else if(n==="option"){t.selected=e.defaultSelected}else if(n==="input"||n==="textarea"){t.defaultValue=e.defaultValue}else if(n==="script"&&t.text!==e.text){t.text=e.text}t.removeAttribute(v.expando)}function Mt(e){if(typeof e.getElementsByTagName!=="undefined"){return e.getElementsByTagName("*")}else if(typeof e.querySelectorAll!=="undefined"){return e.querySelectorAll("*")}else{return[]}}function _t(e){if(Et.test(e.type)){e.defaultChecked=e.checked}}function Qt(e,t){if(t in e){return t}var n=t.charAt(0).toUpperCase()+t.slice(1),r=t,i=Jt.length;while(i--){t=Jt[i]+n;if(t in e){return t}}return r}function Gt(e,t){e=t||e;return v.css(e,"display")==="none"||!v.contains(e.ownerDocument,e)}function Yt(e,t){var n,r,i=[],s=0,o=e.length;for(;s<o;s++){n=e[s];if(!n.style){continue}i[s]=v._data(n,"olddisplay");if(t){if(!i[s]&&n.style.display==="none"){n.style.display=""}if(n.style.display===""&&Gt(n)){i[s]=v._data(n,"olddisplay",nn(n.nodeName))}}else{r=Dt(n,"display");if(!i[s]&&r!=="none"){v._data(n,"olddisplay",r)}}}for(s=0;s<o;s++){n=e[s];if(!n.style){continue}if(!t||n.style.display==="none"||n.style.display===""){n.style.display=t?i[s]||"":"none"}}return e}function Zt(e,t,n){var r=Rt.exec(t);return r?Math.max(0,r[1]-(n||0))+(r[2]||"px"):t}function en(e,t,n,r){var i=n===(r?"border":"content")?4:t==="width"?1:0,s=0;for(;i<4;i+=2){if(n==="margin"){s+=v.css(e,n+$t[i],true)}if(r){if(n==="content"){s-=parseFloat(Dt(e,"padding"+$t[i]))||0}if(n!=="margin"){s-=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0}}else{s+=parseFloat(Dt(e,"padding"+$t[i]))||0;if(n!=="padding"){s+=parseFloat(Dt(e,"border"+$t[i]+"Width"))||0}}}return s}function tn(e,t,n){var r=t==="width"?e.offsetWidth:e.offsetHeight,i=true,s=v.support.boxSizing&&v.css(e,"boxSizing")==="border-box";if(r<=0||r==null){r=Dt(e,t);if(r<0||r==null){r=e.style[t]}if(Ut.test(r)){return r}i=s&&(v.support.boxSizingReliable||r===e.style[t]);r=parseFloat(r)||0}return r+en(e,t,n||(s?"border":"content"),i)+"px"}function nn(e){if(Wt[e]){return Wt[e]}var t=v("<"+e+">").appendTo(i.body),n=t.css("display");t.remove();if(n==="none"||n===""){Pt=i.body.appendChild(Pt||v.extend(i.createElement("iframe"),{frameBorder:0,width:0,height:0}));if(!Ht||!Pt.createElement){Ht=(Pt.contentWindow||Pt.contentDocument).document;Ht.write("<!doctype html><html><body>");Ht.close()}t=Ht.body.appendChild(Ht.createElement(e));n=Dt(t,"display");i.body.removeChild(Pt)}Wt[e]=n;return n}function fn(e,t,n,r){var i;if(v.isArray(t)){v.each(t,function(t,i){if(n||sn.test(e)){r(e,i)}else{fn(e+"["+(typeof i==="object"?t:"")+"]",i,n,r)}})}else if(!n&&v.type(t)==="object"){for(i in t){fn(e+"["+i+"]",t[i],n,r)}}else{r(e,t)}}function Cn(e){return function(t,n){if(typeof t!=="string"){n=t;t="*"}var r,i,s,o=t.toLowerCase().split(y),u=0,a=o.length;if(v.isFunction(n)){for(;u<a;u++){r=o[u];s=/^\+/.test(r);if(s){r=r.substr(1)||"*"}i=e[r]=e[r]||[];i[s?"unshift":"push"](n)}}}}function kn(e,n,r,i,s,o){s=s||n.dataTypes[0];o=o||{};o[s]=true;var u,a=e[s],f=0,l=a?a.length:0,c=e===Sn;for(;f<l&&(c||!u);f++){u=a[f](n,r,i);if(typeof u==="string"){if(!c||o[u]){u=t}else{n.dataTypes.unshift(u);u=kn(e,n,r,i,u,o)}}}if((c||!u)&&!o["*"]){u=kn(e,n,r,i,"*",o)}return u}function Ln(e,n){var r,i,s=v.ajaxSettings.flatOptions||{};for(r in n){if(n[r]!==t){(s[r]?e:i||(i={}))[r]=n[r]}}if(i){v.extend(true,e,i)}}function An(e,n,r){var i,s,o,u,a=e.contents,f=e.dataTypes,l=e.responseFields;for(s in l){if(s in r){n[l[s]]=r[s]}}while(f[0]==="*"){f.shift();if(i===t){i=e.mimeType||n.getResponseHeader("content-type")}}if(i){for(s in a){if(a[s]&&a[s].test(i)){f.unshift(s);break}}}if(f[0]in r){o=f[0]}else{for(s in r){if(!f[0]||e.converters[s+" "+f[0]]){o=s;break}if(!u){u=s}}o=o||u}if(o){if(o!==f[0]){f.unshift(o)}return r[o]}}function On(e,t){var n,r,i,s,o=e.dataTypes.slice(),u=o[0],a={},f=0;if(e.dataFilter){t=e.dataFilter(t,e.dataType)}if(o[1]){for(n in e.converters){a[n.toLowerCase()]=e.converters[n]}}for(;i=o[++f];){if(i!=="*"){if(u!=="*"&&u!==i){n=a[u+" "+i]||a["* "+i];if(!n){for(r in a){s=r.split(" ");if(s[1]===i){n=a[u+" "+s[0]]||a["* "+s[0]];if(n){if(n===true){n=a[r]}else if(a[r]!==true){i=s[0];o.splice(f--,0,i)}break}}}}if(n!==true){if(n&&e["throws"]){t=n(t)}else{try{t=n(t)}catch(l){return{state:"parsererror",error:n?l:"No conversion from "+u+" to "+i}}}}}u=i}}return{state:"success",data:t}}function Fn(){try{return new e.XMLHttpRequest}catch(t){}}function In(){try{return new e.ActiveXObject("Microsoft.XMLHTTP")}catch(t){}}function $n(){setTimeout(function(){qn=t},0);return qn=v.now()}function Jn(e,t){v.each(t,function(t,n){var r=(Vn[t]||[]).concat(Vn["*"]),i=0,s=r.length;for(;i<s;i++){if(r[i].call(e,t,n)){return}}})}function Kn(e,t,n){var r,i=0,s=0,o=Xn.length,u=v.Deferred().always(function(){delete a.elem}),a=function(){var t=qn||$n(),n=Math.max(0,f.startTime+f.duration-t),r=1-(n/f.duration||0),i=0,s=f.tweens.length;for(;i<s;i++){f.tweens[i].run(r)}u.notifyWith(e,[f,r,n]);if(r<1&&s){return n}else{u.resolveWith(e,[f]);return false}},f=u.promise({elem:e,props:v.extend({},t),opts:v.extend(true,{specialEasing:{}},n),originalProperties:t,originalOptions:n,startTime:qn||$n(),duration:n.duration,tweens:[],createTween:function(t,n,r){var i=v.Tween(e,f.opts,t,n,f.opts.specialEasing[t]||f.opts.easing);f.tweens.push(i);return i},stop:function(t){var n=0,r=t?f.tweens.length:0;for(;n<r;n++){f.tweens[n].run(1)}if(t){u.resolveWith(e,[f,t])}else{u.rejectWith(e,[f,t])}return this}}),l=f.props;Qn(l,f.opts.specialEasing);for(;i<o;i++){r=Xn[i].call(f,e,l,f.opts);if(r){return r}}Jn(f,l);if(v.isFunction(f.opts.start)){f.opts.start.call(e,f)}v.fx.timer(v.extend(a,{anim:f,queue:f.opts.queue,elem:e}));return f.progress(f.opts.progress).done(f.opts.done,f.opts.complete).fail(f.opts.fail).always(f.opts.always)}function Qn(e,t){var n,r,i,s,o;for(n in e){r=v.camelCase(n);i=t[r];s=e[n];if(v.isArray(s)){i=s[1];s=e[n]=s[0]}if(n!==r){e[r]=s;delete e[n]}o=v.cssHooks[r];if(o&&"expand"in o){s=o.expand(s);delete e[r];for(n in s){if(!(n in e)){e[n]=s[n];t[n]=i}}}else{t[r]=i}}}function Gn(e,t,n){var r,i,s,o,u,a,f,l,c=this,h=e.style,p={},d=[],m=e.nodeType&&Gt(e);if(!n.queue){f=v._queueHooks(e,"fx");if(f.unqueued==null){f.unqueued=0;l=f.empty.fire;f.empty.fire=function(){if(!f.unqueued){l()}}}f.unqueued++;c.always(function(){c.always(function(){f.unqueued--;if(!v.queue(e,"fx").length){f.empty.fire()}})})}if(e.nodeType===1&&("height"in t||"width"in t)){n.overflow=[h.overflow,h.overflowX,h.overflowY];if(v.css(e,"display")==="inline"&&v.css(e,"float")==="none"){if(!v.support.inlineBlockNeedsLayout||nn(e.nodeName)==="inline"){h.display="inline-block"}else{h.zoom=1}}}if(n.overflow){h.overflow="hidden";if(!v.support.shrinkWrapBlocks){c.done(function(){h.overflow=n.overflow[0];h.overflowX=n.overflow[1];h.overflowY=n.overflow[2]})}}for(r in t){s=t[r];if(Un.exec(s)){delete t[r];if(s===(m?"hide":"show")){continue}d.push(r)}}o=d.length;if(o){u=v._data(e,"fxshow")||v._data(e,"fxshow",{});if(m){v(e).show()}else{c.done(function(){v(e).hide()})}c.done(function(){var t;v.removeData(e,"fxshow",true);for(t in p){v.style(e,t,p[t])}});for(r=0;r<o;r++){i=d[r];a=c.createTween(i,m?u[i]:0);p[i]=u[i]||v.style(e,i);if(!(i in u)){u[i]=a.start;if(m){a.end=a.start;a.start=i==="width"||i==="height"?1:0}}}}}function Yn(e,t,n,r,i){return new Yn.prototype.init(e,t,n,r,i)}function Zn(e,t){var n,r={height:e},i=0;t=t?1:0;for(;i<4;i+=2-t){n=$t[i];r["margin"+n]=r["padding"+n]=e}if(t){r.opacity=r.width=e}return r}function tr(e){return v.isWindow(e)?e:e.nodeType===9?e.defaultView||e.parentWindow:false}var n,r,i=e.document,s=e.location,o=e.navigator,u=e.FlixjQ,a=e.$,f=Array.prototype.push,l=Array.prototype.slice,c=Array.prototype.indexOf,h=Object.prototype.toString,p=Object.prototype.hasOwnProperty,d=String.prototype.trim,v=function(e,t){return new v.fn.init(e,t,n)},m=/[\-+]?(?:\d*\.|)\d+(?:[eE][\-+]?\d+|)/.source,g=/\S/,y=/\s+/,b=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,w=/^(?:[^#<]*(<[\w\W]+>)[^>]*$|#([\w\-]*)$)/,E=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,S=/^[\],:{}\s]*$/,x=/(?:^|:|,)(?:\s*\[)+/g,T=/\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,N=/"[^"\\\r\n]*"|true|false|null|-?(?:\d\d*\.|)\d+(?:[eE][\-+]?\d+|)/g,C=/^-ms-/,k=/-([\da-z])/gi,L=function(e,t){return(t+"").toUpperCase()},A=function(){if(i.addEventListener){i.removeEventListener("DOMContentLoaded",A,false);v.ready()}else if(i.readyState==="complete"){i.detachEvent("onreadystatechange",A);v.ready()}},O={};v.fn=v.prototype={constructor:v,init:function(e,n,r){var s,o,u,a;if(!e){return this}if(e.nodeType){this.context=this[0]=e;this.length=1;return this}if(typeof e==="string"){if(e.charAt(0)==="<"&&e.charAt(e.length-1)===">"&&e.length>=3){s=[null,e,null]}else{s=w.exec(e)}if(s&&(s[1]||!n)){if(s[1]){n=n instanceof v?n[0]:n;a=n&&n.nodeType?n.ownerDocument||n:i;e=v.parseHTML(s[1],a,true);if(E.test(s[1])&&v.isPlainObject(n)){this.attr.call(e,n,true)}return v.merge(this,e)}else{o=i.getElementById(s[2]);if(o&&o.parentNode){if(o.id!==s[2]){return r.find(e)}this.length=1;this[0]=o}this.context=i;this.selector=e;return this}}else if(!n||n.FlixjQ){return(n||r).find(e)}else{return this.constructor(n).find(e)}}else if(v.isFunction(e)){return r.ready(e)}if(e.selector!==t){this.selector=e.selector;this.context=e.context}return v.makeArray(e,this)},selector:"",FlixjQ:"1.8.2",length:0,size:function(){return this.length},toArray:function(){return l.call(this)},get:function(e){return e==null?this.toArray():e<0?this[this.length+e]:this[e]},pushStack:function(e,t,n){var r=v.merge(this.constructor(),e);r.prevObject=this;r.context=this.context;if(t==="find"){r.selector=this.selector+(this.selector?" ":"")+n}else if(t){r.selector=this.selector+"."+t+"("+n+")"}return r},each:function(e,t){return v.each(this,e,t)},ready:function(e){v.ready.promise().done(e);return this},eq:function(e){e=+e;return e===-1?this.slice(e):this.slice(e,e+1)},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},slice:function(){return this.pushStack(l.apply(this,arguments),"slice",l.call(arguments).join(","))},map:function(e){return this.pushStack(v.map(this,function(t,n){return e.call(t,n,t)}))},end:function(){return this.prevObject||this.constructor(null)},push:f,sort:[].sort,splice:[].splice};v.fn.init.prototype=v.fn;v.extend=v.fn.extend=function(){var e,n,r,i,s,o,u=arguments[0]||{},a=1,f=arguments.length,l=false;if(typeof u==="boolean"){l=u;u=arguments[1]||{};a=2}if(typeof u!=="object"&&!v.isFunction(u)){u={}}if(f===a){u=this;--a}for(;a<f;a++){if((e=arguments[a])!=null){for(n in e){r=u[n];i=e[n];if(u===i){continue}if(l&&i&&(v.isPlainObject(i)||(s=v.isArray(i)))){if(s){s=false;o=r&&v.isArray(r)?r:[]}else{o=r&&v.isPlainObject(r)?r:{}}u[n]=v.extend(l,o,i)}else if(i!==t){u[n]=i}}}}return u};v.extend({noConflict:function(t){if(e.$===v){e.$=a}if(t&&e.FlixjQ===v){e.FlixjQ=u}return v},isReady:false,readyWait:1,holdReady:function(e){if(e){v.readyWait++}else{v.ready(true)}},ready:function(e){if(e===true?--v.readyWait:v.isReady){return}if(!i.body){return setTimeout(v.ready,1)}v.isReady=true;if(e!==true&&--v.readyWait>0){return}r.resolveWith(i,[v]);if(v.fn.trigger){v(i).trigger("ready").off("ready")}},isFunction:function(e){return v.type(e)==="function"},isArray:Array.isArray||function(e){return v.type(e)==="array"},isWindow:function(e){return e!=null&&e==e.window},isNumeric:function(e){return!isNaN(parseFloat(e))&&isFinite(e)},type:function(e){return e==null?String(e):O[h.call(e)]||"object"},isPlainObject:function(e){if(!e||v.type(e)!=="object"||e.nodeType||v.isWindow(e)){return false}try{if(e.constructor&&!p.call(e,"constructor")&&!p.call(e.constructor.prototype,"isPrototypeOf")){return false}}catch(n){return false}var r;for(r in e){}return r===t||p.call(e,r)},isEmptyObject:function(e){var t;for(t in e){return false}return true},error:function(e){throw new Error(e)},parseHTML:function(e,t,n){var r;if(!e||typeof e!=="string"){return null}if(typeof t==="boolean"){n=t;t=0}t=t||i;if(r=E.exec(e)){return[t.createElement(r[1])]}r=v.buildFragment([e],t,n?null:[]);return v.merge([],(r.cacheable?v.clone(r.fragment):r.fragment).childNodes)},parseJSON:function(t){if(!t||typeof t!=="string"){return null}t=v.trim(t);if(e.JSON&&e.JSON.parse){return e.JSON.parse(t)}if(S.test(t.replace(T,"@").replace(N,"]").replace(x,""))){return(new Function("return "+t))()}v.error("Invalid JSON: "+t)},parseXML:function(n){var r,i;if(!n||typeof n!=="string"){return null}try{if(e.DOMParser){i=new DOMParser;r=i.parseFromString(n,"text/xml")}else{r=new ActiveXObject("Microsoft.XMLDOM");r.async="false";r.loadXML(n)}}catch(s){r=t}if(!r||!r.documentElement||r.getElementsByTagName("parsererror").length){v.error("Invalid XML: "+n)}return r},noop:function(){},globalEval:function(t){if(t&&g.test(t)){(e.execScript||function(t){e["eval"].call(e,t)})(t)}},camelCase:function(e){return e.replace(C,"ms-").replace(k,L)},nodeName:function(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()},each:function(e,n,r){var i,s=0,o=e.length,u=o===t||v.isFunction(e);if(r){if(u){for(i in e){if(n.apply(e[i],r)===false){break}}}else{for(;s<o;){if(n.apply(e[s++],r)===false){break}}}}else{if(u){for(i in e){if(n.call(e[i],i,e[i])===false){break}}}else{for(;s<o;){if(n.call(e[s],s,e[s++])===false){break}}}}return e},trim:d&&!d.call("﻿ ")?function(e){return e==null?"":d.call(e)}:function(e){return e==null?"":(e+"").replace(b,"")},makeArray:function(e,t){var n,r=t||[];if(e!=null){n=v.type(e);if(e.length==null||n==="string"||n==="function"||n==="regexp"||v.isWindow(e)){f.call(r,e)}else{v.merge(r,e)}}return r},inArray:function(e,t,n){var r;if(t){if(c){return c.call(t,e,n)}r=t.length;n=n?n<0?Math.max(0,r+n):n:0;for(;n<r;n++){if(n in t&&t[n]===e){return n}}}return-1},merge:function(e,n){var r=n.length,i=e.length,s=0;if(typeof r==="number"){for(;s<r;s++){e[i++]=n[s]}}else{while(n[s]!==t){e[i++]=n[s++]}}e.length=i;return e},grep:function(e,t,n){var r,i=[],s=0,o=e.length;n=!!n;for(;s<o;s++){r=!!t(e[s],s);if(n!==r){i.push(e[s])}}return i},map:function(e,n,r){var i,s,o=[],u=0,a=e.length,f=e instanceof v||a!==t&&typeof a==="number"&&(a>0&&e[0]&&e[a-1]||a===0||v.isArray(e));if(f){for(;u<a;u++){i=n(e[u],u,r);if(i!=null){o[o.length]=i}}}else{for(s in e){i=n(e[s],s,r);if(i!=null){o[o.length]=i}}}return o.concat.apply([],o)},guid:1,proxy:function(e,n){var r,i,s;if(typeof n==="string"){r=e[n];n=e;e=r}if(!v.isFunction(e)){return t}i=l.call(arguments,2);s=function(){return e.apply(n,i.concat(l.call(arguments)))};s.guid=e.guid=e.guid||v.guid++;return s},access:function(e,n,r,i,s,o,u){var a,f=r==null,l=0,c=e.length;if(r&&typeof r==="object"){for(l in r){v.access(e,n,l,r[l],1,o,i)}s=1}else if(i!==t){a=u===t&&v.isFunction(i);if(f){if(a){a=n;n=function(e,t,n){return a.call(v(e),n)}}else{n.call(e,i);n=null}}if(n){for(;l<c;l++){n(e[l],r,a?i.call(e[l],l,n(e[l],r)):i,u)}}s=1}return s?e:f?n.call(e):c?n(e[0],r):o},now:function(){return(new Date).getTime()}});v.ready.promise=function(t){if(!r){r=v.Deferred();if(i.readyState==="complete"){setTimeout(v.ready,1)}else if(i.addEventListener){i.addEventListener("DOMContentLoaded",A,false);e.addEventListener("load",v.ready,false)}else{i.attachEvent("onreadystatechange",A);e.attachEvent("onload",v.ready);var n=false;try{n=e.frameElement==null&&i.documentElement}catch(s){}if(n&&n.doScroll){(function o(){if(!v.isReady){try{n.doScroll("left")}catch(e){return setTimeout(o,50)}v.ready()}})()}}}return r.promise(t)};v.each("Boolean Number String Function Array Date RegExp Object".split(" "),function(e,t){O["[object "+t+"]"]=t.toLowerCase()});n=v(i);var M={};v.Callbacks=function(e){e=typeof e==="string"?M[e]||_(e):v.extend({},e);var n,r,i,s,o,u,a=[],f=!e.once&&[],l=function(t){n=e.memory&&t;r=true;u=s||0;s=0;o=a.length;i=true;for(;a&&u<o;u++){if(a[u].apply(t[0],t[1])===false&&e.stopOnFalse){n=false;break}}i=false;if(a){if(f){if(f.length){l(f.shift())}}else if(n){a=[]}else{c.disable()}}},c={add:function(){if(a){var t=a.length;(function r(t){v.each(t,function(t,n){var i=v.type(n);if(i==="function"&&(!e.unique||!c.has(n))){a.push(n)}else if(n&&n.length&&i!=="string"){r(n)}})})(arguments);if(i){o=a.length}else if(n){s=t;l(n)}}return this},remove:function(){if(a){v.each(arguments,function(e,t){var n;while((n=v.inArray(t,a,n))>-1){a.splice(n,1);if(i){if(n<=o){o--}if(n<=u){u--}}}})}return this},has:function(e){return v.inArray(e,a)>-1},empty:function(){a=[];return this},disable:function(){a=f=n=t;return this},disabled:function(){return!a},lock:function(){f=t;if(!n){c.disable()}return this},locked:function(){return!f},fireWith:function(e,t){t=t||[];t=[e,t.slice?t.slice():t];if(a&&(!r||f)){if(i){f.push(t)}else{l(t)}}return this},fire:function(){c.fireWith(this,arguments);return this},fired:function(){return!!r}};return c};v.extend({Deferred:function(e){var t=[["resolve","done",v.Callbacks("once memory"),"resolved"],["reject","fail",v.Callbacks("once memory"),"rejected"],["notify","progress",v.Callbacks("memory")]],n="pending",r={state:function(){return n},always:function(){i.done(arguments).fail(arguments);return this},then:function(){var e=arguments;return v.Deferred(function(n){v.each(t,function(t,r){var s=r[0],o=e[t];i[r[1]](v.isFunction(o)?function(){var e=o.apply(this,arguments);if(e&&v.isFunction(e.promise)){e.promise().done(n.resolve).fail(n.reject).progress(n.notify)}else{n[s+"With"](this===i?n:this,[e])}}:n[s])});e=null}).promise()},promise:function(e){return e!=null?v.extend(e,r):r}},i={};r.pipe=r.then;v.each(t,function(e,s){var o=s[2],u=s[3];r[s[1]]=o.add;if(u){o.add(function(){n=u},t[e^1][2].disable,t[2][2].lock)}i[s[0]]=o.fire;i[s[0]+"With"]=o.fireWith});r.promise(i);if(e){e.call(i,i)}return i},when:function(e){var t=0,n=l.call(arguments),r=n.length,i=r!==1||e&&v.isFunction(e.promise)?r:0,s=i===1?e:v.Deferred(),o=function(e,t,n){return function(r){t[e]=this;n[e]=arguments.length>1?l.call(arguments):r;if(n===u){s.notifyWith(t,n)}else if(!--i){s.resolveWith(t,n)}}},u,a,f;if(r>1){u=new Array(r);a=new Array(r);f=new Array(r);for(;t<r;t++){if(n[t]&&v.isFunction(n[t].promise)){n[t].promise().done(o(t,f,n)).fail(s.reject).progress(o(t,a,u))}else{--i}}}if(!i){s.resolveWith(f,n)}return s.promise()}});v.support=function(){var t,n,r,s,o,u,a,f,l,c,h,p=i.createElement("div");p.setAttribute("className","t");p.innerHTML="  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";n=p.getElementsByTagName("*");r=p.getElementsByTagName("a")[0];r.style.cssText="top:1px;float:left;opacity:.5";if(!n||!n.length){return{}}s=i.createElement("select");o=s.appendChild(i.createElement("option"));u=p.getElementsByTagName("input")[0];t={leadingWhitespace:p.firstChild.nodeType===3,tbody:!p.getElementsByTagName("tbody").length,htmlSerialize:!!p.getElementsByTagName("link").length,style:/top/.test(r.getAttribute("style")),hrefNormalized:r.getAttribute("href")==="/a",opacity:/^0.5/.test(r.style.opacity),cssFloat:!!r.style.cssFloat,checkOn:u.value==="on",optSelected:o.selected,getSetAttribute:p.className!=="t",enctype:!!i.createElement("form").enctype,html5Clone:i.createElement("nav").cloneNode(true).outerHTML!=="<:nav></:nav>",boxModel:i.compatMode==="CSS1Compat",submitBubbles:true,changeBubbles:true,focusinBubbles:false,deleteExpando:true,noCloneEvent:true,inlineBlockNeedsLayout:false,shrinkWrapBlocks:false,reliableMarginRight:true,boxSizingReliable:true,pixelPosition:false};u.checked=true;t.noCloneChecked=u.cloneNode(true).checked;s.disabled=true;t.optDisabled=!o.disabled;try{delete p.test}catch(d){t.deleteExpando=false}if(!p.addEventListener&&p.attachEvent&&p.fireEvent){p.attachEvent("onclick",h=function(){t.noCloneEvent=false});p.cloneNode(true).fireEvent("onclick");p.detachEvent("onclick",h)}u=i.createElement("input");u.value="t";u.setAttribute("type","radio");t.radioValue=u.value==="t";u.setAttribute("checked","checked");u.setAttribute("name","t");p.appendChild(u);a=i.createDocumentFragment();a.appendChild(p.lastChild);t.checkClone=a.cloneNode(true).cloneNode(true).lastChild.checked;t.appendChecked=u.checked;a.removeChild(u);a.appendChild(p);if(p.attachEvent){for(l in{submit:true,change:true,focusin:true}){f="on"+l;c=f in p;if(!c){p.setAttribute(f,"return;");c=typeof p[f]==="function"}t[l+"Bubbles"]=c}}v(function(){var n,r,s,o,u="padding:0;margin:0;border:0;display:block;overflow:hidden;",a=i.getElementsByTagName("body")[0];if(!a){return}n=i.createElement("div");n.style.cssText="visibility:hidden;border:0;width:0;height:0;position:static;top:0;margin-top:1px";a.insertBefore(n,a.firstChild);r=i.createElement("div");n.appendChild(r);r.innerHTML="<table><tr><td></td><td>t</td></tr></table>";s=r.getElementsByTagName("td");s[0].style.cssText="padding:0;margin:0;border:0;display:none";c=s[0].offsetHeight===0;s[0].style.display="";s[1].style.display="none";t.reliableHiddenOffsets=c&&s[0].offsetHeight===0;r.innerHTML="";r.style.cssText="box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;";t.boxSizing=r.offsetWidth===4;t.doesNotIncludeMarginInBodyOffset=a.offsetTop!==1;if(e.getComputedStyle){t.pixelPosition=(e.getComputedStyle(r,null)||{}).top!=="1%";t.boxSizingReliable=(e.getComputedStyle(r,null)||{width:"4px"}).width==="4px";o=i.createElement("div");o.style.cssText=r.style.cssText=u;o.style.marginRight=o.style.width="0";r.style.width="1px";r.appendChild(o);t.reliableMarginRight=!parseFloat((e.getComputedStyle(o,null)||{}).marginRight)}if(typeof r.style.zoom!=="undefined"){r.innerHTML="";r.style.cssText=u+"width:1px;padding:1px;display:inline;zoom:1";t.inlineBlockNeedsLayout=r.offsetWidth===3;r.style.display="block";r.style.overflow="visible";r.innerHTML="<div></div>";r.firstChild.style.width="5px";t.shrinkWrapBlocks=r.offsetWidth!==3;n.style.zoom=1}a.removeChild(n);n=r=s=o=null});a.removeChild(p);n=r=s=o=u=a=p=null;return t}();var D=/(?:\{[\s\S]*\}|\[[\s\S]*\])$/,P=/([A-Z])/g;v.extend({cache:{},deletedIds:[],uuid:0,expando:"FlixjQ"+(v.fn.FlixjQ+Math.random()).replace(/\D/g,""),noData:{embed:true,object:"clsid:D27CDB6E-AE6D-11cf-96B8-444553540000",applet:true},hasData:function(e){e=e.nodeType?v.cache[e[v.expando]]:e[v.expando];return!!e&&!B(e)},data:function(e,n,r,i){if(!v.acceptData(e)){return}var s,o,u=v.expando,a=typeof n==="string",f=e.nodeType,l=f?v.cache:e,c=f?e[u]:e[u]&&u;if((!c||!l[c]||!i&&!l[c].data)&&a&&r===t){return}if(!c){if(f){e[u]=c=v.deletedIds.pop()||v.guid++}else{c=u}}if(!l[c]){l[c]={};if(!f){l[c].toJSON=v.noop}}if(typeof n==="object"||typeof n==="function"){if(i){l[c]=v.extend(l[c],n)}else{l[c].data=v.extend(l[c].data,n)}}s=l[c];if(!i){if(!s.data){s.data={}}s=s.data}if(r!==t){s[v.camelCase(n)]=r}if(a){o=s[n];if(o==null){o=s[v.camelCase(n)]}}else{o=s}return o},removeData:function(e,t,n){if(!v.acceptData(e)){return}var r,i,s,o=e.nodeType,u=o?v.cache:e,a=o?e[v.expando]:v.expando;if(!u[a]){return}if(t){r=n?u[a]:u[a].data;if(r){if(!v.isArray(t)){if(t in r){t=[t]}else{t=v.camelCase(t);if(t in r){t=[t]}else{t=t.split(" ")}}}for(i=0,s=t.length;i<s;i++){delete r[t[i]]}if(!(n?B:v.isEmptyObject)(r)){return}}}if(!n){delete u[a].data;if(!B(u[a])){return}}if(o){v.cleanData([e],true)}else if(v.support.deleteExpando||u!=u.window){delete u[a]}else{u[a]=null}},_data:function(e,t,n){return v.data(e,t,n,true)},acceptData:function(e){var t=e.nodeName&&v.noData[e.nodeName.toLowerCase()];return!t||t!==true&&e.getAttribute("classid")===t}});v.fn.extend({data:function(e,n){var r,i,s,o,u,a=this[0],f=0,l=null;if(e===t){if(this.length){l=v.data(a);if(a.nodeType===1&&!v._data(a,"parsedAttrs")){s=a.attributes;for(u=s.length;f<u;f++){o=s[f].name;if(!o.indexOf("data-")){o=v.camelCase(o.substring(5));H(a,o,l[o])}}v._data(a,"parsedAttrs",true)}}return l}if(typeof e==="object"){return this.each(function(){v.data(this,e)})}r=e.split(".",2);r[1]=r[1]?"."+r[1]:"";i=r[1]+"!";return v.access(this,function(n){if(n===t){l=this.triggerHandler("getData"+i,[r[0]]);if(l===t&&a){l=v.data(a,e);l=H(a,e,l)}return l===t&&r[1]?this.data(r[0]):l}r[1]=n;this.each(function(){var t=v(this);t.triggerHandler("setData"+i,r);v.data(this,e,n);t.triggerHandler("changeData"+i,r)})},null,n,arguments.length>1,null,false)},removeData:function(e){return this.each(function(){v.removeData(this,e)})}});v.extend({queue:function(e,t,n){var r;if(e){t=(t||"fx")+"queue";r=v._data(e,t);if(n){if(!r||v.isArray(n)){r=v._data(e,t,v.makeArray(n))}else{r.push(n)}}return r||[]}},dequeue:function(e,t){t=t||"fx";var n=v.queue(e,t),r=n.length,i=n.shift(),s=v._queueHooks(e,t),o=function(){v.dequeue(e,t)};if(i==="inprogress"){i=n.shift();r--}if(i){if(t==="fx"){n.unshift("inprogress")}delete s.stop;i.call(e,o,s)}if(!r&&s){s.empty.fire()}},_queueHooks:function(e,t){var n=t+"queueHooks";return v._data(e,n)||v._data(e,n,{empty:v.Callbacks("once memory").add(function(){v.removeData(e,t+"queue",true);v.removeData(e,n,true)})})}});v.fn.extend({queue:function(e,n){var r=2;if(typeof e!=="string"){n=e;e="fx";r--}if(arguments.length<r){return v.queue(this[0],e)}return n===t?this:this.each(function(){var t=v.queue(this,e,n);v._queueHooks(this,e);if(e==="fx"&&t[0]!=="inprogress"){v.dequeue(this,e)}})},dequeue:function(e){return this.each(function(){v.dequeue(this,e)})},delay:function(e,t){e=v.fx?v.fx.speeds[e]||e:e;t=t||"fx";return this.queue(t,function(t,n){var r=setTimeout(t,e);n.stop=function(){clearTimeout(r)}})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,n){var r,i=1,s=v.Deferred(),o=this,u=this.length,a=function(){if(!--i){s.resolveWith(o,[o])}};if(typeof e!=="string"){n=e;e=t}e=e||"fx";while(u--){r=v._data(o[u],e+"queueHooks");if(r&&r.empty){i++;r.empty.add(a)}}a();return s.promise(n)}});var j,F,I,q=/[\t\r\n]/g,R=/\r/g,U=/^(?:button|input)$/i,z=/^(?:button|input|object|select|textarea)$/i,W=/^a(?:rea|)$/i,X=/^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i,V=v.support.getSetAttribute;v.fn.extend({attr:function(e,t){return v.access(this,v.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){v.removeAttr(this,e)})},prop:function(e,t){return v.access(this,v.prop,e,t,arguments.length>1)},removeProp:function(e){e=v.propFix[e]||e;return this.each(function(){try{this[e]=t;delete this[e]}catch(n){}})},addClass:function(e){var t,n,r,i,s,o,u;if(v.isFunction(e)){return this.each(function(t){v(this).addClass(e.call(this,t,this.className))})}if(e&&typeof e==="string"){t=e.split(y);for(n=0,r=this.length;n<r;n++){i=this[n];if(i.nodeType===1){if(!i.className&&t.length===1){i.className=e}else{s=" "+i.className+" ";for(o=0,u=t.length;o<u;o++){if(s.indexOf(" "+t[o]+" ")<0){s+=t[o]+" "}}i.className=v.trim(s)}}}}return this},removeClass:function(e){var n,r,i,s,o,u,a;if(v.isFunction(e)){return this.each(function(t){v(this).removeClass(e.call(this,t,this.className))})}if(e&&typeof e==="string"||e===t){n=(e||"").split(y);for(u=0,a=this.length;u<a;u++){i=this[u];if(i.nodeType===1&&i.className){r=(" "+i.className+" ").replace(q," ");for(s=0,o=n.length;s<o;s++){while(r.indexOf(" "+n[s]+" ")>=0){r=r.replace(" "+n[s]+" "," ")}}i.className=e?v.trim(r):""}}}return this},toggleClass:function(e,t){var n=typeof e,r=typeof t==="boolean";if(v.isFunction(e)){return this.each(function(n){v(this).toggleClass(e.call(this,n,this.className,t),t)})}return this.each(function(){if(n==="string"){var i,s=0,o=v(this),u=t,a=e.split(y);while(i=a[s++]){u=r?u:!o.hasClass(i);o[u?"addClass":"removeClass"](i)}}else if(n==="undefined"||n==="boolean"){if(this.className){v._data(this,"__className__",this.className)}this.className=this.className||e===false?"":v._data(this,"__className__")||""}})},hasClass:function(e){var t=" "+e+" ",n=0,r=this.length;for(;n<r;n++){if(this[n].nodeType===1&&(" "+this[n].className+" ").replace(q," ").indexOf(t)>=0){return true}}return false},val:function(e){var n,r,i,s=this[0];if(!arguments.length){if(s){n=v.valHooks[s.type]||v.valHooks[s.nodeName.toLowerCase()];if(n&&"get"in n&&(r=n.get(s,"value"))!==t){return r}r=s.value;return typeof r==="string"?r.replace(R,""):r==null?"":r}return}i=v.isFunction(e);return this.each(function(r){var s,o=v(this);if(this.nodeType!==1){return}if(i){s=e.call(this,r,o.val())}else{s=e}if(s==null){s=""}else if(typeof s==="number"){s+=""}else if(v.isArray(s)){s=v.map(s,function(e){return e==null?"":e+""})}n=v.valHooks[this.type]||v.valHooks[this.nodeName.toLowerCase()];if(!n||!("set"in n)||n.set(this,s,"value")===t){this.value=s}})}});v.extend({valHooks:{option:{get:function(e){var t=e.attributes.value;return!t||t.specified?e.value:e.text}},select:{get:function(e){var t,n,r,i,s=e.selectedIndex,o=[],u=e.options,a=e.type==="select-one";if(s<0){return null}n=a?s:0;r=a?s+1:u.length;for(;n<r;n++){i=u[n];if(i.selected&&(v.support.optDisabled?!i.disabled:i.getAttribute("disabled")===null)&&(!i.parentNode.disabled||!v.nodeName(i.parentNode,"optgroup"))){t=v(i).val();if(a){return t}o.push(t)}}if(a&&!o.length&&u.length){return v(u[s]).val()}return o},set:function(e,t){var n=v.makeArray(t);v(e).find("option").each(function(){this.selected=v.inArray(v(this).val(),n)>=0});if(!n.length){e.selectedIndex=-1}return n}}},attrFn:{},attr:function(e,n,r,i){var s,o,u,a=e.nodeType;if(!e||a===3||a===8||a===2){return}if(i&&v.isFunction(v.fn[n])){return v(e)[n](r)}if(typeof e.getAttribute==="undefined"){return v.prop(e,n,r)}u=a!==1||!v.isXMLDoc(e);if(u){n=n.toLowerCase();o=v.attrHooks[n]||(X.test(n)?F:j)}if(r!==t){if(r===null){v.removeAttr(e,n);return}else if(o&&"set"in o&&u&&(s=o.set(e,r,n))!==t){return s}else{e.setAttribute(n,r+"");return r}}else if(o&&"get"in o&&u&&(s=o.get(e,n))!==null){return s}else{s=e.getAttribute(n);return s===null?t:s}},removeAttr:function(e,t){var n,r,i,s,o=0;if(t&&e.nodeType===1){r=t.split(y);for(;o<r.length;o++){i=r[o];if(i){n=v.propFix[i]||i;s=X.test(i);if(!s){v.attr(e,i,"")}e.removeAttribute(V?i:n);if(s&&n in e){e[n]=false}}}}},attrHooks:{type:{set:function(e,t){if(U.test(e.nodeName)&&e.parentNode){v.error("type property can't be changed")}else if(!v.support.radioValue&&t==="radio"&&v.nodeName(e,"input")){var n=e.value;e.setAttribute("type",t);if(n){e.value=n}return t}}},value:{get:function(e,t){if(j&&v.nodeName(e,"button")){return j.get(e,t)}return t in e?e.value:null},set:function(e,t,n){if(j&&v.nodeName(e,"button")){return j.set(e,t,n)}e.value=t}}},propFix:{tabindex:"tabIndex",readonly:"readOnly","for":"htmlFor","class":"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},prop:function(e,n,r){var i,s,o,u=e.nodeType;if(!e||u===3||u===8||u===2){return}o=u!==1||!v.isXMLDoc(e);if(o){n=v.propFix[n]||n;s=v.propHooks[n]}if(r!==t){if(s&&"set"in s&&(i=s.set(e,r,n))!==t){return i}else{return e[n]=r}}else{if(s&&"get"in s&&(i=s.get(e,n))!==null){return i}else{return e[n]}}},propHooks:{tabIndex:{get:function(e){var n=e.getAttributeNode("tabindex");return n&&n.specified?parseInt(n.value,10):z.test(e.nodeName)||W.test(e.nodeName)&&e.href?0:t}}}});F={get:function(e,n){var r,i=v.prop(e,n);return i===true||typeof i!=="boolean"&&(r=e.getAttributeNode(n))&&r.nodeValue!==false?n.toLowerCase():t},set:function(e,t,n){var r;if(t===false){v.removeAttr(e,n)}else{r=v.propFix[n]||n;if(r in e){e[r]=true}e.setAttribute(n,n.toLowerCase())}return n}};if(!V){I={name:true,id:true,coords:true};j=v.valHooks.button={get:function(e,n){var r;r=e.getAttributeNode(n);return r&&(I[n]?r.value!=="":r.specified)?r.value:t},set:function(e,t,n){var r=e.getAttributeNode(n);if(!r){r=i.createAttribute(n);e.setAttributeNode(r)}return r.value=t+""}};v.each(["width","height"],function(e,t){v.attrHooks[t]=v.extend(v.attrHooks[t],{set:function(e,n){if(n===""){e.setAttribute(t,"auto");return n}}})});v.attrHooks.contenteditable={get:j.get,set:function(e,t,n){if(t===""){t="false"}j.set(e,t,n)}}}if(!v.support.hrefNormalized){v.each(["href","src","width","height"],function(e,n){v.attrHooks[n]=v.extend(v.attrHooks[n],{get:function(e){var r=e.getAttribute(n,2);return r===null?t:r}})})}if(!v.support.style){v.attrHooks.style={get:function(e){return e.style.cssText.toLowerCase()||t},set:function(e,t){return e.style.cssText=t+""}}}if(!v.support.optSelected){v.propHooks.selected=v.extend(v.propHooks.selected,{get:function(e){var t=e.parentNode;if(t){t.selectedIndex;if(t.parentNode){t.parentNode.selectedIndex}}return null}})}if(!v.support.enctype){v.propFix.enctype="encoding"}if(!v.support.checkOn){v.each(["radio","checkbox"],function(){v.valHooks[this]={get:function(e){return e.getAttribute("value")===null?"on":e.value}}})}v.each(["radio","checkbox"],function(){v.valHooks[this]=v.extend(v.valHooks[this],{set:function(e,t){if(v.isArray(t)){return e.checked=v.inArray(v(e).val(),t)>=0}}})});var $=/^(?:textarea|input|select)$/i,J=/^([^\.]*|)(?:\.(.+)|)$/,K=/(?:^|\s)hover(\.\S+|)\b/,Q=/^key/,G=/^(?:mouse|contextmenu)|click/,Y=/^(?:focusinfocus|focusoutblur)$/,Z=function(e){return v.event.special.hover?e:e.replace(K,"mouseenter$1 mouseleave$1")};v.event={add:function(e,n,r,i,s){var o,u,a,f,l,c,h,p,d,m,g;if(e.nodeType===3||e.nodeType===8||!n||!r||!(o=v._data(e))){return}if(r.handler){d=r;r=d.handler;s=d.selector}if(!r.guid){r.guid=v.guid++}a=o.events;if(!a){o.events=a={}}u=o.handle;if(!u){o.handle=u=function(e){return typeof v!=="undefined"&&(!e||v.event.triggered!==e.type)?v.event.dispatch.apply(u.elem,arguments):t};u.elem=e}n=v.trim(Z(n)).split(" ");for(f=0;f<n.length;f++){l=J.exec(n[f])||[];c=l[1];h=(l[2]||"").split(".").sort();g=v.event.special[c]||{};c=(s?g.delegateType:g.bindType)||c;g=v.event.special[c]||{};p=v.extend({type:c,origType:l[1],data:i,handler:r,guid:r.guid,selector:s,needsContext:s&&v.expr.match.needsContext.test(s),namespace:h.join(".")},d);m=a[c];if(!m){m=a[c]=[];m.delegateCount=0;if(!g.setup||g.setup.call(e,i,h,u)===false){if(e.addEventListener){e.addEventListener(c,u,false)}else if(e.attachEvent){e.attachEvent("on"+c,u)}}}if(g.add){g.add.call(e,p);if(!p.handler.guid){p.handler.guid=r.guid}}if(s){m.splice(m.delegateCount++,0,p)}else{m.push(p)}v.event.global[c]=true}e=null},global:{},remove:function(e,t,n,r,i){var s,o,u,a,f,l,c,h,p,d,m,g=v.hasData(e)&&v._data(e);if(!g||!(h=g.events)){return}t=v.trim(Z(t||"")).split(" ");for(s=0;s<t.length;s++){o=J.exec(t[s])||[];u=a=o[1];f=o[2];if(!u){for(u in h){v.event.remove(e,u+t[s],n,r,true)}continue}p=v.event.special[u]||{};u=(r?p.delegateType:p.bindType)||u;d=h[u]||[];l=d.length;f=f?new RegExp("(^|\\.)"+f.split(".").sort().join("\\.(?:.*\\.|)")+"(\\.|$)"):null;for(c=0;c<d.length;c++){m=d[c];if((i||a===m.origType)&&(!n||n.guid===m.guid)&&(!f||f.test(m.namespace))&&(!r||r===m.selector||r==="**"&&m.selector)){d.splice(c--,1);if(m.selector){d.delegateCount--}if(p.remove){p.remove.call(e,m)}}}if(d.length===0&&l!==d.length){if(!p.teardown||p.teardown.call(e,f,g.handle)===false){v.removeEvent(e,u,g.handle)}delete h[u]}}if(v.isEmptyObject(h)){delete g.handle;v.removeData(e,"events",true)}},customEvent:{getData:true,setData:true,changeData:true},trigger:function(n,r,s,o){if(s&&(s.nodeType===3||s.nodeType===8)){return}var u,a,f,l,c,h,p,d,m,g,y=n.type||n,b=[];if(Y.test(y+v.event.triggered)){return}if(y.indexOf("!")>=0){y=y.slice(0,-1);a=true}if(y.indexOf(".")>=0){b=y.split(".");y=b.shift();b.sort()}if((!s||v.event.customEvent[y])&&!v.event.global[y]){return}n=typeof n==="object"?n[v.expando]?n:new v.Event(y,n):new v.Event(y);n.type=y;n.isTrigger=true;n.exclusive=a;n.namespace=b.join(".");n.namespace_re=n.namespace?new RegExp("(^|\\.)"+b.join("\\.(?:.*\\.|)")+"(\\.|$)"):null;h=y.indexOf(":")<0?"on"+y:"";if(!s){u=v.cache;for(f in u){if(u[f].events&&u[f].events[y]){v.event.trigger(n,r,u[f].handle.elem,true)}}return}n.result=t;if(!n.target){n.target=s}r=r!=null?v.makeArray(r):[];r.unshift(n);p=v.event.special[y]||{};if(p.trigger&&p.trigger.apply(s,r)===false){return}m=[[s,p.bindType||y]];if(!o&&!p.noBubble&&!v.isWindow(s)){g=p.delegateType||y;l=Y.test(g+y)?s:s.parentNode;for(c=s;l;l=l.parentNode){m.push([l,g]);c=l}if(c===(s.ownerDocument||i)){m.push([c.defaultView||c.parentWindow||e,g])}}for(f=0;f<m.length&&!n.isPropagationStopped();f++){l=m[f][0];n.type=m[f][1];d=(v._data(l,"events")||{})[n.type]&&v._data(l,"handle");if(d){d.apply(l,r)}d=h&&l[h];if(d&&v.acceptData(l)&&d.apply&&d.apply(l,r)===false){n.preventDefault()}}n.type=y;if(!o&&!n.isDefaultPrevented()){if((!p._default||p._default.apply(s.ownerDocument,r)===false)&&!(y==="click"&&v.nodeName(s,"a"))&&v.acceptData(s)){if(h&&s[y]&&(y!=="focus"&&y!=="blur"||n.target.offsetWidth!==0)&&!v.isWindow(s)){c=s[h];if(c){s[h]=null}v.event.triggered=y;s[y]();v.event.triggered=t;if(c){s[h]=c}}}}return n.result},dispatch:function(n){n=v.event.fix(n||e.event);var r,i,s,o,u,a,f,c,h,p,d=(v._data(this,"events")||{})[n.type]||[],m=d.delegateCount,g=l.call(arguments),y=!n.exclusive&&!n.namespace,b=v.event.special[n.type]||{},w=[];g[0]=n;n.delegateTarget=this;if(b.preDispatch&&b.preDispatch.call(this,n)===false){return}if(m&&!(n.button&&n.type==="click")){for(s=n.target;s!=this;s=s.parentNode||this){if(s.disabled!==true||n.type!=="click"){u={};f=[];for(r=0;r<m;r++){c=d[r];h=c.selector;if(u[h]===t){u[h]=c.needsContext?v(h,this).index(s)>=0:v.find(h,this,null,[s]).length}if(u[h]){f.push(c)}}if(f.length){w.push({elem:s,matches:f})}}}}if(d.length>m){w.push({elem:this,matches:d.slice(m)})}for(r=0;r<w.length&&!n.isPropagationStopped();r++){a=w[r];n.currentTarget=a.elem;for(i=0;i<a.matches.length&&!n.isImmediatePropagationStopped();i++){c=a.matches[i];if(y||!n.namespace&&!c.namespace||n.namespace_re&&n.namespace_re.test(c.namespace)){n.data=c.data;n.handleObj=c;o=((v.event.special[c.origType]||{}).handle||c.handler).apply(a.elem,g);if(o!==t){n.result=o;if(o===false){n.preventDefault();n.stopPropagation()}}}}}if(b.postDispatch){b.postDispatch.call(this,n)}return n.result},props:"attrChange attrName relatedNode srcElement altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(e,t){if(e.which==null){e.which=t.charCode!=null?t.charCode:t.keyCode}return e}},mouseHooks:{props:"button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(e,n){var r,s,o,u=n.button,a=n.fromElement;if(e.pageX==null&&n.clientX!=null){r=e.target.ownerDocument||i;s=r.documentElement;o=r.body;e.pageX=n.clientX+(s&&s.scrollLeft||o&&o.scrollLeft||0)-(s&&s.clientLeft||o&&o.clientLeft||0);e.pageY=n.clientY+(s&&s.scrollTop||o&&o.scrollTop||0)-(s&&s.clientTop||o&&o.clientTop||0)}if(!e.relatedTarget&&a){e.relatedTarget=a===e.target?n.toElement:a}if(!e.which&&u!==t){e.which=u&1?1:u&2?3:u&4?2:0}return e}},fix:function(e){if(e[v.expando]){return e}var t,n,r=e,s=v.event.fixHooks[e.type]||{},o=s.props?this.props.concat(s.props):this.props;e=v.Event(r);for(t=o.length;t;){n=o[--t];e[n]=r[n]}if(!e.target){e.target=r.srcElement||i}if(e.target.nodeType===3){e.target=e.target.parentNode}e.metaKey=!!e.metaKey;return s.filter?s.filter(e,r):e},special:{load:{noBubble:true},focus:{delegateType:"focusin"},blur:{delegateType:"focusout"},beforeunload:{setup:function(e,t,n){if(v.isWindow(this)){this.onbeforeunload=n}},teardown:function(e,t){if(this.onbeforeunload===t){this.onbeforeunload=null}}}},simulate:function(e,t,n,r){var i=v.extend(new v.Event,n,{type:e,isSimulated:true,originalEvent:{}});if(r){v.event.trigger(i,null,t)}else{v.event.dispatch.call(t,i)}if(i.isDefaultPrevented()){n.preventDefault()}}};v.event.handle=v.event.dispatch;v.removeEvent=i.removeEventListener?function(e,t,n){if(e.removeEventListener){e.removeEventListener(t,n,false)}}:function(e,t,n){var r="on"+t;if(e.detachEvent){if(typeof e[r]==="undefined"){e[r]=null}e.detachEvent(r,n)}};v.Event=function(e,t){if(!(this instanceof v.Event)){return new v.Event(e,t)}if(e&&e.type){this.originalEvent=e;this.type=e.type;this.isDefaultPrevented=e.defaultPrevented||e.returnValue===false||e.getPreventDefault&&e.getPreventDefault()?tt:et}else{this.type=e}if(t){v.extend(this,t)}this.timeStamp=e&&e.timeStamp||v.now();this[v.expando]=true};v.Event.prototype={preventDefault:function(){this.isDefaultPrevented=tt;var e=this.originalEvent;if(!e){return}if(e.preventDefault){e.preventDefault()}else{e.returnValue=false}},stopPropagation:function(){this.isPropagationStopped=tt;var e=this.originalEvent;if(!e){return}if(e.stopPropagation){e.stopPropagation()}e.cancelBubble=true},stopImmediatePropagation:function(){this.isImmediatePropagationStopped=tt;this.stopPropagation()},isDefaultPrevented:et,isPropagationStopped:et,isImmediatePropagationStopped:et};v.each({mouseenter:"mouseover",mouseleave:"mouseout"},function(e,t){v.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,s=e.handleObj,o=s.selector;if(!i||i!==r&&!v.contains(r,i)){e.type=s.origType;n=s.handler.apply(this,arguments);e.type=t}return n}}});if(!v.support.submitBubbles){v.event.special.submit={setup:function(){if(v.nodeName(this,"form")){return false}v.event.add(this,"click._submit keypress._submit",function(e){var n=e.target,r=v.nodeName(n,"input")||v.nodeName(n,"button")?n.form:t;if(r&&!v._data(r,"_submit_attached")){v.event.add(r,"submit._submit",function(e){e._submit_bubble=true});v._data(r,"_submit_attached",true)}})},postDispatch:function(e){if(e._submit_bubble){delete e._submit_bubble;if(this.parentNode&&!e.isTrigger){v.event.simulate("submit",this.parentNode,e,true)}}},teardown:function(){if(v.nodeName(this,"form")){return false}v.event.remove(this,"._submit")}}}if(!v.support.changeBubbles){v.event.special.change={setup:function(){if($.test(this.nodeName)){if(this.type==="checkbox"||this.type==="radio"){v.event.add(this,"propertychange._change",function(e){if(e.originalEvent.propertyName==="checked"){this._just_changed=true}});v.event.add(this,"click._change",function(e){if(this._just_changed&&!e.isTrigger){this._just_changed=false}v.event.simulate("change",this,e,true)})}return false}v.event.add(this,"beforeactivate._change",function(e){var t=e.target;if($.test(t.nodeName)&&!v._data(t,"_change_attached")){v.event.add(t,"change._change",function(e){if(this.parentNode&&!e.isSimulated&&!e.isTrigger){v.event.simulate("change",this.parentNode,e,true)}});v._data(t,"_change_attached",true)}})},handle:function(e){var t=e.target;if(this!==t||e.isSimulated||e.isTrigger||t.type!=="radio"&&t.type!=="checkbox"){return e.handleObj.handler.apply(this,arguments)}},teardown:function(){v.event.remove(this,"._change");return!$.test(this.nodeName)}}}if(!v.support.focusinBubbles){v.each({focus:"focusin",blur:"focusout"},function(e,t){var n=0,r=function(e){v.event.simulate(t,e.target,v.event.fix(e),true)};v.event.special[t]={setup:function(){if(n++===0){i.addEventListener(e,r,true)}},teardown:function(){if(--n===0){i.removeEventListener(e,r,true)}}}})}v.fn.extend({on:function(e,n,r,i,s){var o,u;if(typeof e==="object"){if(typeof n!=="string"){r=r||n;n=t}for(u in e){this.on(u,n,r,e[u],s)}return this}if(r==null&&i==null){i=n;r=n=t}else if(i==null){if(typeof n==="string"){i=r;r=t}else{i=r;r=n;n=t}}if(i===false){i=et}else if(!i){return this}if(s===1){o=i;i=function(e){v().off(e);return o.apply(this,arguments)};i.guid=o.guid||(o.guid=v.guid++)}return this.each(function(){v.event.add(this,e,i,r,n)})},one:function(e,t,n,r){return this.on(e,t,n,r,1)},off:function(e,n,r){var i,s;if(e&&e.preventDefault&&e.handleObj){i=e.handleObj;v(e.delegateTarget).off(i.namespace?i.origType+"."+i.namespace:i.origType,i.selector,i.handler);return this}if(typeof e==="object"){for(s in e){this.off(s,n,e[s])}return this}if(n===false||typeof n==="function"){r=n;n=t}if(r===false){r=et}return this.each(function(){v.event.remove(this,e,r,n)})},bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},live:function(e,t,n){v(this.context).on(e,this.selector,t,n);return this},die:function(e,t){v(this.context).off(e,this.selector||"**",t);return this},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return arguments.length===1?this.off(e,"**"):this.off(t,e||"**",n)},trigger:function(e,t){return this.each(function(){v.event.trigger(e,t,this)})},triggerHandler:function(e,t){if(this[0]){return v.event.trigger(e,t,this[0],true)}},toggle:function(e){var t=arguments,n=e.guid||v.guid++,r=0,i=function(n){var i=(v._data(this,"lastToggle"+e.guid)||0)%r;v._data(this,"lastToggle"+e.guid,i+1);n.preventDefault();return t[i].apply(this,arguments)||false};i.guid=n;while(r<t.length){t[r++].guid=n}return this.click(i)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}});v.each(("blur focus focusin focusout load resize scroll unload click dblclick "+"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave "+"change select submit keydown keypress keyup error contextmenu").split(" "),function(e,t){v.fn[t]=function(e,n){if(n==null){n=e;e=null}return arguments.length>0?this.on(t,null,e,n):this.trigger(t)};if(Q.test(t)){v.event.fixHooks[t]=v.event.keyHooks}if(G.test(t)){v.event.fixHooks[t]=v.event.mouseHooks}});(function(e,t){function nt(e,t,n,r){n=n||[];t=t||g;var i,s,a,f,l=t.nodeType;if(!e||typeof e!=="string"){return n}if(l!==1&&l!==9){return[]}a=o(t);if(!a&&!r){if(i=R.exec(e)){if(f=i[1]){if(l===9){s=t.getElementById(f);if(s&&s.parentNode){if(s.id===f){n.push(s);return n}}else{return n}}else{if(t.ownerDocument&&(s=t.ownerDocument.getElementById(f))&&u(t,s)&&s.id===f){n.push(s);return n}}}else if(i[2]){S.apply(n,x.call(t.getElementsByTagName(e),0));return n}else if((f=i[3])&&Z&&t.getElementsByClassName){S.apply(n,x.call(t.getElementsByClassName(f),0));return n}}}return vt(e.replace(j,"$1"),t,n,r,a)}function rt(e){return function(t){var n=t.nodeName.toLowerCase();return n==="input"&&t.type===e}}function it(e){return function(t){var n=t.nodeName.toLowerCase();return(n==="input"||n==="button")&&t.type===e}}function st(e){return N(function(t){t=+t;return N(function(n,r){var i,s=e([],n.length,t),o=s.length;while(o--){if(n[i=s[o]]){n[i]=!(r[i]=n[i])}}})})}function ot(e,t,n){if(e===t){return n}var r=e.nextSibling;while(r){if(r===t){return-1}r=r.nextSibling}return 1}function ut(e,t){var n,r,s,o,u,a,f,l=L[d][e];if(l){return t?0:l.slice(0)}u=e;a=[];f=i.preFilter;while(u){if(!n||(r=F.exec(u))){if(r){u=u.slice(r[0].length)}a.push(s=[])}n=false;if(r=I.exec(u)){s.push(n=new m(r.shift()));u=u.slice(n.length);n.type=r[0].replace(j," ")}for(o in i.filter){if((r=J[o].exec(u))&&(!f[o]||(r=f[o](r,g,true)))){s.push(n=new m(r.shift()));u=u.slice(n.length);n.type=o;n.matches=r}}if(!n){break}}return t?u.length:u?nt.error(e):L(e,a).slice(0)}function at(e,t,r){var i=t.dir,s=r&&t.dir==="parentNode",o=w++;return t.first?function(t,n,r){while(t=t[i]){if(s||t.nodeType===1){return e(t,n,r)}}}:function(t,r,u){if(!u){var a,f=b+" "+o+" ",l=f+n;while(t=t[i]){if(s||t.nodeType===1){if((a=t[d])===l){return t.sizset}else if(typeof a==="string"&&a.indexOf(f)===0){if(t.sizset){return t}}else{t[d]=l;if(e(t,r,u)){t.sizset=true;return t}t.sizset=false}}}}else{while(t=t[i]){if(s||t.nodeType===1){if(e(t,r,u)){return t}}}}}}function ft(e){return e.length>1?function(t,n,r){var i=e.length;while(i--){if(!e[i](t,n,r)){return false}}return true}:e[0]}function lt(e,t,n,r,i){var s,o=[],u=0,a=e.length,f=t!=null;for(;u<a;u++){if(s=e[u]){if(!n||n(s,r,i)){o.push(s);if(f){t.push(u)}}}}return o}function ct(e,t,n,r,i,s){if(r&&!r[d]){r=ct(r)}if(i&&!i[d]){i=ct(i,s)}return N(function(s,o,u,a){if(s&&i){return}var f,l,c,h=[],p=[],d=o.length,v=s||dt(t||"*",u.nodeType?[u]:u,[],s),m=e&&(s||!t)?lt(v,h,e,u,a):v,g=n?i||(s?e:d||r)?[]:o:m;if(n){n(m,g,u,a)}if(r){c=lt(g,p);r(c,[],u,a);f=c.length;while(f--){if(l=c[f]){g[p[f]]=!(m[p[f]]=l)}}}if(s){f=e&&g.length;while(f--){if(l=g[f]){s[h[f]]=!(o[h[f]]=l)}}}else{g=lt(g===o?g.splice(d,g.length):g);if(i){i(null,o,g,a)}else{S.apply(o,g)}}})}function ht(e){var t,n,r,s=e.length,o=i.relative[e[0].type],u=o||i.relative[" "],a=o?1:0,f=at(function(e){return e===t},u,true),l=at(function(e){return T.call(t,e)>-1},u,true),h=[function(e,n,r){return!o&&(r||n!==c)||((t=n).nodeType?f(e,n,r):l(e,n,r))}];for(;a<s;a++){if(n=i.relative[e[a].type]){h=[at(ft(h),n)]}else{n=i.filter[e[a].type].apply(null,e[a].matches);if(n[d]){r=++a;for(;r<s;r++){if(i.relative[e[r].type]){break}}return ct(a>1&&ft(h),a>1&&e.slice(0,a-1).join("").replace(j,"$1"),n,a<r&&ht(e.slice(a,r)),r<s&&ht(e=e.slice(r)),r<s&&e.join(""))}h.push(n)}}return ft(h)}function pt(e,t){var r=t.length>0,s=e.length>0,o=function(u,a,f,l,h){var p,d,v,m=[],y=0,w="0",x=u&&[],T=h!=null,N=c,C=u||s&&i.find["TAG"]("*",h&&a.parentNode||a),k=b+=N==null?1:Math.E;if(T){c=a!==g&&a;n=o.el}for(;(p=C[w])!=null;w++){if(s&&p){for(d=0;v=e[d];d++){if(v(p,a,f)){l.push(p);break}}if(T){b=k;n=++o.el}}if(r){if(p=!v&&p){y--}if(u){x.push(p)}}}y+=w;if(r&&w!==y){for(d=0;v=t[d];d++){v(x,m,a,f)}if(u){if(y>0){while(w--){if(!(x[w]||m[w])){m[w]=E.call(l)}}}m=lt(m)}S.apply(l,m);if(T&&!u&&m.length>0&&y+t.length>1){nt.uniqueSort(l)}}if(T){b=k;c=N}return x};o.el=0;return r?N(o):o}function dt(e,t,n,r){var i=0,s=t.length;for(;i<s;i++){nt(e,t[i],n,r)}return n}function vt(e,t,n,r,s){var o,u,f,l,c,h=ut(e),p=h.length;if(!r){if(h.length===1){u=h[0]=h[0].slice(0);if(u.length>2&&(f=u[0]).type==="ID"&&t.nodeType===9&&!s&&i.relative[u[1].type]){t=i.find["ID"](f.matches[0].replace($,""),t,s)[0];if(!t){return n}e=e.slice(u.shift().length)}for(o=J["POS"].test(e)?-1:u.length-1;o>=0;o--){f=u[o];if(i.relative[l=f.type]){break}if(c=i.find[l]){if(r=c(f.matches[0].replace($,""),z.test(u[0].type)&&t.parentNode||t,s)){u.splice(o,1);e=r.length&&u.join("");if(!e){S.apply(n,x.call(r,0));return n}break}}}}}a(e,h)(r,t,s,n,z.test(e));return n}function mt(){}var n,r,i,s,o,u,a,f,l,c,h=true,p="undefined",d=("sizcache"+Math.random()).replace(".",""),m=String,g=e.document,y=g.documentElement,b=0,w=0,E=[].pop,S=[].push,x=[].slice,T=[].indexOf||function(e){var t=0,n=this.length;for(;t<n;t++){if(this[t]===e){return t}}return-1},N=function(e,t){e[d]=t==null||t;return e},C=function(){var e={},t=[];return N(function(n,r){if(t.push(n)>i.cacheLength){delete e[t.shift()]}return e[n]=r},e)},k=C(),L=C(),A=C(),O="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[-\\w]|[^\\x00-\\xa0])+",_=M.replace("w","w#"),D="([*^$|!~]?=)",P="\\["+O+"*("+M+")"+O+"*(?:"+D+O+"*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|("+_+")|)|)"+O+"*\\]",H=":("+M+")(?:\\((?:(['\"])((?:\\\\.|[^\\\\])*?)\\2|([^()[\\]]*|(?:(?:"+P+")|[^:]|\\\\.)*|.*))\\)|)",B=":(even|odd|eq|gt|lt|nth|first|last)(?:\\("+O+"*((?:-\\d)?\\d*)"+O+"*\\)|)(?=[^-]|$)",j=new RegExp("^"+O+"+|((?:^|[^\\\\])(?:\\\\.)*)"+O+"+$","g"),F=new RegExp("^"+O+"*,"+O+"*"),I=new RegExp("^"+O+"*([\\x20\\t\\r\\n\\f>+~])"+O+"*"),q=new RegExp(H),R=/^(?:#([\w\-]+)|(\w+)|\.([\w\-]+))$/,U=/^:not/,z=/[\x20\t\r\n\f]*[+~]/,W=/:not\($/,X=/h\d/i,V=/input|select|textarea|button/i,$=/\\(?!\\)/g,J={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),NAME:new RegExp("^\\[name=['\"]?("+M+")['\"]?\\]"),TAG:new RegExp("^("+M.replace("w","w*")+")"),ATTR:new RegExp("^"+P),PSEUDO:new RegExp("^"+H),POS:new RegExp(B,"i"),CHILD:new RegExp("^:(only|nth|first|last)-child(?:\\("+O+"*(even|odd|(([+-]|)(\\d*)n|)"+O+"*(?:([+-]|)"+O+"*(\\d+)|))"+O+"*\\)|)","i"),needsContext:new RegExp("^"+O+"*[>+~]|"+B,"i")},K=function(e){var t=g.createElement("div");try{return e(t)}catch(n){return false}finally{t=null}},Q=K(function(e){e.appendChild(g.createComment(""));return!e.getElementsByTagName("*").length}),G=K(function(e){e.innerHTML="<a href='#'></a>";return e.firstChild&&typeof e.firstChild.getAttribute!==p&&e.firstChild.getAttribute("href")==="#"}),Y=K(function(e){e.innerHTML="<select></select>";var t=typeof e.lastChild.getAttribute("multiple");return t!=="boolean"&&t!=="string"}),Z=K(function(e){e.innerHTML="<div class='hidden e'></div><div class='hidden'></div>";if(!e.getElementsByClassName||!e.getElementsByClassName("e").length){return false}e.lastChild.className="e";return e.getElementsByClassName("e").length===2}),et=K(function(e){e.id=d+0;e.innerHTML="<a name='"+d+"'></a><div name='"+d+"'></div>";y.insertBefore(e,y.firstChild);var t=g.getElementsByName&&g.getElementsByName(d).length===2+g.getElementsByName(d+0).length;r=!g.getElementById(d);y.removeChild(e);return t});try{x.call(y.childNodes,0)[0].nodeType}catch(tt){x=function(e){var t,n=[];for(;t=this[e];e++){n.push(t)}return n}}nt.matches=function(e,t){return nt(e,null,null,t)};nt.matchesSelector=function(e,t){return nt(t,null,null,[e]).length>0};s=nt.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(i===1||i===9||i===11){if(typeof e.textContent==="string"){return e.textContent}else{for(e=e.firstChild;e;e=e.nextSibling){n+=s(e)}}}else if(i===3||i===4){return e.nodeValue}}else{for(;t=e[r];r++){n+=s(t)}}return n};o=nt.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return t?t.nodeName!=="HTML":false};u=nt.contains=y.contains?function(e,t){var n=e.nodeType===9?e.documentElement:e,r=t&&t.parentNode;return e===r||!!(r&&r.nodeType===1&&n.contains&&n.contains(r))}:y.compareDocumentPosition?function(e,t){return t&&!!(e.compareDocumentPosition(t)&16)}:function(e,t){while(t=t.parentNode){if(t===e){return true}}return false};nt.attr=function(e,t){var n,r=o(e);if(!r){t=t.toLowerCase()}if(n=i.attrHandle[t]){return n(e)}if(r||Y){return e.getAttribute(t)}n=e.getAttributeNode(t);return n?typeof e[t]==="boolean"?e[t]?t:null:n.specified?n.value:null:null};i=nt.selectors={cacheLength:50,createPseudo:N,match:J,attrHandle:G?{}:{href:function(e){return e.getAttribute("href",2)},type:function(e){return e.getAttribute("type")}},find:{ID:r?function(e,t,n){if(typeof t.getElementById!==p&&!n){var r=t.getElementById(e);return r&&r.parentNode?[r]:[]}}:function(e,n,r){if(typeof n.getElementById!==p&&!r){var i=n.getElementById(e);return i?i.id===e||typeof i.getAttributeNode!==p&&i.getAttributeNode("id").value===e?[i]:t:[]}},TAG:Q?function(e,t){if(typeof t.getElementsByTagName!==p){return t.getElementsByTagName(e)}}:function(e,t){var n=t.getElementsByTagName(e);if(e==="*"){var r,i=[],s=0;for(;r=n[s];s++){if(r.nodeType===1){i.push(r)}}return i}return n},NAME:et&&function(e,t){if(typeof t.getElementsByName!==p){return t.getElementsByName(name)}},CLASS:Z&&function(e,t,n){if(typeof t.getElementsByClassName!==p&&!n){return t.getElementsByClassName(e)}}},relative:{">":{dir:"parentNode",first:true}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:true},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){e[1]=e[1].replace($,"");e[3]=(e[4]||e[5]||"").replace($,"");if(e[2]==="~="){e[3]=" "+e[3]+" "}return e.slice(0,4)},CHILD:function(e){e[1]=e[1].toLowerCase();if(e[1]==="nth"){if(!e[2]){nt.error(e[0])}e[3]=+(e[3]?e[4]+(e[5]||1):2*(e[2]==="even"||e[2]==="odd"));e[4]=+(e[6]+e[7]||e[2]==="odd")}else if(e[2]){nt.error(e[0])}return e},PSEUDO:function(e){var t,n;if(J["CHILD"].test(e[0])){return null}if(e[3]){e[2]=e[3]}else if(t=e[4]){if(q.test(t)&&(n=ut(t,true))&&(n=t.indexOf(")",t.length-n)-t.length)){t=t.slice(0,n);e[0]=e[0].slice(0,n)}e[2]=t}return e.slice(0,3)}},filter:{ID:r?function(e){e=e.replace($,"");return function(t){return t.getAttribute("id")===e}}:function(e){e=e.replace($,"");return function(t){var n=typeof t.getAttributeNode!==p&&t.getAttributeNode("id");return n&&n.value===e}},TAG:function(e){if(e==="*"){return function(){return true}}e=e.replace($,"").toLowerCase();return function(t){return t.nodeName&&t.nodeName.toLowerCase()===e}},CLASS:function(e){var t=k[d][e];if(!t){t=k(e,new RegExp("(^|"+O+")"+e+"("+O+"|$)"))}return function(e){return t.test(e.className||typeof e.getAttribute!==p&&e.getAttribute("class")||"")}},ATTR:function(e,t,n){return function(r,i){var s=nt.attr(r,e);if(s==null){return t==="!="}if(!t){return true}s+="";return t==="="?s===n:t==="!="?s!==n:t==="^="?n&&s.indexOf(n)===0:t==="*="?n&&s.indexOf(n)>-1:t==="$="?n&&s.substr(s.length-n.length)===n:t==="~="?(" "+s+" ").indexOf(n)>-1:t==="|="?s===n||s.substr(0,n.length+1)===n+"-":false}},CHILD:function(e,t,n,r){if(e==="nth"){return function(e){var t,i,s=e.parentNode;if(n===1&&r===0){return true}if(s){i=0;for(t=s.firstChild;t;t=t.nextSibling){if(t.nodeType===1){i++;if(e===t){break}}}}i-=r;return i===n||i%n===0&&i/n>=0}}return function(t){var n=t;switch(e){case"only":case"first":while(n=n.previousSibling){if(n.nodeType===1){return false}}if(e==="first"){return true}n=t;case"last":while(n=n.nextSibling){if(n.nodeType===1){return false}}return true}}},PSEUDO:function(e,t){var n,r=i.pseudos[e]||i.setFilters[e.toLowerCase()]||nt.error("unsupported pseudo: "+e);if(r[d]){return r(t)}if(r.length>1){n=[e,e,"",t];return i.setFilters.hasOwnProperty(e.toLowerCase())?N(function(e,n){var i,s=r(e,t),o=s.length;while(o--){i=T.call(e,s[o]);e[i]=!(n[i]=s[o])}}):function(e){return r(e,0,n)}}return r}},pseudos:{not:N(function(e){var t=[],n=[],r=a(e.replace(j,"$1"));return r[d]?N(function(e,t,n,i){var s,o=r(e,null,i,[]),u=e.length;while(u--){if(s=o[u]){e[u]=!(t[u]=s)}}}):function(e,i,s){t[0]=e;r(t,null,s,n);return!n.pop()}}),has:N(function(e){return function(t){return nt(e,t).length>0}}),contains:N(function(e){return function(t){return(t.textContent||t.innerText||s(t)).indexOf(e)>-1}}),enabled:function(e){return e.disabled===false},disabled:function(e){return e.disabled===true},checked:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&!!e.checked||t==="option"&&!!e.selected},selected:function(e){if(e.parentNode){e.parentNode.selectedIndex}return e.selected===true},parent:function(e){return!i.pseudos["empty"](e)},empty:function(e){var t;e=e.firstChild;while(e){if(e.nodeName>"@"||(t=e.nodeType)===3||t===4){return false}e=e.nextSibling}return true},header:function(e){return X.test(e.nodeName)},text:function(e){var t,n;return e.nodeName.toLowerCase()==="input"&&(t=e.type)==="text"&&((n=e.getAttribute("type"))==null||n.toLowerCase()===t)},radio:rt("radio"),checkbox:rt("checkbox"),file:rt("file"),password:rt("password"),image:rt("image"),submit:it("submit"),reset:it("reset"),button:function(e){var t=e.nodeName.toLowerCase();return t==="input"&&e.type==="button"||t==="button"},input:function(e){return V.test(e.nodeName)},focus:function(e){var t=e.ownerDocument;return e===t.activeElement&&(!t.hasFocus||t.hasFocus())&&!!(e.type||e.href)},active:function(e){return e===e.ownerDocument.activeElement},first:st(function(e,t,n){return[0]}),last:st(function(e,t,n){return[t-1]}),eq:st(function(e,t,n){return[n<0?n+t:n]}),even:st(function(e,t,n){for(var r=0;r<t;r+=2){e.push(r)}return e}),odd:st(function(e,t,n){for(var r=1;r<t;r+=2){e.push(r)}return e}),lt:st(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;){e.push(r)}return e}),gt:st(function(e,t,n){for(var r=n<0?n+t:n;++r<t;){e.push(r)}return e})}};f=y.compareDocumentPosition?function(e,t){if(e===t){l=true;return 0}return(!e.compareDocumentPosition||!t.compareDocumentPosition?e.compareDocumentPosition:e.compareDocumentPosition(t)&4)?-1:1}:function(e,t){if(e===t){l=true;return 0}else if(e.sourceIndex&&t.sourceIndex){return e.sourceIndex-t.sourceIndex}var n,r,i=[],s=[],o=e.parentNode,u=t.parentNode,a=o;if(o===u){return ot(e,t)}else if(!o){return-1}else if(!u){return 1}while(a){i.unshift(a);a=a.parentNode}a=u;while(a){s.unshift(a);a=a.parentNode}n=i.length;r=s.length;for(var f=0;f<n&&f<r;f++){if(i[f]!==s[f]){return ot(i[f],s[f])}}return f===n?ot(e,s[f],-1):ot(i[f],t,1)};[0,0].sort(f);h=!l;nt.uniqueSort=function(e){var t,n=1;l=h;e.sort(f);if(l){for(;t=e[n];n++){if(t===e[n-1]){e.splice(n--,1)}}}return e};nt.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)};a=nt.compile=function(e,t){var n,r=[],i=[],s=A[d][e];if(!s){if(!t){t=ut(e)}n=t.length;while(n--){s=ht(t[n]);if(s[d]){r.push(s)}else{i.push(s)}}s=A(e,pt(i,r))}return s};if(g.querySelectorAll){(function(){var e,t=vt,n=/'|\\/g,r=/\=[\x20\t\r\n\f]*([^'"\]]*)[\x20\t\r\n\f]*\]/g,i=[":focus"],s=[":active",":focus"],u=y.matchesSelector||y.mozMatchesSelector||y.webkitMatchesSelector||y.oMatchesSelector||y.msMatchesSelector;K(function(e){e.innerHTML="<select><option selected=''></option></select>";if(!e.querySelectorAll("[selected]").length){i.push("\\["+O+"*(?:checked|disabled|ismap|multiple|readonly|selected|value)")}if(!e.querySelectorAll(":checked").length){i.push(":checked")}});K(function(e){e.innerHTML="<p test=''></p>";if(e.querySelectorAll("[test^='']").length){i.push("[*^$]="+O+"*(?:\"\"|'')")}e.innerHTML="<input type='hidden'/>";if(!e.querySelectorAll(":enabled").length){i.push(":enabled",":disabled")}});i=new RegExp(i.join("|"));vt=function(e,r,s,o,u){if(!o&&!u&&(!i||!i.test(e))){var a,f,l=true,c=d,h=r,p=r.nodeType===9&&e;if(r.nodeType===1&&r.nodeName.toLowerCase()!=="object"){a=ut(e);if(l=r.getAttribute("id")){c=l.replace(n,"\\$&")}else{r.setAttribute("id",c)}c="[id='"+c+"'] ";f=a.length;while(f--){a[f]=c+a[f].join("")}h=z.test(e)&&r.parentNode||r;p=a.join(",")}if(p){try{S.apply(s,x.call(h.querySelectorAll(p),0));return s}catch(v){}finally{if(!l){r.removeAttribute("id")}}}}return t(e,r,s,o,u)};if(u){K(function(t){e=u.call(t,"div");try{u.call(t,"[test!='']:sizzle");s.push("!=",H)}catch(n){}});s=new RegExp(s.join("|"));nt.matchesSelector=function(t,n){n=n.replace(r,"='$1']");if(!o(t)&&!s.test(n)&&(!i||!i.test(n))){try{var a=u.call(t,n);if(a||e||t.document&&t.document.nodeType!==11){return a}}catch(f){}}return nt(n,null,null,[t]).length>0}}})()}i.pseudos["nth"]=i.pseudos["eq"];i.filters=mt.prototype=i.pseudos;i.setFilters=new mt;nt.attr=v.attr;v.find=nt;v.expr=nt.selectors;v.expr[":"]=v.expr.pseudos;v.unique=nt.uniqueSort;v.text=nt.getText;v.isXMLDoc=nt.isXML;v.contains=nt.contains})(e);var nt=/Until$/,rt=/^(?:parents|prev(?:Until|All))/,it=/^.[^:#\[\.,]*$/,st=v.expr.match.needsContext,ot={children:true,contents:true,next:true,prev:true};v.fn.extend({find:function(e){var t,n,r,i,s,o,u=this;if(typeof e!=="string"){return v(e).filter(function(){for(t=0,n=u.length;t<n;t++){if(v.contains(u[t],this)){return true}}})}o=this.pushStack("","find",e);for(t=0,n=this.length;t<n;t++){r=o.length;v.find(e,this[t],o);if(t>0){for(i=r;i<o.length;i++){for(s=0;s<r;s++){if(o[s]===o[i]){o.splice(i--,1);break}}}}}return o},has:function(e){var t,n=v(e,this),r=n.length;return this.filter(function(){for(t=0;t<r;t++){if(v.contains(this,n[t])){return true}}})},not:function(e){return this.pushStack(ft(this,e,false),"not",e)},filter:function(e){return this.pushStack(ft(this,e,true),"filter",e)},is:function(e){return!!e&&(typeof e==="string"?st.test(e)?v(e,this.context).index(this[0])>=0:v.filter(e,this).length>0:this.filter(e).length>0)},closest:function(e,t){var n,r=0,i=this.length,s=[],o=st.test(e)||typeof e!=="string"?v(e,t||this.context):0;for(;r<i;r++){n=this[r];while(n&&n.ownerDocument&&n!==t&&n.nodeType!==11){if(o?o.index(n)>-1:v.find.matchesSelector(n,e)){s.push(n);break}n=n.parentNode}}s=s.length>1?v.unique(s):s;return this.pushStack(s,"closest",e)},index:function(e){if(!e){return this[0]&&this[0].parentNode?this.prevAll().length:-1}if(typeof e==="string"){return v.inArray(this[0],v(e))}return v.inArray(e.FlixjQ?e[0]:e,this)},add:function(e,t){var n=typeof e==="string"?v(e,t):v.makeArray(e&&e.nodeType?[e]:e),r=v.merge(this.get(),n);return this.pushStack(ut(n[0])||ut(r[0])?r:v.unique(r))},addBack:function(e){return this.add(e==null?this.prevObject:this.prevObject.filter(e))}});v.fn.andSelf=v.fn.addBack;v.each({parent:function(e){var t=e.parentNode;return t&&t.nodeType!==11?t:null},parents:function(e){return v.dir(e,"parentNode")},parentsUntil:function(e,t,n){return v.dir(e,"parentNode",n)},next:function(e){return at(e,"nextSibling")},prev:function(e){return at(e,"previousSibling")},nextAll:function(e){return v.dir(e,"nextSibling")},prevAll:function(e){return v.dir(e,"previousSibling")},nextUntil:function(e,t,n){return v.dir(e,"nextSibling",n)},prevUntil:function(e,t,n){return v.dir(e,"previousSibling",n)},siblings:function(e){return v.sibling((e.parentNode||{}).firstChild,e)},children:function(e){return v.sibling(e.firstChild)},contents:function(e){return v.nodeName(e,"iframe")?e.contentDocument||e.contentWindow.document:v.merge([],e.childNodes)}},function(e,t){v.fn[e]=function(n,r){var i=v.map(this,t,n);if(!nt.test(e)){r=n}if(r&&typeof r==="string"){i=v.filter(r,i)}i=this.length>1&&!ot[e]?v.unique(i):i;if(this.length>1&&rt.test(e)){i=i.reverse()}return this.pushStack(i,e,l.call(arguments).join(","))}});v.extend({filter:function(e,t,n){if(n){e=":not("+e+")"}return t.length===1?v.find.matchesSelector(t[0],e)?[t[0]]:[]:v.find.matches(e,t)},dir:function(e,n,r){var i=[],s=e[n];while(s&&s.nodeType!==9&&(r===t||s.nodeType!==1||!v(s).is(r))){if(s.nodeType===1){i.push(s)}s=s[n]}return i},sibling:function(e,t){var n=[];for(;e;e=e.nextSibling){if(e.nodeType===1&&e!==t){n.push(e)}}return n}});var ct="abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|"+"header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",ht=/ FlixjQ\d+="(?:null|\d+)"/g,pt=/^\s+/,dt=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,vt=/<([\w:]+)/,mt=/<tbody/i,gt=/<|&#?\w+;/,yt=/<(?:script|style|link)/i,bt=/<(?:script|object|embed|option|style)/i,wt=new RegExp("<(?:"+ct+")[\\s/>]","i"),Et=/^(?:checkbox|radio)$/,St=/checked\s*(?:[^=]|=\s*.checked.)/i,xt=/\/(java|ecma)script/i,Tt=/^\s*<!(?:\[CDATA\[|\-\-)|[\]\-]{2}>\s*$/g,Nt={option:[1,"<select multiple='multiple'>","</select>"],legend:[1,"<fieldset>","</fieldset>"],thead:[1,"<table>","</table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],col:[2,"<table><tbody></tbody><colgroup>","</colgroup></table>"],area:[1,"<map>","</map>"],_default:[0,"",""]},Ct=lt(i),kt=Ct.appendChild(i.createElement("div"));Nt.optgroup=Nt.option;Nt.tbody=Nt.tfoot=Nt.colgroup=Nt.caption=Nt.thead;Nt.th=Nt.td;if(!v.support.htmlSerialize){Nt._default=[1,"X<div>","</div>"]}v.fn.extend({text:function(e){return v.access(this,function(e){return e===t?v.text(this):this.empty().append((this[0]&&this[0].ownerDocument||i).createTextNode(e))},null,e,arguments.length)},wrapAll:function(e){if(v.isFunction(e)){return this.each(function(t){v(this).wrapAll(e.call(this,t))})}if(this[0]){var t=v(e,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){t.insertBefore(this[0])}t.map(function(){var e=this;while(e.firstChild&&e.firstChild.nodeType===1){e=e.firstChild}return e}).append(this)}return this},wrapInner:function(e){if(v.isFunction(e)){return this.each(function(t){v(this).wrapInner(e.call(this,t))})}return this.each(function(){var t=v(this),n=t.contents();if(n.length){n.wrapAll(e)}else{t.append(e)}})},wrap:function(e){var t=v.isFunction(e);return this.each(function(n){v(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(){return this.parent().each(function(){if(!v.nodeName(this,"body")){v(this).replaceWith(this.childNodes)}}).end()},append:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11){this.appendChild(e)}})},prepend:function(){return this.domManip(arguments,true,function(e){if(this.nodeType===1||this.nodeType===11){this.insertBefore(e,this.firstChild)}})},before:function(){if(!ut(this[0])){return this.domManip(arguments,false,function(e){this.parentNode.insertBefore(e,this)})}if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(e,this),"before",this.selector)}},after:function(){if(!ut(this[0])){return this.domManip(arguments,false,function(e){this.parentNode.insertBefore(e,this.nextSibling)})}if(arguments.length){var e=v.clean(arguments);return this.pushStack(v.merge(this,e),"after",this.selector)}},remove:function(e,t){var n,r=0;for(;(n=this[r])!=null;r++){if(!e||v.filter(e,[n]).length){if(!t&&n.nodeType===1){v.cleanData(n.getElementsByTagName("*"));v.cleanData([n])}if(n.parentNode){n.parentNode.removeChild(n)}}}return this},empty:function(){var e,t=0;for(;(e=this[t])!=null;t++){if(e.nodeType===1){v.cleanData(e.getElementsByTagName("*"))}while(e.firstChild){e.removeChild(e.firstChild)}}return this},clone:function(e,t){e=e==null?false:e;t=t==null?e:t;return this.map(function(){return v.clone(this,e,t)})},html:function(e){return v.access(this,function(e){var n=this[0]||{},r=0,i=this.length;if(e===t){return n.nodeType===1?n.innerHTML.replace(ht,""):t}if(typeof e==="string"&&!yt.test(e)&&(v.support.htmlSerialize||!wt.test(e))&&(v.support.leadingWhitespace||!pt.test(e))&&!Nt[(vt.exec(e)||["",""])[1].toLowerCase()]){e=e.replace(dt,"<$1></$2>");try{for(;r<i;r++){n=this[r]||{};if(n.nodeType===1){v.cleanData(n.getElementsByTagName("*"));n.innerHTML=e}}n=0}catch(s){}}if(n){this.empty().append(e)}},null,e,arguments.length)},replaceWith:function(e){if(!ut(this[0])){if(v.isFunction(e)){return this.each(function(t){var n=v(this),r=n.html();n.replaceWith(e.call(this,t,r))})}if(typeof e!=="string"){e=v(e).detach()}return this.each(function(){var t=this.nextSibling,n=this.parentNode;v(this).remove();if(t){v(t).before(e)}else{v(n).append(e)}})}return this.length?this.pushStack(v(v.isFunction(e)?e():e),"replaceWith",e):this},detach:function(e){return this.remove(e,true)},domManip:function(e,n,r){e=[].concat.apply([],e);var i,s,o,u,a=0,f=e[0],l=[],c=this.length;if(!v.support.checkClone&&c>1&&typeof f==="string"&&St.test(f)){return this.each(function(){v(this).domManip(e,n,r)})}if(v.isFunction(f)){return this.each(function(i){var s=v(this);e[0]=f.call(this,i,n?s.html():t);s.domManip(e,n,r)})}if(this[0]){i=v.buildFragment(e,this,l);o=i.fragment;s=o.firstChild;if(o.childNodes.length===1){o=s}if(s){n=n&&v.nodeName(s,"tr");for(u=i.cacheable||c-1;a<c;a++){r.call(n&&v.nodeName(this[a],"table")?Lt(this[a],"tbody"):this[a],a===u?o:v.clone(o,true,true))}}o=s=null;if(l.length){v.each(l,function(e,t){if(t.src){if(v.ajax){v.ajax({url:t.src,type:"GET",dataType:"script",async:false,global:false,"throws":true})}else{v.error("no ajax")}}else{v.globalEval((t.text||t.textContent||t.innerHTML||"").replace(Tt,""))}if(t.parentNode){t.parentNode.removeChild(t)}})}}return this}});v.buildFragment=function(e,n,r){var s,o,u,a=e[0];n=n||i;n=!n.nodeType&&n[0]||n;n=n.ownerDocument||n;if(e.length===1&&typeof a==="string"&&a.length<512&&n===i&&a.charAt(0)==="<"&&!bt.test(a)&&(v.support.checkClone||!St.test(a))&&(v.support.html5Clone||!wt.test(a))){o=true;s=v.fragments[a];u=s!==t}if(!s){s=n.createDocumentFragment();v.clean(e,n,s,r);if(o){v.fragments[a]=u&&s}}return{fragment:s,cacheable:o}};v.fragments={};v.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){v.fn[e]=function(n){var r,i=0,s=[],o=v(n),u=o.length,a=this.length===1&&this[0].parentNode;if((a==null||a&&a.nodeType===11&&a.childNodes.length===1)&&u===1){o[t](this[0]);return this}else{for(;i<u;i++){r=(i>0?this.clone(true):this).get();v(o[i])[t](r);s=s.concat(r)}return this.pushStack(s,e,o.selector)}}});v.extend({clone:function(e,t,n){var r,i,s,o;if(v.support.html5Clone||v.isXMLDoc(e)||!wt.test("<"+e.nodeName+">")){o=e.cloneNode(true)}else{kt.innerHTML=e.outerHTML;kt.removeChild(o=kt.firstChild)}if((!v.support.noCloneEvent||!v.support.noCloneChecked)&&(e.nodeType===1||e.nodeType===11)&&!v.isXMLDoc(e)){Ot(e,o);r=Mt(e);i=Mt(o);for(s=0;r[s];++s){if(i[s]){Ot(r[s],i[s])}}}if(t){At(e,o);if(n){r=Mt(e);i=Mt(o);for(s=0;r[s];++s){At(r[s],i[s])}}}r=i=null;return o},clean:function(e,t,n,r){var s,o,u,a,f,l,c,h,p,d,m,g,y=t===i&&Ct,b=[];if(!t||typeof t.createDocumentFragment==="undefined"){t=i}for(s=0;(u=e[s])!=null;s++){if(typeof u==="number"){u+=""}if(!u){continue}if(typeof u==="string"){if(!gt.test(u)){u=t.createTextNode(u)}else{y=y||lt(t);c=t.createElement("div");y.appendChild(c);u=u.replace(dt,"<$1></$2>");a=(vt.exec(u)||["",""])[1].toLowerCase();f=Nt[a]||Nt._default;l=f[0];c.innerHTML=f[1]+u+f[2];while(l--){c=c.lastChild}if(!v.support.tbody){h=mt.test(u);p=a==="table"&&!h?c.firstChild&&c.firstChild.childNodes:f[1]==="<table>"&&!h?c.childNodes:[];for(o=p.length-1;o>=0;--o){if(v.nodeName(p[o],"tbody")&&!p[o].childNodes.length){p[o].parentNode.removeChild(p[o])}}}if(!v.support.leadingWhitespace&&pt.test(u)){c.insertBefore(t.createTextNode(pt.exec(u)[0]),c.firstChild)}u=c.childNodes;c.parentNode.removeChild(c)}}if(u.nodeType){b.push(u)}else{v.merge(b,u)}}if(c){u=c=y=null}if(!v.support.appendChecked){for(s=0;(u=b[s])!=null;s++){if(v.nodeName(u,"input")){_t(u)}else if(typeof u.getElementsByTagName!=="undefined"){v.grep(u.getElementsByTagName("input"),_t)}}}if(n){m=function(e){if(!e.type||xt.test(e.type)){return r?r.push(e.parentNode?e.parentNode.removeChild(e):e):n.appendChild(e)}};for(s=0;(u=b[s])!=null;s++){if(!(v.nodeName(u,"script")&&m(u))){n.appendChild(u);if(typeof u.getElementsByTagName!=="undefined"){g=v.grep(v.merge([],u.getElementsByTagName("script")),m);b.splice.apply(b,[s+1,0].concat(g));s+=g.length}}}}return b},cleanData:function(e,t){var n,r,i,s,o=0,u=v.expando,a=v.cache,f=v.support.deleteExpando,l=v.event.special;for(;(i=e[o])!=null;o++){if(t||v.acceptData(i)){r=i[u];n=r&&a[r];if(n){if(n.events){for(s in n.events){if(l[s]){v.event.remove(i,s)}else{v.removeEvent(i,s,n.handle)}}}if(a[r]){delete a[r];if(f){delete i[u]}else if(i.removeAttribute){i.removeAttribute(u)}else{i[u]=null}v.deletedIds.push(r)}}}}}});(function(){var e,t;v.uaMatch=function(e){e=e.toLowerCase();var t=/(chrome)[ \/]([\w.]+)/.exec(e)||/(webkit)[ \/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:t[1]||"",version:t[2]||"0"}};e=v.uaMatch(o.userAgent);t={};if(e.browser){t[e.browser]=true;t.version=e.version}if(t.chrome){t.webkit=true}else if(t.webkit){t.safari=true}v.browser=t;v.sub=function(){function e(t,n){return new e.fn.init(t,n)}v.extend(true,e,this);e.superclass=this;e.fn=e.prototype=this();e.fn.constructor=e;e.sub=this.sub;e.fn.init=function(r,i){if(i&&i instanceof v&&!(i instanceof e)){i=e(i)}return v.fn.init.call(this,r,i,t)};e.fn.init.prototype=e.fn;var t=e(i);return e}})();var Dt,Pt,Ht,Bt=/alpha\([^)]*\)/i,jt=/opacity=([^)]*)/,Ft=/^(top|right|bottom|left)$/,It=/^(none|table(?!-c[ea]).+)/,qt=/^margin/,Rt=new RegExp("^("+m+")(.*)$","i"),Ut=new RegExp("^("+m+")(?!px)[a-z%]+$","i"),zt=new RegExp("^([-+])=("+m+")","i"),Wt={},Xt={position:"absolute",visibility:"hidden",display:"block"},Vt={letterSpacing:0,fontWeight:400},$t=["Top","Right","Bottom","Left"],Jt=["Webkit","O","Moz","ms"],Kt=v.fn.toggle;v.fn.extend({css:function(e,n){return v.access(this,function(e,n,r){return r!==t?v.style(e,n,r):v.css(e,n)},e,n,arguments.length>1)},show:function(){return Yt(this,true)},hide:function(){return Yt(this)},toggle:function(e,t){var n=typeof e==="boolean";if(v.isFunction(e)&&v.isFunction(t)){return Kt.apply(this,arguments)}return this.each(function(){if(n?e:Gt(this)){v(this).show()}else{v(this).hide()}})}});v.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Dt(e,"opacity");return n===""?"1":n}}}},cssNumber:{fillOpacity:true,fontWeight:true,lineHeight:true,opacity:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{"float":v.support.cssFloat?"cssFloat":"styleFloat"},style:function(e,n,r,i){if(!e||e.nodeType===3||e.nodeType===8||!e.style){return}var s,o,u,a=v.camelCase(n),f=e.style;n=v.cssProps[a]||(v.cssProps[a]=Qt(f,a));u=v.cssHooks[n]||v.cssHooks[a];if(r!==t){o=typeof r;if(o==="string"&&(s=zt.exec(r))){r=(s[1]+1)*s[2]+parseFloat(v.css(e,n));o="number"}if(r==null||o==="number"&&isNaN(r)){return}if(o==="number"&&!v.cssNumber[a]){r+="px"}if(!u||!("set"in u)||(r=u.set(e,r,i))!==t){try{f[n]=r}catch(l){}}}else{if(u&&"get"in u&&(s=u.get(e,false,i))!==t){return s}return f[n]}},css:function(e,n,r,i){var s,o,u,a=v.camelCase(n);n=v.cssProps[a]||(v.cssProps[a]=Qt(e.style,a));u=v.cssHooks[n]||v.cssHooks[a];if(u&&"get"in u){s=u.get(e,true,i)}if(s===t){s=Dt(e,n)}if(s==="normal"&&n in Vt){s=Vt[n]}if(r||i!==t){o=parseFloat(s);return r||v.isNumeric(o)?o||0:s}return s},swap:function(e,t,n){var r,i,s={};for(i in t){s[i]=e.style[i];e.style[i]=t[i]}r=n.call(e);for(i in t){e.style[i]=s[i]}return r}});if(e.getComputedStyle){Dt=function(t,n){var r,i,s,o,u=e.getComputedStyle(t,null),a=t.style;if(u){r=u[n];if(r===""&&!v.contains(t.ownerDocument,t)){r=v.style(t,n)}if(Ut.test(r)&&qt.test(n)){i=a.width;s=a.minWidth;o=a.maxWidth;a.minWidth=a.maxWidth=a.width=r;r=u.width;a.width=i;a.minWidth=s;a.maxWidth=o}}return r}}else if(i.documentElement.currentStyle){Dt=function(e,t){var n,r,i=e.currentStyle&&e.currentStyle[t],s=e.style;if(i==null&&s&&s[t]){i=s[t]}if(Ut.test(i)&&!Ft.test(t)){n=s.left;r=e.runtimeStyle&&e.runtimeStyle.left;if(r){e.runtimeStyle.left=e.currentStyle.left}s.left=t==="fontSize"?"1em":i;i=s.pixelLeft+"px";s.left=n;if(r){e.runtimeStyle.left=r}}return i===""?"auto":i}}v.each(["height","width"],function(e,t){v.cssHooks[t]={get:function(e,n,r){if(n){if(e.offsetWidth===0&&It.test(Dt(e,"display"))){return v.swap(e,Xt,function(){return tn(e,t,r)})}else{return tn(e,t,r)}}},set:function(e,n,r){return Zt(e,n,r?en(e,t,r,v.support.boxSizing&&v.css(e,"boxSizing")==="border-box"):0)}}});if(!v.support.opacity){v.cssHooks.opacity={get:function(e,t){return jt.test((t&&e.currentStyle?e.currentStyle.filter:e.style.filter)||"")?.01*parseFloat(RegExp.$1)+"":t?"1":""},set:function(e,t){var n=e.style,r=e.currentStyle,i=v.isNumeric(t)?"alpha(opacity="+t*100+")":"",s=r&&r.filter||n.filter||"";n.zoom=1;if(t>=1&&v.trim(s.replace(Bt,""))===""&&n.removeAttribute){n.removeAttribute("filter");if(r&&!r.filter){return}}n.filter=Bt.test(s)?s.replace(Bt,i):s+" "+i}}}v(function(){if(!v.support.reliableMarginRight){v.cssHooks.marginRight={get:function(e,t){return v.swap(e,{display:"inline-block"},function(){if(t){return Dt(e,"marginRight")}})}}}if(!v.support.pixelPosition&&v.fn.position){v.each(["top","left"],function(e,t){v.cssHooks[t]={get:function(e,n){if(n){var r=Dt(e,t);return Ut.test(r)?v(e).position()[t]+"px":r}}}})}});if(v.expr&&v.expr.filters){v.expr.filters.hidden=function(e){return e.offsetWidth===0&&e.offsetHeight===0||!v.support.reliableHiddenOffsets&&(e.style&&e.style.display||Dt(e,"display"))==="none"};v.expr.filters.visible=function(e){return!v.expr.filters.hidden(e)}}v.each({margin:"",padding:"",border:"Width"},function(e,t){v.cssHooks[e+t]={expand:function(n){var r,i=typeof n==="string"?n.split(" "):[n],s={};for(r=0;r<4;r++){s[e+$t[r]+t]=i[r]||i[r-2]||i[0]}return s}};if(!qt.test(e)){v.cssHooks[e+t].set=Zt}});var rn=/%20/g,sn=/\[\]$/,on=/\r?\n/g,un=/^(?:color|date|datetime|datetime-local|email|hidden|month|number|password|range|search|tel|text|time|url|week)$/i,an=/^(?:select|textarea)/i;v.fn.extend({serialize:function(){return v.param(this.serializeArray())},serializeArray:function(){return this.map(function(){return this.elements?v.makeArray(this.elements):this}).filter(function(){return this.name&&!this.disabled&&(this.checked||an.test(this.nodeName)||un.test(this.type))}).map(function(e,t){var n=v(this).val();return n==null?null:v.isArray(n)?v.map(n,function(e,n){return{name:t.name,value:e.replace(on,"\r\n")}}):{name:t.name,value:n.replace(on,"\r\n")}}).get()}});v.param=function(e,n){var r,i=[],s=function(e,t){t=v.isFunction(t)?t():t==null?"":t;i[i.length]=encodeURIComponent(e)+"="+encodeURIComponent(t)};if(n===t){n=v.ajaxSettings&&v.ajaxSettings.traditional}if(v.isArray(e)||e.FlixjQ&&!v.isPlainObject(e)){v.each(e,function(){s(this.name,this.value)})}else{for(r in e){fn(r,e[r],n,s)}}return i.join("&").replace(rn,"+")};var ln,cn,hn=/#.*$/,pn=/^(.*?):[ \t]*([^\r\n]*)\r?$/mg,dn=/^(?:about|app|app\-storage|.+\-extension|file|res|widget):$/,vn=/^(?:GET|HEAD)$/,mn=/^\/\//,gn=/\?/,yn=/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,bn=/([?&])_=[^&]*/,wn=/^([\w\+\.\-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,En=v.fn.load,Sn={},xn={},Tn=["*/"]+["*"];try{cn=s.href}catch(Nn){cn=i.createElement("a");cn.href="";cn=cn.href}ln=wn.exec(cn.toLowerCase())||[];v.fn.load=function(e,n,r){if(typeof e!=="string"&&En){return En.apply(this,arguments)}if(!this.length){return this}var i,s,o,u=this,a=e.indexOf(" ");if(a>=0){i=e.slice(a,e.length);e=e.slice(0,a)}if(v.isFunction(n)){r=n;n=t}else if(n&&typeof n==="object"){s="POST"}v.ajax({url:e,type:s,dataType:"html",data:n,complete:function(e,t){if(r){u.each(r,o||[e.responseText,t,e])}}}).done(function(e){o=arguments;u.html(i?v("<div>").append(e.replace(yn,"")).find(i):e)});return this};v.each("ajaxStart ajaxStop ajaxComplete ajaxError ajaxSuccess ajaxSend".split(" "),function(e,t){v.fn[t]=function(e){return this.on(t,e)}});v.each(["get","post"],function(e,n){v[n]=function(e,r,i,s){if(v.isFunction(r)){s=s||i;i=r;r=t}return v.ajax({type:n,url:e,data:r,success:i,dataType:s})}});v.extend({getScript:function(e,n){return v.get(e,t,n,"script")},getJSON:function(e,t,n){return v.get(e,t,n,"json")},ajaxSetup:function(e,t){if(t){Ln(e,v.ajaxSettings)}else{t=e;e=v.ajaxSettings}Ln(e,t);return e},ajaxSettings:{url:cn,isLocal:dn.test(ln[1]),global:true,type:"GET",contentType:"application/x-www-form-urlencoded; charset=UTF-8",processData:true,async:true,accepts:{xml:"application/xml, text/xml",html:"text/html",text:"text/plain",json:"application/json, text/javascript","*":Tn},contents:{xml:/xml/,html:/html/,json:/json/},responseFields:{xml:"responseXML",text:"responseText"},converters:{"* text":e.String,"text html":true,"text json":v.parseJSON,"text xml":v.parseXML},flatOptions:{context:true,url:true}},ajaxPrefilter:Cn(Sn),ajaxTransport:Cn(xn),ajax:function(e,n){function T(e,n,s,a){var l,y,b,w,S,T=n;if(E===2){return}E=2;if(u){clearTimeout(u)}o=t;i=a||"";x.readyState=e>0?4:0;if(s){w=An(c,x,s)}if(e>=200&&e<300||e===304){if(c.ifModified){S=x.getResponseHeader("Last-Modified");if(S){v.lastModified[r]=S}S=x.getResponseHeader("Etag");if(S){v.etag[r]=S}}if(e===304){T="notmodified";l=true}else{l=On(c,w);T=l.state;y=l.data;b=l.error;l=!b}}else{b=T;if(!T||e){T="error";if(e<0){e=0}}}x.status=e;x.statusText=(n||T)+"";if(l){d.resolveWith(h,[y,T,x])}else{d.rejectWith(h,[x,T,b])}x.statusCode(g);g=t;if(f){p.trigger("ajax"+(l?"Success":"Error"),[x,c,l?y:b])}m.fireWith(h,[x,T]);if(f){p.trigger("ajaxComplete",[x,c]);if(!--v.active){v.event.trigger("ajaxStop")}}}if(typeof e==="object"){n=e;e=t}n=n||{};var r,i,s,o,u,a,f,l,c=v.ajaxSetup({},n),h=c.context||c,p=h!==c&&(h.nodeType||h instanceof v)?v(h):v.event,d=v.Deferred(),m=v.Callbacks("once memory"),g=c.statusCode||{},b={},w={},E=0,S="canceled",x={readyState:0,setRequestHeader:function(e,t){if(!E){var n=e.toLowerCase();e=w[n]=w[n]||e;b[e]=t}return this},getAllResponseHeaders:function(){return E===2?i:null},getResponseHeader:function(e){var n;if(E===2){if(!s){s={};while(n=pn.exec(i)){s[n[1].toLowerCase()]=n[2]}}n=s[e.toLowerCase()]}return n===t?null:n},overrideMimeType:function(e){if(!E){c.mimeType=e}return this},abort:function(e){e=e||S;if(o){o.abort(e)}T(0,e);return this}};d.promise(x);x.success=x.done;x.error=x.fail;x.complete=m.add;x.statusCode=function(e){if(e){var t;if(E<2){for(t in e){g[t]=[g[t],e[t]]}}else{t=e[x.status];x.always(t)}}return this};c.url=((e||c.url)+"").replace(hn,"").replace(mn,ln[1]+"//");c.dataTypes=v.trim(c.dataType||"*").toLowerCase().split(y);if(c.crossDomain==null){a=wn.exec(c.url.toLowerCase())||false;c.crossDomain=a&&a.join(":")+(a[3]?"":a[1]==="http:"?80:443)!==ln.join(":")+(ln[3]?"":ln[1]==="http:"?80:443)}if(c.data&&c.processData&&typeof c.data!=="string"){c.data=v.param(c.data,c.traditional)}kn(Sn,c,n,x);if(E===2){return x}f=c.global;c.type=c.type.toUpperCase();c.hasContent=!vn.test(c.type);if(f&&v.active++===0){v.event.trigger("ajaxStart")}if(!c.hasContent){if(c.data){c.url+=(gn.test(c.url)?"&":"?")+c.data;delete c.data}r=c.url;if(c.cache===false){var N=v.now(),C=c.url.replace(bn,"$1_="+N);c.url=C+(C===c.url?(gn.test(c.url)?"&":"?")+"_="+N:"")}}if(c.data&&c.hasContent&&c.contentType!==false||n.contentType){x.setRequestHeader("Content-Type",c.contentType)}if(c.ifModified){r=r||c.url;if(v.lastModified[r]){x.setRequestHeader("If-Modified-Since",v.lastModified[r])}if(v.etag[r]){x.setRequestHeader("If-None-Match",v.etag[r])}}x.setRequestHeader("Accept",c.dataTypes[0]&&c.accepts[c.dataTypes[0]]?c.accepts[c.dataTypes[0]]+(c.dataTypes[0]!=="*"?", "+Tn+"; q=0.01":""):c.accepts["*"]);for(l in c.headers){x.setRequestHeader(l,c.headers[l])}if(c.beforeSend&&(c.beforeSend.call(h,x,c)===false||E===2)){return x.abort()}S="abort";for(l in{success:1,error:1,complete:1}){x[l](c[l])}o=kn(xn,c,n,x);if(!o){T(-1,"No Transport")}else{x.readyState=1;if(f){p.trigger("ajaxSend",[x,c])}if(c.async&&c.timeout>0){u=setTimeout(function(){x.abort("timeout")},c.timeout)}try{E=1;o.send(b,T)}catch(k){if(E<2){T(-1,k)}else{throw k}}}return x},active:0,lastModified:{},etag:{}});var Mn=[],_n=/\?/,Dn=/(=)\?(?=&|$)|\?\?/,Pn=v.now();v.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Mn.pop()||v.expando+"_"+Pn++;this[e]=true;return e}});v.ajaxPrefilter("json jsonp",function(n,r,i){var s,o,u,a=n.data,f=n.url,l=n.jsonp!==false,c=l&&Dn.test(f),h=l&&!c&&typeof a==="string"&&!(n.contentType||"").indexOf("application/x-www-form-urlencoded")&&Dn.test(a);if(n.dataTypes[0]==="jsonp"||c||h){s=n.jsonpCallback=v.isFunction(n.jsonpCallback)?n.jsonpCallback():n.jsonpCallback;o=e[s];if(c){n.url=f.replace(Dn,"$1"+s)}else if(h){n.data=a.replace(Dn,"$1"+s)}else if(l){n.url+=(_n.test(f)?"&":"?")+n.jsonp+"="+s}n.converters["script json"]=function(){if(!u){v.error(s+" was not called")}return u[0]};n.dataTypes[0]="json";e[s]=function(){u=arguments};i.always(function(){e[s]=o;if(n[s]){n.jsonpCallback=r.jsonpCallback;Mn.push(s)}if(u&&v.isFunction(o)){o(u[0])}u=o=t});return"script"}});v.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/javascript|ecmascript/},converters:{"text script":function(e){v.globalEval(e);return e}}});v.ajaxPrefilter("script",function(e){if(e.cache===t){e.cache=false}if(e.crossDomain){e.type="GET";e.global=false}});v.ajaxTransport("script",function(e){if(e.crossDomain){var n,r=i.head||i.getElementsByTagName("head")[0]||i.documentElement;return{send:function(s,o){n=i.createElement("script");n.async="async";if(e.scriptCharset){n.charset=e.scriptCharset}n.src=e.url;n.onload=n.onreadystatechange=function(e,i){if(i||!n.readyState||/loaded|complete/.test(n.readyState)){n.onload=n.onreadystatechange=null;if(r&&n.parentNode){r.removeChild(n)}n=t;if(!i){o(200,"success")}}};r.insertBefore(n,r.firstChild)},abort:function(){if(n){n.onload(0,1)}}}}});var Hn,Bn=e.ActiveXObject?function(){for(var e in Hn){Hn[e](0,1)}}:false,jn=0;v.ajaxSettings.xhr=e.ActiveXObject?function(){return!this.isLocal&&Fn()||In()}:Fn;(function(e){v.extend(v.support,{ajax:!!e,cors:!!e&&"withCredentials"in e})})(v.ajaxSettings.xhr());if(v.support.ajax){v.ajaxTransport(function(n){if(!n.crossDomain||v.support.cors){var r;return{send:function(i,s){var o,u,a=n.xhr();if(n.username){a.open(n.type,n.url,n.async,n.username,n.password)}else{a.open(n.type,n.url,n.async)}if(n.xhrFields){for(u in n.xhrFields){a[u]=n.xhrFields[u]}}if(n.mimeType&&a.overrideMimeType){a.overrideMimeType(n.mimeType)}if(!n.crossDomain&&!i["X-Requested-With"]){i["X-Requested-With"]="XMLHttpRequest"}try{for(u in i){a.setRequestHeader(u,i[u])}}catch(f){}a.send(n.hasContent&&n.data||null);r=function(e,i){var u,f,l,c,h;try{if(r&&(i||a.readyState===4)){r=t;if(o){a.onreadystatechange=v.noop;if(Bn){delete Hn[o]}}if(i){if(a.readyState!==4){a.abort()}}else{u=a.status;l=a.getAllResponseHeaders();c={};h=a.responseXML;if(h&&h.documentElement){c.xml=h}try{c.text=a.responseText}catch(e){}try{f=a.statusText}catch(p){f=""}if(!u&&n.isLocal&&!n.crossDomain){u=c.text?200:404}else if(u===1223){u=204}}}}catch(d){if(!i){s(-1,d)}}if(c){s(u,f,c,l)}};if(!n.async){r()}else if(a.readyState===4){setTimeout(r,0)}else{o=++jn;if(Bn){if(!Hn){Hn={};v(e).unload(Bn)}Hn[o]=r}a.onreadystatechange=r}},abort:function(){if(r){r(0,1)}}}}})}var qn,Rn,Un=/^(?:toggle|show|hide)$/,zn=new RegExp("^(?:([-+])=|)("+m+")([a-z%]*)$","i"),Wn=/queueHooks$/,Xn=[Gn],Vn={"*":[function(e,t){var n,r,i=this.createTween(e,t),s=zn.exec(t),o=i.cur(),u=+o||0,a=1,f=20;if(s){n=+s[2];r=s[3]||(v.cssNumber[e]?"":"px");if(r!=="px"&&u){u=v.css(i.elem,e,true)||n||1;do{a=a||".5";u=u/a;v.style(i.elem,e,u+r)}while(a!==(a=i.cur()/o)&&a!==1&&--f)}i.unit=r;i.start=u;i.end=s[1]?u+(s[1]+1)*n:n}return i}]};v.Animation=v.extend(Kn,{tweener:function(e,t){if(v.isFunction(e)){t=e;e=["*"]}else{e=e.split(" ")}var n,r=0,i=e.length;for(;r<i;r++){n=e[r];Vn[n]=Vn[n]||[];Vn[n].unshift(t)}},prefilter:function(e,t){if(t){Xn.unshift(e)}else{Xn.push(e)}}});v.Tween=Yn;Yn.prototype={constructor:Yn,init:function(e,t,n,r,i,s){this.elem=e;this.prop=n;this.easing=i||"swing";this.options=t;this.start=this.now=this.cur();this.end=r;this.unit=s||(v.cssNumber[n]?"":"px")},cur:function(){var e=Yn.propHooks[this.prop];return e&&e.get?e.get(this):Yn.propHooks._default.get(this)},run:function(e){var t,n=Yn.propHooks[this.prop];if(this.options.duration){this.pos=t=v.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration)}else{this.pos=t=e}this.now=(this.end-this.start)*t+this.start;if(this.options.step){this.options.step.call(this.elem,this.now,this)}if(n&&n.set){n.set(this)}else{Yn.propHooks._default.set(this)}return this}};Yn.prototype.init.prototype=Yn.prototype;Yn.propHooks={_default:{get:function(e){var t;if(e.elem[e.prop]!=null&&(!e.elem.style||e.elem.style[e.prop]==null)){return e.elem[e.prop]}t=v.css(e.elem,e.prop,false,"");return!t||t==="auto"?0:t},set:function(e){if(v.fx.step[e.prop]){v.fx.step[e.prop](e)}else if(e.elem.style&&(e.elem.style[v.cssProps[e.prop]]!=null||v.cssHooks[e.prop])){v.style(e.elem,e.prop,e.now+e.unit)}else{e.elem[e.prop]=e.now}}}};Yn.propHooks.scrollTop=Yn.propHooks.scrollLeft={set:function(e){if(e.elem.nodeType&&e.elem.parentNode){e.elem[e.prop]=e.now}}};v.each(["toggle","show","hide"],function(e,t){var n=v.fn[t];v.fn[t]=function(r,i,s){return r==null||typeof r==="boolean"||!e&&v.isFunction(r)&&v.isFunction(i)?n.apply(this,arguments):this.animate(Zn(t,true),r,i,s)}});v.fn.extend({fadeTo:function(e,t,n,r){return this.filter(Gt).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=v.isEmptyObject(e),s=v.speed(t,n,r),o=function(){var t=Kn(this,v.extend({},e),s);if(i){t.stop(true)}};return i||s.queue===false?this.each(o):this.queue(s.queue,o)},stop:function(e,n,r){var i=function(e){var t=e.stop;delete e.stop;t(r)};if(typeof e!=="string"){r=n;n=e;e=t}if(n&&e!==false){this.queue(e||"fx",[])}return this.each(function(){var t=true,n=e!=null&&e+"queueHooks",s=v.timers,o=v._data(this);if(n){if(o[n]&&o[n].stop){i(o[n])}}else{for(n in o){if(o[n]&&o[n].stop&&Wn.test(n)){i(o[n])}}}for(n=s.length;n--;){if(s[n].elem===this&&(e==null||s[n].queue===e)){s[n].anim.stop(r);t=false;s.splice(n,1)}}if(t||!r){v.dequeue(this,e)}})}});v.each({slideDown:Zn("show"),slideUp:Zn("hide"),slideToggle:Zn("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){v.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}});v.speed=function(e,t,n){var r=e&&typeof e==="object"?v.extend({},e):{complete:n||!n&&t||v.isFunction(e)&&e,duration:e,easing:n&&t||t&&!v.isFunction(t)&&t};r.duration=v.fx.off?0:typeof r.duration==="number"?r.duration:r.duration in v.fx.speeds?v.fx.speeds[r.duration]:v.fx.speeds._default;if(r.queue==null||r.queue===true){r.queue="fx"}r.old=r.complete;r.complete=function(){if(v.isFunction(r.old)){r.old.call(this)}if(r.queue){v.dequeue(this,r.queue)}};return r};v.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2}};v.timers=[];v.fx=Yn.prototype.init;v.fx.tick=function(){var e,t=v.timers,n=0;for(;n<t.length;n++){e=t[n];if(!e()&&t[n]===e){t.splice(n--,1)}}if(!t.length){v.fx.stop()}};v.fx.timer=function(e){if(e()&&v.timers.push(e)&&!Rn){Rn=setInterval(v.fx.tick,v.fx.interval)}};v.fx.interval=13;v.fx.stop=function(){clearInterval(Rn);Rn=null};v.fx.speeds={slow:600,fast:200,_default:400};v.fx.step={};if(v.expr&&v.expr.filters){v.expr.filters.animated=function(e){return v.grep(v.timers,function(t){return e===t.elem}).length}}var er=/^(?:body|html)$/i;v.fn.offset=function(e){if(arguments.length){return e===t?this:this.each(function(t){v.offset.setOffset(this,e,t)})}var n,r,i,s,o,u,a,f={top:0,left:0},l=this[0],c=l&&l.ownerDocument;if(!c){return}if((r=c.body)===l){return v.offset.bodyOffset(l)}n=c.documentElement;if(!v.contains(n,l)){return f}if(typeof l.getBoundingClientRect!=="undefined"){f=l.getBoundingClientRect()}i=tr(c);s=n.clientTop||r.clientTop||0;o=n.clientLeft||r.clientLeft||0;u=i.pageYOffset||n.scrollTop;a=i.pageXOffset||n.scrollLeft;return{top:f.top+u-s,left:f.left+a-o}};v.offset={bodyOffset:function(e){var t=e.offsetTop,n=e.offsetLeft;if(v.support.doesNotIncludeMarginInBodyOffset){t+=parseFloat(v.css(e,"marginTop"))||0;n+=parseFloat(v.css(e,"marginLeft"))||0}return{top:t,left:n}},setOffset:function(e,t,n){var r=v.css(e,"position");if(r==="static"){e.style.position="relative"}var i=v(e),s=i.offset(),o=v.css(e,"top"),u=v.css(e,"left"),a=(r==="absolute"||r==="fixed")&&v.inArray("auto",[o,u])>-1,f={},l={},c,h;if(a){l=i.position();c=l.top;h=l.left}else{c=parseFloat(o)||0;h=parseFloat(u)||0}if(v.isFunction(t)){t=t.call(e,n,s)}if(t.top!=null){f.top=t.top-s.top+c}if(t.left!=null){f.left=t.left-s.left+h}if("using"in t){t.using.call(e,f)}else{i.css(f)}}};v.fn.extend({position:function(){if(!this[0]){return}var e=this[0],t=this.offsetParent(),n=this.offset(),r=er.test(t[0].nodeName)?{top:0,left:0}:t.offset();n.top-=parseFloat(v.css(e,"marginTop"))||0;n.left-=parseFloat(v.css(e,"marginLeft"))||0;r.top+=parseFloat(v.css(t[0],"borderTopWidth"))||0;r.left+=parseFloat(v.css(t[0],"borderLeftWidth"))||0;return{top:n.top-r.top,left:n.left-r.left}},offsetParent:function(){return this.map(function(){var e=this.offsetParent||i.body;while(e&&!er.test(e.nodeName)&&v.css(e,"position")==="static"){e=e.offsetParent}return e||i.body})}});v.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,n){var r=/Y/.test(n);v.fn[e]=function(i){return v.access(this,function(e,i,s){var o=tr(e);if(s===t){return o?n in o?o[n]:o.document.documentElement[i]:e[i]}if(o){o.scrollTo(!r?s:v(o).scrollLeft(),r?s:v(o).scrollTop())}else{e[i]=s}},e,i,arguments.length,null)}});v.each({Height:"height",Width:"width"},function(e,n){v.each({padding:"inner"+e,content:n,"":"outer"+e},function(r,i){v.fn[i]=function(i,s){var o=arguments.length&&(r||typeof i!=="boolean"),u=r||(i===true||s===true?"margin":"border");return v.access(this,function(n,r,i){var s;if(v.isWindow(n)){return n.document.documentElement["client"+e]}if(n.nodeType===9){s=n.documentElement;return Math.max(n.body["scroll"+e],s["scroll"+e],n.body["offset"+e],s["offset"+e],s["client"+e])}return i===t?v.css(n,r,i,u):v.style(n,r,i,u)},n,o?i:t,o,null)}})});e.FlixjQ=v;if(typeof define==="function"&&define.amd&&define.amd.FlixjQ){define("FlixjQ",[],function(){return v})}})(window)}
FlixjQ = FlixjQ.noConflict();
FlixjQ.ajaxSetup({ cache: true });
/*! Copyright 2011, Ben Lin (http://dreamerslab.com/)
* Licensed under the MIT License (LICENSE.txt).
*
* Version: 1.0.6
*
* Requires: jQuery 1.2.3 ~ 1.7.1
*/
;( function( $ ){
  $.fn.extend({
    actual : function( method, options ){
      var $hidden, $target, configs, css, tmp, actual, fix, restore;

      // check if the jQuery method exist
      if( !this[ method ]){
        throw '$.actual => The jQuery method "' + method + '" you called does not exist';
      }

      configs = $.extend({
        absolute : false,
        clone : false,
        includeMargin : undefined
      }, options );

      $target = this;

      if( configs.clone === true ){
        fix = function(){
          // this is useful with css3pie
          $target = $target.filter( ':first' ).clone().css({
            position : 'absolute',
            top : -1000
          }).appendTo( 'body' );
        };

        restore = function(){
          // remove DOM element after getting the width
          $target.remove();
        };
      }else{
        fix = function(){
          // get all hidden parents
          $hidden = $target.parents().andSelf().filter( ':hidden' );

          css = configs.absolute === true ?
            { position : 'absolute', visibility: 'hidden', display: 'block' } :
            { visibility: 'hidden', display: 'block' };

          tmp = [];

          // save the origin style props
          // set the hidden el css to be got the actual value later
          $hidden.each( function(){
            var _tmp = {}, name;
            for( name in css ){
              // save current style
              _tmp[ name ] = this.style[ name ];
              // set current style to proper css style
              this.style[ name ] = css[ name ];
            }
            tmp.push( _tmp );
          });
        };

        restore = function(){
          // restore origin style values
          $hidden.each( function( i ){
            var _tmp = tmp[ i ], name;
            for( name in css ){
              this.style[ name ] = _tmp[ name ];
            }
          });
        };
      }

      fix();
      // get the actual value with user specific methed
      // it can be 'width', 'height', 'outerWidth', 'innerWidth'... etc
      // configs.includeMargin only works for 'outerWidth' and 'outerHeight'
      actual = /(outer)/g.test( method ) ?
        $target[ method ]( configs.includeMargin ) :
        $target[ method ]();

      restore();
      // IMPORTANT, this plugin only return the value of the first element
      return actual;
    }
  });
})( FlixjQ );/*
 * jQuery doTimeout: Like setTimeout, but better! - v1.0 - 3/3/2010
 * http://benalman.com/projects/jquery-dotimeout-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
(function($){var a={},c="doTimeout",d=Array.prototype.slice;$[c]=function(){return b.apply(window,[0].concat(d.call(arguments)))};$.fn[c]=function(){var f=d.call(arguments),e=b.apply(this,[c+f[0]].concat(f));return typeof f[0]==="number"||typeof f[1]==="number"?this:e};function b(l){var m=this,h,k={},g=l?$.fn:$,n=arguments,i=4,f=n[1],j=n[2],p=n[3];if(typeof f!=="string"){i--;f=l=0;j=n[1];p=n[2]}if(l){h=m.eq(0);h.data(l,k=h.data(l)||{})}else{if(f){k=a[f]||(a[f]={})}}k.id&&clearTimeout(k.id);delete k.id;function e(){if(l){h.removeData(l)}else{if(f){delete a[f]}}}function o(){k.id=setTimeout(function(){k.fn()},j)}if(p){k.fn=function(q){if(typeof p==="string"){p=g[p]}p.apply(m,d.call(n,i))===true&&!q?o():e()};o()}else{if(k.fn){j===undefined?e():k.fn(j===false);return true}else{e()}}}})(FlixjQ);/*!
 * jCarousel - Riding carousels with jQuery
 *   http://sorgalla.com/jcarousel/
 *
 * Copyright (c) 2006 Jan Sorgalla (http://sorgalla.com)
 * Dual licensed under the MIT (http://www.opensource.org/licenses/mit-license.php)
 * and GPL (http://www.opensource.org/licenses/gpl-license.php) licenses.
 *
 * Built on top of the jQuery library
 *   http://jquery.com
 *
 * Inspired by the "Carousel Component" by Bill Scott
 *   http://billwscott.com/carousel/
 */

(function(g){var q={vertical:!1,rtl:!1,start:1,offset:1,size:null,scroll:3,visible:null,animation:"normal",easing:"swing",auto:0,wrap:null,initCallback:null,setupCallback:null,reloadCallback:null,itemLoadCallback:null,itemFirstInCallback:null,itemFirstOutCallback:null,itemLastInCallback:null,itemLastOutCallback:null,itemVisibleInCallback:null,itemVisibleOutCallback:null,animationStepCallback:null,buttonNextHTML:"<div></div>",buttonPrevHTML:"<div></div>",buttonNextEvent:"click",buttonPrevEvent:"click", buttonNextCallback:null,buttonPrevCallback:null,itemFallbackDimension:null},m=!1;g(window).bind("load.jcarousel",function(){m=!0});g.jcarousel=function(a,c){this.options=g.extend({},q,c||{});this.autoStopped=this.locked=!1;this.buttonPrevState=this.buttonNextState=this.buttonPrev=this.buttonNext=this.list=this.clip=this.container=null;if(!c||c.rtl===void 0)this.options.rtl=(g(a).attr("dir")||g("html").attr("dir")||"").toLowerCase()=="rtl";this.wh=!this.options.vertical?"width":"height";this.lt=!this.options.vertical? this.options.rtl?"right":"left":"top";for(var b="",d=a.className.split(" "),f=0;f<d.length;f++)if(d[f].indexOf("jcarousel-skin")!=-1){g(a).removeClass(d[f]);b=d[f];break}a.nodeName.toUpperCase()=="UL"||a.nodeName.toUpperCase()=="OL"?(this.list=g(a),this.clip=this.list.parents(".jcarousel-clip"),this.container=this.list.parents(".jcarousel-container")):(this.container=g(a),this.list=this.container.find("ul,ol").eq(0),this.clip=this.container.find(".jcarousel-clip"));if(this.clip.size()===0)this.clip= this.list.wrap("<div></div>").parent();if(this.container.size()===0)this.container=this.clip.wrap("<div></div>").parent();b!==""&&this.container.parent()[0].className.indexOf("jcarousel-skin")==-1&&this.container.wrap('<div class=" '+b+'"></div>');this.buttonPrev=g(".jcarousel-prev",this.container);if(this.buttonPrev.size()===0&&this.options.buttonPrevHTML!==null)this.buttonPrev=g(this.options.buttonPrevHTML).appendTo(this.container);this.buttonPrev.addClass(this.className("jcarousel-prev"));this.buttonNext= g(".jcarousel-next",this.container);if(this.buttonNext.size()===0&&this.options.buttonNextHTML!==null)this.buttonNext=g(this.options.buttonNextHTML).appendTo(this.container);this.buttonNext.addClass(this.className("jcarousel-next"));this.clip.addClass(this.className("jcarousel-clip")).css({position:"relative"});this.list.addClass(this.className("jcarousel-list")).css({overflow:"hidden",position:"relative",top:0,margin:0,padding:0}).css(this.options.rtl?"right":"left",0);this.container.addClass(this.className("jcarousel-container")).css({position:"relative"}); !this.options.vertical&&this.options.rtl&&this.container.addClass("jcarousel-direction-rtl").attr("dir","rtl");var j=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible):null,b=this.list.children("li"),e=this;if(b.size()>0){var h=0,i=this.options.offset;b.each(function(){e.format(this,i++);h+=e.dimension(this,j)});this.list.css(this.wh,h+100+"px");if(!c||c.size===void 0)this.options.size=b.size()}this.container.css("display","block");this.buttonNext.css("display","block");this.buttonPrev.css("display", "block");this.buttonNext.attr("data-flix-media", 'next');this.buttonPrev.attr("data-flix-media", 'previous');this.funcNext=function(){e.next()};this.funcPrev=function(){e.prev()};this.funcResize=function(){e.resizeTimer&&clearTimeout(e.resizeTimer);e.resizeTimer=setTimeout(function(){e.reload()},100)};this.options.initCallback!==null&&this.options.initCallback(this,"init");!m&&g.browser.safari?(this.buttons(!1,!1),g(window).bind("load.jcarousel",function(){e.setup()})):this.setup()};var f=g.jcarousel;f.fn=f.prototype={jcarousel:"0.2.8"};f.fn.extend=f.extend=g.extend;f.fn.extend({setup:function(){this.prevLast= this.prevFirst=this.last=this.first=null;this.animating=!1;this.tail=this.resizeTimer=this.timer=null;this.inTail=!1;if(!this.locked){this.list.css(this.lt,this.pos(this.options.offset)+"px");var a=this.pos(this.options.start,!0);this.prevFirst=this.prevLast=null;this.animate(a,!1);g(window).unbind("resize.jcarousel",this.funcResize).bind("resize.jcarousel",this.funcResize);this.options.setupCallback!==null&&this.options.setupCallback(this)}},reset:function(){this.list.empty();this.list.css(this.lt, "0px");this.list.css(this.wh,"10px");this.options.initCallback!==null&&this.options.initCallback(this,"reset");this.setup()},reload:function(){this.tail!==null&&this.inTail&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+this.tail);this.tail=null;this.inTail=!1;this.options.reloadCallback!==null&&this.options.reloadCallback(this);if(this.options.visible!==null){var a=this,c=Math.ceil(this.clipping()/this.options.visible),b=0,d=0;this.list.children("li").each(function(f){b+=a.dimension(this, c);f+1<a.first&&(d=b)});this.list.css(this.wh,b+"px");this.list.css(this.lt,-d+"px")}this.scroll(this.first,!1)},lock:function(){this.locked=!0;this.buttons()},unlock:function(){this.locked=!1;this.buttons()},size:function(a){if(a!==void 0)this.options.size=a,this.locked||this.buttons();return this.options.size},has:function(a,c){if(c===void 0||!c)c=a;if(this.options.size!==null&&c>this.options.size)c=this.options.size;for(var b=a;b<=c;b++){var d=this.get(b);if(!d.length||d.hasClass("jcarousel-item-placeholder"))return!1}return!0}, get:function(a){return g(">.jcarousel-item-"+a,this.list)},add:function(a,c){var b=this.get(a),d=0,p=g(c);if(b.length===0)for(var j,e=f.intval(a),b=this.create(a);;){if(j=this.get(--e),e<=0||j.length){e<=0?this.list.prepend(b):j.after(b);break}}else d=this.dimension(b);p.get(0).nodeName.toUpperCase()=="LI"?(b.replaceWith(p),b=p):b.empty().append(c);this.format(b.removeClass(this.className("jcarousel-item-placeholder")),a);p=this.options.visible!==null?Math.ceil(this.clipping()/this.options.visible): null;d=this.dimension(b,p)-d;a>0&&a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))-d+"px");this.list.css(this.wh,f.intval(this.list.css(this.wh))+d+"px");return b},remove:function(a){var c=this.get(a);if(c.length&&!(a>=this.first&&a<=this.last)){var b=this.dimension(c);a<this.first&&this.list.css(this.lt,f.intval(this.list.css(this.lt))+b+"px");c.remove();this.list.css(this.wh,f.intval(this.list.css(this.wh))-b+"px")}},next:function(){this.tail!==null&&!this.inTail?this.scrollTail(!1): this.scroll((this.options.wrap=="both"||this.options.wrap=="last")&&this.options.size!==null&&this.last==this.options.size?1:this.first+this.options.scroll)},prev:function(){this.tail!==null&&this.inTail?this.scrollTail(!0):this.scroll((this.options.wrap=="both"||this.options.wrap=="first")&&this.options.size!==null&&this.first==1?this.options.size:this.first-this.options.scroll)},scrollTail:function(a){if(!this.locked&&!this.animating&&this.tail){this.pauseAuto();var c=f.intval(this.list.css(this.lt)), c=!a?c-this.tail:c+this.tail;this.inTail=!a;this.prevFirst=this.first;this.prevLast=this.last;this.animate(c)}},scroll:function(a,c){!this.locked&&!this.animating&&(this.pauseAuto(),this.animate(this.pos(a),c))},pos:function(a,c){var b=f.intval(this.list.css(this.lt));if(this.locked||this.animating)return b;this.options.wrap!="circular"&&(a=a<1?1:this.options.size&&a>this.options.size?this.options.size:a);for(var d=this.first>a,g=this.options.wrap!="circular"&&this.first<=1?1:this.first,j=d?this.get(g): this.get(this.last),e=d?g:g-1,h=null,i=0,k=!1,l=0;d?--e>=a:++e<a;){h=this.get(e);k=!h.length;if(h.length===0&&(h=this.create(e).addClass(this.className("jcarousel-item-placeholder")),j[d?"before":"after"](h),this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(e<=0||e>this.options.size)))j=this.get(this.index(e)),j.length&&(h=this.add(e,j.clone(!0)));j=h;l=this.dimension(h);k&&(i+=l);if(this.first!==null&&(this.options.wrap=="circular"||e>=1&&(this.options.size===null||e<= this.options.size)))b=d?b+l:b-l}for(var g=this.clipping(),m=[],o=0,n=0,j=this.get(a-1),e=a;++o;){h=this.get(e);k=!h.length;if(h.length===0){h=this.create(e).addClass(this.className("jcarousel-item-placeholder"));if(j.length===0)this.list.prepend(h);else j[d?"before":"after"](h);if(this.first!==null&&this.options.wrap=="circular"&&this.options.size!==null&&(e<=0||e>this.options.size))j=this.get(this.index(e)),j.length&&(h=this.add(e,j.clone(!0)))}j=h;l=this.dimension(h);if(l===0)throw Error("jCarousel: No width/height set for items. This will cause an infinite loop. Aborting..."); this.options.wrap!="circular"&&this.options.size!==null&&e>this.options.size?m.push(h):k&&(i+=l);n+=l;if(n>=g)break;e++}for(h=0;h<m.length;h++)m[h].remove();i>0&&(this.list.css(this.wh,this.dimension(this.list)+i+"px"),d&&(b-=i,this.list.css(this.lt,f.intval(this.list.css(this.lt))-i+"px")));i=a+o-1;if(this.options.wrap!="circular"&&this.options.size&&i>this.options.size)i=this.options.size;if(e>i){o=0;e=i;for(n=0;++o;){h=this.get(e--);if(!h.length)break;n+=this.dimension(h);if(n>=g)break}}e=i-o+ 1;this.options.wrap!="circular"&&e<1&&(e=1);if(this.inTail&&d)b+=this.tail,this.inTail=!1;this.tail=null;if(this.options.wrap!="circular"&&i==this.options.size&&i-o+1>=1&&(d=f.intval(this.get(i).css(!this.options.vertical?"marginRight":"marginBottom")),n-d>g))this.tail=n-g-d;if(c&&a===this.options.size&&this.tail)b-=this.tail,this.inTail=!0;for(;a-- >e;)b+=this.dimension(this.get(a));this.prevFirst=this.first;this.prevLast=this.last;this.first=e;this.last=i;return b},animate:function(a,c){if(!this.locked&& !this.animating){this.animating=!0;var b=this,d=function(){b.animating=!1;a===0&&b.list.css(b.lt,0);!b.autoStopped&&(b.options.wrap=="circular"||b.options.wrap=="both"||b.options.wrap=="last"||b.options.size===null||b.last<b.options.size||b.last==b.options.size&&b.tail!==null&&!b.inTail)&&b.startAuto();b.buttons();b.notify("onAfterAnimation");if(b.options.wrap=="circular"&&b.options.size!==null)for(var c=b.prevFirst;c<=b.prevLast;c++)c!==null&&!(c>=b.first&&c<=b.last)&&(c<1||c>b.options.size)&&b.remove(c)}; this.notify("onBeforeAnimation");if(!this.options.animation||c===!1)this.list.css(this.lt,a+"px"),d();else{var f=!this.options.vertical?this.options.rtl?{right:a}:{left:a}:{top:a},d={duration:this.options.animation,easing:this.options.easing,complete:d};if(g.isFunction(this.options.animationStepCallback))d.step=this.options.animationStepCallback;this.list.animate(f,d)}}},startAuto:function(a){if(a!==void 0)this.options.auto=a;if(this.options.auto===0)return this.stopAuto();if(this.timer===null){this.autoStopped= !1;var c=this;this.timer=window.setTimeout(function(){c.next()},this.options.auto*1E3)}},stopAuto:function(){this.pauseAuto();this.autoStopped=!0},pauseAuto:function(){if(this.timer!==null)window.clearTimeout(this.timer),this.timer=null},buttons:function(a,c){if(a==null&&(a=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="first"||this.options.size===null||this.last<this.options.size),!this.locked&&(!this.options.wrap||this.options.wrap=="first")&&this.options.size!==null&& this.last>=this.options.size))a=this.tail!==null&&!this.inTail;if(c==null&&(c=!this.locked&&this.options.size!==0&&(this.options.wrap&&this.options.wrap!="last"||this.first>1),!this.locked&&(!this.options.wrap||this.options.wrap=="last")&&this.options.size!==null&&this.first==1))c=this.tail!==null&&this.inTail;var b=this;this.buttonNext.size()>0?(this.buttonNext.unbind(this.options.buttonNextEvent+".jcarousel",this.funcNext),a&&this.buttonNext.bind(this.options.buttonNextEvent+".jcarousel",this.funcNext), this.buttonNext[a?"removeClass":"addClass"](this.className("jcarousel-next-disabled")).attr("disabled",a?!1:!0),this.options.buttonNextCallback!==null&&this.buttonNext.data("jcarouselstate")!=a&&this.buttonNext.each(function(){b.options.buttonNextCallback(b,this,a)}).data("jcarouselstate",a)):this.options.buttonNextCallback!==null&&this.buttonNextState!=a&&this.options.buttonNextCallback(b,null,a);this.buttonPrev.size()>0?(this.buttonPrev.unbind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev), c&&this.buttonPrev.bind(this.options.buttonPrevEvent+".jcarousel",this.funcPrev),this.buttonPrev[c?"removeClass":"addClass"](this.className("jcarousel-prev-disabled")).attr("disabled",c?!1:!0),this.options.buttonPrevCallback!==null&&this.buttonPrev.data("jcarouselstate")!=c&&this.buttonPrev.each(function(){b.options.buttonPrevCallback(b,this,c)}).data("jcarouselstate",c)):this.options.buttonPrevCallback!==null&&this.buttonPrevState!=c&&this.options.buttonPrevCallback(b,null,c);this.buttonNextState= a;this.buttonPrevState=c},notify:function(a){var c=this.prevFirst===null?"init":this.prevFirst<this.first?"next":"prev";this.callback("itemLoadCallback",a,c);this.prevFirst!==this.first&&(this.callback("itemFirstInCallback",a,c,this.first),this.callback("itemFirstOutCallback",a,c,this.prevFirst));this.prevLast!==this.last&&(this.callback("itemLastInCallback",a,c,this.last),this.callback("itemLastOutCallback",a,c,this.prevLast));this.callback("itemVisibleInCallback",a,c,this.first,this.last,this.prevFirst, this.prevLast);this.callback("itemVisibleOutCallback",a,c,this.prevFirst,this.prevLast,this.first,this.last)},callback:function(a,c,b,d,f,j,e){if(!(this.options[a]==null||typeof this.options[a]!="object"&&c!="onAfterAnimation")){var h=typeof this.options[a]=="object"?this.options[a][c]:this.options[a];if(g.isFunction(h)){var i=this;if(d===void 0)h(i,b,c);else if(f===void 0)this.get(d).each(function(){h(i,this,d,b,c)});else for(var a=function(a){i.get(a).each(function(){h(i,this,a,b,c)})},k=d;k<=f;k++)k!== null&&!(k>=j&&k<=e)&&a(k)}}},create:function(a){return this.format("<li></li>",a)},format:function(a,c){for(var a=g(a),b=a.get(0).className.split(" "),d=0;d<b.length;d++)b[d].indexOf("jcarousel-")!=-1&&a.removeClass(b[d]);a.addClass(this.className("jcarousel-item")).addClass(this.className("jcarousel-item-"+c)).css({"float":this.options.rtl?"right":"left","list-style":"none"}).attr("jcarouselindex",c);return a},className:function(a){return a+" "+a+(!this.options.vertical?"-horizontal":"-vertical")}, dimension:function(a,c){var b=g(a);if(c==null)return!this.options.vertical?b.outerWidth(!0)||f.intval(this.options.itemFallbackDimension):b.outerHeight(!0)||f.intval(this.options.itemFallbackDimension);else{var d=!this.options.vertical?c-f.intval(b.css("marginLeft"))-f.intval(b.css("marginRight")):c-f.intval(b.css("marginTop"))-f.intval(b.css("marginBottom"));g(b).css(this.wh,d+"px");return this.dimension(b)}},clipping:function(){return!this.options.vertical?this.clip[0].offsetWidth-f.intval(this.clip.css("borderLeftWidth"))- f.intval(this.clip.css("borderRightWidth")):this.clip[0].offsetHeight-f.intval(this.clip.css("borderTopWidth"))-f.intval(this.clip.css("borderBottomWidth"))},index:function(a,c){if(c==null)c=this.options.size;return Math.round(((a-1)/c-Math.floor((a-1)/c))*c)+1}});f.extend({defaults:function(a){return g.extend(q,a||{})},intval:function(a){a=parseInt(a,10);return isNaN(a)?0:a},windowLoaded:function(){m=!0}});g.fn.jcarousel=function(a){if(typeof a=="string"){var c=g(this).data("jcarousel"),b=Array.prototype.slice.call(arguments, 1);return c[a].apply(c,b)}else return this.each(function(){var b=g(this).data("jcarousel");b?(a&&g.extend(b.options,a),b.reload()):g(this).data("jcarousel",new f(this,a))})}})(FlixjQ);
;(function ($) {

    loadFile = function (type, url) {
        var element   = "";
        var attribute = "";
        var content   = new Object ();

        switch (type) {

            case "css":
                element   = "link";
                attribute = "href";

                content.type = "text/css";
                content.rel  = "stylesheet";

                break;

            case "script":
                element   = "script";
                attribute = "src";

                content.type = "text/javascript";

                break;

            default:
                // Unknown type
                return;

        }

        var found = false;

        $(element).each (function () {
            var href = $(this).attr (attribute);

            if (href == url) {
                found = true;

                return false;
            }
        });

        if (! found) {
            var dom = document.createElement (element);

            for (var i in content) {
                if (content.hasOwnProperty (i)) {
                    dom[i] = content[i];
                }
            }

            dom[attribute] = url;

            $("head").append (dom);
        }
    };


    link = function ( e ) {

    	e.preventDefault();
    	original = this;
        var href = $(this).attr("href");
		
		if(!href) return false;
        var temp = href.split("?");

        href = temp[0];

        var width  = 0;
        var height = 0;
        var lvp = '';

        if (typeof (temp[1]) != "undefined") {
            var params = temp[1].split ("&");

            for (var i in params) {
                if (params.hasOwnProperty (i)) {
                    temp = params[i].split ("=");

                    switch (temp[0]) {

                        case "width":
                            width = temp[1];

                            break;

                        case "height":
                            height = temp[1];

                            break;

                        case "lvp":
                            lvp = temp[1];

                            break;

                    }
                }
            }
        }
		
        temp = href.split(".");
        var type = temp[temp.length - 1].toLowerCase();
        
        if($(this).parent().hasClass("imggallery")){
        	type = "gif";
		}
        if($(this).parent().hasClass("inpage_selector_gallery")){
        	type = "gif";
		}
		if($(this).parent().hasClass("youtubegallery")){
        	type = "youtube";
		}
		if($(this).parent().hasClass("inpage_selector_video")){
        	type = "mov";
		}
        
        
        
        var product = $(this).parents (".flixinpage").data ("flixinpage-product");
        switch (type) {
			case "swf":
            	var url = href;

                var html = $.flash.create ({
                    swf:    url,
                    width:  width,
                    height: height
                });
            	lightBox (html, width, height);
        	break;
            case "flv":
            case "mov":
            case "avi":
            case "mp4":
            case "wmv":
				if(lvp == ''){
	                var url = "//media.flixcar.com/swf/mediaplayer.swf?width=" + width + "&height=" + height + "&autostart=true&file=" + href;
	
	                var html = $.flash.create ({
	                    swf:    url,
	                    width:  width,
	                    height: height
	                });
                	lightBox (html, width, height);
				}else{
					var html = '<span class="LimelightEmbeddedPlayer">';
					//var html = html + '<script src="http://assets.delvenetworks.com/player/embed.js"></script>';
					var html = html + '<object type="application/x-shockwave-flash" id="limelight_player_876583" name="limelight_player_876583" class="LimelightEmbeddedPlayerFlash" width="' + width + '" height="' + height + '" data="//assets.delvenetworks.com/player/loader.swf">';
					var html = html + '<param name="movie" value="//assets.delvenetworks.com/player/loader.swf"/>';
					var html = html + '<param name="wmode" value="window"/>';
					var html = html + '<param name="allowScriptAccess" value="always"/>';
					var html = html + '<param name="allowFullScreen" value="true"/>';
					var html = html + '<param name="flashVars" value="mediaId='+lvp+'&amp;playerForm=bc42a3d3fa364111a20bb8612ec052cf&amp;autoplay=true&amp;startQuality=High"/></object>';
					//var html = html + '<script>LimelightPlayerUtil.initEmbed(\'limelight_player_876583\');</script>';
					var html = html + '</span>';
					
					
                	lightBox (html, width, height);
               		LimelightPlayerUtil.initEmbed('limelight_player_876583');
				}
                break;
                
            case "youtube":
            	var html = '<iframe width="700" height="394" src="'+href+'" frameborder="0" allowfullscreen></iframe>';
            	lightBox (html, width, height);
            	//console.log("href "+href);
            break;

            case "gif":
            case "jpg":
            case "jpeg":
            case "png":
            case "png-1":
            case "png-2":
            case "png-3":
            case "png-4":
            case "png-5":
            case "png-6":
            case "png-7":
            case "png-8":
            case "png-9":
            case "png-10":
            case "png-11":
            case "png-12":
            case "jpg-1":
            case "jpg-2":
            case "jpg-3":
            case "jpg-4":
            case "jpg-5":
            case "jpg-6":
            case "jpg-7":
            case "jpg-8":
            case "jpg-9":
            case "jpg-10":
            case "jpg-11":
            case "jpg-12":
            case "gif-1":
            case "gif-2":
            case "gif-3":
            case "gif-4":
            case "gif-5":
            case "gif-6":
            case "gif-7":
            case "gif-8":
            case "gif-9":
            case "gif-10":
            case "gif-11":
            case "gif-12":
            case "tif":
            case "webp":
                var preloader = new Image ();

                preloader.onload = function () {
                    var dom = document.createElement ("img");

                    dom.src    = preloader.src;
                    dom.alt    = "";
                    dom.width  = preloader.width;
                    dom.height = preloader.height;

                    if (width > 0) {
                        dom.width = width;
                    }

                    if (height > 0) {
                        dom.height = height;
                    }

                    preloader.onload = function () {};

                    lightBox (dom, dom.width, dom.height, original);
                };

                preloader.src = href;

                break;

            case "pdf":
            	window.open(href,'_blank');
        		return false;
                break;

        }

        return false;
    };

    lightBox = function (content, width, height, element) {
		show_prev = false;
		show_next = false;
    	current_index = 0;
		
    	if(element != ''){
    		current = $(element).attr('href');
    		
    		gallery_list = $(element).parents('ul').find('a');
    		
    		gallery_list.each(function(index){
    			
    			if(current == $(this).attr('href')) current_index = index;
    		});
    		
    		if( (current_index + 1) < gallery_list.length){
    			show_next = $(element).parents('ul').find('a').get(current_index + 1);
    		}
    		if(current_index > 0){
    			show_prev = $(element).parents('ul').find('a').get(current_index - 1);
    		}
    		
    	}
        $('embed, object, select').css ({ 'visibility' : 'hidden' });
        
		if($('#flixinpage-lightbox').length <= 0){
			$('body').append ('<div id="flixinpage-overlay"></div><div id="flixinpage-lightbox"></div>');	
		}
        $("#flixinpage-lightbox").html (content);
        
		if ('https:' == document.location.protocol){

			$("#flixinpage-lightbox").prepend('<a id="btn_close" style="cursor:pointer;position:absolute;right:-40px;" title="Close"><img src="https://media.flixcar.com/delivery/static/images/close.png" border="0" alt="Close" /></a>');
      
        }else{
        	$("#flixinpage-lightbox").prepend('<a id="btn_close" style="cursor:pointer;position:absolute;right:-40px;" title="Close"><img src="http://media.flixcar.com/delivery/static/images/close.png" border="0" alt="Close" /></a>');
       
       	 }
        if(show_next != false){
        	_a = $('<div>').attr('class','inpage_cap_next_photo').attr('title','next').text('next').css('display','none');
        	_a.click (function () {
           		
           		$(show_next).trigger('click');
        	});
        	$("#flixinpage-lightbox").append(_a);
        }
        if(show_prev != false){
        	_a = $('<div>').attr('class','inpage_cap_prev_photo').attr('title','previous').text('previous').css('display','none');
        	_a.click (function () {
           		
           		$(show_prev).trigger('click');
        	});
        	$("#flixinpage-lightbox").append(_a);
        }
		
        $('#flixinpage-overlay').click (function () {
            $('#flixinpage-lightbox,#flixinpage-overlay').remove ();

            $('embed, object, select').css ({ 'visibility' : 'visible' });
        });

        $('#btn_close').click (function (bt) {
        	bt.preventDefault();
        	bt.stopPropagation();
        	
            $('#flixinpage-lightbox,#flixinpage-overlay').remove ();

            $('embed, object, select').css ({ 'visibility' : 'visible' });
        });

        $(window).resize(function(){
	        width = $("#flixinpage-lightbox").width();
        });

	    lightBox.resize (width);
    };

    lightBox.resize = function (width) {

        var pageSizes  = lightBox.getPageSize ();
        var pageScroll = lightBox.getPageScroll ();

        var boxWidth  = 0;
        var boxHeight = $("#flixinpage-lightbox").height ();

        $('#flixinpage-overlay').css ({
            "position":        "absolute",
            "top":             0,
            "left":            0,
            "z-index":         90,
            "backgroundColor": "#000",
            "opacity":         0.8,
            "width":           pageSizes[0],
            "height":          pageSizes[1]
        });

	    if(width > 0) {
		    boxWidth = width;
	    } else {
		    setTimeout(function(){
		        boxWidth  = $("#flixinpage-lightbox").width();
		    }, 200);
	    }

        $('#flixinpage-lightbox').css ({
            "position": "absolute",
            "z-index":  100,
            "top":      pageScroll[1] + (pageSizes[3] / 10),
            "left":     pageScroll[0] + (pageSizes[0] - boxWidth) / 2
        });
    };

    lightBox.getPageSize = function () {
        // getPageSize() by quirksmode.com

        var xScroll, yScroll;

        if (window.innerHeight && window.scrollMaxY) {	
            xScroll = window.innerWidth + window.scrollMaxX;
            yScroll = window.innerHeight + window.scrollMaxY;
        }
        else if (document.body.scrollHeight > document.body.offsetHeight) {
            // All but Explorer Mac
            xScroll = document.body.scrollWidth;
            yScroll = document.body.scrollHeight;
        }
        else {
            // Explorer Mac...would also work in Explorer 6 Strict, Mozilla and Safari
            xScroll = document.body.offsetWidth;
            yScroll = document.body.offsetHeight;
        }

        var windowWidth, windowHeight;

        if (self.innerHeight) {
            // All except Explorer
            if (document.documentElement.clientWidth) {
                windowWidth = document.documentElement.clientWidth; 
            }
            else {
                windowWidth = self.innerWidth;
            }

            windowHeight = self.innerHeight;
        }
        else if (document.documentElement && document.documentElement.clientHeight) {
            // Explorer 6 Strict Mode
            windowWidth = document.documentElement.clientWidth;
            windowHeight = document.documentElement.clientHeight;
        }
        else if (document.body) {
            // Other Explorers
            windowWidth = document.body.clientWidth;
            windowHeight = document.body.clientHeight;
        }

        var pageHeight, pageWidth;

        // For small pages with total height less then height of the viewport
        if (yScroll < windowHeight) {
            pageHeight = windowHeight;
        }
        else { 
            pageHeight = yScroll;
        }

        // For small pages with total width less then width of the viewport
        if (xScroll < windowWidth) {
            pageWidth = xScroll;		
        }
        else {
            pageWidth = windowWidth;
        }

        var arrayPageSize = new Array (pageWidth, pageHeight, windowWidth, windowHeight);

        return arrayPageSize;
    };

    lightBox.getPageScroll = function () {
        // getPageScroll() by quirksmode.com

        var xScroll, yScroll;

        if (self.pageYOffset) {
            yScroll = self.pageYOffset;
            xScroll = self.pageXOffset;
        }
        else if (document.documentElement && document.documentElement.scrollTop) {
            // Explorer 6 Strict
            yScroll = document.documentElement.scrollTop;
            xScroll = document.documentElement.scrollLeft;
        }
        else if (document.body) {
            // All other Explorers
            yScroll = document.body.scrollTop;
            xScroll = document.body.scrollLeft;	
        }

        var arrayPageScroll = new Array (xScroll, yScroll);

        return arrayPageScroll;
    };
   
	$( document ).ready( function(){

        // Handle all links
        $( '#inpage_container .inpage_block_inner a').live( 'click', link );
        $( '#inpage_cap_wrapper div.inpage_cap_zoom-images  a').live( 'click', link );
        $( '#inpage_responsive .responsive_computer .inpage_block_inner  a').live( 'click', link );
        $( '#inpage_responsive .responsive_computer .hpcl_mprinting a').live( 'click', link );
        $( '#inpage_responsive .responsive_computer .hpcl_videos .hpcl_row .hpcl_entry a').live( 'click', link );
        $( '#inpage_responsive .responsive_computer .hpcl_videobox a').live( 'click', link );
	        // Invalid parameters
	});
	
}) (FlixjQ);/*Flixmedia Global Impressions Tracker*/


/*NOTE to minimise! Remove all PHP code above, bottom and below and replace after minimising */
if (typeof FlixjQ !== 'undefined') {
    (function ($) {
        if(location.href.search('flix-qa')!=-1)
            window.log2=function(){log2.history=log2.history||[];log2.history.push(arguments);if(this.console){console.log(Array.prototype.slice.call(arguments));}};
        else
            window.log2=function(){};

        if(typeof FlixjQ.fn.on=='undefined')
            FlixjQ.fn.on=FlixjQ.fn.live;

        if (typeof $.fn.logging == 'undefined') {
            var logoclickonce=0;
            var opts = {},
                comparisonTable,
                reviewsContainer,
                reviews_count = 0,
                trackingCall = false,
                trackingDomain = "//media.flixcar.com";
            trackingDomainBeat = "//rt.flix360.com/beat";
            /*NOTE PHP above */


            var beatDisabledRetailers=[3986,13395];

            /* Set Logging function */
            $.fn.logging = function (type, event, data, media, price, inPcount) {
                var page = window.location.href;

                var fireBeat=false,fireLog=true;

                data.page_name = page;
                data.event_type = event;
                data.event_detail = media;
                data.price = price;
                data.view_time = 0;

                var prodid=data.product;
                //get productid incase the main product is a matchmiss
                if(prodid==0 || prodid==null){
                    prodid=FlixjQ('.main_mot_product_wrapper:eq(0)').attr('alt')  || FlixjQ('[id^=flixinpage]:eq(0)').find('span[id^=inpage-data]').attr('id');
                    prodid=prodid.toString().replace('inpage-data-','')
                }
                if(type=='review'){
                    var prodid=FlixjQ('#flix-mobile_template-reviews').closest('.main_mot_product_wrapper').attr('alt')  || FlixjQ('.inpage_selector_reviews').closest('[id^=flixinpage]').find('span[id^=inpage-data]').attr('id') || data.product;
                    prodid=prodid.toString().replace('inpage-data-','')
                }

                if(type=='compare'){
                    var prodid=FlixjQ('.flix-compare').closest('.main_mot_product_wrapper').attr('alt')  || FlixjQ('.flix-compare').closest('[id^=flixinpage]').find('span[id^=inpage-data]').attr('id') || data.product;
                    prodid=prodid.toString().replace('inpage-data-','')
                }

                if(type=='visible'){
                    var prodid=FlixjQ('[id*=flixinpage_]:eq('+inPcount+')').find('span[id^=inpage-data]').attr('id') || FlixjQ('[id*=flixinpage_]:eq('+inPcount+')').attr('alt') || data.product;
                    prodid=prodid.toString().replace('inpage-data-','');
                }



                var d = new Date();
                var _base = trackingDomain + '/' + type + '/log.gif';

                var url = _base + "?m=i"

                if(FlixjQ('#flix-mbl-page').length){
                    url += "&mot=1";
                }

                // flixlocationcontent tracking
                if(type=="flc"){
                    fireLog=false;
                    fireBeat=true;

                    var prodid=data.product || '';

                    url +="&mpn="+data.mpn + "&ean="
                        + data.ean + "&location="
                        + data.city
                }

                url +="&p="+prodid + "&d="
                    + data.distributor + "&l="
                    + data.language + "&pn=" + encodeURIComponent(data.page_name)
                    + "&et=" + data.event_type + "&ed="
                    + encodeURIComponent(data.event_detail)
                    + "&sid=" + data.session_id
                    + "&vtime=" + data.view_time
                    + "&gvid=" + data.gvid;
                url += "&cb=" + d.getTime();

                log2("Global log - type: "+type+"_ prodid: "+prodid);


                if(FlixjQ.fn.inPage && FlixjQ.fn.inPage.hasOwn( data.ab_data ) && data.ab_data.expire !== 'expired') {
                    //add AB tags only for the tracked product
                    if(FlixjQ('[data-flix-abid]').length && FlixjQ('[data-flix-abid]').attr('id').search(prodid)!=-1){

                        data.ab = "&ab="+data.ab_data.tst_id+"&abr="+data.ab_data.resource_ref+"&abid="+data.ab_data.cookie.abid;
                        url +=data.ab;
                    }
                }



                if (data.event_type == 'productpage' || data.event_type == 'addtocart') url += "&price=" + data.price;

                //check for no tracking
                if (typeof FlixjQ.fn.logging.noTracking!='undefined' && FlixjQ.fn.logging.noTracking==false && fireLog) {
                    var img = new Image();
                    img.src = url;
                }

                // beat url log
                if (typeof FlixjQ.fn.logging.noTracking!='undefined' && FlixjQ.fn.logging.noTracking==false && fireBeat && beatDisabledRetailers.indexOf(+data.distributor)<0) {
                    url=trackingDomainBeat+url.replace(_base, '')
                    var img = new Image();
                    img.src = url;
                }
            };
            $.fn.logging.trackingDomain=trackingDomain;

            /*NOTE PHP below */
            
/*Flixmedia Tracking Flag */
FlixjQ.fn.logging.noTracking=false
                        /*NOTE PHP above */

            $.fn.logging.prototype = {
                comparison: {
                    init: function () {
                        if (opts.mpn === undefined) {
                            opts.mpn = '';
                        }
                        $.fn.logging('compare', 'impression', opts, opts.mpn);
                        this.clicks();
                    },
                    clicks: function () {

                        $('.flix-comp-prod-title .flix-comp-clickable, .flix-comp-trac-product .flix-comp-clickable, .flix-comp-product .flix-comp-prod-image .flix-comp-clickable').on('click', function () {
                            var attached_mpn = $(this).attr('rel');
                            var price = $(this).attr('price');
                            $.fn.logging('compare', 'productpage', opts, attached_mpn, price);
                        });

                        $('.flix-comp-trac-buy .flix-comp-clickable').on('click', function () {
                            var attached_mpn = $(this).attr('rel');
                            var price = $(this).attr('price');
                            $.fn.logging('compare', 'addtocart', opts, attached_mpn, price);
                        });
                    }
                },
                reviews: {
                    init: function () {
                        reviews_count = reviewsContainer.attr('data-rcount');
                        $.fn.logging('review', 'page', opts, 'review_' + reviews_count);
                        this.clicks();
                    },
                    clicks: function () {

                        $('body').on('click', '[class*=-topreviews]', function () {
                            $.fn.logging('review', 'page', opts, 'review_scrollTo');
                        });

                        $('body').on('click', 'nav[class*=_pagination] ul li span', function () {
                            var page = $(this).attr("data-href");
                            $.fn.logging('review', 'page', opts, 'review_page_' + page);
                        });

                        $("div#minisite_tabs ul").find("[data-m-typeid='14']").on('click', function () {
                            $.fn.logging('review', 'matchhit', opts, 'review_tabClick');
                        });
                    }
                },
                pagetracking:{
                    init: function(){
                        //track when inpage is in viewport
                        log2('start inpage visible tracking')
                        var toptrac=[];
                        var middletrac=[];
                        var bottomtrac=[];
                        $(window).scroll(function() {
                            $('[id*=flixinpage_]').each(function(inPcount, b){

                                if($(this).find("#inpage_container").length>0 && $(this).find("#inpage_container").offset()){

                                    var top_of_element = $(this).find("#inpage_container").offset().top;
                                    var bottom_of_element = $(this).find("#inpage_container").offset().top + $(this).find("#inpage_container").outerHeight();
                                    var middle_of_element = $(this).find("#inpage_container").offset().top + $(this).find("#inpage_container").outerHeight()/2;

                                    var bottom_of_screen = $(window).scrollTop() + window.innerHeight;
                                    var top_of_screen = $(window).scrollTop();
                                    var pagepos='';

                                    if((bottom_of_screen > top_of_element) && (top_of_screen < bottom_of_element)){

                                        if(top_of_screen < top_of_element &&  $.inArray( inPcount, toptrac )==-1){
                                            log2('Top of inPage');
                                            pagepos='Top of inPage'
                                            toptrac.push(inPcount);
                                        }

                                        if(top_of_screen > middle_of_element &&  $.inArray( inPcount, middletrac )==-1){
                                            log2('Middle of inPage');
                                            pagepos='Middle of inPage'
                                            middletrac.push(inPcount);
                                        }

                                        if(bottom_of_screen > bottom_of_element && $.inArray( inPcount, bottomtrac )==-1){
                                            log2('Bottom of inPage');
                                            pagepos='Bottom of inPage'
                                            bottomtrac.push(inPcount);
                                        }

                                        if(typeof $.fn.inPage=='function' && pagepos!=''){
                                            var opts = $.fn.inPage.data;
                                            $.fn.logging('visible', 'media', opts, pagepos, null, inPcount)
                                        }

                                    }else {
                                        //log2('Inpage not visible yet')
                                    }
                                }
                            })
                        });



                    }
                },
                logotracking: {
                    init: function () {
                        log2('start logo tracking')
                        $.fn.logging('logo', 'page', opts, 'logo_page');
                        this.hover();
                        this.click();
                    },
                    hover: function () {
                        $('body').on('hover', '.flix-logop', function () {
                            if(logoclickonce==0)
                                $.fn.logging('logo', 'media', opts, 'logo_hover');
                            logoclickonce++;
                        });
                    },
                    click: function () {
                        $('body').on('touchstart', '.flix-logop', function () {
                            if(logoclickonce==0)
                                $.fn.logging('logo', 'media', opts, 'logo_click');
                            logoclickonce++;
                        });
                    }
                },
                ugctracking: {
                    init: function () {
                        log2('start ugc tracking')
                        FlixjQ.fn.logging('ugc', 'page', opts, 'ucg_page'); 
                        this.click();                       
                    },
                    click: function () {  
                        var timerId = null;                      
                        FlixjQ('body').on('click touchstart', '[data-flix-ucgmedia]', function () {
                            var opts2=opts;
                            var ucgtarget=FlixjQ(this).attr('data-flix-ucgmedia').toLowerCase()
                            if(FlixjQ(this).closest('.share-bubble').length)
                                ucgtarget='hotspot_'+ucgtarget                            
                            if(typeof opts=='undefined' && typeof flixhotspot && typeof flixhotspot.data!='undefined')
                                opts2=flixhotspot.data;
                            if(typeof window.flixlightboxclick=='undefined' && !timerId){
                                log2('clicked- '+ FlixjQ(this).attr('data-flix-ucgmedia'))
                                timerId = setTimeout(function(){
                                    FlixjQ.fn.logging('ugc', 'media', opts2, ucgtarget); 
                                    timerId = null;
                                },200);                                
                            }                           
                        });                        
                    }
                },
                flctracking: {
                    init: function() {
                        log2("start flc tracking via prototype");
                        this.checkmatch()
                    },
                    checkmatch:function(){
                        setTimeout(function(){
                            if($('#flix-location-content').children().length > 0 ){
                                $.fn.logging("flc", "location", opts, "flc_location ");
                                $.fn.logging.prototype.flctracking.click();
                            }else{
                                $.fn.logging("flc", "matchmisslocation ", opts, "flc_matchmisslocation  ");
                            }
                        },1500)
                    },
                    click: function() {
                        $("body").on("click touchstart", "[data-flix-flcmedia]", function() {
                            var opts2=opts;
                            var flctarget = FlixjQ(this).attr("data-flix-flcmedia").toLowerCase();
                            log2("clicked- " + flctarget);
                            $.fn.logging("flc", "locationmedia", opts2, flctarget)
                        })
                    }
                },
                buttontracking: {
                    init: function () {
                        var type='inpage';
                        if(typeof FlixjQ.fn.minisite!='undefined')
                            type='minisite'
                        var cc=0
                        var medialog=function(mediatext){

                            if(cc==0){
                                log2('clicked data-flix-media: '+mediatext)
                                cc=1;
                                $.fn.logging(type, 'media', opts, mediatext);
                                setTimeout(function(){ cc=0}, 500)
                            }
                        }
                        FlixjQ('body').on('click touchstart', '[data-flix-media]', function () {
                            var mediatext=FlixjQ(this).attr('data-flix-media')
                            medialog(mediatext)
                        });
                    }
                }
            };

            // File loader
            function loadComp(e, t) {
                if (-1 != e.search(".js") && 0 === FlixjQ("script[src='" + e + "']").length) {
                    var c = document.createElement("script");
                    c.type = "text/javascript", c.src = e, c.onload = t, document.head.appendChild(c);
                }
                if (-1 != e.search(".css") && 0 === FlixjQ("link[href='" + e + "']").length) {
                    var n = document.createElement("link");
                    n.rel = "stylesheet", n.href = e, n.type = "text/css", n.onload = t, document.head.appendChild(n);
                }
            }

            /* Get product options */
            $.fn.globalTracking = function (source) {
                if (trackingCall === false) {

                    if ($.fn.inPage && $.fn.inPage.data.product !== undefined) {
                        opts = $.fn.inPage.data;
                    } else if ($.fn.minisite && $.fn.minisite.data.product !== undefined) {
                        opts = $.fn.minisite.data;
                    } else {
                        return false;
                    }

                    $(document).ready(function () {
                        setTimeout(function(){
                            comparisonTable = $('.flix-compare');
                            reviewsContainer = $('.inpage_selector_reviews');

                            /* Load comparison table JS and CSS */
                            if (comparisonTable && comparisonTable.length > 0) {
                                loadComp(trackingDomain + '/delivery/static/comparison/standard/js/append.js');
                                loadComp(trackingDomain + '/delivery/static/comparison/standard/css/main.css');
                                $.fn.logging.prototype.comparison.init();
                            }

                            /* Reviews tracking */
                            if (reviewsContainer && reviewsContainer.length > 0) {
                                $.fn.logging.prototype.reviews.init();
                            }

                            /*Initialization page position tracking*/

                            if(FlixjQ.fn.inPage=='undefined' || (FlixjQ.fn.inPage && FlixjQ.fn.inPage.hasOwn( FlixjQ.fn.inPage.data.ab_data ))) {
                                if($("#inpage_container").length>0){
                                    $.fn.logging.prototype.pagetracking.init();
                                }
                            }else{
                                log2('No time tracking');
                                if(typeof FlixjQ.fn.inPage!='undefined' && typeof FlixjQ.fn.inPage.logTime!='undefined'){
                                    FlixjQ.fn.inPage.logTime= function(){}
                                }
                                if(typeof FlixjQ.fn.minisite!='undefined' && typeof FlixjQ.fn.minisite.logTime!='undefined'){
                                    FlixjQ.fn.minisite.logTime= function(){}
                                }
                                if(typeof FlixjQ.fn.compMinisite!='undefined' && typeof FlixjQ.fn.compMinisite.logTime!='undefined'){
                                    FlixjQ.fn.compMinisite.logTime= function(){}
                                }
                                if(typeof instance!='undefined' && typeof instance.logTime!='undefined'){
                                    instance.logTime= function(){}
                                }

                            }



                            //load 3dft JS and CSS */
                            if (FlixjQ('#flix-3dfwsrc').length) {
                                log2('Load 3dtw');
                                loadComp(trackingDomain + '/delivery/static/3dfw/3dfw.js');
                            }

                            if(FlixjQ('[skey]').length>0){
                                FlixjQ.fn.logging.prototype.logotracking.init();
                            }

                            if(FlixjQ('#flix-ugc-galfeatures').length>0){
                                FlixjQ.fn.logging.prototype.ugctracking.init();
                            }

                            //default button tracking
                            FlixjQ.fn.logging.prototype.buttontracking.init();

                            var compcc=0
                            function checkCompButton(){
                                if(FlixjQ('#inpage-iframe-modal a') && FlixjQ('#inpage-iframe-modal a').length && FlixjQ('#inpage-iframe-modal a').attr('onclick').search('scrollToComplimentary')!=-1){
                                    var s=FlixjQ('#inpage-iframe-modal a').attr('onclick')
                                    var id= s.split('(\"#link')[1].split('\")')[0]
                                    if(FlixjQ('[id^=flixinpage_'+id+']').length && FlixjQ('[id^=flixinpage_'+id+']').html().length==0){
                                        $('#inpage-iframe-modal a').hide();
                                        setTimeout(function(){
                                            if(compcc<10)
                                                checkCompButton()
                                            compcc++;
                                        }, 2000)
                                    }else{
                                        $('#inpage-iframe-modal a').show()
                                    }

                                }
                            }
                            //hide comp button if abtest hides complementary inpages
                            if(FlixjQ.fn.inPage && FlixjQ.fn.inPage.hasOwn( FlixjQ.fn.inPage.data.ab_data ))
                                checkCompButton();

                        }, 500);

                    });

                    trackingCall = true;
                }
            };

        }

    })(FlixjQ);
};

if(true){
    var responsivelyLazy=void 0!==responsivelyLazy?responsivelyLazy:function(){var y=!1,w=!0,a=null,l=null,d="undefined"!=typeof IntersectionObserver,u=!1,o=[],s=function(e){if(null===a)return!1;var t=e.getBoundingClientRect(),n=t.top,r=t.left,i=t.width,o=t.height;return n-500<l&&0<n+o&&r<a&&0<r+i},c=function(e,t){for(var n=e.length,r=t;r<n;r++){var i=!1,o=e[r],a=document.createElement("script"),l=o.getAttribute("type");null!==l&&a.setAttribute("type",l);var s=o.getAttribute("src");if(null!==s&&(a.setAttribute("src",s),(void 0===o.async||!1===o.async)&&r+1<n&&(i=!0,a.addEventListener("load",function(){c(e,r+1)}))),a.innerHTML=o.innerHTML,o.parentNode.insertBefore(a,o),o.parentNode.removeChild(o),i)break}},v=function(t,e){var n=e.getAttribute("data-flixsrcset");if(null!==n)if(0<(n=n.trim()).length){for(var r=[],i=(n=n.split(",")).length,o=0;o<i;o++){var a=n[o].trim();if(0!==a.length){var l=a.lastIndexOf(" ");if(-1===l)var s=a,d=999998;else s=a.substr(0,l),d=parseInt(a.substr(l+1,a.length-l-2),10);var u=!1;-1!==s.indexOf(".webp",s.length-5)?y&&(u=!0):u=!0,u&&r.push([s,d])}}r.sort(function(e,t){if(e[1]<t[1])return-1;if(e[1]>t[1])return 1;if(e[1]===t[1]){if(-1!==t[0].indexOf(".webp",t[0].length-5))return 1;if(-1!==e[0].indexOf(".webp",e[0].length-5))return-1}return 0}),n=r}else n=[];else n=[];var c=t.parentNode.offsetWidth,v=null;for(i=n.length,o=0;o<i;o++){var f=n[o];if(f[1]>=c){v=f;break}o==i-1&&(v=f)}null===v&&(v=[e.getAttribute("src"),999999]),void 0===t.responsivelyLazyLastSetOption&&(t.responsivelyLazyLastSetOption=["",0]);var A=(t.responsivelyLazyLastSetOption=v)[0];void 0===t.responsivelyLazyEventsAttached&&(t.responsivelyLazyEventsAttached=!0,e.addEventListener("load",function(){var e=t.getAttribute("data-onlazyload");null!==e&&new Function(e).bind(t)()},!1),e.addEventListener("error",function(){t.responsivelyLazyLastSetOption=["",0]},!1)),A===e.getAttribute("src")?e.removeAttribute("srcset"):w?e.setAttribute("srcset",A):e.setAttribute("src",A)},f=function(){a=window.innerWidth,l=window.innerHeight},A=function(e,t){if(-1!=location.href.search("flix-lazyqa")&&console.log("updateElement"),void 0!==window.flixJsCallbacks&&void 0!==window.flixJsCallbacks.override||void 0!==FlixjQ.fn&&void 0!==FlixjQ.fn.override){t=!0;-1!=location.href.search("flix-lazyqa")&&console.log("window.flixJsCallbacks.override")}if((-1===o.indexOf(e)||t)&&(s(e)||t)){var n=e.getAttribute("data-lazycontent");if(null!==n){o.push(e),u=!0,e.innerHTML=n;var r=e.querySelectorAll("script");return 0<r.length&&c(r,0),void(u=!1)}if("img"!==e.tagName.toLowerCase()){var i=e.querySelector("img");null===i||v(e,i)}else v(e,e)}},p=function(){for(var e=document.querySelectorAll("[data-flixsrcset]"),t=e.length,n=0;n<t;n++)A(e[n])};if(void 0!==window.addEventListener&&void 0!==document.querySelectorAll){f();var b=new Image;b.src="data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoCAAEADMDOJaQAA3AA/uuuAAA=",b.onload=b.onerror=function(){y=2===b.width,w="srcset"in document.createElement("img");var e=window.requestAnimationFrame||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||function(e){window.setTimeout(e,1e3/60)},t=!0,n=function(){t&&(t=!1,p()),e.call(null,n)};if(n(),d)var r=function(){for(var e=document.querySelectorAll("[data-flixsrcset]"),t=e.length,n=0;n<t;n++){var r=e[n];void 0===r.responsivelyLazyObserverAttached&&(r.responsivelyLazyObserverAttached=!0,i.observe(r))}},i=new IntersectionObserver(function(e){for(var t in e){var n=e[t];0<n.intersectionRatio&&A(n.target)}}),o=null;var a=function(){d?(window.clearTimeout(o),o=window.setTimeout(function(){t=!0},300)):t=!0},l=function(){for(var e=document.querySelectorAll("[data-flixsrcset]"),t=e.length,n=0;n<t;n++)for(var r=e[n].parentNode;r;)void 0===r.responsivelyLazyScrollAttached&&(r.responsivelyLazyScrollAttached=!0,r.addEventListener("scroll",a)),r=r.parentNode},s=function(){(window.addEventListener("resize",function(){f(),a()}),window.addEventListener("scroll",a),window.addEventListener("load",a),d&&r(),l(),"undefined"!=typeof MutationObserver)&&new MutationObserver(function(){u||(d&&r(),l(),a())}).observe(document.querySelector("body"),{childList:!0,subtree:!0})};"loading"===document.readyState?document.addEventListener("DOMContentLoaded",s):s()}}return{run:p,isVisible:s}}();}


	FlixjQ.fn.callbackRestricted=false;

if(!String.prototype.trim) {
  String.prototype.trim = function () {
    return this.replace(/^\s+|\s+$/g,'');
  };
}

;(function ($,win,ckie) {
    try {
        window.flixJsCallbacks = window.flixJsCallbacks || {};
        if( ! window.flixJsCallbacks.gvid ) {
            var ticks = 3;
            (function threeTicks() {
                if( window.flixJsCallbacks && typeof window.flixJsCallbacks.gvid == 'undefined' && ticks ) {
                    setTimeout(function(){ 
                        ticks--;
                        threeTicks();
                    },100)
                }
                else {
                    (function() {
                        if ( document.getElementById('data-flix-t-script') ) return;
                        window['flixgvid'] = function(obj){
                            try{
                                delete window['flixgvid'];
                                window.flixJsCallbacks = window.flixJsCallbacks || {};
                                window.flixJsCallbacks['gvid'] = obj['gvid'];
                             }catch(e){}
                        };

                        var _fscript = document.createElement('script');
                        _fscript.setAttribute("type","text/javascript");
                        _fscript.setAttribute("src", "//t.flix360.com/?f=flixgvid");
                        _fscript.setAttribute("async", "true");
                        _fscript.id = "data-flix-t-script";
                        document.getElementsByTagName('head')[0].appendChild(_fscript);                 
                    })();
                }
            })();
        }
    } catch( e ) {}

    $.getScript = function(url, callback){
        $.ajax({
            type: "GET",
            url: url,
            success: callback,
            dataType: "script",
            cache: true
        });
    };
    
    var delvePlayerVideo ="";
    var prevdelvePlayerCallback = false;

    delvePlayerCallback = function(playerId, eventName, data) {     
        var id = "limelight_player_876583";
        var period = 10000;
        
        try {
            if (eventName == 'onPlayerLoad' && (DelvePlayer.getPlayers() == null || DelvePlayer.getPlayers().length == 0)) {
                DelvePlayer.registerPlayer(id);
            }
        
            switch (eventName) {      
                case 'onMediaLoad':
                    delvePlayerVideo = data.id;
                            //if ( $('.inpage_selector_video').length>0 && $('.inpage_selector_video').is(':visible')) {$.fn.inPage.logVideoLoad(data.id);}
                            //if ( $('.inpage_cap_videos').length>0 && $('.inpage_cap_videos').is(':visible')) {$.fn.inPage.logVideoLoad(data.id);}
                            if ( $('.LimelightEmbeddedPlayerFlash').length>0 && $('.LimelightEmbeddedPlayerFlash').is(':visible')) {$.fn.inPage.logVideoLoad(data.id);}
                            if ( $('.limelight-player-viewport video').length>0 && $('.limelight-player-viewport').is(':visible')) {$.fn.inPage.logVideoLoad(data.id);}
                    break;
                case 'onPlayheadUpdate':
                    var now = new Date();
                    if (!prevdelvePlayerCallback  ||  now.getTime() - prevdelvePlayerCallback  > period ) {$.fn.inPage.logVideoTime(data.positionInMilliseconds/1000, delvePlayerVideo); prevdelvePlayerCallback =now.getTime(); }
                    break; 
            }
        }catch(e){}
    };

    $.fn.inPage = function(o) {

        $.fn.inPage.ref = this;
        var ref = this;
        $.fn.inPage.urlMain = '//media.flixcar.com/delivery/';
        if ('https:' == document.location.protocol) {
            $.fn.inPage.urlMain = '//media.flixcar.com/delivery/';
        }
      


            $.getScript($.fn.inPage.urlMain + 'js/minify?url=/static/delivery/jquery.guid.js', function() {
                $.getScript($.fn.inPage.urlMain + 'js/minify?url=/static/delivery/jquery.cookie.js', function() {
                    o = $.fn.inPage.fillOptions(o);
                    // Merge passed options with defaults
                    var opts = $.extend({}, $.fn.inPage.defaults, o);
                    opts.language = opts.language.toLowerCase();
                    opts.page_name = $.fn.inPage.getURL();
                    opts.event_type = "page";
                    opts.event_detail = "";
                    if (!/^[a-z0-9]{2}$/.test(opts.language)) {
                        // Invalid language
                        return false;
                    }
                    if (opts.distributor === 0) {
                        // Invalid distributor
                        return false;
                    }
                    // Handle all links
                    ref.each(function() {
                        FlixjQ("a", this).unbind('click');
                        FlixjQ("a", this).live("click", function(event) {
                            event.preventDefault();
                            var op = opts;
                            FlixjQ.fn.inPage.link($(this), op);
                        });
                    });
                    var gcookie = $.fn.inPage._getCookieName(opts, 'inpsession');
                    var tcookie = $.fn.inPage._getCookieName(opts, 'inptime');
                    var guid = FlixjQ.cookie(gcookie);
                    var vtime = FlixjQ.cookie(tcookie);
                    if (!guid || FlixjQ.Guid.IsEmpty(guid)) {
                        guid = FlixjQ.Guid.New();
                        FlixjQ.cookie(gcookie, guid);
                    }
                    if (!vtime) FlixjQ.cookie(tcookie, 0);
                    opts.session_id = guid;
                    opts.product_id = opts.product;
                    opts.distributor_id = opts.distributor;
                    var FlixLogInt = [4, 8, 16, 30, 60, 90, 120, 180, 240, 300];
                    for (var i = 0, len = FlixLogInt.length; i < len; i++) {
                        setTimeout((function(t, tm, $) {
                            return function() {
                                try {
                                    $.fn.inPage.logTime(t, tm);
                                } catch (e) {}
                            };
                        })(opts, FlixLogInt[i], $), FlixLogInt[i] * 1000);
                    }
                    if (opts.legacy !== "") {
                        // Legacy mode
                        opts.legacy = opts.legacy.toLowerCase();
                        if (!/^[a-z0-9]{8}$/.test(opts.legacy)) {
                            // Invalid legacy code
                        }
                        return $.fn.inPage.ref.each(function() {
                            var self = $(this);
                            opts.container = self;
                            $.ajax({
                                url: "//media.flixcar.com/inpage/legacy/" + opts.legacy + "-" + opts.language + ".js?callback=?",
                                type: "GET",
                                cache: true,
                                dataType: "json",
                                jsonpCallback: "jsonp" + opts.legacy + opts.language,
                                success: function(data) {
                                    self.html(data.results[0]);
                                    opts.product_id = data.product_id;
                                    $.fn.inPage.data = opts;
                                    $.fn.inPage.log(opts);
                                    if (!vtime) $.fn.inPage.logTime(opts, 0);

                                    /*  Global logging call */
                                    $.fn.globalTracking('inpage legacy');
                                }
                            });
                        });
                    } 
                    else if (opts.product !== "" && +opts.product > 0) {
                        var type = "";
                        var key = "";
                        var ab = "";
                        type = "sku";
                        key = opts.product;

                        
                        if ( $.fn.inPage.hasOwn( opts.ab_data ) && opts.ab_data.expire !== 'expired') {
                            ab +='/0/' + opts.base_ab;
                        }

                        var url = $.fn.inPage.urlMain + 'inpage/show/' + opts.distributor + "/" + opts.language + "/" + escape(key) + "/json" + ab + "?c=?";
                        var complimentary = 0;
                        if (opts.is_complimentary) {
                            complimentary = 1;
                        }
                        var name = "car" + opts.distributor + opts.language + key;

                        return ref.each(function() {
                            var self = $(this);
                            var container = this;
                            $.ajax({
                                url: url,
                                type: "GET",
                                dataType: "json",
                                data: {
                                    'complimentary': complimentary,
                                    'type': '.html'
                                },
                                cache: true,
                                jsonpCallback: "jsonp" + name.replace(/[^a-zA-Z0-9]+/g, ""),
                                success: function(data) {
                                    _css = data.css;
                                    if ('https:' == document.location.protocol) {
                                        _css = _css.replace('//media.flixcar.com/delivery/', '//media.flixcar.com/delivery/');
                                    }
                                    $.fn.inPage.loadFile("css", _css);

                                                                            _css_d = "//media.flixcar.com/delivery/js/minify?url=static/comparison/standard/css/main.css,/static/inpage/standard/css/main.css,/static/distributor/2162/inpage.css";
                                        if ('https:' == document.location.protocol) {
                                            _css_d = _css_d.replace('//media.flixcar.com/delivery/', '//media.flixcar.com/delivery/');
                                        }
                                        $.fn.inPage.loadFile("css", _css_d);
                                                                        
                                    append_content = '';
                                    
                                    _data = append_content + data.html;
                                    if ('https:' == document.location.protocol) {
                                        _data = _data.replace(new RegExp('//media.flixcar.com/delivery/', "g"), '//media.flixcar.com/delivery/');
                                        _data = _data.replace(new RegExp('//media.flixcar.com/f360cdn/', "g"), '//media.flixcar.com/f360cdn/');
                                        _data = _data.replace(new RegExp('http://img.delvenetworks.com/', "g"), 'https://img.delvenetworks.com/');
                                    }
                                    self.html(_data);
                                    opts.product_id = data.product_id;
                                    $.fn.inPage.data = opts;
                                    $.fn.inPage.log(opts);

                                    /*  Global logging call */
                                    $(document).ready(function() {
                                        $.fn.globalTracking('inpage');
                                    });

                                    if (!vtime) $.fn.inPage.logTime(opts, 0);
                                    self.children(".flixinpage").data("flixinpage-product", data.product_id);
                                    $.doTimeout(1000, function() {
                                        if ($(container).is(':visible')) {
                                            $.fn.inPage.runLoad(container);
                                            return false;
                                        }
                                        return true;
                                    });
                                },
                                complete: function() {
                                    if (!opts.is_complimentary) {
                                        $.getScript($.fn.inPage.urlMain + "js/minify?url=/static/delivery/jquery.swfobject.js");
                                        $.getScript($.fn.inPage.urlMain + "js/minify?url=static/js/virtual-advisor.js");
                                                                                    $.getScript($.fn.inPage.urlMain + "static/distributor/2162/inpage.js");
                                                                                                                            $.getScript($.fn.inPage.urlMain + "static/inpage/9/js/append.js");
                                                                                                                    }
                                }
                            });
                        });
                    }
                });
            });

        $.fn.inPage.galleryReload();
    };
   
    $.fn.inPage.hasOwn = function(obj) {
        for (var p in obj) {
            if (obj.hasOwnProperty(p)) {
                return true;
            }
        }
        return false;
    };
    $.fn.inPage.writeSioTy = function( gvid, ab ) {
        try{
            if( ! arguments[1] ) { return false; }
            var
             tyPage = {
                'gvid': gvid,
                'tst_id': [ab.tst_id]
            },
            ticks = 3;

            (function testForFlixCookie() {
                if( $.fn.inPage.readCookie === null && ticks ) {
                    setTimeout(testForFlixCookie, 1000);
                    ticks--;
                }
                else if ( ticks ) {
                    if( $.fn.inPage.readCookie('sio_ty') === null ) {
                        $.fn.inPage.createCookie ( 'sio_ty', JSON.stringify( tyPage ) );
                    }
                    else{
                        var content = JSON.parse ( $.fn.inPage.readCookie( 'sio_ty' ) );
                        if( ab.expire === 'expired'  ) {
                            for(var i = 0; i < content.tst_id.length; i++ ) {
                                if ( content.tst_id[i] == ab.tst_id ) {
                                    content.tst_id.splice ( i, 1);
                                }
                            }
                        }
                        else {
                            if( ! $.inArray( tyPage.tst_id, content.tst_id[0] )) {
                                content.tst_id[0][ content.tst_id[0].length ] = tyPage.tst_id;
                            }           
                        }
                        //delete && reinstate
                        $.fn.inPage.eraseCookie("sio_ty");
                        $.fn.inPage.createCookie( 'sio_ty', JSON.stringify( content ) );
                    }   
                }
            })();
        }catch(e){}
    };
    $.fn.inPage.readCookie = function ( name ) {
        try{
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');

            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
            }
            return null;
        }catch(e){}
    }; 
    $.fn.inPage.eraseCookie = function( name ) {
        try{
            $.fn.inPage.createCookie(name,"",-1);
        }catch(e){}
    };
    $.fn.inPage.createCookie = function ( name,value,days,path ) {
        try {
            if (days) {
                var date = new Date();
                date.setTime(date.getTime()+(days*24*60*60*1000));
                var expires = "; expires="+date.toGMTString();
            }
            else var expires = "";

            document.cookie = name+"="+value+expires+"; path=/; SameSite=None; Secure";
        }catch(e){}
    };
    $.fn.inPage.cleanOldCookie = function(ckie,pattern,existing_name){
        try{
            var cl=ckie.split(";");
            var cl_l = cl.length;
            for (var i=0; i<cl_l;i++){
                if (cl[i].indexOf(pattern) === 0) {
                    var c_name = cl[i].substr(0,cl[i].indexOf("="));
                    if (c_name!=existing_name) $.cookie(c_name,null);
                }
            }
        }catch(e){}
    }

    $.fn.inPage.getQsParam = function(name){
    var results = new RegExp('[\\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (!results)
    { 
        return ''; 
    }
    return results[1] || '';
    };

    $.fn.inPage.fillOptions = function(opts){
        for (var key in opts){
            if (opts[key] && typeof(opts[key])=='string' && opts[key].substr(0,1)=="{" && opts[key].substr(-1,1)=="}")
            {
                opts[key] = $.fn.inPage.getQsParam(opts[key].substring(1,opts[key].length-1));
            }
        }
        return opts;
    };

    // inPage plugin default options
    $.fn.inPage.defaults = {
        distributor: 0,
        language:    "en",
        legacy:      "",
        mpn:         "",
        ean:         "",
        sku:         "",
        product:     0,
        css:         "",
        container:   "",
        gvid:        "",
        abid:        "",
        ab:          "",
        pd:          "",
        pagedata:    {},
        update:      10,
        ab_data :    false,
        base_ab:     "",
        sio_ty:       0
    };

    $.fn.inPage.data = {};

    $.fn.inPage._getCookieName = function(data,cookie_type) {
        if (!cookie_type) cookie_type='inpsession';
        var product = data.product > 0 ? data.product : data.product_id;
        var distributor = data.distributor > 0 ? data.distributor : data.distributor_id;
        if (product>0)
        {
            return cookie_type+"_"+distributor+"_"+data.language;
        }else if(data.legacy!=''){
            return cookie_type+"_"+distributor+"_"+data.language;
        }else if (data.mpn != ""){
            return cookie_type+"_"+distributor+"_"+data.language;
        }else if (data.ean!=""){
            return cookie_type+"_"+distributor+"_"+data.language;
        }else if(data.sku!=""){
            return cookie_type+"_"+distributor+"_"+data.language;
        }

    };
    $.fn.inPage.logTime = function(data,newtime) {
        var page = $.fn.inPage.getURL();
        if (data==undefined)
        {
            data = $.fn.inPage.data;
        }
        var tcookie = $.fn.inPage._getCookieName(data,'inptime');

        if (newtime==undefined)
        {
            newtime = parseInt($.cookie(tcookie)) + $.fn.inPage.defaults.update;
        }
        data.page_name = page;
        data.event_type = "time";
        data.event_detail = "";
        data.view_time = newtime;
        if( newtime>300) return;
        $.cookie(tcookie,newtime);
        $.fn.inPage.log(data);
    };
    $.fn.inPage.galleryReload = function() {
        if($('#inpage_container .inpage_product_assets .inpage_block ul').length > 0 && $('#inpage_container').is(":visible")===true){

            var container_width = $('#inpage_container').width();

            if (container_width < 600){ scrollno = 1;}
            else if (container_width < 800){ scrollno = 2;}
            else scrollno = 3;

            var rtlcheck = false;
            if( $('html').css('direction') == 'rtl' || $('html').attr('dir') == 'rtl' || $("[dir='rtl']").length > 0 ) {
                rtlcheck = true;
            }

            $('.jcarousel-next').unbind('click');
            $('#inpage_container .inpage_product_assets .inpage_block ul').each(function(){
                $( this ).jcarousel({
                    itemFallbackDimension: 300,
                    scroll: scrollno,
                    rtl: rtlcheck
                });
                if(rtlcheck == true) {
                    $( this ).find('li').css({'float':'right'});
                }
            });

        }else{
            setTimeout(function(){
                $.fn.inPage.galleryReload();
            },2000);
        }
    }

    $.fn.inPage.getURL = function() {
        if(window.parent){
            var url = (window.location != window.parent.location)
            ? document.referrer
            : document.location.href;
        }else{
            var url = document.location.href;
        }

        return url;
    };
    $.fn.inPage.loadFile = function (type, url) {
        var element   = "";
        var attribute = "";
        var content   = new Object ();

        switch (type) {

            case "css":
                element   = "link";
                attribute = "href";
                content.type = "text/css";
                content.rel  = "stylesheet";
                break;

            case "script":
                element   = "script";
                attribute = "src";
                content.type = "text/javascript";
                break;
            default:
                // Unknown type
                return;

        }

        var found = false;

        $(element).each (function () {
            var href = $(this).attr (attribute);

            if (href == url) {
                found = true;
                return false;
            }
        });

        if (! found) {
            var dom = document.createElement (element);

            for (var i in content) {
                if (content.hasOwnProperty (i)) {
                    dom[i] = content[i];
                }
            }
            dom[attribute] = url;
            $("head").append (dom);
        }
    };

    $.fn.inPage.parsePage = function ( pagedata, target ) {
        var 
          found = '', h = null, fallback = true, generic = {}, specific = {}, p,
          ignore = [], precedence, hit = false;

        try {
            for( p in pagedata ) {
                if( pagedata.hasOwnProperty(p)) {
                    if( p == 'pageSpecific' ) {
                        specific = pagedata.pageSpecific;
                    }
                    else if ( ignore.indexOf( p ) === -1 ) {
                        generic[p] = pagedata[p];
                    }
                }
            }
            //set the precedence on availability in pageSpecific file. 
            precedence = ( !! specific[ target ] ) ? specific[ target ] : generic[ target ];
            if ( ! specific[ target ] ) { fallback = false; }

            //if pagespecific or generic is a function forget terms and attr arrays initially.             
            if( typeof precedence === 'function' ) {
                found = precedence();
                if ( ! found ) { fallback = true; }
            }

            if( ! found && !! precedence && !! precedence.terms && precedence.terms.length ) {
                for(var i = 0; i < precedence.terms.length; i++ ) {
                    h = document.querySelector ( precedence.terms[i] );
                    if ( h && !! h.textContent.trim() ) {
                        hit = true;
                        break;
                    }
                    else if ( h && h instanceof HTMLElement ) {
                        for ( var j = 0; j < precedence.attr.length; j++ ) {
                            if ( h.hasAttribute (precedence.attr[j] ) ) {
                                found = h.getAttribute ( precedence.attr[j] );
                                hit = true;
                                break;
                            }
                        }
                    }
                }
            }
            //fallback to generic if nothing found and not already run. 
            if( fallback && ! hit ) {
                precedence = generic[ target ];
                if( typeof precedence === 'function' ) {
                    found = precedence();
                }
                
                if( ! found && !! precedence && !! precedence.terms && precedence.terms.length ) {
                    for(var i = 0; i < precedence.terms.length; i++ ) {
                        h = document.querySelector ( precedence.terms[i] );
                        if ( h && !! h.textContent.trim() ) {
                            hit = true;
                            break;
                        }
                        else if ( h && h instanceof HTMLElement ) {
                            for ( var j = 0; j < precedence.attr.length; j++ ) {
                                if ( h.hasAttribute (precedence.attr[j] ) ) {
                                    found = h.getAttribute ( precedence.attr[j] );
                                    hit = true;
                                    break;
                                }
                            }
                        }
                    }
                }
            }
            //extract text content if we reach here.
            if ( ! found && h && h instanceof HTMLElement) {
                found = h.textContent.trim();
            }

            //enter only if we are a number with \. or , and its a price check
            if( target === 'price' && !! found ) {
                var 
                  value = $.fn.inPage.parsePrice( found );
                if( value ) { found = value; }
            }

            return found.trim();
        }catch(e){ return ''; }
    };

    $.fn.inPage.getCanonical = function( data, esc ) {
        try {
            var
              ret, canonicalCheck, s;

            ret = $.fn.inPage.parsePage ( data.pagedata, 'pn' );

            canonicalCheck = window.location.protocol + '//' + window.location.hostname + '/';

            if( ! ret || ret === canonicalCheck || ret.length + 1 <= canonicalCheck.length) {
                var url = (window.location != window.parent.location)
                ? document.referrer
                : top.document.URL;

                ret = url; 
            }

            s = ret.indexOf('#');
            if( s != -1 ) { ret = ret.substring(0,s); }

            return arguments.length > 1 ? escape(ret) : ret;

        } catch(e) {}
    };

    $.fn.inPage.parsePrice = function( price ) {
        try{
            if( !! price && ! price.trim().match(/[a-z][\.,\u20AC]+/gi)) {
                var 
                  value = price.trim().replace(/[^0-9\.,\u20AC]/gi, ''),
                  l = value.length, vl, v = '';
                if( !! window.flixJsCallbacks.priceParser ) {
                    value = window.flixJsCallbacks.priceParser.regEx( value );
                    l = value.length;
                }
                switch( true ) {
                    case (!! value.charAt( l - 3 ).match(/[\.,\u20AC]/)):
                        value = value.substr(0, (l - 3)) + '*' +  value.substr( (l - 2) );
                        break;              
                    case (!! value.charAt( l - 2 ).match(/[\.,\u20AC]/)):
                        value = value.substr(0, (l - 2)) + '*' +  value.substr( (l - 1) );
                        break;
                    default:
                        value = value.split('.');
                        vl = (value.length - 1);
                        if( value.length > 1 && value[ vl ].length > 2 ){ value[ vl ] = value[ vl ].substr(0,2);}
                        for( var i=0, vl = value.length; i<vl; i++) {
                            ( i == (vl - 2)) ? v += value[i] + '*' : v += value[i];
                        }
                        value = v;
                        break;
                }
                value = value.replace(/[\.,\u20AC]+/g, '');
                value = value.replace(/\*/, '.');
                return value;
            }
        } catch(ignore){}
        return false;
    };

    $.fn.inPage.pageData =  function( data ) {
        var
          parsePage = $.fn.inPage.parsePage, getCanonical = $.fn.inPage.getCanonical,
          pData = {}, s, df, i, p, get = '', skip;
        window.flixJsCallbacks.pageCapture = window.flixJsCallbacks.pageCapture || {};
        try{
            PAGEDATALOOP:
            for( p in data.pagedata ) {
                if( data.pagedata.hasOwnProperty(p)) {
                    switch( p ) {
                        case 'pageSpecific':
                            continue PAGEDATALOOP;
                            break;
                        case 'pn':
                            if( !! window.flixJsCallbacks.pageCapture[p] ) {
                                pData[p] = window.flixJsCallbacks.pageCapture[p];
                            }
                            else {
                                pData[p] = getCanonical( data.pagedata );
                                window.flixJsCallbacks.pageCapture[p] = pData[p];
                            }
                            break;
                        case 'br':
                        default:
                            if( !! window.flixJsCallbacks.pageCapture[p] ) {
                                pData[p] = window.flixJsCallbacks.pageCapture[p];
                            }
                            else {
                                pData[p] = parsePage ( data.pagedata, p );
                                window.flixJsCallbacks.pageCapture[p] = pData[p];
                            }
                            break;
                    }
                }
            }

            //overwrite price and add brand if being supplied by retailer
            df = ['mpn', 'ean', 'sku', 'price', 'brand'];
            skip = ['price', 'brand'];
            for( i=0; i<df.length; i++ ) {
                if( document.querySelector('script[data-flix-' + df[i] + ']') &&
                    !! document.querySelector('script[data-flix-' + df[i] + ']').getAttribute('data-flix-' + df[i]) ) {
                    //differs here from l.v2.js && minisite_logo
                    pData[ df[i] ] = document.querySelector('script[data-flix-' + df[i] + ']').getAttribute('data-flix-' + df[i]);
                    if( skip.indexOf(df[i]) < 0 ) {
                        window.flixJsCallbacks.pageCapture[ df[i] ] = pData[ df[i] ];
                    }
                    else {
                        if( !! data.pagedata && !! data.pagedata.pageSpecific && ! data.pagedata.pageSpecific.price ) {
                            if( df[i] === 'price' && $.fn.inPage.parsePrice( pData[ df[i] ] ) ) {
                                pData[ df[i] ] = $.fn.inPage.parsePrice( pData[ df[i] ] );
                                window.flixJsCallbacks.pageCapture[ df[i] ] = pData[ df[i] ];
                            }
                        }

                        if( !! data.pagedata && !! data.pagedata.pageSpecific && ! data.pagedata.pageSpecific.br ) {
                            //overwrite brand with standard naming
                            if( df[i] === 'brand' ) {
                                pData[ 'br' ] = pData[ df[i] ];
                                window.flixJsCallbacks.pageCapture['br'] = pData[ df[i] ];
                                delete pData['brand'];
                                delete window.flixJsCallbacks.pageCapture['brand'];
                            }
                        }
                    }
                }
            }

        } catch(ignore){}

        for (var key in pData) {
            get += "&"+key+ '=' + encodeURIComponent(pData[key]);
        }
        return get;
    };

    $.fn.inPage.log = function (data) {
        $(document).ready(function(){
            try {
                var 
                  d = new Date (),
                  t = '',
                  _base = '//media.flixcar.com/inpage/log.gif',
                  _beatUrl = '//rt.flix360.com/beat',
                  _beatNotActive = window.beat_disabled_retailers || [],
                  _beatByLanguage = [],
                  beat,
                  processed = null,
                  encrypt = [],
                  userAgents = [
                    'symbian',
                    'android',
                    'ios'
                  ]
                ;

                window.flixJsCallbacks.pageView = window.flixJsCallbacks.pageView || {log: false, beat: false};

                d.setMinutes( d.getTimezoneOffset());

                data.gvid = (window.flixJsCallbacks && window.flixJsCallbacks.gvid) ?  window.flixJsCallbacks.gvid : '';
                if( $.fn.inPage.hasOwn( data.ab_data ) && data.ab_data.expire !== 'expired') {
                    data.ab = "&ab="+data.ab_data.tst_id+"&abr="+data.ab_data.resource_ref+"&abid="+data.ab_data.cookie.abid;
                    if( ! $.fn.inPage.defaults.sio_ty ) {
                        $.fn.inPage.writeSioTy( window.flixJsCallbacks.gvid, data.ab_data);
                        $.fn.inPage.defaults.sio_ty++;
                    }
                }

                var url = _base+"?m=y&p=" + data.product_id + "&d=" + data.distributor_id + "&l=" + data.language + "&et=" + data.event_type + "&sid="+data.session_id+"&vtime="+data.view_time+"&gvid="+data.gvid+data.ab;
                url += "&ut=" + d.getTime();

                if ( (data.event_type=='mediatime' || data.event_type=='mediaload') && data.event_detail != 'virtural_advisor_video') { url+="&ed="+data.video_name; }else{url+="&ed="+encodeURIComponent(data.event_detail) ;}     
                
                if ( data.event_type == 'cart_click' || data.event_type == 'alert' ) { url+="&pn="+data.page_name; }
            
                if ( data.event_type == 'media' || data.event_type == 'mediaload' || data.event_type=='page') { url+=$.fn.inPage.pageData(data); }

                if( typeof window.flixJsCallbacks.imgCache === 'undefined' ) { window.flixJsCallbacks.imgCache = {};}
                var track = 'img_' + (new Date()).getTime();
                window.flixJsCallbacks.imgCache[track] = new Image();

                if( ! window.navigator.userAgent.match(/(ios|symbian|android)/i) && data.distributor_id && (encrypt.indexOf(+data.distributor_id) >= 0)) {
                    processed = $.fn.inPage.process( url );
                }
                if ( ! window.flixJsCallbacks.pageView.log ) {
                    var initBeaconTime = (new Date()).getTime();
                    function addBeacon ( beaconData ){
                      if( ! beaconData ) return false;
                      function getString ( objParams, destructure ) {
                        var params = [], obj = {}, prop, stem, preObj, str, fireBeaconTime;
                        var req = ["m", "p", "d", "l", "sid", "gvid", "ut", "ed", "et", "vtime", "ab", "abr", "abid", "pn"];
                        if( ! destructure ){
                          for(var p in objParams) {
                            if( objParams.hasOwnProperty(p) && (req.indexOf(p) >= 0 )) params.push(p + "=" + objParams[p]);
                          }
                          return "?" + params.join("&");
                        }       
                        else {
                          stem = objParams.split("?");
                          if ( stem.length <= 1 ) return false;
                          params = stem[1].split("&");
                          for(var i = 0; i < params.length; i++ ) {
                            prop = params[i].split("=");
                            if( req.indexOf( prop[0] ) >= 0 ){
                              obj[prop[0]] = prop[1];                                      
                            }
                          }
                          return obj;
                        }
                      }

                      if (( !! navigator && !! navigator.sendBeacon )) {
                        preObj = getString(beaconData, true);
                        if( !! preObj ) {
                          preObj.et = "time";
                          window.addEventListener("beforeunload", function(){
                            fireBeaconTime = (new Date()).getTime();
                            preObj.vtime = Math.round(((fireBeaconTime - initBeaconTime) / 1000));
                            preObj.ed = "onexit";
                            str = getString(preObj);
                            var img = new Image();
                            img.src = "//media.flixcar.com/inpage/log.gif" + str;
                            //SIO: to be implemented shortly.
                            //navigator.sendBeacon("http://sandbox.media.flixcar.com/inpage/log.gif" + str, {});
                          }, false);
                        };
                      }
                    }
                  
                    url += "&pv=1";
                    window.flixJsCallbacks.pageView.log = true;
                    try{
                        addBeacon( url );
                    }
                    catch(e){}
                }
                window.flixJsCallbacks.imgCache[track].src = url;
                window.flixJsCallbacks.imgCache[track].event_type = data.event_type;
       
                if( _beatNotActive.indexOf( +data.distributor_id ) < 0 && data.event_type === 'page' ) {             
                    if( !! window.flixJsCallbacks && !! window.flixJsCallbacks.a && ( data.distributor_id === 173 && data.mpn === "49UJ630V")) {
                        data.service = "inpage";
                        window.flixJsCallbacks.a.log( data );
                        return true;
                    }
                    beat = 'img_' + (new Date()).getTime();
                    window.flixJsCallbacks.imgCache[beat] = new Image();                    
                    if( ! window.flixJsCallbacks.pageView.beat ) {
                        if( ! url.match(/pv\=1/)) url += "&pv=1";
                        window.flixJsCallbacks.pageView.beat = true;
                    }
                    window.flixJsCallbacks.imgCache[beat].src = _beatUrl + url.replace(_base, '');
                    window.flixJsCallbacks.imgCache[beat].event_type = data.event_type;
                }
            } catch( ignore ){}
      });
    };

    if(typeof log2 == 'undefined'){
        if(location.href.search('local')!=-1)
            window.log2=function(){log2.history=log2.history||[];log2.history.push(arguments);if(this.console){console.log(Array.prototype.slice.call(arguments));}};
        else
            window.log2=function(){};
    }

    $.fn.inPage.link = function (ref,data) {
        original = ref;
        var href = ref.attr("href");
        var temp = href.split ("?");
        href = temp[0];

        var width  = 0;
        var height = 0;
        var lvp = '';

        if (typeof (temp[1]) != "undefined") {
            var params = temp[1].split ("&");

            for (var i in params) {
                if (params.hasOwnProperty (i)) {
                    temp = params[i].split ("=");

                    switch (temp[0]) {
                        case "width":
                            width = temp[1];
                            break;
                        case "height":
                            height = temp[1];
                            break;
                        case "lvp":
                            lvp = temp[1];
                            break;
                    }
                }
            }
        }

        temp = href.split (".");

        var type = temp[temp.length - 1].toLowerCase();
        
        if($(this).parent().hasClass("imggallery")){
            type = "gif";
        }

        var product = ref.parents (".flixinpage").data ("flixinpage-product");
        
        
        var filename = href.split ("/");

        var filename_real = filename[filename.length - 1];
        
        $.fn.inPage.logMedia(data,filename_real);
        
        if (ref.hasClass("customgallery")) return;

        if($(this).parent().hasClass("imggallery")){
            type = "gif";
        }

        
        switch (type) {
            case "swf":
                 var url = href;

                var html = $.flash.create ({
                    swf:    url,
                    width:  width,
                    height: height
                });
                $.fn.inPage.lightBox (html, width, height);
                break;
            case "flv":
            case "mov":
            case "wmv":
            case "avi":
            case "mp4":
                if(lvp == ''){
                    var url = $.fn.inPage.urlMain+"static/swf/mediaplayer.swf?width=" + width + "&height=" + height + "&autostart=true&file=" + href;
    
                    var html = $.flash.create ({
                        swf:    url,
                        width:  width,
                        height: height
                    });
                    $.fn.inPage.lightBox (html, width, height);
                }else{
                    if(LimelightPlayerUtil){
                        var html = '<span class="LimelightEmbeddedPlayer">';
                        var html = html + '<object type="application/x-shockwave-flash" id="limelight_player_876583" name="limelight_player_876583" class="LimelightEmbeddedPlayerFlash" width="' + width + '" height="' + height + '"';
                        
                        if ('https:' == document.location.protocol){
                            var html = html + ' data="https://assets.delvenetworks.com/player/loader.swf">';
                            var html = html + '<param name="movie" value="https://assets.delvenetworks.com/player/loader.swf"/>';
                        }else{
                            var html = html + ' data="http://assets.delvenetworks.com/player/loader.swf">';
                            var html = html + '<param name="movie" value="http://assets.delvenetworks.com/player/loader.swf"/>';
                        }
                        var html = html + '<param name="wmode" value="window"/>';
                        var html = html + '<param name="allowScriptAccess" value="always"/>';
                        var html = html + '<param name="allowFullScreen" value="true"/>';
                        var html = html + '<param name="flashVars" value="mediaId='+lvp+'&amp;playerForm=bc42a3d3fa364111a20bb8612ec052cf&amp;autoplay=true&amp;startQuality=High"/></object>';
                        var html = html + '</span>';
                        
                        $.fn.inPage.lightBox (html, width, height);
                        
                        LimelightPlayerUtil.initEmbed('limelight_player_876583');
                    }
               }
                return false;
                break;
            case "gif":
            case "jpg":
            case "png":
            case "png-1":
            case "png-2":
            case "png-3":
            case "png-4":
            case "png-5":
            case "png-6":
            case "png-7":
            case "png-8":
            case "png-9":
            case "png-10":
            case "png-11":
            case "png-12":
            case "jpg-1":
            case "jpg-2":
            case "jpg-3":
            case "jpg-4":
            case "jpg-5":
            case "jpg-6":
            case "jpg-7":
            case "jpg-8":
            case "jpg-9":
            case "jpg-10":
            case "jpg-11":
            case "jpg-12":
            case "gif-1":
            case "gif-2":
            case "gif-3":
            case "gif-4":
            case "gif-5":
            case "gif-6":
            case "gif-7":
            case "gif-8":
            case "gif-9":
            case "gif-10":
            case "gif-11":
            case "gif-12":
            case "tif":
                var preloader = new Image ();
                preloader.onload = function () {
                    var dom = document.createElement ("img");

                    dom.src    = preloader.src;
                    dom.alt    = "";
                    dom.width  = preloader.width;
                    dom.height = preloader.height;

                    if (width > 0) {
                        dom.width = width;
                    }

                    if (height > 0) {
                        dom.height = height;
                    }

                    preloader.onload = function () {};

                    $.fn.inPage.lightBox (dom, dom.width, dom.height, original);
                };
                preloader.src =  href;
                return false;
                break;
            case "txt":
            case "pdf":
                window.open(href,'_blank');
                return false;
                break;
                
            case "html":
            default:
                log2(href);
                break;
        }
        return true;
    };
    $.fn.inPage.logMedia = function(data,media) {
        var page = $.fn.inPage.getURL();
                
        data.page_name = page;
        data.event_type = "media";
        data.event_detail = media;
        data.view_time = 0;
        $.fn.inPage.log(data);
    };
    $.fn.inPage.lightBox = function (content, width, height, element) {
        show_prev = false;
        show_next = false;
        current_index = 0;
        
        if(element != ''){
            current = $(element).attr('href');
            
            gallery_list = $(element).parents('ul').find('a');
            
            gallery_list.each(function(index){
                
                if(current == $(this).attr('href')) current_index = index;
            });
            
            if( (current_index + 1) < gallery_list.length){
                show_next = $(element).parents('ul').find('a').get(current_index + 1);
            }
            if(current_index > 0){
                show_prev = $(element).parents('ul').find('a').get(current_index - 1);
            }
            
        }
        $('embed, object, select').css ({ 'visibility' : 'hidden' });

        if($('#flixinpage-lightbox').length <= 0){
            $('body').append ('<div id="flixinpage-overlay"></div><div id="flixinpage-lightbox"></div>');   
        }

        $("#flixinpage-lightbox").html (content);
        $("#flixinpage-lightbox").prepend('<a id="btn_close" style="cursor:pointer;position:absolute;right:-40px;" title="Close"><img src="//media.flixcar.com/delivery/static/images/close.png" border="0" alt="Close" /></a>');
          
        if(show_next != false){
            _a = $('<a>').attr('class','inpage_cap_next_photo').attr('title','next').text('next').css('display','none');
            _a.click (function () {
                
                $(show_next).trigger('click');
            });
            $("#flixinpage-lightbox").append(_a);
        }
        if(show_prev != false){
            _a = $('<a>').attr('class','inpage_cap_prev_photo').attr('title','previous').text('previous').css('display','none');
            _a.click (function () {
                
                $(show_prev).trigger('click');
            });
            $("#flixinpage-lightbox").append(_a);
        }
        
        $('#flixinpage-overlay').click (function () {
            $('#flixinpage-lightbox,#flixinpage-overlay').remove ();

            $('embed, object, select').css ({ 'visibility' : 'visible' });
        });

        $('#btn_close').click (function () {
            $('#flixinpage-lightbox,#flixinpage-overlay').remove ();

            $('embed, object, select').css ({ 'visibility' : 'visible' });
        });
        

        $.fn.inPage.lightBox.resize ();

        $(window).resize ($.fn.inPage.lightBox.resize ());
    };

    $.fn.inPage.lightBox.resize = function () {
        var pageSizes  = $.fn.inPage.lightBox.getPageSize ();
        var pageScroll = $.fn.inPage.lightBox.getPageScroll ();

        var boxWidth  = $("#flixinpage-lightbox").width ();
        var boxHeight = $("#flixinpage-lightbox").height ();

        $('#flixinpage-overlay').css ({
            "position":        "absolute",
            "top":             0,
            "left":            0,
            "z-index":         90,
            "backgroundColor": "#000",
            "opacity":         0.8,
            "width":           pageSizes[0],
            "height":          pageSizes[1]
        });

        $('#flixinpage-lightbox').css ({
            "position": "absolute",
            "z-index":  100,
            "top":      pageScroll[1] + (pageSizes[3] / 10),
            "left":     pageScroll[0] + (pageSizes[0] - $("#flixinpage-lightbox").width ()) / 2
        });
    };
    $.fn.inPage.logVideoTime = function(newtime,newvideo){
        data = $.extend ({}, {}, $.fn.inPage.data);     
        data.event_type = "mediatime";
        data.video_name = newvideo;  
        data.view_time = newtime;
        data.asset=0;
        $.fn.inPage.log(data);
    };
    $.fn.inPage.logVideoLoad = function(newvideo){
        data = $.extend ({}, {}, $.fn.inPage.data);
        data.event_type = "mediaload";
        data.video_name = newvideo;
        data.view_time = 0; 
        data.asset=0;
        $.fn.inPage.log(data);  
    };
    $.fn.inPage.lightBox.getPageSize = function () {

        var xScroll, yScroll;

        if (window.innerHeight && window.scrollMaxY) {  
            xScroll = window.innerWidth + window.scrollMaxX;
            yScroll = window.innerHeight + window.scrollMaxY;
        }
        else if (document.body.scrollHeight > document.body.offsetHeight) {
            xScroll = document.body.scrollWidth;
            yScroll = document.body.scrollHeight;
        }
        else {
            xScroll = document.body.offsetWidth;
            yScroll = document.body.offsetHeight;
        }

        var windowWidth, windowHeight;

        if (self.innerHeight) {
            // All except Explorer
            if (document.documentElement.clientWidth) {
                windowWidth = document.documentElement.clientWidth; 
            }
            else {
                windowWidth = self.innerWidth;
            }

            windowHeight = self.innerHeight;
        }
        else if (document.documentElement && document.documentElement.clientHeight) {
            // Explorer 6 Strict Mode
            windowWidth = document.documentElement.clientWidth;
            windowHeight = document.documentElement.clientHeight;
        }
        else if (document.body) {
            // Other Explorers
            windowWidth = document.body.clientWidth;
            windowHeight = document.body.clientHeight;
        }

        var pageHeight, pageWidth;

        // For small pages with total height less then height of the viewport
        if (yScroll < windowHeight) {
            pageHeight = windowHeight;
        }
        else { 
            pageHeight = yScroll;
        }

        // For small pages with total width less then width of the viewport
        if (xScroll < windowWidth) {
            pageWidth = xScroll;        
        }
        else {
            pageWidth = windowWidth;
        }

        var arrayPageSize = new Array (pageWidth, pageHeight, windowWidth, windowHeight);

        return arrayPageSize;
    };

    $.fn.inPage.lightBox.getPageScroll = function () {
        // getPageScroll() by quirksmode.com

        var xScroll, yScroll;

        if (self.pageYOffset) {
            yScroll = self.pageYOffset;
            xScroll = self.pageXOffset;
        }
        else if (document.documentElement && document.documentElement.scrollTop) {
            // Explorer 6 Strict
            yScroll = document.documentElement.scrollTop;
            xScroll = document.documentElement.scrollLeft;
        }
        else if (document.body) {
            // All other Explorers
            yScroll = document.body.scrollTop;
            xScroll = document.body.scrollLeft; 
        }

        var arrayPageScroll = new Array (xScroll, yScroll);

        return arrayPageScroll;
    };
    
    var widths = [ 550, 600, 650, 700, 750, 800, 830, 870, 900,950,1000,1050,1100,1150,1200,1250,1300];
    var removed_footnote = false;
    var footnote = '';
    
    
     $.fn.inPage.runLoad = function(container) {
    
        footnote = $( '#inpage_container .inpage_footnote' , container).clone();

        var rtlcheck = false;
        if( $('html').css('direction') == 'rtl' || $('html').attr('dir') == 'rtl' || $("[dir='rtl']").length > 0 ) {
            rtlcheck = true;
        }

        $( '#inpage_container  .inpage_product_assets .inpage_block ul' ).each(function(){

            $(this).jcarousel({
                itemFallbackDimension: 300,
                rtl: rtlcheck
            });
            if(rtlcheck == true) {
                $( this ).find('li').css({'float':'right'});
            }
        });
        
        $( '#inpage_cap_wrapper  ul.inpage_block_inner' ).each(function(){

            $(this).jcarousel({
                itemFallbackDimension: 300,
                rtl: rtlcheck
            });
            if(rtlcheck == true) {
                $( this ).find('li').css({'float':'right'});
            }
        });
        
        $('.flix_accessories a').click(function(){
           //window.open($(this).attr('href'));
           event.stopPropagation();
           return true;
        });
        
        $('.inpage_cap_accessory a').click(function(){
           //window.open($(this).attr('href'));
           event.stopPropagation();
           return true;
        });
        
         $.fn.inPage.resize();
        $( window ).bind( 'resize',  $.fn.inPage.resize(container) );
        
    };
    
     $.fn.inPage.resize = function(container) {
        
        var container_width = $('#inpage_container', container ).parent().actual( 'width' );    
        var container_class = '';
        for( var index in widths ){
            if ( container_width > widths[index] ) continue;
            
            if ( ( index - 1 ) < 0 )
                index = 0;
            
            var found_width = widths[index];
            
            container_class = 'inpage_' + found_width;
            
            break;
        }
        
        $( '#inpage_container', container ).attr( 'class', container_class );
        
        var container_width = $('#inpage_cap_wrapper', container ).parent().actual( 'width' );  
        var container_class = '';
        for( var index in widths ){
            if ( container_width > widths[index] ) continue;
            
            if ( ( index - 1 ) < 0 )
                index = 0;
            
            var found_width = widths[index];
            
            container_class = 'inpage_' + found_width;
            
            break;
        }
        
        $( '#inpage_cap_wrapper', container ).attr( 'class', container_class );
    };

var d = new Date();
var i = d.getTime();

var urlMain = '//media.flixcar.com/delivery/js/inpage/';
if ('https:' == document.location.protocol){
    urlMain = '//media.flixcar.com/delivery/js/inpage/';
}
window.flixJsCallbacks = window.flixJsCallbacks || {};
window.flixJsCallbacks.pageGeneric = window.flixJsCallbacks.pageGeneric || {};
window.flixJsCallbacks.pageSpecific = window.flixJsCallbacks.pageSpecific || {};


if(!String.prototype.trim) {
    String.prototype.trim = function () {
        return this.replace(/^\s+|\s+$/g,'');
    };
}

if ( ! Array.prototype.forEach ) {
    Array.prototype.forEach = function (fn, scope) {
        'use strict';
        var i, len;
        for (i = 0, len = this.length; i < len; ++i) {
            if (i in this) {
                fn.call(scope, this[i], i, this);
            }
        }
    };
}

window.flixJsCallbacks = window.flixJsCallbacks || {};

window.flixJsCallbacks.flixCartClick = function (identifier, dist_id, language,ab_hotspot_data) {
    var
        data = {}, flixLogging, parsePage, crypt;

    try {
        if( identifier === 'skip' || identifier === 'alert' ) return false;

        parsePage = function() {
            var
                canonicalCheck, s, found = '', h, title = '', i, j,
                terms = [
                    '[property="og:url"]',
                    '[rel="canonical"]'
                ],
                attr = [
                    'content',
                    'href'
                ]
                ;

            //write code here for fallback to just grabbing title and pn.
            if( !! document.getElementsByTagName( 'title')) {
                title = document.getElementsByTagName('title')[0].textContent.trim();
            }
            //parse pn vs canoncial here.
            for (i = 0; i < terms.length; i++ ) {
                h = document.querySelector ( terms[i] );
                if ( h && !! h.textContent.trim() ) {
                    break;
                }
                else if( h && h instanceof HTMLElement ){
                    for ( j = 0; j < attr.length; j++ ) {
                        if ( h.hasAttribute (attr[j] ) ) {
                            found += h.getAttribute ( attr[j] );
                            break;
                        }
                    }
                }
            }

            if ( ! found && h && h instanceof HTMLElement) {
                found = h.textContent.trim();
            }

            canonicalCheck = window.location.protocol + '//' + window.location.hostname + '/';

            if( ! found || found === canonicalCheck || found.length + 1 <= canonicalCheck.length) { found = document.URL; }

            s = found.indexOf('#');
            if( s !== -1 ) { found = found.substring(0,s); }

            return {
                title: encodeURIComponent(title),
                pn : encodeURIComponent(found)
            };
        }; //end parse page

        crypt = {a:function(inp){var r="";var c1,c2,c3,e1,e2,e3,e4;var i=0;inp=this.b(inp);while(i<inp.length){c1=inp.charCodeAt(i++);c2=inp.charCodeAt(i++);c3=inp.charCodeAt(i++);e1=c1>>2;e2=(c1&3)<<4|c2>>4;e3=(c2&15)<<2|c3>>6;e4=c3&63;if(isNaN(c2)){e3=e4=64}else if(isNaN(c3)){e4=64}r+=this.c(this.d[e1])+this.c(this.d[e2])+this.c(this.d[e3])+this.c(this.d[e4])}return r},c:function(k){return String.fromCharCode(k)},d:function(){var r=[];var q={45:1,48:57,61:1,65:90,95:1,97:122};for(var i in q){if(q[i]==1){r.push(i)}else{for(var z=i;z<=q[i];z++)r.push(z)}}return r}(),b:function(s){s=s.replace(/\r\n/g,"\n");var r="";for(var n=0,l=s.length;n<l;n++){var c=s.charCodeAt(n);if(c<128){r+=this.c(c)}else if(c>127&&c<2048){r+=this.c(c>>6|192);r+=this.c(c&63|128)}else{r+=this.c(c>>12|224);r+=this.c(c>>6&63|128);r+=this.c(c&63|128)}}return r}};

            var  process = function( str ){
                var
                    permitted = {
                        'm':'',
                        'p':'',
                        'd':'',
                        'l':'',
                        'et':'',
                        'ed':'d',
                        'sid':'',
                        'vtime':'',
                        'gvid':'',
                        'ut':'',
                        'br':'d',
                        'price':'',
                        'ref':'d',
                        'currency':'',
                        'pn':'d',
                        'h1':'d',
                        'ti':'d',
                        'img':'d',
                        'r1cat':'d',
                        'om':'d',
                        'mpn':'d',
                        'ean':'',
                        'sku':'d'
                    },
                    s1=str.split('?'),
                    s2 = s1[1] ? s1[1].split('&') : "",
                    o1 = {}, get, m, url = "",
                    u = [], p = [], s = [],
                    e = null
                    ;

                for(var i=0, l=s2.length; i<l; i++) {
                    var init = s2[i].split('=');
                    if ( permitted.hasOwnProperty(init[0])) {
                        o1[init[0]] = (permitted[init[0]] === 'd') ? decodeURIComponent(decodeURIComponent(init[1])) : init[1];
                    }

                }

                url += s1[0] + '?' + crypt.a(JSON.stringify(o1));
                return url;
            };

            flixLogging = function ( e ,ab_hotspot_data) {
                var
                    d = new Date (),
                    _base = '//media.flixcar.com/inpage/log.gif',
                    encrypt = [],
                    _beatUrl = encrypt.indexOf(+dist_id)!==-1 ? '//rt.flix360.com/enc/beat' : '//rt.flix360.com/beat',
                    _beatNotActive = window.beat_disabled_retailers || [],
                    _beatByLanguage = [],
                    beat,
                    fallback,
                    processed = null,
                    once_only = [
                        353,
                        1544,
                        2754,
                        607
                    ],
                    userAgents = [
                        'symbian',
                        'android',
                        'ios'
                    ],
                    key,
                    flixTag,
                    i,
                    url,
                    flixSource=null, indx=-1
                    ;

                data.d = dist_id || '';
                data.l = language || '';
                data.view_time = 0;



                data.gvid = ( window.flixJsCallbacks && window.flixJsCallbacks.gvid ) ? window.flixJsCallbacks.gvid : '';
                data.pid = ( window.flixJsCallbacks && window.flixJsCallbacks.pid ) ? window.flixJsCallbacks.pid : 0;

                url = _base+"?m=y&et="+data.event_type;
                url += "&gvid="+data.gvid;
                url += "&p="+data.pid;
                url += "&d="+data.d;
                url += "&l="+data.l;
                url += "&ed="+encodeURIComponent(data.event_detail);
                url += "&ut=" + d.getTime();

                flixTag = ['mpn', 'ean', 'sku'];
                for( i=0; i< flixTag.length; i++ ) {
                    if( document.querySelector('script[data-flix-' + flixTag[i] + ']') &&
                        document.querySelector('script[data-flix-' + flixTag[i] + ']').getAttribute('data-flix-' + flixTag[i]) ) {
                        url += "&" + flixTag[i] + "=" + document.querySelector('script[data-flix-' + flixTag[i] + ']').getAttribute('data-flix-' + flixTag[i]);
                    }
                }


                indx = window.location.search.indexOf('flxsrc=');
                if (indx!==-1)
                {
                    //save some parsing efforts on the basis that our source will always be added last
                    flixSource = window.location.search.substring(indx);
                }

                if( !! window.flixJsCallbacks.pageCapture ) {
                    for (key in window.flixJsCallbacks.pageCapture) {
                        if( window.flixJsCallbacks.pageCapture.hasOwnProperty(key)) {
                            if (key=='pn' && flixSource) window.flixJsCallbacks.pageCapture[key]+= (window.flixJsCallbacks.pageCapture[key].indexOf('?')!==-1 ? "&" : "?")+flixSource;
                            url += "&" + key + '=' + encodeURIComponent( window.flixJsCallbacks.pageCapture[key] );
                        }
                    }
                }
                else {
                    fallback = parsePage();
                    url += "&ti=" + fallback.title;
                    if(flixSource) {
                        var decoded = decodeURIComponent(fallback.pn);
                        fallback.pn = encodeURIComponent(decoded + (decoded.indexOf('?')!==-1 ? "&" : "?") +flixSource) ;
                    }
                    url += "&pn=" + fallback.pn;

                }

                if( typeof window.flixJsCallbacks.imgCache === 'undefined' ) { window.flixJsCallbacks.imgCache = {};}
                var track = 'img_' + (new Date).getTime();
                window.flixJsCallbacks.imgCache[track] = new Image();
                if( data.d && (encrypt.indexOf(+data.d) !==-1) && data.event_type === 'cart_click') {
                    url = process( url );
                }
                window.flixJsCallbacks.imgCache[track].src = ( !! processed ) ? processed : url;
                window.flixJsCallbacks.imgCache[track].event_type = data.event_type;


                // Hotspot A/B test Start
                if(typeof(ab_hotspot_data)!="undefined"){
                    if(ab_hotspot_data!=null){
                        var ab_visitor_id=ab_hotspot_data.visitor_id;
                        var ab_version=ab_hotspot_data.version
                        var ab_groups=ab_hotspot_data.groups
                        url += "&visitor_id="+ab_visitor_id+"&version="+ab_version+"&groups="+ab_groups;
                    }
                }
                // Hotspot A/B test END

                if(_beatNotActive.indexOf( +data.d ) < 0 && data.event_type === 'cart_click') {
                    setTimeout(function(){beat = 'img_' + (new Date()).getTime();}, 0);
                    window.flixJsCallbacks.imgCache[beat] = new Image();
                    window.flixJsCallbacks.imgCache[beat].src = _beatUrl + url.replace(_base, '');
                    window.flixJsCallbacks.imgCache[beat].event_type = data.event_type;
                }
                //disable the target once it has fired.
                if( once_only.indexOf(data.d) >= 0 ) {
                    e.target.onmousedown = function(){};
                }
            };

            if( identifier !== 'alert') {
                var NodeList = document.querySelectorAll(identifier);
                var ArrayList = Array.prototype.slice.call(NodeList, 0);
            }


            if( identifier === 'alert' || ! ArrayList.length )  {
                data.event_type = "alert";
                data.event_detail = 'a2cX';

                var ticks = 10;
                ;(function nTicks() {
                    if( window.flixJsCallbacks.gvid === 'undefined' && ticks ) {
                        setTimeout(function(){
                            ticks--;
                            nTicks();
                        },100);
                    }
                    else {
                        flixLogging();
                    }
                }());
            }
            else {
                for( var n = 0, l = ArrayList.length; n < l; n++ ) {
                    ArrayList[n].onmousedown = function(e) {
                        e = e || window.event;
                        data.event_type = "cart_click";
                        data.event_detail = 1;
                        flixLogging( e,ab_hotspot_data );

                        try {
                            //pap log
                            if(typeof FlixjQ.fn.ek!='undefined' && typeof foundpapmatch!='undefined' && foundpapmatch===1){
                                ekopts.event_type = "cart_click";
                                ekopts.event_detail = 1;
                                
                                FlixjQ.fn.ek.log(ekopts);
                            }
                        }catch(ignore){}
                    };
                }
            }
        }catch(ignore){}
    };
/*currys | 2162*/
window.flixJsCallbacks.pageSpecific = {
br:function () {
      for (i=0;i<document.querySelectorAll('script[type="application/ld+json"]').length;i++){
    var g = document.querySelectorAll('script[type="application/ld+json"]')[i].textContent;
    if (g.match(/"brand"\:.*/g)) {
        var res=g.replace(/\n/g,'').match(/"brand"\:[^\}]*\{[^\}]+name":([^\}]+)/);
    if(!!res && res.length>1) {res=(res[1]).replace(/"/g,"").trim();} else {res=null;}; }
            }
      var  bread = res || null, crumbs = null;
    try {
      if ( !! bread) {
        crumbs = bread;
        return crumbs || false;
      }
    } 
    catch (e) {
      
    }
  },r1Cat:function (){
        return ( !! window.s && window.s.eVar11 ) ? JSON.stringify( encodeURIComponent(window.s.eVar11)) : '';
    },om:function () {
        return ( !! window.R3_ITEM && !! window.R3_ITEM.categories) ? JSON.stringify( encodeURIComponent(window.R3_ITEM.categories) ) : '';
    },price:function () {
    var
      bread = document.querySelector('meta[property="og:price:amount"]') || null, crumbs = null;
    try {
      if ( !! bread && bread.hasAttribute('content')) {
        crumbs = bread.getAttribute('content');
        return crumbs || false;
      }
    } 
    catch (e) {
      
    }
  },ti:function () {
    var
      bread = document.querySelector('h1.page-title:not(p)') || null, crumbs = null;
    try {
      if ( !! bread) {
        crumbs = bread.textContent.trim();
        return crumbs || false;
      }
    } 
    catch (e) {
    }
  }};

/*CURRIES//2162*/

;(function() {
  try{
    if(!!window.flixJsCallbacks && !!window.flixJsCallbacks.flixCartClick) {
      var ticks = 10;
      (function domTest() {
        if( ! document.querySelector('[data-component*=add-to-basket-button]') && ticks ) {
          setTimeout(function(){ 
            ticks--;
            domTest();
          },5000);
        }
        else {
          window.flixJsCallbacks.flixCartClick( '[data-component*=add-to-basket-button]', 2162, 'en');        
        }
      }());
    }
  }catch(ignore){}

    try{
        //load 965 SIS - Check if there is a match for SIS products
        if(typeof window.checkSIScount =='undefined'){ 
            window.checkSIScount=1           
            var script = document.createElement('script'); 
            document.head.appendChild(script);  
            script.type = 'text/javascript';
            if(location.href.search('flix-local')!=-1)
                script.src = "//local-origin.flixsyndication.net/microsite/static/microsite/965/live/js/micrositematch.js";
            else if(location.href.search('flix-dev')!=-1)
                script.src = "//dev-origin.flixsyndication.net/microsite/static/microsite/965/live/js/micrositematch.js";
            else
                script.src = "//media.flixsyndication.net/microsite/static/microsite/965/live/js/micrositematch.js";
        }
    }catch(ignore){}
}());


//remove max-height from #flix-inpage after "Show more" clicked --updated the class from #richmedia-container
var i = 0;
var myInterval = setInterval(function() {
if (i === 5) return clearInterval(myInterval);
    
	if(typeof FlixjQ !=='undefined'){
		(function($){
			//console.log("yes in");
				if ($('#flix-mbl-page').length > 0 && $('#flix-mbl-page').is(":visible") === true) {
					//console.log("yes this is mobile");
					clearInterval(myInterval);
					FlixjQ('.long-text-ctl .bt').live('click', function() {
						setTimeout(function(){
							var flixinpageheight=FlixjQ('#flix-inpage').height();
							if(flixinpageheight>350)
								FlixjQ('#flix-inpage').css('max-height', 'none')
						},500)	
					})
				}
			FlixjQ('body').live('click','.long-text-ctl .bt', function() {
      setTimeout(function(){
        var flixinpageheight=FlixjQ('#flix-inpage').height();
        if(flixinpageheight>350)
          FlixjQ('#flix-inpage').css('max-height', 'none')
      },500)  
    })

    //Add see in 3d icon to hero section which scroll to CGI
    //NOTE change inpage.js as well to hide the scroll to button
    var seein3d='<a class="flix-intelbutton" href="javascript:void(0)" onclick="window.scrolltoflix()" data-flix-media="scrollto"><img src="http://media.flixfacts.com/inpage/intel/athena/i7_10th.png" style="display: inline; max-width: 48px;"></a>'
    //list of MPN which show the icon
    var mpnlist = ['10204719', '10204665','10215054', '10215053', '10212870', '10213255', '10213995'];
    var mpncheck = mpnlist.indexOf(FlixjQ('[data-flix-mpn]').attr('data-flix-mpn'));

    if(FlixjQ('[data-flix-mpn]').length && mpncheck!=-1  ){
      FlixjQ('.section.badges').each(function(){
        if(FlixjQ(this).find('.flix-intelbutton').length==0){
          FlixjQ(this).append(seein3d)

          
        }
      })                
    }

		})(FlixjQ);
	}
i++;
},1000);


;(function() {
  try{

    if(!window.devcc)
      window.devcc=0;

    function devloader(){
      window.devcc++;
      if ($('[data-component*=add-to-basket-button]').length > 0) {          
          window.devcc=16
          var product_mpn = $('[data-component*=add-to-basket-button]').attr('data-fupid');
          var product_ean = "";
          var product_brand = $('h1[class*="page-title"] span:first').text();
          var distributor = "2162";
          var language = "en";
          var headID = document.getElementsByTagName("head")[0];
          var flixScript = document.createElement('script');
          flixScript.type = 'text/javascript';
          flixScript.async = true;
          flixScript.setAttribute('data-flix-distributor', distributor);
          flixScript.setAttribute('data-flix-language', language);
          flixScript.setAttribute('data-flix-brand', product_brand);
          flixScript.setAttribute('data-flix-ean', product_ean);
          flixScript.setAttribute('data-flix-mpn', product_mpn);
          flixScript.setAttribute('data-flix-inpage', 'flix-inpage');
          flixScript.setAttribute('data-flix-price', '');
          headID.appendChild(flixScript);
          flixScript.src = '//dev-delivery.flix360.com/static/js/loader-dev.js';
      }else{
        setTimeout(function(){          
          if(window.devcc<15)
            devloader()
        }, 2000)
      }
    }

    if(window.devcc==0 && location.href.search('flix-test') !== -1)
      devloader();

  }catch(ignore){}
}());


//dell scroll to 
window.scrolltoflix= function(){  
  if(FlixjQ("#richmedia-container").length && FlixjQ("#richmedia-container").is(":visible") && FlixjQ("#richmedia-container").offset().top>100){
    FlixjQ([document.documentElement, document.body]).animate({
        scrollTop: FlixjQ("#richmedia-container").offset().top-60
    }, 2000);
  }else if(FlixjQ("#product-tabs").length && FlixjQ("#product-tabs").is(":visible")){
      FlixjQ([document.documentElement, document.body]).animate({
          scrollTop: FlixjQ("#product-tabs").offset().top-100
      }, 2000);    
  }
};
;window.flixJsCallbacks.pageGeneric = {
    br: {
        terms: [
            '.fpLinkBrandProducts[title]',
            '[itemprop="brand"]',
            '[itemprop="brand"][content]',
            '[data-brand]',
            '.specification',
            '[brandname]',
            '[itemprop="manufacturer"]',
            '.brand',
            '#productBrandName[value]'
        ],
        attr: [
            'title',
            'content',
            'data-brand',
            'brandname',
            'value'        
        ]
    },
    price: {
        terms: [
            '[property="og:price:amount"][content]',
            '[itemprop="price"]',
            '[itemprop="generic"]',
            '[itemprop="price"][content]',
            '.finalprice',
            '.price-current-label',
            '.fpPriceBig',
            '.prijs',
            '.price',
            '.pdp-price-total',
            '.pounds',
            '.pricelarge',
            '[data-price]'
        ],
        attr: [
            'content'
        ]
    },
    ref: function() {
        return document.referrer || '';
    },
    currency: {
        terms: [
            '[property="og:price:currency"][content]',
            '[itemprop="priceCurrency"][content]',
            '.currency[title]',
            '.value-title[title]',
            '.currency'
        ],
        attr: [
            'content',
            'title'
        ]        
    },
    pn: {
        terms: [
            '[property="og:url"][content]',
            '[rel="canonical"][href]'
        ],
        attr: [
            'content',
            'href'
        ]
    },
    h1: {
        terms: [
             'h1'
        ]
    },
    ti: {
        terms: [
             'title'
        ]
    },
    img: {
        terms: [
            '[property="og:image"]'
        ],
        attr: [
            'content'
        ]
    },
    'r1.cat': '',
    om: {}
};


window.flixJsCallbacks.pageGeneric.pageSpecific = window.flixJsCallbacks.pageSpecific || {};


$(document).ready(function(){

    var div = $('<div>').attr('id','flixinpage_'+i);
        var protocolLess = urlMain.replace(/(^\w+:|^)/, '');
        var inpcontainer = $("script[src*='"+protocolLess+"']",$("body")).parent();
    if (inpcontainer.length < 1) {inpcontainer = $("#flix-inpage",$("body"));}
    inpcontainer.append(div);
    
    $("#flixinpage_"+i).inPage ({
        distributor: '2162',
        language: 'en',
        product: '1833057',
        ab_data: false,
        base_ab: "ZmFsc2U=",
        pagedata: window.flixJsCallbacks.pageGeneric
    });
    window.flixJsCallbacks.pid ='1833057';
         
    
	});

}) (FlixjQ,window,document.cookie);


function _FFOpenRating(sticky_URL_fix){
    var qliteWidth = 690; 
    var qliteHeight = 550; 
    var ModalWin = null; 
    var TP = 10;
    var LP = 10; 
    var settings = 'height=' + qliteHeight + ',width=' + qliteWidth + ',top=' + TP + ',left=' + LP + ',scrollbars=yes';
    if (!ModalWin || ModalWin.closed){ 
        ModalWin = window.open(sticky_URL_fix, 'ModalWin', settings)
        if (sticky_URL_fix.indexOf('quikcliplite') != -1) {
            ModalWin.moveTo(10, 10);
            ModalWin.resizeTo(qliteWidth, qliteHeight);
        }
        else {
            if (ModalWin && ModalWin.focus) ModalWin.focus();
        }
    } 
}

/*found=1*/


;(function (win) {
	var cbk = ['load', 'loadInpage'];
    /*Standard Callback function*/
try {
	
	for (x in cbk) {
		if ( typeof (window.flixJsCallbacks) === "object" && typeof (window.flixJsCallbacks["_"+cbk[x]+"Callback"]) === "function") {
			var f = window.flixJsCallbacks["_"+cbk[x]+"Callback"];
			f();
		//	console.log("triggered through the generic callback function "+cbk[x]);
			window.flixJsCallbacks["_"+cbk[x]+"Callback"] = function(){}; /*emptying function*/
		}
	}
	window.flixJsCallbacks["_loadNoshowCallback"] = function(){}; /*emptying no show function*/

	

	
} catch(e) {
	try {
		console.log(e)
	} catch(e1) {
	}
}}) (window);

/*CURRIES//2162*/
;(function() {

 try {
    var dict = {
      "10133366": "da4d03e3-8942-4942-b400-765bc94f4c56",
      "10127142": "da4d03e3-8942-4942-b400-765bc94f4c56"
    };
    var _mfq = _mfq || [];
    for(var p in dict) {
      var regex = new RegExp( p, 'i');
      if( dict.hasOwnProperty(p) && regex.test( window.location.pathname )) {
        setTimeout((function() {
          var mf = document.createElement("script"); mf.type = "text/javascript"; mf.async = true;
          mf.src = "//cdn.mouseflow.com/projects/" + dict[p] + ".js";
          document.getElementsByTagName("head")[0].appendChild(mf);
        }()), 10000);
      }
    }
  } catch (ignore) {}
}());

function scrollToComplimentary(to){
FlixjQ('body, html').animate({ scrollTop: FlixjQ(to).offset().top }, 1000);
/*dublicates needed because of lazyloading*/
var targ=to;
setTimeout(function(){
    FlixjQ('body, html').animate({ scrollTop: FlixjQ(targ).offset().top }, 500);
}, 2000);
}

FlixjQ('.flix-privacy-policy-link').live('click', function(e) {
    e.preventDefault();
    FlixjQ(this).parent().next().find('.flix-privacy-policy-text').slideToggle();
});
