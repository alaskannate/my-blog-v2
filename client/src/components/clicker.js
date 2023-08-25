import React, { useState } from "react";

export default function Clicker(){

    const [count, setCount ] = useState(0);

    function i() {
        setCount( count + 1) 
    }
    function d() {
        setCount( count - 1) 
    }

    return( 
        <div>
            <h1>{count}</h1>
            <button onClick={i}>+</button>
            <button onClick={d}>-</button>
        </div>
    )
}