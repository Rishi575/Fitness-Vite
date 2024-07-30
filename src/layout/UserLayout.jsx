import AdminLeftbar from '@/components/Admin/AdminLeftbar'
import AdminTopbar from '@/components/Admin/AdminTopbar'
import Navbar from '@/components/Shared/Navbar'
import UserLeftbar from '@/components/User/UserLeftbar'
import UserTopbar from '@/components/User/UserTopbar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return (
        <>
        <div className='flex justify-center items-center w-full h-full'>
            <div className='flex justify-center items-center '>
                {/* <UserTopbar/> */}
            </div>
            <div className='flex justify-center items-center absolute top-0 left-0'>
                <UserLeftbar/>
            </div>
            <div>

            </div>
        </div>
        </>
    )
}

export default UserLayout