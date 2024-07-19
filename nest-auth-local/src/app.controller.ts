import { Controller, Get, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';


@Controller("app")
export class AppController {
  constructor() {}

  @Get()
  @UseGuards(AuthGuard('local'))
  getHello(): string {
    return "This is private data";
  }
}
