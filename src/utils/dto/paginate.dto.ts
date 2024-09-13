import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsEmpty,
  IsNumberString,
  IsOptional,
} from 'class-validator';

export class PaginateDto {
  @ApiProperty({ example: 1 })
  current: number;
  @ApiProperty({ example: 0 })
  previous: number;
  @ApiProperty({ example: 2 })
  next: number;
  @ApiProperty({ example: 10 })
  perPage: number;
  @ApiProperty({ example: 10 })
  totalPage: number;
  @ApiProperty({ example: 128 })
  totalItem: number;
}

export class PaginateOptionalParamsDto {
  @ApiProperty({ example: 1 })
  @IsOptional()
  page: number;
  @ApiProperty({ example: 10, examples: [10, 20, 30, 40, 50] })
  @IsOptional()
  limit: number;
}

export class PaginateParamsDto {
  @ApiProperty({ example: 1 })
  @IsDefined()
  page: number;
  @ApiProperty({ example: 10, examples: [10, 20, 30, 40, 50] })
  @IsDefined()
  limit: number;
}

export class PaginateSearchParamsDto {
  @ApiProperty({ example: 1 })
  @IsDefined()
  page: number;
  @ApiProperty({ example: 10, examples: [10, 20, 30, 40, 50] })
  @IsDefined()
  limit: number;
  @ApiProperty({ example: '1' })
  @IsOptional()
  search: string;
}

export class PaginateRegionParamsDto {
  @ApiProperty({ example: 1 })
  @IsDefined()
  page: number;
  @ApiProperty({ example: 10, examples: [10, 20, 30, 40, 50] })
  @IsDefined()
  limit: number;
  @ApiProperty({ example: 1 })
  @IsOptional()
  region_id: number;
  @ApiProperty({ example: 1 })
  @IsOptional()
  @IsEmpty()
  @IsNumberString()
  search: string;
}

export class PaginateWithCampaignParamsDto {
  @ApiProperty({ example: 1 })
  @IsDefined()
  page: number;
  @ApiProperty({ example: 10, examples: [10, 20, 30, 40, 50] })
  @IsDefined()
  limit: number;

  @ApiProperty({ example: 1 })
  @IsDefined()
  campaign_id: number;
}

export class ParamNullable {}
