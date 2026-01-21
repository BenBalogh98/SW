import React from "react";
import CardFrame from "../components/CardFrame";
import Planet from "../items/planet";

interface PlanetsPageProps {
    planets: Planet[];
}

const PlanetsPage: React.FC<PlanetsPageProps> = ({ planets }) => {
    return <>
        <CardFrame items={planets} />
    </>
};

export default PlanetsPage;
