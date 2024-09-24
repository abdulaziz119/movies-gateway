import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { FrontendModule } from './frontend/frontend.module';
import { BotModule } from './bot/bot.module';

@Module({
  imports: [AuthModule, DashboardModule, FrontendModule, BotModule],
})
export class ModulesModule {}
