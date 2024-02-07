import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Electronics from '../components/Electronics'

import { Box } from '@chakra-ui/react'
export default function Mobile() {
  return (
<Box>
      <Navbar/>
      <Electronics/>
      <Footer/>
    </Box>  )
}
