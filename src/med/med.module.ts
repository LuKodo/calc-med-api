import { Module } from '@nestjs/common';
import { MedService } from './med.service';
import { MedController } from './med.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Med } from './med.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Med]),
  ],
  controllers: [MedController],
  providers: [MedService],
})
export class MedModule {}
