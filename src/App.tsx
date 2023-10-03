import React, {FunctionComponent, useState, useEffect} from 'react';
import CharacterList from './pages/character-list';
import { Container } from '@chakra-ui/react';

const App: FunctionComponent = () => {
  return (
    <Container maxW={'7xl'} marginTop={'10px'}>
      <CharacterList/>
    </Container>
  );
}

export default App;
