import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { EmployeeDto } from './employee.dto';
import { UpdateEmployeeDto } from './updateEmployee.dto'
@Injectable()
export class EmployeeService {
    constructor(private readonly dbService: DbService) {}

    async getAllInDepartment(dep_id: number){
        const employees = await this.dbService.query(
            `SELECT * FROM employee WHERE department_id = ${dep_id} AND is_deleted = false`,
        );
        return employees;
    }

    async getOne(dep_id: number, id: number) {
        const employee = await this.dbService.query(
            `SELECT * FROM employee WHERE department_id = ${dep_id} AND id = ${id} AND is_deleted = false`
        );
        return employee;
    }

    async create(employeeDto: EmployeeDto) {
        const newEmployee = await this.dbService.query(
            `INSERT INTO employee (name, surname, patronymic, date_of_bitrh, passport_series, passport_number, date_of_issue, passport_authority_code, passport_issued_by, region, city, house, building, apartment, position_id, department_id) 
            VALUES ('${employeeDto.name}',
                '${employeeDto.surname}', 
                '${employeeDto.patronymic}', 
                '${employeeDto.date_of_bitrh}',
                '${employeeDto.passport_series}',
                '${employeeDto.passport_number}',
                '${employeeDto.date_of_issue}',
                '${employeeDto.passport_authority_code}',
                '${employeeDto.passport_issued_by}',
                '${employeeDto.region}',
                '${employeeDto.city}',
                '${employeeDto.house}',
                '${employeeDto.building}',
                '${employeeDto.apartment}',
                '${employeeDto.position_id}',
                '${employeeDto.department_id}')`,
        );
        return newEmployee;
    }

    async update(id: number, employeeDto: UpdateEmployeeDto) {
        const updatedEmployee = await this.dbService.query(
            `UPDATE employee SET 
                name = '${employeeDto.name}',
                surname = '${employeeDto.surname}', 
                patronymic = '${employeeDto.patronymic}', 
                date_of_bitrh = '${employeeDto.date_of_bitrh}',
                passport_series = '${employeeDto.passport_series}',
                passport_number = '${employeeDto.passport_number}',
                date_of_issue = '${employeeDto.date_of_issue}',
                passport_authority_code = '${employeeDto.passport_authority_code}',
                passport_issued_by = '${employeeDto.passport_issued_by}',
                region = '${employeeDto.region}',
                city = '${employeeDto.city}',
                house = '${employeeDto.house}',
                building = '${employeeDto.building}',
                apartment = '${employeeDto.apartment}',
                position_id = '${employeeDto.position_id}',
                department_id = '${employeeDto.department_id}'
            WHERE id = ${id} AND is_deleted = false`,
        );
        return updatedEmployee;
    }
    async delete(id: number) {
        const deletingEmployee = await this.dbService.query(
            `Update employee SET is_deleted = true WHERE id = ${id}`,
        );
        return deletingEmployee;
    }
    // async delete(id: number) {
    //     const deletingEmployee = this.dbService.query(
    //         `DELETE FROM employee WHERE id = ${id}`,
    //     );
    //     return deletingEmployee;
    // }
}
