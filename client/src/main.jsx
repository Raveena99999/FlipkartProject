import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { ChakraProvider } from '@chakra-ui/react'
// import './index.css'
import {BrowserRouter} from 'react-router-dom'
import Authcontextprovider from './authcontext/Authcontextprovider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  // <Authcontextprovider>
  <BrowserRouter>
  <ChakraProvider>
  <App />
  </ChakraProvider>
  
  </BrowserRouter>
  //  </Authcontextprovider>
  
 
  
   
 
)
