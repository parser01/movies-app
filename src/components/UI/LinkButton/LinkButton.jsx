import { Link } from "react-router-dom";
import classes from "./LinkButton.module.css";

const LinkButton = ({to, children, ...props}) => {
    return ( 
        <Link 
            to={to}
            {...props}
            className={classes.linkButton}
        >
            {children}
        </Link>
     );
}
 
export default LinkButton;