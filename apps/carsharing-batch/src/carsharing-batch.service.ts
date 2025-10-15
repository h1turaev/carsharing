import { Injectable } from '@nestjs/common';

@Injectable()
export class CarsharingBatchService {
  getHello(): string {
    return 'Carsharing BATCH server!';
  }
}
