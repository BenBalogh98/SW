import Item, { DetailsContent } from "./item";
import { IFilm } from "../interfaces/SWApiResponse";
import Planet from "./planet";
import People from "./resident";

export default class Film extends Item {
    public name: string;
    public episode_id: number;
    public opening_crawl: string;
    public director: string;
    public producer: string;
    public release_date: Date;
    public characters: People[] | undefined = undefined;
    public characterURLs: string[] = [];
    public planets: Planet[] | undefined = undefined;
    public planetURLs: string[] = [];
    public starships: string[];
    public vehicles: string[];
    public species: string[];
    public created: Date;
    public edited: Date;
    public url: string;
    public exitButtonIMG: string = "";
    public backgroundImage: string = "";

    constructor(filmProperties: IFilm) {
        super({ ...filmProperties, name: filmProperties.title, url: filmProperties.url });
        ({
            title: this.name,
            episode_id: this.episode_id,
            opening_crawl: this.opening_crawl,
            director: this.director,
            producer: this.producer,
            release_date: this.release_date,
            characters: this.characterURLs,
            planets: this.planetURLs,
            starships: this.starships,
            vehicles: this.vehicles,
            species: this.species,
            created: this.created,
            edited: this.edited,
            url: this.url
        } = filmProperties);
    }

    public getDetailsContent(): DetailsContent[] {
        return [
            { displayName: "Episode ID", value: this.episode_id },
            { displayName: "Opening Crawl", value: this.opening_crawl },
            { displayName: "Director", value: this.director },
            { displayName: "Producer", value: this.producer },
            { displayName: "Release Date", value: this.release_date },
            { displayName: "Characters", value: this.characters || this.characterURLs },
            { displayName: "Planets", value: this.planets || this.planetURLs },
            { displayName: "Starships", value: this.starships },
            { displayName: "Vehicles", value: this.vehicles },
            { displayName: "Species", value: this.species },
            { displayName: "Created", value: new Date(this.created) },
            { displayName: "Edited", value: new Date(this.edited) }
        ]
    }
}