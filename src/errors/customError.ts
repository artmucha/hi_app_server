export abstract class CustomError extends Error {
  abstract statusCode: number;

  constructor() {
		super();

		// potrzebne ponieważ rozszerzam wbudowana klasę
		Object.setPrototypeOf(this, CustomError.prototype);
  };

	abstract serializeErrors(): { message: string, field?: string }[];
};