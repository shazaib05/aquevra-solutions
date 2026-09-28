import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Portal | AQUEVRA SOLUTIONS",
  description: "Management dashboard for AQUEVRA SOLUTIONS website management",
  robots: { index: false, follow: false },
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {children}
    </div>
  );
}
