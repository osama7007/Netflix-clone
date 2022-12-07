import requests from "../../requests";
import Banner from "../banner";
import Navbar from "../navbar";
import Row from "../rows";
import "./homeScreen.css";

const HomeScreen = () => {
  return (
    <div className="homeScreen">
        <Navbar/>
        
        <Banner/>
        
       <Row
       title= "NETFLEX ORIGINALS"
      fetchUrl = {requests.fetchNetflixOriginals}
      isLargeRow
       />
       <Row
       title= "TRENDING NOW"
       fetchUrl = {requests.fetchTrending}
       />
       <Row
       title= "TOP RATED"
       fetchUrl = {requests.fetchTopRated}
       />
       <Row
       title= "ACTION MOVIES"
       fetchUrl = {requests.fetchActionMovies}
       />
       <Row
       title= "COMEDY MOVIES"
       fetchUrl = {requests.fetchComedyMovies}
       />
        <Row
       title= "HORROR MOVIES"
       fetchUrl = {requests.fetchHorroMovies}
       />
       <Row
       title= "ROMANCE MOVIES"
       fetchUrl = {requests.fetchRomanceMovies}
       />
       <Row
       title= "DOCUMENTARIES"
       fetchUrl = {requests.fetchDocumentaries}
       />
    </div>
  )
}

export default HomeScreen