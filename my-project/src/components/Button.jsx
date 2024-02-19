import React, { useState } from 'react'

const Button = () => {
  const [count,setCount] = useState(0)
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
        <h2>Counter Section</h2>
        <p>Counter : {count}</p>
        <button onClick={decreaseCount} type="button">Decrease Count</button>
        <button onClick={resetCount} type="button">Reset Count</button>
        <button onClick={increaseCount} type="button">Increase Count</button>
      </div>
    </>
  )
}

export default Button
