import { Module } from '@nestjs/common';
import { AdminModule } from './admin/admin.module';
import { RoleModule } from './role/role.module';

@Module({
  imports: [AdminModule, RoleModule],
})
export class DashboardModule {}
