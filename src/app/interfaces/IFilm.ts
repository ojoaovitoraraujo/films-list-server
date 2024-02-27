interface IFilm {
    id?: number;
    name: string;
    image?: string;
    description?: string;
    duration?: number
    genre?: string;
    director?: string;
    avaliation?: number;
    favorite?: boolean;
}

export default IFilm;