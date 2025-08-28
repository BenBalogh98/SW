import React from "react";
import { useLocation } from "react-router-dom";
import CardFrameProps from "../interfaces/cardFrameProps";
import RoutableCard from "./RoutableCard";
import CardFrameState from "../interfaces/cardFrameState";
import "../styles/componentStyles/cardFrame.less";

// Create a wrapper component to use hooks
const CardFrameWrapper: React.FC<CardFrameProps> = (props) => {
    const location = useLocation();

    // Determine item type based on current route
    const getItemType = (): 'planet' | 'film' | 'resident' | undefined => {
        if (location.pathname.includes('/films')) return 'film';
        if (location.pathname.includes('/residents')) return 'resident';
        if (location.pathname.includes('/planets')) return 'planet';
        return undefined;
    };

    return (
        <div className="cardFrame">
            {props.items.map((item) => {
                return <RoutableCard
                    key={item.name}
                    className={item.name}
                    content={item.getDetailsContent()}
                    title={item.name}
                    hasLeaveButton={true}
                    leaveButtonIMGContent={item.exitButtonIMG}
                    backgroundImage={item.backgroundImage}
                    itemType={getItemType()}>
                </RoutableCard>;
            })}
        </div>
    );
};

export default class CardFrame extends React.Component<CardFrameProps> {

    public state: CardFrameState = {
        selectedCard: undefined
    };

    public props: CardFrameProps = {
        items: []
    };

    constructor(props: CardFrameProps) {
        super(props);
        this.props = props;
    }

    public render() {
        return <CardFrameWrapper items={this.props.items} />;
    }
}