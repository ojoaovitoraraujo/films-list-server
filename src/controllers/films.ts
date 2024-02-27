import { Request, Response } from "express"
import { GetAllFilms } from "../services/films"

export function getFilms(req: Request, res: Response) {
    try{
        const films = GetAllFilms()
        res.send(200).json(films)
    }
    catch(err){
        console.error(err)
    }
}