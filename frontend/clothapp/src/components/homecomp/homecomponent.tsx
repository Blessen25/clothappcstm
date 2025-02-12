import React from "react";
import './homecomp.css';
import { ClothdetailsCardProps, HomepageNewarrivalsProps, numberplustextProps } from "../../interface/interface";
import { faStar, faStarHalf, faStarHalfAlt, faStarHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
export const HomeIntropage = () => {
    return(
        <React.Fragment>
            <div className="homeintropageparent">
                <div className="homeintropagechildone">
                        <h1 className="h1text">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                        <p className="paratext">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                        <a href="#">Shop Now</a>
                        <div className="brandsproductscustomer">
                            <Numberplustext number={"200"} text={"International Brand"} />
                            <div className="borderline"></div>
                            <Numberplustext number={"2,000"} text={"High-Quality Products"} />
                            <div className="borderline"></div>
                            <Numberplustext number={"30,000"} text={"Happy Customers"} />

                        </div>
                </div>
                <div className="homeintropagechildtwo">
                    <img src="assets/Images/Vector.png" alt="Vector one" className="vectorimgone"/>
                    <img src="assets/Images/Vector.png" alt="Vector one" className="vectorimgtwo"/>
                </div>
            </div>
        </React.Fragment>
    )
}


export const Numberplustext:React.FC<numberplustextProps> = (Props) =>{
    return(
        <>
            <div className="numberplustextdiv">
                <h1>{Props.number}+</h1>
                <p>{Props.text}</p>
            </div>
        </>
    )

}

export const Slidinglogo = () => {
    return(
        <>
            <div className="slidinglogoparent">
                <div className="slidinglogochild">
                    <img src="assets/Logo/Versacelogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Zaralogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Pradalogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Guccilogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Calvinklein.png" alt="logo" className="slidinglogoimg"/>

                    <img src="assets/Logo/Versacelogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Zaralogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Pradalogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Guccilogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Calvinklein.png" alt="logo" className="slidinglogoimg"/>

                    <img src="assets/Logo/Versacelogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Zaralogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Pradalogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Guccilogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Calvinklein.png" alt="logo" className="slidinglogoimg"/>

                    <img src="assets/Logo/Versacelogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Zaralogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Pradalogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Guccilogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Calvinklein.png" alt="logo" className="slidinglogoimg"/>

                    <img src="assets/Logo/Versacelogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Zaralogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Pradalogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Guccilogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Calvinklein.png" alt="logo" className="slidinglogoimg"/>

                    <img src="assets/Logo/Versacelogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Zaralogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Pradalogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Guccilogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Calvinklein.png" alt="logo" className="slidinglogoimg"/>
                    
                    <img src="assets/Logo/Versacelogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Zaralogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Pradalogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Guccilogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Calvinklein.png" alt="logo" className="slidinglogoimg"/>

                    <img src="assets/Logo/Versacelogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Zaralogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Pradalogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Guccilogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Calvinklein.png" alt="logo" className="slidinglogoimg"/>

                    <img src="assets/Logo/Versacelogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Zaralogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Pradalogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Guccilogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Calvinklein.png" alt="logo" className="slidinglogoimg"/>

                    <img src="assets/Logo/Versacelogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Zaralogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Pradalogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Guccilogo.png" alt="logo" className="slidinglogoimg"/>
                    <img src="assets/Logo/Calvinklein.png" alt="logo" className="slidinglogoimg"/>
                </div>
            </div>
        </>
    )
}


export const HomepageNewarrivals:React.FC<HomepageNewarrivalsProps> = (Props) =>{
    return(
        <>
            <div className="newarrivalsparent">
                <h1>{Props.text}</h1>
                <div className="clothdetailsdiv">
                    {Props.clothdata?.map((item, index) => (
                        <ClothdetailsCard key={index} imglink={item?.imglink} clothname={item?.clothname} star={item?.star} price={item?.price} offerprice={item?.offerprice}/>
                    ))}
                </div>
            </div>
        </>
    )
}

export const ClothdetailsCard:React.FC<ClothdetailsCardProps> = (Props) =>{
    return(
        <>
            <div className="clothcardcstm">
                <div className="shirtimage">
                    <img src={Props.imglink} alt="Shirt Image" className="shirtimagesrc"/>
                </div>
                <p>{Props.clothname}</p>
                <div className="stardiv">
                    <div className="stardivchildone">
                        <FontAwesomeIcon icon={faStar} className="starcstmicon"/>
                        <FontAwesomeIcon icon={faStar} className="starcstmicon"/>
                        <FontAwesomeIcon icon={faStar} className="starcstmicon"/>
                        <FontAwesomeIcon icon={faStar} className="starcstmicon"/>
                        <FontAwesomeIcon icon={faStarHalfAlt} className="starcstmicon"/>
                    </div>
                    <div className="stardivchildtwo">
                        <p>{Props.star}/5</p>
                    </div>
                </div>
                {Props.offerprice ? (<> 
                    <div className="pricediv">
                        <span>${Props.offerprice}</span>
                        <span className="priceoffer">${Props.price}</span>
                    </div>
                </>) : (
                    <>
                        <div className="pricediv">
                            <span>${Props.price}</span>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}