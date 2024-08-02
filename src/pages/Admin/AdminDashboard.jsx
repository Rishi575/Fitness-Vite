import React from 'react'
import NumberTicker from "@/components/magicui/number-ticker";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';

const AdminDashboard = () => {
  return (
    <div className='flex justify-center items-center bg-transperent h-5/6 w-11/12 absolute bottom-0 overflow-y-auto'>
      <div>
        <Cards />
      </div>
      <div>
      </div>
    </div>
  )
}

function Cards() {
  return (
    <>
      <div className='w-full h-24 bg-transperent absolute top-4 flex-row flex justify-center item-center gap-24 left-0'>
        <div className='shade w-3/12 h-24 bg-background rounded-s rounded-e flex justify-center items-center font-serif font-bold text-lg'>
          <div className=' flex flex-row'>
            <img src='https://fitnesszonefit.in/wp-content/uploads/2023/03/Unisex-Personal-Trainer-1-1.svg' />
            <div className='text-foreground mt-8'> <NumberTicker value={1000} className={'font-sans text-lg'} />+ User's</div>
          </div>
        </div>
        <div className='shade w-3/12 h-24 bg-background rounded-s rounded-e flex justify-center items-center font-serif font-bold text-lg'>
          <div className='text-foreground flex flex-row'>
            <img src="https://fitnesszonefit.in/wp-content/uploads/2023/03/Body-Building.svg" className='scale-150 -mb-5 mr-7' />
            <NumberTicker value={500} className={'font-sans text-lg'} /> + Trainer's
          </div>
        </div>
        <div className='shade w-3/12 h-24 bg-background rounded-s rounded-e flex justify-center items-center font-serif font-bold text-lg'>
          <div className='text-foreground flex flex-row justify-center items-center'>
            <img src="https://fitnesszonefit.in/wp-content/uploads/2023/03/Grossfit-Training.svg" className='scale-105 mr-3' />
            <NumberTicker value={1500} className={'font-sans text-lg '} />+ Staff 's
          </div>
        </div>
      </div>
    </>
  )
}

function Segmentation() {
  return (
    <div className="p-4 h-full">
      <div className="flex justify-between items-center">
        <div className="text-black font-bold">Segmentation</div>
      </div>
      <div className="mt-3 text-black">All users</div>
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
        <div className="bg-white rounded-2xl h-7 w-20 flex text-black justify-center">Details</div>
      </div>
    </div>
  );
}

function DCards() {
  return (
    <>
      <div className='flex justify-center items-center flex-row h-1/2 w-full bg-transperent gap-24'>
        <div className='w-36 h-36 bg-slate-400 rounded-s rounded-e'>
          <div className='flex justify-center items-center'>
            <img src='https://fitnesszonefit.in/wp-content/uploads/2023/03/biometric-attendance.svg' className='absolute top-16' />
          </div>
          <div className='font-bold flex justify-center items-center absolute bottom-48 left-28 text-black'>
            Biometric Attendance

          </div>
        </div>
        <div className='w-36 h-36 bg-slate-400 rounded-s rounded-e'>
          <div className='flex justify-center items-center'>
            <img src='https://fitnesszonefit.in/wp-content/uploads/2023/03/parking-facility.svg' className='absolute top-16' />
          </div>
          <div className='font-bold flex justify-center items-start absolute bottom-48 text-black'>
            Parking Facility
          </div>
        </div>
        <div className='w-36 h-36 bg-slate-400 rounded-s rounded-e'>
          <div className='flex justify-center items-center'>
            <img src='https://fitnesszonefit.in/wp-content/uploads/2023/03/diet-1.svg' className='absolute top-16' />
          </div>
          <div className='font-bold flex justify-center items-start absolute bottom-48 text-black'>
            Diet Selection

          </div>
        </div>
      </div>
      <div className='flex justify-center items-center flex-row h-1/2 w-full bg-transperent gap-24'>
        <div className='w-36 h-36 bg-slate-400 rounded-s rounded-e'>
          <div className='flex justify-center items-center'>
            <img src='https://fitnesszonefit.in/wp-content/uploads/2023/03/sports-nutrition.svg' className='absolute bottom-10' />
          </div>
          <div className='font-bold flex justify-center items-center absolute bottom-0 left-28 text-black'>
            Sports Nutrition

          </div>
        </div>
        <div className='w-36 h-36 bg-slate-400 rounded-s rounded-e'>
          <div className='flex justify-center items-center'>
            <img src='https://fitnesszonefit.in/wp-content/uploads/2023/03/Unisex-Personal-Trainer-1-1.svg' className='absolute bottom-10' />
          </div>
          <div className='font-bold flex justify-center items-start absolute bottom-0 text-black'>
            Personal Trainers
          </div>
        </div>
        <div className='w-36 h-36 bg-slate-400 rounded-s rounded-e'>
          <div className='flex justify-center items-center'>
            <img src='https://fitnesszonefit.in/wp-content/uploads/2023/03/Weight-Training.png' className='absolute bottom-10' />
          </div>
          <div className='font-bold flex justify-center items-start absolute bottom-0 text-black'>
            All Imported Machineries

          </div>
        </div>
      </div>

    </>
  )
}

export default AdminDashboard