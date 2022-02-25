import { useState } from "react";
import { HiOutlineArrowUp } from "react-icons/hi";
import classes from "./ScrollToTopButton.module.css";

const ScrollToTopButton = ({filtersAreActive}) => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleIsVisible = () => {
        if (window.pageYOffset > 20) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    window.addEventListener('scroll', toggleIsVisible);

    return ( 
        <div 
            className={(isVisible && !filtersAreActive) ? `${classes.scrollToTopButton} ${classes.visible}` : classes.scrollToTopButton}
            onClick={scrollToTop}
        >
            <HiOutlineArrowUp />
        </div>
     );
}
 
export default ScrollToTopButton;