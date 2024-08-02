import React from 'react'

import { Button } from '@/components/ui/button'
import BoxReveal from '@/components/magicui/box-reveal'

const AdminTrainers = () => {
    return (
        <>
            <div className='absolute top-28'>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <p className="text-[3.5rem] font-semibold font-serif">
                        Trainer Detail's<span className="text-[#5046e6]">.</span>
                    </p>
                </BoxReveal>
            </div>
        </>
    )
}

export default AdminTrainers