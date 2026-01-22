import React from "react";
import Navigation from "../components/Navigation";
import CardFrame from "../components/CardFrame";
import Planet from "../items/planet";

interface PlanetsPageProps {
    planets: Planet[];
    onSearch: (searchTerm: string) => void;
}

const PlanetsPage: React.FC<PlanetsPageProps> = ({ planets, onSearch }) => {

    const handleSearchChange = (searchTerm: string) => {
        // Please modify the searchTerm to be usable as the name parameter of the search API
        searchTerm = "name=" + searchTerm;


        onSearch(searchTerm);
    }

    return (
        <>
            <Navigation
                showSearch={true}
                onSearch={handleSearchChange}
                searchPlaceholder="Search planets..."
            />
            <CardFrame items={planets} />
        </>
    );
};

export default PlanetsPage;
