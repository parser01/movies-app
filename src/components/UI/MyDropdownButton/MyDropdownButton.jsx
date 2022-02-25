import { HiOutlineChevronDown } from "react-icons/hi";
import classes from "./MyDropdownButton.module.css";

const MyDropdownButton = ({isActive, children, ...props}) => {
    return ( 
        <div 
            className={isActive ? `${classes.myDropdownButton} ${classes.active}` : classes.myDropdownButton}
            {...props} 
        >
            <div>
                {children}
            </div>
            <HiOutlineChevronDown className={classes.arrowIcon} />
        </div>
     );
}
 
export default MyDropdownButton;
