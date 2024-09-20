import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { RoleModule } from './role/role.module';
import { MovieModule } from './movie/movie.module';
import { SerieModule } from './serie/serie.module';

@Module({
  imports: [AdminModule, RoleModule, MovieModule,SerieModule],
})
export class DashboardModule {}
