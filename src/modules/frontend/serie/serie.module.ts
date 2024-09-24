import { Module } from '@nestjs/common';
import { ServicesModule } from '../../../services/services.module';
import { FrontendSerieController } from './serie.controller';
import { FrontendSerieService } from './serie.service';

@Module({
  imports: [ServicesModule],
  controllers: [FrontendSerieController],
  providers: [FrontendSerieService],
})
export class FrontendSerieModule {}
