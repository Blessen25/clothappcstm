import React, { useState } from "react";
import './header.css'
import { FaBars, FaRegUserCircle, FaSearch, } from "react-icons/fa";
import { Search, ShoppingCart, } from "react-feather";

const Header = () =>{

    const [isSearchBarActive, setIsSearchBarActive] = useState(false)
    const handleSearchBarChange = () =>{
        setIsSearchBarActive(!isSearchBarActive)
    }
    return(
        <>
        <section id="Header">
            <div className="headerparent">
                <div className="headerchildfirst">
                    <h1>Shop.Cloth</h1>
                </div>
                <div className="headerchildsecond">
                    <a href="#" >Home</a>
                    <a href="#">About</a>
                    <a href="#">Product</a>
                    <a href="#">Category</a>
                </div>
                <div className="headerchildthird">
                    <input type="Search" className="searchbar" placeholder="Search For Products..."/>
                </div>
                <div className="headerchildfourth">
                    <ShoppingCart className="headericonclass"/>
                    <FaRegUserCircle className="headericonclass"/>
                </div>
                <div className="headerrespcontainer-cstmone">
                    <FaBars className="fabarsicon"/>
                    <h1 className="h1textcstm">Shop.Cloth</h1>
                </div>
                {isSearchBarActive ? (
                    <>
                    <div className="headerrespcontainer-cstmtwo">
                        <div className="searchbariconparentcstm">
                            <input type="search" className="searchbarcstm" placeholder="Search For Products..."/>
                            <Search className="headericonclass searchbariconcstm" onClick={handleSearchBarChange}/>
                        </div>
                        <ShoppingCart className="headericonclass"/>
                        <FaRegUserCircle className="headericonclass"/>
                    </div>
                    </>
                ) : (
                <>
                    <div className="headerrespcontainer-cstmsecond">
                        <Search className="headericonclass searchbariconcustom" onClick={handleSearchBarChange}/>
                        <ShoppingCart className="headericonclass"/>
                        <FaRegUserCircle className="headericonclass"/>
                    </div>
                </>
            ) }
            </div>
        </section>
        <div className="sidebar"></div>
        <div className="outlaysidebar">
        </div>
        </>
    )
}

export default Header