import React, { useState } from 'react';
import { 
  LayoutDashboard, 
  Users, 
  Settings, 
  BarChart2, 
  LogOut, 
  ChevronLeft, 
  ChevronRight,
  PieChart,
  Activity
} from 'lucide-react';
import { cn } from '../lib/utils';

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', active: true },
    { icon: Users, label: 'Users', active: false },
    { icon: Activity, label: 'Analytics', active: false },
    { icon: PieChart, label: 'Reports', active: false },
    { icon: Settings, label: 'Settings', active: false },
  ];

  return (
    <aside 
      className={cn(
        "fixed left-4 top-4 bottom-4 glass-panel transition-all duration-300 flex flex-col z-50",
        collapsed ? "w-20" : "w-64"
      )}
    >
      <div className="h-20 flex items-center justify-center relative border-b border-white/10">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-indigo-500 flex items-center justify-center">
            <BarChart2 className="w-5 h-5 text-white" />
          </div>
          {!collapsed && (
            <span className="font-bold text-xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-white/70">
              Admin
            </span>
          )}
        </div>
        
        <button 
          onClick={() => setCollapsed(!collapsed)}
          className="absolute -right-3 top-1/2 -translate-y-1/2 w-6 h-6 rounded-full bg-indigo-500 text-white flex items-center justify-center hover:bg-indigo-400 shadow-lg border border-white/20"
        >
          {collapsed ? <ChevronRight size={14} /> : <ChevronLeft size={14} />}
        </button>
      </div>

      <nav className="flex-1 py-6 px-3 flex flex-col gap-2">
        {menuItems.map((item, index) => (
          <a
            key={index}
            href="#"
            className={cn(
              "sidebar-link group relative",
              item.active && "active",
              collapsed && "justify-center px-0"
            )}
          >
            <item.icon className={cn("w-5 h-5 transition-transform group-hover:scale-110", item.active ? "text-white" : "text-white/60")} />
            {!collapsed && (
              <span className="ml-3 font-medium">{item.label}</span>
            )}
            
            {/* Tooltip for collapsed state */}
            {collapsed && (
              <div className="absolute left-full ml-4 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 pointer-events-none whitespace-nowrap z-50">
                {item.label}
              </div>
            )}
          </a>
        ))}
      </nav>

      <div className="p-3 border-t border-white/10">
        <a href="#" className={cn("sidebar-link text-red-300 hover:text-red-100 hover:bg-red-500/20", collapsed && "justify-center px-0")}>
          <LogOut className="w-5 h-5" />
          {!collapsed && <span className="ml-3">Logout</span>}
        </a>
      </div>
    </aside>
  );
};

export default Sidebar;
