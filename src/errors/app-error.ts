// app error
export class AppError extends Error {
    public status: number;

    constructor(status: number, message: string) {
        super(message);

        this.status = status;

        Error.captureStackTrace(this, this.constructor);
    };
};

