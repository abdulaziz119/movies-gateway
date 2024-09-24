import { ApiProperty } from '@nestjs/swagger';
import { PaginateDto } from '../../../../utils/dto/paginate.dto';

export class BotAdvertisingFindOneDto {
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

export class BotAdvertisingFindAllListDto {
  @ApiProperty({ type: PaginateDto })
  pagination: PaginateDto;
  @ApiProperty({ type: BotAdvertisingFindOneDto, isArray: true })
  list: BotAdvertisingFindOneDto;
}

export class BotAdvertisingFindOneResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: BotAdvertisingFindOneDto })
  data: BotAdvertisingFindOneDto;
}

export class BotAdvertisingFindAllResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: BotAdvertisingFindAllListDto })
  data: BotAdvertisingFindAllListDto;
}
