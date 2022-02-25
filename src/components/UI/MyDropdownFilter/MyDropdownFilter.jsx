import MyDropdownButton from "../MyDropdownButton/MyDropdownButton";
import classes from "./MyDropdownFilter.module.css";

const MyDropdownFilter = ({isActive, title, children, toggleDropdown}) => {
    return ( 
        <div className={classes.myDropdownFilter}>
            <MyDropdownButton 
                isActive={isActive}
                onClick={e => {
                    toggleDropdown();
                    e.stopPropagation();
                }}
            >
                {title}
            </MyDropdownButton>
            {children}
        </div>
     );
}
 
export default MyDropdownFilter;