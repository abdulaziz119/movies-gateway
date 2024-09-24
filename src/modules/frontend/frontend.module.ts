import { Module } from '@nestjs/common';
import { FrontendMovieModule } from './movie/movie.module';
import { FrontendSerieModule } from './serie/serie.module';

@Module({
  imports: [FrontendMovieModule, FrontendSerieModule],
})
export class FrontendModule {}
