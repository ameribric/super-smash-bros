import './App.css';
import Fighter from './Components/Fighter';
// This above is from the Fighter.js file
function App() {
  return (
    <div className="App">
      <h1> Fighters </h1>
      <div className="fighters-grid">
    <Fighter name={'Roy'} color={'red'} />
    <Fighter name={'Fox'} color={'green'} />
    <Fighter name={'Ganondorf'} color={'purple'} />
    <Fighter name={'Sheik'} color={'lightskyblue'} />
      </div>
      <div>
        <div className="fighter-screen">
        <h2>Roy</h2>
        <img src="https://www.smashbros.com/assets_v2/img/fighter/roy/main.png"/>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam temporibus rerum iusto doloremque vitae iste natus quod! Est, dolorem quos architecto nisi vero odit consequatur suscipit, voluptatem numquam, incidunt molestias.
        </p>
        </div>
      </div>
    </div>
  );
}

export default App;
