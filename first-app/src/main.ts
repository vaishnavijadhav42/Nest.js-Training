import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Request,Response,NextFunction } from 'express';
import * as express from 'express';

function globalMiddlewareOne(req:Request,res:Response,next:NextFunction)
{
  console.log('This is global middleware 1...');
  next();
}
function globalMiddlewareTwo(req:Request,res:Response,next:NextFunction)
{
  console.log('This is global middleware 2...');
  next();
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(express.json());
  app.use(globalMiddlewareOne);
  app.use(globalMiddlewareTwo);
  await app.listen(3000);
}
bootstrap();
