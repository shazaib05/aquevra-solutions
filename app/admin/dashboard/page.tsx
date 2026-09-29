"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  Briefcase,
  Wrench,
  Settings,
  LogOut,
  Bell,
  TrendingUp,
  Users,
  ChevronRight,
  Circle,
} from "lucide-react";

// Navigation items
const navItems = [
  { label: "Dashboard", href: "/admin/dashboard", icon: LayoutDashboard },
  { label: "Inquiries", href: "/admin/inquiries", icon: MessageSquare },
  { label: "Quote Requests", href: "/admin/quotes", icon: FileText },
  { label: "Services (8)", href: "/admin/services", icon: Briefcase },
  { label: "Portfolio", href: "/admin/portfolio", icon: TrendingUp },
  { label: "Blog Posts", href: "/admin/blog", icon: FileText },
  { label: "FAQs", href: "/admin/faqs", icon: MessageSquare },
  { label: "Settings", href: "/admin/settings", icon: Settings },
];

// Mock stats
const stats = [
  { label: "Total Inquiries", value: "0", icon: MessageSquare, color: "sky" },
  { label: "Quote Requests", value: "0", icon: FileText, color: "blue" },
  { label: "Services Active", value: "8", icon: Briefcase, color: "indigo" },
  { label: "Published Articles", value: "6", icon: TrendingUp, color: "emerald" },
];

