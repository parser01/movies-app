import { useState } from "react";
import classes from "./Tabs.module.css";

const Tabs = ({buttons, contents, maxWidth}) => {
    const [activeTab, setActiveTab] = useState(0);

    return ( 
        <div 
            className={classes.tabs} 
            style={{maxWidth: maxWidth}}
        >
            <div className={classes.buttons}>
                 {buttons.map((item, index, array) => 
                    <button 
                        key={item}
                        className={activeTab === index 
                                    ? 
                                    `${classes.button} ${classes.activeButton}` 
                                    : 
                                    classes.button}
                        onClick={() => setActiveTab(index)}
                    >
                        {item}
                        <div 
                            style={{
                                    left: `calc(100% / ${array.length} * ${activeTab})`,
                                    width: `calc(100% / ${array.length})`
                                }}
                        />
                    </button>    
                )} 
            </div>

            <div className={classes.contents}>
                {contents.map((content, index) =>
                    <div 
                        key={index}
                        className={activeTab === index
                                    ?
                                    `${classes.content} ${classes.activeContent}`
                                    :
                                    classes.content}
                    >
                        {content}
                    </div>
                )}
            </div>
        </div>
     );
}
 
export default Tabs;