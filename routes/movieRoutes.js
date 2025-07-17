// routes/movieRoutes.js
import express from 'express';
import { searchMovies, getMovieDetails } from '../controllers/movieController.js';

const router = express.Router();

router.get('/search', searchMovies);
router.get('/movies/:id', getMovieDetails);

export default router;
