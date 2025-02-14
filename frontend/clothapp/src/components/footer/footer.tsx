import React, { useState } from "react";
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const Footer = () => {
    const [inputform, setInputForm] = useState("");
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Submit Value", inputform);
    }
    return(
        <>
            <div className="footerparentdiv">
                <div className="stayuptodatediv">
                    <div className="staytextdiv">
                        <h1>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h1>
                    </div>
                    <form action="#" onSubmit={handleSubmit} className="stayemailandsubmitdiv">
                            <div className="stayemaildiv">
                                <input type="email" placeholder="Enter Your Email Address ..." value={inputform} onChange={(e) => setInputForm(e.target.value)} className="stayemailinput"/>
                                <FontAwesomeIcon icon={faEnvelope} className="envelopeicon"/>
                            </div>
                            <button type="submit" className="staysubmitbutton" >Subscribe</button> 
                    </form>
                    
                </div>
            </div>
        </>
    )
}