import React from "react";
import CardProps from "../interfaces/cardProps";
import "../componentStyles/card.less";

export default class Card extends React.Component<CardProps> {
    public state = {
        isSelected: false
    };
    public title: string;

    public constructor(props: CardProps) {
        super(props);
        this.title = props.title;
    }

    public onCardClick(): void {
        this.setState({
            isSelected: !this.state.isSelected
        });
    }

    public render(): React.JSX.Element {
        return <div className="SWCard" onClick={() => { this.onCardClick(); }}><div className="title">{this.title}</div></div>;
    }
}