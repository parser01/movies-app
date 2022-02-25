import MyButton from "../UI/MyButton/MyButton";
import MyInput from "../UI/MyInput/MyInput";
import classes from "./SignUpForm.module.css";

const SignUpForm = () => {
    return ( 
        <form className={classes.signUpForm}>
            <MyInput type="text" placeholder="Username" />
            <MyInput type="text" placeholder="Email" />
            <MyInput type="text" placeholder="Password" />
            <MyButton
                onClick={e => e.preventDefault()}
            >
                Sign up
            </MyButton>
        </form>
     );
}
 
export default SignUpForm;