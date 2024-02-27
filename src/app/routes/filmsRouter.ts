import { Router } from "express";
import { getFilms, postFilm, getFilm, deleteFilm, putFilm } from "../controllers/filmsControllers";

const router = Router();

router.get('/', getFilms);

router.get('/:id', getFilm);

router.post('/', postFilm);

router.put('/', putFilm);

router.delete('/:id', deleteFilm);

export default router;