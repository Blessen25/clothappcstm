import React, { useState } from "react";
import './cart.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaMinus } from "react-icons/fa";
import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import { ItemscartdivProps } from "../../interface/interface";


const cardData = [
    {

        image: "assets/Images/browndress.png",
        title: "ONE LIFE GRAPHIC T-SHIRT",
        size: "Large",
        quantity: 1,
        price: 220,
    },
    {

        image: "assets/Images/browndress.png",
        title: "ONE LIFE GRAPHIC T-SHIRT",
        size: "Small",
        quantity: 1,
        price: 240,
    },
    {

        image: "assets/Images/browndress.png",
        title: "ONE LIFE GRAPHIC T-SHIRT",
        size: "Medium",
        quantity: 3,
        price: 260,
    },
    {

        image: "assets/Images/browndress.png",
        title: "ONE LIFE GRAPHIC T-SHIRT",
        size: "Large",
        quantity: 1,
        price: 260,
    },

];



const AddtoCart = () => {

    const [activatecoupen, setActivateCoupen ] = useState(false)
    const handleActivateCoupen = () => {

        setActivateCoupen(!activatecoupen)
    }
    return (
        <>
            <div className="addtocartintro">
                <h1 className="mainheadingcstm">YOUR CART</h1>
                <div className="cartamountanditemparent">
                    <div className="itemschild">
                        <div className="itemcartdiv">
                            {
                                cardData.map((card, index) => (
                                    <>
                                        {index > 0 && <div className="divider-cstm"></div>}
                                        <Itemscartdiv
                                            key={index}
                                            image={card.image}
                                            title={card.title}
                                            size={card.size}
                                            quantity={card.quantity}
                                            price={card.price}
                                        />
                                    </>
                                ))}
                        </div>
                    </div>
                    <div className="amountchild">
                        <div className="amountdiv">
                            <h1>Order Summary</h1>
                            <div className="totalsubtotalcstmdiv">
                                    <div className="subtitlecstmdiv">
                                        <p>Subtotal</p>
                                        <h2>Rs 600</h2>
                                    </div>
                                    <div className="subtitlecstmdiv">
                                        <p>Discount (-20%)</p>
                                        <h2>Rs 600</h2>
                                    </div>
                                    <div className="subtitlecstmdiv">
                                        <p>Delivery Fee</p>
                                        <h2>Rs 600</h2>
                                    </div>
                                    <div className="border-cstm"></div>
                                    <div className="subtitlecstmdiv">
                                        <h1>Total Price</h1>
                                        <h3>Rs 1800</h3>
                                    </div>
                                    <div className="border-cstm"></div>
                                    
                            </div>
                            {!activatecoupen && (
                                <a href="#" className="buttonaddtocartcstm" onClick={handleActivateCoupen}>Add Discount Coupen</a>
                            )}
                            {activatecoupen && (
                                <div className="activatecoupen">
                                <input type="text" className="activatecoupentextinput" placeholder="Add Coupen Code"/>
                                <a href="#" className="buttonactivatecoupencstm">Add Discount</a>
                                </div>
                            )}
                            <a href="#" className="buttonaddtocartcstm">Buy Now</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const Itemscartdiv: React.FC<ItemscartdivProps> = (Props) => {

    const [quantity, setQuantity] = useState(Props.quantity);
    const handlequantityminus = () => {

        if (quantity > 1) {

            setQuantity(prev => prev - 1)
        }

    }

    const handlequantityplus = () => {

        setQuantity(prev => prev + 1)
    }

    return (

        <>
            <div className="itemdivparent">
                <div className="imagedivparent">
                    <img src={Props.image} alt="" className="imagecstmchils" />
                </div>
                <div className="contentdivparent">
                    <div className="nameanddeletebutton"> 
                       <h1>{Props.title}</h1>
                       <FontAwesomeIcon icon={faTrash} className="trashcancstm"/>
                    </div>
                    <p>Size : {Props.size}</p>
                    <p>Quantity : {quantity}</p>
                    <div className="priceandquantitydiv">
                        <h1>RS {Props.price}</h1>
                        <div className="quantitydivbtncstm">
                            <FontAwesomeIcon icon={faMinus} className="faiconcartdetails" onClick={handlequantityminus} />
                            <p>{quantity}</p>
                            <FontAwesomeIcon icon={faPlus} className="faiconcartdetails" onClick={handlequantityplus} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export { AddtoCart, Itemscartdiv }

