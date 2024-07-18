import { IsEmail, IsInt, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    @IsString()
    @MinLength(3)
    readonly name: string;
  
    @IsInt()
    readonly age: number;
  
    @IsEmail()
    readonly email: string;

}
