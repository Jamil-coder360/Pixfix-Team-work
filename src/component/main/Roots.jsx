import React from 'react'
import { Outlet } from 'react-router'
import Header from './Header'
import Footer from './Footer'

const Roots = () => {
  return (
    <main className='bg-home'>
    <Header />
    <Outlet/>
    <Footer />
    </main>
  )
}

export default Roots