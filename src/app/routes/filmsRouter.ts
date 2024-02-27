import { Router } from "express";
import { getFilms, postFilm, getFilm, deleteFilm, putFilm } from "../controllers/filmsControllers";
const filmsRouter = Router();

filmsRouter.get('/', getFilms);

filmsRouter.get('/:id', getFilm);

filmsRouter.post('/', postFilm);

filmsRouter.put('/', putFilm);

filmsRouter.delete('/:id', deleteFilm);

export default filmsRouter;