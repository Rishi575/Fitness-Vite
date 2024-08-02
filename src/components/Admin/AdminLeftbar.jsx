import React from 'react'
import { Button } from '../ui/button'
import { NavLink } from 'react-router-dom'
import { Icon } from 'lucide-react'
import { ModeToggle } from '../mode-toggle'
import { Dock, DockIcon } from '../magicui/dock'

const UserLeftbar = () => {
    const AdminLinks = [
        {
            // title: "Dashboard",
            path: "./admin/dashboard",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1" /><rect width="7" height="5" x="14" y="3" rx="1" /><rect width="7" height="9" x="14" y="12" rx="1" /><rect width="7" height="5" x="3" y="16" rx="1" /></svg>),

        }, {
            // title: "User",
            path: "./admin/users",
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" /></svg>),
        }, {
            path: "/admin/trainers",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-user-check"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><polyline points="16 11 18 13 22 9"/></svg>,
        }, {
            path: '/session',
            icon: (<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-shell"><path d="M14 11a2 2 0 1 1-4 0 4 4 0 0 1 8 0 6 6 0 0 1-12 0 8 8 0 0 1 16 0 10 10 0 1 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44" /></svg>),
        }


    ]
    return (
        <>
            <div className='flex justify-center items-center bg-primary w-10 h-5/6 rounded-s rounded-e'>
                <div className='h-screen w-1/6 flex justify-center items-center flex-col'>
                    <div className='absolute top-5'>
                        {
                            AdminLinks.map((data, index) => (
                                <NavLink key={index} to={data.path} className={''}>
                                    <span className='font-bold font-serif text-lg'>
                                        <span className='mr-2'>{data.icon}</span>
                                    </span>
                                </NavLink>
                            ))
                        }
                    </div>
                    <div className='absolute bottom-5 bg-transparent'>
                        <ModeToggle />
                    </div>
                </div>
            </div>

        </>
    )
}

export default UserLeftbar