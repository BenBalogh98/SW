import React from "react";
import CardProps from "../interfaces/cardProps";
import CardState from "../interfaces/cardState";
import "../styles/componentStyles/card.less";
export default class Card extends React.Component<CardProps> {
    public state: CardState = {
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
        backgroundImage: "",
        isSelected: false,
        isLeaveButtonVisible: false
    };

    public constructor(props: CardProps) {
        super(props);
        this.props = props;
    }

    // First calls the onSelect function passed in the props, than enlarges the card and displays the information of the planet by changing the state.
    private selectCard(): void {
        if (this.state.isSelected) {
            return;
        }
        // Clicking the card navigates, BUT since the card
        //  is recreated, its selected state is lost.
        // To fix this, the selected state needs to be managed here.
        this.props.onSelect?.(this.props.title);
        this.setState({
            isSelected: true,
            isLeaveButtonVisible: true
        }, () => {

        });
    }

    // First calls the onDeselect function passed in the props, than shrinks the card and hides the information of the planet by changing the state.
    private deselectCard(e: React.MouseEvent<HTMLDivElement>): void {
        this.props.onDeselect?.(e);
        /*if (!this.state.isSelected) {
            return;
        }*/
        // Clicking the card navigates, BUT since the card
        //  is recreated, its selected state is lost.
        // To fix this, the selected state needs to be managed here.
        /* this.props.onDeselect?.();
         this.setState({
             isSelected: false,
             isLeaveButtonVisible: false
         }, () => {
 
         });*/
    }

    private createDetailContent(): React.JSX.Element {
        return <div key={this.props.title} className={"SWCard-details-container"}>
            {
                this.props.content.map((detail) => {
                    let value = detail.value;
                    if (value instanceof Date) {
                        value = value.toUTCString();
                    } else if (value instanceof Array) {
                        value = value.join(", ");
                    }
                    return <div key={detail.displayName} className={"SWCard-detail-container"}><div>{detail.displayName}</div><div className="SWCard-value-container">{value}</div></div>;
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
        return <div onClick={(e) => { this.deselectCard(e); }} className="SWCard-leaveButton">{this.createLeaveButtonContent()}</div>;
    }

    private getSWCcardClassName(): string {
        return "SWCard" + (this.props.isSelected ? " SWCard-selected" : " SWCard-hover") + " " + this.props.className;
    }

    public render(): React.JSX.Element {

        return <div
            key={this.props.title}
            className={this.getSWCcardClassName()}
            onClick={() => {/* this.selectCard(); */ this.props.onClick?.(); }}>

            <div className="title">{this.props.title}</div>
            {this.props.isLeaveButtonVisible ? this.createLeaveButton() : ""}
            {this.props.isSelected ? this.createDetailContent() : ""}
            <div className="SWCard-image-container">
                <img className="SWCard-image" src={this.props.backgroundImage} />
            </div >
        </div >;
    }
}