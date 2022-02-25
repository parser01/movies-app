import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import classes from "./SignInForm.module.css";

const SignInForm = () => {
    return ( 
        <form className={classes.signInForm}>
            <MyInput type="text" placeholder="Username or Email" />
            <MyInput type="text" placeholder="Password" />
            <MyButton
                onClick={e => e.preventDefault()}
            >
                Sign in
            </MyButton>
        </form>
     );
}
 
export default SignInForm;