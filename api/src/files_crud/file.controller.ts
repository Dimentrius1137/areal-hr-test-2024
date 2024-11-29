import { Controller, Get, Post, Patch, Delete, Body, Param, Res } from '@nestjs/common';
import { FileService } from './file.service'
import { DbService } from 'src/db/db.service';
import { FileDataDto } from './fileData.dto';
import { UpdatedFile } from './updateFile.dto';

//Todo файлы должны быть неотрывны от пользователя
@Controller('/organization/:org_id/department/:dep_id/employee/:emp_id/files')
export class FilesController {
    constructor(
        private readonly dbService: DbService,
        private readonly fileService: FileService
    ) {}
    
    @Get()
    getAllFiles(@Param('emp_id') emp_id: number) {
        return this.fileService.getAll(emp_id);
    }
    
    @Get(':id')
    async getFile(@Param() params, @Res() res){
        return this.fileService.getOne(params, res);
    }

    @Post()
    async createFile(@Param('emp_id') emp_id, @Body() fileData: FileDataDto, @Res() res) {
        return this.fileService.create(emp_id, fileData, res);
    }

    @Patch(':id')
    async updateFile(@Param('id') id: number, @Body() fileData: UpdatedFile, @Res() res) {
        return this.fileService.update(id, fileData, res);
    }

    @Delete(':id')
    async deleteFile(@Param('id') id: number, @Res() res) {
       return this.fileService.delete(id, res);
    }

}


