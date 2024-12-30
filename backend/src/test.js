import dotenv from 'dotenv'
dotenv.config({ path: '../.env' })

import axios from "axios" 

const API_KEY = process.env.YOUR_YOUTUBE_API_KEY;
const PLAYLIST_ID = 'PLDwksWCnGzbcxKgsYEdPCA212KQzGc51A';
const YOUTUBE_API_URL = 'https://www.googleapis.com/youtube/v3';

const fetchPlaylistSongs = async () => {
  try {
    const response = await axios.get(`${YOUTUBE_API_URL}/playlistItems`, {
      params: {
        part: 'snippet',
        playlistId: PLAYLIST_ID,
        maxResults: 50, // Max songs per request
        key: API_KEY,
      },
    });

    const songs = response.data.items.map((item) => ({
      title: item.snippet.title,
      videoId: item.snippet.resourceId.videoId,
    }));

    console.log(songs);
  } catch (error) {
    console.error('Error fetching playlist songs:', error.message);
  }
};

fetchPlaylistSongs();
