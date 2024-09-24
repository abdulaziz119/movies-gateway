import { Module } from '@nestjs/common';
import { BotAdvertisingModule } from './advertising/advertising.module';
import { BotMovieModule } from './movie/movie.module';
import { BotSerieModule } from './serie/serie.module';

@Module({
  imports: [BotAdvertisingModule, BotMovieModule, BotSerieModule],
})
export class BotModule {}
