let e=document.querySelector("#hr"),t=document.querySelector("#mn"),r=document.querySelector("#sc");setInterval(()=>{let o=new Date,n=30*o.getHours(),s=6*o.getMinutes(),l=6*o.getSeconds();e.style.transform=`rotateZ(${n+s/12}deg)`,t.style.transform=`rotateZ(${s}deg)`,r.style.transform=`rotateZ(${l}deg)`});
//# sourceMappingURL=index.b711939b.js.map
