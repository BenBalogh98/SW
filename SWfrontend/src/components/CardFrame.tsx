import React from "react";
import CardFrameProps from "../interfaces/cardFrameProps";
import PlanetGenerator from "../logic/planetGenerator";
import Card from "./card";
import CardFrameState from "../interfaces/cardFrameState";

export default class CardFrame extends React.Component<CardFrameProps> {
    private planetGenerator: PlanetGenerator;

    public state: CardFrameState = {
        planets: []
    };

    constructor(props: CardFrameProps) {
        super(props);
        this.planetGenerator = props.planetGenerator;

    }

    componentDidMount(): void {
        this.planetGenerator.createPlanets((planets) => {
            this.setState({
                planets: planets
            })
        });
    }

    public render() {
        return <>{this.state.planets.map((planet) => {
            console.error("planet:", planet);
            return <Card title={planet.name}></Card>
        })}</>
    }
}