import classes from "./SignInAndSignUp.module.css";
import Tabs from "../UI/Tabs/Tabs";
import SignInForm from "../SignInForm/SignInForm";
import SignUpForm from "../SignUpForm/SignUpForm";

const SignInAndSignUp = () => {
    const tabButtons = [
        'Sign in',
        'Sign up',
    ];

    return ( 
        <div className={classes.signInAndSignUp}>
            <div className="section_padding background">
                <div className="container">
                    <div className={classes.centered}>
                        <Tabs
                            buttons={tabButtons}
                            contents={[
                                <SignInForm />,
                                <SignUpForm />,
                            ]}
                        />
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default SignInAndSignUp;