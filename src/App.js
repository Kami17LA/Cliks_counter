import './App.css';
import freeCodeCampLogo from './images/freecodecamp-logo.jpg'

function App() {
  return (
    <div className="App">
      <div className='freecodecamp-logo-container'>
        <img 
          className='freecodecamp-logo'
          src={freeCodeCampLogo}
          alt="freecodecamp logo"
        />
      </div>
    </div>
  );
}

export default App;
