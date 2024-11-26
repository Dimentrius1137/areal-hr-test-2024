import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { PositionDto } from './position.dto';
import { UpdatePositionDto } from './updatePosition.dto'
@Injectable()
export class PositionService {
    constructor(private readonly dbService: DbService) {}

    async getAll(){
        const positions = this.dbService.query(`SELECT * FROM position WHERE is_deleted = false`);
        return positions;
    }

    async getOne(id: number){
        const position = this.dbService.query(`SELECT * FROM position WHERE id = ${id} AND is_deleted = false`);
        return position;
    }

    async create(positionDto: PositionDto){
        const newPosition = this.dbService.query(`INSERT INTO organization (title) VALUES ('${positionDto.title}')`) 
        return newPosition
    }

    async update(id: number, positionDto: UpdatePositionDto){
        const updatedPosition = this.dbService.query(`UPDATE position SET title = '${positionDto.title}' WHERE id = ${id} AND is_deleted = false`); 
        return updatedPosition;
    }
    async delete(id: number){
        const deletingPosition = this.dbService.query(`UPDATE position SET is_deleted = true WHERE id = ${id}`); 
        return deletingPosition;
    }
    // async delete(id: number){
    //     const deletingPosition = this.dbService.query(`DELETE FROM position WHERE id = ${id}`); 
    //     return deletingPosition;
    // }
}
