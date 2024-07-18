import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";
import { Request } from 'express';

@Injectable()
export class AuthGuard implements CanActivate
{
    public key:string="$324authkey";
    canActivate(context: ExecutionContext): boolean {
        const ctx = context.switchToHttp();
        const request =ctx.getRequest<Request>();
          
        const apiKey = request.get('key'); // Use 'get' method to retrieve header
        if (!apiKey || apiKey !== this.key) return false;
    
        return true;
        
        
    }
}