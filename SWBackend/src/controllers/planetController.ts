import planets from "../planets";
import { Request, Response } from 'express';

export default class PlanetController {

    constructor() {

    }

    getPlanets(req: Request, res: Response) {
        res.status(200).send(planets);
    }

    getPlanetByName(req: Request<{ name: string }>, res: Response) {
        const name = req.params.name.toLowerCase();
        const planet = planets.find(p => p.name.toLowerCase() === name);

        if (!planet) {
            return res.status(404).send({ error: "Planet not found" });
        }

        res.status(200).send(planet);
    }

    searchPlanets(req: Request, res: Response) {
        let results = planets;

        // Filter by name (partial match)
        if (req.query.name) {
            const name = (req.query.name as string).toLowerCase();
            results = results.filter(p => p.name.toLowerCase().includes(name));
        }

        // Filter by climate (exact match)
        if (req.query.climate) {
            const climate = (req.query.climate as string).toLowerCase();
            results = results.filter(p => p.climate.toLowerCase() === climate);
        }

        // Filter by terrain (partial match)
        if (req.query.terrain) {
            const terrain = (req.query.terrain as string).toLowerCase();
            results = results.filter(p => p.terrain.toLowerCase().includes(terrain));
        }

        // Filter by minimum population
        if (req.query.population_min) {
            const popMin = parseInt(req.query.population_min as string);
            results = results.filter(p => parseInt(p.population) >= popMin);
        }

        // Filter by maximum population
        if (req.query.population_max) {
            const popMax = parseInt(req.query.population_max as string);
            results = results.filter(p => parseInt(p.population) <= popMax);
        }

        // Filter by minimum diameter
        if (req.query.diameter_min) {
            const diamMin = parseInt(req.query.diameter_min as string);
            results = results.filter(p => parseInt(p.diameter) >= diamMin);
        }

        // Filter by maximum diameter
        if (req.query.diameter_max) {
            const diamMax = parseInt(req.query.diameter_max as string);
            results = results.filter(p => parseInt(p.diameter) <= diamMax);
        }

        res.status(results.length > 0 ? 200 : 204).send(results);
    }
}