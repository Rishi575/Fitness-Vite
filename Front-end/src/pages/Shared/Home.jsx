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
import Categories from '@/components/ui/categories'
import BlogPosts from '@/components/ui/blogcard'

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
                <div className=''>
                    <Categories/>
                </div>
                <div>
                    <BlogPosts/>
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