// export const moviesArr =[
//     {
//     id: 1,
//     imgUrl: "https://m.media-amazon.com/images/M/MV5BZWFiMzEzZTQtZjFiZC00YjhjLTk3Y2QtYzA2MjE4MmRiNzdmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
//     title: "Dude",
//   },
//   {
//     id: 2,
//     imgUrl: "https://upload.wikimedia.org/wikipedia/en/thumb/6/69/Kantara-_Chapter_1_poster.jpg/250px-Kantara-_Chapter_1_poster.jpg",
//     title: "Kantara",
//   },
//   {
//     id: 3,
//     imgUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGKgdZ4lqHU5JOYhjh1pZ9_vzFftA4WiHv-Q&s",
//     title: "Tron: Ares",
//   },
//   {
//     id: 4,
//     imgUrl: "https://upload.wikimedia.org/wikipedia/en/0/0c/OG_Poster.jpg",
//     title: "OG",
//   },
//   {
//     id: 5,
//     imgUrl: "https://upload.wikimedia.org/wikipedia/en/d/d4/Insidious_%E2%80%93_Chapter_2_Poster.jpg",
//     title: "Insidious: Chapter 2",
//   },
//   {
//     id: 6,
//     imgUrl: "https://images.moviesanywhere.com/cb6bc1ec1a0a0f61eccfea118757ead7/9e1d171c-e352-4f74-be5e-9070b623cd85.jpg",
//     title: "The Shallows",
//   },
// ]; 

 
const MovieCard = ({data}) =>{
    return(
        <div className="movie-card">
          <img src={"https://image.tmdb.org/t/p/w500" + data.poster_path}/>
          <h3>{data.title}</h3>
          <p>⭐ {data.vote_average}</p>
          <p>Language: {data.original_language}</p>
          <button>Book Now</button>
        </div>


    );
};

export default MovieCard; 