import React, {FunctionComponent, useState} from "react";
import Character from "../models/character";
import { 
    Button,
    Card,
    CardBody, 
    CardFooter, 
    HStack, 
    Heading,
    Image,
    Stack, 
    Tag,
    Text
} from "@chakra-ui/react";
import './character-card.css';

type Props = {
    character: Character,
    borderColor?: string,
    borderWidth?: string
}

const CharacterCard: FunctionComponent<Props> = ({borderColor = '#3182ce', borderWidth = '1px', character:{id, name, skills, picture, bounty, createdAt}}) => {
    const [widthBorder, setwidthBorder] = useState<string>();

    const zoomBorder = () => {
        setwidthBorder('4px');
    }

    const resetBorder = () => {
        setwidthBorder('1px');
    }

    return (
        <Card
            className="card-char"
            direction={{ base: 'column', sm: 'row' }}
            overflow='hidden'
            variant='outline'
            onMouseEnter={zoomBorder}
            onMouseLeave={resetBorder}
            borderWidth={widthBorder}
            borderColor={borderColor}
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
    );
}

export default CharacterCard;