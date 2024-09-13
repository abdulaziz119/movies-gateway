import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FrontendModule } from './frontend/frontend.module';

@Module({
  imports: [AuthModule, DashboardModule],
})
export class ModulesModule {}