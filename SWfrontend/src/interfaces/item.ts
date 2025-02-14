export default interface Item {
    name: string;
    url: string;
    getPlanetDetailsContent: () => DetailsContent[];
    exitButtonIMG: string;
    backgroundImage: string;
}

export interface DetailsContent {
    displayName: string;
    value: string | string[] | Date;
}