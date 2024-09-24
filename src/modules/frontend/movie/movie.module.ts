import { Module } from '@nestjs/common';
import { ServicesModule } from '../../../services/services.module';
import { FrontendMovieController } from './movie.controller';
import { FrontendMovieService } from './movie.service';

@Module({
  imports: [ServicesModule],
  controllers: [FrontendMovieController],
  providers: [FrontendMovieService],
})
export class FrontendMovieModule {}
