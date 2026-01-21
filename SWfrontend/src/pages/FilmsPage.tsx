import React from "react";
import CardFrame from "../components/CardFrame";
import Film from "../items/film";

interface FilmsPageProps {
    films: Film[];
}

const FilmsPage: React.FC<FilmsPageProps> = ({ films }) => {
    return <CardFrame items={films} />;
};

export default FilmsPage;
