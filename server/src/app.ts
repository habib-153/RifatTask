import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import notFound from './app/middlewares/notFound';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import router from './app/routes';
import cookieParser from 'cookie-parser';

const app: Application = express();
//const port = 3000

app.use(express.json());
app.use(cookieParser());
app.use(cors({ origin: ['http://localhost:5173'], credentials: true}));

//  application routes
app.use('/api/v1', router)

app.get('/', (req: Request, res: Response) => {
  //const a = 10;
  res.send("Hello");
});

app.use(globalErrorHandler)
app.use(notFound)

export default app;
