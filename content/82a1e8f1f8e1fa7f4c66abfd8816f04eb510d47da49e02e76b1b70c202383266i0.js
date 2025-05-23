/* esm.sh - esbuild bundle(ieee754@1.2.1) es2022 production */
/** 
 * @title ieee754
 * @author Feross Aboukhadijeh
 * @license BSD-3-Clause License
 * @source https://github.com/feross/ieee754
 * @copyright 2008
/*
/*

Copyright 2008 Fair Oaks Labs, Inc.

Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

1. Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors may be used to endorse or promote products derived from this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
**/
var y=Object.create;var v=Object.defineProperty;var z=Object.getOwnPropertyDescriptor;var A=Object.getOwnPropertyNames;var C=Object.getPrototypeOf,D=Object.prototype.hasOwnProperty;var F=(a,r)=>()=>(r||a((r={exports:{}}).exports,r),r.exports),G=(a,r)=>{for(var i in r)v(a,i,{get:r[i],enumerable:!0})},e=(a,r,i,f)=>{if(r&&typeof r=="object"||typeof r=="function")for(let o of A(r))!D.call(a,o)&&o!==i&&v(a,o,{get:()=>r[o],enumerable:!(f=z(r,o))||f.enumerable});return a},_=(a,r,i)=>(e(a,r,"default"),i&&e(i,r,"default")),B=(a,r,i)=>(i=a!=null?y(C(a)):{},e(r||!a||!a.__esModule?v(i,"default",{value:a,enumerable:!0}):i,a));var g=F(I=>{I.read=function(a,r,i,f,o){var h,t,w=o*8-f-1,s=(1<<w)-1,N=s>>1,M=-7,p=i?o-1:0,c=i?-1:1,d=a[r+p];for(p+=c,h=d&(1<<-M)-1,d>>=-M,M+=w;M>0;h=h*256+a[r+p],p+=c,M-=8);for(t=h&(1<<-M)-1,h>>=-M,M+=f;M>0;t=t*256+a[r+p],p+=c,M-=8);if(h===0)h=1-N;else{if(h===s)return t?NaN:(d?-1:1)*(1/0);t=t+Math.pow(2,f),h=h-N}return(d?-1:1)*t*Math.pow(2,h-f)};I.write=function(a,r,i,f,o,h){var t,w,s,N=h*8-o-1,M=(1<<N)-1,p=M>>1,c=o===23?Math.pow(2,-24)-Math.pow(2,-77):0,d=f?0:h-1,n=f?1:-1,q=r<0||r===0&&1/r<0?1:0;for(r=Math.abs(r),isNaN(r)||r===1/0?(w=isNaN(r)?1:0,t=M):(t=Math.floor(Math.log(r)/Math.LN2),r*(s=Math.pow(2,-t))<1&&(t--,s*=2),t+p>=1?r+=c/s:r+=c*Math.pow(2,1-p),r*s>=2&&(t++,s/=2),t+p>=M?(w=0,t=M):t+p>=1?(w=(r*s-1)*Math.pow(2,o),t=t+p):(w=r*Math.pow(2,p-1)*Math.pow(2,o),t=0));o>=8;a[i+d]=w&255,d+=n,w/=256,o-=8);for(t=t<<o|w,N+=o;N>0;a[i+d]=t&255,d+=n,t/=256,N-=8);a[i+d-n]|=q*128}});var x={};G(x,{default:()=>O,read:()=>H,write:()=>J});var k=B(g());_(x,B(g()));var{read:H,write:J}=k,{default:j,...K}=k,O=j!==void 0?j:K;export{O as default,H as read,J as write};
/*! Bundled license information:

ieee754/index.js:
  (*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> *)
*/
//# sourceMappingURL=ieee754.mjs.map
