import { Module } from '@nestjs/common';
import { ServicesModule } from '../../../services/services.module';
import { AdvertisingController } from './advertising.controller';
import { AdvertisingService } from './advertising.service';

@Module({
  imports: [ServicesModule],
  controllers: [AdvertisingController],
  providers: [AdvertisingService],
})
export class AdvertisingModule {}
