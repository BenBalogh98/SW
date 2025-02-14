import SwapiRequests from '../ajaxControls/swapiRequests.ts';
import Planet from '../models/planet.ts';

/**
 * Creates 
 */
export default class PlanetGenerator {
    private swapi = new SwapiRequests();
    private planets: Planet[] = [];

    constructor() {

    }

    public createPlanets(callBackonPlanetReceived: (planet: Planet[]) => void): Planet[] {
        const planetsPromise = this.swapi.getSWPlanets();
        planetsPromise.then((planets) => {
            this.planets = [];
            planets.results.forEach((result) => {
                this.planets.push(new Planet(result));
            });
            callBackonPlanetReceived(this.planets);
        });

        return this.planets;
    }
}