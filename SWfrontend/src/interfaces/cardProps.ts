import { DetailsContent } from "./item";

export default interface CardProps {
    title: string;
    className: string;
    onSelect?: (planetToSelect: string) => void,
    onDeselect?: (planetToDeselect: string) => void,
    key: string,
    content: DetailsContent[],
    hasLeaveButton?: boolean,
    leaveButtonIMGContent?: string,
    backgroundImage: string
}