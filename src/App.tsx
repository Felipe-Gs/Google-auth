import SingIn from "./pages/SingIn";
import Postagens from "./pages/Postagens/Postagens";
import { AuthContextProvider } from './context/AuthContext';


 
import './styles/global.scss';

// imports de rotas
import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider, Route} from 'react-router-dom';

const router = createBrowserRouter([
  {
    children:[
      {
        path: '',
        element: <SingIn/>
      },
      {
        path: '/new',
        element: <Postagens/>
      }
      
    ]
  }
])
export default function App() {
  return (
    
      <RouterProvider router={router}/>
    

    
  )
}


// npx vite --host
