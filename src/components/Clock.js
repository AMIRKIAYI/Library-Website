import { useState } from "react";


  
function Clock() {
    const [time, setTime] = useState(new Date().toLocaleTimeString())

    function newClock(){
        setTime(new Date().toLocaleTimeString())
    }
    setInterval(newClock, 1000);
    return(
  
    <div>
      
      <h2 style={{color: "white", fontSize: "18px", paddingTop: "9px"}}>{time}.</h2>
    </div>
    )

   


}



export default Clock