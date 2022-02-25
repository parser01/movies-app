import MyInput from "../UI/MyInput/MyInput";
import MyButton from "../UI/MyButton/MyButton";
import classes from "./GetUpdates.module.css";

const GetUpdates = () => {
    return ( 
        <div className={classes.getUpdates}>
            <h2>Don't miss a movie release. Get updates!</h2>
            <p>Yes! I would like to receive tailored emails and other offers from WM Movies and its affiliates.</p>
            <form>
                <MyInput type="text" placeholder="Email address" />
                <MyButton
                    onClick={e => e.preventDefault()}
                >
                    Submit
                </MyButton>
            </form>
        </div>
     );
}
 
export default GetUpdates;