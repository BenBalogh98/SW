import SwapiRequests from "./ajaxControls/swapiRequests";
import { Data } from "./interfaces/appState";
import { IFilm, IPeople, IPlanet } from "./interfaces/SWApiResponse";
import Film from "./items/film";
import Planet from "./items/planet";
import People from "./items/resident";

export default class Logic {
    // Create an instance of SWAPIRequests and load all data from the API
    private people: People[] = [];
    private films: Film[] = [];
    private planets: Planet[] = [];
    private swapiRequests: SwapiRequests = new SwapiRequests();
    private ID = Math.random().toString(36).substring(2, 11);
    constructor() {
        console.error("Logic instance created with ID:", this.ID);
        (window as any).logic = this;
        /*const originalPush = Array.prototype.push;
        Array.prototype.push = function (...items: any[]) {
            console.error("Pushing items:", this);
            return originalPush.apply(this, items);
        }*/
    }

    // // Getters
    // public get people(): People[] {
    //     return this._people;
    // }

    // public get films(): Film[] {
    //     return this._films;
    // }

    // public get planets(): Planet[] {
    //     return this._planets;
    // }

    // // Setters
    // public set people(value: People[]) {
    //     this._people = value;
    //     console.error("set people called", this._people);
    //     (window as any).people = this._people;
    // }

    // public set films(value: Film[]) {
    //     this._films = value;
    //     console.error("set films called", this._films);
    //     (window as any).films = this._films;
    // }

    // public set planets(value: Planet[]) {
    //     this._planets = value;
    //     console.error("set planets called", this._planets);
    //     (window as any).planets = this._planets;
    // }

    public async loadAllData(): Promise<[IPeople[], IFilm[], IPlanet[]]> {
        const people = this.swapiRequests.getSWPeople();
        const films = this.swapiRequests.getSWFilms();
        const planets = this.swapiRequests.getSWPlanets();

        return Promise.all([people, films, planets]);
    }

    public async searchPlanets(searchTerm: string): Promise<Planet[]> {
        const planetsData = await this.swapiRequests.searchSWPlanets(searchTerm);
        this.createPlanets(planetsData);
        return this.planets;
    }

    public async getData(): Promise<{ films: Film[], people: People[], planets: Planet[] }> {
        const [people, films, planets] = await this.loadAllData();

        this.createItems(people, films, planets);
        return { films: this.films, people: this.people, planets: this.planets }
    }

    private matchItems(): void {
        this.people.forEach((people) => {
            const films = people.filmsURLs;
            people.films = this.films.filter((film) => {
                if (films.find((peopleFilm) => peopleFilm === film.url)) {
                    return true;
                }
                return false;
            });
        });

        this.planets.forEach((planet) => {
            const films = planet.filmsURLs;
            planet.films = this.films.filter((film) => {
                if (films.find((planetFilm) => planetFilm === film.url)) {
                    return true;
                }
                return false;
            });

            const residents = planet.residentsURLs;
            planet.resident = this.people.filter((people) => {
                if (residents.find((planetResident) => planetResident === people.url)) {
                    return true;
                }
                return false;
            });
        });
    }

    public createItems(people: IPeople[], films: IFilm[], planets: IPlanet[]): void {
        this.people = [];
        this.films = [];
        this.planets = [];

        people.forEach((people) => {
            this.people.push(new People(people));
        });

        films.forEach((film) => {
            this.films.push(new Film(film));
        });

        planets.forEach((planet) => {
            this.planets.push(new Planet(planet));
        });

        this.matchItems();
    }

    private createPeople(peopleData: IPeople[]): void {
        this.people = [];
        peopleData.forEach((people) => {
            this.people.push(new People(people));
        });
    }

    private createFilms(filmData: IFilm[]): void {
        this.films = [];
        filmData.forEach((film) => {
            this.films.push(new Film(film));
        });
    }

    private createPlanets(planetData: IPlanet[]): void {
        this.planets = [];
        planetData.forEach((planet) => {
            this.planets.push(new Planet(planet));
        });

        this.matchItems();
    }

}