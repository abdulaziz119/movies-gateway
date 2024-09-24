import { Module } from '@nestjs/common';
import { FrontendMovieModule } from './movie/movie.module';
import { FrontendSerieModule } from './serie/serie.module';
import { FrontendAdvertisingModule } from './advertising/advertising.module';

@Module({
  imports: [
    FrontendMovieModule,
    FrontendSerieModule,
    FrontendAdvertisingModule,
  ],
})
export class FrontendModule {}
