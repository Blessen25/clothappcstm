import React from "react";
import './aboutstyles.css';
import { FlexCompwithimg, ReverseFlexCompwithimg } from "../flexcomp.tsx";

export const AboutIntroComp = () =>{

    return(

        <>
            <div className="maindivcstmeverypage aboutusintodiv">
                <h1 className="mainheadingcstm">About Us</h1>
                <FlexCompwithimg img={"assets/Images/models_suit_men.jpg"} htext={"QUALITY MEETS STYLE"} ptext={"At Shop.Cloth, we believe that fashion is more than just clothing—it's a statement of individuality, confidence, and self-expression. Our carefully curated collections are designed to bring you the latest trends while maintaining an emphasis on quality and affordability. From timeless classics to bold modern styles, we ensure that every piece is crafted with premium fabrics and attention to detail, so you can look and feel your best—every day."} button={true} buttonlabel="View All"/>
                <Aboutusthreefeatures />
            </div>
        </>
    )
}

export const Aboutusthreefeatures = () => {
    return(
        <div className="aboutusthreefeaturesdiv">
            
        </div>
    )
}
