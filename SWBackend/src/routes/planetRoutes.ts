import { Router } from 'express';
import PlanetController from '../controllers/planetController';

const router = Router();

const planetController = new PlanetController();

router.get("/", planetController.getPlanets);
router.get("/search", planetController.searchPlanets);
router.get("/:name", planetController.getPlanetByName);

export default router;