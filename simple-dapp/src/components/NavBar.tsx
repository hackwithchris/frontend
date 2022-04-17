import React from 'react';
import { Flex, Image, Text, HStack, Button } from '@chakra-ui/react';

export const NavBar: React.FC = () => {
  return (
    <Flex w="100%" px="6" py="5" align="center" justify="space-between" bgColor="orange.100">
      <HStack>
        <Image
          src="https://cdn.pixabay.com/photo/2013/07/12/18/20/santa-claus-153309_1280.png"
          h="50px"
        />
        <Text>Sample Dapp</Text>
      </HStack>

      <HStack>
        <Button colorScheme="green">Connect</Button>
      </HStack>
    </Flex>
  );
};
