import React, {FunctionComponent, useState, useEffect} from 'react';
import CharacterList from './pages/character-list';
import { Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import CharacterDetail from './pages/character-detail';
import Navbar from './components/navbar/navbar';
import PageNoteFound from './pages/page-not-found';

const App: FunctionComponent = () => {
  return (
    <Container maxW={'7xl'} marginTop={'10px'}>
      <Navbar/>
      <Routes>
        <Route path='/' element={<CharacterList />} />
        <Route path='/characters' element={<CharacterList/>} />
        <Route path='/characters/:id' element={<CharacterDetail/>} />
        <Route path="*" element={<PageNoteFound />} />
      </Routes>
    </Container>
  );
}

export default App;
