import React from 'react';
import './home.css';
import Homefrontband from '../../components/headerbandsale.tsx';
import ContainerPaddingComp from '../../components/containerpadding.tsx';
import { HomeIntropage, HomepageNewarrivals, Slidinglogo, BrowseClothSection, HappyCustomerCmntSection } from '../../components/homecomp/homecomponent.tsx';
import { ClothdetailsCardProps } from '../../interface/interface.tsx';
import { newArrivalsData, topSellingData } from '../../data.tsx';

const Home = () => {

    return (
        <>
            <HomeIntropage />
            <Slidinglogo />
            <HomepageNewarrivals text={'NEW ARRIVALS'} clothdata={newArrivalsData} route='/collection' />
            <HomepageNewarrivals text={'TOP SELLING'} clothdata={topSellingData} route='/collection' />
            <BrowseClothSection />
            <HappyCustomerCmntSection title='OUR HAPPY CUSTOMERS' />
        </>
    )
}
export default Home