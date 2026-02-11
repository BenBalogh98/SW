import React from "react";
import CardProps from "../interfaces/cardProps";
import CardState from "../interfaces/cardState";
import "../styles/componentStyles/card.less";
import Item from "../items/item";
export default class Card extends React.Component<CardProps> {
    public state: CardState = {
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
        isLeaveButtonVisible: false
    };

    public constructor(props: CardProps) {
        super(props);
        this.props = props;
    }

    private deselectCard(e: React.MouseEvent<HTMLDivElement>): void {
        this.props.onDeselect?.(e);
    }

    private itemClick(e: React.MouseEvent<HTMLDivElement>, item: Item): void {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        console.warn("Item clicked: ", item.name);
        // this.props.onClick?.();
    }

    private createDetailContent(): React.JSX.Element {
        return <div key={this.props.title} className={"SWCard-details-container"}>
            {
                this.props.content.map((detail) => {

                    let value = detail.value;
                    if (value instanceof Date) {
                        value = value.toUTCString();
                    } else if (value instanceof Array) {
                        if (value.length > 0 && value[0] instanceof Item) {
                            const itemMap = (value as Item[]).map((item) => {
                                return <div key={item.name} onClick={(e) => { this.itemClick(e, item); }} className="SWCard-value-container">{item.name}</div>
                            });

                            return <div key={detail.displayName} className={"SWCard-detail-row item-link"}>
                                <div>{detail.displayName}</div>
                                {itemMap}
                            </div>;
                        }
                        value = value.join(", ");
                    } if (value instanceof Item) {
                        return <div onClick={(e) => { this.itemClick(e, value); }} key={detail.displayName} className={"SWCard-detail-row item-link"}><div>{detail.displayName}</div><div className="SWCard-value-container">{value.name}</div></div>;
                    }
                    return <div key={detail.displayName} className={"SWCard-detail-row"}><div>{detail.displayName}</div><div className="SWCard-value-container">{value}</div></div>;
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
            onClick={() => { this.props.onClick?.(); }}>

            <div className="title">{this.props.title}</div>
            {this.props.isLeaveButtonVisible ? this.createLeaveButton() : ""}
            {this.props.isSelected ? this.createDetailContent() : ""}
            <div className="SWCard-image-container">
                <img className="SWCard-image" src={this.props.backgroundImage} />
            </div >
        </div >;
    }
}