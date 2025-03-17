import React from "react";
import './cart.css';

const AddtoCart = () => {
    return (
        <>
            <div className="addtocartintro">
                <h1 className="mainheadingcstm">YOUR CART</h1>
                <div className="cartamountanditemparent">
                    <div className="itemschild">
                        <Itemscartdiv />
                    </div>
                    <div className="amountchild">

                    </div>
                </div>
            </div>
        </>
    )
}

const Itemscartdiv = () => {

    return(
        <>
            <div className="itemcartdiv">
              
            </div>
        </>
    )
}

export { AddtoCart, Itemscartdiv }

