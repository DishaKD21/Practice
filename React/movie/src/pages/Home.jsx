import MovieCard from "../components/movieCard";

function Home(){
   const movies = [
  { id: 1, title: "John Wick", release_date: "2020", url: "https://via.placeholder.com/150" },
  { id: 2, title: "Jhn Wick", release_date: "2020", url: "https://via.placeholder.com/150" },
  { id: 3, title: "Joh Wick", release_date: "2020", url: "https://via.placeholder.com/150" },
  { id: 4, title: "Jon Wick", release_date: "2020", url: "https://via.placeholder.com/150" },
];

 const handleSearch = () => {};

    return (
    <div className="home">
<form onSubmit={handleSearch} className="search-form">
<input type="text" placeholder="Search for movies..." className="search-input"/>
<button type="submit" className="search-button">Search</button>
</form>

   <div className="movie-grid">
        {movies.map((movie)=>(
           <MovieCard movie={movie} key={movie.id}/>
        ))}
    </div>
    </div>
 );
}
export default Home;