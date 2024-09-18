import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { RoleModule } from './role/role.module';
import { MovieModule } from './movie/movie.module';

@Module({
  imports: [AdminModule, RoleModule, MovieModule],
})
export class DashboardModule {}
