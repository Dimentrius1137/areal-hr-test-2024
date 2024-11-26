import { Length, MinLength, IsString, IsOptional } from 'class-validator';

export class UpdateOrganizationDto {
    @IsOptional()
    @IsString()
    @Length(5, 30, {
        message: 'Длина названия компании должно быть не меньше 5 симолов и не больше 30',
    })
    title: string;

    @IsOptional()
    @IsString()
    @MinLength(10, {
        message: 'Комментрарий должен быть не короче 10 символов',
    })
    comment: string;
}