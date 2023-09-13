import React from "react";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux";
import { increment } from "../store/counterSlice";
function Counter() {
    const dispatch = useDispatch();
    let total = useSelector(state => state.counter.initNumber)
    function handleClikc() {
        dispatch(increment())
    }
    function decrement() {
        console.log('decrement function called..........................')
    }
    return <div>
        <h1>Counter app</h1>
        <button onClick={handleClikc}>+</button>
        <p>the counter value is :{total}</p>
        <button onClick={decrement}>-</button>
    </div>
}
export { Counter };