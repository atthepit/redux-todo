import React from 'react'

const Counter = ({ count, increment, decrement }) =>
  <div>
    <p>{count}</p>
    <button onClick={ decrement }>{'-'}</button>
    <button onClick={ increment }>{'+'}</button>
  </div>

Counter.prototype.propTypes = {
  count: React.PropTypes.number,
  increment: React.PropTypes.func,
  decrement: React.PropTypes.func,
}

export default Counter
