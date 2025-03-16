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
                <HomepageNewarrivals text={"MEN'S COLLECTION"} clothdata={newArrivalsData} route="/collection/men" />
                <HomepageNewarrivals text={"WOMEN'S COLLECTION"} clothdata={newArrivalsData} route="/collection/women" />
                <HomepageNewarrivals text={"KID'S COLLECTION"} clothdata={newArrivalsData} route="/collection/kids" />
                <HomepageNewarrivals text={"FORMAL WEAR COLLECTION"} clothdata={newArrivalsData} route="/collection/formalwear" />
                <HomepageNewarrivals text={"CASUAL WEAR COLLECTION"} clothdata={newArrivalsData} route="/collection/casualwear" />
                <HomepageNewarrivals text={"STREETWEAR COLLECTION"} clothdata={newArrivalsData} route="/collection/streetware" />
                <HomepageNewarrivals text={"PLUS SIZE COLLECTION"} clothdata={newArrivalsData} route="/collection/plussize" />
                <HomepageNewarrivals text={"BUDGET-FRIENDLY COLLECTION"} clothdata={newArrivalsData} route="/collection/budgetfriendly" />
                <HomepageNewarrivals text={"DENIM COLLECTION"} clothdata={newArrivalsData} route="/collection/denim" />
            </div>
        </>
    )
}