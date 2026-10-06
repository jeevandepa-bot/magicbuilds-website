"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  LayoutDashboard, 
  Settings, 
  CreditCard, 
  Users, 
  Sparkles,
  LogOut,
  Bell,
  Search
} from "lucide-react";
import { cn } from "@/lib/utils";

const SIDEBAR_LINKS = [
  { name: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { name: "Analytics", href: "/dashboard/analytics", icon: Users },
  { name: "Billing", href: "/dashboard/billing", icon: CreditCard },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen bg-[#050505]">
      {/* Sidebar */}
      <aside className="w-64 border-r border-white/10 bg-[#0a0a0a] hidden md:flex flex-col">
        <div className="h-20 flex items-center px-6 border-b border-white/10">
          <Link href="/" className="flex items-center gap-2 group">
            <Sparkles className="w-5 h-5 text-gold-500" />
            <span className="font-bold text-lg text-white">Magicbuilds</span>
          </Link>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          {SIDEBAR_LINKS.map((link) => {
            const Icon = link.icon;
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition-all",
                  isActive 
                    ? "bg-gold-500/10 text-gold-500" 
                    : "text-gray-400 hover:bg-white/5 hover:text-white"
                )}
              >
                <Icon className="w-5 h-5" />
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-white/10">
          <Link
            href="/"
            className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium text-gray-400 hover:bg-red-500/10 hover:text-red-400 transition-all"
          >
            <LogOut className="w-5 h-5" />
            Log out
          </Link>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col w-full overflow-x-hidden">
        {/* Topbar */}
        <header className="h-16 sm:h-20 border-b border-white/10 bg-[#0a0a0a]/50 backdrop-blur-md flex items-center justify-between px-4 sm:px-8 sticky top-0 z-30">
          <div className="flex items-center gap-4 flex-1">
            <Link href="/" className="md:hidden flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-gold-500" />
              <span className="font-bold text-sm text-white">Magicbuilds</span>
            </Link>
            <div className="relative w-full max-w-md hidden md:block">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
              <input 
                type="text" 
                placeholder="Search..."
                className="w-full bg-black border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white focus:outline-none focus:border-gold-500/50 transition-colors"
              />
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <button className="p-2 rounded-full hover:bg-white/10 text-gray-400 transition-colors relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-gold-500" />
            </button>
            <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-gradient-to-tr from-gold-600 to-gold-300 border-2 border-[#0a0a0a] shadow-sm flex items-center justify-center font-bold text-black text-sm">
              JD
            </div>
          </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-4 md:p-8 overflow-y-auto relative pb-24 md:pb-8 overflow-x-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] sm:w-[600px] h-[150px] sm:h-[300px] bg-gold-500/5 blur-[80px] sm:blur-[120px] rounded-full pointer-events-none" />
          <div className="max-w-6xl mx-auto relative z-10">
            {children}
          </div>
        </main>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="md:hidden fixed bottom-0 inset-x-0 h-16 pb-2 sm:pb-0 bg-[#0a0a0a]/90 backdrop-blur-md border-t border-white/10 z-40 flex items-center justify-around px-2">
        {SIDEBAR_LINKS.map((link) => {
          const Icon = link.icon;
          const isActive = pathname === link.href;
          return (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "flex flex-col items-center justify-center w-full h-full gap-1 transition-colors",
                isActive ? "text-gold-500" : "text-gray-500 hover:text-gray-300"
              )}
            >
              <Icon className="w-5 h-5" />
              <span className="text-[10px] font-medium">{link.name}</span>
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
