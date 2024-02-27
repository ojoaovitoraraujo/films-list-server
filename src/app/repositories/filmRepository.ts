import { FindOneOptions } from "typeorm"
import { AppDataSource } from "../../database/data-source"
import { Films } from "../entities/filmsEntity"
import IFilm from "../interfaces/IFilm"
import { get } from "http"

const filmsRepository = AppDataSource.getRepository(Films)

function getAllFilms(): Promise<Films[]> {
    return filmsRepository.find()
}

function getFilmById(id: number): Promise<Films | undefined> {  
    const film = filmsRepository.findOne({ where: { id: id } })
    return film
    // const options: FindOneOptions<Films> = {
    //     where: { id }
    // };
    // return filmsRepository.findOne(options)
}
function createFilm(film: IFilm) {
    try{
        filmsRepository.save(film)
    }
    catch(error){
        return(error.message)
    }
}

async function updateFilm(updatefilm: IFilm) {

    const film = await getFilmById(updatefilm.id)

    if(film){
        filmsRepository.update(updatefilm.id, updatefilm)
    }
    else{
        throw new Error('Film not found!')
    }
}

function removeFilm(id: number) {
    try{
        filmsRepository.delete(id)
    }
    catch(error){
       return(error.message)
    }
}

export {
    getAllFilms,
    getFilmById,
    createFilm,
    updateFilm,
    removeFilm
}

