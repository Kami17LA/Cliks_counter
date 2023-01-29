import React from "react";
import './Counter.css'

function CounterFunction ({ numberClick }) {
  return (
    <div className="counter">
      {numberClick}
    </div>
  )
}

export default CounterFunction;