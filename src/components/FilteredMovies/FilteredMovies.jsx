import MovieNav from "../MovieNav/MovieNav";
import classes from "./FilteredMovies.module.css";

const FilteredMovies = ({filteredMovies}) => {
    return ( 
        <div className={classes.filteredMovies}>
            <div className="container">
                <div className={classes.grid}>
                    {filteredMovies.map(item =>
                        <MovieNav 
                            key={item.id} 
                            id={item.id}
                            title={item.title}
                            image={item.image}
                        /> 
                    )}  
                </div>
            </div>
        </div>
     );
}
 
export default FilteredMovies;