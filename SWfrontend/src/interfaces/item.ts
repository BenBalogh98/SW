/**
 * Describes some basic properties of items. Each item implements getDetailsContent on their own way with their own properties, so pointless to make this a base class.
 */
export default interface Item {
    name: string;
    url: string;
    getDetailsContent: () => DetailsContent[];
    exitButtonIMG: string;
    backgroundImage: string;
}

export interface DetailsContent {
    displayName: string;
    value: string | string[] | Date;
}
