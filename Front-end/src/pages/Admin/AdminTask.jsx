import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import BoxReveal from '@/components/magicui/box-reveal'

import toast from 'react-hot-toast';
import { Toaster } from 'react-hot-toast';

const AdminTask = () => {
    const [formData, setFormData] = useState({
        user: '',
        task1: '',
        task2: '',
    });


    const handleTask = (e) => {
        e.preventDefault();

        // Check if all fields are filled
        const allFieldsFilled = Object.values(formFields).every(field => field.trim() !== '');

        if (allFieldsFilled) {
            // All fields are filled, show success toast
            toast.success('Task assigned successfully!');
            // Handle task submission logic here
        } else {
            // Some fields are empty, show error toast
            toast.error('Please fill out all fields.', { duration: 5000 });
            setTimeout(() => {
                navigate('/');
            }, 1000);
        }
    };



    return (
        <div className='flex justify-center items-center bg-transperent h-5/6 w-11/12 absolute bottom-0 overflow-y-auto'>
            <div className=' absolute top-8 flex justify-center items-center font-serif font-bold text-3xl h-10'>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <p className="text-[2.5rem] font-semibold font-serif">
                        Task Assign's<span className="text-[#5046e6]">.</span>
                    </p>
                </BoxReveal>
            </div>
            <div className='flex justify-center items-center'>
                <div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold text-foreground mb-2" htmlFor="status">Select User</label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            // onChange={handleChange}
                            className="border p-2 rounded w-full text-black"
                            placeholder="--None--"
                        >
                            <option value="Active">--None--</option>
                            <option value="Inactive">Rishi</option>
                            <option value="Closed">Vishal</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold text-foreground mb-2" htmlFor="status">Select Task</label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            // onChange={handleChange}
                            className="border p-2 rounded w-full text-black"
                            placeholder="--None--"
                        >
                            <option value="Active">--None--</option>
                            <option value="Inactive">Pull-Up</option>
                            <option value="Closed">Push-Up</option>
                            <option value="Closed">Squats</option>
                        </select>
                    </div>
                    <div className="mb-4">
                        <label className="block text-sm font-bold text-foreground mb-2 w-48" htmlFor="status">Select Task</label>
                        <select
                            id="status"
                            name="status"
                            value={formData.status}
                            // onChange={handleChange}
                            className="border p-2 rounded w-full text-black"
                            placeholder="--None--"
                        >
                            <option value="Active">--None--</option>
                            <option value="Inactive">Running</option>
                            <option value="Closed">Lat-PullDown</option>
                            <option value="Closed">Yoga</option>
                        </select>
                    </div>
                   <div className='flex justify-center items-center'>
                   <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                        onClick={handleTask}
                    >
                        Assign Task
                    </button>
                   </div>
                   <Toaster
                    position="top-right"
                    reverseOrder={false}
                    className='mt-20'
                />
                </div>
            </div>
           
        </div>
    );
};

export default AdminTask;
