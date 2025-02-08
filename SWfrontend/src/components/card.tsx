import React from "react";
import CardProps from "../interfaces/cardProps";
import "../componentStyles/card.less";
export default class Card extends React.Component<CardProps> {
    public state = {
        isSomething: true
    };
    public title: string;
    public constructor(props: CardProps) {
        super(props);
        this.title = props.title;
    }

    changeState() {
        this.setState({
            isSomething: !this.state.isSomething
        });
    }

    public render() {
        return <div className="SWCard">{this.title}</div>
    }
}