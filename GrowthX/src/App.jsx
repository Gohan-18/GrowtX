import './App.css';
import { Button } from '@mui/material'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './components/Layout';
import Home from './pages/Home';

function App() {

  const route = createBrowserRouter(createRoutesFromElements(
    <Route path='/' element={<Layout/>} >
      <Route index element={<Home/>} />
    </Route>
  ))

  return (
    <RouterProvider router={route} />
  )
}

export default App
