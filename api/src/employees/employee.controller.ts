import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { EmployeeService } from './employee.service'
import { EmployeeDto } from './employee.dto';
import { UpdateEmployeeDto } from './updateEmployee.dto'

@Controller('/organization/:org_id/department/:dep_id/employee')
export class EmployeeController {
    constructor(private employee: EmployeeService) {}
    @Get()
    getDepartments(@Param('dep_id') dep_id: number) {
        return this.employee.getAllInDepartment(dep_id);
    }

    @Get(':id')
    async getDepartmentById(@Param() params) {
        return this.employee.getOne(params.dep_id, params.id);
    }

    @Post()
    async createDepartment(@Body() employeeDto: EmployeeDto) {
        return this.employee.create(employeeDto);
    }

    @Patch(':id')
    async updateDepartment(@Param('id') id: number, @Body() employeeDto: UpdateEmployeeDto) {
        return this.employee.update(id, employeeDto)
    }

    @Delete(':id')
    async deleteOrg(@Param('id') id: number) {
        return this.employee.delete(id);
    }
}


