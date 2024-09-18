import { Module } from '@nestjs/common';
import { ServicesModule } from '../../../services/services.module';
import { MovieController } from './movie.controller';
import { MovieService } from './movie.service';

@Module({
  imports: [ServicesModule],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
