import React from 'react';
import './home.css';
import Homefrontband from '../../components/headerbandsale.tsx';
import ContainerPaddingComp from '../../components/containerpadding.tsx';
import { HomeIntropage, HomepageNewarrivals, Slidinglogo } from '../../components/homecomp/homecomponent.tsx';
import { ClothdetailsCardProps } from '../../interface/interface.tsx';

const Home = () => {
    const newArrivalsData: ClothdetailsCardProps[] = [
      { imglink: "assets/Images/Tshirttapedetails.png", clothname: "T-shirt with Tape Details", star: 4, price: 120 },
      { imglink: "assets/Images/Skinnyfitjeans.png", clothname: "Skinny Fit Jeans", star: 3, price: 260, offerprice: 240 },
      { imglink: "assets/Images/Sleevestripesshirt.png", clothname: "Sleeve Strip Shirt", star: 4, price: 180 },
      { imglink: "assets/Images/Checkeredshirt.png", clothname: "Checkered Shirt", star: 5, price: 160, offerprice: 130 },
    ];
    
    const topSellingData: ClothdetailsCardProps[] = [
      { imglink: "assets/Images/Tshirttapedetails.png", clothname: "T-shirt with Tape Details", star: 4, price: 120 },
      { imglink: "assets/Images/Skinnyfitjeans.png", clothname: "Skinny Fit Jeans", star: 3, price: 260, offerprice: 240 },
      { imglink: "assets/Images/Sleevestripesshirt.png", clothname: "Sleeve Strip Shirt", star: 4, price: 180 },
      { imglink: "assets/Images/Checkeredshirt.png", clothname: "Checkered Shirt", star: 5, price: 160, offerprice: 130 },
    ];
        
    return (
        <>
            <HomeIntropage />
            <Slidinglogo />
            <HomepageNewarrivals text={'NEW ARRIVALS'} clothdata={newArrivalsData}/>
            <HomepageNewarrivals text={'TOP SELLING'} clothdata={topSellingData}/>
        </>
    )
}
export default Home