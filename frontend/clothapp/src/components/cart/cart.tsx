import React from "react";
import './cart.css';

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

    return (
        <>
            <div className="itemdivparent">
                <div className="imagedivparent">
                    <img src="assets/Images/browndress.png" alt="" className="imagecstmchils" />
                </div>
                <div className="contentdivparent">
                    <h1>ONE LIFE GRAPHIC T-SHIRT</h1>
                    <p>Size : Large</p>
                    <p>Quantity : 1</p>
                    <div>
                        <h1>RS 220</h1>

                    </div>
                </div>
            </div>
        </>
    )
}

export { AddtoCart, Itemscartdiv }

