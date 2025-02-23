import React from "react";
import './style.css'
import { FlexCompwithimgProps } from "../interface/interface";
import ButtonTextOnly from "./button/button.tsx";

export const FlexCompwithimg:React.FC<FlexCompwithimgProps> = (Props) =>{
    return(
        <>
        <div className="flexcompwithimgdiv">
        <div className="flexcompimgdiv">
                <img src={Props.img} alt="" className={`flexcompimgcstm ${Props.imgclassname}`}/>
            </div>
            <div className="flexcomptextdiv">
                <h1 className={`mainheadingcstm ${Props.htextclassname}`}>{Props.htext}</h1>
                <p className={`mainparacstm ${Props.ptextclassname}`}>{Props.ptext}</p>
                {Props.button && 
                <>
                    <ButtonTextOnly buttonlabel={Props.buttonlabel ?? ''} fullwidth={false} className="buttonflexcstmfullwidth"/>
                </>}
            </div>
        </div>
            
        </>
    )
}

export const ReverseFlexCompwithimg:React.FC<FlexCompwithimgProps> = (Props) =>{

    return(
        <>  
            <div className="revflexcompwithimgdiv">
            <div className="flexcompimgdiv">
                <img src={Props.img} alt="" className={`flexcompimgcstm ${Props.imgclassname}`}/>
            </div>
            <div className="flexcomptextdiv">
                <h1 className={`mainheadingcstm ${Props.htextclassname}`}>{Props.htext}</h1>
                <p className={`mainparacstm ${Props.ptextclassname}`}>{Props.ptext}</p>
                {Props.button && 
                <>
                    <ButtonTextOnly buttonlabel={Props.buttonlabel ?? ''} fullwidth={false} />
                </>}
            </div>
            </div>
        </>
    )
}