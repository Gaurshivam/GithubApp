import { Box,Button,Flex,Heading ,Input} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import axios from 'axios';
import MyContext from '../Context/Mycontext';

const Search = () => {
  const [username, setUsername] = useState("");
  const {AddData} = useContext(MyContext);

  const getUserData  = () =>{
     axios.get(`https://api.github.com/users/${username}`)
     .then((res)=>{
         console.log(res.data)
         AddData(res.data)
     })
  }
  return (
    <Box>
      <Box mb="10px">
      <Heading size='lg' color="green">Github Project</Heading>
      </Box>
      <Flex mb="10px">
        <Input placeholder='Enter ' onChange={(e)=>{setUsername(e.target.value)}}/>
        <Button color='green' variant="outline" p="15px 18px" onClick={getUserData}>Search</Button>
      </Flex>
    </Box>
  );
}

export default Search;
