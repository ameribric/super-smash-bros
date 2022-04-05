import './App.css';
import Fighter from './Components/Fighter';
// This above is from the Fighter.js file
import FighterScreen from './Component/FighterScreen';
import { useState } from 'react';

function App() {
  const [visible, setVisible] = useState(false)
  return (
    <div className="App">
      <h1> Fighters </h1>
      <div className="fighters-grid">
    <Fighter name={'Roy'} color={'red'}  setVisible = {setVisible} />
    <Fighter name={'Fox'} color={'green'} />
    <Fighter name={'Ganondorf'} color={'purple'} setVisible = {setVisible} />
    <Fighter name={'Sheik'} color={'lightskyblue'} setVisible = {setVisible} />
      </div>
      <div>
      </div>
      <FighterScreen isVisible={visible} />
    </div>
  );
}

export default App;
