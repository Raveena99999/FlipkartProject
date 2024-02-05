// 'use client'

// import {
//   Button,
//   Checkbox,
//   Flex,
//   Text,
//   FormControl,
//   FormLabel,
//   Heading,
//   Input,
//   Stack,
//   Image,
//   Box
// } from '@chakra-ui/react'

// export default function Login() {
//   return (
//     <Stack w="60%" mx="auto" minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
 
//       <Box bg="rgba(0, 120, 255, 1)" color="white"  >
// <Text textAlign="center"   mt="110px" fontSize="24px" fontWeight="bold">Login</Text>
// <Text  textAlign="center" mt="15px" fontSize="18px">Get access to your <br/> Orders,Wishlists and Recommendations</Text>
// <Image display="block" m="auto" mt="160px" width="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8a3OYLHA1EaZIxcKYEVWZolCM725KYFqKw&usqp=CAU"/>
// </Box>



//       <Flex  p={8} flex={1} align={'center'} justify={'center'}>
//         <Stack spacing={4} w={'full'} maxW={'md'}>
        
//           <FormControl id="email">
//             <FormLabel>Email address</FormLabel>
//             <Input type="email" />
//           </FormControl>
//           <FormControl id="password">
//             <FormLabel>Password</FormLabel>
//             <Input type="password" />
//           </FormControl>
//           <Stack spacing={6}>
//             <Stack
//               direction={{ base: 'column', sm: 'row' }}
//               align={'start'}
//               justify={'space-between'}>
//               <Checkbox>Remember me</Checkbox>
//               <Text color={'blue.500'}>Forgot password?</Text>
//             </Stack>
//             <Text fontSize="14px">By continuing,you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
//             <Button colorScheme={'orange'} variant={'solid'}>
//               Continue
//             </Button>
//           </Stack>
//         </Stack>
//       </Flex>
    
//     </Stack>
//   )
// }




'use client'
import React,{useContext, useState} from 'react'

import {
  Button,
  Checkbox,
  Flex,
  Text,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Box
} from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import { Authcontext } from '../authcontext/Authcontextprovider'
export default function Login() {

  const [userdetails, setUserdetails] = useState({email:"", password:""})

 function handleChange(e){
    setUserdetails({
      ...userdetails,
      [e.target.name]:e.target.value
    })
}
async function handleSubmit(){
  try {
    let res = await fetch("http://localhost:8080/user/login",{
      method:"POST",
      headers:{"Content-Type":"application/json"},

      credentials : "include",
      mode:"cors",
      body:JSON.stringify(userdetails)
    })
  let result = await res.json()
  console.log(result)
    alert("login successfully")
  } catch (error) {
    console.log(error)
  }
}
  return (
    <div>
      <Navbar/>
    <Stack w="60%" mx="auto" minH={'80vh'} direction={{ base: 'column', md: 'row' }} mt="2%" mb="2%">
 
      <Box bg="rgba(0, 120, 255, 1)" color="white"  >
<Text textAlign="center"   mt="110px" fontSize="24px" fontWeight="bold">Login</Text>
<Text  textAlign="center" mt="15px" fontSize="18px">Get access to your <br/> Orders,Wishlists and Recommendations</Text>
<Image display="block" m="auto" mt="160px" width="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8a3OYLHA1EaZIxcKYEVWZolCM725KYFqKw&usqp=CAU"/>
</Box>



      <Flex  p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
        
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" onChange={handleChange} value={userdetails.email} name="email" />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" onChange={handleChange} value={userdetails.password} name='password'  />
          </FormControl>
          <Stack spacing={6}>
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              align={'start'}
              justify={'space-between'}>
              <Checkbox>Remember me</Checkbox>
              <Text color={'blue.500'}>Forgot password?</Text>
            </Stack>
            <Text fontSize="14px">By continuing,you agree to Flipkart's Terms of Use and Privacy Policy.</Text>
            <Button colorScheme={'orange'} variant={'solid'} onClick={handleSubmit}>
              Continue
            </Button>
          </Stack>
        </Stack>
      </Flex>
    
    </Stack>
    <Footer/>
    </div>
  )
}

