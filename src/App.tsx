import React, {FunctionComponent, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './models/character';
import CHARACTERS from './models/mock-character';

const App: FunctionComponent = () => {
  const [listCharacters] = useState<Character[]>(CHARACTERS);

  return (
    <div>
      <h1>One Piece App</h1>
          <p>Bonjour, Il y a {listCharacters.length} personnages !</p>

      </div>
  );
}

export default App;
