import { IPlanet } from "../interfaces/SWApiResponse";

export default class Planet implements IPlanet {
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
    }

    public getPlanetDetailsContent() {
        return {
            "Rotation Period:": this.rotation_period,
            "Orbital Period:": this.orbital_period,
            "Diameter:": this.diameter,
            "Climate:": this.climate,
            "Gravity:": this.gravity,
            "Terrain:": this.terrain,
            "Surface water:": this.surface_water,
            "Population:": this.population,
            "Residents:": this.residents,
            "Films:": this.films,
            "Created:": new Date(this.created),
            "Edited:": new Date(this.edited)
        }
    }

}