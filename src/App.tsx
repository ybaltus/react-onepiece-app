import React, {FunctionComponent, useState, useEffect} from 'react';
import CharacterList from './pages/character-list';
import { Container } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import CharacterDetail from './pages/character-detail';
import Navbar from './components/navbar/navbar';
import PageNoteFound from './pages/page-not-found';
import CharacterEdit from "./pages/character-edit";
import CharacterAdd from "./pages/character-add";
import Login from "./pages/login";
import ProtectedRoute from "./helpers/protected-route";

const App: FunctionComponent = () => {
    return (
        <Container maxW={'7xl'} marginTop={'10px'}>
            <Navbar/>
            <Routes>
                <Route path='/' element={<ProtectedRoute><CharacterList/></ProtectedRoute>} />
                <Route path='/login' element={<Login />} />
                <Route path='/characters' element={<ProtectedRoute><CharacterList/></ProtectedRoute>} />
                <Route path='/characters/add' element={<ProtectedRoute><CharacterAdd/></ProtectedRoute>} />
                <Route path='/characters/:id' element={<ProtectedRoute><CharacterDetail/></ProtectedRoute>} />
                <Route path='/characters/edit/:id' element={<ProtectedRoute><CharacterEdit/></ProtectedRoute>} />
                <Route path="*" element={<PageNoteFound />} />
            </Routes>
        </Container>
    );
}

export default App;
