import { Injectable } from '@nestjs/common';
import { DbService } from 'src/db/db.service';
import { FileDataDto } from './fileData.dto';
import * as fs from 'fs/promises';
import * as path from 'path';

const filePath = path.join(process.cwd(), '../files');

@Injectable()
export class FileService {
    constructor(private readonly dbService: DbService) {}

    async getAll(emp_id: number){
        try{
            const files = this.dbService.query(`SELECT * FROM files WHERE employee_id = ${emp_id} AND is_deleted = false`);
            return files;
        }
        catch(e){
            console.log(e);
        }
    }

    async getOne(params, res) {
        const file = await this.dbService.query(`SELECT * FROM files WHERE ${params.emp_id} = employee_id AND id = ${params.id} AND is_deleted = false`);
        try {
            const fileInfo = await fs.readFile(filePath + `/${file[0].filename}.json`, 'utf8');
            const fileObject = JSON.parse(fileInfo);
            file[0].fileData = fileObject;
            res.send(file);
        } 
        catch (e) {
            console.log(e);
            res.status(400).send(`Ошибка, файл не найден ${file}`)
        }
    }

    async create(emp_id: number, fileData, res) {

        const fileId = await this.dbService.query(`SELECT COUNT(*) FROM files WHERE employee_id = ${emp_id}`);

        const fileName = `${emp_id}_file_${parseInt(fileId[0].count) + 1}`;

        const newFile = await this.dbService.query(`INSERT INTO files (filename, employee_id) VALUES ('${fileName}', ${emp_id})`);

        try{
            fs.writeFile(filePath + `/${fileName}.json`, JSON.stringify(fileData));
            res.send("Файл создан")
            return newFile;
        }
        catch(e){
            console.log(e);
            res.status(400).send(`Не удалось создать файл: ${fileName}`);
        }
    }

    async update(id: number, fileData, res) {

        const updatingFileName = await this.dbService.query(`SELECT filename FROM files WHERE id = ${id} AND is_deleted = false`);

        try{
            const updatingFile = await fs.readFile(filePath + `/${updatingFileName[0].filename}.json`, 'utf-8');
            const fileObject = JSON.parse(updatingFile);
            Object.keys(fileData).forEach(key => {
                if (fileData[key] !== undefined) 
                {
                    fileObject[key] = fileData[key];
                }
            });
            await fs.writeFile(filePath + `/${updatingFileName[0].filename}.json`, JSON.stringify(fileObject));
            res.send(`файл ${updatingFileName[0].filename} успешно изменён`);
            return updatingFile;
        }
        catch(e){
            console.log(e);
            res.status(400).send(`Файл ${updatingFileName} не найден`);
        }
    }

    async delete(id: number, res){
        const deletingFileName = await this.dbService.query(`SELECT filename FROM files WHERE id = ${id}`);
        try{
            const deletingFile = await this.dbService.query(`UPDATE files SET is_deleted = true WHERE id = ${id}`);
            res.send(`Файл ${deletingFileName[0].filename} удалён`);
            return deletingFile;
        }
        catch(e){
            console.log(e);
            res.status(400).send(`Файл ${deletingFileName} не найден`);
        }
    }
    // async delete(id: number, res) {
    //     const deletedFile = await this.dbService.query(`DELETE FROM files WHERE id = ${id}`);
    //     res.send("файл удалён");
    //     return deletedFile;

    // }
}
