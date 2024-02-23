import React, { useEffect, useState } from 'react'

const Useeffecttask = () => {
    const [count,setCount] = useState(0)
    // useEffect(()=>{
    //     document.title = 'Counter ' + count;
    // },[]) //it will run only when dom Loading and when we change anything on dom.

    // useEffect(()=>{
    //     document.title = 'Counter ' + count;
    // },[]) //it will run only when dom mounted.

    useEffect(()=>{
        document.title = 'Counter ' + count;
    },[count]) //it will run only when the value is passed in the array will change.

    const increaseCount = () => {
        setCount(count+1);
    }
    const resetCount = () => {
        setCount(0);
    }
    const decreaseCount = () => {
        setCount(count-1);
    }
  return (
    <>
        <div className="border">
            <h2>Use Effect Section</h2>
            <p>To Change the Title of the Document Change Count</p>
            <p>Counter : {count}</p>
            <button onClick={decreaseCount} type="button">Decrease Count</button>
            <button onClick={resetCount} type="button">Reset Count</button>
            <button onClick={increaseCount} type="button">Increase Count</button>
        </div> 
    </>
  )
}

export default Useeffecttask
