import React, { useState } from "react";
import './cart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaMinus } from "react-icons/fa";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

const AddtoCart = () => {
    return (
        <>
            <div className="addtocartintro">
                <h1 className="mainheadingcstm">YOUR CART</h1>
                <div className="cartamountanditemparent">
                    <div className="itemschild">
                        <div className="itemcartdiv">
                            <Itemscartdiv />
                        </div>
                    </div>
                    <div className="amountchild">

                    </div>
                </div>
            </div>
        </>
    )
}

const Itemscartdiv = () => {

    const [quantity, setQuantity] = useState(1);
    const handlequantityminus = () => {

        if (quantity > 0) {

            setQuantity(prev => prev -1)
        }

    }

    const handlequantityplus = () => {

        setQuantity(prev => prev + 1)
    }

    return (

        
        <>
            <div className="itemdivparent">
                <div className="imagedivparent">
                    <img src="assets/Images/browndress.png" alt="" className="imagecstmchils" />
                </div>
                <div className="contentdivparent">
                    <h1>ONE LIFE GRAPHIC T-SHIRT</h1>
                    <p>Size : Large</p>
                    <p>Quantity : {quantity}</p>
                    <div className="priceandquantitydiv">
                        <h1>RS 220</h1>
                        <div className="quantitydivbtncstm">
                            <FontAwesomeIcon icon={faMinus} className="faiconcartdetails" onClick={handlequantityminus}/>
                            <p>{quantity}</p>
                            <FontAwesomeIcon icon={faPlus} className="faiconcartdetails" onClick={handlequantityplus}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { AddtoCart, Itemscartdiv }

