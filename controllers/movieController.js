import { moviesClient } from "../api/moviesClient.js"; 

export const searchMovies = async (req, res) => {
  try {
    const title = req.query.title;
    console.log('Query: ', title);

    if (!title) {
      return res
        .status(400)
        .json({ error: "Title query parameter is required" });
    }

    const moviesResult = await moviesClient.get(`/?s=${title}`); 

    res.json(moviesResult.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getMovieDetails = async (req, res) => {
  try {
    const id = req.params.id;

    const movieDetailResult = await moviesClient.get(`/?i=${id}`);

    res.json(movieDetailResult.data);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
