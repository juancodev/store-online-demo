import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import {routerApp} from './router/index.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3100;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

routerApp(app);

app.listen(PORT, ()=> {
  console.log(`Server on port ${PORT}`)
})