import type { Metadata } from "next";
import "./globals.css";
import { Sidebar } from "@/components/sidebar";
import { TopNavbar } from "@/components/top-navbar";

export const metadata: Metadata = {
  title: "Click by Talevo",
  description: "Premium AI-first influencer marketing OS",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className="min-h-screen bg-slate-950 text-slate-100">
        <div className="flex min-h-screen">
          <Sidebar />
          <div className="flex min-h-screen flex-1 flex-col">
            <TopNavbar />
            <main className="flex-1 px-8 py-6">
              <div className="animate-fade-in rounded-2xl border border-white/5 bg-white/5 p-6 shadow-[0_0_0_1px_rgba(255,255,255,0.04)] backdrop-blur-xl">
                {children}
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
