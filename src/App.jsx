import React from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Paste from './components/Paste'
import ViewPaste from './components/viewPaste'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const router=createBrowserRouter([
  {path:'/',
  element: <div>
    <Navbar/>
    <Home/>
  </div>
    },
  {path:'/paste',
    element: <div>
      <Navbar/>
      <Paste/>
    </div>
    },
  {path:'/paste/:id',
    element: <div>
      <Navbar/>
      <ViewPaste/>
    </div>
    }
]);
function App(){

  return (
    <div className='appDiv'>
      <RouterProvider router={router}/>
    </div>
  )
}
export default App
