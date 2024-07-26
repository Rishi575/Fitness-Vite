import React from 'react';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';


export const UserDashboard = () => {
  
  const CustomTooltip = () => (
    <div className="rounded-xl overflow-hidden tooltip-head bg-gray-500">
      <div className="flex items-center justify-between p-2">
        <div className="">Progress</div>
        {/* <Icon path="res-react-dash-options" className="w-2 h-2" /> */}
      </div>
      <div className="tooltip-body text-center p-3">
        <div className="">Your Workout Progress</div>
        <div className="text-background font-bold">Good Nice</div>
      </div>
    </div>
  );

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

  return (
    <div className="w-4/6 h-1/4 absolute top-5 left-5 rounded-s rounded-e">
      <div className="rounded-lg bg-primary sm:h-80 h-60">
        <div className="flex p-4 h-full flex-col">
          <div className="">
            <div className="flex items-center">
              <div className="font-bold text-background">Your Work Summary</div>
              <div className="flex-grow" />

              {/* <Icon path="res-react-dash-graph-range" className="w-4 h-4" /> */}
              <div className="ml-2 text-background">Last 9 Months</div>
              <div className="ml-6 w-5 h-5 flex justify-center items-center rounded-full icon-background text-background">
                ?
              </div>
            </div>
            <div className="font-bold ml-5 text-background">Nov - July</div>
          </div>

          <div className="flex-grow">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart width={500} height={300} data={graphData}>
                <defs>
                  <linearGradient id="paint0_linear" x1="0" y1="0" x2="1" y2="0">
                    <stop stopColor="#6B8DE3" />
                    <stop offset="1" stopColor="#7D1C8D" />
                  </linearGradient>
                </defs>
                <CartesianGrid
                  horizontal={false}
                  strokeWidth="6"
                  stroke="#252525"
                />
                <XAxis
                  dataKey="name"
                  axisLine={false}
                  tickLine={false}
                  tickMargin={10}
                />
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
      </div>
    </div>
  );
};

export default UserDashboard;