import React from "react";
import Navigation from "../components/Navigation";
import CardFrame from "../components/CardFrame";
import People from "../items/resident";

interface ResidentsPageProps {
    residents: People[];
}

const ResidentsPage: React.FC<ResidentsPageProps> = ({ residents }) => {
    return (
        <>
            <Navigation showSearch={false} />
            <CardFrame items={residents} />
        </>
    );
};

export default ResidentsPage;
