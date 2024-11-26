import { IsString } from 'class-validator';
export class PositionDto {
    @IsString()
    title: string;
}
