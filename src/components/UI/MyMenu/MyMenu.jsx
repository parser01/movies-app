import { HiOutlineX } from "react-icons/hi";
import { Link } from "react-router-dom";
import MyNavLink from "../MyNavLink/MyNavLink";
import classes from "./MyMenu.module.css";
import MyButton from "../MyButton/MyButton";
import LinkButton from "../LinkButton/LinkButton";

const MyMenu = ({logo, items, isActive, setIsActive, setModalIsActive}) => {
    return ( 
        <nav 
            className={isActive 
                            ? 
                            `${classes.myMenu} ${classes.active}` 
                            : 
                            classes.myMenu}
        >
            <Link 
                to="/" className={classes.logo}
                onClick={() => setIsActive(false)}
            >
                <img src={logo} alt="logo" />
            </Link>
            <HiOutlineX 
                size="35px" 
                color="#fff" 
                className={classes.closeIcon}
                onClick={() => {
                    setIsActive(false);
                    document.body.style='overflow: auto';
                }}
            />
            <ul>
                {items.map(item =>
                    <li key={item.to}>
                        <MyNavLink  
                            to={item.to}
                            onClick={() => {
                                setIsActive(false);
                                document.body.style = 'overflow: auto';
                            }}
                        >
                            {item.content}
                        </MyNavLink>
                    </li>)}
            </ul>
            <div className={classes.buttons}>
                <MyButton
                    onClick={() => {
                        setModalIsActive(true);
                        document.body.style = 'overflow: hidden';
                    }}
                >
                    Stay connected
                </MyButton>
                <LinkButton 
                    to="/login"
                    onClick={() => {
                        setIsActive(false);
                        document.body.style = 'overflow: auto';
                    }}
                >
                    Log in
                </LinkButton>
            </div>
        </nav>
     );
} 
 
export default MyMenu;