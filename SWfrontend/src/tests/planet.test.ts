import Planet from "../items/planet";
import { IPlanet } from "../interfaces/SWApiResponse";

describe("Planet", () => {
    it("should create an instance of Planet", () => {
        const planetData: IPlanet = {
            name: "Tatooine",
            rotation_period: "23",
            orbital_period: "304",
            diameter: "10465",
            climate: "arid",
            gravity: "1 standard",
            terrain: "desert",
            surface_water: "1",
            population: "200000",
            residents: [],
            films: [],
            created: new Date("2014-12-09T13:50:49.641000Z"),
            edited: new Date("2014-12-09T13:50:49.641000Z"),
            url: "https://swapi.dev/api/planets/1/"
        };

        const planet = new Planet(planetData);
        expect(planet).toBeInstanceOf(Planet);
        expect(planet.name).toBe("Tatooine");
    });
});

describe("Planet.getPlanetDetailsContent", () => {
    it("should return an array of details content", () => {
        const planetData: IPlanet = {
            name: "Tatooine",
            rotation_period: "23",
            orbital_period: "304",
            diameter: "10465",
            climate: "arid",
            gravity: "1 standard",
            terrain: "desert",
            surface_water: "1",
            population: "200000",
            residents: [],
            films: [],
            created: new Date("2014-12-09T13:50:49.641000Z"),
            edited: new Date("2014-12-09T13:50:49.641000Z"),
            url: "https://swapi.dev/api/planets/1/"
        };

        const planet = new Planet(planetData);
        const detailsContent = planet.getPlanetDetailsContent();
        expect(detailsContent.length).toBe(11);
    });
});

describe("Planet.getPlanetDetailsContent", () => {
    it("elements should have displayName and value properties", () => {
        const planetData: IPlanet = {
            name: "Tatooine",
            rotation_period: "23",
            orbital_period: "304",
            diameter: "10465",
            climate: "arid",
            gravity: "1 standard",
            terrain: "desert",
            surface_water: "1",
            population: "200000",
            residents: [],
            films: [],
            created: new Date("2014-12-09T13:50:49.641000Z"),
            edited: new Date("2014-12-09T13:50:49.641000Z"),
            url: "https://swapi.dev/api/planets/1/"
        };

        const planet = new Planet(planetData);
        const detailsContent = planet.getPlanetDetailsContent();
        detailsContent.forEach((detail) => {
            expect(detail).toHaveProperty("displayName");
            expect(detail).toHaveProperty("value");
        });
    });
});
