import React from "react";
import './Botton.css'

function Button({ text, isClickBotton, manageClick }) { /* desestruccturación */ /* operador ternario */
  return (
    <button className= { isClickBotton ? "click-botton" : "restart-botton"} /* si el boton es de click o reiniciar */
      onClick={ manageClick }>
      {text}
    </button>
    /* la fx manageClick viene del componente que renderiza al boton */
  )
}

export default Button;