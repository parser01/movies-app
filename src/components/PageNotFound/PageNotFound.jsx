import classes from "./PageNotFound.module.css";

const PageNotFound = () => {
    return ( 
        <div className={classes.pageNotFound}>
            <div className="section_padding background">
                <div className="container">
                    <h2>404</h2>
                    <p>Page Not Found</p>
                </div>
            </div>
        </div>
     );
}
 
export default PageNotFound;