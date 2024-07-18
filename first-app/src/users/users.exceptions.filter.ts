

import { ExceptionFilter, Catch, ArgumentsHost, HttpException, HttpStatus } from '@nestjs/common';
import { Request, Response } from 'express';


@Catch(HttpException)
export class CustomExceptionFilter implements ExceptionFilter {
  catch(exception:HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();
    const status = exception.getStatus();
    const message = exception.message;

    response
      .status(status)
      .json({
        statusCode: status,
        message: message,
        timestamp: new Date().toISOString(),
        path: request.url, 
        host: request.get('host'), 
      });
  }
}
