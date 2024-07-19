import { IsEmail, IsInt, IsString, MinLength } from "class-validator";

export class DemoDto {

    @IsString()
    @MinLength(3)
    name: string;
  
    @IsInt()
    age: number;
  
    @IsEmail()
    email: string;

}
