import { useState } from "react";
import { getTrackBackground, Range } from "react-range";
import classes from "./RangeSlider.module.css";

const RangeSlider = ({values, setValues, stepValue, minValue, maxValue}) => {
    const [isActiveThumb, setIsActiveThumb] = useState(false);

    return ( 
        <div className={classes.range}>
            <div>{minValue}</div>
            <Range
                values={values}
                step={stepValue}
                min={minValue}
                max={maxValue}
                allowOverlap
                onChange={values => {
                    setValues(values);
                    setIsActiveThumb(true);
                }}
                onFinalChange={() => setIsActiveThumb(false)}
                renderTrack={({ props, children }) => (
                    <div
                        onMouseDown={props.onMouseDown}
                        onTouchStart={props.onTouchStart}
                    >
                        <div
                            className={classes.track}
                            ref={props.ref}
                            style={{
                                background: getTrackBackground({
                                    values,
                                    colors: ['#fff', 'yellow', '#fff'],
                                    min: minValue,
                                    max: maxValue
                                })
                            }}
                        >
                            {children}
                        </div>
                    </div>
                )}
                renderThumb={({ index, props }) => (
                    <div
                        className={classes.thumb}
                        {...props}
                        onMouseDown={() => setIsActiveThumb(true)}
                        onMouseUp={() => setIsActiveThumb(false)}
                    >
                        <div
                            className={isActiveThumb ? `${classes.showRangeValue} ${classes.rangeValue}` : classes.rangeValue}
                        >
                            {values[index]}
                        </div>
                    </div>
                )}
            />
            <div>{maxValue}</div>
        </div>
     );
}
 
export default RangeSlider;