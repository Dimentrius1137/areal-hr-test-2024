import { Controller, Get, Post, Patch, Delete, Req, Body } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { OrganizationDto } from './organization.dto';
import { Request } from 'express';

@Controller('api/organization')

export class OrganizationController {
    constructor(private readonly dbService: DbService) {}
    @Get()
    async getOrgs() {
        const organizations = this.dbService.query(
            `SELECT * FROM organization`,
        );
        return organizations;
    }

    @Get(':id')
    async getOrgById(@Req() req: Request) {
        const organization = this.dbService.query(
            `SELECT * FROM organization WHERE id = ${req.params.id}`,
        );
        return organization;
    }

    @Post()
    async createOrg(@Body() organizationDto: OrganizationDto) {
        const newOrganization = this.dbService.query(
            `INSERT INTO organization (title, comment) VALUES ('${organizationDto.title}', '${organizationDto.comment}')`,
        );
        return newOrganization;
    }

    @Patch(':id')
    async updateOrg(@Req() req: Request,@Body() organizationDto: OrganizationDto) {
        const updatedOrganization = this.dbService.query(
            `UPDATE organization SET title = '${organizationDto.title}', comment = '${organizationDto.comment}' WHERE id = ${req.params.id}`,
        );
        return updatedOrganization;
    }
    
    @Delete(':id')
    async deleteOrg(@Req() req: Request) {
        const deletingOrganization = this.dbService.query(
            `DELETE FROM organization WHERE id = ${req.params.id}`,
        );
        return deletingOrganization;
    }
}
