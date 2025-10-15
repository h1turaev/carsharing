import { Module } from '@nestjs/common';
import { CarsharingBatchController } from './carsharing-batch.controller';
import { CarsharingBatchService } from './carsharing-batch.service';

@Module({
  imports: [],
  controllers: [CarsharingBatchController],
  providers: [CarsharingBatchService],
})
export class CarsharingBatchModule {}
