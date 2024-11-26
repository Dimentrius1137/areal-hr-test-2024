import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';
export class UpdateOperationDto {

    @IsOptional()
    @IsString()
    operation_type: string;
    
    @IsOptional()
    @IsBoolean()
    is_fired: boolean;

    @IsOptional()
    @IsNumber()
    salary: number;

    @IsOptional()
    @IsNumber()
    employee_id: number;

    @IsOptional()
    @IsNumber()
    department_id: number;

    @IsOptional()
    @IsNumber()
    position_id: number;
}