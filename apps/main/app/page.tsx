"use client";

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { SplashCursor } from "@/components/ui/splash-cursor";

export default function HomePage() {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [roomCode, setRoomCode] = useState("");

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
        </div>
      </header>

      {/* Main Content */}
      <div className="container mx-auto px-6 ">
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
                width={400} // Reduced from 600 to 400
                height={300} // Reduced from 400 to 300
                className="w-full h-auto rounded-2xl shadow-2xl select-none "
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
