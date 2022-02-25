import News from "../components/News/News";

const NewsPage = ({news}) => {
    return ( 
        <div>
            <News news={news} />
        </div>
     );
}
 
export default NewsPage;