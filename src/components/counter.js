import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";

function Counter(){
    const dispatch=useDispatch();
    let total=useSelector(state=>state.initNumber);
    function handleClikc(){
      dispatch({type: 'increment'})
    }
    function decrement(){

    }
    return <div>
        <h1>Counter app</h1>
        <button onClick={handleClikc}>+</button>
        <p>the counter value is :{total}</p>
        <button onClick={decrement}>-</button>
    </div>
}
export {Counter};