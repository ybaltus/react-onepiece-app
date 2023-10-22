import React, {FunctionComponent, useState} from "react";
import {useNavigate} from "react-router-dom";
import {Box, Button, Center, Heading, Text} from "@chakra-ui/react";
import CharacterForm from "../components/character-form/character-form";
import Character from "../models/character";

const CharacterAdd: FunctionComponent = () => {
    const navigate = useNavigate();
    const [id] = useState(new Date().getTime());
    const [character] = useState(new Character(id));
    const navChar = () => {
        navigate(`/characters`)
    }

    return (
        <Center>
            <Box>
                <Heading>Ajouter un personnage</Heading>
                    <CharacterForm character={character} isEditForm={false}/>
                <Button
                    my={10}
                    variant='solid'
                    colorScheme='gray'
                    onClick={navChar}
                >
                    Retour
                </Button>
            </Box>
        </Center>
    )
}

export default CharacterAdd;