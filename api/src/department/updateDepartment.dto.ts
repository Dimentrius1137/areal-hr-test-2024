import { IsString, IsNumber, Length, MinLength, IsOptional } from 'class-validator';
export class UpdateDepartmentDto {
    @IsOptional()
    @IsString()
    @Length(5, 30, {
        message: 'Длина названия отдела должно быть не меньше 5 симолов и не больше 30',
    })
    title: string;

    @IsOptional()
    @IsString()
    @MinLength(10, {
        message: 'Слишком короткий комментарий',
    })
    comment: string;

    @IsOptional()
    @IsNumber()
    parent: number;

    @IsOptional()
    @IsNumber()
    organization_id: number;
}
