import React from "react";
import './homecomp.css';
import { numberplustextProps } from "../../interface/interface";

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