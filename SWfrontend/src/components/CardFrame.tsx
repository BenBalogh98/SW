import React from "react";
import { useLocation, useParams, useNavigate } from "react-router-dom";
import CardFrameProps from "../interfaces/cardFrameProps";
import Card from "./card";
import CardFrameState from "../interfaces/cardFrameState";
import "../styles/componentStyles/cardFrame.less";

// Create a wrapper component to use hooks
const CardFrameWrapper: React.FC<CardFrameProps> = (props) => {
    const location = useLocation();
    const { itemName } = useParams<{ itemName: string }>();
    const navigate = useNavigate();

    // Determine item type based on current route
    const getItemType = (): 'planet' | 'film' | 'resident' => {
        if (location.pathname.includes('/films') || location.pathname.includes('/film/')) return 'film';
        if (location.pathname.includes('/residents') || location.pathname.includes('/resident/')) return 'resident';
        return 'planet';
    };

    // Get the selected card name from URL params
    const selectedCardName = itemName ? decodeURIComponent(itemName) : undefined;

    const handleCardSelect = (cardTitle: string) => {
        // Navigate to the detail route
        const itemType = getItemType();
        const encodedTitle = encodeURIComponent(cardTitle);
        navigate(`/SW/${itemType}/${encodedTitle}`);
    };

    const handleCardDeselect = () => {
        // Navigate back to the list view
        const itemType = getItemType();
        navigate(`/SW/${itemType}s`); // Add 's' to make it plural for the list route
    };

    return (
        <div className="cardFrame">
            {props.items.map((item) => {
                const isSelected = selectedCardName === item.name;
                const isHidden = selectedCardName && selectedCardName !== item.name;

                return <Card
                    isSelected={isSelected}
                    isLeaveButtonVisible={isSelected}
                    key={item.name}
                    className={`${item.name} ${isHidden ? 'hidden' : ''}`}
                    content={item.getDetailsContent()}
                    title={item.name}
                    hasLeaveButton={true}
                    leaveButtonIMGContent={item.exitButtonIMG}
                    backgroundImage={item.backgroundImage}
                    onSelect={handleCardSelect}
                    onDeselect={handleCardDeselect}
                    onClick={() => { handleCardSelect(item.name) }}
                />;
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