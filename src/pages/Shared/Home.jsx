import Footer from '@/components/Shared/Footer'
import FlippingCard from '@/components/ui/FlipingCards'
import React from 'react'

const Home = () => {
    return (
        <>
            <div className='flex justify-center items-center'>

                <div className='w-11/12 h-3/5 rounded-3xl flex justify-end border-2 border-primary mt-20'>
                    <div className='flex justify-center items-center flex-row'>
                        <div className='flex justify-center items-center text-6xl'>
                            Fitness
                        </div>
                        <div className='w-1/4 '>
                            <img src='https://ik.imagekit.io/wgp1xe3yu/Home/pexels-anush-1431282-Photoroom.png?updatedAt=1721926362607' />
                        </div>
                    </div>
                </div>
            </div>
            <div className=''>
                <FlippingCard/>
            </div>
            <div className='flex justify-center items-center flex-col w-full'>
                <div>
                    <h1 className='text-3xl font-bold text-center mt-10'>Welcome to</h1>
                </div>
                <div className='flex felx-row items-center h-52 w-full justify-evenly'>
                    <div className=' h-32 w-1/4 bg-primary rounded-s rounded-e hover:bg-slate-300 hover:transition-colors'>
                        hello
                    </div>
                    <div className='h-32 w-1/4 bg-primary rounded-s rounded-e hover:bg-slate-300 hover:transition-colors'>
                        hello
                    </div>
                    <div className='h-32 w-1/4 bg-primary rounded-s rounded-e hover:bg-slate-300 hover:transition-colors'>
                        hello
                    </div>
                </div>
                <div className='flex felx-row items-center h-52 w-full justify-evenly -mt-8'>
                    <div className=' h-32 w-1/4 bg-primary rounded-s rounded-e hover:bg-slate-300 hover:transition-colors'>
                        hello
                    </div>
                    <div className='h-32 w-1/4 bg-primary rounded-s rounded-e hover:bg-slate-300 hover:transition-colors'>
                        hello
                    </div>
                    <div className='h-32 w-1/4 bg-primary rounded-s rounded-e hover:bg-slate-300 hover:transition-colors'>
                        hello
                    </div>
                </div>
                <div className='flex felx-row items-center h-52 w-full justify-evenly -mt-8'>
                    <div className=' h-32 w-1/4 bg-primary rounded-s rounded-e hover:bg-slate-300 hover:transition-colors'>
                        hello
                    </div>
                    <div className='h-32 w-1/4 bg-primary rounded-s rounded-e hover:bg-slate-300 hover:transition-colors'>
                        hello
                    </div>
                    <div className='h-32 w-1/4 bg-primary rounded-s rounded-e hover:bg-slate-300 hover:transition-colors'>
                        hello
                    </div>
                </div>
                
            </div>
            <Footer />
        </>
    )
}

export default Home