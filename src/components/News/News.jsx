import NewsNav from "../NewsNav/NewsNav";
import classes from "./News.module.css";

const News = ({news}) => {
    return ( 
        <div className={classes.news}>
            <div className="section_padding background">
                <div className="container">
                    <div className={classes.grid}>
                            {news.map((item, index) =>
                                <NewsNav 
                                    key={item.title + item.date + index}
                                    id={`${item.title} ${item.date}`
                                        .toLowerCase()
                                        .replace(/ /g, '-')}
                                    images={item.images}
                                    title={item.title}
                                /> 
                            )} 
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default News;