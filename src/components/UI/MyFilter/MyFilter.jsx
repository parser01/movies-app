import MyButton from "../MyButton/MyButton";
import classes from "./MyFilter.module.css";

const MyFilter = ({title, children, defaultValues, resetValues, isActive}) => {
    return ( 
        <div 
            className={isActive ? `${classes.myFilter} ${classes.active}` : classes.myFilter}
            onClick={e => e.stopPropagation()}
        >
            <div className={classes.myFilterTitle}>
                <h3>{title}</h3>
                <MyButton
                    onClick={() => resetValues(defaultValues)}
                >
                    Reset
                </MyButton>
            </div>
            {children}
        </div>
     );
}
 
export default MyFilter;