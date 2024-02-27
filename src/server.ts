import express from 'express';
import filmsRouter from './app/routes/filmsRouter';
import cors from 'cors';
import { AppDataSource } from './database/data-source';
import favoritesRouter from './app/routes/favoritesRoute';

const app = express();

app.use(express.json());
app.use(cors());
app.use("/films", filmsRouter);
app.use("/favorites", favoritesRouter);

AppDataSource.initialize().then(async () => {
    app.listen(3000, () => {console.log('Server is running on port 3000')});
})
