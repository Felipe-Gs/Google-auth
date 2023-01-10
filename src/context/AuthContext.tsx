import { createContext, useState, useEffect, Children  } from "react";
import { useNavigate } from 'react-router-dom';



export const AuthContext = createContext({});

export function AuthContextProvider({children }){   
    const navigate = useNavigate();
   
    
    const clicar =()=>{
      console.log('voce clicou!')
    }




    return(
        <AuthContext.Provider value={{
            clicar, 
        }}> 
        {Children}
        </AuthContext.Provider>
        
    )
}