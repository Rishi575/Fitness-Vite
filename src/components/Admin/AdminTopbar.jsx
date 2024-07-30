import React from 'react'
import { Avatar } from '../ui/avatar'
import { Button } from '../ui/button'

const UserTopbar = () => {
    return (
        <>
            <div className='flex justify-center items-center'>
                <div className='bg-gray-300 h-1/6 w-11/12 scale-x-105 ml-10 flex justify-center items-center absolute top-0'>
                    <Avatar className=' bg-gray-400 flex justify-center items-center w-20 h-20 text-3xl font-bold text-foreground absolute left-48 font-serif'>RP</Avatar>
                    <div className='flex justify-start absolute left-96 flex-col gap-2 text-black font-bold font-serif text-lg'>
                        <div>Name : Admin</div>
                        <div>Email : Admin@gamil.com</div>
                    </div>
                    <div className='w-full flex justify-center items-center mr-10'>
                        <Button className='bg-gray-400 border-gray-400 border-2 font-serif text-foreground text-lg absolute right-20'><a href='/'>Logout</a></Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserTopbar