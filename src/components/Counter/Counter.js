import React from "react";
import './Counter.css'

function CounterFunction ({ numberCliks }) {
  return (
    <div className="counter">
      {numberCliks}
    </div>
  )
}

export default CounterFunction;