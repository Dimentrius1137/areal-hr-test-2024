import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { PositionDto } from './position.dto';
import { PositionService } from './position.service';
import { UpdatePositionDto } from './updatePosition.dto'
@Controller('/position')
export class PositionController {
    constructor(private position: PositionService) {}
    @Get()
    async getPositions(){
        this.position.getAll();
    }

    @Get(':id')
    async getPositionById(@Param('id') id:number){
        this.position.getOne(id)
    }

    @Post()
    async createPosition(@Body() positionDto: PositionDto){
        this.position.create(positionDto)
    }

    @Patch(':id')
    async updatePosition(@Param('id') id:number, @Body() positionDto: UpdatePositionDto){
        this.position.update(id, positionDto)
    }
    
    @Delete(':id')
    async deletePosition(@Param('id') id:number){
        this.position.delete(id);
    }
}
