!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.VueFilter=t():e.VueFilter=t()}(this,function(){return webpackJsonp_name_([3],{0:function(e,t,n){e.exports=n(102)},11:function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=function(e,t){var n="";e=""+e,e=e.replace(/[^\d]/g,"").substr(0,11);for(var o=(e.indexOf(t),0);o<e.length;o++)3!==o&&7!==o||(n+=" "),n+=e[o];return t&&(n=n.replace(t,'<span class="h">'+t+"</span>")),n}},102:function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{"default":e}}var r=n(11),u=o(r);window.Vue.filter("phoneNumber",u["default"]),e.exports={}}})});
//# sourceMappingURL=VueFilter.js.map