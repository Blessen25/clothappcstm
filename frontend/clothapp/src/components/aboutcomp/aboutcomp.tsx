import React from "react";
import './aboutstyles.css';
import { FlexCompwithimg, ReverseFlexCompwithimg } from "../flexcomp.tsx";
import { AboutusthreecarddivProps } from "../../interface/interface.tsx";
import { faDollarSign, faHeadset, faLeaf, faM, faMoneyBill, faMoneyBill1Wave, faMoneyBillTransfer, faMoneyBillWave, faMoneyCheckDollar, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
            <Aboutusthreecarddiv h2text="Affordability Without Compromise" ptext={"We believe that great fashion shouldn't come at an outrageous cost. Our goal is to provide stylish and high-quality clothing at prices that remain accessible to everyone."} icon={faMoneyCheckDollar}/>
            <Aboutusthreecarddiv h2text="Sustainability & Ethical Sourcing" ptext={"Fashion should be both beautiful and responsible. That’s why we prioritize eco-friendly materials, ethical sourcing, and sustainable production practices to minimize our environmental footprint."} icon={faLeaf}/>
            <Aboutusthreecarddiv h2text="Customer-Centric Approach" ptext={"Your satisfaction is our priority. From the moment you browse our collections to the time you receive your package, we ensure a seamless, enjoyable shopping experience backed by top-notch customer support and hassle-free returns."} icon={faHeadset}/>
        </div>
    )
}


export const Aboutusthreecarddiv:React.FC<AboutusthreecarddivProps> = (props) => {
    return(
        <div className="aboutusthreecard">
        <div className="aboutusthreeimgdiv">
            <FontAwesomeIcon icon={props.icon} className="aboutusthreeicon"/>
        </div>
        <div className="aboutusthreetextdiv">
            <h2>{props.h2text}</h2>
            <p>{props.ptext}</p>
        </div>
    </div>
    )
}