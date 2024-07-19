// user.interceptor.ts
import { Injectable, NestInterceptor, ExecutionContext, CallHandler } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DemoDto } from '../dto/demo.dto'; // Adjust path as per your project structure

@Injectable()
export class UserInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
    const request = context.switchToHttp().getRequest<DemoDto>(); // Use DemoDto here
    
    // Modify request data if needed
    request.name="Sam";
    request.age=32;
    request.email="sam@gmail.com"

    // Handle the request and modify the response
    return next.handle().pipe(
      map(data => {
       
       return {
        success: true,
        message: 'Request data modified successfully',
        requestData: { name: request.name, age: request.age, email: request.email }, // Include specific fields from request
        responseData: data 
      };

      }),
    );
  }
}
