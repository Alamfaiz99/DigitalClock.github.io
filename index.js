// Now lets start with the javascript code
setInterval(()=>{
   const now=new Date();
   const hours=now.getHours();
   const sec=now.getSeconds();
   const min=now.getMinutes();
//    console.log("hours:"+hours+"sec:"+sec+"min:"+min);
   const secDegree=((sec/60)*360)+90;
   const minDegree=((min/60)*360)+90;
   const hoursDegree=((hours/12)*360)+90;
   const secHand=document.querySelector(".secondHand");
//    console.log(secHand);
   secHand.style.transform=`rotate(${secDegree}deg)`;
   const minHand=document.querySelector(".minHand");
   minHand.style.transform=`rotate(${minDegree}deg)`;
   const hourHand=document.querySelector(".hourHand");
   hourHand.style.transform=`rotate(${hoursDegree}deg)`;
},1000)