import { ApiProperty } from '@nestjs/swagger';
import { PaginateDto } from '../../../../utils/dto/paginate.dto';

export class StatisticFindOneDto {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 1 })
  watched: number;
  @ApiProperty({ example: 1 })
  exits: number;
  @ApiProperty({ example: 1 })
  not_exited: number;
  @ApiProperty({ example: '2024-09' })
  month: string;
  @ApiProperty({ example: 'bot' })
  type: string;
  @ApiProperty({ example: '2023-01-01 00:00:00' })
  created_at: string;
  @ApiProperty({ example: '2023-01-01 00:00:00' })
  updated_at: string;
  @ApiProperty({ example: 'null' })
  deleted_at: string;
}

export class StatisticFindAllListDto {
  @ApiProperty({ type: PaginateDto })
  pagination: PaginateDto;
  @ApiProperty({ type: StatisticFindOneDto, isArray: true })
  result: StatisticFindOneDto;
}

export class StatisticFindOneResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: StatisticFindOneDto })
  data: StatisticFindOneDto;
}

export class StatisticFindAllResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: StatisticFindAllListDto })
  data: StatisticFindAllListDto;
}
