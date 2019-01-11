//>>built
define("dojox/app/utils/mvcModel",["dojo/_base/lang","dojo/Deferred","dojo/when","dojox/mvc/getStateful"],function(f,n,p,q){return function(d,a,l){var g={},e=new n,h=function(a){var c={},b;for(b in a)"_"!==b.charAt(0)&&(c[b]=a[b]);return c},b;if(a.store)b={store:a.store.store,query:a.query?h(a.query):a.store.query?h(a.store.query):{}};else if(a.datastore){try{var r=require("dojo/store/DataStore")}catch(m){throw Error("When using datastore the dojo/store/DataStore module must be listed in the dependencies");
}b={store:new r({store:a.datastore.store}),query:h(a.query)}}else a.data&&(a.data&&f.isString(a.data)&&(a.data=f.getObject(a.data)),b={data:a.data,query:{}});d=d[l].type?d[l].type:"dojox/mvc/EditStoreRefListController";try{var t=require(d)}catch(m){throw Error(d+" must be listed in the dependencies");}var c=new t(b),k;try{c.queryStore?k=c.queryStore(b.query):(c.set(c._refSourceModelProp||c._refModelProp||"model",q(b.data)),k=c)}catch(m){return e.reject("load mvc model error."),e.promise}p(k,f.hitch(this,
function(){g=c;e.resolve(g);return g}),function(){e.reject("load model error.")});return e}});
//# sourceMappingURL=mvcModel.js.map