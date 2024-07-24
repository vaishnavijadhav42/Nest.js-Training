import { IsEmail, IsInt, IsString, MinLength } from "class-validator";

export class DemoDto {

    @IsString()
    name: string;
  
    @IsInt()
    age: number;
  
    @IsEmail()
    email: string;

}
