import { Controller, Get, Post, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from './auth/auth.service';
import { RoleGuard } from './users/role.guard';


@Controller("app")
export class AppController {
  constructor(private readonly authService:AuthService) {}

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  loginUser(@Request() req): string {
    
    return this.authService.generateToken(req.user);
  }

   @Get('/admin')
   @UseGuards(AuthGuard('jwt'),new RoleGuard('admin'))
   getAdminData():string{
    return "This is admin data.."
   }

   @Get('/user')
   @UseGuards(AuthGuard('jwt'),new RoleGuard('user'))
   getUserData():string{
    return "This is user data.."
   }
}
