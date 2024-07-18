import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction,Request,Response } from "express";

@Injectable()
export class BookMiddleware implements NestMiddleware
{
    use(req: Request, res: Response, next:NextFunction) {
        console.log(`Method: ${req.method}`);
        console.log(`URL: ${req.url}`);
        console.log(`Host: ${req.hostname}`);
        console.log(`Protocol: ${req.protocol}`);
        console.log('This is class based middleware for book module..');
        next();
    }
    
}