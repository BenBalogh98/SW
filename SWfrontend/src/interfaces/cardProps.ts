import Card from "../components/card";

export default interface CardProps {
    title: string;
    className: string;
    onClick?: (planetToSelect: string) => void,
    key: string
}