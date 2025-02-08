// Should create and store planets. Will be used by some TSX to create the actual cards from the planets.
import SwapiRequests from '../ajaxControls/swapiRequests.ts';
import Planet from '../models/planet.ts';

export default class PlanetGenerator {
    private swapi = new SwapiRequests();
    private planets: Planet[] = [];

    constructor() {

    }

    public createPlanets(callBackonPlanetReceived: Function): Planet[] {
        console.error("createPlanets");

        const planetsPromise = this.swapi.getSWPlanets();
        planetsPromise.then((planets) => {
            // trigger render after this
            this.planets = [];
            planets.results.forEach((result) => {
                this.planets.push(new Planet(result));
            });
            callBackonPlanetReceived(this.planets);
        });
        console.error(planetsPromise);
        console.error(this.planets);
        return this.planets;
    }
}