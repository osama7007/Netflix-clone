import axios from "../../axios";
import { useEffect, useState } from "react";
import "./row.css";
import { useNavigate } from "react-router-dom";
const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      //console.log("request", request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  return (
    <div className="row">
    { movies.length>0 ? <h2>{title}</h2> : <h2>{title} Loading...</h2>}
      <div className="row_posters">
            {movies.map((movie) => {
        return (
           ( movie?.poster_path && movie?.backdrop_path) &&
           <>
          <img
          className={`row_poster ${isLargeRow && "row_posterLarge"}`}
          key= {movie.id}
            src={`${base_url}${
              isLargeRow ? movie?.poster_path : movie?.backdrop_path
            }`}
            alt="movie"
            onClick={()=> navigate(`/movie/${movie.id}`)}
          />
           </>
        );
      })}
      </div>
    </div>
  );
};

export default Row;
