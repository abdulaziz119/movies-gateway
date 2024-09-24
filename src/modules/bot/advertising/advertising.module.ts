import { Module } from '@nestjs/common';
import { ServicesModule } from '../../../services/services.module';
import { BotAdvertisingController } from './advertising.controller';
import { BotAdvertisingService } from './advertising.service';

@Module({
  imports: [ServicesModule],
  controllers: [BotAdvertisingController],
  providers: [BotAdvertisingService],
})
export class BotAdvertisingModule {}
