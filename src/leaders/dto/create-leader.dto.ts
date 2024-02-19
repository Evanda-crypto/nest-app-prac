import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateLeaderDto {
    @IsNotEmpty()
    @IsString()
    email:string;

    @IsNotEmpty()
    @IsString()
    name:string;

    @IsNotEmpty()
    @IsInt()
    country_id:number;
}
