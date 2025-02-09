import React from "react";
import CardFrameProps from "../interfaces/cardFrameProps";
import PlanetGenerator from "../logic/planetGenerator";
import Card from "./card";
import CardFrameState from "../interfaces/cardFrameState";
import "../componentStyles/CardFrame.less";
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

    // Sets the selectedCard to the title of the clicked card. Only the selectedCard will be displayed.
    private onCardClicked(cardToKeep: string): void {
        this.setState({
            selectedCard: cardToKeep
        })
    }

    public render() {
        return <div className="cardFrame">{
            this.state.planets.map((planet) => {
                return <Card
                    key={planet.name}
                    onClick={(cardToKeep: string) => { this.onCardClicked(cardToKeep) }}
                    // If the selectedCard has no value, add "". If it has value and the selectedCard===planet.name, add "hidden". Else add "" to the classList.
                    className={planet.name + " " + (this.state.selectedCard ? this.state.selectedCard === planet.name ? "" : "hidden" : "")}
                    title={planet.name}></Card>;
            })}
        </div>
    }
}