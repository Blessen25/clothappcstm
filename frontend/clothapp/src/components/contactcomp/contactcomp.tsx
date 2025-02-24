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
                    <h1 className="mainheadingcstm">Get In Touch</h1>
                    <p className="smallparacstm">At Shop.Cloth, we value our customers and are always here to help. Whether you have a question about our products, need assistance with an order, we’d love to hear from you!</p>
                    
                </div>
            </div>
        </>
    )
}
