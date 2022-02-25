import { HiOutlineX } from "react-icons/hi";
import classes from "./MyModal.module.css";

const MyModal = ({isActive, setIsActive, menuIsActive, children}) => {
    return ( 
        <div 
            className={isActive 
                        ? 
                        `${classes.myModal} ${classes.active}` 
                        : 
                        classes.myModal}
        >
            <div>
                <div className={classes.closeSection}>
                    <HiOutlineX 
                        size="35px" 
                        color="#ffff00" 
                        className={classes.closeIcon}
                        onClick={() => {
                            setIsActive(false);
                            if (!menuIsActive) document.body.style = 'overflow: auto';
                        }}
                    /> 
                </div>             
                {children}
            </div>
        </div>
     );
}
 
export default MyModal;