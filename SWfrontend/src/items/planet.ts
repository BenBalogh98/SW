import planetImages from "../consts/planetImages";
import { IPlanet } from "../interfaces/SWApiResponse";
import Item, { DetailsContent } from "../interfaces/item";
import { leaveButtonImage } from "../consts/leaveButtonImage";
export default class Planet implements Item {
    public name: string;
    public rotation_period: string;
    public orbital_period: string;
    public diameter: string;
    public climate: string;
    public gravity: string;
    public terrain: string;
    public surface_water: string;
    public population: string;
    public residents: string[];
    public films: string[];
    public created: Date;
    public edited: Date;
    public url: string;
    public exitButtonIMG: string = leaveButtonImage;
    public backgroundImage: string;

    constructor(planetProperties: IPlanet) {
        ({
            name: this.name,
            rotation_period: this.rotation_period,
            orbital_period: this.orbital_period,
            diameter: this.diameter,
            climate: this.climate,
            gravity: this.gravity,
            terrain: this.terrain,
            surface_water: this.surface_water,
            population: this.population,
            residents: this.residents,
            films: this.films,
            created: this.created,
            edited: this.edited,
            url: this.url
        } = planetProperties);

        this.backgroundImage = planetImages[this.name.toLowerCase() as keyof typeof planetImages];
    }

    public getPlanetDetailsContent(): DetailsContent[] {
        return [
            { displayName: "Rotation Period:", value: this.rotation_period },
            { displayName: "Orbital Period:", value: this.orbital_period },
            { displayName: "Diameter:", value: this.diameter },
            { displayName: "Climate:", value: this.climate },
            { displayName: "Gravity:", value: this.gravity },
            { displayName: "Terrain:", value: this.terrain },
            { displayName: "Surface water:", value: this.surface_water },
            { displayName: "Population:", value: this.population },
            { displayName: "Residents:", value: this.residents },
            { displayName: "Films:", value: this.films },
            { displayName: "Created:", value: new Date(this.created) },
            { displayName: "Edited:", value: new Date(this.edited) }
        ]
    }

}