import { NavLink } from "react-router-dom";
import classes from './MyNavLink.module.css';

const CustomNavLink = ({children, to, onClick}) => {
    return ( 
        <NavLink 
            to={to} 
            onClick={onClick}
            className={({isActive}) => 
                isActive 
                        ? 
                        `${classes.navLink} ${classes.activeNavLink}` 
                        : 
                        classes.navLink}
        >
            {children}
        </NavLink>
     );
}
 
export default CustomNavLink;