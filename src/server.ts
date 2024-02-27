import express from 'express';
import filmsRouter from './app/routes/filmsRouter';
import cors from 'cors';
import { AppDataSource } from './database/data-source';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use(express.json());
app.use(cors());
app.use("/films", filmsRouter);
AppDataSource.initialize().then(async () => {
    app.listen(3000, () => {console.log('Server is running on port 3000')});
})
