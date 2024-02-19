import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateCityDto {
    @IsNotEmpty()
    @IsString()
    name: string;

    @IsNotEmpty()
    @IsInt()
    country_id: number;
}
