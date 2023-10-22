import React, {FunctionComponent, useContext, useState} from "react";
import {Alert, AlertIcon, Box, Button, Center, FormControl, FormLabel, Heading, Input} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";
import AuthContext from "../contexts/auth-context";

type Field = {
    value?: any,
    error?: string,
    isValid?: boolean
}

type Form = {
    username: Field,
    password: Field,
}
const Login: FunctionComponent = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState<Form>({
        username: {value: '', isValid: true},
        password: {value: '', isValid: true}
    });
    const [message, setMessage] = useState<string>("Vous êtes déconnecté. (onepiece / onepiece)")
    const {login} = useContext(AuthContext);
    const navHome = (): void => {
        navigate('/');
    }

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const fieldName: string = e.target.name;
        const fieldValue: string = e.target.value;
        const newField: Field = {
            [fieldName]: { value: fieldValue}
        };
        setForm({...form, ...newField});
    }
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setMessage("Connexion en cours...");
        login(form.username.value, form.password.value).then((isAuth: boolean) => {
            if(!isAuth){
                setMessage("Les identifiants sont incorrects. (onepiece / onepiece)")
                return;
            }
            navHome();
        })
    }

    return (
        <Center>
            <Box>
                <Heading>Connexion</Heading>
                <Box>
                    <Alert status='info'>
                        <AlertIcon />
                        {message}
                    </Alert>
                    <form onSubmit={e => handleSubmit(e)}>
                        <FormControl isRequired py={2}>
                            <FormLabel>Nom d'utilisateur</FormLabel>
                            <Input
                                type='text'
                                name={"username"}
                                minLength={2}
                                maxLength={255}
                                value={form.username.value}
                                onChange={e => handleInputChange(e)}
                            />
                        </FormControl>
                        <FormControl isRequired py={2}>
                            <FormLabel>Mot de passe</FormLabel>
                            <Input
                                type='password'
                                name={"password"}
                                minLength={2}
                                maxLength={255}
                                value={form.password.value}
                                onChange={e => handleInputChange(e)}
                            />
                        </FormControl>
                        {/* Submit */}
                        <FormControl isRequired py={2}>
                            <Button
                                type={'submit'}
                                colorScheme='teal'
                                size='lg'>
                                Se connecter
                            </Button>
                        </FormControl>
                    </form>
                </Box>
                <Button
                    my={10}
                    variant='solid'
                    colorScheme='gray'
                    onClick={navHome}
                >
                    Retour
                </Button>
            </Box>
        </Center>
    )
}

export default Login;