import { NextFunction, Request, Response } from "express";
import { AppError } from "./AppError";


export class HandleErrors{
    static execute(error: Error, req: Request, res: Response, next: NextFunction){
        if(error instanceof AppError){
            return res.status(error.statusCode).json({ error: error.message })
        }

        console.log(error)
        return res.status(500).json({ "error": "Internal server error."})
    }
}