import { IsInt, IsNotEmpty, IsString, MinLength } from "class-validator";

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @MinLength(8)
    password: any;

    @IsNotEmpty()
    @IsInt()
    country:number;
}
