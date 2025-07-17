// api/moviesClient.js
import axios from 'axios';
import dotenv from 'dotenv';

dotenv.config();

export const moviesClient = axios.create({
  baseURL: 'http://www.omdbapi.com/',
  params: {
    apikey: process.env.OMDB_API_KEY,
  },
});
