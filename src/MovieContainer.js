import GenrePicker from './GenrePicker';
import Movie from './Movie';

import moviesArray from './movies.json';

// importing data for now, eventually we'll fetch!
// import moviesArray from '../movies.json'
// import ClickCounter from './ClickCounter'

const MovieContainer = (props) => {

    const renderMovies = () => {
     return moviesArray.map(movie => {
         return (
            <Movie 
            key={movie.id}
            title={movie.title} 
            image={movie.image}
            director={movie.director}
            year={movie.year}
            description={movie.description}
            genre={movie.genre}
         />

         )
     })   
    }

    return (
    <div>
        
        <GenrePicker />
        <section className="movies">
        {renderMovies()}
        </section>
    </div>
    )
}

export default MovieContainer