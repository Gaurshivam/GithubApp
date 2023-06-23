import { Box, Button, Heading } from '@chakra-ui/react';
import MyContext from '../Context/Mycontext';
import { useContext } from 'react';


const Profile = () => {
  const {Gitdata} =useContext(MyContext)
  return (
    <Box>
       <img src={Gitdata.avatar_url || "https://th.bing.com/th/id/OIP.YyOMn9wj8tZCEyCPTYGlegHaHa?pid=ImgDet&rs=1"} 
       alt='HPhoto' height="150px" width="100%"/>
       <Heading>{Gitdata.name || "No Name"}</Heading>
       <p>Male</p>
       <p style={{padding:"2px"}}>{Gitdata.bio || "No Bio"}</p>
       <Button color='green'>Profile</Button>
    </Box>
  );
}
export default Profile;
