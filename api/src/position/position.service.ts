import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { PositionDto } from './position.dto';

@Injectable()
export class PositionService {
    constructor(private readonly dbService: DbService) {}

    async getAll(){
        const positions = this.dbService.query(`SELECT * FROM position`);
        return positions;
    }

    async getOne(id: number){
        const position = this.dbService.query(`SELECT * FROM position WHERE id = ${id}`);
        return position;
    }

    async create(positionDto: PositionDto){
        const newPosition = this.dbService.query(`INSERT INTO organization (title) VALUES ('${positionDto.title}')`) 
        return newPosition
    }

    async update(id: number, positionDto: PositionDto){
        const updatedPosition = this.dbService.query(`UPDATE position SET title = '${positionDto.title}' WHERE id = ${id}`); 
        return updatedPosition;
    }

    async delete(id: number){
        const deletingPosition = this.dbService.query(`DELETE FROM position WHERE id = ${id}); WHERE id = ${id}`); 
        return deletingPosition;
    }
}
