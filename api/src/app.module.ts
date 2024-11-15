import  { Module } from '@nestjs/common';
import 'dotenv/config';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { OrganizationController } from './organization/organization.controller';
import { DepartmentController } from './department/department.controller';
import { PositionController } from './position/position.controller';

import { OrganizationService } from './organization/organization.service';
import { DepartmentService } from './department/department.service';
import { PositionService } from './position/position.service';
@Module({
    imports: [
        DbModule.register({
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            user: process.env.DB_USERNAME,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_NAME,
        }),
    ],
    controllers: [
        AppController,
        OrganizationController,
        DepartmentController,
        PositionController,
    ],
    providers: [
        AppService,
        OrganizationService, 
        DepartmentService, 
        PositionService
    ],
})
export class AppModule {}
