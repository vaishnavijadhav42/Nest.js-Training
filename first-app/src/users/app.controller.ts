import { Body, Controller, Post, Req, Res, UseInterceptors} from '@nestjs/common';
import { UserInterceptor } from './interceptors/users.interceptors';
import { CreateUserDto } from './dto/create-user.dto';
import { DemoDto } from './dto/demo.dto';

@Controller('app')
export class AppController {
  @Post()
  @UseInterceptors(UserInterceptor)
  createApp(@Body() demoDto: DemoDto): any {
    
    return demoDto;
  }
}
