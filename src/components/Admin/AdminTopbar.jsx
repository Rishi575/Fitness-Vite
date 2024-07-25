import React from 'react'
import { Avatar } from '../ui/avatar'
import { ModeToggle } from '../mode-toggle'

const AdminTopbar = () => {
  return (
    <>
      <div className='w-4/5 h-12 bg-primary flex justify-center items-center absolute top-0'>
        <div className='flex absolute justify-start w-3/4 left-5'>
          Topbar
        </div>
        <div className='flex justify-center items-center absolute right-5 gap-3'>
          <Avatar className='bg-white flex justify-center items-center'>Rp</Avatar>
          <ModeToggle />
        </div>
      </div>
    </>
  )
}

export default AdminTopbar
