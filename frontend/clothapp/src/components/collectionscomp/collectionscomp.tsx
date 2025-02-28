import React, { useEffect, useState } from "react";
import "./collectionsstyle.css"
import { Headingwithtitleandhome } from "../aboutcomp/aboutcomp.tsx";
import { ClothdetailsCard } from "../homecomp/homecomponent.tsx";
import { CollectiondivMainCompProps } from "../../interface/interface.tsx";
import { MenCollectionsData, newArrivalsData } from "../../data.tsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

export const MenscollectionComp = () => {

    return (
        <>
            <Headingwithtitleandhome headingtitle={"MEN'S COLLECTION"} headername={"Collections"} />
            <CollectiondivMainComp collectionclothdata={MenCollectionsData} />
        </>
    )
}

export const CollectiondivMainComp: React.FC<CollectiondivMainCompProps> = (Props) => {

    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 8;

    // Calculate total pages
    const pageCount = Math.ceil(Props.collectionclothdata?.length / itemsPerPage);

    // Get current items for the page

    const startIndex = currentPage * itemsPerPage;
    const currentItems = Props.collectionclothdata?.slice(startIndex, startIndex + itemsPerPage);

    const handlePageChange = (newPage: number) => {
        setCurrentPage(newPage);
    }

    useEffect(() => {
        console.log("Page Count ===", pageCount);
        console.log("Start Index ===", startIndex);
        console.log("Curent Items ====", currentItems);
    }, [currentPage])

    return (
        <>
            <div className="collectionsintrodiv">
                <div className="collectionschilddiv">
                    {currentItems.map((item, index) => (
                        <ClothdetailsCard key={index} imglink={item?.imglink} clothname={item?.clothname} star={item?.star} price={item?.price} offerprice={item?.offerprice} />
                    ))}
                </div>
                <div className="pagenationdiv">
                    <button className="prevButt" disabled={currentPage === 0} onClick={() => handlePageChange(currentPage - 1)}>
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                    {[...Array(pageCount).keys()].map((number) => (
                        <button key={number} onClick={() => handlePageChange(number)}>{number + 1}</button>
                    ))}

                    <button className="prevButt" disabled={currentPage === pageCount - 1} onClick={() => handlePageChange(currentPage + 1)}>
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                </div>
            </div>
        </>
    )
}
