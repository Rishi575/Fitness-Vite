import Footer from '@/components/Shared/Footer'
import FlippingCard from '@/components/ui/FlipingCards'
import React from 'react'
import '@/assets/css/Home.css'
import Asta from '@/assets/images/asta.png'
import BlurIn from '@/components/magicui/blur-in'
import Navbar from '@/components/Shared/Navbar'

const Home = () => {
    return (
        <>
        <Navbar/>
            <div className='relative mt-16'>
                <img src={Asta} alt="Background" className="w-full rounded-xl" />
                <div className="absolute top-0 left-0 right-0 p-4 bg-opacity-75 h-full w-6/12 backdrop-blur-md flex justify-center items-center ">
                    <p className='flex justify-center items-center font-bold text-foreground font-serif text-3xl'>Build Your Body And Soul<br/> Thats the Way of....!<br/> Black Wolf...!</p>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <div className='card-Slide'>
                    <div className='CS1'>
                        {/* <div className='img'> */}
                        <div className='font-bold text-3xl'>GET SET GO...!</div>
                        <div className='font-bold text-lg'>Fitness...!</div>
                        {/* <img src={Fit} /> */}
                        {/* </div> */}

                    </div>
                </div>
            </div>
            <div className=''>
                <FlippingCard />
            </div>
            <div className='flex justify-center items-center flex-col w-full'>
                <div>
                    <h1 className='text-3xl font-bold text-center mt-10'>Select by Categories</h1>
                </div>
                <div className='flex felx-row items-center h-52 w-full justify-evenly'>
                    <div className=' h-32 w-1/4 bg-primary rounded-s rounded-e flex justify-center item-center hover:bg-slate-300 hover:transition-colors font-serif text-lg'>
                        YOGA
                    </div>
                    <div className=' h-32 w-1/4 bg-primary rounded-s rounded-e flex justify-center item-center hover:bg-slate-300 hover:transition-colors font-serif text-lg'>
                        FITNESS
                    </div>
                    <div className=' h-32 w-1/4 bg-primary rounded-s rounded-e flex justify-center item-center hover:bg-slate-300 hover:transition-colors font-serif text-lg'>
                        BODY FITNESS
                    </div>
                </div>
                <div className='flex felx-row items-center h-52 w-full justify-evenly -mt-8'>
                    <div className=' h-32 w-1/4 bg-primary rounded-s rounded-e flex justify-center item-center hover:bg-slate-300 hover:transition-colors font-serif text-lg'>
                        LAUGHING THERAPY
                    </div>
                    <div className=' h-32 w-1/4 bg-primary rounded-s rounded-e flex justify-center item-center hover:bg-slate-300 hover:transition-colors font-serif text-lg'>
                        HEALTHY FOOD
                    </div>
                    <div className=' h-32 w-1/4 bg-primary rounded-s rounded-e flex justify-center item-center hover:bg-slate-300 hover:transition-colors font-serif text-lg'>
                        NUTRITION
                    </div>
                </div>
                {/* <div className='flex felx-row items-center h-52 w-full justify-evenly -mt-8'>
                    <div className=' h-32 w-1/4 bg-primary rounded-s rounded-e flex justify-center item-center hover:bg-slate-300 hover:transition-colors font-serif text-lg'>
                        hello
                    </div>
                    <div className=' h-32 w-1/4 bg-primary rounded-s rounded-e flex justify-center item-center hover:bg-slate-300 hover:transition-colors font-serif text-lg'>
                        hello
                    </div>
                    <div className=' h-32 w-1/4 bg-primary rounded-s rounded-e flex justify-center item-center hover:bg-slate-300 hover:transition-colors font-serif text-lg'>
                        hello
                    </div>
                </div> */}

            </div>
            <Footer />
        </>
    )
}

export default Home