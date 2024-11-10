import { Controller, Get, Post, Patch, Delete, Req, Body } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { PositionDto } from './position.dto';
import { Request } from 'express';
@Controller('api/position')
export class PositionController {
    constructor(private readonly dbService: DbService) {}
    @Get()
    async getPositions(){
        const positions = this.dbService.query(`SELECT * FROM position`);
        return positions;
    }

    @Get(':id')
    async getPositionById(@Req() req: Request){
        const position = this.dbService.query(`SELECT * FROM position WHERE id = ${req.params.id}`);
        return position;
    }

    @Post()
    async createPosition(@Body() positionDto: PositionDto){
        const newPosition = this.dbService.query(`INSERT INTO organization (title) VALUES ('${positionDto.title}')`) 
        return newPosition
    }

    @Patch(':id')
    async updatePosition(@Req() req: Request, @Body() positionDto: PositionDto){
        const updatedPosition = this.dbService.query(`UPDATE position SET title = '${positionDto.title}' WHERE id = ${req.params.id}`); 
        return updatedPosition;
    }
    @Delete(':id')
    async deletePosition(@Req() req: Request){
        const deletingPosition = this.dbService.query(`DELETE FROM position WHERE id = ${req.params.id}`); 
        return deletingPosition;
    }
}
