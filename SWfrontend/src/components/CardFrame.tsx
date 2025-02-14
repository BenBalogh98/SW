import React from "react";
import CardFrameProps from "../interfaces/cardFrameProps";
import Card from "./card";
import CardFrameState from "../interfaces/cardFrameState";
import "../componentStyles/CardFrame.less";
export default class CardFrame extends React.Component<CardFrameProps> {
    //private planetGenerator: PlanetGenerator;

    public state: CardFrameState = {
        selectedCard: undefined
    };

    public props: CardFrameProps = {
        items: []
    };

    constructor(props: CardFrameProps) {
        super(props);
        console.error(props, "CardFrame constructor");
    }

    // Sets the selectedCard to the title of the clicked card. Only the selectedCard will be displayed.
    private onCardSelect(cardToKeep: string): void {
        this.setState({
            selectedCard: cardToKeep
        })
    }

    private onCardDeselect(cardToDeselect: string): void {
        this.setState({
            selectedCard: undefined
        })
    }

    public render() {
        return <div className="cardFrame">{
            this.props.items.map((item) => {
                return <Card
                    key={item.name}
                    onSelect={(cardToKeep: string) => { this.onCardSelect(cardToKeep) }}
                    className={item.name + " " + (this.state.selectedCard ? this.state.selectedCard === item.name ? "" : "hidden" : "")}
                    content={item.getPlanetDetailsContent()}
                    title={item.name}
                    hasLeaveButton={true}
                    leaveButtonIMGContent={item.exitButtonIMG}
                    onDeselect={(cardToDeselect: string) => { this.onCardDeselect(cardToDeselect) }}
                    backgroundImage={item.backgroundImage}>
                </Card>;
            })}
        </div>
    }
}