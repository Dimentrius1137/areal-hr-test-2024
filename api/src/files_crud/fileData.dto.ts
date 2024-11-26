import { IsString, IsNumber } from 'class-validator';
export class FileDataDto {
    @IsNumber()
    passport_series: number;

    @IsNumber()
    passport_number: number;

    @IsString()
    date_of_issue: string;

    @IsString()
    passport_authority_code: string;

    @IsString()
    passport_issued_by: string;

}
