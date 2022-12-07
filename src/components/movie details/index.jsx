import "./movieDetails.css";
import axios from "../../axios"
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../navbar";
const MovieDetails = () => {
    const API_KEY = "9a5c5683768c2699712b36b4ad6c20fa";
    const [movie, setMovie] = useState({});
    const params = useParams();
    const base_url = "https://image.tmdb.org/t/p/original/";

        async function getMovie() {
            const request = await axios.get(`movie/${params.movie_id}?api_key=${API_KEY}&language=en-US`);
            setMovie(request.data);
           console.log(movie.backdrop_path)
        }
    useEffect(() => {
        getMovie();
      }, []);

  return (
    <>
    <Navbar/>
    <div className="movie_screen_wrapper" style={{
        backgroundImage:`url(${base_url}${movie.backdrop_path})`,
        backgroundSize:"cover",
        backgroundPosition:"center center"
    }} >
        <div className="movie_fade">
        <h2>{movie.title}</h2>
        <span>release date : {movie.release_date}</span>
        <p>{movie.overview}</p>
        <h3>Watch all you want</h3>
        <button className="movie_screen_button" >Join Now</button>
        </div>
    </div>
    </>
  )
}

export default MovieDetails