import Navbar from '@/components/Shared/Navbar'
import AdminLeftbar from '@/components/Admin/AdminLeftbar'
import AdminTopbar from '@/components/Admin/AdminTopbar'
import React from 'react'
import { Outlet } from 'react-router-dom'
const AdminLayout = () => {
  return (
    <>
     <div className='flex justify-center items-center w-full h-full'>
            <div className='flex justify-center items-center '>
                <AdminTopbar/>
            </div>
            <div className='flex justify-center items-center absolute top-0 left-0'>
                <AdminLeftbar/>
            </div>
            <div className='flex justify-center items-center'>
            <Outlet/>
            </div>
        </div>
    </>
  )
}

export default AdminLayout