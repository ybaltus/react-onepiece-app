import React, {FunctionComponent, useContext, useEffect, useState} from "react";
import Character from "../models/character";
// import CHARACTERS from "../models/mock-character";
import {Link, useNavigate, useParams} from "react-router-dom";
import {
    Card,
    Stack,
    CardBody,
    Heading,
    HStack,
    Tag,
    Text,
    CardFooter,
    Button,
    Image,
    Center, IconButton
} from "@chakra-ui/react";

import formatDate from "../helpers/format-date";
import formatSkill from "../helpers/format-skill";
import {DeleteIcon, EditIcon} from "@chakra-ui/icons";
import ApiContext from "../contexts/api-context";
import Loader from "../components/loader/loader";

const CharacterDetail: FunctionComponent = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState<Character|null>(null);
    const {getById, deleteCharacter} = useContext(ApiContext);
    
    useEffect(() => {
        getById(params.id).then((char: Character|null) => {
            setCharacter(char);
        })
    }, [params.id]);

    const navHome = () => {
        navigate('/');
    }

    const deleteChar = () => {
        console.log("ok")
        deleteCharacter(character).then(() => {
            navigate('/');
        })
    }

    return (
        <div>
            { character ? (
                <Center>
                    <Card
                    className="card-char"
                    overflow='hidden'
                    variant='outline'
                    maxW='md'
                    >
                    <Image
                    maxW={{ base: '100%', sm: '200px' }}
                    src={character.picture}
                    alt={character.name}
                    borderRadius='lg'
                    />
                        {/* Control btn*/}
                        <Link
                            to={`/characters/edit/${character.id}`}
                        >
                            <IconButton
                                variant='outline'
                                colorScheme='teal'
                                aria-label='Send email'
                                icon={<EditIcon />}
                            />
                        </Link>
                        <IconButton
                            variant='outline'
                            colorScheme='teal'
                            aria-label='Send email'
                            icon={<DeleteIcon />}
                            onClick={deleteChar}
                        />
                    <Stack>
                        <CardBody>
                            <Heading size='md'> {character.name}</Heading>
        
                            <Text py='2'>
                            <strong>Prime : </strong>{character.bounty} Berrys
                            </Text>
                            <Text py='2'>
                            <strong>Age : </strong>{character.age} ans
                            </Text>
                            <Text py='2'>
                            <strong>Type : </strong>{character.type} ans
                            </Text>
                            <Text py='2'>
                            <strong>Créé le : </strong>{formatDate(character.createdAt)}
                            </Text>
                            <HStack spacing={4} py={'4'}>
                                <Text>
                                <strong>Compétences : </strong>  
                            
                            {character.skills.map((skill) => (
                                <Tag mx='2'
                                size={'md'} 
                                key={character.id+'_'+skill}
                                colorScheme={formatSkill(skill)}
                                >{skill}</Tag>
                            ))}
                            </Text>
                            </HStack>
                        </CardBody>
        
                        <CardFooter>
                            <Button variant='solid' colorScheme='gray' onClick={navHome}>
                            Retour
                            </Button>
                        </CardFooter>
                    </Stack>
                    </Card>
                </Center>
            ) : (
                // <Heading>Aucun personnage ne correspond à cet identifiant.</Heading>
                <Loader/>
            )
            }
        </div>
    )
}

export default CharacterDetail;