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
            this.state.planets.map((planet) => {
                return <Card
                    key={planet.name}
                    onSelect={(cardToKeep: string) => { this.onCardSelect(cardToKeep) }}
                    className={planet.name + " " + (this.state.selectedCard ? this.state.selectedCard === planet.name ? "" : "hidden" : "")}
                    content={planet.getPlanetDetailsContent()}
                    title={planet.name}
                    hasLeaveButton={true}
                    leaveButtonIMGContent={"https://www.gunjap.net/site/wp-content/uploads/2015/11/DSC_0593_zps9o5lt023.jpgoriginal.jpg"}
                    onDeselect={(cardToDeselect: string) => { this.onCardDeselect(cardToDeselect) }}>
                </Card>;
            })}
        </div>
    }
}