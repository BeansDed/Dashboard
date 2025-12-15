import React, { useState } from 'react';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  Legend
} from 'recharts';

const data = [
  { name: 'Jan', current: 4000, previous: 2400 },
  { name: 'Feb', current: 3000, previous: 1398 },
  { name: 'Mar', current: 2000, previous: 9800 },
  { name: 'Apr', current: 2780, previous: 3908 },
  { name: 'May', current: 1890, previous: 4800 },
  { name: 'Jun', current: 2390, previous: 3800 },
  { name: 'Jul', current: 3490, previous: 4300 },
  { name: 'Aug', current: 4000, previous: 2400 },
  { name: 'Sep', current: 3000, previous: 1398 },
  { name: 'Oct', current: 2000, previous: 9800 },
  { name: 'Nov', current: 2780, previous: 3908 },
  { name: 'Dec', current: 1890, previous: 4800 },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-deep-800/90 backdrop-blur-md border border-white/10 p-4 rounded-lg shadow-xl text-white">
        <p className="font-bold mb-2">{label}</p>
        <div className="flex flex-col gap-1">
          <p className="text-sm text-cyan-400">
            Current: <span className="font-bold">${payload[0].value.toLocaleString()}</span>
          </p>
          <p className="text-sm text-purple-400">
            Previous: <span className="font-bold">${payload[1].value.toLocaleString()}</span>
          </p>
        </div>
      </div>
    );
  }
  return null;
};

const MainChart = () => {
  const [timeRange, setTimeRange] = useState('Year');

  return (
    <div className="glass-panel p-6 h-[500px] flex flex-col">
      <div className="flex justify-between items-center mb-8">
        <div>
          <h2 className="text-xl font-bold text-white">Revenue Overview</h2>
          <p className="text-white/50 text-sm">Compare revenue performance over time</p>
        </div>
        
        <div className="flex bg-deep-900/50 p-1 rounded-lg backdrop-blur-sm border border-white/5">
          {['Week', 'Month', 'Year'].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-4 py-1.5 text-sm rounded-md transition-all ${
                timeRange === range 
                  ? 'bg-white/10 text-white shadow-sm' 
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 w-full min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorCurrent" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22d3ee" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#22d3ee" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPrevious" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#c084fc" stopOpacity={0.3}/>
                <stop offset="95%" stopColor="#c084fc" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(255,255,255,0.05)" vertical={false} />
            <XAxis 
              dataKey="name" 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }}
              dy={10}
            />
            <YAxis 
              axisLine={false} 
              tickLine={false} 
              tick={{ fill: 'rgba(255,255,255,0.4)', fontSize: 12 }}
              tickFormatter={(value) => `$${value/1000}k`}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend wrapperStyle={{ paddingTop: '20px' }} />
            <Area 
              type="monotone" 
              dataKey="current" 
              stroke="#22d3ee" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorCurrent)" 
              name="Current Period"
            />
            <Area 
              type="monotone" 
              dataKey="previous" 
              stroke="#c084fc" 
              strokeWidth={3}
              fillOpacity={1} 
              fill="url(#colorPrevious)" 
              name="Previous Period"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default MainChart;
