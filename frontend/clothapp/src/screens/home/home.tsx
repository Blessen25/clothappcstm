import React from 'react';
import './home.css';
import Homefrontband from '../../components/headerbandsale.tsx';
import ContainerPaddingComp from '../../components/containerpadding.tsx';
import { HomeIntropage, HomepageNewarrivals, Slidinglogo } from '../../components/homecomp/homecomponent.tsx';
import { ClothdetailsCardProps } from '../../interface/interface.tsx';
import { newArrivalsData, topSellingData } from '../../data.tsx';

const Home = () => {
        
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