import { Module } from '@nestjs/common';
import { ServicesModule } from '../../../services/services.module';
import { StatisticService } from './statistic.service';
import { StatisticController } from './statistic.controller';

@Module({
  imports: [ServicesModule],
  controllers: [StatisticController],
  providers: [StatisticService],
})
export class StatisticModule {}
