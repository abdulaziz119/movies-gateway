import { ApiProperty } from '@nestjs/swagger';
import { IsDefined } from 'class-validator';
import { PaginateDto } from '../../../../utils/dto/paginate.dto';

export class AdminRegisterDto {
  @ApiProperty({ example: 1 })
  user_id: number;
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxMjEyMUBnbWFpbC5jb20iLCJwYXNzd29yZCI6ImYxYjY4NmRjMjJhMmY1MWZmNTI1ZjE2MzgyMDA5NzhjIiwiaWF0IjoxNzI2MjExMDA4LCJleHAiOjE3MjY4MTU4MDh9.uF6CR3dZfSRIzxDskF5N-kQuxD8_zUkGZLB0FQcCsPM',
  })
  token: string;
}

export class AdminFindOneDto {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ example: 'test' })
  first_name: string;
  @ApiProperty({ example: 'test' })
  last_name: string;
  @ApiProperty({ example: 1 })
  role_id: number;
  @ApiProperty({ example: 'uz' })
  language: string;
  @ApiProperty({ example: false })
  boss_admin: boolean;
  @ApiProperty({ example: 'test' })
  email: string;
  @ApiProperty({ example: 'test' })
  password: string;
  @ApiProperty({ example: '2023-01-01 00:00:00' })
  created_at: string;
  @ApiProperty({ example: '2023-01-01 00:00:00' })
  updated_at: string;
  @ApiProperty({ example: 'null' })
  deleted_at: string;
}

export class AdminFindAllListDto {
  @ApiProperty({ type: PaginateDto })
  pagination: PaginateDto;
  @ApiProperty({ type: AdminFindOneDto, isArray: true })
  result: AdminFindOneDto;
}

export class AdminRegisterResDto {
  @ApiProperty({ example: 201 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: AdminRegisterDto })
  data: AdminRegisterDto;
}

export class AdminLoginResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: AdminRegisterDto })
  data: AdminRegisterDto;
}

export class AdminFindOneResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: AdminFindOneDto })
  data: AdminFindOneDto;
}

export class AdminFindAllResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: AdminFindAllListDto })
  data: AdminFindAllListDto;
}

export class AdminRegisterBodyDto {
  @ApiProperty({ example: 1 })
  @IsDefined()
  user_id: number;
  @ApiProperty({ example: 'test@gmail.com' })
  @IsDefined()
  email: string;
  @ApiProperty({ example: '123456789' })
  @IsDefined()
  password: string;
  @ApiProperty({ example: 'en' })
  @IsDefined()
  language: string;
  @ApiProperty({ example: 'test' })
  @IsDefined()
  first_name: string;
  @ApiProperty({ example: 'test' })
  @IsDefined()
  last_name: string;
  @ApiProperty({ example: 1 })
  @IsDefined()
  role_id: number;
}

export class AdminLoginBodyDto {
  @ApiProperty({ example: 'test@gmail.com' })
  @IsDefined()
  email: string;
  @ApiProperty({ example: '123456789' })
  @IsDefined()
  password: string;
}