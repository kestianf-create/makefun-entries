import{mkdirSync as K,readFileSync as R,readdirSync as L,writeFileSync as W}from'fs'
const T=`!6r%'+,0        *******&***&*** ***             IMMI!           &)              %%\"%`
function run(p,q){
const n=p.length,D=new Int32Array(256),C=new Int32Array(64),M=new Int32Array(256),o=Buffer.alloc(65536)
let s=0,c=0,l=0,j=0,k=0,t=0
const e=x=>[o.subarray(0,l),x]
for(;;){
if(t==1e6)return e(10)
if(k<0||k>=n)return e(9)
const g=p[k],v=T.charCodeAt(g)-33
if(!(v>=0))return e(5)
const P=v%20>>2,f=k+1+(v/20|0)
if(f>n)return e(9)
t++
if(s<P)return e(2)
if(s-P+(v&3)>256)return e(3)
k=f
if(v==9){const b=D[s-1],a=D[s-2];let r
switch(g){
case 16:r=a+b;break
case 17:r=a-b;break
case 18:r=Math.imul(a,b);break
case 19:if(!b)return e(4);r=b==-1?-a:a/b;break
case 20:if(!b)return e(4);r=b==-1?0:a%b;break
case 21:if(!b)return e(4);r=(a>>>0)/(b>>>0);break
case 22:if(!b)return e(4);r=(a>>>0)%(b>>>0);break
case 24:r=a&b;break
case 25:r=a|b;break
case 26:r=a^b;break
case 28:r=a<<b;break
case 29:r=a>>b;break
case 30:r=a>>>b;break
case 32:r=+(a==b);break
case 33:r=+(a<b);break
default:r=+(a>>>0<b>>>0)}
D[s-2]=r;s--;continue}
switch(g){
case 0:return e(0)
case 1:D[s++]=p[f-1]<<24>>24;break
case 2:D[s++]=p[f-4]|p[f-3]<<8|p[f-2]<<16|p[f-1]<<24;break
case 3:s--;break
case 4:D[s]=D[s-1];s++;break
case 5:[D[s-1],D[s-2]]=[D[s-2],D[s-1]];break
case 6:D[s]=D[s-2];s++;break
case 7:[D[s-3],D[s-2],D[s-1]]=[D[s-2],D[s-1],D[s-3]];break
case 23:D[s-1]=-D[s-1];break
case 27:D[s-1]=~D[s-1];break
case 48:case 49:case 50:if(g==48||(g==49)==!D[--s])k=f+((p[f-2]|p[f-1]<<8)<<16>>16);break
case 51:if(c==64)return e(7);C[c++]=f;k=p[f-2]|p[f-1]<<8;break
case 52:if(!c)return e(8);k=C[--c];break
case 64:{const a=D[s-1];if(a<0||a>255)return e(6);D[s-1]=M[a];break}
case 65:{const a=D[s-1];if(a<0||a>255)return e(6);M[a]=D[s-2];s-=2;break}
case 80:{const u=Buffer.from(''+D[s-1]);if(l+u.length>65536)return e(11);s--;o.set(u,l);l+=u.length;break}
case 81:if(l>65535)return e(11);o[l++]=D[--s];break
case 82:D[s++]=j<q.length?q[j++]:-1;break
default:return e(D[--s]&255)}}}
const I=process.env.MAKEFUN_INPUT_DIR??'/input',O=process.env.MAKEFUN_OUTPUT_DIR??'/output'
for(const d of L(I)){
const q=R(`${I}/${d}/input.bin`)
const[a,x]=run(R(`${I}/${d}/program.bin`),q),z=`${O}/${d}/`
K(z,{recursive:!0})
W(z+'stdout.bin',a)
W(z+'exit.txt',''+x)}
