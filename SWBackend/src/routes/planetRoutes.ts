import { Router } from 'express';
import PlanetController from '../controllers/planetController';

const router = Router();

const planetController = new PlanetController();

router.get("/", planetController.getPlanets);
router.get("/:name", planetController.getPlanetByName);
router.get("/search/:term", planetController.searchPlanets);

export default router;