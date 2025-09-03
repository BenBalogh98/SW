import React from "react";
import { useNavigate } from "react-router-dom";
import Card from "./card";
import CardProps from "../interfaces/cardProps";

// Convert the CardProps interface to work with functional component
interface RoutableCardProps extends Omit<CardProps, 'onSelect' | 'onDeselect'> {
    itemType?: 'planet' | 'film' | 'resident';
}

const RoutableCard: React.FC<RoutableCardProps> = ({
    title,
    className,
    content,
    hasLeaveButton,
    leaveButtonIMGContent,
    backgroundImage,
    itemType = 'planet'
}) => {
    const navigate = useNavigate();

    const handleCardSelect = (cardTitle: string) => {
        const encodedTitle = encodeURIComponent(cardTitle);
        navigate(`/SW/${itemType}/${encodedTitle}`);
    };
    // Clicking the card navigates, BUT since the card
    //  is recreated, its selected state is lost.
    // To fix this, the selected state needs to be managed here.

    return (
        <Card

            title={title}
            className={className}
            content={content}
            hasLeaveButton={hasLeaveButton}
            leaveButtonIMGContent={leaveButtonIMGContent}
            backgroundImage={backgroundImage}
            onSelect={handleCardSelect}
            key={title}
        />
    );
};

export default RoutableCard;
