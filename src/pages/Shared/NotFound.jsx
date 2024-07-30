import Meteors from '@/components/magicui/meteors'
import React from 'react'
import { Link } from 'react-router-dom'
import Suku from '@/assets/images/sukuna.gif'
import Madara from '@/assets/images/madara.mp4'

const NotFound = () => {
  return (
    <div className="relative flex h-screen w-screen flex-col items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl z-50">
    <div><img src={Suku} className=''/></div>
    {/* <video width="600" controls>
                <source src={Madara} type="video/mp4" />
            </video> */}
      <Meteors number={30} />
      <span className="font-serif absolute pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-red-500 to-red-00/80 bg-clip-text text-center text-8xl font-semibold leading-none text-white dark:from-white dark:to-slate-900/10">
        Page Not found !
      </span>
      <Link to='/' className='absolute bottom-20 text-primary font-bold'>Go to Home </Link>
    </div>
  )
}

export default NotFound