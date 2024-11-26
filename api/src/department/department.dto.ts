import { IsString, IsNumber, Length, MinLength } from 'class-validator';
export class DepartmentDto {
    @IsString()
    @Length(5, 30, {
        message: 'Длина названия отдела должно быть не меньше 5 симолов и не больше 30',
    })
    title: string;

    @IsString()
    @MinLength(10, {
        message: 'Слишком короткий комментарий',
    })
    comment: string;

    @IsNumber()
    parent: number;

    @IsNumber()
    organization_id: number;
}
