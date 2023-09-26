import React, {FunctionComponent, useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import Character from './models/character';
import CHARACTERS from './models/mock-character';
import { 
  Box,
  Button,
  Card,
  CardBody,
  CardHeader,
  CardFooter,
  Container,
  Flex,
  Heading,
  HStack,
  Image,
  Stack,
  Tag,
  Text,
  SimpleGrid
 } from '@chakra-ui/react';

const App: FunctionComponent = () => {
  const [listCharacters, setListCharacters] = useState<Character[]>([]);

  // Initialize listCharacters
  useEffect(() => {
    setListCharacters(CHARACTERS);
  }, [])

  return (
    <Container maxW={'7xl'} marginTop={'10px'}>
      <Heading as='h1' size='lg'>Liste des personnages de One Piece.</Heading>
      <SimpleGrid 
      mt={'10px'}
      spacing={4}
      minChildWidth='350px'
      >
        {listCharacters.map(({id,bounty, name, picture, skills, createdAt}) => (
          <Card
          direction={{ base: 'column', sm: 'row' }}
          overflow='hidden'
          variant='outline'
          key={id}
          >
            <Image
            objectFit={'cover'}
            maxW={{ base: '100%', sm: '200px' }}
            src={picture}
            alt={name}
            />
            <Stack>
                <CardBody>
                  <Heading size='md'>{name}</Heading>

                  <Text py='2'>
                    <strong>Prime : </strong>{bounty} Berrys
                  </Text>
                  <Text fontSize={'sm'}>
                    <strong>Créé le : </strong>{createdAt.toDateString()}
                  </Text>
                  <HStack spacing={4} py={'4'}>
                    {skills.map((skill) => (
                      <Tag size={'md'} key={id+'_'+skill}>{skill}</Tag>
                    ))}
                  </HStack>
                </CardBody>

                <CardFooter>
                  <Button variant='solid' colorScheme='blue'>
                    Consulter
                  </Button>
                </CardFooter>
            </Stack>
          </Card>
        ))}
      </SimpleGrid>
    </Container>
    
  );
}

export default App;
