import { Module } from '@nestjs/common';
import { ServicesModule } from '../../../services/services.module';
import { SerieController } from './serie.controller';
import { SerieService } from './serie.service';

@Module({
  imports: [ServicesModule],
  controllers: [SerieController],
  providers: [SerieService],
})
export class SerieModule {}
