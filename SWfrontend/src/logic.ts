import SwapiRequests from "./ajaxControls/swapiRequests";
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

    public async loadAllData(): Promise<{ films: Film[], people: People[], planets: Planet[] }> {
        // Load all data from the API
        const people = await this.swapiRequests.getSWPeople();
        const films = await this.swapiRequests.getSWFilms();
        const planets = await this.swapiRequests.getSWPlanets();
        this.createItems(people, films, planets);

        return new Promise<{ films: Film[], people: People[], planets: Planet[] }>((resolve) => {
            resolve({ films: this.films, people: this.people, planets: this.planets })
        });
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

}