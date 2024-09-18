import { ApiProperty } from '@nestjs/swagger';
import { IsDefined } from 'class-validator';
import { PaginateDto } from '../../../../utils/dto/paginate.dto';

export class PermissionsDto {
  @ApiProperty({ example: true })
  create: boolean;
  @ApiProperty({ example: true })
  getOne: boolean;
  @ApiProperty({ example: true })
  getAll: boolean;
  @ApiProperty({ example: true })
  update: boolean;
  @ApiProperty({ example: true })
  delete: boolean;
}

export class RoleFindOneDto {
  @ApiProperty({ example: 1 })
  id: number;
  @ApiProperty({ type: PermissionsDto })
  admin: PermissionsDto;
  @ApiProperty({ type: PermissionsDto })
  roles: PermissionsDto;
  @ApiProperty({ type: PermissionsDto })
  movies: PermissionsDto;
  @ApiProperty({ type: PermissionsDto })
  series: PermissionsDto;
  @ApiProperty({ type: PermissionsDto })
  statistics: PermissionsDto;
  @ApiProperty({ type: PermissionsDto })
  advertising: PermissionsDto;
  @ApiProperty({ type: PermissionsDto })
  uploads: PermissionsDto;
  @ApiProperty({ example: '2023-01-01 00:00:00' })
  created_at: string;
  @ApiProperty({ example: '2023-01-01 00:00:00' })
  updated_at: string;
  @ApiProperty({ example: 'null' })
  deleted_at: string;
}

export class RoleCreateDto {
  @ApiProperty({ example: 1 })
  admin_id: number;
  @ApiProperty({ type: PermissionsDto })
  admin: PermissionsDto;
  @ApiProperty({ type: PermissionsDto })
  roles: PermissionsDto;
  @ApiProperty({ type: PermissionsDto })
  movies: PermissionsDto;
  @ApiProperty({ type: PermissionsDto })
  series: PermissionsDto;
  @ApiProperty({ type: PermissionsDto })
  statistics: PermissionsDto;
  @ApiProperty({ type: PermissionsDto })
  advertising: PermissionsDto;
  @ApiProperty({ type: PermissionsDto })
  uploads: PermissionsDto;
  @ApiProperty({ example: '2023-01-01 00:00:00' })
  created_at: string;
  @ApiProperty({ example: '2023-01-01 00:00:00' })
  updated_at: string;
  @ApiProperty({ example: 'null' })
  deleted_at: string;
}

export class RoleFindAllListDto {
  @ApiProperty({ type: PaginateDto })
  pagination: PaginateDto;
  @ApiProperty({ type: RoleFindOneDto, isArray: true })
  list: RoleFindOneDto;
}

export class RoleCreateResDto {
  @ApiProperty({ example: 201 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: RoleCreateDto })
  data: RoleCreateDto;
}

export class RoleFindOneResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: RoleFindOneDto })
  data: RoleFindOneDto;
}

export class RoleFindAllResDto {
  @ApiProperty({ example: 200 })
  statusCode: number;
  @ApiProperty({ example: 'OK' })
  statusDescription: string;
  @ApiProperty({ type: RoleFindAllListDto })
  data: RoleFindAllListDto;
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

export class RoleCreateBodyDto {
  @ApiProperty({ example: 1 })
  @IsDefined()
  admin_id: number;
  @ApiProperty({ type: PermissionsBodyDto })
  @IsDefined()
  admin: PermissionsBodyDto;
  @ApiProperty({ type: PermissionsBodyDto })
  @IsDefined()
  roles: PermissionsBodyDto;
  @ApiProperty({ type: PermissionsBodyDto })
  @IsDefined()
  movies: PermissionsBodyDto;
  @ApiProperty({ type: PermissionsBodyDto })
  @IsDefined()
  series: PermissionsBodyDto;
  @ApiProperty({ type: PermissionsBodyDto })
  @IsDefined()
  statistics: PermissionsBodyDto;
  @ApiProperty({ type: PermissionsBodyDto })
  @IsDefined()
  advertising: PermissionsBodyDto;
  @ApiProperty({ type: PermissionsBodyDto })
  @IsDefined()
  uploads: PermissionsBodyDto;
}