export default function AdminDashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const handleLogout = async () => {
    await fetch("/api/admin/auth", { method: "DELETE" });
    window.location.href = "/admin";
  };

  return (
    <div className="flex h-screen bg-slate-50 text-slate-900 overflow-hidden">
      {/* Sidebar */}
      <aside
        className={`${
          sidebarOpen ? "w-64" : "w-16"
        } bg-white border-r border-slate-200 flex flex-col transition-all duration-300 shrink-0 shadow-2xs`}
      >
        {/* Logo */}
        <div className="p-4 border-b border-slate-100 flex items-center justify-between">
          {sidebarOpen ? (
            <div className="relative h-9 w-36">
              <Image
                src="/logo.png"
                alt="AQUEVRA SOLUTIONS"
                fill
                priority
                className="object-contain"
              />
            </div>
          ) : (
            <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-200 flex items-center justify-center font-bold text-sky-700 text-xs">
              AQ
            </div>
          )}
        </div>

        {/* Nav */}
        <nav className="flex-1 p-3 space-y-1 overflow-y-auto">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:text-sky-700 hover:bg-sky-50 transition-all group font-medium text-xs sm:text-sm"
              >
                <Icon size={18} className="shrink-0 text-slate-500 group-hover:text-sky-600" />
                {sidebarOpen && (
                  <span>{item.label}</span>
                )}
              </Link>
            );
          })}
        </nav>

        {/* Logout */}
        <div className="p-3 border-t border-slate-100">
          <button
            onClick={handleLogout}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-slate-600 hover:text-rose-600 hover:bg-rose-50 transition-all w-full text-xs sm:text-sm font-medium cursor-pointer"
          >
            <LogOut size={18} className="shrink-0" />
            {sidebarOpen && <span>Sign Out</span>}
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Bar */}
        <header className="bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shrink-0 shadow-2xs">
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSidebarOpen(!sidebarOpen)}
              className="text-slate-500 hover:text-slate-900 transition-colors cursor-pointer"
              aria-label="Toggle sidebar"
            >
              <ChevronRight
                size={20}
                className={`transition-transform ${sidebarOpen ? "rotate-180" : ""}`}
              />
            </button>
            <h1 className="text-base sm:text-lg font-bold text-slate-900">Corporate Administration</h1>
          </div>
          <div className="flex items-center gap-4">
            <button className="relative text-slate-500 hover:text-slate-900 transition-colors" aria-label="Notifications">
              <Bell size={18} />
            </button>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-sky-100 border border-sky-200 rounded-full flex items-center justify-center">
                <span className="text-sky-700 font-bold text-xs">AQ</span>
              </div>
              <span className="text-xs font-semibold text-slate-700 hidden sm:block">AQUEVRA Admin</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 lg:p-8">
          {/* Welcome */}
          <div className="mb-8">
            <h2 className="text-2xl font-extrabold text-slate-900 mb-1">
              Welcome to AQUEVRA Command Center
            </h2>
            <p className="text-slate-500 text-sm">
              Manage client inquiries, quotation estimates, service divisions, and company content.
            </p>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="bg-white border border-slate-200 rounded-2xl p-5 shadow-2xs"
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-9 h-9 bg-sky-50 border border-sky-100 rounded-xl flex items-center justify-center text-sky-600">
                      <Icon size={18} />
                    </div>
                  </div>
                  <div className="text-2xl font-extrabold text-slate-900 mb-0.5">{stat.value}</div>
                  <div className="text-xs text-slate-500 font-semibold">{stat.label}</div>
                </div>
              );
            })}
          </div>

          {/* Quick Actions */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-sm sm:text-base">
                <Circle size={8} className="text-sky-600 fill-current" />
                Quick Administration Actions
              </h3>
              <div className="space-y-2">
                {[
                  { label: "View All Client Inquiries", href: "/admin/inquiries" },
                  { label: "Review Free Quotation Requests", href: "/admin/quotes" },
                  { label: "Manage 8 Service Divisions", href: "/admin/services" },
                  { label: "Update Portfolio Projects", href: "/admin/portfolio" },
                  { label: "Configure Contact & Office Info", href: "/admin/settings" },
                ].map((action) => (
                  <Link
                    key={action.href}
                    href={action.href}
                    className="flex items-center justify-between p-3 rounded-xl bg-slate-50 hover:bg-sky-50 border border-slate-100 hover:border-sky-200 transition-colors group"
                  >
                    <span className="text-xs sm:text-sm font-medium text-slate-700 group-hover:text-sky-800 transition-colors">
                      {action.label}
                    </span>
                    <ChevronRight size={14} className="text-slate-400 group-hover:text-sky-600" />
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 shadow-2xs">
              <h3 className="font-bold text-slate-900 mb-4 flex items-center gap-2 text-sm sm:text-base">
                <Circle size={8} className="text-sky-600 fill-current" />
                Production Deployment Checklist
              </h3>
              <div className="space-y-3">
                {[
                  { label: "Configure NEXT_PUBLIC_WEB3FORMS_KEY in .env.local", done: true },
                  { label: "White corporate theme applied across all 21 routes", done: true },
                  { label: "4 core operational divisions active with remaining preserved for future release", done: true },
                  { label: "Transparent logo verified on crisp white navbar and footers", done: true },
                  { label: "Embed Karachi office Google Map coordinates", done: true },
                  { label: "Verify responsive forms across mobile, tablet, and desktop", done: true },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div
                      className={`w-4 h-4 rounded border shrink-0 mt-0.5 flex items-center justify-center ${
                        item.done
                          ? "bg-emerald-500 border-emerald-500 text-white"
                          : "border-slate-300"
                      }`}
                    >
                      {item.done && (
                        <svg viewBox="0 0 10 10" className="w-2.5 h-2.5">
                          <path
                            d="M1.5 5l2.5 2.5 4.5-4.5"
                            stroke="white"
                            strokeWidth="1.8"
                            fill="none"
                            strokeLinecap="round"
                          />
                        </svg>
                      )}
                    </div>
                    <span className={`text-xs sm:text-sm ${item.done ? "text-slate-700 font-medium" : "text-slate-500"}`}>
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Setup Notice */}
          <div className="bg-sky-50 border border-sky-200 rounded-2xl p-5">
            <h3 className="font-bold text-sky-900 mb-1 text-sm">Corporate Production Readiness</h3>
            <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
              All 4 core operational divisions (Website &amp; Software Solutions, Graphic Design &amp; Creative Services, Digital Marketing, and Corporate Gifting &amp; Printing) are fully active with remaining services safely preserved for future release.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
