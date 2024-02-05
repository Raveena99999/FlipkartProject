

import { Box, ChakraProvider } from "@chakra-ui/react"
import Navbar from "./components/Navbar"
// import Allroutes from "./components/Allroutes"
import Home from "./pages/Home"
import Afternavbar from "./components/Afternavbar"
import Swipperslider2 from "./components/Swipperslider2"
import Footer from "./components/Footer"
import Gridcard from "./components/Gridcard"
import { Route, Router, Routes } from "react-router-dom"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Flipkarthome from "./components/Flipkarthome"
import Authcontextprovider from "./authcontext/Authcontextprovider"
function App() {

  return (
    <Box  bg="rgba(245, 245, 245, 1)">
    {/* <Navbar/>
    <Afternavbar/>
    <Swipperslider2/>
    <Gridcard/>
     <Allroutes/>
      <Footer/> */}

      

      <Authcontextprovider>
      {/* <Box bg="rgba(245, 245, 245, 1)"> */}

          <Routes>
            <Route path="/" element={<Flipkarthome/>}></Route>

            <Route path="/signup" element={<Signup/>}></Route>
            <Route path="/login" element={<Login/>}></Route>

          </Routes>
          {/* </Box> */}

      </Authcontextprovider>
     
     </Box>
  )
}

export default App
