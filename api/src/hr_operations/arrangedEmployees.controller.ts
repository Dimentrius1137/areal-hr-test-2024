import { Controller, Get } from '@nestjs/common';
import { OperationService } from './operation.service';

@Controller('/hr_op')
export class ArrangedEmployeeController {
    constructor(private operationService: OperationService) {}
    @Get()
    getArrangedEmployees(){
        return this.operationService.getArrangedEmp();
    }
}


