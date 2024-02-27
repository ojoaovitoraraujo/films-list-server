import express from 'express';
import filmsRouter from './routes/films';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.use("/films",filmsRouter);

app.listen(3000, () => {console.log('Server is running on port 3000')})