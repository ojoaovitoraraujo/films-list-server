import { Request, Response } from "express";
import { getAllFilms, createFilm, getFilmById, updateFilm, removeFilm, getFavoriteFilms } from "../repositories/filmRepository";

async function getFilms(req: Request, res: Response): Promise<Response> {
    try {
        const films = await getAllFilms();
        return res.json(films);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function getFilm(req: Request, res: Response): Promise<Response> {
    try {
        const { id } = req.params;
        const film = await getFilmById(parseInt(id));
        return res.json(film);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function getFavorites(req: Request, res: Response): Promise<Response> {
    try {
        console.log(req.params)
        const favoriteFilms = await getFavoriteFilms();
        return res.json(favoriteFilms);
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function postFilm(req: Request, res: Response): Promise<Response> {
    try {
        await createFilm(req.body);
        return res.json({ message: "Film posted" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function putFilm(req: Request, res: Response): Promise<Response> {
    try {
        await updateFilm(req.body);
        return res.send({ message: 'Film Updated' });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

async function deleteFilm(req: Request, res: Response): Promise<Response> {
    try {
        const { id } = req.params;
        await removeFilm(parseInt(id));
        return res.json({ message: "Film deleted" });
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
}

export {
    getFilms,
    getFilm,
    postFilm,
    putFilm,
    deleteFilm,
    getFavorites
};
