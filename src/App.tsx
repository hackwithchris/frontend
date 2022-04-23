import { ChakraProvider, Box, theme } from '@chakra-ui/react';
import { NavBar } from './components';
import { Main } from './containers/';

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box bgColor="orange.50" h="100vh" position="relative">
      <NavBar />
      <Main />
    </Box>
  </ChakraProvider>
);
