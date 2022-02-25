import { useState } from "react";
import { HiOutlineCheck } from "react-icons/hi";
import classes from "./CheckboxList.module.css";

const CheckboxList = ({items, areChecked, setAreChecked}) => {
    return ( 
        <div className={classes.checkboxList}>
            {items.map(item =>
                 <div key={item}>
                    <input 
                        type="checkbox" 
                        id={item} 
                        checked={areChecked[item]}
                        onChange={e => setAreChecked({...areChecked, [item]: e.target.checked})} 
                    />
                    <label 
                        htmlFor={item}
                        className={areChecked[item] ? `${classes.label} ${classes.active}` : classes.label}
                    >
                        <HiOutlineCheck 
                            className={areChecked[item] ? `${classes.showCheckIcon} ${classes.checkIcon}` : classes.checkIcon}
                        />
                        <span>
                            {item}
                        </span>
                    </label>
                </div> 
            )}
        </div>
     );
}
 
export default CheckboxList;