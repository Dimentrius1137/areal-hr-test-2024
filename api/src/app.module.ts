import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { OrganizationController } from './organization/organization.controller';
import { DbModule } from './db/db.module';
import { DepartmentController } from './department/department.controller';
import { PositionController } from './position/position.controller';
import 'dotenv/config';
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
    providers: [AppService],
})
export class AppModule {}
