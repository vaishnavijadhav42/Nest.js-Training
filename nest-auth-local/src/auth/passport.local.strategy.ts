import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import {Strategy} from "passport-local"
import { User } from "src/users/user.entity";
import { UserService } from "src/users/user.service";

@Injectable()
export class PassportLocalStratergy extends PassportStrategy(Strategy)
{
  constructor(private readonly userService:UserService)
  {
      super();
  }


   validate(userName:string,password:string):User{
       
        const user:User=this.userService.findByName(userName);

        if(user === undefined) throw new UnauthorizedException();

        if(user.password === password) return user;
   }
}