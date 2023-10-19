import { chakra, Flex, HStack, Button, Image } from "@chakra-ui/react";
import React, { FunctionComponent } from "react";
import { Link } from "react-router-dom";

const Navbar: FunctionComponent = () => {
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
          </HStack>
        </Flex>
      </chakra.header>
    )
}

export default Navbar;