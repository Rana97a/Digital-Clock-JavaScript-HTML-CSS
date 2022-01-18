function isWorking(){

    const now= new Date();
    const hours= now.getHours();
    const minutes= now.getMinutes();
    const seconds= now.getSeconds();
    const amPm= document.querySelector('.amPM');
    
    
    if(hours<12){
        amPm.innerHTML="AM";
    }
    else{
        amPm.innerHTML="PM";
    }
    document.querySelector('.hours').innerHTML= hours;
    document.querySelector('.minutes').innerHTML= minutes;
    document.querySelector('.seconds').innerHTML= seconds;
    }
    
    setInterval(isWorking,500);