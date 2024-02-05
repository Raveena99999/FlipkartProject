import React,{useState,useEffect} from 'react'
import { createContext } from 'react'
export const Authcontext = createContext()
export default function Authcontextprovider({children}) {
  const [username, setUsername] = useState("")

  
  return (
    <Authcontext.Provider value={{username,setUsername }}>
      {children}
    </Authcontext.Provider>
  )
}

