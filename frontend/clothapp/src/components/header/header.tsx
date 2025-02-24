import React, { useState } from "react";
import './header.css'
import { FaBars, FaRegUserCircle, FaSearch, } from "react-icons/fa";
import { Search, ShoppingCart, } from "react-feather";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

const Header = () => {

    const handleSidebarChange = () => {
        setSideBarActive(!isSideBarActive)
    }


    const [isSideBarActive, setSideBarActive] = useState(false)
    const [isSearchBarActive, setIsSearchBarActive] = useState(false)
    const handleSearchBarChange = () => {
        setIsSearchBarActive(!isSearchBarActive)
    }
    return (
        <>
            <section id="Header">
                <div className="headerparent">
                    <div className="headerchildfirst">
                        <h1>Shop.Cloth</h1>
                    </div>
                    <div className="headerchildsecond">
                        <a href="/" >Home</a>
                        <a href="/Aboutus">About</a>
                        <a href="/Contact">Contact</a>
                        <a href="#">Product</a>
                        <a href="#">Category</a>
                    </div>
                    <div className="headerchildfourth">
                        <div className="headerchildthird">
                            <input type="Search" className="searchbar" placeholder="Search For Products..." />
                            <Search className="searchiconcstmthird" />
                        </div>
                        <a href="#"><ShoppingCart className="headericonclass" /></a>
                        <a href="#"><FaRegUserCircle className="headericonclass" /></a>
                    </div>
                    <div className="headerrespcontainer-cstmone">
                        <FaBars className="fabarsicon" onClick={handleSidebarChange} />
                        <h1 className="h1textcstm">Shop.Cloth</h1>
                    </div>
                    {isSearchBarActive ? (
                        <>
                            <div className="headerrespcontainer-cstmtwo">
                                <div className="searchbariconparentcstm">
                                    <input type="search" className="searchbarcstm" placeholder="Search For Products..." />
                                    <Search className="headericonclass searchbariconcstm" onClick={handleSearchBarChange} />
                                </div>
                                <a href="#"><ShoppingCart className="headericonclass" /></a>
                                <a href="#"><FaRegUserCircle className="headericonclass" /></a>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="headerrespcontainer-cstmsecond">
                                <Search className="headericonclass searchbariconcustom" onClick={handleSearchBarChange} />
                                <a href="#"><ShoppingCart className="headericonclass" /></a>
                                <a href="#"><FaRegUserCircle className="headericonclass" /></a>
                            </div>
                        </>
                    )}
                </div>
            </section>
            {isSideBarActive && (<>
                <div className="outlaysidebar"></div>
                <div className="sidebar">
                    <div className="searchbardivsidebarcstm">
                        <input type="Search" placeholder="Search For Products..." className="cstmsearchsidebar" />
                        <FontAwesomeIcon icon={faSearch} className="searchiconsidebarcstm" />
                    </div>
                    <a href="/" onClick={handleSidebarChange}>Home</a>
                    <a href="/Aboutus" onClick={handleSidebarChange}>About</a>
                    <a href="/Contact" onClick={handleSidebarChange}>Contact</a>
                    <a href="#" onClick={handleSidebarChange}>Product</a>
                    <a href="#" onClick={handleSidebarChange}>Category</a>
                </div>
            </>)}

        </>
    )
}

export default Header