import './App.css';
import Fighter from './Components/Fighter';
import FighterScreen from './Components/FighterScreen';
import { useState } from 'react';

const characters = [
  {name: 'Roy', color: 'red'},
  {name: 'Fox', color: 'green'},
  {name: 'Ganondorf', color: 'purple'},
  {name: 'Sheik', color: 'lightskyblue'},
  {name: 'Cloud', color: 'mediumseagreen'},
  {name: 'Falco', color: 'orange'},
  {name: 'Samus', color: 'firebrick'},
  {name: 'Link', color: 'yellow'},
]

function App() {
  const [visible, setVisible] = useState(false)
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0])
  return (
    <div className="App">
     <h1>Fighters</h1>
     <div className="fighters-grid">
        {characters.map((element) => {
          return(<Fighter name={element.name} color={element.color} setVisible={setVisible} setSelectedCharacter={setSelectedCharacter} />)
        })}
     </div>
      <FighterScreen isVisible={visible} setVisible={setVisible} selectedCharacter={selectedCharacter} />
    </div>
  );
}

// const Fighter = {name: 'Roy', color: 'red'}

export default App;