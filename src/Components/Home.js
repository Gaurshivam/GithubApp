import React from 'react';
import { Box, Container, Flex } from '@chakra-ui/react'
import Search from './Search';
import Details from './Details';
import Profile from './Profile';


const Home = () => {
  return (
    <Container p="30px" maxW="1000px" boxShadow='dark-lg' mt="60px">
      <Box >
        <Search />
      </Box>
      <Flex>
        <Box w='30%' >
        <Profile />
        </Box>
        <Box w='70%' bg='pink'm="1px">
        <Details />
        </Box>
      </Flex>
      
    </Container>
  );
}

export default Home;
