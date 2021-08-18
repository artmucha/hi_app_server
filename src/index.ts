import express from 'express';
import { json } from 'body-parser';

import { userRouter } from './router/users';
import { errorHandler } from './middlewares/errorHandler';

const app = express();
app.use(json());
app.use(userRouter);
app.use(errorHandler);

app.listen(5000, () => {console.log('Listening on port 5000')});