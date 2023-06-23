import { Box, Card, CardBody, CardHeader, Heading, Stack, StackDivider, Text } from '@chakra-ui/react';
import React, { useContext } from 'react';
import MyContext from '../Context/Mycontext'


const Details = () => {
  const {Gitdata} = useContext(MyContext)
  return (
    <Box m="10px" p="10px">
     <Card>
  <CardHeader>
    <Heading size='md'>Client Report</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Name
        </Heading>
        <Text pt='2' fontSize='sm'>
          {Gitdata.name || "No Name"}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Email
        </Heading>
        <Text pt='2' fontSize='sm'>
          {Gitdata.email || "Abc@gmail.com"}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
         Followers
        </Heading>
        <Text pt='2' fontSize='sm'>
        {Gitdata.followers || "00"}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
         Public Repo
        </Heading>
        <Text pt='2' fontSize='sm'>
        {Gitdata.public_repos || "00"}
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card> 
    </Box>
  );
}

export default Details;