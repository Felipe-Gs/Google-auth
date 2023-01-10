import React, {useEffect, useState} from 'react'
import './styles.scss';
import { GoogleLogo } from 'phosphor-react';
import { useNavigate } from 'react-router-dom';

import { GoogleAuthProvider, signInWithPopup, User } from 'firebase/auth';

import { auth } from '../../services/firebase';
 

export default function SingIn() {
  const navigate = useNavigate();

  

  const [user, setUser] = useState<User>({} as User);
  const [login, setLogin] = useState(false)

  function headleGoogleSingIn(){
    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then((result)=>{
      setUser(result.user)
      setLogin(true)
      // navigate('/new')
      
    }).catch((error)=>{
      console.log(error);
    })
  }


  useEffect(()=>{
    try {
      if(login != false){
        console.log('voce pode logar')
        
      }
    } catch (error) {
      console.log(error)
    }
  },[login])


  return (
    <div className='container'>
      <div className="user">
        { user.photoURL && <img src={user.photoURL} alt='foto do usuario'/>}
        <strong>{user.displayName}</strong>
        <small>{user.email}</small>
      </div>
      <h1>Acesse sua conta</h1>


      <span>
        Utilizando autenticação social, por exemplo, autenticação com o google voçê <br/>
        facilita a vida do usuario permitindo utilizar sua aplicação sem fazer cadastro.
      </span>

      <button type='button' className='button' onClick={()=>(headleGoogleSingIn())}>
        <GoogleLogo/>
        Entrar com o Google
      </button>

      
    </div>
  )
}

// npx vite --host
