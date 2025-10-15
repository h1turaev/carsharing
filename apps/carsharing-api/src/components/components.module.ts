import { Module } from '@nestjs/common';
import { MemberModule } from './member/member.module';
import { VehicleModule } from './vehicle/vehicle.module';

@Module({
  imports: [MemberModule, VehicleModule]
})
export class ComponentsModule {}
