import { IsString, IsNumber, Length, MinLength, IsOptional } from 'class-validator';

export class EmployeeDto {

    @IsString()
    name: string;

    @IsString()
    surname: string;

    @IsString()
    patronymic: string;

    @IsString()
    date_of_bitrh: string;

    @Length(4, 4)
    @IsString()
    passport_series: number;

    @Length(6, 6)
    @IsString()
    passport_number: number;

    @IsString()
    date_of_issue: string;

    @Length(7)
    @IsString()
    passport_authority_code: string;

    @IsString()
    passport_issued_by: string;

    @IsString()
    region: string;

    @IsString()
    city: string;

    @IsString()
    house: string;

    @IsOptional()
    @IsString()
    building: string;

    @IsOptional()
    @IsString()
    apartment: string;

    @IsNumber()
    position_id: number;

    @IsNumber()
    department_id: number;

}
