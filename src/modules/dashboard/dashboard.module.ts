import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { RoleModule } from './role/role.module';
import { MovieModule } from './movie/movie.module';
import { SerieModule } from './serie/serie.module';
import { StatisticModule } from './statistic/statistic.module';
import { AdvertisingModule } from './advertising/advertising.module';
import { UploadDashboardModule } from './upload/upload.module';

@Module({
  imports: [
    AdminModule,
    RoleModule,
    MovieModule,
    SerieModule,
    StatisticModule,
    AdvertisingModule,
    UploadDashboardModule,
  ],
})
export class DashboardModule {}
