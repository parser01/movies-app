import { useParams } from "react-router-dom";
import Movie from "../components/Movie/Movie";
import NotFoundPage from "./NotFoundPage";

const MoviePage = ({movies}) => {
    const {id} = useParams();
    const movie = movies.find(movie => movie.id === id);

    if (movie === undefined) {
        return <NotFoundPage />
    }

    return ( 
        <div>
            <Movie movie={movie} />
        </div>
     );
}
 
export default MoviePage;