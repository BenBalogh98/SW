import Item from "../items/item";

export interface IPlanet extends Item {
    name: string;
    rotation_period: string;
    orbital_period: string;
    diameter: string;
    climate: string;
    gravity: string;
    terrain: string;
    surface_water: string;
    population: string;
    residents: string[];
    films: string[];
    created: Date;
    edited: Date;
    url: string;
}
export interface IPlanets {
    count: number;
    results: IPlanet[];
}

export interface IPeople extends Item {
    name: string;
    height: string;
    mass: string;
    hair_color: string;
    skin_color: string;
    eye_color: string;
    birth_year: string;
    gender: string;
    homeworld: string;
    films: string[];
    species: any[];
    vehicles: any[];
    starships: string[];
    created: string;
    edited: string;
    url: string;
}

export interface IPeoples {
    count: number;
    results: IPeople[];
}

export interface IFilm extends Item {
    title: string
    episode_id: number
    opening_crawl: string
    director: string
    producer: string
    release_date: Date
    characters: string[]
    planets: string[]
    starships: string[]
    vehicles: string[]
    species: string[]
    created: Date
    edited: Date
    url: string
}

export interface IFilms {
    count: number
    results: IFilm[]
}