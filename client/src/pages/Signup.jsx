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

// export default function Signup() {
//   return (
//     <Stack w="60%" mx="auto" minH={'80vh'} direction={{ base: 'column', md: 'row' }}>
 
//       <Box bg="rgba(0, 120, 255, 1)" color="white"  >
// <Text textAlign="center"  mt="110px" fontSize="24px" fontWeight="bold">Looks like you are  new <br />here!</Text>
// <Text textAlign="center" mt="15px" fontSize="18px">Sign up with your email  to get  started</Text>
// <Image display="block" m="auto" mt="160px" width="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8a3OYLHA1EaZIxcKYEVWZolCM725KYFqKw&usqp=CAU"/>
// </Box>



//       <Flex  p={8} flex={1} align={'center'} justify={'center'}>
//         <Stack spacing={4} w={'full'} maxW={'md'}>
//           <FormControl id="username">
//             <FormLabel>Enter Username</FormLabel>
//             <Input type="text" />
//           </FormControl>
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
import React,{useState} from 'react'
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
import { useContext,useEffect } from 'react'
import { Authcontext } from '../authcontext/Authcontextprovider'
export default function Signup() {
  const [userdetails,setUserdetails] = useState({username:"",email:"",password:""})
  const {setUsername} =useContext(Authcontext)

  function handleUserdetails(e){
    console.log(e.target.value)
    const {name,value} = e.target
    setUserdetails({...userdetails,[name]:value})
   
 }
 async function handleSubmit(){
   try {
     let res = await fetch(`http://localhost:8080/user/register`,{
       method:`POST`,
       headers:{"Content-Type":"application/json"},
       body:JSON.stringify(userdetails)
      })
      console.log(userdetails);
     let data = await res.json()
     console.log(data)
     setUsername(userdetails.username)
    //  setUser(userData);
     console.log("data",userdetails.username);
     alert(data.msg)
   } catch (error) {
     console.error(error)
   }
 }
  return (
    <div >
          <Navbar/>

    <Stack w="60%" mx="auto" minH={'80vh'} direction={{ base: 'column', md: 'row' }} mt="2%" mb="2%" >
      <Box bg="rgba(0, 120, 255, 1)" color="white"  >
<Text textAlign="center"  mt="110px" fontSize="24px" fontWeight="bold">Looks like you are  new <br />here!</Text>
<Text textAlign="center" mt="15px" fontSize="18px">Sign up with your email  to get  started</Text>
<Image display="block" m="auto" mt="160px" width="150px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs8a3OYLHA1EaZIxcKYEVWZolCM725KYFqKw&usqp=CAU"/>
</Box>



      <Flex  p={8} flex={1} align={'center'} justify={'center'}>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <FormControl id="username">
            <FormLabel>Enter Username</FormLabel>
            <Input type="text" name='username' value={userdetails.username}  onChange={handleUserdetails} />
          </FormControl>
          <FormControl id="email">
            <FormLabel>Email address</FormLabel>
            <Input type="email" name='email' value={userdetails.email}  onChange={handleUserdetails}  />
          </FormControl>
          <FormControl id="password">
            <FormLabel>Password</FormLabel>
            <Input type="password" name='password' value={userdetails.password}  onChange={handleUserdetails} />
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


