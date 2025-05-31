import MovieCard from "../components/movieCard";
import { useState } from "react"
import "../css/home.css"
function Home() {

   const movies = [
      { id: 1, title: "John Wick", release_date: "2020", url: "https://via.placeholder.com/150" },
      { id: 2, title: "Jhn Wick", release_date: "2020", url: "https://via.placeholder.com/150" },
      { id: 3, title: "Joh Wick", release_date: "2020", url: "https://via.placeholder.com/150" },
      { id: 4, title: "Jon Wick", release_date: "2020", url: "https://via.placeholder.com/150" },
   ];
  const [searchTerm, setSearchTerm] = useState("");

   const handleSearch = (e) => {
      e.preventDefault(); // prevent page refresh
      setSearchTerm("");
   };
   return (
      <div className="home">
         <form onSubmit={handleSearch} className="search-form">
            <input type="text" 
            placeholder="Search for movies..." 
            className="search-input" 
             value={searchTerm}
            onChange = {(e) => setSearchTerm(e.target.value)}
            />
         
            <button type="submit" className="search-button">Search</button>
         </form>

           <div className="movie-grid">
        {movies.map((movie) => (
          movie.title.toLowerCase().startsWith(searchTerm) && 
          (<MovieCard movie={movie} key={movie.id} />)
        )
        )}
      </div>
      </div>
   );
}
export default Home;