import { IsNotEmpty } from "class-validator";

export class CreateTimezoneDto {
    @IsNotEmpty()
    name:string;
}
