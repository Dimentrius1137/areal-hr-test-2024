import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { DepartmentService } from './department.service'
import { DepartmentDto } from './department.dto';
import { UpdateDepartmentDto } from './updateDepartment.dto'
@Controller('/organization/:org_id/department')
export class DepartmentController {
    constructor(private department: DepartmentService) {}
    @Get()
    getDepartments(@Param('org_id') org_id: number) {
        return this.department.getAll(org_id);
    }

    @Get(':id')
    async getDepartmentById(@Param() params) {
        return this.department.getOne(params.org_id, params.id);
    }

    @Post()
    async createDepartment(@Body() departmentDto: DepartmentDto) {
        return this.department.create(departmentDto);
    }

    @Patch(':id')
    async updateDepartment(@Param('id') id: number, @Body() departmentDto: UpdateDepartmentDto) {
        return this.department.update(id, departmentDto)
    }

    @Delete(':id')
    async deleteOrg(@Param('id') id: number) {
        return this.department.delete(id);
    }
}


