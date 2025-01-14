import { ApiProperty } from '@nestjs/swagger';
import { PaginateDto } from '../../../../utils/dto/paginate.dto';

export class FrontendAdvertisingFindOneDto {
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

export class FrontendAdvertisingFindAllListDto {
  @ApiProperty({ type: PaginateDto })
  pagination: PaginateDto;
  @ApiProperty({ type: FrontendAdvertisingFindOneDto, isArray: true })
  list: FrontendAdvertisingFindOneDto;
}

export class FrontendAdvertisingFindOneResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: FrontendAdvertisingFindOneDto })
  data: FrontendAdvertisingFindOneDto;
}

export class FrontendAdvertisingFindAllResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: FrontendAdvertisingFindAllListDto })
  data: FrontendAdvertisingFindAllListDto;
}
