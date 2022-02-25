import { HiOutlineAdjustments } from "react-icons/hi";
import MyDropdownFilter from "../UI/MyDropdownFilter/MyDropdownFilter";
import MyFilter from "../UI/MyFilter/MyFilter";
import RangeSlider from "../UI/RangeSlider/RangeSlider";
import CheckboxList from "../UI/CheckboxList/CheckboxList";
import classes from "./FindMovies.module.css";
import FilteredMovies from "../FilteredMovies/FilteredMovies";

const FindMovies = ({myFilters, toggleDropdown, dropdownsAreActive, setFiltersAreActive, movies}) => {
    return ( 
        <div className={classes.findMovies}>
            <div className="section_padding background">
                <div className="container">
                    <div className={classes.title}>
                        <div className="background">
                            <div>Find movies</div>
                            <HiOutlineAdjustments 
                                className={classes.filterIcon}
                                onClick={() => {
                                    setFiltersAreActive(true);
                                    document.body.style='overflow: hidden';
                                }}
                            />
                            <div className={classes.myDropdownFilters}>
                                {myFilters.map((item, index) => 
                                    <MyDropdownFilter 
                                        key={item.title} 
                                        isActive={dropdownsAreActive[index].isActive}
                                        title={item.title}
                                        toggleDropdown={() => toggleDropdown(item.title)}
                                    >
                                        <MyFilter
                                            isActive={dropdownsAreActive[index].isActive}
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
                                    </MyDropdownFilter>
                                )}
                            </div>
                        </div>
                    </div>
                    <FilteredMovies filteredMovies={movies} />
                </div>
            </div>
        </div>
     );
}
 
export default FindMovies;