import { IsString, IsNumber, Length, MinLength, IsOptional } from 'class-validator';

export class UpdateEmployeeDto {

    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    surname: string;

    @IsString()
    @IsOptional()
    patronymic: string;

    @IsString()
    @IsOptional()
    date_of_bitrh: string;

    @Length(4)
    @IsNumber()
    @IsOptional()
    passport_series: number;

    @Length(6)
    @IsNumber()
    @IsOptional()
    passport_number: number;

    @IsString()
    @IsOptional()
    date_of_issue: string;

    @Length(7)
    @IsString()
    @IsOptional()
    passport_authority_code: string;

    @IsString()
    @IsOptional()
    passport_issued_by: string;

    @IsString()
    @IsOptional()
    region: string;

    @IsString()
    @IsOptional()
    city: string;

    @IsString()
    @IsOptional()
    house: string;

    @IsString()
    @IsOptional()
    building: string;

    @IsString()
    @IsOptional()
    apartment: string;

    @IsNumber()
    @IsOptional()
    position_id: number;

    @IsNumber()
    @IsOptional()
    department_id: number;

}
