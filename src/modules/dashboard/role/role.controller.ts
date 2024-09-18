import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import {
  ApiBadRequestResponse,
  ApiBearerAuth,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ErrorResourceDto } from '../../../utils/dto/error.dto';
import { User } from '../../auth/decorators/user.decorator';
import { ParamIdNumberDto } from '../../../utils/dto/params.dto';
import { PaginateParamsDto } from '../../../utils/dto/paginate.dto';
import { RoleService } from './role.service';
import {
  RoleCreateBodyDto,
  RoleCreateResDto,
  RoleFindAllResDto,
  RoleFindOneResDto,
} from './dto/role.dto';

@ApiBearerAuth()
@ApiTags('Role')
@Controller({ path: '/role', version: '2' })
export class RoleController {
  constructor(private readonly roleService: RoleService) {}

  @ApiResponse({ status: 201, type: RoleCreateResDto })
  @HttpCode(201)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/create')
  create(@User() user, @Body() payload: RoleCreateBodyDto) {
    if (user.roles.create === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.roleService.create(payload);
  }

  @ApiResponse({ status: 200, type: RoleFindOneResDto })
  @HttpCode(200)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/findOne')
  findOne(@User() user, @Body() payload: ParamIdNumberDto) {
    if (user.roles.getOne === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.roleService.findOne(payload);
  }

  @ApiResponse({ status: 200, type: RoleFindAllResDto })
  @HttpCode(200)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/findAll')
  findAll(@User() user, @Body() payload: PaginateParamsDto) {
    if (user.roles.getAll === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.roleService.findAll(payload);
  }

  @ApiResponse({ status: 204, description: 'no content response' })
  @HttpCode(204)
  @ApiBadRequestResponse({
    status: 403,
    type: ErrorResourceDto,
  })
  @Post('/remove')
  delete(@User() user, @Body() payload: ParamIdNumberDto) {
    if (user.roles.delete === false) {
      throw new HttpException('Forbidden', HttpStatus.FORBIDDEN);
    }
    return this.roleService.delete(payload);
  }
}
