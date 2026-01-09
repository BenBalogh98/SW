import { DetailsContent } from "../items/item";

export default interface CardProps {
    title: string;
    className: string;
    onSelect?: (planetToSelect: string) => void,
    onDeselect?: (e: React.MouseEvent<HTMLDivElement>) => void,
    key: string,
    content: DetailsContent[],
    hasLeaveButton?: boolean,
    leaveButtonIMGContent?: string,
    backgroundImage?: string,
    isSelected?: boolean,
    isLeaveButtonVisible?: boolean,
    onClick?: () => void
}

