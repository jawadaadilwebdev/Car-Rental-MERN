import React from 'react'
import OwnerNavbar from '../../components/owner/OwnerNavbar'
import Sidebar from '../../components/owner/Sidebar'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='flex flex-col '>
      <OwnerNavbar />
      <div className="flex">
        <Sidebar/>
        <Outlet/>
      </div>
    </div>
  )
}

export default Layout