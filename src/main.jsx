import React, { lazy } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
// import About from './components/About.jsx'
// import Contact from './components/Contact.jsx'

const About = lazy(() => wait(1000).then(() => import('./components/About.jsx')))
const Contact = lazy(() => wait(1000).then(() => import('./components/Contact.jsx')))
const router = createBrowserRouter([
  {
    path: '/',
    element: <App/>,
    errorElement: <Error/>,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/contact',
        element: <Contact/>,
      },
      {
        path: '/about',
        element: <About/>,
      }
    ]
  }
])

const wait = (time) => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
