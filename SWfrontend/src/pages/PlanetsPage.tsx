import React from "react";
import Navigation from "../components/Navigation";
import CardFrame from "../components/CardFrame";
import Planet from "../items/planet";

interface PlanetsPageProps {
    planets: Planet[];
}

const PlanetsPage: React.FC<PlanetsPageProps> = ({ planets }) => {
    const handleSearch = (searchTerm: string) => {
        console.log("Search term:", searchTerm);
        // TODO: Implement search logic
    };

    return (
        <>
            <Navigation
                showSearch={false}
                onSearch={handleSearch}
                searchPlaceholder="Search planets..."
            />
            <CardFrame items={planets} />
        </>
    );
};

export default PlanetsPage;
