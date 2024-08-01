import React from 'react'
import NumberTicker from "@/components/magicui/number-ticker";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import Globe from '@/components/magicui/globe';



const graphData = [
  'Nov',
  'Dec',
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'June',
  'July',
].map((i) => {
  const revenue = 500 + Math.random() * 2000;
  const expectedRevenue = Math.max(revenue + (Math.random() - 0.5) * 2000, 0);
  return {
    name: i,
    revenue,
    expectedRevenue,
    sales: Math.floor(Math.random() * 500),
  };
});

const UserDashboard = () => {
  return (
    <div className='flex justify-center items-center bg-transperent h-5/6 w-full absolute bottom-0 overflow-hidden'>
      <div>
        <Cards />
      </div>
      <div className='flex flex-row justify-center items-center w-full mt-28'>
        <div className='w-3/5 border-shadow border-2 rounded-xl absolute left-20'>
          <Graph />
        </div>
        <div className='flex  justify-center items-center overflow-hidden'>
            <Globe className="flex -mr-36 mt-28" />
        </div>
        
      </div>
    </div>
  )
}

function Graph() {
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="rounded-xl overflow-hidden tooltip-head bg-gray-500">
          <div className="flex items-center justify-between p-2">
            <div className="text-black">Your Activity</div>
          </div>
          <div className="tooltip-body text-center p-3">
            <div className="font-bold text-black">${payload[0].value.toFixed(1)}</div>
            <div className="">Based On Your {payload[0].payload.sales} Session</div>
          </div>
        </div>
      );
    }

    return null;
  };

  return (
    <div className="flex p-4 h-full flex-col">
      <div>
        <div className="flex items-center">
          <div className="font-bold text-foreground">Your Analists</div>
          <div className="flex-grow" />
          <div className="ml-2 text-foreground">Last 9 Months</div>
          <div className="ml-6 w-5 h-5 flex justify-center items-center rounded-full icon-background text-foreground">
          </div>
        </div>
        <div className="font-bold ml-5 text-foreground">Nov - July</div>
      </div>

      <div className="flex-grow">
        <ResponsiveContainer width="100%" height={250}>
          <LineChart width={500} height={300} data={graphData}>
            <defs>
              <linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="0">
                <stop stopColor="#6B8DE3" />
                <stop offset="1" stopColor="#7D1C8D" />
              </linearGradient>
            </defs>
            <CartesianGrid horizontal={false} strokeWidth="6" stroke="#252525" />
            <XAxis dataKey="name" axisLine={false} tickLine={false} tickMargin={10} />
            <YAxis axisLine={false} tickLine={false} tickMargin={10} />
            <Tooltip content={<CustomTooltip />} cursor={false} />
            <Line
              activeDot={false}
              type="monotone"
              dataKey="expectedRevenue"
              stroke="#242424"
              strokeWidth="3"
              dot={false}
              strokeDasharray="8 8"
            />
            <Line
              type="monotone"
              dataKey="revenue"
              stroke="url(#paint0_linear)"
              strokeWidth="4"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

function Cards() {
  return (
    <>
      <div className='w-full h-24 bg-transperent absolute top-4 flex-row flex justify-center item-center gap-24 left-0'>
        <div className='w-3/12 h-24 border-2 rounded-s rounded-e flex justify-center items-center font-serif font-bold text-lg'>
          <div className=' flex flex-row'>
            <img src='https://fitnesszonefit.in/wp-content/uploads/2023/03/Unisex-Personal-Trainer-1-1.svg' />
            <div className='text-foreground mt-8'> <NumberTicker value={1500} className={'font-sans text-lg'} /> + Trainer's</div>
          </div>
        </div>
        <div className='w-3/12 h-24 border-shadow border-2 rounded-s rounded-e flex justify-center items-center font-serif font-bold text-lg'>
          <div className='text-foreground flex flex-row'>
            <img src="https://fitnesszonefit.in/wp-content/uploads/2023/03/Body-Building.svg" className='scale-150 -mb-5 mr-7' />
            <NumberTicker value={1500} className={'font-sans text-lg'} /> + Clients's
          </div>
        </div>
        <div className='w-3/12 h-24 border-shadow border-2 rounded-s rounded-e flex justify-center items-center font-serif font-bold text-lg'>
          <div className='text-foreground flex flex-row justify-center items-center'>
            <img src="https://fitnesszonefit.in/wp-content/uploads/2023/03/Grossfit-Training.svg" className='scale-105 mr-3' />
            <NumberTicker value={250} className={'font-sans text-lg'} /> + Gyms in India
          </div>
        </div>
      </div>
    </>
  )
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

export default UserDashboard