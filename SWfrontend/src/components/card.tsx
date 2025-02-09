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
        className: ""
    };
    public title: string;

    public constructor(props: CardProps) {
        super(props);
        this.props = props;
    }

    public onCardClick(): void {
        this.setState({
            isSelected: !this.state.isSelected
        });
    }

    public render(): React.JSX.Element {
        return <div className={"SWCard " + this.props.className} onClick={() => { this.onCardClick(); }}>
            <div className="title">{this.props.title}</div>
            <div className="SWCard-image-container">
                <img className="SWCard-image" src={planetImages[this.props.title.toLowerCase()]} />
            </div >
        </div >;
    }
}