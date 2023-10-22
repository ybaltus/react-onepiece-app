import React, {FunctionComponent, useContext, useState} from "react";
import {Box, Divider, Heading, Input, List, ListIcon, ListItem, Stack, UnorderedList, VStack} from "@chakra-ui/react";
import Character from "../../models/character";
import ApiContext from "../../contexts/api-context";
import {Link} from "react-router-dom";

const CharacterSearch: FunctionComponent = () => {
    const [term, setTerm] = useState<string>('');
    const [characterFiltered, setCharacterFiltered] = useState<Character[]>([]);
    const {searchCharacter} = useContext(ApiContext);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        const term: string = e.target.value;
        setTerm(term);

        if(term.length <= 1) {
            setCharacterFiltered([])
            return;
        }

        searchCharacter(term).then((results: Character[]) => {
            console.table(results)
            setCharacterFiltered(results);
        })
    }

    return(
        <VStack>
            <Box>
                <Heading as='h2'
                         size='md'
                         m={'10px'}>
                    Rechercher un personnage
                </Heading>
                <Input
                    placeholder='Entrez votre recehrche'
                    size='xs'
                    onChange={(e) => handleInputChange(e)}
                    value={term}
                />
            </Box>
            <Box>
                <UnorderedList>
                    {characterFiltered.map((character: Character) => (
                        <Link key={`${character.id}_link`} to={`/characters/${character.id}`}>
                            <ListItem>
                                {character.name}
                            </ListItem>
                        </Link>
                    ))}
                </UnorderedList>
            </Box>
        </VStack>
    )
}

export default CharacterSearch;