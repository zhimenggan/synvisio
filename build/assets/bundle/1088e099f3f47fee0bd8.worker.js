!function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t,r){"use strict";function n(e){let t,r={chromosomeMap:{},max:0,min:0},n=[!1,[0,0]];return e.split("\n").forEach(function(e,o){if(e.indexOf("min=")>-1)n[0]=!0,n[1]=e.trim().split(",").map(e=>e.trim().slice(4));else{const n=(t=e.split("\t"))[0],o=+t[1],s=+t[2],a=+t[3];n.length>=3&&n.length<=4&&(r.chromosomeMap.hasOwnProperty(n)?r.chromosomeMap[n].push({value:a,end:s,start:o}):r.chromosomeMap[n]=[{value:a,end:s,start:o}],a>r.max&&(r.max=a),a<r.min&&(r.min=a))}}),Object.keys(r.chromosomeMap).map(e=>{r.chromosomeMap[e].sort(function(e,t){return e.start-t.start})}),n[0]&&(r.min=n[1][0],r.max=n[1][1]),r}r.r(t),r.d(t,"process",function(){return n}),addEventListener("message",function(e){var r,n=e.data,o=n.type,s=n.method,a=n.id,i=n.params;"RPC"===o&&s&&((r=t[s])?Promise.resolve().then(function(){return r.apply(t,i)}):Promise.reject("No such method")).then(function(e){postMessage({type:"RPC",id:a,result:e})}).catch(function(e){var t={message:e};e.stack&&(t.message=e.message,t.stack=e.stack,t.name=e.name),postMessage({type:"RPC",id:a,error:t})})}),postMessage({type:"RPC",method:"ready"})}]);