import React, {FunctionComponent, useEffect, useState} from "react";
import Character from "../models/character";
import CHARACTERS from "../models/mock-character";
import { useNavigate, useParams } from "react-router-dom";
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
    Center
} from "@chakra-ui/react";
import formatDate from "../helpers/format-date";
import formatSkill from "../helpers/format-skill";

type Params = {
    id: string;
}

const CharacterDetail: FunctionComponent = () => {
    const params = useParams();
    const navigate = useNavigate();
    const [character, setCharacter] = useState<Character|null>(null);
    
    useEffect(() => {
        CHARACTERS.map(char => {
            if(params.id === char.id.toString()){
                setCharacter(char);
            }
        })
    }, [params.id]);

    const navHome = () => {
        navigate('/');
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
                            <Button variant='solid' colorScheme='yellow' onClick={navHome}>
                            Retour
                            </Button>
                        </CardFooter>
                    </Stack>
                    </Card>
                </Center>
            ) : (
                <Heading>Aucun personnage ne correspond à cet identifiant.</Heading>
            )
            }
        </div>
    )
}

export default CharacterDetail;