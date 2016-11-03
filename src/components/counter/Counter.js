import React from 'react'

const Counter = ({ count, increment, decrement }) =>
    <div>
        <p>{count}</p>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
    </div>

export default Counter
