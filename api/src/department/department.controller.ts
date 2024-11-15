import { Controller, Get, Post, Patch, Delete, Req, Body } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { DepartmentDto } from './department.dto';
import { Request } from 'express';

@Controller('api/organization/:org_id/department')
export class DepartmentController {
    constructor(private readonly dbService: DbService) {}
    @Get()
    async getDepartments(@Req() req) {
        const departments = this.dbService.query(
            `SELECT * FROM department WHERE organization_id = ${req.params.org_id}`,
        );
        return departments;
    }

    @Get(':id')
    async getDepartmentById(@Req() req: Request) {
        const department = this.dbService.query(
            `SELECT * FROM department WHERE id = ${req.params.id}`,
        );
        return department;
    }

    @Post()
    async createDepartment(@Body() departmentDto: DepartmentDto) {
        const newDepartment = this.dbService.query(
            `INSERT INTO department (title, comment, parent, organization_id) VALUES ('${departmentDto.title}', '${departmentDto.comment}', '${departmentDto.parent}', '${departmentDto.organization_id}')`,
        );
        return newDepartment;
    }

    @Patch(':id')
    async updateDepartment(@Req() req: Request, @Body() departmentDto: DepartmentDto) {
        const updatedDepartment = this.dbService.query(
            `UPDATE organization SET title = '${departmentDto.title}', comment = '${departmentDto.comment}', parent = ${departmentDto.organization_id}, organization_id = '${departmentDto.organization_id}' WHERE id = ${req.params.id}`,
        );
        return updatedDepartment;
    }
    
    @Delete(':id')
    async deleteOrg(@Req() req: Request) {
        const deletingDepartment = this.dbService.query(
            `DELETE FROM department WHERE id = ${req.params.id}`,
        );
        return deletingDepartment;
    }
}
