import React, { Suspense } from 'react'
import Header from './components/Header'
import { Outlet } from 'react-router-dom'
import './App.css'
const App = () => {
  return (
    <>
      <Header/>
      <main className=' py-4 px-4 md:px-8'>
        <Suspense fallback = {<h1 className='text-xl'>Loading...</h1>}>
          <Outlet/>
        </Suspense>
      </main>
    </>
  )
}

export default App