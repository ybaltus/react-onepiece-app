import React, {FunctionComponent, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './models/character';
import CHARACTERS from './models/mock-character';

const App: FunctionComponent = () => {
  const [listCharacters, setListCharacters] = useState<Character[]>([]);

  // Initialize listCharacters
  useEffect(() => {
    setListCharacters(CHARACTERS);
  }, [])

  return (
    <div>
      <h1>One Piece App</h1>
      <p>Bonjour, Il y a {listCharacters?.length} personnages !</p>
      <ul>
        {listCharacters.map(({id, name}) => {
          return <li key={id+'-'+name}>{name}</li>
        })}
      </ul>
    </div>
  );
}

export default App;
