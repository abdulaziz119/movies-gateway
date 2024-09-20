import { ApiProperty } from '@nestjs/swagger';
import { IsDefined, IsNotEmpty, IsOptional } from 'class-validator';
import { PaginateDto } from '../../../../utils/dto/paginate.dto';
import { NameDto } from '../../../../utils/dto/params.dto';

export class SerieFindOneDto {
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
}
export class SerieCreateDto {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ type: NameDto })
  name: NameDto;
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

export class SerieFindAllListDto {
  @ApiProperty({ type: PaginateDto })
  pagination: PaginateDto;
  @ApiProperty({ type: SerieFindOneDto, isArray: true })
  list: SerieFindOneDto;
}

export class SerieCreateResDto {
  @ApiProperty({ example: 201 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: SerieCreateDto })
  data: SerieCreateDto;
}

export class SenseFindOneResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: SerieFindOneDto })
  data: SerieFindOneDto;
}

export class SerieFindAllResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: SerieFindAllListDto })
  data: SerieFindAllListDto;
}

export class SerieCreateBodyDto {
  @ApiProperty({ type: NameDto })
  @IsDefined()
  name: NameDto;
  @ApiProperty({ example: [1] })
  @IsDefined()
  movies: number[];
  @ApiProperty({ example: 'AQSH' })
  @IsDefined()
  state: string;
  @ApiProperty({ example: '2024' })
  @IsDefined()
  year: string;
  @ApiProperty({ example: 1 })
  @IsDefined()
  code: number;
  @ApiProperty({ example: 'test' })
  @IsDefined()
  genre: string;
  @ApiProperty({ example: 1 })
  @IsDefined()
  create_admin_id: number;
}

export class SerieUpdateBodyDto {
  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNotEmpty()
  id: number;
  @ApiProperty({ type: NameDto })
  @IsOptional()
  @IsNotEmpty()
  name: NameDto;
  @ApiProperty({ example: [1] })
  @IsOptional()
  @IsNotEmpty()
  movies: number[];
  @ApiProperty({ example: 'AQSH' })
  @IsOptional()
  @IsNotEmpty()
  state: string;
  @ApiProperty({ example: '2024' })
  @IsOptional()
  @IsNotEmpty()
  year: string;
  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNotEmpty()
  code: number;
  @ApiProperty({ example: 'test' })
  @IsOptional()
  @IsNotEmpty()
  genre: string;
  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsNotEmpty()
  create_admin_id: number;
}
