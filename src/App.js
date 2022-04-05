import './App.css';
import Fighter from './Components/Fighter';
// This above is from the Fighter.js file
function App() {
  return (
    <div className="App">
      <h1> Fighters </h1>
      <div className="fighters-grid">
    <Fighter name={'Roy'} color={'red'}/>
    <Fighter name={'Fox'} color={'green'}/>
    <Fighter name={'Ganondorf'} color={'purple'}/>
      </div>
    </div>
  );
}

export default App;
