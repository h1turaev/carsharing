import { NestFactory } from '@nestjs/core';
import { CarsharingBatchModule } from './carsharing-batch.module';

async function bootstrap() {
  const app = await NestFactory.create(CarsharingBatchModule);
  await app.listen(process.env.PORT_BATCH ?? 3000);
}
bootstrap();
