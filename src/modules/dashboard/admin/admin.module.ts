import { Module } from '@nestjs/common';
import { ServicesModule } from '../../../services/services.module';
import { AdminService } from './admin.service';
import { AdminController } from './admin.controller';

@Module({
  imports: [ServicesModule],
  controllers: [AdminController],
  providers: [AdminService],
})
export class AdminModule {}
