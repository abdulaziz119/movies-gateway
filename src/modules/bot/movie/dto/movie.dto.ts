import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsOptional } from 'class-validator';
import { PaginateDto } from '../../../../utils/dto/paginate.dto';

export class BotMovieFindOneDto {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 1 })
  code: number;
  @ApiProperty({ example: 'test,ru' })
  name: string;
  @ApiProperty({ example: 'test,ru' })
  url: string;
  @ApiProperty({ example: 'test' })
  quality: string;
  @ApiProperty({ example: 'test' })
  duration: string;
  @ApiProperty({ example: 'test' })
  state: string;
  @ApiProperty({ example: '2024' })
  year: string;
  @ApiProperty({ example: 'test' })
  genre: string;
  @ApiProperty({ example: 1 })
  create_admin_id: number;
  @ApiProperty({ example: 'serie' })
  movie_type: string;
  @ApiProperty({ example: '2023-01-01 00:00:00' })
  created_at: string;
  @ApiProperty({ example: '2023-01-01 00:00:00' })
  updated_at: string;
  @ApiProperty({ example: 'null' })
  deleted_at: string;
}

export class BotMovieFindAllListDto {
  @ApiProperty({ type: PaginateDto })
  pagination: PaginateDto;
  @ApiProperty({ type: BotMovieFindOneDto, isArray: true })
  list: BotMovieFindOneDto;
}

export class BotMovieFindOneResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: BotMovieFindOneDto })
  data: BotMovieFindOneDto;
}

export class BotMovieFindAllResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: BotMovieFindAllListDto })
  data: BotMovieFindAllListDto;
}

export class BotMovieGenreGetAllResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ example: ['test'] })
  data: string[];
}

export class BotMovieGetFilterBodyDto {
  @ApiProperty({ example: 1 })
  @IsDefined()
  page: number;
  @ApiProperty({ example: 10, examples: [10, 20, 30, 40, 50] })
  @IsDefined()
  limit: number;
  @ApiProperty({ example: '2008' })
  @IsOptional()
  year: string;
  @ApiProperty({ example: 'test' })
  @IsOptional()
  genre: string;
  @ApiProperty({ example: 'test' })
  @IsOptional()
  name: string;
}
