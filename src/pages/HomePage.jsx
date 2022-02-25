import MainSlider from "../components/UI/MainSlider/MainSlider";
import FeaturedNews from "../components/FeaturedNews/FeaturedNews";
import FindMovies from "../components/FindMovies/FindMovies";

const HomePage = ({movies, news, myFilters, toggleDropdown, dropdownsAreActive, setFiltersAreActive}) => {
    return ( 
        <div>
            <MainSlider />
            <FindMovies 
                myFilters={myFilters}
                toggleDropdown={toggleDropdown}
                dropdownsAreActive={dropdownsAreActive}
                setFiltersAreActive={setFiltersAreActive}
                movies={movies}
            />
            <FeaturedNews news={news} />
        </div>
     );
}
 
export default HomePage;


