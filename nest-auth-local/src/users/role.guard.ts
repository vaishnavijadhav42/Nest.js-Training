import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Request } from 'express';

@Injectable()
export class RoleGuard implements CanActivate
{
    private rolePassed:string;
    
    constructor(role:string){
        this.rolePassed=role;
    }
    canActivate(context: ExecutionContext): boolean {
        
        const ctx=context.switchToHttp();
        const request:any =ctx.getRequest<Request>();

        return request.user.role === this.rolePassed;
        
        
    }
}