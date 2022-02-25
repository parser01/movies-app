import FilteredMovies from "../components/FilteredMovies/FilteredMovies";

const LatestPage = ({movies}) => {
    const latestMovies = movies.filter(movie => movie.latest);

    return ( 
        <div className="section_padding background">
            <FilteredMovies filteredMovies={latestMovies} />       
        </div>
     );
}
 
export default LatestPage;