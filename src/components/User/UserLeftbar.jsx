import React from 'react'
import { Button } from '../ui/button'
import { NavLink } from 'react-router-dom'
import { Icon } from 'lucide-react'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faDashboard, faUsers } from '@fortawesome/free-solid-svg-icons'

const UserLeftbar = () => {
    const AdminLinks = [
        {
            // title: "Dashboard",
            path: "./dashboard",
            icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-layout-dashboard"><rect width="7" height="9" x="3" y="3" rx="1"/><rect width="7" height="5" x="14" y="3" rx="1"/><rect width="7" height="9" x="14" y="12" rx="1"/><rect width="7" height="5" x="3" y="16" rx="1"/></svg>
            
        },{
            // title: "User",
            path: "./admin/users",
            // icon: faUsers
        }
    
    ]
  return (
    <>
    <div className='flex justify-center items-center bg-gray-300 w-10 h-5/6 rounded-s rounded-e'>
    <div className='h-screen w-1/6 flex justify-center items-center flex-col'>
        <div className=''>
            {
                AdminLinks.map((data, index)=>(
                    <NavLink key={index} to={data.path} className={''}>
                        <span className='font-bold font-serif text-lg'>
                        <Icon icon={data.icon} className='mr-2' />
                            {data.title}
                        </span>
                    </NavLink>
                    
                ))
            }
        </div>
    </div>
    </div>

    </>
  )
}

export default UserLeftbar