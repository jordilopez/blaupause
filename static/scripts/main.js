!function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,t),o.loaded=!0,o.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";function r(e){(0,o.info)("Event: "+e.type,"Datestamp: "+this.date)}var o=n(2);(0,o.ready)(r,{date:new Date})},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.htmlToElements=t.htmlToElement=t.warn=t.log=t.info=t.error=t.ready=void 0;var o=n(3);Object.defineProperty(t,"error",{enumerable:!0,get:function(){return o.error}}),Object.defineProperty(t,"info",{enumerable:!0,get:function(){return o.info}}),Object.defineProperty(t,"log",{enumerable:!0,get:function(){return o.log}}),Object.defineProperty(t,"warn",{enumerable:!0,get:function(){return o.warn}});var a=n(4);Object.defineProperty(t,"htmlToElement",{enumerable:!0,get:function(){return a.htmlToElement}}),Object.defineProperty(t,"htmlToElements",{enumerable:!0,get:function(){return a.htmlToElements}});var i=n(5),u=r(i);t.ready=u["default"]},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=function(e){var t=arguments.length<=1||void 0===arguments[1]?"📐":arguments[1];return t+" "+e},r=function(e){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];console&&console[e]&&r.forEach(function(t){console[e](n(t))})};t.error=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.apply(void 0,["error"].concat(t))},t.info=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.apply(void 0,["info"].concat(t))},t.log=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.apply(void 0,["log"].concat(t))},t.warn=function(){for(var e=arguments.length,t=Array(e),n=0;n<e;n++)t[n]=arguments[n];return r.apply(void 0,["warn"].concat(t))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.htmlToElements=t.htmlToElement=void 0;var r=n(2),o=document,a=function(){var e="content"in o.createElement("template");return e||(0,r.warn)("Browser doesn't support <template>. This won't work for <td>, <tr>, <pre>, <select>"),e},i=function(e){var t=!(arguments.length<=1||void 0===arguments[1])&&arguments[1],n=a(),r=n?o.createElement("template"):o.createElement("div");r.innerHTML=e;var i=n?r.content:r;return i[t?"childNodes":"firstChild"]};t.htmlToElement=function(e){return i(e)},t.htmlToElements=function(e){return i(e,!0)}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=document,r=void 0,o=function i(e){n.removeEventListener("DOMContentLoaded",i),r=e};n.addEventListener("DOMContentLoaded",o);var a=function(e,t){var o=t||window;"loading"!==n.readyState?e.call(o,r):!function(){var t=function a(t){n.removeEventListener("DOMContentLoaded",a),r=t,e.call(o,t)};n.addEventListener("DOMContentLoaded",t)}()};t["default"]=a}]);