import { chakra, Flex, HStack, Button, Image } from "@chakra-ui/react";
import React, {FunctionComponent, useContext} from "react";
import {Link, useNavigate} from "react-router-dom";
import AuthContext from "../../contexts/auth-context";

const Navbar: FunctionComponent = () => {
    const {isAuthenticated, logout} = useContext(AuthContext);
    const navigator = useNavigate();

    const handleLogout = ():void => {
        logout().then(() => {
            navigator('/');
        })
    }

    return (
        <chakra.header id="header">
            <Flex
                w="100%"
                px="6"
                py="5"
                align="center"
                justify="space-between"
            >

                {/* Nav Items*/}
                <HStack as="nav" spacing="5">
                    <Link to={"/"}>
                        <Button variant="nav"> Accueil</Button>
                    </Link>
                    <Link to={"/characters"}>
                        <Button variant="nav"> Personnages</Button>
                    </Link>
                    {!isAuthenticated?
                        (
                            <Link to={"/login"}>
                                <Button variant="nav"> Connexion</Button>
                            </Link>
                        )
                        :
                        (
                            <Button variant="nav" onClick={handleLogout}> Déconnexion</Button>
                        )
                    }
                </HStack>
            </Flex>
        </chakra.header>
    )
}

export default Navbar;