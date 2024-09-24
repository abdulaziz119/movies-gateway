import { Module } from '@nestjs/common';
import { ServicesModule } from '../../../services/services.module';
import { UploadsDashboardController } from './upload.controller';
import { UploadsDashboardService } from './upload.service';

@Module({
  imports: [ServicesModule],
  controllers: [UploadsDashboardController],
  providers: [UploadsDashboardService],
})
export class UploadDashboardModule {}
