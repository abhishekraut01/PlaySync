# 🎵 PlaySync

**PlaySync** is a collaborative music streaming platform where users can listen to songs together in real-time. This project provides a seamless shared music experience, allowing users to sync their playlists, chat, and enjoy music together, no matter where they are.

## ✨ Features

- **🎼 Real-time Music Synchronization**: Listen to music together with perfect synchronization across all connected users
- **🔍 YouTube Integration**: Search and stream music directly from YouTube using integrated search API
- **💬 Live Chat**: Communicate with other users in real-time while listening to music
- **🏠 Room-based Sessions**: Create or join music rooms for collaborative listening experiences
- **🔐 Authentication**: Secure user authentication system with NextAuth.js
- **📱 Responsive Design**: Beautiful, modern UI that works across all devices
- **⚡ Real-time Communication**: WebSocket-powered live updates and synchronization

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework for production
- **React 18** - Modern React with hooks and concurrent features
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- **Lucide React** - Beautiful icons
- **NextAuth.js** - Authentication for Next.js

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **WebSocket (ws)** - Real-time bidirectional communication
- **TypeScript** - Type-safe development

### YouTube Integration
- **YouTube Search API** - Music search functionality
- **ytsr** - YouTube search results scraping
- **Custom YouTube scraper** - Fallback search implementation

### Development Tools
- **Turbo** - High-performance build system
- **pnpm** - Fast, disk space efficient package manager
- **ESLint** - Code linting
- **Prettier** - Code formatting
- **Turborepo** - Monorepo build system

## 🏗️ Project Structure

This is a **Turborepo monorepo** with the following structure:

```
PlaySync/
├── apps/
│   ├── main/           # Next.js main application
│   ├── web/            # Landing page (React + Vite)
│   ├── server/         # Express.js API server
│   └── WsServer/       # WebSocket server for real-time features
├── packages/
│   ├── ui/             # Shared UI components
│   ├── db/             # Database configuration and models
│   ├── eslint-config/  # Shared ESLint configurations
│   └── typescript-config/ # Shared TypeScript configurations
└── package.json        # Root package.json with workspace configuration
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** >= 18
- **pnpm** (recommended) or npm
- **Git**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/PlaySync.git
   cd PlaySync
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   # Copy environment template (if exists)
   cp .env.example .env.local
   
   # Add your YouTube API key and other required variables
   # YOUTUBE_API_KEY=your_youtube_api_key_here
   # NEXTAUTH_SECRET=your_nextauth_secret_here
   # NEXTAUTH_URL=http://localhost:3000
   ```

4. **Start the development servers**
   ```bash
   pnpm dev
   ```

   This will start:
   - **Main App**: http://localhost:3000
   - **WebSocket Server**: http://localhost:8080
   - **API Server**: http://localhost:5000
   - **Landing Page**: http://localhost:5173

## 🎯 How It Works

### 1. **Room Creation & Joining**
   - Users can create music rooms or join existing ones
   - Each room has a unique ID for sharing with friends

### 2. **Music Search & Selection**
   - Integrated YouTube search finds songs instantly
   - Users can add songs to the shared playlist
   - Fallback system ensures search always works

### 3. **Real-time Synchronization**
   - WebSocket connections keep all users in perfect sync
   - Play/pause, seek, and track changes are synchronized
   - Users see live updates of who's in the room

### 4. **Chat Integration**
   - Real-time messaging while listening
   - See who's active in the room
   - Share thoughts about the music instantly

## 🧪 Development

### Available Scripts

```bash
# Development
pnpm dev          # Start all development servers
pnpm build        # Build all applications
pnpm lint         # Lint all packages
pnpm format       # Format code with Prettier
pnpm check-types  # Type check all TypeScript files
```

### Individual App Development

```bash
# Main Next.js app
cd apps/main
pnpm dev

# WebSocket server
cd apps/WsServer
pnpm dev

# Landing page
cd apps/web
pnpm dev
```

## 🌐 API Endpoints

### Music Search
- `GET /api/search?q={query}` - Search for music tracks
- Returns YouTube video results with metadata

### Authentication
- `POST /api/auth/[...nextauth]` - NextAuth.js authentication endpoints

### WebSocket Events
- `join-room` - Join a music room
- `play-song` - Synchronize song playback
- `chat-message` - Send chat messages
- `user-joined` - Notify when users join/leave

## 🎨 UI Components

Built with **Radix UI** and **Tailwind CSS** for:
- Accessible design patterns
- Consistent styling
- Responsive layouts
- Dark/light theme support

## 🔧 Configuration

### Environment Variables

```env
# YouTube API (optional - has fallback)
YOUTUBE_API_KEY=your_api_key_here

# Authentication
NEXTAUTH_SECRET=your_secret_here
NEXTAUTH_URL=http://localhost:3000

# Database (if using)
DATABASE_URL=your_database_url_here
```

## 📱 Deployment

### Vercel (Recommended for Next.js)

1. Connect your GitHub repository to Vercel
2. Set environment variables in Vercel dashboard
3. Deploy automatically on push to main branch

### Docker

```bash
# Build and run with Docker
docker build -t playsync .
docker run -p 3000:3000 playsync
```

## 🤝 Contributing

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎉 Acknowledgments

- **YouTube** for providing the music content platform
- **Radix UI** for accessible component primitives
- **Vercel** for Next.js and deployment platform
- **Turborepo** for monorepo tooling
- All the amazing open-source libraries that make this project possible

## 📞 Support

If you have any questions or need help, please:
- Open an issue on GitHub
- Join our community discussions
- Check out the documentation

---

**Made with ❤️ by the PlaySync team**

*Let's make music social again! 🎵*
