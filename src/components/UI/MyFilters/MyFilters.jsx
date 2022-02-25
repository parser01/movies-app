import MyButton from "../MyButton/MyButton";
import MyFilter from "../MyFilter/MyFilter";
import RangeSlider from "../RangeSlider/RangeSlider";
import CheckboxList from "../CheckboxList/CheckboxList";
import classes from "./MyFilters.module.css";

const MyFilters = ({areActive, setActive, myFilters}) => {
    return ( 
        <div className={areActive ? `${classes.myFilters} ${classes.active}` : classes.myFilters}>
            <div className={classes.header}>
                <h2>Filters</h2>
                <MyButton
                    onClick={() => {
                        setActive(false);
                        document.body.style='overflow: auto';
                    }}
                >
                    Done
                </MyButton>
            </div>
            {myFilters.map(item => 
                <MyFilter
                    key={item.title}
                    title={item.title}
                    defaultValues={item.defaultValues}
                    resetValues={item.setValues}
                >
                    {item.type === 'range' 
                        ?
                        <RangeSlider 
                            values={item.values}
                            setValues={item.setValues}
                            stepValue={item.stepValue}
                            minValue={item.minValue}
                            maxValue={item.maxValue}
                        />
                        :
                        <CheckboxList 
                            items={item.items}
                            areChecked={item.areChecked}
                            setAreChecked={item.setAreChecked}
                        /> 
                    }
                </MyFilter>
            )}          
        </div>
     );
}
 
export default MyFilters;