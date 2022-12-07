import { useEffect, useState } from "react";
import "./banner.css";
import axios from "../../axios";
import requests from "../../requests";
const Banner = () => {
    const [movie , setMovie] = useState([]);
    useEffect(() => {
      async function fetchData(){
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
            request.data.results[
                Math.floor(Math.random() *request.data.results.length - 1)
            ]
        );
        return request;
      }
      fetchData();
    }, [])

    function ellipse(str, len){
      return  str.length >= len ? str.slice(0,len)+' ...' : str
    }
  return (
    <header
      className="banner"
      style={{
        backgroundSize : 'cover' ,
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition : "center center"
    }}
    >
        <div className="banner_contents">
            <h1 className="banner_title">{movie?.title || movie?.name || movie?.original_name}</h1>
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>
            <h1 className="banner_description">
                { 
                    ellipse(`${movie?.overview || "No description for the movie"}`,150)
                }
            </h1>
        </div>
        <div className="banner_fadeBottom"></div>
    </header>
  );
};

export default Banner;
