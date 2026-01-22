import React from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/Navigation";
import CardFrame from "../components/CardFrame";
import Planet from "../items/planet";

interface PlanetsPageProps {
    planets: Planet[];
    onSearch: (searchTerm: string) => void;
}

const PlanetsPage: React.FC<PlanetsPageProps> = ({ planets, onSearch }) => {
    const { itemName } = useParams<{ itemName: string }>();

    const handleSearchChange = (searchTerm: string) => {
        // This is just a basic POC now.
        searchTerm = "name=" + searchTerm;
        onSearch(searchTerm);
    }

    return (
        <>
            <Navigation
                showSearch={!itemName}
                onSearch={handleSearchChange}
                searchPlaceholder="Search planets..."
            />
            <CardFrame items={planets} />
        </>
    );
};

export default PlanetsPage;
