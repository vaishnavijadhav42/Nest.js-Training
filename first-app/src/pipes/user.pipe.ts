import { ArgumentMetadata, BadRequestException, Injectable, PipeTransform } from "@nestjs/common";

@Injectable()
export class UserPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    console.log('Argument Metadata:', metadata);
    if (isNaN(value)) {
      throw new BadRequestException('Validation failed');
    }
    return value;
  }
}
