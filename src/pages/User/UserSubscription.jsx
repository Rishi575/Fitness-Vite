import { CoolMode } from '@/components/magicui/cool-mode'
import { NeonGradientCard } from '@/components/magicui/neon-gradient-card'
import { Button } from '@/components/ui/button'
import React from 'react'

const UserSubscription = () => {
  return (
    <div className='flex justify-center items-center flex-row gap-20 bg-transperent h-5/6 w-11/12 absolute bottom-0 overflow-y-auto'>
      <div className='flex justify-center items-center'>
        <NeonGradientCard className="w-64 h-96 flex items-center justify-center text-center">
          <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            Three Month Package
          </span>
          <div className='flex justify-center items-center font-serif text-foreground text-xl absolute top-28'>
            Free Supliments For 2 week's<br />Offers on First Order <br /> Free Delivery for First 2 Order's
          </div>
          <div className='flex justify-center text-center items-center absolute right-14 top-72 text-2xl font-serif bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-transparent'>
            Only at 2500
          </div>
          <div className='flex justify-center items-center h-8 w-24 absolute right-20 bottom-5 bg-foreground rounded-s rounded-e shadow'>
            <CoolMode>
              <Button className=' z-10 h-20 w-44 whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]'>Subscribe</Button>
            </CoolMode>
          </div>
        </NeonGradientCard>
      </div>
      <div className='flex justify-center items-center'>
        <NeonGradientCard className="w-64 h-96 flex items-center justify-center text-center">
          <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            Six Month Package
          </span>
          <div className='flex justify-center items-center font-serif text-foreground text-xl absolute top-28'>
            Free Supliments For First Month<br />Offers on First Ten Order's <br /> Free Delivery for First 20 Order's
          </div>
          <div className='flex justify-center text-center items-center absolute right-14 top-72 text-2xl font-serif bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-transparent'>
            Only at 5000
          </div>
          <div className='flex justify-center items-center h-8 w-24 absolute right-20 bottom-5 bg-foreground rounded-s rounded-e shadow'>
            <CoolMode>
              <Button className=' z-10 h-20 w-44 whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]'>Subscribe</Button>
            </CoolMode>
          </div>
        </NeonGradientCard>
      </div>
      <div className='flex justify-center items-center'>
        <NeonGradientCard className="w-64 h-96 flex items-center justify-center text-center">
          <span className="pointer-events-none z-10 h-full whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-3xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]">
            Yearly Package
          </span>
          <div className='flex justify-center items-center font-serif text-foreground text-xl absolute top-28'>
            Free Supliments For 2 week's<br />Offers on First Order <br /> Free Delivery for First 2 Order's
          </div>
          <div className='flex justify-center text-center items-center absolute right-14 top-72 text-2xl font-serif bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-transparent'>
            Only at 7599
          </div>
          <div className='flex justify-center items-center h-8 w-24 absolute right-20 bottom-5 bg-foreground rounded-s rounded-e shadow'>
            <CoolMode>
              <Button className=' z-10 h-20 w-44 whitespace-pre-wrap bg-gradient-to-br from-[#ff2975] from-35% to-[#00FFF1] bg-clip-text text-center text-xl font-bold leading-none tracking-tighter text-transparent dark:drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)]'>Subscribe</Button>
            </CoolMode>
          </div>
        </NeonGradientCard>
      </div>

      


    </div>
  )
}

export default UserSubscription