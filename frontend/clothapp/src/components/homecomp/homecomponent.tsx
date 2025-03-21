import React, { useState, useRef, useEffect } from "react";
import './homecomp.css';
import { ClothdetailsCardProps, CommentCardCompProps, HappyCustomerCmntSectionProps, HomepageNewarrivalsProps, numberplustextProps, PropsstarsectionProps } from "../../interface/interface";
import { faStar, faStarHalf, faStarHalfAlt, faStarHalfStroke, faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ButtonTextOnly from "../button/button.tsx";
import { comments } from "../../data.tsx";

export const HomeIntropage = () => {
    return (
        <React.Fragment>
            <div className="homeintropageparent">
                <div className="homeintropagechildone">
                    <h1 className="h1text">FIND CLOTHES THAT MATCHES YOUR STYLE</h1>
                    <p className="paratext">Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                    <a href="/collection">Shop Now</a>
                    <div className="brandsproductscustomer">
                        <Numberplustext number={"200"} text={"International Brand"} />
                        <div className="borderline"></div>
                        <Numberplustext number={"2,000"} text={"High-Quality Products"} />
                        <div className="borderline"></div>
                        <Numberplustext number={"30,000"} text={"Happy Customers"} />
                    </div>
                </div>
                <div className="homeintropagechildtwo">
                    <img src="assets/Images/Vector.png" alt="Vector one" className="vectorimgone" />
                    <img src="assets/Images/Vector.png" alt="Vector one" className="vectorimgtwo" />
                </div>
            </div>
        </React.Fragment>
    )
}


export const Numberplustext: React.FC<numberplustextProps> = (Props) => {
    return (
        <>
            <div className="numberplustextdiv">
                <h1>{Props.number}+</h1>
                <p>{Props.text}</p>
            </div>
        </>
    )

}

export const Slidinglogo = () => {
    return (
        <>
            <div className="slidinglogoparent">
                <div className="slidinglogochild">
                    <img src="assets/Logo/Versacelogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Zaralogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Pradalogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Guccilogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Calvinklein.png" alt="logo" className="slidinglogoimg" />

                    <img src="assets/Logo/Versacelogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Zaralogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Pradalogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Guccilogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Calvinklein.png" alt="logo" className="slidinglogoimg" />

                    <img src="assets/Logo/Versacelogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Zaralogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Pradalogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Guccilogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Calvinklein.png" alt="logo" className="slidinglogoimg" />

                    <img src="assets/Logo/Versacelogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Zaralogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Pradalogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Guccilogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Calvinklein.png" alt="logo" className="slidinglogoimg" />

                    <img src="assets/Logo/Versacelogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Zaralogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Pradalogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Guccilogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Calvinklein.png" alt="logo" className="slidinglogoimg" />

                    <img src="assets/Logo/Versacelogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Zaralogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Pradalogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Guccilogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Calvinklein.png" alt="logo" className="slidinglogoimg" />

                    <img src="assets/Logo/Versacelogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Zaralogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Pradalogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Guccilogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Calvinklein.png" alt="logo" className="slidinglogoimg" />

                    <img src="assets/Logo/Versacelogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Zaralogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Pradalogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Guccilogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Calvinklein.png" alt="logo" className="slidinglogoimg" />

                    <img src="assets/Logo/Versacelogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Zaralogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Pradalogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Guccilogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Calvinklein.png" alt="logo" className="slidinglogoimg" />

                    <img src="assets/Logo/Versacelogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Zaralogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Pradalogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Guccilogo.png" alt="logo" className="slidinglogoimg" />
                    <img src="assets/Logo/Calvinklein.png" alt="logo" className="slidinglogoimg" />
                </div>
            </div>
        </>
    )
}


export const HomepageNewarrivals: React.FC<HomepageNewarrivalsProps> = (Props) => {
    return (
        <>
            <div className={`newarrivalsparent ${Props.classname}`}>
                <h1>{Props.text}</h1>
                <div className="clothdetailsdiv">
                    {Props.clothdata?.map((item, index) => (
                        <ClothdetailsCard key={index} imglink={item?.imglink} clothname={item?.clothname} star={item?.star} price={item?.price} offerprice={item?.offerprice} />
                    ))}
                </div>
                <div className="buttoncenterdiv">
                    <ButtonTextOnly buttonlabel="View All" fullwidth={false} route={Props.route} />
                </div>
            </div>
        </>
    )
}

export const ClothdetailsCard: React.FC<ClothdetailsCardProps> = (Props) => {
    return (
        <>
            <div className="clothcardcstm">
                <div className="shirtimage">
                    <img src={Props.imglink} alt="Shirt Image" className="shirtimagesrc" />
                </div>
                <p>{Props.clothname}</p>
                <div className="stardiv">
                    <div className="stardivchildone">
                        <Propsstarsection star={Props.star} />
                    </div>
                    <div className="stardivchildtwo">
                        <p>{Props.star}/5</p>
                    </div>
                </div>
                {Props.offerprice ? (<>
                    <div className="pricediv">
                        <span>Rs {Props.offerprice}</span>
                        <span className="priceoffer">Rs {Props.price}</span>
                    </div>
                </>) : (
                    <>
                        <div className="pricediv">
                            <span>Rs {Props.price}</span>
                        </div>
                    </>
                )}
                <div className="viewitemcstmdiv">
                    <a href="/productdetailspage" className="viewitembuttoncstm">View Product</a>
                </div>
            </div>
        </>
    )
}

export const Propsstarsection: React.FC<PropsstarsectionProps> = (Props) => {
    return (
        <>
            {Props.star === 5 && (
                <>
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                </>
            )}
            {Props.star === 4 && (
                <>
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />

                </>
            )}
            {Props.star === 3 && (
                <>
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />

                </>
            )}
            {Props.star === 2 && (
                <>
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />

                </>
            )}
            {Props.star === 1 && (
                <>
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                </>
            )}

            {Props.star === 0.5 && (
                <>
                    <FontAwesomeIcon icon={faStarHalfAlt} className="starcstmicon" />
                </>
            )}

            {Props.star === 1.5 && (
                <>
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                    <FontAwesomeIcon icon={faStarHalfAlt} className="starcstmicon" />

                </>
            )}
            {Props.star === 2.5 && (
                <>
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                    <FontAwesomeIcon icon={faStarHalfAlt} className="starcstmicon" />

                </>
            )}
            {Props.star === 3.5 && (
                <>
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                    <FontAwesomeIcon icon={faStarHalfAlt} className="starcstmicon" />

                </>
            )}
            {Props.star === 4.5 && (
                <>
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                    <FontAwesomeIcon icon={faStar} className="starcstmicon" />
                    <FontAwesomeIcon icon={faStarHalfAlt} className="starcstmicon" />

                </>
            )}
        </>
    )
}

export const BrowseClothSection = () => {
    return (
        <>
            <div className="browseclothdiv">
                <h1>BROWSE BY DRESS STYLE</h1>
                <div className="browsediffsectiondiv">
                    <a href="/collection/casualwear" className="diffsectionone">
                        <p className="diffsectiontext">Casual</p>
                    </a>
                    <a href="/collection/formalwear" className="diffsectiontwo">
                        <p className="diffsectiontext">Formal</p>
                    </a>
                    <a href="/collection/partywear" className="diffsectionthree">
                        <p className="diffsectiontext">Party</p>
                    </a>
                    <a href="/collection/gymwear" className="diffsectionfour">
                        <p className="diffsectiontext">Gym</p>
                    </a>
                </div>
            </div>

        </>
    )
}

export const HappyCustomerCmntSection: React.FC<HappyCustomerCmntSectionProps> = (props) => {
    const [index, setIndex] = useState(0);
    const itemsPerSlide = 4;
    const totalSlides = Math.ceil(comments.length / itemsPerSlide);

    const nextSlide = () => {
        if (index / itemsPerSlide + 1 < totalSlides) {
            setIndex(index + itemsPerSlide);
        }
    };

    const prevSlide = () => {
        if (index > 0) {
            setIndex(index - itemsPerSlide);
        }
    }

    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (sliderRef.current) {
            let scrollAmount = 0;
            const speed = .5;

            const scrollSlider = () => {
                if (sliderRef.current) {
                    scrollAmount -= speed;
                    sliderRef.current.style.transform = `translateX(${scrollAmount}px)`;

                    if (Math.abs(scrollAmount) >= sliderRef.current.scrollWidth / 2) {
                        scrollAmount = 0;
                    }
                }

                requestAnimationFrame(scrollSlider);
            };
            scrollSlider();
        }
    }, []);
    return (
        <div className={`happycustomerdiv ${props.classname}`}>
            <div className="h1andslidericon">
                <h1 className="h1customertext userselect_nonecstm">{props.title}</h1>
                {/* <div className="slidericons">
                       <FontAwesomeIcon icon={faArrowLeft} className={`slidericoncstm ${index === 0 ? "disabled" : ""}`} onClick={prevSlide} />
                       <FontAwesomeIcon icon={faArrowRight} className={`slidericoncstm ${index / itemsPerSlide + 1 >= totalSlides ? "disabled" : ""}`} onClick={nextSlide}/>
                </div> */}
            </div>
            <div className="commentscardparent">
                <div className="slidercomponentdiv" ref={sliderRef}>

                    <CommentCardComp star={3.5} personname={"Sarah M."} description={"I'm blown away by the quality and style of the clothes I received from Shop.Cloth. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."} />
                    <CommentCardComp star={4.5} personname={"Alex K."} description={"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.Cloth. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."} />
                    <CommentCardComp star={5} personname={"James L."} description={"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.Cloth. The selection of clothes is not only diverse but also on-point with the latest trends."} />
                    <CommentCardComp star={3} personname={"Rayan V."} description={"Shopping for trendy yet comfortable outfits was always a hassle until I found Shop.Cloth. Their collection is not only stylish but also versatile, making it easy to find the perfect look for any occasion."} />

                    <CommentCardComp star={3.5} personname={"Sarah M."} description={"I'm blown away by the quality and style of the clothes I received from Shop.Cloth. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."} />
                    <CommentCardComp star={4.5} personname={"Alex K."} description={"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.Cloth. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."} />
                    <CommentCardComp star={5} personname={"James L."} description={"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.Cloth. The selection of clothes is not only diverse but also on-point with the latest trends."} />
                    <CommentCardComp star={3} personname={"Rayan V."} description={"Shopping for trendy yet comfortable outfits was always a hassle until I found Shop.Cloth. Their collection is not only stylish but also versatile, making it easy to find the perfect look for any occasion."} />

                    <CommentCardComp star={3.5} personname={"Sarah M."} description={"I'm blown away by the quality and style of the clothes I received from Shop.Cloth. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."} />
                    <CommentCardComp star={4.5} personname={"Alex K."} description={"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.Cloth. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."} />
                    <CommentCardComp star={5} personname={"James L."} description={"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.Cloth. The selection of clothes is not only diverse but also on-point with the latest trends."} />
                    <CommentCardComp star={3} personname={"Rayan V."} description={"Shopping for trendy yet comfortable outfits was always a hassle until I found Shop.Cloth. Their collection is not only stylish but also versatile, making it easy to find the perfect look for any occasion."} />

                    <CommentCardComp star={3.5} personname={"Sarah M."} description={"I'm blown away by the quality and style of the clothes I received from Shop.Cloth. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."} />
                    <CommentCardComp star={4.5} personname={"Alex K."} description={"Finding clothes that align with my personal style used to be a challenge until I discovered Shop.Cloth. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions."} />
                    <CommentCardComp star={5} personname={"James L."} description={"As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.Cloth. The selection of clothes is not only diverse but also on-point with the latest trends."} />
                    <CommentCardComp star={3} personname={"Rayan V."} description={"Shopping for trendy yet comfortable outfits was always a hassle until I found Shop.Cloth. Their collection is not only stylish but also versatile, making it easy to find the perfect look for any occasion."} />
                </div>
            </div>
        </div>
    )
}

export const CommentCardComp: React.FC<CommentCardCompProps> = (Props) => {
    return (
        <div className="commentscarddiv">
            <div className="cmntstrscstm">
                <Propsstarsection star={Props.star} />
            </div>
            <p>{Props.personname}</p>
            <span>{Props.description}</span>
        </div>
    )
}

