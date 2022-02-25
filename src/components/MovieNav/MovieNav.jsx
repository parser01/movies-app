import { Link } from "react-router-dom";
import MyButton from "../UI/MyButton/MyButton";
import classes from "./MovieNav.module.css";

const MovieNav = ({id, image, title}) => {
    return ( 
        <Link 
            to={`/movie/${id}`}
            className={classes.movieNav}
        >
            <div className={classes.image}>
                <img src={image.image} alt={image.alt} />
                <div>
                    <MyButton>Watch now</MyButton>
                </div>
            </div>
            <div className={classes.title}>
                <div>{title}</div>
            </div>
        </Link>
     );
}
 
export default MovieNav;