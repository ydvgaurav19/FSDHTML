import React, {useState} from 'react'

function Statehandling() {
    const[count,setcount]=useState(20);
    function doIncrement(){
        setcount(count+20)
    }
  return (
    <div>Statehandling
        <h2>Counter value:{count}</h2>
        <div><button onClick={doIncrement}>Increment</button></div>
    </div>
  )
}

export default Statehandling