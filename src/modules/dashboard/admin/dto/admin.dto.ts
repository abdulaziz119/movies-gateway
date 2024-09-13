import { ApiProperty } from '@nestjs/swagger';
import { IsDefined } from 'class-validator';

export class AdminRegisterDto {
  @ApiProperty({ example: 1 })
  user_id: number;
  @ApiProperty({
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InRlc3QxMjEyMUBnbWFpbC5jb20iLCJwYXNzd29yZCI6ImYxYjY4NmRjMjJhMmY1MWZmNTI1ZjE2MzgyMDA5NzhjIiwiaWF0IjoxNzI2MjExMDA4LCJleHAiOjE3MjY4MTU4MDh9.uF6CR3dZfSRIzxDskF5N-kQuxD8_zUkGZLB0FQcCsPM',
  })
  token: string;
}

export class AdminRegisterResDto {
  @ApiProperty({ example: '201' })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: AdminRegisterDto, isArray: true })
  data: AdminRegisterDto;
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
// import { ApiProperty } from '@nestjs/swagger';
// import { IsDefined } from 'class-validator';
// import { PaginateDto } from '../../../utils/dto/paginate.dto';
// import { ImagesDto } from '../../../utils/dto/images.dto';
//
// export class LevelDto {
//   @ApiProperty({ example: 1 })
//   id: number;
//   @ApiProperty({ example: 'Level 1' })
//   name: string;
//   @ApiProperty({ example: 35000 })
//   max_score: number;
//   @ApiProperty({ example: 1000 })
//   balance: number;
//   @ApiProperty({ example: 1 })
//   level: number;
// }
//
// export class LevelPrizeDto {
//   @ApiProperty({ example: 1 })
//   id: number;
//   @ApiProperty({ example: 'SaddleBrown' })
//   name: string;
//   @ApiProperty({ type: ImagesDto })
//   upload: ImagesDto;
//   @ApiProperty({ example: 'paynet' })
//   type: string;
//   @ApiProperty({ example: 1000 })
//   qty: number;
//   @ApiProperty({ example: false })
//   is_unlimited: boolean;
// }
//
// export class LevelPrizeParamsDto {
//   @ApiProperty({ example: 1 })
//   @IsDefined()
//   level_id: number;
//   @ApiProperty({ example: 1 })
//   @IsDefined()
//   page: number;
//   @ApiProperty({ example: 10, examples: [10, 20, 30, 40, 50] })
//   @IsDefined()
//   limit: number;
// }
//
// export class LevelGetPrizeParamsDto {
//   @ApiProperty({ example: 1 })
//   @IsDefined()
//   level_id: number;
// }
//
// export class LevelListResDto {
//   @ApiProperty({ example: '202' })
//   statusCode: number;
//   @ApiProperty({ example: 'Accepted' })
//   statusDescription: string;
//   @ApiProperty({ type: LevelDto, isArray: true })
//   data: LevelDto[];
// }
//
//
// export class LevelWinningDto{
//   @ApiProperty({ example: 1 })
//   id: number;
//   @ApiProperty({ type: LevelDto })
//   level: LevelDto;
//   @ApiProperty({ type: LevelPrizeDto })
//   prize: LevelPrizeDto;
//   @ApiProperty({ example: '2023-01-01 00:00:00' })
//   created_at: string;
//   @ApiProperty({ example: '2023-01-02 00:00:00' })
//   updated_at: string;
// }
//
// export class LevelWinningsResDto {
//   @ApiProperty({ example: '202' })
//   statusCode: number;
//   @ApiProperty({ example: 'Accepted' })
//   statusDescription: string;
//   @ApiProperty({ type: LevelWinningDto, isArray: true })
//   data: LevelWinningDto[];
// }
//
// export class LevelGetPrizeResDto {
//   @ApiProperty({ example: 400 })
//   statusCode: number;
//   @ApiProperty({ example: 'Bad Request' })
//   statusDescription: string;
//   @ApiProperty({ example: 'Insufficient scores' })
//   message: string;
// }
//
// export class LevelPrizeListDataDto {
//   @ApiProperty({ type: PaginateDto })
//   pagination: PaginateDto;
//   @ApiProperty({ type: LevelPrizeDto, isArray: true })
//   list: LevelPrizeDto[];
// }
//
// export class LevelPrizeListResDto {
//   @ApiProperty({ example: 200 })
//   statusCode: number;
//   @ApiProperty({ example: 'Accepted' })
//   statusDescription: string;
//   @ApiProperty({ type: LevelPrizeListDataDto })
//   data: LevelPrizeListDataDto;
// }
