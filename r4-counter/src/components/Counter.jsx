import { useState } from "react";

function Counter() {
    const [counter, setCounter] = useState(0);

    function clickedPlus1() {
        setCounter(counter + 1);
    }

    function clickedPlus10() {
        setCounter(counter + 10);
    }

    function clickedMinus10() {
        setCounter(counter - 10);
    }

    function clickedMinus1() {
        setCounter(counter - 1);
    }


    return (
        <>
            <p>Counter: {counter}</p>
            <button onClick={clickedMinus10}>- 10</button>
            <button onClick={clickedMinus1}>- 1</button>
            <button onClick={clickedPlus1}>+ 1</button>
            <button onClick={clickedPlus10}>+10</button>
        </>
    )
};

export default Counter;