import { NextPage } from 'next'
import React, { ReactNode } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

interface LayoutProps {
  children: ReactNode
}

const Layout: NextPage<LayoutProps> = ({ children }) => {
  return (
    <>
      <div>
        <Navbar></Navbar>
        <main>{children}</main>
        <Footer></Footer>
      </div>
    </>
  )
}

export default Layout
