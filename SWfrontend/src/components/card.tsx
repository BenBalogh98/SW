import React from "react";
import CardProps from "../interfaces/cardProps";
import "../componentStyles/card.less";
export default class Card extends React.Component<CardProps> {
    // Should make an interface for the state
    public state = {
        isSelected: false,
        isLeaveButtonVisible: false
    };
    public props: CardProps = {
        title: "",
        className: "",
        key: "",
        content: [],
        hasLeaveButton: false,
        leaveButtonIMGContent: "",
        backgroundImage: ""
    };

    public constructor(props: CardProps) {
        super(props);
        this.props = props;
    }

    // First calls the onSelect function passed in the props, than enlarges the card and displays the information of the planet.
    private selectCard(): void {
        if (this.state.isSelected) {
            return;
        }
        this.props.onSelect?.(this.props.title);
        this.setState({
            isSelected: true,
            isLeaveButtonVisible: true
        });
    }

    // First calls the onDeselect function passed in the props, than shrinks the card and hides the information of the planet.
    private deselectCard(): void {
        if (!this.state.isSelected) {
            return;
        }
        this.props.onDeselect?.(this.props.title);
        this.setState({
            isSelected: false,
            isLeaveButtonVisible: false
        });
    }

    private createDetailContent(): React.JSX.Element {
        return <div className={"SWCard-details-container"}>
            {
                this.props.content.map((detail) => {
                    let value = detail.value;
                    if (value instanceof Date) {
                        value = value.toUTCString();
                    } else if (value instanceof Array) {
                        value = value.join(", ");
                    }
                    return <div className={"SWCard-detail-container"}><div>{detail.displayName}</div><div>{value}</div></div>;
                })
            }
        </div>;
    }

    private createLeaveButtonContent(): React.JSX.Element {
        if (this.props.leaveButtonIMGContent) {
            return <img src={this.props.leaveButtonIMGContent} />;
        } else {
            return <div>Leave</div>;
        }
    }

    private createLeaveButton(): React.JSX.Element {
        return <div onClick={() => { this.deselectCard(); }} className="SWCard-leaveButton">{this.createLeaveButtonContent()}</div>;
    }

    private getSWCcardClassName(): string {
        return "SWCard" + (this.state.isSelected ? " SWCard-selected" : " SWCard-hover") + " " + this.props.className;
    }

    public render(): React.JSX.Element {

        return <div className={this.getSWCcardClassName()} onClick={() => { this.selectCard(); }}>
            <div className="title">{this.props.title}</div>
            {this.state.isLeaveButtonVisible ? this.createLeaveButton() : ""}
            {this.state.isSelected ? <div>{this.createDetailContent()}</div> : ""}
            <div className="SWCard-image-container">
                <img className="SWCard-image" src={this.props.backgroundImage} />
            </div >
        </div >;
    }
}