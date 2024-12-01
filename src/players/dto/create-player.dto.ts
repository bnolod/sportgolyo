import { IsDateString, IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreatePlayerDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string;

    @IsNumber()
    @IsNotEmpty()
    readonly goalCount: number;

    @IsDateString()
    @IsNotEmpty()
    readonly birthDate: Date;

    @IsNumber()
    @IsNotEmpty()
    readonly teamId: number;
}
