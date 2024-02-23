import React, { useEffect, useState } from 'react'

const DigitalClock = () => {
    const [time ,setTime] = useState(new Date());
    useEffect(()=>{
        const intervalId = setInterval(()=>{
            setTime(new Date());
        },100);

        return ()=>{
            clearInterval(intervalId);
        }
    },[])

    const timeShow = () => {
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let seconds = time.getSeconds();
        let meridian = hours >= 12 ? 'PM' :'AM';
        hours = hours%12 || 12;
        return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${padZero(meridian)}`; 
    }
    
    function padZero (number){
        return (number < 10 ? '0':'')+number;
    }

  return (
    <>
       <div className="border">
            <h2>Digital Clock Section</h2>
            <p><b>{timeShow()}</b></p>
        </div>
    </>
  )
}

export default DigitalClock
