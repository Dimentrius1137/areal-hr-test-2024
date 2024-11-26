import {IsOptional, IsString, IsNumber } from 'class-validator';
export class UpdatedFile {
    @IsOptional()
    @IsNumber()
    passport_series: number;

    @IsOptional()
    @IsNumber()
    passport_number: number;

    @IsOptional()
    @IsString()
    date_of_issue: string;

    @IsOptional()
    @IsString()
    passport_authority_code: string;

    @IsOptional()
    @IsString()
    passport_issued_by: string;

}
