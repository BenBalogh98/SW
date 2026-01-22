import SwapiRequests from "./ajaxControls/swapiRequests";
import { Data } from "./interfaces/appState";
import { IFilm, IPeople, IPlanet } from "./interfaces/SWApiResponse";
import Film from "./items/film";
import Planet from "./items/planet";
import People from "./items/resident";

export default class Logic {
    // Create an instance of SWAPIRequests and load all data from the API
    public people: People[] = [];
    public films: Film[] = [];
    public planets: Planet[] = [];
    private swapiRequests: SwapiRequests = new SwapiRequests();

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
    }

}