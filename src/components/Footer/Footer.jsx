import MyNavLink from "../UI/MyNavLink/MyNavLink";
import classes from "./Footer.module.css";

const Footer = () => {
    const items = [
        {to: '/privacy-policy', content: 'Privacy policy'},
        {to: '/terms-of-use', content: 'Terms of use'},
        {to: '/ad-choices', content: 'Ad choices'},
    ];

    return ( 
        <footer className={`${classes.footer} section_padding background`}>
            <div className="container">
                <ul className={`${classes.navigation} marginBottom`}>
                    {items.map(item => 
                        <li key={item.to}>
                            <MyNavLink to={item.to}>{item.content}</MyNavLink>
                        </li>)}
                </ul>
                <div className={classes.copyright}>
                    <p>&copy; 2022 Watch Now.</p>
                    <p>All other trademarks and copyrights are the property of their respective owners.</p>
                    <p>All rights reserved.</p>
                </div>
            </div>                   
        </footer>
     );
}
 
export default Footer;