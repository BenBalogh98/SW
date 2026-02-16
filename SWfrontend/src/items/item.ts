interface ItemConstructor {
    name: string;
    url: string;
}

/**
 * Describes some basic properties of items. Each item implements getDetailsContent on their own way with their own properties, so pointless to make this a base class.
 */
export default class Item {
    public name: string;
    public url: string;

    public exitButtonIMG: string | undefined = undefined;
    public backgroundImage: string | undefined = undefined;

    constructor(itemProperties: ItemConstructor) {
        ({
            name: this.name,
            url: this.url,
        } = itemProperties);
    }

    public getDetailsContent(): DetailsContent[] {
        return [
            { displayName: "name", value: this.name },
            { displayName: "URL", value: this.url }
        ];
    }
}

export interface DetailsContent {
    displayName: string;
    value: string | string[] | Date | number | Item[] | Item | undefined;
}
