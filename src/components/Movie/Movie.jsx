import { useState } from "react";
import MyButton from "../UI/MyButton/MyButton";
import CommentList from "../CommentList/CommentList";
import classes from "./Movie.module.css";

const Movie = ({movie}) => {
    const [readMoreIsActive, setReadMoreIsActive] = useState(false);
    const minLength = 550;
    const descriptionTextLength = movie.description.join('\n').length;
    const descriptionClipped = `${movie.description.join('\n').slice(0, minLength)}...`.split('\n');

    return ( 
        <div className={classes.movie}>
            <div className="section_padding background">
                <div className="container">
                    <div className={`${classes.info} reverseBackground`}>
                        <div>
                            <span>title</span>
                            <span>{movie.title}</span>
                        </div>    
                        <div>
                            <span>year</span>
                            <span>{movie.year}</span>
                        </div>   
                        <div>
                            <span>country</span>
                            <span>{movie.country}</span>
                        </div>     
                        <div>
                            <span>genre</span>
                            <span>{movie.genres.join(', ')}</span>
                        </div>    
                        <div>
                            <span>duration</span>
                            <span>{movie.duration}</span>
                        </div>    
                        <div>
                            <span>director</span>
                            <span>{movie.director}</span>
                        </div>          
                    </div>
                    <div className={classes.image}>
                        <img src={movie.image.image} alt={movie.image.alt} />
                    </div>
                    <div className={classes.description}>
                        <div>
                            {readMoreIsActive 
                                ?
                            movie.description.map((paragraph, index) =>
                                <p key={`${movie.id} ${index}`}>{paragraph}</p>
                            )
                                :
                            descriptionClipped.map((paragraph, index) =>
                                <p key={`${movie.id} ${index}`}>{paragraph}</p>
                            )}
                        </div>   
                        {descriptionTextLength > minLength
                            &&
                        <MyButton 
                            type="button"
                            onClick={() => {
                                setReadMoreIsActive(!readMoreIsActive);
                            }}
                        >
                            {readMoreIsActive ? 'Read less' : 'Read more'}
                        </MyButton>}
                    </div>
                    <CommentList />
                </div>
            </div>
        </div>
     );
}
 
export default Movie;