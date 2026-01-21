import React from "react";
import Navigation from "../components/Navigation";
import CardFrame from "../components/CardFrame";
import Film from "../items/film";

interface FilmsPageProps {
    films: Film[];
}

const FilmsPage: React.FC<FilmsPageProps> = ({ films }) => {
    return (
        <>
            <Navigation showSearch={false} />
            <CardFrame items={films} />
        </>
    );
};

export default FilmsPage;
