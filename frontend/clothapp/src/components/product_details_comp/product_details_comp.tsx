import React from "react";
import './product_details_style.css';
import { Propsstarsection } from "../homecomp/homecomponent.tsx";

export const ProductDetailsComp = () =>{

    return(

        <>
            <div className="productdetailsintro">
                <div className="productdetailschilddiv">
                    <div className="productdetailschildone">
                        <img src="../assets/Images/browndress.png" className="productdetailsimg"/>
                    </div>
                    <div className="productdetailschildtwo">
                        <h1 className="mainheadingcstm">ONE LIFE GRAPHIC T-SHIRT</h1>
                        <div className="starsectionproductdetailsparent">
                            <div className="starsectionproductdetails">
                                <Propsstarsection star={5} />
                            </div>
                            <span>4.5/5</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

