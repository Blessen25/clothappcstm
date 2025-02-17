import React, { useState } from "react";
import './footer.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faIndent } from "@fortawesome/free-solid-svg-icons";

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
                <div className="footerbottomdiv">
                     <div className="footerbottomchildone">
                        <h1>SHOP.CLOTH</h1>
                        <p>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                        <div className="socialmedialogos">
                            <div className="twitterdiv">
                                <a href="#">
                                    <img src="assets/Logo/Twittterround.png" alt="Twitter Round" />
                                    <img src="assets/Logo/Twitter.png" alt="Twitter" className="twitterlogoimg"/>
                                </a>
                            </div>
                            <a href="#">
                                <img src="assets/Logo/Facebooklogo.png" alt="Facebook" />
                            </a>
                            <a href="#">
                                <img src="assets/Logo/Instagramlogo.png" alt="Instagram" />
                            </a>
                            <a href="#">
                                <img src="assets/Logo/Githublogo.png" alt="Github" />
                            </a>
                        </div>
                     </div>
                     <div className="footerbottomchildtwo">
                        <p>COMPANY</p>
                        <a href="#">About</a>
                        <a href="#">Features</a>
                        <a href="#">Works</a>
                        <a href="#">Career</a>
                     </div>
                     <div className="footerbottomchildthree">
                        <p>HELP</p>
                        <a href="#">Customer Support</a>
                        <a href="#">Delivery Details</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                        
                     </div>
                     <div className="footerbottomchildfour">
                        <p>FAQ</p>
                        <a href="#">Account</a>
                        <a href="#">Manage Deliveries</a>
                        <a href="#">Orders</a>
                        <a href="#">Payments</a>
                     </div>
                     <div className="footerbottomchildfive">
                        <p>RESOURCES</p>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorial</a>
                        <a href="#">How to - Blog</a>
                        <a href="#">Youtube Playlist</a>
                     </div>
                </div>
            </div>
        </>
    )
}