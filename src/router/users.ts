import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

import { DatabaseConnectionError } from '../errors/databaseConnectionError';
import { RequestValidationError } from '../errors/requestValidationErrors';

const userRouter = express.Router();

userRouter.get('/api/users/currentuser', (req, res) => {
    res.send('Hi there!');
});

userRouter.post('/api/users/signup', [
	body('email')
		.isEmail()
		.withMessage('Podaj poprawny adres email'),
	body('password')
		.trim()
		.isLength({ min: 6, max: 20 })
		.withMessage('Hasło musi mieć od 6 do 20 znaków')
	], 
	(req: Request, res: Response) => {
		const errors = validationResult(req);

		if(!errors.isEmpty()) {
			throw new RequestValidationError(errors.array());
		}

		throw new DatabaseConnectionError();
		res.send({});
	}
);

userRouter.post('/api/users/signin', (req, res) => {
  res.send('Hi there!');
});

userRouter.post('/api/users/signout', (req, res) => {
  res.send('Hi there!');
});

export { userRouter };