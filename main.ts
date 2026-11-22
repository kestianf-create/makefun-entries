import{mkdirSync as m,readdirSync as r,readFileSync as f,writeFileSync as w}from'node:fs';
var E=process.env,I=E.MAKEFUN_INPUT_DIR||'/input',O=E.MAKEFUN_OUTPUT_DIR||'/output',S=`"3c&(,-1!!!!!!!!+++++++'+++'+++!+++!!!!!!!!!!!!!BFFB"!!!!!!!!!!!'*!!!!!!!!!!!!!!&&#&`,A=['a+b','a-b','Math.imul(a,b)','a/b','a%b','(a>>>0)/(b>>>0)','(a>>>0)%(b>>>0)','a&b','a|b','a^b','a<<(b&31)','a>>(b&31)','a>>>(b&31)','a==b','a<b','(a>>>0)<(b>>>0)'].map(s=>Function('a','b','return '+s));
function R(p,i){var L=p.length,st=[],me=[],ca=[],o=[],sp=0,cp=0,ip=0,pc=0,n=0;
for(;;pc=x){if(++n>1e6)return[o,10];if(pc>>>0>=L)return[o,9];var c=p[pc],q=S.charCodeAt(c)-34;if(!(q+1))return[o,5];var im=q>>4,po=q>>2&3,pu=q&3;if(pc+im>=L)return[o,9];if(sp<po)return[o,2];if(sp-po+pu>256)return[o,3];var x=pc+1+im;
if(c>15&&c<35&&c-23&&c-27){var b=st[--sp],a=st[--sp],k=c-16-(c>22)-(c>26)-(c>30);if(c>18&c<23&&!(c<21?b:b>>>0))return[o,4];st[sp++]=A[k](a,b)|0;}else switch(c){
case 0:return[o,0];
case 1:st[sp++]=(p[pc+1]<<24)>>24;break;
case 2:st[sp++]=p[pc+1]|p[pc+2]<<8|p[pc+3]<<16|p[pc+4]<<24;break;
case 3:sp--;break;
case 4:st[sp]=st[sp-1];sp++;break;
case 5:{var b=st[--sp];st[sp]=st[sp-1];st[sp-1]=b;sp++;break;}
case 6:st[sp]=st[sp-2];sp++;break;
case 7:{var a=st[sp-3];st[sp-3]=st[sp-2];st[sp-2]=st[sp-1];st[sp-1]=a;break;}
case 23:case 27:st[sp-1]=c==23?-st[sp-1]|0:~st[sp-1];break;
case 48:{var d=(p[pc+1]|p[pc+2]<<8)<<16>>16;x=pc+3+d;break;}
case 49:case 50:{var v=st[--sp],d=(p[pc+1]|p[pc+2]<<8)<<16>>16;if((c==49)==!v)x=pc+3+d;break;}
case 51:if(cp>63)return[o,7];ca[cp++]=pc+3;x=p[pc+1]|p[pc+2]<<8;break;
case 52:if(!cp)return[o,8];x=ca[--cp];break;
case 64:{var a=st[--sp];if(a>>>8)return[o,6];st[sp++]=me[a]|0;break;}
case 65:{var a=st[--sp],v=st[--sp];if(a>>>8)return[o,6];me[a]=v;break;}
case 80:{var v=st[--sp],s=''+v;if(o.length+s.length>65536)return[o,11];for(var k of s)o.push(k.charCodeAt());break;}
case 81:if(o.length>65535)return[o,11];o.push(st[--sp]&255);break;
case 82:st[sp++]=ip<i.length?i[ip++]:-1;break;
case 83:return[o,st[--sp]&255];}
}}
for(var e of r(I,{withFileTypes:true})){if(!e.isDirectory())continue;var d=I+'/'+e.name,z=R(f(d+'/program.bin'),f(d+'/input.bin'));m(O+'/'+e.name,{recursive:true});w(O+'/'+e.name+'/stdout.bin',Buffer.from(z[0]));w(O+'/'+e.name+'/exit.txt',z[1]+'\n');}
