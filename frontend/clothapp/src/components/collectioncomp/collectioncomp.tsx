import React from "react";
import './collectionstyle.css';
import { Headingwithtitleandhome } from "../aboutcomp/aboutcomp.tsx";
import { HomepageNewarrivals } from "../homecomp/homecomponent.tsx";
import { newArrivalsData } from "../../data.tsx";

export const CollectionintoComp = () => {

    return (
        <>

            <Headingwithtitleandhome headingtitle={"COLLECTIONS"} headername={"Collection"} />
            <div className="collectionintro">
                <HomepageNewarrivals text={"Men’s Collection"} clothdata={newArrivalsData} />
                <HomepageNewarrivals text={"Women’s Collection"} clothdata={newArrivalsData} />
                <HomepageNewarrivals text={"Kids’ Collection"} clothdata={newArrivalsData} />
                <HomepageNewarrivals text={"Streetwear Collection"} clothdata={newArrivalsData} />
                <HomepageNewarrivals text={"Plus Size Collection"} clothdata={newArrivalsData} />
                <HomepageNewarrivals text={"Budget-Friendly Collection"} clothdata={newArrivalsData} />
                <HomepageNewarrivals text={"Denim Collection"} clothdata={newArrivalsData} />
                <HomepageNewarrivals text={"Casual Wear"} clothdata={newArrivalsData} />
            </div>
        </>
    )
}