import { Module } from '@nestjs/common';
import { ServicesModule } from '../../../services/services.module';
import { BotSerieController } from './serie.controller';
import { BotSerieService } from './serie.service';

@Module({
  imports: [ServicesModule],
  controllers: [BotSerieController],
  providers: [BotSerieService],
})
export class BotSerieModule {}
