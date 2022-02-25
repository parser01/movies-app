import classes from "./NewsPiece.module.css";

const NewsPiece = ({newsPiece}) => {
    return ( 
        <div className={classes.newsPiece}>
            <div className="section_padding background">
                <div className="container">
                    <div className={classes.image}>
                        <img 
                            src={newsPiece.images.image_3.image} 
                            alt={newsPiece.images.image_3.alt} 
                        />
                    </div>
                    <h2>{newsPiece.title}</h2>
                    <div className={classes.date}>{newsPiece.date}</div>
                    <p>{newsPiece.text}</p>
                </div>
            </div>
        </div>
    );
}
 
export default NewsPiece;