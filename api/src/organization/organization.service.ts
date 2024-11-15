import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { OrganizationDto } from './organization.dto';

@Injectable()
export class OrganizationService {
    constructor(private readonly dbService: DbService) {}
    async getAll() {
        const organizations = this.dbService.query(
            `SELECT * FROM organization`,
        );
        return organizations;
    }

    async getOne(id: number) {
        const organization = this.dbService.query(
            `SELECT * FROM organization WHERE id = ${id}`,
        );
        return organization;
    }

    async create(organizationDto: OrganizationDto) {
        const newOrganization = this.dbService.query(
            `INSERT INTO organization (title, comment) VALUES ('${organizationDto.title}', '${organizationDto.comment}')`,
        );
        return newOrganization;
    }

    async update(id: number, organizationDto: OrganizationDto) {
        const updatedOrganization = this.dbService.query(
            `UPDATE organization SET title = '${organizationDto.title}', comment = '${organizationDto.comment}' WHERE id = ${id}`,
        );
        return updatedOrganization;
    }

    async delete(id: number) {
        const deletingOrganization = this.dbService.query(
            `DELETE FROM organization WHERE id = ${id}`,
        );
        return deletingOrganization;
    }
}
