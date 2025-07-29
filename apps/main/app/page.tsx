"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SplashCursor } from "@/components/ui/splash-cursor";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [roomCode, setRoomCode] = useState("");
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  if (status === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  if (!session) {
    router.push("/login");
    return null;
  }

  const handleNewRoom = () => {
    const newRoomId = Math.random().toString(36).substring(2, 8).toUpperCase();
    router.push(`/room/${newRoomId}`);
  };

  const handleJoinRoom = () => {
    if (roomCode.trim()) {
      router.push(`/room/${roomCode.trim()}`);
    }
  };

  const handleLogout = async () => {
    try {
      await signOut({ 
        callbackUrl: "/login", 
        redirect: true 
      });
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const handleProfileClick = () => {
    setShowLogoutModal(true);
  };

  const closeModal = () => {
    setShowLogoutModal(false);
  };

  return (
    <div className="min-h-screen bg-black">
      <SplashCursor />
      
      {/* Header */}
      <header className="p-6 flex justify-between items-center bg-transparent relative z-10">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
            <svg
              className="w-5 h-5 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z" />
            </svg>
          </div>
          <span className="text-white text-xl font-bold">PlaySync</span>
        </div>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleProfileClick}
            className="rounded-full hover:ring-2 hover:ring-purple-500 transition-all duration-200 hover:scale-105"
          >
            <Image
              src={
                session?.user?.image
                  ? session.user.image
                  : "/NicePng_kakashi-png_2099655.png"
              }
              alt="Profile"
              width={40}
              height={40}
              className="rounded-full"
              draggable={false}
            />
          </button>
        </div>
      </header>

  {/* Modern Glossy Logout Modal */}
{showLogoutModal && (
  <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
    {/* Enhanced Backdrop with Glassmorphism */}
    <div 
      className="fixed inset-0 bg-black/30 backdrop-blur-lg backdrop-saturate-150"
      onClick={closeModal}
      style={{
        backgroundImage: 'radial-gradient(ellipse at center, rgba(124, 58, 237, 0.1) 0%, rgba(0, 0, 0, 0.3) 70%)',
      }}
    />
    
    {/* Glassmorphic Modal Container */}
    <div 
      className="relative bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl backdrop-saturate-150 rounded-3xl border border-white/20 dark:border-gray-700/30 w-full max-w-md mx-auto overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)',
        boxShadow: `
          0 32px 64px -12px rgba(0, 0, 0, 0.25),
          0 0 0 1px rgba(255, 255, 255, 0.1),
          inset 0 1px 0 rgba(255, 255, 255, 0.2),
          inset 0 -1px 0 rgba(0, 0, 0, 0.1)
        `,
      }}
    >
      {/* Glossy Header Section */}
      <div className="relative px-6 pt-6 pb-4">
        {/* Modern Close Button with Glow Effect */}
        <button
          onClick={closeModal}
          className="absolute right-4 top-4 rounded-full p-2.5 text-white/70 hover:text-white hover:bg-white/10 transition-all duration-300 backdrop-blur-sm group"
          style={{
            background: 'rgba(255, 255, 255, 0.05)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
          }}
        >
          <svg 
            className="w-5 h-5 transition-transform duration-300 group-hover:rotate-90" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Enhanced Profile Section */}
        <div className="flex items-center space-x-4">
          <div className="relative">
            {/* Avatar with Glossy Ring Effect */}
            <div className="w-16 h-16 relative">
              <div 
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
                  padding: '3px',
                }}
              >
                <Image
                  src={
                    session?.user?.image
                      ? session.user.image
                      : "/NicePng_kakashi-png_2099655.png"
                  }
                  alt="Profile"
                  width={64}
                  height={64}
                  className="w-full h-full rounded-full object-cover"
                  draggable={false}
                />
              </div>
              {/* Animated Online Indicator */}
              <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-400 border-2 border-white/20 rounded-full animate-pulse">
                <div className="absolute inset-0 bg-green-400 rounded-full animate-ping opacity-75"></div>
              </div>
            </div>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-semibold text-white truncate">
              {session?.user?.name || "User"}
            </h3>
            <p className="text-sm text-white/60 truncate">
              {session?.user?.email || "No email"}
            </p>
            {/* Glossy Status Badge */}
            <div className="mt-2">
              <span 
                className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium text-emerald-100 backdrop-blur-sm"
                style={{
                  background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.2) 0%, rgba(5, 150, 105, 0.2) 100%)',
                  border: '1px solid rgba(16, 185, 129, 0.3)',
                  boxShadow: '0 2px 8px rgba(16, 185, 129, 0.2)',
                }}
              >
                <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mr-1.5 animate-pulse"></div>
                Online
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Divider with Gradient */}
      <div 
        className="mx-6 h-px"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.2) 50%, transparent 100%)',
        }}
      ></div>

      {/* Enhanced Content Section */}
      <div className="px-6 py-6">
        {/* Warning Icon with Glow */}
        <div className="mx-auto flex items-center justify-center w-14 h-14 rounded-full mb-4 relative">
          <div 
            className="absolute inset-0 rounded-full animate-pulse"
            style={{
              background: 'radial-gradient(circle, rgba(239, 68, 68, 0.2) 0%, transparent 70%)',
            }}
          ></div>
          <div 
            className="w-12 h-12 rounded-full flex items-center justify-center backdrop-blur-sm"
            style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.1) 0%, rgba(185, 28, 28, 0.1) 100%)',
              border: '1px solid rgba(239, 68, 68, 0.2)',
              boxShadow: '0 4px 12px rgba(239, 68, 68, 0.2)',
            }}
          >
            <svg className="w-6 h-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
            </svg>
          </div>
        </div>

        {/* Enhanced Typography */}
        <div className="text-center">
          <h2 className="text-xl font-semibold text-white mb-3">
            Sign out of your account?
          </h2>
          <p className="text-sm text-white/70 leading-relaxed">
            You will be signed out of all devices and will need to sign in again to access your rooms and preferences.
          </p>
        </div>
      </div>

      {/* Glossy Action Buttons */}
      <div className="px-6 pb-6">
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-3 space-y-3 space-y-reverse sm:space-y-0">
          {/* Cancel Button with Glassmorphism */}
          <button
            onClick={closeModal}
            className="w-full sm:w-auto inline-flex justify-center items-center px-5 py-2.5 text-sm font-medium text-white/80 backdrop-blur-sm rounded-xl transition-all duration-300 hover:text-white hover:bg-white/10"
            style={{
              background: 'rgba(255, 255, 255, 0.05)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
            }}
          >
            Cancel
          </button>
          
          {/* Sign Out Button with Glossy Red Effect */}
          <button
            onClick={handleLogout}
            className="w-full sm:w-auto inline-flex justify-center items-center px-5 py-2.5 text-sm font-medium text-white backdrop-blur-sm rounded-xl transition-all duration-300 hover:scale-105 group"
            style={{
              background: 'linear-gradient(135deg, rgba(239, 68, 68, 0.8) 0%, rgba(185, 28, 28, 0.8) 100%)',
              border: '1px solid rgba(239, 68, 68, 0.3)',
              boxShadow: '0 8px 16px rgba(239, 68, 68, 0.3), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            }}
          >
            <svg className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
            </svg>
            Sign out
          </button>
        </div>
      </div>

      {/* Animated Bottom Accent with Multiple Gradients */}
      <div 
        className="h-1 relative overflow-hidden"
        style={{
          background: 'linear-gradient(90deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #f5576c 75%, #4facfe 100%)',
        }}
      >
        <div 
          className="absolute inset-0 opacity-60"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)',
            animation: 'shimmer 2s infinite',
          }}
        ></div>
      </div>
    </div>
  </div>
)}
<style jsx>{`
  @keyframes shimmer {
    0% { transform: translateX(-100%); }
    100% { transform: translateX(100%); }
  }
`}</style>

      {/* Main Content */}
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
                Listen Songs with your
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                  Loved One
                </span>
              </h1>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={handleNewRoom}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold rounded-xl transition-all duration-200 transform hover:scale-105 shadow-lg"
              >
                New Room
              </button>

              <div className="flex gap-2">
                <input
                  type="text"
                  placeholder="Enter Room Code"
                  value={roomCode}
                  onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
                  className="px-4 py-4 bg-gray-800/50 text-white placeholder-gray-400 rounded-xl border border-gray-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent backdrop-blur-sm"
                />
                <button
                  onClick={handleJoinRoom}
                  disabled={!roomCode.trim()}
                  className="px-8 py-4 bg-gray-800 hover:bg-gray-700 disabled:bg-gray-800/50 disabled:cursor-not-allowed text-white font-semibold rounded-xl transition-all duration-200 border border-gray-600"
                >
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            <div className="relative z-10">
              <Image
                src="/ChatGPT Image Jul 28, 2025, 10_43_08 PM.png"
                alt="Acoustic Guitar"
                width={400}
                height={300}
                className="w-full h-auto rounded-2xl shadow-2xl select-none"
                draggable="false"
                priority
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-28 h-28 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-2000"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
