const API_KEY = "9a5c5683768c2699712b36b4ad6c20fa"

const requests ={
     fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
     fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=213`,
     fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
     fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=25`,
     fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
     fetchHorroMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
     fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
     fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
}
export default requests
// 