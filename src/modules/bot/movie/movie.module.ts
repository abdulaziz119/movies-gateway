import { Module } from '@nestjs/common';
import { ServicesModule } from '../../../services/services.module';
import { BotMovieController } from './movie.controller';
import { BotMovieService } from './movie.service';

@Module({
  imports: [ServicesModule],
  controllers: [BotMovieController],
  providers: [BotMovieService],
})
export class BotMovieModule {}
