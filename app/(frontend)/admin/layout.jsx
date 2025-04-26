'use client'
import Sidebar from '@/components/seller/Sidebar'
import React from 'react'

const Layout = ({ children }) => {
  return (
    <div className='flex w-full'>
      <Sidebar />
      {children}
    </div>
  )
}

export default Layout