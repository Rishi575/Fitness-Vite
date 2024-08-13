import React from 'react'

import { Button } from '@/components/ui/button'
import BoxReveal from '@/components/magicui/box-reveal'


const userData = [
    { id: '1', name: 'John Doe', mail: 'john@example.com', password: '••••••••' ,membership:'Basic'},
    { id: '2', name: 'Jane Smith', mail: 'jane@example.com', password: '••••••••',membership:'Basic' },
    { id: '3', name: 'Emily Johnson', mail: 'emily@example.com', password: '••••••••',membership:'Basic' },
    // Add more sample data as needed
];

const AdminUser = () => {

    return (
        <>
             <div className='flex justify-center items-center bg-transperent h-5/6 w-11/12 absolute bottom-0 overflow-y-auto'>
             <div className='absolute top-5'>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <p className="text-[3.5rem] font-semibold font-serif">
                        User Detail's<span className="text-[#5046e6]">.</span>
                    </p>
                </BoxReveal>
             </div>
                <div className='flex justify-center items-center'>
                    <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                        <div className="w-full mt-6 p-4 bg-white rounded-lg shadow-lg">
                            <table className="w-full border-collapse">
                                <thead>
                                    <tr>
                                        <th className="p-2 border-b">User ID</th>
                                        <th className="p-2 border-b">User Name</th>
                                        <th className="p-2 border-b">User Mail</th>
                                        <th className="p-2 border-b">Password</th>
                                        <th className="p-2 border-b">Membership</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userData.map((user) => (
                                        <tr key={user.id}>
                                            <td className="p-2 border-b">{user.id}</td>
                                            <td className="p-2 border-b">{user.name}</td>
                                            <td className="p-2 border-b">{user.mail}</td>
                                            <td className="p-2 border-b">{user.password}</td>
                                            <td className="p-2 border-b">{user.membership}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </BoxReveal>
                </div>
            </div>

        </>
    )
}

export default AdminUser