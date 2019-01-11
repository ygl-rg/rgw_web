//>>built
define("dstore/Csv",["dojo/_base/lang","dojo/_base/declare"],function(r,t){function u(d,g){var h={},b=d.length,a;for(a=0;a<b;a++)h[d[a]]=g[a];return h}var v=/^\s*"([\S\s]*)"\s*$/,w=/""/g,x=/"/g;return t(null,{fieldNames:null,delimiter:",",newline:"\r\n",trim:!1,parse:function(d){var g=[];d=d.split(this.newline);var h=this.fieldNames,b=0,a=[],k="",l="",e,f,c,m,n,p,q;n=0;c=d.length;a:for(;n<c;n++)if(r.trim(d[n])){e=d[n].split(this.delimiter);p=0;for(m=e.length;p<m;p++){f=e[p];q=-1;k+=l+f;for(l="";0<=
(q=f.indexOf('"',q+1));)b++;if(0===b%2){if(0<b)if(b=v.exec(k))a.push(b[1].replace(w,'"'));else{a=[];k="";b=0;continue a}else a.push(this.trim||!h?r.trim(k):k);k="";b=0}else l=this.delimiter}0===b?(h?g.push(u(h,a)):h=this.fieldNames=a,a=[]):l=this.newline}return g},toCsv:function(d){return this.stringify(this.data,d)},stringify:function(d,g){g=g||{};var h=g.alwaysQuote,b=this.fieldNames,a=this.delimiter,k=this.newline,l="",e,f,c,m;for(e=-1;e<d.length;e++)for(-1<e&&(l+=k),f=0;f<b.length;f++){c=0>e?
b[f]:d[e][b[f]];if(null===c||void 0===c)c="";"string"!==typeof c&&(c=c.toString());m=h||0<=c.indexOf('"')||0<=c.indexOf(a);l+=(0<f?a:"")+(m?'"'+c.replace(x,'""')+'"':c)}g.trailingNewline&&(l+=k);return l}})});
//# sourceMappingURL=Csv.js.map