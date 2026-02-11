import Item, { DetailsContent } from "./item";
import { IPeople } from "../interfaces/SWApiResponse";
import Film from "./film";

export default class People extends Item {
    public name: string;
    public height: string;
    public mass: string;
    public hair_color: string;
    public skin_color: string;
    public eye_color: string;
    public birth_year: string;
    public gender: string;
    public homeworldURL: string;
    public homeworld: Item | undefined = undefined;
    public filmsURLs: string[];
    public films: Item[] = [];
    public species: any[];
    public vehicles: any[];
    public starships: any[];
    public created: string;
    public edited: string;
    public url: string;
    public exitButtonIMG: string = "";
    public backgroundImage: string = "";

    constructor(residentProperties: IPeople) {
        super(residentProperties);

        ({
            name: this.name,
            height: this.height,
            mass: this.mass,
            hair_color: this.hair_color,
            skin_color: this.skin_color,
            eye_color: this.eye_color,
            birth_year: this.birth_year,
            gender: this.gender,
            homeworld: this.homeworldURL,
            films: this.filmsURLs,
            species: this.species,
            vehicles: this.vehicles,
            starships: this.starships,
            created: this.created,
            edited: this.edited,
            url: this.url
        } = residentProperties)


    }

    public getDetailsContent(): DetailsContent[] {
        return [
            { displayName: "Height:", value: this.height },
            { displayName: "Mass:", value: this.mass },
            { displayName: "Hair color:", value: this.hair_color },
            { displayName: "Skin color:", value: this.skin_color },
            { displayName: "Eye color:", value: this.eye_color },
            { displayName: "Birth year:", value: this.birth_year },
            { displayName: "gender:", value: this.gender },
            { displayName: "Homeworld:", value: this.homeworld || this.homeworldURL },
            { displayName: "Films:", value: this.films || this.filmNames },
            { displayName: "Species:", value: this.species },
            { displayName: "Vehicles:", value: this.vehicles },
            { displayName: "Starships:", value: this.starships },
            { displayName: "Created:", value: this.created },
            { displayName: "Edited:", value: this.edited }
        ]
    }

    public getDetailsContent2(): DetailsContent[] {
        return [
            { displayName: "Height:", value: this.height },
            { displayName: "Mass:", value: this.mass },
            { displayName: "Hair color:", value: this.hair_color },
            { displayName: "Skin color:", value: this.skin_color },
            { displayName: "Eye color:", value: this.eye_color },
            { displayName: "Birth year:", value: this.birth_year },
            { displayName: "gender:", value: this.gender },
            { displayName: "Homeworld:", value: this.homeworld?.name || this.homeworldURL },
            { displayName: "Films:", value: this.filmNames },
            { displayName: "Species:", value: this.species },
            { displayName: "Vehicles:", value: this.vehicles },
            { displayName: "Starships:", value: this.starships },
            { displayName: "Created:", value: this.created },
            { displayName: "Edited:", value: this.edited }
        ]
    }

    private get filmNames(): string[] {
        if (!this.films.length) {
            return this.filmsURLs;
        }
        return this.films.map((film) => { return film.name });
    }
}