import { Controller, Get } from '@nestjs/common';
import { CarsharingBatchService } from './carsharing-batch.service';

@Controller()
export class CarsharingBatchController {
  constructor(private readonly carsharingBatchService: CarsharingBatchService) {}

  @Get()
  getHello(): string {
    return this.carsharingBatchService.getHello();
  }
}
