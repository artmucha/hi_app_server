import { ValidationError } from "express-validator";

import { CustomError } from "./customError";

export class RequestValidationError extends CustomError {
	statusCode = 400;

	constructor(private errors: ValidationError[]) {
		super();

		// potrzebne ponieważ rozszerzam wbudowana klasę
		Object.setPrototypeOf(this, RequestValidationError.prototype);
	};

	serializeErrors() {
		return this.errors.map(error => {
			return { message: error.msg, field: error.param };
		});
	};
};