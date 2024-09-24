import { Module } from '@nestjs/common';
import { ServicesModule } from '../../../services/services.module';
import { FrontendAdvertisingController } from './advertising.controller';
import { FrontendAdvertisingService } from './advertising.service';

@Module({
  imports: [ServicesModule],
  controllers: [FrontendAdvertisingController],
  providers: [FrontendAdvertisingService],
})
export class FrontendAdvertisingModule {}
