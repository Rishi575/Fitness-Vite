import BoxReveal from '@/components/magicui/box-reveal';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react'


const segmentationData = [
    { c1: 'Physical Activities', c2: '800', c3: '#363636', color: '#535353' },
    { c1: 'Workout Session', c2: '441', c3: '#818bb1', color: '#595f77' },
    { c1: 'Diet Habit', c2: '233', c3: '#2c365d', color: '#232942' },
    { c1: 'Suplymentes', c2: '126', c3: '#334ed8', color: '#2c3051' },
];

const UserWorkout = () => {
   
    return (
        <div className='flex justify-center items-center bg-transperent h-5/6 w-11/12 absolute bottom-0 overflow-hidden'>
            <div className='flex justify-center items-center flex-col mr-96 -mt-44'>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <p className="text-[3.5rem] font-semibold">
                        Yet To Be Complete<span className="text-[#5046e6]">.</span>
                    </p>
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <h2 className="mt-[.5rem] text-[1rem]">
                        Today's{" "}
                        <span className="text-[#5046e6]">Task to Complete</span>
                    </h2>
                </BoxReveal>
                {/* Table */}
               

                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    {/* Hello */}
                </BoxReveal>
                <BoxReveal boxColor={"#5046e6"} duration={0.5}>
                    <Button className="mt-[1.6rem] bg-[#5046e6]">Explore</Button>
                </BoxReveal>
            </div>
            <div className='flex shade absolute right-10 rounded-xl h-2/3'>
                <Workout />
            </div>
        </div>
    )
}

function Workout() {
    return (
        <div className="p-4 h-full">
            <div className="flex justify-between items-center">
                <div className="text-foreground font-bold font-serif">Workout Session</div>
            </div>
            <div className="mt-3 text-foreground">All users</div>
            {segmentationData.map(({ c1, c2, c3, color }) => (
                <div className="flex items-center" key={c1}>
                    <div
                        className="w-2 h-2 rounded-full"
                        style={{
                            background: color,
                        }}
                    />
                    <div className="ml-2" style={{ color }}>
                        {c1}
                    </div>
                    <div className="flex-grow" />
                    <div className="" style={{ color }}>
                        {c2}
                    </div>
                    <div className=' absolute right-28 font-bold'>------</div>
                    <div className="ml-2 w-12 card-stack-border" />
                    <div className="ml-2 h-8">
                        <div
                            className="w-20 h-28 rounded-lg overflow-hidden"
                            style={{
                                background: c3,
                            }}
                        >
                            {c1 === 'Other' && (
                                <img src="https://assets.codepen.io/3685267/res-react-dash-user-card.svg" alt="" />
                            )}
                        </div>
                    </div>
                </div>
            ))}

            <div className="flex mt-3 px-3 items-center justify-between bg-details rounded-xl w-36 h-12">
                <div className="bg-foreground rounded-s rounded-e h-8 w-20  flex text-background justify-center items-center font-serif">Details</div>
            </div>
        </div>
    );
}

export default UserWorkout