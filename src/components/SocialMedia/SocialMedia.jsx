import { FaFacebookSquare, FaTwitter, FaYoutube, FaInstagram, FaPinterestSquare } from "react-icons/fa";
import classes from "./SocialMedia.module.css";

const SocialMedia = () => {
    const items = [
        {href: 'https://www.facebook.com/', content: <FaFacebookSquare />},
        {href: 'https://www.twitter.com/', content: <FaTwitter />},
        {href: 'https://www.youtube.com/', content: <FaYoutube />},
        {href: 'https://www.instagram.com/', content: <FaInstagram />},
        {href: 'https://www.pinterest.com/', content: <FaPinterestSquare />},
    ];

    return ( 
        <section className={classes.socialMedia}>
            <div className="section_padding background">
                <div className="container">
                    <h2 className="marginBottom">
                        Join the conversation
                    </h2>
                    <ul>
                        {items.map(item => 
                            <li key={item.href}>
                                <a href={item.href}>
                                    {item.content}
                                </a>
                            </li>)}
                    </ul>
                </div>
            </div>
        </section>
     );
}
 
export default SocialMedia;