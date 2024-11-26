import { IsString, IsOptional } from 'class-validator';
export class UpdatePositionDto {
    @IsString()
    @IsOptional()
    title: string;
}