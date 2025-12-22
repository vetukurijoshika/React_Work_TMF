import MovieCard from "./MovieCard.js"; 
// import {moviesArr} from "./MovieCard.js"; 
import {useState,useEffect} from "react"; 
import Filters from "./Filters.js"; 
const Body =() =>{
    const [listOfMovies, setListOfMovies] = useState([]);
    const[searchText,setSearchText] = useState("");
    const[filteredList, setFilteredList] = useState([]);
    const [languageFilteredList, setLanguageFilteredList] = useState([]);

    const fetchData = async() =>{
    const data = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743");
    const jsonObj = await data.json(); 
    console.log(jsonObj);
    setListOfMovies(jsonObj.results);
    setFilteredList(jsonObj.results); 
    setLanguageFilteredList(jsonObj.results); 
};
useEffect(() =>{
    fetchData();
},[]);
console.log(languageFilteredList);
    return(
      <div className="movies">
        <div className="search-bar">
            <h2>Now Showing</h2>
        <div className="ssearch-bar2">
            <input type="text"  onChange={(e)=>{
            setSearchText(e.target.value);
        }}/>
        <button onClick={() =>{
            const filtered = languageFilteredList.filter((movie)=>{
                return movie.title.toLowerCase().includes(searchText.toLowerCase());
            });
            // setLanguageFilteredList(filtered);
            setFilteredList(filtered);
            
        }}>Search</button><br></br>


        </div>

        </div>
        <Filters
  listOfMovies={listOfMovies}
  setFilteredList={setFilteredList}
  setLanguageFilteredList={setLanguageFilteredList}
/>


        
        <div className="movie-list">
            {filteredList.length>0?(filteredList.map((movie)=>(
                <MovieCard key={movie.id} data = {movie}/>
            ))):(<p>No Movies Found</p>)}
            
            
        </div>
    </div>

    );
};
export default Body; 
