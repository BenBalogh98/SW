import React from "react";
import CardProps from "../interfaces/cardProps";
import "../styles/componentStyles/card.less";
import Item from "../items/item";
import { useNavigate } from "react-router-dom";
import Film from "../items/film";
import Planet from "../items/planet";
import People from "../items/resident";

export default function Card(props: CardProps): React.JSX.Element {
    const navigate = useNavigate();
    const deselectCard = (e: React.MouseEvent<HTMLDivElement>): void => {
        props.onDeselect?.(e);
    };

    const itemClick = (e: React.MouseEvent<HTMLDivElement>, item: Item): void => {
        e.stopPropagation();
        e.nativeEvent.stopImmediatePropagation();
        item instanceof Film && navigate(`/SW/film/${encodeURIComponent(item.name)}`);
        item instanceof Planet && navigate(`/SW/planet/${encodeURIComponent(item.name)}`);
        item instanceof People && navigate(`/SW/resident/${encodeURIComponent(item.name)}`);
    };

    const renderValue = (displayName: string, value: unknown): React.JSX.Element => {
        if (value instanceof Date) {
            return <div key={displayName} className={"SWCard-detail-row"}>
                <div>{displayName}</div>
                <div className="SWCard-value-container">{value.toUTCString()}</div>
            </div>;
        }

        if (value instanceof Item) {
            return <div onClick={(e) => { itemClick(e, value); }} key={displayName} className={"SWCard-detail-row item-link"}>
                <div>{displayName}</div>
                <div className="SWCard-value-container">{value.name}</div>
            </div>;
        }

        if (Array.isArray(value)) {
            if (value.length > 0 && value[0] instanceof Item) {
                debugger;
                const itemMap = (value as Item[]).map((item) => {
                    return <div key={item.name} onClick={(e) => { itemClick(e, item); }} className="SWCard-value-container">{item.name}</div>
                });

                return <div key={displayName} className={"SWCard-detail-row item-link"}>
                    <div>{displayName}</div>
                    {itemMap}
                </div>;
            }

            return <div key={displayName} className={"SWCard-detail-row"}>
                <div>{displayName}</div>
                <div className="SWCard-value-container">{value.join(", ")}</div>
            </div>;
        }

        return <div key={displayName} className={"SWCard-detail-row"}>
            <div>{displayName}</div>
            <div className="SWCard-value-container">{String(value ?? "")}</div>
        </div>;
    };

    const createDetailContent = (): React.JSX.Element => {
        return <div key={props.title} className={"SWCard-details-container"}>
            {props.content.map((detail) => renderValue(detail.displayName, detail.value))}
        </div>;
    };

    const createLeaveButtonContent = (): React.JSX.Element => {
        if (props.leaveButtonIMGContent) {
            return <img src={props.leaveButtonIMGContent} />;
        } else {
            return <div>Leave</div>;
        }
    };

    const createLeaveButton = (): React.JSX.Element => {
        return <div onClick={(e) => { deselectCard(e); }} className="SWCard-leaveButton">{createLeaveButtonContent()}</div>;
    };

    const getSWCcardClassName = (): string => {
        return "SWCard" + (props.isSelected ? " SWCard-selected" : " SWCard-hover") + " " + props.className;
    };

    return <div
        key={props.title}
        className={getSWCcardClassName()}
        onClick={() => { props.onClick?.(); }}>

        <div className="title">{props.title}</div>
        {props.isLeaveButtonVisible ? createLeaveButton() : ""}
        {props.isSelected ? createDetailContent() : ""}
        <div className="SWCard-image-container">
            <img className="SWCard-image" src={props.backgroundImage} />
        </div >
    </div >;
}