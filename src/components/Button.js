import React from "react";

function Button({ text, isClickBotton }) { /* desestruccturación */ /* operador ternario */
  return (
    <button className= { isClickBotton ? "click-botton" : "restart-botton"}> {/* si el boton es de click o reiniciar */}
      {text}
    </button>
  )
}

export default Button;