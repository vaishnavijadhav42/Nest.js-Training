import { ArgumentMetadata, BadRequestException, PipeTransform } from "@nestjs/common";

export class BookPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    
    if (value == 1) {
        
      return value;
    } else {
      throw new BadRequestException('Validation failed: ID is not 1');
    }
  }
}
