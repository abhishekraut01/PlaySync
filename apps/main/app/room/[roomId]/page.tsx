'use client'

import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { Send } from 'lucide-react'

interface Song {
  id: string
  title: string
  artist: string
  duration: string
  image: string
  videoId?: string
}

interface ChatMessage {
  id: string
  user: string
  message: string
  avatar: string
  timestamp: string
}


const dummyMessages: ChatMessage[] = [
  {
    id: '1',
    user: 'Alex',
    message: 'Love this song! 🎵',
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100',
    timestamp: '2:30 PM'
  },
  {
    id: '2',
    user: 'Sarah',
    message: 'Can we play some Ed Sheeran next?',
    avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100',
    timestamp: '2:32 PM'
  }
]

export default function RoomPage({ params }: { params: { roomId: string } }) {
  const { data: session, status } = useSession()
  const router = useRouter()
  const [currentVideo, setCurrentVideo] = useState<Song | null>(null)
  const [messages, setMessages] = useState(dummyMessages)
  const [newMessage, setNewMessage] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [searchResults, setSearchResults] = useState<Song[]>([])
  const [isSearching, setIsSearching] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  if (status === 'loading') {
    return (
      <div className="min-h-screen bg-slate-900 flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    )
  }

  if (!session) {
    router.push('/login')
    return null
  }

  const handleSearch = async () => {
    if (!searchQuery.trim() || isSearching) return
    
    setIsSearching(true)
    try {
      const response = await fetch(`/api/search?q=${encodeURIComponent(searchQuery)}`)
      if (!response.ok) {
        throw new Error('Search failed')
      }
      const data = await response.json()
      setSearchResults(data.results || [])
    } catch (error) {
      console.error('Search failed:', error)
      setSearchResults([])
    } finally {
      setIsSearching(false)
    }
  }

  const handleVideoSelect = (song: Song) => {
    setCurrentVideo(song)
  }

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (newMessage.trim()) {
      const message: ChatMessage = {
        id: Date.now().toString(),
        user: session.user?.name || 'You',
        message: newMessage,
        avatar: session.user?.image || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=100',
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      }
      setMessages([...messages, message])
      setNewMessage('')
    }
  }

  return (
    <div className="min-h-screen bg-[#111827] text-white">
      {/* Compact Header */}
      <header className="bg-slate-800/50 backdrop-blur-lg border-b border-slate-700 p-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
              </svg>
            </div>
            <span className="text-xl font-bold">PlaySync</span>
          </div>
          <div className="flex items-center space-x-3">
            <button className="px-4 py-2 bg-slate-700 hover:bg-slate-600 rounded-lg transition-colors text-sm">
              Share
            </button>
            <button 
              onClick={() => router.push('/')}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors text-sm"
            >
              Leave
            </button>
          </div>
        </div>
      </header>

      <div className="flex flex-col lg:flex-row h-[calc(100vh-64px)]">
        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          {/* YouTube Video Player */}
          <div className="flex-1 bg-[#1F2937] flex items-center justify-center p-4">
            <div className="w-full max-w-4xl aspect-video">
              {currentVideo?.videoId ? (
                <iframe
                  width="100%"
                  height="100%"
                  src={`https://www.youtube.com/embed/${currentVideo.videoId}?autoplay=1&controls=0&modestbranding=1&rel=0`}
                  title={currentVideo.title}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="rounded-lg"
                />
              ) : (
                <div className="w-full h-full bg-black rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 bg-purple-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-12 h-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z"/>
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">No video selected</h3>
                    <p className="text-slate-400">Search for songs and select one to start playing</p>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Chat Section */}
          <div className="h-64 bg-[#1F2937] border-t border-slate-700 flex flex-col">
            <div className="p-3 border-b border-slate-700">
              <h3 className="text-lg font-semibold">Room Chat</h3>
            </div>
            
            <div className="flex-1 overflow-y-auto p-4 space-y-3">
              {messages.map((message) => (
                <div key={message.id} className="flex items-start space-x-3">
                  <Image
                    src={message.avatar}
                    alt={message.user}
                    width={32}
                    height={32}
                    className="rounded-full flex-shrink-0"
                  />
                  <div className="flex-1">
                    <div className="bg-purple-600 rounded-2xl rounded-tl-md px-4 py-2 max-w-xs inline-block">
                      <p className="text-sm text-white">{message.message}</p>
                    </div>
                    <p className="text-xs text-slate-400 mt-1">{message.user} • {message.timestamp}</p>
                  </div>
                </div>
              ))}
              <div ref={chatEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="p-4 border-t border-slate-700">
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type Something"
                  className="flex-1 bg-slate-700 text-white placeholder-slate-400 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
                <button
                  type="submit"
                  disabled={!newMessage.trim()}
                  className="bg-purple-600 hover:bg-purple-700 disabled:bg-slate-600 rounded-xl p-3 transition-colors"
                >
                  <Send size={20} />
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Sidebar - Search */}
        <div className="w-full lg:w-80 bg-[#1F2937] border-l border-slate-700">
          <div className="p-4 border-b border-slate-700">
            <h3 className="text-lg font-semibold mb-4">Search Songs</h3>
            
            <div className="flex space-x-2">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Search for songs"
                className="flex-1 bg-slate-700 text-white placeholder-slate-400 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <button
                onClick={handleSearch}
                disabled={isSearching || !searchQuery.trim()}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 disabled:bg-slate-600 rounded-lg text-sm transition-colors"
              >
                {isSearching ? '...' : 'Search'}
              </button>
            </div>
          </div>
          
          <div className="p-4 space-y-3 h-[calc(100%-140px)] overflow-y-auto">
            {searchResults.length === 0 && !isSearching && (
              <div className="text-center text-slate-400 py-8">
                <p>Search for songs to see results</p>
              </div>
            )}
            
            {isSearching && (
              <div className="text-center text-slate-400 py-8">
                <p>Searching...</p>
              </div>
            )}
            
            {searchResults.map((song) => (
              <div
                key={song.id}
                onClick={() => handleVideoSelect(song)}
                className={`flex items-center space-x-3 p-2 rounded-lg hover:bg-slate-700 cursor-pointer transition-colors ${
                  currentVideo?.id === song.id ? 'bg-slate-700' : ''
                }`}
              >
                <Image
                  src={song.image}
                  alt={song.title}
                  width={48}
                  height={48}
                  className="rounded-lg flex-shrink-0"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium text-white truncate text-sm">{song.title}</h4>
                  <p className="text-xs text-slate-400 truncate">{song.artist}</p>
                </div>
                <span className="text-xs text-slate-400 flex-shrink-0">{song.duration}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}