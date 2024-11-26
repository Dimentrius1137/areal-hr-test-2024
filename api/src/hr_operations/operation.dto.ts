import { IsString, IsNumber, IsBoolean, IsOptional } from 'class-validator';
export class OperationDto {

    @IsString()
    operation_type: string;
    
    @IsOptional()
    @IsBoolean()
    is_fired: boolean;

    @IsNumber()
    salary: number;

    @IsNumber()
    employee_id: number;

    @IsNumber()
    department_id: number;

    @IsNumber()
    position_id: number;
}