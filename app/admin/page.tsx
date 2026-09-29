"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Eye, EyeOff, ArrowLeft, KeyRound, ShieldCheck } from "lucide-react";

export default function AdminLoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const router = useRouter();

  const handleFillDemo = () => {
    setEmail("admin@aquevrasolutions.com");
    setPassword("AquevraAdmin2024!");
    setError("");
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          password: password.trim(),
        }),
      });

      if (res.ok) {
        router.push("/admin/dashboard");
      } else {
        const data = await res.json().catch(() => ({}));
        setError(data.error || "Invalid credentials. Please verify your details.");
      }
    } catch {
      setError("Login failed. Please verify your network connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-md">
        {/* Top Back Link */}
        <div className="mb-6">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-500 hover:text-sky-600 transition-colors"
          >
            <ArrowLeft size={14} />
            Back to Website
          </Link>
        </div>

        {/* Logo */}
        <div className="text-center mb-8">
          <div className="inline-flex flex-col items-center gap-2 mb-3">
            <div className="relative h-12 w-48 mb-1">
              <Image
                src="/logo.png"
                alt="AQUEVRA SOLUTIONS"
                fill
                priority
                className="object-contain"
              />
            </div>
            <span className="inline-flex items-center gap-1.5 text-[11px] font-bold tracking-widest uppercase text-sky-700 bg-sky-50 border border-sky-200 rounded-full px-3 py-0.5">
              <ShieldCheck size={12} />
              Secure Administration
            </span>
          </div>
          <p className="text-slate-500 text-sm">Sign in to manage client inquiries, services, and system content</p>
        </div>

        {/* Login Form */}
        <div className="bg-white border border-slate-200/90 rounded-2xl p-8 shadow-sm">
          <form onSubmit={handleLogin} className="space-y-5">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold text-slate-800 mb-1.5">
                Administrator Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 transition-all text-sm"
                placeholder="admin@aquevrasolutions.com"
              />
            </div>

            <div>
              <div className="flex items-center justify-between mb-1.5">
                <label htmlFor="password" className="block text-sm font-semibold text-slate-800">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-xs text-sky-600 hover:text-sky-700 font-medium inline-flex items-center gap-1 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={13} /> : <Eye size={13} />}
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:bg-white focus:ring-2 focus:ring-sky-500/20 transition-all text-sm pr-10"
                  placeholder="••••••••"
                />
              </div>
            </div>

            {/* Quick autofill helper */}
            <div className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between text-xs text-slate-600">
              <span className="font-medium flex items-center gap-1.5">
                <KeyRound size={13} className="text-sky-600" />
                Default Credentials
              </span>
              <button
                type="button"
                onClick={handleFillDemo}
                className="text-sky-600 font-bold hover:text-sky-700 hover:underline cursor-pointer"
              >
                Auto-Fill
              </button>
            </div>

            {error && (
              <div className="p-3.5 bg-rose-50 border border-rose-200 rounded-xl text-rose-700 text-xs font-semibold">
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3.5 bg-sky-600 hover:bg-sky-500 text-white font-bold rounded-xl transition-all shadow-sm hover:shadow disabled:opacity-50 disabled:cursor-not-allowed text-sm cursor-pointer"
            >
              {loading ? "Authenticating..." : "Sign In to Portal"}
            </button>
          </form>
        </div>

        <p className="text-center text-slate-400 text-xs mt-6">
          Access is monitored and restricted to authorized AQUEVRA personnel only.
        </p>
      </div>
    </div>
  );
}
