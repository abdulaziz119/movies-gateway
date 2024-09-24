import { ApiProperty } from '@nestjs/swagger';
import { IsDefined } from 'class-validator';
import { PaginateDto } from '../../../../utils/dto/paginate.dto';

export class BotSerieFindOneDto {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 'test.uz' })
  name: string;
  @ApiProperty({ example: [1] })
  movies: number[];
  @ApiProperty({ example: 'AQSH' })
  state: string;
  @ApiProperty({ example: '2024' })
  year: string;
  @ApiProperty({ example: 1 })
  code: number;
  @ApiProperty({ example: 'test' })
  genre: string;
  @ApiProperty({ example: 1 })
  seen: number;
  @ApiProperty({ example: 1 })
  create_admin_id: number;
  @ApiProperty({ example: '2023-01-01 00:00:00' })
  created_at: string;
  @ApiProperty({ example: '2023-01-01 00:00:00' })
  updated_at: string;
  @ApiProperty({ example: 'null' })
  deleted_at: string;
}

export class BotSerieFindAllListDto {
  @ApiProperty({ type: PaginateDto })
  pagination: PaginateDto;
  @ApiProperty({ type: BotSerieFindOneDto, isArray: true })
  list: BotSerieFindOneDto;
}

export class BotSerieMovieIdResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: BotSerieFindAllListDto })
  data: BotSerieFindAllListDto;
}

export class BotSerieFindOneResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: BotSerieFindOneDto })
  data: BotSerieFindOneDto;
}

export class BotSerieFindAllResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: BotSerieFindAllListDto })
  data: BotSerieFindAllListDto;
}

export class BotSerieMovieIdBodyDto {
  @ApiProperty({ example: 1 })
  @IsDefined()
  page: number;
  @ApiProperty({ example: 10, examples: [10, 20, 30, 40, 50] })
  @IsDefined()
  limit: number;
  @ApiProperty({ example: [1] })
  @IsDefined()
  movies_id: number[];
}
