//>>built
define("dstore/db/LocalStorage",["dojo/_base/declare","../Memory"],function(c,f){return c([f],{dbPrefix:"dojo-db",storeName:"default",constructor:function(){for(var a=[],b=this.prefix=this.dbPrefix+"-"+this.storeName+"-",d=0,c=localStorage.length;d<c;d++){var e=localStorage.key(d);e.slice(0,b.length)===b&&a.push(this._restore(JSON.parse(localStorage.getItem(e))))}this.setData(a)},putSync:function(a){var b=this.inherited(arguments);localStorage.setItem(this.prefix+this.getIdentity(a),JSON.stringify(a));
return b},removeSync:function(a){localStorage.removeItem(this.prefix+a);return this.inherited(arguments)}})});
//# sourceMappingURL=LocalStorage.js.map