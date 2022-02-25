import { Outlet } from "react-router-dom";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import SocialMedia from "./SocialMedia/SocialMedia";

const Layout = ({movies, menuItems, buttons, searchIsActive, setSearchIsActive, setMenuIsActive, setModalIsActive, setDropdownsAreActive, closedDropdowns}) => {
    return ( 
        <>
            <Header 
                movies={movies}
                menuItems={menuItems}
                buttons={buttons}
                searchIsActive={searchIsActive} 
                setSearchIsActive={setSearchIsActive} 
                setMenuIsActive={setMenuIsActive}
                setModalIsActive={setModalIsActive}
                setDropdownsAreActive={setDropdownsAreActive}
                closedDropdowns={closedDropdowns}
            />
            <div className="wrapper">
                <main>
                    <Outlet />
                </main>
                <SocialMedia />
                <Footer />
            </div>
        </>
     );
}
 
export default Layout;