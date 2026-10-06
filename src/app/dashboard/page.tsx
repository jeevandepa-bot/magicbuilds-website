import { Activity, ArrowUpRight, Cpu, Server, Users } from "lucide-react";

export default function DashboardOverview() {
  const stats = [
    { name: "Total Users", value: "8,432", change: "+12.5%", icon: Users },
    { name: "Active Subscriptions", value: "1,204", change: "+4.1%", icon: Activity },
    { name: "API Requests", value: "2.4M", change: "+24.8%", icon: Cpu },
    { name: "Server Uptime", value: "99.99%", change: "+0.0%", icon: Server },
  ];

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-white mb-2">Overview</h1>
        <p className="text-gray-400">Welcome back! Here's what's happening with your projects today.</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div key={stat.name} className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 hover:border-gold-500/20 transition-colors">
              <div className="flex items-center justify-between mb-4">
                <div className="p-2 rounded-lg bg-gold-500/10 text-gold-500">
                  <Icon className="w-5 h-5" />
                </div>
                <div className="flex items-center gap-1 text-green-400 text-sm font-medium">
                  {stat.change}
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
              <p className="text-gray-400 text-sm font-medium mb-1">{stat.name}</p>
              <h3 className="text-2xl sm:text-3xl font-bold text-white">{stat.value}</h3>
            </div>
          );
        })}
      </div>

      {/* Main Charts Area (Mocked UI) */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        <div className="lg:col-span-2 p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5 overflow-hidden">
          <div className="flex items-center justify-between mb-6 sm:mb-8">
            <h3 className="font-bold text-white text-sm sm:text-base">Revenue Analytics</h3>
            <select className="bg-black border border-white/10 rounded-lg px-2 py-1 sm:px-3 sm:py-1.5 text-xs sm:text-sm text-gray-400 focus:outline-none">
              <option>Last 30 Days</option>
              <option>This Year</option>
            </select>
          </div>
          {/* Mock Chart visually constructed with divs */}
          <div className="h-48 sm:h-64 flex items-end justify-between gap-1 sm:gap-2 px-1 sm:px-2">
            {[40, 25, 60, 45, 80, 55, 90, 75, 100, 65, 85, 70].map((height, i) => (
              <div key={i} className="w-full bg-white/5 rounded-t-sm sm:rounded-t-md relative group hover:bg-gold-500/20 transition-colors" style={{ height: `${height}%` }}>
                <div className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 bg-black text-[10px] sm:text-xs font-bold py-0.5 px-1 sm:py-1 sm:px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity border border-white/10 text-gold-400">
                  ${height}k
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl bg-white/[0.02] border border-white/5">
          <h3 className="font-bold text-white mb-6">Recent Activity</h3>
          <div className="space-y-6">
            {[
              { title: "New user registered", time: "2 minutes ago", type: "user" },
              { title: "Database backup completed", time: "1 hour ago", type: "system" },
              { title: "Payment processed: $49.00", time: "3 hours ago", type: "billing" },
              { title: "API rate limit reached", time: "5 hours ago", type: "alert" },
              { title: "New user registered", time: "12 hours ago", type: "user" },
            ].map((activity, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-2 h-2 mt-2 rounded-full bg-gold-500 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-200">{activity.title}</p>
                  <p className="text-xs text-gray-500 mt-0.5">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
