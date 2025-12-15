import React from 'react';
import { LineChart, Line, ResponsiveContainer } from 'recharts';
import { Users, DollarSign, Activity, MousePointerClick, ArrowUp, ArrowDown } from 'lucide-react';

const data1 = [
  { value: 400 }, { value: 300 }, { value: 500 }, { value: 400 }, { value: 600 }, { value: 500 }, { value: 700 }
];
const data2 = [
  { value: 300 }, { value: 450 }, { value: 400 }, { value: 600 }, { value: 500 }, { value: 700 }, { value: 650 }
];
const data3 = [
  { value: 200 }, { value: 100 }, { value: 300 }, { value: 250 }, { value: 150 }, { value: 350 }, { value: 200 }
];
const data4 = [
  { value: 500 }, { value: 600 }, { value: 550 }, { value: 700 }, { value: 650 }, { value: 800 }, { value: 750 }
];

const StatsCard = ({ title, value, change, isPositive, icon: Icon, data, color }) => {
  return (
    <div className="glass-card p-6 relative overflow-hidden group">
      <div className="flex justify-between items-start z-10 relative">
        <div>
          <p className="text-white/60 text-sm font-medium mb-1">{title}</p>
          <h3 className="text-2xl font-bold text-white mb-2">{value}</h3>
          <div className={`flex items-center text-sm ${isPositive ? 'text-emerald-400' : 'text-rose-400'}`}>
            {isPositive ? <ArrowUp size={16} className="mr-1" /> : <ArrowDown size={16} className="mr-1" />}
            <span className="font-medium">{change}</span>
            <span className="text-white/40 ml-1.5">vs last month</span>
          </div>
        </div>
        <div className={`p-3 rounded-lg bg-gradient-to-br ${color} bg-opacity-20`}>
          <Icon className="text-white w-6 h-6" />
        </div>
      </div>
      
      {/* Sparkline Background */}
      <div className="absolute bottom-0 left-0 right-0 h-16 opacity-30 group-hover:opacity-50 transition-opacity">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <Line 
              type="monotone" 
              dataKey="value" 
              stroke="#fff" 
              strokeWidth={2} 
              dot={false} 
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const StatsCards = () => {
  const stats = [
    {
      title: "Total Users",
      value: "24,532",
      change: "12.5%",
      isPositive: true,
      icon: Users,
      data: data1,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Total Revenue",
      value: "$45,231",
      change: "8.2%",
      isPositive: true,
      icon: DollarSign,
      data: data2,
      color: "from-violet-500 to-purple-500"
    },
    {
      title: "Bounce Rate",
      value: "42.3%",
      change: "2.1%",
      isPositive: false,
      icon: Activity,
      data: data3,
      color: "from-pink-500 to-rose-500"
    },
    {
      title: "New Visits",
      value: "12,342",
      change: "5.4%",
      isPositive: true,
      icon: MousePointerClick,
      data: data4,
      color: "from-amber-500 to-orange-500"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat, index) => (
        <StatsCard key={index} {...stat} />
      ))}
    </div>
  );
};

export default StatsCards;
