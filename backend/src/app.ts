import express from 'express';
import cors from 'cors';
import promptRoutes from './routes/prompt.routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/prompts', promptRoutes);

export default app;
