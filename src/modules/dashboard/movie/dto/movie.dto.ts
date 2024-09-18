import { ApiProperty } from '@nestjs/swagger';
import { IsDefined } from 'class-validator';
import { PaginateDto } from '../../../../utils/dto/paginate.dto';
import { NameDto } from '../../../../utils/dto/params.dto';

export class MovieCreateDto {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 1 })
  code: number;
  @ApiProperty({ type: NameDto })
  name: NameDto;
  @ApiProperty({ type: NameDto })
  url: NameDto;
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

export class MovieFindOneDto {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 1 })
  code: number;
  @ApiProperty({ example:'test,ru' })
  name: string;
  @ApiProperty({ example:'test,ru' })
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

export class MovieFindAllListDto {
  @ApiProperty({ type: PaginateDto })
  pagination: PaginateDto;
  @ApiProperty({ type: MovieFindOneDto, isArray: true })
  list: MovieFindOneDto;
}

export class MovieCreateResDto {
  @ApiProperty({ example: 201 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: MovieCreateDto })
  data: MovieCreateDto;
}

export class MovieFindOneResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: MovieFindOneDto })
  data: MovieFindOneDto;
}

export class MovieFindAllResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: MovieFindAllListDto })
  data: MovieFindAllListDto;
}

export class MovieGenreGetAllResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ example:['test'] })
  data: string[];
}

export class PermissionsBodyDto {
  @ApiProperty({ example: true })
  @IsDefined()
  create: boolean;
  @ApiProperty({ example: true })
  @IsDefined()
  getOne: boolean;
  @ApiProperty({ example: true })
  @IsDefined()
  getAll: boolean;
  @ApiProperty({ example: true })
  @IsDefined()
  update: boolean;
  @ApiProperty({ example: true })
  @IsDefined()
  delete: boolean;
}


export class MovieCreateBodyDto {
  @ApiProperty({ example: 1 })
  @IsDefined()
  code: number;
  @ApiProperty({ type: NameDto })
  @IsDefined()
  name: NameDto;
  @ApiProperty({ type: NameDto })
  @IsDefined()
  url: NameDto;
  @ApiProperty({ example: 'test' })
  @IsDefined()
  quality: string;
  @ApiProperty({ example: 'test' })
  @IsDefined()
  duration: string;
  @ApiProperty({ example: 'test' })
  @IsDefined()
  state: string;
  @ApiProperty({ example: '2024' })
  @IsDefined()
  year: string;
  @ApiProperty({ example: 'test' })
  @IsDefined()
  genre: string;
  @ApiProperty({ example: 1 })
  @IsDefined()
  create_admin_id: number;
  @ApiProperty({ example: 'serie' })
  @IsDefined()
  movie_type: string;
}

export class MovieFindQueryBodyDto {
  @ApiProperty({ example: 1 })
  @IsDefined()
  page: number;
  @ApiProperty({ example: 10, examples: [10, 20, 30, 40, 50] })
  @IsDefined()
  limit: number;
  @ApiProperty({ example: 'test' })
  @IsDefined()
  query: string;
}
