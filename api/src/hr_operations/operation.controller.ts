import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { OperationService } from './operation.service';
import { OperationDto } from './operation.dto';
import { UpdateOperationDto } from './updateOperation.dto'

@Controller('/organization/:org_id/department/:dep_id/employee/:emp_id/hr_op')
export class OperationController {
    constructor(private operationService: OperationService) {}
    @Get()
    getOperations() {
        return this.operationService.getAll();
    }

    @Get(':id')
    getOperationById(@Param('id') id) {
        return this.operationService.getOne(id);
    }

    @Post()
    createOperation(@Body() operationDto: OperationDto) {
        return this.operationService.create(operationDto);
    }

    @Patch(':id')
    updateOperation(@Param('id') id: number, @Body() operationDto: UpdateOperationDto) {
        return this.operationService.update(id, operationDto)
    }

    @Delete(':id')
    deleteOperation(@Param('id') id: number) {
        return this.operationService.delete(id);
    }
}


