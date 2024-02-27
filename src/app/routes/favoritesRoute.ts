import { Router } from "express";
import { getFavorites } from "../controllers/filmsControllers";

const favoritesRouter = Router();


favoritesRouter.get('/', getFavorites);

export default favoritesRouter;