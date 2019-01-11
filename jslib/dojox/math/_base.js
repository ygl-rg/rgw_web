//>>built
define("dojox/math/_base",["dojo","dojox"],function(h,g){h.getObject("math",!0,g);var k=g.math;h.mixin(g.math,{toRadians:function(a){return a*Math.PI/180},toDegrees:function(a){return 180*a/Math.PI},degreesToRadians:function(a){return k.toRadians(a)},radiansToDegrees:function(a){return k.toDegrees(a)},_gamma:function(a){for(var b=1;1<=--a;)b*=a;if(0==a)return b;if(Math.floor(a)==a)return NaN;if(-.5==a)return Math.sqrt(Math.PI);if(-.5>a)return Math.PI/(Math.sin(Math.PI*(a+1))*this._gamma(-a));for(var d=
[5.665805601518633E-6,1.274371766337968,-4.937419909315511,7.872026703248596,-6.676050374943609,3.252529844448517,-.9185252144102627,.14474022977730785,-.011627561382389852,4.011798075706662E-4,-4.2652458386405745E-6,6.665191329033609E-9,-1.5392547381874824E-13],c=d[0],e=1;13>e;e++)c+=d[e]/(a+e);return b*Math.pow(a+13,a+.5)/Math.exp(a)*c},factorial:function(a){return this._gamma(a+1)},permutations:function(a,b){return 0==a||0==b?1:this.factorial(a)/this.factorial(a-b)},combinations:function(a,b){return 0==
a||0==b?1:this.factorial(a)/(this.factorial(a-b)*this.factorial(b))},bernstein:function(a,b,d){return this.combinations(b,d)*Math.pow(a,d)*Math.pow(1-a,b-d)},gaussian:function(){var a=2;do var b=2*Math.random()-1,a=2*Math.random()-1,a=b*b+a*a;while(1<=a);return b*Math.sqrt(-2*Math.log(a)/a)},range:function(a,b,d){2>arguments.length&&(b=a,a=0);var c=[],e=d||1,f;if(0<e)for(f=a;f<b;f+=e)c.push(f);else if(0>e)for(f=a;f>b;f+=e)c.push(f);else throw Error("dojox.math.range: step must not be zero.");return c},
distance:function(a,b){return Math.sqrt(Math.pow(b[0]-a[0],2)+Math.pow(b[1]-a[1],2))},midpoint:function(a,b){a.length!=b.length&&console.error("dojox.math.midpoint: Points A and B are not the same dimensionally.",a,b);for(var d=[],c=0;c<a.length;c++)d[c]=(a[c]+b[c])/2;return d}});return g.math});
//# sourceMappingURL=_base.js.map