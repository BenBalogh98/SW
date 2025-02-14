import { ReactElement } from "react";
import Card from "../components/card";

export default interface CardProps {
    title: string;
    className: string;
    onSelect?: (planetToSelect: string) => void,
    onDeselect?: (planetToDeselect: string) => void,
    key: string,
    content: Object,
    hasLeaveButton?: boolean,
    leaveButtonIMGContent?: string
}