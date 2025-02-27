import React from "react";
import './contactstyles.css'
import { Headingwithtitleandhome } from "../aboutcomp/aboutcomp.tsx";
import { FlexCompwithimg } from "../flexcomp";
import ButtonTextOnly from "../button/button.tsx";

export const Contactpageintro = () =>{

    return(
        <>
            <Headingwithtitleandhome headingtitle={"CONTACT US"} headername={"Contact"} />
            <div className="maindivcstmeverypage contactpageintro">
                <div className="contactpageimgdiv">
                    <img src="assets/Images/Contactus.jpg" alt="Contact us image" className="contactusimgcstm"/>
                </div>
                <div className="contactpagereachusoutdiv">
                    <h1 className="mainheadingcstm">Get In Touch</h1>
                    <p className="smallparacstm">At Shop.Cloth, we value our customers and are always here to help. Whether you have a question about our products, need assistance with an order, we’d love to hear from you!</p>
                    <div className="contactpageinputdiv">
                        <div className="contactpageinputcstm">
                            <div className="inputtypediv">
                                <h1>Full name</h1>
                                <input type="text" placeholder="Full name"/>
                            </div> 
                            <div className="inputtypediv">
                                <h1>Email</h1>
                                <input type="email" placeholder="Email"/>
                            </div> 
                        </div> 
                        <div className="contactpageinputcstm">
                            <div className="inputtypediv">
                                <h1>Phone Number</h1>
                                <input type="number" placeholder="Phone number"/>
                            </div> 
                            <div className="inputtypediv">
                                <h1>Subject</h1>
                                <input type="text" placeholder="Subject"/>
                            </div> 
                        </div> 
                        <div className="contactpageinputcstm">
                            <div className="inputtypemessagediv">
                                <h1>Message</h1>
                                <textarea placeholder="Message"/>
                            </div> 
                        </div> 
                        <ButtonTextOnly buttonlabel={"Submit"} fullwidth={false} className="buttongetintouchcstm"/>
                    </div>
                </div>
            </div>
        </>
    )
}
