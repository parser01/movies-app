import classes from "./NewsNav.module.css";
import { HiOutlineChevronDoubleRight } from "react-icons/hi";
import { Link } from "react-router-dom";

const NewsNav = ({id, images, title}) => {
    return ( 
        <Link 
            to={`/news/${id}`}
            className={classes.newsNav}
        >
            <div className={classes.image}>
                <img src={images.image_1.image} alt={images.image_1.alt} />
                <img src={images.image_2.image} alt={images.image_2.alt} />
            </div>  
            <div className={`${classes.title} reverseBackground`}>
                <h3>{title}</h3>
                <button type="button">
                    <span>
                        Read more
                    </span>
                    <HiOutlineChevronDoubleRight />
                </button>
            </div>  
        </Link>
     );
}
 
export default NewsNav;