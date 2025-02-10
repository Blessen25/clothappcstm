import React from 'react';
import './home.css';
import Homefrontband from '../../components/headerbandsale.tsx';
import ContainerPaddingComp from '../../components/containerpadding.tsx';

const Home = () => {
    return (
        <>
            <ContainerPaddingComp children={
                <>
                    <h1>Home</h1>
                </>
            }/>
        </>
    )
}
export default Home