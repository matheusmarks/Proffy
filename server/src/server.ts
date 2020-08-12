import express from 'express';
import cors from 'cors';

const app = express();
import routes from './routes';
app.use(cors());
app.use(express.json());
app.use(routes);



console.log();


app.listen(3333);