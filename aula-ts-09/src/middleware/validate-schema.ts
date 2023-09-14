import { Request, Response, NextFunction } from "express";
import { Schema, ValidationResult } from "joi";

export function validateSchema(schema: Schema) {
    return function (req: Request, res: Response, next: NextFunction) {
        const { error } = schema.validate(req.body, { abortEarly: false }) as ValidationResult;

        if (error) {
            return res.status(400).json({ error: error.message });
        }
        next();
    }
}