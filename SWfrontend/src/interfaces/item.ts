/**
 * Describes some basic properties of items. Each item implements getDetailsContent on their own way with their own properties, so pointless to make this a base class.
 */
export default class Item {
    public name: string;
    public url: string;

    public exitButtonIMG: string;
    public backgroundImage: string;

    constructor(itemProperties: Item) {
        ({
            name: this.name,
            url: this.url,
            exitButtonIMG: this.exitButtonIMG,
            backgroundImage: this.backgroundImage


        } = itemProperties);
    }

    public getDetailsContent(): DetailsContent[] {
        return [
            { displayName: "nane", value: this.name },
            { displayName: "URL", value: this.url }
        ];
    }
}

export interface DetailsContent {
    displayName: string;
    value: string | string[] | Date;
}
