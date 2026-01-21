import React from "react";
import CardFrame from "../components/CardFrame";
import People from "../items/resident";

interface ResidentsPageProps {
    residents: People[];
}

export default class ResidentsPage extends React.Component<ResidentsPageProps> {
    render() {
        return <CardFrame items={this.props.residents} />;
    }
}
