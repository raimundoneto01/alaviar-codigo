import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './routes/Home.jsx';
import Contact from './routes/Contact.jsx';
import ErroPages from './routes/ErroPages.jsx';


const router  = createBrowserRouter([
 {
  path: '/',
  element: <App/>,
  errorElement: <ErroPages/>,
  children: [
    {
      path: '/',
      element: <Home/>,
    },
    {
      path: 'contact',
      element: <Contact/>,
    }, 
  ]
 }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router = {router} />
  </React.StrictMode>,
)
