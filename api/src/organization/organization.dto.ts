import { Length, MinLength, IsString } from 'class-validator';

export class OrganizationDto {
    @IsString()
    @Length(5, 30, {
        message: 'Длина названия компании должно быть не меньше 5 симолов и не больше 30',
    })
    title: string;

    @IsString()
    @MinLength(10, {
        message: 'Комментрарий должен быть не короче 10 символов',
    })
    comment: string;
}