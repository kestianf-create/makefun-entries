import{mkdirSync as K,readFileSync as R,readdirSync as L,writeFileSync as W}from'node:fs'
const T=" 5q$&*+/\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000)))))))%)))%)))\u0000)))\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000HLLH \u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000%(\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000$$!$"
const Z=T.length,IM=new Uint8Array(Z),PO=new Uint8Array(Z),PU=new Uint8Array(Z),OK=new Uint8Array(Z)
for(let i=0;i<Z;i++){const c=T.charCodeAt(i);if(c){OK[i]=1;const v=c-32;IM[i]=(v/20)|0;PO[i]=((v%20)/4)|0;PU[i]=v%4}}
function run(p,q){
const n=p.length,D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),o=Buffer.alloc(65536)
let s=0,c=0,l=0,j=0,k=0,t=0
const e=x=>({o:o.subarray(0,l),x})
for(;;){
if(t===1e6)return e(10)
if(k<0||k>=n)return e(9)
const g=p[k]
if(g>=Z||!OK[g])return e(5)
const i=IM[g],P=PO[g]
if(k+i>=n)return e(9)
t++
const f=k+1+i
if(s<P)return e(2)
if(s-P+PU[g]>256)return e(3)
k=f
if(g>=16&&g<=34&&g!==23&&g!==27&&g!==31){
const b=D[s-1],a=D[s-2];let r=0
switch(g){
case 16:r=a+b|0;break
case 17:r=a-b|0;break
case 18:r=Math.imul(a,b);break
case 19:if(!b)return e(4);r=a===-2147483648&&b===-1?a:a/b|0;break
case 20:if(!b)return e(4);r=b===-1?0:a%b|0;break
case 21:if(!b)return e(4);r=(a>>>0)/(b>>>0)|0;break
case 22:if(!b)return e(4);r=(a>>>0)%(b>>>0)|0;break
case 24:r=a&b;break
case 25:r=a|b;break
case 26:r=a^b;break
case 28:r=a<<(b&31);break
case 29:r=a>>(b&31);break
case 30:r=a>>>(b&31)|0;break
case 32:r=a===b?1:0;break
case 33:r=a<b?1:0;break
default:r=(a>>>0)<(b>>>0)?1:0}
s-=2;D[s++]=r;continue}
switch(g){
case 0:return e(0)
case 1:D[s++]=p[f-1]<<24>>24;break
case 2:D[s++]=p[f-4]|p[f-3]<<8|p[f-2]<<16|p[f-1]<<24;break
case 3:s--;break
case 4:D[s]=D[s-1];s++;break
case 5:{const v=D[s-1];D[s-1]=D[s-2];D[s-2]=v;break}
case 6:D[s]=D[s-2];s++;break
case 7:{const v=D[s-3];D[s-3]=D[s-2];D[s-2]=D[s-1];D[s-1]=v;break}
case 23:D[s-1]=-D[s-1]|0;break
case 27:D[s-1]=~D[s-1];break
case 48:case 49:case 50:{const r=(p[f-2]|p[f-1]<<8)<<16>>16;let y=1
if(g!==48){const v=D[--s];y=g===49?v===0:v!==0}
if(y)k=f+r;break}
case 51:if(c===64)return e(7);C[c++]=f;k=p[f-2]|p[f-1]<<8;break
case 52:if(!c)return e(8);k=C[--c];break
case 64:{const a=D[s-1];if(a<0||a>255)return e(6);D[s-1]=M[a];break}
case 65:{const a=D[s-1],v=D[s-2];if(a<0||a>255)return e(6);s-=2;M[a]=v;break}
case 80:{const u=Buffer.from(''+D[s-1]);if(l+u.length>65536)return e(11);s--;o.set(u,l);l+=u.length;break}
case 81:if(l+1>65536)return e(11);o[l++]=D[--s]&255;break
case 82:D[s++]=j<q.length?q[j++]:-1;break
default:return e(D[--s]&255)}}}
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output'
for(const d of L(I).sort()){
let q;try{q=R(`${I}/${d}/input.bin`)}catch{q=Buffer.alloc(0)}
const r=run(R(`${I}/${d}/program.bin`),q)
K(`${O}/${d}`,{recursive:!0})
W(`${O}/${d}/stdout.bin`,r.o)
W(`${O}/${d}/exit.txt`,''+r.x)}
