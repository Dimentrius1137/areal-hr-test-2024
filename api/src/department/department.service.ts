import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { DepartmentDto } from './department.dto';

@Injectable()
export class DepartmentService {
    constructor(private readonly dbService: DbService) {}

    async getAll(org_id: number){
        const departments = this.dbService.query(
            `SELECT * FROM department WHERE organization_id = ${org_id}`,
        );
        return departments;
    }

    async getOne(org_id: number, id: number) {
        const department = this.dbService.query(
            `SELECT * FROM department WHERE organization_id = ${org_id} AND id = ${id}`,
        );
        return department;
    }


    async create(departmentDto: DepartmentDto) {
        const newDepartment = this.dbService.query(
            `INSERT INTO department (title, comment, parent, organization_id) 
            VALUES (
                '${departmentDto.title}',
                '${departmentDto.comment}', 
                '${departmentDto.parent}', 
                '${departmentDto.organization_id}'
            )`,
        );
        return newDepartment;
    }

    async update(id: number, departmentDto: DepartmentDto) {
        const updatedDepartment = this.dbService.query(
            `UPDATE department SET 
                title = '${departmentDto.title}', 
                comment = '${departmentDto.comment}', 
                parent = ${departmentDto.organization_id}, 
                organization_id = '${departmentDto.organization_id}' 
            WHERE id = ${id}`,
        );
        return updatedDepartment;
    }

    async delete(id: number) {
        const deletingDepartment = this.dbService.query(
            `DELETE FROM department WHERE id = ${id}`,
        );
        return deletingDepartment;
    }
}
