import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3100;

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());

app.get('/', (req, res) =>{
  res.send('Hello world')
})

app.listen(PORT, ()=> {
  console.log(`Server on port ${PORT}`)
})