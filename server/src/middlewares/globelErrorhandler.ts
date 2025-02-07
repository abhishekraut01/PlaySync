import { Request, Response, NextFunction, ErrorRequestHandler } from "express";
import ApiError from "../utils/ApiError";

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
    if (err instanceof ApiError) {
        res.status(err.statusCode).json({
            success: false,
            statusCode: err.statusCode,
            message: err.message,
            errors: err.errors || [],
        });
        return;
    }

    console.error("Unexpected Error:", err);

    res.status(500).json({
        success: false,
        statusCode: 500,
        message: "Something went wrong! Please try again later.",
    });
};

export default errorHandler;
