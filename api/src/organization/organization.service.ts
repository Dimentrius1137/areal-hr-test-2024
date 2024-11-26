import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { OrganizationDto } from './organization.dto';
import { UpdateOrganizationDto } from './updateOrganization.dto';
@Injectable()
export class OrganizationService {
    constructor(private readonly dbService: DbService) {}
    async getAll() {
        const organizations = await this.dbService.query(
            `SELECT * FROM organization WHERE is_deleted = false`,
        );
        return organizations;
    }

    async getOne(id: number) {
        const organization = await this.dbService.query(
            `SELECT * FROM organization WHERE id = ${id} AND is_deleted = false`,
        );
        return organization;
    }

    async create(organizationDto: OrganizationDto) {
            const newOrganization = await this.dbService.query(
                `INSERT INTO organization (title, comment) VALUES ('${organizationDto.title}', '${organizationDto.comment}')`,
            );
            return newOrganization;
        
    }

    async update(id: number, organizationDto: UpdateOrganizationDto) {
        const updatedOrganization = await this.dbService.query(
            `UPDATE organization SET title = '${organizationDto.title}', comment = '${organizationDto.comment}' WHERE id = ${id} AND is_deleted = false`,
        );
        return updatedOrganization;
    }

    // async delete(id: number) {
    //     const deletingOrganization = await this.dbService.query(
    //         `DELETE FROM organization WHERE id = ${id}`,
    //     );
    //     return deletingOrganization;
    // }
    
    async delete(id: number) {
        try{
            const deletingFile = await this.dbService.query(`UPDATE organization SET is_deleted = true WHERE id = ${id}`);
            return deletingFile;
        }
        catch(e){
            console.log(`файл не найден: ${e}`);
        }
    }
}
