import React, { useState } from "react";
import './product_details_style.css';
import { HappyCustomerCmntSection, HomepageNewarrivals, Propsstarsection } from "../homecomp/homecomponent.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";
import { topSellingData } from "../../data.tsx";


export const ProductDetailsComp = () => {

    const [totalquantity, setTotalquantity] = useState(1);

    const handlePlusChange = () => {

        setTotalquantity(totalquantity + 1)
    }

    const handleMinusChange = () => {

        if (totalquantity > 1) {

            setTotalquantity(totalquantity - 1)
        }
    }
    return (

        <>
            <div className="productdetailsintro">
                <div className="productdetailschilddiv">
                    <div className="productdetailschildone">
                        <div className="productdetail3imagediv">
                            <div className="productfirstimagediv">
                                <img src="../assets/Images/browndress.png" className="productdetailsleftdivimg" />
                            </div>
                            <div className="productfirstimagediv">
                                <img src="../assets/Images/browndress.png" className="productdetailsleftdivimg" />
                            </div>
                            <div className="productfirstimagediv">
                                <img src="../assets/Images/browndress.png" className="productdetailsleftdivimg" />
                            </div>
                        </div>
                        <div className="productdetail1imagediv">
                            <img src="../assets/Images/browndress.png" className="productdetailsimg" />
                        </div>
                    </div>
                    <div className="productdetailschildtwo">
                        <h1 className="mainheadingcstm onelifegraphictext">ONE LIFE GRAPHIC T-SHIRT</h1>
                        <div className="starsectionproductdetailsparent">
                            <div className="starsectionproductdetails">
                                <Propsstarsection star={5} />
                            </div>
                            <span>4.5/5</span>
                        </div>
                        <div className="productpricediv">
                            <h1>Rs 220</h1>
                            <h1 className="productofferprice">RS 360</h1>
                        </div>
                        <p className="productdescriptiondiv smallparacstm">This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                        <hr />
                        <p className="smallparacstm">Choose Size :</p>
                        <div className="sizediv">
                            <div className="smallsize">
                                <p>Small</p>
                            </div>
                            <div className="smallsize">
                                <p>Medium</p>
                            </div>
                            <div className="smallsize">
                                <p>Large</p>
                            </div>
                            <div className="smallsize">
                                <p>X-Large</p>
                            </div>
                        </div>
                        <hr />
                        <div className="productdetailslastbuttondiv">
                            <div className="subandaddnumberdiv">
                                <FontAwesomeIcon icon={faMinus} className="faiconproductdetails" onClick={handleMinusChange} />
                                <p>{totalquantity}</p>
                                <FontAwesomeIcon icon={faPlus} className="faiconproductdetails" onClick={handlePlusChange} />
                            </div>
                            <a href="#" className="detailsbuttondiv">
                                Add to Cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <HappyCustomerCmntSection title={"CUSTOMER REVIEWS"} classname="productdetailscustomerrev" />
            <HomepageNewarrivals text={"POPULAR COLLECTIONS"} clothdata={topSellingData} route="/collection" classname="productdetailspopularcstm" />
        </>
    )
}

