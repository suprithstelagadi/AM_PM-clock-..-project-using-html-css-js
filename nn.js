let con =  document.getElementsByClassName("con")[0]


setInterval(()=>{
    let d = new Date;
    let h = d.getHours();
    let m = d.getMinutes();
    let s = d.getSeconds();
    

    if(h>12){
        let h1 = h-12;
      con.innerHTML=`
       <div class="clock">
            <li>${h1} PM</li>
            <li>:</li>
            <li>${m} Mins</li>
            <li>:</li>
            <li>${s} Secs</li>
        </div> 
      `

    }
    else if(h == 12){
        con.innerHTML=`
         <div class="clock">
            <li>${h} PM</li>
            <li>:</li>
            <li>${m} Mins</li>
            <li>:</li>
            <li>${s} Secs</li>
        </div>
        `
    }
    else{
        con.innerHTML=`
        <div class="clock">
            <li>${h} AM</li>
            <li>:</li>
            <li>${m} Mins</li>
            <li>:</li>
            <li>${s} Secs</li>
        </div>
        `
    }
})