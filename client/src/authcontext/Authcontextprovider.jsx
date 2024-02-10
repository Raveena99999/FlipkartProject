import React,{useState,useEffect} from 'react'
import { createContext } from 'react'
export const Authcontext = createContext()
export default function Authcontextprovider({children}) {
  const [username, setUsername] = useState(localStorage.getItem("username"))
  // const [email, setEmail] = useState(localStorage.getItem("email"))
const [searchData,setSearchData]= useState([])
  const [isLogin,setIsLogin] =useState(false)
  return (
    <Authcontext.Provider value={{username,setUsername,searchData,setSearchData,isLogin,setIsLogin}}>
      {children}
    </Authcontext.Provider>
  )
}

