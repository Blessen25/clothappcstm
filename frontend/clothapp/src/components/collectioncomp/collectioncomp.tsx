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
                <HomepageNewarrivals text={"Men’s Collection"} clothdata={newArrivalsData} route="/collection/men" />
                <HomepageNewarrivals text={"Women’s Collection"} clothdata={newArrivalsData} route="/collection/women"/>
                <HomepageNewarrivals text={"Kids’ Collection"} clothdata={newArrivalsData} route="/collection/kids"/>
                <HomepageNewarrivals text={"Streetwear Collection"} clothdata={newArrivalsData} route="/collection/streetware" />
                <HomepageNewarrivals text={"Plus Size Collection"} clothdata={newArrivalsData} route="/collection/plussize" />
                <HomepageNewarrivals text={"Budget-Friendly Collection"} clothdata={newArrivalsData} route="/collection/budgetfriendly" />
                <HomepageNewarrivals text={"Denim Collection"} clothdata={newArrivalsData} route="/collection/denim"/>
                <HomepageNewarrivals text={"Casual Wear"} clothdata={newArrivalsData} route="/collection/casualwear"/>
            </div>
        </>
    )
}