import FilteredMovies from "../components/FilteredMovies/FilteredMovies";

const PopularPage = ({movies}) => {
    const popularMovies = movies.filter(movie => movie.popular);

    return ( 
        <div className="section_padding background">
            <FilteredMovies filteredMovies={popularMovies} />
        </div>
     );
}
 
export default PopularPage;