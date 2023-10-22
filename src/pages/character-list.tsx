import React, {FunctionComponent, useContext, useEffect} from "react";
import CharacterCard from "../components/character-card/character-card";
import {Heading, SimpleGrid, Center, Box, Button, Divider} from "@chakra-ui/react";
import ApiContext from "../contexts/api-context";
import {AddIcon} from "@chakra-ui/icons";
import {Link} from "react-router-dom";
import CharacterSearch from "../components/character-search/character-search";

const CharacterList: FunctionComponent = () => {
    const {characters, getAll} = useContext(ApiContext);

    // Initialize Characters
    useEffect(() => {
        getAll();
    }, []);

    return (
        <>
            <Center>
                <Heading
                    as='h1'
                    size='lg'
                    m={'40px'}
                >Liste des personnages de One Piece.</Heading>
            </Center>
            <Box>
                <CharacterSearch/>
            </Box>
            <Divider m={5}/>
            <Box>
                <Link
                    to={`/characters/add`}
                >
                    <Button leftIcon={<AddIcon />} colorScheme='teal' variant='solid'>
                        Ajouter un personnage
                    </Button>
                </Link>
            </Box>

            <SimpleGrid
                mt={'10px'}
                mb={'30px'}
                spacing={4}
                minChildWidth='350px'
            >
                {characters.map(character => (
                    <CharacterCard key={character.id+'_op'}  character={character}/>
                ))
                }
            </SimpleGrid>
        </>
    );
}

export default CharacterList;