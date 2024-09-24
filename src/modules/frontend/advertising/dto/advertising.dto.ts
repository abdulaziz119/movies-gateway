import { ApiProperty } from '@nestjs/swagger';
import { IsDefined } from 'class-validator';
import { PaginateDto } from '../../../../utils/dto/paginate.dto';

export class AdvertisingFindOneDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  create_admin_id: number;

  @ApiProperty({ example: 1 })
  finish: number;

  @ApiProperty({ example: 9 })
  upload_id: number;

  @ApiProperty({ example: 9 })
  seen: number;

  @ApiProperty({ example: '2023-01-01 00:00:00' })
  created_at: string;
  @ApiProperty({ example: '2023-01-01 00:00:00' })
  updated_at: string;
  @ApiProperty({ example: 'null' })
  deleted_at: string;
}

export class AdvertisingCreateDto {
  @ApiProperty({ example: 1 })
  id: number;

  @ApiProperty({ example: 1 })
  create_admin_id: number;

  @ApiProperty({ example: 1 })
  finish: number;

  @ApiProperty({ example: 9 })
  upload_id: number;

  @ApiProperty({ example: 9 })
  seen: number;

  @ApiProperty({ example: '2023-01-01 00:00:00' })
  created_at: string;
  @ApiProperty({ example: '2023-01-01 00:00:00' })
  updated_at: string;
  @ApiProperty({ example: 'null' })
  deleted_at: string;
}

export class AdvertisingFindAllListDto {
  @ApiProperty({ type: PaginateDto })
  pagination: PaginateDto;
  @ApiProperty({ type: AdvertisingFindOneDto, isArray: true })
  list: AdvertisingFindOneDto;
}

export class FrontendAdvertisingFindOneResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: AdvertisingFindOneDto })
  data: AdvertisingFindOneDto;
}

export class FrontendAdvertisingFindAllResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: AdvertisingFindAllListDto })
  data: AdvertisingFindAllListDto;
}

export class AdvertisingCreateBodyDto {
  @ApiProperty({ example: 1 })
  @IsDefined()
  create_admin_id: number;
  @ApiProperty({ example: 1 })
  @IsDefined()
  finish: number;
  @ApiProperty({ example: 9 })
  @IsDefined()
  upload_id: number;
}
