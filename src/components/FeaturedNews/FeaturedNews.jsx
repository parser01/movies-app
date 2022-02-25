import NewsNav from "../NewsNav/NewsNav";
import classes from "./FeaturedNews.module.css";

const FeaturedNews = ({news}) => {
    const featuredNews = news.filter(newsPiece => newsPiece.featured);
/*     const featuredNews = [
        {
            id: 1, 
            title: 'Van Damme is returning', 
            images: {
                image_1: {
                    image: slider11,
                    alt: 'slider 11' 
                },
                image_2: {
                    image: slider12,
                    alt: 'slider 12' 
                },
            }
        },
        {
            id: 2,
            title: 'Stivel Seagal was found smoken smoken in his smoking',
            images: {
                image_1: {
                    image: slider13,
                    alt: 'slider 13' 
                },
                image_2: {
                    image: slider14,
                    alt: 'slider 14' 
                },
            } 
        },
        {
            id: 3, 
            title: 'Spider Man will never be the same he was',
            images: {
                image_1: {
                    image: slider15,
                    alt: 'slider 15' 
                },
                image_2: {
                    image: slider16,
                    alt: 'slider 16' 
                },
            }
        },
        {
            id: 4, 
            title: 'New superhero was found in early comics',
            images: {
                image_1: {
                    image: slider17,
                    alt: 'slider 17' 
                },
                image_2: {
                    image: slider18,
                    alt: 'slider 18' 
                },
            }
        },
    ]; */

    return ( 
        <div className={classes.featuredNews}>
            <div className="section_padding background">
                <div className="container">
                    <h2 className="marginBottom">Featured news</h2>
                    <div className={classes.grid}>
                        {featuredNews.map((item, index) =>
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
 
export default FeaturedNews;