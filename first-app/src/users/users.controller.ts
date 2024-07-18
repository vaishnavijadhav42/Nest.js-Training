import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe, HttpStatus, UsePipes, ValidationPipe, UseFilters, UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserPipe} from 'src/pipes/user.pipe';
import { CustomException } from './users.exceptions';
import { CustomExceptionFilter } from './users.exceptions.filter';
import { AuthGuard } from './users.guard';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe())
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @UseGuards(new AuthGuard())
  findAll() {
    return this.usersService.findAll();
  }


  @Get(':id')
  findOne(@Param('id',UserPipe) id: string)
  {
    console.log(typeof(id));
    return this.usersService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id',ParseIntPipe) id: string, @Body() updateUserDto: UpdateUserDto) {
    console.log(typeof id); 
        return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  @UseFilters(CustomExceptionFilter)
  remove(@Param('id',ParseIntPipe) id: string) {
    return this.usersService.remove(+id);
  }
}
