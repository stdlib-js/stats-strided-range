"use strict";var f=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(i){throw (r=0, i)}};};var x=f(function(B,m){
var l=require('@stdlib/math-base-assert-is-nan/dist');function j(a,r,i,c){var t,u,v,s,e,n,o;if(t=r.data,u=r.accessors[0],a===1||i===0)return l(u(t,c))?NaN:0;for(e=c,s=u(t,e),v=s,o=1;o<a;o++){if(e+=i,n=u(t,e),l(n))return n;n<s?s=n:n>v&&(v=n)}return v-s}m.exports=j
});var q=f(function(C,g){
var y=require('@stdlib/math-base-assert-is-nan/dist'),k=require('@stdlib/array-base-arraylike2object/dist'),N=x();function O(a,r,i,c){var t,u,v,s,e,n;if(a<=0)return NaN;if(s=k(r),s.accessorProtocol)return N(a,s,i,c);if(a===1||i===0)return y(r[c])?NaN:0;for(v=c,u=r[v],t=u,n=1;n<a;n++){if(v+=i,e=r[v],y(e))return e;e<u?u=e:e>t&&(t=e)}return t-u}g.exports=O
});var b=f(function(D,p){
var P=require('@stdlib/strided-base-stride2offset/dist'),R=q();function h(a,r,i){return R(a,r,i,P(a,i))}p.exports=h
});var w=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),d=b(),z=q();w(d,"ndarray",z);module.exports=d;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
