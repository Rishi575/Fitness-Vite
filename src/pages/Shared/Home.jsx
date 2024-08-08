import Footer from '@/components/Shared/Footer'
import FlippingCard from '@/components/ui/FlipingCards'
import React from 'react'
import '@/assets/css/Home.css'
import Asta from '@/assets/images/asta.png'
import BlurIn from '@/components/magicui/blur-in'
import Navbar from '@/components/Shared/Navbar'
import Carousel from '@/components/ui/carousel'
import Timeline from '@/components/ui/timeline'
import Swip from '@/components/ui/swiper'

const Home = () => {
    return (
        <>
            <Navbar />
            <div className='flex justify-center items-center mt-5 mr-24'>
                <Carousel />
            </div>
            <div className='mt-16'>
                <Swip/>
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
                <div className=' mt-10 w-11/12'>
                    <Timeline />
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home