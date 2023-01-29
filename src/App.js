import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.jpg';
import Botton from './components/Botton/Botton'
import CounterFunction from './components/Counter/Counter';


function App() {

  const manageClick = () => {
    console.log("Click");
  }

  const resetCounter = () => {
    console.log("Restart")
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
          numberCliks='5'
        />
        <Botton
          text="Click"
          isClickBotton={true}
          manageClick={ manageClick }
        />
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
