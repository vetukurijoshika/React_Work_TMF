
const Filters = ({listOfMovies, setFilteredList,setLanguageFilteredList}) =>{
//     const fetchData = async () => {
//   const response = await fetch("https://api.themoviedb.org/3/movie/popular?api_key=c45a857c193f6302f2b5061c3b85e743");
//   const json = await response.json();
  
  const handleFilter = (lang) => {
    if(lang===""){
      setFilteredList(listOfMovies); 
    }
    else{
      const filtered = listOfMovies.filter(
      (movie) => movie.original_language === lang
    );
    setFilteredList(filtered);
    setLanguageFilteredList(filtered); 
    console.log(filtered);
    }
    
  };
  const handleTop = () =>{
     const filtered = listOfMovies.filter(
      (movie) => movie.vote_average>=7.0
    );
    setFilteredList(filtered);
    // setLanguageFilteredList(filtered); 
    console.log(filtered);

  };

    return(
        <div className="filters-div">
           <button className="filter-btn" onClick={() => handleFilter("")}>All</button>
           <button className="filter-btn" onClick={()=>handleFilter("en")}>English</button>
            <button className="filter-btn" onClick={() => handleFilter("ja")}>Japanese</button>
             <button className="filter-btn" onClick={() => handleFilter("es")}>Spanish</button>
              <button className="filter-btn" onClick={() => handleFilter("fr")}>French</button>
               <button className="filter-btn" onClick={() => handleFilter("kn")}>Kannada</button>
               <button className="filter-btn" onClick={()=>handleFilter("no")}>Norwegian</button>
                <button className="filter-btn" onClick={() => handleFilter("pl")}>Polish</button>

            
            <button onClick={() => handleTop()}>TopRated</button>

        </div>

    );
};
export default Filters; 