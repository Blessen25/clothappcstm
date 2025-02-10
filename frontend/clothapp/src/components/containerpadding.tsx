import React from "react";
import './style.css'
import { containerdivProps } from "../interface/interface";

const ContainerPaddingComp:React.FC<containerdivProps> = (Props) =>{
    return(
        <>
            <div className="containerdiv">
                {Props.children}
            </div>
        </>
    )
}

export default ContainerPaddingComp