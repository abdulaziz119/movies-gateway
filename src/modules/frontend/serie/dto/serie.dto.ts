import { ApiProperty } from '@nestjs/swagger';
import { IsDefined } from 'class-validator';
import { PaginateDto } from '../../../../utils/dto/paginate.dto';

export class FrontendSerieFindOneDto {
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

export class FrontendSerieFindAllListDto {
  @ApiProperty({ type: PaginateDto })
  pagination: PaginateDto;
  @ApiProperty({ type: FrontendSerieFindOneDto, isArray: true })
  list: FrontendSerieFindOneDto;
}

export class FrontendSerieMovieIdResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: FrontendSerieFindAllListDto })
  data: FrontendSerieFindAllListDto;
}

export class FrontendSerieFindOneResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: FrontendSerieFindOneDto })
  data: FrontendSerieFindOneDto;
}

export class FrontendSerieFindAllResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: FrontendSerieFindAllListDto })
  data: FrontendSerieFindAllListDto;
}

export class FrontendSerieMovieIdBodyDto {
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
