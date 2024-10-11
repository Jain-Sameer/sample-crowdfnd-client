var m=Object.defineProperty;var b=(i,t,a)=>t in i?m(i,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):i[t]=a;var c=(i,t,a)=>b(i,typeof t!="symbol"?t+"":t,a);import{az as f,C as y,A as R,a as v,aA as A,b as C,c as P,h as k,G as T,g as O,k as S,B as u,s,J as I,as as B,F as E,o as p,T as o}from"./index-DQ6K6H38.js";const d=class d{constructor(t,a,e){c(this,"withdraw",p(async t=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address)",args:[await s(t)]})));c(this,"withdrawToken",p(async(t,a)=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"release(address,address)",args:[await s(a),await s(t)]})));c(this,"distribute",p(async()=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute()",args:[]})));c(this,"distributeToken",p(async t=>o.fromContractWrapper({contractWrapper:this.contractWrapper,method:"distribute(address)",args:[await s(t)]})));let r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:{},n=arguments.length>4?arguments[4]:void 0,l=arguments.length>5?arguments[5]:void 0,h=arguments.length>6&&arguments[6]!==void 0?arguments[6]:new y(t,a,n,r,e);this._chainId=l,this.abi=R.parse(n||[]),this.contractWrapper=h,this.storage=e,this.metadata=new v(this.contractWrapper,A,this.storage),this.app=new C(this.contractWrapper,this.metadata,this.storage),this.roles=new P(this.contractWrapper,d.contractRoles),this.encoder=new k(this.contractWrapper),this.estimator=new T(this.contractWrapper),this.events=new O(this.contractWrapper),this.interceptor=new S(this.contractWrapper)}get chainId(){return this._chainId}onNetworkUpdated(t){this.contractWrapper.updateSignerOrProvider(t)}getAddress(){return this.contractWrapper.address}async getAllRecipients(){const t=[];let a=u.from(0);const e=await this.contractWrapper.read("payeeCount",[]);for(;a.lt(e);)try{const r=await this.contractWrapper.read("payee",[a]);t.push(await this.getRecipientSplitPercentage(r)),a=a.add(1)}catch(r){if("method"in r&&r.method.toLowerCase().includes("payee(uint256)"))break;throw r}return t}async balanceOfAllRecipients(){const t=await this.getAllRecipients(),a={};for(const e of t)a[e.address]=await this.balanceOf(e.address);return a}async balanceOfTokenAllRecipients(t){const a=await s(t),e=await this.getAllRecipients(),r={};for(const n of e)r[n.address]=await this.balanceOfToken(n.address,a);return r}async balanceOf(t){const a=await s(t),e=await this.contractWrapper.getProvider().getBalance(this.getAddress()),r=await this.contractWrapper.read("totalReleased",[]),n=e.add(r);return this._pendingPayment(a,n,await this.contractWrapper.read("released",[a]))}async balanceOfToken(t,a){const e=await s(a),r=await s(t),l=await new I(e,B,this.contractWrapper.getProvider()).balanceOf(this.getAddress()),h=await this.contractWrapper.read("totalReleased",[e]),g=l.add(h),W=await this._pendingPayment(r,g,await this.contractWrapper.read("released",[e,r]));return await E(this.contractWrapper.getProvider(),e,W)}async getRecipientSplitPercentage(t){const a=await s(t),[e,r]=await Promise.all([this.contractWrapper.read("totalShares",[]),this.contractWrapper.read("shares",[t])]);return{address:a,splitPercentage:r.mul(u.from(1e7)).div(e).toNumber()/1e5}}async _pendingPayment(t,a,e){return a.mul(await this.contractWrapper.read("shares",[await s(t)])).div(await this.contractWrapper.read("totalShares",[])).sub(e)}async prepare(t,a,e){return o.fromContractWrapper({contractWrapper:this.contractWrapper,method:t,args:a,overrides:e})}async call(t,a,e){return this.contractWrapper.call(t,a,e)}};c(d,"contractRoles",f);let w=d;export{w as Split};
