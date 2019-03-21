import React, { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    function handleIncrementClick() {
        setCount(prevCount => prevCount + 1);
    }

    return (
        <>
            <h1>Count: {count}</h1>
            <button onClick={handleIncrementClick}>Increment</button>
        </>
    )
}

export default Counter;