let e=document.querySelector("#hr"),t=document.querySelector("#mn"),n=document.querySelector("#sc");setInterval(()=>{let r=new Date,o=30*r.getHours(),m=6*r.getMinutes(),s=6*r.getSeconds();e.style.transform=`rotateZ(${o+m/12}deg)`,t.style.transform=`rotateZ(${m}deg)`,n.style.transform=`rotateZ(${s}deg)`;let d=document.getElementById("hours"),u=document.getElementById("minutes"),l=document.getElementById("seconds");document.getElementById("ampm");let c=new Date().getHours(),g=new Date().getMinutes(),a=new Date().getSeconds();c=c<10?"0"+c:c,g=g<10?"0"+g:g,a=a<10?"0"+a:a,d.innerHTML=c,u.innerHTML=g,l.innerHTML=a});
//# sourceMappingURL=index.553abde6.js.map
