import React, {FunctionComponent, useContext, useState} from "react";
import Character from "../../models/character";
import {
    Button,
    Card,
    CardBody,
    Center, Checkbox,
    FormControl,
    FormHelperText,
    FormLabel,
    Image,
    Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper,
    Stack
} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import ApiContext from "../../contexts/api-context";

type Props = {
    character: Character,
    isEditForm?: boolean
}

type Field = {
    value?: any,
    error?: string,
    isValid?: boolean
}

type Form = {
    name: Field,
    age: Field,
    bounty: Field,
    type: Field,
    skills: Field
}
const CharacterForm: FunctionComponent<Props> = ({character, isEditForm=true}) => {
    // Hooks
    const [form, setForm] = useState<Form>({
        name: {value: character.name, isValid: true},
        age: {value: character.age, isValid: true},
        bounty: {value: character.bounty, isValid: true},
        type: {value:character.type, isValid: true},
        skills: {value: character.skills, isValid: true},
    });
    const navigate = useNavigate();
    const {updateCharacter, addCharacter} = useContext(ApiContext);

    // Properties
    const skills: string[] = [
        'Paramecia', 'Haki', 'Santôryû', 'Navigateur', 'Haki',
        'Tireur d\'élite', 'Cuisinier', 'Ninjutsu', 'Docteur',
        'Zoan', 'Archéologue', 'Charpentier', 'Ingénieur', 'Musicien',
        'Gyojin Karate'
    ];
    const defaultPicture: string = "https://imgs.search.brave.com/MmqzBUm8k37sW8I7es69kAqo1HubHcYXsNNPZ5rjE9U/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/c2VyaWVvdXNseS5j/b20vYXBwL3VwbG9h/ZHMvMjAyMy8wNy9q/YWNrLXNwYXJyb3ct/cGlyYXRlcy1kZXMt/Y2FyYWliZXMtMS5q/cGc";

    // Functions
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName: string = e.target.name;
        const fieldValue: string = e.target.value;
        const newField: Field = {
            [fieldName]: { value: fieldValue}
        };
        setForm({...form, ...newField});
    }

    const selectSkill = (skill: string, e: React.ChangeEvent<HTMLInputElement>) => {
        const checked = e.target.checked;
        let newField: Field;

        if(checked) {
            // On ajoute un nouveau skill
            const newSkills: string[] = form.skills.value.concat([skill]);
            newField = {value: newSkills};
        } else {
            // On retire un skill existant
            const newSkills: string[] = form.skills.value.filter((currentSkill: string) => currentSkill !== skill);
            newField = {value: newSkills};
        }

        setForm({...form, ...{skills: newField}});
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // console.log(form)

        // Update character datas
        character.name = form.name.value;
        character.bounty = form.bounty.value;
        character.age = form.age.value;
        character.type = form.type.value;
        character.type = form.type.value;
        character.skills = form.skills.value;

        if(isEditForm === true){
            updateCharacter(character).then(() => {
                //Redirect
                navigate(`/characters/${character.id}`);
            })
        } else {
            addCharacter(character).then(() => {
                //Redirect
                navigate(`/characters/${character.id}`);
            })
        }
    }

    const hasSkill = (skill: string): boolean => {
        return form.skills.value.includes(skill);
    }

    const isSkillsValid = (skill: string): boolean => {
        if(form.skills.value.length === 1 && hasSkill(skill)) {
            return false;
        }

        if(form.skills.value.length >= 4 && !hasSkill(skill)) {
            return false;
        }

        return true;
    }

    return (
        <Center>
            <Card
                overflow='hidden'
                variant='outline'
                maxW='md'
            >
                {/* Image */}
                <Image
                    maxW={{ base: '100%', sm: '200px' }}
                    src={character.picture}
                    alt={character?.name}
                    borderRadius='lg'
                />
                <Stack>
                    <CardBody>
                        <form onSubmit={e => handleSubmit(e)}>
                            {/* Name */}
                            <FormControl isRequired py={2}>
                                <FormLabel>Nom</FormLabel>
                                <Input
                                    type='text'
                                    id={'name'}
                                    name={"name"}
                                    minLength={2}
                                    maxLength={255}
                                    value={form.name.value}
                                    onChange={e => handleInputChange(e)}
                                />
                                {/*<FormHelperText>Nom du personnage</FormHelperText>*/}
                            </FormControl>
                            {/* Age */}
                            <FormControl isRequired py={2}>
                                <FormLabel>Âge</FormLabel>
                                <NumberInput
                                    min={0}
                                    max={1000}
                                    defaultValue={form.age.value}
                                >
                                    <NumberInputField name={"age"} onChange={e => handleInputChange(e)}/>
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                                {/*<FormHelperText>Age du personnage (0 à 1000 ans)</FormHelperText>*/}
                            </FormControl>
                            {/* Bounty */}
                            <FormControl isRequired py={2}>
                                <FormLabel>Prime</FormLabel>
                                <NumberInput
                                    min={10}
                                    max={999999999}
                                    defaultValue={form.bounty.value}
                                >
                                    <NumberInputField
                                        name={"bounty"}
                                        onChange={e => handleInputChange(e)}
                                    />
                                    <NumberInputStepper>
                                        <NumberIncrementStepper />
                                        <NumberDecrementStepper />
                                    </NumberInputStepper>
                                </NumberInput>
                                {/*<FormHelperText>Prime du personnage (0 à 999 Milliard)</FormHelperText>*/}
                            </FormControl>
                            {/* Type */}
                            <FormControl isRequired py={2}>
                                <FormLabel>Type</FormLabel>
                                <Input
                                    type='text'
                                    name={"type"}
                                    minLength={2}
                                    maxLength={255}
                                    value={form.type.value}
                                    onChange = {e => handleInputChange(e)}
                                />
                                {/*<FormHelperText>Type du personnage</FormHelperText>*/}
                            </FormControl>
                            {/* Skills */}
                            <FormControl py={2}>
                                <FormLabel>Compétences</FormLabel>
                                <Stack spacing={[1, 5]} direction={['column', 'row']}>
                                    {skills.map( (skill: string) => (
                                        <Checkbox
                                            size='md'
                                            defaultChecked={hasSkill(skill)}
                                            isDisabled={!isSkillsValid(skill)}
                                            onChange={e=>selectSkill(skill, e)}
                                        >
                                            {skill}
                                        </Checkbox>
                                    ))}
                                </Stack>
                            </FormControl>
                            {/* Submit */}
                            <FormControl isRequired py={2}>
                                <Button
                                    type={'submit'}
                                    colorScheme='teal'
                                    size='lg'>
                                    Valider
                                </Button>
                            </FormControl>
                        </form>
                    </CardBody>
                </Stack>
            </Card>
        </Center>
    )
}

export default CharacterForm;