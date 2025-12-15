import { useState } from 'react'
import Sidebar from './components/Sidebar'
import StatsCards from './components/StatsCards'
import MainChart from './components/MainChart'
import { Bell, Search, User } from 'lucide-react'

function App() {
  return (
    <div className="flex min-h-screen relative overflow-hidden bg-app-bg font-sans text-white selection:bg-indigo-500/30">
      {/* Background Gradients */}
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-600/20 blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-blue-600/20 blur-[120px]" />
        <div className="absolute top-[20%] right-[20%] w-[20%] h-[20%] rounded-full bg-indigo-500/10 blur-[80px]" />
      </div>

      <Sidebar />

      <main className="flex-1 ml-20 md:ml-24 lg:ml-24 p-4 md:p-8 transition-all duration-300">
        {/* Header */}
        <header className="flex justify-between items-center mb-8 glass-panel p-4">
          <div className="flex items-center gap-4 w-1/3">
            <div className="relative w-full max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-white/40 w-4 h-4" />
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-full bg-white/5 border border-white/10 rounded-lg py-2 pl-10 pr-4 text-sm text-white placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all"
              />
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="relative p-2 rounded-lg hover:bg-white/10 transition-colors text-white/80 hover:text-white">
              <Bell className="w-5 h-5" />
              <span className="absolute top-2 right-2 w-2 h-2 rounded-full bg-red-500 border-2 border-[#1e1b4b]"></span>
            </button>
            
            <div className="flex items-center gap-3 pl-4 border-l border-white/10">
              <div className="text-right hidden md:block">
                <p className="text-sm font-medium">Alex Morgan</p>
                <p className="text-xs text-white/50">Admin</p>
              </div>
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-400 to-purple-400 p-0.5 cursor-pointer">
                <div className="w-full h-full rounded-full bg-black/20 backdrop-blur-sm flex items-center justify-center">
                  <User className="w-5 h-5 text-white" />
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="flex flex-col gap-6">
          <div className="mb-2">
            <h1 className="text-2xl font-bold mb-1">Dashboard Overview</h1>
            <p className="text-white/50 text-sm">Welcome back, here's what's happening today.</p>
          </div>
          
          <StatsCards />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <MainChart />
            </div>
            
            <div className="glass-panel p-6">
              <h2 className="text-xl font-bold text-white mb-6">Recent Activity</h2>
              <div className="space-y-6">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div key={item} className="flex gap-4 items-start">
                    <div className="w-2 h-full mt-1.5 flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-400 shadow-[0_0_10px_rgba(129,140,248,0.5)]"></div>
                      {item !== 5 && <div className="w-0.5 h-12 bg-white/10 mt-1"></div>}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-white">New user registered</p>
                      <p className="text-xs text-white/50 mt-1">2 minutes ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App
