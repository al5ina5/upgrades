module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=67)}({3:function(e,t){e.exports=flarum.core.compat["admin/app"]},67:function(e,t,n){"use strict";n.r(t);var r=n(3),a=n.n(r);a.a.initializers.add("ianm-level-ranks",(function(){a.a.extensionData.for("ianm-level-ranks").registerSetting({label:a.a.translator.trans("ianm-level-ranks.admin.settings.levelText"),setting:"ianm-level-ranks.pointsText",placeholder:a.a.translator.trans("ianm-level-ranks.lib.defaults.level"),type:"text"})}))}});
//# sourceMappingURL=admin.js.map