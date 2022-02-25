import { useMemo, useState } from "react";
import { HiOutlineMenu } from "react-icons/hi";
import logo from "../../assets/logo.svg";
import MySearchInput from "../UI/MySearchInput/MySearchInput";
import MyNavLink from "../UI/MyNavLink/MyNavLink";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import MyButton from "../UI/MyButton/MyButton";
import LinkButton from "../UI/LinkButton/LinkButton";

const Header = ({movies, menuItems, searchIsActive, setSearchIsActive, setMenuIsActive, setModalIsActive, setDropdownsAreActive, closedDropdowns}) => {
    const [searchValue, setSearchValue] = useState('');

    const findMovies = () => {
        if (searchValue.includes(' ') && !(searchValue === ' ')) {
            return movies.filter(movie => 
                movie.title.toLowerCase().includes(searchValue.toLowerCase())
            );
        }

        return movies.filter(movie => 
            movie.title.toLowerCase() === searchValue.toLowerCase()
            ||
            movie.title.toLowerCase().startsWith(`${searchValue} `.toLowerCase())
            ||
            movie.title.toLowerCase().startsWith(`${searchValue}: `.toLowerCase())
            ||
            movie.title.toLowerCase().startsWith(`${searchValue}? `.toLowerCase())
            ||
            movie.title.toLowerCase().startsWith(`${searchValue}! `.toLowerCase())
            ||
            movie.title.toLowerCase().startsWith(`${searchValue}, `.toLowerCase())
            ||  
            movie.title.toLowerCase().includes(` ${searchValue} `.toLowerCase())
            ||
            movie.title.toLowerCase().includes(` ${searchValue}: `.toLowerCase())
            ||
            movie.title.toLowerCase().includes(` ${searchValue}? `.toLowerCase())
            ||
            movie.title.toLowerCase().includes(` ${searchValue}! `.toLowerCase())
            ||
            movie.title.toLowerCase().includes(` ${searchValue}, `.toLowerCase())
            ||
            movie.title.toLowerCase().endsWith(` ${searchValue}`.toLowerCase())
        )
    };

    const searchedMovies = useMemo(() => {
        return findMovies(); 
    }, [searchValue]);

    return ( 
        <header className={classes.header}>
            <div className="container">
                <h1 className={searchIsActive 
                                    ? 
                                    `${classes.logo} ${classes.active}` 
                                    : 
                                    classes.logo}
                >
                    <Link to="/">
                        <img src={logo} alt="logo" />
                    </Link>
                </h1>
                <div className={searchIsActive 
                                    ? 
                                    `${classes.navMenu_search_burger} ${classes.fullWidth}`
                                    : 
                                    classes.navMenu_search_burger}
                >
                    <nav className={classes.navMenu}>
                        <ul>
                            {menuItems.map(menuItem => 
                                <li key={menuItem.to}>
                                    <MyNavLink to={menuItem.to}>
                                        {menuItem.content}
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
                            >
                                Log in
                            </LinkButton>
                        </div>
                    </nav>
                    <div className={searchIsActive 
                                        ? 
                                        `${classes.search_burger} ${classes.fullWidth}` 
                                        : 
                                        classes.search_burger}
                    >
                        <MySearchInput 
                            type="search"
                            placeholder="Search Movies"
                            isActive={searchIsActive}
                            setIsActive={setSearchIsActive}
                            setDropdownsAreActive={setDropdownsAreActive}
                            closedDropdowns={closedDropdowns}
                            dropdownItems={searchedMovies}
                            value={searchValue}
                            onChange={e => {
                                setSearchValue(e.target.value)
                            }}
                        />
                        <HiOutlineMenu 
                            color="#fff"
                            size="35px"
                            onClick={() => 
                                {
                                    setMenuIsActive(true);
                                    document.body.style='overflow: hidden';
                                }} 
                            className={classes.burger}
                        />
                    </div>
                </div>
            </div>
        </header>
     );
}
 
export default Header;