import { Module } from '@nestjs/common';
import { ServicesModule } from '../../../services/services.module';
import { RoleController } from './role.controller';
import { RoleService } from './role.service';

@Module({
  imports: [ServicesModule],
  controllers: [RoleController],
  providers: [RoleService],
})
export class RoleModule {}
