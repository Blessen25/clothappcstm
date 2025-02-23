import React from "react";
import './aboutstyles.css';
import { FlexCompwithimg, ReverseFlexCompwithimg } from "../flexcomp.tsx";
import { AboutusthreecarddivProps, AboutusthreefeaturesProps } from "../../interface/interface.tsx";
import { faDollarSign, faHeadset, faLeaf, faM, faMoneyBill, faMoneyBill1Wave, faMoneyBillTransfer, faMoneyBillWave, faMoneyCheckDollar, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ourmissionandvaluesdata, whychooseusdata } from "../../data.tsx";
import { HappyCustomerCmntSection } from "../homecomp/homecomponent.tsx";

export const AboutIntroComp = () =>{

    return(

        <>
            <div className="maindivcstmeverypage aboutusintodiv">
                <h1 className="mainheadingcstm">ABOUT US</h1>
                <FlexCompwithimg img={"assets/Images/models_suit_men.jpg"} htext={"QUALITY MEETS STYLE"} ptext={"At Shop.Cloth, we believe that fashion is more than just clothing—it's a statement of individuality, confidence, and self-expression. Our carefully curated collections are designed to bring you the latest trends while maintaining an emphasis on quality and affordability. From timeless classics to bold modern styles, we ensure that every piece is crafted with premium fabrics and attention to detail, so you can look and feel your best—every day."} button={true} buttonlabel="View All"/>
                <Aboutusthreefeatures title={"OUR MISSION AND VALUES"} features={ourmissionandvaluesdata}/>
                <AboutusOurStory />
                <WhychooseusComp /> 
            </div>
            <HappyCustomerCmntSection title="WHAT PEOPLE TELL ABOUT US" />

        </>
    )
}

export const Aboutusthreefeatures:React.FC<AboutusthreefeaturesProps> = (Props) => {
    return(
        <>
        <div className="mainaboutusthreefeaturesdiv">
            <div>
                <h1 className="mainheadingcstm">{Props.title}</h1>
            </div>
            <div className="aboutusthreefeaturesdiv">
                {Props.features.map((items, index) => (
                    <Aboutusthreecarddiv 
                    key={index}
                    h2text={items.h2text}
                    ptext={items.ptext}
                    icon={items.icon}
                    />
                ))}
            </div>
        </div>
        </>
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

export const AboutusOurStory = () =>{
    return(
        <div className="ourstorydiv">
            <h1 className="mainheadingcstm">OUR STORY</h1>
            <p className="mainparacstm">Our journey began with a simple idea: making high-quality fashion accessible to everyone. Founded by passionate fashion enthusiasts, Shop.Cloth started as a small boutique with a mission to redefine everyday fashion. We understood the struggles of finding affordable, stylish, and well-made clothing, and we set out to change that. Over time, what started as a passion project turned into a thriving eCommerce brand, trusted by thousands of customers who seek both elegance and comfort in their wardrobe. Today, we take pride in offering a diverse range of clothing that combines affordability, sustainability, and timeless appeal.</p>
        </div>
    )
}

export const WhychooseusComp = () =>{
    return(
            <Aboutusthreefeatures title={"WHY CHOOSE US?"} features={whychooseusdata}/>
    )
}