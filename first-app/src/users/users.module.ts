import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { AppController } from './app.controller';

@Module({
  controllers: [UsersController,AppController],
  providers: [UsersService],
})
export class UsersModule {}
