import { useParams } from "react-router-dom";
import NewsPiece from "../components/NewsPiece/NewsPiece";
import NotFoundPage from "./NotFoundPage";

const NewsPiecePage = ({news}) => {
    const {id} = useParams();
    const newsPiece = news.find(newsPiece => 
                                `${newsPiece.title} ${newsPiece.date}`
                                .toLowerCase()
                                .replace(/ /g, '-')
                                === 
                                id);

    if (newsPiece === undefined) {
        return <NotFoundPage />
    }
    
    return ( 
        <div>
            <NewsPiece newsPiece={newsPiece} />
        </div>
     );
}
 
export default NewsPiecePage;