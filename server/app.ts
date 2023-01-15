import express from 'express';
import { Application } from 'express';
import cors from 'cors';
import axios from 'axios';

const app: Application = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.get('/team', async (_: Request, res: any) => {
  //const response = await axios.get('https://run.mocky.io/v3/9118e647-e131-43c7-8668-d99af1abb5a6');
  const response = await axios.get('http://localhost:8000/team');
  console.log(response.data);
  return res.status(200).json(response.data)
});

export default app;
