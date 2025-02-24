import React from "react";
import './contactstyles.css'
import { Headingwithtitleandhome } from "../aboutcomp/aboutcomp.tsx";
import { FlexCompwithimg } from "../flexcomp";

export const Contactpageintro = () =>{

    return(
        <>
            <Headingwithtitleandhome headingtitle={"CONTACT US"} headername={"Contact"} />
            <div className="maindivcstmeverypage contactpageintro">
                <div className="contactpageimgdiv">

                </div>
                <div className="contactpagereachusoutdiv">
                    
                </div>
            </div>
        </>
    )
}
