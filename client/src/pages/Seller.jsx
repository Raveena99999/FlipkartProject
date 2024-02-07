import React from 'react'
import Navbar from '../components/Navbar'
import { Flex ,Box,Text} from '@chakra-ui/react'
import CreateAccount from '../sections/CreateAccount'
import ListProducts from '../sections/ListProducts'
export default function Seller() {
  return (
    <div>
      <Navbar/>
      <Flex>
      <Box w="30%">
        <Text>Create Account</Text>
        <Text>List Products</Text>
        <Text>Storage & Shipping</Text>
        <Text>Recieve Payments</Text>
        <Text>Grow Faster</Text>
        <Text>Seller App</Text>
        <Text>Help and Support</Text>

      </Box>
      <Box w="70%">
        <CreateAccount/>
        <ListProducts/>
      </Box>

      </Flex>
    </div>
  )
}
