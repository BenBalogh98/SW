import planets from "../planets";
import { Request, Response } from 'express';

export default class PlanetController {
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

    searchPlanets(req: Request<{ term: string }>, res: Response) {
        const term = req.params.term.toLowerCase();
        const results = planets.filter(p => p.name.toLowerCase().includes(term));
        res.status(results.length > 0 ? 200 : 204).send(results);
    }
}