import { HiOutlineSearch } from "react-icons/hi";
import { Link } from 'react-router-dom';
import { useRef } from 'react';
import classes from './MySearchInput.module.css';

const MySearchInput = ({isActive, setIsActive, setDropdownsAreActive, closedDropdowns, dropdownItems, ...props}) => {
    const searchRef = useRef();

    return (
        <div className={isActive 
                             ? 
                             `${classes.mySearchInput} ${classes.active}` 
                             : 
                             classes.mySearchInput}
        >
            <HiOutlineSearch 
                size="28px"  
                className={classes.searchIcon}
                onClick={e => {
                    e.stopPropagation();
                    setIsActive(!isActive);
                    if (!isActive) { 
                        searchRef.current.focus();
                    } else {
                        searchRef.current.blur();
                    }
                    setDropdownsAreActive(closedDropdowns);
                }}
            />
            <input 
                {...props}
                onClick={e => {
                    e.stopPropagation();
                }}
                ref={searchRef}
            />
            <div className={(dropdownItems.length && isActive) ? `${classes.dropdown} ${classes.dropdownActive}` : classes.dropdown}>
                <ul>
                    {dropdownItems.map(item =>
                        <li key={item.id}>
                            <Link to={`/movie/${item.id}`}>
                                {item.title}
                            </Link>
                        </li> 
                    )}
                </ul>
            </div>
        </div>
     );
}
 
export default MySearchInput;