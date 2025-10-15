import { Module } from '@nestjs/common';
import { CarsharingBatchController } from './carsharing-batch.controller';
import { CarsharingBatchService } from './carsharing-batch.service';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [CarsharingBatchController],
  providers: [CarsharingBatchService],
})
export class CarsharingBatchModule {}
