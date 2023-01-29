import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.jpg';
import Botton from './components/Botton/Botton'
import CounterFunction from './components/Counter/Counter';
import { useState } from 'react';


function App() {

  const [numberClick, setNumberClick] = useState(0);


  const manageClick = () => {
    setNumberClick(numberClick + 1);
  }

  /* const manageDismiss = () => {
    setNumberClick(numberClick - 1);
  } */

  const resetCounter = () => {
    setNumberClick(0);
  }

  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt="freecodecamp logo"
        />
      </div>

      <div className='principal-container'>
        <CounterFunction
          numberClick={numberClick}
        />
        <Botton
          text="Click"
          isClickBotton={true}
          manageClick={ manageClick }
        />
        {/* <Botton
          text="Dismiss"
          isClickBotton={true}
          manageClick={ manageDismiss }
        /> */}
        <Botton
          text="Restart"
          isClickBotton={false}
          manageClick={ resetCounter }
        />
      </div>
    </div>
  );
}

export default App;
