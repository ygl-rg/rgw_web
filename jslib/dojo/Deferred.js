//>>built
define("dojo/Deferred",["./has","./_base/lang","./errors/CancelError","./promise/Promise","require"],function(v,w,r,t,p){var u=Object.freeze||function(){},m=function(b,a,e,c,d){for(d=0;d<b.length;d++)q(b[d],a,e,c)},q=function(b,a,e,c){c=b[a];var d=b.deferred;if(c)try{var f=c(e);0===a?"undefined"!==typeof f&&h(d,a,f):f&&"function"===typeof f.then?(b.cancel=f.cancel,f.then(n(d,1),n(d,2),n(d,0))):h(d,1,f)}catch(g){h(d,2,g)}else h(d,a,e)},n=function(b,a){return function(e){h(b,a,e)}},h=function(b,a,e){if(!b.isCanceled())switch(a){case 0:b.progress(e);
break;case 1:b.resolve(e);break;case 2:b.reject(e)}},l=function(b){var a=this.promise=new t,e=this,c,d,f=!1,g=[];this.isResolved=a.isResolved=function(){return 1===c};this.isRejected=a.isRejected=function(){return 2===c};this.isFulfilled=a.isFulfilled=function(){return!!c};this.isCanceled=a.isCanceled=function(){return f};this.progress=function(d,b){if(c){if(!0===b)throw Error("This deferred has already been fulfilled.");return a}m(g,0,d,null,e);return a};this.resolve=function(b,f){if(c){if(!0===
f)throw Error("This deferred has already been fulfilled.");return a}m(g,c=1,d=b,null,e);g=null;return a};var h=this.reject=function(b,f){if(c){if(!0===f)throw Error("This deferred has already been fulfilled.");return a}m(g,c=2,d=b,void 0,e);g=null;return a};this.then=a.then=function(b,e,f){var k=[f,b,e];k.cancel=a.cancel;k.deferred=new l(function(a){return k.cancel&&k.cancel(a)});c&&!g?q(k,c,d,void 0):g.push(k);return k.deferred.promise};this.cancel=a.cancel=function(a,e){if(!c){if(b){var g=b(a);
a="undefined"===typeof g?a:g}f=!0;if(!c)return"undefined"===typeof a&&(a=new r),h(a),a;if(2===c&&d===a)return a}else if(!0===e)throw Error("This deferred has already been fulfilled.");};u(a)};l.prototype.toString=function(){return"[object Deferred]"};p&&p(l);return l});
//# sourceMappingURL=Deferred.js.map