import React from 'react';
import { Button } from '@chakra-ui/react';

export const MintButton: React.FC = () => {
  return (
    <Button display="block" mx="auto" mt={10} colorScheme="orange">
      Mint Some Shit
    </Button>
  );
};
