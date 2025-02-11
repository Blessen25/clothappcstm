import React from 'react';
import './home.css';
import Homefrontband from '../../components/headerbandsale.tsx';
import ContainerPaddingComp from '../../components/containerpadding.tsx';
import { HomeIntropage, Slidinglogo } from '../../components/homecomp/homecomponent.tsx';

const Home = () => {
    return (
        <>
            <HomeIntropage />
            <Slidinglogo />
        </>
    )
}
export default Home