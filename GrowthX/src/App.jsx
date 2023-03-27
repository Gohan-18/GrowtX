import './App.css';
import { Button } from '@mui/material'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';
import { createContext, useState } from 'react';

export const AppContext = createContext(null)

function App() {

  const [activeStep, setActiveStep] = useState(0)
  const [formData, setFormData] = useState({
    fName: '',
    lName: '',
    industry: '',
    role: '',
    goal: '',
    mail: '',
    phone: 0
  })

  console.log(formData)

  const route = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route index element={<Home/>} />
    </Route>
  ))

  return (
    <AppContext.Provider value={{activeStep, setActiveStep, formData, setFormData}} >
      <RouterProvider router={route} />
    </AppContext.Provider>
  )
}

export default App
