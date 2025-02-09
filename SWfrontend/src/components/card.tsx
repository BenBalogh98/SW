import React from "react";
import CardProps from "../interfaces/cardProps";
import "../componentStyles/card.less";
import planetImages from "../consts/planetImages";
export default class Card extends React.Component<CardProps> {
    public state = {
        isSelected: false
    };
    public props: CardProps = {
        title: "",
        className: "",
        key: ""
    };
    public title: string;

    public constructor(props: CardProps) {
        super(props);
        this.props = props;
    }

    // First calls the onClick function passed in the props, than enlarges the card and displays the information of the planet.
    public onCardClick(): void {
        this.props.onClick?.(this.props.title);
        this.setState({
            isSelected: !this.state.isSelected
        });
    }

    public render(): React.JSX.Element {
        return <div className={"SWCard SWCard-hover" + " " + this.props.className} onClick={() => { this.onCardClick(); }}>
            <div className="title">{this.props.title}</div>
            <div className="SWCard-image-container">
                <img className="SWCard-image image-hover" src={planetImages[this.props.title.toLowerCase()]} />
            </div >
        </div >;
    }
}