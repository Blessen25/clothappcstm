import React from "react";
import './buttonstyles.css';
import { ButtonTextOnlyProps } from "../../interface/interface";

const ButtonTextOnly:React.FC<ButtonTextOnlyProps> = (Props) =>{
    return(
        <a href={`${Props.route ? (Props.route) : ('#')}`} className={`buttontextonlycstm ${Props.className} ${Props.fullwidth ? ("w-100") : ("")} `} style={Props.style} onClick={Props.onClick} >{Props.buttonlabel}</a>
    )
}


export default ButtonTextOnly