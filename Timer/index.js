    
const days=document.querySelector(".days")
const hours=document.querySelector(".hours")
const minutes=document.querySelector(".minutes")
const secon=document.querySelector(".secon")
const heading=document.querySelector("h1");
const countertimer=document.querySelector(".countertimer")
   


//converting seconds,minute,hours in milliseconds
const second=1000;
 minute=60*second;
 hour=60*minute;
 day=24*hour;


 const timer=()=>{
//genrating current date in mm/dd/yyyy

   let now=new Date();
      dd=String(now.getDate()).padStart(2,"0"),
      mm=String(now.getMonth()+1).padStart(2,"0"),
      yyyy=now.getFullYear();
     
    const enterday=prompt("Enter Day").padStart(2,"0");
    const entermonth=prompt("Enter month").padStart(2,"0");
   

    now=`${mm}/${dd}/${yyyy}`;
    
    let targetdate=`${entermonth}/${enterday}/${yyyy}`
    
  //checking if target date is for next year
      
    if(now>targetdate){
      console.log(`${entermonth}/${enterday}/${yyyy+1}`);
      targetdate=(`${entermonth}/${enterday}/${yyyy+1}`);
    }




    const intervalid=setInterval(() => {
  
    //coverting targetDate in millisecond
    const t=new Date(targetdate).getTime()
    //taking current date in milliseconds
    const today=new Date().getTime()
    

    //finding difference between targetdate and todays date
    const dif=t-today

    //finding left days,hours,minutes,seconds
    const leftday=Math.floor(dif/day)
    const lefthour=Math.floor((dif%day)/hour)
    const leftmin=Math.floor((dif%hour)/minute)
    const leftsec=Math.floor((dif%minute)/second)
    

    //showing timer in DOM
    days.innerText=leftday;
    hours.innerText=lefthour;
    minutes.innerText=leftmin;
    secon.innerText=leftsec;

    
    //stop set Interval after reaching the target time
    if(dif<0){
      countertimer.style.display="none";
      heading.innerText="Time's up";
      clearInterval(intervalid)
    }
  
    
  },0);



 }
timer()
