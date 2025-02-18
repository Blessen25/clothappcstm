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
                                    <img src="assets/Logo/Twittterround.png" alt="Twitter Round" className="twitterroundimg"/>
                                    <img src="assets/Logo/Twitter.png" alt="Twitter" className="twitterlogoimg"/>
                                </a>
                            </div>
                            <a href="#">
                                <img src="assets/Logo/Facebooklogo.png" alt="Facebook" className="facebooklogoimg"/>
                            </a>
                            <a href="#">
                                <img src="assets/Logo/Instagramlogo.png" alt="Instagram" className="instalogoimg"/>
                            </a>
                            <a href="#">
                                <img src="assets/Logo/Githublogo.png" alt="Github" className="githublogoimg" />
                            </a>
                        </div>
                     </div>
                     <div className="footerbottomchildtwo">
                        <p>Pages</p>
                        <a href="/">Home</a>
                        <a href="#">About</a>
                        <a href="#">Product</a>
                        <a href="#">Category</a>
                     </div>
                     <div className="footerbottomchildtwo">
                        <p>HELP</p>
                        <a href="#">Customer Support</a>
                        <a href="#">Delivery Details</a>
                        <a href="#">Terms & Conditions</a>
                        <a href="#">Privacy Policy</a>
                        
                     </div>
                     <div className="footerbottomchildtwo">
                        <p>FAQ</p>
                        <span><a href="#">Account</a></span>
                        <a href="#">Manage Deliveries</a>
                        <a href="#">Orders</a>
                        <a href="#">Payments</a>
                     </div>
                     <div className="footerbottomchildtwo">
                        <p>RESOURCES</p>
                        <a href="#">Free eBooks</a>
                        <a href="#">Development Tutorial</a>
                        <a href="#">How to - Blog</a>
                        <a href="#">Youtube Playlist</a>
                     </div>
                </div>
                <hr className="footerhrcstm"/>
                <div className="footercopyrightdiv">
                    <p>Shop.Cloth © 2025, All Rights Reserved</p>
                    {/* <div className="footerpaymentcards">
                        <img src="assets/Logo/Visalogo.png" alt="" style={{ objectFit:'cover'}}/>
                        <img src="assets/Logo/googlepaylogo.png" alt="" style={{ objectFit:'cover'}} />
                        <img src="assets/Logo/paypallogo.png" alt="" style={{ objectFit:'cover'}} />
                        <img src="assets/Logo/applepaylogo.png" alt="" style={{ objectFit:'cover'}} />
                        <img src="assets/Logo/paytmlogo.png" alt="" style={{ objectFit:'cover'}} />

                    </div> */}
                </div>
            </div>
        </>
    )
}