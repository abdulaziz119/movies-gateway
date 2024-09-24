import { ApiProperty } from '@nestjs/swagger';
import { IsDefined } from 'class-validator';
import { PaginateDto } from '../../../../utils/dto/paginate.dto';

export class UploadsDashboardFindAllResultDto {
  @ApiProperty({ example: 2584592 })
  id: number;

  @ApiProperty({ example: 'uploads/images/1723711986774.jpg' })
  url: string;

  @ApiProperty({ example: '2024-08-14T10:18:57.563Z' })
  created_at: string;

  @ApiProperty({ example: '2024-08-14T10:18:57.563Z' })
  updated_at: string;

  @ApiProperty({ example: 'null' })
  deleted_at: string;
}

export class UploadDashboardCreateResDto {
  @ApiProperty({ type: UploadsDashboardFindAllResultDto })
  result: UploadsDashboardFindAllResultDto;
}

export class UploadDashboardFindAllResDto {
  @ApiProperty({ type: PaginateDto })
  pagination: PaginateDto;
  @ApiProperty({ type: UploadsDashboardFindAllResultDto })
  result: UploadsDashboardFindAllResultDto;
}

export class UploadDashboardFindOneResDto {
  @ApiProperty({ type: UploadsDashboardFindAllResultDto })
  result: UploadsDashboardFindAllResultDto;
}

export class UploadsDashboardGetGreetingResultDto {
  @ApiProperty({ example: 'test' })
  @IsDefined()
  type: string;
}
