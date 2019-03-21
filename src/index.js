import React, { useState } from "react";

function counterState(initial) {
    const [count, setCount] = useState(initial);

    function increment() {
        setCount(prevCount => prevCount + 1);
    }

    return [count, increment];
}

function Counter() {
    const [count, handleIncrementClick] = counterState(0);

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrementClick}>Increment</button>
        </>
    )
}

export default Counter;