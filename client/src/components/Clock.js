import React, {useState, useEffect} from "react";

export default function Clock(){

    setInterval(updateTime, 1000)

    const now = new Date().toLocaleTimeString()
    
    const [time, setTime] = useState(now)

    
    function updateTime(){
        const newTime = new Date().toLocaleTimeString()
        setTime(newTime)
    }


    return (
        <div className="container">
            <h1>{time}</h1>
        </div>
    )
}