import { Controller, Get, Post, Patch, Delete, Body, Param } from '@nestjs/common';
import { OrganizationService } from './organization.service';
import { OrganizationDto } from './organization.dto';
import { UpdateOrganizationDto } from './updateOrganization.dto';

@Controller('/organization')

export class OrganizationController {
    constructor(private organization: OrganizationService) {}
    @Get()
    async getOrgs() {
        return this.organization.getAll();
    }

    @Get(':id')
    async getOrgById(@Param('id') id: number) {
        return this.organization.getOne(id);
    }

    @Post()
    async createOrg(@Body() organizationDto: OrganizationDto) {
        return this.organization.create(organizationDto);
    }

    @Patch(':id')
    async updateOrg(@Param('id') id: number, @Body() organizationDto: UpdateOrganizationDto) {
        return this.organization.update(id, organizationDto)
    }
    
    @Delete(':id')
    async deleteOrg(@Param('id') id: number) {
        return this.organization.delete(id);
    }
}
