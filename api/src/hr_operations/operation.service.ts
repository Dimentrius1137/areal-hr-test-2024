import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { OperationDto } from './operation.dto';
import { UpdateOperationDto } from './updateOperation.dto'

@Injectable()
export class OperationService {
    constructor(private readonly dbService: DbService) {}

    async getAll(){
        const operations = this.dbService.query(
            `SELECT * FROM hr_operation WHERE is_deleted = false`,
        );
        return operations;
    }

    async getOne(id: number) {
        const department = this.dbService.query(
            `SELECT * FROM department WHERE id = ${id} AND is_deleted = false`,
        );
        return department;
    }
    async getArrangedEmp() {
        const department = this.dbService.query(
            `SELECT employee.id, employee.name, hr_operation.salary, hr_operation.operation_type FROM employee INNER JOIN hr_operation ON employee.id = hr_operation.employee_id`,
        );
        return department;
    }

    async create(operationDTO: OperationDto) {
        const newOperation = this.dbService.query(
            `INSERT INTO hr_operation (operation_type, is_fired, salary, employee_id, department_id, position_id) 
            VALUES (
                '${operationDTO.operation_type}',
                '${operationDTO.is_fired}', 
                '${operationDTO.salary}', 
                '${operationDTO.employee_id}',
                '${operationDTO.department_id}',
                 '${operationDTO.position_id}'
            )`,
        );
        return newOperation;
    }

    async update(id: number, operationDTO: UpdateOperationDto) {
        const updatedOperation = this.dbService.query(
            `UPDATE department SET 
                operation_type = '${operationDTO.operation_type}', 
                is_fired = '${operationDTO.is_fired}', 
                salary = ${operationDTO.salary}, 
                employee_id = ${operationDTO.employee_id}, 
                department_id = ${operationDTO.department_id}, 
                position_id = '${operationDTO.position_id}' 
            WHERE id = ${id} AND is_deleted = false`,
        );
        return updatedOperation;
    }

    async delete(id: number) {
        const deletingOperation = this.dbService.query(
            `UPDATE hr_operation SET is_deleted = true WHERE id = ${id}`,
        );
        return deletingOperation;
    }
    // async delete(id: number) {
    //     const deletingOperation = this.dbService.query(
    //         `DELETE FROM hr_operation WHERE id = ${id}`,
    //     );
    //     return deletingOperation;
    // }
}
